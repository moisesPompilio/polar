import { debug } from 'electron-log';
import { LdkNode, LightningNode } from 'shared/types';
import { httpRequest } from 'shared/utils';
import { io, Socket } from 'socket.io-client';
import { snakeKeysToCamel } from 'utils/objects';

interface ConfigOptions {
  url: string;
}

const request = async <T>(
  node: LightningNode,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  path: string,
  bodyObj?: any,
): Promise<T> => {
  if (node.implementation !== 'LDK')
    throw new Error(`LDKService cannot be used for '${node.implementation}' nodes`);

  const ldk = node as LdkNode;
  const id = Math.round(Math.random() * Date.now());

  const config = await setupConfig(ldk);
  const url = `${config.url}/${path}`;
  const body = bodyObj ? JSON.stringify(bodyObj) : undefined;
  debug(`LDK API: [request] ${ldk.name} ${id} "${url}" ${body || ''}`);

  const response = await httpRequest(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });

  const json = JSON.parse(response);
  debug(`LDK API: [response] ${ldk.name} ${id} ${JSON.stringify(json, null, 2)}`);

  if (json.code && json.message) {
    const { code, message } = json;
    throw new Error(`lightningd ${code}: ${message}`);
  }

  return snakeKeysToCamel(json) as T;
};

export const httpPost = async <T>(
  node: LightningNode,
  path: string,
  responseClass?: { decode: (buffer: Uint8Array) => T },
  body?: any,
  requestClass?: { encode: (message: any) => { finish: () => Uint8Array } },
): Promise<T> => {
  try {
    // Serializa o corpo da requisição, se fornecido
    let requestBody: Uint8Array | undefined;
    if (body && requestClass) {
      requestBody = requestClass.encode(body).finish();
    }

    // Faz a requisição HTTP
    const response = await request<Uint8Array>(node, 'POST', path, requestBody);

    // Verifica se a resposta é válida
    if (!response) {
      throw new Error('Resposta vazia recebida da API');
    }

    // Deserializa a resposta
    const decodedResponse = responseClass
      ? responseClass.decode(new Uint8Array(response))
      : response;

    return decodedResponse as T;
  } catch (err) {
    throw new Error(`Erro no httpPost`);
  }
};

const setupConfig = async (ldk: LdkNode): Promise<ConfigOptions> => {
  const config = {
    url: `http://127.0.0.1:${ldk.ports.rest}`,
    headers: {},
  };
  return config;
};

const listenerCache: {
  [key: number]: Socket;
} = {};

export const getListener = async (node: LdkNode): Promise<Socket> => {
  if (!listenerCache[node.ports.rest]) {
    listenerCache[node.ports.rest] = await setupListener(node);
  }
  return listenerCache[node.ports.rest];
};

export const removeListener = (node: LdkNode): void => {
  if (listenerCache[node.ports.rest]) {
    listenerCache[node.ports.rest].disconnect();
    delete listenerCache[node.ports.rest];
  }
};

export const clearListeners = () => {
  Object.keys(listenerCache).forEach(key => {
    const port = parseInt(key);
    listenerCache[port].disconnect();
    delete listenerCache[port];
  });
};

export const setupListener = async (node: LdkNode): Promise<Socket> => {
  const config = await setupConfig(node);
  listenerCache[node.ports.rest] = listen(config);
  return listenerCache[node.ports.rest];
};

const listen = (options: ConfigOptions): Socket => {
  const { url } = options;
  const socket = io(url);
  return socket;
};
