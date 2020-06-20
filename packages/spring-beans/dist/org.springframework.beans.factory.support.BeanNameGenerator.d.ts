declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Strategy interface for generating bean names for bean definitions.
                     * @author Juergen Hoeller
                     * @since 2.0.3
                     */
                    // @ts-ignore
                    interface BeanNameGenerator {
                        /**
                         * Generate a bean name for the given bean definition.
                         * @param definition the bean definition to generate a name for
                         * @param registry the bean definition registry that the given definition
                         *  is supposed to be registered with
                         * @return the generated bean name
                         */
                        // @ts-ignore
                        generateBeanName(definition: org.springframework.beans.factory.config.BeanDefinition, registry: org.springframework.beans.factory.support.BeanDefinitionRegistry): java.lang.String
                    }
                }
            }
        }
    }
}
