declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * Base model for a Rabbit listener endpoint.
                     * @author Stephane Nicoll
                     * @author Gary Russell
                     * @author Artem Bilan
                     * @since 1.4
                     * @see MethodRabbitListenerEndpoint
                     * @see org.springframework.amqp.rabbit.config.SimpleRabbitListenerEndpoint
                     */
                    // @ts-ignore
                    abstract class AbstractRabbitListenerEndpoint extends java.lang.Object implements org.springframework.amqp.rabbit.listener.RabbitListenerEndpoint {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public setBeanFactory(beanFactory: BeanFactory): void
                        // @ts-ignore
                        getBeanFactory(): BeanFactory
                        // @ts-ignore
                        getResolver(): BeanExpressionResolver
                        // @ts-ignore
                        getBeanResolver(): BeanResolver
                        // @ts-ignore
                        getBeanExpressionContext(): BeanExpressionContext
                        // @ts-ignore
                        public setId(id: java.lang.String | string): void
                        // @ts-ignore
                        public getId(): string
                        /**
                         * Set the queues to use. Either the {@link Queue} instances or the
                         * queue names should be provided, but not both.
                         * @param queues to set.
                         * @see #setQueueNames
                         */
                        // @ts-ignore
                        public setQueues(...queues: Queue[]): void
                        /**
                         * @return the queues for this endpoint.
                         */
                        // @ts-ignore
                        public getQueues(): Array<Queue>
                        /**
                         * @return the queue names for this endpoint.
                         */
                        // @ts-ignore
                        public getQueueNames(): Array<java.lang.String | string>
                        /**
                         * Set the queue names to use. Either the {@link Queue} instances or the
                         * queue names should be provided, but not both.
                         * @param queueNames to set.
                         * @see #setQueues
                         */
                        // @ts-ignore
                        public setQueueNames(...queueNames: java.lang.String[] | string[]): void
                        /**
                         * Set if a single consumer in the container will have exclusive use of the
                         * queues, preventing other consumers from receiving messages from the
                         * queue(s).
                         * @param exclusive the exclusive {#code boolean} flag.
                         */
                        // @ts-ignore
                        public setExclusive(exclusive: boolean): void
                        /**
                         * @return the exclusive {#code boolean} flag.
                         */
                        // @ts-ignore
                        public isExclusive(): boolean
                        /**
                         * Set the priority of this endpoint.
                         * @param priority the priority value.
                         */
                        // @ts-ignore
                        public setPriority(priority: java.lang.Integer | number): void
                        /**
                         * @return the priority of this endpoint or {#code null} if
                         *  no priority is set.
                         */
                        // @ts-ignore
                        public getPriority(): number
                        /**
                         * Set the concurrency of this endpoint; usually overrides any concurrency
                         * settings on the container factory. Contents depend on container implementation.
                         * @param concurrency the concurrency.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public setConcurrency(concurrency: java.lang.String | string): void
                        /**
                         * The concurrency of this endpoint; Not used by this abstract class;
                         * used by subclasses to set the concurrency appropriate for the container type.
                         * @return the concurrency.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public getConcurrency(): string
                        /**
                         * Set the {@link AmqpAdmin} instance to use.
                         * @param admin the {#link AmqpAdmin} instance.
                         */
                        // @ts-ignore
                        public setAdmin(admin: AmqpAdmin): void
                        /**
                         * @return the {#link AmqpAdmin} instance to use or {@code null} if
                         *  none is configured.
                         */
                        // @ts-ignore
                        public getAdmin(): AmqpAdmin
                        // @ts-ignore
                        public getGroup(): string
                        /**
                         * Set the group for the corresponding listener container.
                         * @param group the group.
                         * @since 1.5
                         */
                        // @ts-ignore
                        public setGroup(group: java.lang.String | string): void
                        /**
                         * Override the default autoStartup property.
                         * @param autoStartup the autoStartup.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public setAutoStartup(autoStartup: java.lang.Boolean): void
                        // @ts-ignore
                        public getAutoStartup(): java.lang.Boolean
                        // @ts-ignore
                        public getMessageConverter(): MessageConverter
                        // @ts-ignore
                        public setMessageConverter(messageConverter: MessageConverter): void
                        // @ts-ignore
                        public setupListenerContainer(listenerContainer: org.springframework.amqp.rabbit.listener.MessageListenerContainer): void
                        /**
                         * Create a {@link MessageListener} that is able to serve this endpoint for the
                         * specified container.
                         * @param container the {#link MessageListenerContainer} to create a {@link MessageListener}.
                         * @return a a {#link MessageListener} instance.
                         */
                        // @ts-ignore
                        abstract createMessageListener(container: org.springframework.amqp.rabbit.listener.MessageListenerContainer): MessageListener
                        /**
                         * @return a description for this endpoint.
                         *  <p>Available to subclasses, for inclusion in their {#code toString()} result.
                         */
                        // @ts-ignore
                        getEndpointDescription(): java.lang.StringBuilder
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
