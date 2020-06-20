declare namespace org {
    namespace springframework {
        namespace web {
            namespace client {
                /**
                 * Base class for exceptions thrown by {@link RestTemplate} in case a request
                 * fails because of a server error response, as determined via
                 * {@link ResponseErrorHandler#hasError(ClientHttpResponse)}, failure to decode
                 * the response, or a low level I/O error.
                 * @author Arjen Poutsma
                 * @since 3.0
                 */
                // @ts-ignore
                class RestClientException extends NestedRuntimeException {
                    /**
                     * Construct a new instance of {@code RestClientException} with the given message.
                     * @param msg the message
                     */
                    // @ts-ignore
                    constructor(msg: string)
                    /**
                     * Construct a new instance of {@code RestClientException} with the given message and
                     * exception.
                     * @param msg the message
                     * @param ex the exception
                     */
                    // @ts-ignore
                    constructor(msg: string, ex: Error)
                }
            }
        }
    }
}
