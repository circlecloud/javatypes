declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * Helper class for managing a Spring based Rabbit {@link org.springframework.amqp.rabbit.connection.ConnectionFactory},
                     * in particular for obtaining transactional Rabbit resources for a given ConnectionFactory.
                     * <p>
                     * Mainly for internal use within the framework. Used by {@link org.springframework.amqp.rabbit.core.RabbitTemplate} as
                     * well as {@link org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer}.
                     * @author Mark Fisher
                     * @author Dave Syer
                     * @author Gary Russell
                     * @author Artem Bilan
                     */
                    // @ts-ignore
                    class ConnectionFactoryUtils extends java.lang.Object {
                        /**
                         * Determine whether the given RabbitMQ Channel is transactional, that is, bound to the current thread by Spring's
                         * transaction facilities.
                         * @param channel the RabbitMQ Channel to check
                         * @param connectionFactory the RabbitMQ ConnectionFactory that the Channel originated from
                         * @return whether the Channel is transactional
                         */
                        // @ts-ignore
                        public static isChannelTransactional(channel: Channel, connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory): boolean
                        /**
                         * Obtain a RabbitMQ Channel that is synchronized with the current transaction, if any.
                         * @param connectionFactory the ConnectionFactory to obtain a Channel for
                         * @param synchedLocalTransactionAllowed whether to allow for a local RabbitMQ transaction that is synchronized with
                         *  a Spring-managed transaction (where the main transaction might be a JDBC-based one for a specific DataSource, for
                         *  example), with the RabbitMQ transaction committing right after the main transaction. If not allowed, the given
                         *  ConnectionFactory needs to handle transaction enlistment underneath the covers.
                         * @return the transactional Channel, or <code>null</code> if none found
                         */
                        // @ts-ignore
                        public static getTransactionalResourceHolder(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory, synchedLocalTransactionAllowed: boolean): org.springframework.amqp.rabbit.connection.RabbitResourceHolder
                        /**
                         * Obtain a RabbitMQ Channel that is synchronized with the current transaction, if any.
                         * @param connectionFactory the ConnectionFactory to obtain a Channel for
                         * @param synchedLocalTransactionAllowed whether to allow for a local RabbitMQ transaction that is synchronized with
                         *  a Spring-managed transaction (where the main transaction might be a JDBC-based one for a specific DataSource, for
                         *  example), with the RabbitMQ transaction committing right after the main transaction. If not allowed, the given
                         *  ConnectionFactory needs to handle transaction enlistment underneath the covers.
                         * @param publisherConnectionIfPossible obtain a connection from a separate publisher connection
                         *  if possible.
                         * @return the transactional Channel, or <code>null</code> if none found
                         */
                        // @ts-ignore
                        public static getTransactionalResourceHolder(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory, synchedLocalTransactionAllowed: boolean, publisherConnectionIfPossible: boolean): org.springframework.amqp.rabbit.connection.RabbitResourceHolder
                        // @ts-ignore
                        public static releaseResources(resourceHolder: org.springframework.amqp.rabbit.connection.RabbitResourceHolder): void
                        // @ts-ignore
                        public static bindResourceToTransaction(resourceHolder: org.springframework.amqp.rabbit.connection.RabbitResourceHolder, connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory, synched: boolean): org.springframework.amqp.rabbit.connection.RabbitResourceHolder
                        // @ts-ignore
                        public static registerDeliveryTag(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory, channel: Channel, tag: java.lang.Long | number): void
                        /**
                         * Create a connection with this connection factory and/or its publisher factory.
                         * @param connectionFactory the connection factory.
                         * @param publisherConnectionIfPossible true to use the publisher factory, if present.
                         * @return the connection.
                         * @since 2.0.2
                         */
                        // @ts-ignore
                        public static createConnection(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory, publisherConnectionIfPossible: boolean): org.springframework.amqp.rabbit.connection.Connection
                    }
                }
            }
        }
    }
}
