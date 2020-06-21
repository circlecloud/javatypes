declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    /**
                     * When the event-exchange-plugin is enabled (see
                     * https://www.rabbitmq.com/event-exchange.html), if an object of this type is declared as
                     * a bean, selected events will be published as {@link BrokerEvent}s. Such events can then
                     * be consumed using an {@code ApplicationListener} or {@code @EventListener} method.
                     * An {@link AnonymousQueue} will be bound to the {@code amq.rabbitmq.event} topic exchange
                     * with the supplied keys.
                     * @author Gary Russell
                     * @since 2.1
                     */
                    // @ts-ignore
                    class BrokerEventListener extends java.lang.Object implements org.springframework.amqp.rabbit.connection.ConnectionListener {
                        /**
                         * Construct an instance using the supplied connection factory and event keys. Event
                         * keys are patterns to match routing keys for events published to the
                         * {@code amq.rabbitmq.event} topic exchange. They can therefore match wildcards;
                         * examples are {@code user.#, queue.created}. Refer to the plugin documentation for
                         * information about available events. A single-threaded
                         * {@link DirectMessageListenerContainer} will be created; its lifecycle will be
                         * controlled by this object's {@link SmartLifecycle} methods.
                         * @param connectionFactory the connection factory.
                         * @param eventKeys the event keys.
                         */
                        // @ts-ignore
                        constructor(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory, ...eventKeys: java.lang.String[] | string[])
                        /**
                         * Construct an instance using the supplied listener container factory and event keys.
                         * Event keys are patterns to match routing keys for events published to the
                         * {@code amq.rabbitmq.event} topic exchange. They can therefore match wildcards;
                         * examples are {@code user.#, queue.created}. Refer to the plugin documentation for
                         * information about available events. The container's lifecycle will be not be
                         * controlled by this object's {@link SmartLifecycle} methods. The container should
                         * not be configured with queues or a {@link MessageListener}; those properties will
                         * be replaced.
                         * @param container the listener container.
                         * @param eventKeys the event keys.
                         */
                        // @ts-ignore
                        constructor(container: org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer, ...eventKeys: java.lang.String[] | string[])
                        // @ts-ignore
                        public setApplicationEventPublisher(applicationEventPublisher: ApplicationEventPublisher): void
                        /**
                         * Return any exception thrown when attempting to bind the queue to the event exchange.
                         * @return the exception.
                         */
                        // @ts-ignore
                        public getBindingsFailedException(): java.lang.Exception
                        // @ts-ignore
                        public start(): void
                        // @ts-ignore
                        public stop(): void
                        // @ts-ignore
                        public isRunning(): boolean
                        // @ts-ignore
                        public getPhase(): number /*int*/
                        // @ts-ignore
                        public setPhase(phase: number /*int*/): void
                        // @ts-ignore
                        public isAutoStartup(): boolean
                        // @ts-ignore
                        public setAutoStartup(autoStartup: boolean): void
                        // @ts-ignore
                        public onMessage(message: Message): void
                        // @ts-ignore
                        public onCreate(connection: org.springframework.amqp.rabbit.connection.Connection): void
                    }
                }
            }
        }
    }
}
