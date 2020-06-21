declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace annotation {
                    /**
                     * Optional interface to be implemented by Spring managed bean willing
                     * to customize how Rabbit listener endpoints are configured. Typically
                     * used to defined the default
                     * {@link org.springframework.amqp.rabbit.listener.RabbitListenerContainerFactory
                     * RabbitListenerContainerFactory} to use or for registering Rabbit endpoints
                     * in a <em>programmatic</em> fashion as opposed to the <em>declarative</em>
                     * approach of using the @{@link RabbitListener} annotation.
                     * <p>See @{@link EnableRabbit} for detailed usage examples.
                     * @author Stephane Nicoll
                     * @author Gary Russell
                     * @since 1.4
                     * @see EnableRabbit
                     * @see org.springframework.amqp.rabbit.listener.RabbitListenerEndpointRegistrar
                     */
                    // @ts-ignore
                    interface RabbitListenerConfigurer {
                        /**
                         * Callback allowing a {@link org.springframework.amqp.rabbit.listener.RabbitListenerEndpointRegistry
                         * RabbitListenerEndpointRegistry} and specific {@link org.springframework.amqp.rabbit.listener.RabbitListenerEndpoint
                         * RabbitListenerEndpoint} instances to be registered against the given
                         * {@link RabbitListenerEndpointRegistrar}. The default
                         * {@link org.springframework.amqp.rabbit.listener.RabbitListenerContainerFactory RabbitListenerContainerFactory}
                         * can also be customized.
                         * @param registrar the registrar to be configured
                         */
                        // @ts-ignore
                        configureRabbitListeners(registrar: org.springframework.amqp.rabbit.listener.RabbitListenerEndpointRegistrar): void
                    }
                }
            }
        }
    }
}
