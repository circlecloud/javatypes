declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * A {@link ConnectionFactory} implementation that (when the cache mode is {@link CacheMode#CHANNEL} (default)
                     * returns the same Connection from all {@link #createConnection()}
                     * calls, and ignores calls to {@link com.rabbitmq.client.Connection#close()} and caches
                     * {@link com.rabbitmq.client.Channel}.
                     * <p>
                     * By default, only one Channel will be cached, with further requested Channels being created and disposed on demand.
                     * Consider raising the {@link #setChannelCacheSize(int) "channelCacheSize" value} in case of a high-concurrency
                     * environment.
                     * <p>
                     * When the cache mode is {@link CacheMode#CONNECTION}, a new (or cached) connection is used for each
                     * {@link #createConnection()};
                     * connections are cached according to the {@link #setConnectionCacheSize(int) "connectionCacheSize" value}.
                     * Both connections and channels are cached in this mode.
                     * <p>
                     * <b>{@link CacheMode#CONNECTION} is not compatible with a Rabbit Admin that auto-declares queues etc.</b>
                     * <p>
                     * <b>NOTE: This ConnectionFactory requires explicit closing of all Channels obtained form its Connection(s).</b>
                     * This is the usual recommendation for native Rabbit access code anyway. However, with this ConnectionFactory, its use
                     * is mandatory in order to actually allow for Channel reuse. {@link Channel#close()} returns the channel to the
                     * cache, if there is room, or physically closes the channel otherwise.
                     * @author Mark Pollack
                     * @author Mark Fisher
                     * @author Dave Syer
                     * @author Gary Russell
                     * @author Artem Bilan
                     * @author Steve Powell
                     * @author Will Droste
                     */
                    // @ts-ignore
                    class CachingConnectionFactory extends org.springframework.amqp.rabbit.connection.AbstractConnectionFactory {
                        /**
                         * Create a new CachingConnectionFactory initializing the hostname to be the value returned from
                         * InetAddress.getLocalHost(), or "localhost" if getLocalHost() throws an exception.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new CachingConnectionFactory given a host name.
                         * @param hostname the host name to connect to
                         */
                        // @ts-ignore
                        constructor(hostname: java.lang.String | string)
                        /**
                         * Create a new CachingConnectionFactory given a port on the hostname returned from
                         * InetAddress.getLocalHost(), or "localhost" if getLocalHost() throws an exception.
                         * @param port the port number
                         */
                        // @ts-ignore
                        constructor(port: number /*int*/)
                        /**
                         * Create a new CachingConnectionFactory given a host name
                         * and port.
                         * @param hostNameArg the host name to connect to
                         * @param port the port number
                         */
                        // @ts-ignore
                        constructor(hostNameArg: java.lang.String | string, port: number /*int*/)
                        /**
                         * Create a new CachingConnectionFactory given a {@link URI}.
                         * @param uri the amqp uri configuring the connection
                         * @since 1.5
                         */
                        // @ts-ignore
                        constructor(uri: java.net.URI)
                        /**
                         * Create a new CachingConnectionFactory for the given target ConnectionFactory.
                         * @param rabbitConnectionFactory the target ConnectionFactory
                         */
                        // @ts-ignore
                        constructor(rabbitConnectionFactory: com.rabbitmq.client.ConnectionFactory)
                        /**
                         * The number of channels to maintain in the cache. By default, channels are allocated on
                         * demand (unbounded) and this represents the maximum cache size. To limit the available
                         * channels, see {@link #setChannelCheckoutTimeout(long)}.
                         * @param sessionCacheSize the channel cache size.
                         * @see #setChannelCheckoutTimeout(long)
                         */
                        // @ts-ignore
                        public setChannelCacheSize(sessionCacheSize: number /*int*/): void
                        // @ts-ignore
                        public getChannelCacheSize(): number /*int*/
                        // @ts-ignore
                        public getCacheMode(): org.springframework.amqp.rabbit.connection.CachingConnectionFactory.CacheMode
                        // @ts-ignore
                        public setCacheMode(cacheMode: org.springframework.amqp.rabbit.connection.CachingConnectionFactory.CacheMode): void
                        // @ts-ignore
                        public getConnectionCacheSize(): number /*int*/
                        // @ts-ignore
                        public setConnectionCacheSize(connectionCacheSize: number /*int*/): void
                        /**
                         * Set the connection limit when using cache mode CONNECTION. When the limit is
                         * reached and there are no idle connections, the
                         * {@link #setChannelCheckoutTimeout(long) channelCheckoutTimeLimit} is used to wait
                         * for a connection to become idle.
                         * @param connectionLimit the limit.
                         * @since 1.5.5
                         */
                        // @ts-ignore
                        public setConnectionLimit(connectionLimit: number /*int*/): void
                        // @ts-ignore
                        public isPublisherConfirms(): boolean
                        // @ts-ignore
                        public isPublisherReturns(): boolean
                        // @ts-ignore
                        public setPublisherReturns(publisherReturns: boolean): void
                        /**
                         * Use full publisher confirms, with correlation data and a callback for each message.
                         * @param publisherConfirms true for full publisher returns,
                         * @since 1.1
                         * @see #setSimplePublisherConfirms(boolean)
                         */
                        // @ts-ignore
                        public setPublisherConfirms(publisherConfirms: boolean): void
                        /**
                         * Use simple publisher confirms where the template simply waits for completion.
                         * @param simplePublisherConfirms true for confirms.
                         * @since 2.1
                         * @see #setPublisherConfirms(boolean)
                         */
                        // @ts-ignore
                        public setSimplePublisherConfirms(simplePublisherConfirms: boolean): void
                        // @ts-ignore
                        public isSimplePublisherConfirms(): boolean
                        /**
                         * Sets the channel checkout timeout. When greater than 0, enables channel limiting
                         * in that the {@link #channelCacheSize} becomes the total number of available channels per
                         * connection rather than a simple cache size. Note that changing the {@link #channelCacheSize}
                         * does not affect the limit on existing connection(s), invoke {@link #destroy()} to cause a
                         * new connection to be created with the new limit.
                         * <p>
                         * Since 1.5.5, also applies to getting a connection when the cache mode is CONNECTION.
                         * @param channelCheckoutTimeout the timeout in milliseconds; default 0 (channel limiting not enabled).
                         * @since 1.4.2
                         * @see #setConnectionLimit(int)
                         */
                        // @ts-ignore
                        public setChannelCheckoutTimeout(channelCheckoutTimeout: number /*long*/): void
                        /**
                         * Set the strategy for logging close exceptions; by default, if a channel is closed due to a failed
                         * passive queue declaration, it is logged at debug level. Normal channel closes (200 OK) are not
                         * logged. All others are logged at ERROR level (unless access is refused due to an exclusive consumer
                         * condition, in which case, it is logged at INFO level).
                         * @param closeExceptionLogger the {#link ConditionalExceptionLogger}.
                         * @since 1.5
                         */
                        // @ts-ignore
                        public setCloseExceptionLogger(closeExceptionLogger: ConditionalExceptionLogger): void
                        /**
                         * Set the factory to use to create {@link PublisherCallbackChannel} instances.
                         * @param publisherChannelFactory the factory.
                         * @since 2.1.6
                         */
                        // @ts-ignore
                        public setPublisherChannelFactory(publisherChannelFactory: org.springframework.amqp.rabbit.connection.PublisherCallbackChannelFactory): void
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        // @ts-ignore
                        public setConnectionListeners(listeners: java.util.List<any> | Array<any>): void
                        // @ts-ignore
                        public addConnectionListener(listener: org.springframework.amqp.rabbit.connection.ConnectionListener): void
                        // @ts-ignore
                        public shutdownCompleted(cause: ShutdownSignalException): void
                        // @ts-ignore
                        public createConnection(): org.springframework.amqp.rabbit.connection.Connection
                        /**
                         * Close the underlying shared connection. Use {@link #resetConnection()} to close the
                         * connection while the application is still running.
                         * <p>
                         * As this bean implements DisposableBean, a bean factory will automatically invoke
                         * this on destruction of its cached singletons.
                         * <p>
                         * If called after the context is closed, the connection factory can no longer server
                         * up connections.
                         */
                        // @ts-ignore
                        public destroy(): void
                        /**
                         * Close the connection(s). This will impact any in-process operations. New
                         * connection(s) will be created on demand after this method returns. This might be
                         * used to force a reconnect to the primary broker after failing over to a secondary
                         * broker.
                         */
                        // @ts-ignore
                        public resetConnection(): void
                        // @ts-ignore
                        reset(channels: java.util.List<org.springframework.amqp.rabbit.connection.ChannelProxy> | Array<org.springframework.amqp.rabbit.connection.ChannelProxy>, txChannels: java.util.List<org.springframework.amqp.rabbit.connection.ChannelProxy> | Array<org.springframework.amqp.rabbit.connection.ChannelProxy>, channelsAwaitingAcks: java.util.Map<Channel, org.springframework.amqp.rabbit.connection.ChannelProxy>): void
                        // @ts-ignore
                        closeAndClear(theChannels: java.util.Collection<org.springframework.amqp.rabbit.connection.ChannelProxy> | Array<org.springframework.amqp.rabbit.connection.ChannelProxy>): void
                        // @ts-ignore
                        closeChannels(theChannels: java.util.Collection<org.springframework.amqp.rabbit.connection.ChannelProxy> | Array<org.springframework.amqp.rabbit.connection.ChannelProxy>): void
                        // @ts-ignore
                        public getCacheProperties(): java.util.Properties
                        /**
                         * Return the cache properties from the underlying publisher sub-factory.
                         * @return the properties.
                         * @since 2.0.2
                         */
                        // @ts-ignore
                        public getPublisherConnectionFactoryCacheProperties(): java.util.Properties
                        /**
                         * Determine the executor service used for target channels.
                         * @return specified executor service otherwise the default one is created and returned.
                         * @since 1.7.9
                         */
                        // @ts-ignore
                        getChannelsExecutor(): java.util.concurrent.ExecutorService
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
