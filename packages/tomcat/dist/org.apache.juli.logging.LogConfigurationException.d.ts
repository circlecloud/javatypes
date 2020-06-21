declare namespace org {
    namespace apache {
        namespace juli {
            namespace logging {
                /**
                 * <p>An exception that is thrown only if a suitable <code>LogFactory</code>
                 * or <code>Log</code> instance cannot be created by the corresponding
                 * factory methods.</p>
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class LogConfigurationException extends java.lang.RuntimeException {
                    /**
                     * Construct a new exception with <code>null</code> as its detail message.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Construct a new exception with the specified detail message.
                     * @param message The detail message
                     */
                    // @ts-ignore
                    constructor(message: java.lang.String | string)
                    /**
                     * Construct a new exception with the specified cause and a derived
                     * detail message.
                     * @param cause The underlying cause
                     */
                    // @ts-ignore
                    constructor(cause: java.lang.Throwable | Error)
                    /**
                     * Construct a new exception with the specified detail message and cause.
                     * @param message The detail message
                     * @param cause The underlying cause
                     */
                    // @ts-ignore
                    constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
                }
            }
        }
    }
}
