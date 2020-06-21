declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * The {@code SimpleMessageListenerContainer} is not so simple. Recent changes to the
                     * rabbitmq java client has facilitated a much simpler listener container that invokes the
                     * listener directly on the rabbit client consumer thread. There is no txSize property -
                     * each message is acked (or nacked) individually.
                     * @author Gary Russell
                     * @author Artem Bilan
                     * @author Nicolas Ristock
                     * @since 2.0
                     */
                    // @ts-ignore
                    class DirectMessageListenerContainer extends org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer {
                        /**
                         * Create an instance; {@link #setConnectionFactory(ConnectionFactory)} must
                         * be called before starting.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create an instance with the provided connection factory.
                         * @param connectionFactory the connection factory.
                         */
                        // @ts-ignore
                        constructor(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory)
                        // @ts-ignore
                        readonly consumers: java.util.List<org.springframework.amqp.rabbit.listener.DirectMessageListenerContainer.SimpleConsumer> | Array<org.springframework.amqp.rabbit.listener.DirectMessageListenerContainer.SimpleConsumer>
                        /**
                         * Each queue runs in its own consumer; set this property to create multiple
                         * consumers for each queue.
                         * If the container is already running, the number of consumers per queue will
                         * be adjusted up or down as necessary.
                         * @param consumersPerQueue the consumers per queue.
                         */
                        // @ts-ignore
                        public setConsumersPerQueue(consumersPerQueue: number /*int*/): void
                        /**
                         * Set to true for an exclusive consumer - if true, the
                         * {@link #setConsumersPerQueue(int) consumers per queue} must be 1.
                         * @param exclusive true for an exclusive consumer.
                         */
                        // @ts-ignore
                        public setExclusive(exclusive: boolean): void
                        /**
                         * Set the task scheduler to use for the task that monitors idle containers and
                         * failed consumers.
                         * @param taskScheduler the scheduler.
                         */
                        // @ts-ignore
                        public setTaskScheduler(taskScheduler: TaskScheduler): void
                        /**
                         * Set how often to run a task to check for failed consumers and idle containers.
                         * @param monitorInterval the interval; default 10000 but it will be adjusted down
                         *  to the smallest of this, {#link #setIdleEventInterval(long) idleEventInterval} / 2
                         *  (if configured) or
                         *  {@link #setFailedDeclarationRetryInterval(long) failedDeclarationRetryInterval}.
                         */
                        // @ts-ignore
                        public setMonitorInterval(monitorInterval: number /*long*/): void
                        // @ts-ignore
                        public setQueueNames(...queueName: java.lang.String[] | string[]): void
                        /**
                         * {@inheritDoc}
                         * <p>
                         * Defaults to false for this container.
                         */
                        // @ts-ignore
                        public setMissingQueuesFatal(missingQueuesFatal: boolean): void
                        /**
                         * Set the number of messages to receive before acknowledging (success).
                         * A failed message will short-circuit this counter.
                         * @param messagesPerAck the number of messages.
                         * @see #setAckTimeout(long)
                         */
                        // @ts-ignore
                        public setMessagesPerAck(messagesPerAck: number /*int*/): void
                        /**
                         * An approximate timeout; when {@link #setMessagesPerAck(int) messagesPerAck} is
                         * greater than 1, and this time elapses since the last ack, the pending acks will be
                         * sent either when the next message arrives, or a short time later if no additional
                         * messages arrive. In that case, the actual time depends on the
                         * {@link #setMonitorInterval(long) monitorInterval}.
                         * @param ackTimeout the timeout in milliseconds (default 20000);
                         * @see #setMessagesPerAck(int)
                         */
                        // @ts-ignore
                        public setAckTimeout(ackTimeout: number /*long*/): void
                        // @ts-ignore
                        public addQueueNames(...queueNames: java.lang.String[] | string[]): void
                        // @ts-ignore
                        public addQueues(...queues: Queue[]): void
                        // @ts-ignore
                        public removeQueueNames(...queueNames: java.lang.String[] | string[]): boolean
                        // @ts-ignore
                        public removeQueues(...queues: Queue[]): boolean
                        /**
                         * When adjusting down, return a consumer that can be canceled. Called while
                         * synchronized on consumersMonitor.
                         * @return the consumer index or -1 if non idle.
                         * @since 2.0.6
                         */
                        // @ts-ignore
                        findIdleConsumer(): number /*int*/
                        // @ts-ignore
                        doInitialize(): void
                        // @ts-ignore
                        doStart(): void
                        // @ts-ignore
                        doStop(): void
                        // @ts-ignore
                        actualStart(): void
                        // @ts-ignore
                        doRedeclareElementsIfNecessary(): void
                        /**
                         * Subclasses can override this to take additional actions when the monitor task runs.
                         */
                        // @ts-ignore
                        processMonitorTask(): void
                        // @ts-ignore
                        doShutdown(): void
                        /**
                         * Called whenever a consumer is removed.
                         * @param consumer the consumer.
                         */
                        // @ts-ignore
                        consumerRemoved(consumer: org.springframework.amqp.rabbit.listener.DirectMessageListenerContainer.SimpleConsumer): void
                    }
                }
            }
        }
    }
}
