declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * Exception thrown when a bean depends on other beans or simple properties
                 * that were not specified in the bean factory definition, although
                 * dependency checking was enabled.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @since 03.09.2003
                 */
                // @ts-ignore
                class UnsatisfiedDependencyException extends org.springframework.beans.factory.BeanCreationException {
                    /**
                     * Create a new UnsatisfiedDependencyException.
                     * @param resourceDescription description of the resource that the bean definition came from
                     * @param beanName the name of the bean requested
                     * @param propertyName the name of the bean property that couldn't be satisfied
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(resourceDescription: string, beanName: string, propertyName: string, msg: string)
                    /**
                     * Create a new UnsatisfiedDependencyException.
                     * @param resourceDescription description of the resource that the bean definition came from
                     * @param beanName the name of the bean requested
                     * @param propertyName the name of the bean property that couldn't be satisfied
                     * @param ex the bean creation exception that indicated the unsatisfied dependency
                     */
                    // @ts-ignore
                    constructor(resourceDescription: string, beanName: string, propertyName: string, ex: org.springframework.beans.BeansException)
                    /**
                     * Create a new UnsatisfiedDependencyException.
                     * @param resourceDescription description of the resource that the bean definition came from
                     * @param beanName the name of the bean requested
                     * @param injectionPoint the injection point (field or method/constructor parameter)
                     * @param msg the detail message
                     * @since 4.3
                     */
                    // @ts-ignore
                    constructor(resourceDescription: string, beanName: string, injectionPoint: org.springframework.beans.factory.InjectionPoint, msg: string)
                    /**
                     * Create a new UnsatisfiedDependencyException.
                     * @param resourceDescription description of the resource that the bean definition came from
                     * @param beanName the name of the bean requested
                     * @param injectionPoint the injection point (field or method/constructor parameter)
                     * @param ex the bean creation exception that indicated the unsatisfied dependency
                     * @since 4.3
                     */
                    // @ts-ignore
                    constructor(resourceDescription: string, beanName: string, injectionPoint: org.springframework.beans.factory.InjectionPoint, ex: org.springframework.beans.BeansException)
                    /**
                     * Return the injection point (field or method/constructor parameter), if known.
                     * @since 4.3
                     */
                    // @ts-ignore
                    getInjectionPoint(): org.springframework.beans.factory.InjectionPoint
                }
            }
        }
    }
}
