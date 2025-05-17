import * as $protobuf from 'protobufjs';
/** Namespace api. */
declare namespace api {
  /** Properties of a GetNodeInfoRequest. */
  interface IGetNodeInfoRequest {}

  /** Represents a GetNodeInfoRequest. */
  class GetNodeInfoRequest implements IGetNodeInfoRequest {
    /**
     * Constructs a new GetNodeInfoRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IGetNodeInfoRequest);

    /**
     * Creates a new GetNodeInfoRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetNodeInfoRequest instance
     */
    public static create(properties?: api.IGetNodeInfoRequest): api.GetNodeInfoRequest;

    /**
     * Encodes the specified GetNodeInfoRequest message. Does not implicitly {@link api.GetNodeInfoRequest.verify|verify} messages.
     * @param message GetNodeInfoRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IGetNodeInfoRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetNodeInfoRequest message, length delimited. Does not implicitly {@link api.GetNodeInfoRequest.verify|verify} messages.
     * @param message GetNodeInfoRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IGetNodeInfoRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a GetNodeInfoRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetNodeInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.GetNodeInfoRequest;

    /**
     * Decodes a GetNodeInfoRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetNodeInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.GetNodeInfoRequest;

    /**
     * Verifies a GetNodeInfoRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetNodeInfoRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetNodeInfoRequest
     */
    public static fromObject(object: { [k: string]: any }): api.GetNodeInfoRequest;

    /**
     * Creates a plain object from a GetNodeInfoRequest message. Also converts values to other types if specified.
     * @param message GetNodeInfoRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.GetNodeInfoRequest,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this GetNodeInfoRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetNodeInfoRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a GetNodeInfoResponse. */
  interface IGetNodeInfoResponse {
    /** GetNodeInfoResponse nodeId */
    nodeId: string;

    /** GetNodeInfoResponse currentBestBlock */
    currentBestBlock?: types_ldk.IBestBlock | null;

    /** GetNodeInfoResponse latestLightningWalletSyncTimestamp */
    latestLightningWalletSyncTimestamp?: number | null;

    /** GetNodeInfoResponse latestOnchainWalletSyncTimestamp */
    latestOnchainWalletSyncTimestamp?: number | null;

    /** GetNodeInfoResponse latestFeeRateCacheUpdateTimestamp */
    latestFeeRateCacheUpdateTimestamp?: number | null;

    /** GetNodeInfoResponse latestRgsSnapshotTimestamp */
    latestRgsSnapshotTimestamp?: number | null;

    /** GetNodeInfoResponse latestNodeAnnouncementBroadcastTimestamp */
    latestNodeAnnouncementBroadcastTimestamp?: number | null;
  }

  /** Represents a GetNodeInfoResponse. */
  class GetNodeInfoResponse implements IGetNodeInfoResponse {
    /**
     * Constructs a new GetNodeInfoResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IGetNodeInfoResponse);

    /** GetNodeInfoResponse nodeId. */
    public nodeId: string;

    /** GetNodeInfoResponse currentBestBlock. */
    public currentBestBlock?: types_ldk.IBestBlock | null;

    /** GetNodeInfoResponse latestLightningWalletSyncTimestamp. */
    public latestLightningWalletSyncTimestamp?: number | null;

    /** GetNodeInfoResponse latestOnchainWalletSyncTimestamp. */
    public latestOnchainWalletSyncTimestamp?: number | null;

    /** GetNodeInfoResponse latestFeeRateCacheUpdateTimestamp. */
    public latestFeeRateCacheUpdateTimestamp?: number | null;

    /** GetNodeInfoResponse latestRgsSnapshotTimestamp. */
    public latestRgsSnapshotTimestamp?: number | null;

    /** GetNodeInfoResponse latestNodeAnnouncementBroadcastTimestamp. */
    public latestNodeAnnouncementBroadcastTimestamp?: number | null;

    /** GetNodeInfoResponse _latestLightningWalletSyncTimestamp. */
    public _latestLightningWalletSyncTimestamp?: 'latestLightningWalletSyncTimestamp';

    /** GetNodeInfoResponse _latestOnchainWalletSyncTimestamp. */
    public _latestOnchainWalletSyncTimestamp?: 'latestOnchainWalletSyncTimestamp';

    /** GetNodeInfoResponse _latestFeeRateCacheUpdateTimestamp. */
    public _latestFeeRateCacheUpdateTimestamp?: 'latestFeeRateCacheUpdateTimestamp';

    /** GetNodeInfoResponse _latestRgsSnapshotTimestamp. */
    public _latestRgsSnapshotTimestamp?: 'latestRgsSnapshotTimestamp';

    /** GetNodeInfoResponse _latestNodeAnnouncementBroadcastTimestamp. */
    public _latestNodeAnnouncementBroadcastTimestamp?: 'latestNodeAnnouncementBroadcastTimestamp';

    /**
     * Creates a new GetNodeInfoResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetNodeInfoResponse instance
     */
    public static create(properties?: api.IGetNodeInfoResponse): api.GetNodeInfoResponse;

    /**
     * Encodes the specified GetNodeInfoResponse message. Does not implicitly {@link api.GetNodeInfoResponse.verify|verify} messages.
     * @param message GetNodeInfoResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IGetNodeInfoResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetNodeInfoResponse message, length delimited. Does not implicitly {@link api.GetNodeInfoResponse.verify|verify} messages.
     * @param message GetNodeInfoResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IGetNodeInfoResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a GetNodeInfoResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetNodeInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.GetNodeInfoResponse;

    /**
     * Decodes a GetNodeInfoResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetNodeInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.GetNodeInfoResponse;

    /**
     * Verifies a GetNodeInfoResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetNodeInfoResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetNodeInfoResponse
     */
    public static fromObject(object: { [k: string]: any }): api.GetNodeInfoResponse;

    /**
     * Creates a plain object from a GetNodeInfoResponse message. Also converts values to other types if specified.
     * @param message GetNodeInfoResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.GetNodeInfoResponse,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this GetNodeInfoResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetNodeInfoResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of an OnchainReceiveRequest. */
  interface IOnchainReceiveRequest {}

  /** Represents an OnchainReceiveRequest. */
  class OnchainReceiveRequest implements IOnchainReceiveRequest {
    /**
     * Constructs a new OnchainReceiveRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IOnchainReceiveRequest);

    /**
     * Creates a new OnchainReceiveRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OnchainReceiveRequest instance
     */
    public static create(
      properties?: api.IOnchainReceiveRequest,
    ): api.OnchainReceiveRequest;

    /**
     * Encodes the specified OnchainReceiveRequest message. Does not implicitly {@link api.OnchainReceiveRequest.verify|verify} messages.
     * @param message OnchainReceiveRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IOnchainReceiveRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified OnchainReceiveRequest message, length delimited. Does not implicitly {@link api.OnchainReceiveRequest.verify|verify} messages.
     * @param message OnchainReceiveRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IOnchainReceiveRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes an OnchainReceiveRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OnchainReceiveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.OnchainReceiveRequest;

    /**
     * Decodes an OnchainReceiveRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OnchainReceiveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.OnchainReceiveRequest;

    /**
     * Verifies an OnchainReceiveRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an OnchainReceiveRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OnchainReceiveRequest
     */
    public static fromObject(object: { [k: string]: any }): api.OnchainReceiveRequest;

    /**
     * Creates a plain object from an OnchainReceiveRequest message. Also converts values to other types if specified.
     * @param message OnchainReceiveRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.OnchainReceiveRequest,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this OnchainReceiveRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for OnchainReceiveRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of an OnchainReceiveResponse. */
  interface IOnchainReceiveResponse {
    /** OnchainReceiveResponse address */
    address?: string;
  }

  /** Represents an OnchainReceiveResponse. */
  class OnchainReceiveResponse implements IOnchainReceiveResponse {
    /**
     * Constructs a new OnchainReceiveResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IOnchainReceiveResponse);

    /** OnchainReceiveResponse address. */
    public address: string;

    /**
     * Creates a new OnchainReceiveResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OnchainReceiveResponse instance
     */
    public static create(
      properties?: api.IOnchainReceiveResponse,
    ): api.OnchainReceiveResponse;

    /**
     * Encodes the specified OnchainReceiveResponse message. Does not implicitly {@link api.OnchainReceiveResponse.verify|verify} messages.
     * @param message OnchainReceiveResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IOnchainReceiveResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified OnchainReceiveResponse message, length delimited. Does not implicitly {@link api.OnchainReceiveResponse.verify|verify} messages.
     * @param message OnchainReceiveResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IOnchainReceiveResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes an OnchainReceiveResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OnchainReceiveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.OnchainReceiveResponse;

    /**
     * Decodes an OnchainReceiveResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OnchainReceiveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.OnchainReceiveResponse;

    /**
     * Verifies an OnchainReceiveResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an OnchainReceiveResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OnchainReceiveResponse
     */
    public static fromObject(object: { [k: string]: any }): api.OnchainReceiveResponse;

    /**
     * Creates a plain object from an OnchainReceiveResponse message. Also converts values to other types if specified.
     * @param message OnchainReceiveResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.OnchainReceiveResponse,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this OnchainReceiveResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for OnchainReceiveResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of an OnchainSendRequest. */
  interface IOnchainSendRequest {
    /** OnchainSendRequest address */
    address?: string | null;

    /** OnchainSendRequest amountSats */
    amountSats?: number | null;

    /** OnchainSendRequest sendAll */
    sendAll?: boolean | null;

    /** OnchainSendRequest feeRateSatPerVb */
    feeRateSatPerVb?: number | null;
  }

  /** Represents an OnchainSendRequest. */
  class OnchainSendRequest implements IOnchainSendRequest {
    /**
     * Constructs a new OnchainSendRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IOnchainSendRequest);

    /** OnchainSendRequest address. */
    public address: string;

    /** OnchainSendRequest amountSats. */
    public amountSats?: number | null;

    /** OnchainSendRequest sendAll. */
    public sendAll?: boolean | null;

    /** OnchainSendRequest feeRateSatPerVb. */
    public feeRateSatPerVb?: number | null;

    /** OnchainSendRequest _amountSats. */
    public _amountSats?: 'amountSats';

    /** OnchainSendRequest _sendAll. */
    public _sendAll?: 'sendAll';

    /** OnchainSendRequest _feeRateSatPerVb. */
    public _feeRateSatPerVb?: 'feeRateSatPerVb';

    /**
     * Creates a new OnchainSendRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OnchainSendRequest instance
     */
    public static create(properties?: api.IOnchainSendRequest): api.OnchainSendRequest;

    /**
     * Encodes the specified OnchainSendRequest message. Does not implicitly {@link api.OnchainSendRequest.verify|verify} messages.
     * @param message OnchainSendRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IOnchainSendRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified OnchainSendRequest message, length delimited. Does not implicitly {@link api.OnchainSendRequest.verify|verify} messages.
     * @param message OnchainSendRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IOnchainSendRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes an OnchainSendRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OnchainSendRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.OnchainSendRequest;

    /**
     * Decodes an OnchainSendRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OnchainSendRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.OnchainSendRequest;

    /**
     * Verifies an OnchainSendRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an OnchainSendRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OnchainSendRequest
     */
    public static fromObject(object: { [k: string]: any }): api.OnchainSendRequest;

    /**
     * Creates a plain object from an OnchainSendRequest message. Also converts values to other types if specified.
     * @param message OnchainSendRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.OnchainSendRequest,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this OnchainSendRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for OnchainSendRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of an OnchainSendResponse. */
  interface IOnchainSendResponse {
    /** OnchainSendResponse txid */
    txid: string;
  }

  /** Represents an OnchainSendResponse. */
  class OnchainSendResponse implements IOnchainSendResponse {
    /**
     * Constructs a new OnchainSendResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IOnchainSendResponse);

    /** OnchainSendResponse txid. */
    public txid: string;

    /**
     * Creates a new OnchainSendResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OnchainSendResponse instance
     */
    public static create(properties?: api.IOnchainSendResponse): api.OnchainSendResponse;

    /**
     * Encodes the specified OnchainSendResponse message. Does not implicitly {@link api.OnchainSendResponse.verify|verify} messages.
     * @param message OnchainSendResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IOnchainSendResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified OnchainSendResponse message, length delimited. Does not implicitly {@link api.OnchainSendResponse.verify|verify} messages.
     * @param message OnchainSendResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IOnchainSendResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes an OnchainSendResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OnchainSendResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.OnchainSendResponse;

    /**
     * Decodes an OnchainSendResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OnchainSendResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.OnchainSendResponse;

    /**
     * Verifies an OnchainSendResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an OnchainSendResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OnchainSendResponse
     */
    public static fromObject(object: { [k: string]: any }): api.OnchainSendResponse;

    /**
     * Creates a plain object from an OnchainSendResponse message. Also converts values to other types if specified.
     * @param message OnchainSendResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.OnchainSendResponse,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this OnchainSendResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for OnchainSendResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Bolt11ReceiveRequest. */
  interface IBolt11ReceiveRequest {
    /** Bolt11ReceiveRequest amountMsat */
    amountMsat?: number | null;

    /** Bolt11ReceiveRequest description */
    description?: types_ldk.IBolt11InvoiceDescription | null;

    /** Bolt11ReceiveRequest expirySecs */
    expirySecs?: number | null;
  }

  /** Represents a Bolt11ReceiveRequest. */
  class Bolt11ReceiveRequest implements IBolt11ReceiveRequest {
    /**
     * Constructs a new Bolt11ReceiveRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IBolt11ReceiveRequest);

    /** Bolt11ReceiveRequest amountMsat. */
    public amountMsat?: number | null;

    /** Bolt11ReceiveRequest description. */
    public description?: types_ldk.IBolt11InvoiceDescription | null;

    /** Bolt11ReceiveRequest expirySecs. */
    public expirySecs: number;

    /** Bolt11ReceiveRequest _amountMsat. */
    public _amountMsat?: 'amountMsat';

    /**
     * Creates a new Bolt11ReceiveRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bolt11ReceiveRequest instance
     */
    public static create(
      properties?: api.IBolt11ReceiveRequest,
    ): api.Bolt11ReceiveRequest;

    /**
     * Encodes the specified Bolt11ReceiveRequest message. Does not implicitly {@link api.Bolt11ReceiveRequest.verify|verify} messages.
     * @param message Bolt11ReceiveRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IBolt11ReceiveRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Bolt11ReceiveRequest message, length delimited. Does not implicitly {@link api.Bolt11ReceiveRequest.verify|verify} messages.
     * @param message Bolt11ReceiveRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IBolt11ReceiveRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a Bolt11ReceiveRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bolt11ReceiveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.Bolt11ReceiveRequest;

    /**
     * Decodes a Bolt11ReceiveRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Bolt11ReceiveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.Bolt11ReceiveRequest;

    /**
     * Verifies a Bolt11ReceiveRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Bolt11ReceiveRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Bolt11ReceiveRequest
     */
    public static fromObject(object: { [k: string]: any }): api.Bolt11ReceiveRequest;

    /**
     * Creates a plain object from a Bolt11ReceiveRequest message. Also converts values to other types if specified.
     * @param message Bolt11ReceiveRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.Bolt11ReceiveRequest,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Bolt11ReceiveRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Bolt11ReceiveRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Bolt11ReceiveResponse. */
  interface IBolt11ReceiveResponse {
    /** Bolt11ReceiveResponse invoice */
    invoice: string;
  }

  /** Represents a Bolt11ReceiveResponse. */
  class Bolt11ReceiveResponse implements IBolt11ReceiveResponse {
    /**
     * Constructs a new Bolt11ReceiveResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IBolt11ReceiveResponse);

    /** Bolt11ReceiveResponse invoice. */
    public invoice: string;

    /**
     * Creates a new Bolt11ReceiveResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bolt11ReceiveResponse instance
     */
    public static create(
      properties?: api.IBolt11ReceiveResponse,
    ): api.Bolt11ReceiveResponse;

    /**
     * Encodes the specified Bolt11ReceiveResponse message. Does not implicitly {@link api.Bolt11ReceiveResponse.verify|verify} messages.
     * @param message Bolt11ReceiveResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IBolt11ReceiveResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Bolt11ReceiveResponse message, length delimited. Does not implicitly {@link api.Bolt11ReceiveResponse.verify|verify} messages.
     * @param message Bolt11ReceiveResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IBolt11ReceiveResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a Bolt11ReceiveResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bolt11ReceiveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.Bolt11ReceiveResponse;

    /**
     * Decodes a Bolt11ReceiveResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Bolt11ReceiveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.Bolt11ReceiveResponse;

    /**
     * Verifies a Bolt11ReceiveResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Bolt11ReceiveResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Bolt11ReceiveResponse
     */
    public static fromObject(object: { [k: string]: any }): api.Bolt11ReceiveResponse;

