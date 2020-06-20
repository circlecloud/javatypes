declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace CodecConfigurer {
                    /**
                     * Registry for custom HTTP message readers and writers.
                     */
                    // @ts-ignore
                    interface CustomCodecs {
                        /**
                         * Register a custom codec. This is expected to be one of the following:
                         * <ul>
                         * <li>{@link HttpMessageReader}
                         * <li>{@link HttpMessageWriter}
                         * <li>{@link Encoder} (wrapped internally with {@link EncoderHttpMessageWriter})
                         * <li>{@link Decoder} (wrapped internally with {@link DecoderHttpMessageReader})
                         * </ul>
                         * @param codec the codec to register
                         * @since 5.1.13
                         */
                        // @ts-ignore
                        register(codec: any): void
                        /**
                         * Variant of {@link #register(Object)} that also applies the below
                         * properties, if configured, via {@link #defaultCodecs()}:
                         * <ul>
                         * <li>{@link CodecConfigurer.DefaultCodecs#maxInMemorySize(int) maxInMemorySize}
                         * <li>{@link CodecConfigurer.DefaultCodecs#enableLoggingRequestDetails(boolean) enableLoggingRequestDetails}
                         * </ul>
                         * <p>The properties are applied every time {@link #getReaders()} or
                         * {@link #getWriters()} are used to obtain the list of configured
                         * readers or writers.
                         * @param codec the codec to register and apply default config to
                         * @since 5.1.13
                         */
                        // @ts-ignore
                        registerWithDefaultConfig(codec: any): void
                        /**
                         * Variant of {@link #register(Object)} that also allows the caller to
                         * apply the properties from {@link DefaultCodecConfig} to the given
                         * codec. If you want to apply all the properties, prefer using
                         * {@link #registerWithDefaultConfig(Object)}.
                         * <p>The consumer is called every time {@link #getReaders()} or
                         * {@link #getWriters()} are used to obtain the list of configured
                         * readers or writers.
                         * @param codec the codec to register
                         * @param configConsumer consumer of the default config
                         * @since 5.1.13
                         */
                        // @ts-ignore
                        registerWithDefaultConfig(codec: any, configConsumer: java.util.function.Consumer<org.springframework.http.codec.CodecConfigurer.DefaultCodecConfig> | java.util.function$.Consumer<org.springframework.http.codec.CodecConfigurer.DefaultCodecConfig>): void
                        /**
                         * Add a custom {@code Decoder} internally wrapped with
                         * {@link DecoderHttpMessageReader}).
                         * @param decoder the decoder to add
                         * @deprecated as of 5.1.13, use {#link #register(Object)} or
                         *  {@link #registerWithDefaultConfig(Object)} instead.
                         */
                        // @ts-ignore
                        decoder(decoder: object): void
                        /**
                         * Add a custom {@code Encoder}, internally wrapped with
                         * {@link EncoderHttpMessageWriter}.
                         * @param encoder the encoder to add
                         * @deprecated as of 5.1.13, use {#link #register(Object)} or
                         *  {@link #registerWithDefaultConfig(Object)} instead.
                         */
                        // @ts-ignore
                        encoder(encoder: object): void
                        /**
                         * Add a custom {@link HttpMessageReader}. For readers of type
                         * {@link DecoderHttpMessageReader} consider using the shortcut
                         * {@link #decoder(Decoder)} instead.
                         * @param reader the reader to add
                         * @deprecated as of 5.1.13, use {#link #register(Object)} or
                         *  {@link #registerWithDefaultConfig(Object)} instead.
                         */
                        // @ts-ignore
                        reader(reader: org.springframework.http.codec.HttpMessageReader<any>): void
                        /**
                         * Add a custom {@link HttpMessageWriter}. For writers of type
                         * {@link EncoderHttpMessageWriter} consider using the shortcut
                         * {@link #encoder(Encoder)} instead.
                         * @param writer the writer to add
                         * @deprecated as of 5.1.13, use {#link #register(Object)} or
                         *  {@link #registerWithDefaultConfig(Object)} instead.
                         */
                        // @ts-ignore
                        writer(writer: org.springframework.http.codec.HttpMessageWriter<any>): void
                        /**
                         * Register a callback for the {@link DefaultCodecConfig configuration}
                         * applied to default codecs. This allows custom codecs to follow general
                         * guidelines applied to default ones, such as logging details and limiting
                         * the amount of buffered data.
                         * @param codecsConfigConsumer the default codecs configuration callback
                         * @deprecated as of 5.1.13, use {#link #registerWithDefaultConfig(Object)}
                         *  or {@link #registerWithDefaultConfig(Object, Consumer)} instead.
                         */
                        // @ts-ignore
                        withDefaultCodecConfig(codecsConfigConsumer: java.util.function.Consumer<org.springframework.http.codec.CodecConfigurer.DefaultCodecConfig> | java.util.function$.Consumer<org.springframework.http.codec.CodecConfigurer.DefaultCodecConfig>): void
                    }
                }
            }
        }
    }
}
