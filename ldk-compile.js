/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const api = $root.api = (() => {

    /**
     * Namespace api.
     * @exports api
     * @namespace
     */
    const api = {};

    api.GetNodeInfoRequest = (function() {

        /**
         * Properties of a GetNodeInfoRequest.
         * @memberof api
         * @interface IGetNodeInfoRequest
         */

        /**
         * Constructs a new GetNodeInfoRequest.
         * @memberof api
         * @classdesc Represents a GetNodeInfoRequest.
         * @implements IGetNodeInfoRequest
         * @constructor
         * @param {api.IGetNodeInfoRequest=} [properties] Properties to set
         */
        function GetNodeInfoRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetNodeInfoRequest instance using the specified properties.
         * @function create
         * @memberof api.GetNodeInfoRequest
         * @static
         * @param {api.IGetNodeInfoRequest=} [properties] Properties to set
         * @returns {api.GetNodeInfoRequest} GetNodeInfoRequest instance
         */
        GetNodeInfoRequest.create = function create(properties) {
            return new GetNodeInfoRequest(properties);
        };

        /**
         * Encodes the specified GetNodeInfoRequest message. Does not implicitly {@link api.GetNodeInfoRequest.verify|verify} messages.
         * @function encode
         * @memberof api.GetNodeInfoRequest
         * @static
         * @param {api.IGetNodeInfoRequest} message GetNodeInfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetNodeInfoRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetNodeInfoRequest message, length delimited. Does not implicitly {@link api.GetNodeInfoRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.GetNodeInfoRequest
         * @static
         * @param {api.IGetNodeInfoRequest} message GetNodeInfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetNodeInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetNodeInfoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.GetNodeInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.GetNodeInfoRequest} GetNodeInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetNodeInfoRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.GetNodeInfoRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetNodeInfoRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.GetNodeInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.GetNodeInfoRequest} GetNodeInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetNodeInfoRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetNodeInfoRequest message.
         * @function verify
         * @memberof api.GetNodeInfoRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetNodeInfoRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetNodeInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.GetNodeInfoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.GetNodeInfoRequest} GetNodeInfoRequest
         */
        GetNodeInfoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.api.GetNodeInfoRequest)
                return object;
            return new $root.api.GetNodeInfoRequest();
        };

        /**
         * Creates a plain object from a GetNodeInfoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.GetNodeInfoRequest
         * @static
         * @param {api.GetNodeInfoRequest} message GetNodeInfoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetNodeInfoRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetNodeInfoRequest to JSON.
         * @function toJSON
         * @memberof api.GetNodeInfoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetNodeInfoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetNodeInfoRequest
         * @function getTypeUrl
         * @memberof api.GetNodeInfoRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetNodeInfoRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.GetNodeInfoRequest";
        };

        return GetNodeInfoRequest;
    })();

    api.GetNodeInfoResponse = (function() {

        /**
         * Properties of a GetNodeInfoResponse.
         * @memberof api
         * @interface IGetNodeInfoResponse
         * @property {string|null} [nodeId] GetNodeInfoResponse nodeId
         * @property {types.IBestBlock|null} [currentBestBlock] GetNodeInfoResponse currentBestBlock
         * @property {number|Long|null} [latestLightningWalletSyncTimestamp] GetNodeInfoResponse latestLightningWalletSyncTimestamp
         * @property {number|Long|null} [latestOnchainWalletSyncTimestamp] GetNodeInfoResponse latestOnchainWalletSyncTimestamp
         * @property {number|Long|null} [latestFeeRateCacheUpdateTimestamp] GetNodeInfoResponse latestFeeRateCacheUpdateTimestamp
         * @property {number|Long|null} [latestRgsSnapshotTimestamp] GetNodeInfoResponse latestRgsSnapshotTimestamp
         * @property {number|Long|null} [latestNodeAnnouncementBroadcastTimestamp] GetNodeInfoResponse latestNodeAnnouncementBroadcastTimestamp
         */

        /**
         * Constructs a new GetNodeInfoResponse.
         * @memberof api
         * @classdesc Represents a GetNodeInfoResponse.
         * @implements IGetNodeInfoResponse
         * @constructor
         * @param {api.IGetNodeInfoResponse=} [properties] Properties to set
         */
        function GetNodeInfoResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetNodeInfoResponse nodeId.
         * @member {string} nodeId
         * @memberof api.GetNodeInfoResponse
         * @instance
         */
        GetNodeInfoResponse.prototype.nodeId = "";

        /**
         * GetNodeInfoResponse currentBestBlock.
         * @member {types.IBestBlock|null|undefined} currentBestBlock
         * @memberof api.GetNodeInfoResponse
         * @instance
         */
        GetNodeInfoResponse.prototype.currentBestBlock = null;

        /**
         * GetNodeInfoResponse latestLightningWalletSyncTimestamp.
         * @member {number|Long|null|undefined} latestLightningWalletSyncTimestamp
         * @memberof api.GetNodeInfoResponse
         * @instance
         */
        GetNodeInfoResponse.prototype.latestLightningWalletSyncTimestamp = null;

        /**
         * GetNodeInfoResponse latestOnchainWalletSyncTimestamp.
         * @member {number|Long|null|undefined} latestOnchainWalletSyncTimestamp
         * @memberof api.GetNodeInfoResponse
         * @instance
         */
        GetNodeInfoResponse.prototype.latestOnchainWalletSyncTimestamp = null;

        /**
         * GetNodeInfoResponse latestFeeRateCacheUpdateTimestamp.
         * @member {number|Long|null|undefined} latestFeeRateCacheUpdateTimestamp
         * @memberof api.GetNodeInfoResponse
         * @instance
         */
        GetNodeInfoResponse.prototype.latestFeeRateCacheUpdateTimestamp = null;

        /**
         * GetNodeInfoResponse latestRgsSnapshotTimestamp.
         * @member {number|Long|null|undefined} latestRgsSnapshotTimestamp
         * @memberof api.GetNodeInfoResponse
         * @instance
         */
        GetNodeInfoResponse.prototype.latestRgsSnapshotTimestamp = null;

        /**
         * GetNodeInfoResponse latestNodeAnnouncementBroadcastTimestamp.
         * @member {number|Long|null|undefined} latestNodeAnnouncementBroadcastTimestamp
         * @memberof api.GetNodeInfoResponse
         * @instance
         */
        GetNodeInfoResponse.prototype.latestNodeAnnouncementBroadcastTimestamp = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * GetNodeInfoResponse _latestLightningWalletSyncTimestamp.
         * @member {"latestLightningWalletSyncTimestamp"|undefined} _latestLightningWalletSyncTimestamp
         * @memberof api.GetNodeInfoResponse
         * @instance
         */
        Object.defineProperty(GetNodeInfoResponse.prototype, "_latestLightningWalletSyncTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["latestLightningWalletSyncTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * GetNodeInfoResponse _latestOnchainWalletSyncTimestamp.
         * @member {"latestOnchainWalletSyncTimestamp"|undefined} _latestOnchainWalletSyncTimestamp
         * @memberof api.GetNodeInfoResponse
         * @instance
         */
        Object.defineProperty(GetNodeInfoResponse.prototype, "_latestOnchainWalletSyncTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["latestOnchainWalletSyncTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * GetNodeInfoResponse _latestFeeRateCacheUpdateTimestamp.
         * @member {"latestFeeRateCacheUpdateTimestamp"|undefined} _latestFeeRateCacheUpdateTimestamp
         * @memberof api.GetNodeInfoResponse
         * @instance
         */
        Object.defineProperty(GetNodeInfoResponse.prototype, "_latestFeeRateCacheUpdateTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["latestFeeRateCacheUpdateTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * GetNodeInfoResponse _latestRgsSnapshotTimestamp.
         * @member {"latestRgsSnapshotTimestamp"|undefined} _latestRgsSnapshotTimestamp
         * @memberof api.GetNodeInfoResponse
         * @instance
         */
        Object.defineProperty(GetNodeInfoResponse.prototype, "_latestRgsSnapshotTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["latestRgsSnapshotTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * GetNodeInfoResponse _latestNodeAnnouncementBroadcastTimestamp.
         * @member {"latestNodeAnnouncementBroadcastTimestamp"|undefined} _latestNodeAnnouncementBroadcastTimestamp
         * @memberof api.GetNodeInfoResponse
         * @instance
         */
        Object.defineProperty(GetNodeInfoResponse.prototype, "_latestNodeAnnouncementBroadcastTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["latestNodeAnnouncementBroadcastTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new GetNodeInfoResponse instance using the specified properties.
         * @function create
         * @memberof api.GetNodeInfoResponse
         * @static
         * @param {api.IGetNodeInfoResponse=} [properties] Properties to set
         * @returns {api.GetNodeInfoResponse} GetNodeInfoResponse instance
         */
        GetNodeInfoResponse.create = function create(properties) {
            return new GetNodeInfoResponse(properties);
        };

        /**
         * Encodes the specified GetNodeInfoResponse message. Does not implicitly {@link api.GetNodeInfoResponse.verify|verify} messages.
         * @function encode
         * @memberof api.GetNodeInfoResponse
         * @static
         * @param {api.IGetNodeInfoResponse} message GetNodeInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetNodeInfoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nodeId != null && Object.hasOwnProperty.call(message, "nodeId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nodeId);
            if (message.currentBestBlock != null && Object.hasOwnProperty.call(message, "currentBestBlock"))
                $root.types.BestBlock.encode(message.currentBestBlock, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.latestLightningWalletSyncTimestamp != null && Object.hasOwnProperty.call(message, "latestLightningWalletSyncTimestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.latestLightningWalletSyncTimestamp);
            if (message.latestOnchainWalletSyncTimestamp != null && Object.hasOwnProperty.call(message, "latestOnchainWalletSyncTimestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.latestOnchainWalletSyncTimestamp);
            if (message.latestFeeRateCacheUpdateTimestamp != null && Object.hasOwnProperty.call(message, "latestFeeRateCacheUpdateTimestamp"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.latestFeeRateCacheUpdateTimestamp);
            if (message.latestRgsSnapshotTimestamp != null && Object.hasOwnProperty.call(message, "latestRgsSnapshotTimestamp"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.latestRgsSnapshotTimestamp);
            if (message.latestNodeAnnouncementBroadcastTimestamp != null && Object.hasOwnProperty.call(message, "latestNodeAnnouncementBroadcastTimestamp"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.latestNodeAnnouncementBroadcastTimestamp);
            return writer;
        };

        /**
         * Encodes the specified GetNodeInfoResponse message, length delimited. Does not implicitly {@link api.GetNodeInfoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.GetNodeInfoResponse
         * @static
         * @param {api.IGetNodeInfoResponse} message GetNodeInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetNodeInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetNodeInfoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.GetNodeInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.GetNodeInfoResponse} GetNodeInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetNodeInfoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.GetNodeInfoResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.nodeId = reader.string();
                        break;
                    }
                case 3: {
                        message.currentBestBlock = $root.types.BestBlock.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.latestLightningWalletSyncTimestamp = reader.uint64();
                        break;
                    }
                case 5: {
                        message.latestOnchainWalletSyncTimestamp = reader.uint64();
                        break;
                    }
                case 6: {
                        message.latestFeeRateCacheUpdateTimestamp = reader.uint64();
                        break;
                    }
                case 7: {
                        message.latestRgsSnapshotTimestamp = reader.uint64();
                        break;
                    }
                case 8: {
                        message.latestNodeAnnouncementBroadcastTimestamp = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetNodeInfoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.GetNodeInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.GetNodeInfoResponse} GetNodeInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetNodeInfoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetNodeInfoResponse message.
         * @function verify
         * @memberof api.GetNodeInfoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetNodeInfoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                if (!$util.isString(message.nodeId))
                    return "nodeId: string expected";
            if (message.currentBestBlock != null && message.hasOwnProperty("currentBestBlock")) {
                let error = $root.types.BestBlock.verify(message.currentBestBlock);
                if (error)
                    return "currentBestBlock." + error;
            }
            if (message.latestLightningWalletSyncTimestamp != null && message.hasOwnProperty("latestLightningWalletSyncTimestamp")) {
                properties._latestLightningWalletSyncTimestamp = 1;
                if (!$util.isInteger(message.latestLightningWalletSyncTimestamp) && !(message.latestLightningWalletSyncTimestamp && $util.isInteger(message.latestLightningWalletSyncTimestamp.low) && $util.isInteger(message.latestLightningWalletSyncTimestamp.high)))
                    return "latestLightningWalletSyncTimestamp: integer|Long expected";
            }
            if (message.latestOnchainWalletSyncTimestamp != null && message.hasOwnProperty("latestOnchainWalletSyncTimestamp")) {
                properties._latestOnchainWalletSyncTimestamp = 1;
                if (!$util.isInteger(message.latestOnchainWalletSyncTimestamp) && !(message.latestOnchainWalletSyncTimestamp && $util.isInteger(message.latestOnchainWalletSyncTimestamp.low) && $util.isInteger(message.latestOnchainWalletSyncTimestamp.high)))
                    return "latestOnchainWalletSyncTimestamp: integer|Long expected";
            }
            if (message.latestFeeRateCacheUpdateTimestamp != null && message.hasOwnProperty("latestFeeRateCacheUpdateTimestamp")) {
                properties._latestFeeRateCacheUpdateTimestamp = 1;
                if (!$util.isInteger(message.latestFeeRateCacheUpdateTimestamp) && !(message.latestFeeRateCacheUpdateTimestamp && $util.isInteger(message.latestFeeRateCacheUpdateTimestamp.low) && $util.isInteger(message.latestFeeRateCacheUpdateTimestamp.high)))
                    return "latestFeeRateCacheUpdateTimestamp: integer|Long expected";
            }
            if (message.latestRgsSnapshotTimestamp != null && message.hasOwnProperty("latestRgsSnapshotTimestamp")) {
                properties._latestRgsSnapshotTimestamp = 1;
                if (!$util.isInteger(message.latestRgsSnapshotTimestamp) && !(message.latestRgsSnapshotTimestamp && $util.isInteger(message.latestRgsSnapshotTimestamp.low) && $util.isInteger(message.latestRgsSnapshotTimestamp.high)))
                    return "latestRgsSnapshotTimestamp: integer|Long expected";
            }
            if (message.latestNodeAnnouncementBroadcastTimestamp != null && message.hasOwnProperty("latestNodeAnnouncementBroadcastTimestamp")) {
                properties._latestNodeAnnouncementBroadcastTimestamp = 1;
                if (!$util.isInteger(message.latestNodeAnnouncementBroadcastTimestamp) && !(message.latestNodeAnnouncementBroadcastTimestamp && $util.isInteger(message.latestNodeAnnouncementBroadcastTimestamp.low) && $util.isInteger(message.latestNodeAnnouncementBroadcastTimestamp.high)))
                    return "latestNodeAnnouncementBroadcastTimestamp: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a GetNodeInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.GetNodeInfoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.GetNodeInfoResponse} GetNodeInfoResponse
         */
        GetNodeInfoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.api.GetNodeInfoResponse)
                return object;
            let message = new $root.api.GetNodeInfoResponse();
            if (object.nodeId != null)
                message.nodeId = String(object.nodeId);
            if (object.currentBestBlock != null) {
                if (typeof object.currentBestBlock !== "object")
                    throw TypeError(".api.GetNodeInfoResponse.currentBestBlock: object expected");
                message.currentBestBlock = $root.types.BestBlock.fromObject(object.currentBestBlock);
            }
            if (object.latestLightningWalletSyncTimestamp != null)
                if ($util.Long)
                    (message.latestLightningWalletSyncTimestamp = $util.Long.fromValue(object.latestLightningWalletSyncTimestamp)).unsigned = true;
                else if (typeof object.latestLightningWalletSyncTimestamp === "string")
                    message.latestLightningWalletSyncTimestamp = parseInt(object.latestLightningWalletSyncTimestamp, 10);
                else if (typeof object.latestLightningWalletSyncTimestamp === "number")
                    message.latestLightningWalletSyncTimestamp = object.latestLightningWalletSyncTimestamp;
                else if (typeof object.latestLightningWalletSyncTimestamp === "object")
                    message.latestLightningWalletSyncTimestamp = new $util.LongBits(object.latestLightningWalletSyncTimestamp.low >>> 0, object.latestLightningWalletSyncTimestamp.high >>> 0).toNumber(true);
            if (object.latestOnchainWalletSyncTimestamp != null)
                if ($util.Long)
                    (message.latestOnchainWalletSyncTimestamp = $util.Long.fromValue(object.latestOnchainWalletSyncTimestamp)).unsigned = true;
                else if (typeof object.latestOnchainWalletSyncTimestamp === "string")
                    message.latestOnchainWalletSyncTimestamp = parseInt(object.latestOnchainWalletSyncTimestamp, 10);
                else if (typeof object.latestOnchainWalletSyncTimestamp === "number")
                    message.latestOnchainWalletSyncTimestamp = object.latestOnchainWalletSyncTimestamp;
                else if (typeof object.latestOnchainWalletSyncTimestamp === "object")
                    message.latestOnchainWalletSyncTimestamp = new $util.LongBits(object.latestOnchainWalletSyncTimestamp.low >>> 0, object.latestOnchainWalletSyncTimestamp.high >>> 0).toNumber(true);
            if (object.latestFeeRateCacheUpdateTimestamp != null)
                if ($util.Long)
                    (message.latestFeeRateCacheUpdateTimestamp = $util.Long.fromValue(object.latestFeeRateCacheUpdateTimestamp)).unsigned = true;
                else if (typeof object.latestFeeRateCacheUpdateTimestamp === "string")
                    message.latestFeeRateCacheUpdateTimestamp = parseInt(object.latestFeeRateCacheUpdateTimestamp, 10);
                else if (typeof object.latestFeeRateCacheUpdateTimestamp === "number")
                    message.latestFeeRateCacheUpdateTimestamp = object.latestFeeRateCacheUpdateTimestamp;
                else if (typeof object.latestFeeRateCacheUpdateTimestamp === "object")
                    message.latestFeeRateCacheUpdateTimestamp = new $util.LongBits(object.latestFeeRateCacheUpdateTimestamp.low >>> 0, object.latestFeeRateCacheUpdateTimestamp.high >>> 0).toNumber(true);
            if (object.latestRgsSnapshotTimestamp != null)
                if ($util.Long)
                    (message.latestRgsSnapshotTimestamp = $util.Long.fromValue(object.latestRgsSnapshotTimestamp)).unsigned = true;
                else if (typeof object.latestRgsSnapshotTimestamp === "string")
                    message.latestRgsSnapshotTimestamp = parseInt(object.latestRgsSnapshotTimestamp, 10);
                else if (typeof object.latestRgsSnapshotTimestamp === "number")
                    message.latestRgsSnapshotTimestamp = object.latestRgsSnapshotTimestamp;
                else if (typeof object.latestRgsSnapshotTimestamp === "object")
                    message.latestRgsSnapshotTimestamp = new $util.LongBits(object.latestRgsSnapshotTimestamp.low >>> 0, object.latestRgsSnapshotTimestamp.high >>> 0).toNumber(true);
            if (object.latestNodeAnnouncementBroadcastTimestamp != null)
                if ($util.Long)
                    (message.latestNodeAnnouncementBroadcastTimestamp = $util.Long.fromValue(object.latestNodeAnnouncementBroadcastTimestamp)).unsigned = true;
                else if (typeof object.latestNodeAnnouncementBroadcastTimestamp === "string")
                    message.latestNodeAnnouncementBroadcastTimestamp = parseInt(object.latestNodeAnnouncementBroadcastTimestamp, 10);
                else if (typeof object.latestNodeAnnouncementBroadcastTimestamp === "number")
                    message.latestNodeAnnouncementBroadcastTimestamp = object.latestNodeAnnouncementBroadcastTimestamp;
                else if (typeof object.latestNodeAnnouncementBroadcastTimestamp === "object")
                    message.latestNodeAnnouncementBroadcastTimestamp = new $util.LongBits(object.latestNodeAnnouncementBroadcastTimestamp.low >>> 0, object.latestNodeAnnouncementBroadcastTimestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a GetNodeInfoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.GetNodeInfoResponse
         * @static
         * @param {api.GetNodeInfoResponse} message GetNodeInfoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetNodeInfoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.nodeId = "";
                object.currentBestBlock = null;
            }
            if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                object.nodeId = message.nodeId;
            if (message.currentBestBlock != null && message.hasOwnProperty("currentBestBlock"))
                object.currentBestBlock = $root.types.BestBlock.toObject(message.currentBestBlock, options);
            if (message.latestLightningWalletSyncTimestamp != null && message.hasOwnProperty("latestLightningWalletSyncTimestamp")) {
                if (typeof message.latestLightningWalletSyncTimestamp === "number")
                    object.latestLightningWalletSyncTimestamp = options.longs === String ? String(message.latestLightningWalletSyncTimestamp) : message.latestLightningWalletSyncTimestamp;
                else
                    object.latestLightningWalletSyncTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.latestLightningWalletSyncTimestamp) : options.longs === Number ? new $util.LongBits(message.latestLightningWalletSyncTimestamp.low >>> 0, message.latestLightningWalletSyncTimestamp.high >>> 0).toNumber(true) : message.latestLightningWalletSyncTimestamp;
                if (options.oneofs)
                    object._latestLightningWalletSyncTimestamp = "latestLightningWalletSyncTimestamp";
            }
            if (message.latestOnchainWalletSyncTimestamp != null && message.hasOwnProperty("latestOnchainWalletSyncTimestamp")) {
                if (typeof message.latestOnchainWalletSyncTimestamp === "number")
                    object.latestOnchainWalletSyncTimestamp = options.longs === String ? String(message.latestOnchainWalletSyncTimestamp) : message.latestOnchainWalletSyncTimestamp;
                else
                    object.latestOnchainWalletSyncTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.latestOnchainWalletSyncTimestamp) : options.longs === Number ? new $util.LongBits(message.latestOnchainWalletSyncTimestamp.low >>> 0, message.latestOnchainWalletSyncTimestamp.high >>> 0).toNumber(true) : message.latestOnchainWalletSyncTimestamp;
                if (options.oneofs)
                    object._latestOnchainWalletSyncTimestamp = "latestOnchainWalletSyncTimestamp";
            }
            if (message.latestFeeRateCacheUpdateTimestamp != null && message.hasOwnProperty("latestFeeRateCacheUpdateTimestamp")) {
                if (typeof message.latestFeeRateCacheUpdateTimestamp === "number")
                    object.latestFeeRateCacheUpdateTimestamp = options.longs === String ? String(message.latestFeeRateCacheUpdateTimestamp) : message.latestFeeRateCacheUpdateTimestamp;
                else
                    object.latestFeeRateCacheUpdateTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.latestFeeRateCacheUpdateTimestamp) : options.longs === Number ? new $util.LongBits(message.latestFeeRateCacheUpdateTimestamp.low >>> 0, message.latestFeeRateCacheUpdateTimestamp.high >>> 0).toNumber(true) : message.latestFeeRateCacheUpdateTimestamp;
                if (options.oneofs)
                    object._latestFeeRateCacheUpdateTimestamp = "latestFeeRateCacheUpdateTimestamp";
            }
            if (message.latestRgsSnapshotTimestamp != null && message.hasOwnProperty("latestRgsSnapshotTimestamp")) {
                if (typeof message.latestRgsSnapshotTimestamp === "number")
                    object.latestRgsSnapshotTimestamp = options.longs === String ? String(message.latestRgsSnapshotTimestamp) : message.latestRgsSnapshotTimestamp;
                else
                    object.latestRgsSnapshotTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.latestRgsSnapshotTimestamp) : options.longs === Number ? new $util.LongBits(message.latestRgsSnapshotTimestamp.low >>> 0, message.latestRgsSnapshotTimestamp.high >>> 0).toNumber(true) : message.latestRgsSnapshotTimestamp;
                if (options.oneofs)
                    object._latestRgsSnapshotTimestamp = "latestRgsSnapshotTimestamp";
            }
            if (message.latestNodeAnnouncementBroadcastTimestamp != null && message.hasOwnProperty("latestNodeAnnouncementBroadcastTimestamp")) {
                if (typeof message.latestNodeAnnouncementBroadcastTimestamp === "number")
                    object.latestNodeAnnouncementBroadcastTimestamp = options.longs === String ? String(message.latestNodeAnnouncementBroadcastTimestamp) : message.latestNodeAnnouncementBroadcastTimestamp;
                else
                    object.latestNodeAnnouncementBroadcastTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.latestNodeAnnouncementBroadcastTimestamp) : options.longs === Number ? new $util.LongBits(message.latestNodeAnnouncementBroadcastTimestamp.low >>> 0, message.latestNodeAnnouncementBroadcastTimestamp.high >>> 0).toNumber(true) : message.latestNodeAnnouncementBroadcastTimestamp;
                if (options.oneofs)
                    object._latestNodeAnnouncementBroadcastTimestamp = "latestNodeAnnouncementBroadcastTimestamp";
            }
            return object;
        };

        /**
         * Converts this GetNodeInfoResponse to JSON.
         * @function toJSON
         * @memberof api.GetNodeInfoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetNodeInfoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetNodeInfoResponse
         * @function getTypeUrl
         * @memberof api.GetNodeInfoResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetNodeInfoResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.GetNodeInfoResponse";
        };

        return GetNodeInfoResponse;
    })();

    api.OnchainReceiveRequest = (function() {

        /**
         * Properties of an OnchainReceiveRequest.
         * @memberof api
         * @interface IOnchainReceiveRequest
         */

        /**
         * Constructs a new OnchainReceiveRequest.
         * @memberof api
         * @classdesc Represents an OnchainReceiveRequest.
         * @implements IOnchainReceiveRequest
         * @constructor
         * @param {api.IOnchainReceiveRequest=} [properties] Properties to set
         */
        function OnchainReceiveRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new OnchainReceiveRequest instance using the specified properties.
         * @function create
         * @memberof api.OnchainReceiveRequest
         * @static
         * @param {api.IOnchainReceiveRequest=} [properties] Properties to set
         * @returns {api.OnchainReceiveRequest} OnchainReceiveRequest instance
         */
        OnchainReceiveRequest.create = function create(properties) {
            return new OnchainReceiveRequest(properties);
        };

        /**
         * Encodes the specified OnchainReceiveRequest message. Does not implicitly {@link api.OnchainReceiveRequest.verify|verify} messages.
         * @function encode
         * @memberof api.OnchainReceiveRequest
         * @static
         * @param {api.IOnchainReceiveRequest} message OnchainReceiveRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnchainReceiveRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified OnchainReceiveRequest message, length delimited. Does not implicitly {@link api.OnchainReceiveRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.OnchainReceiveRequest
         * @static
         * @param {api.IOnchainReceiveRequest} message OnchainReceiveRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnchainReceiveRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OnchainReceiveRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.OnchainReceiveRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.OnchainReceiveRequest} OnchainReceiveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnchainReceiveRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.OnchainReceiveRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OnchainReceiveRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.OnchainReceiveRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.OnchainReceiveRequest} OnchainReceiveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnchainReceiveRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OnchainReceiveRequest message.
         * @function verify
         * @memberof api.OnchainReceiveRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OnchainReceiveRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an OnchainReceiveRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.OnchainReceiveRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.OnchainReceiveRequest} OnchainReceiveRequest
         */
        OnchainReceiveRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.api.OnchainReceiveRequest)
                return object;
            return new $root.api.OnchainReceiveRequest();
        };

        /**
         * Creates a plain object from an OnchainReceiveRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.OnchainReceiveRequest
         * @static
         * @param {api.OnchainReceiveRequest} message OnchainReceiveRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OnchainReceiveRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this OnchainReceiveRequest to JSON.
         * @function toJSON
         * @memberof api.OnchainReceiveRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OnchainReceiveRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OnchainReceiveRequest
         * @function getTypeUrl
         * @memberof api.OnchainReceiveRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OnchainReceiveRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.OnchainReceiveRequest";
        };

        return OnchainReceiveRequest;
    })();

    api.OnchainReceiveResponse = (function() {

        /**
         * Properties of an OnchainReceiveResponse.
         * @memberof api
         * @interface IOnchainReceiveResponse
         * @property {string|null} [address] OnchainReceiveResponse address
         */

        /**
         * Constructs a new OnchainReceiveResponse.
         * @memberof api
         * @classdesc Represents an OnchainReceiveResponse.
         * @implements IOnchainReceiveResponse
         * @constructor
         * @param {api.IOnchainReceiveResponse=} [properties] Properties to set
         */
        function OnchainReceiveResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OnchainReceiveResponse address.
         * @member {string} address
         * @memberof api.OnchainReceiveResponse
         * @instance
         */
        OnchainReceiveResponse.prototype.address = "";

        /**
         * Creates a new OnchainReceiveResponse instance using the specified properties.
         * @function create
         * @memberof api.OnchainReceiveResponse
         * @static
         * @param {api.IOnchainReceiveResponse=} [properties] Properties to set
         * @returns {api.OnchainReceiveResponse} OnchainReceiveResponse instance
         */
        OnchainReceiveResponse.create = function create(properties) {
            return new OnchainReceiveResponse(properties);
        };

        /**
         * Encodes the specified OnchainReceiveResponse message. Does not implicitly {@link api.OnchainReceiveResponse.verify|verify} messages.
         * @function encode
         * @memberof api.OnchainReceiveResponse
         * @static
         * @param {api.IOnchainReceiveResponse} message OnchainReceiveResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnchainReceiveResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.address);
            return writer;
        };

        /**
         * Encodes the specified OnchainReceiveResponse message, length delimited. Does not implicitly {@link api.OnchainReceiveResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.OnchainReceiveResponse
         * @static
         * @param {api.IOnchainReceiveResponse} message OnchainReceiveResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnchainReceiveResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OnchainReceiveResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.OnchainReceiveResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.OnchainReceiveResponse} OnchainReceiveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnchainReceiveResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.OnchainReceiveResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.address = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OnchainReceiveResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.OnchainReceiveResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.OnchainReceiveResponse} OnchainReceiveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnchainReceiveResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OnchainReceiveResponse message.
         * @function verify
         * @memberof api.OnchainReceiveResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OnchainReceiveResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            return null;
        };

        /**
         * Creates an OnchainReceiveResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.OnchainReceiveResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.OnchainReceiveResponse} OnchainReceiveResponse
         */
        OnchainReceiveResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.api.OnchainReceiveResponse)
                return object;
            let message = new $root.api.OnchainReceiveResponse();
            if (object.address != null)
                message.address = String(object.address);
            return message;
        };

        /**
         * Creates a plain object from an OnchainReceiveResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.OnchainReceiveResponse
         * @static
         * @param {api.OnchainReceiveResponse} message OnchainReceiveResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OnchainReceiveResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.address = "";
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            return object;
        };

        /**
         * Converts this OnchainReceiveResponse to JSON.
         * @function toJSON
         * @memberof api.OnchainReceiveResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OnchainReceiveResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OnchainReceiveResponse
         * @function getTypeUrl
         * @memberof api.OnchainReceiveResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OnchainReceiveResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.OnchainReceiveResponse";
        };

        return OnchainReceiveResponse;
    })();

    api.OnchainSendRequest = (function() {

        /**
         * Properties of an OnchainSendRequest.
         * @memberof api
         * @interface IOnchainSendRequest
         * @property {string|null} [address] OnchainSendRequest address
         * @property {number|Long|null} [amountSats] OnchainSendRequest amountSats
         * @property {boolean|null} [sendAll] OnchainSendRequest sendAll
         * @property {number|Long|null} [feeRateSatPerVb] OnchainSendRequest feeRateSatPerVb
         */

        /**
         * Constructs a new OnchainSendRequest.
         * @memberof api
         * @classdesc Represents an OnchainSendRequest.
         * @implements IOnchainSendRequest
         * @constructor
         * @param {api.IOnchainSendRequest=} [properties] Properties to set
         */
        function OnchainSendRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OnchainSendRequest address.
         * @member {string} address
         * @memberof api.OnchainSendRequest
         * @instance
         */
        OnchainSendRequest.prototype.address = "";

        /**
         * OnchainSendRequest amountSats.
         * @member {number|Long|null|undefined} amountSats
         * @memberof api.OnchainSendRequest
         * @instance
         */
        OnchainSendRequest.prototype.amountSats = null;

        /**
         * OnchainSendRequest sendAll.
         * @member {boolean|null|undefined} sendAll
         * @memberof api.OnchainSendRequest
         * @instance
         */
        OnchainSendRequest.prototype.sendAll = null;

        /**
         * OnchainSendRequest feeRateSatPerVb.
         * @member {number|Long|null|undefined} feeRateSatPerVb
         * @memberof api.OnchainSendRequest
         * @instance
         */
        OnchainSendRequest.prototype.feeRateSatPerVb = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * OnchainSendRequest _amountSats.
         * @member {"amountSats"|undefined} _amountSats
         * @memberof api.OnchainSendRequest
         * @instance
         */
        Object.defineProperty(OnchainSendRequest.prototype, "_amountSats", {
            get: $util.oneOfGetter($oneOfFields = ["amountSats"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * OnchainSendRequest _sendAll.
         * @member {"sendAll"|undefined} _sendAll
         * @memberof api.OnchainSendRequest
         * @instance
         */
        Object.defineProperty(OnchainSendRequest.prototype, "_sendAll", {
            get: $util.oneOfGetter($oneOfFields = ["sendAll"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * OnchainSendRequest _feeRateSatPerVb.
         * @member {"feeRateSatPerVb"|undefined} _feeRateSatPerVb
         * @memberof api.OnchainSendRequest
         * @instance
         */
        Object.defineProperty(OnchainSendRequest.prototype, "_feeRateSatPerVb", {
            get: $util.oneOfGetter($oneOfFields = ["feeRateSatPerVb"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new OnchainSendRequest instance using the specified properties.
         * @function create
         * @memberof api.OnchainSendRequest
         * @static
         * @param {api.IOnchainSendRequest=} [properties] Properties to set
         * @returns {api.OnchainSendRequest} OnchainSendRequest instance
         */
        OnchainSendRequest.create = function create(properties) {
            return new OnchainSendRequest(properties);
        };

        /**
         * Encodes the specified OnchainSendRequest message. Does not implicitly {@link api.OnchainSendRequest.verify|verify} messages.
         * @function encode
         * @memberof api.OnchainSendRequest
         * @static
         * @param {api.IOnchainSendRequest} message OnchainSendRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnchainSendRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.address);
            if (message.amountSats != null && Object.hasOwnProperty.call(message, "amountSats"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.amountSats);
            if (message.sendAll != null && Object.hasOwnProperty.call(message, "sendAll"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.sendAll);
            if (message.feeRateSatPerVb != null && Object.hasOwnProperty.call(message, "feeRateSatPerVb"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.feeRateSatPerVb);
            return writer;
        };

        /**
         * Encodes the specified OnchainSendRequest message, length delimited. Does not implicitly {@link api.OnchainSendRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.OnchainSendRequest
         * @static
         * @param {api.IOnchainSendRequest} message OnchainSendRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnchainSendRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OnchainSendRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.OnchainSendRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.OnchainSendRequest} OnchainSendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnchainSendRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.OnchainSendRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.address = reader.string();
                        break;
                    }
                case 2: {
                        message.amountSats = reader.uint64();
                        break;
                    }
                case 3: {
                        message.sendAll = reader.bool();
                        break;
                    }
                case 4: {
                        message.feeRateSatPerVb = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OnchainSendRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.OnchainSendRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.OnchainSendRequest} OnchainSendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnchainSendRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OnchainSendRequest message.
         * @function verify
         * @memberof api.OnchainSendRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OnchainSendRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            if (message.amountSats != null && message.hasOwnProperty("amountSats")) {
                properties._amountSats = 1;
                if (!$util.isInteger(message.amountSats) && !(message.amountSats && $util.isInteger(message.amountSats.low) && $util.isInteger(message.amountSats.high)))
                    return "amountSats: integer|Long expected";
            }
            if (message.sendAll != null && message.hasOwnProperty("sendAll")) {
                properties._sendAll = 1;
                if (typeof message.sendAll !== "boolean")
                    return "sendAll: boolean expected";
            }
            if (message.feeRateSatPerVb != null && message.hasOwnProperty("feeRateSatPerVb")) {
                properties._feeRateSatPerVb = 1;
                if (!$util.isInteger(message.feeRateSatPerVb) && !(message.feeRateSatPerVb && $util.isInteger(message.feeRateSatPerVb.low) && $util.isInteger(message.feeRateSatPerVb.high)))
                    return "feeRateSatPerVb: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates an OnchainSendRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.OnchainSendRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.OnchainSendRequest} OnchainSendRequest
         */
        OnchainSendRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.api.OnchainSendRequest)
                return object;
            let message = new $root.api.OnchainSendRequest();
            if (object.address != null)
                message.address = String(object.address);
            if (object.amountSats != null)
                if ($util.Long)
                    (message.amountSats = $util.Long.fromValue(object.amountSats)).unsigned = true;
                else if (typeof object.amountSats === "string")
                    message.amountSats = parseInt(object.amountSats, 10);
                else if (typeof object.amountSats === "number")
                    message.amountSats = object.amountSats;
                else if (typeof object.amountSats === "object")
                    message.amountSats = new $util.LongBits(object.amountSats.low >>> 0, object.amountSats.high >>> 0).toNumber(true);
            if (object.sendAll != null)
                message.sendAll = Boolean(object.sendAll);
            if (object.feeRateSatPerVb != null)
                if ($util.Long)
                    (message.feeRateSatPerVb = $util.Long.fromValue(object.feeRateSatPerVb)).unsigned = true;
                else if (typeof object.feeRateSatPerVb === "string")
                    message.feeRateSatPerVb = parseInt(object.feeRateSatPerVb, 10);
                else if (typeof object.feeRateSatPerVb === "number")
                    message.feeRateSatPerVb = object.feeRateSatPerVb;
                else if (typeof object.feeRateSatPerVb === "object")
                    message.feeRateSatPerVb = new $util.LongBits(object.feeRateSatPerVb.low >>> 0, object.feeRateSatPerVb.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from an OnchainSendRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.OnchainSendRequest
         * @static
         * @param {api.OnchainSendRequest} message OnchainSendRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OnchainSendRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.address = "";
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            if (message.amountSats != null && message.hasOwnProperty("amountSats")) {
                if (typeof message.amountSats === "number")
                    object.amountSats = options.longs === String ? String(message.amountSats) : message.amountSats;
                else
                    object.amountSats = options.longs === String ? $util.Long.prototype.toString.call(message.amountSats) : options.longs === Number ? new $util.LongBits(message.amountSats.low >>> 0, message.amountSats.high >>> 0).toNumber(true) : message.amountSats;
                if (options.oneofs)
                    object._amountSats = "amountSats";
            }
            if (message.sendAll != null && message.hasOwnProperty("sendAll")) {
                object.sendAll = message.sendAll;
                if (options.oneofs)
                    object._sendAll = "sendAll";
            }
            if (message.feeRateSatPerVb != null && message.hasOwnProperty("feeRateSatPerVb")) {
                if (typeof message.feeRateSatPerVb === "number")
                    object.feeRateSatPerVb = options.longs === String ? String(message.feeRateSatPerVb) : message.feeRateSatPerVb;
                else
                    object.feeRateSatPerVb = options.longs === String ? $util.Long.prototype.toString.call(message.feeRateSatPerVb) : options.longs === Number ? new $util.LongBits(message.feeRateSatPerVb.low >>> 0, message.feeRateSatPerVb.high >>> 0).toNumber(true) : message.feeRateSatPerVb;
                if (options.oneofs)
                    object._feeRateSatPerVb = "feeRateSatPerVb";
            }
            return object;
        };

        /**
         * Converts this OnchainSendRequest to JSON.
         * @function toJSON
         * @memberof api.OnchainSendRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OnchainSendRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OnchainSendRequest
         * @function getTypeUrl
         * @memberof api.OnchainSendRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OnchainSendRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.OnchainSendRequest";
        };

        return OnchainSendRequest;
    })();

    api.OnchainSendResponse = (function() {

        /**
         * Properties of an OnchainSendResponse.
         * @memberof api
         * @interface IOnchainSendResponse
         * @property {string|null} [txid] OnchainSendResponse txid
         */

        /**
         * Constructs a new OnchainSendResponse.
         * @memberof api
         * @classdesc Represents an OnchainSendResponse.
         * @implements IOnchainSendResponse
         * @constructor
         * @param {api.IOnchainSendResponse=} [properties] Properties to set
         */
        function OnchainSendResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OnchainSendResponse txid.
         * @member {string} txid
         * @memberof api.OnchainSendResponse
         * @instance
         */
        OnchainSendResponse.prototype.txid = "";

        /**
         * Creates a new OnchainSendResponse instance using the specified properties.
         * @function create
         * @memberof api.OnchainSendResponse
         * @static
         * @param {api.IOnchainSendResponse=} [properties] Properties to set
         * @returns {api.OnchainSendResponse} OnchainSendResponse instance
         */
        OnchainSendResponse.create = function create(properties) {
            return new OnchainSendResponse(properties);
        };

        /**
         * Encodes the specified OnchainSendResponse message. Does not implicitly {@link api.OnchainSendResponse.verify|verify} messages.
         * @function encode
         * @memberof api.OnchainSendResponse
         * @static
         * @param {api.IOnchainSendResponse} message OnchainSendResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnchainSendResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.txid != null && Object.hasOwnProperty.call(message, "txid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.txid);
            return writer;
        };

        /**
         * Encodes the specified OnchainSendResponse message, length delimited. Does not implicitly {@link api.OnchainSendResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.OnchainSendResponse
         * @static
         * @param {api.IOnchainSendResponse} message OnchainSendResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OnchainSendResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OnchainSendResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.OnchainSendResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.OnchainSendResponse} OnchainSendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnchainSendResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.OnchainSendResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.txid = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OnchainSendResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.OnchainSendResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.OnchainSendResponse} OnchainSendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OnchainSendResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OnchainSendResponse message.
         * @function verify
         * @memberof api.OnchainSendResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OnchainSendResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.txid != null && message.hasOwnProperty("txid"))
                if (!$util.isString(message.txid))
                    return "txid: string expected";
            return null;
        };

        /**
         * Creates an OnchainSendResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.OnchainSendResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.OnchainSendResponse} OnchainSendResponse
         */
        OnchainSendResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.api.OnchainSendResponse)
                return object;
            let message = new $root.api.OnchainSendResponse();
            if (object.txid != null)
                message.txid = String(object.txid);
            return message;
        };

        /**
         * Creates a plain object from an OnchainSendResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.OnchainSendResponse
         * @static
         * @param {api.OnchainSendResponse} message OnchainSendResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OnchainSendResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.txid = "";
            if (message.txid != null && message.hasOwnProperty("txid"))
                object.txid = message.txid;
            return object;
        };

        /**
         * Converts this OnchainSendResponse to JSON.
         * @function toJSON
         * @memberof api.OnchainSendResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OnchainSendResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OnchainSendResponse
         * @function getTypeUrl
         * @memberof api.OnchainSendResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OnchainSendResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.OnchainSendResponse";
        };

        return OnchainSendResponse;
    })();

    api.Bolt11ReceiveRequest = (function() {

        /**
         * Properties of a Bolt11ReceiveRequest.
         * @memberof api
         * @interface IBolt11ReceiveRequest
         * @property {number|Long|null} [amountMsat] Bolt11ReceiveRequest amountMsat
         * @property {types.IBolt11InvoiceDescription|null} [description] Bolt11ReceiveRequest description
         * @property {number|null} [expirySecs] Bolt11ReceiveRequest expirySecs
         */

        /**
         * Constructs a new Bolt11ReceiveRequest.
         * @memberof api
         * @classdesc Represents a Bolt11ReceiveRequest.
         * @implements IBolt11ReceiveRequest
         * @constructor
         * @param {api.IBolt11ReceiveRequest=} [properties] Properties to set
         */
        function Bolt11ReceiveRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bolt11ReceiveRequest amountMsat.
         * @member {number|Long|null|undefined} amountMsat
         * @memberof api.Bolt11ReceiveRequest
         * @instance
         */
        Bolt11ReceiveRequest.prototype.amountMsat = null;

        /**
         * Bolt11ReceiveRequest description.
         * @member {types.IBolt11InvoiceDescription|null|undefined} description
         * @memberof api.Bolt11ReceiveRequest
         * @instance
         */
        Bolt11ReceiveRequest.prototype.description = null;

        /**
         * Bolt11ReceiveRequest expirySecs.
         * @member {number} expirySecs
         * @memberof api.Bolt11ReceiveRequest
         * @instance
         */
        Bolt11ReceiveRequest.prototype.expirySecs = 0;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Bolt11ReceiveRequest _amountMsat.
         * @member {"amountMsat"|undefined} _amountMsat
         * @memberof api.Bolt11ReceiveRequest
         * @instance
         */
        Object.defineProperty(Bolt11ReceiveRequest.prototype, "_amountMsat", {
            get: $util.oneOfGetter($oneOfFields = ["amountMsat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Bolt11ReceiveRequest instance using the specified properties.
         * @function create
         * @memberof api.Bolt11ReceiveRequest
         * @static
         * @param {api.IBolt11ReceiveRequest=} [properties] Properties to set
         * @returns {api.Bolt11ReceiveRequest} Bolt11ReceiveRequest instance
         */
        Bolt11ReceiveRequest.create = function create(properties) {
            return new Bolt11ReceiveRequest(properties);
        };

        /**
         * Encodes the specified Bolt11ReceiveRequest message. Does not implicitly {@link api.Bolt11ReceiveRequest.verify|verify} messages.
         * @function encode
         * @memberof api.Bolt11ReceiveRequest
         * @static
         * @param {api.IBolt11ReceiveRequest} message Bolt11ReceiveRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt11ReceiveRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.amountMsat != null && Object.hasOwnProperty.call(message, "amountMsat"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.amountMsat);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                $root.types.Bolt11InvoiceDescription.encode(message.description, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.expirySecs != null && Object.hasOwnProperty.call(message, "expirySecs"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.expirySecs);
            return writer;
        };

        /**
         * Encodes the specified Bolt11ReceiveRequest message, length delimited. Does not implicitly {@link api.Bolt11ReceiveRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Bolt11ReceiveRequest
         * @static
         * @param {api.IBolt11ReceiveRequest} message Bolt11ReceiveRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt11ReceiveRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bolt11ReceiveRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.Bolt11ReceiveRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Bolt11ReceiveRequest} Bolt11ReceiveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt11ReceiveRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Bolt11ReceiveRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.amountMsat = reader.uint64();
                        break;
                    }
                case 2: {
                        message.description = $root.types.Bolt11InvoiceDescription.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.expirySecs = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bolt11ReceiveRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Bolt11ReceiveRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Bolt11ReceiveRequest} Bolt11ReceiveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt11ReceiveRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bolt11ReceiveRequest message.
         * @function verify
         * @memberof api.Bolt11ReceiveRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bolt11ReceiveRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.amountMsat != null && message.hasOwnProperty("amountMsat")) {
                properties._amountMsat = 1;
                if (!$util.isInteger(message.amountMsat) && !(message.amountMsat && $util.isInteger(message.amountMsat.low) && $util.isInteger(message.amountMsat.high)))
                    return "amountMsat: integer|Long expected";
            }
            if (message.description != null && message.hasOwnProperty("description")) {
                let error = $root.types.Bolt11InvoiceDescription.verify(message.description);
                if (error)
                    return "description." + error;
            }
            if (message.expirySecs != null && message.hasOwnProperty("expirySecs"))
                if (!$util.isInteger(message.expirySecs))
                    return "expirySecs: integer expected";
            return null;
        };

        /**
         * Creates a Bolt11ReceiveRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Bolt11ReceiveRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Bolt11ReceiveRequest} Bolt11ReceiveRequest
         */
        Bolt11ReceiveRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Bolt11ReceiveRequest)
                return object;
            let message = new $root.api.Bolt11ReceiveRequest();
            if (object.amountMsat != null)
                if ($util.Long)
                    (message.amountMsat = $util.Long.fromValue(object.amountMsat)).unsigned = true;
                else if (typeof object.amountMsat === "string")
                    message.amountMsat = parseInt(object.amountMsat, 10);
                else if (typeof object.amountMsat === "number")
                    message.amountMsat = object.amountMsat;
                else if (typeof object.amountMsat === "object")
                    message.amountMsat = new $util.LongBits(object.amountMsat.low >>> 0, object.amountMsat.high >>> 0).toNumber(true);
            if (object.description != null) {
                if (typeof object.description !== "object")
                    throw TypeError(".api.Bolt11ReceiveRequest.description: object expected");
                message.description = $root.types.Bolt11InvoiceDescription.fromObject(object.description);
            }
            if (object.expirySecs != null)
                message.expirySecs = object.expirySecs >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Bolt11ReceiveRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Bolt11ReceiveRequest
         * @static
         * @param {api.Bolt11ReceiveRequest} message Bolt11ReceiveRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bolt11ReceiveRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.description = null;
                object.expirySecs = 0;
            }
            if (message.amountMsat != null && message.hasOwnProperty("amountMsat")) {
                if (typeof message.amountMsat === "number")
                    object.amountMsat = options.longs === String ? String(message.amountMsat) : message.amountMsat;
                else
                    object.amountMsat = options.longs === String ? $util.Long.prototype.toString.call(message.amountMsat) : options.longs === Number ? new $util.LongBits(message.amountMsat.low >>> 0, message.amountMsat.high >>> 0).toNumber(true) : message.amountMsat;
                if (options.oneofs)
                    object._amountMsat = "amountMsat";
            }
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = $root.types.Bolt11InvoiceDescription.toObject(message.description, options);
            if (message.expirySecs != null && message.hasOwnProperty("expirySecs"))
                object.expirySecs = message.expirySecs;
            return object;
        };

        /**
         * Converts this Bolt11ReceiveRequest to JSON.
         * @function toJSON
         * @memberof api.Bolt11ReceiveRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bolt11ReceiveRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Bolt11ReceiveRequest
         * @function getTypeUrl
         * @memberof api.Bolt11ReceiveRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Bolt11ReceiveRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.Bolt11ReceiveRequest";
        };

        return Bolt11ReceiveRequest;
    })();

    api.Bolt11ReceiveResponse = (function() {

        /**
         * Properties of a Bolt11ReceiveResponse.
         * @memberof api
         * @interface IBolt11ReceiveResponse
         * @property {string|null} [invoice] Bolt11ReceiveResponse invoice
         */

        /**
         * Constructs a new Bolt11ReceiveResponse.
         * @memberof api
         * @classdesc Represents a Bolt11ReceiveResponse.
         * @implements IBolt11ReceiveResponse
         * @constructor
         * @param {api.IBolt11ReceiveResponse=} [properties] Properties to set
         */
        function Bolt11ReceiveResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bolt11ReceiveResponse invoice.
         * @member {string} invoice
         * @memberof api.Bolt11ReceiveResponse
         * @instance
         */
        Bolt11ReceiveResponse.prototype.invoice = "";

        /**
         * Creates a new Bolt11ReceiveResponse instance using the specified properties.
         * @function create
         * @memberof api.Bolt11ReceiveResponse
         * @static
         * @param {api.IBolt11ReceiveResponse=} [properties] Properties to set
         * @returns {api.Bolt11ReceiveResponse} Bolt11ReceiveResponse instance
         */
        Bolt11ReceiveResponse.create = function create(properties) {
            return new Bolt11ReceiveResponse(properties);
        };

        /**
         * Encodes the specified Bolt11ReceiveResponse message. Does not implicitly {@link api.Bolt11ReceiveResponse.verify|verify} messages.
         * @function encode
         * @memberof api.Bolt11ReceiveResponse
         * @static
         * @param {api.IBolt11ReceiveResponse} message Bolt11ReceiveResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt11ReceiveResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.invoice != null && Object.hasOwnProperty.call(message, "invoice"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.invoice);
            return writer;
        };

        /**
         * Encodes the specified Bolt11ReceiveResponse message, length delimited. Does not implicitly {@link api.Bolt11ReceiveResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Bolt11ReceiveResponse
         * @static
         * @param {api.IBolt11ReceiveResponse} message Bolt11ReceiveResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt11ReceiveResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bolt11ReceiveResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.Bolt11ReceiveResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Bolt11ReceiveResponse} Bolt11ReceiveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt11ReceiveResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Bolt11ReceiveResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.invoice = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bolt11ReceiveResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Bolt11ReceiveResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Bolt11ReceiveResponse} Bolt11ReceiveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt11ReceiveResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bolt11ReceiveResponse message.
         * @function verify
         * @memberof api.Bolt11ReceiveResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bolt11ReceiveResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.invoice != null && message.hasOwnProperty("invoice"))
                if (!$util.isString(message.invoice))
                    return "invoice: string expected";
            return null;
        };

        /**
         * Creates a Bolt11ReceiveResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Bolt11ReceiveResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Bolt11ReceiveResponse} Bolt11ReceiveResponse
         */
        Bolt11ReceiveResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Bolt11ReceiveResponse)
                return object;
            let message = new $root.api.Bolt11ReceiveResponse();
            if (object.invoice != null)
                message.invoice = String(object.invoice);
            return message;
        };

        /**
         * Creates a plain object from a Bolt11ReceiveResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Bolt11ReceiveResponse
         * @static
         * @param {api.Bolt11ReceiveResponse} message Bolt11ReceiveResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bolt11ReceiveResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.invoice = "";
            if (message.invoice != null && message.hasOwnProperty("invoice"))
                object.invoice = message.invoice;
            return object;
        };

        /**
         * Converts this Bolt11ReceiveResponse to JSON.
         * @function toJSON
         * @memberof api.Bolt11ReceiveResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bolt11ReceiveResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Bolt11ReceiveResponse
         * @function getTypeUrl
         * @memberof api.Bolt11ReceiveResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Bolt11ReceiveResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.Bolt11ReceiveResponse";
        };

        return Bolt11ReceiveResponse;
    })();

    api.Bolt11SendRequest = (function() {

        /**
         * Properties of a Bolt11SendRequest.
         * @memberof api
         * @interface IBolt11SendRequest
         * @property {string|null} [invoice] Bolt11SendRequest invoice
         * @property {number|Long|null} [amountMsat] Bolt11SendRequest amountMsat
         */

        /**
         * Constructs a new Bolt11SendRequest.
         * @memberof api
         * @classdesc Represents a Bolt11SendRequest.
         * @implements IBolt11SendRequest
         * @constructor
         * @param {api.IBolt11SendRequest=} [properties] Properties to set
         */
        function Bolt11SendRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bolt11SendRequest invoice.
         * @member {string} invoice
         * @memberof api.Bolt11SendRequest
         * @instance
         */
        Bolt11SendRequest.prototype.invoice = "";

        /**
         * Bolt11SendRequest amountMsat.
         * @member {number|Long|null|undefined} amountMsat
         * @memberof api.Bolt11SendRequest
         * @instance
         */
        Bolt11SendRequest.prototype.amountMsat = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Bolt11SendRequest _amountMsat.
         * @member {"amountMsat"|undefined} _amountMsat
         * @memberof api.Bolt11SendRequest
         * @instance
         */
        Object.defineProperty(Bolt11SendRequest.prototype, "_amountMsat", {
            get: $util.oneOfGetter($oneOfFields = ["amountMsat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Bolt11SendRequest instance using the specified properties.
         * @function create
         * @memberof api.Bolt11SendRequest
         * @static
         * @param {api.IBolt11SendRequest=} [properties] Properties to set
         * @returns {api.Bolt11SendRequest} Bolt11SendRequest instance
         */
        Bolt11SendRequest.create = function create(properties) {
            return new Bolt11SendRequest(properties);
        };

        /**
         * Encodes the specified Bolt11SendRequest message. Does not implicitly {@link api.Bolt11SendRequest.verify|verify} messages.
         * @function encode
         * @memberof api.Bolt11SendRequest
         * @static
         * @param {api.IBolt11SendRequest} message Bolt11SendRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt11SendRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.invoice != null && Object.hasOwnProperty.call(message, "invoice"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.invoice);
            if (message.amountMsat != null && Object.hasOwnProperty.call(message, "amountMsat"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.amountMsat);
            return writer;
        };

        /**
         * Encodes the specified Bolt11SendRequest message, length delimited. Does not implicitly {@link api.Bolt11SendRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Bolt11SendRequest
         * @static
         * @param {api.IBolt11SendRequest} message Bolt11SendRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt11SendRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bolt11SendRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.Bolt11SendRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Bolt11SendRequest} Bolt11SendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt11SendRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Bolt11SendRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.invoice = reader.string();
                        break;
                    }
                case 2: {
                        message.amountMsat = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bolt11SendRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Bolt11SendRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Bolt11SendRequest} Bolt11SendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt11SendRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bolt11SendRequest message.
         * @function verify
         * @memberof api.Bolt11SendRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bolt11SendRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.invoice != null && message.hasOwnProperty("invoice"))
                if (!$util.isString(message.invoice))
                    return "invoice: string expected";
            if (message.amountMsat != null && message.hasOwnProperty("amountMsat")) {
                properties._amountMsat = 1;
                if (!$util.isInteger(message.amountMsat) && !(message.amountMsat && $util.isInteger(message.amountMsat.low) && $util.isInteger(message.amountMsat.high)))
                    return "amountMsat: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a Bolt11SendRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Bolt11SendRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Bolt11SendRequest} Bolt11SendRequest
         */
        Bolt11SendRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Bolt11SendRequest)
                return object;
            let message = new $root.api.Bolt11SendRequest();
            if (object.invoice != null)
                message.invoice = String(object.invoice);
            if (object.amountMsat != null)
                if ($util.Long)
                    (message.amountMsat = $util.Long.fromValue(object.amountMsat)).unsigned = true;
                else if (typeof object.amountMsat === "string")
                    message.amountMsat = parseInt(object.amountMsat, 10);
                else if (typeof object.amountMsat === "number")
                    message.amountMsat = object.amountMsat;
                else if (typeof object.amountMsat === "object")
                    message.amountMsat = new $util.LongBits(object.amountMsat.low >>> 0, object.amountMsat.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Bolt11SendRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Bolt11SendRequest
         * @static
         * @param {api.Bolt11SendRequest} message Bolt11SendRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bolt11SendRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.invoice = "";
            if (message.invoice != null && message.hasOwnProperty("invoice"))
                object.invoice = message.invoice;
            if (message.amountMsat != null && message.hasOwnProperty("amountMsat")) {
                if (typeof message.amountMsat === "number")
                    object.amountMsat = options.longs === String ? String(message.amountMsat) : message.amountMsat;
                else
                    object.amountMsat = options.longs === String ? $util.Long.prototype.toString.call(message.amountMsat) : options.longs === Number ? new $util.LongBits(message.amountMsat.low >>> 0, message.amountMsat.high >>> 0).toNumber(true) : message.amountMsat;
                if (options.oneofs)
                    object._amountMsat = "amountMsat";
            }
            return object;
        };

        /**
         * Converts this Bolt11SendRequest to JSON.
         * @function toJSON
         * @memberof api.Bolt11SendRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bolt11SendRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Bolt11SendRequest
         * @function getTypeUrl
         * @memberof api.Bolt11SendRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Bolt11SendRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.Bolt11SendRequest";
        };

        return Bolt11SendRequest;
    })();

    api.Bolt11SendResponse = (function() {

        /**
         * Properties of a Bolt11SendResponse.
         * @memberof api
         * @interface IBolt11SendResponse
         * @property {string|null} [paymentId] Bolt11SendResponse paymentId
         */

        /**
         * Constructs a new Bolt11SendResponse.
         * @memberof api
         * @classdesc Represents a Bolt11SendResponse.
         * @implements IBolt11SendResponse
         * @constructor
         * @param {api.IBolt11SendResponse=} [properties] Properties to set
         */
        function Bolt11SendResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bolt11SendResponse paymentId.
         * @member {string} paymentId
         * @memberof api.Bolt11SendResponse
         * @instance
         */
        Bolt11SendResponse.prototype.paymentId = "";

        /**
         * Creates a new Bolt11SendResponse instance using the specified properties.
         * @function create
         * @memberof api.Bolt11SendResponse
         * @static
         * @param {api.IBolt11SendResponse=} [properties] Properties to set
         * @returns {api.Bolt11SendResponse} Bolt11SendResponse instance
         */
        Bolt11SendResponse.create = function create(properties) {
            return new Bolt11SendResponse(properties);
        };

        /**
         * Encodes the specified Bolt11SendResponse message. Does not implicitly {@link api.Bolt11SendResponse.verify|verify} messages.
         * @function encode
         * @memberof api.Bolt11SendResponse
         * @static
         * @param {api.IBolt11SendResponse} message Bolt11SendResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt11SendResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.paymentId != null && Object.hasOwnProperty.call(message, "paymentId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.paymentId);
            return writer;
        };

        /**
         * Encodes the specified Bolt11SendResponse message, length delimited. Does not implicitly {@link api.Bolt11SendResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Bolt11SendResponse
         * @static
         * @param {api.IBolt11SendResponse} message Bolt11SendResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt11SendResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bolt11SendResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.Bolt11SendResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Bolt11SendResponse} Bolt11SendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt11SendResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Bolt11SendResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.paymentId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bolt11SendResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Bolt11SendResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Bolt11SendResponse} Bolt11SendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt11SendResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bolt11SendResponse message.
         * @function verify
         * @memberof api.Bolt11SendResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bolt11SendResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.paymentId != null && message.hasOwnProperty("paymentId"))
                if (!$util.isString(message.paymentId))
                    return "paymentId: string expected";
            return null;
        };

        /**
         * Creates a Bolt11SendResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Bolt11SendResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Bolt11SendResponse} Bolt11SendResponse
         */
        Bolt11SendResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Bolt11SendResponse)
                return object;
            let message = new $root.api.Bolt11SendResponse();
            if (object.paymentId != null)
                message.paymentId = String(object.paymentId);
            return message;
        };

        /**
         * Creates a plain object from a Bolt11SendResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Bolt11SendResponse
         * @static
         * @param {api.Bolt11SendResponse} message Bolt11SendResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bolt11SendResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.paymentId = "";
            if (message.paymentId != null && message.hasOwnProperty("paymentId"))
                object.paymentId = message.paymentId;
            return object;
        };

        /**
         * Converts this Bolt11SendResponse to JSON.
         * @function toJSON
         * @memberof api.Bolt11SendResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bolt11SendResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Bolt11SendResponse
         * @function getTypeUrl
         * @memberof api.Bolt11SendResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Bolt11SendResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.Bolt11SendResponse";
        };

        return Bolt11SendResponse;
    })();

    api.Bolt12ReceiveRequest = (function() {

        /**
         * Properties of a Bolt12ReceiveRequest.
         * @memberof api
         * @interface IBolt12ReceiveRequest
         * @property {string|null} [description] Bolt12ReceiveRequest description
         * @property {number|Long|null} [amountMsat] Bolt12ReceiveRequest amountMsat
         * @property {number|null} [expirySecs] Bolt12ReceiveRequest expirySecs
         * @property {number|Long|null} [quantity] Bolt12ReceiveRequest quantity
         */

        /**
         * Constructs a new Bolt12ReceiveRequest.
         * @memberof api
         * @classdesc Represents a Bolt12ReceiveRequest.
         * @implements IBolt12ReceiveRequest
         * @constructor
         * @param {api.IBolt12ReceiveRequest=} [properties] Properties to set
         */
        function Bolt12ReceiveRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bolt12ReceiveRequest description.
         * @member {string} description
         * @memberof api.Bolt12ReceiveRequest
         * @instance
         */
        Bolt12ReceiveRequest.prototype.description = "";

        /**
         * Bolt12ReceiveRequest amountMsat.
         * @member {number|Long|null|undefined} amountMsat
         * @memberof api.Bolt12ReceiveRequest
         * @instance
         */
        Bolt12ReceiveRequest.prototype.amountMsat = null;

        /**
         * Bolt12ReceiveRequest expirySecs.
         * @member {number|null|undefined} expirySecs
         * @memberof api.Bolt12ReceiveRequest
         * @instance
         */
        Bolt12ReceiveRequest.prototype.expirySecs = null;

        /**
         * Bolt12ReceiveRequest quantity.
         * @member {number|Long|null|undefined} quantity
         * @memberof api.Bolt12ReceiveRequest
         * @instance
         */
        Bolt12ReceiveRequest.prototype.quantity = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Bolt12ReceiveRequest _amountMsat.
         * @member {"amountMsat"|undefined} _amountMsat
         * @memberof api.Bolt12ReceiveRequest
         * @instance
         */
        Object.defineProperty(Bolt12ReceiveRequest.prototype, "_amountMsat", {
            get: $util.oneOfGetter($oneOfFields = ["amountMsat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Bolt12ReceiveRequest _expirySecs.
         * @member {"expirySecs"|undefined} _expirySecs
         * @memberof api.Bolt12ReceiveRequest
         * @instance
         */
        Object.defineProperty(Bolt12ReceiveRequest.prototype, "_expirySecs", {
            get: $util.oneOfGetter($oneOfFields = ["expirySecs"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Bolt12ReceiveRequest _quantity.
         * @member {"quantity"|undefined} _quantity
         * @memberof api.Bolt12ReceiveRequest
         * @instance
         */
        Object.defineProperty(Bolt12ReceiveRequest.prototype, "_quantity", {
            get: $util.oneOfGetter($oneOfFields = ["quantity"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Bolt12ReceiveRequest instance using the specified properties.
         * @function create
         * @memberof api.Bolt12ReceiveRequest
         * @static
         * @param {api.IBolt12ReceiveRequest=} [properties] Properties to set
         * @returns {api.Bolt12ReceiveRequest} Bolt12ReceiveRequest instance
         */
        Bolt12ReceiveRequest.create = function create(properties) {
            return new Bolt12ReceiveRequest(properties);
        };

        /**
         * Encodes the specified Bolt12ReceiveRequest message. Does not implicitly {@link api.Bolt12ReceiveRequest.verify|verify} messages.
         * @function encode
         * @memberof api.Bolt12ReceiveRequest
         * @static
         * @param {api.IBolt12ReceiveRequest} message Bolt12ReceiveRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt12ReceiveRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.description);
            if (message.amountMsat != null && Object.hasOwnProperty.call(message, "amountMsat"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.amountMsat);
            if (message.expirySecs != null && Object.hasOwnProperty.call(message, "expirySecs"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.expirySecs);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.quantity);
            return writer;
        };

        /**
         * Encodes the specified Bolt12ReceiveRequest message, length delimited. Does not implicitly {@link api.Bolt12ReceiveRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Bolt12ReceiveRequest
         * @static
         * @param {api.IBolt12ReceiveRequest} message Bolt12ReceiveRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt12ReceiveRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bolt12ReceiveRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.Bolt12ReceiveRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Bolt12ReceiveRequest} Bolt12ReceiveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt12ReceiveRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Bolt12ReceiveRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.description = reader.string();
                        break;
                    }
                case 2: {
                        message.amountMsat = reader.uint64();
                        break;
                    }
                case 3: {
                        message.expirySecs = reader.uint32();
                        break;
                    }
                case 4: {
                        message.quantity = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bolt12ReceiveRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Bolt12ReceiveRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Bolt12ReceiveRequest} Bolt12ReceiveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt12ReceiveRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bolt12ReceiveRequest message.
         * @function verify
         * @memberof api.Bolt12ReceiveRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bolt12ReceiveRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.amountMsat != null && message.hasOwnProperty("amountMsat")) {
                properties._amountMsat = 1;
                if (!$util.isInteger(message.amountMsat) && !(message.amountMsat && $util.isInteger(message.amountMsat.low) && $util.isInteger(message.amountMsat.high)))
                    return "amountMsat: integer|Long expected";
            }
            if (message.expirySecs != null && message.hasOwnProperty("expirySecs")) {
                properties._expirySecs = 1;
                if (!$util.isInteger(message.expirySecs))
                    return "expirySecs: integer expected";
            }
            if (message.quantity != null && message.hasOwnProperty("quantity")) {
                properties._quantity = 1;
                if (!$util.isInteger(message.quantity) && !(message.quantity && $util.isInteger(message.quantity.low) && $util.isInteger(message.quantity.high)))
                    return "quantity: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a Bolt12ReceiveRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Bolt12ReceiveRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Bolt12ReceiveRequest} Bolt12ReceiveRequest
         */
        Bolt12ReceiveRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Bolt12ReceiveRequest)
                return object;
            let message = new $root.api.Bolt12ReceiveRequest();
            if (object.description != null)
                message.description = String(object.description);
            if (object.amountMsat != null)
                if ($util.Long)
                    (message.amountMsat = $util.Long.fromValue(object.amountMsat)).unsigned = true;
                else if (typeof object.amountMsat === "string")
                    message.amountMsat = parseInt(object.amountMsat, 10);
                else if (typeof object.amountMsat === "number")
                    message.amountMsat = object.amountMsat;
                else if (typeof object.amountMsat === "object")
                    message.amountMsat = new $util.LongBits(object.amountMsat.low >>> 0, object.amountMsat.high >>> 0).toNumber(true);
            if (object.expirySecs != null)
                message.expirySecs = object.expirySecs >>> 0;
            if (object.quantity != null)
                if ($util.Long)
                    (message.quantity = $util.Long.fromValue(object.quantity)).unsigned = true;
                else if (typeof object.quantity === "string")
                    message.quantity = parseInt(object.quantity, 10);
                else if (typeof object.quantity === "number")
                    message.quantity = object.quantity;
                else if (typeof object.quantity === "object")
                    message.quantity = new $util.LongBits(object.quantity.low >>> 0, object.quantity.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Bolt12ReceiveRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Bolt12ReceiveRequest
         * @static
         * @param {api.Bolt12ReceiveRequest} message Bolt12ReceiveRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bolt12ReceiveRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.description = "";
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.amountMsat != null && message.hasOwnProperty("amountMsat")) {
                if (typeof message.amountMsat === "number")
                    object.amountMsat = options.longs === String ? String(message.amountMsat) : message.amountMsat;
                else
                    object.amountMsat = options.longs === String ? $util.Long.prototype.toString.call(message.amountMsat) : options.longs === Number ? new $util.LongBits(message.amountMsat.low >>> 0, message.amountMsat.high >>> 0).toNumber(true) : message.amountMsat;
                if (options.oneofs)
                    object._amountMsat = "amountMsat";
            }
            if (message.expirySecs != null && message.hasOwnProperty("expirySecs")) {
                object.expirySecs = message.expirySecs;
                if (options.oneofs)
                    object._expirySecs = "expirySecs";
            }
            if (message.quantity != null && message.hasOwnProperty("quantity")) {
                if (typeof message.quantity === "number")
                    object.quantity = options.longs === String ? String(message.quantity) : message.quantity;
                else
                    object.quantity = options.longs === String ? $util.Long.prototype.toString.call(message.quantity) : options.longs === Number ? new $util.LongBits(message.quantity.low >>> 0, message.quantity.high >>> 0).toNumber(true) : message.quantity;
                if (options.oneofs)
                    object._quantity = "quantity";
            }
            return object;
        };

        /**
         * Converts this Bolt12ReceiveRequest to JSON.
         * @function toJSON
         * @memberof api.Bolt12ReceiveRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bolt12ReceiveRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Bolt12ReceiveRequest
         * @function getTypeUrl
         * @memberof api.Bolt12ReceiveRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Bolt12ReceiveRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.Bolt12ReceiveRequest";
        };

        return Bolt12ReceiveRequest;
    })();

    api.Bolt12ReceiveResponse = (function() {

        /**
         * Properties of a Bolt12ReceiveResponse.
         * @memberof api
         * @interface IBolt12ReceiveResponse
         * @property {string|null} [offer] Bolt12ReceiveResponse offer
         */

        /**
         * Constructs a new Bolt12ReceiveResponse.
         * @memberof api
         * @classdesc Represents a Bolt12ReceiveResponse.
         * @implements IBolt12ReceiveResponse
         * @constructor
         * @param {api.IBolt12ReceiveResponse=} [properties] Properties to set
         */
        function Bolt12ReceiveResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bolt12ReceiveResponse offer.
         * @member {string} offer
         * @memberof api.Bolt12ReceiveResponse
         * @instance
         */
        Bolt12ReceiveResponse.prototype.offer = "";

        /**
         * Creates a new Bolt12ReceiveResponse instance using the specified properties.
         * @function create
         * @memberof api.Bolt12ReceiveResponse
         * @static
         * @param {api.IBolt12ReceiveResponse=} [properties] Properties to set
         * @returns {api.Bolt12ReceiveResponse} Bolt12ReceiveResponse instance
         */
        Bolt12ReceiveResponse.create = function create(properties) {
            return new Bolt12ReceiveResponse(properties);
        };

        /**
         * Encodes the specified Bolt12ReceiveResponse message. Does not implicitly {@link api.Bolt12ReceiveResponse.verify|verify} messages.
         * @function encode
         * @memberof api.Bolt12ReceiveResponse
         * @static
         * @param {api.IBolt12ReceiveResponse} message Bolt12ReceiveResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt12ReceiveResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.offer != null && Object.hasOwnProperty.call(message, "offer"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.offer);
            return writer;
        };

        /**
         * Encodes the specified Bolt12ReceiveResponse message, length delimited. Does not implicitly {@link api.Bolt12ReceiveResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Bolt12ReceiveResponse
         * @static
         * @param {api.IBolt12ReceiveResponse} message Bolt12ReceiveResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt12ReceiveResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bolt12ReceiveResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.Bolt12ReceiveResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Bolt12ReceiveResponse} Bolt12ReceiveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt12ReceiveResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Bolt12ReceiveResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.offer = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bolt12ReceiveResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Bolt12ReceiveResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Bolt12ReceiveResponse} Bolt12ReceiveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt12ReceiveResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bolt12ReceiveResponse message.
         * @function verify
         * @memberof api.Bolt12ReceiveResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bolt12ReceiveResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.offer != null && message.hasOwnProperty("offer"))
                if (!$util.isString(message.offer))
                    return "offer: string expected";
            return null;
        };

        /**
         * Creates a Bolt12ReceiveResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Bolt12ReceiveResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Bolt12ReceiveResponse} Bolt12ReceiveResponse
         */
        Bolt12ReceiveResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Bolt12ReceiveResponse)
                return object;
            let message = new $root.api.Bolt12ReceiveResponse();
            if (object.offer != null)
                message.offer = String(object.offer);
            return message;
        };

        /**
         * Creates a plain object from a Bolt12ReceiveResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Bolt12ReceiveResponse
         * @static
         * @param {api.Bolt12ReceiveResponse} message Bolt12ReceiveResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bolt12ReceiveResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.offer = "";
            if (message.offer != null && message.hasOwnProperty("offer"))
                object.offer = message.offer;
            return object;
        };

        /**
         * Converts this Bolt12ReceiveResponse to JSON.
         * @function toJSON
         * @memberof api.Bolt12ReceiveResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bolt12ReceiveResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Bolt12ReceiveResponse
         * @function getTypeUrl
         * @memberof api.Bolt12ReceiveResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Bolt12ReceiveResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.Bolt12ReceiveResponse";
        };

        return Bolt12ReceiveResponse;
    })();

    api.Bolt12SendRequest = (function() {

        /**
         * Properties of a Bolt12SendRequest.
         * @memberof api
         * @interface IBolt12SendRequest
         * @property {string|null} [offer] Bolt12SendRequest offer
         * @property {number|Long|null} [amountMsat] Bolt12SendRequest amountMsat
         * @property {number|Long|null} [quantity] Bolt12SendRequest quantity
         * @property {string|null} [payerNote] Bolt12SendRequest payerNote
         */

        /**
         * Constructs a new Bolt12SendRequest.
         * @memberof api
         * @classdesc Represents a Bolt12SendRequest.
         * @implements IBolt12SendRequest
         * @constructor
         * @param {api.IBolt12SendRequest=} [properties] Properties to set
         */
        function Bolt12SendRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bolt12SendRequest offer.
         * @member {string} offer
         * @memberof api.Bolt12SendRequest
         * @instance
         */
        Bolt12SendRequest.prototype.offer = "";

        /**
         * Bolt12SendRequest amountMsat.
         * @member {number|Long|null|undefined} amountMsat
         * @memberof api.Bolt12SendRequest
         * @instance
         */
        Bolt12SendRequest.prototype.amountMsat = null;

        /**
         * Bolt12SendRequest quantity.
         * @member {number|Long|null|undefined} quantity
         * @memberof api.Bolt12SendRequest
         * @instance
         */
        Bolt12SendRequest.prototype.quantity = null;

        /**
         * Bolt12SendRequest payerNote.
         * @member {string|null|undefined} payerNote
         * @memberof api.Bolt12SendRequest
         * @instance
         */
        Bolt12SendRequest.prototype.payerNote = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Bolt12SendRequest _amountMsat.
         * @member {"amountMsat"|undefined} _amountMsat
         * @memberof api.Bolt12SendRequest
         * @instance
         */
        Object.defineProperty(Bolt12SendRequest.prototype, "_amountMsat", {
            get: $util.oneOfGetter($oneOfFields = ["amountMsat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Bolt12SendRequest _quantity.
         * @member {"quantity"|undefined} _quantity
         * @memberof api.Bolt12SendRequest
         * @instance
         */
        Object.defineProperty(Bolt12SendRequest.prototype, "_quantity", {
            get: $util.oneOfGetter($oneOfFields = ["quantity"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Bolt12SendRequest _payerNote.
         * @member {"payerNote"|undefined} _payerNote
         * @memberof api.Bolt12SendRequest
         * @instance
         */
        Object.defineProperty(Bolt12SendRequest.prototype, "_payerNote", {
            get: $util.oneOfGetter($oneOfFields = ["payerNote"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Bolt12SendRequest instance using the specified properties.
         * @function create
         * @memberof api.Bolt12SendRequest
         * @static
         * @param {api.IBolt12SendRequest=} [properties] Properties to set
         * @returns {api.Bolt12SendRequest} Bolt12SendRequest instance
         */
        Bolt12SendRequest.create = function create(properties) {
            return new Bolt12SendRequest(properties);
        };

        /**
         * Encodes the specified Bolt12SendRequest message. Does not implicitly {@link api.Bolt12SendRequest.verify|verify} messages.
         * @function encode
         * @memberof api.Bolt12SendRequest
         * @static
         * @param {api.IBolt12SendRequest} message Bolt12SendRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt12SendRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.offer != null && Object.hasOwnProperty.call(message, "offer"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.offer);
            if (message.amountMsat != null && Object.hasOwnProperty.call(message, "amountMsat"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.amountMsat);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.quantity);
            if (message.payerNote != null && Object.hasOwnProperty.call(message, "payerNote"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.payerNote);
            return writer;
        };

        /**
         * Encodes the specified Bolt12SendRequest message, length delimited. Does not implicitly {@link api.Bolt12SendRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Bolt12SendRequest
         * @static
         * @param {api.IBolt12SendRequest} message Bolt12SendRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt12SendRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bolt12SendRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.Bolt12SendRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Bolt12SendRequest} Bolt12SendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt12SendRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Bolt12SendRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.offer = reader.string();
                        break;
                    }
                case 2: {
                        message.amountMsat = reader.uint64();
                        break;
                    }
                case 3: {
                        message.quantity = reader.uint64();
                        break;
                    }
                case 4: {
                        message.payerNote = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bolt12SendRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Bolt12SendRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Bolt12SendRequest} Bolt12SendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt12SendRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bolt12SendRequest message.
         * @function verify
         * @memberof api.Bolt12SendRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bolt12SendRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.offer != null && message.hasOwnProperty("offer"))
                if (!$util.isString(message.offer))
                    return "offer: string expected";
            if (message.amountMsat != null && message.hasOwnProperty("amountMsat")) {
                properties._amountMsat = 1;
                if (!$util.isInteger(message.amountMsat) && !(message.amountMsat && $util.isInteger(message.amountMsat.low) && $util.isInteger(message.amountMsat.high)))
                    return "amountMsat: integer|Long expected";
            }
            if (message.quantity != null && message.hasOwnProperty("quantity")) {
                properties._quantity = 1;
                if (!$util.isInteger(message.quantity) && !(message.quantity && $util.isInteger(message.quantity.low) && $util.isInteger(message.quantity.high)))
                    return "quantity: integer|Long expected";
            }
            if (message.payerNote != null && message.hasOwnProperty("payerNote")) {
                properties._payerNote = 1;
                if (!$util.isString(message.payerNote))
                    return "payerNote: string expected";
            }
            return null;
        };

        /**
         * Creates a Bolt12SendRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Bolt12SendRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Bolt12SendRequest} Bolt12SendRequest
         */
        Bolt12SendRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Bolt12SendRequest)
                return object;
            let message = new $root.api.Bolt12SendRequest();
            if (object.offer != null)
                message.offer = String(object.offer);
            if (object.amountMsat != null)
                if ($util.Long)
                    (message.amountMsat = $util.Long.fromValue(object.amountMsat)).unsigned = true;
                else if (typeof object.amountMsat === "string")
                    message.amountMsat = parseInt(object.amountMsat, 10);
                else if (typeof object.amountMsat === "number")
                    message.amountMsat = object.amountMsat;
                else if (typeof object.amountMsat === "object")
                    message.amountMsat = new $util.LongBits(object.amountMsat.low >>> 0, object.amountMsat.high >>> 0).toNumber(true);
            if (object.quantity != null)
                if ($util.Long)
                    (message.quantity = $util.Long.fromValue(object.quantity)).unsigned = true;
                else if (typeof object.quantity === "string")
                    message.quantity = parseInt(object.quantity, 10);
                else if (typeof object.quantity === "number")
                    message.quantity = object.quantity;
                else if (typeof object.quantity === "object")
                    message.quantity = new $util.LongBits(object.quantity.low >>> 0, object.quantity.high >>> 0).toNumber(true);
            if (object.payerNote != null)
                message.payerNote = String(object.payerNote);
            return message;
        };

        /**
         * Creates a plain object from a Bolt12SendRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Bolt12SendRequest
         * @static
         * @param {api.Bolt12SendRequest} message Bolt12SendRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bolt12SendRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.offer = "";
            if (message.offer != null && message.hasOwnProperty("offer"))
                object.offer = message.offer;
            if (message.amountMsat != null && message.hasOwnProperty("amountMsat")) {
                if (typeof message.amountMsat === "number")
                    object.amountMsat = options.longs === String ? String(message.amountMsat) : message.amountMsat;
                else
                    object.amountMsat = options.longs === String ? $util.Long.prototype.toString.call(message.amountMsat) : options.longs === Number ? new $util.LongBits(message.amountMsat.low >>> 0, message.amountMsat.high >>> 0).toNumber(true) : message.amountMsat;
                if (options.oneofs)
                    object._amountMsat = "amountMsat";
            }
            if (message.quantity != null && message.hasOwnProperty("quantity")) {
                if (typeof message.quantity === "number")
                    object.quantity = options.longs === String ? String(message.quantity) : message.quantity;
                else
                    object.quantity = options.longs === String ? $util.Long.prototype.toString.call(message.quantity) : options.longs === Number ? new $util.LongBits(message.quantity.low >>> 0, message.quantity.high >>> 0).toNumber(true) : message.quantity;
                if (options.oneofs)
                    object._quantity = "quantity";
            }
            if (message.payerNote != null && message.hasOwnProperty("payerNote")) {
                object.payerNote = message.payerNote;
                if (options.oneofs)
                    object._payerNote = "payerNote";
            }
            return object;
        };

        /**
         * Converts this Bolt12SendRequest to JSON.
         * @function toJSON
         * @memberof api.Bolt12SendRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bolt12SendRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Bolt12SendRequest
         * @function getTypeUrl
         * @memberof api.Bolt12SendRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Bolt12SendRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.Bolt12SendRequest";
        };

        return Bolt12SendRequest;
    })();

    api.Bolt12SendResponse = (function() {

        /**
         * Properties of a Bolt12SendResponse.
         * @memberof api
         * @interface IBolt12SendResponse
         * @property {string|null} [paymentId] Bolt12SendResponse paymentId
         */

        /**
         * Constructs a new Bolt12SendResponse.
         * @memberof api
         * @classdesc Represents a Bolt12SendResponse.
         * @implements IBolt12SendResponse
         * @constructor
         * @param {api.IBolt12SendResponse=} [properties] Properties to set
         */
        function Bolt12SendResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bolt12SendResponse paymentId.
         * @member {string} paymentId
         * @memberof api.Bolt12SendResponse
         * @instance
         */
        Bolt12SendResponse.prototype.paymentId = "";

        /**
         * Creates a new Bolt12SendResponse instance using the specified properties.
         * @function create
         * @memberof api.Bolt12SendResponse
         * @static
         * @param {api.IBolt12SendResponse=} [properties] Properties to set
         * @returns {api.Bolt12SendResponse} Bolt12SendResponse instance
         */
        Bolt12SendResponse.create = function create(properties) {
            return new Bolt12SendResponse(properties);
        };

        /**
         * Encodes the specified Bolt12SendResponse message. Does not implicitly {@link api.Bolt12SendResponse.verify|verify} messages.
         * @function encode
         * @memberof api.Bolt12SendResponse
         * @static
         * @param {api.IBolt12SendResponse} message Bolt12SendResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt12SendResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.paymentId != null && Object.hasOwnProperty.call(message, "paymentId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.paymentId);
            return writer;
        };

        /**
         * Encodes the specified Bolt12SendResponse message, length delimited. Does not implicitly {@link api.Bolt12SendResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.Bolt12SendResponse
         * @static
         * @param {api.IBolt12SendResponse} message Bolt12SendResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt12SendResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bolt12SendResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.Bolt12SendResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.Bolt12SendResponse} Bolt12SendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt12SendResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.Bolt12SendResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.paymentId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bolt12SendResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.Bolt12SendResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.Bolt12SendResponse} Bolt12SendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt12SendResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bolt12SendResponse message.
         * @function verify
         * @memberof api.Bolt12SendResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bolt12SendResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.paymentId != null && message.hasOwnProperty("paymentId"))
                if (!$util.isString(message.paymentId))
                    return "paymentId: string expected";
            return null;
        };

        /**
         * Creates a Bolt12SendResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.Bolt12SendResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.Bolt12SendResponse} Bolt12SendResponse
         */
        Bolt12SendResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.api.Bolt12SendResponse)
                return object;
            let message = new $root.api.Bolt12SendResponse();
            if (object.paymentId != null)
                message.paymentId = String(object.paymentId);
            return message;
        };

        /**
         * Creates a plain object from a Bolt12SendResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.Bolt12SendResponse
         * @static
         * @param {api.Bolt12SendResponse} message Bolt12SendResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bolt12SendResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.paymentId = "";
            if (message.paymentId != null && message.hasOwnProperty("paymentId"))
                object.paymentId = message.paymentId;
            return object;
        };

        /**
         * Converts this Bolt12SendResponse to JSON.
         * @function toJSON
         * @memberof api.Bolt12SendResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bolt12SendResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Bolt12SendResponse
         * @function getTypeUrl
         * @memberof api.Bolt12SendResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Bolt12SendResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.Bolt12SendResponse";
        };

        return Bolt12SendResponse;
    })();

    api.OpenChannelRequest = (function() {

        /**
         * Properties of an OpenChannelRequest.
         * @memberof api
         * @interface IOpenChannelRequest
         * @property {string|null} [nodePubkey] OpenChannelRequest nodePubkey
         * @property {string|null} [address] OpenChannelRequest address
         * @property {number|Long|null} [channelAmountSats] OpenChannelRequest channelAmountSats
         * @property {number|Long|null} [pushToCounterpartyMsat] OpenChannelRequest pushToCounterpartyMsat
         * @property {types.IChannelConfig|null} [channelConfig] OpenChannelRequest channelConfig
         * @property {boolean|null} [announceChannel] OpenChannelRequest announceChannel
         */

        /**
         * Constructs a new OpenChannelRequest.
         * @memberof api
         * @classdesc Represents an OpenChannelRequest.
         * @implements IOpenChannelRequest
         * @constructor
         * @param {api.IOpenChannelRequest=} [properties] Properties to set
         */
        function OpenChannelRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OpenChannelRequest nodePubkey.
         * @member {string} nodePubkey
         * @memberof api.OpenChannelRequest
         * @instance
         */
        OpenChannelRequest.prototype.nodePubkey = "";

        /**
         * OpenChannelRequest address.
         * @member {string} address
         * @memberof api.OpenChannelRequest
         * @instance
         */
        OpenChannelRequest.prototype.address = "";

        /**
         * OpenChannelRequest channelAmountSats.
         * @member {number|Long} channelAmountSats
         * @memberof api.OpenChannelRequest
         * @instance
         */
        OpenChannelRequest.prototype.channelAmountSats = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * OpenChannelRequest pushToCounterpartyMsat.
         * @member {number|Long|null|undefined} pushToCounterpartyMsat
         * @memberof api.OpenChannelRequest
         * @instance
         */
        OpenChannelRequest.prototype.pushToCounterpartyMsat = null;

        /**
         * OpenChannelRequest channelConfig.
         * @member {types.IChannelConfig|null|undefined} channelConfig
         * @memberof api.OpenChannelRequest
         * @instance
         */
        OpenChannelRequest.prototype.channelConfig = null;

        /**
         * OpenChannelRequest announceChannel.
         * @member {boolean} announceChannel
         * @memberof api.OpenChannelRequest
         * @instance
         */
        OpenChannelRequest.prototype.announceChannel = false;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * OpenChannelRequest _pushToCounterpartyMsat.
         * @member {"pushToCounterpartyMsat"|undefined} _pushToCounterpartyMsat
         * @memberof api.OpenChannelRequest
         * @instance
         */
        Object.defineProperty(OpenChannelRequest.prototype, "_pushToCounterpartyMsat", {
            get: $util.oneOfGetter($oneOfFields = ["pushToCounterpartyMsat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * OpenChannelRequest _channelConfig.
         * @member {"channelConfig"|undefined} _channelConfig
         * @memberof api.OpenChannelRequest
         * @instance
         */
        Object.defineProperty(OpenChannelRequest.prototype, "_channelConfig", {
            get: $util.oneOfGetter($oneOfFields = ["channelConfig"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new OpenChannelRequest instance using the specified properties.
         * @function create
         * @memberof api.OpenChannelRequest
         * @static
         * @param {api.IOpenChannelRequest=} [properties] Properties to set
         * @returns {api.OpenChannelRequest} OpenChannelRequest instance
         */
        OpenChannelRequest.create = function create(properties) {
            return new OpenChannelRequest(properties);
        };

        /**
         * Encodes the specified OpenChannelRequest message. Does not implicitly {@link api.OpenChannelRequest.verify|verify} messages.
         * @function encode
         * @memberof api.OpenChannelRequest
         * @static
         * @param {api.IOpenChannelRequest} message OpenChannelRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpenChannelRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nodePubkey != null && Object.hasOwnProperty.call(message, "nodePubkey"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nodePubkey);
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.address);
            if (message.channelAmountSats != null && Object.hasOwnProperty.call(message, "channelAmountSats"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.channelAmountSats);
            if (message.pushToCounterpartyMsat != null && Object.hasOwnProperty.call(message, "pushToCounterpartyMsat"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.pushToCounterpartyMsat);
            if (message.channelConfig != null && Object.hasOwnProperty.call(message, "channelConfig"))
                $root.types.ChannelConfig.encode(message.channelConfig, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.announceChannel != null && Object.hasOwnProperty.call(message, "announceChannel"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.announceChannel);
            return writer;
        };

        /**
         * Encodes the specified OpenChannelRequest message, length delimited. Does not implicitly {@link api.OpenChannelRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.OpenChannelRequest
         * @static
         * @param {api.IOpenChannelRequest} message OpenChannelRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpenChannelRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OpenChannelRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.OpenChannelRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.OpenChannelRequest} OpenChannelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpenChannelRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.OpenChannelRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.nodePubkey = reader.string();
                        break;
                    }
                case 2: {
                        message.address = reader.string();
                        break;
                    }
                case 3: {
                        message.channelAmountSats = reader.uint64();
                        break;
                    }
                case 4: {
                        message.pushToCounterpartyMsat = reader.uint64();
                        break;
                    }
                case 5: {
                        message.channelConfig = $root.types.ChannelConfig.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.announceChannel = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OpenChannelRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.OpenChannelRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.OpenChannelRequest} OpenChannelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpenChannelRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OpenChannelRequest message.
         * @function verify
         * @memberof api.OpenChannelRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OpenChannelRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.nodePubkey != null && message.hasOwnProperty("nodePubkey"))
                if (!$util.isString(message.nodePubkey))
                    return "nodePubkey: string expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            if (message.channelAmountSats != null && message.hasOwnProperty("channelAmountSats"))
                if (!$util.isInteger(message.channelAmountSats) && !(message.channelAmountSats && $util.isInteger(message.channelAmountSats.low) && $util.isInteger(message.channelAmountSats.high)))
                    return "channelAmountSats: integer|Long expected";
            if (message.pushToCounterpartyMsat != null && message.hasOwnProperty("pushToCounterpartyMsat")) {
                properties._pushToCounterpartyMsat = 1;
                if (!$util.isInteger(message.pushToCounterpartyMsat) && !(message.pushToCounterpartyMsat && $util.isInteger(message.pushToCounterpartyMsat.low) && $util.isInteger(message.pushToCounterpartyMsat.high)))
                    return "pushToCounterpartyMsat: integer|Long expected";
            }
            if (message.channelConfig != null && message.hasOwnProperty("channelConfig")) {
                properties._channelConfig = 1;
                {
                    let error = $root.types.ChannelConfig.verify(message.channelConfig);
                    if (error)
                        return "channelConfig." + error;
                }
            }
            if (message.announceChannel != null && message.hasOwnProperty("announceChannel"))
                if (typeof message.announceChannel !== "boolean")
                    return "announceChannel: boolean expected";
            return null;
        };

        /**
         * Creates an OpenChannelRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.OpenChannelRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.OpenChannelRequest} OpenChannelRequest
         */
        OpenChannelRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.api.OpenChannelRequest)
                return object;
            let message = new $root.api.OpenChannelRequest();
            if (object.nodePubkey != null)
                message.nodePubkey = String(object.nodePubkey);
            if (object.address != null)
                message.address = String(object.address);
            if (object.channelAmountSats != null)
                if ($util.Long)
                    (message.channelAmountSats = $util.Long.fromValue(object.channelAmountSats)).unsigned = true;
                else if (typeof object.channelAmountSats === "string")
                    message.channelAmountSats = parseInt(object.channelAmountSats, 10);
                else if (typeof object.channelAmountSats === "number")
                    message.channelAmountSats = object.channelAmountSats;
                else if (typeof object.channelAmountSats === "object")
                    message.channelAmountSats = new $util.LongBits(object.channelAmountSats.low >>> 0, object.channelAmountSats.high >>> 0).toNumber(true);
            if (object.pushToCounterpartyMsat != null)
                if ($util.Long)
                    (message.pushToCounterpartyMsat = $util.Long.fromValue(object.pushToCounterpartyMsat)).unsigned = true;
                else if (typeof object.pushToCounterpartyMsat === "string")
                    message.pushToCounterpartyMsat = parseInt(object.pushToCounterpartyMsat, 10);
                else if (typeof object.pushToCounterpartyMsat === "number")
                    message.pushToCounterpartyMsat = object.pushToCounterpartyMsat;
                else if (typeof object.pushToCounterpartyMsat === "object")
                    message.pushToCounterpartyMsat = new $util.LongBits(object.pushToCounterpartyMsat.low >>> 0, object.pushToCounterpartyMsat.high >>> 0).toNumber(true);
            if (object.channelConfig != null) {
                if (typeof object.channelConfig !== "object")
                    throw TypeError(".api.OpenChannelRequest.channelConfig: object expected");
                message.channelConfig = $root.types.ChannelConfig.fromObject(object.channelConfig);
            }
            if (object.announceChannel != null)
                message.announceChannel = Boolean(object.announceChannel);
            return message;
        };

        /**
         * Creates a plain object from an OpenChannelRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.OpenChannelRequest
         * @static
         * @param {api.OpenChannelRequest} message OpenChannelRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OpenChannelRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.nodePubkey = "";
                object.address = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.channelAmountSats = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.channelAmountSats = options.longs === String ? "0" : 0;
                object.announceChannel = false;
            }
            if (message.nodePubkey != null && message.hasOwnProperty("nodePubkey"))
                object.nodePubkey = message.nodePubkey;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            if (message.channelAmountSats != null && message.hasOwnProperty("channelAmountSats"))
                if (typeof message.channelAmountSats === "number")
                    object.channelAmountSats = options.longs === String ? String(message.channelAmountSats) : message.channelAmountSats;
                else
                    object.channelAmountSats = options.longs === String ? $util.Long.prototype.toString.call(message.channelAmountSats) : options.longs === Number ? new $util.LongBits(message.channelAmountSats.low >>> 0, message.channelAmountSats.high >>> 0).toNumber(true) : message.channelAmountSats;
            if (message.pushToCounterpartyMsat != null && message.hasOwnProperty("pushToCounterpartyMsat")) {
                if (typeof message.pushToCounterpartyMsat === "number")
                    object.pushToCounterpartyMsat = options.longs === String ? String(message.pushToCounterpartyMsat) : message.pushToCounterpartyMsat;
                else
                    object.pushToCounterpartyMsat = options.longs === String ? $util.Long.prototype.toString.call(message.pushToCounterpartyMsat) : options.longs === Number ? new $util.LongBits(message.pushToCounterpartyMsat.low >>> 0, message.pushToCounterpartyMsat.high >>> 0).toNumber(true) : message.pushToCounterpartyMsat;
                if (options.oneofs)
                    object._pushToCounterpartyMsat = "pushToCounterpartyMsat";
            }
            if (message.channelConfig != null && message.hasOwnProperty("channelConfig")) {
                object.channelConfig = $root.types.ChannelConfig.toObject(message.channelConfig, options);
                if (options.oneofs)
                    object._channelConfig = "channelConfig";
            }
            if (message.announceChannel != null && message.hasOwnProperty("announceChannel"))
                object.announceChannel = message.announceChannel;
            return object;
        };

        /**
         * Converts this OpenChannelRequest to JSON.
         * @function toJSON
         * @memberof api.OpenChannelRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OpenChannelRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OpenChannelRequest
         * @function getTypeUrl
         * @memberof api.OpenChannelRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OpenChannelRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.OpenChannelRequest";
        };

        return OpenChannelRequest;
    })();

    api.OpenChannelResponse = (function() {

        /**
         * Properties of an OpenChannelResponse.
         * @memberof api
         * @interface IOpenChannelResponse
         * @property {string|null} [userChannelId] OpenChannelResponse userChannelId
         */

        /**
         * Constructs a new OpenChannelResponse.
         * @memberof api
         * @classdesc Represents an OpenChannelResponse.
         * @implements IOpenChannelResponse
         * @constructor
         * @param {api.IOpenChannelResponse=} [properties] Properties to set
         */
        function OpenChannelResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OpenChannelResponse userChannelId.
         * @member {string} userChannelId
         * @memberof api.OpenChannelResponse
         * @instance
         */
        OpenChannelResponse.prototype.userChannelId = "";

        /**
         * Creates a new OpenChannelResponse instance using the specified properties.
         * @function create
         * @memberof api.OpenChannelResponse
         * @static
         * @param {api.IOpenChannelResponse=} [properties] Properties to set
         * @returns {api.OpenChannelResponse} OpenChannelResponse instance
         */
        OpenChannelResponse.create = function create(properties) {
            return new OpenChannelResponse(properties);
        };

        /**
         * Encodes the specified OpenChannelResponse message. Does not implicitly {@link api.OpenChannelResponse.verify|verify} messages.
         * @function encode
         * @memberof api.OpenChannelResponse
         * @static
         * @param {api.IOpenChannelResponse} message OpenChannelResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpenChannelResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userChannelId != null && Object.hasOwnProperty.call(message, "userChannelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userChannelId);
            return writer;
        };

        /**
         * Encodes the specified OpenChannelResponse message, length delimited. Does not implicitly {@link api.OpenChannelResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.OpenChannelResponse
         * @static
         * @param {api.IOpenChannelResponse} message OpenChannelResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OpenChannelResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OpenChannelResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.OpenChannelResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.OpenChannelResponse} OpenChannelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpenChannelResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.OpenChannelResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userChannelId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OpenChannelResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.OpenChannelResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.OpenChannelResponse} OpenChannelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OpenChannelResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OpenChannelResponse message.
         * @function verify
         * @memberof api.OpenChannelResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OpenChannelResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userChannelId != null && message.hasOwnProperty("userChannelId"))
                if (!$util.isString(message.userChannelId))
                    return "userChannelId: string expected";
            return null;
        };

        /**
         * Creates an OpenChannelResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.OpenChannelResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.OpenChannelResponse} OpenChannelResponse
         */
        OpenChannelResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.api.OpenChannelResponse)
                return object;
            let message = new $root.api.OpenChannelResponse();
            if (object.userChannelId != null)
                message.userChannelId = String(object.userChannelId);
            return message;
        };

        /**
         * Creates a plain object from an OpenChannelResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.OpenChannelResponse
         * @static
         * @param {api.OpenChannelResponse} message OpenChannelResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OpenChannelResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.userChannelId = "";
            if (message.userChannelId != null && message.hasOwnProperty("userChannelId"))
                object.userChannelId = message.userChannelId;
            return object;
        };

        /**
         * Converts this OpenChannelResponse to JSON.
         * @function toJSON
         * @memberof api.OpenChannelResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OpenChannelResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OpenChannelResponse
         * @function getTypeUrl
         * @memberof api.OpenChannelResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OpenChannelResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.OpenChannelResponse";
        };

        return OpenChannelResponse;
    })();

    api.UpdateChannelConfigRequest = (function() {

        /**
         * Properties of an UpdateChannelConfigRequest.
         * @memberof api
         * @interface IUpdateChannelConfigRequest
         * @property {string|null} [userChannelId] UpdateChannelConfigRequest userChannelId
         * @property {string|null} [counterpartyNodeId] UpdateChannelConfigRequest counterpartyNodeId
         * @property {types.IChannelConfig|null} [channelConfig] UpdateChannelConfigRequest channelConfig
         */

        /**
         * Constructs a new UpdateChannelConfigRequest.
         * @memberof api
         * @classdesc Represents an UpdateChannelConfigRequest.
         * @implements IUpdateChannelConfigRequest
         * @constructor
         * @param {api.IUpdateChannelConfigRequest=} [properties] Properties to set
         */
        function UpdateChannelConfigRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateChannelConfigRequest userChannelId.
         * @member {string} userChannelId
         * @memberof api.UpdateChannelConfigRequest
         * @instance
         */
        UpdateChannelConfigRequest.prototype.userChannelId = "";

        /**
         * UpdateChannelConfigRequest counterpartyNodeId.
         * @member {string} counterpartyNodeId
         * @memberof api.UpdateChannelConfigRequest
         * @instance
         */
        UpdateChannelConfigRequest.prototype.counterpartyNodeId = "";

        /**
         * UpdateChannelConfigRequest channelConfig.
         * @member {types.IChannelConfig|null|undefined} channelConfig
         * @memberof api.UpdateChannelConfigRequest
         * @instance
         */
        UpdateChannelConfigRequest.prototype.channelConfig = null;

        /**
         * Creates a new UpdateChannelConfigRequest instance using the specified properties.
         * @function create
         * @memberof api.UpdateChannelConfigRequest
         * @static
         * @param {api.IUpdateChannelConfigRequest=} [properties] Properties to set
         * @returns {api.UpdateChannelConfigRequest} UpdateChannelConfigRequest instance
         */
        UpdateChannelConfigRequest.create = function create(properties) {
            return new UpdateChannelConfigRequest(properties);
        };

        /**
         * Encodes the specified UpdateChannelConfigRequest message. Does not implicitly {@link api.UpdateChannelConfigRequest.verify|verify} messages.
         * @function encode
         * @memberof api.UpdateChannelConfigRequest
         * @static
         * @param {api.IUpdateChannelConfigRequest} message UpdateChannelConfigRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateChannelConfigRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userChannelId != null && Object.hasOwnProperty.call(message, "userChannelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userChannelId);
            if (message.counterpartyNodeId != null && Object.hasOwnProperty.call(message, "counterpartyNodeId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.counterpartyNodeId);
            if (message.channelConfig != null && Object.hasOwnProperty.call(message, "channelConfig"))
                $root.types.ChannelConfig.encode(message.channelConfig, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateChannelConfigRequest message, length delimited. Does not implicitly {@link api.UpdateChannelConfigRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.UpdateChannelConfigRequest
         * @static
         * @param {api.IUpdateChannelConfigRequest} message UpdateChannelConfigRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateChannelConfigRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateChannelConfigRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.UpdateChannelConfigRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.UpdateChannelConfigRequest} UpdateChannelConfigRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateChannelConfigRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.UpdateChannelConfigRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userChannelId = reader.string();
                        break;
                    }
                case 2: {
                        message.counterpartyNodeId = reader.string();
                        break;
                    }
                case 3: {
                        message.channelConfig = $root.types.ChannelConfig.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateChannelConfigRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.UpdateChannelConfigRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.UpdateChannelConfigRequest} UpdateChannelConfigRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateChannelConfigRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateChannelConfigRequest message.
         * @function verify
         * @memberof api.UpdateChannelConfigRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateChannelConfigRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userChannelId != null && message.hasOwnProperty("userChannelId"))
                if (!$util.isString(message.userChannelId))
                    return "userChannelId: string expected";
            if (message.counterpartyNodeId != null && message.hasOwnProperty("counterpartyNodeId"))
                if (!$util.isString(message.counterpartyNodeId))
                    return "counterpartyNodeId: string expected";
            if (message.channelConfig != null && message.hasOwnProperty("channelConfig")) {
                let error = $root.types.ChannelConfig.verify(message.channelConfig);
                if (error)
                    return "channelConfig." + error;
            }
            return null;
        };

        /**
         * Creates an UpdateChannelConfigRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.UpdateChannelConfigRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.UpdateChannelConfigRequest} UpdateChannelConfigRequest
         */
        UpdateChannelConfigRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.api.UpdateChannelConfigRequest)
                return object;
            let message = new $root.api.UpdateChannelConfigRequest();
            if (object.userChannelId != null)
                message.userChannelId = String(object.userChannelId);
            if (object.counterpartyNodeId != null)
                message.counterpartyNodeId = String(object.counterpartyNodeId);
            if (object.channelConfig != null) {
                if (typeof object.channelConfig !== "object")
                    throw TypeError(".api.UpdateChannelConfigRequest.channelConfig: object expected");
                message.channelConfig = $root.types.ChannelConfig.fromObject(object.channelConfig);
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateChannelConfigRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.UpdateChannelConfigRequest
         * @static
         * @param {api.UpdateChannelConfigRequest} message UpdateChannelConfigRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateChannelConfigRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userChannelId = "";
                object.counterpartyNodeId = "";
                object.channelConfig = null;
            }
            if (message.userChannelId != null && message.hasOwnProperty("userChannelId"))
                object.userChannelId = message.userChannelId;
            if (message.counterpartyNodeId != null && message.hasOwnProperty("counterpartyNodeId"))
                object.counterpartyNodeId = message.counterpartyNodeId;
            if (message.channelConfig != null && message.hasOwnProperty("channelConfig"))
                object.channelConfig = $root.types.ChannelConfig.toObject(message.channelConfig, options);
            return object;
        };

        /**
         * Converts this UpdateChannelConfigRequest to JSON.
         * @function toJSON
         * @memberof api.UpdateChannelConfigRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateChannelConfigRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateChannelConfigRequest
         * @function getTypeUrl
         * @memberof api.UpdateChannelConfigRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateChannelConfigRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.UpdateChannelConfigRequest";
        };

        return UpdateChannelConfigRequest;
    })();

    api.UpdateChannelConfigResponse = (function() {

        /**
         * Properties of an UpdateChannelConfigResponse.
         * @memberof api
         * @interface IUpdateChannelConfigResponse
         */

        /**
         * Constructs a new UpdateChannelConfigResponse.
         * @memberof api
         * @classdesc Represents an UpdateChannelConfigResponse.
         * @implements IUpdateChannelConfigResponse
         * @constructor
         * @param {api.IUpdateChannelConfigResponse=} [properties] Properties to set
         */
        function UpdateChannelConfigResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UpdateChannelConfigResponse instance using the specified properties.
         * @function create
         * @memberof api.UpdateChannelConfigResponse
         * @static
         * @param {api.IUpdateChannelConfigResponse=} [properties] Properties to set
         * @returns {api.UpdateChannelConfigResponse} UpdateChannelConfigResponse instance
         */
        UpdateChannelConfigResponse.create = function create(properties) {
            return new UpdateChannelConfigResponse(properties);
        };

        /**
         * Encodes the specified UpdateChannelConfigResponse message. Does not implicitly {@link api.UpdateChannelConfigResponse.verify|verify} messages.
         * @function encode
         * @memberof api.UpdateChannelConfigResponse
         * @static
         * @param {api.IUpdateChannelConfigResponse} message UpdateChannelConfigResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateChannelConfigResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UpdateChannelConfigResponse message, length delimited. Does not implicitly {@link api.UpdateChannelConfigResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.UpdateChannelConfigResponse
         * @static
         * @param {api.IUpdateChannelConfigResponse} message UpdateChannelConfigResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateChannelConfigResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateChannelConfigResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.UpdateChannelConfigResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.UpdateChannelConfigResponse} UpdateChannelConfigResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateChannelConfigResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.UpdateChannelConfigResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateChannelConfigResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.UpdateChannelConfigResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.UpdateChannelConfigResponse} UpdateChannelConfigResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateChannelConfigResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateChannelConfigResponse message.
         * @function verify
         * @memberof api.UpdateChannelConfigResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateChannelConfigResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an UpdateChannelConfigResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.UpdateChannelConfigResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.UpdateChannelConfigResponse} UpdateChannelConfigResponse
         */
        UpdateChannelConfigResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.api.UpdateChannelConfigResponse)
                return object;
            return new $root.api.UpdateChannelConfigResponse();
        };

        /**
         * Creates a plain object from an UpdateChannelConfigResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.UpdateChannelConfigResponse
         * @static
         * @param {api.UpdateChannelConfigResponse} message UpdateChannelConfigResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateChannelConfigResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UpdateChannelConfigResponse to JSON.
         * @function toJSON
         * @memberof api.UpdateChannelConfigResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateChannelConfigResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpdateChannelConfigResponse
         * @function getTypeUrl
         * @memberof api.UpdateChannelConfigResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpdateChannelConfigResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.UpdateChannelConfigResponse";
        };

        return UpdateChannelConfigResponse;
    })();

    api.CloseChannelRequest = (function() {

        /**
         * Properties of a CloseChannelRequest.
         * @memberof api
         * @interface ICloseChannelRequest
         * @property {string|null} [userChannelId] CloseChannelRequest userChannelId
         * @property {string|null} [counterpartyNodeId] CloseChannelRequest counterpartyNodeId
         * @property {boolean|null} [forceClose] CloseChannelRequest forceClose
         * @property {string|null} [forceCloseReason] CloseChannelRequest forceCloseReason
         */

        /**
         * Constructs a new CloseChannelRequest.
         * @memberof api
         * @classdesc Represents a CloseChannelRequest.
         * @implements ICloseChannelRequest
         * @constructor
         * @param {api.ICloseChannelRequest=} [properties] Properties to set
         */
        function CloseChannelRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CloseChannelRequest userChannelId.
         * @member {string} userChannelId
         * @memberof api.CloseChannelRequest
         * @instance
         */
        CloseChannelRequest.prototype.userChannelId = "";

        /**
         * CloseChannelRequest counterpartyNodeId.
         * @member {string} counterpartyNodeId
         * @memberof api.CloseChannelRequest
         * @instance
         */
        CloseChannelRequest.prototype.counterpartyNodeId = "";

        /**
         * CloseChannelRequest forceClose.
         * @member {boolean|null|undefined} forceClose
         * @memberof api.CloseChannelRequest
         * @instance
         */
        CloseChannelRequest.prototype.forceClose = null;

        /**
         * CloseChannelRequest forceCloseReason.
         * @member {string|null|undefined} forceCloseReason
         * @memberof api.CloseChannelRequest
         * @instance
         */
        CloseChannelRequest.prototype.forceCloseReason = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * CloseChannelRequest _forceClose.
         * @member {"forceClose"|undefined} _forceClose
         * @memberof api.CloseChannelRequest
         * @instance
         */
        Object.defineProperty(CloseChannelRequest.prototype, "_forceClose", {
            get: $util.oneOfGetter($oneOfFields = ["forceClose"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * CloseChannelRequest _forceCloseReason.
         * @member {"forceCloseReason"|undefined} _forceCloseReason
         * @memberof api.CloseChannelRequest
         * @instance
         */
        Object.defineProperty(CloseChannelRequest.prototype, "_forceCloseReason", {
            get: $util.oneOfGetter($oneOfFields = ["forceCloseReason"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CloseChannelRequest instance using the specified properties.
         * @function create
         * @memberof api.CloseChannelRequest
         * @static
         * @param {api.ICloseChannelRequest=} [properties] Properties to set
         * @returns {api.CloseChannelRequest} CloseChannelRequest instance
         */
        CloseChannelRequest.create = function create(properties) {
            return new CloseChannelRequest(properties);
        };

        /**
         * Encodes the specified CloseChannelRequest message. Does not implicitly {@link api.CloseChannelRequest.verify|verify} messages.
         * @function encode
         * @memberof api.CloseChannelRequest
         * @static
         * @param {api.ICloseChannelRequest} message CloseChannelRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CloseChannelRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userChannelId != null && Object.hasOwnProperty.call(message, "userChannelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userChannelId);
            if (message.counterpartyNodeId != null && Object.hasOwnProperty.call(message, "counterpartyNodeId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.counterpartyNodeId);
            if (message.forceClose != null && Object.hasOwnProperty.call(message, "forceClose"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.forceClose);
            if (message.forceCloseReason != null && Object.hasOwnProperty.call(message, "forceCloseReason"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.forceCloseReason);
            return writer;
        };

        /**
         * Encodes the specified CloseChannelRequest message, length delimited. Does not implicitly {@link api.CloseChannelRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.CloseChannelRequest
         * @static
         * @param {api.ICloseChannelRequest} message CloseChannelRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CloseChannelRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CloseChannelRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.CloseChannelRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.CloseChannelRequest} CloseChannelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CloseChannelRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.CloseChannelRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userChannelId = reader.string();
                        break;
                    }
                case 2: {
                        message.counterpartyNodeId = reader.string();
                        break;
                    }
                case 3: {
                        message.forceClose = reader.bool();
                        break;
                    }
                case 4: {
                        message.forceCloseReason = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CloseChannelRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.CloseChannelRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.CloseChannelRequest} CloseChannelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CloseChannelRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CloseChannelRequest message.
         * @function verify
         * @memberof api.CloseChannelRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CloseChannelRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.userChannelId != null && message.hasOwnProperty("userChannelId"))
                if (!$util.isString(message.userChannelId))
                    return "userChannelId: string expected";
            if (message.counterpartyNodeId != null && message.hasOwnProperty("counterpartyNodeId"))
                if (!$util.isString(message.counterpartyNodeId))
                    return "counterpartyNodeId: string expected";
            if (message.forceClose != null && message.hasOwnProperty("forceClose")) {
                properties._forceClose = 1;
                if (typeof message.forceClose !== "boolean")
                    return "forceClose: boolean expected";
            }
            if (message.forceCloseReason != null && message.hasOwnProperty("forceCloseReason")) {
                properties._forceCloseReason = 1;
                if (!$util.isString(message.forceCloseReason))
                    return "forceCloseReason: string expected";
            }
            return null;
        };

        /**
         * Creates a CloseChannelRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.CloseChannelRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.CloseChannelRequest} CloseChannelRequest
         */
        CloseChannelRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.api.CloseChannelRequest)
                return object;
            let message = new $root.api.CloseChannelRequest();
            if (object.userChannelId != null)
                message.userChannelId = String(object.userChannelId);
            if (object.counterpartyNodeId != null)
                message.counterpartyNodeId = String(object.counterpartyNodeId);
            if (object.forceClose != null)
                message.forceClose = Boolean(object.forceClose);
            if (object.forceCloseReason != null)
                message.forceCloseReason = String(object.forceCloseReason);
            return message;
        };

        /**
         * Creates a plain object from a CloseChannelRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.CloseChannelRequest
         * @static
         * @param {api.CloseChannelRequest} message CloseChannelRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CloseChannelRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userChannelId = "";
                object.counterpartyNodeId = "";
            }
            if (message.userChannelId != null && message.hasOwnProperty("userChannelId"))
                object.userChannelId = message.userChannelId;
            if (message.counterpartyNodeId != null && message.hasOwnProperty("counterpartyNodeId"))
                object.counterpartyNodeId = message.counterpartyNodeId;
            if (message.forceClose != null && message.hasOwnProperty("forceClose")) {
                object.forceClose = message.forceClose;
                if (options.oneofs)
                    object._forceClose = "forceClose";
            }
            if (message.forceCloseReason != null && message.hasOwnProperty("forceCloseReason")) {
                object.forceCloseReason = message.forceCloseReason;
                if (options.oneofs)
                    object._forceCloseReason = "forceCloseReason";
            }
            return object;
        };

        /**
         * Converts this CloseChannelRequest to JSON.
         * @function toJSON
         * @memberof api.CloseChannelRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CloseChannelRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CloseChannelRequest
         * @function getTypeUrl
         * @memberof api.CloseChannelRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CloseChannelRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.CloseChannelRequest";
        };

        return CloseChannelRequest;
    })();

    api.CloseChannelResponse = (function() {

        /**
         * Properties of a CloseChannelResponse.
         * @memberof api
         * @interface ICloseChannelResponse
         */

        /**
         * Constructs a new CloseChannelResponse.
         * @memberof api
         * @classdesc Represents a CloseChannelResponse.
         * @implements ICloseChannelResponse
         * @constructor
         * @param {api.ICloseChannelResponse=} [properties] Properties to set
         */
        function CloseChannelResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CloseChannelResponse instance using the specified properties.
         * @function create
         * @memberof api.CloseChannelResponse
         * @static
         * @param {api.ICloseChannelResponse=} [properties] Properties to set
         * @returns {api.CloseChannelResponse} CloseChannelResponse instance
         */
        CloseChannelResponse.create = function create(properties) {
            return new CloseChannelResponse(properties);
        };

        /**
         * Encodes the specified CloseChannelResponse message. Does not implicitly {@link api.CloseChannelResponse.verify|verify} messages.
         * @function encode
         * @memberof api.CloseChannelResponse
         * @static
         * @param {api.ICloseChannelResponse} message CloseChannelResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CloseChannelResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CloseChannelResponse message, length delimited. Does not implicitly {@link api.CloseChannelResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.CloseChannelResponse
         * @static
         * @param {api.ICloseChannelResponse} message CloseChannelResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CloseChannelResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CloseChannelResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.CloseChannelResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.CloseChannelResponse} CloseChannelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CloseChannelResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.CloseChannelResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CloseChannelResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.CloseChannelResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.CloseChannelResponse} CloseChannelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CloseChannelResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CloseChannelResponse message.
         * @function verify
         * @memberof api.CloseChannelResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CloseChannelResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CloseChannelResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.CloseChannelResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.CloseChannelResponse} CloseChannelResponse
         */
        CloseChannelResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.api.CloseChannelResponse)
                return object;
            return new $root.api.CloseChannelResponse();
        };

        /**
         * Creates a plain object from a CloseChannelResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.CloseChannelResponse
         * @static
         * @param {api.CloseChannelResponse} message CloseChannelResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CloseChannelResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CloseChannelResponse to JSON.
         * @function toJSON
         * @memberof api.CloseChannelResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CloseChannelResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CloseChannelResponse
         * @function getTypeUrl
         * @memberof api.CloseChannelResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CloseChannelResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.CloseChannelResponse";
        };

        return CloseChannelResponse;
    })();

    api.ListChannelsRequest = (function() {

        /**
         * Properties of a ListChannelsRequest.
         * @memberof api
         * @interface IListChannelsRequest
         */

        /**
         * Constructs a new ListChannelsRequest.
         * @memberof api
         * @classdesc Represents a ListChannelsRequest.
         * @implements IListChannelsRequest
         * @constructor
         * @param {api.IListChannelsRequest=} [properties] Properties to set
         */
        function ListChannelsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ListChannelsRequest instance using the specified properties.
         * @function create
         * @memberof api.ListChannelsRequest
         * @static
         * @param {api.IListChannelsRequest=} [properties] Properties to set
         * @returns {api.ListChannelsRequest} ListChannelsRequest instance
         */
        ListChannelsRequest.create = function create(properties) {
            return new ListChannelsRequest(properties);
        };

        /**
         * Encodes the specified ListChannelsRequest message. Does not implicitly {@link api.ListChannelsRequest.verify|verify} messages.
         * @function encode
         * @memberof api.ListChannelsRequest
         * @static
         * @param {api.IListChannelsRequest} message ListChannelsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListChannelsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ListChannelsRequest message, length delimited. Does not implicitly {@link api.ListChannelsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ListChannelsRequest
         * @static
         * @param {api.IListChannelsRequest} message ListChannelsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListChannelsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListChannelsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.ListChannelsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ListChannelsRequest} ListChannelsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListChannelsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ListChannelsRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListChannelsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ListChannelsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ListChannelsRequest} ListChannelsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListChannelsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListChannelsRequest message.
         * @function verify
         * @memberof api.ListChannelsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListChannelsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ListChannelsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ListChannelsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ListChannelsRequest} ListChannelsRequest
         */
        ListChannelsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ListChannelsRequest)
                return object;
            return new $root.api.ListChannelsRequest();
        };

        /**
         * Creates a plain object from a ListChannelsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ListChannelsRequest
         * @static
         * @param {api.ListChannelsRequest} message ListChannelsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListChannelsRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ListChannelsRequest to JSON.
         * @function toJSON
         * @memberof api.ListChannelsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListChannelsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListChannelsRequest
         * @function getTypeUrl
         * @memberof api.ListChannelsRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListChannelsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ListChannelsRequest";
        };

        return ListChannelsRequest;
    })();

    api.ListChannelsResponse = (function() {

        /**
         * Properties of a ListChannelsResponse.
         * @memberof api
         * @interface IListChannelsResponse
         * @property {Array.<types.IChannel>|null} [channels] ListChannelsResponse channels
         */

        /**
         * Constructs a new ListChannelsResponse.
         * @memberof api
         * @classdesc Represents a ListChannelsResponse.
         * @implements IListChannelsResponse
         * @constructor
         * @param {api.IListChannelsResponse=} [properties] Properties to set
         */
        function ListChannelsResponse(properties) {
            this.channels = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListChannelsResponse channels.
         * @member {Array.<types.IChannel>} channels
         * @memberof api.ListChannelsResponse
         * @instance
         */
        ListChannelsResponse.prototype.channels = $util.emptyArray;

        /**
         * Creates a new ListChannelsResponse instance using the specified properties.
         * @function create
         * @memberof api.ListChannelsResponse
         * @static
         * @param {api.IListChannelsResponse=} [properties] Properties to set
         * @returns {api.ListChannelsResponse} ListChannelsResponse instance
         */
        ListChannelsResponse.create = function create(properties) {
            return new ListChannelsResponse(properties);
        };

        /**
         * Encodes the specified ListChannelsResponse message. Does not implicitly {@link api.ListChannelsResponse.verify|verify} messages.
         * @function encode
         * @memberof api.ListChannelsResponse
         * @static
         * @param {api.IListChannelsResponse} message ListChannelsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListChannelsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channels != null && message.channels.length)
                for (let i = 0; i < message.channels.length; ++i)
                    $root.types.Channel.encode(message.channels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListChannelsResponse message, length delimited. Does not implicitly {@link api.ListChannelsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ListChannelsResponse
         * @static
         * @param {api.IListChannelsResponse} message ListChannelsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListChannelsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListChannelsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.ListChannelsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ListChannelsResponse} ListChannelsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListChannelsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ListChannelsResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.channels && message.channels.length))
                            message.channels = [];
                        message.channels.push($root.types.Channel.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListChannelsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ListChannelsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ListChannelsResponse} ListChannelsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListChannelsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListChannelsResponse message.
         * @function verify
         * @memberof api.ListChannelsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListChannelsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.channels != null && message.hasOwnProperty("channels")) {
                if (!Array.isArray(message.channels))
                    return "channels: array expected";
                for (let i = 0; i < message.channels.length; ++i) {
                    let error = $root.types.Channel.verify(message.channels[i]);
                    if (error)
                        return "channels." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListChannelsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ListChannelsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ListChannelsResponse} ListChannelsResponse
         */
        ListChannelsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ListChannelsResponse)
                return object;
            let message = new $root.api.ListChannelsResponse();
            if (object.channels) {
                if (!Array.isArray(object.channels))
                    throw TypeError(".api.ListChannelsResponse.channels: array expected");
                message.channels = [];
                for (let i = 0; i < object.channels.length; ++i) {
                    if (typeof object.channels[i] !== "object")
                        throw TypeError(".api.ListChannelsResponse.channels: object expected");
                    message.channels[i] = $root.types.Channel.fromObject(object.channels[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListChannelsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ListChannelsResponse
         * @static
         * @param {api.ListChannelsResponse} message ListChannelsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListChannelsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.channels = [];
            if (message.channels && message.channels.length) {
                object.channels = [];
                for (let j = 0; j < message.channels.length; ++j)
                    object.channels[j] = $root.types.Channel.toObject(message.channels[j], options);
            }
            return object;
        };

        /**
         * Converts this ListChannelsResponse to JSON.
         * @function toJSON
         * @memberof api.ListChannelsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListChannelsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListChannelsResponse
         * @function getTypeUrl
         * @memberof api.ListChannelsResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListChannelsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ListChannelsResponse";
        };

        return ListChannelsResponse;
    })();

    api.GetPaymentDetailsRequest = (function() {

        /**
         * Properties of a GetPaymentDetailsRequest.
         * @memberof api
         * @interface IGetPaymentDetailsRequest
         * @property {string|null} [paymentId] GetPaymentDetailsRequest paymentId
         */

        /**
         * Constructs a new GetPaymentDetailsRequest.
         * @memberof api
         * @classdesc Represents a GetPaymentDetailsRequest.
         * @implements IGetPaymentDetailsRequest
         * @constructor
         * @param {api.IGetPaymentDetailsRequest=} [properties] Properties to set
         */
        function GetPaymentDetailsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPaymentDetailsRequest paymentId.
         * @member {string} paymentId
         * @memberof api.GetPaymentDetailsRequest
         * @instance
         */
        GetPaymentDetailsRequest.prototype.paymentId = "";

        /**
         * Creates a new GetPaymentDetailsRequest instance using the specified properties.
         * @function create
         * @memberof api.GetPaymentDetailsRequest
         * @static
         * @param {api.IGetPaymentDetailsRequest=} [properties] Properties to set
         * @returns {api.GetPaymentDetailsRequest} GetPaymentDetailsRequest instance
         */
        GetPaymentDetailsRequest.create = function create(properties) {
            return new GetPaymentDetailsRequest(properties);
        };

        /**
         * Encodes the specified GetPaymentDetailsRequest message. Does not implicitly {@link api.GetPaymentDetailsRequest.verify|verify} messages.
         * @function encode
         * @memberof api.GetPaymentDetailsRequest
         * @static
         * @param {api.IGetPaymentDetailsRequest} message GetPaymentDetailsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPaymentDetailsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.paymentId != null && Object.hasOwnProperty.call(message, "paymentId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.paymentId);
            return writer;
        };

        /**
         * Encodes the specified GetPaymentDetailsRequest message, length delimited. Does not implicitly {@link api.GetPaymentDetailsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.GetPaymentDetailsRequest
         * @static
         * @param {api.IGetPaymentDetailsRequest} message GetPaymentDetailsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPaymentDetailsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPaymentDetailsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.GetPaymentDetailsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.GetPaymentDetailsRequest} GetPaymentDetailsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPaymentDetailsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.GetPaymentDetailsRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.paymentId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetPaymentDetailsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.GetPaymentDetailsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.GetPaymentDetailsRequest} GetPaymentDetailsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPaymentDetailsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPaymentDetailsRequest message.
         * @function verify
         * @memberof api.GetPaymentDetailsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPaymentDetailsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.paymentId != null && message.hasOwnProperty("paymentId"))
                if (!$util.isString(message.paymentId))
                    return "paymentId: string expected";
            return null;
        };

        /**
         * Creates a GetPaymentDetailsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.GetPaymentDetailsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.GetPaymentDetailsRequest} GetPaymentDetailsRequest
         */
        GetPaymentDetailsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.api.GetPaymentDetailsRequest)
                return object;
            let message = new $root.api.GetPaymentDetailsRequest();
            if (object.paymentId != null)
                message.paymentId = String(object.paymentId);
            return message;
        };

        /**
         * Creates a plain object from a GetPaymentDetailsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.GetPaymentDetailsRequest
         * @static
         * @param {api.GetPaymentDetailsRequest} message GetPaymentDetailsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPaymentDetailsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.paymentId = "";
            if (message.paymentId != null && message.hasOwnProperty("paymentId"))
                object.paymentId = message.paymentId;
            return object;
        };

        /**
         * Converts this GetPaymentDetailsRequest to JSON.
         * @function toJSON
         * @memberof api.GetPaymentDetailsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPaymentDetailsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetPaymentDetailsRequest
         * @function getTypeUrl
         * @memberof api.GetPaymentDetailsRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetPaymentDetailsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.GetPaymentDetailsRequest";
        };

        return GetPaymentDetailsRequest;
    })();

    api.GetPaymentDetailsResponse = (function() {

        /**
         * Properties of a GetPaymentDetailsResponse.
         * @memberof api
         * @interface IGetPaymentDetailsResponse
         * @property {types.IPayment|null} [payment] GetPaymentDetailsResponse payment
         */

        /**
         * Constructs a new GetPaymentDetailsResponse.
         * @memberof api
         * @classdesc Represents a GetPaymentDetailsResponse.
         * @implements IGetPaymentDetailsResponse
         * @constructor
         * @param {api.IGetPaymentDetailsResponse=} [properties] Properties to set
         */
        function GetPaymentDetailsResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPaymentDetailsResponse payment.
         * @member {types.IPayment|null|undefined} payment
         * @memberof api.GetPaymentDetailsResponse
         * @instance
         */
        GetPaymentDetailsResponse.prototype.payment = null;

        /**
         * Creates a new GetPaymentDetailsResponse instance using the specified properties.
         * @function create
         * @memberof api.GetPaymentDetailsResponse
         * @static
         * @param {api.IGetPaymentDetailsResponse=} [properties] Properties to set
         * @returns {api.GetPaymentDetailsResponse} GetPaymentDetailsResponse instance
         */
        GetPaymentDetailsResponse.create = function create(properties) {
            return new GetPaymentDetailsResponse(properties);
        };

        /**
         * Encodes the specified GetPaymentDetailsResponse message. Does not implicitly {@link api.GetPaymentDetailsResponse.verify|verify} messages.
         * @function encode
         * @memberof api.GetPaymentDetailsResponse
         * @static
         * @param {api.IGetPaymentDetailsResponse} message GetPaymentDetailsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPaymentDetailsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.payment != null && Object.hasOwnProperty.call(message, "payment"))
                $root.types.Payment.encode(message.payment, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetPaymentDetailsResponse message, length delimited. Does not implicitly {@link api.GetPaymentDetailsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.GetPaymentDetailsResponse
         * @static
         * @param {api.IGetPaymentDetailsResponse} message GetPaymentDetailsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPaymentDetailsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPaymentDetailsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.GetPaymentDetailsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.GetPaymentDetailsResponse} GetPaymentDetailsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPaymentDetailsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.GetPaymentDetailsResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.payment = $root.types.Payment.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetPaymentDetailsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.GetPaymentDetailsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.GetPaymentDetailsResponse} GetPaymentDetailsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPaymentDetailsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPaymentDetailsResponse message.
         * @function verify
         * @memberof api.GetPaymentDetailsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPaymentDetailsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.payment != null && message.hasOwnProperty("payment")) {
                let error = $root.types.Payment.verify(message.payment);
                if (error)
                    return "payment." + error;
            }
            return null;
        };

        /**
         * Creates a GetPaymentDetailsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.GetPaymentDetailsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.GetPaymentDetailsResponse} GetPaymentDetailsResponse
         */
        GetPaymentDetailsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.api.GetPaymentDetailsResponse)
                return object;
            let message = new $root.api.GetPaymentDetailsResponse();
            if (object.payment != null) {
                if (typeof object.payment !== "object")
                    throw TypeError(".api.GetPaymentDetailsResponse.payment: object expected");
                message.payment = $root.types.Payment.fromObject(object.payment);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetPaymentDetailsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.GetPaymentDetailsResponse
         * @static
         * @param {api.GetPaymentDetailsResponse} message GetPaymentDetailsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPaymentDetailsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.payment = null;
            if (message.payment != null && message.hasOwnProperty("payment"))
                object.payment = $root.types.Payment.toObject(message.payment, options);
            return object;
        };

        /**
         * Converts this GetPaymentDetailsResponse to JSON.
         * @function toJSON
         * @memberof api.GetPaymentDetailsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPaymentDetailsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetPaymentDetailsResponse
         * @function getTypeUrl
         * @memberof api.GetPaymentDetailsResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetPaymentDetailsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.GetPaymentDetailsResponse";
        };

        return GetPaymentDetailsResponse;
    })();

    api.ListPaymentsRequest = (function() {

        /**
         * Properties of a ListPaymentsRequest.
         * @memberof api
         * @interface IListPaymentsRequest
         * @property {types.IPageToken|null} [pageToken] ListPaymentsRequest pageToken
         */

        /**
         * Constructs a new ListPaymentsRequest.
         * @memberof api
         * @classdesc Represents a ListPaymentsRequest.
         * @implements IListPaymentsRequest
         * @constructor
         * @param {api.IListPaymentsRequest=} [properties] Properties to set
         */
        function ListPaymentsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListPaymentsRequest pageToken.
         * @member {types.IPageToken|null|undefined} pageToken
         * @memberof api.ListPaymentsRequest
         * @instance
         */
        ListPaymentsRequest.prototype.pageToken = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * ListPaymentsRequest _pageToken.
         * @member {"pageToken"|undefined} _pageToken
         * @memberof api.ListPaymentsRequest
         * @instance
         */
        Object.defineProperty(ListPaymentsRequest.prototype, "_pageToken", {
            get: $util.oneOfGetter($oneOfFields = ["pageToken"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ListPaymentsRequest instance using the specified properties.
         * @function create
         * @memberof api.ListPaymentsRequest
         * @static
         * @param {api.IListPaymentsRequest=} [properties] Properties to set
         * @returns {api.ListPaymentsRequest} ListPaymentsRequest instance
         */
        ListPaymentsRequest.create = function create(properties) {
            return new ListPaymentsRequest(properties);
        };

        /**
         * Encodes the specified ListPaymentsRequest message. Does not implicitly {@link api.ListPaymentsRequest.verify|verify} messages.
         * @function encode
         * @memberof api.ListPaymentsRequest
         * @static
         * @param {api.IListPaymentsRequest} message ListPaymentsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListPaymentsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pageToken != null && Object.hasOwnProperty.call(message, "pageToken"))
                $root.types.PageToken.encode(message.pageToken, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListPaymentsRequest message, length delimited. Does not implicitly {@link api.ListPaymentsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ListPaymentsRequest
         * @static
         * @param {api.IListPaymentsRequest} message ListPaymentsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListPaymentsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListPaymentsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.ListPaymentsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ListPaymentsRequest} ListPaymentsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListPaymentsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ListPaymentsRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.pageToken = $root.types.PageToken.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListPaymentsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ListPaymentsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ListPaymentsRequest} ListPaymentsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListPaymentsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListPaymentsRequest message.
         * @function verify
         * @memberof api.ListPaymentsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListPaymentsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.pageToken != null && message.hasOwnProperty("pageToken")) {
                properties._pageToken = 1;
                {
                    let error = $root.types.PageToken.verify(message.pageToken);
                    if (error)
                        return "pageToken." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListPaymentsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ListPaymentsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ListPaymentsRequest} ListPaymentsRequest
         */
        ListPaymentsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ListPaymentsRequest)
                return object;
            let message = new $root.api.ListPaymentsRequest();
            if (object.pageToken != null) {
                if (typeof object.pageToken !== "object")
                    throw TypeError(".api.ListPaymentsRequest.pageToken: object expected");
                message.pageToken = $root.types.PageToken.fromObject(object.pageToken);
            }
            return message;
        };

        /**
         * Creates a plain object from a ListPaymentsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ListPaymentsRequest
         * @static
         * @param {api.ListPaymentsRequest} message ListPaymentsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListPaymentsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.pageToken != null && message.hasOwnProperty("pageToken")) {
                object.pageToken = $root.types.PageToken.toObject(message.pageToken, options);
                if (options.oneofs)
                    object._pageToken = "pageToken";
            }
            return object;
        };

        /**
         * Converts this ListPaymentsRequest to JSON.
         * @function toJSON
         * @memberof api.ListPaymentsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListPaymentsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListPaymentsRequest
         * @function getTypeUrl
         * @memberof api.ListPaymentsRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListPaymentsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ListPaymentsRequest";
        };

        return ListPaymentsRequest;
    })();

    api.ListPaymentsResponse = (function() {

        /**
         * Properties of a ListPaymentsResponse.
         * @memberof api
         * @interface IListPaymentsResponse
         * @property {Array.<types.IPayment>|null} [payments] ListPaymentsResponse payments
         * @property {types.IPageToken|null} [nextPageToken] ListPaymentsResponse nextPageToken
         */

        /**
         * Constructs a new ListPaymentsResponse.
         * @memberof api
         * @classdesc Represents a ListPaymentsResponse.
         * @implements IListPaymentsResponse
         * @constructor
         * @param {api.IListPaymentsResponse=} [properties] Properties to set
         */
        function ListPaymentsResponse(properties) {
            this.payments = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListPaymentsResponse payments.
         * @member {Array.<types.IPayment>} payments
         * @memberof api.ListPaymentsResponse
         * @instance
         */
        ListPaymentsResponse.prototype.payments = $util.emptyArray;

        /**
         * ListPaymentsResponse nextPageToken.
         * @member {types.IPageToken|null|undefined} nextPageToken
         * @memberof api.ListPaymentsResponse
         * @instance
         */
        ListPaymentsResponse.prototype.nextPageToken = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * ListPaymentsResponse _nextPageToken.
         * @member {"nextPageToken"|undefined} _nextPageToken
         * @memberof api.ListPaymentsResponse
         * @instance
         */
        Object.defineProperty(ListPaymentsResponse.prototype, "_nextPageToken", {
            get: $util.oneOfGetter($oneOfFields = ["nextPageToken"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ListPaymentsResponse instance using the specified properties.
         * @function create
         * @memberof api.ListPaymentsResponse
         * @static
         * @param {api.IListPaymentsResponse=} [properties] Properties to set
         * @returns {api.ListPaymentsResponse} ListPaymentsResponse instance
         */
        ListPaymentsResponse.create = function create(properties) {
            return new ListPaymentsResponse(properties);
        };

        /**
         * Encodes the specified ListPaymentsResponse message. Does not implicitly {@link api.ListPaymentsResponse.verify|verify} messages.
         * @function encode
         * @memberof api.ListPaymentsResponse
         * @static
         * @param {api.IListPaymentsResponse} message ListPaymentsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListPaymentsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.payments != null && message.payments.length)
                for (let i = 0; i < message.payments.length; ++i)
                    $root.types.Payment.encode(message.payments[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.nextPageToken != null && Object.hasOwnProperty.call(message, "nextPageToken"))
                $root.types.PageToken.encode(message.nextPageToken, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListPaymentsResponse message, length delimited. Does not implicitly {@link api.ListPaymentsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ListPaymentsResponse
         * @static
         * @param {api.IListPaymentsResponse} message ListPaymentsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListPaymentsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListPaymentsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.ListPaymentsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ListPaymentsResponse} ListPaymentsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListPaymentsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ListPaymentsResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.payments && message.payments.length))
                            message.payments = [];
                        message.payments.push($root.types.Payment.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.nextPageToken = $root.types.PageToken.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListPaymentsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ListPaymentsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ListPaymentsResponse} ListPaymentsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListPaymentsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListPaymentsResponse message.
         * @function verify
         * @memberof api.ListPaymentsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListPaymentsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.payments != null && message.hasOwnProperty("payments")) {
                if (!Array.isArray(message.payments))
                    return "payments: array expected";
                for (let i = 0; i < message.payments.length; ++i) {
                    let error = $root.types.Payment.verify(message.payments[i]);
                    if (error)
                        return "payments." + error;
                }
            }
            if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken")) {
                properties._nextPageToken = 1;
                {
                    let error = $root.types.PageToken.verify(message.nextPageToken);
                    if (error)
                        return "nextPageToken." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListPaymentsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ListPaymentsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ListPaymentsResponse} ListPaymentsResponse
         */
        ListPaymentsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ListPaymentsResponse)
                return object;
            let message = new $root.api.ListPaymentsResponse();
            if (object.payments) {
                if (!Array.isArray(object.payments))
                    throw TypeError(".api.ListPaymentsResponse.payments: array expected");
                message.payments = [];
                for (let i = 0; i < object.payments.length; ++i) {
                    if (typeof object.payments[i] !== "object")
                        throw TypeError(".api.ListPaymentsResponse.payments: object expected");
                    message.payments[i] = $root.types.Payment.fromObject(object.payments[i]);
                }
            }
            if (object.nextPageToken != null) {
                if (typeof object.nextPageToken !== "object")
                    throw TypeError(".api.ListPaymentsResponse.nextPageToken: object expected");
                message.nextPageToken = $root.types.PageToken.fromObject(object.nextPageToken);
            }
            return message;
        };

        /**
         * Creates a plain object from a ListPaymentsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ListPaymentsResponse
         * @static
         * @param {api.ListPaymentsResponse} message ListPaymentsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListPaymentsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.payments = [];
            if (message.payments && message.payments.length) {
                object.payments = [];
                for (let j = 0; j < message.payments.length; ++j)
                    object.payments[j] = $root.types.Payment.toObject(message.payments[j], options);
            }
            if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken")) {
                object.nextPageToken = $root.types.PageToken.toObject(message.nextPageToken, options);
                if (options.oneofs)
                    object._nextPageToken = "nextPageToken";
            }
            return object;
        };

        /**
         * Converts this ListPaymentsResponse to JSON.
         * @function toJSON
         * @memberof api.ListPaymentsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListPaymentsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListPaymentsResponse
         * @function getTypeUrl
         * @memberof api.ListPaymentsResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListPaymentsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ListPaymentsResponse";
        };

        return ListPaymentsResponse;
    })();

    api.ListForwardedPaymentsRequest = (function() {

        /**
         * Properties of a ListForwardedPaymentsRequest.
         * @memberof api
         * @interface IListForwardedPaymentsRequest
         * @property {types.IPageToken|null} [pageToken] ListForwardedPaymentsRequest pageToken
         */

        /**
         * Constructs a new ListForwardedPaymentsRequest.
         * @memberof api
         * @classdesc Represents a ListForwardedPaymentsRequest.
         * @implements IListForwardedPaymentsRequest
         * @constructor
         * @param {api.IListForwardedPaymentsRequest=} [properties] Properties to set
         */
        function ListForwardedPaymentsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListForwardedPaymentsRequest pageToken.
         * @member {types.IPageToken|null|undefined} pageToken
         * @memberof api.ListForwardedPaymentsRequest
         * @instance
         */
        ListForwardedPaymentsRequest.prototype.pageToken = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * ListForwardedPaymentsRequest _pageToken.
         * @member {"pageToken"|undefined} _pageToken
         * @memberof api.ListForwardedPaymentsRequest
         * @instance
         */
        Object.defineProperty(ListForwardedPaymentsRequest.prototype, "_pageToken", {
            get: $util.oneOfGetter($oneOfFields = ["pageToken"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ListForwardedPaymentsRequest instance using the specified properties.
         * @function create
         * @memberof api.ListForwardedPaymentsRequest
         * @static
         * @param {api.IListForwardedPaymentsRequest=} [properties] Properties to set
         * @returns {api.ListForwardedPaymentsRequest} ListForwardedPaymentsRequest instance
         */
        ListForwardedPaymentsRequest.create = function create(properties) {
            return new ListForwardedPaymentsRequest(properties);
        };

        /**
         * Encodes the specified ListForwardedPaymentsRequest message. Does not implicitly {@link api.ListForwardedPaymentsRequest.verify|verify} messages.
         * @function encode
         * @memberof api.ListForwardedPaymentsRequest
         * @static
         * @param {api.IListForwardedPaymentsRequest} message ListForwardedPaymentsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListForwardedPaymentsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pageToken != null && Object.hasOwnProperty.call(message, "pageToken"))
                $root.types.PageToken.encode(message.pageToken, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListForwardedPaymentsRequest message, length delimited. Does not implicitly {@link api.ListForwardedPaymentsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ListForwardedPaymentsRequest
         * @static
         * @param {api.IListForwardedPaymentsRequest} message ListForwardedPaymentsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListForwardedPaymentsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListForwardedPaymentsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.ListForwardedPaymentsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ListForwardedPaymentsRequest} ListForwardedPaymentsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListForwardedPaymentsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ListForwardedPaymentsRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.pageToken = $root.types.PageToken.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListForwardedPaymentsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ListForwardedPaymentsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ListForwardedPaymentsRequest} ListForwardedPaymentsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListForwardedPaymentsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListForwardedPaymentsRequest message.
         * @function verify
         * @memberof api.ListForwardedPaymentsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListForwardedPaymentsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.pageToken != null && message.hasOwnProperty("pageToken")) {
                properties._pageToken = 1;
                {
                    let error = $root.types.PageToken.verify(message.pageToken);
                    if (error)
                        return "pageToken." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListForwardedPaymentsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ListForwardedPaymentsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ListForwardedPaymentsRequest} ListForwardedPaymentsRequest
         */
        ListForwardedPaymentsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ListForwardedPaymentsRequest)
                return object;
            let message = new $root.api.ListForwardedPaymentsRequest();
            if (object.pageToken != null) {
                if (typeof object.pageToken !== "object")
                    throw TypeError(".api.ListForwardedPaymentsRequest.pageToken: object expected");
                message.pageToken = $root.types.PageToken.fromObject(object.pageToken);
            }
            return message;
        };

        /**
         * Creates a plain object from a ListForwardedPaymentsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ListForwardedPaymentsRequest
         * @static
         * @param {api.ListForwardedPaymentsRequest} message ListForwardedPaymentsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListForwardedPaymentsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.pageToken != null && message.hasOwnProperty("pageToken")) {
                object.pageToken = $root.types.PageToken.toObject(message.pageToken, options);
                if (options.oneofs)
                    object._pageToken = "pageToken";
            }
            return object;
        };

        /**
         * Converts this ListForwardedPaymentsRequest to JSON.
         * @function toJSON
         * @memberof api.ListForwardedPaymentsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListForwardedPaymentsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListForwardedPaymentsRequest
         * @function getTypeUrl
         * @memberof api.ListForwardedPaymentsRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListForwardedPaymentsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ListForwardedPaymentsRequest";
        };

        return ListForwardedPaymentsRequest;
    })();

    api.ListForwardedPaymentsResponse = (function() {

        /**
         * Properties of a ListForwardedPaymentsResponse.
         * @memberof api
         * @interface IListForwardedPaymentsResponse
         * @property {Array.<types.IForwardedPayment>|null} [forwardedPayments] ListForwardedPaymentsResponse forwardedPayments
         * @property {types.IPageToken|null} [nextPageToken] ListForwardedPaymentsResponse nextPageToken
         */

        /**
         * Constructs a new ListForwardedPaymentsResponse.
         * @memberof api
         * @classdesc Represents a ListForwardedPaymentsResponse.
         * @implements IListForwardedPaymentsResponse
         * @constructor
         * @param {api.IListForwardedPaymentsResponse=} [properties] Properties to set
         */
        function ListForwardedPaymentsResponse(properties) {
            this.forwardedPayments = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListForwardedPaymentsResponse forwardedPayments.
         * @member {Array.<types.IForwardedPayment>} forwardedPayments
         * @memberof api.ListForwardedPaymentsResponse
         * @instance
         */
        ListForwardedPaymentsResponse.prototype.forwardedPayments = $util.emptyArray;

        /**
         * ListForwardedPaymentsResponse nextPageToken.
         * @member {types.IPageToken|null|undefined} nextPageToken
         * @memberof api.ListForwardedPaymentsResponse
         * @instance
         */
        ListForwardedPaymentsResponse.prototype.nextPageToken = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * ListForwardedPaymentsResponse _nextPageToken.
         * @member {"nextPageToken"|undefined} _nextPageToken
         * @memberof api.ListForwardedPaymentsResponse
         * @instance
         */
        Object.defineProperty(ListForwardedPaymentsResponse.prototype, "_nextPageToken", {
            get: $util.oneOfGetter($oneOfFields = ["nextPageToken"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ListForwardedPaymentsResponse instance using the specified properties.
         * @function create
         * @memberof api.ListForwardedPaymentsResponse
         * @static
         * @param {api.IListForwardedPaymentsResponse=} [properties] Properties to set
         * @returns {api.ListForwardedPaymentsResponse} ListForwardedPaymentsResponse instance
         */
        ListForwardedPaymentsResponse.create = function create(properties) {
            return new ListForwardedPaymentsResponse(properties);
        };

        /**
         * Encodes the specified ListForwardedPaymentsResponse message. Does not implicitly {@link api.ListForwardedPaymentsResponse.verify|verify} messages.
         * @function encode
         * @memberof api.ListForwardedPaymentsResponse
         * @static
         * @param {api.IListForwardedPaymentsResponse} message ListForwardedPaymentsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListForwardedPaymentsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.forwardedPayments != null && message.forwardedPayments.length)
                for (let i = 0; i < message.forwardedPayments.length; ++i)
                    $root.types.ForwardedPayment.encode(message.forwardedPayments[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.nextPageToken != null && Object.hasOwnProperty.call(message, "nextPageToken"))
                $root.types.PageToken.encode(message.nextPageToken, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListForwardedPaymentsResponse message, length delimited. Does not implicitly {@link api.ListForwardedPaymentsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.ListForwardedPaymentsResponse
         * @static
         * @param {api.IListForwardedPaymentsResponse} message ListForwardedPaymentsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListForwardedPaymentsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListForwardedPaymentsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.ListForwardedPaymentsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.ListForwardedPaymentsResponse} ListForwardedPaymentsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListForwardedPaymentsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.ListForwardedPaymentsResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.forwardedPayments && message.forwardedPayments.length))
                            message.forwardedPayments = [];
                        message.forwardedPayments.push($root.types.ForwardedPayment.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.nextPageToken = $root.types.PageToken.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListForwardedPaymentsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.ListForwardedPaymentsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.ListForwardedPaymentsResponse} ListForwardedPaymentsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListForwardedPaymentsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListForwardedPaymentsResponse message.
         * @function verify
         * @memberof api.ListForwardedPaymentsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListForwardedPaymentsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.forwardedPayments != null && message.hasOwnProperty("forwardedPayments")) {
                if (!Array.isArray(message.forwardedPayments))
                    return "forwardedPayments: array expected";
                for (let i = 0; i < message.forwardedPayments.length; ++i) {
                    let error = $root.types.ForwardedPayment.verify(message.forwardedPayments[i]);
                    if (error)
                        return "forwardedPayments." + error;
                }
            }
            if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken")) {
                properties._nextPageToken = 1;
                {
                    let error = $root.types.PageToken.verify(message.nextPageToken);
                    if (error)
                        return "nextPageToken." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListForwardedPaymentsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.ListForwardedPaymentsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.ListForwardedPaymentsResponse} ListForwardedPaymentsResponse
         */
        ListForwardedPaymentsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.api.ListForwardedPaymentsResponse)
                return object;
            let message = new $root.api.ListForwardedPaymentsResponse();
            if (object.forwardedPayments) {
                if (!Array.isArray(object.forwardedPayments))
                    throw TypeError(".api.ListForwardedPaymentsResponse.forwardedPayments: array expected");
                message.forwardedPayments = [];
                for (let i = 0; i < object.forwardedPayments.length; ++i) {
                    if (typeof object.forwardedPayments[i] !== "object")
                        throw TypeError(".api.ListForwardedPaymentsResponse.forwardedPayments: object expected");
                    message.forwardedPayments[i] = $root.types.ForwardedPayment.fromObject(object.forwardedPayments[i]);
                }
            }
            if (object.nextPageToken != null) {
                if (typeof object.nextPageToken !== "object")
                    throw TypeError(".api.ListForwardedPaymentsResponse.nextPageToken: object expected");
                message.nextPageToken = $root.types.PageToken.fromObject(object.nextPageToken);
            }
            return message;
        };

        /**
         * Creates a plain object from a ListForwardedPaymentsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.ListForwardedPaymentsResponse
         * @static
         * @param {api.ListForwardedPaymentsResponse} message ListForwardedPaymentsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListForwardedPaymentsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.forwardedPayments = [];
            if (message.forwardedPayments && message.forwardedPayments.length) {
                object.forwardedPayments = [];
                for (let j = 0; j < message.forwardedPayments.length; ++j)
                    object.forwardedPayments[j] = $root.types.ForwardedPayment.toObject(message.forwardedPayments[j], options);
            }
            if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken")) {
                object.nextPageToken = $root.types.PageToken.toObject(message.nextPageToken, options);
                if (options.oneofs)
                    object._nextPageToken = "nextPageToken";
            }
            return object;
        };

        /**
         * Converts this ListForwardedPaymentsResponse to JSON.
         * @function toJSON
         * @memberof api.ListForwardedPaymentsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListForwardedPaymentsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListForwardedPaymentsResponse
         * @function getTypeUrl
         * @memberof api.ListForwardedPaymentsResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListForwardedPaymentsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.ListForwardedPaymentsResponse";
        };

        return ListForwardedPaymentsResponse;
    })();

    api.GetBalancesRequest = (function() {

        /**
         * Properties of a GetBalancesRequest.
         * @memberof api
         * @interface IGetBalancesRequest
         */

        /**
         * Constructs a new GetBalancesRequest.
         * @memberof api
         * @classdesc Represents a GetBalancesRequest.
         * @implements IGetBalancesRequest
         * @constructor
         * @param {api.IGetBalancesRequest=} [properties] Properties to set
         */
        function GetBalancesRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetBalancesRequest instance using the specified properties.
         * @function create
         * @memberof api.GetBalancesRequest
         * @static
         * @param {api.IGetBalancesRequest=} [properties] Properties to set
         * @returns {api.GetBalancesRequest} GetBalancesRequest instance
         */
        GetBalancesRequest.create = function create(properties) {
            return new GetBalancesRequest(properties);
        };

        /**
         * Encodes the specified GetBalancesRequest message. Does not implicitly {@link api.GetBalancesRequest.verify|verify} messages.
         * @function encode
         * @memberof api.GetBalancesRequest
         * @static
         * @param {api.IGetBalancesRequest} message GetBalancesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBalancesRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetBalancesRequest message, length delimited. Does not implicitly {@link api.GetBalancesRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.GetBalancesRequest
         * @static
         * @param {api.IGetBalancesRequest} message GetBalancesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBalancesRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetBalancesRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.GetBalancesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.GetBalancesRequest} GetBalancesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBalancesRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.GetBalancesRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetBalancesRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.GetBalancesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.GetBalancesRequest} GetBalancesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBalancesRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetBalancesRequest message.
         * @function verify
         * @memberof api.GetBalancesRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetBalancesRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetBalancesRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.GetBalancesRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.GetBalancesRequest} GetBalancesRequest
         */
        GetBalancesRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.api.GetBalancesRequest)
                return object;
            return new $root.api.GetBalancesRequest();
        };

        /**
         * Creates a plain object from a GetBalancesRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.GetBalancesRequest
         * @static
         * @param {api.GetBalancesRequest} message GetBalancesRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetBalancesRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetBalancesRequest to JSON.
         * @function toJSON
         * @memberof api.GetBalancesRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetBalancesRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetBalancesRequest
         * @function getTypeUrl
         * @memberof api.GetBalancesRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetBalancesRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.GetBalancesRequest";
        };

        return GetBalancesRequest;
    })();

    api.GetBalancesResponse = (function() {

        /**
         * Properties of a GetBalancesResponse.
         * @memberof api
         * @interface IGetBalancesResponse
         * @property {number|Long|null} [totalOnchainBalanceSats] GetBalancesResponse totalOnchainBalanceSats
         * @property {number|Long|null} [spendableOnchainBalanceSats] GetBalancesResponse spendableOnchainBalanceSats
         * @property {number|Long|null} [totalAnchorChannelsReserveSats] GetBalancesResponse totalAnchorChannelsReserveSats
         * @property {number|Long|null} [totalLightningBalanceSats] GetBalancesResponse totalLightningBalanceSats
         * @property {Array.<types.ILightningBalance>|null} [lightningBalances] GetBalancesResponse lightningBalances
         * @property {Array.<types.IPendingSweepBalance>|null} [pendingBalancesFromChannelClosures] GetBalancesResponse pendingBalancesFromChannelClosures
         */

        /**
         * Constructs a new GetBalancesResponse.
         * @memberof api
         * @classdesc Represents a GetBalancesResponse.
         * @implements IGetBalancesResponse
         * @constructor
         * @param {api.IGetBalancesResponse=} [properties] Properties to set
         */
        function GetBalancesResponse(properties) {
            this.lightningBalances = [];
            this.pendingBalancesFromChannelClosures = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetBalancesResponse totalOnchainBalanceSats.
         * @member {number|Long} totalOnchainBalanceSats
         * @memberof api.GetBalancesResponse
         * @instance
         */
        GetBalancesResponse.prototype.totalOnchainBalanceSats = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * GetBalancesResponse spendableOnchainBalanceSats.
         * @member {number|Long} spendableOnchainBalanceSats
         * @memberof api.GetBalancesResponse
         * @instance
         */
        GetBalancesResponse.prototype.spendableOnchainBalanceSats = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * GetBalancesResponse totalAnchorChannelsReserveSats.
         * @member {number|Long} totalAnchorChannelsReserveSats
         * @memberof api.GetBalancesResponse
         * @instance
         */
        GetBalancesResponse.prototype.totalAnchorChannelsReserveSats = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * GetBalancesResponse totalLightningBalanceSats.
         * @member {number|Long} totalLightningBalanceSats
         * @memberof api.GetBalancesResponse
         * @instance
         */
        GetBalancesResponse.prototype.totalLightningBalanceSats = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * GetBalancesResponse lightningBalances.
         * @member {Array.<types.ILightningBalance>} lightningBalances
         * @memberof api.GetBalancesResponse
         * @instance
         */
        GetBalancesResponse.prototype.lightningBalances = $util.emptyArray;

        /**
         * GetBalancesResponse pendingBalancesFromChannelClosures.
         * @member {Array.<types.IPendingSweepBalance>} pendingBalancesFromChannelClosures
         * @memberof api.GetBalancesResponse
         * @instance
         */
        GetBalancesResponse.prototype.pendingBalancesFromChannelClosures = $util.emptyArray;

        /**
         * Creates a new GetBalancesResponse instance using the specified properties.
         * @function create
         * @memberof api.GetBalancesResponse
         * @static
         * @param {api.IGetBalancesResponse=} [properties] Properties to set
         * @returns {api.GetBalancesResponse} GetBalancesResponse instance
         */
        GetBalancesResponse.create = function create(properties) {
            return new GetBalancesResponse(properties);
        };

        /**
         * Encodes the specified GetBalancesResponse message. Does not implicitly {@link api.GetBalancesResponse.verify|verify} messages.
         * @function encode
         * @memberof api.GetBalancesResponse
         * @static
         * @param {api.IGetBalancesResponse} message GetBalancesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBalancesResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.totalOnchainBalanceSats != null && Object.hasOwnProperty.call(message, "totalOnchainBalanceSats"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.totalOnchainBalanceSats);
            if (message.spendableOnchainBalanceSats != null && Object.hasOwnProperty.call(message, "spendableOnchainBalanceSats"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.spendableOnchainBalanceSats);
            if (message.totalAnchorChannelsReserveSats != null && Object.hasOwnProperty.call(message, "totalAnchorChannelsReserveSats"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.totalAnchorChannelsReserveSats);
            if (message.totalLightningBalanceSats != null && Object.hasOwnProperty.call(message, "totalLightningBalanceSats"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.totalLightningBalanceSats);
            if (message.lightningBalances != null && message.lightningBalances.length)
                for (let i = 0; i < message.lightningBalances.length; ++i)
                    $root.types.LightningBalance.encode(message.lightningBalances[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.pendingBalancesFromChannelClosures != null && message.pendingBalancesFromChannelClosures.length)
                for (let i = 0; i < message.pendingBalancesFromChannelClosures.length; ++i)
                    $root.types.PendingSweepBalance.encode(message.pendingBalancesFromChannelClosures[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetBalancesResponse message, length delimited. Does not implicitly {@link api.GetBalancesResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.GetBalancesResponse
         * @static
         * @param {api.IGetBalancesResponse} message GetBalancesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBalancesResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetBalancesResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.GetBalancesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.GetBalancesResponse} GetBalancesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBalancesResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.GetBalancesResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.totalOnchainBalanceSats = reader.uint64();
                        break;
                    }
                case 2: {
                        message.spendableOnchainBalanceSats = reader.uint64();
                        break;
                    }
                case 3: {
                        message.totalAnchorChannelsReserveSats = reader.uint64();
                        break;
                    }
                case 4: {
                        message.totalLightningBalanceSats = reader.uint64();
                        break;
                    }
                case 5: {
                        if (!(message.lightningBalances && message.lightningBalances.length))
                            message.lightningBalances = [];
                        message.lightningBalances.push($root.types.LightningBalance.decode(reader, reader.uint32()));
                        break;
                    }
                case 6: {
                        if (!(message.pendingBalancesFromChannelClosures && message.pendingBalancesFromChannelClosures.length))
                            message.pendingBalancesFromChannelClosures = [];
                        message.pendingBalancesFromChannelClosures.push($root.types.PendingSweepBalance.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetBalancesResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.GetBalancesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.GetBalancesResponse} GetBalancesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBalancesResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetBalancesResponse message.
         * @function verify
         * @memberof api.GetBalancesResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetBalancesResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.totalOnchainBalanceSats != null && message.hasOwnProperty("totalOnchainBalanceSats"))
                if (!$util.isInteger(message.totalOnchainBalanceSats) && !(message.totalOnchainBalanceSats && $util.isInteger(message.totalOnchainBalanceSats.low) && $util.isInteger(message.totalOnchainBalanceSats.high)))
                    return "totalOnchainBalanceSats: integer|Long expected";
            if (message.spendableOnchainBalanceSats != null && message.hasOwnProperty("spendableOnchainBalanceSats"))
                if (!$util.isInteger(message.spendableOnchainBalanceSats) && !(message.spendableOnchainBalanceSats && $util.isInteger(message.spendableOnchainBalanceSats.low) && $util.isInteger(message.spendableOnchainBalanceSats.high)))
                    return "spendableOnchainBalanceSats: integer|Long expected";
            if (message.totalAnchorChannelsReserveSats != null && message.hasOwnProperty("totalAnchorChannelsReserveSats"))
                if (!$util.isInteger(message.totalAnchorChannelsReserveSats) && !(message.totalAnchorChannelsReserveSats && $util.isInteger(message.totalAnchorChannelsReserveSats.low) && $util.isInteger(message.totalAnchorChannelsReserveSats.high)))
                    return "totalAnchorChannelsReserveSats: integer|Long expected";
            if (message.totalLightningBalanceSats != null && message.hasOwnProperty("totalLightningBalanceSats"))
                if (!$util.isInteger(message.totalLightningBalanceSats) && !(message.totalLightningBalanceSats && $util.isInteger(message.totalLightningBalanceSats.low) && $util.isInteger(message.totalLightningBalanceSats.high)))
                    return "totalLightningBalanceSats: integer|Long expected";
            if (message.lightningBalances != null && message.hasOwnProperty("lightningBalances")) {
                if (!Array.isArray(message.lightningBalances))
                    return "lightningBalances: array expected";
                for (let i = 0; i < message.lightningBalances.length; ++i) {
                    let error = $root.types.LightningBalance.verify(message.lightningBalances[i]);
                    if (error)
                        return "lightningBalances." + error;
                }
            }
            if (message.pendingBalancesFromChannelClosures != null && message.hasOwnProperty("pendingBalancesFromChannelClosures")) {
                if (!Array.isArray(message.pendingBalancesFromChannelClosures))
                    return "pendingBalancesFromChannelClosures: array expected";
                for (let i = 0; i < message.pendingBalancesFromChannelClosures.length; ++i) {
                    let error = $root.types.PendingSweepBalance.verify(message.pendingBalancesFromChannelClosures[i]);
                    if (error)
                        return "pendingBalancesFromChannelClosures." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetBalancesResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.GetBalancesResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.GetBalancesResponse} GetBalancesResponse
         */
        GetBalancesResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.api.GetBalancesResponse)
                return object;
            let message = new $root.api.GetBalancesResponse();
            if (object.totalOnchainBalanceSats != null)
                if ($util.Long)
                    (message.totalOnchainBalanceSats = $util.Long.fromValue(object.totalOnchainBalanceSats)).unsigned = true;
                else if (typeof object.totalOnchainBalanceSats === "string")
                    message.totalOnchainBalanceSats = parseInt(object.totalOnchainBalanceSats, 10);
                else if (typeof object.totalOnchainBalanceSats === "number")
                    message.totalOnchainBalanceSats = object.totalOnchainBalanceSats;
                else if (typeof object.totalOnchainBalanceSats === "object")
                    message.totalOnchainBalanceSats = new $util.LongBits(object.totalOnchainBalanceSats.low >>> 0, object.totalOnchainBalanceSats.high >>> 0).toNumber(true);
            if (object.spendableOnchainBalanceSats != null)
                if ($util.Long)
                    (message.spendableOnchainBalanceSats = $util.Long.fromValue(object.spendableOnchainBalanceSats)).unsigned = true;
                else if (typeof object.spendableOnchainBalanceSats === "string")
                    message.spendableOnchainBalanceSats = parseInt(object.spendableOnchainBalanceSats, 10);
                else if (typeof object.spendableOnchainBalanceSats === "number")
                    message.spendableOnchainBalanceSats = object.spendableOnchainBalanceSats;
                else if (typeof object.spendableOnchainBalanceSats === "object")
                    message.spendableOnchainBalanceSats = new $util.LongBits(object.spendableOnchainBalanceSats.low >>> 0, object.spendableOnchainBalanceSats.high >>> 0).toNumber(true);
            if (object.totalAnchorChannelsReserveSats != null)
                if ($util.Long)
                    (message.totalAnchorChannelsReserveSats = $util.Long.fromValue(object.totalAnchorChannelsReserveSats)).unsigned = true;
                else if (typeof object.totalAnchorChannelsReserveSats === "string")
                    message.totalAnchorChannelsReserveSats = parseInt(object.totalAnchorChannelsReserveSats, 10);
                else if (typeof object.totalAnchorChannelsReserveSats === "number")
                    message.totalAnchorChannelsReserveSats = object.totalAnchorChannelsReserveSats;
                else if (typeof object.totalAnchorChannelsReserveSats === "object")
                    message.totalAnchorChannelsReserveSats = new $util.LongBits(object.totalAnchorChannelsReserveSats.low >>> 0, object.totalAnchorChannelsReserveSats.high >>> 0).toNumber(true);
            if (object.totalLightningBalanceSats != null)
                if ($util.Long)
                    (message.totalLightningBalanceSats = $util.Long.fromValue(object.totalLightningBalanceSats)).unsigned = true;
                else if (typeof object.totalLightningBalanceSats === "string")
                    message.totalLightningBalanceSats = parseInt(object.totalLightningBalanceSats, 10);
                else if (typeof object.totalLightningBalanceSats === "number")
                    message.totalLightningBalanceSats = object.totalLightningBalanceSats;
                else if (typeof object.totalLightningBalanceSats === "object")
                    message.totalLightningBalanceSats = new $util.LongBits(object.totalLightningBalanceSats.low >>> 0, object.totalLightningBalanceSats.high >>> 0).toNumber(true);
            if (object.lightningBalances) {
                if (!Array.isArray(object.lightningBalances))
                    throw TypeError(".api.GetBalancesResponse.lightningBalances: array expected");
                message.lightningBalances = [];
                for (let i = 0; i < object.lightningBalances.length; ++i) {
                    if (typeof object.lightningBalances[i] !== "object")
                        throw TypeError(".api.GetBalancesResponse.lightningBalances: object expected");
                    message.lightningBalances[i] = $root.types.LightningBalance.fromObject(object.lightningBalances[i]);
                }
            }
            if (object.pendingBalancesFromChannelClosures) {
                if (!Array.isArray(object.pendingBalancesFromChannelClosures))
                    throw TypeError(".api.GetBalancesResponse.pendingBalancesFromChannelClosures: array expected");
                message.pendingBalancesFromChannelClosures = [];
                for (let i = 0; i < object.pendingBalancesFromChannelClosures.length; ++i) {
                    if (typeof object.pendingBalancesFromChannelClosures[i] !== "object")
                        throw TypeError(".api.GetBalancesResponse.pendingBalancesFromChannelClosures: object expected");
                    message.pendingBalancesFromChannelClosures[i] = $root.types.PendingSweepBalance.fromObject(object.pendingBalancesFromChannelClosures[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetBalancesResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.GetBalancesResponse
         * @static
         * @param {api.GetBalancesResponse} message GetBalancesResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetBalancesResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.lightningBalances = [];
                object.pendingBalancesFromChannelClosures = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.totalOnchainBalanceSats = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalOnchainBalanceSats = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.spendableOnchainBalanceSats = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.spendableOnchainBalanceSats = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.totalAnchorChannelsReserveSats = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalAnchorChannelsReserveSats = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.totalLightningBalanceSats = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalLightningBalanceSats = options.longs === String ? "0" : 0;
            }
            if (message.totalOnchainBalanceSats != null && message.hasOwnProperty("totalOnchainBalanceSats"))
                if (typeof message.totalOnchainBalanceSats === "number")
                    object.totalOnchainBalanceSats = options.longs === String ? String(message.totalOnchainBalanceSats) : message.totalOnchainBalanceSats;
                else
                    object.totalOnchainBalanceSats = options.longs === String ? $util.Long.prototype.toString.call(message.totalOnchainBalanceSats) : options.longs === Number ? new $util.LongBits(message.totalOnchainBalanceSats.low >>> 0, message.totalOnchainBalanceSats.high >>> 0).toNumber(true) : message.totalOnchainBalanceSats;
            if (message.spendableOnchainBalanceSats != null && message.hasOwnProperty("spendableOnchainBalanceSats"))
                if (typeof message.spendableOnchainBalanceSats === "number")
                    object.spendableOnchainBalanceSats = options.longs === String ? String(message.spendableOnchainBalanceSats) : message.spendableOnchainBalanceSats;
                else
                    object.spendableOnchainBalanceSats = options.longs === String ? $util.Long.prototype.toString.call(message.spendableOnchainBalanceSats) : options.longs === Number ? new $util.LongBits(message.spendableOnchainBalanceSats.low >>> 0, message.spendableOnchainBalanceSats.high >>> 0).toNumber(true) : message.spendableOnchainBalanceSats;
            if (message.totalAnchorChannelsReserveSats != null && message.hasOwnProperty("totalAnchorChannelsReserveSats"))
                if (typeof message.totalAnchorChannelsReserveSats === "number")
                    object.totalAnchorChannelsReserveSats = options.longs === String ? String(message.totalAnchorChannelsReserveSats) : message.totalAnchorChannelsReserveSats;
                else
                    object.totalAnchorChannelsReserveSats = options.longs === String ? $util.Long.prototype.toString.call(message.totalAnchorChannelsReserveSats) : options.longs === Number ? new $util.LongBits(message.totalAnchorChannelsReserveSats.low >>> 0, message.totalAnchorChannelsReserveSats.high >>> 0).toNumber(true) : message.totalAnchorChannelsReserveSats;
            if (message.totalLightningBalanceSats != null && message.hasOwnProperty("totalLightningBalanceSats"))
                if (typeof message.totalLightningBalanceSats === "number")
                    object.totalLightningBalanceSats = options.longs === String ? String(message.totalLightningBalanceSats) : message.totalLightningBalanceSats;
                else
                    object.totalLightningBalanceSats = options.longs === String ? $util.Long.prototype.toString.call(message.totalLightningBalanceSats) : options.longs === Number ? new $util.LongBits(message.totalLightningBalanceSats.low >>> 0, message.totalLightningBalanceSats.high >>> 0).toNumber(true) : message.totalLightningBalanceSats;
            if (message.lightningBalances && message.lightningBalances.length) {
                object.lightningBalances = [];
                for (let j = 0; j < message.lightningBalances.length; ++j)
                    object.lightningBalances[j] = $root.types.LightningBalance.toObject(message.lightningBalances[j], options);
            }
            if (message.pendingBalancesFromChannelClosures && message.pendingBalancesFromChannelClosures.length) {
                object.pendingBalancesFromChannelClosures = [];
                for (let j = 0; j < message.pendingBalancesFromChannelClosures.length; ++j)
                    object.pendingBalancesFromChannelClosures[j] = $root.types.PendingSweepBalance.toObject(message.pendingBalancesFromChannelClosures[j], options);
            }
            return object;
        };

        /**
         * Converts this GetBalancesResponse to JSON.
         * @function toJSON
         * @memberof api.GetBalancesResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetBalancesResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetBalancesResponse
         * @function getTypeUrl
         * @memberof api.GetBalancesResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetBalancesResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/api.GetBalancesResponse";
        };

        return GetBalancesResponse;
    })();

    return api;
})();

export const types = $root.types = (() => {

    /**
     * Namespace types.
     * @exports types
     * @namespace
     */
    const types = {};

    types.Payment = (function() {

        /**
         * Properties of a Payment.
         * @memberof types
         * @interface IPayment
         * @property {string|null} [id] Payment id
         * @property {types.IPaymentKind|null} [kind] Payment kind
         * @property {number|Long|null} [amountMsat] Payment amountMsat
         * @property {number|Long|null} [feePaidMsat] Payment feePaidMsat
         * @property {types.PaymentDirection|null} [direction] Payment direction
         * @property {types.PaymentStatus|null} [status] Payment status
         * @property {number|Long|null} [latestUpdateTimestamp] Payment latestUpdateTimestamp
         */

        /**
         * Constructs a new Payment.
         * @memberof types
         * @classdesc Represents a Payment.
         * @implements IPayment
         * @constructor
         * @param {types.IPayment=} [properties] Properties to set
         */
        function Payment(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Payment id.
         * @member {string} id
         * @memberof types.Payment
         * @instance
         */
        Payment.prototype.id = "";

        /**
         * Payment kind.
         * @member {types.IPaymentKind|null|undefined} kind
         * @memberof types.Payment
         * @instance
         */
        Payment.prototype.kind = null;

        /**
         * Payment amountMsat.
         * @member {number|Long|null|undefined} amountMsat
         * @memberof types.Payment
         * @instance
         */
        Payment.prototype.amountMsat = null;

        /**
         * Payment feePaidMsat.
         * @member {number|Long|null|undefined} feePaidMsat
         * @memberof types.Payment
         * @instance
         */
        Payment.prototype.feePaidMsat = null;

        /**
         * Payment direction.
         * @member {types.PaymentDirection} direction
         * @memberof types.Payment
         * @instance
         */
        Payment.prototype.direction = 0;

        /**
         * Payment status.
         * @member {types.PaymentStatus} status
         * @memberof types.Payment
         * @instance
         */
        Payment.prototype.status = 0;

        /**
         * Payment latestUpdateTimestamp.
         * @member {number|Long} latestUpdateTimestamp
         * @memberof types.Payment
         * @instance
         */
        Payment.prototype.latestUpdateTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Payment _amountMsat.
         * @member {"amountMsat"|undefined} _amountMsat
         * @memberof types.Payment
         * @instance
         */
        Object.defineProperty(Payment.prototype, "_amountMsat", {
            get: $util.oneOfGetter($oneOfFields = ["amountMsat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Payment _feePaidMsat.
         * @member {"feePaidMsat"|undefined} _feePaidMsat
         * @memberof types.Payment
         * @instance
         */
        Object.defineProperty(Payment.prototype, "_feePaidMsat", {
            get: $util.oneOfGetter($oneOfFields = ["feePaidMsat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Payment instance using the specified properties.
         * @function create
         * @memberof types.Payment
         * @static
         * @param {types.IPayment=} [properties] Properties to set
         * @returns {types.Payment} Payment instance
         */
        Payment.create = function create(properties) {
            return new Payment(properties);
        };

        /**
         * Encodes the specified Payment message. Does not implicitly {@link types.Payment.verify|verify} messages.
         * @function encode
         * @memberof types.Payment
         * @static
         * @param {types.IPayment} message Payment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Payment.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                $root.types.PaymentKind.encode(message.kind, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.amountMsat != null && Object.hasOwnProperty.call(message, "amountMsat"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.amountMsat);
            if (message.direction != null && Object.hasOwnProperty.call(message, "direction"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.direction);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.status);
            if (message.latestUpdateTimestamp != null && Object.hasOwnProperty.call(message, "latestUpdateTimestamp"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.latestUpdateTimestamp);
            if (message.feePaidMsat != null && Object.hasOwnProperty.call(message, "feePaidMsat"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.feePaidMsat);
            return writer;
        };

        /**
         * Encodes the specified Payment message, length delimited. Does not implicitly {@link types.Payment.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.Payment
         * @static
         * @param {types.IPayment} message Payment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Payment.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Payment message from the specified reader or buffer.
         * @function decode
         * @memberof types.Payment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.Payment} Payment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Payment.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.Payment();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.kind = $root.types.PaymentKind.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.amountMsat = reader.uint64();
                        break;
                    }
                case 7: {
                        message.feePaidMsat = reader.uint64();
                        break;
                    }
                case 4: {
                        message.direction = reader.int32();
                        break;
                    }
                case 5: {
                        message.status = reader.int32();
                        break;
                    }
                case 6: {
                        message.latestUpdateTimestamp = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Payment message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.Payment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.Payment} Payment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Payment.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Payment message.
         * @function verify
         * @memberof types.Payment
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Payment.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.kind != null && message.hasOwnProperty("kind")) {
                let error = $root.types.PaymentKind.verify(message.kind);
                if (error)
                    return "kind." + error;
            }
            if (message.amountMsat != null && message.hasOwnProperty("amountMsat")) {
                properties._amountMsat = 1;
                if (!$util.isInteger(message.amountMsat) && !(message.amountMsat && $util.isInteger(message.amountMsat.low) && $util.isInteger(message.amountMsat.high)))
                    return "amountMsat: integer|Long expected";
            }
            if (message.feePaidMsat != null && message.hasOwnProperty("feePaidMsat")) {
                properties._feePaidMsat = 1;
                if (!$util.isInteger(message.feePaidMsat) && !(message.feePaidMsat && $util.isInteger(message.feePaidMsat.low) && $util.isInteger(message.feePaidMsat.high)))
                    return "feePaidMsat: integer|Long expected";
            }
            if (message.direction != null && message.hasOwnProperty("direction"))
                switch (message.direction) {
                default:
                    return "direction: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.latestUpdateTimestamp != null && message.hasOwnProperty("latestUpdateTimestamp"))
                if (!$util.isInteger(message.latestUpdateTimestamp) && !(message.latestUpdateTimestamp && $util.isInteger(message.latestUpdateTimestamp.low) && $util.isInteger(message.latestUpdateTimestamp.high)))
                    return "latestUpdateTimestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a Payment message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.Payment
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.Payment} Payment
         */
        Payment.fromObject = function fromObject(object) {
            if (object instanceof $root.types.Payment)
                return object;
            let message = new $root.types.Payment();
            if (object.id != null)
                message.id = String(object.id);
            if (object.kind != null) {
                if (typeof object.kind !== "object")
                    throw TypeError(".types.Payment.kind: object expected");
                message.kind = $root.types.PaymentKind.fromObject(object.kind);
            }
            if (object.amountMsat != null)
                if ($util.Long)
                    (message.amountMsat = $util.Long.fromValue(object.amountMsat)).unsigned = true;
                else if (typeof object.amountMsat === "string")
                    message.amountMsat = parseInt(object.amountMsat, 10);
                else if (typeof object.amountMsat === "number")
                    message.amountMsat = object.amountMsat;
                else if (typeof object.amountMsat === "object")
                    message.amountMsat = new $util.LongBits(object.amountMsat.low >>> 0, object.amountMsat.high >>> 0).toNumber(true);
            if (object.feePaidMsat != null)
                if ($util.Long)
                    (message.feePaidMsat = $util.Long.fromValue(object.feePaidMsat)).unsigned = true;
                else if (typeof object.feePaidMsat === "string")
                    message.feePaidMsat = parseInt(object.feePaidMsat, 10);
                else if (typeof object.feePaidMsat === "number")
                    message.feePaidMsat = object.feePaidMsat;
                else if (typeof object.feePaidMsat === "object")
                    message.feePaidMsat = new $util.LongBits(object.feePaidMsat.low >>> 0, object.feePaidMsat.high >>> 0).toNumber(true);
            switch (object.direction) {
            default:
                if (typeof object.direction === "number") {
                    message.direction = object.direction;
                    break;
                }
                break;
            case "INBOUND":
            case 0:
                message.direction = 0;
                break;
            case "OUTBOUND":
            case 1:
                message.direction = 1;
                break;
            }
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "PENDING":
            case 0:
                message.status = 0;
                break;
            case "SUCCEEDED":
            case 1:
                message.status = 1;
                break;
            case "FAILED":
            case 2:
                message.status = 2;
                break;
            }
            if (object.latestUpdateTimestamp != null)
                if ($util.Long)
                    (message.latestUpdateTimestamp = $util.Long.fromValue(object.latestUpdateTimestamp)).unsigned = true;
                else if (typeof object.latestUpdateTimestamp === "string")
                    message.latestUpdateTimestamp = parseInt(object.latestUpdateTimestamp, 10);
                else if (typeof object.latestUpdateTimestamp === "number")
                    message.latestUpdateTimestamp = object.latestUpdateTimestamp;
                else if (typeof object.latestUpdateTimestamp === "object")
                    message.latestUpdateTimestamp = new $util.LongBits(object.latestUpdateTimestamp.low >>> 0, object.latestUpdateTimestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Payment message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.Payment
         * @static
         * @param {types.Payment} message Payment
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Payment.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.kind = null;
                object.direction = options.enums === String ? "INBOUND" : 0;
                object.status = options.enums === String ? "PENDING" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.latestUpdateTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.latestUpdateTimestamp = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.kind != null && message.hasOwnProperty("kind"))
                object.kind = $root.types.PaymentKind.toObject(message.kind, options);
            if (message.amountMsat != null && message.hasOwnProperty("amountMsat")) {
                if (typeof message.amountMsat === "number")
                    object.amountMsat = options.longs === String ? String(message.amountMsat) : message.amountMsat;
                else
                    object.amountMsat = options.longs === String ? $util.Long.prototype.toString.call(message.amountMsat) : options.longs === Number ? new $util.LongBits(message.amountMsat.low >>> 0, message.amountMsat.high >>> 0).toNumber(true) : message.amountMsat;
                if (options.oneofs)
                    object._amountMsat = "amountMsat";
            }
            if (message.direction != null && message.hasOwnProperty("direction"))
                object.direction = options.enums === String ? $root.types.PaymentDirection[message.direction] === undefined ? message.direction : $root.types.PaymentDirection[message.direction] : message.direction;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.types.PaymentStatus[message.status] === undefined ? message.status : $root.types.PaymentStatus[message.status] : message.status;
            if (message.latestUpdateTimestamp != null && message.hasOwnProperty("latestUpdateTimestamp"))
                if (typeof message.latestUpdateTimestamp === "number")
                    object.latestUpdateTimestamp = options.longs === String ? String(message.latestUpdateTimestamp) : message.latestUpdateTimestamp;
                else
                    object.latestUpdateTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.latestUpdateTimestamp) : options.longs === Number ? new $util.LongBits(message.latestUpdateTimestamp.low >>> 0, message.latestUpdateTimestamp.high >>> 0).toNumber(true) : message.latestUpdateTimestamp;
            if (message.feePaidMsat != null && message.hasOwnProperty("feePaidMsat")) {
                if (typeof message.feePaidMsat === "number")
                    object.feePaidMsat = options.longs === String ? String(message.feePaidMsat) : message.feePaidMsat;
                else
                    object.feePaidMsat = options.longs === String ? $util.Long.prototype.toString.call(message.feePaidMsat) : options.longs === Number ? new $util.LongBits(message.feePaidMsat.low >>> 0, message.feePaidMsat.high >>> 0).toNumber(true) : message.feePaidMsat;
                if (options.oneofs)
                    object._feePaidMsat = "feePaidMsat";
            }
            return object;
        };

        /**
         * Converts this Payment to JSON.
         * @function toJSON
         * @memberof types.Payment
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Payment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Payment
         * @function getTypeUrl
         * @memberof types.Payment
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Payment.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.Payment";
        };

        return Payment;
    })();

    types.PaymentKind = (function() {

        /**
         * Properties of a PaymentKind.
         * @memberof types
         * @interface IPaymentKind
         * @property {types.IOnchain|null} [onchain] PaymentKind onchain
         * @property {types.IBolt11|null} [bolt11] PaymentKind bolt11
         * @property {types.IBolt11Jit|null} [bolt11Jit] PaymentKind bolt11Jit
         * @property {types.IBolt12Offer|null} [bolt12Offer] PaymentKind bolt12Offer
         * @property {types.IBolt12Refund|null} [bolt12Refund] PaymentKind bolt12Refund
         * @property {types.ISpontaneous|null} [spontaneous] PaymentKind spontaneous
         */

        /**
         * Constructs a new PaymentKind.
         * @memberof types
         * @classdesc Represents a PaymentKind.
         * @implements IPaymentKind
         * @constructor
         * @param {types.IPaymentKind=} [properties] Properties to set
         */
        function PaymentKind(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PaymentKind onchain.
         * @member {types.IOnchain|null|undefined} onchain
         * @memberof types.PaymentKind
         * @instance
         */
        PaymentKind.prototype.onchain = null;

        /**
         * PaymentKind bolt11.
         * @member {types.IBolt11|null|undefined} bolt11
         * @memberof types.PaymentKind
         * @instance
         */
        PaymentKind.prototype.bolt11 = null;

        /**
         * PaymentKind bolt11Jit.
         * @member {types.IBolt11Jit|null|undefined} bolt11Jit
         * @memberof types.PaymentKind
         * @instance
         */
        PaymentKind.prototype.bolt11Jit = null;

        /**
         * PaymentKind bolt12Offer.
         * @member {types.IBolt12Offer|null|undefined} bolt12Offer
         * @memberof types.PaymentKind
         * @instance
         */
        PaymentKind.prototype.bolt12Offer = null;

        /**
         * PaymentKind bolt12Refund.
         * @member {types.IBolt12Refund|null|undefined} bolt12Refund
         * @memberof types.PaymentKind
         * @instance
         */
        PaymentKind.prototype.bolt12Refund = null;

        /**
         * PaymentKind spontaneous.
         * @member {types.ISpontaneous|null|undefined} spontaneous
         * @memberof types.PaymentKind
         * @instance
         */
        PaymentKind.prototype.spontaneous = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * PaymentKind kind.
         * @member {"onchain"|"bolt11"|"bolt11Jit"|"bolt12Offer"|"bolt12Refund"|"spontaneous"|undefined} kind
         * @memberof types.PaymentKind
         * @instance
         */
        Object.defineProperty(PaymentKind.prototype, "kind", {
            get: $util.oneOfGetter($oneOfFields = ["onchain", "bolt11", "bolt11Jit", "bolt12Offer", "bolt12Refund", "spontaneous"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PaymentKind instance using the specified properties.
         * @function create
         * @memberof types.PaymentKind
         * @static
         * @param {types.IPaymentKind=} [properties] Properties to set
         * @returns {types.PaymentKind} PaymentKind instance
         */
        PaymentKind.create = function create(properties) {
            return new PaymentKind(properties);
        };

        /**
         * Encodes the specified PaymentKind message. Does not implicitly {@link types.PaymentKind.verify|verify} messages.
         * @function encode
         * @memberof types.PaymentKind
         * @static
         * @param {types.IPaymentKind} message PaymentKind message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PaymentKind.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.onchain != null && Object.hasOwnProperty.call(message, "onchain"))
                $root.types.Onchain.encode(message.onchain, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.bolt11 != null && Object.hasOwnProperty.call(message, "bolt11"))
                $root.types.Bolt11.encode(message.bolt11, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.bolt11Jit != null && Object.hasOwnProperty.call(message, "bolt11Jit"))
                $root.types.Bolt11Jit.encode(message.bolt11Jit, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.bolt12Offer != null && Object.hasOwnProperty.call(message, "bolt12Offer"))
                $root.types.Bolt12Offer.encode(message.bolt12Offer, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.bolt12Refund != null && Object.hasOwnProperty.call(message, "bolt12Refund"))
                $root.types.Bolt12Refund.encode(message.bolt12Refund, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.spontaneous != null && Object.hasOwnProperty.call(message, "spontaneous"))
                $root.types.Spontaneous.encode(message.spontaneous, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PaymentKind message, length delimited. Does not implicitly {@link types.PaymentKind.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PaymentKind
         * @static
         * @param {types.IPaymentKind} message PaymentKind message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PaymentKind.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PaymentKind message from the specified reader or buffer.
         * @function decode
         * @memberof types.PaymentKind
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PaymentKind} PaymentKind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PaymentKind.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PaymentKind();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.onchain = $root.types.Onchain.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.bolt11 = $root.types.Bolt11.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.bolt11Jit = $root.types.Bolt11Jit.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.bolt12Offer = $root.types.Bolt12Offer.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.bolt12Refund = $root.types.Bolt12Refund.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.spontaneous = $root.types.Spontaneous.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PaymentKind message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PaymentKind
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PaymentKind} PaymentKind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PaymentKind.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PaymentKind message.
         * @function verify
         * @memberof types.PaymentKind
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PaymentKind.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.onchain != null && message.hasOwnProperty("onchain")) {
                properties.kind = 1;
                {
                    let error = $root.types.Onchain.verify(message.onchain);
                    if (error)
                        return "onchain." + error;
                }
            }
            if (message.bolt11 != null && message.hasOwnProperty("bolt11")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.types.Bolt11.verify(message.bolt11);
                    if (error)
                        return "bolt11." + error;
                }
            }
            if (message.bolt11Jit != null && message.hasOwnProperty("bolt11Jit")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.types.Bolt11Jit.verify(message.bolt11Jit);
                    if (error)
                        return "bolt11Jit." + error;
                }
            }
            if (message.bolt12Offer != null && message.hasOwnProperty("bolt12Offer")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.types.Bolt12Offer.verify(message.bolt12Offer);
                    if (error)
                        return "bolt12Offer." + error;
                }
            }
            if (message.bolt12Refund != null && message.hasOwnProperty("bolt12Refund")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.types.Bolt12Refund.verify(message.bolt12Refund);
                    if (error)
                        return "bolt12Refund." + error;
                }
            }
            if (message.spontaneous != null && message.hasOwnProperty("spontaneous")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.types.Spontaneous.verify(message.spontaneous);
                    if (error)
                        return "spontaneous." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PaymentKind message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PaymentKind
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PaymentKind} PaymentKind
         */
        PaymentKind.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PaymentKind)
                return object;
            let message = new $root.types.PaymentKind();
            if (object.onchain != null) {
                if (typeof object.onchain !== "object")
                    throw TypeError(".types.PaymentKind.onchain: object expected");
                message.onchain = $root.types.Onchain.fromObject(object.onchain);
            }
            if (object.bolt11 != null) {
                if (typeof object.bolt11 !== "object")
                    throw TypeError(".types.PaymentKind.bolt11: object expected");
                message.bolt11 = $root.types.Bolt11.fromObject(object.bolt11);
            }
            if (object.bolt11Jit != null) {
                if (typeof object.bolt11Jit !== "object")
                    throw TypeError(".types.PaymentKind.bolt11Jit: object expected");
                message.bolt11Jit = $root.types.Bolt11Jit.fromObject(object.bolt11Jit);
            }
            if (object.bolt12Offer != null) {
                if (typeof object.bolt12Offer !== "object")
                    throw TypeError(".types.PaymentKind.bolt12Offer: object expected");
                message.bolt12Offer = $root.types.Bolt12Offer.fromObject(object.bolt12Offer);
            }
            if (object.bolt12Refund != null) {
                if (typeof object.bolt12Refund !== "object")
                    throw TypeError(".types.PaymentKind.bolt12Refund: object expected");
                message.bolt12Refund = $root.types.Bolt12Refund.fromObject(object.bolt12Refund);
            }
            if (object.spontaneous != null) {
                if (typeof object.spontaneous !== "object")
                    throw TypeError(".types.PaymentKind.spontaneous: object expected");
                message.spontaneous = $root.types.Spontaneous.fromObject(object.spontaneous);
            }
            return message;
        };

        /**
         * Creates a plain object from a PaymentKind message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PaymentKind
         * @static
         * @param {types.PaymentKind} message PaymentKind
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PaymentKind.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.onchain != null && message.hasOwnProperty("onchain")) {
                object.onchain = $root.types.Onchain.toObject(message.onchain, options);
                if (options.oneofs)
                    object.kind = "onchain";
            }
            if (message.bolt11 != null && message.hasOwnProperty("bolt11")) {
                object.bolt11 = $root.types.Bolt11.toObject(message.bolt11, options);
                if (options.oneofs)
                    object.kind = "bolt11";
            }
            if (message.bolt11Jit != null && message.hasOwnProperty("bolt11Jit")) {
                object.bolt11Jit = $root.types.Bolt11Jit.toObject(message.bolt11Jit, options);
                if (options.oneofs)
                    object.kind = "bolt11Jit";
            }
            if (message.bolt12Offer != null && message.hasOwnProperty("bolt12Offer")) {
                object.bolt12Offer = $root.types.Bolt12Offer.toObject(message.bolt12Offer, options);
                if (options.oneofs)
                    object.kind = "bolt12Offer";
            }
            if (message.bolt12Refund != null && message.hasOwnProperty("bolt12Refund")) {
                object.bolt12Refund = $root.types.Bolt12Refund.toObject(message.bolt12Refund, options);
                if (options.oneofs)
                    object.kind = "bolt12Refund";
            }
            if (message.spontaneous != null && message.hasOwnProperty("spontaneous")) {
                object.spontaneous = $root.types.Spontaneous.toObject(message.spontaneous, options);
                if (options.oneofs)
                    object.kind = "spontaneous";
            }
            return object;
        };

        /**
         * Converts this PaymentKind to JSON.
         * @function toJSON
         * @memberof types.PaymentKind
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PaymentKind.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PaymentKind
         * @function getTypeUrl
         * @memberof types.PaymentKind
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PaymentKind.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PaymentKind";
        };

        return PaymentKind;
    })();

    types.Onchain = (function() {

        /**
         * Properties of an Onchain.
         * @memberof types
         * @interface IOnchain
         * @property {string|null} [txid] Onchain txid
         * @property {types.IConfirmationStatus|null} [status] Onchain status
         */

        /**
         * Constructs a new Onchain.
         * @memberof types
         * @classdesc Represents an Onchain.
         * @implements IOnchain
         * @constructor
         * @param {types.IOnchain=} [properties] Properties to set
         */
        function Onchain(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Onchain txid.
         * @member {string} txid
         * @memberof types.Onchain
         * @instance
         */
        Onchain.prototype.txid = "";

        /**
         * Onchain status.
         * @member {types.IConfirmationStatus|null|undefined} status
         * @memberof types.Onchain
         * @instance
         */
        Onchain.prototype.status = null;

        /**
         * Creates a new Onchain instance using the specified properties.
         * @function create
         * @memberof types.Onchain
         * @static
         * @param {types.IOnchain=} [properties] Properties to set
         * @returns {types.Onchain} Onchain instance
         */
        Onchain.create = function create(properties) {
            return new Onchain(properties);
        };

        /**
         * Encodes the specified Onchain message. Does not implicitly {@link types.Onchain.verify|verify} messages.
         * @function encode
         * @memberof types.Onchain
         * @static
         * @param {types.IOnchain} message Onchain message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Onchain.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.txid != null && Object.hasOwnProperty.call(message, "txid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.txid);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.types.ConfirmationStatus.encode(message.status, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Onchain message, length delimited. Does not implicitly {@link types.Onchain.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.Onchain
         * @static
         * @param {types.IOnchain} message Onchain message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Onchain.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Onchain message from the specified reader or buffer.
         * @function decode
         * @memberof types.Onchain
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.Onchain} Onchain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Onchain.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.Onchain();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.txid = reader.string();
                        break;
                    }
                case 2: {
                        message.status = $root.types.ConfirmationStatus.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Onchain message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.Onchain
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.Onchain} Onchain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Onchain.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Onchain message.
         * @function verify
         * @memberof types.Onchain
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Onchain.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.txid != null && message.hasOwnProperty("txid"))
                if (!$util.isString(message.txid))
                    return "txid: string expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.types.ConfirmationStatus.verify(message.status);
                if (error)
                    return "status." + error;
            }
            return null;
        };

        /**
         * Creates an Onchain message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.Onchain
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.Onchain} Onchain
         */
        Onchain.fromObject = function fromObject(object) {
            if (object instanceof $root.types.Onchain)
                return object;
            let message = new $root.types.Onchain();
            if (object.txid != null)
                message.txid = String(object.txid);
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".types.Onchain.status: object expected");
                message.status = $root.types.ConfirmationStatus.fromObject(object.status);
            }
            return message;
        };

        /**
         * Creates a plain object from an Onchain message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.Onchain
         * @static
         * @param {types.Onchain} message Onchain
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Onchain.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.txid = "";
                object.status = null;
            }
            if (message.txid != null && message.hasOwnProperty("txid"))
                object.txid = message.txid;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.types.ConfirmationStatus.toObject(message.status, options);
            return object;
        };

        /**
         * Converts this Onchain to JSON.
         * @function toJSON
         * @memberof types.Onchain
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Onchain.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Onchain
         * @function getTypeUrl
         * @memberof types.Onchain
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Onchain.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.Onchain";
        };

        return Onchain;
    })();

    types.ConfirmationStatus = (function() {

        /**
         * Properties of a ConfirmationStatus.
         * @memberof types
         * @interface IConfirmationStatus
         * @property {types.IConfirmed|null} [confirmed] ConfirmationStatus confirmed
         * @property {types.IUnconfirmed|null} [unconfirmed] ConfirmationStatus unconfirmed
         */

        /**
         * Constructs a new ConfirmationStatus.
         * @memberof types
         * @classdesc Represents a ConfirmationStatus.
         * @implements IConfirmationStatus
         * @constructor
         * @param {types.IConfirmationStatus=} [properties] Properties to set
         */
        function ConfirmationStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConfirmationStatus confirmed.
         * @member {types.IConfirmed|null|undefined} confirmed
         * @memberof types.ConfirmationStatus
         * @instance
         */
        ConfirmationStatus.prototype.confirmed = null;

        /**
         * ConfirmationStatus unconfirmed.
         * @member {types.IUnconfirmed|null|undefined} unconfirmed
         * @memberof types.ConfirmationStatus
         * @instance
         */
        ConfirmationStatus.prototype.unconfirmed = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * ConfirmationStatus status.
         * @member {"confirmed"|"unconfirmed"|undefined} status
         * @memberof types.ConfirmationStatus
         * @instance
         */
        Object.defineProperty(ConfirmationStatus.prototype, "status", {
            get: $util.oneOfGetter($oneOfFields = ["confirmed", "unconfirmed"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ConfirmationStatus instance using the specified properties.
         * @function create
         * @memberof types.ConfirmationStatus
         * @static
         * @param {types.IConfirmationStatus=} [properties] Properties to set
         * @returns {types.ConfirmationStatus} ConfirmationStatus instance
         */
        ConfirmationStatus.create = function create(properties) {
            return new ConfirmationStatus(properties);
        };

        /**
         * Encodes the specified ConfirmationStatus message. Does not implicitly {@link types.ConfirmationStatus.verify|verify} messages.
         * @function encode
         * @memberof types.ConfirmationStatus
         * @static
         * @param {types.IConfirmationStatus} message ConfirmationStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConfirmationStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.confirmed != null && Object.hasOwnProperty.call(message, "confirmed"))
                $root.types.Confirmed.encode(message.confirmed, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.unconfirmed != null && Object.hasOwnProperty.call(message, "unconfirmed"))
                $root.types.Unconfirmed.encode(message.unconfirmed, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ConfirmationStatus message, length delimited. Does not implicitly {@link types.ConfirmationStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.ConfirmationStatus
         * @static
         * @param {types.IConfirmationStatus} message ConfirmationStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConfirmationStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConfirmationStatus message from the specified reader or buffer.
         * @function decode
         * @memberof types.ConfirmationStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.ConfirmationStatus} ConfirmationStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConfirmationStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.ConfirmationStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.confirmed = $root.types.Confirmed.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.unconfirmed = $root.types.Unconfirmed.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConfirmationStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.ConfirmationStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.ConfirmationStatus} ConfirmationStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConfirmationStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConfirmationStatus message.
         * @function verify
         * @memberof types.ConfirmationStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConfirmationStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.confirmed != null && message.hasOwnProperty("confirmed")) {
                properties.status = 1;
                {
                    let error = $root.types.Confirmed.verify(message.confirmed);
                    if (error)
                        return "confirmed." + error;
                }
            }
            if (message.unconfirmed != null && message.hasOwnProperty("unconfirmed")) {
                if (properties.status === 1)
                    return "status: multiple values";
                properties.status = 1;
                {
                    let error = $root.types.Unconfirmed.verify(message.unconfirmed);
                    if (error)
                        return "unconfirmed." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ConfirmationStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.ConfirmationStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.ConfirmationStatus} ConfirmationStatus
         */
        ConfirmationStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.types.ConfirmationStatus)
                return object;
            let message = new $root.types.ConfirmationStatus();
            if (object.confirmed != null) {
                if (typeof object.confirmed !== "object")
                    throw TypeError(".types.ConfirmationStatus.confirmed: object expected");
                message.confirmed = $root.types.Confirmed.fromObject(object.confirmed);
            }
            if (object.unconfirmed != null) {
                if (typeof object.unconfirmed !== "object")
                    throw TypeError(".types.ConfirmationStatus.unconfirmed: object expected");
                message.unconfirmed = $root.types.Unconfirmed.fromObject(object.unconfirmed);
            }
            return message;
        };

        /**
         * Creates a plain object from a ConfirmationStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.ConfirmationStatus
         * @static
         * @param {types.ConfirmationStatus} message ConfirmationStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConfirmationStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.confirmed != null && message.hasOwnProperty("confirmed")) {
                object.confirmed = $root.types.Confirmed.toObject(message.confirmed, options);
                if (options.oneofs)
                    object.status = "confirmed";
            }
            if (message.unconfirmed != null && message.hasOwnProperty("unconfirmed")) {
                object.unconfirmed = $root.types.Unconfirmed.toObject(message.unconfirmed, options);
                if (options.oneofs)
                    object.status = "unconfirmed";
            }
            return object;
        };

        /**
         * Converts this ConfirmationStatus to JSON.
         * @function toJSON
         * @memberof types.ConfirmationStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConfirmationStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ConfirmationStatus
         * @function getTypeUrl
         * @memberof types.ConfirmationStatus
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ConfirmationStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.ConfirmationStatus";
        };

        return ConfirmationStatus;
    })();

    types.Confirmed = (function() {

        /**
         * Properties of a Confirmed.
         * @memberof types
         * @interface IConfirmed
         * @property {string|null} [blockHash] Confirmed blockHash
         * @property {number|null} [height] Confirmed height
         * @property {number|Long|null} [timestamp] Confirmed timestamp
         */

        /**
         * Constructs a new Confirmed.
         * @memberof types
         * @classdesc Represents a Confirmed.
         * @implements IConfirmed
         * @constructor
         * @param {types.IConfirmed=} [properties] Properties to set
         */
        function Confirmed(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Confirmed blockHash.
         * @member {string} blockHash
         * @memberof types.Confirmed
         * @instance
         */
        Confirmed.prototype.blockHash = "";

        /**
         * Confirmed height.
         * @member {number} height
         * @memberof types.Confirmed
         * @instance
         */
        Confirmed.prototype.height = 0;

        /**
         * Confirmed timestamp.
         * @member {number|Long} timestamp
         * @memberof types.Confirmed
         * @instance
         */
        Confirmed.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Confirmed instance using the specified properties.
         * @function create
         * @memberof types.Confirmed
         * @static
         * @param {types.IConfirmed=} [properties] Properties to set
         * @returns {types.Confirmed} Confirmed instance
         */
        Confirmed.create = function create(properties) {
            return new Confirmed(properties);
        };

        /**
         * Encodes the specified Confirmed message. Does not implicitly {@link types.Confirmed.verify|verify} messages.
         * @function encode
         * @memberof types.Confirmed
         * @static
         * @param {types.IConfirmed} message Confirmed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Confirmed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.blockHash != null && Object.hasOwnProperty.call(message, "blockHash"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.blockHash);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.height);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified Confirmed message, length delimited. Does not implicitly {@link types.Confirmed.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.Confirmed
         * @static
         * @param {types.IConfirmed} message Confirmed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Confirmed.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Confirmed message from the specified reader or buffer.
         * @function decode
         * @memberof types.Confirmed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.Confirmed} Confirmed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Confirmed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.Confirmed();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.blockHash = reader.string();
                        break;
                    }
                case 2: {
                        message.height = reader.uint32();
                        break;
                    }
                case 3: {
                        message.timestamp = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Confirmed message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.Confirmed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.Confirmed} Confirmed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Confirmed.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Confirmed message.
         * @function verify
         * @memberof types.Confirmed
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Confirmed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                if (!$util.isString(message.blockHash))
                    return "blockHash: string expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a Confirmed message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.Confirmed
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.Confirmed} Confirmed
         */
        Confirmed.fromObject = function fromObject(object) {
            if (object instanceof $root.types.Confirmed)
                return object;
            let message = new $root.types.Confirmed();
            if (object.blockHash != null)
                message.blockHash = String(object.blockHash);
            if (object.height != null)
                message.height = object.height >>> 0;
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Confirmed message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.Confirmed
         * @static
         * @param {types.Confirmed} message Confirmed
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Confirmed.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.blockHash = "";
                object.height = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                object.blockHash = message.blockHash;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
            return object;
        };

        /**
         * Converts this Confirmed to JSON.
         * @function toJSON
         * @memberof types.Confirmed
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Confirmed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Confirmed
         * @function getTypeUrl
         * @memberof types.Confirmed
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Confirmed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.Confirmed";
        };

        return Confirmed;
    })();

    types.Unconfirmed = (function() {

        /**
         * Properties of an Unconfirmed.
         * @memberof types
         * @interface IUnconfirmed
         */

        /**
         * Constructs a new Unconfirmed.
         * @memberof types
         * @classdesc Represents an Unconfirmed.
         * @implements IUnconfirmed
         * @constructor
         * @param {types.IUnconfirmed=} [properties] Properties to set
         */
        function Unconfirmed(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Unconfirmed instance using the specified properties.
         * @function create
         * @memberof types.Unconfirmed
         * @static
         * @param {types.IUnconfirmed=} [properties] Properties to set
         * @returns {types.Unconfirmed} Unconfirmed instance
         */
        Unconfirmed.create = function create(properties) {
            return new Unconfirmed(properties);
        };

        /**
         * Encodes the specified Unconfirmed message. Does not implicitly {@link types.Unconfirmed.verify|verify} messages.
         * @function encode
         * @memberof types.Unconfirmed
         * @static
         * @param {types.IUnconfirmed} message Unconfirmed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Unconfirmed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Unconfirmed message, length delimited. Does not implicitly {@link types.Unconfirmed.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.Unconfirmed
         * @static
         * @param {types.IUnconfirmed} message Unconfirmed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Unconfirmed.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Unconfirmed message from the specified reader or buffer.
         * @function decode
         * @memberof types.Unconfirmed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.Unconfirmed} Unconfirmed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Unconfirmed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.Unconfirmed();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Unconfirmed message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.Unconfirmed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.Unconfirmed} Unconfirmed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Unconfirmed.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Unconfirmed message.
         * @function verify
         * @memberof types.Unconfirmed
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Unconfirmed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Unconfirmed message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.Unconfirmed
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.Unconfirmed} Unconfirmed
         */
        Unconfirmed.fromObject = function fromObject(object) {
            if (object instanceof $root.types.Unconfirmed)
                return object;
            return new $root.types.Unconfirmed();
        };

        /**
         * Creates a plain object from an Unconfirmed message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.Unconfirmed
         * @static
         * @param {types.Unconfirmed} message Unconfirmed
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Unconfirmed.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Unconfirmed to JSON.
         * @function toJSON
         * @memberof types.Unconfirmed
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Unconfirmed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Unconfirmed
         * @function getTypeUrl
         * @memberof types.Unconfirmed
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Unconfirmed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.Unconfirmed";
        };

        return Unconfirmed;
    })();

    types.Bolt11 = (function() {

        /**
         * Properties of a Bolt11.
         * @memberof types
         * @interface IBolt11
         * @property {string|null} [hash] Bolt11 hash
         * @property {string|null} [preimage] Bolt11 preimage
         * @property {Uint8Array|null} [secret] Bolt11 secret
         */

        /**
         * Constructs a new Bolt11.
         * @memberof types
         * @classdesc Represents a Bolt11.
         * @implements IBolt11
         * @constructor
         * @param {types.IBolt11=} [properties] Properties to set
         */
        function Bolt11(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bolt11 hash.
         * @member {string} hash
         * @memberof types.Bolt11
         * @instance
         */
        Bolt11.prototype.hash = "";

        /**
         * Bolt11 preimage.
         * @member {string|null|undefined} preimage
         * @memberof types.Bolt11
         * @instance
         */
        Bolt11.prototype.preimage = null;

        /**
         * Bolt11 secret.
         * @member {Uint8Array|null|undefined} secret
         * @memberof types.Bolt11
         * @instance
         */
        Bolt11.prototype.secret = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Bolt11 _preimage.
         * @member {"preimage"|undefined} _preimage
         * @memberof types.Bolt11
         * @instance
         */
        Object.defineProperty(Bolt11.prototype, "_preimage", {
            get: $util.oneOfGetter($oneOfFields = ["preimage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Bolt11 _secret.
         * @member {"secret"|undefined} _secret
         * @memberof types.Bolt11
         * @instance
         */
        Object.defineProperty(Bolt11.prototype, "_secret", {
            get: $util.oneOfGetter($oneOfFields = ["secret"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Bolt11 instance using the specified properties.
         * @function create
         * @memberof types.Bolt11
         * @static
         * @param {types.IBolt11=} [properties] Properties to set
         * @returns {types.Bolt11} Bolt11 instance
         */
        Bolt11.create = function create(properties) {
            return new Bolt11(properties);
        };

        /**
         * Encodes the specified Bolt11 message. Does not implicitly {@link types.Bolt11.verify|verify} messages.
         * @function encode
         * @memberof types.Bolt11
         * @static
         * @param {types.IBolt11} message Bolt11 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt11.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.hash);
            if (message.preimage != null && Object.hasOwnProperty.call(message, "preimage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.preimage);
            if (message.secret != null && Object.hasOwnProperty.call(message, "secret"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.secret);
            return writer;
        };

        /**
         * Encodes the specified Bolt11 message, length delimited. Does not implicitly {@link types.Bolt11.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.Bolt11
         * @static
         * @param {types.IBolt11} message Bolt11 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt11.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bolt11 message from the specified reader or buffer.
         * @function decode
         * @memberof types.Bolt11
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.Bolt11} Bolt11
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt11.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.Bolt11();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.hash = reader.string();
                        break;
                    }
                case 2: {
                        message.preimage = reader.string();
                        break;
                    }
                case 3: {
                        message.secret = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bolt11 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.Bolt11
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.Bolt11} Bolt11
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt11.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bolt11 message.
         * @function verify
         * @memberof types.Bolt11
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bolt11.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.hash != null && message.hasOwnProperty("hash"))
                if (!$util.isString(message.hash))
                    return "hash: string expected";
            if (message.preimage != null && message.hasOwnProperty("preimage")) {
                properties._preimage = 1;
                if (!$util.isString(message.preimage))
                    return "preimage: string expected";
            }
            if (message.secret != null && message.hasOwnProperty("secret")) {
                properties._secret = 1;
                if (!(message.secret && typeof message.secret.length === "number" || $util.isString(message.secret)))
                    return "secret: buffer expected";
            }
            return null;
        };

        /**
         * Creates a Bolt11 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.Bolt11
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.Bolt11} Bolt11
         */
        Bolt11.fromObject = function fromObject(object) {
            if (object instanceof $root.types.Bolt11)
                return object;
            let message = new $root.types.Bolt11();
            if (object.hash != null)
                message.hash = String(object.hash);
            if (object.preimage != null)
                message.preimage = String(object.preimage);
            if (object.secret != null)
                if (typeof object.secret === "string")
                    $util.base64.decode(object.secret, message.secret = $util.newBuffer($util.base64.length(object.secret)), 0);
                else if (object.secret.length >= 0)
                    message.secret = object.secret;
            return message;
        };

        /**
         * Creates a plain object from a Bolt11 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.Bolt11
         * @static
         * @param {types.Bolt11} message Bolt11
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bolt11.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.hash = "";
            if (message.hash != null && message.hasOwnProperty("hash"))
                object.hash = message.hash;
            if (message.preimage != null && message.hasOwnProperty("preimage")) {
                object.preimage = message.preimage;
                if (options.oneofs)
                    object._preimage = "preimage";
            }
            if (message.secret != null && message.hasOwnProperty("secret")) {
                object.secret = options.bytes === String ? $util.base64.encode(message.secret, 0, message.secret.length) : options.bytes === Array ? Array.prototype.slice.call(message.secret) : message.secret;
                if (options.oneofs)
                    object._secret = "secret";
            }
            return object;
        };

        /**
         * Converts this Bolt11 to JSON.
         * @function toJSON
         * @memberof types.Bolt11
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bolt11.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Bolt11
         * @function getTypeUrl
         * @memberof types.Bolt11
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Bolt11.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.Bolt11";
        };

        return Bolt11;
    })();

    types.Bolt11Jit = (function() {

        /**
         * Properties of a Bolt11Jit.
         * @memberof types
         * @interface IBolt11Jit
         * @property {string|null} [hash] Bolt11Jit hash
         * @property {string|null} [preimage] Bolt11Jit preimage
         * @property {Uint8Array|null} [secret] Bolt11Jit secret
         * @property {types.ILSPFeeLimits|null} [lspFeeLimits] Bolt11Jit lspFeeLimits
         */

        /**
         * Constructs a new Bolt11Jit.
         * @memberof types
         * @classdesc Represents a Bolt11Jit.
         * @implements IBolt11Jit
         * @constructor
         * @param {types.IBolt11Jit=} [properties] Properties to set
         */
        function Bolt11Jit(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bolt11Jit hash.
         * @member {string} hash
         * @memberof types.Bolt11Jit
         * @instance
         */
        Bolt11Jit.prototype.hash = "";

        /**
         * Bolt11Jit preimage.
         * @member {string|null|undefined} preimage
         * @memberof types.Bolt11Jit
         * @instance
         */
        Bolt11Jit.prototype.preimage = null;

        /**
         * Bolt11Jit secret.
         * @member {Uint8Array|null|undefined} secret
         * @memberof types.Bolt11Jit
         * @instance
         */
        Bolt11Jit.prototype.secret = null;

        /**
         * Bolt11Jit lspFeeLimits.
         * @member {types.ILSPFeeLimits|null|undefined} lspFeeLimits
         * @memberof types.Bolt11Jit
         * @instance
         */
        Bolt11Jit.prototype.lspFeeLimits = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Bolt11Jit _preimage.
         * @member {"preimage"|undefined} _preimage
         * @memberof types.Bolt11Jit
         * @instance
         */
        Object.defineProperty(Bolt11Jit.prototype, "_preimage", {
            get: $util.oneOfGetter($oneOfFields = ["preimage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Bolt11Jit _secret.
         * @member {"secret"|undefined} _secret
         * @memberof types.Bolt11Jit
         * @instance
         */
        Object.defineProperty(Bolt11Jit.prototype, "_secret", {
            get: $util.oneOfGetter($oneOfFields = ["secret"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Bolt11Jit instance using the specified properties.
         * @function create
         * @memberof types.Bolt11Jit
         * @static
         * @param {types.IBolt11Jit=} [properties] Properties to set
         * @returns {types.Bolt11Jit} Bolt11Jit instance
         */
        Bolt11Jit.create = function create(properties) {
            return new Bolt11Jit(properties);
        };

        /**
         * Encodes the specified Bolt11Jit message. Does not implicitly {@link types.Bolt11Jit.verify|verify} messages.
         * @function encode
         * @memberof types.Bolt11Jit
         * @static
         * @param {types.IBolt11Jit} message Bolt11Jit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt11Jit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.hash);
            if (message.preimage != null && Object.hasOwnProperty.call(message, "preimage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.preimage);
            if (message.secret != null && Object.hasOwnProperty.call(message, "secret"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.secret);
            if (message.lspFeeLimits != null && Object.hasOwnProperty.call(message, "lspFeeLimits"))
                $root.types.LSPFeeLimits.encode(message.lspFeeLimits, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Bolt11Jit message, length delimited. Does not implicitly {@link types.Bolt11Jit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.Bolt11Jit
         * @static
         * @param {types.IBolt11Jit} message Bolt11Jit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt11Jit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bolt11Jit message from the specified reader or buffer.
         * @function decode
         * @memberof types.Bolt11Jit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.Bolt11Jit} Bolt11Jit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt11Jit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.Bolt11Jit();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.hash = reader.string();
                        break;
                    }
                case 2: {
                        message.preimage = reader.string();
                        break;
                    }
                case 3: {
                        message.secret = reader.bytes();
                        break;
                    }
                case 4: {
                        message.lspFeeLimits = $root.types.LSPFeeLimits.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bolt11Jit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.Bolt11Jit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.Bolt11Jit} Bolt11Jit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt11Jit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bolt11Jit message.
         * @function verify
         * @memberof types.Bolt11Jit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bolt11Jit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.hash != null && message.hasOwnProperty("hash"))
                if (!$util.isString(message.hash))
                    return "hash: string expected";
            if (message.preimage != null && message.hasOwnProperty("preimage")) {
                properties._preimage = 1;
                if (!$util.isString(message.preimage))
                    return "preimage: string expected";
            }
            if (message.secret != null && message.hasOwnProperty("secret")) {
                properties._secret = 1;
                if (!(message.secret && typeof message.secret.length === "number" || $util.isString(message.secret)))
                    return "secret: buffer expected";
            }
            if (message.lspFeeLimits != null && message.hasOwnProperty("lspFeeLimits")) {
                let error = $root.types.LSPFeeLimits.verify(message.lspFeeLimits);
                if (error)
                    return "lspFeeLimits." + error;
            }
            return null;
        };

        /**
         * Creates a Bolt11Jit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.Bolt11Jit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.Bolt11Jit} Bolt11Jit
         */
        Bolt11Jit.fromObject = function fromObject(object) {
            if (object instanceof $root.types.Bolt11Jit)
                return object;
            let message = new $root.types.Bolt11Jit();
            if (object.hash != null)
                message.hash = String(object.hash);
            if (object.preimage != null)
                message.preimage = String(object.preimage);
            if (object.secret != null)
                if (typeof object.secret === "string")
                    $util.base64.decode(object.secret, message.secret = $util.newBuffer($util.base64.length(object.secret)), 0);
                else if (object.secret.length >= 0)
                    message.secret = object.secret;
            if (object.lspFeeLimits != null) {
                if (typeof object.lspFeeLimits !== "object")
                    throw TypeError(".types.Bolt11Jit.lspFeeLimits: object expected");
                message.lspFeeLimits = $root.types.LSPFeeLimits.fromObject(object.lspFeeLimits);
            }
            return message;
        };

        /**
         * Creates a plain object from a Bolt11Jit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.Bolt11Jit
         * @static
         * @param {types.Bolt11Jit} message Bolt11Jit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bolt11Jit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.hash = "";
                object.lspFeeLimits = null;
            }
            if (message.hash != null && message.hasOwnProperty("hash"))
                object.hash = message.hash;
            if (message.preimage != null && message.hasOwnProperty("preimage")) {
                object.preimage = message.preimage;
                if (options.oneofs)
                    object._preimage = "preimage";
            }
            if (message.secret != null && message.hasOwnProperty("secret")) {
                object.secret = options.bytes === String ? $util.base64.encode(message.secret, 0, message.secret.length) : options.bytes === Array ? Array.prototype.slice.call(message.secret) : message.secret;
                if (options.oneofs)
                    object._secret = "secret";
            }
            if (message.lspFeeLimits != null && message.hasOwnProperty("lspFeeLimits"))
                object.lspFeeLimits = $root.types.LSPFeeLimits.toObject(message.lspFeeLimits, options);
            return object;
        };

        /**
         * Converts this Bolt11Jit to JSON.
         * @function toJSON
         * @memberof types.Bolt11Jit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bolt11Jit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Bolt11Jit
         * @function getTypeUrl
         * @memberof types.Bolt11Jit
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Bolt11Jit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.Bolt11Jit";
        };

        return Bolt11Jit;
    })();

    types.Bolt12Offer = (function() {

        /**
         * Properties of a Bolt12Offer.
         * @memberof types
         * @interface IBolt12Offer
         * @property {string|null} [hash] Bolt12Offer hash
         * @property {string|null} [preimage] Bolt12Offer preimage
         * @property {Uint8Array|null} [secret] Bolt12Offer secret
         * @property {string|null} [offerId] Bolt12Offer offerId
         * @property {string|null} [payerNote] Bolt12Offer payerNote
         * @property {number|Long|null} [quantity] Bolt12Offer quantity
         */

        /**
         * Constructs a new Bolt12Offer.
         * @memberof types
         * @classdesc Represents a Bolt12Offer.
         * @implements IBolt12Offer
         * @constructor
         * @param {types.IBolt12Offer=} [properties] Properties to set
         */
        function Bolt12Offer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bolt12Offer hash.
         * @member {string|null|undefined} hash
         * @memberof types.Bolt12Offer
         * @instance
         */
        Bolt12Offer.prototype.hash = null;

        /**
         * Bolt12Offer preimage.
         * @member {string|null|undefined} preimage
         * @memberof types.Bolt12Offer
         * @instance
         */
        Bolt12Offer.prototype.preimage = null;

        /**
         * Bolt12Offer secret.
         * @member {Uint8Array|null|undefined} secret
         * @memberof types.Bolt12Offer
         * @instance
         */
        Bolt12Offer.prototype.secret = null;

        /**
         * Bolt12Offer offerId.
         * @member {string} offerId
         * @memberof types.Bolt12Offer
         * @instance
         */
        Bolt12Offer.prototype.offerId = "";

        /**
         * Bolt12Offer payerNote.
         * @member {string|null|undefined} payerNote
         * @memberof types.Bolt12Offer
         * @instance
         */
        Bolt12Offer.prototype.payerNote = null;

        /**
         * Bolt12Offer quantity.
         * @member {number|Long|null|undefined} quantity
         * @memberof types.Bolt12Offer
         * @instance
         */
        Bolt12Offer.prototype.quantity = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Bolt12Offer _hash.
         * @member {"hash"|undefined} _hash
         * @memberof types.Bolt12Offer
         * @instance
         */
        Object.defineProperty(Bolt12Offer.prototype, "_hash", {
            get: $util.oneOfGetter($oneOfFields = ["hash"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Bolt12Offer _preimage.
         * @member {"preimage"|undefined} _preimage
         * @memberof types.Bolt12Offer
         * @instance
         */
        Object.defineProperty(Bolt12Offer.prototype, "_preimage", {
            get: $util.oneOfGetter($oneOfFields = ["preimage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Bolt12Offer _secret.
         * @member {"secret"|undefined} _secret
         * @memberof types.Bolt12Offer
         * @instance
         */
        Object.defineProperty(Bolt12Offer.prototype, "_secret", {
            get: $util.oneOfGetter($oneOfFields = ["secret"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Bolt12Offer _payerNote.
         * @member {"payerNote"|undefined} _payerNote
         * @memberof types.Bolt12Offer
         * @instance
         */
        Object.defineProperty(Bolt12Offer.prototype, "_payerNote", {
            get: $util.oneOfGetter($oneOfFields = ["payerNote"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Bolt12Offer _quantity.
         * @member {"quantity"|undefined} _quantity
         * @memberof types.Bolt12Offer
         * @instance
         */
        Object.defineProperty(Bolt12Offer.prototype, "_quantity", {
            get: $util.oneOfGetter($oneOfFields = ["quantity"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Bolt12Offer instance using the specified properties.
         * @function create
         * @memberof types.Bolt12Offer
         * @static
         * @param {types.IBolt12Offer=} [properties] Properties to set
         * @returns {types.Bolt12Offer} Bolt12Offer instance
         */
        Bolt12Offer.create = function create(properties) {
            return new Bolt12Offer(properties);
        };

        /**
         * Encodes the specified Bolt12Offer message. Does not implicitly {@link types.Bolt12Offer.verify|verify} messages.
         * @function encode
         * @memberof types.Bolt12Offer
         * @static
         * @param {types.IBolt12Offer} message Bolt12Offer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt12Offer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.hash);
            if (message.preimage != null && Object.hasOwnProperty.call(message, "preimage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.preimage);
            if (message.secret != null && Object.hasOwnProperty.call(message, "secret"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.secret);
            if (message.offerId != null && Object.hasOwnProperty.call(message, "offerId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.offerId);
            if (message.payerNote != null && Object.hasOwnProperty.call(message, "payerNote"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.payerNote);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.quantity);
            return writer;
        };

        /**
         * Encodes the specified Bolt12Offer message, length delimited. Does not implicitly {@link types.Bolt12Offer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.Bolt12Offer
         * @static
         * @param {types.IBolt12Offer} message Bolt12Offer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt12Offer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bolt12Offer message from the specified reader or buffer.
         * @function decode
         * @memberof types.Bolt12Offer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.Bolt12Offer} Bolt12Offer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt12Offer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.Bolt12Offer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.hash = reader.string();
                        break;
                    }
                case 2: {
                        message.preimage = reader.string();
                        break;
                    }
                case 3: {
                        message.secret = reader.bytes();
                        break;
                    }
                case 4: {
                        message.offerId = reader.string();
                        break;
                    }
                case 5: {
                        message.payerNote = reader.string();
                        break;
                    }
                case 6: {
                        message.quantity = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bolt12Offer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.Bolt12Offer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.Bolt12Offer} Bolt12Offer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt12Offer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bolt12Offer message.
         * @function verify
         * @memberof types.Bolt12Offer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bolt12Offer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.hash != null && message.hasOwnProperty("hash")) {
                properties._hash = 1;
                if (!$util.isString(message.hash))
                    return "hash: string expected";
            }
            if (message.preimage != null && message.hasOwnProperty("preimage")) {
                properties._preimage = 1;
                if (!$util.isString(message.preimage))
                    return "preimage: string expected";
            }
            if (message.secret != null && message.hasOwnProperty("secret")) {
                properties._secret = 1;
                if (!(message.secret && typeof message.secret.length === "number" || $util.isString(message.secret)))
                    return "secret: buffer expected";
            }
            if (message.offerId != null && message.hasOwnProperty("offerId"))
                if (!$util.isString(message.offerId))
                    return "offerId: string expected";
            if (message.payerNote != null && message.hasOwnProperty("payerNote")) {
                properties._payerNote = 1;
                if (!$util.isString(message.payerNote))
                    return "payerNote: string expected";
            }
            if (message.quantity != null && message.hasOwnProperty("quantity")) {
                properties._quantity = 1;
                if (!$util.isInteger(message.quantity) && !(message.quantity && $util.isInteger(message.quantity.low) && $util.isInteger(message.quantity.high)))
                    return "quantity: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a Bolt12Offer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.Bolt12Offer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.Bolt12Offer} Bolt12Offer
         */
        Bolt12Offer.fromObject = function fromObject(object) {
            if (object instanceof $root.types.Bolt12Offer)
                return object;
            let message = new $root.types.Bolt12Offer();
            if (object.hash != null)
                message.hash = String(object.hash);
            if (object.preimage != null)
                message.preimage = String(object.preimage);
            if (object.secret != null)
                if (typeof object.secret === "string")
                    $util.base64.decode(object.secret, message.secret = $util.newBuffer($util.base64.length(object.secret)), 0);
                else if (object.secret.length >= 0)
                    message.secret = object.secret;
            if (object.offerId != null)
                message.offerId = String(object.offerId);
            if (object.payerNote != null)
                message.payerNote = String(object.payerNote);
            if (object.quantity != null)
                if ($util.Long)
                    (message.quantity = $util.Long.fromValue(object.quantity)).unsigned = true;
                else if (typeof object.quantity === "string")
                    message.quantity = parseInt(object.quantity, 10);
                else if (typeof object.quantity === "number")
                    message.quantity = object.quantity;
                else if (typeof object.quantity === "object")
                    message.quantity = new $util.LongBits(object.quantity.low >>> 0, object.quantity.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Bolt12Offer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.Bolt12Offer
         * @static
         * @param {types.Bolt12Offer} message Bolt12Offer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bolt12Offer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.offerId = "";
            if (message.hash != null && message.hasOwnProperty("hash")) {
                object.hash = message.hash;
                if (options.oneofs)
                    object._hash = "hash";
            }
            if (message.preimage != null && message.hasOwnProperty("preimage")) {
                object.preimage = message.preimage;
                if (options.oneofs)
                    object._preimage = "preimage";
            }
            if (message.secret != null && message.hasOwnProperty("secret")) {
                object.secret = options.bytes === String ? $util.base64.encode(message.secret, 0, message.secret.length) : options.bytes === Array ? Array.prototype.slice.call(message.secret) : message.secret;
                if (options.oneofs)
                    object._secret = "secret";
            }
            if (message.offerId != null && message.hasOwnProperty("offerId"))
                object.offerId = message.offerId;
            if (message.payerNote != null && message.hasOwnProperty("payerNote")) {
                object.payerNote = message.payerNote;
                if (options.oneofs)
                    object._payerNote = "payerNote";
            }
            if (message.quantity != null && message.hasOwnProperty("quantity")) {
                if (typeof message.quantity === "number")
                    object.quantity = options.longs === String ? String(message.quantity) : message.quantity;
                else
                    object.quantity = options.longs === String ? $util.Long.prototype.toString.call(message.quantity) : options.longs === Number ? new $util.LongBits(message.quantity.low >>> 0, message.quantity.high >>> 0).toNumber(true) : message.quantity;
                if (options.oneofs)
                    object._quantity = "quantity";
            }
            return object;
        };

        /**
         * Converts this Bolt12Offer to JSON.
         * @function toJSON
         * @memberof types.Bolt12Offer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bolt12Offer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Bolt12Offer
         * @function getTypeUrl
         * @memberof types.Bolt12Offer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Bolt12Offer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.Bolt12Offer";
        };

        return Bolt12Offer;
    })();

    types.Bolt12Refund = (function() {

        /**
         * Properties of a Bolt12Refund.
         * @memberof types
         * @interface IBolt12Refund
         * @property {string|null} [hash] Bolt12Refund hash
         * @property {string|null} [preimage] Bolt12Refund preimage
         * @property {Uint8Array|null} [secret] Bolt12Refund secret
         * @property {string|null} [payerNote] Bolt12Refund payerNote
         * @property {number|Long|null} [quantity] Bolt12Refund quantity
         */

        /**
         * Constructs a new Bolt12Refund.
         * @memberof types
         * @classdesc Represents a Bolt12Refund.
         * @implements IBolt12Refund
         * @constructor
         * @param {types.IBolt12Refund=} [properties] Properties to set
         */
        function Bolt12Refund(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bolt12Refund hash.
         * @member {string|null|undefined} hash
         * @memberof types.Bolt12Refund
         * @instance
         */
        Bolt12Refund.prototype.hash = null;

        /**
         * Bolt12Refund preimage.
         * @member {string|null|undefined} preimage
         * @memberof types.Bolt12Refund
         * @instance
         */
        Bolt12Refund.prototype.preimage = null;

        /**
         * Bolt12Refund secret.
         * @member {Uint8Array|null|undefined} secret
         * @memberof types.Bolt12Refund
         * @instance
         */
        Bolt12Refund.prototype.secret = null;

        /**
         * Bolt12Refund payerNote.
         * @member {string|null|undefined} payerNote
         * @memberof types.Bolt12Refund
         * @instance
         */
        Bolt12Refund.prototype.payerNote = null;

        /**
         * Bolt12Refund quantity.
         * @member {number|Long|null|undefined} quantity
         * @memberof types.Bolt12Refund
         * @instance
         */
        Bolt12Refund.prototype.quantity = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Bolt12Refund _hash.
         * @member {"hash"|undefined} _hash
         * @memberof types.Bolt12Refund
         * @instance
         */
        Object.defineProperty(Bolt12Refund.prototype, "_hash", {
            get: $util.oneOfGetter($oneOfFields = ["hash"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Bolt12Refund _preimage.
         * @member {"preimage"|undefined} _preimage
         * @memberof types.Bolt12Refund
         * @instance
         */
        Object.defineProperty(Bolt12Refund.prototype, "_preimage", {
            get: $util.oneOfGetter($oneOfFields = ["preimage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Bolt12Refund _secret.
         * @member {"secret"|undefined} _secret
         * @memberof types.Bolt12Refund
         * @instance
         */
        Object.defineProperty(Bolt12Refund.prototype, "_secret", {
            get: $util.oneOfGetter($oneOfFields = ["secret"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Bolt12Refund _payerNote.
         * @member {"payerNote"|undefined} _payerNote
         * @memberof types.Bolt12Refund
         * @instance
         */
        Object.defineProperty(Bolt12Refund.prototype, "_payerNote", {
            get: $util.oneOfGetter($oneOfFields = ["payerNote"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Bolt12Refund _quantity.
         * @member {"quantity"|undefined} _quantity
         * @memberof types.Bolt12Refund
         * @instance
         */
        Object.defineProperty(Bolt12Refund.prototype, "_quantity", {
            get: $util.oneOfGetter($oneOfFields = ["quantity"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Bolt12Refund instance using the specified properties.
         * @function create
         * @memberof types.Bolt12Refund
         * @static
         * @param {types.IBolt12Refund=} [properties] Properties to set
         * @returns {types.Bolt12Refund} Bolt12Refund instance
         */
        Bolt12Refund.create = function create(properties) {
            return new Bolt12Refund(properties);
        };

        /**
         * Encodes the specified Bolt12Refund message. Does not implicitly {@link types.Bolt12Refund.verify|verify} messages.
         * @function encode
         * @memberof types.Bolt12Refund
         * @static
         * @param {types.IBolt12Refund} message Bolt12Refund message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt12Refund.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.hash);
            if (message.preimage != null && Object.hasOwnProperty.call(message, "preimage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.preimage);
            if (message.secret != null && Object.hasOwnProperty.call(message, "secret"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.secret);
            if (message.payerNote != null && Object.hasOwnProperty.call(message, "payerNote"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.payerNote);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.quantity);
            return writer;
        };

        /**
         * Encodes the specified Bolt12Refund message, length delimited. Does not implicitly {@link types.Bolt12Refund.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.Bolt12Refund
         * @static
         * @param {types.IBolt12Refund} message Bolt12Refund message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt12Refund.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bolt12Refund message from the specified reader or buffer.
         * @function decode
         * @memberof types.Bolt12Refund
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.Bolt12Refund} Bolt12Refund
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt12Refund.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.Bolt12Refund();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.hash = reader.string();
                        break;
                    }
                case 2: {
                        message.preimage = reader.string();
                        break;
                    }
                case 3: {
                        message.secret = reader.bytes();
                        break;
                    }
                case 5: {
                        message.payerNote = reader.string();
                        break;
                    }
                case 6: {
                        message.quantity = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bolt12Refund message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.Bolt12Refund
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.Bolt12Refund} Bolt12Refund
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt12Refund.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bolt12Refund message.
         * @function verify
         * @memberof types.Bolt12Refund
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bolt12Refund.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.hash != null && message.hasOwnProperty("hash")) {
                properties._hash = 1;
                if (!$util.isString(message.hash))
                    return "hash: string expected";
            }
            if (message.preimage != null && message.hasOwnProperty("preimage")) {
                properties._preimage = 1;
                if (!$util.isString(message.preimage))
                    return "preimage: string expected";
            }
            if (message.secret != null && message.hasOwnProperty("secret")) {
                properties._secret = 1;
                if (!(message.secret && typeof message.secret.length === "number" || $util.isString(message.secret)))
                    return "secret: buffer expected";
            }
            if (message.payerNote != null && message.hasOwnProperty("payerNote")) {
                properties._payerNote = 1;
                if (!$util.isString(message.payerNote))
                    return "payerNote: string expected";
            }
            if (message.quantity != null && message.hasOwnProperty("quantity")) {
                properties._quantity = 1;
                if (!$util.isInteger(message.quantity) && !(message.quantity && $util.isInteger(message.quantity.low) && $util.isInteger(message.quantity.high)))
                    return "quantity: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a Bolt12Refund message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.Bolt12Refund
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.Bolt12Refund} Bolt12Refund
         */
        Bolt12Refund.fromObject = function fromObject(object) {
            if (object instanceof $root.types.Bolt12Refund)
                return object;
            let message = new $root.types.Bolt12Refund();
            if (object.hash != null)
                message.hash = String(object.hash);
            if (object.preimage != null)
                message.preimage = String(object.preimage);
            if (object.secret != null)
                if (typeof object.secret === "string")
                    $util.base64.decode(object.secret, message.secret = $util.newBuffer($util.base64.length(object.secret)), 0);
                else if (object.secret.length >= 0)
                    message.secret = object.secret;
            if (object.payerNote != null)
                message.payerNote = String(object.payerNote);
            if (object.quantity != null)
                if ($util.Long)
                    (message.quantity = $util.Long.fromValue(object.quantity)).unsigned = true;
                else if (typeof object.quantity === "string")
                    message.quantity = parseInt(object.quantity, 10);
                else if (typeof object.quantity === "number")
                    message.quantity = object.quantity;
                else if (typeof object.quantity === "object")
                    message.quantity = new $util.LongBits(object.quantity.low >>> 0, object.quantity.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Bolt12Refund message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.Bolt12Refund
         * @static
         * @param {types.Bolt12Refund} message Bolt12Refund
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bolt12Refund.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.hash != null && message.hasOwnProperty("hash")) {
                object.hash = message.hash;
                if (options.oneofs)
                    object._hash = "hash";
            }
            if (message.preimage != null && message.hasOwnProperty("preimage")) {
                object.preimage = message.preimage;
                if (options.oneofs)
                    object._preimage = "preimage";
            }
            if (message.secret != null && message.hasOwnProperty("secret")) {
                object.secret = options.bytes === String ? $util.base64.encode(message.secret, 0, message.secret.length) : options.bytes === Array ? Array.prototype.slice.call(message.secret) : message.secret;
                if (options.oneofs)
                    object._secret = "secret";
            }
            if (message.payerNote != null && message.hasOwnProperty("payerNote")) {
                object.payerNote = message.payerNote;
                if (options.oneofs)
                    object._payerNote = "payerNote";
            }
            if (message.quantity != null && message.hasOwnProperty("quantity")) {
                if (typeof message.quantity === "number")
                    object.quantity = options.longs === String ? String(message.quantity) : message.quantity;
                else
                    object.quantity = options.longs === String ? $util.Long.prototype.toString.call(message.quantity) : options.longs === Number ? new $util.LongBits(message.quantity.low >>> 0, message.quantity.high >>> 0).toNumber(true) : message.quantity;
                if (options.oneofs)
                    object._quantity = "quantity";
            }
            return object;
        };

        /**
         * Converts this Bolt12Refund to JSON.
         * @function toJSON
         * @memberof types.Bolt12Refund
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bolt12Refund.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Bolt12Refund
         * @function getTypeUrl
         * @memberof types.Bolt12Refund
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Bolt12Refund.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.Bolt12Refund";
        };

        return Bolt12Refund;
    })();

    types.Spontaneous = (function() {

        /**
         * Properties of a Spontaneous.
         * @memberof types
         * @interface ISpontaneous
         * @property {string|null} [hash] Spontaneous hash
         * @property {string|null} [preimage] Spontaneous preimage
         */

        /**
         * Constructs a new Spontaneous.
         * @memberof types
         * @classdesc Represents a Spontaneous.
         * @implements ISpontaneous
         * @constructor
         * @param {types.ISpontaneous=} [properties] Properties to set
         */
        function Spontaneous(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Spontaneous hash.
         * @member {string} hash
         * @memberof types.Spontaneous
         * @instance
         */
        Spontaneous.prototype.hash = "";

        /**
         * Spontaneous preimage.
         * @member {string|null|undefined} preimage
         * @memberof types.Spontaneous
         * @instance
         */
        Spontaneous.prototype.preimage = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Spontaneous _preimage.
         * @member {"preimage"|undefined} _preimage
         * @memberof types.Spontaneous
         * @instance
         */
        Object.defineProperty(Spontaneous.prototype, "_preimage", {
            get: $util.oneOfGetter($oneOfFields = ["preimage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Spontaneous instance using the specified properties.
         * @function create
         * @memberof types.Spontaneous
         * @static
         * @param {types.ISpontaneous=} [properties] Properties to set
         * @returns {types.Spontaneous} Spontaneous instance
         */
        Spontaneous.create = function create(properties) {
            return new Spontaneous(properties);
        };

        /**
         * Encodes the specified Spontaneous message. Does not implicitly {@link types.Spontaneous.verify|verify} messages.
         * @function encode
         * @memberof types.Spontaneous
         * @static
         * @param {types.ISpontaneous} message Spontaneous message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Spontaneous.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.hash);
            if (message.preimage != null && Object.hasOwnProperty.call(message, "preimage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.preimage);
            return writer;
        };

        /**
         * Encodes the specified Spontaneous message, length delimited. Does not implicitly {@link types.Spontaneous.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.Spontaneous
         * @static
         * @param {types.ISpontaneous} message Spontaneous message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Spontaneous.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Spontaneous message from the specified reader or buffer.
         * @function decode
         * @memberof types.Spontaneous
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.Spontaneous} Spontaneous
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Spontaneous.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.Spontaneous();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.hash = reader.string();
                        break;
                    }
                case 2: {
                        message.preimage = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Spontaneous message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.Spontaneous
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.Spontaneous} Spontaneous
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Spontaneous.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Spontaneous message.
         * @function verify
         * @memberof types.Spontaneous
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Spontaneous.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.hash != null && message.hasOwnProperty("hash"))
                if (!$util.isString(message.hash))
                    return "hash: string expected";
            if (message.preimage != null && message.hasOwnProperty("preimage")) {
                properties._preimage = 1;
                if (!$util.isString(message.preimage))
                    return "preimage: string expected";
            }
            return null;
        };

        /**
         * Creates a Spontaneous message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.Spontaneous
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.Spontaneous} Spontaneous
         */
        Spontaneous.fromObject = function fromObject(object) {
            if (object instanceof $root.types.Spontaneous)
                return object;
            let message = new $root.types.Spontaneous();
            if (object.hash != null)
                message.hash = String(object.hash);
            if (object.preimage != null)
                message.preimage = String(object.preimage);
            return message;
        };

        /**
         * Creates a plain object from a Spontaneous message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.Spontaneous
         * @static
         * @param {types.Spontaneous} message Spontaneous
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Spontaneous.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.hash = "";
            if (message.hash != null && message.hasOwnProperty("hash"))
                object.hash = message.hash;
            if (message.preimage != null && message.hasOwnProperty("preimage")) {
                object.preimage = message.preimage;
                if (options.oneofs)
                    object._preimage = "preimage";
            }
            return object;
        };

        /**
         * Converts this Spontaneous to JSON.
         * @function toJSON
         * @memberof types.Spontaneous
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Spontaneous.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Spontaneous
         * @function getTypeUrl
         * @memberof types.Spontaneous
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Spontaneous.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.Spontaneous";
        };

        return Spontaneous;
    })();

    types.LSPFeeLimits = (function() {

        /**
         * Properties of a LSPFeeLimits.
         * @memberof types
         * @interface ILSPFeeLimits
         * @property {number|Long|null} [maxTotalOpeningFeeMsat] LSPFeeLimits maxTotalOpeningFeeMsat
         * @property {number|Long|null} [maxProportionalOpeningFeePpmMsat] LSPFeeLimits maxProportionalOpeningFeePpmMsat
         */

        /**
         * Constructs a new LSPFeeLimits.
         * @memberof types
         * @classdesc Represents a LSPFeeLimits.
         * @implements ILSPFeeLimits
         * @constructor
         * @param {types.ILSPFeeLimits=} [properties] Properties to set
         */
        function LSPFeeLimits(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LSPFeeLimits maxTotalOpeningFeeMsat.
         * @member {number|Long|null|undefined} maxTotalOpeningFeeMsat
         * @memberof types.LSPFeeLimits
         * @instance
         */
        LSPFeeLimits.prototype.maxTotalOpeningFeeMsat = null;

        /**
         * LSPFeeLimits maxProportionalOpeningFeePpmMsat.
         * @member {number|Long|null|undefined} maxProportionalOpeningFeePpmMsat
         * @memberof types.LSPFeeLimits
         * @instance
         */
        LSPFeeLimits.prototype.maxProportionalOpeningFeePpmMsat = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * LSPFeeLimits _maxTotalOpeningFeeMsat.
         * @member {"maxTotalOpeningFeeMsat"|undefined} _maxTotalOpeningFeeMsat
         * @memberof types.LSPFeeLimits
         * @instance
         */
        Object.defineProperty(LSPFeeLimits.prototype, "_maxTotalOpeningFeeMsat", {
            get: $util.oneOfGetter($oneOfFields = ["maxTotalOpeningFeeMsat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * LSPFeeLimits _maxProportionalOpeningFeePpmMsat.
         * @member {"maxProportionalOpeningFeePpmMsat"|undefined} _maxProportionalOpeningFeePpmMsat
         * @memberof types.LSPFeeLimits
         * @instance
         */
        Object.defineProperty(LSPFeeLimits.prototype, "_maxProportionalOpeningFeePpmMsat", {
            get: $util.oneOfGetter($oneOfFields = ["maxProportionalOpeningFeePpmMsat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new LSPFeeLimits instance using the specified properties.
         * @function create
         * @memberof types.LSPFeeLimits
         * @static
         * @param {types.ILSPFeeLimits=} [properties] Properties to set
         * @returns {types.LSPFeeLimits} LSPFeeLimits instance
         */
        LSPFeeLimits.create = function create(properties) {
            return new LSPFeeLimits(properties);
        };

        /**
         * Encodes the specified LSPFeeLimits message. Does not implicitly {@link types.LSPFeeLimits.verify|verify} messages.
         * @function encode
         * @memberof types.LSPFeeLimits
         * @static
         * @param {types.ILSPFeeLimits} message LSPFeeLimits message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LSPFeeLimits.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.maxTotalOpeningFeeMsat != null && Object.hasOwnProperty.call(message, "maxTotalOpeningFeeMsat"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.maxTotalOpeningFeeMsat);
            if (message.maxProportionalOpeningFeePpmMsat != null && Object.hasOwnProperty.call(message, "maxProportionalOpeningFeePpmMsat"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.maxProportionalOpeningFeePpmMsat);
            return writer;
        };

        /**
         * Encodes the specified LSPFeeLimits message, length delimited. Does not implicitly {@link types.LSPFeeLimits.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.LSPFeeLimits
         * @static
         * @param {types.ILSPFeeLimits} message LSPFeeLimits message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LSPFeeLimits.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LSPFeeLimits message from the specified reader or buffer.
         * @function decode
         * @memberof types.LSPFeeLimits
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.LSPFeeLimits} LSPFeeLimits
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LSPFeeLimits.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.LSPFeeLimits();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.maxTotalOpeningFeeMsat = reader.uint64();
                        break;
                    }
                case 2: {
                        message.maxProportionalOpeningFeePpmMsat = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LSPFeeLimits message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.LSPFeeLimits
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.LSPFeeLimits} LSPFeeLimits
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LSPFeeLimits.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LSPFeeLimits message.
         * @function verify
         * @memberof types.LSPFeeLimits
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LSPFeeLimits.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.maxTotalOpeningFeeMsat != null && message.hasOwnProperty("maxTotalOpeningFeeMsat")) {
                properties._maxTotalOpeningFeeMsat = 1;
                if (!$util.isInteger(message.maxTotalOpeningFeeMsat) && !(message.maxTotalOpeningFeeMsat && $util.isInteger(message.maxTotalOpeningFeeMsat.low) && $util.isInteger(message.maxTotalOpeningFeeMsat.high)))
                    return "maxTotalOpeningFeeMsat: integer|Long expected";
            }
            if (message.maxProportionalOpeningFeePpmMsat != null && message.hasOwnProperty("maxProportionalOpeningFeePpmMsat")) {
                properties._maxProportionalOpeningFeePpmMsat = 1;
                if (!$util.isInteger(message.maxProportionalOpeningFeePpmMsat) && !(message.maxProportionalOpeningFeePpmMsat && $util.isInteger(message.maxProportionalOpeningFeePpmMsat.low) && $util.isInteger(message.maxProportionalOpeningFeePpmMsat.high)))
                    return "maxProportionalOpeningFeePpmMsat: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a LSPFeeLimits message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.LSPFeeLimits
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.LSPFeeLimits} LSPFeeLimits
         */
        LSPFeeLimits.fromObject = function fromObject(object) {
            if (object instanceof $root.types.LSPFeeLimits)
                return object;
            let message = new $root.types.LSPFeeLimits();
            if (object.maxTotalOpeningFeeMsat != null)
                if ($util.Long)
                    (message.maxTotalOpeningFeeMsat = $util.Long.fromValue(object.maxTotalOpeningFeeMsat)).unsigned = true;
                else if (typeof object.maxTotalOpeningFeeMsat === "string")
                    message.maxTotalOpeningFeeMsat = parseInt(object.maxTotalOpeningFeeMsat, 10);
                else if (typeof object.maxTotalOpeningFeeMsat === "number")
                    message.maxTotalOpeningFeeMsat = object.maxTotalOpeningFeeMsat;
                else if (typeof object.maxTotalOpeningFeeMsat === "object")
                    message.maxTotalOpeningFeeMsat = new $util.LongBits(object.maxTotalOpeningFeeMsat.low >>> 0, object.maxTotalOpeningFeeMsat.high >>> 0).toNumber(true);
            if (object.maxProportionalOpeningFeePpmMsat != null)
                if ($util.Long)
                    (message.maxProportionalOpeningFeePpmMsat = $util.Long.fromValue(object.maxProportionalOpeningFeePpmMsat)).unsigned = true;
                else if (typeof object.maxProportionalOpeningFeePpmMsat === "string")
                    message.maxProportionalOpeningFeePpmMsat = parseInt(object.maxProportionalOpeningFeePpmMsat, 10);
                else if (typeof object.maxProportionalOpeningFeePpmMsat === "number")
                    message.maxProportionalOpeningFeePpmMsat = object.maxProportionalOpeningFeePpmMsat;
                else if (typeof object.maxProportionalOpeningFeePpmMsat === "object")
                    message.maxProportionalOpeningFeePpmMsat = new $util.LongBits(object.maxProportionalOpeningFeePpmMsat.low >>> 0, object.maxProportionalOpeningFeePpmMsat.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a LSPFeeLimits message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.LSPFeeLimits
         * @static
         * @param {types.LSPFeeLimits} message LSPFeeLimits
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LSPFeeLimits.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.maxTotalOpeningFeeMsat != null && message.hasOwnProperty("maxTotalOpeningFeeMsat")) {
                if (typeof message.maxTotalOpeningFeeMsat === "number")
                    object.maxTotalOpeningFeeMsat = options.longs === String ? String(message.maxTotalOpeningFeeMsat) : message.maxTotalOpeningFeeMsat;
                else
                    object.maxTotalOpeningFeeMsat = options.longs === String ? $util.Long.prototype.toString.call(message.maxTotalOpeningFeeMsat) : options.longs === Number ? new $util.LongBits(message.maxTotalOpeningFeeMsat.low >>> 0, message.maxTotalOpeningFeeMsat.high >>> 0).toNumber(true) : message.maxTotalOpeningFeeMsat;
                if (options.oneofs)
                    object._maxTotalOpeningFeeMsat = "maxTotalOpeningFeeMsat";
            }
            if (message.maxProportionalOpeningFeePpmMsat != null && message.hasOwnProperty("maxProportionalOpeningFeePpmMsat")) {
                if (typeof message.maxProportionalOpeningFeePpmMsat === "number")
                    object.maxProportionalOpeningFeePpmMsat = options.longs === String ? String(message.maxProportionalOpeningFeePpmMsat) : message.maxProportionalOpeningFeePpmMsat;
                else
                    object.maxProportionalOpeningFeePpmMsat = options.longs === String ? $util.Long.prototype.toString.call(message.maxProportionalOpeningFeePpmMsat) : options.longs === Number ? new $util.LongBits(message.maxProportionalOpeningFeePpmMsat.low >>> 0, message.maxProportionalOpeningFeePpmMsat.high >>> 0).toNumber(true) : message.maxProportionalOpeningFeePpmMsat;
                if (options.oneofs)
                    object._maxProportionalOpeningFeePpmMsat = "maxProportionalOpeningFeePpmMsat";
            }
            return object;
        };

        /**
         * Converts this LSPFeeLimits to JSON.
         * @function toJSON
         * @memberof types.LSPFeeLimits
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LSPFeeLimits.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LSPFeeLimits
         * @function getTypeUrl
         * @memberof types.LSPFeeLimits
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LSPFeeLimits.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.LSPFeeLimits";
        };

        return LSPFeeLimits;
    })();

    /**
     * PaymentDirection enum.
     * @name types.PaymentDirection
     * @enum {number}
     * @property {number} INBOUND=0 INBOUND value
     * @property {number} OUTBOUND=1 OUTBOUND value
     */
    types.PaymentDirection = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INBOUND"] = 0;
        values[valuesById[1] = "OUTBOUND"] = 1;
        return values;
    })();

    /**
     * PaymentStatus enum.
     * @name types.PaymentStatus
     * @enum {number}
     * @property {number} PENDING=0 PENDING value
     * @property {number} SUCCEEDED=1 SUCCEEDED value
     * @property {number} FAILED=2 FAILED value
     */
    types.PaymentStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PENDING"] = 0;
        values[valuesById[1] = "SUCCEEDED"] = 1;
        values[valuesById[2] = "FAILED"] = 2;
        return values;
    })();

    types.ForwardedPayment = (function() {

        /**
         * Properties of a ForwardedPayment.
         * @memberof types
         * @interface IForwardedPayment
         * @property {string|null} [prevChannelId] ForwardedPayment prevChannelId
         * @property {string|null} [nextChannelId] ForwardedPayment nextChannelId
         * @property {string|null} [prevUserChannelId] ForwardedPayment prevUserChannelId
         * @property {string|null} [prevNodeId] ForwardedPayment prevNodeId
         * @property {string|null} [nextNodeId] ForwardedPayment nextNodeId
         * @property {string|null} [nextUserChannelId] ForwardedPayment nextUserChannelId
         * @property {number|Long|null} [totalFeeEarnedMsat] ForwardedPayment totalFeeEarnedMsat
         * @property {number|Long|null} [skimmedFeeMsat] ForwardedPayment skimmedFeeMsat
         * @property {boolean|null} [claimFromOnchainTx] ForwardedPayment claimFromOnchainTx
         * @property {number|Long|null} [outboundAmountForwardedMsat] ForwardedPayment outboundAmountForwardedMsat
         */

        /**
         * Constructs a new ForwardedPayment.
         * @memberof types
         * @classdesc Represents a ForwardedPayment.
         * @implements IForwardedPayment
         * @constructor
         * @param {types.IForwardedPayment=} [properties] Properties to set
         */
        function ForwardedPayment(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ForwardedPayment prevChannelId.
         * @member {string} prevChannelId
         * @memberof types.ForwardedPayment
         * @instance
         */
        ForwardedPayment.prototype.prevChannelId = "";

        /**
         * ForwardedPayment nextChannelId.
         * @member {string} nextChannelId
         * @memberof types.ForwardedPayment
         * @instance
         */
        ForwardedPayment.prototype.nextChannelId = "";

        /**
         * ForwardedPayment prevUserChannelId.
         * @member {string} prevUserChannelId
         * @memberof types.ForwardedPayment
         * @instance
         */
        ForwardedPayment.prototype.prevUserChannelId = "";

        /**
         * ForwardedPayment prevNodeId.
         * @member {string} prevNodeId
         * @memberof types.ForwardedPayment
         * @instance
         */
        ForwardedPayment.prototype.prevNodeId = "";

        /**
         * ForwardedPayment nextNodeId.
         * @member {string} nextNodeId
         * @memberof types.ForwardedPayment
         * @instance
         */
        ForwardedPayment.prototype.nextNodeId = "";

        /**
         * ForwardedPayment nextUserChannelId.
         * @member {string|null|undefined} nextUserChannelId
         * @memberof types.ForwardedPayment
         * @instance
         */
        ForwardedPayment.prototype.nextUserChannelId = null;

        /**
         * ForwardedPayment totalFeeEarnedMsat.
         * @member {number|Long|null|undefined} totalFeeEarnedMsat
         * @memberof types.ForwardedPayment
         * @instance
         */
        ForwardedPayment.prototype.totalFeeEarnedMsat = null;

        /**
         * ForwardedPayment skimmedFeeMsat.
         * @member {number|Long|null|undefined} skimmedFeeMsat
         * @memberof types.ForwardedPayment
         * @instance
         */
        ForwardedPayment.prototype.skimmedFeeMsat = null;

        /**
         * ForwardedPayment claimFromOnchainTx.
         * @member {boolean} claimFromOnchainTx
         * @memberof types.ForwardedPayment
         * @instance
         */
        ForwardedPayment.prototype.claimFromOnchainTx = false;

        /**
         * ForwardedPayment outboundAmountForwardedMsat.
         * @member {number|Long|null|undefined} outboundAmountForwardedMsat
         * @memberof types.ForwardedPayment
         * @instance
         */
        ForwardedPayment.prototype.outboundAmountForwardedMsat = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * ForwardedPayment _nextUserChannelId.
         * @member {"nextUserChannelId"|undefined} _nextUserChannelId
         * @memberof types.ForwardedPayment
         * @instance
         */
        Object.defineProperty(ForwardedPayment.prototype, "_nextUserChannelId", {
            get: $util.oneOfGetter($oneOfFields = ["nextUserChannelId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ForwardedPayment _totalFeeEarnedMsat.
         * @member {"totalFeeEarnedMsat"|undefined} _totalFeeEarnedMsat
         * @memberof types.ForwardedPayment
         * @instance
         */
        Object.defineProperty(ForwardedPayment.prototype, "_totalFeeEarnedMsat", {
            get: $util.oneOfGetter($oneOfFields = ["totalFeeEarnedMsat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ForwardedPayment _skimmedFeeMsat.
         * @member {"skimmedFeeMsat"|undefined} _skimmedFeeMsat
         * @memberof types.ForwardedPayment
         * @instance
         */
        Object.defineProperty(ForwardedPayment.prototype, "_skimmedFeeMsat", {
            get: $util.oneOfGetter($oneOfFields = ["skimmedFeeMsat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ForwardedPayment _outboundAmountForwardedMsat.
         * @member {"outboundAmountForwardedMsat"|undefined} _outboundAmountForwardedMsat
         * @memberof types.ForwardedPayment
         * @instance
         */
        Object.defineProperty(ForwardedPayment.prototype, "_outboundAmountForwardedMsat", {
            get: $util.oneOfGetter($oneOfFields = ["outboundAmountForwardedMsat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ForwardedPayment instance using the specified properties.
         * @function create
         * @memberof types.ForwardedPayment
         * @static
         * @param {types.IForwardedPayment=} [properties] Properties to set
         * @returns {types.ForwardedPayment} ForwardedPayment instance
         */
        ForwardedPayment.create = function create(properties) {
            return new ForwardedPayment(properties);
        };

        /**
         * Encodes the specified ForwardedPayment message. Does not implicitly {@link types.ForwardedPayment.verify|verify} messages.
         * @function encode
         * @memberof types.ForwardedPayment
         * @static
         * @param {types.IForwardedPayment} message ForwardedPayment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForwardedPayment.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.prevChannelId != null && Object.hasOwnProperty.call(message, "prevChannelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.prevChannelId);
            if (message.nextChannelId != null && Object.hasOwnProperty.call(message, "nextChannelId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nextChannelId);
            if (message.prevUserChannelId != null && Object.hasOwnProperty.call(message, "prevUserChannelId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.prevUserChannelId);
            if (message.nextUserChannelId != null && Object.hasOwnProperty.call(message, "nextUserChannelId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.nextUserChannelId);
            if (message.totalFeeEarnedMsat != null && Object.hasOwnProperty.call(message, "totalFeeEarnedMsat"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.totalFeeEarnedMsat);
            if (message.skimmedFeeMsat != null && Object.hasOwnProperty.call(message, "skimmedFeeMsat"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.skimmedFeeMsat);
            if (message.claimFromOnchainTx != null && Object.hasOwnProperty.call(message, "claimFromOnchainTx"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.claimFromOnchainTx);
            if (message.outboundAmountForwardedMsat != null && Object.hasOwnProperty.call(message, "outboundAmountForwardedMsat"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.outboundAmountForwardedMsat);
            if (message.prevNodeId != null && Object.hasOwnProperty.call(message, "prevNodeId"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.prevNodeId);
            if (message.nextNodeId != null && Object.hasOwnProperty.call(message, "nextNodeId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.nextNodeId);
            return writer;
        };

        /**
         * Encodes the specified ForwardedPayment message, length delimited. Does not implicitly {@link types.ForwardedPayment.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.ForwardedPayment
         * @static
         * @param {types.IForwardedPayment} message ForwardedPayment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForwardedPayment.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ForwardedPayment message from the specified reader or buffer.
         * @function decode
         * @memberof types.ForwardedPayment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.ForwardedPayment} ForwardedPayment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForwardedPayment.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.ForwardedPayment();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.prevChannelId = reader.string();
                        break;
                    }
                case 2: {
                        message.nextChannelId = reader.string();
                        break;
                    }
                case 3: {
                        message.prevUserChannelId = reader.string();
                        break;
                    }
                case 9: {
                        message.prevNodeId = reader.string();
                        break;
                    }
                case 10: {
                        message.nextNodeId = reader.string();
                        break;
                    }
                case 4: {
                        message.nextUserChannelId = reader.string();
                        break;
                    }
                case 5: {
                        message.totalFeeEarnedMsat = reader.uint64();
                        break;
                    }
                case 6: {
                        message.skimmedFeeMsat = reader.uint64();
                        break;
                    }
                case 7: {
                        message.claimFromOnchainTx = reader.bool();
                        break;
                    }
                case 8: {
                        message.outboundAmountForwardedMsat = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ForwardedPayment message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.ForwardedPayment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.ForwardedPayment} ForwardedPayment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForwardedPayment.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ForwardedPayment message.
         * @function verify
         * @memberof types.ForwardedPayment
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ForwardedPayment.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.prevChannelId != null && message.hasOwnProperty("prevChannelId"))
                if (!$util.isString(message.prevChannelId))
                    return "prevChannelId: string expected";
            if (message.nextChannelId != null && message.hasOwnProperty("nextChannelId"))
                if (!$util.isString(message.nextChannelId))
                    return "nextChannelId: string expected";
            if (message.prevUserChannelId != null && message.hasOwnProperty("prevUserChannelId"))
                if (!$util.isString(message.prevUserChannelId))
                    return "prevUserChannelId: string expected";
            if (message.prevNodeId != null && message.hasOwnProperty("prevNodeId"))
                if (!$util.isString(message.prevNodeId))
                    return "prevNodeId: string expected";
            if (message.nextNodeId != null && message.hasOwnProperty("nextNodeId"))
                if (!$util.isString(message.nextNodeId))
                    return "nextNodeId: string expected";
            if (message.nextUserChannelId != null && message.hasOwnProperty("nextUserChannelId")) {
                properties._nextUserChannelId = 1;
                if (!$util.isString(message.nextUserChannelId))
                    return "nextUserChannelId: string expected";
            }
            if (message.totalFeeEarnedMsat != null && message.hasOwnProperty("totalFeeEarnedMsat")) {
                properties._totalFeeEarnedMsat = 1;
                if (!$util.isInteger(message.totalFeeEarnedMsat) && !(message.totalFeeEarnedMsat && $util.isInteger(message.totalFeeEarnedMsat.low) && $util.isInteger(message.totalFeeEarnedMsat.high)))
                    return "totalFeeEarnedMsat: integer|Long expected";
            }
            if (message.skimmedFeeMsat != null && message.hasOwnProperty("skimmedFeeMsat")) {
                properties._skimmedFeeMsat = 1;
                if (!$util.isInteger(message.skimmedFeeMsat) && !(message.skimmedFeeMsat && $util.isInteger(message.skimmedFeeMsat.low) && $util.isInteger(message.skimmedFeeMsat.high)))
                    return "skimmedFeeMsat: integer|Long expected";
            }
            if (message.claimFromOnchainTx != null && message.hasOwnProperty("claimFromOnchainTx"))
                if (typeof message.claimFromOnchainTx !== "boolean")
                    return "claimFromOnchainTx: boolean expected";
            if (message.outboundAmountForwardedMsat != null && message.hasOwnProperty("outboundAmountForwardedMsat")) {
                properties._outboundAmountForwardedMsat = 1;
                if (!$util.isInteger(message.outboundAmountForwardedMsat) && !(message.outboundAmountForwardedMsat && $util.isInteger(message.outboundAmountForwardedMsat.low) && $util.isInteger(message.outboundAmountForwardedMsat.high)))
                    return "outboundAmountForwardedMsat: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a ForwardedPayment message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.ForwardedPayment
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.ForwardedPayment} ForwardedPayment
         */
        ForwardedPayment.fromObject = function fromObject(object) {
            if (object instanceof $root.types.ForwardedPayment)
                return object;
            let message = new $root.types.ForwardedPayment();
            if (object.prevChannelId != null)
                message.prevChannelId = String(object.prevChannelId);
            if (object.nextChannelId != null)
                message.nextChannelId = String(object.nextChannelId);
            if (object.prevUserChannelId != null)
                message.prevUserChannelId = String(object.prevUserChannelId);
            if (object.prevNodeId != null)
                message.prevNodeId = String(object.prevNodeId);
            if (object.nextNodeId != null)
                message.nextNodeId = String(object.nextNodeId);
            if (object.nextUserChannelId != null)
                message.nextUserChannelId = String(object.nextUserChannelId);
            if (object.totalFeeEarnedMsat != null)
                if ($util.Long)
                    (message.totalFeeEarnedMsat = $util.Long.fromValue(object.totalFeeEarnedMsat)).unsigned = true;
                else if (typeof object.totalFeeEarnedMsat === "string")
                    message.totalFeeEarnedMsat = parseInt(object.totalFeeEarnedMsat, 10);
                else if (typeof object.totalFeeEarnedMsat === "number")
                    message.totalFeeEarnedMsat = object.totalFeeEarnedMsat;
                else if (typeof object.totalFeeEarnedMsat === "object")
                    message.totalFeeEarnedMsat = new $util.LongBits(object.totalFeeEarnedMsat.low >>> 0, object.totalFeeEarnedMsat.high >>> 0).toNumber(true);
            if (object.skimmedFeeMsat != null)
                if ($util.Long)
                    (message.skimmedFeeMsat = $util.Long.fromValue(object.skimmedFeeMsat)).unsigned = true;
                else if (typeof object.skimmedFeeMsat === "string")
                    message.skimmedFeeMsat = parseInt(object.skimmedFeeMsat, 10);
                else if (typeof object.skimmedFeeMsat === "number")
                    message.skimmedFeeMsat = object.skimmedFeeMsat;
                else if (typeof object.skimmedFeeMsat === "object")
                    message.skimmedFeeMsat = new $util.LongBits(object.skimmedFeeMsat.low >>> 0, object.skimmedFeeMsat.high >>> 0).toNumber(true);
            if (object.claimFromOnchainTx != null)
                message.claimFromOnchainTx = Boolean(object.claimFromOnchainTx);
            if (object.outboundAmountForwardedMsat != null)
                if ($util.Long)
                    (message.outboundAmountForwardedMsat = $util.Long.fromValue(object.outboundAmountForwardedMsat)).unsigned = true;
                else if (typeof object.outboundAmountForwardedMsat === "string")
                    message.outboundAmountForwardedMsat = parseInt(object.outboundAmountForwardedMsat, 10);
                else if (typeof object.outboundAmountForwardedMsat === "number")
                    message.outboundAmountForwardedMsat = object.outboundAmountForwardedMsat;
                else if (typeof object.outboundAmountForwardedMsat === "object")
                    message.outboundAmountForwardedMsat = new $util.LongBits(object.outboundAmountForwardedMsat.low >>> 0, object.outboundAmountForwardedMsat.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a ForwardedPayment message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.ForwardedPayment
         * @static
         * @param {types.ForwardedPayment} message ForwardedPayment
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ForwardedPayment.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.prevChannelId = "";
                object.nextChannelId = "";
                object.prevUserChannelId = "";
                object.claimFromOnchainTx = false;
                object.prevNodeId = "";
                object.nextNodeId = "";
            }
            if (message.prevChannelId != null && message.hasOwnProperty("prevChannelId"))
                object.prevChannelId = message.prevChannelId;
            if (message.nextChannelId != null && message.hasOwnProperty("nextChannelId"))
                object.nextChannelId = message.nextChannelId;
            if (message.prevUserChannelId != null && message.hasOwnProperty("prevUserChannelId"))
                object.prevUserChannelId = message.prevUserChannelId;
            if (message.nextUserChannelId != null && message.hasOwnProperty("nextUserChannelId")) {
                object.nextUserChannelId = message.nextUserChannelId;
                if (options.oneofs)
                    object._nextUserChannelId = "nextUserChannelId";
            }
            if (message.totalFeeEarnedMsat != null && message.hasOwnProperty("totalFeeEarnedMsat")) {
                if (typeof message.totalFeeEarnedMsat === "number")
                    object.totalFeeEarnedMsat = options.longs === String ? String(message.totalFeeEarnedMsat) : message.totalFeeEarnedMsat;
                else
                    object.totalFeeEarnedMsat = options.longs === String ? $util.Long.prototype.toString.call(message.totalFeeEarnedMsat) : options.longs === Number ? new $util.LongBits(message.totalFeeEarnedMsat.low >>> 0, message.totalFeeEarnedMsat.high >>> 0).toNumber(true) : message.totalFeeEarnedMsat;
                if (options.oneofs)
                    object._totalFeeEarnedMsat = "totalFeeEarnedMsat";
            }
            if (message.skimmedFeeMsat != null && message.hasOwnProperty("skimmedFeeMsat")) {
                if (typeof message.skimmedFeeMsat === "number")
                    object.skimmedFeeMsat = options.longs === String ? String(message.skimmedFeeMsat) : message.skimmedFeeMsat;
                else
                    object.skimmedFeeMsat = options.longs === String ? $util.Long.prototype.toString.call(message.skimmedFeeMsat) : options.longs === Number ? new $util.LongBits(message.skimmedFeeMsat.low >>> 0, message.skimmedFeeMsat.high >>> 0).toNumber(true) : message.skimmedFeeMsat;
                if (options.oneofs)
                    object._skimmedFeeMsat = "skimmedFeeMsat";
            }
            if (message.claimFromOnchainTx != null && message.hasOwnProperty("claimFromOnchainTx"))
                object.claimFromOnchainTx = message.claimFromOnchainTx;
            if (message.outboundAmountForwardedMsat != null && message.hasOwnProperty("outboundAmountForwardedMsat")) {
                if (typeof message.outboundAmountForwardedMsat === "number")
                    object.outboundAmountForwardedMsat = options.longs === String ? String(message.outboundAmountForwardedMsat) : message.outboundAmountForwardedMsat;
                else
                    object.outboundAmountForwardedMsat = options.longs === String ? $util.Long.prototype.toString.call(message.outboundAmountForwardedMsat) : options.longs === Number ? new $util.LongBits(message.outboundAmountForwardedMsat.low >>> 0, message.outboundAmountForwardedMsat.high >>> 0).toNumber(true) : message.outboundAmountForwardedMsat;
                if (options.oneofs)
                    object._outboundAmountForwardedMsat = "outboundAmountForwardedMsat";
            }
            if (message.prevNodeId != null && message.hasOwnProperty("prevNodeId"))
                object.prevNodeId = message.prevNodeId;
            if (message.nextNodeId != null && message.hasOwnProperty("nextNodeId"))
                object.nextNodeId = message.nextNodeId;
            return object;
        };

        /**
         * Converts this ForwardedPayment to JSON.
         * @function toJSON
         * @memberof types.ForwardedPayment
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ForwardedPayment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ForwardedPayment
         * @function getTypeUrl
         * @memberof types.ForwardedPayment
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ForwardedPayment.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.ForwardedPayment";
        };

        return ForwardedPayment;
    })();

    types.Channel = (function() {

        /**
         * Properties of a Channel.
         * @memberof types
         * @interface IChannel
         * @property {string|null} [channelId] Channel channelId
         * @property {string|null} [counterpartyNodeId] Channel counterpartyNodeId
         * @property {types.IOutPoint|null} [fundingTxo] Channel fundingTxo
         * @property {string|null} [userChannelId] Channel userChannelId
         * @property {number|Long|null} [unspendablePunishmentReserve] Channel unspendablePunishmentReserve
         * @property {number|Long|null} [channelValueSats] Channel channelValueSats
         * @property {number|null} [feerateSatPer_1000Weight] Channel feerateSatPer_1000Weight
         * @property {number|Long|null} [outboundCapacityMsat] Channel outboundCapacityMsat
         * @property {number|Long|null} [inboundCapacityMsat] Channel inboundCapacityMsat
         * @property {number|null} [confirmationsRequired] Channel confirmationsRequired
         * @property {number|null} [confirmations] Channel confirmations
         * @property {boolean|null} [isOutbound] Channel isOutbound
         * @property {boolean|null} [isChannelReady] Channel isChannelReady
         * @property {boolean|null} [isUsable] Channel isUsable
         * @property {boolean|null} [isAnnounced] Channel isAnnounced
         * @property {types.IChannelConfig|null} [channelConfig] Channel channelConfig
         * @property {number|Long|null} [nextOutboundHtlcLimitMsat] Channel nextOutboundHtlcLimitMsat
         * @property {number|Long|null} [nextOutboundHtlcMinimumMsat] Channel nextOutboundHtlcMinimumMsat
         * @property {number|null} [forceCloseSpendDelay] Channel forceCloseSpendDelay
         * @property {number|Long|null} [counterpartyOutboundHtlcMinimumMsat] Channel counterpartyOutboundHtlcMinimumMsat
         * @property {number|Long|null} [counterpartyOutboundHtlcMaximumMsat] Channel counterpartyOutboundHtlcMaximumMsat
         * @property {number|Long|null} [counterpartyUnspendablePunishmentReserve] Channel counterpartyUnspendablePunishmentReserve
         * @property {number|null} [counterpartyForwardingInfoFeeBaseMsat] Channel counterpartyForwardingInfoFeeBaseMsat
         * @property {number|null} [counterpartyForwardingInfoFeeProportionalMillionths] Channel counterpartyForwardingInfoFeeProportionalMillionths
         * @property {number|null} [counterpartyForwardingInfoCltvExpiryDelta] Channel counterpartyForwardingInfoCltvExpiryDelta
         */

        /**
         * Constructs a new Channel.
         * @memberof types
         * @classdesc Represents a Channel.
         * @implements IChannel
         * @constructor
         * @param {types.IChannel=} [properties] Properties to set
         */
        function Channel(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Channel channelId.
         * @member {string} channelId
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.channelId = "";

        /**
         * Channel counterpartyNodeId.
         * @member {string} counterpartyNodeId
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.counterpartyNodeId = "";

        /**
         * Channel fundingTxo.
         * @member {types.IOutPoint|null|undefined} fundingTxo
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.fundingTxo = null;

        /**
         * Channel userChannelId.
         * @member {string} userChannelId
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.userChannelId = "";

        /**
         * Channel unspendablePunishmentReserve.
         * @member {number|Long|null|undefined} unspendablePunishmentReserve
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.unspendablePunishmentReserve = null;

        /**
         * Channel channelValueSats.
         * @member {number|Long} channelValueSats
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.channelValueSats = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Channel feerateSatPer_1000Weight.
         * @member {number} feerateSatPer_1000Weight
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.feerateSatPer_1000Weight = 0;

        /**
         * Channel outboundCapacityMsat.
         * @member {number|Long} outboundCapacityMsat
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.outboundCapacityMsat = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Channel inboundCapacityMsat.
         * @member {number|Long} inboundCapacityMsat
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.inboundCapacityMsat = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Channel confirmationsRequired.
         * @member {number|null|undefined} confirmationsRequired
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.confirmationsRequired = null;

        /**
         * Channel confirmations.
         * @member {number|null|undefined} confirmations
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.confirmations = null;

        /**
         * Channel isOutbound.
         * @member {boolean} isOutbound
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.isOutbound = false;

        /**
         * Channel isChannelReady.
         * @member {boolean} isChannelReady
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.isChannelReady = false;

        /**
         * Channel isUsable.
         * @member {boolean} isUsable
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.isUsable = false;

        /**
         * Channel isAnnounced.
         * @member {boolean} isAnnounced
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.isAnnounced = false;

        /**
         * Channel channelConfig.
         * @member {types.IChannelConfig|null|undefined} channelConfig
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.channelConfig = null;

        /**
         * Channel nextOutboundHtlcLimitMsat.
         * @member {number|Long} nextOutboundHtlcLimitMsat
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.nextOutboundHtlcLimitMsat = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Channel nextOutboundHtlcMinimumMsat.
         * @member {number|Long} nextOutboundHtlcMinimumMsat
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.nextOutboundHtlcMinimumMsat = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Channel forceCloseSpendDelay.
         * @member {number|null|undefined} forceCloseSpendDelay
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.forceCloseSpendDelay = null;

        /**
         * Channel counterpartyOutboundHtlcMinimumMsat.
         * @member {number|Long|null|undefined} counterpartyOutboundHtlcMinimumMsat
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.counterpartyOutboundHtlcMinimumMsat = null;

        /**
         * Channel counterpartyOutboundHtlcMaximumMsat.
         * @member {number|Long|null|undefined} counterpartyOutboundHtlcMaximumMsat
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.counterpartyOutboundHtlcMaximumMsat = null;

        /**
         * Channel counterpartyUnspendablePunishmentReserve.
         * @member {number|Long} counterpartyUnspendablePunishmentReserve
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.counterpartyUnspendablePunishmentReserve = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Channel counterpartyForwardingInfoFeeBaseMsat.
         * @member {number|null|undefined} counterpartyForwardingInfoFeeBaseMsat
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.counterpartyForwardingInfoFeeBaseMsat = null;

        /**
         * Channel counterpartyForwardingInfoFeeProportionalMillionths.
         * @member {number|null|undefined} counterpartyForwardingInfoFeeProportionalMillionths
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.counterpartyForwardingInfoFeeProportionalMillionths = null;

        /**
         * Channel counterpartyForwardingInfoCltvExpiryDelta.
         * @member {number|null|undefined} counterpartyForwardingInfoCltvExpiryDelta
         * @memberof types.Channel
         * @instance
         */
        Channel.prototype.counterpartyForwardingInfoCltvExpiryDelta = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Channel _fundingTxo.
         * @member {"fundingTxo"|undefined} _fundingTxo
         * @memberof types.Channel
         * @instance
         */
        Object.defineProperty(Channel.prototype, "_fundingTxo", {
            get: $util.oneOfGetter($oneOfFields = ["fundingTxo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Channel _unspendablePunishmentReserve.
         * @member {"unspendablePunishmentReserve"|undefined} _unspendablePunishmentReserve
         * @memberof types.Channel
         * @instance
         */
        Object.defineProperty(Channel.prototype, "_unspendablePunishmentReserve", {
            get: $util.oneOfGetter($oneOfFields = ["unspendablePunishmentReserve"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Channel _confirmationsRequired.
         * @member {"confirmationsRequired"|undefined} _confirmationsRequired
         * @memberof types.Channel
         * @instance
         */
        Object.defineProperty(Channel.prototype, "_confirmationsRequired", {
            get: $util.oneOfGetter($oneOfFields = ["confirmationsRequired"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Channel _confirmations.
         * @member {"confirmations"|undefined} _confirmations
         * @memberof types.Channel
         * @instance
         */
        Object.defineProperty(Channel.prototype, "_confirmations", {
            get: $util.oneOfGetter($oneOfFields = ["confirmations"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Channel _forceCloseSpendDelay.
         * @member {"forceCloseSpendDelay"|undefined} _forceCloseSpendDelay
         * @memberof types.Channel
         * @instance
         */
        Object.defineProperty(Channel.prototype, "_forceCloseSpendDelay", {
            get: $util.oneOfGetter($oneOfFields = ["forceCloseSpendDelay"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Channel _counterpartyOutboundHtlcMinimumMsat.
         * @member {"counterpartyOutboundHtlcMinimumMsat"|undefined} _counterpartyOutboundHtlcMinimumMsat
         * @memberof types.Channel
         * @instance
         */
        Object.defineProperty(Channel.prototype, "_counterpartyOutboundHtlcMinimumMsat", {
            get: $util.oneOfGetter($oneOfFields = ["counterpartyOutboundHtlcMinimumMsat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Channel _counterpartyOutboundHtlcMaximumMsat.
         * @member {"counterpartyOutboundHtlcMaximumMsat"|undefined} _counterpartyOutboundHtlcMaximumMsat
         * @memberof types.Channel
         * @instance
         */
        Object.defineProperty(Channel.prototype, "_counterpartyOutboundHtlcMaximumMsat", {
            get: $util.oneOfGetter($oneOfFields = ["counterpartyOutboundHtlcMaximumMsat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Channel _counterpartyForwardingInfoFeeBaseMsat.
         * @member {"counterpartyForwardingInfoFeeBaseMsat"|undefined} _counterpartyForwardingInfoFeeBaseMsat
         * @memberof types.Channel
         * @instance
         */
        Object.defineProperty(Channel.prototype, "_counterpartyForwardingInfoFeeBaseMsat", {
            get: $util.oneOfGetter($oneOfFields = ["counterpartyForwardingInfoFeeBaseMsat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Channel _counterpartyForwardingInfoFeeProportionalMillionths.
         * @member {"counterpartyForwardingInfoFeeProportionalMillionths"|undefined} _counterpartyForwardingInfoFeeProportionalMillionths
         * @memberof types.Channel
         * @instance
         */
        Object.defineProperty(Channel.prototype, "_counterpartyForwardingInfoFeeProportionalMillionths", {
            get: $util.oneOfGetter($oneOfFields = ["counterpartyForwardingInfoFeeProportionalMillionths"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Channel _counterpartyForwardingInfoCltvExpiryDelta.
         * @member {"counterpartyForwardingInfoCltvExpiryDelta"|undefined} _counterpartyForwardingInfoCltvExpiryDelta
         * @memberof types.Channel
         * @instance
         */
        Object.defineProperty(Channel.prototype, "_counterpartyForwardingInfoCltvExpiryDelta", {
            get: $util.oneOfGetter($oneOfFields = ["counterpartyForwardingInfoCltvExpiryDelta"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Channel instance using the specified properties.
         * @function create
         * @memberof types.Channel
         * @static
         * @param {types.IChannel=} [properties] Properties to set
         * @returns {types.Channel} Channel instance
         */
        Channel.create = function create(properties) {
            return new Channel(properties);
        };

        /**
         * Encodes the specified Channel message. Does not implicitly {@link types.Channel.verify|verify} messages.
         * @function encode
         * @memberof types.Channel
         * @static
         * @param {types.IChannel} message Channel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Channel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.counterpartyNodeId != null && Object.hasOwnProperty.call(message, "counterpartyNodeId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.counterpartyNodeId);
            if (message.fundingTxo != null && Object.hasOwnProperty.call(message, "fundingTxo"))
                $root.types.OutPoint.encode(message.fundingTxo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.userChannelId != null && Object.hasOwnProperty.call(message, "userChannelId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.userChannelId);
            if (message.unspendablePunishmentReserve != null && Object.hasOwnProperty.call(message, "unspendablePunishmentReserve"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.unspendablePunishmentReserve);
            if (message.channelValueSats != null && Object.hasOwnProperty.call(message, "channelValueSats"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.channelValueSats);
            if (message.feerateSatPer_1000Weight != null && Object.hasOwnProperty.call(message, "feerateSatPer_1000Weight"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.feerateSatPer_1000Weight);
            if (message.outboundCapacityMsat != null && Object.hasOwnProperty.call(message, "outboundCapacityMsat"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.outboundCapacityMsat);
            if (message.inboundCapacityMsat != null && Object.hasOwnProperty.call(message, "inboundCapacityMsat"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.inboundCapacityMsat);
            if (message.confirmationsRequired != null && Object.hasOwnProperty.call(message, "confirmationsRequired"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.confirmationsRequired);
            if (message.confirmations != null && Object.hasOwnProperty.call(message, "confirmations"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.confirmations);
            if (message.isOutbound != null && Object.hasOwnProperty.call(message, "isOutbound"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.isOutbound);
            if (message.isChannelReady != null && Object.hasOwnProperty.call(message, "isChannelReady"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.isChannelReady);
            if (message.isUsable != null && Object.hasOwnProperty.call(message, "isUsable"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.isUsable);
            if (message.isAnnounced != null && Object.hasOwnProperty.call(message, "isAnnounced"))
                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.isAnnounced);
            if (message.channelConfig != null && Object.hasOwnProperty.call(message, "channelConfig"))
                $root.types.ChannelConfig.encode(message.channelConfig, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.nextOutboundHtlcLimitMsat != null && Object.hasOwnProperty.call(message, "nextOutboundHtlcLimitMsat"))
                writer.uint32(/* id 17, wireType 0 =*/136).uint64(message.nextOutboundHtlcLimitMsat);
            if (message.nextOutboundHtlcMinimumMsat != null && Object.hasOwnProperty.call(message, "nextOutboundHtlcMinimumMsat"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint64(message.nextOutboundHtlcMinimumMsat);
            if (message.forceCloseSpendDelay != null && Object.hasOwnProperty.call(message, "forceCloseSpendDelay"))
                writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.forceCloseSpendDelay);
            if (message.counterpartyOutboundHtlcMinimumMsat != null && Object.hasOwnProperty.call(message, "counterpartyOutboundHtlcMinimumMsat"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint64(message.counterpartyOutboundHtlcMinimumMsat);
            if (message.counterpartyOutboundHtlcMaximumMsat != null && Object.hasOwnProperty.call(message, "counterpartyOutboundHtlcMaximumMsat"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint64(message.counterpartyOutboundHtlcMaximumMsat);
            if (message.counterpartyUnspendablePunishmentReserve != null && Object.hasOwnProperty.call(message, "counterpartyUnspendablePunishmentReserve"))
                writer.uint32(/* id 22, wireType 0 =*/176).uint64(message.counterpartyUnspendablePunishmentReserve);
            if (message.counterpartyForwardingInfoFeeBaseMsat != null && Object.hasOwnProperty.call(message, "counterpartyForwardingInfoFeeBaseMsat"))
                writer.uint32(/* id 23, wireType 0 =*/184).uint32(message.counterpartyForwardingInfoFeeBaseMsat);
            if (message.counterpartyForwardingInfoFeeProportionalMillionths != null && Object.hasOwnProperty.call(message, "counterpartyForwardingInfoFeeProportionalMillionths"))
                writer.uint32(/* id 24, wireType 0 =*/192).uint32(message.counterpartyForwardingInfoFeeProportionalMillionths);
            if (message.counterpartyForwardingInfoCltvExpiryDelta != null && Object.hasOwnProperty.call(message, "counterpartyForwardingInfoCltvExpiryDelta"))
                writer.uint32(/* id 25, wireType 0 =*/200).uint32(message.counterpartyForwardingInfoCltvExpiryDelta);
            return writer;
        };

        /**
         * Encodes the specified Channel message, length delimited. Does not implicitly {@link types.Channel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.Channel
         * @static
         * @param {types.IChannel} message Channel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Channel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Channel message from the specified reader or buffer.
         * @function decode
         * @memberof types.Channel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.Channel} Channel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Channel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.Channel();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.channelId = reader.string();
                        break;
                    }
                case 2: {
                        message.counterpartyNodeId = reader.string();
                        break;
                    }
                case 3: {
                        message.fundingTxo = $root.types.OutPoint.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.userChannelId = reader.string();
                        break;
                    }
                case 5: {
                        message.unspendablePunishmentReserve = reader.uint64();
                        break;
                    }
                case 6: {
                        message.channelValueSats = reader.uint64();
                        break;
                    }
                case 7: {
                        message.feerateSatPer_1000Weight = reader.uint32();
                        break;
                    }
                case 8: {
                        message.outboundCapacityMsat = reader.uint64();
                        break;
                    }
                case 9: {
                        message.inboundCapacityMsat = reader.uint64();
                        break;
                    }
                case 10: {
                        message.confirmationsRequired = reader.uint32();
                        break;
                    }
                case 11: {
                        message.confirmations = reader.uint32();
                        break;
                    }
                case 12: {
                        message.isOutbound = reader.bool();
                        break;
                    }
                case 13: {
                        message.isChannelReady = reader.bool();
                        break;
                    }
                case 14: {
                        message.isUsable = reader.bool();
                        break;
                    }
                case 15: {
                        message.isAnnounced = reader.bool();
                        break;
                    }
                case 16: {
                        message.channelConfig = $root.types.ChannelConfig.decode(reader, reader.uint32());
                        break;
                    }
                case 17: {
                        message.nextOutboundHtlcLimitMsat = reader.uint64();
                        break;
                    }
                case 18: {
                        message.nextOutboundHtlcMinimumMsat = reader.uint64();
                        break;
                    }
                case 19: {
                        message.forceCloseSpendDelay = reader.uint32();
                        break;
                    }
                case 20: {
                        message.counterpartyOutboundHtlcMinimumMsat = reader.uint64();
                        break;
                    }
                case 21: {
                        message.counterpartyOutboundHtlcMaximumMsat = reader.uint64();
                        break;
                    }
                case 22: {
                        message.counterpartyUnspendablePunishmentReserve = reader.uint64();
                        break;
                    }
                case 23: {
                        message.counterpartyForwardingInfoFeeBaseMsat = reader.uint32();
                        break;
                    }
                case 24: {
                        message.counterpartyForwardingInfoFeeProportionalMillionths = reader.uint32();
                        break;
                    }
                case 25: {
                        message.counterpartyForwardingInfoCltvExpiryDelta = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Channel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.Channel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.Channel} Channel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Channel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Channel message.
         * @function verify
         * @memberof types.Channel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Channel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            if (message.counterpartyNodeId != null && message.hasOwnProperty("counterpartyNodeId"))
                if (!$util.isString(message.counterpartyNodeId))
                    return "counterpartyNodeId: string expected";
            if (message.fundingTxo != null && message.hasOwnProperty("fundingTxo")) {
                properties._fundingTxo = 1;
                {
                    let error = $root.types.OutPoint.verify(message.fundingTxo);
                    if (error)
                        return "fundingTxo." + error;
                }
            }
            if (message.userChannelId != null && message.hasOwnProperty("userChannelId"))
                if (!$util.isString(message.userChannelId))
                    return "userChannelId: string expected";
            if (message.unspendablePunishmentReserve != null && message.hasOwnProperty("unspendablePunishmentReserve")) {
                properties._unspendablePunishmentReserve = 1;
                if (!$util.isInteger(message.unspendablePunishmentReserve) && !(message.unspendablePunishmentReserve && $util.isInteger(message.unspendablePunishmentReserve.low) && $util.isInteger(message.unspendablePunishmentReserve.high)))
                    return "unspendablePunishmentReserve: integer|Long expected";
            }
            if (message.channelValueSats != null && message.hasOwnProperty("channelValueSats"))
                if (!$util.isInteger(message.channelValueSats) && !(message.channelValueSats && $util.isInteger(message.channelValueSats.low) && $util.isInteger(message.channelValueSats.high)))
                    return "channelValueSats: integer|Long expected";
            if (message.feerateSatPer_1000Weight != null && message.hasOwnProperty("feerateSatPer_1000Weight"))
                if (!$util.isInteger(message.feerateSatPer_1000Weight))
                    return "feerateSatPer_1000Weight: integer expected";
            if (message.outboundCapacityMsat != null && message.hasOwnProperty("outboundCapacityMsat"))
                if (!$util.isInteger(message.outboundCapacityMsat) && !(message.outboundCapacityMsat && $util.isInteger(message.outboundCapacityMsat.low) && $util.isInteger(message.outboundCapacityMsat.high)))
                    return "outboundCapacityMsat: integer|Long expected";
            if (message.inboundCapacityMsat != null && message.hasOwnProperty("inboundCapacityMsat"))
                if (!$util.isInteger(message.inboundCapacityMsat) && !(message.inboundCapacityMsat && $util.isInteger(message.inboundCapacityMsat.low) && $util.isInteger(message.inboundCapacityMsat.high)))
                    return "inboundCapacityMsat: integer|Long expected";
            if (message.confirmationsRequired != null && message.hasOwnProperty("confirmationsRequired")) {
                properties._confirmationsRequired = 1;
                if (!$util.isInteger(message.confirmationsRequired))
                    return "confirmationsRequired: integer expected";
            }
            if (message.confirmations != null && message.hasOwnProperty("confirmations")) {
                properties._confirmations = 1;
                if (!$util.isInteger(message.confirmations))
                    return "confirmations: integer expected";
            }
            if (message.isOutbound != null && message.hasOwnProperty("isOutbound"))
                if (typeof message.isOutbound !== "boolean")
                    return "isOutbound: boolean expected";
            if (message.isChannelReady != null && message.hasOwnProperty("isChannelReady"))
                if (typeof message.isChannelReady !== "boolean")
                    return "isChannelReady: boolean expected";
            if (message.isUsable != null && message.hasOwnProperty("isUsable"))
                if (typeof message.isUsable !== "boolean")
                    return "isUsable: boolean expected";
            if (message.isAnnounced != null && message.hasOwnProperty("isAnnounced"))
                if (typeof message.isAnnounced !== "boolean")
                    return "isAnnounced: boolean expected";
            if (message.channelConfig != null && message.hasOwnProperty("channelConfig")) {
                let error = $root.types.ChannelConfig.verify(message.channelConfig);
                if (error)
                    return "channelConfig." + error;
            }
            if (message.nextOutboundHtlcLimitMsat != null && message.hasOwnProperty("nextOutboundHtlcLimitMsat"))
                if (!$util.isInteger(message.nextOutboundHtlcLimitMsat) && !(message.nextOutboundHtlcLimitMsat && $util.isInteger(message.nextOutboundHtlcLimitMsat.low) && $util.isInteger(message.nextOutboundHtlcLimitMsat.high)))
                    return "nextOutboundHtlcLimitMsat: integer|Long expected";
            if (message.nextOutboundHtlcMinimumMsat != null && message.hasOwnProperty("nextOutboundHtlcMinimumMsat"))
                if (!$util.isInteger(message.nextOutboundHtlcMinimumMsat) && !(message.nextOutboundHtlcMinimumMsat && $util.isInteger(message.nextOutboundHtlcMinimumMsat.low) && $util.isInteger(message.nextOutboundHtlcMinimumMsat.high)))
                    return "nextOutboundHtlcMinimumMsat: integer|Long expected";
            if (message.forceCloseSpendDelay != null && message.hasOwnProperty("forceCloseSpendDelay")) {
                properties._forceCloseSpendDelay = 1;
                if (!$util.isInteger(message.forceCloseSpendDelay))
                    return "forceCloseSpendDelay: integer expected";
            }
            if (message.counterpartyOutboundHtlcMinimumMsat != null && message.hasOwnProperty("counterpartyOutboundHtlcMinimumMsat")) {
                properties._counterpartyOutboundHtlcMinimumMsat = 1;
                if (!$util.isInteger(message.counterpartyOutboundHtlcMinimumMsat) && !(message.counterpartyOutboundHtlcMinimumMsat && $util.isInteger(message.counterpartyOutboundHtlcMinimumMsat.low) && $util.isInteger(message.counterpartyOutboundHtlcMinimumMsat.high)))
                    return "counterpartyOutboundHtlcMinimumMsat: integer|Long expected";
            }
            if (message.counterpartyOutboundHtlcMaximumMsat != null && message.hasOwnProperty("counterpartyOutboundHtlcMaximumMsat")) {
                properties._counterpartyOutboundHtlcMaximumMsat = 1;
                if (!$util.isInteger(message.counterpartyOutboundHtlcMaximumMsat) && !(message.counterpartyOutboundHtlcMaximumMsat && $util.isInteger(message.counterpartyOutboundHtlcMaximumMsat.low) && $util.isInteger(message.counterpartyOutboundHtlcMaximumMsat.high)))
                    return "counterpartyOutboundHtlcMaximumMsat: integer|Long expected";
            }
            if (message.counterpartyUnspendablePunishmentReserve != null && message.hasOwnProperty("counterpartyUnspendablePunishmentReserve"))
                if (!$util.isInteger(message.counterpartyUnspendablePunishmentReserve) && !(message.counterpartyUnspendablePunishmentReserve && $util.isInteger(message.counterpartyUnspendablePunishmentReserve.low) && $util.isInteger(message.counterpartyUnspendablePunishmentReserve.high)))
                    return "counterpartyUnspendablePunishmentReserve: integer|Long expected";
            if (message.counterpartyForwardingInfoFeeBaseMsat != null && message.hasOwnProperty("counterpartyForwardingInfoFeeBaseMsat")) {
                properties._counterpartyForwardingInfoFeeBaseMsat = 1;
                if (!$util.isInteger(message.counterpartyForwardingInfoFeeBaseMsat))
                    return "counterpartyForwardingInfoFeeBaseMsat: integer expected";
            }
            if (message.counterpartyForwardingInfoFeeProportionalMillionths != null && message.hasOwnProperty("counterpartyForwardingInfoFeeProportionalMillionths")) {
                properties._counterpartyForwardingInfoFeeProportionalMillionths = 1;
                if (!$util.isInteger(message.counterpartyForwardingInfoFeeProportionalMillionths))
                    return "counterpartyForwardingInfoFeeProportionalMillionths: integer expected";
            }
            if (message.counterpartyForwardingInfoCltvExpiryDelta != null && message.hasOwnProperty("counterpartyForwardingInfoCltvExpiryDelta")) {
                properties._counterpartyForwardingInfoCltvExpiryDelta = 1;
                if (!$util.isInteger(message.counterpartyForwardingInfoCltvExpiryDelta))
                    return "counterpartyForwardingInfoCltvExpiryDelta: integer expected";
            }
            return null;
        };

        /**
         * Creates a Channel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.Channel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.Channel} Channel
         */
        Channel.fromObject = function fromObject(object) {
            if (object instanceof $root.types.Channel)
                return object;
            let message = new $root.types.Channel();
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            if (object.counterpartyNodeId != null)
                message.counterpartyNodeId = String(object.counterpartyNodeId);
            if (object.fundingTxo != null) {
                if (typeof object.fundingTxo !== "object")
                    throw TypeError(".types.Channel.fundingTxo: object expected");
                message.fundingTxo = $root.types.OutPoint.fromObject(object.fundingTxo);
            }
            if (object.userChannelId != null)
                message.userChannelId = String(object.userChannelId);
            if (object.unspendablePunishmentReserve != null)
                if ($util.Long)
                    (message.unspendablePunishmentReserve = $util.Long.fromValue(object.unspendablePunishmentReserve)).unsigned = true;
                else if (typeof object.unspendablePunishmentReserve === "string")
                    message.unspendablePunishmentReserve = parseInt(object.unspendablePunishmentReserve, 10);
                else if (typeof object.unspendablePunishmentReserve === "number")
                    message.unspendablePunishmentReserve = object.unspendablePunishmentReserve;
                else if (typeof object.unspendablePunishmentReserve === "object")
                    message.unspendablePunishmentReserve = new $util.LongBits(object.unspendablePunishmentReserve.low >>> 0, object.unspendablePunishmentReserve.high >>> 0).toNumber(true);
            if (object.channelValueSats != null)
                if ($util.Long)
                    (message.channelValueSats = $util.Long.fromValue(object.channelValueSats)).unsigned = true;
                else if (typeof object.channelValueSats === "string")
                    message.channelValueSats = parseInt(object.channelValueSats, 10);
                else if (typeof object.channelValueSats === "number")
                    message.channelValueSats = object.channelValueSats;
                else if (typeof object.channelValueSats === "object")
                    message.channelValueSats = new $util.LongBits(object.channelValueSats.low >>> 0, object.channelValueSats.high >>> 0).toNumber(true);
            if (object.feerateSatPer_1000Weight != null)
                message.feerateSatPer_1000Weight = object.feerateSatPer_1000Weight >>> 0;
            if (object.outboundCapacityMsat != null)
                if ($util.Long)
                    (message.outboundCapacityMsat = $util.Long.fromValue(object.outboundCapacityMsat)).unsigned = true;
                else if (typeof object.outboundCapacityMsat === "string")
                    message.outboundCapacityMsat = parseInt(object.outboundCapacityMsat, 10);
                else if (typeof object.outboundCapacityMsat === "number")
                    message.outboundCapacityMsat = object.outboundCapacityMsat;
                else if (typeof object.outboundCapacityMsat === "object")
                    message.outboundCapacityMsat = new $util.LongBits(object.outboundCapacityMsat.low >>> 0, object.outboundCapacityMsat.high >>> 0).toNumber(true);
            if (object.inboundCapacityMsat != null)
                if ($util.Long)
                    (message.inboundCapacityMsat = $util.Long.fromValue(object.inboundCapacityMsat)).unsigned = true;
                else if (typeof object.inboundCapacityMsat === "string")
                    message.inboundCapacityMsat = parseInt(object.inboundCapacityMsat, 10);
                else if (typeof object.inboundCapacityMsat === "number")
                    message.inboundCapacityMsat = object.inboundCapacityMsat;
                else if (typeof object.inboundCapacityMsat === "object")
                    message.inboundCapacityMsat = new $util.LongBits(object.inboundCapacityMsat.low >>> 0, object.inboundCapacityMsat.high >>> 0).toNumber(true);
            if (object.confirmationsRequired != null)
                message.confirmationsRequired = object.confirmationsRequired >>> 0;
            if (object.confirmations != null)
                message.confirmations = object.confirmations >>> 0;
            if (object.isOutbound != null)
                message.isOutbound = Boolean(object.isOutbound);
            if (object.isChannelReady != null)
                message.isChannelReady = Boolean(object.isChannelReady);
            if (object.isUsable != null)
                message.isUsable = Boolean(object.isUsable);
            if (object.isAnnounced != null)
                message.isAnnounced = Boolean(object.isAnnounced);
            if (object.channelConfig != null) {
                if (typeof object.channelConfig !== "object")
                    throw TypeError(".types.Channel.channelConfig: object expected");
                message.channelConfig = $root.types.ChannelConfig.fromObject(object.channelConfig);
            }
            if (object.nextOutboundHtlcLimitMsat != null)
                if ($util.Long)
                    (message.nextOutboundHtlcLimitMsat = $util.Long.fromValue(object.nextOutboundHtlcLimitMsat)).unsigned = true;
                else if (typeof object.nextOutboundHtlcLimitMsat === "string")
                    message.nextOutboundHtlcLimitMsat = parseInt(object.nextOutboundHtlcLimitMsat, 10);
                else if (typeof object.nextOutboundHtlcLimitMsat === "number")
                    message.nextOutboundHtlcLimitMsat = object.nextOutboundHtlcLimitMsat;
                else if (typeof object.nextOutboundHtlcLimitMsat === "object")
                    message.nextOutboundHtlcLimitMsat = new $util.LongBits(object.nextOutboundHtlcLimitMsat.low >>> 0, object.nextOutboundHtlcLimitMsat.high >>> 0).toNumber(true);
            if (object.nextOutboundHtlcMinimumMsat != null)
                if ($util.Long)
                    (message.nextOutboundHtlcMinimumMsat = $util.Long.fromValue(object.nextOutboundHtlcMinimumMsat)).unsigned = true;
                else if (typeof object.nextOutboundHtlcMinimumMsat === "string")
                    message.nextOutboundHtlcMinimumMsat = parseInt(object.nextOutboundHtlcMinimumMsat, 10);
                else if (typeof object.nextOutboundHtlcMinimumMsat === "number")
                    message.nextOutboundHtlcMinimumMsat = object.nextOutboundHtlcMinimumMsat;
                else if (typeof object.nextOutboundHtlcMinimumMsat === "object")
                    message.nextOutboundHtlcMinimumMsat = new $util.LongBits(object.nextOutboundHtlcMinimumMsat.low >>> 0, object.nextOutboundHtlcMinimumMsat.high >>> 0).toNumber(true);
            if (object.forceCloseSpendDelay != null)
                message.forceCloseSpendDelay = object.forceCloseSpendDelay >>> 0;
            if (object.counterpartyOutboundHtlcMinimumMsat != null)
                if ($util.Long)
                    (message.counterpartyOutboundHtlcMinimumMsat = $util.Long.fromValue(object.counterpartyOutboundHtlcMinimumMsat)).unsigned = true;
                else if (typeof object.counterpartyOutboundHtlcMinimumMsat === "string")
                    message.counterpartyOutboundHtlcMinimumMsat = parseInt(object.counterpartyOutboundHtlcMinimumMsat, 10);
                else if (typeof object.counterpartyOutboundHtlcMinimumMsat === "number")
                    message.counterpartyOutboundHtlcMinimumMsat = object.counterpartyOutboundHtlcMinimumMsat;
                else if (typeof object.counterpartyOutboundHtlcMinimumMsat === "object")
                    message.counterpartyOutboundHtlcMinimumMsat = new $util.LongBits(object.counterpartyOutboundHtlcMinimumMsat.low >>> 0, object.counterpartyOutboundHtlcMinimumMsat.high >>> 0).toNumber(true);
            if (object.counterpartyOutboundHtlcMaximumMsat != null)
                if ($util.Long)
                    (message.counterpartyOutboundHtlcMaximumMsat = $util.Long.fromValue(object.counterpartyOutboundHtlcMaximumMsat)).unsigned = true;
                else if (typeof object.counterpartyOutboundHtlcMaximumMsat === "string")
                    message.counterpartyOutboundHtlcMaximumMsat = parseInt(object.counterpartyOutboundHtlcMaximumMsat, 10);
                else if (typeof object.counterpartyOutboundHtlcMaximumMsat === "number")
                    message.counterpartyOutboundHtlcMaximumMsat = object.counterpartyOutboundHtlcMaximumMsat;
                else if (typeof object.counterpartyOutboundHtlcMaximumMsat === "object")
                    message.counterpartyOutboundHtlcMaximumMsat = new $util.LongBits(object.counterpartyOutboundHtlcMaximumMsat.low >>> 0, object.counterpartyOutboundHtlcMaximumMsat.high >>> 0).toNumber(true);
            if (object.counterpartyUnspendablePunishmentReserve != null)
                if ($util.Long)
                    (message.counterpartyUnspendablePunishmentReserve = $util.Long.fromValue(object.counterpartyUnspendablePunishmentReserve)).unsigned = true;
                else if (typeof object.counterpartyUnspendablePunishmentReserve === "string")
                    message.counterpartyUnspendablePunishmentReserve = parseInt(object.counterpartyUnspendablePunishmentReserve, 10);
                else if (typeof object.counterpartyUnspendablePunishmentReserve === "number")
                    message.counterpartyUnspendablePunishmentReserve = object.counterpartyUnspendablePunishmentReserve;
                else if (typeof object.counterpartyUnspendablePunishmentReserve === "object")
                    message.counterpartyUnspendablePunishmentReserve = new $util.LongBits(object.counterpartyUnspendablePunishmentReserve.low >>> 0, object.counterpartyUnspendablePunishmentReserve.high >>> 0).toNumber(true);
            if (object.counterpartyForwardingInfoFeeBaseMsat != null)
                message.counterpartyForwardingInfoFeeBaseMsat = object.counterpartyForwardingInfoFeeBaseMsat >>> 0;
            if (object.counterpartyForwardingInfoFeeProportionalMillionths != null)
                message.counterpartyForwardingInfoFeeProportionalMillionths = object.counterpartyForwardingInfoFeeProportionalMillionths >>> 0;
            if (object.counterpartyForwardingInfoCltvExpiryDelta != null)
                message.counterpartyForwardingInfoCltvExpiryDelta = object.counterpartyForwardingInfoCltvExpiryDelta >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Channel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.Channel
         * @static
         * @param {types.Channel} message Channel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Channel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.channelId = "";
                object.counterpartyNodeId = "";
                object.userChannelId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.channelValueSats = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.channelValueSats = options.longs === String ? "0" : 0;
                object.feerateSatPer_1000Weight = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.outboundCapacityMsat = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.outboundCapacityMsat = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.inboundCapacityMsat = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.inboundCapacityMsat = options.longs === String ? "0" : 0;
                object.isOutbound = false;
                object.isChannelReady = false;
                object.isUsable = false;
                object.isAnnounced = false;
                object.channelConfig = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.nextOutboundHtlcLimitMsat = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nextOutboundHtlcLimitMsat = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.nextOutboundHtlcMinimumMsat = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nextOutboundHtlcMinimumMsat = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.counterpartyUnspendablePunishmentReserve = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.counterpartyUnspendablePunishmentReserve = options.longs === String ? "0" : 0;
            }
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.counterpartyNodeId != null && message.hasOwnProperty("counterpartyNodeId"))
                object.counterpartyNodeId = message.counterpartyNodeId;
            if (message.fundingTxo != null && message.hasOwnProperty("fundingTxo")) {
                object.fundingTxo = $root.types.OutPoint.toObject(message.fundingTxo, options);
                if (options.oneofs)
                    object._fundingTxo = "fundingTxo";
            }
            if (message.userChannelId != null && message.hasOwnProperty("userChannelId"))
                object.userChannelId = message.userChannelId;
            if (message.unspendablePunishmentReserve != null && message.hasOwnProperty("unspendablePunishmentReserve")) {
                if (typeof message.unspendablePunishmentReserve === "number")
                    object.unspendablePunishmentReserve = options.longs === String ? String(message.unspendablePunishmentReserve) : message.unspendablePunishmentReserve;
                else
                    object.unspendablePunishmentReserve = options.longs === String ? $util.Long.prototype.toString.call(message.unspendablePunishmentReserve) : options.longs === Number ? new $util.LongBits(message.unspendablePunishmentReserve.low >>> 0, message.unspendablePunishmentReserve.high >>> 0).toNumber(true) : message.unspendablePunishmentReserve;
                if (options.oneofs)
                    object._unspendablePunishmentReserve = "unspendablePunishmentReserve";
            }
            if (message.channelValueSats != null && message.hasOwnProperty("channelValueSats"))
                if (typeof message.channelValueSats === "number")
                    object.channelValueSats = options.longs === String ? String(message.channelValueSats) : message.channelValueSats;
                else
                    object.channelValueSats = options.longs === String ? $util.Long.prototype.toString.call(message.channelValueSats) : options.longs === Number ? new $util.LongBits(message.channelValueSats.low >>> 0, message.channelValueSats.high >>> 0).toNumber(true) : message.channelValueSats;
            if (message.feerateSatPer_1000Weight != null && message.hasOwnProperty("feerateSatPer_1000Weight"))
                object.feerateSatPer_1000Weight = message.feerateSatPer_1000Weight;
            if (message.outboundCapacityMsat != null && message.hasOwnProperty("outboundCapacityMsat"))
                if (typeof message.outboundCapacityMsat === "number")
                    object.outboundCapacityMsat = options.longs === String ? String(message.outboundCapacityMsat) : message.outboundCapacityMsat;
                else
                    object.outboundCapacityMsat = options.longs === String ? $util.Long.prototype.toString.call(message.outboundCapacityMsat) : options.longs === Number ? new $util.LongBits(message.outboundCapacityMsat.low >>> 0, message.outboundCapacityMsat.high >>> 0).toNumber(true) : message.outboundCapacityMsat;
            if (message.inboundCapacityMsat != null && message.hasOwnProperty("inboundCapacityMsat"))
                if (typeof message.inboundCapacityMsat === "number")
                    object.inboundCapacityMsat = options.longs === String ? String(message.inboundCapacityMsat) : message.inboundCapacityMsat;
                else
                    object.inboundCapacityMsat = options.longs === String ? $util.Long.prototype.toString.call(message.inboundCapacityMsat) : options.longs === Number ? new $util.LongBits(message.inboundCapacityMsat.low >>> 0, message.inboundCapacityMsat.high >>> 0).toNumber(true) : message.inboundCapacityMsat;
            if (message.confirmationsRequired != null && message.hasOwnProperty("confirmationsRequired")) {
                object.confirmationsRequired = message.confirmationsRequired;
                if (options.oneofs)
                    object._confirmationsRequired = "confirmationsRequired";
            }
            if (message.confirmations != null && message.hasOwnProperty("confirmations")) {
                object.confirmations = message.confirmations;
                if (options.oneofs)
                    object._confirmations = "confirmations";
            }
            if (message.isOutbound != null && message.hasOwnProperty("isOutbound"))
                object.isOutbound = message.isOutbound;
            if (message.isChannelReady != null && message.hasOwnProperty("isChannelReady"))
                object.isChannelReady = message.isChannelReady;
            if (message.isUsable != null && message.hasOwnProperty("isUsable"))
                object.isUsable = message.isUsable;
            if (message.isAnnounced != null && message.hasOwnProperty("isAnnounced"))
                object.isAnnounced = message.isAnnounced;
            if (message.channelConfig != null && message.hasOwnProperty("channelConfig"))
                object.channelConfig = $root.types.ChannelConfig.toObject(message.channelConfig, options);
            if (message.nextOutboundHtlcLimitMsat != null && message.hasOwnProperty("nextOutboundHtlcLimitMsat"))
                if (typeof message.nextOutboundHtlcLimitMsat === "number")
                    object.nextOutboundHtlcLimitMsat = options.longs === String ? String(message.nextOutboundHtlcLimitMsat) : message.nextOutboundHtlcLimitMsat;
                else
                    object.nextOutboundHtlcLimitMsat = options.longs === String ? $util.Long.prototype.toString.call(message.nextOutboundHtlcLimitMsat) : options.longs === Number ? new $util.LongBits(message.nextOutboundHtlcLimitMsat.low >>> 0, message.nextOutboundHtlcLimitMsat.high >>> 0).toNumber(true) : message.nextOutboundHtlcLimitMsat;
            if (message.nextOutboundHtlcMinimumMsat != null && message.hasOwnProperty("nextOutboundHtlcMinimumMsat"))
                if (typeof message.nextOutboundHtlcMinimumMsat === "number")
                    object.nextOutboundHtlcMinimumMsat = options.longs === String ? String(message.nextOutboundHtlcMinimumMsat) : message.nextOutboundHtlcMinimumMsat;
                else
                    object.nextOutboundHtlcMinimumMsat = options.longs === String ? $util.Long.prototype.toString.call(message.nextOutboundHtlcMinimumMsat) : options.longs === Number ? new $util.LongBits(message.nextOutboundHtlcMinimumMsat.low >>> 0, message.nextOutboundHtlcMinimumMsat.high >>> 0).toNumber(true) : message.nextOutboundHtlcMinimumMsat;
            if (message.forceCloseSpendDelay != null && message.hasOwnProperty("forceCloseSpendDelay")) {
                object.forceCloseSpendDelay = message.forceCloseSpendDelay;
                if (options.oneofs)
                    object._forceCloseSpendDelay = "forceCloseSpendDelay";
            }
            if (message.counterpartyOutboundHtlcMinimumMsat != null && message.hasOwnProperty("counterpartyOutboundHtlcMinimumMsat")) {
                if (typeof message.counterpartyOutboundHtlcMinimumMsat === "number")
                    object.counterpartyOutboundHtlcMinimumMsat = options.longs === String ? String(message.counterpartyOutboundHtlcMinimumMsat) : message.counterpartyOutboundHtlcMinimumMsat;
                else
                    object.counterpartyOutboundHtlcMinimumMsat = options.longs === String ? $util.Long.prototype.toString.call(message.counterpartyOutboundHtlcMinimumMsat) : options.longs === Number ? new $util.LongBits(message.counterpartyOutboundHtlcMinimumMsat.low >>> 0, message.counterpartyOutboundHtlcMinimumMsat.high >>> 0).toNumber(true) : message.counterpartyOutboundHtlcMinimumMsat;
                if (options.oneofs)
                    object._counterpartyOutboundHtlcMinimumMsat = "counterpartyOutboundHtlcMinimumMsat";
            }
            if (message.counterpartyOutboundHtlcMaximumMsat != null && message.hasOwnProperty("counterpartyOutboundHtlcMaximumMsat")) {
                if (typeof message.counterpartyOutboundHtlcMaximumMsat === "number")
                    object.counterpartyOutboundHtlcMaximumMsat = options.longs === String ? String(message.counterpartyOutboundHtlcMaximumMsat) : message.counterpartyOutboundHtlcMaximumMsat;
                else
                    object.counterpartyOutboundHtlcMaximumMsat = options.longs === String ? $util.Long.prototype.toString.call(message.counterpartyOutboundHtlcMaximumMsat) : options.longs === Number ? new $util.LongBits(message.counterpartyOutboundHtlcMaximumMsat.low >>> 0, message.counterpartyOutboundHtlcMaximumMsat.high >>> 0).toNumber(true) : message.counterpartyOutboundHtlcMaximumMsat;
                if (options.oneofs)
                    object._counterpartyOutboundHtlcMaximumMsat = "counterpartyOutboundHtlcMaximumMsat";
            }
            if (message.counterpartyUnspendablePunishmentReserve != null && message.hasOwnProperty("counterpartyUnspendablePunishmentReserve"))
                if (typeof message.counterpartyUnspendablePunishmentReserve === "number")
                    object.counterpartyUnspendablePunishmentReserve = options.longs === String ? String(message.counterpartyUnspendablePunishmentReserve) : message.counterpartyUnspendablePunishmentReserve;
                else
                    object.counterpartyUnspendablePunishmentReserve = options.longs === String ? $util.Long.prototype.toString.call(message.counterpartyUnspendablePunishmentReserve) : options.longs === Number ? new $util.LongBits(message.counterpartyUnspendablePunishmentReserve.low >>> 0, message.counterpartyUnspendablePunishmentReserve.high >>> 0).toNumber(true) : message.counterpartyUnspendablePunishmentReserve;
            if (message.counterpartyForwardingInfoFeeBaseMsat != null && message.hasOwnProperty("counterpartyForwardingInfoFeeBaseMsat")) {
                object.counterpartyForwardingInfoFeeBaseMsat = message.counterpartyForwardingInfoFeeBaseMsat;
                if (options.oneofs)
                    object._counterpartyForwardingInfoFeeBaseMsat = "counterpartyForwardingInfoFeeBaseMsat";
            }
            if (message.counterpartyForwardingInfoFeeProportionalMillionths != null && message.hasOwnProperty("counterpartyForwardingInfoFeeProportionalMillionths")) {
                object.counterpartyForwardingInfoFeeProportionalMillionths = message.counterpartyForwardingInfoFeeProportionalMillionths;
                if (options.oneofs)
                    object._counterpartyForwardingInfoFeeProportionalMillionths = "counterpartyForwardingInfoFeeProportionalMillionths";
            }
            if (message.counterpartyForwardingInfoCltvExpiryDelta != null && message.hasOwnProperty("counterpartyForwardingInfoCltvExpiryDelta")) {
                object.counterpartyForwardingInfoCltvExpiryDelta = message.counterpartyForwardingInfoCltvExpiryDelta;
                if (options.oneofs)
                    object._counterpartyForwardingInfoCltvExpiryDelta = "counterpartyForwardingInfoCltvExpiryDelta";
            }
            return object;
        };

        /**
         * Converts this Channel to JSON.
         * @function toJSON
         * @memberof types.Channel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Channel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Channel
         * @function getTypeUrl
         * @memberof types.Channel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Channel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.Channel";
        };

        return Channel;
    })();

    types.ChannelConfig = (function() {

        /**
         * Properties of a ChannelConfig.
         * @memberof types
         * @interface IChannelConfig
         * @property {number|null} [forwardingFeeProportionalMillionths] ChannelConfig forwardingFeeProportionalMillionths
         * @property {number|null} [forwardingFeeBaseMsat] ChannelConfig forwardingFeeBaseMsat
         * @property {number|null} [cltvExpiryDelta] ChannelConfig cltvExpiryDelta
         * @property {number|Long|null} [forceCloseAvoidanceMaxFeeSatoshis] ChannelConfig forceCloseAvoidanceMaxFeeSatoshis
         * @property {boolean|null} [acceptUnderpayingHtlcs] ChannelConfig acceptUnderpayingHtlcs
         * @property {number|Long|null} [fixedLimitMsat] ChannelConfig fixedLimitMsat
         * @property {number|Long|null} [feeRateMultiplier] ChannelConfig feeRateMultiplier
         */

        /**
         * Constructs a new ChannelConfig.
         * @memberof types
         * @classdesc Represents a ChannelConfig.
         * @implements IChannelConfig
         * @constructor
         * @param {types.IChannelConfig=} [properties] Properties to set
         */
        function ChannelConfig(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChannelConfig forwardingFeeProportionalMillionths.
         * @member {number|null|undefined} forwardingFeeProportionalMillionths
         * @memberof types.ChannelConfig
         * @instance
         */
        ChannelConfig.prototype.forwardingFeeProportionalMillionths = null;

        /**
         * ChannelConfig forwardingFeeBaseMsat.
         * @member {number|null|undefined} forwardingFeeBaseMsat
         * @memberof types.ChannelConfig
         * @instance
         */
        ChannelConfig.prototype.forwardingFeeBaseMsat = null;

        /**
         * ChannelConfig cltvExpiryDelta.
         * @member {number|null|undefined} cltvExpiryDelta
         * @memberof types.ChannelConfig
         * @instance
         */
        ChannelConfig.prototype.cltvExpiryDelta = null;

        /**
         * ChannelConfig forceCloseAvoidanceMaxFeeSatoshis.
         * @member {number|Long|null|undefined} forceCloseAvoidanceMaxFeeSatoshis
         * @memberof types.ChannelConfig
         * @instance
         */
        ChannelConfig.prototype.forceCloseAvoidanceMaxFeeSatoshis = null;

        /**
         * ChannelConfig acceptUnderpayingHtlcs.
         * @member {boolean|null|undefined} acceptUnderpayingHtlcs
         * @memberof types.ChannelConfig
         * @instance
         */
        ChannelConfig.prototype.acceptUnderpayingHtlcs = null;

        /**
         * ChannelConfig fixedLimitMsat.
         * @member {number|Long|null|undefined} fixedLimitMsat
         * @memberof types.ChannelConfig
         * @instance
         */
        ChannelConfig.prototype.fixedLimitMsat = null;

        /**
         * ChannelConfig feeRateMultiplier.
         * @member {number|Long|null|undefined} feeRateMultiplier
         * @memberof types.ChannelConfig
         * @instance
         */
        ChannelConfig.prototype.feeRateMultiplier = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * ChannelConfig _forwardingFeeProportionalMillionths.
         * @member {"forwardingFeeProportionalMillionths"|undefined} _forwardingFeeProportionalMillionths
         * @memberof types.ChannelConfig
         * @instance
         */
        Object.defineProperty(ChannelConfig.prototype, "_forwardingFeeProportionalMillionths", {
            get: $util.oneOfGetter($oneOfFields = ["forwardingFeeProportionalMillionths"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ChannelConfig _forwardingFeeBaseMsat.
         * @member {"forwardingFeeBaseMsat"|undefined} _forwardingFeeBaseMsat
         * @memberof types.ChannelConfig
         * @instance
         */
        Object.defineProperty(ChannelConfig.prototype, "_forwardingFeeBaseMsat", {
            get: $util.oneOfGetter($oneOfFields = ["forwardingFeeBaseMsat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ChannelConfig _cltvExpiryDelta.
         * @member {"cltvExpiryDelta"|undefined} _cltvExpiryDelta
         * @memberof types.ChannelConfig
         * @instance
         */
        Object.defineProperty(ChannelConfig.prototype, "_cltvExpiryDelta", {
            get: $util.oneOfGetter($oneOfFields = ["cltvExpiryDelta"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ChannelConfig _forceCloseAvoidanceMaxFeeSatoshis.
         * @member {"forceCloseAvoidanceMaxFeeSatoshis"|undefined} _forceCloseAvoidanceMaxFeeSatoshis
         * @memberof types.ChannelConfig
         * @instance
         */
        Object.defineProperty(ChannelConfig.prototype, "_forceCloseAvoidanceMaxFeeSatoshis", {
            get: $util.oneOfGetter($oneOfFields = ["forceCloseAvoidanceMaxFeeSatoshis"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ChannelConfig _acceptUnderpayingHtlcs.
         * @member {"acceptUnderpayingHtlcs"|undefined} _acceptUnderpayingHtlcs
         * @memberof types.ChannelConfig
         * @instance
         */
        Object.defineProperty(ChannelConfig.prototype, "_acceptUnderpayingHtlcs", {
            get: $util.oneOfGetter($oneOfFields = ["acceptUnderpayingHtlcs"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ChannelConfig maxDustHtlcExposure.
         * @member {"fixedLimitMsat"|"feeRateMultiplier"|undefined} maxDustHtlcExposure
         * @memberof types.ChannelConfig
         * @instance
         */
        Object.defineProperty(ChannelConfig.prototype, "maxDustHtlcExposure", {
            get: $util.oneOfGetter($oneOfFields = ["fixedLimitMsat", "feeRateMultiplier"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ChannelConfig instance using the specified properties.
         * @function create
         * @memberof types.ChannelConfig
         * @static
         * @param {types.IChannelConfig=} [properties] Properties to set
         * @returns {types.ChannelConfig} ChannelConfig instance
         */
        ChannelConfig.create = function create(properties) {
            return new ChannelConfig(properties);
        };

        /**
         * Encodes the specified ChannelConfig message. Does not implicitly {@link types.ChannelConfig.verify|verify} messages.
         * @function encode
         * @memberof types.ChannelConfig
         * @static
         * @param {types.IChannelConfig} message ChannelConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChannelConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.forwardingFeeProportionalMillionths != null && Object.hasOwnProperty.call(message, "forwardingFeeProportionalMillionths"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.forwardingFeeProportionalMillionths);
            if (message.forwardingFeeBaseMsat != null && Object.hasOwnProperty.call(message, "forwardingFeeBaseMsat"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.forwardingFeeBaseMsat);
            if (message.cltvExpiryDelta != null && Object.hasOwnProperty.call(message, "cltvExpiryDelta"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.cltvExpiryDelta);
            if (message.forceCloseAvoidanceMaxFeeSatoshis != null && Object.hasOwnProperty.call(message, "forceCloseAvoidanceMaxFeeSatoshis"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.forceCloseAvoidanceMaxFeeSatoshis);
            if (message.acceptUnderpayingHtlcs != null && Object.hasOwnProperty.call(message, "acceptUnderpayingHtlcs"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.acceptUnderpayingHtlcs);
            if (message.fixedLimitMsat != null && Object.hasOwnProperty.call(message, "fixedLimitMsat"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.fixedLimitMsat);
            if (message.feeRateMultiplier != null && Object.hasOwnProperty.call(message, "feeRateMultiplier"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.feeRateMultiplier);
            return writer;
        };

        /**
         * Encodes the specified ChannelConfig message, length delimited. Does not implicitly {@link types.ChannelConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.ChannelConfig
         * @static
         * @param {types.IChannelConfig} message ChannelConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChannelConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChannelConfig message from the specified reader or buffer.
         * @function decode
         * @memberof types.ChannelConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.ChannelConfig} ChannelConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChannelConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.ChannelConfig();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.forwardingFeeProportionalMillionths = reader.uint32();
                        break;
                    }
                case 2: {
                        message.forwardingFeeBaseMsat = reader.uint32();
                        break;
                    }
                case 3: {
                        message.cltvExpiryDelta = reader.uint32();
                        break;
                    }
                case 4: {
                        message.forceCloseAvoidanceMaxFeeSatoshis = reader.uint64();
                        break;
                    }
                case 5: {
                        message.acceptUnderpayingHtlcs = reader.bool();
                        break;
                    }
                case 6: {
                        message.fixedLimitMsat = reader.uint64();
                        break;
                    }
                case 7: {
                        message.feeRateMultiplier = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChannelConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.ChannelConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.ChannelConfig} ChannelConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChannelConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChannelConfig message.
         * @function verify
         * @memberof types.ChannelConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChannelConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.forwardingFeeProportionalMillionths != null && message.hasOwnProperty("forwardingFeeProportionalMillionths")) {
                properties._forwardingFeeProportionalMillionths = 1;
                if (!$util.isInteger(message.forwardingFeeProportionalMillionths))
                    return "forwardingFeeProportionalMillionths: integer expected";
            }
            if (message.forwardingFeeBaseMsat != null && message.hasOwnProperty("forwardingFeeBaseMsat")) {
                properties._forwardingFeeBaseMsat = 1;
                if (!$util.isInteger(message.forwardingFeeBaseMsat))
                    return "forwardingFeeBaseMsat: integer expected";
            }
            if (message.cltvExpiryDelta != null && message.hasOwnProperty("cltvExpiryDelta")) {
                properties._cltvExpiryDelta = 1;
                if (!$util.isInteger(message.cltvExpiryDelta))
                    return "cltvExpiryDelta: integer expected";
            }
            if (message.forceCloseAvoidanceMaxFeeSatoshis != null && message.hasOwnProperty("forceCloseAvoidanceMaxFeeSatoshis")) {
                properties._forceCloseAvoidanceMaxFeeSatoshis = 1;
                if (!$util.isInteger(message.forceCloseAvoidanceMaxFeeSatoshis) && !(message.forceCloseAvoidanceMaxFeeSatoshis && $util.isInteger(message.forceCloseAvoidanceMaxFeeSatoshis.low) && $util.isInteger(message.forceCloseAvoidanceMaxFeeSatoshis.high)))
                    return "forceCloseAvoidanceMaxFeeSatoshis: integer|Long expected";
            }
            if (message.acceptUnderpayingHtlcs != null && message.hasOwnProperty("acceptUnderpayingHtlcs")) {
                properties._acceptUnderpayingHtlcs = 1;
                if (typeof message.acceptUnderpayingHtlcs !== "boolean")
                    return "acceptUnderpayingHtlcs: boolean expected";
            }
            if (message.fixedLimitMsat != null && message.hasOwnProperty("fixedLimitMsat")) {
                properties.maxDustHtlcExposure = 1;
                if (!$util.isInteger(message.fixedLimitMsat) && !(message.fixedLimitMsat && $util.isInteger(message.fixedLimitMsat.low) && $util.isInteger(message.fixedLimitMsat.high)))
                    return "fixedLimitMsat: integer|Long expected";
            }
            if (message.feeRateMultiplier != null && message.hasOwnProperty("feeRateMultiplier")) {
                if (properties.maxDustHtlcExposure === 1)
                    return "maxDustHtlcExposure: multiple values";
                properties.maxDustHtlcExposure = 1;
                if (!$util.isInteger(message.feeRateMultiplier) && !(message.feeRateMultiplier && $util.isInteger(message.feeRateMultiplier.low) && $util.isInteger(message.feeRateMultiplier.high)))
                    return "feeRateMultiplier: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a ChannelConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.ChannelConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.ChannelConfig} ChannelConfig
         */
        ChannelConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.types.ChannelConfig)
                return object;
            let message = new $root.types.ChannelConfig();
            if (object.forwardingFeeProportionalMillionths != null)
                message.forwardingFeeProportionalMillionths = object.forwardingFeeProportionalMillionths >>> 0;
            if (object.forwardingFeeBaseMsat != null)
                message.forwardingFeeBaseMsat = object.forwardingFeeBaseMsat >>> 0;
            if (object.cltvExpiryDelta != null)
                message.cltvExpiryDelta = object.cltvExpiryDelta >>> 0;
            if (object.forceCloseAvoidanceMaxFeeSatoshis != null)
                if ($util.Long)
                    (message.forceCloseAvoidanceMaxFeeSatoshis = $util.Long.fromValue(object.forceCloseAvoidanceMaxFeeSatoshis)).unsigned = true;
                else if (typeof object.forceCloseAvoidanceMaxFeeSatoshis === "string")
                    message.forceCloseAvoidanceMaxFeeSatoshis = parseInt(object.forceCloseAvoidanceMaxFeeSatoshis, 10);
                else if (typeof object.forceCloseAvoidanceMaxFeeSatoshis === "number")
                    message.forceCloseAvoidanceMaxFeeSatoshis = object.forceCloseAvoidanceMaxFeeSatoshis;
                else if (typeof object.forceCloseAvoidanceMaxFeeSatoshis === "object")
                    message.forceCloseAvoidanceMaxFeeSatoshis = new $util.LongBits(object.forceCloseAvoidanceMaxFeeSatoshis.low >>> 0, object.forceCloseAvoidanceMaxFeeSatoshis.high >>> 0).toNumber(true);
            if (object.acceptUnderpayingHtlcs != null)
                message.acceptUnderpayingHtlcs = Boolean(object.acceptUnderpayingHtlcs);
            if (object.fixedLimitMsat != null)
                if ($util.Long)
                    (message.fixedLimitMsat = $util.Long.fromValue(object.fixedLimitMsat)).unsigned = true;
                else if (typeof object.fixedLimitMsat === "string")
                    message.fixedLimitMsat = parseInt(object.fixedLimitMsat, 10);
                else if (typeof object.fixedLimitMsat === "number")
                    message.fixedLimitMsat = object.fixedLimitMsat;
                else if (typeof object.fixedLimitMsat === "object")
                    message.fixedLimitMsat = new $util.LongBits(object.fixedLimitMsat.low >>> 0, object.fixedLimitMsat.high >>> 0).toNumber(true);
            if (object.feeRateMultiplier != null)
                if ($util.Long)
                    (message.feeRateMultiplier = $util.Long.fromValue(object.feeRateMultiplier)).unsigned = true;
                else if (typeof object.feeRateMultiplier === "string")
                    message.feeRateMultiplier = parseInt(object.feeRateMultiplier, 10);
                else if (typeof object.feeRateMultiplier === "number")
                    message.feeRateMultiplier = object.feeRateMultiplier;
                else if (typeof object.feeRateMultiplier === "object")
                    message.feeRateMultiplier = new $util.LongBits(object.feeRateMultiplier.low >>> 0, object.feeRateMultiplier.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a ChannelConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.ChannelConfig
         * @static
         * @param {types.ChannelConfig} message ChannelConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChannelConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.forwardingFeeProportionalMillionths != null && message.hasOwnProperty("forwardingFeeProportionalMillionths")) {
                object.forwardingFeeProportionalMillionths = message.forwardingFeeProportionalMillionths;
                if (options.oneofs)
                    object._forwardingFeeProportionalMillionths = "forwardingFeeProportionalMillionths";
            }
            if (message.forwardingFeeBaseMsat != null && message.hasOwnProperty("forwardingFeeBaseMsat")) {
                object.forwardingFeeBaseMsat = message.forwardingFeeBaseMsat;
                if (options.oneofs)
                    object._forwardingFeeBaseMsat = "forwardingFeeBaseMsat";
            }
            if (message.cltvExpiryDelta != null && message.hasOwnProperty("cltvExpiryDelta")) {
                object.cltvExpiryDelta = message.cltvExpiryDelta;
                if (options.oneofs)
                    object._cltvExpiryDelta = "cltvExpiryDelta";
            }
            if (message.forceCloseAvoidanceMaxFeeSatoshis != null && message.hasOwnProperty("forceCloseAvoidanceMaxFeeSatoshis")) {
                if (typeof message.forceCloseAvoidanceMaxFeeSatoshis === "number")
                    object.forceCloseAvoidanceMaxFeeSatoshis = options.longs === String ? String(message.forceCloseAvoidanceMaxFeeSatoshis) : message.forceCloseAvoidanceMaxFeeSatoshis;
                else
                    object.forceCloseAvoidanceMaxFeeSatoshis = options.longs === String ? $util.Long.prototype.toString.call(message.forceCloseAvoidanceMaxFeeSatoshis) : options.longs === Number ? new $util.LongBits(message.forceCloseAvoidanceMaxFeeSatoshis.low >>> 0, message.forceCloseAvoidanceMaxFeeSatoshis.high >>> 0).toNumber(true) : message.forceCloseAvoidanceMaxFeeSatoshis;
                if (options.oneofs)
                    object._forceCloseAvoidanceMaxFeeSatoshis = "forceCloseAvoidanceMaxFeeSatoshis";
            }
            if (message.acceptUnderpayingHtlcs != null && message.hasOwnProperty("acceptUnderpayingHtlcs")) {
                object.acceptUnderpayingHtlcs = message.acceptUnderpayingHtlcs;
                if (options.oneofs)
                    object._acceptUnderpayingHtlcs = "acceptUnderpayingHtlcs";
            }
            if (message.fixedLimitMsat != null && message.hasOwnProperty("fixedLimitMsat")) {
                if (typeof message.fixedLimitMsat === "number")
                    object.fixedLimitMsat = options.longs === String ? String(message.fixedLimitMsat) : message.fixedLimitMsat;
                else
                    object.fixedLimitMsat = options.longs === String ? $util.Long.prototype.toString.call(message.fixedLimitMsat) : options.longs === Number ? new $util.LongBits(message.fixedLimitMsat.low >>> 0, message.fixedLimitMsat.high >>> 0).toNumber(true) : message.fixedLimitMsat;
                if (options.oneofs)
                    object.maxDustHtlcExposure = "fixedLimitMsat";
            }
            if (message.feeRateMultiplier != null && message.hasOwnProperty("feeRateMultiplier")) {
                if (typeof message.feeRateMultiplier === "number")
                    object.feeRateMultiplier = options.longs === String ? String(message.feeRateMultiplier) : message.feeRateMultiplier;
                else
                    object.feeRateMultiplier = options.longs === String ? $util.Long.prototype.toString.call(message.feeRateMultiplier) : options.longs === Number ? new $util.LongBits(message.feeRateMultiplier.low >>> 0, message.feeRateMultiplier.high >>> 0).toNumber(true) : message.feeRateMultiplier;
                if (options.oneofs)
                    object.maxDustHtlcExposure = "feeRateMultiplier";
            }
            return object;
        };

        /**
         * Converts this ChannelConfig to JSON.
         * @function toJSON
         * @memberof types.ChannelConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChannelConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChannelConfig
         * @function getTypeUrl
         * @memberof types.ChannelConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChannelConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.ChannelConfig";
        };

        return ChannelConfig;
    })();

    types.OutPoint = (function() {

        /**
         * Properties of an OutPoint.
         * @memberof types
         * @interface IOutPoint
         * @property {string|null} [txid] OutPoint txid
         * @property {number|null} [vout] OutPoint vout
         */

        /**
         * Constructs a new OutPoint.
         * @memberof types
         * @classdesc Represents an OutPoint.
         * @implements IOutPoint
         * @constructor
         * @param {types.IOutPoint=} [properties] Properties to set
         */
        function OutPoint(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OutPoint txid.
         * @member {string} txid
         * @memberof types.OutPoint
         * @instance
         */
        OutPoint.prototype.txid = "";

        /**
         * OutPoint vout.
         * @member {number} vout
         * @memberof types.OutPoint
         * @instance
         */
        OutPoint.prototype.vout = 0;

        /**
         * Creates a new OutPoint instance using the specified properties.
         * @function create
         * @memberof types.OutPoint
         * @static
         * @param {types.IOutPoint=} [properties] Properties to set
         * @returns {types.OutPoint} OutPoint instance
         */
        OutPoint.create = function create(properties) {
            return new OutPoint(properties);
        };

        /**
         * Encodes the specified OutPoint message. Does not implicitly {@link types.OutPoint.verify|verify} messages.
         * @function encode
         * @memberof types.OutPoint
         * @static
         * @param {types.IOutPoint} message OutPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutPoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.txid != null && Object.hasOwnProperty.call(message, "txid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.txid);
            if (message.vout != null && Object.hasOwnProperty.call(message, "vout"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.vout);
            return writer;
        };

        /**
         * Encodes the specified OutPoint message, length delimited. Does not implicitly {@link types.OutPoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.OutPoint
         * @static
         * @param {types.IOutPoint} message OutPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutPoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OutPoint message from the specified reader or buffer.
         * @function decode
         * @memberof types.OutPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.OutPoint} OutPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutPoint.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.OutPoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.txid = reader.string();
                        break;
                    }
                case 2: {
                        message.vout = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OutPoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.OutPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.OutPoint} OutPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutPoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OutPoint message.
         * @function verify
         * @memberof types.OutPoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OutPoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.txid != null && message.hasOwnProperty("txid"))
                if (!$util.isString(message.txid))
                    return "txid: string expected";
            if (message.vout != null && message.hasOwnProperty("vout"))
                if (!$util.isInteger(message.vout))
                    return "vout: integer expected";
            return null;
        };

        /**
         * Creates an OutPoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.OutPoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.OutPoint} OutPoint
         */
        OutPoint.fromObject = function fromObject(object) {
            if (object instanceof $root.types.OutPoint)
                return object;
            let message = new $root.types.OutPoint();
            if (object.txid != null)
                message.txid = String(object.txid);
            if (object.vout != null)
                message.vout = object.vout >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an OutPoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.OutPoint
         * @static
         * @param {types.OutPoint} message OutPoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OutPoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.txid = "";
                object.vout = 0;
            }
            if (message.txid != null && message.hasOwnProperty("txid"))
                object.txid = message.txid;
            if (message.vout != null && message.hasOwnProperty("vout"))
                object.vout = message.vout;
            return object;
        };

        /**
         * Converts this OutPoint to JSON.
         * @function toJSON
         * @memberof types.OutPoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OutPoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OutPoint
         * @function getTypeUrl
         * @memberof types.OutPoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OutPoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.OutPoint";
        };

        return OutPoint;
    })();

    types.BestBlock = (function() {

        /**
         * Properties of a BestBlock.
         * @memberof types
         * @interface IBestBlock
         * @property {string|null} [blockHash] BestBlock blockHash
         * @property {number|null} [height] BestBlock height
         */

        /**
         * Constructs a new BestBlock.
         * @memberof types
         * @classdesc Represents a BestBlock.
         * @implements IBestBlock
         * @constructor
         * @param {types.IBestBlock=} [properties] Properties to set
         */
        function BestBlock(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BestBlock blockHash.
         * @member {string} blockHash
         * @memberof types.BestBlock
         * @instance
         */
        BestBlock.prototype.blockHash = "";

        /**
         * BestBlock height.
         * @member {number} height
         * @memberof types.BestBlock
         * @instance
         */
        BestBlock.prototype.height = 0;

        /**
         * Creates a new BestBlock instance using the specified properties.
         * @function create
         * @memberof types.BestBlock
         * @static
         * @param {types.IBestBlock=} [properties] Properties to set
         * @returns {types.BestBlock} BestBlock instance
         */
        BestBlock.create = function create(properties) {
            return new BestBlock(properties);
        };

        /**
         * Encodes the specified BestBlock message. Does not implicitly {@link types.BestBlock.verify|verify} messages.
         * @function encode
         * @memberof types.BestBlock
         * @static
         * @param {types.IBestBlock} message BestBlock message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BestBlock.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.blockHash != null && Object.hasOwnProperty.call(message, "blockHash"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.blockHash);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.height);
            return writer;
        };

        /**
         * Encodes the specified BestBlock message, length delimited. Does not implicitly {@link types.BestBlock.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.BestBlock
         * @static
         * @param {types.IBestBlock} message BestBlock message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BestBlock.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BestBlock message from the specified reader or buffer.
         * @function decode
         * @memberof types.BestBlock
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.BestBlock} BestBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BestBlock.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.BestBlock();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.blockHash = reader.string();
                        break;
                    }
                case 2: {
                        message.height = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BestBlock message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.BestBlock
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.BestBlock} BestBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BestBlock.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BestBlock message.
         * @function verify
         * @memberof types.BestBlock
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BestBlock.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                if (!$util.isString(message.blockHash))
                    return "blockHash: string expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            return null;
        };

        /**
         * Creates a BestBlock message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.BestBlock
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.BestBlock} BestBlock
         */
        BestBlock.fromObject = function fromObject(object) {
            if (object instanceof $root.types.BestBlock)
                return object;
            let message = new $root.types.BestBlock();
            if (object.blockHash != null)
                message.blockHash = String(object.blockHash);
            if (object.height != null)
                message.height = object.height >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a BestBlock message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.BestBlock
         * @static
         * @param {types.BestBlock} message BestBlock
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BestBlock.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.blockHash = "";
                object.height = 0;
            }
            if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                object.blockHash = message.blockHash;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            return object;
        };

        /**
         * Converts this BestBlock to JSON.
         * @function toJSON
         * @memberof types.BestBlock
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BestBlock.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BestBlock
         * @function getTypeUrl
         * @memberof types.BestBlock
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BestBlock.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.BestBlock";
        };

        return BestBlock;
    })();

    types.LightningBalance = (function() {

        /**
         * Properties of a LightningBalance.
         * @memberof types
         * @interface ILightningBalance
         * @property {types.IClaimableOnChannelClose|null} [claimableOnChannelClose] LightningBalance claimableOnChannelClose
         * @property {types.IClaimableAwaitingConfirmations|null} [claimableAwaitingConfirmations] LightningBalance claimableAwaitingConfirmations
         * @property {types.IContentiousClaimable|null} [contentiousClaimable] LightningBalance contentiousClaimable
         * @property {types.IMaybeTimeoutClaimableHTLC|null} [maybeTimeoutClaimableHtlc] LightningBalance maybeTimeoutClaimableHtlc
         * @property {types.IMaybePreimageClaimableHTLC|null} [maybePreimageClaimableHtlc] LightningBalance maybePreimageClaimableHtlc
         * @property {types.ICounterpartyRevokedOutputClaimable|null} [counterpartyRevokedOutputClaimable] LightningBalance counterpartyRevokedOutputClaimable
         */

        /**
         * Constructs a new LightningBalance.
         * @memberof types
         * @classdesc Represents a LightningBalance.
         * @implements ILightningBalance
         * @constructor
         * @param {types.ILightningBalance=} [properties] Properties to set
         */
        function LightningBalance(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LightningBalance claimableOnChannelClose.
         * @member {types.IClaimableOnChannelClose|null|undefined} claimableOnChannelClose
         * @memberof types.LightningBalance
         * @instance
         */
        LightningBalance.prototype.claimableOnChannelClose = null;

        /**
         * LightningBalance claimableAwaitingConfirmations.
         * @member {types.IClaimableAwaitingConfirmations|null|undefined} claimableAwaitingConfirmations
         * @memberof types.LightningBalance
         * @instance
         */
        LightningBalance.prototype.claimableAwaitingConfirmations = null;

        /**
         * LightningBalance contentiousClaimable.
         * @member {types.IContentiousClaimable|null|undefined} contentiousClaimable
         * @memberof types.LightningBalance
         * @instance
         */
        LightningBalance.prototype.contentiousClaimable = null;

        /**
         * LightningBalance maybeTimeoutClaimableHtlc.
         * @member {types.IMaybeTimeoutClaimableHTLC|null|undefined} maybeTimeoutClaimableHtlc
         * @memberof types.LightningBalance
         * @instance
         */
        LightningBalance.prototype.maybeTimeoutClaimableHtlc = null;

        /**
         * LightningBalance maybePreimageClaimableHtlc.
         * @member {types.IMaybePreimageClaimableHTLC|null|undefined} maybePreimageClaimableHtlc
         * @memberof types.LightningBalance
         * @instance
         */
        LightningBalance.prototype.maybePreimageClaimableHtlc = null;

        /**
         * LightningBalance counterpartyRevokedOutputClaimable.
         * @member {types.ICounterpartyRevokedOutputClaimable|null|undefined} counterpartyRevokedOutputClaimable
         * @memberof types.LightningBalance
         * @instance
         */
        LightningBalance.prototype.counterpartyRevokedOutputClaimable = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * LightningBalance balanceType.
         * @member {"claimableOnChannelClose"|"claimableAwaitingConfirmations"|"contentiousClaimable"|"maybeTimeoutClaimableHtlc"|"maybePreimageClaimableHtlc"|"counterpartyRevokedOutputClaimable"|undefined} balanceType
         * @memberof types.LightningBalance
         * @instance
         */
        Object.defineProperty(LightningBalance.prototype, "balanceType", {
            get: $util.oneOfGetter($oneOfFields = ["claimableOnChannelClose", "claimableAwaitingConfirmations", "contentiousClaimable", "maybeTimeoutClaimableHtlc", "maybePreimageClaimableHtlc", "counterpartyRevokedOutputClaimable"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new LightningBalance instance using the specified properties.
         * @function create
         * @memberof types.LightningBalance
         * @static
         * @param {types.ILightningBalance=} [properties] Properties to set
         * @returns {types.LightningBalance} LightningBalance instance
         */
        LightningBalance.create = function create(properties) {
            return new LightningBalance(properties);
        };

        /**
         * Encodes the specified LightningBalance message. Does not implicitly {@link types.LightningBalance.verify|verify} messages.
         * @function encode
         * @memberof types.LightningBalance
         * @static
         * @param {types.ILightningBalance} message LightningBalance message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LightningBalance.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.claimableOnChannelClose != null && Object.hasOwnProperty.call(message, "claimableOnChannelClose"))
                $root.types.ClaimableOnChannelClose.encode(message.claimableOnChannelClose, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.claimableAwaitingConfirmations != null && Object.hasOwnProperty.call(message, "claimableAwaitingConfirmations"))
                $root.types.ClaimableAwaitingConfirmations.encode(message.claimableAwaitingConfirmations, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.contentiousClaimable != null && Object.hasOwnProperty.call(message, "contentiousClaimable"))
                $root.types.ContentiousClaimable.encode(message.contentiousClaimable, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.maybeTimeoutClaimableHtlc != null && Object.hasOwnProperty.call(message, "maybeTimeoutClaimableHtlc"))
                $root.types.MaybeTimeoutClaimableHTLC.encode(message.maybeTimeoutClaimableHtlc, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.maybePreimageClaimableHtlc != null && Object.hasOwnProperty.call(message, "maybePreimageClaimableHtlc"))
                $root.types.MaybePreimageClaimableHTLC.encode(message.maybePreimageClaimableHtlc, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.counterpartyRevokedOutputClaimable != null && Object.hasOwnProperty.call(message, "counterpartyRevokedOutputClaimable"))
                $root.types.CounterpartyRevokedOutputClaimable.encode(message.counterpartyRevokedOutputClaimable, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LightningBalance message, length delimited. Does not implicitly {@link types.LightningBalance.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.LightningBalance
         * @static
         * @param {types.ILightningBalance} message LightningBalance message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LightningBalance.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LightningBalance message from the specified reader or buffer.
         * @function decode
         * @memberof types.LightningBalance
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.LightningBalance} LightningBalance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LightningBalance.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.LightningBalance();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.claimableOnChannelClose = $root.types.ClaimableOnChannelClose.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.claimableAwaitingConfirmations = $root.types.ClaimableAwaitingConfirmations.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.contentiousClaimable = $root.types.ContentiousClaimable.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.maybeTimeoutClaimableHtlc = $root.types.MaybeTimeoutClaimableHTLC.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.maybePreimageClaimableHtlc = $root.types.MaybePreimageClaimableHTLC.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.counterpartyRevokedOutputClaimable = $root.types.CounterpartyRevokedOutputClaimable.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LightningBalance message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.LightningBalance
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.LightningBalance} LightningBalance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LightningBalance.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LightningBalance message.
         * @function verify
         * @memberof types.LightningBalance
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LightningBalance.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.claimableOnChannelClose != null && message.hasOwnProperty("claimableOnChannelClose")) {
                properties.balanceType = 1;
                {
                    let error = $root.types.ClaimableOnChannelClose.verify(message.claimableOnChannelClose);
                    if (error)
                        return "claimableOnChannelClose." + error;
                }
            }
            if (message.claimableAwaitingConfirmations != null && message.hasOwnProperty("claimableAwaitingConfirmations")) {
                if (properties.balanceType === 1)
                    return "balanceType: multiple values";
                properties.balanceType = 1;
                {
                    let error = $root.types.ClaimableAwaitingConfirmations.verify(message.claimableAwaitingConfirmations);
                    if (error)
                        return "claimableAwaitingConfirmations." + error;
                }
            }
            if (message.contentiousClaimable != null && message.hasOwnProperty("contentiousClaimable")) {
                if (properties.balanceType === 1)
                    return "balanceType: multiple values";
                properties.balanceType = 1;
                {
                    let error = $root.types.ContentiousClaimable.verify(message.contentiousClaimable);
                    if (error)
                        return "contentiousClaimable." + error;
                }
            }
            if (message.maybeTimeoutClaimableHtlc != null && message.hasOwnProperty("maybeTimeoutClaimableHtlc")) {
                if (properties.balanceType === 1)
                    return "balanceType: multiple values";
                properties.balanceType = 1;
                {
                    let error = $root.types.MaybeTimeoutClaimableHTLC.verify(message.maybeTimeoutClaimableHtlc);
                    if (error)
                        return "maybeTimeoutClaimableHtlc." + error;
                }
            }
            if (message.maybePreimageClaimableHtlc != null && message.hasOwnProperty("maybePreimageClaimableHtlc")) {
                if (properties.balanceType === 1)
                    return "balanceType: multiple values";
                properties.balanceType = 1;
                {
                    let error = $root.types.MaybePreimageClaimableHTLC.verify(message.maybePreimageClaimableHtlc);
                    if (error)
                        return "maybePreimageClaimableHtlc." + error;
                }
            }
            if (message.counterpartyRevokedOutputClaimable != null && message.hasOwnProperty("counterpartyRevokedOutputClaimable")) {
                if (properties.balanceType === 1)
                    return "balanceType: multiple values";
                properties.balanceType = 1;
                {
                    let error = $root.types.CounterpartyRevokedOutputClaimable.verify(message.counterpartyRevokedOutputClaimable);
                    if (error)
                        return "counterpartyRevokedOutputClaimable." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LightningBalance message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.LightningBalance
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.LightningBalance} LightningBalance
         */
        LightningBalance.fromObject = function fromObject(object) {
            if (object instanceof $root.types.LightningBalance)
                return object;
            let message = new $root.types.LightningBalance();
            if (object.claimableOnChannelClose != null) {
                if (typeof object.claimableOnChannelClose !== "object")
                    throw TypeError(".types.LightningBalance.claimableOnChannelClose: object expected");
                message.claimableOnChannelClose = $root.types.ClaimableOnChannelClose.fromObject(object.claimableOnChannelClose);
            }
            if (object.claimableAwaitingConfirmations != null) {
                if (typeof object.claimableAwaitingConfirmations !== "object")
                    throw TypeError(".types.LightningBalance.claimableAwaitingConfirmations: object expected");
                message.claimableAwaitingConfirmations = $root.types.ClaimableAwaitingConfirmations.fromObject(object.claimableAwaitingConfirmations);
            }
            if (object.contentiousClaimable != null) {
                if (typeof object.contentiousClaimable !== "object")
                    throw TypeError(".types.LightningBalance.contentiousClaimable: object expected");
                message.contentiousClaimable = $root.types.ContentiousClaimable.fromObject(object.contentiousClaimable);
            }
            if (object.maybeTimeoutClaimableHtlc != null) {
                if (typeof object.maybeTimeoutClaimableHtlc !== "object")
                    throw TypeError(".types.LightningBalance.maybeTimeoutClaimableHtlc: object expected");
                message.maybeTimeoutClaimableHtlc = $root.types.MaybeTimeoutClaimableHTLC.fromObject(object.maybeTimeoutClaimableHtlc);
            }
            if (object.maybePreimageClaimableHtlc != null) {
                if (typeof object.maybePreimageClaimableHtlc !== "object")
                    throw TypeError(".types.LightningBalance.maybePreimageClaimableHtlc: object expected");
                message.maybePreimageClaimableHtlc = $root.types.MaybePreimageClaimableHTLC.fromObject(object.maybePreimageClaimableHtlc);
            }
            if (object.counterpartyRevokedOutputClaimable != null) {
                if (typeof object.counterpartyRevokedOutputClaimable !== "object")
                    throw TypeError(".types.LightningBalance.counterpartyRevokedOutputClaimable: object expected");
                message.counterpartyRevokedOutputClaimable = $root.types.CounterpartyRevokedOutputClaimable.fromObject(object.counterpartyRevokedOutputClaimable);
            }
            return message;
        };

        /**
         * Creates a plain object from a LightningBalance message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.LightningBalance
         * @static
         * @param {types.LightningBalance} message LightningBalance
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LightningBalance.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.claimableOnChannelClose != null && message.hasOwnProperty("claimableOnChannelClose")) {
                object.claimableOnChannelClose = $root.types.ClaimableOnChannelClose.toObject(message.claimableOnChannelClose, options);
                if (options.oneofs)
                    object.balanceType = "claimableOnChannelClose";
            }
            if (message.claimableAwaitingConfirmations != null && message.hasOwnProperty("claimableAwaitingConfirmations")) {
                object.claimableAwaitingConfirmations = $root.types.ClaimableAwaitingConfirmations.toObject(message.claimableAwaitingConfirmations, options);
                if (options.oneofs)
                    object.balanceType = "claimableAwaitingConfirmations";
            }
            if (message.contentiousClaimable != null && message.hasOwnProperty("contentiousClaimable")) {
                object.contentiousClaimable = $root.types.ContentiousClaimable.toObject(message.contentiousClaimable, options);
                if (options.oneofs)
                    object.balanceType = "contentiousClaimable";
            }
            if (message.maybeTimeoutClaimableHtlc != null && message.hasOwnProperty("maybeTimeoutClaimableHtlc")) {
                object.maybeTimeoutClaimableHtlc = $root.types.MaybeTimeoutClaimableHTLC.toObject(message.maybeTimeoutClaimableHtlc, options);
                if (options.oneofs)
                    object.balanceType = "maybeTimeoutClaimableHtlc";
            }
            if (message.maybePreimageClaimableHtlc != null && message.hasOwnProperty("maybePreimageClaimableHtlc")) {
                object.maybePreimageClaimableHtlc = $root.types.MaybePreimageClaimableHTLC.toObject(message.maybePreimageClaimableHtlc, options);
                if (options.oneofs)
                    object.balanceType = "maybePreimageClaimableHtlc";
            }
            if (message.counterpartyRevokedOutputClaimable != null && message.hasOwnProperty("counterpartyRevokedOutputClaimable")) {
                object.counterpartyRevokedOutputClaimable = $root.types.CounterpartyRevokedOutputClaimable.toObject(message.counterpartyRevokedOutputClaimable, options);
                if (options.oneofs)
                    object.balanceType = "counterpartyRevokedOutputClaimable";
            }
            return object;
        };

        /**
         * Converts this LightningBalance to JSON.
         * @function toJSON
         * @memberof types.LightningBalance
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LightningBalance.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LightningBalance
         * @function getTypeUrl
         * @memberof types.LightningBalance
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LightningBalance.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.LightningBalance";
        };

        return LightningBalance;
    })();

    types.ClaimableOnChannelClose = (function() {

        /**
         * Properties of a ClaimableOnChannelClose.
         * @memberof types
         * @interface IClaimableOnChannelClose
         * @property {string|null} [channelId] ClaimableOnChannelClose channelId
         * @property {string|null} [counterpartyNodeId] ClaimableOnChannelClose counterpartyNodeId
         * @property {number|Long|null} [amountSatoshis] ClaimableOnChannelClose amountSatoshis
         * @property {number|Long|null} [transactionFeeSatoshis] ClaimableOnChannelClose transactionFeeSatoshis
         * @property {number|Long|null} [outboundPaymentHtlcRoundedMsat] ClaimableOnChannelClose outboundPaymentHtlcRoundedMsat
         * @property {number|Long|null} [outboundForwardedHtlcRoundedMsat] ClaimableOnChannelClose outboundForwardedHtlcRoundedMsat
         * @property {number|Long|null} [inboundClaimingHtlcRoundedMsat] ClaimableOnChannelClose inboundClaimingHtlcRoundedMsat
         * @property {number|Long|null} [inboundHtlcRoundedMsat] ClaimableOnChannelClose inboundHtlcRoundedMsat
         */

        /**
         * Constructs a new ClaimableOnChannelClose.
         * @memberof types
         * @classdesc Represents a ClaimableOnChannelClose.
         * @implements IClaimableOnChannelClose
         * @constructor
         * @param {types.IClaimableOnChannelClose=} [properties] Properties to set
         */
        function ClaimableOnChannelClose(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClaimableOnChannelClose channelId.
         * @member {string} channelId
         * @memberof types.ClaimableOnChannelClose
         * @instance
         */
        ClaimableOnChannelClose.prototype.channelId = "";

        /**
         * ClaimableOnChannelClose counterpartyNodeId.
         * @member {string} counterpartyNodeId
         * @memberof types.ClaimableOnChannelClose
         * @instance
         */
        ClaimableOnChannelClose.prototype.counterpartyNodeId = "";

        /**
         * ClaimableOnChannelClose amountSatoshis.
         * @member {number|Long} amountSatoshis
         * @memberof types.ClaimableOnChannelClose
         * @instance
         */
        ClaimableOnChannelClose.prototype.amountSatoshis = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ClaimableOnChannelClose transactionFeeSatoshis.
         * @member {number|Long} transactionFeeSatoshis
         * @memberof types.ClaimableOnChannelClose
         * @instance
         */
        ClaimableOnChannelClose.prototype.transactionFeeSatoshis = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ClaimableOnChannelClose outboundPaymentHtlcRoundedMsat.
         * @member {number|Long} outboundPaymentHtlcRoundedMsat
         * @memberof types.ClaimableOnChannelClose
         * @instance
         */
        ClaimableOnChannelClose.prototype.outboundPaymentHtlcRoundedMsat = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ClaimableOnChannelClose outboundForwardedHtlcRoundedMsat.
         * @member {number|Long} outboundForwardedHtlcRoundedMsat
         * @memberof types.ClaimableOnChannelClose
         * @instance
         */
        ClaimableOnChannelClose.prototype.outboundForwardedHtlcRoundedMsat = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ClaimableOnChannelClose inboundClaimingHtlcRoundedMsat.
         * @member {number|Long} inboundClaimingHtlcRoundedMsat
         * @memberof types.ClaimableOnChannelClose
         * @instance
         */
        ClaimableOnChannelClose.prototype.inboundClaimingHtlcRoundedMsat = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ClaimableOnChannelClose inboundHtlcRoundedMsat.
         * @member {number|Long} inboundHtlcRoundedMsat
         * @memberof types.ClaimableOnChannelClose
         * @instance
         */
        ClaimableOnChannelClose.prototype.inboundHtlcRoundedMsat = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new ClaimableOnChannelClose instance using the specified properties.
         * @function create
         * @memberof types.ClaimableOnChannelClose
         * @static
         * @param {types.IClaimableOnChannelClose=} [properties] Properties to set
         * @returns {types.ClaimableOnChannelClose} ClaimableOnChannelClose instance
         */
        ClaimableOnChannelClose.create = function create(properties) {
            return new ClaimableOnChannelClose(properties);
        };

        /**
         * Encodes the specified ClaimableOnChannelClose message. Does not implicitly {@link types.ClaimableOnChannelClose.verify|verify} messages.
         * @function encode
         * @memberof types.ClaimableOnChannelClose
         * @static
         * @param {types.IClaimableOnChannelClose} message ClaimableOnChannelClose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClaimableOnChannelClose.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.counterpartyNodeId != null && Object.hasOwnProperty.call(message, "counterpartyNodeId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.counterpartyNodeId);
            if (message.amountSatoshis != null && Object.hasOwnProperty.call(message, "amountSatoshis"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.amountSatoshis);
            if (message.transactionFeeSatoshis != null && Object.hasOwnProperty.call(message, "transactionFeeSatoshis"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.transactionFeeSatoshis);
            if (message.outboundPaymentHtlcRoundedMsat != null && Object.hasOwnProperty.call(message, "outboundPaymentHtlcRoundedMsat"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.outboundPaymentHtlcRoundedMsat);
            if (message.outboundForwardedHtlcRoundedMsat != null && Object.hasOwnProperty.call(message, "outboundForwardedHtlcRoundedMsat"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.outboundForwardedHtlcRoundedMsat);
            if (message.inboundClaimingHtlcRoundedMsat != null && Object.hasOwnProperty.call(message, "inboundClaimingHtlcRoundedMsat"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.inboundClaimingHtlcRoundedMsat);
            if (message.inboundHtlcRoundedMsat != null && Object.hasOwnProperty.call(message, "inboundHtlcRoundedMsat"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.inboundHtlcRoundedMsat);
            return writer;
        };

        /**
         * Encodes the specified ClaimableOnChannelClose message, length delimited. Does not implicitly {@link types.ClaimableOnChannelClose.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.ClaimableOnChannelClose
         * @static
         * @param {types.IClaimableOnChannelClose} message ClaimableOnChannelClose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClaimableOnChannelClose.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClaimableOnChannelClose message from the specified reader or buffer.
         * @function decode
         * @memberof types.ClaimableOnChannelClose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.ClaimableOnChannelClose} ClaimableOnChannelClose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClaimableOnChannelClose.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.ClaimableOnChannelClose();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.channelId = reader.string();
                        break;
                    }
                case 2: {
                        message.counterpartyNodeId = reader.string();
                        break;
                    }
                case 3: {
                        message.amountSatoshis = reader.uint64();
                        break;
                    }
                case 4: {
                        message.transactionFeeSatoshis = reader.uint64();
                        break;
                    }
                case 5: {
                        message.outboundPaymentHtlcRoundedMsat = reader.uint64();
                        break;
                    }
                case 6: {
                        message.outboundForwardedHtlcRoundedMsat = reader.uint64();
                        break;
                    }
                case 7: {
                        message.inboundClaimingHtlcRoundedMsat = reader.uint64();
                        break;
                    }
                case 8: {
                        message.inboundHtlcRoundedMsat = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClaimableOnChannelClose message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.ClaimableOnChannelClose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.ClaimableOnChannelClose} ClaimableOnChannelClose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClaimableOnChannelClose.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClaimableOnChannelClose message.
         * @function verify
         * @memberof types.ClaimableOnChannelClose
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClaimableOnChannelClose.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            if (message.counterpartyNodeId != null && message.hasOwnProperty("counterpartyNodeId"))
                if (!$util.isString(message.counterpartyNodeId))
                    return "counterpartyNodeId: string expected";
            if (message.amountSatoshis != null && message.hasOwnProperty("amountSatoshis"))
                if (!$util.isInteger(message.amountSatoshis) && !(message.amountSatoshis && $util.isInteger(message.amountSatoshis.low) && $util.isInteger(message.amountSatoshis.high)))
                    return "amountSatoshis: integer|Long expected";
            if (message.transactionFeeSatoshis != null && message.hasOwnProperty("transactionFeeSatoshis"))
                if (!$util.isInteger(message.transactionFeeSatoshis) && !(message.transactionFeeSatoshis && $util.isInteger(message.transactionFeeSatoshis.low) && $util.isInteger(message.transactionFeeSatoshis.high)))
                    return "transactionFeeSatoshis: integer|Long expected";
            if (message.outboundPaymentHtlcRoundedMsat != null && message.hasOwnProperty("outboundPaymentHtlcRoundedMsat"))
                if (!$util.isInteger(message.outboundPaymentHtlcRoundedMsat) && !(message.outboundPaymentHtlcRoundedMsat && $util.isInteger(message.outboundPaymentHtlcRoundedMsat.low) && $util.isInteger(message.outboundPaymentHtlcRoundedMsat.high)))
                    return "outboundPaymentHtlcRoundedMsat: integer|Long expected";
            if (message.outboundForwardedHtlcRoundedMsat != null && message.hasOwnProperty("outboundForwardedHtlcRoundedMsat"))
                if (!$util.isInteger(message.outboundForwardedHtlcRoundedMsat) && !(message.outboundForwardedHtlcRoundedMsat && $util.isInteger(message.outboundForwardedHtlcRoundedMsat.low) && $util.isInteger(message.outboundForwardedHtlcRoundedMsat.high)))
                    return "outboundForwardedHtlcRoundedMsat: integer|Long expected";
            if (message.inboundClaimingHtlcRoundedMsat != null && message.hasOwnProperty("inboundClaimingHtlcRoundedMsat"))
                if (!$util.isInteger(message.inboundClaimingHtlcRoundedMsat) && !(message.inboundClaimingHtlcRoundedMsat && $util.isInteger(message.inboundClaimingHtlcRoundedMsat.low) && $util.isInteger(message.inboundClaimingHtlcRoundedMsat.high)))
                    return "inboundClaimingHtlcRoundedMsat: integer|Long expected";
            if (message.inboundHtlcRoundedMsat != null && message.hasOwnProperty("inboundHtlcRoundedMsat"))
                if (!$util.isInteger(message.inboundHtlcRoundedMsat) && !(message.inboundHtlcRoundedMsat && $util.isInteger(message.inboundHtlcRoundedMsat.low) && $util.isInteger(message.inboundHtlcRoundedMsat.high)))
                    return "inboundHtlcRoundedMsat: integer|Long expected";
            return null;
        };

        /**
         * Creates a ClaimableOnChannelClose message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.ClaimableOnChannelClose
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.ClaimableOnChannelClose} ClaimableOnChannelClose
         */
        ClaimableOnChannelClose.fromObject = function fromObject(object) {
            if (object instanceof $root.types.ClaimableOnChannelClose)
                return object;
            let message = new $root.types.ClaimableOnChannelClose();
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            if (object.counterpartyNodeId != null)
                message.counterpartyNodeId = String(object.counterpartyNodeId);
            if (object.amountSatoshis != null)
                if ($util.Long)
                    (message.amountSatoshis = $util.Long.fromValue(object.amountSatoshis)).unsigned = true;
                else if (typeof object.amountSatoshis === "string")
                    message.amountSatoshis = parseInt(object.amountSatoshis, 10);
                else if (typeof object.amountSatoshis === "number")
                    message.amountSatoshis = object.amountSatoshis;
                else if (typeof object.amountSatoshis === "object")
                    message.amountSatoshis = new $util.LongBits(object.amountSatoshis.low >>> 0, object.amountSatoshis.high >>> 0).toNumber(true);
            if (object.transactionFeeSatoshis != null)
                if ($util.Long)
                    (message.transactionFeeSatoshis = $util.Long.fromValue(object.transactionFeeSatoshis)).unsigned = true;
                else if (typeof object.transactionFeeSatoshis === "string")
                    message.transactionFeeSatoshis = parseInt(object.transactionFeeSatoshis, 10);
                else if (typeof object.transactionFeeSatoshis === "number")
                    message.transactionFeeSatoshis = object.transactionFeeSatoshis;
                else if (typeof object.transactionFeeSatoshis === "object")
                    message.transactionFeeSatoshis = new $util.LongBits(object.transactionFeeSatoshis.low >>> 0, object.transactionFeeSatoshis.high >>> 0).toNumber(true);
            if (object.outboundPaymentHtlcRoundedMsat != null)
                if ($util.Long)
                    (message.outboundPaymentHtlcRoundedMsat = $util.Long.fromValue(object.outboundPaymentHtlcRoundedMsat)).unsigned = true;
                else if (typeof object.outboundPaymentHtlcRoundedMsat === "string")
                    message.outboundPaymentHtlcRoundedMsat = parseInt(object.outboundPaymentHtlcRoundedMsat, 10);
                else if (typeof object.outboundPaymentHtlcRoundedMsat === "number")
                    message.outboundPaymentHtlcRoundedMsat = object.outboundPaymentHtlcRoundedMsat;
                else if (typeof object.outboundPaymentHtlcRoundedMsat === "object")
                    message.outboundPaymentHtlcRoundedMsat = new $util.LongBits(object.outboundPaymentHtlcRoundedMsat.low >>> 0, object.outboundPaymentHtlcRoundedMsat.high >>> 0).toNumber(true);
            if (object.outboundForwardedHtlcRoundedMsat != null)
                if ($util.Long)
                    (message.outboundForwardedHtlcRoundedMsat = $util.Long.fromValue(object.outboundForwardedHtlcRoundedMsat)).unsigned = true;
                else if (typeof object.outboundForwardedHtlcRoundedMsat === "string")
                    message.outboundForwardedHtlcRoundedMsat = parseInt(object.outboundForwardedHtlcRoundedMsat, 10);
                else if (typeof object.outboundForwardedHtlcRoundedMsat === "number")
                    message.outboundForwardedHtlcRoundedMsat = object.outboundForwardedHtlcRoundedMsat;
                else if (typeof object.outboundForwardedHtlcRoundedMsat === "object")
                    message.outboundForwardedHtlcRoundedMsat = new $util.LongBits(object.outboundForwardedHtlcRoundedMsat.low >>> 0, object.outboundForwardedHtlcRoundedMsat.high >>> 0).toNumber(true);
            if (object.inboundClaimingHtlcRoundedMsat != null)
                if ($util.Long)
                    (message.inboundClaimingHtlcRoundedMsat = $util.Long.fromValue(object.inboundClaimingHtlcRoundedMsat)).unsigned = true;
                else if (typeof object.inboundClaimingHtlcRoundedMsat === "string")
                    message.inboundClaimingHtlcRoundedMsat = parseInt(object.inboundClaimingHtlcRoundedMsat, 10);
                else if (typeof object.inboundClaimingHtlcRoundedMsat === "number")
                    message.inboundClaimingHtlcRoundedMsat = object.inboundClaimingHtlcRoundedMsat;
                else if (typeof object.inboundClaimingHtlcRoundedMsat === "object")
                    message.inboundClaimingHtlcRoundedMsat = new $util.LongBits(object.inboundClaimingHtlcRoundedMsat.low >>> 0, object.inboundClaimingHtlcRoundedMsat.high >>> 0).toNumber(true);
            if (object.inboundHtlcRoundedMsat != null)
                if ($util.Long)
                    (message.inboundHtlcRoundedMsat = $util.Long.fromValue(object.inboundHtlcRoundedMsat)).unsigned = true;
                else if (typeof object.inboundHtlcRoundedMsat === "string")
                    message.inboundHtlcRoundedMsat = parseInt(object.inboundHtlcRoundedMsat, 10);
                else if (typeof object.inboundHtlcRoundedMsat === "number")
                    message.inboundHtlcRoundedMsat = object.inboundHtlcRoundedMsat;
                else if (typeof object.inboundHtlcRoundedMsat === "object")
                    message.inboundHtlcRoundedMsat = new $util.LongBits(object.inboundHtlcRoundedMsat.low >>> 0, object.inboundHtlcRoundedMsat.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a ClaimableOnChannelClose message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.ClaimableOnChannelClose
         * @static
         * @param {types.ClaimableOnChannelClose} message ClaimableOnChannelClose
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClaimableOnChannelClose.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.channelId = "";
                object.counterpartyNodeId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.amountSatoshis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amountSatoshis = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.transactionFeeSatoshis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.transactionFeeSatoshis = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.outboundPaymentHtlcRoundedMsat = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.outboundPaymentHtlcRoundedMsat = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.outboundForwardedHtlcRoundedMsat = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.outboundForwardedHtlcRoundedMsat = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.inboundClaimingHtlcRoundedMsat = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.inboundClaimingHtlcRoundedMsat = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.inboundHtlcRoundedMsat = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.inboundHtlcRoundedMsat = options.longs === String ? "0" : 0;
            }
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.counterpartyNodeId != null && message.hasOwnProperty("counterpartyNodeId"))
                object.counterpartyNodeId = message.counterpartyNodeId;
            if (message.amountSatoshis != null && message.hasOwnProperty("amountSatoshis"))
                if (typeof message.amountSatoshis === "number")
                    object.amountSatoshis = options.longs === String ? String(message.amountSatoshis) : message.amountSatoshis;
                else
                    object.amountSatoshis = options.longs === String ? $util.Long.prototype.toString.call(message.amountSatoshis) : options.longs === Number ? new $util.LongBits(message.amountSatoshis.low >>> 0, message.amountSatoshis.high >>> 0).toNumber(true) : message.amountSatoshis;
            if (message.transactionFeeSatoshis != null && message.hasOwnProperty("transactionFeeSatoshis"))
                if (typeof message.transactionFeeSatoshis === "number")
                    object.transactionFeeSatoshis = options.longs === String ? String(message.transactionFeeSatoshis) : message.transactionFeeSatoshis;
                else
                    object.transactionFeeSatoshis = options.longs === String ? $util.Long.prototype.toString.call(message.transactionFeeSatoshis) : options.longs === Number ? new $util.LongBits(message.transactionFeeSatoshis.low >>> 0, message.transactionFeeSatoshis.high >>> 0).toNumber(true) : message.transactionFeeSatoshis;
            if (message.outboundPaymentHtlcRoundedMsat != null && message.hasOwnProperty("outboundPaymentHtlcRoundedMsat"))
                if (typeof message.outboundPaymentHtlcRoundedMsat === "number")
                    object.outboundPaymentHtlcRoundedMsat = options.longs === String ? String(message.outboundPaymentHtlcRoundedMsat) : message.outboundPaymentHtlcRoundedMsat;
                else
                    object.outboundPaymentHtlcRoundedMsat = options.longs === String ? $util.Long.prototype.toString.call(message.outboundPaymentHtlcRoundedMsat) : options.longs === Number ? new $util.LongBits(message.outboundPaymentHtlcRoundedMsat.low >>> 0, message.outboundPaymentHtlcRoundedMsat.high >>> 0).toNumber(true) : message.outboundPaymentHtlcRoundedMsat;
            if (message.outboundForwardedHtlcRoundedMsat != null && message.hasOwnProperty("outboundForwardedHtlcRoundedMsat"))
                if (typeof message.outboundForwardedHtlcRoundedMsat === "number")
                    object.outboundForwardedHtlcRoundedMsat = options.longs === String ? String(message.outboundForwardedHtlcRoundedMsat) : message.outboundForwardedHtlcRoundedMsat;
                else
                    object.outboundForwardedHtlcRoundedMsat = options.longs === String ? $util.Long.prototype.toString.call(message.outboundForwardedHtlcRoundedMsat) : options.longs === Number ? new $util.LongBits(message.outboundForwardedHtlcRoundedMsat.low >>> 0, message.outboundForwardedHtlcRoundedMsat.high >>> 0).toNumber(true) : message.outboundForwardedHtlcRoundedMsat;
            if (message.inboundClaimingHtlcRoundedMsat != null && message.hasOwnProperty("inboundClaimingHtlcRoundedMsat"))
                if (typeof message.inboundClaimingHtlcRoundedMsat === "number")
                    object.inboundClaimingHtlcRoundedMsat = options.longs === String ? String(message.inboundClaimingHtlcRoundedMsat) : message.inboundClaimingHtlcRoundedMsat;
                else
                    object.inboundClaimingHtlcRoundedMsat = options.longs === String ? $util.Long.prototype.toString.call(message.inboundClaimingHtlcRoundedMsat) : options.longs === Number ? new $util.LongBits(message.inboundClaimingHtlcRoundedMsat.low >>> 0, message.inboundClaimingHtlcRoundedMsat.high >>> 0).toNumber(true) : message.inboundClaimingHtlcRoundedMsat;
            if (message.inboundHtlcRoundedMsat != null && message.hasOwnProperty("inboundHtlcRoundedMsat"))
                if (typeof message.inboundHtlcRoundedMsat === "number")
                    object.inboundHtlcRoundedMsat = options.longs === String ? String(message.inboundHtlcRoundedMsat) : message.inboundHtlcRoundedMsat;
                else
                    object.inboundHtlcRoundedMsat = options.longs === String ? $util.Long.prototype.toString.call(message.inboundHtlcRoundedMsat) : options.longs === Number ? new $util.LongBits(message.inboundHtlcRoundedMsat.low >>> 0, message.inboundHtlcRoundedMsat.high >>> 0).toNumber(true) : message.inboundHtlcRoundedMsat;
            return object;
        };

        /**
         * Converts this ClaimableOnChannelClose to JSON.
         * @function toJSON
         * @memberof types.ClaimableOnChannelClose
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClaimableOnChannelClose.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClaimableOnChannelClose
         * @function getTypeUrl
         * @memberof types.ClaimableOnChannelClose
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClaimableOnChannelClose.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.ClaimableOnChannelClose";
        };

        return ClaimableOnChannelClose;
    })();

    types.ClaimableAwaitingConfirmations = (function() {

        /**
         * Properties of a ClaimableAwaitingConfirmations.
         * @memberof types
         * @interface IClaimableAwaitingConfirmations
         * @property {string|null} [channelId] ClaimableAwaitingConfirmations channelId
         * @property {string|null} [counterpartyNodeId] ClaimableAwaitingConfirmations counterpartyNodeId
         * @property {number|Long|null} [amountSatoshis] ClaimableAwaitingConfirmations amountSatoshis
         * @property {number|null} [confirmationHeight] ClaimableAwaitingConfirmations confirmationHeight
         */

        /**
         * Constructs a new ClaimableAwaitingConfirmations.
         * @memberof types
         * @classdesc Represents a ClaimableAwaitingConfirmations.
         * @implements IClaimableAwaitingConfirmations
         * @constructor
         * @param {types.IClaimableAwaitingConfirmations=} [properties] Properties to set
         */
        function ClaimableAwaitingConfirmations(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClaimableAwaitingConfirmations channelId.
         * @member {string} channelId
         * @memberof types.ClaimableAwaitingConfirmations
         * @instance
         */
        ClaimableAwaitingConfirmations.prototype.channelId = "";

        /**
         * ClaimableAwaitingConfirmations counterpartyNodeId.
         * @member {string} counterpartyNodeId
         * @memberof types.ClaimableAwaitingConfirmations
         * @instance
         */
        ClaimableAwaitingConfirmations.prototype.counterpartyNodeId = "";

        /**
         * ClaimableAwaitingConfirmations amountSatoshis.
         * @member {number|Long} amountSatoshis
         * @memberof types.ClaimableAwaitingConfirmations
         * @instance
         */
        ClaimableAwaitingConfirmations.prototype.amountSatoshis = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ClaimableAwaitingConfirmations confirmationHeight.
         * @member {number} confirmationHeight
         * @memberof types.ClaimableAwaitingConfirmations
         * @instance
         */
        ClaimableAwaitingConfirmations.prototype.confirmationHeight = 0;

        /**
         * Creates a new ClaimableAwaitingConfirmations instance using the specified properties.
         * @function create
         * @memberof types.ClaimableAwaitingConfirmations
         * @static
         * @param {types.IClaimableAwaitingConfirmations=} [properties] Properties to set
         * @returns {types.ClaimableAwaitingConfirmations} ClaimableAwaitingConfirmations instance
         */
        ClaimableAwaitingConfirmations.create = function create(properties) {
            return new ClaimableAwaitingConfirmations(properties);
        };

        /**
         * Encodes the specified ClaimableAwaitingConfirmations message. Does not implicitly {@link types.ClaimableAwaitingConfirmations.verify|verify} messages.
         * @function encode
         * @memberof types.ClaimableAwaitingConfirmations
         * @static
         * @param {types.IClaimableAwaitingConfirmations} message ClaimableAwaitingConfirmations message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClaimableAwaitingConfirmations.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.counterpartyNodeId != null && Object.hasOwnProperty.call(message, "counterpartyNodeId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.counterpartyNodeId);
            if (message.amountSatoshis != null && Object.hasOwnProperty.call(message, "amountSatoshis"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.amountSatoshis);
            if (message.confirmationHeight != null && Object.hasOwnProperty.call(message, "confirmationHeight"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.confirmationHeight);
            return writer;
        };

        /**
         * Encodes the specified ClaimableAwaitingConfirmations message, length delimited. Does not implicitly {@link types.ClaimableAwaitingConfirmations.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.ClaimableAwaitingConfirmations
         * @static
         * @param {types.IClaimableAwaitingConfirmations} message ClaimableAwaitingConfirmations message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClaimableAwaitingConfirmations.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClaimableAwaitingConfirmations message from the specified reader or buffer.
         * @function decode
         * @memberof types.ClaimableAwaitingConfirmations
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.ClaimableAwaitingConfirmations} ClaimableAwaitingConfirmations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClaimableAwaitingConfirmations.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.ClaimableAwaitingConfirmations();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.channelId = reader.string();
                        break;
                    }
                case 2: {
                        message.counterpartyNodeId = reader.string();
                        break;
                    }
                case 3: {
                        message.amountSatoshis = reader.uint64();
                        break;
                    }
                case 4: {
                        message.confirmationHeight = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClaimableAwaitingConfirmations message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.ClaimableAwaitingConfirmations
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.ClaimableAwaitingConfirmations} ClaimableAwaitingConfirmations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClaimableAwaitingConfirmations.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClaimableAwaitingConfirmations message.
         * @function verify
         * @memberof types.ClaimableAwaitingConfirmations
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClaimableAwaitingConfirmations.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            if (message.counterpartyNodeId != null && message.hasOwnProperty("counterpartyNodeId"))
                if (!$util.isString(message.counterpartyNodeId))
                    return "counterpartyNodeId: string expected";
            if (message.amountSatoshis != null && message.hasOwnProperty("amountSatoshis"))
                if (!$util.isInteger(message.amountSatoshis) && !(message.amountSatoshis && $util.isInteger(message.amountSatoshis.low) && $util.isInteger(message.amountSatoshis.high)))
                    return "amountSatoshis: integer|Long expected";
            if (message.confirmationHeight != null && message.hasOwnProperty("confirmationHeight"))
                if (!$util.isInteger(message.confirmationHeight))
                    return "confirmationHeight: integer expected";
            return null;
        };

        /**
         * Creates a ClaimableAwaitingConfirmations message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.ClaimableAwaitingConfirmations
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.ClaimableAwaitingConfirmations} ClaimableAwaitingConfirmations
         */
        ClaimableAwaitingConfirmations.fromObject = function fromObject(object) {
            if (object instanceof $root.types.ClaimableAwaitingConfirmations)
                return object;
            let message = new $root.types.ClaimableAwaitingConfirmations();
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            if (object.counterpartyNodeId != null)
                message.counterpartyNodeId = String(object.counterpartyNodeId);
            if (object.amountSatoshis != null)
                if ($util.Long)
                    (message.amountSatoshis = $util.Long.fromValue(object.amountSatoshis)).unsigned = true;
                else if (typeof object.amountSatoshis === "string")
                    message.amountSatoshis = parseInt(object.amountSatoshis, 10);
                else if (typeof object.amountSatoshis === "number")
                    message.amountSatoshis = object.amountSatoshis;
                else if (typeof object.amountSatoshis === "object")
                    message.amountSatoshis = new $util.LongBits(object.amountSatoshis.low >>> 0, object.amountSatoshis.high >>> 0).toNumber(true);
            if (object.confirmationHeight != null)
                message.confirmationHeight = object.confirmationHeight >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ClaimableAwaitingConfirmations message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.ClaimableAwaitingConfirmations
         * @static
         * @param {types.ClaimableAwaitingConfirmations} message ClaimableAwaitingConfirmations
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClaimableAwaitingConfirmations.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.channelId = "";
                object.counterpartyNodeId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.amountSatoshis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amountSatoshis = options.longs === String ? "0" : 0;
                object.confirmationHeight = 0;
            }
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.counterpartyNodeId != null && message.hasOwnProperty("counterpartyNodeId"))
                object.counterpartyNodeId = message.counterpartyNodeId;
            if (message.amountSatoshis != null && message.hasOwnProperty("amountSatoshis"))
                if (typeof message.amountSatoshis === "number")
                    object.amountSatoshis = options.longs === String ? String(message.amountSatoshis) : message.amountSatoshis;
                else
                    object.amountSatoshis = options.longs === String ? $util.Long.prototype.toString.call(message.amountSatoshis) : options.longs === Number ? new $util.LongBits(message.amountSatoshis.low >>> 0, message.amountSatoshis.high >>> 0).toNumber(true) : message.amountSatoshis;
            if (message.confirmationHeight != null && message.hasOwnProperty("confirmationHeight"))
                object.confirmationHeight = message.confirmationHeight;
            return object;
        };

        /**
         * Converts this ClaimableAwaitingConfirmations to JSON.
         * @function toJSON
         * @memberof types.ClaimableAwaitingConfirmations
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClaimableAwaitingConfirmations.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClaimableAwaitingConfirmations
         * @function getTypeUrl
         * @memberof types.ClaimableAwaitingConfirmations
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClaimableAwaitingConfirmations.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.ClaimableAwaitingConfirmations";
        };

        return ClaimableAwaitingConfirmations;
    })();

    types.ContentiousClaimable = (function() {

        /**
         * Properties of a ContentiousClaimable.
         * @memberof types
         * @interface IContentiousClaimable
         * @property {string|null} [channelId] ContentiousClaimable channelId
         * @property {string|null} [counterpartyNodeId] ContentiousClaimable counterpartyNodeId
         * @property {number|Long|null} [amountSatoshis] ContentiousClaimable amountSatoshis
         * @property {number|null} [timeoutHeight] ContentiousClaimable timeoutHeight
         * @property {string|null} [paymentHash] ContentiousClaimable paymentHash
         * @property {string|null} [paymentPreimage] ContentiousClaimable paymentPreimage
         */

        /**
         * Constructs a new ContentiousClaimable.
         * @memberof types
         * @classdesc Represents a ContentiousClaimable.
         * @implements IContentiousClaimable
         * @constructor
         * @param {types.IContentiousClaimable=} [properties] Properties to set
         */
        function ContentiousClaimable(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContentiousClaimable channelId.
         * @member {string} channelId
         * @memberof types.ContentiousClaimable
         * @instance
         */
        ContentiousClaimable.prototype.channelId = "";

        /**
         * ContentiousClaimable counterpartyNodeId.
         * @member {string} counterpartyNodeId
         * @memberof types.ContentiousClaimable
         * @instance
         */
        ContentiousClaimable.prototype.counterpartyNodeId = "";

        /**
         * ContentiousClaimable amountSatoshis.
         * @member {number|Long} amountSatoshis
         * @memberof types.ContentiousClaimable
         * @instance
         */
        ContentiousClaimable.prototype.amountSatoshis = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ContentiousClaimable timeoutHeight.
         * @member {number} timeoutHeight
         * @memberof types.ContentiousClaimable
         * @instance
         */
        ContentiousClaimable.prototype.timeoutHeight = 0;

        /**
         * ContentiousClaimable paymentHash.
         * @member {string} paymentHash
         * @memberof types.ContentiousClaimable
         * @instance
         */
        ContentiousClaimable.prototype.paymentHash = "";

        /**
         * ContentiousClaimable paymentPreimage.
         * @member {string} paymentPreimage
         * @memberof types.ContentiousClaimable
         * @instance
         */
        ContentiousClaimable.prototype.paymentPreimage = "";

        /**
         * Creates a new ContentiousClaimable instance using the specified properties.
         * @function create
         * @memberof types.ContentiousClaimable
         * @static
         * @param {types.IContentiousClaimable=} [properties] Properties to set
         * @returns {types.ContentiousClaimable} ContentiousClaimable instance
         */
        ContentiousClaimable.create = function create(properties) {
            return new ContentiousClaimable(properties);
        };

        /**
         * Encodes the specified ContentiousClaimable message. Does not implicitly {@link types.ContentiousClaimable.verify|verify} messages.
         * @function encode
         * @memberof types.ContentiousClaimable
         * @static
         * @param {types.IContentiousClaimable} message ContentiousClaimable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContentiousClaimable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.counterpartyNodeId != null && Object.hasOwnProperty.call(message, "counterpartyNodeId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.counterpartyNodeId);
            if (message.amountSatoshis != null && Object.hasOwnProperty.call(message, "amountSatoshis"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.amountSatoshis);
            if (message.timeoutHeight != null && Object.hasOwnProperty.call(message, "timeoutHeight"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.timeoutHeight);
            if (message.paymentHash != null && Object.hasOwnProperty.call(message, "paymentHash"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.paymentHash);
            if (message.paymentPreimage != null && Object.hasOwnProperty.call(message, "paymentPreimage"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.paymentPreimage);
            return writer;
        };

        /**
         * Encodes the specified ContentiousClaimable message, length delimited. Does not implicitly {@link types.ContentiousClaimable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.ContentiousClaimable
         * @static
         * @param {types.IContentiousClaimable} message ContentiousClaimable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContentiousClaimable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ContentiousClaimable message from the specified reader or buffer.
         * @function decode
         * @memberof types.ContentiousClaimable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.ContentiousClaimable} ContentiousClaimable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContentiousClaimable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.ContentiousClaimable();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.channelId = reader.string();
                        break;
                    }
                case 2: {
                        message.counterpartyNodeId = reader.string();
                        break;
                    }
                case 3: {
                        message.amountSatoshis = reader.uint64();
                        break;
                    }
                case 4: {
                        message.timeoutHeight = reader.uint32();
                        break;
                    }
                case 5: {
                        message.paymentHash = reader.string();
                        break;
                    }
                case 6: {
                        message.paymentPreimage = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ContentiousClaimable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.ContentiousClaimable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.ContentiousClaimable} ContentiousClaimable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContentiousClaimable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ContentiousClaimable message.
         * @function verify
         * @memberof types.ContentiousClaimable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContentiousClaimable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            if (message.counterpartyNodeId != null && message.hasOwnProperty("counterpartyNodeId"))
                if (!$util.isString(message.counterpartyNodeId))
                    return "counterpartyNodeId: string expected";
            if (message.amountSatoshis != null && message.hasOwnProperty("amountSatoshis"))
                if (!$util.isInteger(message.amountSatoshis) && !(message.amountSatoshis && $util.isInteger(message.amountSatoshis.low) && $util.isInteger(message.amountSatoshis.high)))
                    return "amountSatoshis: integer|Long expected";
            if (message.timeoutHeight != null && message.hasOwnProperty("timeoutHeight"))
                if (!$util.isInteger(message.timeoutHeight))
                    return "timeoutHeight: integer expected";
            if (message.paymentHash != null && message.hasOwnProperty("paymentHash"))
                if (!$util.isString(message.paymentHash))
                    return "paymentHash: string expected";
            if (message.paymentPreimage != null && message.hasOwnProperty("paymentPreimage"))
                if (!$util.isString(message.paymentPreimage))
                    return "paymentPreimage: string expected";
            return null;
        };

        /**
         * Creates a ContentiousClaimable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.ContentiousClaimable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.ContentiousClaimable} ContentiousClaimable
         */
        ContentiousClaimable.fromObject = function fromObject(object) {
            if (object instanceof $root.types.ContentiousClaimable)
                return object;
            let message = new $root.types.ContentiousClaimable();
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            if (object.counterpartyNodeId != null)
                message.counterpartyNodeId = String(object.counterpartyNodeId);
            if (object.amountSatoshis != null)
                if ($util.Long)
                    (message.amountSatoshis = $util.Long.fromValue(object.amountSatoshis)).unsigned = true;
                else if (typeof object.amountSatoshis === "string")
                    message.amountSatoshis = parseInt(object.amountSatoshis, 10);
                else if (typeof object.amountSatoshis === "number")
                    message.amountSatoshis = object.amountSatoshis;
                else if (typeof object.amountSatoshis === "object")
                    message.amountSatoshis = new $util.LongBits(object.amountSatoshis.low >>> 0, object.amountSatoshis.high >>> 0).toNumber(true);
            if (object.timeoutHeight != null)
                message.timeoutHeight = object.timeoutHeight >>> 0;
            if (object.paymentHash != null)
                message.paymentHash = String(object.paymentHash);
            if (object.paymentPreimage != null)
                message.paymentPreimage = String(object.paymentPreimage);
            return message;
        };

        /**
         * Creates a plain object from a ContentiousClaimable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.ContentiousClaimable
         * @static
         * @param {types.ContentiousClaimable} message ContentiousClaimable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContentiousClaimable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.channelId = "";
                object.counterpartyNodeId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.amountSatoshis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amountSatoshis = options.longs === String ? "0" : 0;
                object.timeoutHeight = 0;
                object.paymentHash = "";
                object.paymentPreimage = "";
            }
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.counterpartyNodeId != null && message.hasOwnProperty("counterpartyNodeId"))
                object.counterpartyNodeId = message.counterpartyNodeId;
            if (message.amountSatoshis != null && message.hasOwnProperty("amountSatoshis"))
                if (typeof message.amountSatoshis === "number")
                    object.amountSatoshis = options.longs === String ? String(message.amountSatoshis) : message.amountSatoshis;
                else
                    object.amountSatoshis = options.longs === String ? $util.Long.prototype.toString.call(message.amountSatoshis) : options.longs === Number ? new $util.LongBits(message.amountSatoshis.low >>> 0, message.amountSatoshis.high >>> 0).toNumber(true) : message.amountSatoshis;
            if (message.timeoutHeight != null && message.hasOwnProperty("timeoutHeight"))
                object.timeoutHeight = message.timeoutHeight;
            if (message.paymentHash != null && message.hasOwnProperty("paymentHash"))
                object.paymentHash = message.paymentHash;
            if (message.paymentPreimage != null && message.hasOwnProperty("paymentPreimage"))
                object.paymentPreimage = message.paymentPreimage;
            return object;
        };

        /**
         * Converts this ContentiousClaimable to JSON.
         * @function toJSON
         * @memberof types.ContentiousClaimable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContentiousClaimable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ContentiousClaimable
         * @function getTypeUrl
         * @memberof types.ContentiousClaimable
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ContentiousClaimable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.ContentiousClaimable";
        };

        return ContentiousClaimable;
    })();

    types.MaybeTimeoutClaimableHTLC = (function() {

        /**
         * Properties of a MaybeTimeoutClaimableHTLC.
         * @memberof types
         * @interface IMaybeTimeoutClaimableHTLC
         * @property {string|null} [channelId] MaybeTimeoutClaimableHTLC channelId
         * @property {string|null} [counterpartyNodeId] MaybeTimeoutClaimableHTLC counterpartyNodeId
         * @property {number|Long|null} [amountSatoshis] MaybeTimeoutClaimableHTLC amountSatoshis
         * @property {number|null} [claimableHeight] MaybeTimeoutClaimableHTLC claimableHeight
         * @property {string|null} [paymentHash] MaybeTimeoutClaimableHTLC paymentHash
         * @property {boolean|null} [outboundPayment] MaybeTimeoutClaimableHTLC outboundPayment
         */

        /**
         * Constructs a new MaybeTimeoutClaimableHTLC.
         * @memberof types
         * @classdesc Represents a MaybeTimeoutClaimableHTLC.
         * @implements IMaybeTimeoutClaimableHTLC
         * @constructor
         * @param {types.IMaybeTimeoutClaimableHTLC=} [properties] Properties to set
         */
        function MaybeTimeoutClaimableHTLC(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaybeTimeoutClaimableHTLC channelId.
         * @member {string} channelId
         * @memberof types.MaybeTimeoutClaimableHTLC
         * @instance
         */
        MaybeTimeoutClaimableHTLC.prototype.channelId = "";

        /**
         * MaybeTimeoutClaimableHTLC counterpartyNodeId.
         * @member {string} counterpartyNodeId
         * @memberof types.MaybeTimeoutClaimableHTLC
         * @instance
         */
        MaybeTimeoutClaimableHTLC.prototype.counterpartyNodeId = "";

        /**
         * MaybeTimeoutClaimableHTLC amountSatoshis.
         * @member {number|Long} amountSatoshis
         * @memberof types.MaybeTimeoutClaimableHTLC
         * @instance
         */
        MaybeTimeoutClaimableHTLC.prototype.amountSatoshis = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MaybeTimeoutClaimableHTLC claimableHeight.
         * @member {number} claimableHeight
         * @memberof types.MaybeTimeoutClaimableHTLC
         * @instance
         */
        MaybeTimeoutClaimableHTLC.prototype.claimableHeight = 0;

        /**
         * MaybeTimeoutClaimableHTLC paymentHash.
         * @member {string} paymentHash
         * @memberof types.MaybeTimeoutClaimableHTLC
         * @instance
         */
        MaybeTimeoutClaimableHTLC.prototype.paymentHash = "";

        /**
         * MaybeTimeoutClaimableHTLC outboundPayment.
         * @member {boolean} outboundPayment
         * @memberof types.MaybeTimeoutClaimableHTLC
         * @instance
         */
        MaybeTimeoutClaimableHTLC.prototype.outboundPayment = false;

        /**
         * Creates a new MaybeTimeoutClaimableHTLC instance using the specified properties.
         * @function create
         * @memberof types.MaybeTimeoutClaimableHTLC
         * @static
         * @param {types.IMaybeTimeoutClaimableHTLC=} [properties] Properties to set
         * @returns {types.MaybeTimeoutClaimableHTLC} MaybeTimeoutClaimableHTLC instance
         */
        MaybeTimeoutClaimableHTLC.create = function create(properties) {
            return new MaybeTimeoutClaimableHTLC(properties);
        };

        /**
         * Encodes the specified MaybeTimeoutClaimableHTLC message. Does not implicitly {@link types.MaybeTimeoutClaimableHTLC.verify|verify} messages.
         * @function encode
         * @memberof types.MaybeTimeoutClaimableHTLC
         * @static
         * @param {types.IMaybeTimeoutClaimableHTLC} message MaybeTimeoutClaimableHTLC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MaybeTimeoutClaimableHTLC.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.counterpartyNodeId != null && Object.hasOwnProperty.call(message, "counterpartyNodeId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.counterpartyNodeId);
            if (message.amountSatoshis != null && Object.hasOwnProperty.call(message, "amountSatoshis"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.amountSatoshis);
            if (message.claimableHeight != null && Object.hasOwnProperty.call(message, "claimableHeight"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.claimableHeight);
            if (message.paymentHash != null && Object.hasOwnProperty.call(message, "paymentHash"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.paymentHash);
            if (message.outboundPayment != null && Object.hasOwnProperty.call(message, "outboundPayment"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.outboundPayment);
            return writer;
        };

        /**
         * Encodes the specified MaybeTimeoutClaimableHTLC message, length delimited. Does not implicitly {@link types.MaybeTimeoutClaimableHTLC.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.MaybeTimeoutClaimableHTLC
         * @static
         * @param {types.IMaybeTimeoutClaimableHTLC} message MaybeTimeoutClaimableHTLC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MaybeTimeoutClaimableHTLC.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MaybeTimeoutClaimableHTLC message from the specified reader or buffer.
         * @function decode
         * @memberof types.MaybeTimeoutClaimableHTLC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.MaybeTimeoutClaimableHTLC} MaybeTimeoutClaimableHTLC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MaybeTimeoutClaimableHTLC.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.MaybeTimeoutClaimableHTLC();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.channelId = reader.string();
                        break;
                    }
                case 2: {
                        message.counterpartyNodeId = reader.string();
                        break;
                    }
                case 3: {
                        message.amountSatoshis = reader.uint64();
                        break;
                    }
                case 4: {
                        message.claimableHeight = reader.uint32();
                        break;
                    }
                case 5: {
                        message.paymentHash = reader.string();
                        break;
                    }
                case 6: {
                        message.outboundPayment = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MaybeTimeoutClaimableHTLC message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.MaybeTimeoutClaimableHTLC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.MaybeTimeoutClaimableHTLC} MaybeTimeoutClaimableHTLC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MaybeTimeoutClaimableHTLC.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MaybeTimeoutClaimableHTLC message.
         * @function verify
         * @memberof types.MaybeTimeoutClaimableHTLC
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MaybeTimeoutClaimableHTLC.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            if (message.counterpartyNodeId != null && message.hasOwnProperty("counterpartyNodeId"))
                if (!$util.isString(message.counterpartyNodeId))
                    return "counterpartyNodeId: string expected";
            if (message.amountSatoshis != null && message.hasOwnProperty("amountSatoshis"))
                if (!$util.isInteger(message.amountSatoshis) && !(message.amountSatoshis && $util.isInteger(message.amountSatoshis.low) && $util.isInteger(message.amountSatoshis.high)))
                    return "amountSatoshis: integer|Long expected";
            if (message.claimableHeight != null && message.hasOwnProperty("claimableHeight"))
                if (!$util.isInteger(message.claimableHeight))
                    return "claimableHeight: integer expected";
            if (message.paymentHash != null && message.hasOwnProperty("paymentHash"))
                if (!$util.isString(message.paymentHash))
                    return "paymentHash: string expected";
            if (message.outboundPayment != null && message.hasOwnProperty("outboundPayment"))
                if (typeof message.outboundPayment !== "boolean")
                    return "outboundPayment: boolean expected";
            return null;
        };

        /**
         * Creates a MaybeTimeoutClaimableHTLC message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.MaybeTimeoutClaimableHTLC
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.MaybeTimeoutClaimableHTLC} MaybeTimeoutClaimableHTLC
         */
        MaybeTimeoutClaimableHTLC.fromObject = function fromObject(object) {
            if (object instanceof $root.types.MaybeTimeoutClaimableHTLC)
                return object;
            let message = new $root.types.MaybeTimeoutClaimableHTLC();
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            if (object.counterpartyNodeId != null)
                message.counterpartyNodeId = String(object.counterpartyNodeId);
            if (object.amountSatoshis != null)
                if ($util.Long)
                    (message.amountSatoshis = $util.Long.fromValue(object.amountSatoshis)).unsigned = true;
                else if (typeof object.amountSatoshis === "string")
                    message.amountSatoshis = parseInt(object.amountSatoshis, 10);
                else if (typeof object.amountSatoshis === "number")
                    message.amountSatoshis = object.amountSatoshis;
                else if (typeof object.amountSatoshis === "object")
                    message.amountSatoshis = new $util.LongBits(object.amountSatoshis.low >>> 0, object.amountSatoshis.high >>> 0).toNumber(true);
            if (object.claimableHeight != null)
                message.claimableHeight = object.claimableHeight >>> 0;
            if (object.paymentHash != null)
                message.paymentHash = String(object.paymentHash);
            if (object.outboundPayment != null)
                message.outboundPayment = Boolean(object.outboundPayment);
            return message;
        };

        /**
         * Creates a plain object from a MaybeTimeoutClaimableHTLC message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.MaybeTimeoutClaimableHTLC
         * @static
         * @param {types.MaybeTimeoutClaimableHTLC} message MaybeTimeoutClaimableHTLC
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaybeTimeoutClaimableHTLC.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.channelId = "";
                object.counterpartyNodeId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.amountSatoshis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amountSatoshis = options.longs === String ? "0" : 0;
                object.claimableHeight = 0;
                object.paymentHash = "";
                object.outboundPayment = false;
            }
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.counterpartyNodeId != null && message.hasOwnProperty("counterpartyNodeId"))
                object.counterpartyNodeId = message.counterpartyNodeId;
            if (message.amountSatoshis != null && message.hasOwnProperty("amountSatoshis"))
                if (typeof message.amountSatoshis === "number")
                    object.amountSatoshis = options.longs === String ? String(message.amountSatoshis) : message.amountSatoshis;
                else
                    object.amountSatoshis = options.longs === String ? $util.Long.prototype.toString.call(message.amountSatoshis) : options.longs === Number ? new $util.LongBits(message.amountSatoshis.low >>> 0, message.amountSatoshis.high >>> 0).toNumber(true) : message.amountSatoshis;
            if (message.claimableHeight != null && message.hasOwnProperty("claimableHeight"))
                object.claimableHeight = message.claimableHeight;
            if (message.paymentHash != null && message.hasOwnProperty("paymentHash"))
                object.paymentHash = message.paymentHash;
            if (message.outboundPayment != null && message.hasOwnProperty("outboundPayment"))
                object.outboundPayment = message.outboundPayment;
            return object;
        };

        /**
         * Converts this MaybeTimeoutClaimableHTLC to JSON.
         * @function toJSON
         * @memberof types.MaybeTimeoutClaimableHTLC
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaybeTimeoutClaimableHTLC.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MaybeTimeoutClaimableHTLC
         * @function getTypeUrl
         * @memberof types.MaybeTimeoutClaimableHTLC
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MaybeTimeoutClaimableHTLC.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.MaybeTimeoutClaimableHTLC";
        };

        return MaybeTimeoutClaimableHTLC;
    })();

    types.MaybePreimageClaimableHTLC = (function() {

        /**
         * Properties of a MaybePreimageClaimableHTLC.
         * @memberof types
         * @interface IMaybePreimageClaimableHTLC
         * @property {string|null} [channelId] MaybePreimageClaimableHTLC channelId
         * @property {string|null} [counterpartyNodeId] MaybePreimageClaimableHTLC counterpartyNodeId
         * @property {number|Long|null} [amountSatoshis] MaybePreimageClaimableHTLC amountSatoshis
         * @property {number|null} [expiryHeight] MaybePreimageClaimableHTLC expiryHeight
         * @property {string|null} [paymentHash] MaybePreimageClaimableHTLC paymentHash
         */

        /**
         * Constructs a new MaybePreimageClaimableHTLC.
         * @memberof types
         * @classdesc Represents a MaybePreimageClaimableHTLC.
         * @implements IMaybePreimageClaimableHTLC
         * @constructor
         * @param {types.IMaybePreimageClaimableHTLC=} [properties] Properties to set
         */
        function MaybePreimageClaimableHTLC(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaybePreimageClaimableHTLC channelId.
         * @member {string} channelId
         * @memberof types.MaybePreimageClaimableHTLC
         * @instance
         */
        MaybePreimageClaimableHTLC.prototype.channelId = "";

        /**
         * MaybePreimageClaimableHTLC counterpartyNodeId.
         * @member {string} counterpartyNodeId
         * @memberof types.MaybePreimageClaimableHTLC
         * @instance
         */
        MaybePreimageClaimableHTLC.prototype.counterpartyNodeId = "";

        /**
         * MaybePreimageClaimableHTLC amountSatoshis.
         * @member {number|Long} amountSatoshis
         * @memberof types.MaybePreimageClaimableHTLC
         * @instance
         */
        MaybePreimageClaimableHTLC.prototype.amountSatoshis = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MaybePreimageClaimableHTLC expiryHeight.
         * @member {number} expiryHeight
         * @memberof types.MaybePreimageClaimableHTLC
         * @instance
         */
        MaybePreimageClaimableHTLC.prototype.expiryHeight = 0;

        /**
         * MaybePreimageClaimableHTLC paymentHash.
         * @member {string} paymentHash
         * @memberof types.MaybePreimageClaimableHTLC
         * @instance
         */
        MaybePreimageClaimableHTLC.prototype.paymentHash = "";

        /**
         * Creates a new MaybePreimageClaimableHTLC instance using the specified properties.
         * @function create
         * @memberof types.MaybePreimageClaimableHTLC
         * @static
         * @param {types.IMaybePreimageClaimableHTLC=} [properties] Properties to set
         * @returns {types.MaybePreimageClaimableHTLC} MaybePreimageClaimableHTLC instance
         */
        MaybePreimageClaimableHTLC.create = function create(properties) {
            return new MaybePreimageClaimableHTLC(properties);
        };

        /**
         * Encodes the specified MaybePreimageClaimableHTLC message. Does not implicitly {@link types.MaybePreimageClaimableHTLC.verify|verify} messages.
         * @function encode
         * @memberof types.MaybePreimageClaimableHTLC
         * @static
         * @param {types.IMaybePreimageClaimableHTLC} message MaybePreimageClaimableHTLC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MaybePreimageClaimableHTLC.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.counterpartyNodeId != null && Object.hasOwnProperty.call(message, "counterpartyNodeId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.counterpartyNodeId);
            if (message.amountSatoshis != null && Object.hasOwnProperty.call(message, "amountSatoshis"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.amountSatoshis);
            if (message.expiryHeight != null && Object.hasOwnProperty.call(message, "expiryHeight"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.expiryHeight);
            if (message.paymentHash != null && Object.hasOwnProperty.call(message, "paymentHash"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.paymentHash);
            return writer;
        };

        /**
         * Encodes the specified MaybePreimageClaimableHTLC message, length delimited. Does not implicitly {@link types.MaybePreimageClaimableHTLC.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.MaybePreimageClaimableHTLC
         * @static
         * @param {types.IMaybePreimageClaimableHTLC} message MaybePreimageClaimableHTLC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MaybePreimageClaimableHTLC.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MaybePreimageClaimableHTLC message from the specified reader or buffer.
         * @function decode
         * @memberof types.MaybePreimageClaimableHTLC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.MaybePreimageClaimableHTLC} MaybePreimageClaimableHTLC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MaybePreimageClaimableHTLC.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.MaybePreimageClaimableHTLC();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.channelId = reader.string();
                        break;
                    }
                case 2: {
                        message.counterpartyNodeId = reader.string();
                        break;
                    }
                case 3: {
                        message.amountSatoshis = reader.uint64();
                        break;
                    }
                case 4: {
                        message.expiryHeight = reader.uint32();
                        break;
                    }
                case 5: {
                        message.paymentHash = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MaybePreimageClaimableHTLC message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.MaybePreimageClaimableHTLC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.MaybePreimageClaimableHTLC} MaybePreimageClaimableHTLC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MaybePreimageClaimableHTLC.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MaybePreimageClaimableHTLC message.
         * @function verify
         * @memberof types.MaybePreimageClaimableHTLC
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MaybePreimageClaimableHTLC.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            if (message.counterpartyNodeId != null && message.hasOwnProperty("counterpartyNodeId"))
                if (!$util.isString(message.counterpartyNodeId))
                    return "counterpartyNodeId: string expected";
            if (message.amountSatoshis != null && message.hasOwnProperty("amountSatoshis"))
                if (!$util.isInteger(message.amountSatoshis) && !(message.amountSatoshis && $util.isInteger(message.amountSatoshis.low) && $util.isInteger(message.amountSatoshis.high)))
                    return "amountSatoshis: integer|Long expected";
            if (message.expiryHeight != null && message.hasOwnProperty("expiryHeight"))
                if (!$util.isInteger(message.expiryHeight))
                    return "expiryHeight: integer expected";
            if (message.paymentHash != null && message.hasOwnProperty("paymentHash"))
                if (!$util.isString(message.paymentHash))
                    return "paymentHash: string expected";
            return null;
        };

        /**
         * Creates a MaybePreimageClaimableHTLC message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.MaybePreimageClaimableHTLC
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.MaybePreimageClaimableHTLC} MaybePreimageClaimableHTLC
         */
        MaybePreimageClaimableHTLC.fromObject = function fromObject(object) {
            if (object instanceof $root.types.MaybePreimageClaimableHTLC)
                return object;
            let message = new $root.types.MaybePreimageClaimableHTLC();
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            if (object.counterpartyNodeId != null)
                message.counterpartyNodeId = String(object.counterpartyNodeId);
            if (object.amountSatoshis != null)
                if ($util.Long)
                    (message.amountSatoshis = $util.Long.fromValue(object.amountSatoshis)).unsigned = true;
                else if (typeof object.amountSatoshis === "string")
                    message.amountSatoshis = parseInt(object.amountSatoshis, 10);
                else if (typeof object.amountSatoshis === "number")
                    message.amountSatoshis = object.amountSatoshis;
                else if (typeof object.amountSatoshis === "object")
                    message.amountSatoshis = new $util.LongBits(object.amountSatoshis.low >>> 0, object.amountSatoshis.high >>> 0).toNumber(true);
            if (object.expiryHeight != null)
                message.expiryHeight = object.expiryHeight >>> 0;
            if (object.paymentHash != null)
                message.paymentHash = String(object.paymentHash);
            return message;
        };

        /**
         * Creates a plain object from a MaybePreimageClaimableHTLC message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.MaybePreimageClaimableHTLC
         * @static
         * @param {types.MaybePreimageClaimableHTLC} message MaybePreimageClaimableHTLC
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaybePreimageClaimableHTLC.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.channelId = "";
                object.counterpartyNodeId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.amountSatoshis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amountSatoshis = options.longs === String ? "0" : 0;
                object.expiryHeight = 0;
                object.paymentHash = "";
            }
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.counterpartyNodeId != null && message.hasOwnProperty("counterpartyNodeId"))
                object.counterpartyNodeId = message.counterpartyNodeId;
            if (message.amountSatoshis != null && message.hasOwnProperty("amountSatoshis"))
                if (typeof message.amountSatoshis === "number")
                    object.amountSatoshis = options.longs === String ? String(message.amountSatoshis) : message.amountSatoshis;
                else
                    object.amountSatoshis = options.longs === String ? $util.Long.prototype.toString.call(message.amountSatoshis) : options.longs === Number ? new $util.LongBits(message.amountSatoshis.low >>> 0, message.amountSatoshis.high >>> 0).toNumber(true) : message.amountSatoshis;
            if (message.expiryHeight != null && message.hasOwnProperty("expiryHeight"))
                object.expiryHeight = message.expiryHeight;
            if (message.paymentHash != null && message.hasOwnProperty("paymentHash"))
                object.paymentHash = message.paymentHash;
            return object;
        };

        /**
         * Converts this MaybePreimageClaimableHTLC to JSON.
         * @function toJSON
         * @memberof types.MaybePreimageClaimableHTLC
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaybePreimageClaimableHTLC.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MaybePreimageClaimableHTLC
         * @function getTypeUrl
         * @memberof types.MaybePreimageClaimableHTLC
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MaybePreimageClaimableHTLC.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.MaybePreimageClaimableHTLC";
        };

        return MaybePreimageClaimableHTLC;
    })();

    types.CounterpartyRevokedOutputClaimable = (function() {

        /**
         * Properties of a CounterpartyRevokedOutputClaimable.
         * @memberof types
         * @interface ICounterpartyRevokedOutputClaimable
         * @property {string|null} [channelId] CounterpartyRevokedOutputClaimable channelId
         * @property {string|null} [counterpartyNodeId] CounterpartyRevokedOutputClaimable counterpartyNodeId
         * @property {number|Long|null} [amountSatoshis] CounterpartyRevokedOutputClaimable amountSatoshis
         */

        /**
         * Constructs a new CounterpartyRevokedOutputClaimable.
         * @memberof types
         * @classdesc Represents a CounterpartyRevokedOutputClaimable.
         * @implements ICounterpartyRevokedOutputClaimable
         * @constructor
         * @param {types.ICounterpartyRevokedOutputClaimable=} [properties] Properties to set
         */
        function CounterpartyRevokedOutputClaimable(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CounterpartyRevokedOutputClaimable channelId.
         * @member {string} channelId
         * @memberof types.CounterpartyRevokedOutputClaimable
         * @instance
         */
        CounterpartyRevokedOutputClaimable.prototype.channelId = "";

        /**
         * CounterpartyRevokedOutputClaimable counterpartyNodeId.
         * @member {string} counterpartyNodeId
         * @memberof types.CounterpartyRevokedOutputClaimable
         * @instance
         */
        CounterpartyRevokedOutputClaimable.prototype.counterpartyNodeId = "";

        /**
         * CounterpartyRevokedOutputClaimable amountSatoshis.
         * @member {number|Long} amountSatoshis
         * @memberof types.CounterpartyRevokedOutputClaimable
         * @instance
         */
        CounterpartyRevokedOutputClaimable.prototype.amountSatoshis = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new CounterpartyRevokedOutputClaimable instance using the specified properties.
         * @function create
         * @memberof types.CounterpartyRevokedOutputClaimable
         * @static
         * @param {types.ICounterpartyRevokedOutputClaimable=} [properties] Properties to set
         * @returns {types.CounterpartyRevokedOutputClaimable} CounterpartyRevokedOutputClaimable instance
         */
        CounterpartyRevokedOutputClaimable.create = function create(properties) {
            return new CounterpartyRevokedOutputClaimable(properties);
        };

        /**
         * Encodes the specified CounterpartyRevokedOutputClaimable message. Does not implicitly {@link types.CounterpartyRevokedOutputClaimable.verify|verify} messages.
         * @function encode
         * @memberof types.CounterpartyRevokedOutputClaimable
         * @static
         * @param {types.ICounterpartyRevokedOutputClaimable} message CounterpartyRevokedOutputClaimable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CounterpartyRevokedOutputClaimable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.counterpartyNodeId != null && Object.hasOwnProperty.call(message, "counterpartyNodeId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.counterpartyNodeId);
            if (message.amountSatoshis != null && Object.hasOwnProperty.call(message, "amountSatoshis"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.amountSatoshis);
            return writer;
        };

        /**
         * Encodes the specified CounterpartyRevokedOutputClaimable message, length delimited. Does not implicitly {@link types.CounterpartyRevokedOutputClaimable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.CounterpartyRevokedOutputClaimable
         * @static
         * @param {types.ICounterpartyRevokedOutputClaimable} message CounterpartyRevokedOutputClaimable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CounterpartyRevokedOutputClaimable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CounterpartyRevokedOutputClaimable message from the specified reader or buffer.
         * @function decode
         * @memberof types.CounterpartyRevokedOutputClaimable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.CounterpartyRevokedOutputClaimable} CounterpartyRevokedOutputClaimable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CounterpartyRevokedOutputClaimable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.CounterpartyRevokedOutputClaimable();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.channelId = reader.string();
                        break;
                    }
                case 2: {
                        message.counterpartyNodeId = reader.string();
                        break;
                    }
                case 3: {
                        message.amountSatoshis = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CounterpartyRevokedOutputClaimable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.CounterpartyRevokedOutputClaimable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.CounterpartyRevokedOutputClaimable} CounterpartyRevokedOutputClaimable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CounterpartyRevokedOutputClaimable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CounterpartyRevokedOutputClaimable message.
         * @function verify
         * @memberof types.CounterpartyRevokedOutputClaimable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CounterpartyRevokedOutputClaimable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            if (message.counterpartyNodeId != null && message.hasOwnProperty("counterpartyNodeId"))
                if (!$util.isString(message.counterpartyNodeId))
                    return "counterpartyNodeId: string expected";
            if (message.amountSatoshis != null && message.hasOwnProperty("amountSatoshis"))
                if (!$util.isInteger(message.amountSatoshis) && !(message.amountSatoshis && $util.isInteger(message.amountSatoshis.low) && $util.isInteger(message.amountSatoshis.high)))
                    return "amountSatoshis: integer|Long expected";
            return null;
        };

        /**
         * Creates a CounterpartyRevokedOutputClaimable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.CounterpartyRevokedOutputClaimable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.CounterpartyRevokedOutputClaimable} CounterpartyRevokedOutputClaimable
         */
        CounterpartyRevokedOutputClaimable.fromObject = function fromObject(object) {
            if (object instanceof $root.types.CounterpartyRevokedOutputClaimable)
                return object;
            let message = new $root.types.CounterpartyRevokedOutputClaimable();
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            if (object.counterpartyNodeId != null)
                message.counterpartyNodeId = String(object.counterpartyNodeId);
            if (object.amountSatoshis != null)
                if ($util.Long)
                    (message.amountSatoshis = $util.Long.fromValue(object.amountSatoshis)).unsigned = true;
                else if (typeof object.amountSatoshis === "string")
                    message.amountSatoshis = parseInt(object.amountSatoshis, 10);
                else if (typeof object.amountSatoshis === "number")
                    message.amountSatoshis = object.amountSatoshis;
                else if (typeof object.amountSatoshis === "object")
                    message.amountSatoshis = new $util.LongBits(object.amountSatoshis.low >>> 0, object.amountSatoshis.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a CounterpartyRevokedOutputClaimable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.CounterpartyRevokedOutputClaimable
         * @static
         * @param {types.CounterpartyRevokedOutputClaimable} message CounterpartyRevokedOutputClaimable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CounterpartyRevokedOutputClaimable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.channelId = "";
                object.counterpartyNodeId = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.amountSatoshis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amountSatoshis = options.longs === String ? "0" : 0;
            }
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.counterpartyNodeId != null && message.hasOwnProperty("counterpartyNodeId"))
                object.counterpartyNodeId = message.counterpartyNodeId;
            if (message.amountSatoshis != null && message.hasOwnProperty("amountSatoshis"))
                if (typeof message.amountSatoshis === "number")
                    object.amountSatoshis = options.longs === String ? String(message.amountSatoshis) : message.amountSatoshis;
                else
                    object.amountSatoshis = options.longs === String ? $util.Long.prototype.toString.call(message.amountSatoshis) : options.longs === Number ? new $util.LongBits(message.amountSatoshis.low >>> 0, message.amountSatoshis.high >>> 0).toNumber(true) : message.amountSatoshis;
            return object;
        };

        /**
         * Converts this CounterpartyRevokedOutputClaimable to JSON.
         * @function toJSON
         * @memberof types.CounterpartyRevokedOutputClaimable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CounterpartyRevokedOutputClaimable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CounterpartyRevokedOutputClaimable
         * @function getTypeUrl
         * @memberof types.CounterpartyRevokedOutputClaimable
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CounterpartyRevokedOutputClaimable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.CounterpartyRevokedOutputClaimable";
        };

        return CounterpartyRevokedOutputClaimable;
    })();

    types.PendingSweepBalance = (function() {

        /**
         * Properties of a PendingSweepBalance.
         * @memberof types
         * @interface IPendingSweepBalance
         * @property {types.IPendingBroadcast|null} [pendingBroadcast] PendingSweepBalance pendingBroadcast
         * @property {types.IBroadcastAwaitingConfirmation|null} [broadcastAwaitingConfirmation] PendingSweepBalance broadcastAwaitingConfirmation
         * @property {types.IAwaitingThresholdConfirmations|null} [awaitingThresholdConfirmations] PendingSweepBalance awaitingThresholdConfirmations
         */

        /**
         * Constructs a new PendingSweepBalance.
         * @memberof types
         * @classdesc Represents a PendingSweepBalance.
         * @implements IPendingSweepBalance
         * @constructor
         * @param {types.IPendingSweepBalance=} [properties] Properties to set
         */
        function PendingSweepBalance(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PendingSweepBalance pendingBroadcast.
         * @member {types.IPendingBroadcast|null|undefined} pendingBroadcast
         * @memberof types.PendingSweepBalance
         * @instance
         */
        PendingSweepBalance.prototype.pendingBroadcast = null;

        /**
         * PendingSweepBalance broadcastAwaitingConfirmation.
         * @member {types.IBroadcastAwaitingConfirmation|null|undefined} broadcastAwaitingConfirmation
         * @memberof types.PendingSweepBalance
         * @instance
         */
        PendingSweepBalance.prototype.broadcastAwaitingConfirmation = null;

        /**
         * PendingSweepBalance awaitingThresholdConfirmations.
         * @member {types.IAwaitingThresholdConfirmations|null|undefined} awaitingThresholdConfirmations
         * @memberof types.PendingSweepBalance
         * @instance
         */
        PendingSweepBalance.prototype.awaitingThresholdConfirmations = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * PendingSweepBalance balanceType.
         * @member {"pendingBroadcast"|"broadcastAwaitingConfirmation"|"awaitingThresholdConfirmations"|undefined} balanceType
         * @memberof types.PendingSweepBalance
         * @instance
         */
        Object.defineProperty(PendingSweepBalance.prototype, "balanceType", {
            get: $util.oneOfGetter($oneOfFields = ["pendingBroadcast", "broadcastAwaitingConfirmation", "awaitingThresholdConfirmations"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PendingSweepBalance instance using the specified properties.
         * @function create
         * @memberof types.PendingSweepBalance
         * @static
         * @param {types.IPendingSweepBalance=} [properties] Properties to set
         * @returns {types.PendingSweepBalance} PendingSweepBalance instance
         */
        PendingSweepBalance.create = function create(properties) {
            return new PendingSweepBalance(properties);
        };

        /**
         * Encodes the specified PendingSweepBalance message. Does not implicitly {@link types.PendingSweepBalance.verify|verify} messages.
         * @function encode
         * @memberof types.PendingSweepBalance
         * @static
         * @param {types.IPendingSweepBalance} message PendingSweepBalance message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PendingSweepBalance.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pendingBroadcast != null && Object.hasOwnProperty.call(message, "pendingBroadcast"))
                $root.types.PendingBroadcast.encode(message.pendingBroadcast, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.broadcastAwaitingConfirmation != null && Object.hasOwnProperty.call(message, "broadcastAwaitingConfirmation"))
                $root.types.BroadcastAwaitingConfirmation.encode(message.broadcastAwaitingConfirmation, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.awaitingThresholdConfirmations != null && Object.hasOwnProperty.call(message, "awaitingThresholdConfirmations"))
                $root.types.AwaitingThresholdConfirmations.encode(message.awaitingThresholdConfirmations, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PendingSweepBalance message, length delimited. Does not implicitly {@link types.PendingSweepBalance.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PendingSweepBalance
         * @static
         * @param {types.IPendingSweepBalance} message PendingSweepBalance message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PendingSweepBalance.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PendingSweepBalance message from the specified reader or buffer.
         * @function decode
         * @memberof types.PendingSweepBalance
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PendingSweepBalance} PendingSweepBalance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PendingSweepBalance.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PendingSweepBalance();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.pendingBroadcast = $root.types.PendingBroadcast.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.broadcastAwaitingConfirmation = $root.types.BroadcastAwaitingConfirmation.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.awaitingThresholdConfirmations = $root.types.AwaitingThresholdConfirmations.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PendingSweepBalance message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PendingSweepBalance
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PendingSweepBalance} PendingSweepBalance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PendingSweepBalance.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PendingSweepBalance message.
         * @function verify
         * @memberof types.PendingSweepBalance
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PendingSweepBalance.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.pendingBroadcast != null && message.hasOwnProperty("pendingBroadcast")) {
                properties.balanceType = 1;
                {
                    let error = $root.types.PendingBroadcast.verify(message.pendingBroadcast);
                    if (error)
                        return "pendingBroadcast." + error;
                }
            }
            if (message.broadcastAwaitingConfirmation != null && message.hasOwnProperty("broadcastAwaitingConfirmation")) {
                if (properties.balanceType === 1)
                    return "balanceType: multiple values";
                properties.balanceType = 1;
                {
                    let error = $root.types.BroadcastAwaitingConfirmation.verify(message.broadcastAwaitingConfirmation);
                    if (error)
                        return "broadcastAwaitingConfirmation." + error;
                }
            }
            if (message.awaitingThresholdConfirmations != null && message.hasOwnProperty("awaitingThresholdConfirmations")) {
                if (properties.balanceType === 1)
                    return "balanceType: multiple values";
                properties.balanceType = 1;
                {
                    let error = $root.types.AwaitingThresholdConfirmations.verify(message.awaitingThresholdConfirmations);
                    if (error)
                        return "awaitingThresholdConfirmations." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PendingSweepBalance message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PendingSweepBalance
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PendingSweepBalance} PendingSweepBalance
         */
        PendingSweepBalance.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PendingSweepBalance)
                return object;
            let message = new $root.types.PendingSweepBalance();
            if (object.pendingBroadcast != null) {
                if (typeof object.pendingBroadcast !== "object")
                    throw TypeError(".types.PendingSweepBalance.pendingBroadcast: object expected");
                message.pendingBroadcast = $root.types.PendingBroadcast.fromObject(object.pendingBroadcast);
            }
            if (object.broadcastAwaitingConfirmation != null) {
                if (typeof object.broadcastAwaitingConfirmation !== "object")
                    throw TypeError(".types.PendingSweepBalance.broadcastAwaitingConfirmation: object expected");
                message.broadcastAwaitingConfirmation = $root.types.BroadcastAwaitingConfirmation.fromObject(object.broadcastAwaitingConfirmation);
            }
            if (object.awaitingThresholdConfirmations != null) {
                if (typeof object.awaitingThresholdConfirmations !== "object")
                    throw TypeError(".types.PendingSweepBalance.awaitingThresholdConfirmations: object expected");
                message.awaitingThresholdConfirmations = $root.types.AwaitingThresholdConfirmations.fromObject(object.awaitingThresholdConfirmations);
            }
            return message;
        };

        /**
         * Creates a plain object from a PendingSweepBalance message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PendingSweepBalance
         * @static
         * @param {types.PendingSweepBalance} message PendingSweepBalance
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PendingSweepBalance.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.pendingBroadcast != null && message.hasOwnProperty("pendingBroadcast")) {
                object.pendingBroadcast = $root.types.PendingBroadcast.toObject(message.pendingBroadcast, options);
                if (options.oneofs)
                    object.balanceType = "pendingBroadcast";
            }
            if (message.broadcastAwaitingConfirmation != null && message.hasOwnProperty("broadcastAwaitingConfirmation")) {
                object.broadcastAwaitingConfirmation = $root.types.BroadcastAwaitingConfirmation.toObject(message.broadcastAwaitingConfirmation, options);
                if (options.oneofs)
                    object.balanceType = "broadcastAwaitingConfirmation";
            }
            if (message.awaitingThresholdConfirmations != null && message.hasOwnProperty("awaitingThresholdConfirmations")) {
                object.awaitingThresholdConfirmations = $root.types.AwaitingThresholdConfirmations.toObject(message.awaitingThresholdConfirmations, options);
                if (options.oneofs)
                    object.balanceType = "awaitingThresholdConfirmations";
            }
            return object;
        };

        /**
         * Converts this PendingSweepBalance to JSON.
         * @function toJSON
         * @memberof types.PendingSweepBalance
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PendingSweepBalance.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PendingSweepBalance
         * @function getTypeUrl
         * @memberof types.PendingSweepBalance
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PendingSweepBalance.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PendingSweepBalance";
        };

        return PendingSweepBalance;
    })();

    types.PendingBroadcast = (function() {

        /**
         * Properties of a PendingBroadcast.
         * @memberof types
         * @interface IPendingBroadcast
         * @property {string|null} [channelId] PendingBroadcast channelId
         * @property {number|Long|null} [amountSatoshis] PendingBroadcast amountSatoshis
         */

        /**
         * Constructs a new PendingBroadcast.
         * @memberof types
         * @classdesc Represents a PendingBroadcast.
         * @implements IPendingBroadcast
         * @constructor
         * @param {types.IPendingBroadcast=} [properties] Properties to set
         */
        function PendingBroadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PendingBroadcast channelId.
         * @member {string|null|undefined} channelId
         * @memberof types.PendingBroadcast
         * @instance
         */
        PendingBroadcast.prototype.channelId = null;

        /**
         * PendingBroadcast amountSatoshis.
         * @member {number|Long} amountSatoshis
         * @memberof types.PendingBroadcast
         * @instance
         */
        PendingBroadcast.prototype.amountSatoshis = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * PendingBroadcast _channelId.
         * @member {"channelId"|undefined} _channelId
         * @memberof types.PendingBroadcast
         * @instance
         */
        Object.defineProperty(PendingBroadcast.prototype, "_channelId", {
            get: $util.oneOfGetter($oneOfFields = ["channelId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PendingBroadcast instance using the specified properties.
         * @function create
         * @memberof types.PendingBroadcast
         * @static
         * @param {types.IPendingBroadcast=} [properties] Properties to set
         * @returns {types.PendingBroadcast} PendingBroadcast instance
         */
        PendingBroadcast.create = function create(properties) {
            return new PendingBroadcast(properties);
        };

        /**
         * Encodes the specified PendingBroadcast message. Does not implicitly {@link types.PendingBroadcast.verify|verify} messages.
         * @function encode
         * @memberof types.PendingBroadcast
         * @static
         * @param {types.IPendingBroadcast} message PendingBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PendingBroadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.amountSatoshis != null && Object.hasOwnProperty.call(message, "amountSatoshis"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.amountSatoshis);
            return writer;
        };

        /**
         * Encodes the specified PendingBroadcast message, length delimited. Does not implicitly {@link types.PendingBroadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PendingBroadcast
         * @static
         * @param {types.IPendingBroadcast} message PendingBroadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PendingBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PendingBroadcast message from the specified reader or buffer.
         * @function decode
         * @memberof types.PendingBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PendingBroadcast} PendingBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PendingBroadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PendingBroadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.channelId = reader.string();
                        break;
                    }
                case 2: {
                        message.amountSatoshis = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PendingBroadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PendingBroadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PendingBroadcast} PendingBroadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PendingBroadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PendingBroadcast message.
         * @function verify
         * @memberof types.PendingBroadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PendingBroadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.channelId != null && message.hasOwnProperty("channelId")) {
                properties._channelId = 1;
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            }
            if (message.amountSatoshis != null && message.hasOwnProperty("amountSatoshis"))
                if (!$util.isInteger(message.amountSatoshis) && !(message.amountSatoshis && $util.isInteger(message.amountSatoshis.low) && $util.isInteger(message.amountSatoshis.high)))
                    return "amountSatoshis: integer|Long expected";
            return null;
        };

        /**
         * Creates a PendingBroadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PendingBroadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PendingBroadcast} PendingBroadcast
         */
        PendingBroadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PendingBroadcast)
                return object;
            let message = new $root.types.PendingBroadcast();
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            if (object.amountSatoshis != null)
                if ($util.Long)
                    (message.amountSatoshis = $util.Long.fromValue(object.amountSatoshis)).unsigned = true;
                else if (typeof object.amountSatoshis === "string")
                    message.amountSatoshis = parseInt(object.amountSatoshis, 10);
                else if (typeof object.amountSatoshis === "number")
                    message.amountSatoshis = object.amountSatoshis;
                else if (typeof object.amountSatoshis === "object")
                    message.amountSatoshis = new $util.LongBits(object.amountSatoshis.low >>> 0, object.amountSatoshis.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a PendingBroadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PendingBroadcast
         * @static
         * @param {types.PendingBroadcast} message PendingBroadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PendingBroadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.amountSatoshis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amountSatoshis = options.longs === String ? "0" : 0;
            if (message.channelId != null && message.hasOwnProperty("channelId")) {
                object.channelId = message.channelId;
                if (options.oneofs)
                    object._channelId = "channelId";
            }
            if (message.amountSatoshis != null && message.hasOwnProperty("amountSatoshis"))
                if (typeof message.amountSatoshis === "number")
                    object.amountSatoshis = options.longs === String ? String(message.amountSatoshis) : message.amountSatoshis;
                else
                    object.amountSatoshis = options.longs === String ? $util.Long.prototype.toString.call(message.amountSatoshis) : options.longs === Number ? new $util.LongBits(message.amountSatoshis.low >>> 0, message.amountSatoshis.high >>> 0).toNumber(true) : message.amountSatoshis;
            return object;
        };

        /**
         * Converts this PendingBroadcast to JSON.
         * @function toJSON
         * @memberof types.PendingBroadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PendingBroadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PendingBroadcast
         * @function getTypeUrl
         * @memberof types.PendingBroadcast
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PendingBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PendingBroadcast";
        };

        return PendingBroadcast;
    })();

    types.BroadcastAwaitingConfirmation = (function() {

        /**
         * Properties of a BroadcastAwaitingConfirmation.
         * @memberof types
         * @interface IBroadcastAwaitingConfirmation
         * @property {string|null} [channelId] BroadcastAwaitingConfirmation channelId
         * @property {number|null} [latestBroadcastHeight] BroadcastAwaitingConfirmation latestBroadcastHeight
         * @property {string|null} [latestSpendingTxid] BroadcastAwaitingConfirmation latestSpendingTxid
         * @property {number|Long|null} [amountSatoshis] BroadcastAwaitingConfirmation amountSatoshis
         */

        /**
         * Constructs a new BroadcastAwaitingConfirmation.
         * @memberof types
         * @classdesc Represents a BroadcastAwaitingConfirmation.
         * @implements IBroadcastAwaitingConfirmation
         * @constructor
         * @param {types.IBroadcastAwaitingConfirmation=} [properties] Properties to set
         */
        function BroadcastAwaitingConfirmation(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BroadcastAwaitingConfirmation channelId.
         * @member {string|null|undefined} channelId
         * @memberof types.BroadcastAwaitingConfirmation
         * @instance
         */
        BroadcastAwaitingConfirmation.prototype.channelId = null;

        /**
         * BroadcastAwaitingConfirmation latestBroadcastHeight.
         * @member {number} latestBroadcastHeight
         * @memberof types.BroadcastAwaitingConfirmation
         * @instance
         */
        BroadcastAwaitingConfirmation.prototype.latestBroadcastHeight = 0;

        /**
         * BroadcastAwaitingConfirmation latestSpendingTxid.
         * @member {string} latestSpendingTxid
         * @memberof types.BroadcastAwaitingConfirmation
         * @instance
         */
        BroadcastAwaitingConfirmation.prototype.latestSpendingTxid = "";

        /**
         * BroadcastAwaitingConfirmation amountSatoshis.
         * @member {number|Long} amountSatoshis
         * @memberof types.BroadcastAwaitingConfirmation
         * @instance
         */
        BroadcastAwaitingConfirmation.prototype.amountSatoshis = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * BroadcastAwaitingConfirmation _channelId.
         * @member {"channelId"|undefined} _channelId
         * @memberof types.BroadcastAwaitingConfirmation
         * @instance
         */
        Object.defineProperty(BroadcastAwaitingConfirmation.prototype, "_channelId", {
            get: $util.oneOfGetter($oneOfFields = ["channelId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BroadcastAwaitingConfirmation instance using the specified properties.
         * @function create
         * @memberof types.BroadcastAwaitingConfirmation
         * @static
         * @param {types.IBroadcastAwaitingConfirmation=} [properties] Properties to set
         * @returns {types.BroadcastAwaitingConfirmation} BroadcastAwaitingConfirmation instance
         */
        BroadcastAwaitingConfirmation.create = function create(properties) {
            return new BroadcastAwaitingConfirmation(properties);
        };

        /**
         * Encodes the specified BroadcastAwaitingConfirmation message. Does not implicitly {@link types.BroadcastAwaitingConfirmation.verify|verify} messages.
         * @function encode
         * @memberof types.BroadcastAwaitingConfirmation
         * @static
         * @param {types.IBroadcastAwaitingConfirmation} message BroadcastAwaitingConfirmation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastAwaitingConfirmation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.latestBroadcastHeight != null && Object.hasOwnProperty.call(message, "latestBroadcastHeight"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.latestBroadcastHeight);
            if (message.latestSpendingTxid != null && Object.hasOwnProperty.call(message, "latestSpendingTxid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.latestSpendingTxid);
            if (message.amountSatoshis != null && Object.hasOwnProperty.call(message, "amountSatoshis"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.amountSatoshis);
            return writer;
        };

        /**
         * Encodes the specified BroadcastAwaitingConfirmation message, length delimited. Does not implicitly {@link types.BroadcastAwaitingConfirmation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.BroadcastAwaitingConfirmation
         * @static
         * @param {types.IBroadcastAwaitingConfirmation} message BroadcastAwaitingConfirmation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastAwaitingConfirmation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastAwaitingConfirmation message from the specified reader or buffer.
         * @function decode
         * @memberof types.BroadcastAwaitingConfirmation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.BroadcastAwaitingConfirmation} BroadcastAwaitingConfirmation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastAwaitingConfirmation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.BroadcastAwaitingConfirmation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.channelId = reader.string();
                        break;
                    }
                case 2: {
                        message.latestBroadcastHeight = reader.uint32();
                        break;
                    }
                case 3: {
                        message.latestSpendingTxid = reader.string();
                        break;
                    }
                case 4: {
                        message.amountSatoshis = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BroadcastAwaitingConfirmation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.BroadcastAwaitingConfirmation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.BroadcastAwaitingConfirmation} BroadcastAwaitingConfirmation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastAwaitingConfirmation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastAwaitingConfirmation message.
         * @function verify
         * @memberof types.BroadcastAwaitingConfirmation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastAwaitingConfirmation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.channelId != null && message.hasOwnProperty("channelId")) {
                properties._channelId = 1;
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            }
            if (message.latestBroadcastHeight != null && message.hasOwnProperty("latestBroadcastHeight"))
                if (!$util.isInteger(message.latestBroadcastHeight))
                    return "latestBroadcastHeight: integer expected";
            if (message.latestSpendingTxid != null && message.hasOwnProperty("latestSpendingTxid"))
                if (!$util.isString(message.latestSpendingTxid))
                    return "latestSpendingTxid: string expected";
            if (message.amountSatoshis != null && message.hasOwnProperty("amountSatoshis"))
                if (!$util.isInteger(message.amountSatoshis) && !(message.amountSatoshis && $util.isInteger(message.amountSatoshis.low) && $util.isInteger(message.amountSatoshis.high)))
                    return "amountSatoshis: integer|Long expected";
            return null;
        };

        /**
         * Creates a BroadcastAwaitingConfirmation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.BroadcastAwaitingConfirmation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.BroadcastAwaitingConfirmation} BroadcastAwaitingConfirmation
         */
        BroadcastAwaitingConfirmation.fromObject = function fromObject(object) {
            if (object instanceof $root.types.BroadcastAwaitingConfirmation)
                return object;
            let message = new $root.types.BroadcastAwaitingConfirmation();
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            if (object.latestBroadcastHeight != null)
                message.latestBroadcastHeight = object.latestBroadcastHeight >>> 0;
            if (object.latestSpendingTxid != null)
                message.latestSpendingTxid = String(object.latestSpendingTxid);
            if (object.amountSatoshis != null)
                if ($util.Long)
                    (message.amountSatoshis = $util.Long.fromValue(object.amountSatoshis)).unsigned = true;
                else if (typeof object.amountSatoshis === "string")
                    message.amountSatoshis = parseInt(object.amountSatoshis, 10);
                else if (typeof object.amountSatoshis === "number")
                    message.amountSatoshis = object.amountSatoshis;
                else if (typeof object.amountSatoshis === "object")
                    message.amountSatoshis = new $util.LongBits(object.amountSatoshis.low >>> 0, object.amountSatoshis.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a BroadcastAwaitingConfirmation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.BroadcastAwaitingConfirmation
         * @static
         * @param {types.BroadcastAwaitingConfirmation} message BroadcastAwaitingConfirmation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastAwaitingConfirmation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.latestBroadcastHeight = 0;
                object.latestSpendingTxid = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.amountSatoshis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amountSatoshis = options.longs === String ? "0" : 0;
            }
            if (message.channelId != null && message.hasOwnProperty("channelId")) {
                object.channelId = message.channelId;
                if (options.oneofs)
                    object._channelId = "channelId";
            }
            if (message.latestBroadcastHeight != null && message.hasOwnProperty("latestBroadcastHeight"))
                object.latestBroadcastHeight = message.latestBroadcastHeight;
            if (message.latestSpendingTxid != null && message.hasOwnProperty("latestSpendingTxid"))
                object.latestSpendingTxid = message.latestSpendingTxid;
            if (message.amountSatoshis != null && message.hasOwnProperty("amountSatoshis"))
                if (typeof message.amountSatoshis === "number")
                    object.amountSatoshis = options.longs === String ? String(message.amountSatoshis) : message.amountSatoshis;
                else
                    object.amountSatoshis = options.longs === String ? $util.Long.prototype.toString.call(message.amountSatoshis) : options.longs === Number ? new $util.LongBits(message.amountSatoshis.low >>> 0, message.amountSatoshis.high >>> 0).toNumber(true) : message.amountSatoshis;
            return object;
        };

        /**
         * Converts this BroadcastAwaitingConfirmation to JSON.
         * @function toJSON
         * @memberof types.BroadcastAwaitingConfirmation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastAwaitingConfirmation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BroadcastAwaitingConfirmation
         * @function getTypeUrl
         * @memberof types.BroadcastAwaitingConfirmation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BroadcastAwaitingConfirmation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.BroadcastAwaitingConfirmation";
        };

        return BroadcastAwaitingConfirmation;
    })();

    types.AwaitingThresholdConfirmations = (function() {

        /**
         * Properties of an AwaitingThresholdConfirmations.
         * @memberof types
         * @interface IAwaitingThresholdConfirmations
         * @property {string|null} [channelId] AwaitingThresholdConfirmations channelId
         * @property {string|null} [latestSpendingTxid] AwaitingThresholdConfirmations latestSpendingTxid
         * @property {string|null} [confirmationHash] AwaitingThresholdConfirmations confirmationHash
         * @property {number|null} [confirmationHeight] AwaitingThresholdConfirmations confirmationHeight
         * @property {number|Long|null} [amountSatoshis] AwaitingThresholdConfirmations amountSatoshis
         */

        /**
         * Constructs a new AwaitingThresholdConfirmations.
         * @memberof types
         * @classdesc Represents an AwaitingThresholdConfirmations.
         * @implements IAwaitingThresholdConfirmations
         * @constructor
         * @param {types.IAwaitingThresholdConfirmations=} [properties] Properties to set
         */
        function AwaitingThresholdConfirmations(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AwaitingThresholdConfirmations channelId.
         * @member {string|null|undefined} channelId
         * @memberof types.AwaitingThresholdConfirmations
         * @instance
         */
        AwaitingThresholdConfirmations.prototype.channelId = null;

        /**
         * AwaitingThresholdConfirmations latestSpendingTxid.
         * @member {string} latestSpendingTxid
         * @memberof types.AwaitingThresholdConfirmations
         * @instance
         */
        AwaitingThresholdConfirmations.prototype.latestSpendingTxid = "";

        /**
         * AwaitingThresholdConfirmations confirmationHash.
         * @member {string} confirmationHash
         * @memberof types.AwaitingThresholdConfirmations
         * @instance
         */
        AwaitingThresholdConfirmations.prototype.confirmationHash = "";

        /**
         * AwaitingThresholdConfirmations confirmationHeight.
         * @member {number} confirmationHeight
         * @memberof types.AwaitingThresholdConfirmations
         * @instance
         */
        AwaitingThresholdConfirmations.prototype.confirmationHeight = 0;

        /**
         * AwaitingThresholdConfirmations amountSatoshis.
         * @member {number|Long} amountSatoshis
         * @memberof types.AwaitingThresholdConfirmations
         * @instance
         */
        AwaitingThresholdConfirmations.prototype.amountSatoshis = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * AwaitingThresholdConfirmations _channelId.
         * @member {"channelId"|undefined} _channelId
         * @memberof types.AwaitingThresholdConfirmations
         * @instance
         */
        Object.defineProperty(AwaitingThresholdConfirmations.prototype, "_channelId", {
            get: $util.oneOfGetter($oneOfFields = ["channelId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AwaitingThresholdConfirmations instance using the specified properties.
         * @function create
         * @memberof types.AwaitingThresholdConfirmations
         * @static
         * @param {types.IAwaitingThresholdConfirmations=} [properties] Properties to set
         * @returns {types.AwaitingThresholdConfirmations} AwaitingThresholdConfirmations instance
         */
        AwaitingThresholdConfirmations.create = function create(properties) {
            return new AwaitingThresholdConfirmations(properties);
        };

        /**
         * Encodes the specified AwaitingThresholdConfirmations message. Does not implicitly {@link types.AwaitingThresholdConfirmations.verify|verify} messages.
         * @function encode
         * @memberof types.AwaitingThresholdConfirmations
         * @static
         * @param {types.IAwaitingThresholdConfirmations} message AwaitingThresholdConfirmations message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwaitingThresholdConfirmations.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.latestSpendingTxid != null && Object.hasOwnProperty.call(message, "latestSpendingTxid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.latestSpendingTxid);
            if (message.confirmationHash != null && Object.hasOwnProperty.call(message, "confirmationHash"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.confirmationHash);
            if (message.confirmationHeight != null && Object.hasOwnProperty.call(message, "confirmationHeight"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.confirmationHeight);
            if (message.amountSatoshis != null && Object.hasOwnProperty.call(message, "amountSatoshis"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.amountSatoshis);
            return writer;
        };

        /**
         * Encodes the specified AwaitingThresholdConfirmations message, length delimited. Does not implicitly {@link types.AwaitingThresholdConfirmations.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.AwaitingThresholdConfirmations
         * @static
         * @param {types.IAwaitingThresholdConfirmations} message AwaitingThresholdConfirmations message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwaitingThresholdConfirmations.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AwaitingThresholdConfirmations message from the specified reader or buffer.
         * @function decode
         * @memberof types.AwaitingThresholdConfirmations
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.AwaitingThresholdConfirmations} AwaitingThresholdConfirmations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwaitingThresholdConfirmations.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.AwaitingThresholdConfirmations();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.channelId = reader.string();
                        break;
                    }
                case 2: {
                        message.latestSpendingTxid = reader.string();
                        break;
                    }
                case 3: {
                        message.confirmationHash = reader.string();
                        break;
                    }
                case 4: {
                        message.confirmationHeight = reader.uint32();
                        break;
                    }
                case 5: {
                        message.amountSatoshis = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AwaitingThresholdConfirmations message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.AwaitingThresholdConfirmations
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.AwaitingThresholdConfirmations} AwaitingThresholdConfirmations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwaitingThresholdConfirmations.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AwaitingThresholdConfirmations message.
         * @function verify
         * @memberof types.AwaitingThresholdConfirmations
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AwaitingThresholdConfirmations.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.channelId != null && message.hasOwnProperty("channelId")) {
                properties._channelId = 1;
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            }
            if (message.latestSpendingTxid != null && message.hasOwnProperty("latestSpendingTxid"))
                if (!$util.isString(message.latestSpendingTxid))
                    return "latestSpendingTxid: string expected";
            if (message.confirmationHash != null && message.hasOwnProperty("confirmationHash"))
                if (!$util.isString(message.confirmationHash))
                    return "confirmationHash: string expected";
            if (message.confirmationHeight != null && message.hasOwnProperty("confirmationHeight"))
                if (!$util.isInteger(message.confirmationHeight))
                    return "confirmationHeight: integer expected";
            if (message.amountSatoshis != null && message.hasOwnProperty("amountSatoshis"))
                if (!$util.isInteger(message.amountSatoshis) && !(message.amountSatoshis && $util.isInteger(message.amountSatoshis.low) && $util.isInteger(message.amountSatoshis.high)))
                    return "amountSatoshis: integer|Long expected";
            return null;
        };

        /**
         * Creates an AwaitingThresholdConfirmations message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.AwaitingThresholdConfirmations
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.AwaitingThresholdConfirmations} AwaitingThresholdConfirmations
         */
        AwaitingThresholdConfirmations.fromObject = function fromObject(object) {
            if (object instanceof $root.types.AwaitingThresholdConfirmations)
                return object;
            let message = new $root.types.AwaitingThresholdConfirmations();
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            if (object.latestSpendingTxid != null)
                message.latestSpendingTxid = String(object.latestSpendingTxid);
            if (object.confirmationHash != null)
                message.confirmationHash = String(object.confirmationHash);
            if (object.confirmationHeight != null)
                message.confirmationHeight = object.confirmationHeight >>> 0;
            if (object.amountSatoshis != null)
                if ($util.Long)
                    (message.amountSatoshis = $util.Long.fromValue(object.amountSatoshis)).unsigned = true;
                else if (typeof object.amountSatoshis === "string")
                    message.amountSatoshis = parseInt(object.amountSatoshis, 10);
                else if (typeof object.amountSatoshis === "number")
                    message.amountSatoshis = object.amountSatoshis;
                else if (typeof object.amountSatoshis === "object")
                    message.amountSatoshis = new $util.LongBits(object.amountSatoshis.low >>> 0, object.amountSatoshis.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from an AwaitingThresholdConfirmations message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.AwaitingThresholdConfirmations
         * @static
         * @param {types.AwaitingThresholdConfirmations} message AwaitingThresholdConfirmations
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AwaitingThresholdConfirmations.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.latestSpendingTxid = "";
                object.confirmationHash = "";
                object.confirmationHeight = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.amountSatoshis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amountSatoshis = options.longs === String ? "0" : 0;
            }
            if (message.channelId != null && message.hasOwnProperty("channelId")) {
                object.channelId = message.channelId;
                if (options.oneofs)
                    object._channelId = "channelId";
            }
            if (message.latestSpendingTxid != null && message.hasOwnProperty("latestSpendingTxid"))
                object.latestSpendingTxid = message.latestSpendingTxid;
            if (message.confirmationHash != null && message.hasOwnProperty("confirmationHash"))
                object.confirmationHash = message.confirmationHash;
            if (message.confirmationHeight != null && message.hasOwnProperty("confirmationHeight"))
                object.confirmationHeight = message.confirmationHeight;
            if (message.amountSatoshis != null && message.hasOwnProperty("amountSatoshis"))
                if (typeof message.amountSatoshis === "number")
                    object.amountSatoshis = options.longs === String ? String(message.amountSatoshis) : message.amountSatoshis;
                else
                    object.amountSatoshis = options.longs === String ? $util.Long.prototype.toString.call(message.amountSatoshis) : options.longs === Number ? new $util.LongBits(message.amountSatoshis.low >>> 0, message.amountSatoshis.high >>> 0).toNumber(true) : message.amountSatoshis;
            return object;
        };

        /**
         * Converts this AwaitingThresholdConfirmations to JSON.
         * @function toJSON
         * @memberof types.AwaitingThresholdConfirmations
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AwaitingThresholdConfirmations.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AwaitingThresholdConfirmations
         * @function getTypeUrl
         * @memberof types.AwaitingThresholdConfirmations
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AwaitingThresholdConfirmations.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.AwaitingThresholdConfirmations";
        };

        return AwaitingThresholdConfirmations;
    })();

    types.PageToken = (function() {

        /**
         * Properties of a PageToken.
         * @memberof types
         * @interface IPageToken
         * @property {string|null} [token] PageToken token
         * @property {number|Long|null} [index] PageToken index
         */

        /**
         * Constructs a new PageToken.
         * @memberof types
         * @classdesc Represents a PageToken.
         * @implements IPageToken
         * @constructor
         * @param {types.IPageToken=} [properties] Properties to set
         */
        function PageToken(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PageToken token.
         * @member {string} token
         * @memberof types.PageToken
         * @instance
         */
        PageToken.prototype.token = "";

        /**
         * PageToken index.
         * @member {number|Long} index
         * @memberof types.PageToken
         * @instance
         */
        PageToken.prototype.index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PageToken instance using the specified properties.
         * @function create
         * @memberof types.PageToken
         * @static
         * @param {types.IPageToken=} [properties] Properties to set
         * @returns {types.PageToken} PageToken instance
         */
        PageToken.create = function create(properties) {
            return new PageToken(properties);
        };

        /**
         * Encodes the specified PageToken message. Does not implicitly {@link types.PageToken.verify|verify} messages.
         * @function encode
         * @memberof types.PageToken
         * @static
         * @param {types.IPageToken} message PageToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PageToken.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.index);
            return writer;
        };

        /**
         * Encodes the specified PageToken message, length delimited. Does not implicitly {@link types.PageToken.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.PageToken
         * @static
         * @param {types.IPageToken} message PageToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PageToken.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PageToken message from the specified reader or buffer.
         * @function decode
         * @memberof types.PageToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.PageToken} PageToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PageToken.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.PageToken();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
                        break;
                    }
                case 2: {
                        message.index = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PageToken message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.PageToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.PageToken} PageToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PageToken.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PageToken message.
         * @function verify
         * @memberof types.PageToken
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PageToken.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index) && !(message.index && $util.isInteger(message.index.low) && $util.isInteger(message.index.high)))
                    return "index: integer|Long expected";
            return null;
        };

        /**
         * Creates a PageToken message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.PageToken
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.PageToken} PageToken
         */
        PageToken.fromObject = function fromObject(object) {
            if (object instanceof $root.types.PageToken)
                return object;
            let message = new $root.types.PageToken();
            if (object.token != null)
                message.token = String(object.token);
            if (object.index != null)
                if ($util.Long)
                    (message.index = $util.Long.fromValue(object.index)).unsigned = false;
                else if (typeof object.index === "string")
                    message.index = parseInt(object.index, 10);
                else if (typeof object.index === "number")
                    message.index = object.index;
                else if (typeof object.index === "object")
                    message.index = new $util.LongBits(object.index.low >>> 0, object.index.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PageToken message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.PageToken
         * @static
         * @param {types.PageToken} message PageToken
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PageToken.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.token = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.index = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.index = options.longs === String ? "0" : 0;
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.index != null && message.hasOwnProperty("index"))
                if (typeof message.index === "number")
                    object.index = options.longs === String ? String(message.index) : message.index;
                else
                    object.index = options.longs === String ? $util.Long.prototype.toString.call(message.index) : options.longs === Number ? new $util.LongBits(message.index.low >>> 0, message.index.high >>> 0).toNumber() : message.index;
            return object;
        };

        /**
         * Converts this PageToken to JSON.
         * @function toJSON
         * @memberof types.PageToken
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PageToken.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PageToken
         * @function getTypeUrl
         * @memberof types.PageToken
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PageToken.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.PageToken";
        };

        return PageToken;
    })();

    types.Bolt11InvoiceDescription = (function() {

        /**
         * Properties of a Bolt11InvoiceDescription.
         * @memberof types
         * @interface IBolt11InvoiceDescription
         * @property {string|null} [direct] Bolt11InvoiceDescription direct
         * @property {string|null} [hash] Bolt11InvoiceDescription hash
         */

        /**
         * Constructs a new Bolt11InvoiceDescription.
         * @memberof types
         * @classdesc Represents a Bolt11InvoiceDescription.
         * @implements IBolt11InvoiceDescription
         * @constructor
         * @param {types.IBolt11InvoiceDescription=} [properties] Properties to set
         */
        function Bolt11InvoiceDescription(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bolt11InvoiceDescription direct.
         * @member {string|null|undefined} direct
         * @memberof types.Bolt11InvoiceDescription
         * @instance
         */
        Bolt11InvoiceDescription.prototype.direct = null;

        /**
         * Bolt11InvoiceDescription hash.
         * @member {string|null|undefined} hash
         * @memberof types.Bolt11InvoiceDescription
         * @instance
         */
        Bolt11InvoiceDescription.prototype.hash = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Bolt11InvoiceDescription kind.
         * @member {"direct"|"hash"|undefined} kind
         * @memberof types.Bolt11InvoiceDescription
         * @instance
         */
        Object.defineProperty(Bolt11InvoiceDescription.prototype, "kind", {
            get: $util.oneOfGetter($oneOfFields = ["direct", "hash"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Bolt11InvoiceDescription instance using the specified properties.
         * @function create
         * @memberof types.Bolt11InvoiceDescription
         * @static
         * @param {types.IBolt11InvoiceDescription=} [properties] Properties to set
         * @returns {types.Bolt11InvoiceDescription} Bolt11InvoiceDescription instance
         */
        Bolt11InvoiceDescription.create = function create(properties) {
            return new Bolt11InvoiceDescription(properties);
        };

        /**
         * Encodes the specified Bolt11InvoiceDescription message. Does not implicitly {@link types.Bolt11InvoiceDescription.verify|verify} messages.
         * @function encode
         * @memberof types.Bolt11InvoiceDescription
         * @static
         * @param {types.IBolt11InvoiceDescription} message Bolt11InvoiceDescription message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt11InvoiceDescription.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.direct != null && Object.hasOwnProperty.call(message, "direct"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.direct);
            if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.hash);
            return writer;
        };

        /**
         * Encodes the specified Bolt11InvoiceDescription message, length delimited. Does not implicitly {@link types.Bolt11InvoiceDescription.verify|verify} messages.
         * @function encodeDelimited
         * @memberof types.Bolt11InvoiceDescription
         * @static
         * @param {types.IBolt11InvoiceDescription} message Bolt11InvoiceDescription message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bolt11InvoiceDescription.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bolt11InvoiceDescription message from the specified reader or buffer.
         * @function decode
         * @memberof types.Bolt11InvoiceDescription
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {types.Bolt11InvoiceDescription} Bolt11InvoiceDescription
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt11InvoiceDescription.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.Bolt11InvoiceDescription();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.direct = reader.string();
                        break;
                    }
                case 2: {
                        message.hash = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bolt11InvoiceDescription message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof types.Bolt11InvoiceDescription
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {types.Bolt11InvoiceDescription} Bolt11InvoiceDescription
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bolt11InvoiceDescription.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bolt11InvoiceDescription message.
         * @function verify
         * @memberof types.Bolt11InvoiceDescription
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bolt11InvoiceDescription.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.direct != null && message.hasOwnProperty("direct")) {
                properties.kind = 1;
                if (!$util.isString(message.direct))
                    return "direct: string expected";
            }
            if (message.hash != null && message.hasOwnProperty("hash")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                if (!$util.isString(message.hash))
                    return "hash: string expected";
            }
            return null;
        };

        /**
         * Creates a Bolt11InvoiceDescription message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof types.Bolt11InvoiceDescription
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {types.Bolt11InvoiceDescription} Bolt11InvoiceDescription
         */
        Bolt11InvoiceDescription.fromObject = function fromObject(object) {
            if (object instanceof $root.types.Bolt11InvoiceDescription)
                return object;
            let message = new $root.types.Bolt11InvoiceDescription();
            if (object.direct != null)
                message.direct = String(object.direct);
            if (object.hash != null)
                message.hash = String(object.hash);
            return message;
        };

        /**
         * Creates a plain object from a Bolt11InvoiceDescription message. Also converts values to other types if specified.
         * @function toObject
         * @memberof types.Bolt11InvoiceDescription
         * @static
         * @param {types.Bolt11InvoiceDescription} message Bolt11InvoiceDescription
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bolt11InvoiceDescription.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.direct != null && message.hasOwnProperty("direct")) {
                object.direct = message.direct;
                if (options.oneofs)
                    object.kind = "direct";
            }
            if (message.hash != null && message.hasOwnProperty("hash")) {
                object.hash = message.hash;
                if (options.oneofs)
                    object.kind = "hash";
            }
            return object;
        };

        /**
         * Converts this Bolt11InvoiceDescription to JSON.
         * @function toJSON
         * @memberof types.Bolt11InvoiceDescription
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bolt11InvoiceDescription.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Bolt11InvoiceDescription
         * @function getTypeUrl
         * @memberof types.Bolt11InvoiceDescription
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Bolt11InvoiceDescription.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/types.Bolt11InvoiceDescription";
        };

        return Bolt11InvoiceDescription;
    })();

    return types;
})();

export { $root as default };
