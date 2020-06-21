declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                /**
                 * Base class for {@link org.springframework.core.codec.Encoder},
                 * {@link org.springframework.core.codec.Decoder}, {@link HttpMessageReader}, or
                 * {@link HttpMessageWriter} that uses a logger and shows potentially sensitive
                 * request data.
                 * @author Rossen Stoyanchev
                 * @since 5.1
                 */
                // @ts-ignore
                class LoggingCodecSupport extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Whether to log form data at DEBUG level, and headers at TRACE level.
                     * Both may contain sensitive information.
                     * <p>By default set to {@code false} so that request details are not shown.
                     * @param enable whether to enable or not
                     */
                    // @ts-ignore
                    public setEnableLoggingRequestDetails(enable: boolean): void
                    /**
                     * Whether any logging of values being encoded or decoded is explicitly
                     * disabled regardless of log level.
                     */
                    // @ts-ignore
                    public isEnableLoggingRequestDetails(): boolean
                }
            }
        }
    }
}
