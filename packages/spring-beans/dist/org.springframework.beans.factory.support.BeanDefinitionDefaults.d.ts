declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * A simple holder for {@code BeanDefinition} property defaults.
                     * @author Mark Fisher
                     * @author Juergen Hoeller
                     * @since 2.5
                     */
                    // @ts-ignore
                    class BeanDefinitionDefaults extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set whether beans should be lazily initialized by default.
                         * <p>If {@code false}, the bean will get instantiated on startup by bean
                         * factories that perform eager initialization of singletons.
                         */
                        // @ts-ignore
                        public setLazyInit(lazyInit: boolean): void
                        /**
                         * Return whether beans should be lazily initialized by default, i.e. not
                         * eagerly instantiated on startup. Only applicable to singleton beans.
                         * @return whether to apply lazy-init semantics ({#code false} by default)
                         */
                        // @ts-ignore
                        public isLazyInit(): boolean
                        /**
                         * Return whether beans should be lazily initialized by default, i.e. not
                         * eagerly instantiated on startup. Only applicable to singleton beans.
                         * @return the lazy-init flag if explicitly set, or {#code null} otherwise
                         * @since 5.2
                         */
                        // @ts-ignore
                        public getLazyInit(): java.lang.Boolean
                        /**
                         * Set the autowire mode. This determines whether any automagical detection
                         * and setting of bean references will happen. Default is AUTOWIRE_NO
                         * which means there won't be convention-based autowiring by name or type
                         * (however, there may still be explicit annotation-driven autowiring).
                         * @param autowireMode the autowire mode to set.
                         *  Must be one of the constants defined in {#link AbstractBeanDefinition}.
                         */
                        // @ts-ignore
                        public setAutowireMode(autowireMode: number /*int*/): void
                        /**
                         * Return the default autowire mode.
                         */
                        // @ts-ignore
                        public getAutowireMode(): number /*int*/
                        /**
                         * Set the dependency check code.
                         * @param dependencyCheck the code to set.
                         *  Must be one of the constants defined in {#link AbstractBeanDefinition}.
                         */
                        // @ts-ignore
                        public setDependencyCheck(dependencyCheck: number /*int*/): void
                        /**
                         * Return the default dependency check code.
                         */
                        // @ts-ignore
                        public getDependencyCheck(): number /*int*/
                        /**
                         * Set the name of the default initializer method.
                         */
                        // @ts-ignore
                        public setInitMethodName(initMethodName: java.lang.String | string): void
                        /**
                         * Return the name of the default initializer method.
                         */
                        // @ts-ignore
                        public getInitMethodName(): string
                        /**
                         * Set the name of the default destroy method.
                         */
                        // @ts-ignore
                        public setDestroyMethodName(destroyMethodName: java.lang.String | string): void
                        /**
                         * Return the name of the default destroy method.
                         */
                        // @ts-ignore
                        public getDestroyMethodName(): string
                    }
                }
            }
        }
    }
}
