declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * Exception thrown when a bean is not a factory, but a user tries to get
                 * at the factory for the given bean name. Whether a bean is a factory is
                 * determined by whether it implements the FactoryBean interface.
                 * @author Rod Johnson
                 * @since 10.03.2003
                 * @see org.springframework.beans.factory.FactoryBean
                 */
                // @ts-ignore
                class BeanIsNotAFactoryException extends org.springframework.beans.factory.BeanNotOfRequiredTypeException {
                    /**
                     * Create a new BeanIsNotAFactoryException.
                     * @param name the name of the bean requested
                     * @param actualType the actual type returned, which did not match
                     *  the expected type
                     */
                    // @ts-ignore
                    constructor(name: string, actualType: java.lang.Class<any>)
                }
            }
        }
    }
}
