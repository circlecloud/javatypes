declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * Exception thrown in case of a bean being requested despite
                 * bean creation currently not being allowed (for example, during
                 * the shutdown phase of a bean factory).
                 * @author Juergen Hoeller
                 * @since 2.0
                 */
                // @ts-ignore
                class BeanCreationNotAllowedException extends org.springframework.beans.factory.BeanCreationException {
                    /**
                     * Create a new BeanCreationNotAllowedException.
                     * @param beanName the name of the bean requested
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(beanName: string, msg: string)
                }
            }
        }
    }
}
