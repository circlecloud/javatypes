declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * @author Mark Fisher
                     * @author Dave Syer
                     * @author Gary Russell
                     */
                    // @ts-ignore
                    abstract class RabbitAccessor extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Logger available to subclasses.
                         */
                        // @ts-ignore
                        readonly logger: Log
                        // @ts-ignore
                        public isChannelTransacted(): boolean
                        /**
                         * Flag to indicate that channels created by this component will be transactional.
                         * @param transactional the flag value to set
                         */
                        // @ts-ignore
                        public setChannelTransacted(transactional: boolean): void
                        /**
                         * Set the ConnectionFactory to use for obtaining RabbitMQ {@link Connection Connections}.
                         * @param connectionFactory The connection factory.
                         */
                        // @ts-ignore
                        public setConnectionFactory(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory): void
                        /**
                         * @return The ConnectionFactory that this accessor uses for obtaining RabbitMQ {#link Connection Connections}.
                         */
                        // @ts-ignore
                        public getConnectionFactory(): org.springframework.amqp.rabbit.connection.ConnectionFactory
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        /**
                         * Create a RabbitMQ Connection via this template's ConnectionFactory and its host and port values.
                         * @return the new RabbitMQ Connection
                         * @throws IOException if thrown by RabbitMQ API methods
                         * @see ConnectionFactory#createConnection
                         */
                        // @ts-ignore
                        createConnection(): org.springframework.amqp.rabbit.connection.Connection
                        /**
                         * Fetch an appropriate Connection from the given RabbitResourceHolder.
                         * @param holder the RabbitResourceHolder
                         * @return an appropriate Connection fetched from the holder, or <code>null</code> if none found
                         */
                        // @ts-ignore
                        getConnection(holder: org.springframework.amqp.rabbit.connection.RabbitResourceHolder): org.springframework.amqp.rabbit.connection.Connection
                        /**
                         * Fetch an appropriate Channel from the given RabbitResourceHolder.
                         * @param holder the RabbitResourceHolder
                         * @return an appropriate Channel fetched from the holder, or <code>null</code> if none found
                         */
                        // @ts-ignore
                        getChannel(holder: org.springframework.amqp.rabbit.connection.RabbitResourceHolder): Channel
                        // @ts-ignore
                        getTransactionalResourceHolder(): org.springframework.amqp.rabbit.connection.RabbitResourceHolder
                        // @ts-ignore
                        convertRabbitAccessException(ex: java.lang.Exception): java.lang.RuntimeException
                    }
                }
            }
        }
    }
}
