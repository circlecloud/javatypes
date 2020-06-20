declare namespace org {
    namespace springframework {
        namespace web {
            namespace client {
                /**
                 * Exception thrown when an I/O error occurs.
                 * @author Arjen Poutsma
                 * @since 3.0
                 */
                // @ts-ignore
                class ResourceAccessException extends org.springframework.web.client.RestClientException {
                    /**
                     * Construct a new {@code ResourceAccessException} with the given message.
                     * @param msg the message
                     */
                    // @ts-ignore
                    constructor(msg: string)
                    /**
                     * Construct a new {@code ResourceAccessException} with the given message and {@link IOException}.
                     * @param msg the message
                     * @param ex the {#code IOException}
                     */
                    // @ts-ignore
                    constructor(msg: string, ex: java.io.IOException)
                }
            }
        }
    }
}