    /**
     * Creates a plain object from a Bolt11ReceiveResponse message. Also converts values to other types if specified.
     * @param message Bolt11ReceiveResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.Bolt11ReceiveResponse,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Bolt11ReceiveResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Bolt11ReceiveResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Bolt11SendRequest. */
  interface IBolt11SendRequest {
    /** Bolt11SendRequest invoice */
    invoice?: string | null;

    /** Bolt11SendRequest amountMsat */
    amountMsat?: number | null;
  }

  /** Represents a Bolt11SendRequest. */
  class Bolt11SendRequest implements IBolt11SendRequest {
    /**
     * Constructs a new Bolt11SendRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IBolt11SendRequest);

    /** Bolt11SendRequest invoice. */
    public invoice: string;

    /** Bolt11SendRequest amountMsat. */
    public amountMsat?: number | null;

    /** Bolt11SendRequest _amountMsat. */
    public _amountMsat?: 'amountMsat';

    /**
     * Creates a new Bolt11SendRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bolt11SendRequest instance
     */
    public static create(properties?: api.IBolt11SendRequest): api.Bolt11SendRequest;

    /**
     * Encodes the specified Bolt11SendRequest message. Does not implicitly {@link api.Bolt11SendRequest.verify|verify} messages.
     * @param message Bolt11SendRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IBolt11SendRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Bolt11SendRequest message, length delimited. Does not implicitly {@link api.Bolt11SendRequest.verify|verify} messages.
     * @param message Bolt11SendRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IBolt11SendRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a Bolt11SendRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bolt11SendRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.Bolt11SendRequest;

    /**
     * Decodes a Bolt11SendRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Bolt11SendRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.Bolt11SendRequest;

    /**
     * Verifies a Bolt11SendRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Bolt11SendRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Bolt11SendRequest
     */
    public static fromObject(object: { [k: string]: any }): api.Bolt11SendRequest;

    /**
     * Creates a plain object from a Bolt11SendRequest message. Also converts values to other types if specified.
     * @param message Bolt11SendRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.Bolt11SendRequest,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Bolt11SendRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Bolt11SendRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Bolt11SendResponse. */
  interface IBolt11SendResponse {
    /** Bolt11SendResponse paymentId */
    paymentId?: string | null;
  }

  /** Represents a Bolt11SendResponse. */
  class Bolt11SendResponse implements IBolt11SendResponse {
    /**
     * Constructs a new Bolt11SendResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IBolt11SendResponse);

    /** Bolt11SendResponse paymentId. */
    public paymentId: string;

    /**
     * Creates a new Bolt11SendResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bolt11SendResponse instance
     */
    public static create(properties?: api.IBolt11SendResponse): api.Bolt11SendResponse;

    /**
     * Encodes the specified Bolt11SendResponse message. Does not implicitly {@link api.Bolt11SendResponse.verify|verify} messages.
     * @param message Bolt11SendResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IBolt11SendResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Bolt11SendResponse message, length delimited. Does not implicitly {@link api.Bolt11SendResponse.verify|verify} messages.
     * @param message Bolt11SendResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IBolt11SendResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a Bolt11SendResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bolt11SendResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.Bolt11SendResponse;

    /**
     * Decodes a Bolt11SendResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Bolt11SendResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.Bolt11SendResponse;

    /**
     * Verifies a Bolt11SendResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Bolt11SendResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Bolt11SendResponse
     */
    public static fromObject(object: { [k: string]: any }): api.Bolt11SendResponse;

    /**
     * Creates a plain object from a Bolt11SendResponse message. Also converts values to other types if specified.
     * @param message Bolt11SendResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.Bolt11SendResponse,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Bolt11SendResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Bolt11SendResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Bolt12ReceiveRequest. */
  interface IBolt12ReceiveRequest {
    /** Bolt12ReceiveRequest description */
    description?: string | null;

    /** Bolt12ReceiveRequest amountMsat */
    amountMsat?: number | null;

    /** Bolt12ReceiveRequest expirySecs */
    expirySecs?: number | null;

    /** Bolt12ReceiveRequest quantity */
    quantity?: number | null;
  }

  /** Represents a Bolt12ReceiveRequest. */
  class Bolt12ReceiveRequest implements IBolt12ReceiveRequest {
    /**
     * Constructs a new Bolt12ReceiveRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IBolt12ReceiveRequest);

    /** Bolt12ReceiveRequest description. */
    public description: string;

    /** Bolt12ReceiveRequest amountMsat. */
    public amountMsat?: number | null;

    /** Bolt12ReceiveRequest expirySecs. */
    public expirySecs?: number | null;

    /** Bolt12ReceiveRequest quantity. */
    public quantity?: number | null;

    /** Bolt12ReceiveRequest _amountMsat. */
    public _amountMsat?: 'amountMsat';

    /** Bolt12ReceiveRequest _expirySecs. */
    public _expirySecs?: 'expirySecs';

    /** Bolt12ReceiveRequest _quantity. */
    public _quantity?: 'quantity';

    /**
     * Creates a new Bolt12ReceiveRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bolt12ReceiveRequest instance
     */
    public static create(
      properties?: api.IBolt12ReceiveRequest,
    ): api.Bolt12ReceiveRequest;

    /**
     * Encodes the specified Bolt12ReceiveRequest message. Does not implicitly {@link api.Bolt12ReceiveRequest.verify|verify} messages.
     * @param message Bolt12ReceiveRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IBolt12ReceiveRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Bolt12ReceiveRequest message, length delimited. Does not implicitly {@link api.Bolt12ReceiveRequest.verify|verify} messages.
     * @param message Bolt12ReceiveRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IBolt12ReceiveRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a Bolt12ReceiveRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bolt12ReceiveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.Bolt12ReceiveRequest;

    /**
     * Decodes a Bolt12ReceiveRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Bolt12ReceiveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.Bolt12ReceiveRequest;

    /**
     * Verifies a Bolt12ReceiveRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Bolt12ReceiveRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Bolt12ReceiveRequest
     */
    public static fromObject(object: { [k: string]: any }): api.Bolt12ReceiveRequest;

    /**
     * Creates a plain object from a Bolt12ReceiveRequest message. Also converts values to other types if specified.
     * @param message Bolt12ReceiveRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.Bolt12ReceiveRequest,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Bolt12ReceiveRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Bolt12ReceiveRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Bolt12ReceiveResponse. */
  interface IBolt12ReceiveResponse {
    /** Bolt12ReceiveResponse offer */
    offer?: string | null;
  }

  /** Represents a Bolt12ReceiveResponse. */
  class Bolt12ReceiveResponse implements IBolt12ReceiveResponse {
    /**
     * Constructs a new Bolt12ReceiveResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IBolt12ReceiveResponse);

    /** Bolt12ReceiveResponse offer. */
    public offer: string;

    /**
     * Creates a new Bolt12ReceiveResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bolt12ReceiveResponse instance
     */
    public static create(
      properties?: api.IBolt12ReceiveResponse,
    ): api.Bolt12ReceiveResponse;

    /**
     * Encodes the specified Bolt12ReceiveResponse message. Does not implicitly {@link api.Bolt12ReceiveResponse.verify|verify} messages.
     * @param message Bolt12ReceiveResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IBolt12ReceiveResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Bolt12ReceiveResponse message, length delimited. Does not implicitly {@link api.Bolt12ReceiveResponse.verify|verify} messages.
     * @param message Bolt12ReceiveResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IBolt12ReceiveResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a Bolt12ReceiveResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bolt12ReceiveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.Bolt12ReceiveResponse;

    /**
     * Decodes a Bolt12ReceiveResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Bolt12ReceiveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.Bolt12ReceiveResponse;

    /**
     * Verifies a Bolt12ReceiveResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Bolt12ReceiveResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Bolt12ReceiveResponse
     */
    public static fromObject(object: { [k: string]: any }): api.Bolt12ReceiveResponse;

    /**
     * Creates a plain object from a Bolt12ReceiveResponse message. Also converts values to other types if specified.
     * @param message Bolt12ReceiveResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.Bolt12ReceiveResponse,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Bolt12ReceiveResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Bolt12ReceiveResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Bolt12SendRequest. */
  interface IBolt12SendRequest {
    /** Bolt12SendRequest offer */
    offer?: string | null;

    /** Bolt12SendRequest amountMsat */
    amountMsat?: number | null;

    /** Bolt12SendRequest quantity */
    quantity?: number | null;

    /** Bolt12SendRequest payerNote */
    payerNote?: string | null;
  }

  /** Represents a Bolt12SendRequest. */
  class Bolt12SendRequest implements IBolt12SendRequest {
    /**
     * Constructs a new Bolt12SendRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IBolt12SendRequest);

    /** Bolt12SendRequest offer. */
    public offer: string;

    /** Bolt12SendRequest amountMsat. */
    public amountMsat?: number | null;

    /** Bolt12SendRequest quantity. */
    public quantity?: number | null;

    /** Bolt12SendRequest payerNote. */
    public payerNote?: string | null;

    /** Bolt12SendRequest _amountMsat. */
    public _amountMsat?: 'amountMsat';

    /** Bolt12SendRequest _quantity. */
    public _quantity?: 'quantity';

    /** Bolt12SendRequest _payerNote. */
    public _payerNote?: 'payerNote';

    /**
     * Creates a new Bolt12SendRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bolt12SendRequest instance
     */
    public static create(properties?: api.IBolt12SendRequest): api.Bolt12SendRequest;

    /**
     * Encodes the specified Bolt12SendRequest message. Does not implicitly {@link api.Bolt12SendRequest.verify|verify} messages.
     * @param message Bolt12SendRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IBolt12SendRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Bolt12SendRequest message, length delimited. Does not implicitly {@link api.Bolt12SendRequest.verify|verify} messages.
     * @param message Bolt12SendRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IBolt12SendRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a Bolt12SendRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bolt12SendRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.Bolt12SendRequest;

    /**
     * Decodes a Bolt12SendRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Bolt12SendRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.Bolt12SendRequest;

    /**
     * Verifies a Bolt12SendRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Bolt12SendRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Bolt12SendRequest
     */
    public static fromObject(object: { [k: string]: any }): api.Bolt12SendRequest;

    /**
     * Creates a plain object from a Bolt12SendRequest message. Also converts values to other types if specified.
     * @param message Bolt12SendRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.Bolt12SendRequest,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Bolt12SendRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Bolt12SendRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Bolt12SendResponse. */
  interface IBolt12SendResponse {
    /** Bolt12SendResponse paymentId */
    paymentId?: string | null;
  }

  /** Represents a Bolt12SendResponse. */
  class Bolt12SendResponse implements IBolt12SendResponse {
    /**
     * Constructs a new Bolt12SendResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IBolt12SendResponse);

    /** Bolt12SendResponse paymentId. */
    public paymentId: string;

    /**
     * Creates a new Bolt12SendResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bolt12SendResponse instance
     */
    public static create(properties?: api.IBolt12SendResponse): api.Bolt12SendResponse;

    /**
     * Encodes the specified Bolt12SendResponse message. Does not implicitly {@link api.Bolt12SendResponse.verify|verify} messages.
     * @param message Bolt12SendResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IBolt12SendResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Bolt12SendResponse message, length delimited. Does not implicitly {@link api.Bolt12SendResponse.verify|verify} messages.
     * @param message Bolt12SendResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IBolt12SendResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a Bolt12SendResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bolt12SendResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.Bolt12SendResponse;

    /**
     * Decodes a Bolt12SendResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Bolt12SendResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.Bolt12SendResponse;

    /**
     * Verifies a Bolt12SendResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Bolt12SendResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Bolt12SendResponse
     */
    public static fromObject(object: { [k: string]: any }): api.Bolt12SendResponse;

    /**
     * Creates a plain object from a Bolt12SendResponse message. Also converts values to other types if specified.
     * @param message Bolt12SendResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.Bolt12SendResponse,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Bolt12SendResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Bolt12SendResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of an OpenChannelRequest. */
  interface IOpenChannelRequest {
    /** OpenChannelRequest nodePubkey */
    nodePubkey?: string | null;

    /** OpenChannelRequest address */
    address?: string | null;

    /** OpenChannelRequest channelAmountSats */
    channelAmountSats?: number | null;

    /** OpenChannelRequest pushToCounterpartyMsat */
    pushToCounterpartyMsat?: number | null;

    /** OpenChannelRequest channelConfig */
    channelConfig?: types_ldk.IChannelConfig | null;

    /** OpenChannelRequest announceChannel */
    announceChannel?: boolean | null;
  }

  /** Represents an OpenChannelRequest. */
  class OpenChannelRequest implements IOpenChannelRequest {
    /**
     * Constructs a new OpenChannelRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IOpenChannelRequest);

    /** OpenChannelRequest nodePubkey. */
    public nodePubkey: string;

    /** OpenChannelRequest address. */
    public address: string;

    /** OpenChannelRequest channelAmountSats. */
    public channelAmountSats: number;

    /** OpenChannelRequest pushToCounterpartyMsat. */
    public pushToCounterpartyMsat?: number | null;

    /** OpenChannelRequest channelConfig. */
    public channelConfig?: types_ldk.IChannelConfig | null;

    /** OpenChannelRequest announceChannel. */
    public announceChannel: boolean;

    /** OpenChannelRequest _pushToCounterpartyMsat. */
    public _pushToCounterpartyMsat?: 'pushToCounterpartyMsat';

    /** OpenChannelRequest _channelConfig. */
    public _channelConfig?: 'channelConfig';

    /**
     * Creates a new OpenChannelRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OpenChannelRequest instance
     */
    public static create(properties?: api.IOpenChannelRequest): api.OpenChannelRequest;

    /**
     * Encodes the specified OpenChannelRequest message. Does not implicitly {@link api.OpenChannelRequest.verify|verify} messages.
     * @param message OpenChannelRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IOpenChannelRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified OpenChannelRequest message, length delimited. Does not implicitly {@link api.OpenChannelRequest.verify|verify} messages.
     * @param message OpenChannelRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IOpenChannelRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes an OpenChannelRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OpenChannelRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.OpenChannelRequest;

    /**
     * Decodes an OpenChannelRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OpenChannelRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.OpenChannelRequest;

    /**
     * Verifies an OpenChannelRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an OpenChannelRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OpenChannelRequest
     */
    public static fromObject(object: { [k: string]: any }): api.OpenChannelRequest;

    /**
     * Creates a plain object from an OpenChannelRequest message. Also converts values to other types if specified.
     * @param message OpenChannelRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.OpenChannelRequest,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this OpenChannelRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for OpenChannelRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of an OpenChannelResponse. */
  interface IOpenChannelResponse {
    /** OpenChannelResponse userChannelId */
    userChannelId?: string | null;
  }

  /** Represents an OpenChannelResponse. */
  class OpenChannelResponse implements IOpenChannelResponse {
    /**
     * Constructs a new OpenChannelResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IOpenChannelResponse);

    /** OpenChannelResponse userChannelId. */
    public userChannelId: string;

    /**
     * Creates a new OpenChannelResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OpenChannelResponse instance
     */
    public static create(properties?: api.IOpenChannelResponse): api.OpenChannelResponse;

    /**
     * Encodes the specified OpenChannelResponse message. Does not implicitly {@link api.OpenChannelResponse.verify|verify} messages.
     * @param message OpenChannelResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IOpenChannelResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified OpenChannelResponse message, length delimited. Does not implicitly {@link api.OpenChannelResponse.verify|verify} messages.
     * @param message OpenChannelResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IOpenChannelResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes an OpenChannelResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OpenChannelResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.OpenChannelResponse;

    /**
     * Decodes an OpenChannelResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OpenChannelResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.OpenChannelResponse;

    /**
     * Verifies an OpenChannelResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an OpenChannelResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OpenChannelResponse
     */
    public static fromObject(object: { [k: string]: any }): api.OpenChannelResponse;

    /**
     * Creates a plain object from an OpenChannelResponse message. Also converts values to other types if specified.
     * @param message OpenChannelResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.OpenChannelResponse,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this OpenChannelResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for OpenChannelResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of an UpdateChannelConfigRequest. */
  interface IUpdateChannelConfigRequest {
    /** UpdateChannelConfigRequest userChannelId */
    userChannelId?: string | null;

    /** UpdateChannelConfigRequest counterpartyNodeId */
    counterpartyNodeId?: string | null;

    /** UpdateChannelConfigRequest channelConfig */
    channelConfig?: types_ldk.IChannelConfig | null;
  }

  /** Represents an UpdateChannelConfigRequest. */
  class UpdateChannelConfigRequest implements IUpdateChannelConfigRequest {
    /**
     * Constructs a new UpdateChannelConfigRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IUpdateChannelConfigRequest);

    /** UpdateChannelConfigRequest userChannelId. */
    public userChannelId: string;

    /** UpdateChannelConfigRequest counterpartyNodeId. */
    public counterpartyNodeId: string;

