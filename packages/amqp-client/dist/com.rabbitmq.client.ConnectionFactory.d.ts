declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Convenience factory class to facilitate opening a {@link Connection} to a RabbitMQ node.
             * Most connection and socket settings are configured using this factory.
             * Some settings that apply to connections can also be configured here
             * and will apply to all connections produced by this factory.
             */
            // @ts-ignore
            class ConnectionFactory extends java.lang.Object implements java.lang.Cloneable {
                // @ts-ignore
                constructor()
                /**
                 * Default user name
                 */
                // @ts-ignore
                public static readonly DEFAULT_USER: java.lang.String | string
                /**
                 * Default password
                 */
                // @ts-ignore
                public static readonly DEFAULT_PASS: java.lang.String | string
                /**
                 * Default virtual host
                 */
                // @ts-ignore
                public static readonly DEFAULT_VHOST: java.lang.String | string
                /**
                 * Default maximum channel number;
                 * 2047 because it's 2048 on the server side minus channel 0,
                 * which each connection uses for negotiation
                 * and error communication
                 */
                // @ts-ignore
                public static readonly DEFAULT_CHANNEL_MAX: number /*int*/
                /**
                 * Default maximum frame size;
                 * zero means no limit
                 */
                // @ts-ignore
                public static readonly DEFAULT_FRAME_MAX: number /*int*/
                /**
                 * Default heart-beat interval;
                 * 60 seconds
                 */
                // @ts-ignore
                public static readonly DEFAULT_HEARTBEAT: number /*int*/
                /**
                 * The default host
                 */
                // @ts-ignore
                public static readonly DEFAULT_HOST: java.lang.String | string
                /**
                 * 'Use the default port' port
                 */
                // @ts-ignore
                public static readonly USE_DEFAULT_PORT: number /*int*/
                /**
                 * The default non-ssl port
                 */
                // @ts-ignore
                public static readonly DEFAULT_AMQP_PORT: number /*int*/
                /**
                 * The default ssl port
                 */
                // @ts-ignore
                public static readonly DEFAULT_AMQP_OVER_SSL_PORT: number /*int*/
                /**
                 * The default TCP connection timeout: 60 seconds
                 */
                // @ts-ignore
                public static readonly DEFAULT_CONNECTION_TIMEOUT: number /*int*/
                /**
                 * The default AMQP 0-9-1 connection handshake timeout. See DEFAULT_CONNECTION_TIMEOUT
                 * for TCP (socket) connection timeout.
                 */
                // @ts-ignore
                public static readonly DEFAULT_HANDSHAKE_TIMEOUT: number /*int*/
                /**
                 * The default shutdown timeout;
                 * zero means wait indefinitely
                 */
                // @ts-ignore
                public static readonly DEFAULT_SHUTDOWN_TIMEOUT: number /*int*/
                /**
                 * The default continuation timeout for RPC calls in channels: 10 minutes
                 */
                // @ts-ignore
                public static readonly DEFAULT_CHANNEL_RPC_TIMEOUT: number /*int*/
                /**
                 * The default network recovery interval: 5000 millis
                 */
                // @ts-ignore
                public static readonly DEFAULT_NETWORK_RECOVERY_INTERVAL: number /*long*/
                /**
                 * The default timeout for work pool enqueueing: no timeout
                 */
                // @ts-ignore
                public static readonly DEFAULT_WORK_POOL_TIMEOUT: number /*int*/
                /**
                 * @return the default host to use for connections
                 */
                // @ts-ignore
                public getHost(): string
                /**
                 * @param host the default host to use for connections
                 */
                // @ts-ignore
                public setHost(host: java.lang.String | string): void
                // @ts-ignore
                public static portOrDefault(port: number /*int*/, ssl: boolean): number /*int*/
                /**
                 * @return the default port to use for connections
                 */
                // @ts-ignore
                public getPort(): number /*int*/
                /**
                 * Set the target port.
                 * @param port the default port to use for connections
                 */
                // @ts-ignore
                public setPort(port: number /*int*/): void
                /**
                 * Retrieve the user name.
                 * @return the AMQP user name to use when connecting to the broker
                 */
                // @ts-ignore
                public getUsername(): string
                /**
                 * Set the user name.
                 * @param username the AMQP user name to use when connecting to the broker
                 */
                // @ts-ignore
                public setUsername(username: java.lang.String | string): void
                /**
                 * Retrieve the password.
                 * @return the password to use when connecting to the broker
                 */
                // @ts-ignore
                public getPassword(): string
                /**
                 * Set the password.
                 * @param password the password to use when connecting to the broker
                 */
                // @ts-ignore
                public setPassword(password: java.lang.String | string): void
                /**
                 * Set a custom credentials provider.
                 * Default implementation uses static username and password.
                 * @param credentialsProvider The custom implementation of CredentialsProvider to use when connecting to the broker.
                 * @see com.rabbitmq.client.impl.DefaultCredentialsProvider
                 * @since 4.5.0
                 */
                // @ts-ignore
                public setCredentialsProvider(credentialsProvider: com.rabbitmq.client.impl.CredentialsProvider): void
                /**
                 * Retrieve the virtual host.
                 * @return the virtual host to use when connecting to the broker
                 */
                // @ts-ignore
                public getVirtualHost(): string
                /**
                 * Set the virtual host.
                 * @param virtualHost the virtual host to use when connecting to the broker
                 */
                // @ts-ignore
                public setVirtualHost(virtualHost: java.lang.String | string): void
                /**
                 * Convenience method for setting the fields in an AMQP URI: host,
                 * port, username, password and virtual host.  If any part of the
                 * URI is omitted, the ConnectionFactory's corresponding variable
                 * is left unchanged.
                 * @param uri is the AMQP URI containing the data
                 */
                // @ts-ignore
                public setUri(uri: java.net.URI): void
                /**
                 * Convenience method for setting the fields in an AMQP URI: host,
                 * port, username, password and virtual host.  If any part of the
                 * URI is omitted, the ConnectionFactory's corresponding variable
                 * is left unchanged.  Note that not all valid AMQP URIs are
                 * accepted; in particular, the hostname must be given if the
                 * port, username or password are given, and escapes in the
                 * hostname are not permitted.
                 * @param uriString is the AMQP URI containing the data
                 */
                // @ts-ignore
                public setUri(uriString: java.lang.String | string): void
                /**
                 * Retrieve the requested maximum channel number
                 * @return the initially requested maximum channel number; zero for unlimited
                 */
                // @ts-ignore
                public getRequestedChannelMax(): number /*int*/
                /**
                 * Set the requested maximum channel number.
                 * <p>
                 * Note the value must be between 0 and 65535 (unsigned short in AMQP 0-9-1).
                 * @param requestedChannelMax initially requested maximum channel number; zero for unlimited
                 */
                // @ts-ignore
                public setRequestedChannelMax(requestedChannelMax: number /*int*/): void
                /**
                 * Retrieve the requested maximum frame size
                 * @return the initially requested maximum frame size, in octets; zero for unlimited
                 */
                // @ts-ignore
                public getRequestedFrameMax(): number /*int*/
                /**
                 * Set the requested maximum frame size
                 * @param requestedFrameMax initially requested maximum frame size, in octets; zero for unlimited
                 */
                // @ts-ignore
                public setRequestedFrameMax(requestedFrameMax: number /*int*/): void
                /**
                 * Retrieve the requested heartbeat interval.
                 * @return the initially requested heartbeat interval, in seconds; zero for none
                 */
                // @ts-ignore
                public getRequestedHeartbeat(): number /*int*/
                /**
                 * Set the TCP connection timeout.
                 * @param timeout connection TCP establishment timeout in milliseconds; zero for infinite
                 */
                // @ts-ignore
                public setConnectionTimeout(timeout: number /*int*/): void
                /**
                 * Retrieve the TCP connection timeout.
                 * @return the TCP connection timeout, in milliseconds; zero for infinite
                 */
                // @ts-ignore
                public getConnectionTimeout(): number /*int*/
                /**
                 * Retrieve the AMQP 0-9-1 protocol handshake timeout.
                 * @return the AMQP0-9-1 protocol handshake timeout, in milliseconds
                 */
                // @ts-ignore
                public getHandshakeTimeout(): number /*int*/
                /**
                 * Set the AMQP0-9-1 protocol handshake timeout.
                 * @param timeout the AMQP0-9-1 protocol handshake timeout, in milliseconds
                 */
                // @ts-ignore
                public setHandshakeTimeout(timeout: number /*int*/): void
                /**
                 * Set the shutdown timeout. This is the amount of time that Consumer implementations have to
                 * continue working through deliveries (and other Consumer callbacks) <b>after</b> the connection
                 * has closed but before the ConsumerWorkService is torn down. If consumers exceed this timeout
                 * then any remaining queued deliveries (and other Consumer callbacks, <b>including</b>
                 * the Consumer's handleShutdownSignal() invocation) will be lost.
                 * @param shutdownTimeout shutdown timeout in milliseconds; zero for infinite; default 10000
                 */
                // @ts-ignore
                public setShutdownTimeout(shutdownTimeout: number /*int*/): void
                /**
                 * Retrieve the shutdown timeout.
                 * @return the shutdown timeout, in milliseconds; zero for infinite
                 */
                // @ts-ignore
                public getShutdownTimeout(): number /*int*/
                /**
                 * Set the requested heartbeat timeout. Heartbeat frames will be sent at about 1/2 the timeout interval.
                 * If server heartbeat timeout is configured to a non-zero value, this method can only be used
                 * to lower the value; otherwise any value provided by the client will be used.
                 * <p>
                 * Note the value must be between 0 and 65535 (unsigned short in AMQP 0-9-1).
                 * @param requestedHeartbeat the initially requested heartbeat timeout, in seconds; zero for none
                 * @see <a href="https://rabbitmq.com/heartbeats.html">RabbitMQ Heartbeats Guide</a>
                 */
                // @ts-ignore
                public setRequestedHeartbeat(requestedHeartbeat: number /*int*/): void
                /**
                 * Retrieve the currently-configured table of client properties
                 * that will be sent to the server during connection
                 * startup. Clients may add, delete, and alter keys in this
                 * table. Such changes will take effect when the next new
                 * connection is started using this factory.
                 * @return the map of client properties
                 * @see #setClientProperties
                 */
                // @ts-ignore
                public getClientProperties(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                /**
                 * Replace the table of client properties that will be sent to the
                 * server during subsequent connection startups.
                 * @param clientProperties the map of extra client properties
                 * @see #getClientProperties
                 */
                // @ts-ignore
                public setClientProperties(clientProperties: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                /**
                 * Gets the sasl config to use when authenticating
                 * @return the sasl config
                 * @see com.rabbitmq.client.SaslConfig
                 */
                // @ts-ignore
                public getSaslConfig(): com.rabbitmq.client.SaslConfig
                /**
                 * Sets the sasl config to use when authenticating
                 * @param saslConfig
                 * @see com.rabbitmq.client.SaslConfig
                 */
                // @ts-ignore
                public setSaslConfig(saslConfig: com.rabbitmq.client.SaslConfig): void
                /**
                 * Retrieve the socket factory used to make connections with.
                 */
                // @ts-ignore
                public getSocketFactory(): javax.net.SocketFactory
                /**
                 * Set the socket factory used to create sockets for new connections. Can be
                 * used to customize TLS-related settings by passing in a
                 * javax.net.ssl.SSLSocketFactory instance.
                 * Note this applies only to blocking IO, not to
                 * NIO, as the NIO API doesn't use the SocketFactory API.
                 * @see #useSslProtocol
                 */
                // @ts-ignore
                public setSocketFactory(factory: javax.net.SocketFactory): void
                /**
                 * Get the socket configurator.
                 * @see #setSocketConfigurator(SocketConfigurator)
                 */
                // @ts-ignore
                public getSocketConfigurator(): com.rabbitmq.client.SocketConfigurator
                /**
                 * Set the socket configurator. This gets a chance to "configure" a socket
                 * before it has been opened. The default socket configurator disables
                 * Nagle's algorithm.
                 * @param socketConfigurator the configurator to use
                 */
                // @ts-ignore
                public setSocketConfigurator(socketConfigurator: com.rabbitmq.client.SocketConfigurator): void
                /**
                 * Set the executor to use for consumer operation dispatch
                 * by default for newly created connections.
                 * All connections that use this executor share it.
                 * It's developer's responsibility to shut down the executor
                 * when it is no longer needed.
                 * @param executor executor service to be used for
                 *                  consumer operation
                 */
                // @ts-ignore
                public setSharedExecutor(executor: java.util.concurrent.ExecutorService): void
                /**
                 * Set the executor to use for connection shutdown.
                 * All connections that use this executor share it.
                 * It's developer's responsibility to shut down the executor
                 * when it is no longer needed.
                 * @param executor executor service to be used for
                 *                  connection shutdown
                 */
                // @ts-ignore
                public setShutdownExecutor(executor: java.util.concurrent.ExecutorService): void
                /**
                 * Set the executor to use to send heartbeat frames.
                 * All connections that use this executor share it.
                 * It's developer's responsibility to shut down the executor
                 * when it is no longer needed.
                 * @param executor executor service to be used to send heartbeat
                 */
                // @ts-ignore
                public setHeartbeatExecutor(executor: java.util.concurrent.ScheduledExecutorService): void
                /**
                 * Retrieve the thread factory used to instantiate new threads.
                 * @see ThreadFactory
                 */
                // @ts-ignore
                public getThreadFactory(): java.util.concurrent.ThreadFactory
                /**
                 * Set the thread factory used to instantiate new threads.
                 * @see ThreadFactory
                 */
                // @ts-ignore
                public setThreadFactory(threadFactory: java.util.concurrent.ThreadFactory): void
                /**
                 * Get the exception handler.
                 * @see com.rabbitmq.client.ExceptionHandler
                 */
                // @ts-ignore
                public getExceptionHandler(): com.rabbitmq.client.ExceptionHandler
                /**
                 * Set the exception handler to use for newly created connections.
                 * @see com.rabbitmq.client.ExceptionHandler
                 */
                // @ts-ignore
                public setExceptionHandler(exceptionHandler: com.rabbitmq.client.ExceptionHandler): void
                // @ts-ignore
                public isSSL(): boolean
                /**
                 * Convenience method for configuring TLS using
                 * the default set of TLS protocols and a trusting TrustManager.
                 * This setup is <strong>only suitable for development
                 * and QA environments</strong>.
                 * The trust manager will <strong>trust every server certificate presented</strong>
                 * to it, this is convenient for local development but
                 * <strong>not recommended to use in production</strong> as it provides no protection
                 * against man-in-the-middle attacks. Prefer {@link #useSslProtocol(SSLContext)}.
                 */
                // @ts-ignore
                public useSslProtocol(): void
                /**
                 * Convenience method for configuring TLS using
                 * the supplied protocol and a very trusting TrustManager. This setup is <strong>only suitable for development
                 * and QA environments</strong>.
                 * The trust manager <strong>will trust every server certificate presented</strong>
                 * to it, this is convenient for local development but
                 * not recommended to use in production as it <strong>provides no protection
                 * against man-in-the-middle attacks</strong>.
                 * Use {@link #useSslProtocol(SSLContext)} in production environments.
                 * The produced {@link SSLContext} instance will be shared by all
                 * the connections created by this connection factory.
                 * Use {@link #setSslContextFactory(SslContextFactory)} for more flexibility.
                 * @see #setSslContextFactory(SslContextFactory)
                 */
                // @ts-ignore
                public useSslProtocol(protocol: java.lang.String | string): void
                /**
                 * Convenience method for configuring TLS.
                 * Pass in the TLS protocol version to use, e.g. "TLSv1.2" or "TLSv1.1", and
                 * a desired {@link TrustManager}.
                 * The produced {@link SSLContext} instance will be shared with all
                 * the connections created by this connection factory. Use
                 * {@link #setSslContextFactory(SslContextFactory)} for more flexibility.
                 * @param protocol the TLS protocol to use.
                 * @param trustManager the {#link TrustManager} implementation to use.
                 * @see #setSslContextFactory(SslContextFactory)
                 * @see #useSslProtocol(SSLContext)
                 */
                // @ts-ignore
                public useSslProtocol(protocol: java.lang.String | string, trustManager: javax.net.ssl.TrustManager): void
                /**
                 * Sets up TLS with an initialized {@link SSLContext}. The caller is responsible
                 * for setting up the context with a {@link TrustManager} with suitable security guarantees,
                 * e.g. peer verification.
                 * The {@link SSLContext} instance will be shared with all
                 * the connections created by this connection factory. Use
                 * {@link #setSslContextFactory(SslContextFactory)} for more flexibility.
                 * @param context An initialized SSLContext
                 * @see #setSslContextFactory(SslContextFactory)
                 */
                // @ts-ignore
                public useSslProtocol(context: javax.net.ssl.SSLContext): void
                /**
                 * Enable server hostname verification for TLS connections.
                 * <p>
                 * This enables hostname verification regardless of the IO mode
                 * used (blocking or non-blocking IO).
                 * <p>
                 * This can be called typically after setting the {@link SSLContext}
                 * with one of the <code>useSslProtocol</code> methods.
                 * @see NioParams#enableHostnameVerification()
                 * @see NioParams#setSslEngineConfigurator(SslEngineConfigurator)
                 * @see SslEngineConfigurators#ENABLE_HOSTNAME_VERIFICATION
                 * @see SocketConfigurators#ENABLE_HOSTNAME_VERIFICATION
                 * @see ConnectionFactory#useSslProtocol(String)
                 * @see ConnectionFactory#useSslProtocol(SSLContext)
                 * @see ConnectionFactory#useSslProtocol()
                 * @see ConnectionFactory#useSslProtocol(String, TrustManager)
                 * @since 5.4.0
                 */
                // @ts-ignore
                public enableHostnameVerification(): void
                // @ts-ignore
                enableHostnameVerificationForNio(): void
                // @ts-ignore
                enableHostnameVerificationForBlockingIo(): void
                // @ts-ignore
                public static computeDefaultTlsProtocol(supportedProtocols: java.lang.String[] | string[]): string
                /**
                 * Returns true if <a href="https://www.rabbitmq.com/api-guide.html#recovery">automatic connection recovery</a>
                 * is enabled, false otherwise
                 * @return true if automatic connection recovery is enabled, false otherwise
                 * @see <a href="https://www.rabbitmq.com/api-guide.html#recovery">Automatic Recovery</a>
                 */
                // @ts-ignore
                public isAutomaticRecoveryEnabled(): boolean
                /**
                 * Enables or disables <a href="https://www.rabbitmq.com/api-guide.html#recovery">automatic connection recovery</a>.
                 * @param automaticRecovery if true, enables connection recovery
                 * @see <a href="https://www.rabbitmq.com/api-guide.html#recovery">Automatic Recovery</a>
                 */
                // @ts-ignore
                public setAutomaticRecoveryEnabled(automaticRecovery: boolean): void
                /**
                 * Returns true if topology recovery is enabled, false otherwise
                 * @return true if topology recovery is enabled, false otherwise
                 * @see <a href="https://www.rabbitmq.com/api-guide.html#recovery">Automatic Recovery</a>
                 */
                // @ts-ignore
                public isTopologyRecoveryEnabled(): boolean
                /**
                 * Enables or disables topology recovery
                 * @param topologyRecovery if true, enables topology recovery
                 * @see <a href="https://www.rabbitmq.com/api-guide.html#recovery">Automatic Recovery</a>
                 */
                // @ts-ignore
                public setTopologyRecoveryEnabled(topologyRecovery: boolean): void
                /**
                 * Get the executor to use for parallel topology recovery. If null (the default), recovery is done single threaded on the main connection thread.
                 * @return thread pool executor
                 * @since 4.7.0
                 */
                // @ts-ignore
                public getTopologyRecoveryExecutor(): java.util.concurrent.ExecutorService
                /**
                 * Set the executor to use for parallel topology recovery. If null (the default), recovery is done single threaded on the main connection thread.
                 * It is recommended to pass a ThreadPoolExecutor that will allow its core threads to timeout so these threads can die when recovery is complete.
                 * It's developer's responsibility to shut down the executor when it is no longer needed.
                 * Note: your {@link ExceptionHandler#handleTopologyRecoveryException(Connection, Channel, TopologyRecoveryException)} method should be thread-safe.
                 * @param topologyRecoveryExecutor thread pool executor
                 * @since 4.7.0
                 */
                // @ts-ignore
                public setTopologyRecoveryExecutor(topologyRecoveryExecutor: java.util.concurrent.ExecutorService): void
                // @ts-ignore
                public setMetricsCollector(metricsCollector: com.rabbitmq.client.MetricsCollector): void
                // @ts-ignore
                public getMetricsCollector(): com.rabbitmq.client.MetricsCollector
                /**
                 * Set a {@link CredentialsRefreshService} instance to handle credentials refresh if appropriate.
                 * <p>
                 * Each created connection will register to the refresh service to send an AMQP <code>update.secret</code>
                 * frame when credentials are about to expire. This is the refresh service responsibility to schedule
                 * credentials refresh and <code>udpate.secret</code> frame sending, based on the information provided
                 * by the {@link CredentialsProvider}.
                 * <p>
                 * Note the {@link CredentialsRefreshService} is used only when the {@link CredentialsProvider}
                 * signals credentials can expire, by returning a non-null value from {@link CredentialsProvider#getTimeBeforeExpiration()}.
                 * @param credentialsRefreshService the refresh service to use
                 * @see #setCredentialsProvider(CredentialsProvider)
                 * @see DefaultCredentialsRefreshService
                 */
                // @ts-ignore
                public setCredentialsRefreshService(credentialsRefreshService: com.rabbitmq.client.impl.CredentialsRefreshService): void
                // @ts-ignore
                createFrameHandlerFactory(): com.rabbitmq.client.impl.FrameHandlerFactory
                /**
                 * Create a new broker connection, picking the first available address from
                 * the list.
                 * If <a href="https://www.rabbitmq.com/api-guide.html#recovery">automatic connection recovery</a>
                 * is enabled, the connection returned by this method will be {@link Recoverable}. Future
                 * reconnection attempts will pick a random accessible address from the provided list.
                 * @param addrs an array of known broker addresses (hostname/port pairs) to try in order
                 * @return an interface to the connection
                 * @throws IOException if it encounters a problem
                 */
                // @ts-ignore
                public newConnection(addrs: com.rabbitmq.client.Address[]): com.rabbitmq.client.Connection
                /**
                 * Create a new broker connection, picking the first available address from
                 * the list provided by the {@link AddressResolver}.
                 * If <a href="https://www.rabbitmq.com/api-guide.html#recovery">automatic connection recovery</a>
                 * is enabled, the connection returned by this method will be {@link Recoverable}. Future
                 * reconnection attempts will pick a random accessible address provided by the {@link AddressResolver}.
                 * @param addressResolver discovery service to list potential addresses (hostname/port pairs) to connect to
                 * @return an interface to the connection
                 * @throws IOException if it encounters a problem
                 * @see <a href="https://www.rabbitmq.com/api-guide.html#recovery">Automatic Recovery</a>
                 */
                // @ts-ignore
                public newConnection(addressResolver: com.rabbitmq.client.AddressResolver): com.rabbitmq.client.Connection
                /**
                 * Create a new broker connection with a client-provided name, picking the first available address from
                 * the list.
                 * If <a href="https://www.rabbitmq.com/api-guide.html#recovery">automatic connection recovery</a>
                 * is enabled, the connection returned by this method will be {@link Recoverable}. Future
                 * reconnection attempts will pick a random accessible address from the provided list.
                 * @param addrs an array of known broker addresses (hostname/port pairs) to try in order
                 * @param clientProvidedName application-specific connection name, will be displayed
                 *                            in the management UI if RabbitMQ server supports it.
                 *                            This value doesn't have to be unique and cannot be used
                 *                            as a connection identifier e.g. in HTTP API requests.
                 *                            This value is supposed to be human-readable.
                 * @return an interface to the connection
                 * @throws IOException if it encounters a problem
                 */
                // @ts-ignore
                public newConnection(addrs: com.rabbitmq.client.Address[], clientProvidedName: java.lang.String | string): com.rabbitmq.client.Connection
                /**
                 * Create a new broker connection, picking the first available address from
                 * the list.
                 * If <a href="https://www.rabbitmq.com/api-guide.html#recovery">automatic connection recovery</a>
                 * is enabled, the connection returned by this method will be {@link Recoverable}. Future
                 * reconnection attempts will pick a random accessible address from the provided list.
                 * @param addrs a List of known broker addresses (hostname/port pairs) to try in order
                 * @return an interface to the connection
                 * @throws IOException if it encounters a problem
                 */
                // @ts-ignore
                public newConnection(addrs: java.util.List<com.rabbitmq.client.Address> | Array<com.rabbitmq.client.Address>): com.rabbitmq.client.Connection
                /**
                 * Create a new broker connection with a client-provided name, picking the first available address from
                 * the list.
                 * If <a href="https://www.rabbitmq.com/api-guide.html#recovery">automatic connection recovery</a>
                 * is enabled, the connection returned by this method will be {@link Recoverable}. Future
                 * reconnection attempts will pick a random accessible address from the provided list.
                 * @param addrs a List of known broker addresses (hostname/port pairs) to try in order
                 * @param clientProvidedName application-specific connection name, will be displayed
                 *                            in the management UI if RabbitMQ server supports it.
                 *                            This value doesn't have to be unique and cannot be used
                 *                            as a connection identifier e.g. in HTTP API requests.
                 *                            This value is supposed to be human-readable.
                 * @return an interface to the connection
                 * @throws IOException if it encounters a problem
                 */
                // @ts-ignore
                public newConnection(addrs: java.util.List<com.rabbitmq.client.Address> | Array<com.rabbitmq.client.Address>, clientProvidedName: java.lang.String | string): com.rabbitmq.client.Connection
                /**
                 * Create a new broker connection, picking the first available address from
                 * the list.
                 * If <a href="https://www.rabbitmq.com/api-guide.html#recovery">automatic connection recovery</a>
                 * is enabled, the connection returned by this method will be {@link Recoverable}. Future
                 * reconnection attempts will pick a random accessible address from the provided list.
                 * @param executor thread execution service for consumers on the connection
                 * @param addrs an array of known broker addresses (hostname/port pairs) to try in order
                 * @return an interface to the connection
                 * @throws java.io.IOException if it encounters a problem
                 * @see <a href="https://www.rabbitmq.com/api-guide.html#recovery">Automatic Recovery</a>
                 */
                // @ts-ignore
                public newConnection(executor: java.util.concurrent.ExecutorService, addrs: com.rabbitmq.client.Address[]): com.rabbitmq.client.Connection
                /**
                 * Create a new broker connection with a client-provided name, picking the first available address from
                 * the list.
                 * If <a href="https://www.rabbitmq.com/api-guide.html#recovery">automatic connection recovery</a>
                 * is enabled, the connection returned by this method will be {@link Recoverable}. Future
                 * reconnection attempts will pick a random accessible address from the provided list.
                 * @param executor thread execution service for consumers on the connection
                 * @param addrs an array of known broker addresses (hostname/port pairs) to try in order
                 * @param clientProvidedName application-specific connection name, will be displayed
                 *                            in the management UI if RabbitMQ server supports it.
                 *                            This value doesn't have to be unique and cannot be used
                 *                            as a connection identifier e.g. in HTTP API requests.
                 *                            This value is supposed to be human-readable.
                 * @return an interface to the connection
                 * @throws java.io.IOException if it encounters a problem
                 * @see <a href="https://www.rabbitmq.com/api-guide.html#recovery">Automatic Recovery</a>
                 */
                // @ts-ignore
                public newConnection(executor: java.util.concurrent.ExecutorService, addrs: com.rabbitmq.client.Address[], clientProvidedName: java.lang.String | string): com.rabbitmq.client.Connection
                /**
                 * Create a new broker connection, picking the first available address from
                 * the list.
                 * If <a href="https://www.rabbitmq.com/api-guide.html#recovery">automatic connection recovery</a>
                 * is enabled, the connection returned by this method will be {@link Recoverable}. Future
                 * reconnection attempts will pick a random accessible address from the provided list.
                 * @param executor thread execution service for consumers on the connection
                 * @param addrs a List of known broker addrs (hostname/port pairs) to try in order
                 * @return an interface to the connection
                 * @throws java.io.IOException if it encounters a problem
                 * @see <a href="https://www.rabbitmq.com/api-guide.html#recovery">Automatic Recovery</a>
                 */
                // @ts-ignore
                public newConnection(executor: java.util.concurrent.ExecutorService, addrs: java.util.List<com.rabbitmq.client.Address> | Array<com.rabbitmq.client.Address>): com.rabbitmq.client.Connection
                /**
                 * Create a new broker connection, picking the first available address from
                 * the list provided by the {@link AddressResolver}.
                 * If <a href="https://www.rabbitmq.com/api-guide.html#recovery">automatic connection recovery</a>
                 * is enabled, the connection returned by this method will be {@link Recoverable}. Future
                 * reconnection attempts will pick a random accessible address provided by the {@link AddressResolver}.
                 * @param executor thread execution service for consumers on the connection
                 * @param addressResolver discovery service to list potential addresses (hostname/port pairs) to connect to
                 * @return an interface to the connection
                 * @throws java.io.IOException if it encounters a problem
                 * @see <a href="https://www.rabbitmq.com/api-guide.html#recovery">Automatic Recovery</a>
                 */
                // @ts-ignore
                public newConnection(executor: java.util.concurrent.ExecutorService, addressResolver: com.rabbitmq.client.AddressResolver): com.rabbitmq.client.Connection
                /**
                 * Create a new broker connection with a client-provided name, picking the first available address from
                 * the list.
                 * If <a href="https://www.rabbitmq.com/api-guide.html#recovery">automatic connection recovery</a>
                 * is enabled, the connection returned by this method will be {@link Recoverable}. Future
                 * reconnection attempts will pick a random accessible address from the provided list.
                 * @param executor thread execution service for consumers on the connection
                 * @param addrs a List of known broker addrs (hostname/port pairs) to try in order
                 * @param clientProvidedName application-specific connection name, will be displayed
                 *                            in the management UI if RabbitMQ server supports it.
                 *                            This value doesn't have to be unique and cannot be used
                 *                            as a connection identifier e.g. in HTTP API requests.
                 *                            This value is supposed to be human-readable.
                 * @return an interface to the connection
                 * @throws java.io.IOException if it encounters a problem
                 * @see <a href="https://www.rabbitmq.com/api-guide.html#recovery">Automatic Recovery</a>
                 */
                // @ts-ignore
                public newConnection(executor: java.util.concurrent.ExecutorService, addrs: java.util.List<com.rabbitmq.client.Address> | Array<com.rabbitmq.client.Address>, clientProvidedName: java.lang.String | string): com.rabbitmq.client.Connection
                /**
                 * Create a new broker connection with a client-provided name, picking the first available address from
                 * the list provided by the {@link AddressResolver}.
                 * If <a href="https://www.rabbitmq.com/api-guide.html#recovery">automatic connection recovery</a>
                 * is enabled, the connection returned by this method will be {@link Recoverable}. Future
                 * reconnection attempts will pick a random accessible address provided by the {@link AddressResolver}.
                 * @param executor thread execution service for consumers on the connection
                 * @param addressResolver discovery service to list potential addresses (hostname/port pairs) to connect to
                 * @param clientProvidedName application-specific connection name, will be displayed
                 *                            in the management UI if RabbitMQ server supports it.
                 *                            This value doesn't have to be unique and cannot be used
                 *                            as a connection identifier e.g. in HTTP API requests.
                 *                            This value is supposed to be human-readable.
                 * @return an interface to the connection
                 * @throws java.io.IOException if it encounters a problem
                 * @see <a href="https://www.rabbitmq.com/api-guide.html#recovery">Automatic Recovery</a>
                 */
                // @ts-ignore
                public newConnection(executor: java.util.concurrent.ExecutorService, addressResolver: com.rabbitmq.client.AddressResolver, clientProvidedName: java.lang.String | string): com.rabbitmq.client.Connection
                // @ts-ignore
                public params(consumerWorkServiceExecutor: java.util.concurrent.ExecutorService): com.rabbitmq.client.impl.ConnectionParams
                // @ts-ignore
                createConnection(params: com.rabbitmq.client.impl.ConnectionParams, frameHandler: com.rabbitmq.client.impl.FrameHandler, metricsCollector: com.rabbitmq.client.MetricsCollector): com.rabbitmq.client.impl.AMQConnection
                /**
                 * Create a new broker connection.
                 * If <a href="https://www.rabbitmq.com/api-guide.html#recovery">automatic connection recovery</a>
                 * is enabled, the connection returned by this method will be {@link Recoverable}. Reconnection
                 * attempts will always use the address configured on {@link ConnectionFactory}.
                 * @return an interface to the connection
                 * @throws IOException if it encounters a problem
                 */
                // @ts-ignore
                public newConnection(): com.rabbitmq.client.Connection
                /**
                 * Create a new broker connection.
                 * If <a href="https://www.rabbitmq.com/api-guide.html#recovery">automatic connection recovery</a>
                 * is enabled, the connection returned by this method will be {@link Recoverable}. Reconnection
                 * attempts will always use the address configured on {@link ConnectionFactory}.
                 * @param connectionName client-provided connection name (an arbitrary string). Will
                 *                        be displayed in management UI if the server supports it.
                 * @return an interface to the connection
                 * @throws IOException if it encounters a problem
                 */
                // @ts-ignore
                public newConnection(connectionName: java.lang.String | string): com.rabbitmq.client.Connection
                /**
                 * Create a new broker connection.
                 * If <a href="https://www.rabbitmq.com/api-guide.html#recovery">automatic connection recovery</a>
                 * is enabled, the connection returned by this method will be {@link Recoverable}. Reconnection
                 * attempts will always use the address configured on {@link ConnectionFactory}.
                 * @param executor thread execution service for consumers on the connection
                 * @return an interface to the connection
                 * @throws IOException if it encounters a problem
                 */
                // @ts-ignore
                public newConnection(executor: java.util.concurrent.ExecutorService): com.rabbitmq.client.Connection
                /**
                 * Create a new broker connection.
                 * If <a href="https://www.rabbitmq.com/api-guide.html#recovery">automatic connection recovery</a>
                 * is enabled, the connection returned by this method will be {@link Recoverable}. Reconnection
                 * attempts will always use the address configured on {@link ConnectionFactory}.
                 * @param executor thread execution service for consumers on the connection
                 * @param connectionName client-provided connection name (an arbitrary string). Will
                 *                        be displayed in management UI if the server supports it.
                 * @return an interface to the connection
                 * @throws IOException if it encounters a problem
                 */
                // @ts-ignore
                public newConnection(executor: java.util.concurrent.ExecutorService, connectionName: java.lang.String | string): com.rabbitmq.client.Connection
                // @ts-ignore
                createAddressResolver(addresses: java.util.List<com.rabbitmq.client.Address> | Array<com.rabbitmq.client.Address>): com.rabbitmq.client.AddressResolver
                // @ts-ignore
                public clone(): com.rabbitmq.client.ConnectionFactory
                /**
                 * Load settings from a property file.
                 * Keys must be prefixed with <code>rabbitmq.</code>,
                 * use {@link ConnectionFactory#load(String, String)} to
                 * specify your own prefix.
                 * @param propertyFileLocation location of the property file to use
                 * @throws IOException when something goes wrong reading the file
                 * @since 4.4.0
                 * @see ConnectionFactoryConfigurator
                 */
                // @ts-ignore
                public load(propertyFileLocation: java.lang.String | string): com.rabbitmq.client.ConnectionFactory
                /**
                 * Load settings from a property file.
                 * @param propertyFileLocation location of the property file to use
                 * @param prefix key prefix for the entries in the file
                 * @throws IOException when something goes wrong reading the file
                 * @since 4.4.0
                 * @see ConnectionFactoryConfigurator
                 */
                // @ts-ignore
                public load(propertyFileLocation: java.lang.String | string, prefix: java.lang.String | string): com.rabbitmq.client.ConnectionFactory
                /**
                 * Load settings from a {@link Properties} instance.
                 * Keys must be prefixed with <code>rabbitmq.</code>,
                 * use {@link ConnectionFactory#load(Properties, String)} to
                 * specify your own prefix.
                 * @param properties source for settings
                 * @since 4.4.0
                 * @see ConnectionFactoryConfigurator
                 */
                // @ts-ignore
                public load(properties: java.util.Properties): com.rabbitmq.client.ConnectionFactory
                /**
                 * Load settings from a {@link Properties} instance.
                 * @param properties source for settings
                 * @param prefix key prefix for properties entries
                 * @since 4.4.0
                 * @see ConnectionFactoryConfigurator
                 */
                // @ts-ignore
                public load(properties: java.util.Properties, prefix: java.lang.String | string): com.rabbitmq.client.ConnectionFactory
                /**
                 * Load settings from a {@link Map} instance.
                 * Keys must be prefixed with <code>rabbitmq.</code>,
                 * use {@link ConnectionFactory#load(Map, String)} to
                 * specify your own prefix.
                 * @param properties source for settings
                 * @since 4.4.0
                 * @see ConnectionFactoryConfigurator
                 */
                // @ts-ignore
                public load(properties: java.util.Map<java.lang.String | string, java.lang.String | string>): com.rabbitmq.client.ConnectionFactory
                /**
                 * Load settings from a {@link Map} instance.
                 * @param properties source for settings
                 * @param prefix key prefix for map entries
                 * @since 4.4.0
                 * @see ConnectionFactoryConfigurator
                 */
                // @ts-ignore
                public load(properties: java.util.Map<java.lang.String | string, java.lang.String | string>, prefix: java.lang.String | string): com.rabbitmq.client.ConnectionFactory
                /**
                 * Returns automatic connection recovery interval in milliseconds.
                 * @return how long will automatic recovery wait before attempting to reconnect, in ms; default is 5000
                 */
                // @ts-ignore
                public getNetworkRecoveryInterval(): number /*long*/
                /**
                 * Sets connection recovery interval. Default is 5000.
                 * Uses {@link com.rabbitmq.client.RecoveryDelayHandler.DefaultRecoveryDelayHandler} by default.
                 * Use another {@link RecoveryDelayHandler} implementation for more flexibility.
                 * @param networkRecoveryInterval how long will automatic recovery wait before attempting to reconnect, in ms
                 * @see RecoveryDelayHandler
                 */
                // @ts-ignore
                public setNetworkRecoveryInterval(networkRecoveryInterval: number /*int*/): void
                /**
                 * Sets connection recovery interval. Default is 5000.
                 * Uses {@link com.rabbitmq.client.RecoveryDelayHandler.DefaultRecoveryDelayHandler} by default.
                 * Use another {@link RecoveryDelayHandler} implementation for more flexibility.
                 * @param networkRecoveryInterval how long will automatic recovery wait before attempting to reconnect, in ms
                 * @see RecoveryDelayHandler
                 */
                // @ts-ignore
                public setNetworkRecoveryInterval(networkRecoveryInterval: number /*long*/): void
                /**
                 * Returns automatic connection recovery delay handler.
                 * @return recovery delay handler. May be null if not set.
                 * @since 4.3.0
                 */
                // @ts-ignore
                public getRecoveryDelayHandler(): com.rabbitmq.client.RecoveryDelayHandler
                /**
                 * Sets the automatic connection recovery delay handler.
                 * @param recoveryDelayHandler the recovery delay handler
                 * @since 4.3.0
                 */
                // @ts-ignore
                public setRecoveryDelayHandler(recoveryDelayHandler: com.rabbitmq.client.RecoveryDelayHandler): void
                /**
                 * Sets the parameters when using NIO.
                 * @param nioParams
                 * @see NioParams
                 */
                // @ts-ignore
                public setNioParams(nioParams: com.rabbitmq.client.impl.nio.NioParams): void
                /**
                 * Retrieve the parameters for NIO mode.
                 * @return 
                 */
                // @ts-ignore
                public getNioParams(): com.rabbitmq.client.impl.nio.NioParams
                /**
                 * Use non-blocking IO (NIO) for communication with the server.
                 * With NIO, several connections created from the same {@link ConnectionFactory}
                 * can use the same IO thread.
                 * A client process using a lot of not-so-active connections can benefit
                 * from NIO, as it would use fewer threads than with the traditional, blocking IO mode.
                 * Use {@link NioParams} to tune NIO and a {@link SocketChannelConfigurator} to
                 * configure the underlying {@link java.nio.channels.SocketChannel}s for connections.
                 * @see NioParams
                 * @see SocketChannelConfigurator
                 * @see java.nio.channels.SocketChannel
                 * @see java.nio.channels.Selector
                 */
                // @ts-ignore
                public useNio(): void
                /**
                 * Use blocking IO for communication with the server.
                 * With blocking IO, each connection creates its own thread
                 * to read data from the server.
                 */
                // @ts-ignore
                public useBlockingIo(): void
                /**
                 * Set the continuation timeout for RPC calls in channels.
                 * Default is 10 minutes. 0 means no timeout.
                 * @param channelRpcTimeout
                 */
                // @ts-ignore
                public setChannelRpcTimeout(channelRpcTimeout: number /*int*/): void
                /**
                 * Get the timeout for RPC calls in channels.
                 * @return 
                 */
                // @ts-ignore
                public getChannelRpcTimeout(): number /*int*/
                /**
                 * The factory to create SSL contexts.
                 * This provides more flexibility to create {@link SSLContext}s
                 * for different connections than sharing the {@link SSLContext}
                 * with all the connections produced by the connection factory
                 * (which is the case with the {@link #useSslProtocol()} methods).
                 * This way, different connections with a different certificate
                 * for each of them is a possible scenario.
                 * @param sslContextFactory
                 * @see #useSslProtocol(SSLContext)
                 * @since 5.0.0
                 */
                // @ts-ignore
                public setSslContextFactory(sslContextFactory: com.rabbitmq.client.SslContextFactory): void
                /**
                 * When set to true, channels will check the response type (e.g. queue.declare
                 * expects a queue.declare-ok response) of RPC calls
                 * and ignore those that do not match.
                 * Default is false.
                 * @param channelShouldCheckRpcResponseType
                 */
                // @ts-ignore
                public setChannelShouldCheckRpcResponseType(channelShouldCheckRpcResponseType: boolean): void
                // @ts-ignore
                public isChannelShouldCheckRpcResponseType(): boolean
                /**
                 * Timeout (in ms) for work pool enqueueing.
                 * The {@link com.rabbitmq.client.impl.WorkPool} dispatches several types of responses
                 * from the broker (e.g. deliveries). A high-traffic
                 * client with slow consumers can exhaust the work pool and
                 * compromise the whole connection (by e.g. letting the broker
                 * saturate the receive TCP buffers). Setting a timeout
                 * would make the connection fail early and avoid hard-to-diagnose
                 * TCP connection failure. Note this shouldn't happen
                 * with clients that set appropriate QoS values.
                 * Default is no timeout.
                 * @param workPoolTimeout timeout in ms
                 * @since 4.5.0
                 */
                // @ts-ignore
                public setWorkPoolTimeout(workPoolTimeout: number /*int*/): void
                // @ts-ignore
                public getWorkPoolTimeout(): number /*int*/
                /**
                 * Set a listener to be called when connection gets an IO error trying to write on the socket.
                 * Default listener triggers connection recovery asynchronously and propagates
                 * the exception. Override the default listener to disable or
                 * customise automatic connection triggering on write operations.
                 * @param errorOnWriteListener the listener
                 * @since 4.5.0
                 */
                // @ts-ignore
                public setErrorOnWriteListener(errorOnWriteListener: com.rabbitmq.client.impl.ErrorOnWriteListener): void
                /**
                 * Set filter to include/exclude entities from topology recovery.
                 * @since 4.8.0
                 */
                // @ts-ignore
                public setTopologyRecoveryFilter(topologyRecoveryFilter: com.rabbitmq.client.impl.recovery.TopologyRecoveryFilter): void
                /**
                 * Allows to decide on automatic connection recovery is triggered.
                 * Default is for shutdown not initiated by application or missed heartbeat errors.
                 * @param connectionRecoveryTriggeringCondition
                 */
                // @ts-ignore
                public setConnectionRecoveryTriggeringCondition(connectionRecoveryTriggeringCondition: java.util.function$.Predicate<com.rabbitmq.client.ShutdownSignalException>): void
                /**
                 * Set retry handler for topology recovery.
                 * Default is no retry.
                 * @param topologyRecoveryRetryHandler
                 * @since 5.4.0
                 */
                // @ts-ignore
                public setTopologyRecoveryRetryHandler(topologyRecoveryRetryHandler: com.rabbitmq.client.impl.recovery.RetryHandler): void
                /**
                 * Traffic listener notified of inbound and outbound {@link Command}s.
                 * <p>
                 * Useful for debugging purposes, e.g. logging all sent and received messages.
                 * Default is no-op.
                 * @param trafficListener
                 * @see TrafficListener
                 * @see com.rabbitmq.client.impl.LogTrafficListener
                 * @since 5.5.0
                 */
                // @ts-ignore
                public setTrafficListener(trafficListener: com.rabbitmq.client.TrafficListener): void
                // @ts-ignore
                public static ensureUnsignedShort(value: number /*int*/): number /*int*/
            }
        }
    }
}
