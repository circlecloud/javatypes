declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                /**
                 * Exception thrown in case of failure when exporting an MBean.
                 * @author Rob Harrop
                 * @since 2.0
                 * @see MBeanExportOperations
                 */
                // @ts-ignore
                class MBeanExportException extends org.springframework.jmx.JmxException {
                    /**
                     * Create a new {@code MBeanExportException} with the
                     * specified error message.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: string)
                    /**
                     * Create a new {@code MBeanExportException} with the
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