    /** UpdateChannelConfigRequest channelConfig. */
    public channelConfig?: types_ldk.IChannelConfig | null;

    /**
     * Creates a new UpdateChannelConfigRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateChannelConfigRequest instance
     */
    public static create(
      properties?: api.IUpdateChannelConfigRequest,
    ): api.UpdateChannelConfigRequest;

    /**
     * Encodes the specified UpdateChannelConfigRequest message. Does not implicitly {@link api.UpdateChannelConfigRequest.verify|verify} messages.
     * @param message UpdateChannelConfigRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IUpdateChannelConfigRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified UpdateChannelConfigRequest message, length delimited. Does not implicitly {@link api.UpdateChannelConfigRequest.verify|verify} messages.
     * @param message UpdateChannelConfigRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IUpdateChannelConfigRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes an UpdateChannelConfigRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateChannelConfigRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.UpdateChannelConfigRequest;

    /**
     * Decodes an UpdateChannelConfigRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateChannelConfigRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.UpdateChannelConfigRequest;

    /**
     * Verifies an UpdateChannelConfigRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an UpdateChannelConfigRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateChannelConfigRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): api.UpdateChannelConfigRequest;

    /**
     * Creates a plain object from an UpdateChannelConfigRequest message. Also converts values to other types if specified.
     * @param message UpdateChannelConfigRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.UpdateChannelConfigRequest,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this UpdateChannelConfigRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UpdateChannelConfigRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of an UpdateChannelConfigResponse. */
  interface IUpdateChannelConfigResponse {}

  /** Represents an UpdateChannelConfigResponse. */
  class UpdateChannelConfigResponse implements IUpdateChannelConfigResponse {
    /**
     * Constructs a new UpdateChannelConfigResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IUpdateChannelConfigResponse);

    /**
     * Creates a new UpdateChannelConfigResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateChannelConfigResponse instance
     */
    public static create(
      properties?: api.IUpdateChannelConfigResponse,
    ): api.UpdateChannelConfigResponse;

    /**
     * Encodes the specified UpdateChannelConfigResponse message. Does not implicitly {@link api.UpdateChannelConfigResponse.verify|verify} messages.
     * @param message UpdateChannelConfigResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IUpdateChannelConfigResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified UpdateChannelConfigResponse message, length delimited. Does not implicitly {@link api.UpdateChannelConfigResponse.verify|verify} messages.
     * @param message UpdateChannelConfigResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IUpdateChannelConfigResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes an UpdateChannelConfigResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateChannelConfigResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.UpdateChannelConfigResponse;

    /**
     * Decodes an UpdateChannelConfigResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateChannelConfigResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.UpdateChannelConfigResponse;

    /**
     * Verifies an UpdateChannelConfigResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an UpdateChannelConfigResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateChannelConfigResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): api.UpdateChannelConfigResponse;

    /**
     * Creates a plain object from an UpdateChannelConfigResponse message. Also converts values to other types if specified.
     * @param message UpdateChannelConfigResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.UpdateChannelConfigResponse,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this UpdateChannelConfigResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UpdateChannelConfigResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a CloseChannelRequest. */
  interface ICloseChannelRequest {
    /** CloseChannelRequest userChannelId */
    userChannelId?: string | null;

    /** CloseChannelRequest counterpartyNodeId */
    counterpartyNodeId?: string | null;

    /** CloseChannelRequest forceClose */
    forceClose?: boolean | null;

    /** CloseChannelRequest forceCloseReason */
    forceCloseReason?: string | null;
  }

  /** Represents a CloseChannelRequest. */
  class CloseChannelRequest implements ICloseChannelRequest {
    /**
     * Constructs a new CloseChannelRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.ICloseChannelRequest);

    /** CloseChannelRequest userChannelId. */
    public userChannelId: string;

    /** CloseChannelRequest counterpartyNodeId. */
    public counterpartyNodeId: string;

    /** CloseChannelRequest forceClose. */
    public forceClose?: boolean | null;

    /** CloseChannelRequest forceCloseReason. */
    public forceCloseReason?: string | null;

    /** CloseChannelRequest _forceClose. */
    public _forceClose?: 'forceClose';

    /** CloseChannelRequest _forceCloseReason. */
    public _forceCloseReason?: 'forceCloseReason';

    /**
     * Creates a new CloseChannelRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CloseChannelRequest instance
     */
    public static create(properties?: api.ICloseChannelRequest): api.CloseChannelRequest;

    /**
     * Encodes the specified CloseChannelRequest message. Does not implicitly {@link api.CloseChannelRequest.verify|verify} messages.
     * @param message CloseChannelRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.ICloseChannelRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified CloseChannelRequest message, length delimited. Does not implicitly {@link api.CloseChannelRequest.verify|verify} messages.
     * @param message CloseChannelRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.ICloseChannelRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a CloseChannelRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CloseChannelRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.CloseChannelRequest;

    /**
     * Decodes a CloseChannelRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CloseChannelRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.CloseChannelRequest;

    /**
     * Verifies a CloseChannelRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a CloseChannelRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CloseChannelRequest
     */
    public static fromObject(object: { [k: string]: any }): api.CloseChannelRequest;

    /**
     * Creates a plain object from a CloseChannelRequest message. Also converts values to other types if specified.
     * @param message CloseChannelRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.CloseChannelRequest,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this CloseChannelRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CloseChannelRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a CloseChannelResponse. */
  interface ICloseChannelResponse {}

  /** Represents a CloseChannelResponse. */
  class CloseChannelResponse implements ICloseChannelResponse {
    /**
     * Constructs a new CloseChannelResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.ICloseChannelResponse);

    /**
     * Creates a new CloseChannelResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CloseChannelResponse instance
     */
    public static create(
      properties?: api.ICloseChannelResponse,
    ): api.CloseChannelResponse;

    /**
     * Encodes the specified CloseChannelResponse message. Does not implicitly {@link api.CloseChannelResponse.verify|verify} messages.
     * @param message CloseChannelResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.ICloseChannelResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified CloseChannelResponse message, length delimited. Does not implicitly {@link api.CloseChannelResponse.verify|verify} messages.
     * @param message CloseChannelResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.ICloseChannelResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a CloseChannelResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CloseChannelResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.CloseChannelResponse;

    /**
     * Decodes a CloseChannelResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CloseChannelResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.CloseChannelResponse;

    /**
     * Verifies a CloseChannelResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a CloseChannelResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CloseChannelResponse
     */
    public static fromObject(object: { [k: string]: any }): api.CloseChannelResponse;

    /**
     * Creates a plain object from a CloseChannelResponse message. Also converts values to other types if specified.
     * @param message CloseChannelResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.CloseChannelResponse,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this CloseChannelResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CloseChannelResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a ListChannelsRequest. */
  interface IListChannelsRequest {}

  /** Represents a ListChannelsRequest. */
  class ListChannelsRequest implements IListChannelsRequest {
    /**
     * Constructs a new ListChannelsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IListChannelsRequest);

    /**
     * Creates a new ListChannelsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListChannelsRequest instance
     */
    public static create(properties?: api.IListChannelsRequest): api.ListChannelsRequest;

    /**
     * Encodes the specified ListChannelsRequest message. Does not implicitly {@link api.ListChannelsRequest.verify|verify} messages.
     * @param message ListChannelsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IListChannelsRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified ListChannelsRequest message, length delimited. Does not implicitly {@link api.ListChannelsRequest.verify|verify} messages.
     * @param message ListChannelsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IListChannelsRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ListChannelsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListChannelsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.ListChannelsRequest;

    /**
     * Decodes a ListChannelsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListChannelsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.ListChannelsRequest;

    /**
     * Verifies a ListChannelsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ListChannelsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListChannelsRequest
     */
    public static fromObject(object: { [k: string]: any }): api.ListChannelsRequest;

    /**
     * Creates a plain object from a ListChannelsRequest message. Also converts values to other types if specified.
     * @param message ListChannelsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.ListChannelsRequest,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ListChannelsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListChannelsRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a ListChannelsResponse. */
  interface IListChannelsResponse {
    /** ListChannelsResponse channels */
    channels?: types_ldk.IChannel[] | null;
  }

  /** Represents a ListChannelsResponse. */
  class ListChannelsResponse implements IListChannelsResponse {
    /**
     * Constructs a new ListChannelsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IListChannelsResponse);

    /** ListChannelsResponse channels. */
    public channels: types_ldk.IChannel[];

    /**
     * Creates a new ListChannelsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListChannelsResponse instance
     */
    public static create(
      properties?: api.IListChannelsResponse,
    ): api.ListChannelsResponse;

    /**
     * Encodes the specified ListChannelsResponse message. Does not implicitly {@link api.ListChannelsResponse.verify|verify} messages.
     * @param message ListChannelsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IListChannelsResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified ListChannelsResponse message, length delimited. Does not implicitly {@link api.ListChannelsResponse.verify|verify} messages.
     * @param message ListChannelsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IListChannelsResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ListChannelsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListChannelsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.ListChannelsResponse;

    /**
     * Decodes a ListChannelsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListChannelsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.ListChannelsResponse;

    /**
     * Verifies a ListChannelsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ListChannelsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListChannelsResponse
     */
    public static fromObject(object: { [k: string]: any }): api.ListChannelsResponse;

    /**
     * Creates a plain object from a ListChannelsResponse message. Also converts values to other types if specified.
     * @param message ListChannelsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.ListChannelsResponse,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ListChannelsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListChannelsResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a GetPaymentDetailsRequest. */
  interface IGetPaymentDetailsRequest {
    /** GetPaymentDetailsRequest paymentId */
    paymentId?: string | null;
  }

  /** Represents a GetPaymentDetailsRequest. */
  class GetPaymentDetailsRequest implements IGetPaymentDetailsRequest {
    /**
     * Constructs a new GetPaymentDetailsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IGetPaymentDetailsRequest);

    /** GetPaymentDetailsRequest paymentId. */
    public paymentId: string;

    /**
     * Creates a new GetPaymentDetailsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetPaymentDetailsRequest instance
     */
    public static create(
      properties?: api.IGetPaymentDetailsRequest,
    ): api.GetPaymentDetailsRequest;

    /**
     * Encodes the specified GetPaymentDetailsRequest message. Does not implicitly {@link api.GetPaymentDetailsRequest.verify|verify} messages.
     * @param message GetPaymentDetailsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IGetPaymentDetailsRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetPaymentDetailsRequest message, length delimited. Does not implicitly {@link api.GetPaymentDetailsRequest.verify|verify} messages.
     * @param message GetPaymentDetailsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IGetPaymentDetailsRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a GetPaymentDetailsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetPaymentDetailsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.GetPaymentDetailsRequest;

    /**
     * Decodes a GetPaymentDetailsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetPaymentDetailsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.GetPaymentDetailsRequest;

    /**
     * Verifies a GetPaymentDetailsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetPaymentDetailsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetPaymentDetailsRequest
     */
    public static fromObject(object: { [k: string]: any }): api.GetPaymentDetailsRequest;

    /**
     * Creates a plain object from a GetPaymentDetailsRequest message. Also converts values to other types if specified.
     * @param message GetPaymentDetailsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.GetPaymentDetailsRequest,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this GetPaymentDetailsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetPaymentDetailsRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a GetPaymentDetailsResponse. */
  interface IGetPaymentDetailsResponse {
    /** GetPaymentDetailsResponse payment */
    payment?: types_ldk.IPayment | null;
  }

  /** Represents a GetPaymentDetailsResponse. */
  class GetPaymentDetailsResponse implements IGetPaymentDetailsResponse {
    /**
     * Constructs a new GetPaymentDetailsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IGetPaymentDetailsResponse);

    /** GetPaymentDetailsResponse payment. */
    public payment?: types_ldk.IPayment | null;

    /**
     * Creates a new GetPaymentDetailsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetPaymentDetailsResponse instance
     */
    public static create(
      properties?: api.IGetPaymentDetailsResponse,
    ): api.GetPaymentDetailsResponse;

    /**
     * Encodes the specified GetPaymentDetailsResponse message. Does not implicitly {@link api.GetPaymentDetailsResponse.verify|verify} messages.
     * @param message GetPaymentDetailsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IGetPaymentDetailsResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetPaymentDetailsResponse message, length delimited. Does not implicitly {@link api.GetPaymentDetailsResponse.verify|verify} messages.
     * @param message GetPaymentDetailsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IGetPaymentDetailsResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a GetPaymentDetailsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetPaymentDetailsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.GetPaymentDetailsResponse;

    /**
     * Decodes a GetPaymentDetailsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetPaymentDetailsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.GetPaymentDetailsResponse;

    /**
     * Verifies a GetPaymentDetailsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetPaymentDetailsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetPaymentDetailsResponse
     */
    public static fromObject(object: { [k: string]: any }): api.GetPaymentDetailsResponse;

    /**
     * Creates a plain object from a GetPaymentDetailsResponse message. Also converts values to other types if specified.
     * @param message GetPaymentDetailsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.GetPaymentDetailsResponse,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this GetPaymentDetailsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetPaymentDetailsResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a ListPaymentsRequest. */
  interface IListPaymentsRequest {
    /** ListPaymentsRequest pageToken */
    pageToken?: types_ldk.IPageToken | null;
  }

  /** Represents a ListPaymentsRequest. */
  class ListPaymentsRequest implements IListPaymentsRequest {
    /**
     * Constructs a new ListPaymentsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IListPaymentsRequest);

    /** ListPaymentsRequest pageToken. */
    public pageToken?: types_ldk.IPageToken | null;

    /** ListPaymentsRequest _pageToken. */
    public _pageToken?: 'pageToken';

    /**
     * Creates a new ListPaymentsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListPaymentsRequest instance
     */
    public static create(properties?: api.IListPaymentsRequest): api.ListPaymentsRequest;

    /**
     * Encodes the specified ListPaymentsRequest message. Does not implicitly {@link api.ListPaymentsRequest.verify|verify} messages.
     * @param message ListPaymentsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IListPaymentsRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified ListPaymentsRequest message, length delimited. Does not implicitly {@link api.ListPaymentsRequest.verify|verify} messages.
     * @param message ListPaymentsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IListPaymentsRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ListPaymentsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListPaymentsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.ListPaymentsRequest;

    /**
     * Decodes a ListPaymentsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListPaymentsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.ListPaymentsRequest;

    /**
     * Verifies a ListPaymentsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ListPaymentsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListPaymentsRequest
     */
    public static fromObject(object: { [k: string]: any }): api.ListPaymentsRequest;

    /**
     * Creates a plain object from a ListPaymentsRequest message. Also converts values to other types if specified.
     * @param message ListPaymentsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.ListPaymentsRequest,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ListPaymentsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListPaymentsRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a ListPaymentsResponse. */
  interface IListPaymentsResponse {
    /** ListPaymentsResponse payments */
    payments?: types_ldk.IPayment[] | null;

    /** ListPaymentsResponse nextPageToken */
    nextPageToken?: types_ldk.IPageToken | null;
  }

  /** Represents a ListPaymentsResponse. */
  class ListPaymentsResponse implements IListPaymentsResponse {
    /**
     * Constructs a new ListPaymentsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IListPaymentsResponse);

    /** ListPaymentsResponse payments. */
    public payments: types_ldk.IPayment[];

    /** ListPaymentsResponse nextPageToken. */
    public nextPageToken?: types_ldk.IPageToken | null;

    /** ListPaymentsResponse _nextPageToken. */
    public _nextPageToken?: 'nextPageToken';

    /**
     * Creates a new ListPaymentsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListPaymentsResponse instance
     */
    public static create(
      properties?: api.IListPaymentsResponse,
    ): api.ListPaymentsResponse;

    /**
     * Encodes the specified ListPaymentsResponse message. Does not implicitly {@link api.ListPaymentsResponse.verify|verify} messages.
     * @param message ListPaymentsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IListPaymentsResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified ListPaymentsResponse message, length delimited. Does not implicitly {@link api.ListPaymentsResponse.verify|verify} messages.
     * @param message ListPaymentsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IListPaymentsResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ListPaymentsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListPaymentsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.ListPaymentsResponse;

    /**
     * Decodes a ListPaymentsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListPaymentsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.ListPaymentsResponse;

    /**
     * Verifies a ListPaymentsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ListPaymentsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListPaymentsResponse
     */
    public static fromObject(object: { [k: string]: any }): api.ListPaymentsResponse;

    /**
     * Creates a plain object from a ListPaymentsResponse message. Also converts values to other types if specified.
     * @param message ListPaymentsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.ListPaymentsResponse,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ListPaymentsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListPaymentsResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a ListForwardedPaymentsRequest. */
  interface IListForwardedPaymentsRequest {
    /** ListForwardedPaymentsRequest pageToken */
    pageToken?: types_ldk.IPageToken | null;
  }

  /** Represents a ListForwardedPaymentsRequest. */
  class ListForwardedPaymentsRequest implements IListForwardedPaymentsRequest {
    /**
     * Constructs a new ListForwardedPaymentsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IListForwardedPaymentsRequest);

    /** ListForwardedPaymentsRequest pageToken. */
    public pageToken?: types_ldk.IPageToken | null;

