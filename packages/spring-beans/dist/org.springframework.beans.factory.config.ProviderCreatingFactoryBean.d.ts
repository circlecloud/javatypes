declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * A {@link org.springframework.beans.factory.FactoryBean} implementation that
                     * returns a value which is a JSR-330 {@link javax.inject.Provider} that in turn
                     * returns a bean sourced from a {@link org.springframework.beans.factory.BeanFactory}.
                     * <p>This is basically a JSR-330 compliant variant of Spring's good old
                     * {@link ObjectFactoryCreatingFactoryBean}. It can be used for traditional
                     * external dependency injection configuration that targets a property or
                     * constructor argument of type {@code javax.inject.Provider}, as an
                     * alternative to JSR-330's {@code @Inject} annotation-driven approach.
                     * @author Juergen Hoeller
                     * @since 3.0.2
                     * @see javax.inject.Provider
                     * @see ObjectFactoryCreatingFactoryBean
                     */
                    // @ts-ignore
                    class ProviderCreatingFactoryBean extends org.springframework.beans.factory.config.AbstractFactoryBean<object> {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the name of the target bean.
                         * <p>The target does not <i>have</i> to be a non-singleton bean, but realistically
                         * always will be (because if the target bean were a singleton, then said singleton
                         * bean could simply be injected straight into the dependent object, thus obviating
                         * the need for the extra level of indirection afforded by this factory approach).
                         */
                        // @ts-ignore
                        public setTargetBeanName(targetBeanName: java.lang.String | string): void
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<any>
                        // @ts-ignore
                        createInstance(): object
                    }
                }
            }
        }
    }
}
