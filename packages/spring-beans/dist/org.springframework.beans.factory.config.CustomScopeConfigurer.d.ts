declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Simple {@link BeanFactoryPostProcessor} implementation that registers
                     * custom {@link Scope Scope(s)} with the containing {@link ConfigurableBeanFactory}.
                     * <p>Will register all of the supplied {@link #setScopes(java.util.Map) scopes}
                     * with the {@link ConfigurableListableBeanFactory} that is passed to the
                     * {@link #postProcessBeanFactory(ConfigurableListableBeanFactory)} method.
                     * <p>This class allows for <i>declarative</i> registration of custom scopes.
                     * Alternatively, consider implementing a custom {@link BeanFactoryPostProcessor}
                     * that calls {@link ConfigurableBeanFactory#registerScope} programmatically.
                     * @author Juergen Hoeller
                     * @author Rick Evans
                     * @since 2.0
                     * @see ConfigurableBeanFactory#registerScope
                     */
                    // @ts-ignore
                    class CustomScopeConfigurer extends java.lang.Object implements org.springframework.beans.factory.config.BeanFactoryPostProcessor, org.springframework.beans.factory.BeanClassLoaderAware {
                        // @ts-ignore
                        constructor()
                        /**
                         * Specify the custom scopes that are to be registered.
                         * <p>The keys indicate the scope names (of type String); each value
                         * is expected to be the corresponding custom {@link Scope} instance
                         * or class name.
                         */
                        // @ts-ignore
                        public setScopes(scopes: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        /**
                         * Add the given scope to this configurer's map of scopes.
                         * @param scopeName the name of the scope
                         * @param scope the scope implementation
                         * @since 4.1.1
                         */
                        // @ts-ignore
                        public addScope(scopeName: java.lang.String | string, scope: org.springframework.beans.factory.config.Scope): void
                        // @ts-ignore
                        public setOrder(order: number /*int*/): void
                        // @ts-ignore
                        public getOrder(): number /*int*/
                        // @ts-ignore
                        public setBeanClassLoader(beanClassLoader: java.lang.ClassLoader): void
                        // @ts-ignore
                        public postProcessBeanFactory(beanFactory: org.springframework.beans.factory.config.ConfigurableListableBeanFactory): void
                    }
                }
            }
        }
    }
}