    /** ListForwardedPaymentsRequest _pageToken. */
    public _pageToken?: 'pageToken';

    /**
     * Creates a new ListForwardedPaymentsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListForwardedPaymentsRequest instance
     */
    public static create(
      properties?: api.IListForwardedPaymentsRequest,
    ): api.ListForwardedPaymentsRequest;

    /**
     * Encodes the specified ListForwardedPaymentsRequest message. Does not implicitly {@link api.ListForwardedPaymentsRequest.verify|verify} messages.
     * @param message ListForwardedPaymentsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IListForwardedPaymentsRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified ListForwardedPaymentsRequest message, length delimited. Does not implicitly {@link api.ListForwardedPaymentsRequest.verify|verify} messages.
     * @param message ListForwardedPaymentsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IListForwardedPaymentsRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ListForwardedPaymentsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListForwardedPaymentsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.ListForwardedPaymentsRequest;

    /**
     * Decodes a ListForwardedPaymentsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListForwardedPaymentsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.ListForwardedPaymentsRequest;

    /**
     * Verifies a ListForwardedPaymentsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ListForwardedPaymentsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListForwardedPaymentsRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): api.ListForwardedPaymentsRequest;

    /**
     * Creates a plain object from a ListForwardedPaymentsRequest message. Also converts values to other types if specified.
     * @param message ListForwardedPaymentsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.ListForwardedPaymentsRequest,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ListForwardedPaymentsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListForwardedPaymentsRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a ListForwardedPaymentsResponse. */
  interface IListForwardedPaymentsResponse {
    /** ListForwardedPaymentsResponse forwardedPayments */
    forwardedPayments?: types_ldk.IForwardedPayment[] | null;

    /** ListForwardedPaymentsResponse nextPageToken */
    nextPageToken?: types_ldk.IPageToken | null;
  }

  /** Represents a ListForwardedPaymentsResponse. */
  class ListForwardedPaymentsResponse implements IListForwardedPaymentsResponse {
    /**
     * Constructs a new ListForwardedPaymentsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IListForwardedPaymentsResponse);

    /** ListForwardedPaymentsResponse forwardedPayments. */
    public forwardedPayments: types_ldk.IForwardedPayment[];

    /** ListForwardedPaymentsResponse nextPageToken. */
    public nextPageToken?: types_ldk.IPageToken | null;

    /** ListForwardedPaymentsResponse _nextPageToken. */
    public _nextPageToken?: 'nextPageToken';

    /**
     * Creates a new ListForwardedPaymentsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListForwardedPaymentsResponse instance
     */
    public static create(
      properties?: api.IListForwardedPaymentsResponse,
    ): api.ListForwardedPaymentsResponse;

    /**
     * Encodes the specified ListForwardedPaymentsResponse message. Does not implicitly {@link api.ListForwardedPaymentsResponse.verify|verify} messages.
     * @param message ListForwardedPaymentsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IListForwardedPaymentsResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified ListForwardedPaymentsResponse message, length delimited. Does not implicitly {@link api.ListForwardedPaymentsResponse.verify|verify} messages.
     * @param message ListForwardedPaymentsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IListForwardedPaymentsResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ListForwardedPaymentsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListForwardedPaymentsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.ListForwardedPaymentsResponse;

    /**
     * Decodes a ListForwardedPaymentsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListForwardedPaymentsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.ListForwardedPaymentsResponse;

    /**
     * Verifies a ListForwardedPaymentsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ListForwardedPaymentsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListForwardedPaymentsResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): api.ListForwardedPaymentsResponse;

    /**
     * Creates a plain object from a ListForwardedPaymentsResponse message. Also converts values to other types if specified.
     * @param message ListForwardedPaymentsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.ListForwardedPaymentsResponse,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ListForwardedPaymentsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListForwardedPaymentsResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a GetBalancesRequest. */
  interface IGetBalancesRequest {}

  /** Represents a GetBalancesRequest. */
  class GetBalancesRequest implements IGetBalancesRequest {
    /**
     * Constructs a new GetBalancesRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IGetBalancesRequest);

    /**
     * Creates a new GetBalancesRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetBalancesRequest instance
     */
    public static create(properties?: api.IGetBalancesRequest): api.GetBalancesRequest;

    /**
     * Encodes the specified GetBalancesRequest message. Does not implicitly {@link api.GetBalancesRequest.verify|verify} messages.
     * @param message GetBalancesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IGetBalancesRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetBalancesRequest message, length delimited. Does not implicitly {@link api.GetBalancesRequest.verify|verify} messages.
     * @param message GetBalancesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IGetBalancesRequest,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a GetBalancesRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetBalancesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.GetBalancesRequest;

    /**
     * Decodes a GetBalancesRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetBalancesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.GetBalancesRequest;

    /**
     * Verifies a GetBalancesRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetBalancesRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetBalancesRequest
     */
    public static fromObject(object: { [k: string]: any }): api.GetBalancesRequest;

    /**
     * Creates a plain object from a GetBalancesRequest message. Also converts values to other types if specified.
     * @param message GetBalancesRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.GetBalancesRequest,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this GetBalancesRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetBalancesRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a GetBalancesResponse. */
  interface IGetBalancesResponse {
    /** GetBalancesResponse totalOnchainBalanceSats */
    totalOnchainBalanceSats?: number | null;

    /** GetBalancesResponse spendableOnchainBalanceSats */
    spendableOnchainBalanceSats?: number | null;

    /** GetBalancesResponse totalAnchorChannelsReserveSats */
    totalAnchorChannelsReserveSats?: number | null;

    /** GetBalancesResponse totalLightningBalanceSats */
    totalLightningBalanceSats?: number | null;

    /** GetBalancesResponse lightningBalances */
    lightningBalances?: types_ldk.ILightningBalance[] | null;

    /** GetBalancesResponse pendingBalancesFromChannelClosures */
    pendingBalancesFromChannelClosures?: types_ldk.IPendingSweepBalance[] | null;
  }

  /** Represents a GetBalancesResponse. */
  class GetBalancesResponse implements IGetBalancesResponse {
    /**
     * Constructs a new GetBalancesResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: api.IGetBalancesResponse);

    /** GetBalancesResponse totalOnchainBalanceSats. */
    public totalOnchainBalanceSats: number;

    /** GetBalancesResponse spendableOnchainBalanceSats. */
    public spendableOnchainBalanceSats: number;

    /** GetBalancesResponse totalAnchorChannelsReserveSats. */
    public totalAnchorChannelsReserveSats: number;

    /** GetBalancesResponse totalLightningBalanceSats. */
    public totalLightningBalanceSats: number;

    /** GetBalancesResponse lightningBalances. */
    public lightningBalances: types_ldk.ILightningBalance[];

    /** GetBalancesResponse pendingBalancesFromChannelClosures. */
    public pendingBalancesFromChannelClosures: types_ldk.IPendingSweepBalance[];

    /**
     * Creates a new GetBalancesResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetBalancesResponse instance
     */
    public static create(properties?: api.IGetBalancesResponse): api.GetBalancesResponse;

    /**
     * Encodes the specified GetBalancesResponse message. Does not implicitly {@link api.GetBalancesResponse.verify|verify} messages.
     * @param message GetBalancesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: api.IGetBalancesResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetBalancesResponse message, length delimited. Does not implicitly {@link api.GetBalancesResponse.verify|verify} messages.
     * @param message GetBalancesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: api.IGetBalancesResponse,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a GetBalancesResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetBalancesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): api.GetBalancesResponse;

    /**
     * Decodes a GetBalancesResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetBalancesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): api.GetBalancesResponse;

    /**
     * Verifies a GetBalancesResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetBalancesResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetBalancesResponse
     */
    public static fromObject(object: { [k: string]: any }): api.GetBalancesResponse;

    /**
     * Creates a plain object from a GetBalancesResponse message. Also converts values to other types if specified.
     * @param message GetBalancesResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: api.GetBalancesResponse,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this GetBalancesResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetBalancesResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }
}

/** Namespace types. */
declare namespace types_ldk {
  /** Properties of a Payment. */
  interface IPayment {
    /** Payment id */
    id?: string | null;

    /** Payment kind */
    kind?: types_ldk.IPaymentKind | null;

    /** Payment amountMsat */
    amountMsat?: number | null;

    /** Payment feePaidMsat */
    feePaidMsat?: number | null;

    /** Payment direction */
    direction?: types_ldk.PaymentDirection | null;

    /** Payment status */
    status?: types_ldk.PaymentStatus | null;

    /** Payment latestUpdateTimestamp */
    latestUpdateTimestamp?: number | null;
  }

  /** Represents a Payment. */
  class Payment implements IPayment {
    /**
     * Constructs a new Payment.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IPayment);

    /** Payment id. */
    public id: string;

    /** Payment kind. */
    public kind?: types_ldk.IPaymentKind | null;

    /** Payment amountMsat. */
    public amountMsat?: number | null;

    /** Payment feePaidMsat. */
    public feePaidMsat?: number | null;

    /** Payment direction. */
    public direction: types_ldk.PaymentDirection;

    /** Payment status. */
    public status: types_ldk.PaymentStatus;

    /** Payment latestUpdateTimestamp. */
    public latestUpdateTimestamp: number;

    /** Payment _amountMsat. */
    public _amountMsat?: 'amountMsat';

    /** Payment _feePaidMsat. */
    public _feePaidMsat?: 'feePaidMsat';

    /**
     * Creates a new Payment instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Payment instance
     */
    public static create(properties?: types_ldk.IPayment): types_ldk.Payment;

    /**
     * Encodes the specified Payment message. Does not implicitly {@link types_ldk.Payment.verify|verify} messages.
     * @param message Payment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IPayment,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Payment message, length delimited. Does not implicitly {@link types_ldk.Payment.verify|verify} messages.
     * @param message Payment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IPayment,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a Payment message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Payment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.Payment;

    /**
     * Decodes a Payment message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Payment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.Payment;

    /**
     * Verifies a Payment message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Payment message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Payment
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.Payment;

    /**
     * Creates a plain object from a Payment message. Also converts values to other types if specified.
     * @param message Payment
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.Payment,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Payment to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Payment
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a PaymentKind. */
  interface IPaymentKind {
    /** PaymentKind onchain */
    onchain?: types_ldk.IOnchain | null;

    /** PaymentKind bolt11 */
    bolt11?: types_ldk.IBolt11 | null;

    /** PaymentKind bolt11Jit */
    bolt11Jit?: types_ldk.IBolt11Jit | null;

    /** PaymentKind bolt12Offer */
    bolt12Offer?: types_ldk.IBolt12Offer | null;

    /** PaymentKind bolt12Refund */
    bolt12Refund?: types_ldk.IBolt12Refund | null;

    /** PaymentKind spontaneous */
    spontaneous?: types_ldk.ISpontaneous | null;
  }

  /** Represents a PaymentKind. */
  class PaymentKind implements IPaymentKind {
    /**
     * Constructs a new PaymentKind.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IPaymentKind);

    /** PaymentKind onchain. */
    public onchain?: types_ldk.IOnchain | null;

    /** PaymentKind bolt11. */
    public bolt11?: types_ldk.IBolt11 | null;

    /** PaymentKind bolt11Jit. */
    public bolt11Jit?: types_ldk.IBolt11Jit | null;

    /** PaymentKind bolt12Offer. */
    public bolt12Offer?: types_ldk.IBolt12Offer | null;

    /** PaymentKind bolt12Refund. */
    public bolt12Refund?: types_ldk.IBolt12Refund | null;

    /** PaymentKind spontaneous. */
    public spontaneous?: types_ldk.ISpontaneous | null;

    /** PaymentKind kind. */
    public kind?:
      | 'onchain'
      | 'bolt11'
      | 'bolt11Jit'
      | 'bolt12Offer'
      | 'bolt12Refund'
      | 'spontaneous';

    /**
     * Creates a new PaymentKind instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PaymentKind instance
     */
    public static create(properties?: types_ldk.IPaymentKind): types_ldk.PaymentKind;

    /**
     * Encodes the specified PaymentKind message. Does not implicitly {@link types_ldk.PaymentKind.verify|verify} messages.
     * @param message PaymentKind message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IPaymentKind,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified PaymentKind message, length delimited. Does not implicitly {@link types_ldk.PaymentKind.verify|verify} messages.
     * @param message PaymentKind message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IPaymentKind,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a PaymentKind message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PaymentKind
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.PaymentKind;

    /**
     * Decodes a PaymentKind message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PaymentKind
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.PaymentKind;

    /**
     * Verifies a PaymentKind message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a PaymentKind message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PaymentKind
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.PaymentKind;

    /**
     * Creates a plain object from a PaymentKind message. Also converts values to other types if specified.
     * @param message PaymentKind
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.PaymentKind,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this PaymentKind to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PaymentKind
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of an Onchain. */
  interface IOnchain {
    /** Onchain txid */
    txid?: string | null;

    /** Onchain status */
    status?: types_ldk.IConfirmationStatus | null;
  }

  /** Represents an Onchain. */
  class Onchain implements IOnchain {
    /**
     * Constructs a new Onchain.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IOnchain);

    /** Onchain txid. */
    public txid: string;

    /** Onchain status. */
    public status?: types_ldk.IConfirmationStatus | null;

    /**
     * Creates a new Onchain instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Onchain instance
     */
    public static create(properties?: types_ldk.IOnchain): types_ldk.Onchain;

    /**
     * Encodes the specified Onchain message. Does not implicitly {@link types_ldk.Onchain.verify|verify} messages.
     * @param message Onchain message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IOnchain,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Onchain message, length delimited. Does not implicitly {@link types_ldk.Onchain.verify|verify} messages.
     * @param message Onchain message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IOnchain,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes an Onchain message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Onchain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.Onchain;

    /**
     * Decodes an Onchain message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Onchain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.Onchain;

    /**
     * Verifies an Onchain message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an Onchain message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Onchain
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.Onchain;

    /**
     * Creates a plain object from an Onchain message. Also converts values to other types if specified.
     * @param message Onchain
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.Onchain,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Onchain to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Onchain
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a ConfirmationStatus. */
  interface IConfirmationStatus {
    /** ConfirmationStatus confirmed */
    confirmed?: types_ldk.IConfirmed | null;

    /** ConfirmationStatus unconfirmed */
    unconfirmed?: types_ldk.IUnconfirmed | null;
  }

  /** Represents a ConfirmationStatus. */
  class ConfirmationStatus implements IConfirmationStatus {
    /**
     * Constructs a new ConfirmationStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IConfirmationStatus);

    /** ConfirmationStatus confirmed. */
    public confirmed?: types_ldk.IConfirmed | null;

    /** ConfirmationStatus unconfirmed. */
    public unconfirmed?: types_ldk.IUnconfirmed | null;

    /** ConfirmationStatus status. */
    public status?: 'confirmed' | 'unconfirmed';

    /**
     * Creates a new ConfirmationStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConfirmationStatus instance
     */
    public static create(
      properties?: types_ldk.IConfirmationStatus,
    ): types_ldk.ConfirmationStatus;

    /**
     * Encodes the specified ConfirmationStatus message. Does not implicitly {@link types_ldk.ConfirmationStatus.verify|verify} messages.
     * @param message ConfirmationStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IConfirmationStatus,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified ConfirmationStatus message, length delimited. Does not implicitly {@link types_ldk.ConfirmationStatus.verify|verify} messages.
     * @param message ConfirmationStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IConfirmationStatus,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ConfirmationStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConfirmationStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.ConfirmationStatus;

    /**
     * Decodes a ConfirmationStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConfirmationStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.ConfirmationStatus;

    /**
     * Verifies a ConfirmationStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConfirmationStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConfirmationStatus
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.ConfirmationStatus;

    /**
     * Creates a plain object from a ConfirmationStatus message. Also converts values to other types if specified.
     * @param message ConfirmationStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.ConfirmationStatus,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ConfirmationStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ConfirmationStatus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Confirmed. */
  interface IConfirmed {
    /** Confirmed blockHash */
    blockHash?: string | null;

    /** Confirmed height */
    height?: number | null;

    /** Confirmed timestamp */
    timestamp?: number | null;
  }

  /** Represents a Confirmed. */
  class Confirmed implements IConfirmed {
    /**
     * Constructs a new Confirmed.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IConfirmed);

    /** Confirmed blockHash. */
    public blockHash: string;

    /** Confirmed height. */
    public height: number;

    /** Confirmed timestamp. */
    public timestamp: number;

    /**
     * Creates a new Confirmed instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Confirmed instance
     */
    public static create(properties?: types_ldk.IConfirmed): types_ldk.Confirmed;

