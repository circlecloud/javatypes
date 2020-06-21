declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * Factory of {@link MessageListenerContainer}s.
                     * @param <C> the container type.
                     * @author Stephane Nicoll
                     * @author Gary Russell
                     * @since 1.4
                     * @see RabbitListenerEndpoint
                     */
                    // @ts-ignore
                    interface RabbitListenerContainerFactory<C extends org.springframework.amqp.rabbit.listener.MessageListenerContainer> {
                        /**
                         * Create a {@link MessageListenerContainer} for the given
                         * {@link RabbitListenerEndpoint}.
                         * @param endpoint the endpoint to configure.
                         * @return the created container.
                         */
                        // @ts-ignore
                        createListenerContainer(endpoint: org.springframework.amqp.rabbit.listener.RabbitListenerEndpoint): C
                        /**
                         * Create a {@link MessageListenerContainer} with no
                         * {@link org.springframework.amqp.core.MessageListener} or queues; the listener must
                         * be added later before the container is started.
                         * @return the created container.
                         * @since 2.1.
                         */
                        // @ts-ignore
                        createListenerContainer(): C
                    }
                }
            }
        }
    }
}
