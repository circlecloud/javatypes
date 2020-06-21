declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace access {
                /**
                 * Thrown when an invocation failed because of an I/O problem on the
                 * MBeanServerConnection.
                 * @author Juergen Hoeller
                 * @since 2.5.6
                 * @see MBeanClientInterceptor
                 */
                // @ts-ignore
                class MBeanConnectFailureException extends org.springframework.jmx.JmxException {
                    /**
                     * Create a new {@code MBeanConnectFailureException}
                     * with the specified error message and root cause.
                     * @param msg the detail message
                     * @param cause the root cause
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                }
            }
        }
    }
}
