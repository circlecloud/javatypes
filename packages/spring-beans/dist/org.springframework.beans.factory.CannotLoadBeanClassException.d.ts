declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * Exception thrown when the BeanFactory cannot load the specified class
                 * of a given bean.
                 * @author Juergen Hoeller
                 * @since 2.0
                 */
                // @ts-ignore
                class CannotLoadBeanClassException extends org.springframework.beans.FatalBeanException {
                    /**
                     * Create a new CannotLoadBeanClassException.
                     * @param resourceDescription description of the resource
                     *  that the bean definition came from
                     * @param beanName the name of the bean requested
                     * @param beanClassName the name of the bean class
                     * @param cause the root cause
                     */
                    // @ts-ignore
                    constructor(resourceDescription: java.lang.String | string, beanName: java.lang.String | string, beanClassName: java.lang.String | string, cause: java.lang.ClassNotFoundException)
                    /**
                     * Create a new CannotLoadBeanClassException.
                     * @param resourceDescription description of the resource
                     *  that the bean definition came from
                     * @param beanName the name of the bean requested
                     * @param beanClassName the name of the bean class
                     * @param cause the root cause
                     */
                    // @ts-ignore
                    constructor(resourceDescription: java.lang.String | string, beanName: java.lang.String | string, beanClassName: java.lang.String | string, cause: java.lang.LinkageError)
                    /**
                     * Return the description of the resource that the bean
                     * definition came from.
                     */
                    // @ts-ignore
                    public getResourceDescription(): string
                    /**
                     * Return the name of the bean requested.
                     */
                    // @ts-ignore
                    public getBeanName(): string
                    /**
                     * Return the name of the class we were trying to load.
                     */
                    // @ts-ignore
                    public getBeanClassName(): string
                }
            }
        }
    }
}
