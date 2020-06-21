declare namespace org {
    namespace springframework {
        namespace validation {
            namespace beanvalidation {
                /**
                 * JSR-303 {@link ConstraintValidatorFactory} implementation that delegates to a
                 * Spring BeanFactory for creating autowired {@link ConstraintValidator} instances.
                 * <p>Note that this class is meant for programmatic use, not for declarative use
                 * in a standard {@code validation.xml} file. Consider
                 * {@link org.springframework.web.bind.support.SpringWebConstraintValidatorFactory}
                 * for declarative use in a web application, e.g. with JAX-RS or JAX-WS.
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see org.springframework.beans.factory.config.AutowireCapableBeanFactory#createBean(Class)
                 * @see org.springframework.context.ApplicationContext#getAutowireCapableBeanFactory()
                 */
                // @ts-ignore
                class SpringConstraintValidatorFactory extends java.lang.Object {
                    /**
                     * Create a new SpringConstraintValidatorFactory for the given BeanFactory.
                     * @param beanFactory the target BeanFactory
                     */
                    // @ts-ignore
                    constructor(beanFactory: AutowireCapableBeanFactory)
                    // @ts-ignore
                    public getInstance<T extends java.lang.Object>(key: java.lang.Class<T>): T
                    // @ts-ignore
                    public releaseInstance(instance: object): void
                }
            }
        }
    }
}
