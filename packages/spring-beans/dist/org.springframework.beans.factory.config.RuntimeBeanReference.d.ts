declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Immutable placeholder class used for a property value object when it's
                     * a reference to another bean in the factory, to be resolved at runtime.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @see BeanDefinition#getPropertyValues()
                     * @see org.springframework.beans.factory.BeanFactory#getBean(String)
                     * @see org.springframework.beans.factory.BeanFactory#getBean(Class)
                     */
                    // @ts-ignore
                    class RuntimeBeanReference extends java.lang.Object implements org.springframework.beans.factory.config.BeanReference {
                        /**
                         * Create a new RuntimeBeanReference to the given bean name.
                         * @param beanName name of the target bean
                         */
                        // @ts-ignore
                        constructor(beanName: string)
                        /**
                         * Create a new RuntimeBeanReference to the given bean name,
                         * with the option to mark it as reference to a bean in the parent factory.
                         * @param beanName name of the target bean
                         * @param toParent whether this is an explicit reference to a bean in the
                         *  parent factory
                         */
                        // @ts-ignore
                        constructor(beanName: string, toParent: boolean)
                        /**
                         * Create a new RuntimeBeanReference to a bean of the given type.
                         * @param beanType type of the target bean
                         * @since 5.2
                         */
                        // @ts-ignore
                        constructor(beanType: java.lang.Class<any>)
                        /**
                         * Create a new RuntimeBeanReference to a bean of the given type,
                         * with the option to mark it as reference to a bean in the parent factory.
                         * @param beanType type of the target bean
                         * @param toParent whether this is an explicit reference to a bean in the
                         *  parent factory
                         * @since 5.2
                         */
                        // @ts-ignore
                        constructor(beanType: java.lang.Class<any>, toParent: boolean)
                        /**
                         * Return the requested bean name, or the fully-qualified type name
                         * in case of by-type resolution.
                         * @see #getBeanType()
                         */
                        // @ts-ignore
                        getBeanName(): java.lang.String
                        /**
                         * Return the requested bean type if resolution by type is demanded.
                         * @since 5.2
                         */
                        // @ts-ignore
                        getBeanType(): java.lang.Class<?>
                        /**
                         * Return whether this is an explicit reference to a bean in the parent factory.
                         */
                        // @ts-ignore
                        isToParent(): boolean
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
