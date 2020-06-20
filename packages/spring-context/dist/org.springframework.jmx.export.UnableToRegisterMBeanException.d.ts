declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                /**
                 * Exception thrown when we are unable to register an MBean,
                 * for example because of a naming conflict.
                 * @author Rob Harrop
                 * @since 2.0
                 */
                // @ts-ignore
                class UnableToRegisterMBeanException extends org.springframework.jmx.export.MBeanExportException {
                    /**
                     * Create a new {@code UnableToRegisterMBeanException} with the
                     * specified error message.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: string)
                    /**
                     * Create a new {@code UnableToRegisterMBeanException} with the
                     * specified error message and root cause.
                     * @param msg the detail message
                     * @param cause the root caus
                     */
                    // @ts-ignore
                    constructor(msg: string, cause: Error)
                }
            }
        }
    }
}
