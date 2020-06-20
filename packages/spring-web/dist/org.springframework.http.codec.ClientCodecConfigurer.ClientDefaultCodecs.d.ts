declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace ClientCodecConfigurer {
                    /**
                     * {@link CodecConfigurer.DefaultCodecs} extension with extra client-side options.
                     */
                    // @ts-ignore
                    interface ClientDefaultCodecs extends org.springframework.http.codec.CodecConfigurer.DefaultCodecs {
                        /**
                         * Configure encoders or writers for use with
                         * {@link org.springframework.http.codec.multipart.MultipartHttpMessageWriter
                         * MultipartHttpMessageWriter}.
                         */
                        // @ts-ignore
                        multipartCodecs(): org.springframework.http.codec.ClientCodecConfigurer.MultipartCodecs
                        /**
                         * Configure the {@code Decoder} to use for Server-Sent Events.
                         * <p>By default if this is not set, and Jackson is available, the
                         * {@link #jackson2JsonDecoder} override is used instead. Use this property
                         * if you want to further customize the SSE decoder.
                         * <p>Note that {@link #maxInMemorySize(int)}, if configured, will be
                         * applied to the given decoder.
                         * @param decoder the decoder to use
                         */
                        // @ts-ignore
                        serverSentEventDecoder(decoder: object): void
                    }
                }
            }
        }
    }
}
