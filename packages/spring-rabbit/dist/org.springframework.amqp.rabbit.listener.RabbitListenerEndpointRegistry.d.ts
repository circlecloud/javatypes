declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * Creates the necessary {@link MessageListenerContainer} instances for the
                     * registered {@linkplain RabbitListenerEndpoint endpoints}. Also manages the
                     * lifecycle of the listener containers, in particular within the lifecycle
                     * of the application context.
                     * <p>Contrary to {@link MessageListenerContainer}s created manually, listener
                     * containers managed by registry are not beans in the application context and
                     * are not candidates for autowiring. Use {@link #getListenerContainers()} if
                     * you need to access this registry's listener containers for management purposes.
                     * If you need to access to a specific message listener container, use
                     * {@link #getListenerContainer(String)} with the id of the endpoint.
                     * @author Stephane Nicoll
                     * @author Juergen Hoeller
                     * @author Artem Bilan
                     * @author Gary Russell
                     * @since 1.4
                     * @see RabbitListenerEndpoint
                     * @see MessageListenerContainer
                     * @see RabbitListenerContainerFactory
                     */
                    // @ts-ignore
                    class RabbitListenerEndpointRegistry extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        readonly logger: Log
                        // @ts-ignore
                        public setApplicationContext(applicationContext: ApplicationContext): void
                        /**
                         * Return the {@link MessageListenerContainer} with the specified id or
                         * {@code null} if no such container exists.
                         * @param id the id of the container
                         * @return the container or {#code null} if no container with that id exists
                         * @see RabbitListenerEndpoint#getId()
                         * @see #getListenerContainerIds()
                         */
                        // @ts-ignore
                        public getListenerContainer(id: java.lang.String | string): org.springframework.amqp.rabbit.listener.MessageListenerContainer
                        /**
                         * Return the ids of the managed {@link MessageListenerContainer} instance(s).
                         * @return the ids.
                         * @since 1.5.2
                         * @see #getListenerContainer(String)
                         */
                        // @ts-ignore
                        public getListenerContainerIds(): Array<java.lang.String | string>
                        /**
                         * @return the managed {#link MessageListenerContainer} instance(s).
                         */
                        // @ts-ignore
                        public getListenerContainers(): Array<org.springframework.amqp.rabbit.listener.MessageListenerContainer>
                        /**
                         * Create a message listener container for the given {@link RabbitListenerEndpoint}.
                         * <p>This create the necessary infrastructure to honor that endpoint
                         * with regards to its configuration.
                         * @param endpoint the endpoint to add
                         * @param factory the listener factory to use
                         * @see #registerListenerContainer(RabbitListenerEndpoint, RabbitListenerContainerFactory, boolean)
                         */
                        // @ts-ignore
                        public registerListenerContainer(endpoint: org.springframework.amqp.rabbit.listener.RabbitListenerEndpoint, factory: org.springframework.amqp.rabbit.listener.RabbitListenerContainerFactory<any>): void
                        /**
                         * Create a message listener container for the given {@link RabbitListenerEndpoint}.
                         * <p>This create the necessary infrastructure to honor that endpoint
                         * with regards to its configuration.
                         * <p>The {@code startImmediately} flag determines if the container should be
                         * started immediately.
                         * @param endpoint the endpoint to add.
                         * @param factory the {#link RabbitListenerContainerFactory} to use.
                         * @param startImmediately start the container immediately if necessary
                         * @see #getListenerContainers()
                         * @see #getListenerContainer(String)
                         */
                        // @ts-ignore
                        public registerListenerContainer(endpoint: org.springframework.amqp.rabbit.listener.RabbitListenerEndpoint, factory: org.springframework.amqp.rabbit.listener.RabbitListenerContainerFactory<any>, startImmediately: boolean): void
                        /**
                         * Create and start a new {@link MessageListenerContainer} using the specified factory.
                         * @param endpoint the endpoint to create a {#link MessageListenerContainer}.
                         * @param factory the {#link RabbitListenerContainerFactory} to use.
                         * @return the {#link MessageListenerContainer}.
                         */
                        // @ts-ignore
                        createListenerContainer(endpoint: org.springframework.amqp.rabbit.listener.RabbitListenerEndpoint, factory: org.springframework.amqp.rabbit.listener.RabbitListenerContainerFactory<any>): org.springframework.amqp.rabbit.listener.MessageListenerContainer
                        /**
                         * Remove a listener container from the registry.
                         * @param id the container id.
                         * @return the container, or null if there is no registration matching the id.
                         * @since 2.0.6
                         */
                        // @ts-ignore
                        public unregisterListenerContainer(id: java.lang.String | string): org.springframework.amqp.rabbit.listener.MessageListenerContainer
                        // @ts-ignore
                        public destroy(): void
                        // @ts-ignore
                        public getPhase(): number /*int*/
                        // @ts-ignore
                        public isAutoStartup(): boolean
                        // @ts-ignore
                        public start(): void
                        // @ts-ignore
                        public stop(): void
                        // @ts-ignore
                        public stop(callback: java.lang.Runnable): void
                        // @ts-ignore
                        public isRunning(): boolean
                        // @ts-ignore
                        public onApplicationEvent(event: ContextRefreshedEvent): void
                    }
                }
            }
        }
    }
}
