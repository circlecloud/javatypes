declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * Utility methods for configuring connection factories.
                     * @author Gary Russell
                     * @since 2.1
                     */
                    // @ts-ignore
                    class ConnectionFactoryConfigurationUtils extends java.lang.Object {
                        /**
                         * Parse the properties {@code key:value[,key:value]...} and add them to the
                         * underlying connection factory client properties.
                         * @param connectionFactory the connection factory.
                         * @param clientConnectionProperties the properties.
                         */
                        // @ts-ignore
                        public static updateClientConnectionProperties(connectionFactory: org.springframework.amqp.rabbit.connection.AbstractConnectionFactory, clientConnectionProperties: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
