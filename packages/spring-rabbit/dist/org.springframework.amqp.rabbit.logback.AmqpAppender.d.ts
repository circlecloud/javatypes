declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace logback {
                    /**
                     * A Logback appender that publishes logging events to an AMQP Exchange.
                     * <p>
                     * A fully-configured AmqpAppender, with every option set to their defaults, would look like this:
                     * <pre class="code">
                     * {@code
                     * <appender name="AMQP" class="org.springframework.amqp.rabbit.logback.AmqpAppender">
                     * <layout>
                     * <pattern><![CDATA[ %d %p %t [%c] - <%m>%n ]]></pattern>
                     * </layout>
                     * <!-- <abbreviation>36</abbreviation --> <!-- no category abbreviation by default -->
                     * <applicationId>AmqpAppenderTest</applicationId>
                     * <routingKeyPattern>%property{applicationId}.%c.%p</routingKeyPattern>
                     * <generateId>true</generateId>
                     * <charset>UTF-8</charset>
                     * <durable>false</durable>
                     * <deliveryMode>NON_PERSISTENT</deliveryMode>
                     * </appender>
                     * }
                     * </pre>
                     * @author Artem Bilan
                     * @author Gary Russell
                     * @author Stephen Oakey
                     * @author Dominique Villard
                     * @author Nicolas Ristock
                     * @author Eugene Gusev
                     * @since 1.4
                     */
                    // @ts-ignore
                    class AmqpAppender extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Key name for the application id (if there is one set via the appender config) in the message properties.
                         */
                        // @ts-ignore
                        public static readonly APPLICATION_ID: java.lang.String | string
                        /**
                         * Key name for the logger category name in the message properties
                         */
                        // @ts-ignore
                        public static readonly CATEGORY_NAME: java.lang.String | string
                        /**
                         * Key name for the logger level name in the message properties
                         */
                        // @ts-ignore
                        public static readonly CATEGORY_LEVEL: java.lang.String | string
                        /**
                         * Key name for the thread name in the message properties.
                         */
                        // @ts-ignore
                        public static readonly THREAD_NAME: java.lang.String | string
                        /**
                         * SaslConfig.
                         * @see RabbitUtils#stringToSaslConfig(String, ConnectionFactory)
                         */
                        // @ts-ignore
                        public saslConfig: java.lang.String | string
                        // @ts-ignore
                        public setRoutingKeyPattern(routingKeyPattern: java.lang.String | string): void
                        // @ts-ignore
                        public getUri(): java.net.URI
                        // @ts-ignore
                        public setUri(uri: java.net.URI): void
                        // @ts-ignore
                        public getHost(): string
                        // @ts-ignore
                        public setHost(host: java.lang.String | string): void
                        // @ts-ignore
                        public getPort(): number
                        // @ts-ignore
                        public setPort(port: java.lang.Integer | number): void
                        // @ts-ignore
                        public setAddresses(addresses: java.lang.String | string): void
                        // @ts-ignore
                        public getAddresses(): string
                        // @ts-ignore
                        public getVirtualHost(): string
                        // @ts-ignore
                        public setVirtualHost(virtualHost: java.lang.String | string): void
                        // @ts-ignore
                        public getUsername(): string
                        // @ts-ignore
                        public setUsername(username: java.lang.String | string): void
                        // @ts-ignore
                        public getPassword(): string
                        // @ts-ignore
                        public setPassword(password: java.lang.String | string): void
                        // @ts-ignore
                        public isUseSsl(): boolean
                        // @ts-ignore
                        public setUseSsl(ssl: boolean): void
                        /**
                         * Enable server hostname verification for TLS connections.
                         * @param enable false to disable.
                         * @since 2.1.6
                         * @see RabbitConnectionFactoryBean#setEnableHostnameVerification(boolean)
                         */
                        // @ts-ignore
                        public setVerifyHostname(enable: boolean): void
                        /**
                         * Return true (default) if TLS hostname verification is enabled.
                         * @return true (default) if TLS hostname verification is enabled.
                         * @since 2.1.6
                         */
                        // @ts-ignore
                        public isVerifyHostname(): boolean
                        // @ts-ignore
                        public getSslAlgorithm(): string
                        // @ts-ignore
                        public setSslAlgorithm(sslAlgorithm: java.lang.String | string): void
                        // @ts-ignore
                        public getSslPropertiesLocation(): string
                        // @ts-ignore
                        public setSslPropertiesLocation(sslPropertiesLocation: java.lang.String | string): void
                        // @ts-ignore
                        public getKeyStore(): string
                        // @ts-ignore
                        public setKeyStore(keyStore: java.lang.String | string): void
                        // @ts-ignore
                        public getKeyStorePassphrase(): string
                        // @ts-ignore
                        public setKeyStorePassphrase(keyStorePassphrase: java.lang.String | string): void
                        // @ts-ignore
                        public getKeyStoreType(): string
                        // @ts-ignore
                        public setKeyStoreType(keyStoreType: java.lang.String | string): void
                        // @ts-ignore
                        public getTrustStore(): string
                        // @ts-ignore
                        public setTrustStore(trustStore: java.lang.String | string): void
                        // @ts-ignore
                        public getTrustStorePassphrase(): string
                        // @ts-ignore
                        public setTrustStorePassphrase(trustStorePassphrase: java.lang.String | string): void
                        // @ts-ignore
                        public getTrustStoreType(): string
                        // @ts-ignore
                        public setTrustStoreType(trustStoreType: java.lang.String | string): void
                        // @ts-ignore
                        public getSaslConfig(): string
                        /**
                         * Set the {@link SaslConfig}.
                         * @param saslConfig the saslConfig to set
                         * @since 1.7.14
                         * @see RabbitUtils#stringToSaslConfig(String, ConnectionFactory)
                         */
                        // @ts-ignore
                        public setSaslConfig(saslConfig: java.lang.String | string): void
                        // @ts-ignore
                        public getExchangeName(): string
                        // @ts-ignore
                        public setExchangeName(exchangeName: java.lang.String | string): void
                        // @ts-ignore
                        public getExchangeType(): string
                        // @ts-ignore
                        public setExchangeType(exchangeType: java.lang.String | string): void
                        // @ts-ignore
                        public getRoutingKeyPattern(): string
                        // @ts-ignore
                        public isDeclareExchange(): boolean
                        // @ts-ignore
                        public setDeclareExchange(declareExchange: boolean): void
                        // @ts-ignore
                        public getContentType(): string
                        // @ts-ignore
                        public setContentType(contentType: java.lang.String | string): void
                        // @ts-ignore
                        public getContentEncoding(): string
                        // @ts-ignore
                        public setContentEncoding(contentEncoding: java.lang.String | string): void
                        // @ts-ignore
                        public getApplicationId(): string
                        // @ts-ignore
                        public setApplicationId(applicationId: java.lang.String | string): void
                        // @ts-ignore
                        public getSenderPoolSize(): number /*int*/
                        // @ts-ignore
                        public setSenderPoolSize(senderPoolSize: number /*int*/): void
                        // @ts-ignore
                        public getMaxSenderRetries(): number /*int*/
                        // @ts-ignore
                        public setMaxSenderRetries(maxSenderRetries: number /*int*/): void
                        // @ts-ignore
                        public isAddMdcAsHeaders(): boolean
                        // @ts-ignore
                        public setAddMdcAsHeaders(addMdcAsHeaders: boolean): void
                        // @ts-ignore
                        public isDurable(): boolean
                        // @ts-ignore
                        public setDurable(durable: boolean): void
                        // @ts-ignore
                        public getDeliveryMode(): string
                        // @ts-ignore
                        public setDeliveryMode(deliveryMode: java.lang.String | string): void
                        // @ts-ignore
                        public isAutoDelete(): boolean
                        // @ts-ignore
                        public setAutoDelete(autoDelete: boolean): void
                        // @ts-ignore
                        public isGenerateId(): boolean
                        // @ts-ignore
                        public setGenerateId(generateId: boolean): void
                        // @ts-ignore
                        public getCharset(): string
                        // @ts-ignore
                        public setCharset(charset: java.lang.String | string): void
                        // @ts-ignore
                        public setLayout(layout: object): void
                        // @ts-ignore
                        public getEncoder(): object
                        // @ts-ignore
                        public setEncoder(encoder: object): void
                        // @ts-ignore
                        public setAbbreviation(len: number /*int*/): void
                        /**
                         * Return the number of events waiting to be sent.
                         * @return the number of events waiting to be sent.
                         */
                        // @ts-ignore
                        public getQueuedEventCount(): number /*int*/
                        /**
                         * Set a name for the connection which will appear on the RabbitMQ Admin UI.
                         * @param connectionName the connection name.
                         * @since 2.1.1
                         */
                        // @ts-ignore
                        public setConnectionName(connectionName: java.lang.String | string): void
                        /**
                         * Set additional client connection properties to be added to the rabbit connection,
                         * with the form {@code key:value[,key:value]...}.
                         * @param clientConnectionProperties the properties.
                         * @since 1.5.6
                         */
                        // @ts-ignore
                        public setClientConnectionProperties(clientConnectionProperties: java.lang.String | string): void
                        // @ts-ignore
                        public isIncludeCallerData(): boolean
                        /**
                         * If true, the caller data will be available in the target AMQP message.
                         * By default no caller data is sent to the RabbitMQ.
                         * @param includeCallerData include or on caller data
                         * @since 1.7.1
                         * @see ILoggingEvent#getCallerData()
                         */
                        // @ts-ignore
                        public setIncludeCallerData(includeCallerData: boolean): void
                        // @ts-ignore
                        public start(): void
                        /**
                         * Create the {@link ConnectionFactory}.
                         * @return a {#link ConnectionFactory}.
                         */
                        // @ts-ignore
                        createRabbitConnectionFactory(): ConnectionFactory
                        /**
                         * Configure the {@link RabbitConnectionFactoryBean}. Sub-classes may override to
                         * customize the configuration of the bean.
                         * @param factoryBean the {#link RabbitConnectionFactoryBean}.
                         */
                        // @ts-ignore
                        configureRabbitConnectionFactory(factoryBean: org.springframework.amqp.rabbit.connection.RabbitConnectionFactoryBean): void
                        /**
                         * Subclasses can override this method to add properties to the connection client
                         * properties.
                         * @param clientProperties the client properties.
                         * @since 1.5.6
                         */
                        // @ts-ignore
                        updateConnectionClientProperties(clientProperties: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        /**
                         * Subclasses can override this method to inject a custom queue implementation.
                         * @return the queue to use for queueing logging events before processing them.
                         * @since 2.0.1
                         */
                        // @ts-ignore
                        createEventQueue(): java.util.concurrent.BlockingQueue<org.springframework.amqp.rabbit.logback.AmqpAppender.Event>
                        // @ts-ignore
                        public stop(): void
                        // @ts-ignore
                        append(event: ILoggingEvent): void
                        // @ts-ignore
                        setUpExchangeDeclaration(): void
                        // @ts-ignore
                        prepareMessageProperties(event: org.springframework.amqp.rabbit.logback.AmqpAppender.Event): MessageProperties
                        /**
                         * Subclasses may modify the final message before sending.
                         * @param message The message.
                         * @param event The event.
                         * @return The modified message.
                         * @since 1.4
                         */
                        // @ts-ignore
                        postProcessMessageBeforeSend(message: Message, event: org.springframework.amqp.rabbit.logback.AmqpAppender.Event): Message
                    }
                }
            }
        }
    }
}
