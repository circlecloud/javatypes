declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace annotation {
                    /**
                     * An {@link ImportBeanDefinitionRegistrar} class that registers
                     * a {@link RabbitListenerAnnotationBeanPostProcessor} bean capable of processing
                     * Spring's @{@link RabbitListener} annotation.
                     * Also register a default {@link RabbitListenerEndpointRegistry}.
                     * <p>This configuration class is automatically imported when using the @{@link EnableRabbit}
                     * annotation.
                     * @author Stephane Nicoll
                     * @author Artem Bilan
                     * @since 1.4
                     * @see RabbitListenerAnnotationBeanPostProcessor
                     * @see RabbitListenerEndpointRegistry
                     * @see EnableRabbit
                     */
                    // @ts-ignore
                    class RabbitBootstrapConfiguration extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public registerBeanDefinitions(importingClassMetadata: AnnotationMetadata, registry: BeanDefinitionRegistry): void
                    }
                }
            }
        }
    }
}
