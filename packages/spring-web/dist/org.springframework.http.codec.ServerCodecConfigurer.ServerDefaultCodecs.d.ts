declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace ServerCodecConfigurer {
                    /**
                     * {@link CodecConfigurer.DefaultCodecs} extension with extra client-side options.
                     */
                    // @ts-ignore
                    interface ServerDefaultCodecs extends org.springframework.http.codec.CodecConfigurer.DefaultCodecs {
                        /**
                         * Configure the {@code HttpMessageReader} to use for multipart requests.
                         * <p>By default, if
                         * <a href="https://github.com/synchronoss/nio-multipart">Synchronoss NIO Multipart</a>
                         * is present, this is set to
                         * {@link org.springframework.http.codec.multipart.MultipartHttpMessageReader
                         * MultipartHttpMessageReader} created with an instance of
                         * {@link org.springframework.http.codec.multipart.SynchronossPartHttpMessageReader
                         * SynchronossPartHttpMessageReader}.
                         * <p>Note that {@link #maxInMemorySize(int)} and/or
                         * {@link #enableLoggingRequestDetails(boolean)}, if configured, will be
                         * applied to the given reader, if applicable.
                         * @param reader the message reader to use for multipart requests.
                         * @since 5.1.11
                         */
                        // @ts-ignore
                        multipartReader(reader: org.springframework.http.codec.HttpMessageReader<any>): void
                        /**
                         * Configure the {@code Encoder} to use for Server-Sent Events.
                         * <p>By default if this is not set, and Jackson is available, the
                         * {@link #jackson2JsonEncoder} override is used instead. Use this method
                         * to customize the SSE encoder.
                         */
                        // @ts-ignore
                        serverSentEventEncoder(encoder: object): void
                    }
                }
            }
        }
    }
}
