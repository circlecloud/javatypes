declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace CodecConfigurer {
                    /**
                     * Exposes the values of properties configured through
                     * {@link #defaultCodecs()} that are applied to default codecs.
                     * The main purpose of this interface is to provide access to them so they
                     * can also be applied to custom codecs if needed.
                     * @since 5.1.12
                     * @see CustomCodecs#registerWithDefaultConfig(Object, Consumer)
                     */
                    // @ts-ignore
                    interface DefaultCodecConfig {
                        /**
                         * Get the configured limit on the number of bytes that can be buffered whenever
                         * the input stream needs to be aggregated.
                         */
                        // @ts-ignore
                        maxInMemorySize(): number
                        /**
                         * Whether to log form data at DEBUG level, and headers at TRACE level.
                         * Both may contain sensitive information.
                         */
                        // @ts-ignore
                        isEnableLoggingRequestDetails(): java.lang.Boolean
                    }
                }
            }
        }
    }
}
