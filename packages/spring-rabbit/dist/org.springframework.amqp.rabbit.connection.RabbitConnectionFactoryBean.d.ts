declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * Factory bean to create a RabbitMQ ConnectionFactory, delegating most setter methods and
                     * optionally enabling SSL, with or without certificate validation. When
                     * {@link #setSslPropertiesLocation(Resource) sslPropertiesLocation} is not null, the
                     * default implementation loads a {@code PKCS12} keystore and a {@code JKS} truststore
                     * using the supplied properties and intializes key and trust manager factories, using
                     * algorithm {@code SunX509} by default. These are then used to initialize an
                     * {@link SSLContext} using the {@link #setSslAlgorithm(String) sslAlgorithm} (default
                     * TLSv1.1).
                     * <p>
                     * Override {@link #createSSLContext()} to create and/or perform further modification of
                     * the context.
                     * <p>
                     * Override {@link #setUpSSL()} to take complete control over setting up SSL.
                     * @author Gary Russell
                     * @author Heath Abelson
                     * @author Arnaud Cogoluègnes
                     * @author Hareendran
                     * @author Dominique Villard
                     * @author Zachary DeLuca
                     * @since 1.4
                     */
                    // @ts-ignore
                    class RabbitConnectionFactoryBean extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        readonly connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory
                        /**
                         * Whether or not Server Side certificate has to be validated or not.
                         * @return true if Server Side certificate has to be skipped
                         * @since 1.6.6
                         */
                        // @ts-ignore
                        public isSkipServerCertificateValidation(): boolean
                        /**
                         * Whether or not Server Side certificate has to be validated or not.
                         * This would be used if useSSL is set to true and should only be used on dev or Qa regions
                         * skipServerCertificateValidation should <b> never be set to true in production</b>
                         * @param skipServerCertificateValidation Flag to override Server side certificate checks;
                         *  if set to {#code true} {@link com.rabbitmq.client.TrustEverythingTrustManager} would be used.
                         * @since 1.6.6
                         * @see com.rabbitmq.client.TrustEverythingTrustManager
                         */
                        // @ts-ignore
                        public setSkipServerCertificateValidation(skipServerCertificateValidation: boolean): void
                        /**
                         * Whether or not the factory should be configured to use SSL.
                         * @param useSSL true to use SSL.
                         */
                        // @ts-ignore
                        public setUseSSL(useSSL: boolean): void
                        /**
                         * @return true to use ssl.
                         * @since 1.4.4.
                         */
                        // @ts-ignore
                        isUseSSL(): boolean
                        /**
                         * Set the algorithm to use; default TLSv1.1.
                         * @param sslAlgorithm the algorithm.
                         */
                        // @ts-ignore
                        public setSslAlgorithm(sslAlgorithm: java.lang.String | string): void
                        /**
                         * @return the ssl algorithm.
                         * @since 1.4.4
                         */
                        // @ts-ignore
                        getSslAlgorithm(): string
                        /**
                         * When {@link #setUseSSL(boolean)} is true, the SSL properties to use (optional).
                         * Resource referencing a properties file with the following properties:
                         * <ul>
                         * <li>keyStore=file:/secret/keycert.p12</li>
                         * <li>trustStore=file:/secret/trustStore</li>
                         * <li>keyStore.passPhrase=secret</li>
                         * <li>trustStore.passPhrase=secret</li>
                         * </ul>
                         * <p>
                         * If this is provided, its properties (if present) will override the explicitly
                         * set property in this bean.
                         * @param sslPropertiesLocation the Resource to the ssl properties
                         */
                        // @ts-ignore
                        public setSslPropertiesLocation(sslPropertiesLocation: Resource): void
                        /**
                         * @return the properties location.
                         * @since 1.4.4
                         */
                        // @ts-ignore
                        getSslPropertiesLocation(): Resource
                        /**
                         * @return the key store resource.
                         * @since 1.5
                         */
                        // @ts-ignore
                        getKeyStore(): string
                        /**
                         * Set the key store resource (e.g. file:/foo/keystore) - overrides
                         * the property in {@link #setSslPropertiesLocation(Resource)}.
                         * Ignored if {@link #setTrustStoreResource(Resource)} is called with a
                         * resource.
                         * @param keyStore the keystore resource.
                         * @since 1.5
                         */
                        // @ts-ignore
                        public setKeyStore(keyStore: java.lang.String | string): void
                        // @ts-ignore
                        getKeyStoreResource(): Resource
                        /**
                         * Set a Resource pointing to the key store.
                         * @param keyStoreResource the resource.
                         * @since 1.6.4
                         */
                        // @ts-ignore
                        public setKeyStoreResource(keyStoreResource: Resource): void
                        /**
                         * @return the trust store resource.
                         * @since 1.5
                         */
                        // @ts-ignore
                        getTrustStore(): string
                        /**
                         * Set the key store resource (e.g. file:/foo/truststore) - overrides
                         * the property in {@link #setSslPropertiesLocation(Resource)}.
                         * Ignored if {@link #setTrustStoreResource(Resource)} is called with a
                         * resource.
                         * @param trustStore the truststore resource.
                         * @since 1.5
                         */
                        // @ts-ignore
                        public setTrustStore(trustStore: java.lang.String | string): void
                        // @ts-ignore
                        getTrustStoreResource(): Resource
                        /**
                         * Set a Resource pointing to the trust store.
                         * @param trustStoreResource the resource.
                         * @since 1.6.4
                         */
                        // @ts-ignore
                        public setTrustStoreResource(trustStoreResource: Resource): void
                        /**
                         * @return the key store pass phrase.
                         * @since 1.5
                         */
                        // @ts-ignore
                        getKeyStorePassphrase(): string
                        /**
                         * Set the key store pass phrase - overrides
                         * the property in {@link #setSslPropertiesLocation(Resource)}.
                         * @param keyStorePassphrase the key store pass phrase.
                         * @since 1.5
                         */
                        // @ts-ignore
                        public setKeyStorePassphrase(keyStorePassphrase: java.lang.String | string): void
                        /**
                         * @return the trust store pass phrase.
                         * @since 1.5
                         */
                        // @ts-ignore
                        getTrustStorePassphrase(): string
                        /**
                         * Set the trust store pass phrase - overrides
                         * the property in {@link #setSslPropertiesLocation(Resource)}.
                         * @param trustStorePassphrase the trust store pass phrase.
                         * @since 1.5
                         */
                        // @ts-ignore
                        public setTrustStorePassphrase(trustStorePassphrase: java.lang.String | string): void
                        /**
                         * Get the key store type - this defaults to PKCS12 if not overridden by
                         * {@link #setSslPropertiesLocation(Resource)} or {@link #setKeyStoreType}.
                         * @return the key store type.
                         * @since 1.6.2
                         */
                        // @ts-ignore
                        getKeyStoreType(): string
                        /**
                         * Set the key store type - overrides
                         * the property in {@link #setSslPropertiesLocation(Resource)}.
                         * @param keyStoreType the key store type.
                         * @since 1.6.2
                         * @see java.security.KeyStore#getInstance(String)
                         */
                        // @ts-ignore
                        public setKeyStoreType(keyStoreType: java.lang.String | string): void
                        /**
                         * Get the trust store type - this defaults to JKS if not overridden by
                         * {@link #setSslPropertiesLocation(Resource)} or {@link #setTrustStoreType}.
                         * @return the trust store type.
                         * @since 1.6.2
                         */
                        // @ts-ignore
                        getTrustStoreType(): string
                        /**
                         * Set the trust store type - overrides
                         * the property in {@link #setSslPropertiesLocation(Resource)}.
                         * @param trustStoreType the trust store type.
                         * @since 1.6.2
                         * @see java.security.KeyStore#getInstance(String)
                         */
                        // @ts-ignore
                        public setTrustStoreType(trustStoreType: java.lang.String | string): void
                        // @ts-ignore
                        getSecureRandom(): java.security.SecureRandom
                        /**
                         * Set the secure random to use when initializing the {@link SSLContext}.
                         * Defaults to null, in which case the default implementation is used.
                         * @param secureRandom the secure random.
                         * @since 1.6.4
                         * @see SSLContext#init(KeyManager[], TrustManager[], SecureRandom)
                         */
                        // @ts-ignore
                        public setSecureRandom(secureRandom: java.security.SecureRandom): void
                        /**
                         * @param host the host.
                         * @see com.rabbitmq.client.ConnectionFactory#setHost(java.lang.String)
                         */
                        // @ts-ignore
                        public setHost(host: java.lang.String | string): void
                        /**
                         * @param port the port.
                         * @see com.rabbitmq.client.ConnectionFactory#setPort(int)
                         */
                        // @ts-ignore
                        public setPort(port: number /*int*/): void
                        /**
                         * @param username the user name.
                         * @see com.rabbitmq.client.ConnectionFactory#setUsername(java.lang.String)
                         */
                        // @ts-ignore
                        public setUsername(username: java.lang.String | string): void
                        /**
                         * @param password the password.
                         * @see com.rabbitmq.client.ConnectionFactory#setPassword(java.lang.String)
                         */
                        // @ts-ignore
                        public setPassword(password: java.lang.String | string): void
                        /**
                         * @param virtualHost the virtual host.
                         * @see com.rabbitmq.client.ConnectionFactory#setVirtualHost(java.lang.String)
                         */
                        // @ts-ignore
                        public setVirtualHost(virtualHost: java.lang.String | string): void
                        /**
                         * @param uri the uri.
                         * @see com.rabbitmq.client.ConnectionFactory#setUri(java.net.URI)
                         */
                        // @ts-ignore
                        public setUri(uri: java.net.URI): void
                        /**
                         * @param uriString the uri.
                         * @see com.rabbitmq.client.ConnectionFactory#setUri(java.lang.String)
                         */
                        // @ts-ignore
                        public setUri(uriString: java.lang.String | string): void
                        /**
                         * @param requestedChannelMax the max requested channels.
                         * @see com.rabbitmq.client.ConnectionFactory#setRequestedChannelMax(int)
                         */
                        // @ts-ignore
                        public setRequestedChannelMax(requestedChannelMax: number /*int*/): void
                        /**
                         * @param requestedFrameMax the requested max frames.
                         * @see com.rabbitmq.client.ConnectionFactory#setRequestedFrameMax(int)
                         */
                        // @ts-ignore
                        public setRequestedFrameMax(requestedFrameMax: number /*int*/): void
                        /**
                         * @param connectionTimeout the connection timeout.
                         * @see com.rabbitmq.client.ConnectionFactory#setConnectionTimeout(int)
                         */
                        // @ts-ignore
                        public setConnectionTimeout(connectionTimeout: number /*int*/): void
                        /**
                         * @param requestedHeartbeat the requested heartbeat.
                         * @see com.rabbitmq.client.ConnectionFactory#setRequestedHeartbeat(int)
                         */
                        // @ts-ignore
                        public setRequestedHeartbeat(requestedHeartbeat: number /*int*/): void
                        /**
                         * Add custom client properties.
                         * @param clientProperties the client properties.
                         * @see com.rabbitmq.client.ConnectionFactory#setClientProperties(java.util.Map)
                         */
                        // @ts-ignore
                        public setClientProperties(clientProperties: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        /**
                         * @param saslConfig the sasl config.
                         * @see com.rabbitmq.client.ConnectionFactory#setSaslConfig(com.rabbitmq.client.SaslConfig)
                         */
                        // @ts-ignore
                        public setSaslConfig(saslConfig: SaslConfig): void
                        /**
                         * @param factory the socket factory.
                         * @see com.rabbitmq.client.ConnectionFactory#setSocketFactory(javax.net.SocketFactory)
                         */
                        // @ts-ignore
                        public setSocketFactory(factory: javax.net.SocketFactory): void
                        /**
                         * @param socketConfigurator the socket configurator.
                         * @see com.rabbitmq.client.ConnectionFactory#setSocketConfigurator(com.rabbitmq.client.SocketConfigurator)
                         */
                        // @ts-ignore
                        public setSocketConfigurator(socketConfigurator: SocketConfigurator): void
                        /**
                         * @param executor the executor service
                         * @see com.rabbitmq.client.ConnectionFactory#setSharedExecutor(java.util.concurrent.ExecutorService)
                         */
                        // @ts-ignore
                        public setSharedExecutor(executor: java.util.concurrent.ExecutorService): void
                        /**
                         * @param threadFactory the thread factory.
                         * @see com.rabbitmq.client.ConnectionFactory#setThreadFactory(java.util.concurrent.ThreadFactory)
                         */
                        // @ts-ignore
                        public setThreadFactory(threadFactory: java.util.concurrent.ThreadFactory): void
                        /**
                         * @param exceptionHandler the exception handler.
                         * @see com.rabbitmq.client.ConnectionFactory#setExceptionHandler(com.rabbitmq.client.ExceptionHandler)
                         */
                        // @ts-ignore
                        public setExceptionHandler(exceptionHandler: ExceptionHandler): void
                        /**
                         * Whether or not the factory should be configured to use Java NIO.
                         * @param useNio true to use Java NIO, false to use blocking IO
                         * @see com.rabbitmq.client.ConnectionFactory#useNio()
                         */
                        // @ts-ignore
                        public setUseNio(useNio: boolean): void
                        /**
                         * @param nioParams the NIO parameters
                         * @see com.rabbitmq.client.ConnectionFactory#setNioParams(com.rabbitmq.client.impl.nio.NioParams)
                         */
                        // @ts-ignore
                        public setNioParams(nioParams: NioParams): void
                        /**
                         * @param metricsCollector the metrics collector instance
                         * @see com.rabbitmq.client.ConnectionFactory#setMetricsCollector(MetricsCollector)
                         */
                        // @ts-ignore
                        public setMetricsCollector(metricsCollector: MetricsCollector): void
                        /**
                         * Set to true to enable amqp-client automatic recovery. Note: Spring AMQP
                         * implements its own connection recovery and this is generally not needed.
                         * @param automaticRecoveryEnabled true to enable.
                         * @since 1.7.1
                         */
                        // @ts-ignore
                        public setAutomaticRecoveryEnabled(automaticRecoveryEnabled: boolean): void
                        /**
                         * Set to true to enable amqp-client topology recovery. Note: if there is a
                         * Rabbit admin in the application context, Spring AMQP
                         * implements its own recovery and this is generally not needed.
                         * @param topologyRecoveryEnabled true to enable.
                         * @since 1.7.1
                         */
                        // @ts-ignore
                        public setTopologyRecoveryEnabled(topologyRecoveryEnabled: boolean): void
                        /**
                         * @param channelRpcTimeout continuation timeout for RPC calls in channels
                         * @since 2.0
                         * @see com.rabbitmq.client.ConnectionFactory#setChannelRpcTimeout(int)
                         */
                        // @ts-ignore
                        public setChannelRpcTimeout(channelRpcTimeout: number /*int*/): void
                        /**
                         * Enable server hostname verification for TLS connections.
                         * <p>
                         * This enables hostname verification regardless of the IO mode used (blocking or
                         * non-blocking IO).
                         * <p>
                         * This can be called typically after setting the {@link SSLContext} with one of the
                         * <code>useSslProtocol</code> methods. Requires amqp-client 5.4.0 or later.
                         * @param enable false to disable.
                         * @since 2.0.6
                         * @see com.rabbitmq.client.ConnectionFactory#enableHostnameVerification()
                         */
                        // @ts-ignore
                        public setEnableHostnameVerification(enable: boolean): void
                        // @ts-ignore
                        getKeyStoreAlgorithm(): string
                        /**
                         * Set the algorithm used when creating the key store, default {@code SunX509}.
                         * @param keyStoreAlgorithm the algorithm.
                         * @since 2.1.6
                         */
                        // @ts-ignore
                        public setKeyStoreAlgorithm(keyStoreAlgorithm: java.lang.String | string): void
                        // @ts-ignore
                        getTrustStoreAlgorithm(): string
                        /**
                         * Set the algorithm used when creating the trust store, default {@code SunX509}.
                         * @param trustStoreAlgorithm the algorithm.
                         * @since 2.1.6
                         */
                        // @ts-ignore
                        public setTrustStoreAlgorithm(trustStoreAlgorithm: java.lang.String | string): void
                        /**
                         * Access the connection factory to set any other properties not supported by
                         * this factory bean.
                         * @return the connection factory.
                         * @since 1.7.14
                         */
                        // @ts-ignore
                        public getRabbitConnectionFactory(): org.springframework.amqp.rabbit.connection.ConnectionFactory
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<any>
                        // @ts-ignore
                        createInstance(): org.springframework.amqp.rabbit.connection.ConnectionFactory
                        /**
                         * Override this method to take complete control over the SSL setup.
                         * @since 1.4.4
                         */
                        // @ts-ignore
                        setUpSSL(): void
                        // @ts-ignore
                        configureKeyManagers(): javax.net.ssl.KeyManager[]
                        // @ts-ignore
                        configureTrustManagers(): javax.net.ssl.TrustManager[]
                        /**
                         * Override this method to create and/or configure the {@link SSLContext} used
                         * by the {@link ConnectionFactory}.
                         * @return The {#link SSLContext}.
                         * @throws NoSuchAlgorithmException if the algorithm is not available.
                         * @since 1.4.4
                         */
                        // @ts-ignore
                        createSSLContext(): javax.net.ssl.SSLContext
                    }
                }
            }
        }
    }
}
