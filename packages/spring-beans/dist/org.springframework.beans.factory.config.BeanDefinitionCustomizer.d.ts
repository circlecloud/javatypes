declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Callback for customizing a given bean definition.
                     * Designed for use with a lambda expression or method reference.
                     * @author Juergen Hoeller
                     * @since 5.0
                     * @see org.springframework.beans.factory.support.BeanDefinitionBuilder#applyCustomizers
                     */
                    // @ts-ignore
                    interface BeanDefinitionCustomizer {
                        /**
                         * Customize the given bean definition.
                         */
                        // @ts-ignore
                        customize(bd: org.springframework.beans.factory.config.BeanDefinition): void
                    }
                }
            }
        }
    }
}
