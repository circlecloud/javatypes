declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * Interface to be implemented by beans that wish to be aware of their
                 * owning {@link BeanFactory}.
                 * <p>For example, beans can look up collaborating beans via the factory
                 * (Dependency Lookup). Note that most beans will choose to receive references
                 * to collaborating beans via corresponding bean properties or constructor
                 * arguments (Dependency Injection).
                 * <p>For a list of all bean lifecycle methods, see the
                 * {@link BeanFactory BeanFactory javadocs}.
                 * @author Rod Johnson
                 * @author Chris Beams
                 * @since 11.03.2003
                 * @see BeanNameAware
                 * @see BeanClassLoaderAware
                 * @see InitializingBean
                 * @see org.springframework.context.ApplicationContextAware
                 */
                // @ts-ignore
                interface BeanFactoryAware extends org.springframework.beans.factory.Aware {
                    /**
                     * Callback that supplies the owning factory to a bean instance.
                     * <p>Invoked after the population of normal bean properties
                     * but before an initialization callback such as
                     * {@link InitializingBean#afterPropertiesSet()} or a custom init-method.
                     * @param beanFactory owning BeanFactory (never {#code null}).
                     *  The bean can immediately call methods on the factory.
                     * @throws BeansException in case of initialization errors
                     * @see BeanInitializationException
                     */
                    // @ts-ignore
                    setBeanFactory(beanFactory: org.springframework.beans.factory.BeanFactory): void
                }
            }
        }
    }
}
