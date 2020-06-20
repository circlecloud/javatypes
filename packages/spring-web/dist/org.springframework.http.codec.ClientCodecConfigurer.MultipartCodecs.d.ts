declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace ClientCodecConfigurer {
                    /**
                     * Registry and container for multipart HTTP message writers.
                     */
                    // @ts-ignore
                    interface MultipartCodecs {
                        /**
                         * Add a Part {@code Encoder}, internally wrapped with
                         * {@link EncoderHttpMessageWriter}.
                         * @param encoder the encoder to add
                         */
                        // @ts-ignore
                        encoder(encoder: object): org.springframework.http.codec.ClientCodecConfigurer.MultipartCodecs
                        /**
                         * Add a Part {@link HttpMessageWriter}. For writers of type
                         * {@link EncoderHttpMessageWriter} consider using the shortcut
                         * {@link #encoder(Encoder)} instead.
                         * @param writer the writer to add
                         */
                        // @ts-ignore
                        writer(writer: org.springframework.http.codec.HttpMessageWriter<any>): org.springframework.http.codec.ClientCodecConfigurer.MultipartCodecs
                    }
                }
            }
        }
    }
}