    /**
     * Encodes the specified Confirmed message. Does not implicitly {@link types_ldk.Confirmed.verify|verify} messages.
     * @param message Confirmed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IConfirmed,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Confirmed message, length delimited. Does not implicitly {@link types_ldk.Confirmed.verify|verify} messages.
     * @param message Confirmed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IConfirmed,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a Confirmed message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Confirmed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.Confirmed;

    /**
     * Decodes a Confirmed message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Confirmed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.Confirmed;

    /**
     * Verifies a Confirmed message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Confirmed message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Confirmed
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.Confirmed;

    /**
     * Creates a plain object from a Confirmed message. Also converts values to other types if specified.
     * @param message Confirmed
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.Confirmed,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Confirmed to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Confirmed
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of an Unconfirmed. */
  interface IUnconfirmed {}

  /** Represents an Unconfirmed. */
  class Unconfirmed implements IUnconfirmed {
    /**
     * Constructs a new Unconfirmed.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IUnconfirmed);

    /**
     * Creates a new Unconfirmed instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Unconfirmed instance
     */
    public static create(properties?: types_ldk.IUnconfirmed): types_ldk.Unconfirmed;

    /**
     * Encodes the specified Unconfirmed message. Does not implicitly {@link types_ldk.Unconfirmed.verify|verify} messages.
     * @param message Unconfirmed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IUnconfirmed,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Unconfirmed message, length delimited. Does not implicitly {@link types_ldk.Unconfirmed.verify|verify} messages.
     * @param message Unconfirmed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IUnconfirmed,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes an Unconfirmed message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Unconfirmed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.Unconfirmed;

    /**
     * Decodes an Unconfirmed message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Unconfirmed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.Unconfirmed;

    /**
     * Verifies an Unconfirmed message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an Unconfirmed message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Unconfirmed
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.Unconfirmed;

    /**
     * Creates a plain object from an Unconfirmed message. Also converts values to other types if specified.
     * @param message Unconfirmed
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.Unconfirmed,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Unconfirmed to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Unconfirmed
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Bolt11. */
  interface IBolt11 {
    /** Bolt11 hash */
    hash?: string | null;

    /** Bolt11 preimage */
    preimage?: string | null;

    /** Bolt11 secret */
    secret?: Uint8Array | null;
  }

  /** Represents a Bolt11. */
  class Bolt11 implements IBolt11 {
    /**
     * Constructs a new Bolt11.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IBolt11);

    /** Bolt11 hash. */
    public hash: string;

    /** Bolt11 preimage. */
    public preimage?: string | null;

    /** Bolt11 secret. */
    public secret?: Uint8Array | null;

    /** Bolt11 _preimage. */
    public _preimage?: 'preimage';

    /** Bolt11 _secret. */
    public _secret?: 'secret';

    /**
     * Creates a new Bolt11 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bolt11 instance
     */
    public static create(properties?: types_ldk.IBolt11): types_ldk.Bolt11;

    /**
     * Encodes the specified Bolt11 message. Does not implicitly {@link types_ldk.Bolt11.verify|verify} messages.
     * @param message Bolt11 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IBolt11,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Bolt11 message, length delimited. Does not implicitly {@link types_ldk.Bolt11.verify|verify} messages.
     * @param message Bolt11 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IBolt11,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a Bolt11 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bolt11
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.Bolt11;

    /**
     * Decodes a Bolt11 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Bolt11
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.Bolt11;

    /**
     * Verifies a Bolt11 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Bolt11 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Bolt11
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.Bolt11;

    /**
     * Creates a plain object from a Bolt11 message. Also converts values to other types if specified.
     * @param message Bolt11
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.Bolt11,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Bolt11 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Bolt11
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Bolt11Jit. */
  interface IBolt11Jit {
    /** Bolt11Jit hash */
    hash?: string | null;

    /** Bolt11Jit preimage */
    preimage?: string | null;

    /** Bolt11Jit secret */
    secret?: Uint8Array | null;

    /** Bolt11Jit lspFeeLimits */
    lspFeeLimits?: types_ldk.ILSPFeeLimits | null;
  }

  /** Represents a Bolt11Jit. */
  class Bolt11Jit implements IBolt11Jit {
    /**
     * Constructs a new Bolt11Jit.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IBolt11Jit);

    /** Bolt11Jit hash. */
    public hash: string;

    /** Bolt11Jit preimage. */
    public preimage?: string | null;

    /** Bolt11Jit secret. */
    public secret?: Uint8Array | null;

    /** Bolt11Jit lspFeeLimits. */
    public lspFeeLimits?: types_ldk.ILSPFeeLimits | null;

    /** Bolt11Jit _preimage. */
    public _preimage?: 'preimage';

    /** Bolt11Jit _secret. */
    public _secret?: 'secret';

    /**
     * Creates a new Bolt11Jit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bolt11Jit instance
     */
    public static create(properties?: types_ldk.IBolt11Jit): types_ldk.Bolt11Jit;

    /**
     * Encodes the specified Bolt11Jit message. Does not implicitly {@link types_ldk.Bolt11Jit.verify|verify} messages.
     * @param message Bolt11Jit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IBolt11Jit,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Bolt11Jit message, length delimited. Does not implicitly {@link types_ldk.Bolt11Jit.verify|verify} messages.
     * @param message Bolt11Jit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IBolt11Jit,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a Bolt11Jit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bolt11Jit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.Bolt11Jit;

    /**
     * Decodes a Bolt11Jit message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Bolt11Jit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.Bolt11Jit;

    /**
     * Verifies a Bolt11Jit message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Bolt11Jit message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Bolt11Jit
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.Bolt11Jit;

    /**
     * Creates a plain object from a Bolt11Jit message. Also converts values to other types if specified.
     * @param message Bolt11Jit
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.Bolt11Jit,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Bolt11Jit to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Bolt11Jit
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Bolt12Offer. */
  interface IBolt12Offer {
    /** Bolt12Offer hash */
    hash?: string | null;

    /** Bolt12Offer preimage */
    preimage?: string | null;

    /** Bolt12Offer secret */
    secret?: Uint8Array | null;

    /** Bolt12Offer offerId */
    offerId?: string | null;

    /** Bolt12Offer payerNote */
    payerNote?: string | null;

    /** Bolt12Offer quantity */
    quantity?: number | null;
  }

  /** Represents a Bolt12Offer. */
  class Bolt12Offer implements IBolt12Offer {
    /**
     * Constructs a new Bolt12Offer.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IBolt12Offer);

    /** Bolt12Offer hash. */
    public hash?: string | null;

    /** Bolt12Offer preimage. */
    public preimage?: string | null;

    /** Bolt12Offer secret. */
    public secret?: Uint8Array | null;

    /** Bolt12Offer offerId. */
    public offerId: string;

    /** Bolt12Offer payerNote. */
    public payerNote?: string | null;

    /** Bolt12Offer quantity. */
    public quantity?: number | null;

    /** Bolt12Offer _hash. */
    public _hash?: 'hash';

    /** Bolt12Offer _preimage. */
    public _preimage?: 'preimage';

    /** Bolt12Offer _secret. */
    public _secret?: 'secret';

    /** Bolt12Offer _payerNote. */
    public _payerNote?: 'payerNote';

    /** Bolt12Offer _quantity. */
    public _quantity?: 'quantity';

    /**
     * Creates a new Bolt12Offer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bolt12Offer instance
     */
    public static create(properties?: types_ldk.IBolt12Offer): types_ldk.Bolt12Offer;

    /**
     * Encodes the specified Bolt12Offer message. Does not implicitly {@link types_ldk.Bolt12Offer.verify|verify} messages.
     * @param message Bolt12Offer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IBolt12Offer,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Bolt12Offer message, length delimited. Does not implicitly {@link types_ldk.Bolt12Offer.verify|verify} messages.
     * @param message Bolt12Offer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IBolt12Offer,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a Bolt12Offer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bolt12Offer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.Bolt12Offer;

    /**
     * Decodes a Bolt12Offer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Bolt12Offer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.Bolt12Offer;

    /**
     * Verifies a Bolt12Offer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Bolt12Offer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Bolt12Offer
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.Bolt12Offer;

    /**
     * Creates a plain object from a Bolt12Offer message. Also converts values to other types if specified.
     * @param message Bolt12Offer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.Bolt12Offer,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Bolt12Offer to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Bolt12Offer
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Bolt12Refund. */
  interface IBolt12Refund {
    /** Bolt12Refund hash */
    hash?: string | null;

    /** Bolt12Refund preimage */
    preimage?: string | null;

    /** Bolt12Refund secret */
    secret?: Uint8Array | null;

    /** Bolt12Refund payerNote */
    payerNote?: string | null;

    /** Bolt12Refund quantity */
    quantity?: number | null;
  }

  /** Represents a Bolt12Refund. */
  class Bolt12Refund implements IBolt12Refund {
    /**
     * Constructs a new Bolt12Refund.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IBolt12Refund);

    /** Bolt12Refund hash. */
    public hash?: string | null;

    /** Bolt12Refund preimage. */
    public preimage?: string | null;

    /** Bolt12Refund secret. */
    public secret?: Uint8Array | null;

    /** Bolt12Refund payerNote. */
    public payerNote?: string | null;

    /** Bolt12Refund quantity. */
    public quantity?: number | null;

    /** Bolt12Refund _hash. */
    public _hash?: 'hash';

    /** Bolt12Refund _preimage. */
    public _preimage?: 'preimage';

    /** Bolt12Refund _secret. */
    public _secret?: 'secret';

    /** Bolt12Refund _payerNote. */
    public _payerNote?: 'payerNote';

    /** Bolt12Refund _quantity. */
    public _quantity?: 'quantity';

    /**
     * Creates a new Bolt12Refund instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bolt12Refund instance
     */
    public static create(properties?: types_ldk.IBolt12Refund): types_ldk.Bolt12Refund;

    /**
     * Encodes the specified Bolt12Refund message. Does not implicitly {@link types_ldk.Bolt12Refund.verify|verify} messages.
     * @param message Bolt12Refund message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IBolt12Refund,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Bolt12Refund message, length delimited. Does not implicitly {@link types_ldk.Bolt12Refund.verify|verify} messages.
     * @param message Bolt12Refund message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IBolt12Refund,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a Bolt12Refund message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bolt12Refund
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.Bolt12Refund;

    /**
     * Decodes a Bolt12Refund message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Bolt12Refund
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.Bolt12Refund;

    /**
     * Verifies a Bolt12Refund message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Bolt12Refund message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Bolt12Refund
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.Bolt12Refund;

    /**
     * Creates a plain object from a Bolt12Refund message. Also converts values to other types if specified.
     * @param message Bolt12Refund
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.Bolt12Refund,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Bolt12Refund to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Bolt12Refund
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Spontaneous. */
  interface ISpontaneous {
    /** Spontaneous hash */
    hash?: string | null;

    /** Spontaneous preimage */
    preimage?: string | null;
  }

  /** Represents a Spontaneous. */
  class Spontaneous implements ISpontaneous {
    /**
     * Constructs a new Spontaneous.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.ISpontaneous);

    /** Spontaneous hash. */
    public hash: string;

    /** Spontaneous preimage. */
    public preimage?: string | null;

    /** Spontaneous _preimage. */
    public _preimage?: 'preimage';

    /**
     * Creates a new Spontaneous instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Spontaneous instance
     */
    public static create(properties?: types_ldk.ISpontaneous): types_ldk.Spontaneous;

    /**
     * Encodes the specified Spontaneous message. Does not implicitly {@link types_ldk.Spontaneous.verify|verify} messages.
     * @param message Spontaneous message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.ISpontaneous,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Spontaneous message, length delimited. Does not implicitly {@link types_ldk.Spontaneous.verify|verify} messages.
     * @param message Spontaneous message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.ISpontaneous,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a Spontaneous message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Spontaneous
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.Spontaneous;

    /**
     * Decodes a Spontaneous message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Spontaneous
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.Spontaneous;

    /**
     * Verifies a Spontaneous message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Spontaneous message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Spontaneous
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.Spontaneous;

    /**
     * Creates a plain object from a Spontaneous message. Also converts values to other types if specified.
     * @param message Spontaneous
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.Spontaneous,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Spontaneous to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Spontaneous
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a LSPFeeLimits. */
  interface ILSPFeeLimits {
    /** LSPFeeLimits maxTotalOpeningFeeMsat */
    maxTotalOpeningFeeMsat?: number | null;

    /** LSPFeeLimits maxProportionalOpeningFeePpmMsat */
    maxProportionalOpeningFeePpmMsat?: number | null;
  }

  /** Represents a LSPFeeLimits. */
  class LSPFeeLimits implements ILSPFeeLimits {
    /**
     * Constructs a new LSPFeeLimits.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.ILSPFeeLimits);

    /** LSPFeeLimits maxTotalOpeningFeeMsat. */
    public maxTotalOpeningFeeMsat?: number | null;

    /** LSPFeeLimits maxProportionalOpeningFeePpmMsat. */
    public maxProportionalOpeningFeePpmMsat?: number | null;

    /** LSPFeeLimits _maxTotalOpeningFeeMsat. */
    public _maxTotalOpeningFeeMsat?: 'maxTotalOpeningFeeMsat';

    /** LSPFeeLimits _maxProportionalOpeningFeePpmMsat. */
    public _maxProportionalOpeningFeePpmMsat?: 'maxProportionalOpeningFeePpmMsat';

    /**
     * Creates a new LSPFeeLimits instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LSPFeeLimits instance
     */
    public static create(properties?: types_ldk.ILSPFeeLimits): types_ldk.LSPFeeLimits;

    /**
     * Encodes the specified LSPFeeLimits message. Does not implicitly {@link types_ldk.LSPFeeLimits.verify|verify} messages.
     * @param message LSPFeeLimits message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.ILSPFeeLimits,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified LSPFeeLimits message, length delimited. Does not implicitly {@link types_ldk.LSPFeeLimits.verify|verify} messages.
     * @param message LSPFeeLimits message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.ILSPFeeLimits,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a LSPFeeLimits message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LSPFeeLimits
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.LSPFeeLimits;

    /**
     * Decodes a LSPFeeLimits message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LSPFeeLimits
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.LSPFeeLimits;

    /**
     * Verifies a LSPFeeLimits message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a LSPFeeLimits message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LSPFeeLimits
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.LSPFeeLimits;

    /**
     * Creates a plain object from a LSPFeeLimits message. Also converts values to other types if specified.
     * @param message LSPFeeLimits
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.LSPFeeLimits,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this LSPFeeLimits to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LSPFeeLimits
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** PaymentDirection enum. */
  enum PaymentDirection {
    INBOUND = 0,
    OUTBOUND = 1,
  }

  /** PaymentStatus enum. */
  enum PaymentStatus {
    PENDING = 0,
    SUCCEEDED = 1,
    FAILED = 2,
  }

  /** Properties of a ForwardedPayment. */
  interface IForwardedPayment {
    /** ForwardedPayment prevChannelId */
    prevChannelId?: string | null;

    /** ForwardedPayment nextChannelId */
    nextChannelId?: string | null;

    /** ForwardedPayment prevUserChannelId */
    prevUserChannelId?: string | null;

    /** ForwardedPayment prevNodeId */
    prevNodeId?: string | null;

    /** ForwardedPayment nextNodeId */
    nextNodeId?: string | null;

    /** ForwardedPayment nextUserChannelId */
    nextUserChannelId?: string | null;

    /** ForwardedPayment totalFeeEarnedMsat */
    totalFeeEarnedMsat?: number | null;

    /** ForwardedPayment skimmedFeeMsat */
    skimmedFeeMsat?: number | null;

    /** ForwardedPayment claimFromOnchainTx */
    claimFromOnchainTx?: boolean | null;

    /** ForwardedPayment outboundAmountForwardedMsat */
    outboundAmountForwardedMsat?: number | null;
  }

  /** Represents a ForwardedPayment. */
  class ForwardedPayment implements IForwardedPayment {
    /**
     * Constructs a new ForwardedPayment.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IForwardedPayment);

    /** ForwardedPayment prevChannelId. */
    public prevChannelId: string;

    /** ForwardedPayment nextChannelId. */
    public nextChannelId: string;

    /** ForwardedPayment prevUserChannelId. */
    public prevUserChannelId: string;

    /** ForwardedPayment prevNodeId. */
    public prevNodeId: string;

    /** ForwardedPayment nextNodeId. */
    public nextNodeId: string;

    /** ForwardedPayment nextUserChannelId. */
    public nextUserChannelId?: string | null;

    /** ForwardedPayment totalFeeEarnedMsat. */
    public totalFeeEarnedMsat?: number | null;

    /** ForwardedPayment skimmedFeeMsat. */
    public skimmedFeeMsat?: number | null;

    /** ForwardedPayment claimFromOnchainTx. */
    public claimFromOnchainTx: boolean;

    /** ForwardedPayment outboundAmountForwardedMsat. */
    public outboundAmountForwardedMsat?: number | null;

    /** ForwardedPayment _nextUserChannelId. */
    public _nextUserChannelId?: 'nextUserChannelId';

    /** ForwardedPayment _totalFeeEarnedMsat. */
    public _totalFeeEarnedMsat?: 'totalFeeEarnedMsat';

