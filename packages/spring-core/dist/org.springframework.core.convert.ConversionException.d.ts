declare namespace org {
    namespace springframework {
        namespace core {
            namespace convert {
                /**
                 * Base class for exceptions thrown by the conversion system.
                 * @author Keith Donald
                 * @since 3.0
                 */
                // @ts-ignore
                class ConversionException extends org.springframework.core.NestedRuntimeException {
                    /**
                     * Construct a new conversion exception.
                     * @param message the exception message
                     */
                    // @ts-ignore
                    constructor(message: string)
                    /**
                     * Construct a new conversion exception.
                     * @param message the exception message
                     * @param cause the cause
                     */
                    // @ts-ignore
                    constructor(message: string, cause: Error)
                }
            }
        }
    }
}
