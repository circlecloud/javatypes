declare namespace org {
    namespace springframework {
        namespace jmx {
            /**
             * Exception thrown when we cannot locate an instance of an {@code MBeanServer},
             * or when more than one instance is found.
             * @author Rob Harrop
             * @author Juergen Hoeller
             * @since 1.2
             * @see org.springframework.jmx.support.JmxUtils#locateMBeanServer
             */
            // @ts-ignore
            class MBeanServerNotFoundException extends org.springframework.jmx.JmxException {
                /**
                 * Create a new {@code MBeanServerNotFoundException} with the
                 * supplied error message.
                 * @param msg the error message
                 */
                // @ts-ignore
                constructor(msg: string)
                /**
                 * Create a new {@code MBeanServerNotFoundException} with the
                 * specified error message and root cause.
                 * @param msg the error message
                 * @param cause the root cause
                 */
                // @ts-ignore
                constructor(msg: string, cause: Error)
            }
        }
    }
}
