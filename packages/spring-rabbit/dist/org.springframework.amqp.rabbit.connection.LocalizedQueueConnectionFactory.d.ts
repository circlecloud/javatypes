declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * A {@link RoutingConnectionFactory} that determines the node on which a queue is located and
                     * returns a factory that connects directly to that node.
                     * The RabbitMQ management plugin is called over REST to determine the node and the corresponding
                     * address for that node is injected into the connection factory.
                     * A single instance of each connection factory is retained in a cache.
                     * If the location cannot be determined, the default connection factory is returned. This connection
                     * factory is typically configured to connect to all the servers in a fail-over mode.
                     * <p>{@link #getTargetConnectionFactory(Object)} is invoked by the
                     * {@code SimpleMessageListenerContainer}, when establishing a connection, with the lookup key having
                     * the format {@code '[queueName]'}.
                     * <p>All {@link ConnectionFactory} methods delegate to the default
                     * @author Gary Russell
                     * @since 1.2
                     */
                    // @ts-ignore
                    class LocalizedQueueConnectionFactory extends java.lang.Object implements org.springframework.amqp.rabbit.connection.ConnectionFactory, org.springframework.amqp.rabbit.connection.RoutingConnectionFactory {
                        /**
                         * @param defaultConnectionFactory the fallback connection factory to use if the queue
                         *  can't be located.
                         * @param nodeToAddress a Map of node to address: (rabbit#server1 : server1:5672)
                         * @param adminUris the rabbitmq admin addresses (http://host:port, ...) must be the
                         *  same length as addresses.
                         * @param vhost the virtual host.
                         * @param username the user name.
                         * @param password the password.
                         * @param useSSL use SSL.
                         * @param sslPropertiesLocation the SSL properties location.
                         */
                        // @ts-ignore
                        constructor(defaultConnectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory, nodeToAddress: java.util.Map<java.lang.String | string, java.lang.String | string>, adminUris: java.lang.String[] | string[], vhost: java.lang.String | string, username: java.lang.String | string, password: java.lang.String | string, useSSL: boolean, sslPropertiesLocation: Resource)
                        /**
                         * @param defaultConnectionFactory the fallback connection factory to use if the queue can't be located.
                         * @param nodeToAddress a Map of node to address: (rabbit#server1 : server1:5672)
                         * @param adminUris the rabbitmq admin addresses (http://host:port, ...) must be the same length
                         *  as addresses.
                         * @param vhost the virtual host.
                         * @param username the user name.
                         * @param password the password.
                         * @param useSSL use SSL.
                         * @param keyStore the key store resource (e.g. "file:/foo/keystore").
                         * @param trustStore the trust store resource (e.g. "file:/foo/truststore").
                         * @param keyStorePassPhrase the pass phrase for the key store.
                         * @param trustStorePassPhrase the pass phrase for the trust store.
                         */
                        // @ts-ignore
                        constructor(defaultConnectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory, nodeToAddress: java.util.Map<java.lang.String | string, java.lang.String | string>, adminUris: java.lang.String[] | string[], vhost: java.lang.String | string, username: java.lang.String | string, password: java.lang.String | string, useSSL: boolean, keyStore: java.lang.String | string, trustStore: java.lang.String | string, keyStorePassPhrase: java.lang.String | string, trustStorePassPhrase: java.lang.String | string)
                        /**
                         * @param defaultConnectionFactory the fallback connection factory to use if the queue
                         *  can't be located.
                         * @param addresses the rabbitmq server addresses (host:port, ...).
                         * @param adminUris the rabbitmq admin addresses (http://host:port, ...)
                         * @param nodes the rabbitmq nodes corresponding to addresses (rabbit#server1, ...)
                         *  must be the same length as addresses.
                         * @param vhost the virtual host.
                         * @param username the user name.
                         * @param password the password.
                         * @param useSSL use SSL.
                         * @param sslPropertiesLocation the SSL properties location.
                         */
                        // @ts-ignore
                        constructor(defaultConnectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory, addresses: java.lang.String[] | string[], adminUris: java.lang.String[] | string[], nodes: java.lang.String[] | string[], vhost: java.lang.String | string, username: java.lang.String | string, password: java.lang.String | string, useSSL: boolean, sslPropertiesLocation: Resource)
                        /**
                         * @param defaultConnectionFactory the fallback connection factory to use if the queue can't be located.
                         * @param addresses the rabbitmq server addresses (host:port, ...).
                         * @param adminUris the rabbitmq admin addresses (http://host:port, ...).
                         * @param nodes the rabbitmq nodes corresponding to addresses (rabbit#server1, ...)  must be the same length
                         *  as addresses.
                         * @param vhost the virtual host.
                         * @param username the user name.
                         * @param password the password.
                         * @param useSSL use SSL.
                         * @param keyStore the key store resource (e.g. "file:/foo/keystore").
                         * @param trustStore the trust store resource (e.g. "file:/foo/truststore").
                         * @param keyStorePassPhrase the pass phrase for the key store.
                         * @param trustStorePassPhrase the pass phrase for the trust store.
                         */
                        // @ts-ignore
                        constructor(defaultConnectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory, addresses: java.lang.String[] | string[], adminUris: java.lang.String[] | string[], nodes: java.lang.String[] | string[], vhost: java.lang.String | string, username: java.lang.String | string, password: java.lang.String | string, useSSL: boolean, keyStore: java.lang.String | string, trustStore: java.lang.String | string, keyStorePassPhrase: java.lang.String | string, trustStorePassPhrase: java.lang.String | string)
                        // @ts-ignore
                        public createConnection(): org.springframework.amqp.rabbit.connection.Connection
                        // @ts-ignore
                        public getHost(): string
                        // @ts-ignore
                        public getPort(): number /*int*/
                        // @ts-ignore
                        public getVirtualHost(): string
                        // @ts-ignore
                        public getUsername(): string
                        // @ts-ignore
                        public addConnectionListener(listener: org.springframework.amqp.rabbit.connection.ConnectionListener): void
                        // @ts-ignore
                        public removeConnectionListener(listener: org.springframework.amqp.rabbit.connection.ConnectionListener): boolean
                        // @ts-ignore
                        public clearConnectionListeners(): void
                        // @ts-ignore
                        public getTargetConnectionFactory(key: java.lang.Object | any): org.springframework.amqp.rabbit.connection.ConnectionFactory
                        /**
                         * Create a client instance.
                         * @param adminUri the admin URI.
                         * @param username the username
                         * @param password the password.
                         * @return The client.
                         * @throws MalformedURLException if the URL is malformed
                         * @throws URISyntaxException if there is a syntax error.
                         */
                        // @ts-ignore
                        createClient(adminUri: java.lang.String | string, username: java.lang.String | string, password: java.lang.String | string): Client
                        /**
                         * Create a dedicated connection factory for the address.
                         * @param address the address to which the factory should connect.
                         * @param node  the node.
                         * @return the connection factory.
                         */
                        // @ts-ignore
                        createConnectionFactory(address: java.lang.String | string, node: java.lang.String | string): org.springframework.amqp.rabbit.connection.ConnectionFactory
                        // @ts-ignore
                        public destroy(): void
                    }
                }
            }
        }
    }
}