    /** ForwardedPayment _skimmedFeeMsat. */
    public _skimmedFeeMsat?: 'skimmedFeeMsat';

    /** ForwardedPayment _outboundAmountForwardedMsat. */
    public _outboundAmountForwardedMsat?: 'outboundAmountForwardedMsat';

    /**
     * Creates a new ForwardedPayment instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ForwardedPayment instance
     */
    public static create(
      properties?: types_ldk.IForwardedPayment,
    ): types_ldk.ForwardedPayment;

    /**
     * Encodes the specified ForwardedPayment message. Does not implicitly {@link types_ldk.ForwardedPayment.verify|verify} messages.
     * @param message ForwardedPayment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IForwardedPayment,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified ForwardedPayment message, length delimited. Does not implicitly {@link types_ldk.ForwardedPayment.verify|verify} messages.
     * @param message ForwardedPayment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IForwardedPayment,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ForwardedPayment message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ForwardedPayment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.ForwardedPayment;

    /**
     * Decodes a ForwardedPayment message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ForwardedPayment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.ForwardedPayment;

    /**
     * Verifies a ForwardedPayment message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ForwardedPayment message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ForwardedPayment
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.ForwardedPayment;

    /**
     * Creates a plain object from a ForwardedPayment message. Also converts values to other types if specified.
     * @param message ForwardedPayment
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.ForwardedPayment,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ForwardedPayment to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ForwardedPayment
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Channel. */
  interface IChannel {
    /** Channel channelId */
    channelId?: string | null;

    /** Channel counterpartyNodeId */
    counterpartyNodeId?: string | null;

    /** Channel fundingTxo */
    fundingTxo?: types_ldk.IOutPoint | null;

    /** Channel userChannelId */
    userChannelId?: string | null;

    /** Channel unspendablePunishmentReserve */
    unspendablePunishmentReserve?: number | null;

    /** Channel channelValueSats */
    channelValueSats?: number | null;

    /** Channel feerateSatPer_1000Weight */
    feerateSatPer_1000Weight?: number | null;

    /** Channel outboundCapacityMsat */
    outboundCapacityMsat?: number | null;

    /** Channel inboundCapacityMsat */
    inboundCapacityMsat?: number | null;

    /** Channel confirmationsRequired */
    confirmationsRequired?: number | null;

    /** Channel confirmations */
    confirmations?: number | null;

    /** Channel isOutbound */
    isOutbound?: boolean | null;

    /** Channel isChannelReady */
    isChannelReady?: boolean | null;

    /** Channel isUsable */
    isUsable?: boolean | null;

    /** Channel isAnnounced */
    isAnnounced?: boolean | null;

    /** Channel channelConfig */
    channelConfig?: types_ldk.IChannelConfig | null;

    /** Channel nextOutboundHtlcLimitMsat */
    nextOutboundHtlcLimitMsat?: number | null;

    /** Channel nextOutboundHtlcMinimumMsat */
    nextOutboundHtlcMinimumMsat?: number | null;

    /** Channel forceCloseSpendDelay */
    forceCloseSpendDelay?: number | null;

    /** Channel counterpartyOutboundHtlcMinimumMsat */
    counterpartyOutboundHtlcMinimumMsat?: number | null;

    /** Channel counterpartyOutboundHtlcMaximumMsat */
    counterpartyOutboundHtlcMaximumMsat?: number | null;

    /** Channel counterpartyUnspendablePunishmentReserve */
    counterpartyUnspendablePunishmentReserve?: number | null;

    /** Channel counterpartyForwardingInfoFeeBaseMsat */
    counterpartyForwardingInfoFeeBaseMsat?: number | null;

    /** Channel counterpartyForwardingInfoFeeProportionalMillionths */
    counterpartyForwardingInfoFeeProportionalMillionths?: number | null;

    /** Channel counterpartyForwardingInfoCltvExpiryDelta */
    counterpartyForwardingInfoCltvExpiryDelta?: number | null;
  }

  /** Represents a Channel. */
  class Channel implements IChannel {
    /**
     * Constructs a new Channel.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IChannel);

    /** Channel channelId. */
    public channelId: string;

    /** Channel counterpartyNodeId. */
    public counterpartyNodeId: string;

    /** Channel fundingTxo. */
    public fundingTxo?: types_ldk.IOutPoint | null;

    /** Channel userChannelId. */
    public userChannelId: string;

    /** Channel unspendablePunishmentReserve. */
    public unspendablePunishmentReserve?: number | null;

    /** Channel channelValueSats. */
    public channelValueSats: number;

    /** Channel feerateSatPer_1000Weight. */
    public feerateSatPer_1000Weight: number;

    /** Channel outboundCapacityMsat. */
    public outboundCapacityMsat: number;

    /** Channel inboundCapacityMsat. */
    public inboundCapacityMsat: number;

    /** Channel confirmationsRequired. */
    public confirmationsRequired?: number | null;

    /** Channel confirmations. */
    public confirmations?: number | null;

    /** Channel isOutbound. */
    public isOutbound: boolean;

    /** Channel isChannelReady. */
    public isChannelReady: boolean;

    /** Channel isUsable. */
    public isUsable: boolean;

    /** Channel isAnnounced. */
    public isAnnounced: boolean;

    /** Channel channelConfig. */
    public channelConfig?: types_ldk.IChannelConfig | null;

    /** Channel nextOutboundHtlcLimitMsat. */
    public nextOutboundHtlcLimitMsat: number;

    /** Channel nextOutboundHtlcMinimumMsat. */
    public nextOutboundHtlcMinimumMsat: number;

    /** Channel forceCloseSpendDelay. */
    public forceCloseSpendDelay?: number | null;

    /** Channel counterpartyOutboundHtlcMinimumMsat. */
    public counterpartyOutboundHtlcMinimumMsat?: number | null;

    /** Channel counterpartyOutboundHtlcMaximumMsat. */
    public counterpartyOutboundHtlcMaximumMsat?: number | null;

    /** Channel counterpartyUnspendablePunishmentReserve. */
    public counterpartyUnspendablePunishmentReserve: number;

    /** Channel counterpartyForwardingInfoFeeBaseMsat. */
    public counterpartyForwardingInfoFeeBaseMsat?: number | null;

    /** Channel counterpartyForwardingInfoFeeProportionalMillionths. */
    public counterpartyForwardingInfoFeeProportionalMillionths?: number | null;

    /** Channel counterpartyForwardingInfoCltvExpiryDelta. */
    public counterpartyForwardingInfoCltvExpiryDelta?: number | null;

    /** Channel _fundingTxo. */
    public _fundingTxo?: 'fundingTxo';

    /** Channel _unspendablePunishmentReserve. */
    public _unspendablePunishmentReserve?: 'unspendablePunishmentReserve';

    /** Channel _confirmationsRequired. */
    public _confirmationsRequired?: 'confirmationsRequired';

    /** Channel _confirmations. */
    public _confirmations?: 'confirmations';

    /** Channel _forceCloseSpendDelay. */
    public _forceCloseSpendDelay?: 'forceCloseSpendDelay';

    /** Channel _counterpartyOutboundHtlcMinimumMsat. */
    public _counterpartyOutboundHtlcMinimumMsat?: 'counterpartyOutboundHtlcMinimumMsat';

    /** Channel _counterpartyOutboundHtlcMaximumMsat. */
    public _counterpartyOutboundHtlcMaximumMsat?: 'counterpartyOutboundHtlcMaximumMsat';

    /** Channel _counterpartyForwardingInfoFeeBaseMsat. */
    public _counterpartyForwardingInfoFeeBaseMsat?: 'counterpartyForwardingInfoFeeBaseMsat';

    /** Channel _counterpartyForwardingInfoFeeProportionalMillionths. */
    public _counterpartyForwardingInfoFeeProportionalMillionths?: 'counterpartyForwardingInfoFeeProportionalMillionths';

    /** Channel _counterpartyForwardingInfoCltvExpiryDelta. */
    public _counterpartyForwardingInfoCltvExpiryDelta?: 'counterpartyForwardingInfoCltvExpiryDelta';

    /**
     * Creates a new Channel instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Channel instance
     */
    public static create(properties?: types_ldk.IChannel): types_ldk.Channel;

    /**
     * Encodes the specified Channel message. Does not implicitly {@link types_ldk.Channel.verify|verify} messages.
     * @param message Channel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IChannel,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Channel message, length delimited. Does not implicitly {@link types_ldk.Channel.verify|verify} messages.
     * @param message Channel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IChannel,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a Channel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Channel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.Channel;

    /**
     * Decodes a Channel message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Channel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.Channel;

    /**
     * Verifies a Channel message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Channel message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Channel
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.Channel;

    /**
     * Creates a plain object from a Channel message. Also converts values to other types if specified.
     * @param message Channel
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.Channel,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Channel to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Channel
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a ChannelConfig. */
  interface IChannelConfig {
    /** ChannelConfig forwardingFeeProportionalMillionths */
    forwardingFeeProportionalMillionths?: number | null;

    /** ChannelConfig forwardingFeeBaseMsat */
    forwardingFeeBaseMsat?: number | null;

    /** ChannelConfig cltvExpiryDelta */
    cltvExpiryDelta?: number | null;

    /** ChannelConfig forceCloseAvoidanceMaxFeeSatoshis */
    forceCloseAvoidanceMaxFeeSatoshis?: number | null;

    /** ChannelConfig acceptUnderpayingHtlcs */
    acceptUnderpayingHtlcs?: boolean | null;

    /** ChannelConfig fixedLimitMsat */
    fixedLimitMsat?: number | null;

    /** ChannelConfig feeRateMultiplier */
    feeRateMultiplier?: number | null;
  }

  /** Represents a ChannelConfig. */
  class ChannelConfig implements IChannelConfig {
    /**
     * Constructs a new ChannelConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IChannelConfig);

    /** ChannelConfig forwardingFeeProportionalMillionths. */
    public forwardingFeeProportionalMillionths?: number | null;

    /** ChannelConfig forwardingFeeBaseMsat. */
    public forwardingFeeBaseMsat?: number | null;

    /** ChannelConfig cltvExpiryDelta. */
    public cltvExpiryDelta?: number | null;

    /** ChannelConfig forceCloseAvoidanceMaxFeeSatoshis. */
    public forceCloseAvoidanceMaxFeeSatoshis?: number | null;

    /** ChannelConfig acceptUnderpayingHtlcs. */
    public acceptUnderpayingHtlcs?: boolean | null;

    /** ChannelConfig fixedLimitMsat. */
    public fixedLimitMsat?: number | null;

    /** ChannelConfig feeRateMultiplier. */
    public feeRateMultiplier?: number | null;

    /** ChannelConfig _forwardingFeeProportionalMillionths. */
    public _forwardingFeeProportionalMillionths?: 'forwardingFeeProportionalMillionths';

    /** ChannelConfig _forwardingFeeBaseMsat. */
    public _forwardingFeeBaseMsat?: 'forwardingFeeBaseMsat';

    /** ChannelConfig _cltvExpiryDelta. */
    public _cltvExpiryDelta?: 'cltvExpiryDelta';

    /** ChannelConfig _forceCloseAvoidanceMaxFeeSatoshis. */
    public _forceCloseAvoidanceMaxFeeSatoshis?: 'forceCloseAvoidanceMaxFeeSatoshis';

    /** ChannelConfig _acceptUnderpayingHtlcs. */
    public _acceptUnderpayingHtlcs?: 'acceptUnderpayingHtlcs';

    /** ChannelConfig maxDustHtlcExposure. */
    public maxDustHtlcExposure?: 'fixedLimitMsat' | 'feeRateMultiplier';

    /**
     * Creates a new ChannelConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChannelConfig instance
     */
    public static create(properties?: types_ldk.IChannelConfig): types_ldk.ChannelConfig;

    /**
     * Encodes the specified ChannelConfig message. Does not implicitly {@link types_ldk.ChannelConfig.verify|verify} messages.
     * @param message ChannelConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IChannelConfig,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified ChannelConfig message, length delimited. Does not implicitly {@link types_ldk.ChannelConfig.verify|verify} messages.
     * @param message ChannelConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IChannelConfig,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ChannelConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChannelConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.ChannelConfig;

    /**
     * Decodes a ChannelConfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChannelConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.ChannelConfig;

    /**
     * Verifies a ChannelConfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ChannelConfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChannelConfig
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.ChannelConfig;

    /**
     * Creates a plain object from a ChannelConfig message. Also converts values to other types if specified.
     * @param message ChannelConfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.ChannelConfig,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ChannelConfig to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ChannelConfig
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of an OutPoint. */
  interface IOutPoint {
    /** OutPoint txid */
    txid?: string | null;

    /** OutPoint vout */
    vout?: number | null;
  }

  /** Represents an OutPoint. */
  class OutPoint implements IOutPoint {
    /**
     * Constructs a new OutPoint.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IOutPoint);

    /** OutPoint txid. */
    public txid: string;

    /** OutPoint vout. */
    public vout: number;

    /**
     * Creates a new OutPoint instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OutPoint instance
     */
    public static create(properties?: types_ldk.IOutPoint): types_ldk.OutPoint;

    /**
     * Encodes the specified OutPoint message. Does not implicitly {@link types_ldk.OutPoint.verify|verify} messages.
     * @param message OutPoint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IOutPoint,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified OutPoint message, length delimited. Does not implicitly {@link types_ldk.OutPoint.verify|verify} messages.
     * @param message OutPoint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IOutPoint,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes an OutPoint message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OutPoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.OutPoint;

    /**
     * Decodes an OutPoint message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OutPoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.OutPoint;

    /**
     * Verifies an OutPoint message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an OutPoint message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OutPoint
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.OutPoint;

    /**
     * Creates a plain object from an OutPoint message. Also converts values to other types if specified.
     * @param message OutPoint
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.OutPoint,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this OutPoint to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for OutPoint
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a BestBlock. */
  interface IBestBlock {
    /** BestBlock blockHash */
    blockHash?: string | null;

    /** BestBlock height */
    height?: number | null;
  }

  /** Represents a BestBlock. */
  class BestBlock implements IBestBlock {
    /**
     * Constructs a new BestBlock.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IBestBlock);

    /** BestBlock blockHash. */
    public blockHash: string;

    /** BestBlock height. */
    public height: number;

    /**
     * Creates a new BestBlock instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BestBlock instance
     */
    public static create(properties?: types_ldk.IBestBlock): types_ldk.BestBlock;

    /**
     * Encodes the specified BestBlock message. Does not implicitly {@link types_ldk.BestBlock.verify|verify} messages.
     * @param message BestBlock message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IBestBlock,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified BestBlock message, length delimited. Does not implicitly {@link types_ldk.BestBlock.verify|verify} messages.
     * @param message BestBlock message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IBestBlock,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a BestBlock message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BestBlock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.BestBlock;

    /**
     * Decodes a BestBlock message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BestBlock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.BestBlock;

    /**
     * Verifies a BestBlock message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BestBlock message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BestBlock
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.BestBlock;

    /**
     * Creates a plain object from a BestBlock message. Also converts values to other types if specified.
     * @param message BestBlock
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.BestBlock,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this BestBlock to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BestBlock
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a LightningBalance. */
  interface ILightningBalance {
    /** LightningBalance claimableOnChannelClose */
    claimableOnChannelClose?: types_ldk.IClaimableOnChannelClose | null;

    /** LightningBalance claimableAwaitingConfirmations */
    claimableAwaitingConfirmations?: types_ldk.IClaimableAwaitingConfirmations | null;

    /** LightningBalance contentiousClaimable */
    contentiousClaimable?: types_ldk.IContentiousClaimable | null;

    /** LightningBalance maybeTimeoutClaimableHtlc */
    maybeTimeoutClaimableHtlc?: types_ldk.IMaybeTimeoutClaimableHTLC | null;

    /** LightningBalance maybePreimageClaimableHtlc */
    maybePreimageClaimableHtlc?: types_ldk.IMaybePreimageClaimableHTLC | null;

    /** LightningBalance counterpartyRevokedOutputClaimable */
    counterpartyRevokedOutputClaimable?: types_ldk.ICounterpartyRevokedOutputClaimable | null;
  }

  /** Represents a LightningBalance. */
  class LightningBalance implements ILightningBalance {
    /**
     * Constructs a new LightningBalance.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.ILightningBalance);

    /** LightningBalance claimableOnChannelClose. */
    public claimableOnChannelClose?: types_ldk.IClaimableOnChannelClose | null;

    /** LightningBalance claimableAwaitingConfirmations. */
    public claimableAwaitingConfirmations?: types_ldk.IClaimableAwaitingConfirmations | null;

    /** LightningBalance contentiousClaimable. */
    public contentiousClaimable?: types_ldk.IContentiousClaimable | null;

    /** LightningBalance maybeTimeoutClaimableHtlc. */
    public maybeTimeoutClaimableHtlc?: types_ldk.IMaybeTimeoutClaimableHTLC | null;

