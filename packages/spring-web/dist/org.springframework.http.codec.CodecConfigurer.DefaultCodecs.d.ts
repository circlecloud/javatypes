declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace CodecConfigurer {
                    /**
                     * Customize or replace the HTTP message readers and writers registered by
                     * default. The options are further extended by
                     * {@link ClientCodecConfigurer.ClientDefaultCodecs ClientDefaultCodecs} and
                     * {@link ServerCodecConfigurer.ServerDefaultCodecs ServerDefaultCodecs}.
                     */
                    // @ts-ignore
                    interface DefaultCodecs {
                        /**
                         * Override the default Jackson JSON {@code Decoder}.
                         * <p>Note that {@link #maxInMemorySize(int)}, if configured, will be
                         * applied to the given decoder.
                         * @param decoder the decoder instance to use
                         * @see org.springframework.http.codec.json.Jackson2JsonDecoder
                         */
                        // @ts-ignore
                        jackson2JsonDecoder(decoder: object): void
                        /**
                         * Override the default Jackson JSON {@code Encoder}.
                         * @param encoder the encoder instance to use
                         * @see org.springframework.http.codec.json.Jackson2JsonEncoder
                         */
                        // @ts-ignore
                        jackson2JsonEncoder(encoder: object): void
                        /**
                         * Override the default Jackson Smile {@code Decoder}.
                         * <p>Note that {@link #maxInMemorySize(int)}, if configured, will be
                         * applied to the given decoder.
                         * @param decoder the decoder instance to use
                         * @see org.springframework.http.codec.json.Jackson2SmileDecoder
                         */
                        // @ts-ignore
                        jackson2SmileDecoder(decoder: object): void
                        /**
                         * Override the default Jackson Smile {@code Encoder}.
                         * @param encoder the encoder instance to use
                         * @see org.springframework.http.codec.json.Jackson2SmileEncoder
                         */
                        // @ts-ignore
                        jackson2SmileEncoder(encoder: object): void
                        /**
                         * Override the default Protobuf {@code Decoder}.
                         * <p>Note that {@link #maxInMemorySize(int)}, if configured, will be
                         * applied to the given decoder.
                         * @param decoder the decoder instance to use
                         * @since 5.1
                         * @see org.springframework.http.codec.protobuf.ProtobufDecoder
                         */
                        // @ts-ignore
                        protobufDecoder(decoder: object): void
                        /**
                         * Override the default Protobuf {@code Encoder}.
                         * @param encoder the encoder instance to use
                         * @since 5.1
                         * @see org.springframework.http.codec.protobuf.ProtobufEncoder
                         * @see org.springframework.http.codec.protobuf.ProtobufHttpMessageWriter
                         */
                        // @ts-ignore
                        protobufEncoder(encoder: object): void
                        /**
                         * Override the default JAXB2 {@code Decoder}.
                         * <p>Note that {@link #maxInMemorySize(int)}, if configured, will be
                         * applied to the given decoder.
                         * @param decoder the decoder instance to use
                         * @since 5.1.3
                         * @see org.springframework.http.codec.xml.Jaxb2XmlDecoder
                         */
                        // @ts-ignore
                        jaxb2Decoder(decoder: object): void
                        /**
                         * Override the default JABX2 {@code Encoder}.
                         * @param encoder the encoder instance to use
                         * @since 5.1.3
                         * @see org.springframework.http.codec.xml.Jaxb2XmlEncoder
                         */
                        // @ts-ignore
                        jaxb2Encoder(encoder: object): void
                        /**
                         * Configure a limit on the number of bytes that can be buffered whenever
                         * the input stream needs to be aggregated. This can be a result of
                         * decoding to a single {@code DataBuffer},
                         * {@link java.nio.ByteBuffer ByteBuffer}, {@code byte[]},
                         * {@link org.springframework.core.io.Resource Resource}, {@code String}, etc.
                         * It can also occur when splitting the input stream, e.g. delimited text,
                         * in which case the limit applies to data buffered between delimiters.
                         * <p>By default this is not set, in which case individual codec defaults
                         * apply. All codecs are limited to 256K by default.
                         * @param byteCount the max number of bytes to buffer, or -1 for unlimited
                         * @since 5.1.11
                         */
                        // @ts-ignore
                        maxInMemorySize(byteCount: number /*int*/): void
                        /**
                         * Whether to log form data at DEBUG level, and headers at TRACE level.
                         * Both may contain sensitive information.
                         * <p>By default set to {@code false} so that request details are not shown.
                         * @param enable whether to enable or not
                         * @since 5.1
                         */
                        // @ts-ignore
                        enableLoggingRequestDetails(enable: boolean): void
                    }
                }
            }
        }
    }
}
