declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * The {@link AmqpEvent} emitted by the {@code CachingConnectionFactory}
                     * when its connections are unblocked.
                     * @author Artem Bilan
                     * @since 2.0
                     * @see com.rabbitmq.client.BlockedListener#handleUnblocked()
                     */
                    // @ts-ignore
                    class ConnectionUnblockedEvent extends AmqpEvent {
                        // @ts-ignore
                        constructor(source: org.springframework.amqp.rabbit.connection.Connection)
                        // @ts-ignore
                        public getConnection(): org.springframework.amqp.rabbit.connection.Connection
                    }
                }
            }
        }
    }
}
