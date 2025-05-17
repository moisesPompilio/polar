import { debug } from 'electron-log';
import { LdkNode, LightningNode, OpenChannelOptions } from 'shared/types';
import { LightningService } from 'types';
import { waitFor } from 'utils/async';
import { toSats } from 'utils/units';
import * as PLN from '../types';
import { getListener, httpPost, removeListener, setupListener } from './ldkApi';

class LdkService implements LightningService {
  async getChannels(node: LightningNode): Promise<PLN.LightningNodeChannel[]> {
    const response = await httpPost<api.IListChannelsResponse>(
      node,
      'ListChannels',
      api.ListChannelsResponse,
    );
    return (response.channels ?? []).map(channel => ({
      pending: !channel.isChannelReady,
      uniqueId: channel.channelId ?? '', // Provide a default empty string
      channelPoint: channel.channelId ?? '',
      pubkey: channel.counterpartyNodeId ?? '',
      capacity: (channel.channelValueSats ?? 0).toString(),
      localBalance: (channel.outboundCapacityMsat ?? 0).toString(),
      remoteBalance: (channel.inboundCapacityMsat ?? 0).toString(),
      status: channel.isChannelReady ? 'Open' : 'Opening',
      isPrivate: !channel.isAnnounced,
    }));
  }
  async getInfo(node: LightningNode): Promise<PLN.LightningNodeInfo> {
    const info = await httpPost<api.IGetNodeInfoResponse>(
      node,
      'GetNodeInfo',
      api.GetNodeInfoResponse,
    );
    return {
      pubkey: info.nodeId,
      alias: '',
      rpcUrl: '',
      syncedToChain: true,
      blockHeight: info.currentBestBlock?.height || 0,
      numActiveChannels: 0,
      numPendingChannels: 0,
      numInactiveChannels: 0,
    };
  }

  async getBalances(node: LightningNode): Promise<PLN.LightningNodeBalances> {
    const balances = await httpPost<api.GetBalancesResponse>(
      node,
      'GetBalances',
      api.GetBalancesResponse,
    );
    return {
      total: toSats(balances.totalLightningBalanceSats || 0),
      confirmed: toSats(balances.totalLightningBalanceSats || 0),
      unconfirmed: '0',
    };
  }

  async getNewAddress(node: LightningNode): Promise<PLN.LightningNodeAddress> {
    const response = await httpPost<api.OnchainReceiveResponse>(
      node,
      'OnchainReceive',
      api.OnchainReceiveResponse,
    );
    return { address: response.address };
  }

  async onchainSend(
    node: LightningNode,
    address: string,
    amount: number,
  ): Promise<string> {
    const body: api.OnchainSendRequest = {
      address,
      amountSats: amount,
      toJSON: () => ({
        address,
        amountSats: amount,
      }),
    };
    const response = await httpPost<api.OnchainSendResponse>(
      node,
      'OnchainSend',
      api.OnchainSendResponse,
      body,
      api.OnchainSendRequest,
    );
    return response.txid;
  }

  async createInvoice(
    node: LightningNode,
    amount: number,
    memo?: string,
  ): Promise<string> {
    const body = api.Bolt11ReceiveRequest.create({
      amountMsat: amount * 1000,
      description: { direct: memo || '' },
      expirySecs: 3600,
    });

    const response = await httpPost<api.Bolt11ReceiveResponse>(
      node,
      'Bolt11Receive',
      api.Bolt11ReceiveResponse,
      body,
      api.Bolt11ReceiveRequest,
    );

    return response.invoice;
  }

  async payInvoice(
    node: LightningNode,
    invoice: string,
    amount?: number,
  ): Promise<PLN.LightningNodePayReceipt> {
    const body: api.Bolt11SendRequest = {
      invoice,
      amountMsat: amount ? amount * 1000 : undefined,
      toJSON: () => ({
        invoice,
        amountMsat: amount ? amount * 1000 : undefined,
      }),
    };
    const response = await httpPost<api.Bolt11SendResponse>(
      node,
      'Bolt11Send',
      api.Bolt11SendResponse,
      body,
      api.Bolt11SendRequest,
    );
    return {
      preimage: response.paymentId,
      amount: amount || 0,
      destination: '',
    };
  }

  async openChannel({
    from,
    toRpcUrl,
    amount,
    isPrivate,
  }: OpenChannelOptions): Promise<PLN.LightningNodeChannelPoint> {
    const [toPubKey] = toRpcUrl.split('@');
    const body: api.OpenChannelRequest = {
      nodePubkey: toPubKey,
      address: toRpcUrl,
      channelAmountSats: Number(amount),
      announceChannel: !isPrivate,
      toJSON: () => ({
        nodePubkey: toPubKey,
        address: '',
        channelAmountSats: Number(amount),
        announceChannel: !isPrivate,
      }),
    };
    const response = await httpPost<api.OpenChannelResponse>(
      from,
      'OpenChannel',
      api.OpenChannelResponse,
      body,
      api.OpenChannelRequest,
    );
    return {
      txid: response.userChannelId,
      index: 0,
    };
  }

  // async listPayments(node: LightningNode): Promise<LDK.Payment[]> {
  //   const response = await httpPost<LDK.ListPaymentsResponse>(node, 'ListPayments');
  //   return response.payments;
  // }

  async decodeInvoice(): Promise<PLN.LightningNodePaymentRequest> {
    throw new Error(`decodeInvoice is not implemented for LDK nodes`);
  }

  /**
   * Helper function to continually query the node until a successful
   * response is received or it times out
   */
  async waitUntilOnline(
    node: LightningNode,
    interval = 3 * 1000, // check every 3 seconds
    timeout = 120 * 1000, // timeout after 120 seconds
  ): Promise<void> {
    return waitFor(
      async () => {
        await this.getInfo(node);
      },
      interval,
      timeout,
    );
  }

  async addListenerToNode(node: LightningNode): Promise<void> {
    setupListener(this.cast(node));
  }

  async removeListener(node: LightningNode): Promise<void> {
    removeListener(this.cast(node));
  }

  async subscribeChannelEvents(
    node: LightningNode,
    callback: (event: PLN.LightningNodeChannelEvent) => void,
  ): Promise<void> {
    const listener = getListener(this.cast(node));
    debug(`LDK API: [stream] ${node.name}: Listening for channel events`);
    // listen for incoming channel messages
    (
      await // listen for incoming channel messages
      listener
    )?.on('message', async (data: any) => {
      const response = JSON.parse(data.toString());
      debug(`LDK API: [stream] ${node.name}`, response);
      switch (response.type) {
        case 'channel-created':
          callback({ type: 'Pending' });
          break;
        case 'channel-opened':
          callback({ type: 'Open' });
          break;
        case 'channel-closed':
          callback({ type: 'Closed' });
          break;
        default:
          callback({ type: 'Unknown' });
          break;
      }
    });
  }

  private cast(node: LightningNode): LdkNode {
    if (node.implementation !== 'LDK')
      throw new Error(`LdkService cannot be used for '${node.implementation}' nodes`);

    return node as LdkNode;
  }

  getPeers!: (node: LightningNode) => Promise<PLN.LightningNodePeer[]>;
  closeChannel!: (node: LightningNode, channelPoint: string) => Promise<any>;
  async connectPeers(): Promise<void> {
    return;
  }
}

export default new LdkService();
