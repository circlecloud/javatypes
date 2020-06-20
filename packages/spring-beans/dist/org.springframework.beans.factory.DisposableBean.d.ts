declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * Interface to be implemented by beans that want to release resources on destruction.
                 * A {@link BeanFactory} will invoke the destroy method on individual destruction of a
                 * scoped bean. An {@link org.springframework.context.ApplicationContext} is supposed
                 * to dispose all of its singletons on shutdown, driven by the application lifecycle.
                 * <p>A Spring-managed bean may also implement Java's {@link AutoCloseable} interface
                 * for the same purpose. An alternative to implementing an interface is specifying a
                 * custom destroy method, for example in an XML bean definition. For a list of all
                 * bean lifecycle methods, see the {@link BeanFactory BeanFactory javadocs}.
                 * @author Juergen Hoeller
                 * @since 12.08.2003
                 * @see InitializingBean
                 * @see org.springframework.beans.factory.support.RootBeanDefinition#getDestroyMethodName()
                 * @see org.springframework.beans.factory.config.ConfigurableBeanFactory#destroySingletons()
                 * @see org.springframework.context.ConfigurableApplicationContext#close()
                 */
                // @ts-ignore
                interface DisposableBean {
                    /**
                     * Invoked by the containing {@code BeanFactory} on destruction of a bean.
                     * @throws Exception in case of shutdown errors. Exceptions will get logged
                     *  but not rethrown to allow other beans to release their resources as well.
                     */
                    // @ts-ignore
                    destroy(): void
                }
            }
        }
    }
}
