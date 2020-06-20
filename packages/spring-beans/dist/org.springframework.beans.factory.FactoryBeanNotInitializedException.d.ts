declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * Exception to be thrown from a FactoryBean's {@code getObject()} method
                 * if the bean is not fully initialized yet, for example because it is involved
                 * in a circular reference.
                 * <p>Note: A circular reference with a FactoryBean cannot be solved by eagerly
                 * caching singleton instances like with normal beans. The reason is that
                 * <i>every</i> FactoryBean needs to be fully initialized before it can
                 * return the created bean, while only <i>specific</i> normal beans need
                 * to be initialized - that is, if a collaborating bean actually invokes
                 * them on initialization instead of just storing the reference.
                 * @author Juergen Hoeller
                 * @since 30.10.2003
                 * @see FactoryBean#getObject()
                 */
                // @ts-ignore
                class FactoryBeanNotInitializedException extends org.springframework.beans.FatalBeanException {
                    /**
                     * Create a new FactoryBeanNotInitializedException with the default message.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new FactoryBeanNotInitializedException with the given message.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: string)
                }
            }
        }
    }
}
