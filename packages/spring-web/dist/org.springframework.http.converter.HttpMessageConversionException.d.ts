declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                /**
                 * Thrown by {@link HttpMessageConverter} implementations when a conversion attempt fails.
                 * @author Arjen Poutsma
                 * @author Sebastien Deleuze
                 * @since 3.0
                 */
                // @ts-ignore
                class HttpMessageConversionException extends NestedRuntimeException {
                    /**
                     * Create a new HttpMessageConversionException.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: string)
                    /**
                     * Create a new HttpMessageConversionException.
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
