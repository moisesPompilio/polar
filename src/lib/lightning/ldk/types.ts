export interface GetNodeInfoRequest {}

export interface GetNodeInfoResponse {
  node_id: string;
  current_best_block: BestBlock;
  latest_lightning_wallet_sync_timestamp?: number;
  latest_onchain_wallet_sync_timestamp?: number;
  latest_fee_rate_cache_update_timestamp?: number;
  latest_rgs_snapshot_timestamp?: number;
  latest_node_announcement_broadcast_timestamp?: number;
}

export interface ListPaymentsRequest {
  pageToken?: PageToken;
}

export interface ListPaymentsResponse {
  payments: Payment[];
  nextPageToken?: PageToken;
}

export interface OnchainReceiveRequest {}

export interface OnchainReceiveResponse {
  address: string;
}

export interface OnchainSendRequest {
  address: string;
  amount_sats?: number;
  send_all?: boolean;
  fee_rate_sat_per_vb?: number;
}

export interface OnchainSendResponse {
  txid: string;
}

export interface Bolt11ReceiveRequest {
  amount_msat?: number;
  description?: Bolt11InvoiceDescription;
  expiry_secs: number;
}

export interface Bolt11ReceiveResponse {
  invoice: string;
}

export interface Bolt11SendRequest {
  invoice: string;
  amount_msat?: number;
}

export interface Bolt11SendResponse {
  payment_id: string;
}

export interface Bolt12ReceiveRequest {
  description: string;
  amount_msat?: number;
  expiry_secs?: number;
  quantity?: number;
}

export interface Bolt12ReceiveResponse {
  offer: string;
}

export interface Bolt12SendRequest {
  offer: string;
  amount_msat?: number;
  quantity?: number;
  payer_note?: string;
}

export interface Bolt12SendResponse {
  payment_id: string;
}

export interface OpenChannelRequest {
  node_pubkey: string;
  address: string;
  channel_amount_sats: number;
  push_to_counterparty_msat?: number;
  channel_config?: ChannelConfig;
  announce_channel: boolean;
}

export interface OpenChannelResponse {
  user_channel_id: string;
}

export interface UpdateChannelConfigRequest {
  user_channel_id: string;
  counterparty_node_id: string;
  channel_config: ChannelConfig;
}

export interface UpdateChannelConfigResponse {}

export interface CloseChannelRequest {
  user_channel_id: string;
  counterparty_node_id: string;
  force_close?: boolean;
  force_close_reason?: string;
}

export interface CloseChannelResponse {}

export interface ListChannelsRequest {}

export interface ListChannelsResponse {
  channels: Channel[];
}

export interface GetPaymentDetailsRequest {
  payment_id: string;
}

export interface GetPaymentDetailsResponse {
  payment?: Payment;
}

enum PaymentDirection {
  INBOUND = 0,
  OUTBOUND = 1,
}

enum PaymentStatus {
  PENDING = 0,
  SUCCEEDED = 1,
  FAILED = 2,
}

interface Payment {
  id: string;
  kind: PaymentKind;
  amountMsat?: number;
  direction: PaymentDirection;
  status: PaymentStatus;
  latestUpdateTimestamp: number;
}

type PaymentKind =
  | { onchain: Onchain }
  | { bolt11: Bolt11 }
  | { bolt11Jit: Bolt11Jit }
  | { bolt12Offer: Bolt12Offer }
  | { bolt12Refund: Bolt12Refund }
  | { spontaneous: Spontaneous };

interface Onchain {
  txid: string;
  status: ConfirmationStatus;
}

type ConfirmationStatus = { confirmed: Confirmed } | { unconfirmed: Unconfirmed };

interface Confirmed {
  blockHash: string;
  height: number;
  timestamp: number;
}

interface Unconfirmed {}

interface Bolt11 {
  hash: string;
  preimage?: string;
  secret?: Uint8Array;
}

interface Bolt11Jit extends Bolt11 {
  lspFeeLimits?: LSPFeeLimits;
}

interface Bolt12Offer {
  hash?: string;
  preimage?: string;
  secret?: Uint8Array;
  offerId: string;
  payerNote?: string;
  quantity?: number;
}

interface Bolt12Refund {
  hash?: string;
  preimage?: string;
  secret?: Uint8Array;
  payerNote?: string;
  quantity?: number;
}

interface Spontaneous {
  hash: string;
  preimage?: string;
}

interface LSPFeeLimits {
  maxTotalOpeningFeeMsat?: number;
  maxProportionalOpeningFeePpmMsat?: number;
}

interface Channel {
  channelId: string;
  counterpartyNodeId: string;
  fundingTxo?: OutPoint;
  userChannelId: string;
  channelValueSats: number;
  outboundCapacityMsat: number;
  inboundCapacityMsat: number;
  isOutbound: boolean;
  isChannelReady: boolean;
  isUsable: boolean;
  isAnnounced: boolean;
  channelConfig: ChannelConfig;
}

interface OutPoint {
  txid: string;
  vout: number;
}

interface ChannelConfig {
  forwardingFeeProportionalMillionths?: number;
  forwardingFeeBaseMsat?: number;
  cltvExpiryDelta?: number;
  forceCloseAvoidanceMaxFeeSatoshis?: number;
  acceptUnderpayingHtlcs?: boolean;
  maxDustHtlcExposure?: MaxDustHtlcExposure;
}

type MaxDustHtlcExposure = { fixedLimitMsat: number } | { feeRateMultiplier: number };

interface BestBlock {
  blockHash: string;
  height: number;
}

export interface Bolt11InvoiceDescription {
  kind: Bolt11InvoiceDescriptionKind;
}

export type Bolt11InvoiceDescriptionKind = { direct: string } | { hash: string };

interface PageToken {
  token: string;
  index: number;
}
