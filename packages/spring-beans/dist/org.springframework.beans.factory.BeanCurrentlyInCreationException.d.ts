declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * Exception thrown in case of a reference to a bean that's currently in creation.
                 * Typically happens when constructor autowiring matches the currently constructed bean.
                 * @author Juergen Hoeller
                 * @since 1.1
                 */
                // @ts-ignore
                class BeanCurrentlyInCreationException extends org.springframework.beans.factory.BeanCreationException {
                    /**
                     * Create a new BeanCurrentlyInCreationException,
                     * with a default error message that indicates a circular reference.
                     * @param beanName the name of the bean requested
                     */
                    // @ts-ignore
                    constructor(beanName: java.lang.String | string)
                    /**
                     * Create a new BeanCurrentlyInCreationException.
                     * @param beanName the name of the bean requested
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(beanName: java.lang.String | string, msg: java.lang.String | string)
                }
            }
        }
    }
}
