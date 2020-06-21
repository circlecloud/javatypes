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
                        public registerBeanDefinition(beanName: java.lang.String | string, beanDefinition: org.springframework.beans.factory.config.BeanDefinition): void
                        // @ts-ignore
                        public removeBeanDefinition(beanName: java.lang.String | string): void
                        // @ts-ignore
                        public getBeanDefinition(beanName: java.lang.String | string): org.springframework.beans.factory.config.BeanDefinition
                        // @ts-ignore
                        public containsBeanDefinition(beanName: java.lang.String | string): boolean
                        // @ts-ignore
                        public getBeanDefinitionNames(): string[]
                        // @ts-ignore
                        public getBeanDefinitionCount(): number /*int*/
                        // @ts-ignore
                        public isBeanNameInUse(beanName: java.lang.String | string): boolean
                    }
                }
            }
        }
    }
}
