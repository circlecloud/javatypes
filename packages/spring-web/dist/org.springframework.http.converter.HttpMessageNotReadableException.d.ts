declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                /**
                 * Thrown by {@link HttpMessageConverter} implementations when the
                 * {@link HttpMessageConverter#read} method fails.
                 * @author Arjen Poutsma
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                class HttpMessageNotReadableException extends org.springframework.http.converter.HttpMessageConversionException {
                    /**
                     * Create a new HttpMessageNotReadableException.
                     * @param msg the detail message
                     * @deprecated as of 5.1, in favor of {#link #HttpMessageNotReadableException(String, HttpInputMessage)}
                     */
                    // @ts-ignore
                    constructor(msg: string)
                    /**
                     * Create a new HttpMessageNotReadableException.
                     * @param msg the detail message
                     * @param cause the root cause (if any)
                     * @deprecated as of 5.1, in favor of {#link #HttpMessageNotReadableException(String, Throwable, HttpInputMessage)}
                     */
                    // @ts-ignore
                    constructor(msg: string, cause: Error)
                    /**
                     * Create a new HttpMessageNotReadableException.
                     * @param msg the detail message
                     * @param httpInputMessage the original HTTP message
                     * @since 5.1
                     */
                    // @ts-ignore
                    constructor(msg: string, httpInputMessage: org.springframework.http.HttpInputMessage)
                    /**
                     * Create a new HttpMessageNotReadableException.
                     * @param msg the detail message
                     * @param cause the root cause (if any)
                     * @param httpInputMessage the original HTTP message
                     * @since 5.1
                     */
                    // @ts-ignore
                    constructor(msg: string, cause: Error, httpInputMessage: org.springframework.http.HttpInputMessage)
                    /**
                     * Return the original HTTP message.
                     * @since 5.1
                     */
                    // @ts-ignore
                    getHttpInputMessage(): org.springframework.http.HttpInputMessage
                }
            }
        }
    }
}
