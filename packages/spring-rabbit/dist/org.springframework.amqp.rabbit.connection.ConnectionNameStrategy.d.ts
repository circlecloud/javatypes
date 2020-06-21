declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * A strategy to build an application-specific connection name,
                     * which can be displayed in the management UI if RabbitMQ server supports it.
                     * The value doesn't have to be unique and cannot be used
                     * as a connection identifier e.g. in HTTP API requests.
                     * The value is supposed to be human-readable.
                     * @author Artem Bilan
                     * @since 2.0
                     * @see com.rabbitmq.client.ConnectionFactory#newConnection(com.rabbitmq.client.Address[], String)
                     */
                    // @ts-ignore
                    interface ConnectionNameStrategy {
                        // @ts-ignore
                        obtainNewConnectionName(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory): string
                    }
                }
            }
        }
    }
}
