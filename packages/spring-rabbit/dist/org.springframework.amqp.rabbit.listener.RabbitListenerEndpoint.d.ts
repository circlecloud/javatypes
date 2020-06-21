declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * Model for a Rabbit listener endpoint. Can be used against a
                     * {@link org.springframework.amqp.rabbit.annotation.RabbitListenerConfigurer
                     * RabbitListenerConfigurer} to register endpoints programmatically.
                     * @author Stephane Nicoll
                     * @author Gary Russell
                     * @since 1.4
                     */
                    // @ts-ignore
                    interface RabbitListenerEndpoint {
                        /**
                         * @return the id of this endpoint. The id can be further qualified
                         *  when the endpoint is resolved against its actual listener
                         *  container.
                         * @see RabbitListenerContainerFactory#createListenerContainer
                         */
                        // @ts-ignore
                        getId(): string
                        /**
                         * @return the group of this endpoint or null if not in a group.
                         * @since 1.5
                         */
                        // @ts-ignore
                        getGroup(): string
                        /**
                         * @return the concurrency of this endpoint.
                         * @since 2.0
                         */
                        // @ts-ignore
                        getConcurrency(): string
                        /**
                         * Override of the default autoStartup property.
                         * @return the autoStartup.
                         * @since 2.0
                         */
                        // @ts-ignore
                        getAutoStartup(): java.lang.Boolean
                        /**
                         * Setup the specified message listener container with the model
                         * defined by this endpoint.
                         * <p>This endpoint must provide the requested missing option(s) of
                         * the specified container to make it usable. Usually, this is about
                         * setting the {@code queues} and the {@code messageListener} to
                         * use but an implementation may override any default setting that
                         * was already set.
                         * @param listenerContainer the listener container to configure
                         */
                        // @ts-ignore
                        setupListenerContainer(listenerContainer: org.springframework.amqp.rabbit.listener.MessageListenerContainer): void
                        /**
                         * The preferred way for a container factory to pass a message converter
                         * to the endpoint's adapter.
                         * @param converter the converter.
                         * @since 2.0.8
                         */
                        // @ts-ignore
                        setMessageConverter(converter: MessageConverter): void
                        /**
                         * Used by the container factory to check if this endpoint supports the
                         * preferred way for a container factory to pass a message converter
                         * to the endpoint's adapter. If null is returned, the factory will
                         * fall back to the legacy method of passing the converter via the
                         * container.
                         * @return the converter.
                         * @since 2.0.8
                         */
                        // @ts-ignore
                        getMessageConverter(): MessageConverter
                    }
                }
            }
        }
    }
}
