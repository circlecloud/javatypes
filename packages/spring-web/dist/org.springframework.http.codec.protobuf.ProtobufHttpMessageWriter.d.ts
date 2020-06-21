declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace protobuf {
                    /**
                     * {@code HttpMessageWriter} that can write a protobuf {@link Message} and adds
                     * {@code X-Protobuf-Schema}, {@code X-Protobuf-Message} headers and a
                     * {@code delimited=true} parameter is added to the content type if a flux is serialized.
                     * <p>For {@code HttpMessageReader}, just use
                     * {@code new DecoderHttpMessageReader(new ProtobufDecoder())}.
                     * @author Sébastien Deleuze
                     * @since 5.1
                     * @see ProtobufEncoder
                     */
                    // @ts-ignore
                    class ProtobufHttpMessageWriter extends org.springframework.http.codec.EncoderHttpMessageWriter<Message> {
                        /**
                         * Create a new {@code ProtobufHttpMessageWriter} with a default {@link ProtobufEncoder}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new {@code ProtobufHttpMessageWriter} with the given encoder.
                         * @param encoder the Protobuf message encoder to use
                         */
                        // @ts-ignore
                        constructor(encoder: object)
                        // @ts-ignore
                        public write(inputStream: object, elementType: ResolvableType, mediaType: org.springframework.http.MediaType, message: org.springframework.http.ReactiveHttpOutputMessage, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): object
                    }
                }
            }
        }
    }
}
