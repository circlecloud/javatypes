declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Represents an override of a method that looks up an object in the same IoC context.
                     * <p>Methods eligible for lookup override must not have arguments.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @since 1.1
                     */
                    // @ts-ignore
                    class LookupOverride extends org.springframework.beans.factory.support.MethodOverride {
                        /**
                         * Construct a new LookupOverride.
                         * @param methodName the name of the method to override
                         * @param beanName the name of the bean in the current {#code BeanFactory}
                         *  that the overridden method should return (may be {@code null})
                         */
                        // @ts-ignore
                        constructor(methodName: java.lang.String | string, beanName: java.lang.String | string)
                        /**
                         * Construct a new LookupOverride.
                         * @param method the method to override
                         * @param beanName the name of the bean in the current {#code BeanFactory}
                         *  that the overridden method should return (may be {@code null})
                         */
                        // @ts-ignore
                        constructor(method: java.lang.reflect.Method, beanName: java.lang.String | string)
                        /**
                         * Return the name of the bean that should be returned by this method.
                         */
                        // @ts-ignore
                        public getBeanName(): string
                        /**
                         * Match the specified method by {@link Method} reference or method name.
                         * <p>For backwards compatibility reasons, in a scenario with overloaded
                         * non-abstract methods of the given name, only the no-arg variant of a
                         * method will be turned into a container-driven lookup method.
                         * <p>In case of a provided {@link Method}, only straight matches will
                         * be considered, usually demarcated by the {@code @Lookup} annotation.
                         */
                        // @ts-ignore
                        public matches(method: java.lang.reflect.Method): boolean
                        // @ts-ignore
                        public equals(other: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
