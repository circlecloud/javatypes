declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Extension to the standard {@link BeanFactoryPostProcessor} SPI, allowing for
                     * the registration of further bean definitions <i>before</i> regular
                     * BeanFactoryPostProcessor detection kicks in. In particular,
                     * BeanDefinitionRegistryPostProcessor may register further bean definitions
                     * which in turn define BeanFactoryPostProcessor instances.
                     * @author Juergen Hoeller
                     * @since 3.0.1
                     * @see org.springframework.context.annotation.ConfigurationClassPostProcessor
                     */
                    // @ts-ignore
                    interface BeanDefinitionRegistryPostProcessor extends org.springframework.beans.factory.config.BeanFactoryPostProcessor {
                        /**
                         * Modify the application context's internal bean definition registry after its
                         * standard initialization. All regular bean definitions will have been loaded,
                         * but no beans will have been instantiated yet. This allows for adding further
                         * bean definitions before the next post-processing phase kicks in.
                         * @param registry the bean definition registry used by the application context
                         * @throws org.springframework.beans.BeansException in case of errors
                         */
                        // @ts-ignore
                        postProcessBeanDefinitionRegistry(registry: org.springframework.beans.factory.support.BeanDefinitionRegistry): void
                    }
                }
            }
        }
    }
}
