declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace protobuf {
                    /**
                     * An {@code Encoder} that writes {@link com.google.protobuf.Message}s
                     * using <a href="https://developers.google.com/protocol-buffers/">Google Protocol Buffers</a>.
                     * <p>Flux are serialized using
                     * <a href="https://developers.google.com/protocol-buffers/docs/techniques?hl=en#streaming">delimited Protobuf messages</a>
                     * with the size of each message specified before the message itself. Single values are
                     * serialized using regular Protobuf message format (without the size prepended before the message).
                     * <p>To generate {@code Message} Java classes, you need to install the {@code protoc} binary.
                     * <p>This encoder requires Protobuf 3 or higher, and supports
                     * {@code "application/x-protobuf"} and {@code "application/octet-stream"} with the official
                     * {@code "com.google.protobuf:protobuf-java"} library.
                     * @author Sébastien Deleuze
                     * @since 5.1
                     * @see ProtobufDecoder
                     */
                    // @ts-ignore
                    class ProtobufEncoder extends org.springframework.http.codec.protobuf.ProtobufCodecSupport implements org.springframework.http.codec.HttpMessageEncoder<Message> {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public canEncode(elementType: ResolvableType, mimeType: MimeType): boolean
                        // @ts-ignore
                        public encode(inputStream: object, bufferFactory: DataBufferFactory, elementType: ResolvableType, mimeType: MimeType, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): object
                        // @ts-ignore
                        public encodeValue(message: Message, bufferFactory: DataBufferFactory, valueType: ResolvableType, mimeType: MimeType, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): DataBuffer
                        // @ts-ignore
                        public getStreamingMediaTypes(): Array<org.springframework.http.MediaType>
                        // @ts-ignore
                        public getEncodableMimeTypes(): Array<MimeType>
                    }
                }
            }
        }
    }
}
