declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace access {
                /**
                 * Thrown when an invocation on an MBean resource failed with an exception (either
                 * a reflection exception or an exception thrown by the target method itself).
                 * @author Juergen Hoeller
                 * @since 1.2
                 * @see MBeanClientInterceptor
                 */
                // @ts-ignore
                class InvocationFailureException extends org.springframework.jmx.JmxException {
                    /**
                     * Create a new {@code InvocationFailureException} with the supplied
                     * error message.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: string)
                    /**
                     * Create a new {@code InvocationFailureException} with the
                     * specified error message and root cause.
                     * @param msg the detail message
                     * @param cause the root cause
                     */
                    // @ts-ignore
                    constructor(msg: string, cause: Error)
                }
            }
        }
    }
}
