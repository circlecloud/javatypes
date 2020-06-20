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
                        constructor(beanName: string)
                        // @ts-ignore
                        getBeanName(): java.lang.String
                        /**
                         * Set the configuration source {@code Object} for this metadata element.
                         * <p>The exact type of the object will depend on the configuration mechanism used.
                         */
                        // @ts-ignore
                        setSource(source: any): void
                        // @ts-ignore
                        getSource(): java.lang.Object
                        // @ts-ignore
                        equals(other: any): boolean
                        // @ts-ignore
                        hashCode(): int
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
