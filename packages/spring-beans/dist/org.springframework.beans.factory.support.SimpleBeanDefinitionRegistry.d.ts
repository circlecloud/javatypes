declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Simple implementation of the {@link BeanDefinitionRegistry} interface.
                     * Provides registry capabilities only, with no factory capabilities built in.
                     * Can for example be used for testing bean definition readers.
                     * @author Juergen Hoeller
                     * @since 2.5.2
                     */
                    // @ts-ignore
                    class SimpleBeanDefinitionRegistry extends SimpleAliasRegistry implements org.springframework.beans.factory.support.BeanDefinitionRegistry {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        registerBeanDefinition(beanName: string, beanDefinition: org.springframework.beans.factory.config.BeanDefinition): void
                        // @ts-ignore
                        removeBeanDefinition(beanName: string): void
                        // @ts-ignore
                        getBeanDefinition(beanName: string): org.springframework.beans.factory.config.BeanDefinition
                        // @ts-ignore
                        containsBeanDefinition(beanName: string): boolean
                        // @ts-ignore
                        getBeanDefinitionNames(): java.lang.String[]
                        // @ts-ignore
                        getBeanDefinitionCount(): int
                        // @ts-ignore
                        isBeanNameInUse(beanName: string): boolean
                    }
                }
            }
        }
    }
}
