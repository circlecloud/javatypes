declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Subclass of {@link BeanDefinitionStoreException} indicating an invalid override
                     * attempt: typically registering a new definition for the same bean name while
                     * {@link DefaultListableBeanFactory#isAllowBeanDefinitionOverriding()} is {@code false}.
                     * @author Juergen Hoeller
                     * @since 5.1
                     * @see DefaultListableBeanFactory#setAllowBeanDefinitionOverriding
                     * @see DefaultListableBeanFactory#registerBeanDefinition
                     */
                    // @ts-ignore
                    class BeanDefinitionOverrideException extends org.springframework.beans.factory.BeanDefinitionStoreException {
                        /**
                         * Create a new BeanDefinitionOverrideException for the given new and existing definition.
                         * @param beanName the name of the bean
                         * @param beanDefinition the newly registered bean definition
                         * @param existingDefinition the existing bean definition for the same name
                         */
                        // @ts-ignore
                        constructor(beanName: string, beanDefinition: org.springframework.beans.factory.config.BeanDefinition, existingDefinition: org.springframework.beans.factory.config.BeanDefinition)
                        /**
                         * Return the description of the resource that the bean definition came from.
                         */
                        // @ts-ignore
                        getResourceDescription(): java.lang.String
                        /**
                         * Return the name of the bean.
                         */
                        // @ts-ignore
                        getBeanName(): java.lang.String
                        /**
                         * Return the newly registered bean definition.
                         * @see #getBeanName()
                         */
                        // @ts-ignore
                        getBeanDefinition(): org.springframework.beans.factory.config.BeanDefinition
                        /**
                         * Return the existing bean definition for the same name.
                         * @see #getBeanName()
                         */
                        // @ts-ignore
                        getExistingDefinition(): org.springframework.beans.factory.config.BeanDefinition
                    }
                }
            }
        }
    }
}
