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
                    constructor(resourceDescription: string, beanName: string, beanClassName: string, cause: java.lang.ClassNotFoundException)
                    /**
                     * Create a new CannotLoadBeanClassException.
                     * @param resourceDescription description of the resource
                     *  that the bean definition came from
                     * @param beanName the name of the bean requested
                     * @param beanClassName the name of the bean class
                     * @param cause the root cause
                     */
                    // @ts-ignore
                    constructor(resourceDescription: string, beanName: string, beanClassName: string, cause: java.lang.LinkageError)
                    /**
                     * Return the description of the resource that the bean
                     * definition came from.
                     */
                    // @ts-ignore
                    getResourceDescription(): java.lang.String
                    /**
                     * Return the name of the bean requested.
                     */
                    // @ts-ignore
                    getBeanName(): java.lang.String
                    /**
                     * Return the name of the class we were trying to load.
                     */
                    // @ts-ignore
                    getBeanClassName(): java.lang.String
                }
            }
        }
    }
}
