declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace access {
                /**
                 * Thrown if an exception is encountered when trying to retrieve
                 * MBean metadata.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @since 1.2
                 * @see MBeanClientInterceptor
                 * @see MBeanProxyFactoryBean
                 */
                // @ts-ignore
                class MBeanInfoRetrievalException extends org.springframework.jmx.JmxException {
                    /**
                     * Create a new {@code MBeanInfoRetrievalException} with the
                     * specified error message.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string)
                    /**
                     * Create a new {@code MBeanInfoRetrievalException} with the
                     * specified error message and root cause.
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
