declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    namespace ConnectionFactoryUtils {
                        /**
                         * Callback interface for resource creation. Serving as argument for the <code>doGetTransactionalChannel</code>
                         * method.
                         */
                        // @ts-ignore
                        interface ResourceFactory {
                            /**
                             * Fetch an appropriate Channel from the given RabbitResourceHolder.
                             * @param holder the RabbitResourceHolder
                             * @return an appropriate Channel fetched from the holder, or <code>null</code> if none found
                             */
                            // @ts-ignore
                            getChannel(holder: org.springframework.amqp.rabbit.connection.RabbitResourceHolder): Channel
                            /**
                             * Fetch an appropriate Connection from the given RabbitResourceHolder.
                             * @param holder the RabbitResourceHolder
                             * @return an appropriate Connection fetched from the holder, or <code>null</code> if none found
                             */
                            // @ts-ignore
                            getConnection(holder: org.springframework.amqp.rabbit.connection.RabbitResourceHolder): org.springframework.amqp.rabbit.connection.Connection
                            /**
                             * Create a new RabbitMQ Connection for registration with a RabbitResourceHolder.
                             * @return the new RabbitMQ Connection
                             * @throws IOException if thrown by RabbitMQ API methods
                             */
                            // @ts-ignore
                            createConnection(): org.springframework.amqp.rabbit.connection.Connection
                            /**
                             * Create a new RabbitMQ Session for registration with a RabbitResourceHolder.
                             * @param con the RabbitMQ Connection to create a Channel for
                             * @return the new RabbitMQ Channel
                             * @throws IOException if thrown by RabbitMQ API methods
                             */
                            // @ts-ignore
                            createChannel(con: org.springframework.amqp.rabbit.connection.Connection): Channel
                            /**
                             * Return whether to allow for a local RabbitMQ transaction that is synchronized with a Spring-managed
                             * transaction (where the main transaction might be a JDBC-based one for a specific DataSource, for example),
                             * with the RabbitMQ transaction committing right after the main transaction.
                             * @return whether to allow for synchronizing a local RabbitMQ transaction
                             */
                            // @ts-ignore
                            isSynchedLocalTransactionAllowed(): boolean
                        }
                    }
                }
            }
        }
    }
}
