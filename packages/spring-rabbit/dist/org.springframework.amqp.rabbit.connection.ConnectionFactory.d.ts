declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * An interface based ConnectionFactory for creating {@link com.rabbitmq.client.Connection Connections}.
                     * <p>
                     * NOTE: The Rabbit API contains a ConnectionFactory class (same name).
                     * @author Mark Fisher
                     * @author Dave Syer
                     * @author Gary Russell
                     */
                    // @ts-ignore
                    interface ConnectionFactory {
                        // @ts-ignore
                        createConnection(): org.springframework.amqp.rabbit.connection.Connection
                        // @ts-ignore
                        getHost(): string
                        // @ts-ignore
                        getPort(): number /*int*/
                        // @ts-ignore
                        getVirtualHost(): string
                        // @ts-ignore
                        getUsername(): string
                        // @ts-ignore
                        addConnectionListener(listener: org.springframework.amqp.rabbit.connection.ConnectionListener): void
                        // @ts-ignore
                        removeConnectionListener(listener: org.springframework.amqp.rabbit.connection.ConnectionListener): boolean
                        // @ts-ignore
                        clearConnectionListeners(): void
                        /**
                         * Return a separate connection factory for publishers (if implemented).
                         * @return the publisher connection factory, or null.
                         * @since 2.0.2
                         */
                        // @ts-ignore
                        getPublisherConnectionFactory(): org.springframework.amqp.rabbit.connection.ConnectionFactory
                        /**
                         * Return true if simple publisher confirms are enabled.
                         * @return simplePublisherConfirms
                         * @since 2.1
                         */
                        // @ts-ignore
                        isSimplePublisherConfirms(): boolean
                        /**
                         * Return true if publisher confirms are enabled.
                         * @return publisherConfirms.
                         * @since 2.1
                         */
                        // @ts-ignore
                        isPublisherConfirms(): boolean
                        /**
                         * Return true if publisher returns are enabled.
                         * @return publisherReturns.
                         * @since 2.1
                         */
                        // @ts-ignore
                        isPublisherReturns(): boolean
                    }
                }
            }
        }
    }
}
