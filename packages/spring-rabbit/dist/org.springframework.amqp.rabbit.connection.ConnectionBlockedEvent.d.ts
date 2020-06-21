declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * The {@link AmqpEvent} emitted by the {@code CachingConnectionFactory}
                     * when its connections are blocked.
                     * @author Artem Bilan
                     * @since 2.0
                     * @see com.rabbitmq.client.BlockedListener#handleBlocked(String)
                     */
                    // @ts-ignore
                    class ConnectionBlockedEvent extends AmqpEvent {
                        // @ts-ignore
                        constructor(source: org.springframework.amqp.rabbit.connection.Connection, reason: java.lang.String | string)
                        // @ts-ignore
                        public getConnection(): org.springframework.amqp.rabbit.connection.Connection
                        // @ts-ignore
                        public getReason(): string
                    }
                }
            }
        }
    }
}
