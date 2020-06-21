declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Immutable placeholder class used for a property value object when it's a
                     * reference to another bean name in the factory, to be resolved at runtime.
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see RuntimeBeanReference
                     * @see BeanDefinition#getPropertyValues()
                     * @see org.springframework.beans.factory.BeanFactory#getBean
                     */
                    // @ts-ignore
                    class RuntimeBeanNameReference extends java.lang.Object implements org.springframework.beans.factory.config.BeanReference {
                        /**
                         * Create a new RuntimeBeanNameReference to the given bean name.
                         * @param beanName name of the target bean
                         */
                        // @ts-ignore
                        constructor(beanName: java.lang.String | string)
                        // @ts-ignore
                        public getBeanName(): string
                        /**
                         * Set the configuration source {@code Object} for this metadata element.
                         * <p>The exact type of the object will depend on the configuration mechanism used.
                         */
                        // @ts-ignore
                        public setSource(source: java.lang.Object | any): void
                        // @ts-ignore
                        public getSource(): any
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
