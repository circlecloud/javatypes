declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * Exception thrown when a BeanFactory encounters an invalid bean definition:
                 * e.g. in case of incomplete or contradictory bean metadata.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @author Rob Harrop
                 */
                // @ts-ignore
                class BeanDefinitionStoreException extends org.springframework.beans.FatalBeanException {
                    /**
                     * Create a new BeanDefinitionStoreException.
                     * @param msg the detail message (used as exception message as-is)
                     */
                    // @ts-ignore
                    constructor(msg: string)
                    /**
                     * Create a new BeanDefinitionStoreException.
                     * @param msg the detail message (used as exception message as-is)
                     * @param cause the root cause (may be {#code null})
                     */
                    // @ts-ignore
                    constructor(msg: string, cause: Error)
                    /**
                     * Create a new BeanDefinitionStoreException.
                     * @param resourceDescription description of the resource that the bean definition came from
                     * @param msg the detail message (used as exception message as-is)
                     */
                    // @ts-ignore
                    constructor(resourceDescription: string, msg: string)
                    /**
                     * Create a new BeanDefinitionStoreException.
                     * @param resourceDescription description of the resource that the bean definition came from
                     * @param msg the detail message (used as exception message as-is)
                     * @param cause the root cause (may be {#code null})
                     */
                    // @ts-ignore
                    constructor(resourceDescription: string, msg: string, cause: Error)
                    /**
                     * Create a new BeanDefinitionStoreException.
                     * @param resourceDescription description of the resource that the bean definition came from
                     * @param beanName the name of the bean
                     * @param msg the detail message (appended to an introductory message that indicates
                     *  the resource and the name of the bean)
                     */
                    // @ts-ignore
                    constructor(resourceDescription: string, beanName: string, msg: string)
                    /**
                     * Create a new BeanDefinitionStoreException.
                     * @param resourceDescription description of the resource that the bean definition came from
                     * @param beanName the name of the bean
                     * @param msg the detail message (appended to an introductory message that indicates
                     *  the resource and the name of the bean)
                     * @param cause the root cause (may be {#code null})
                     */
                    // @ts-ignore
                    constructor(resourceDescription: string, beanName: string, msg: string, cause: Error)
                    /**
                     * Return the description of the resource that the bean definition came from, if available.
                     */
                    // @ts-ignore
                    getResourceDescription(): java.lang.String
                    /**
                     * Return the name of the bean, if available.
                     */
                    // @ts-ignore
                    getBeanName(): java.lang.String
                }
            }
        }
    }
}
