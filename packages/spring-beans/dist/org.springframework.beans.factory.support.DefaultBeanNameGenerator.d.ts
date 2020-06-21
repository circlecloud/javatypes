declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Default implementation of the {@link BeanNameGenerator} interface, delegating to
                     * {@link BeanDefinitionReaderUtils#generateBeanName(BeanDefinition, BeanDefinitionRegistry)}.
                     * @author Juergen Hoeller
                     * @since 2.0.3
                     */
                    // @ts-ignore
                    class DefaultBeanNameGenerator extends java.lang.Object implements org.springframework.beans.factory.support.BeanNameGenerator {
                        // @ts-ignore
                        constructor()
                        /**
                         * A convenient constant for a default {@code DefaultBeanNameGenerator} instance,
                         * as used for {@link AbstractBeanDefinitionReader} setup.
                         * @since 5.2
                         */
                        // @ts-ignore
                        public static readonly INSTANCE: org.springframework.beans.factory.support.DefaultBeanNameGenerator
                        // @ts-ignore
                        public generateBeanName(definition: org.springframework.beans.factory.config.BeanDefinition, registry: org.springframework.beans.factory.support.BeanDefinitionRegistry): string
                    }
                }
            }
        }
    }
}
