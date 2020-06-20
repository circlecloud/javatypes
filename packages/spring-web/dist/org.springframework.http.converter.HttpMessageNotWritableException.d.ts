declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                /**
                 * Thrown by {@link HttpMessageConverter} implementations when the
                 * {@link HttpMessageConverter#write} method fails.
                 * @author Arjen Poutsma
                 * @since 3.0
                 */
                // @ts-ignore
                class HttpMessageNotWritableException extends org.springframework.http.converter.HttpMessageConversionException {
                    /**
                     * Create a new HttpMessageNotWritableException.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: string)
                    /**
                     * Create a new HttpMessageNotWritableException.
                     * @param msg the detail message
                     * @param cause the root cause (if any)
                     */
                    // @ts-ignore
                    constructor(msg: string, cause: Error)
                }
            }
        }
    }
}