    /** LightningBalance maybePreimageClaimableHtlc. */
    public maybePreimageClaimableHtlc?: types_ldk.IMaybePreimageClaimableHTLC | null;

    /** LightningBalance counterpartyRevokedOutputClaimable. */
    public counterpartyRevokedOutputClaimable?: types_ldk.ICounterpartyRevokedOutputClaimable | null;

    /** LightningBalance balanceType. */
    public balanceType?:
      | 'claimableOnChannelClose'
      | 'claimableAwaitingConfirmations'
      | 'contentiousClaimable'
      | 'maybeTimeoutClaimableHtlc'
      | 'maybePreimageClaimableHtlc'
      | 'counterpartyRevokedOutputClaimable';

    /**
     * Creates a new LightningBalance instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LightningBalance instance
     */
    public static create(
      properties?: types_ldk.ILightningBalance,
    ): types_ldk.LightningBalance;

    /**
     * Encodes the specified LightningBalance message. Does not implicitly {@link types_ldk.LightningBalance.verify|verify} messages.
     * @param message LightningBalance message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.ILightningBalance,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified LightningBalance message, length delimited. Does not implicitly {@link types_ldk.LightningBalance.verify|verify} messages.
     * @param message LightningBalance message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.ILightningBalance,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a LightningBalance message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LightningBalance
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.LightningBalance;

    /**
     * Decodes a LightningBalance message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LightningBalance
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.LightningBalance;

    /**
     * Verifies a LightningBalance message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a LightningBalance message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LightningBalance
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.LightningBalance;

    /**
     * Creates a plain object from a LightningBalance message. Also converts values to other types if specified.
     * @param message LightningBalance
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.LightningBalance,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this LightningBalance to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LightningBalance
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a ClaimableOnChannelClose. */
  interface IClaimableOnChannelClose {
    /** ClaimableOnChannelClose channelId */
    channelId?: string | null;

    /** ClaimableOnChannelClose counterpartyNodeId */
    counterpartyNodeId?: string | null;

    /** ClaimableOnChannelClose amountSatoshis */
    amountSatoshis?: number | null;

    /** ClaimableOnChannelClose transactionFeeSatoshis */
    transactionFeeSatoshis?: number | null;

    /** ClaimableOnChannelClose outboundPaymentHtlcRoundedMsat */
    outboundPaymentHtlcRoundedMsat?: number | null;

    /** ClaimableOnChannelClose outboundForwardedHtlcRoundedMsat */
    outboundForwardedHtlcRoundedMsat?: number | null;

    /** ClaimableOnChannelClose inboundClaimingHtlcRoundedMsat */
    inboundClaimingHtlcRoundedMsat?: number | null;

    /** ClaimableOnChannelClose inboundHtlcRoundedMsat */
    inboundHtlcRoundedMsat?: number | null;
  }

  /** Represents a ClaimableOnChannelClose. */
  class ClaimableOnChannelClose implements IClaimableOnChannelClose {
    /**
     * Constructs a new ClaimableOnChannelClose.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IClaimableOnChannelClose);

    /** ClaimableOnChannelClose channelId. */
    public channelId: string;

    /** ClaimableOnChannelClose counterpartyNodeId. */
    public counterpartyNodeId: string;

    /** ClaimableOnChannelClose amountSatoshis. */
    public amountSatoshis: number;

    /** ClaimableOnChannelClose transactionFeeSatoshis. */
    public transactionFeeSatoshis: number;

    /** ClaimableOnChannelClose outboundPaymentHtlcRoundedMsat. */
    public outboundPaymentHtlcRoundedMsat: number;

    /** ClaimableOnChannelClose outboundForwardedHtlcRoundedMsat. */
    public outboundForwardedHtlcRoundedMsat: number;

    /** ClaimableOnChannelClose inboundClaimingHtlcRoundedMsat. */
    public inboundClaimingHtlcRoundedMsat: number;

    /** ClaimableOnChannelClose inboundHtlcRoundedMsat. */
    public inboundHtlcRoundedMsat: number;

    /**
     * Creates a new ClaimableOnChannelClose instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClaimableOnChannelClose instance
     */
    public static create(
      properties?: types_ldk.IClaimableOnChannelClose,
    ): types_ldk.ClaimableOnChannelClose;

    /**
     * Encodes the specified ClaimableOnChannelClose message. Does not implicitly {@link types_ldk.ClaimableOnChannelClose.verify|verify} messages.
     * @param message ClaimableOnChannelClose message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IClaimableOnChannelClose,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified ClaimableOnChannelClose message, length delimited. Does not implicitly {@link types_ldk.ClaimableOnChannelClose.verify|verify} messages.
     * @param message ClaimableOnChannelClose message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IClaimableOnChannelClose,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ClaimableOnChannelClose message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClaimableOnChannelClose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.ClaimableOnChannelClose;

    /**
     * Decodes a ClaimableOnChannelClose message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClaimableOnChannelClose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.ClaimableOnChannelClose;

    /**
     * Verifies a ClaimableOnChannelClose message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClaimableOnChannelClose message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClaimableOnChannelClose
     */
    public static fromObject(object: {
      [k: string]: any;
    }): types_ldk.ClaimableOnChannelClose;

    /**
     * Creates a plain object from a ClaimableOnChannelClose message. Also converts values to other types if specified.
     * @param message ClaimableOnChannelClose
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.ClaimableOnChannelClose,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClaimableOnChannelClose to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ClaimableOnChannelClose
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a ClaimableAwaitingConfirmations. */
  interface IClaimableAwaitingConfirmations {
    /** ClaimableAwaitingConfirmations channelId */
    channelId?: string | null;

    /** ClaimableAwaitingConfirmations counterpartyNodeId */
    counterpartyNodeId?: string | null;

    /** ClaimableAwaitingConfirmations amountSatoshis */
    amountSatoshis?: number | null;

    /** ClaimableAwaitingConfirmations confirmationHeight */
    confirmationHeight?: number | null;
  }

  /** Represents a ClaimableAwaitingConfirmations. */
  class ClaimableAwaitingConfirmations implements IClaimableAwaitingConfirmations {
    /**
     * Constructs a new ClaimableAwaitingConfirmations.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IClaimableAwaitingConfirmations);

    /** ClaimableAwaitingConfirmations channelId. */
    public channelId: string;

    /** ClaimableAwaitingConfirmations counterpartyNodeId. */
    public counterpartyNodeId: string;

    /** ClaimableAwaitingConfirmations amountSatoshis. */
    public amountSatoshis: number;

    /** ClaimableAwaitingConfirmations confirmationHeight. */
    public confirmationHeight: number;

    /**
     * Creates a new ClaimableAwaitingConfirmations instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClaimableAwaitingConfirmations instance
     */
    public static create(
      properties?: types_ldk.IClaimableAwaitingConfirmations,
    ): types_ldk.ClaimableAwaitingConfirmations;

    /**
     * Encodes the specified ClaimableAwaitingConfirmations message. Does not implicitly {@link types_ldk.ClaimableAwaitingConfirmations.verify|verify} messages.
     * @param message ClaimableAwaitingConfirmations message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IClaimableAwaitingConfirmations,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified ClaimableAwaitingConfirmations message, length delimited. Does not implicitly {@link types_ldk.ClaimableAwaitingConfirmations.verify|verify} messages.
     * @param message ClaimableAwaitingConfirmations message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IClaimableAwaitingConfirmations,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ClaimableAwaitingConfirmations message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClaimableAwaitingConfirmations
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.ClaimableAwaitingConfirmations;

    /**
     * Decodes a ClaimableAwaitingConfirmations message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClaimableAwaitingConfirmations
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.ClaimableAwaitingConfirmations;

    /**
     * Verifies a ClaimableAwaitingConfirmations message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ClaimableAwaitingConfirmations message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClaimableAwaitingConfirmations
     */
    public static fromObject(object: {
      [k: string]: any;
    }): types_ldk.ClaimableAwaitingConfirmations;

    /**
     * Creates a plain object from a ClaimableAwaitingConfirmations message. Also converts values to other types if specified.
     * @param message ClaimableAwaitingConfirmations
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.ClaimableAwaitingConfirmations,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ClaimableAwaitingConfirmations to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ClaimableAwaitingConfirmations
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a ContentiousClaimable. */
  interface IContentiousClaimable {
    /** ContentiousClaimable channelId */
    channelId?: string | null;

    /** ContentiousClaimable counterpartyNodeId */
    counterpartyNodeId?: string | null;

    /** ContentiousClaimable amountSatoshis */
    amountSatoshis?: number | null;

    /** ContentiousClaimable timeoutHeight */
    timeoutHeight?: number | null;

    /** ContentiousClaimable paymentHash */
    paymentHash?: string | null;

    /** ContentiousClaimable paymentPreimage */
    paymentPreimage?: string | null;
  }

  /** Represents a ContentiousClaimable. */
  class ContentiousClaimable implements IContentiousClaimable {
    /**
     * Constructs a new ContentiousClaimable.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IContentiousClaimable);

    /** ContentiousClaimable channelId. */
    public channelId: string;

    /** ContentiousClaimable counterpartyNodeId. */
    public counterpartyNodeId: string;

    /** ContentiousClaimable amountSatoshis. */
    public amountSatoshis: number;

    /** ContentiousClaimable timeoutHeight. */
    public timeoutHeight: number;

    /** ContentiousClaimable paymentHash. */
    public paymentHash: string;

    /** ContentiousClaimable paymentPreimage. */
    public paymentPreimage: string;

    /**
     * Creates a new ContentiousClaimable instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ContentiousClaimable instance
     */
    public static create(
      properties?: types_ldk.IContentiousClaimable,
    ): types_ldk.ContentiousClaimable;

    /**
     * Encodes the specified ContentiousClaimable message. Does not implicitly {@link types_ldk.ContentiousClaimable.verify|verify} messages.
     * @param message ContentiousClaimable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IContentiousClaimable,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified ContentiousClaimable message, length delimited. Does not implicitly {@link types_ldk.ContentiousClaimable.verify|verify} messages.
     * @param message ContentiousClaimable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IContentiousClaimable,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a ContentiousClaimable message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContentiousClaimable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.ContentiousClaimable;

    /**
     * Decodes a ContentiousClaimable message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ContentiousClaimable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.ContentiousClaimable;

    /**
     * Verifies a ContentiousClaimable message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ContentiousClaimable message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ContentiousClaimable
     */
    public static fromObject(object: {
      [k: string]: any;
    }): types_ldk.ContentiousClaimable;

    /**
     * Creates a plain object from a ContentiousClaimable message. Also converts values to other types if specified.
     * @param message ContentiousClaimable
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.ContentiousClaimable,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this ContentiousClaimable to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ContentiousClaimable
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a MaybeTimeoutClaimableHTLC. */
  interface IMaybeTimeoutClaimableHTLC {
    /** MaybeTimeoutClaimableHTLC channelId */
    channelId?: string | null;

    /** MaybeTimeoutClaimableHTLC counterpartyNodeId */
    counterpartyNodeId?: string | null;

    /** MaybeTimeoutClaimableHTLC amountSatoshis */
    amountSatoshis?: number | null;

    /** MaybeTimeoutClaimableHTLC claimableHeight */
    claimableHeight?: number | null;

    /** MaybeTimeoutClaimableHTLC paymentHash */
    paymentHash?: string | null;

    /** MaybeTimeoutClaimableHTLC outboundPayment */
    outboundPayment?: boolean | null;
  }

  /** Represents a MaybeTimeoutClaimableHTLC. */
  class MaybeTimeoutClaimableHTLC implements IMaybeTimeoutClaimableHTLC {
    /**
     * Constructs a new MaybeTimeoutClaimableHTLC.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IMaybeTimeoutClaimableHTLC);

    /** MaybeTimeoutClaimableHTLC channelId. */
    public channelId: string;

    /** MaybeTimeoutClaimableHTLC counterpartyNodeId. */
    public counterpartyNodeId: string;

    /** MaybeTimeoutClaimableHTLC amountSatoshis. */
    public amountSatoshis: number;

    /** MaybeTimeoutClaimableHTLC claimableHeight. */
    public claimableHeight: number;

    /** MaybeTimeoutClaimableHTLC paymentHash. */
    public paymentHash: string;

    /** MaybeTimeoutClaimableHTLC outboundPayment. */
    public outboundPayment: boolean;

    /**
     * Creates a new MaybeTimeoutClaimableHTLC instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MaybeTimeoutClaimableHTLC instance
     */
    public static create(
      properties?: types_ldk.IMaybeTimeoutClaimableHTLC,
    ): types_ldk.MaybeTimeoutClaimableHTLC;

    /**
     * Encodes the specified MaybeTimeoutClaimableHTLC message. Does not implicitly {@link types_ldk.MaybeTimeoutClaimableHTLC.verify|verify} messages.
     * @param message MaybeTimeoutClaimableHTLC message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IMaybeTimeoutClaimableHTLC,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified MaybeTimeoutClaimableHTLC message, length delimited. Does not implicitly {@link types_ldk.MaybeTimeoutClaimableHTLC.verify|verify} messages.
     * @param message MaybeTimeoutClaimableHTLC message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IMaybeTimeoutClaimableHTLC,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a MaybeTimeoutClaimableHTLC message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MaybeTimeoutClaimableHTLC
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.MaybeTimeoutClaimableHTLC;

    /**
     * Decodes a MaybeTimeoutClaimableHTLC message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MaybeTimeoutClaimableHTLC
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.MaybeTimeoutClaimableHTLC;

    /**
     * Verifies a MaybeTimeoutClaimableHTLC message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a MaybeTimeoutClaimableHTLC message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MaybeTimeoutClaimableHTLC
     */
    public static fromObject(object: {
      [k: string]: any;
    }): types_ldk.MaybeTimeoutClaimableHTLC;

    /**
     * Creates a plain object from a MaybeTimeoutClaimableHTLC message. Also converts values to other types if specified.
     * @param message MaybeTimeoutClaimableHTLC
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.MaybeTimeoutClaimableHTLC,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this MaybeTimeoutClaimableHTLC to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MaybeTimeoutClaimableHTLC
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a MaybePreimageClaimableHTLC. */
  interface IMaybePreimageClaimableHTLC {
    /** MaybePreimageClaimableHTLC channelId */
    channelId?: string | null;

    /** MaybePreimageClaimableHTLC counterpartyNodeId */
    counterpartyNodeId?: string | null;

    /** MaybePreimageClaimableHTLC amountSatoshis */
    amountSatoshis?: number | null;

    /** MaybePreimageClaimableHTLC expiryHeight */
    expiryHeight?: number | null;

    /** MaybePreimageClaimableHTLC paymentHash */
    paymentHash?: string | null;
  }

  /** Represents a MaybePreimageClaimableHTLC. */
  class MaybePreimageClaimableHTLC implements IMaybePreimageClaimableHTLC {
    /**
     * Constructs a new MaybePreimageClaimableHTLC.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IMaybePreimageClaimableHTLC);

    /** MaybePreimageClaimableHTLC channelId. */
    public channelId: string;

    /** MaybePreimageClaimableHTLC counterpartyNodeId. */
    public counterpartyNodeId: string;

    /** MaybePreimageClaimableHTLC amountSatoshis. */
    public amountSatoshis: number;

    /** MaybePreimageClaimableHTLC expiryHeight. */
    public expiryHeight: number;

    /** MaybePreimageClaimableHTLC paymentHash. */
    public paymentHash: string;

    /**
     * Creates a new MaybePreimageClaimableHTLC instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MaybePreimageClaimableHTLC instance
     */
    public static create(
      properties?: types_ldk.IMaybePreimageClaimableHTLC,
    ): types_ldk.MaybePreimageClaimableHTLC;

    /**
     * Encodes the specified MaybePreimageClaimableHTLC message. Does not implicitly {@link types_ldk.MaybePreimageClaimableHTLC.verify|verify} messages.
     * @param message MaybePreimageClaimableHTLC message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IMaybePreimageClaimableHTLC,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified MaybePreimageClaimableHTLC message, length delimited. Does not implicitly {@link types_ldk.MaybePreimageClaimableHTLC.verify|verify} messages.
     * @param message MaybePreimageClaimableHTLC message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IMaybePreimageClaimableHTLC,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a MaybePreimageClaimableHTLC message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MaybePreimageClaimableHTLC
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.MaybePreimageClaimableHTLC;

    /**
     * Decodes a MaybePreimageClaimableHTLC message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MaybePreimageClaimableHTLC
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.MaybePreimageClaimableHTLC;

    /**
     * Verifies a MaybePreimageClaimableHTLC message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a MaybePreimageClaimableHTLC message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MaybePreimageClaimableHTLC
     */
    public static fromObject(object: {
      [k: string]: any;
    }): types_ldk.MaybePreimageClaimableHTLC;

