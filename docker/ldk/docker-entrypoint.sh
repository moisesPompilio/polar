#!/bin/sh
set -e

# Aguarda o bitcoind inicializar
sleep 1

# Configura permissões de usuário
if ! id ldk > /dev/null 2>&1; then
  USERID=${USERID:-1000}
  GROUPID=${GROUPID:-1000}

  echo "Adicionando usuário ldk ($USERID:$GROUPID)"
  # Cria o grupo com o GID especificado
  addgroup --gid $GROUPID ldk
  # Cria o usuário com o UID especificado e adiciona ao grupo
  adduser --disabled-password --gecos "" --uid $USERID --ingroup ldk ldk
  # Garante a propriedade correta do diretório home
  mkdir -p /home/ldk
  chown -R $USERID:$GROUPID /home/ldk
fi

# Gera o arquivo de configuração dinamicamente
CONFIG_FILE="/app/config.toml"

# Valores padrão
NETWORK="regtest"
LISTENING_ADDRESS="localhost:3001"
REST_SERVICE_ADDRESS="127.0.0.1:3002"
BITCOIND_RPC_ADDRESS="127.0.0.1:18444"
BITCOIND_RPC_USER="polaruser"
BITCOIND_RPC_PASSWORD="polarpass"
STORAGE_DIR_PATH="/tmp/ldk-server/"

# Processa os argumentos passados no comando
while [ $# -gt 0 ]; do
  case "$1" in
    --network=*)
      NETWORK="${1#*=}"
      ;;
    --listening-address=*)
      LISTENING_ADDRESS="${1#*=}"
      ;;
    --rest-service-address=*)
      REST_SERVICE_ADDRESS="${1#*=}"
      ;;
    --bitcoind-rpc-address=*)
      BITCOIND_RPC_ADDRESS="${1#*=}"
      ;;
    --bitcoind-rpc-user=*)
      BITCOIND_RPC_USER="${1#*=}"
      ;;
    --bitcoind-rpc-password=*)
      BITCOIND_RPC_PASSWORD="${1#*=}"
      ;;
    --storage-dir-path=*)
      STORAGE_DIR_PATH="${1#*=}"
      ;;
    *)
      break
      ;;
  esac
  shift
done

# Gera o arquivo de configuração dinamicamente
cat > "$CONFIG_FILE" <<- EOF
# Lightning node settings
[node]
network = "$NETWORK"                   # Bitcoin network to use
listening_address = "$LISTENING_ADDRESS"  # Lightning node listening address
rest_service_address = "$REST_SERVICE_ADDRESS" # LDK Server REST address

# Storage settings
[storage.disk]
dir_path = "/tmp/ldk-server/" # Path for LDK and BDK data persistence

# Bitcoin Core settings
[bitcoind]
rpc_address = "$BITCOIND_RPC_ADDRESS" # RPC endpoint
rpc_user = "$BITCOIND_RPC_USER"          # RPC username
rpc_password = "$BITCOIND_RPC_PASSWORD"      # RPC password
EOF

echo "Arquivo de configuração gerado em: $CONFIG_FILE"
cat "$CONFIG_FILE"

# Processa argumentos de inicialização
if [ "$1" = "ldk-server" ]; then
  echo "Iniciando o LDK Server com os argumentos: $@"
  exec su-exec ldk "$@"
fi

# Executa qualquer outro comando fornecido
echo "Executando comando: $@"
exec "$@"