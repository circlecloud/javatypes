declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * @author Dave Syer
                     * @author Gary Russell
                     * @author Steve Powell
                     * @author Artem Bilan
                     * @author Will Droste
                     */
                    // @ts-ignore
                    abstract class AbstractConnectionFactory extends java.lang.Object implements org.springframework.amqp.rabbit.connection.ConnectionFactory {
                        /**
                         * Create a new AbstractConnectionFactory for the given target ConnectionFactory,
                         * with no publisher connection factory.
                         * @param rabbitConnectionFactory the target ConnectionFactory
                         */
                        // @ts-ignore
                        constructor(rabbitConnectionFactory: com.rabbitmq.client.ConnectionFactory)
                        // @ts-ignore
                        public static readonly DEFAULT_CLOSE_TIMEOUT: number /*int*/
                        // @ts-ignore
                        readonly logger: Log
                        // @ts-ignore
                        setPublisherConnectionFactory(publisherConnectionFactory: org.springframework.amqp.rabbit.connection.AbstractConnectionFactory): void
                        // @ts-ignore
                        public setApplicationContext(applicationContext: ApplicationContext): void
                        // @ts-ignore
                        getApplicationContext(): ApplicationContext
                        // @ts-ignore
                        public setApplicationEventPublisher(applicationEventPublisher: ApplicationEventPublisher): void
                        // @ts-ignore
                        getApplicationEventPublisher(): ApplicationEventPublisher
                        // @ts-ignore
                        public onApplicationEvent(event: ContextClosedEvent): void
                        // @ts-ignore
                        getContextStopped(): boolean
                        /**
                         * Return a reference to the underlying Rabbit Connection factory.
                         * @return the connection factory.
                         * @since 1.5.6
                         */
                        // @ts-ignore
                        public getRabbitConnectionFactory(): com.rabbitmq.client.ConnectionFactory
                        /**
                         * Return the user name from the underlying rabbit connection factory.
                         * @return the user name.
                         * @since 1.6
                         */
                        // @ts-ignore
                        public getUsername(): string
                        // @ts-ignore
                        public setUsername(username: java.lang.String | string): void
                        // @ts-ignore
                        public setPassword(password: java.lang.String | string): void
                        // @ts-ignore
                        public setHost(host: java.lang.String | string): void
                        /**
                         * Set the {@link ThreadFactory} on the underlying rabbit connection factory.
                         * @param threadFactory the thread factory.
                         * @since 1.5.3
                         */
                        // @ts-ignore
                        public setConnectionThreadFactory(threadFactory: java.util.concurrent.ThreadFactory): void
                        /**
                         * Set an {@link AddressResolver} to use when creating connections; overrides
                         * {@link #setAddresses(String)}, {@link #setHost(String)}, and {@link #setPort(int)}.
                         * @param addressResolver the resolver.
                         * @since 2.1.15
                         */
                        // @ts-ignore
                        public setAddressResolver(addressResolver: AddressResolver): void
                        /**
                         * @param uri the URI
                         * @since 1.5
                         * @see com.rabbitmq.client.ConnectionFactory#setUri(URI)
                         */
                        // @ts-ignore
                        public setUri(uri: java.net.URI): void
                        /**
                         * @param uri the URI
                         * @since 1.5
                         * @see com.rabbitmq.client.ConnectionFactory#setUri(String)
                         */
                        // @ts-ignore
                        public setUri(uri: java.lang.String | string): void
                        // @ts-ignore
                        public getHost(): string
                        // @ts-ignore
                        public setVirtualHost(virtualHost: java.lang.String | string): void
                        // @ts-ignore
                        public getVirtualHost(): string
                        // @ts-ignore
                        public setPort(port: number /*int*/): void
                        // @ts-ignore
                        public setRequestedHeartBeat(requestedHeartBeat: number /*int*/): void
                        // @ts-ignore
                        public setConnectionTimeout(connectionTimeout: number /*int*/): void
                        // @ts-ignore
                        public getPort(): number /*int*/
                        /**
                         * Set addresses for clustering.
                         * This property overrides the host+port properties if not empty.
                         * @param addresses list of addresses with form "host[:port],..."
                         */
                        // @ts-ignore
                        public setAddresses(addresses: java.lang.String | string): void
                        /**
                         * A composite connection listener to be used by subclasses when creating and closing connections.
                         * @return the connection listener
                         */
                        // @ts-ignore
                        getConnectionListener(): org.springframework.amqp.rabbit.connection.ConnectionListener
                        /**
                         * A composite channel listener to be used by subclasses when creating and closing channels.
                         * @return the channel listener
                         */
                        // @ts-ignore
                        getChannelListener(): org.springframework.amqp.rabbit.connection.ChannelListener
                        // @ts-ignore
                        public setConnectionListeners(listeners: java.util.List<any> | Array<any>): void
                        // @ts-ignore
                        public addConnectionListener(listener: org.springframework.amqp.rabbit.connection.ConnectionListener): void
                        // @ts-ignore
                        public removeConnectionListener(listener: org.springframework.amqp.rabbit.connection.ConnectionListener): boolean
                        // @ts-ignore
                        public clearConnectionListeners(): void
                        // @ts-ignore
                        public setChannelListeners(listeners: java.util.List<any> | Array<any>): void
                        /**
                         * Set a {@link RecoveryListener} that will be added to each connection created.
                         * @param recoveryListener the listener.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public setRecoveryListener(recoveryListener: RecoveryListener): void
                        // @ts-ignore
                        public addChannelListener(listener: org.springframework.amqp.rabbit.connection.ChannelListener): void
                        /**
                         * Provide an Executor for
                         * use by the Rabbit ConnectionFactory when creating connections.
                         * Can either be an ExecutorService or a Spring
                         * ThreadPoolTaskExecutor, as defined by a &lt;task:executor/&gt; element.
                         * @param executor The executor.
                         */
                        // @ts-ignore
                        public setExecutor(executor: java.util.concurrent.Executor): void
                        // @ts-ignore
                        getExecutorService(): java.util.concurrent.ExecutorService
                        /**
                         * How long to wait (milliseconds) for a response to a connection close
                         * operation from the broker; default 30000 (30 seconds).
                         * @param closeTimeout the closeTimeout to set.
                         */
                        // @ts-ignore
                        public setCloseTimeout(closeTimeout: number /*int*/): void
                        // @ts-ignore
                        public getCloseTimeout(): number /*int*/
                        /**
                         * Provide a {@link ConnectionNameStrategy} to build the name for the target RabbitMQ connection.
                         * The {@link #beanName} together with a counter is used by default.
                         * @param connectionNameStrategy the {#link ConnectionNameStrategy} to use.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public setConnectionNameStrategy(connectionNameStrategy: org.springframework.amqp.rabbit.connection.ConnectionNameStrategy): void
                        // @ts-ignore
                        public setBeanName(name: java.lang.String | string): void
                        /**
                         * Return a bean name of the component or null if not a bean.
                         * @return the bean name or null.
                         * @since 1.7.9
                         */
                        // @ts-ignore
                        getBeanName(): string
                        /**
                         * When {@link #setAddresses(String) addresses} are provided and there is more than
                         * one, set to true to shuffle the list before opening a new connection so that the
                         * connection to the broker will be attempted in random order.
                         * @param shuffleAddresses true to shuffle the list.
                         * @since 2.1.8
                         * @see Collections#shuffle(List)
                         */
                        // @ts-ignore
                        public setShuffleAddresses(shuffleAddresses: boolean): void
                        // @ts-ignore
                        public hasPublisherConnectionFactory(): boolean
                        // @ts-ignore
                        public getPublisherConnectionFactory(): org.springframework.amqp.rabbit.connection.ConnectionFactory
                        // @ts-ignore
                        createBareConnection(): org.springframework.amqp.rabbit.connection.Connection
                        // @ts-ignore
                        getDefaultHostName(): string
                        // @ts-ignore
                        public destroy(): void
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
