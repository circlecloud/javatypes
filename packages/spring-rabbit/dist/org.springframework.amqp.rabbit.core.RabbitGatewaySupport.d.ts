declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    /**
                     * Convenient super class for application classes that need RabbitMQ access.
                     * <p>Requires a ConnectionFactory or a RabbitTemplate instance to be set.
                     * It will create its own RabbitTemplate if a ConnectionFactory is passed in.
                     * A custom RabbitTemplate instance can be created for a given ConnectionFactory
                     * through overriding the {@link #createRabbitTemplate} method.
                     * @author Mark Pollack
                     * @author Gary Russell
                     * @see #setConnectionFactory
                     * @see #setRabbitOperations
                     * @see #createRabbitTemplate
                     * @see org.springframework.amqp.rabbit.core.RabbitTemplate
                     */
                    // @ts-ignore
                    class RabbitGatewaySupport extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Logger available to subclasses.
                         */
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Set the Rabbit connection factory to be used by the gateway.
                         * Will automatically create a RabbitTemplate for the given ConnectionFactory.
                         * @param connectionFactory The connection factory.
                         * @see #createRabbitTemplate
                         * @see #setConnectionFactory(org.springframework.amqp.rabbit.connection.ConnectionFactory)
                         */
                        // @ts-ignore
                        public setConnectionFactory(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory): void
                        /**
                         * Create a RabbitTemplate for the given ConnectionFactory.
                         * Only invoked if populating the gateway with a ConnectionFactory reference.
                         * @param connectionFactory the Rabbit ConnectionFactory to create a RabbitTemplate for
                         * @return the new RabbitTemplate instance
                         * @see #setConnectionFactory
                         */
                        // @ts-ignore
                        createRabbitTemplate(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory): org.springframework.amqp.rabbit.core.RabbitTemplate
                        /**
                         * @return The Rabbit ConnectionFactory used by the gateway.
                         */
                        // @ts-ignore
                        public getConnectionFactory(): org.springframework.amqp.rabbit.connection.ConnectionFactory
                        /**
                         * Set the {@link RabbitOperations} for the gateway.
                         * @param rabbitOperations The Rabbit operations.
                         * @see #setConnectionFactory(org.springframework.amqp.rabbit.connection.ConnectionFactory)
                         */
                        // @ts-ignore
                        public setRabbitOperations(rabbitOperations: org.springframework.amqp.rabbit.core.RabbitOperations): void
                        /**
                         * @return The {#link RabbitOperations} for the gateway.
                         */
                        // @ts-ignore
                        public getRabbitOperations(): org.springframework.amqp.rabbit.core.RabbitOperations
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        /**
                         * Subclasses can override this for custom initialization behavior.
                         * Gets called after population of this instance's bean properties.
                         * @throws java.lang.Exception if initialization fails
                         */
                        // @ts-ignore
                        initGateway(): void
                    }
                }
            }
        }
    }
}
