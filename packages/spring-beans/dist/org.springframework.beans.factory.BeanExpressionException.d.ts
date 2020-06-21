declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * Exception that indicates an expression evaluation attempt having failed.
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                class BeanExpressionException extends org.springframework.beans.FatalBeanException {
                    /**
                     * Create a new BeanExpressionException with the specified message.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string)
                    /**
                     * Create a new BeanExpressionException with the specified message
                     * and root cause.
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
