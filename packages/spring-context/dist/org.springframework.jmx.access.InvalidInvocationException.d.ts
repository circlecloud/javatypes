declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace access {
                /**
                 * Thrown when trying to invoke an operation on a proxy that is not exposed
                 * by the proxied MBean resource's management interface.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @since 1.2
                 * @see MBeanClientInterceptor
                 */
                // @ts-ignore
                class InvalidInvocationException extends javax.management.JMRuntimeException {
                    /**
                     * Create a new {@code InvalidInvocationException} with the supplied
                     * error message.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: string)
                }
            }
        }
    }
}