    /**
     * Creates a plain object from a MaybePreimageClaimableHTLC message. Also converts values to other types if specified.
     * @param message MaybePreimageClaimableHTLC
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.MaybePreimageClaimableHTLC,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this MaybePreimageClaimableHTLC to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MaybePreimageClaimableHTLC
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a CounterpartyRevokedOutputClaimable. */
  interface ICounterpartyRevokedOutputClaimable {
    /** CounterpartyRevokedOutputClaimable channelId */
    channelId?: string | null;

    /** CounterpartyRevokedOutputClaimable counterpartyNodeId */
    counterpartyNodeId?: string | null;

    /** CounterpartyRevokedOutputClaimable amountSatoshis */
    amountSatoshis?: number | null;
  }

  /** Represents a CounterpartyRevokedOutputClaimable. */
  class CounterpartyRevokedOutputClaimable
    implements ICounterpartyRevokedOutputClaimable
  {
    /**
     * Constructs a new CounterpartyRevokedOutputClaimable.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.ICounterpartyRevokedOutputClaimable);

    /** CounterpartyRevokedOutputClaimable channelId. */
    public channelId: string;

    /** CounterpartyRevokedOutputClaimable counterpartyNodeId. */
    public counterpartyNodeId: string;

    /** CounterpartyRevokedOutputClaimable amountSatoshis. */
    public amountSatoshis: number;

    /**
     * Creates a new CounterpartyRevokedOutputClaimable instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CounterpartyRevokedOutputClaimable instance
     */
    public static create(
      properties?: types_ldk.ICounterpartyRevokedOutputClaimable,
    ): types_ldk.CounterpartyRevokedOutputClaimable;

    /**
     * Encodes the specified CounterpartyRevokedOutputClaimable message. Does not implicitly {@link types_ldk.CounterpartyRevokedOutputClaimable.verify|verify} messages.
     * @param message CounterpartyRevokedOutputClaimable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.ICounterpartyRevokedOutputClaimable,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified CounterpartyRevokedOutputClaimable message, length delimited. Does not implicitly {@link types_ldk.CounterpartyRevokedOutputClaimable.verify|verify} messages.
     * @param message CounterpartyRevokedOutputClaimable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.ICounterpartyRevokedOutputClaimable,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a CounterpartyRevokedOutputClaimable message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CounterpartyRevokedOutputClaimable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.CounterpartyRevokedOutputClaimable;

    /**
     * Decodes a CounterpartyRevokedOutputClaimable message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CounterpartyRevokedOutputClaimable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.CounterpartyRevokedOutputClaimable;

    /**
     * Verifies a CounterpartyRevokedOutputClaimable message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a CounterpartyRevokedOutputClaimable message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CounterpartyRevokedOutputClaimable
     */
    public static fromObject(object: {
      [k: string]: any;
    }): types_ldk.CounterpartyRevokedOutputClaimable;

    /**
     * Creates a plain object from a CounterpartyRevokedOutputClaimable message. Also converts values to other types if specified.
     * @param message CounterpartyRevokedOutputClaimable
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.CounterpartyRevokedOutputClaimable,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this CounterpartyRevokedOutputClaimable to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CounterpartyRevokedOutputClaimable
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a PendingSweepBalance. */
  interface IPendingSweepBalance {
    /** PendingSweepBalance pendingBroadcast */
    pendingBroadcast?: types_ldk.IPendingBroadcast | null;

    /** PendingSweepBalance broadcastAwaitingConfirmation */
    broadcastAwaitingConfirmation?: types_ldk.IBroadcastAwaitingConfirmation | null;

    /** PendingSweepBalance awaitingThresholdConfirmations */
    awaitingThresholdConfirmations?: types_ldk.IAwaitingThresholdConfirmations | null;
  }

  /** Represents a PendingSweepBalance. */
  class PendingSweepBalance implements IPendingSweepBalance {
    /**
     * Constructs a new PendingSweepBalance.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IPendingSweepBalance);

    /** PendingSweepBalance pendingBroadcast. */
    public pendingBroadcast?: types_ldk.IPendingBroadcast | null;

    /** PendingSweepBalance broadcastAwaitingConfirmation. */
    public broadcastAwaitingConfirmation?: types_ldk.IBroadcastAwaitingConfirmation | null;

    /** PendingSweepBalance awaitingThresholdConfirmations. */
    public awaitingThresholdConfirmations?: types_ldk.IAwaitingThresholdConfirmations | null;

    /** PendingSweepBalance balanceType. */
    public balanceType?:
      | 'pendingBroadcast'
      | 'broadcastAwaitingConfirmation'
      | 'awaitingThresholdConfirmations';

    /**
     * Creates a new PendingSweepBalance instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PendingSweepBalance instance
     */
    public static create(
      properties?: types_ldk.IPendingSweepBalance,
    ): types_ldk.PendingSweepBalance;

    /**
     * Encodes the specified PendingSweepBalance message. Does not implicitly {@link types_ldk.PendingSweepBalance.verify|verify} messages.
     * @param message PendingSweepBalance message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IPendingSweepBalance,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified PendingSweepBalance message, length delimited. Does not implicitly {@link types_ldk.PendingSweepBalance.verify|verify} messages.
     * @param message PendingSweepBalance message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IPendingSweepBalance,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a PendingSweepBalance message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PendingSweepBalance
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.PendingSweepBalance;

    /**
     * Decodes a PendingSweepBalance message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PendingSweepBalance
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.PendingSweepBalance;

    /**
     * Verifies a PendingSweepBalance message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a PendingSweepBalance message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PendingSweepBalance
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.PendingSweepBalance;

    /**
     * Creates a plain object from a PendingSweepBalance message. Also converts values to other types if specified.
     * @param message PendingSweepBalance
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.PendingSweepBalance,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this PendingSweepBalance to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PendingSweepBalance
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a PendingBroadcast. */
  interface IPendingBroadcast {
    /** PendingBroadcast channelId */
    channelId?: string | null;

    /** PendingBroadcast amountSatoshis */
    amountSatoshis?: number | null;
  }

  /** Represents a PendingBroadcast. */
  class PendingBroadcast implements IPendingBroadcast {
    /**
     * Constructs a new PendingBroadcast.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IPendingBroadcast);

    /** PendingBroadcast channelId. */
    public channelId?: string | null;

    /** PendingBroadcast amountSatoshis. */
    public amountSatoshis: number;

    /** PendingBroadcast _channelId. */
    public _channelId?: 'channelId';

    /**
     * Creates a new PendingBroadcast instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PendingBroadcast instance
     */
    public static create(
      properties?: types_ldk.IPendingBroadcast,
    ): types_ldk.PendingBroadcast;

    /**
     * Encodes the specified PendingBroadcast message. Does not implicitly {@link types_ldk.PendingBroadcast.verify|verify} messages.
     * @param message PendingBroadcast message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IPendingBroadcast,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified PendingBroadcast message, length delimited. Does not implicitly {@link types_ldk.PendingBroadcast.verify|verify} messages.
     * @param message PendingBroadcast message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IPendingBroadcast,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a PendingBroadcast message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PendingBroadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.PendingBroadcast;

    /**
     * Decodes a PendingBroadcast message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PendingBroadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.PendingBroadcast;

    /**
     * Verifies a PendingBroadcast message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a PendingBroadcast message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PendingBroadcast
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.PendingBroadcast;

    /**
     * Creates a plain object from a PendingBroadcast message. Also converts values to other types if specified.
     * @param message PendingBroadcast
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.PendingBroadcast,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this PendingBroadcast to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PendingBroadcast
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a BroadcastAwaitingConfirmation. */
  interface IBroadcastAwaitingConfirmation {
    /** BroadcastAwaitingConfirmation channelId */
    channelId?: string | null;

    /** BroadcastAwaitingConfirmation latestBroadcastHeight */
    latestBroadcastHeight?: number | null;

    /** BroadcastAwaitingConfirmation latestSpendingTxid */
    latestSpendingTxid?: string | null;

    /** BroadcastAwaitingConfirmation amountSatoshis */
    amountSatoshis?: number | null;
  }

  /** Represents a BroadcastAwaitingConfirmation. */
  class BroadcastAwaitingConfirmation implements IBroadcastAwaitingConfirmation {
    /**
     * Constructs a new BroadcastAwaitingConfirmation.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IBroadcastAwaitingConfirmation);

    /** BroadcastAwaitingConfirmation channelId. */
    public channelId?: string | null;

    /** BroadcastAwaitingConfirmation latestBroadcastHeight. */
    public latestBroadcastHeight: number;

    /** BroadcastAwaitingConfirmation latestSpendingTxid. */
    public latestSpendingTxid: string;

    /** BroadcastAwaitingConfirmation amountSatoshis. */
    public amountSatoshis: number;

    /** BroadcastAwaitingConfirmation _channelId. */
    public _channelId?: 'channelId';

    /**
     * Creates a new BroadcastAwaitingConfirmation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BroadcastAwaitingConfirmation instance
     */
    public static create(
      properties?: types_ldk.IBroadcastAwaitingConfirmation,
    ): types_ldk.BroadcastAwaitingConfirmation;

    /**
     * Encodes the specified BroadcastAwaitingConfirmation message. Does not implicitly {@link types_ldk.BroadcastAwaitingConfirmation.verify|verify} messages.
     * @param message BroadcastAwaitingConfirmation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IBroadcastAwaitingConfirmation,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified BroadcastAwaitingConfirmation message, length delimited. Does not implicitly {@link types_ldk.BroadcastAwaitingConfirmation.verify|verify} messages.
     * @param message BroadcastAwaitingConfirmation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IBroadcastAwaitingConfirmation,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a BroadcastAwaitingConfirmation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BroadcastAwaitingConfirmation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.BroadcastAwaitingConfirmation;

    /**
     * Decodes a BroadcastAwaitingConfirmation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BroadcastAwaitingConfirmation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.BroadcastAwaitingConfirmation;

    /**
     * Verifies a BroadcastAwaitingConfirmation message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BroadcastAwaitingConfirmation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BroadcastAwaitingConfirmation
     */
    public static fromObject(object: {
      [k: string]: any;
    }): types_ldk.BroadcastAwaitingConfirmation;

    /**
     * Creates a plain object from a BroadcastAwaitingConfirmation message. Also converts values to other types if specified.
     * @param message BroadcastAwaitingConfirmation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.BroadcastAwaitingConfirmation,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this BroadcastAwaitingConfirmation to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BroadcastAwaitingConfirmation
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of an AwaitingThresholdConfirmations. */
  interface IAwaitingThresholdConfirmations {
    /** AwaitingThresholdConfirmations channelId */
    channelId?: string | null;

    /** AwaitingThresholdConfirmations latestSpendingTxid */
    latestSpendingTxid?: string | null;

    /** AwaitingThresholdConfirmations confirmationHash */
    confirmationHash?: string | null;

    /** AwaitingThresholdConfirmations confirmationHeight */
    confirmationHeight?: number | null;

    /** AwaitingThresholdConfirmations amountSatoshis */
    amountSatoshis?: number | null;
  }

  /** Represents an AwaitingThresholdConfirmations. */
  class AwaitingThresholdConfirmations implements IAwaitingThresholdConfirmations {
    /**
     * Constructs a new AwaitingThresholdConfirmations.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IAwaitingThresholdConfirmations);

    /** AwaitingThresholdConfirmations channelId. */
    public channelId?: string | null;

    /** AwaitingThresholdConfirmations latestSpendingTxid. */
    public latestSpendingTxid: string;

    /** AwaitingThresholdConfirmations confirmationHash. */
    public confirmationHash: string;

    /** AwaitingThresholdConfirmations confirmationHeight. */
    public confirmationHeight: number;

    /** AwaitingThresholdConfirmations amountSatoshis. */
    public amountSatoshis: number;

    /** AwaitingThresholdConfirmations _channelId. */
    public _channelId?: 'channelId';

    /**
     * Creates a new AwaitingThresholdConfirmations instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AwaitingThresholdConfirmations instance
     */
    public static create(
      properties?: types_ldk.IAwaitingThresholdConfirmations,
    ): types_ldk.AwaitingThresholdConfirmations;

    /**
     * Encodes the specified AwaitingThresholdConfirmations message. Does not implicitly {@link types_ldk.AwaitingThresholdConfirmations.verify|verify} messages.
     * @param message AwaitingThresholdConfirmations message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IAwaitingThresholdConfirmations,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified AwaitingThresholdConfirmations message, length delimited. Does not implicitly {@link types_ldk.AwaitingThresholdConfirmations.verify|verify} messages.
     * @param message AwaitingThresholdConfirmations message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IAwaitingThresholdConfirmations,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes an AwaitingThresholdConfirmations message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AwaitingThresholdConfirmations
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.AwaitingThresholdConfirmations;

    /**
     * Decodes an AwaitingThresholdConfirmations message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AwaitingThresholdConfirmations
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.AwaitingThresholdConfirmations;

    /**
     * Verifies an AwaitingThresholdConfirmations message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an AwaitingThresholdConfirmations message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AwaitingThresholdConfirmations
     */
    public static fromObject(object: {
      [k: string]: any;
    }): types_ldk.AwaitingThresholdConfirmations;

    /**
     * Creates a plain object from an AwaitingThresholdConfirmations message. Also converts values to other types if specified.
     * @param message AwaitingThresholdConfirmations
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.AwaitingThresholdConfirmations,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this AwaitingThresholdConfirmations to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AwaitingThresholdConfirmations
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a PageToken. */
  interface IPageToken {
    /** PageToken token */
    token?: string | null;

    /** PageToken index */
    index?: number | null;
  }

  /** Represents a PageToken. */
  class PageToken implements IPageToken {
    /**
     * Constructs a new PageToken.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IPageToken);

    /** PageToken token. */
    public token: string;

    /** PageToken index. */
    public index: number;

    /**
     * Creates a new PageToken instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PageToken instance
     */
    public static create(properties?: types_ldk.IPageToken): types_ldk.PageToken;

    /**
     * Encodes the specified PageToken message. Does not implicitly {@link types_ldk.PageToken.verify|verify} messages.
     * @param message PageToken message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IPageToken,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified PageToken message, length delimited. Does not implicitly {@link types_ldk.PageToken.verify|verify} messages.
     * @param message PageToken message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IPageToken,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a PageToken message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PageToken
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.PageToken;

    /**
     * Decodes a PageToken message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PageToken
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.PageToken;

    /**
     * Verifies a PageToken message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a PageToken message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PageToken
     */
    public static fromObject(object: { [k: string]: any }): types_ldk.PageToken;

    /**
     * Creates a plain object from a PageToken message. Also converts values to other types if specified.
     * @param message PageToken
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.PageToken,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this PageToken to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PageToken
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Bolt11InvoiceDescription. */
  interface IBolt11InvoiceDescription {
    /** Bolt11InvoiceDescription direct */
    direct?: string | null;

    /** Bolt11InvoiceDescription hash */
    hash?: string | null;
  }

  /** Represents a Bolt11InvoiceDescription. */
  class Bolt11InvoiceDescription implements IBolt11InvoiceDescription {
    /**
     * Constructs a new Bolt11InvoiceDescription.
     * @param [properties] Properties to set
     */
    constructor(properties?: types_ldk.IBolt11InvoiceDescription);

    /** Bolt11InvoiceDescription direct. */
    public direct?: string | null;

    /** Bolt11InvoiceDescription hash. */
    public hash?: string | null;

    /** Bolt11InvoiceDescription kind. */
    public kind?: 'direct' | 'hash';

    /**
     * Creates a new Bolt11InvoiceDescription instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bolt11InvoiceDescription instance
     */
    public static create(
      properties?: types_ldk.IBolt11InvoiceDescription,
    ): types_ldk.Bolt11InvoiceDescription;

    /**
     * Encodes the specified Bolt11InvoiceDescription message. Does not implicitly {@link types_ldk.Bolt11InvoiceDescription.verify|verify} messages.
     * @param message Bolt11InvoiceDescription message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: types_ldk.IBolt11InvoiceDescription,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified Bolt11InvoiceDescription message, length delimited. Does not implicitly {@link types_ldk.Bolt11InvoiceDescription.verify|verify} messages.
     * @param message Bolt11InvoiceDescription message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: types_ldk.IBolt11InvoiceDescription,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a Bolt11InvoiceDescription message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bolt11InvoiceDescription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): types_ldk.Bolt11InvoiceDescription;

    /**
     * Decodes a Bolt11InvoiceDescription message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Bolt11InvoiceDescription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): types_ldk.Bolt11InvoiceDescription;

    /**
     * Verifies a Bolt11InvoiceDescription message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Bolt11InvoiceDescription message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Bolt11InvoiceDescription
     */
    public static fromObject(object: {
      [k: string]: any;
    }): types_ldk.Bolt11InvoiceDescription;

    /**
     * Creates a plain object from a Bolt11InvoiceDescription message. Also converts values to other types if specified.
     * @param message Bolt11InvoiceDescription
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: types_ldk.Bolt11InvoiceDescription,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this Bolt11InvoiceDescription to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Bolt11InvoiceDescription
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }
}
