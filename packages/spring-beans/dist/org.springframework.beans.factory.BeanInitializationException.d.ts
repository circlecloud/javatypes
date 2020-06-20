declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * Exception that a bean implementation is suggested to throw if its own
                 * factory-aware initialization code fails. BeansExceptions thrown by
                 * bean factory methods themselves should simply be propagated as-is.
                 * <p>Note that {@code afterPropertiesSet()} or a custom "init-method"
                 * can throw any exception.
                 * @author Juergen Hoeller
                 * @since 13.11.2003
                 * @see BeanFactoryAware#setBeanFactory
                 * @see InitializingBean#afterPropertiesSet
                 */
                // @ts-ignore
                class BeanInitializationException extends org.springframework.beans.FatalBeanException {
                    /**
                     * Create a new BeanInitializationException with the specified message.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: string)
                    /**
                     * Create a new BeanInitializationException with the specified message
                     * and root cause.
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
