declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace protobuf {
                    /**
                     * A {@code Decoder} that reads {@link com.google.protobuf.Message}s using
                     * <a href="https://developers.google.com/protocol-buffers/">Google Protocol Buffers</a>.
                     * <p>Flux deserialized via
                     * {@link #decode(Publisher, ResolvableType, MimeType, Map)} are expected to use
                     * <a href="https://developers.google.com/protocol-buffers/docs/techniques?hl=en#streaming">
                     * delimited Protobuf messages</a> with the size of each message specified before
                     * the message itself. Single values deserialized via
                     * {@link #decodeToMono(Publisher, ResolvableType, MimeType, Map)} are expected
                     * to use regular Protobuf message format (without the size prepended before
                     * the message).
                     * <p>Notice that default instance of Protobuf message produces empty byte
                     * array, so {@code Mono.just(Msg.getDefaultInstance())} sent over the network
                     * will be deserialized as an empty {@link Mono}.
                     * <p>To generate {@code Message} Java classes, you need to install the
                     * {@code protoc} binary.
                     * <p>This decoder requires Protobuf 3 or higher, and supports
                     * {@code "application/x-protobuf"} and {@code "application/octet-stream"} with
                     * the official {@code "com.google.protobuf:protobuf-java"} library.
                     * @author Sébastien Deleuze
                     * @since 5.1
                     * @see ProtobufEncoder
                     */
                    // @ts-ignore
                    class ProtobufDecoder extends org.springframework.http.codec.protobuf.ProtobufCodecSupport {
                        /**
                         * Construct a new {@code ProtobufDecoder}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct a new {@code ProtobufDecoder} with an initializer that allows the
                         * registration of message extensions.
                         * @param extensionRegistry a message extension registry
                         */
                        // @ts-ignore
                        constructor(extensionRegistry: ExtensionRegistry)
                        /**
                         * The default max size for aggregating messages.
                         */
                        // @ts-ignore
                        readonly DEFAULT_MESSAGE_MAX_SIZE: number /*int*/
                        /**
                         * The max size allowed per message.
                         * <p>By default, this is set to 256K.
                         * @param maxMessageSize the max size per message, or -1 for unlimited
                         */
                        // @ts-ignore
                        setMaxMessageSize(maxMessageSize: number /*int*/): void
                        /**
                         * Return the {@link #setMaxMessageSize configured} message size limit.
                         * @since 5.1.11
                         */
                        // @ts-ignore
                        getMaxMessageSize(): int
                        // @ts-ignore
                        canDecode(elementType: ResolvableType, mimeType: MimeType): boolean
                        // @ts-ignore
                        decode(inputStream: object, elementType: ResolvableType, mimeType: MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                        // @ts-ignore
                        decodeToMono(inputStream: object, elementType: ResolvableType, mimeType: MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                        // @ts-ignore
                        decode(dataBuffer: DataBuffer, targetType: ResolvableType, mimeType: MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): Message
                        // @ts-ignore
                        getDecodableMimeTypes(): java.util.List<MimeType>
                    }
                }
            }
        }
    }
}
