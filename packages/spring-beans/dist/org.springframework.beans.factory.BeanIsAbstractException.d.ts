declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * Exception thrown when a bean instance has been requested for
                 * a bean definition which has been marked as abstract.
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see org.springframework.beans.factory.support.AbstractBeanDefinition#setAbstract
                 */
                // @ts-ignore
                class BeanIsAbstractException extends org.springframework.beans.factory.BeanCreationException {
                    /**
                     * Create a new BeanIsAbstractException.
                     * @param beanName the name of the bean requested
                     */
                    // @ts-ignore
                    constructor(beanName: java.lang.String | string)
                }
            }
        }
    }
}
