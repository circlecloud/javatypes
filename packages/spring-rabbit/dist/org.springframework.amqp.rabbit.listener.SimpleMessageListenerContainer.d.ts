declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * @author Mark Pollack
                     * @author Mark Fisher
                     * @author Dave Syer
                     * @author Gary Russell
                     * @author Artem Bilan
                     * @author Alex Panchenko
                     * @since 1.0
                     */
                    // @ts-ignore
                    class SimpleMessageListenerContainer extends org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer {
                        /**
                         * Default constructor for convenient dependency injection via setters.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a listener container from the connection factory (mandatory).
                         * @param connectionFactory the {#link ConnectionFactory}
                         */
                        // @ts-ignore
                        constructor(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory)
                        // @ts-ignore
                        public static readonly DEFAULT_RECEIVE_TIMEOUT: number /*long*/
                        /**
                         * Specify the number of concurrent consumers to create. Default is 1.
                         * <p>
                         * Raising the number of concurrent consumers is recommended in order to scale the consumption of messages coming in
                         * from a queue. However, note that any ordering guarantees are lost once multiple consumers are registered. In
                         * general, stick with 1 consumer for low-volume queues. Cannot be more than {@link #maxConcurrentConsumers} (if set).
                         * @param concurrentConsumers the minimum number of consumers to create.
                         * @see #setMaxConcurrentConsumers(int)
                         */
                        // @ts-ignore
                        public setConcurrentConsumers(concurrentConsumers: number /*int*/): void
                        /**
                         * Sets an upper limit to the number of consumers; defaults to 'concurrentConsumers'. Consumers
                         * will be added on demand. Cannot be less than {@link #concurrentConsumers}.
                         * @param maxConcurrentConsumers the maximum number of consumers.
                         * @see #setConcurrentConsumers(int)
                         * @see #setStartConsumerMinInterval(long)
                         * @see #setStopConsumerMinInterval(long)
                         * @see #setConsecutiveActiveTrigger(int)
                         * @see #setConsecutiveIdleTrigger(int)
                         */
                        // @ts-ignore
                        public setMaxConcurrentConsumers(maxConcurrentConsumers: number /*int*/): void
                        /**
                         * Specify concurrency limits via a "lower-upper" String, e.g. "5-10", or a simple
                         * upper limit String, e.g. "10" (a fixed number of consumers).
                         * <p>This listener container will always hold on to the minimum number of consumers
                         * ({@link #setConcurrentConsumers}) and will slowly scale up to the maximum number
                         * of consumers {@link #setMaxConcurrentConsumers} in case of increasing load.
                         * @param concurrency the concurrency.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public setConcurrency(concurrency: java.lang.String | string): void
                        /**
                         * Set to true for an exclusive consumer - if true, the concurrency must be 1.
                         * @param exclusive true for an exclusive consumer.
                         */
                        // @ts-ignore
                        public setExclusive(exclusive: boolean): void
                        /**
                         * If {@link #maxConcurrentConsumers} is greater then {@link #concurrentConsumers}, and
                         * {@link #maxConcurrentConsumers} has not been reached, specifies
                         * the minimum time (milliseconds) between starting new consumers on demand. Default is 10000
                         * (10 seconds).
                         * @param startConsumerMinInterval The minimum interval between new consumer starts.
                         * @see #setMaxConcurrentConsumers(int)
                         * @see #setStartConsumerMinInterval(long)
                         */
                        // @ts-ignore
                        public setStartConsumerMinInterval(startConsumerMinInterval: number /*long*/): void
                        /**
                         * If {@link #maxConcurrentConsumers} is greater then {@link #concurrentConsumers}, and
                         * the number of consumers exceeds {@link #concurrentConsumers}, specifies the
                         * minimum time (milliseconds) between stopping idle consumers. Default is 60000
                         * (1 minute).
                         * @param stopConsumerMinInterval The minimum interval between consumer stops.
                         * @see #setMaxConcurrentConsumers(int)
                         * @see #setStopConsumerMinInterval(long)
                         */
                        // @ts-ignore
                        public setStopConsumerMinInterval(stopConsumerMinInterval: number /*long*/): void
                        /**
                         * If {@link #maxConcurrentConsumers} is greater then {@link #concurrentConsumers}, and
                         * {@link #maxConcurrentConsumers} has not been reached, specifies the number of
                         * consecutive cycles when a single consumer was active, in order to consider
                         * starting a new consumer. If the consumer goes idle for one cycle, the counter is reset.
                         * This is impacted by the {@link #txSize}.
                         * Default is 10 consecutive messages.
                         * @param consecutiveActiveTrigger The number of consecutive receives to trigger a new consumer.
                         * @see #setMaxConcurrentConsumers(int)
                         * @see #setStartConsumerMinInterval(long)
                         * @see #setTxSize(int)
                         */
                        // @ts-ignore
                        public setConsecutiveActiveTrigger(consecutiveActiveTrigger: number /*int*/): void
                        /**
                         * If {@link #maxConcurrentConsumers} is greater then {@link #concurrentConsumers}, and
                         * the number of consumers exceeds {@link #concurrentConsumers}, specifies the
                         * number of consecutive receive attempts that return no data; after which we consider
                         * stopping a consumer. The idle time is effectively
                         * {@link #receiveTimeout} * {@link #txSize} * this value because the consumer thread waits for
                         * a message for up to {@link #receiveTimeout} up to {@link #txSize} times.
                         * Default is 10 consecutive idles.
                         * @param consecutiveIdleTrigger The number of consecutive timeouts to trigger stopping a consumer.
                         * @see #setMaxConcurrentConsumers(int)
                         * @see #setStopConsumerMinInterval(long)
                         * @see #setReceiveTimeout(long)
                         * @see #setTxSize(int)
                         */
                        // @ts-ignore
                        public setConsecutiveIdleTrigger(consecutiveIdleTrigger: number /*int*/): void
                        /**
                         * The time (in milliseconds) that a consumer should wait for data. Default
                         * 1000 (1 second).
                         * @param receiveTimeout the timeout.
                         * @see #setConsecutiveIdleTrigger(int)
                         */
                        // @ts-ignore
                        public setReceiveTimeout(receiveTimeout: number /*long*/): void
                        /**
                         * Tells the container how many messages to process in a single transaction (if the
                         * channel is transactional). For best results it should be less than or equal to
                         * {@link #setPrefetchCount(int) the prefetch count}. Also affects how often acks are
                         * sent when using {@link org.springframework.amqp.core.AcknowledgeMode#AUTO} - one
                         * ack per txSize. Default is 1.
                         * @param txSize the transaction size
                         */
                        // @ts-ignore
                        public setTxSize(txSize: number /*int*/): void
                        /**
                         * {@inheritDoc}
                         * <p>
                         * When true, if the queues are removed while the container is running, the container
                         * is stopped.
                         * <p>
                         * Defaults to true for this container.
                         */
                        // @ts-ignore
                        public setMissingQueuesFatal(missingQueuesFatal: boolean): void
                        // @ts-ignore
                        public setQueueNames(...queueName: java.lang.String[] | string[]): void
                        /**
                         * Add queue(s) to this container's list of queues. The existing consumers
                         * will be cancelled after they have processed any pre-fetched messages and
                         * new consumers will be created. The queue must exist to avoid problems when
                         * restarting the consumers.
                         * @param queueName The queue to add.
                         */
                        // @ts-ignore
                        public addQueueNames(...queueName: java.lang.String[] | string[]): void
                        /**
                         * Remove queues from this container's list of queues. The existing consumers
                         * will be cancelled after they have processed any pre-fetched messages and
                         * new consumers will be created. At least one queue must remain.
                         * @param queueName The queue to remove.
                         */
                        // @ts-ignore
                        public removeQueueNames(...queueName: java.lang.String[] | string[]): boolean
                        /**
                         * Add queue(s) to this container's list of queues. The existing consumers
                         * will be cancelled after they have processed any pre-fetched messages and
                         * new consumers will be created. The queue must exist to avoid problems when
                         * restarting the consumers.
                         * @param queue The queue to add.
                         */
                        // @ts-ignore
                        public addQueues(...queue: Queue[]): void
                        /**
                         * Remove queues from this container's list of queues. The existing consumers
                         * will be cancelled after they have processed any pre-fetched messages and
                         * new consumers will be created. At least one queue must remain.
                         * @param queue The queue to remove.
                         */
                        // @ts-ignore
                        public removeQueues(...queue: Queue[]): boolean
                        /**
                         * Set the number of retries after passive queue declaration fails.
                         * @param declarationRetries The number of retries, default 3.
                         * @since 1.3.9
                         * @see #setFailedDeclarationRetryInterval(long)
                         */
                        // @ts-ignore
                        public setDeclarationRetries(declarationRetries: number /*int*/): void
                        /**
                         * When consuming multiple queues, set the interval between declaration attempts when only
                         * a subset of the queues were available (milliseconds).
                         * @param retryDeclarationInterval the interval, default 60000.
                         * @since 1.3.9
                         */
                        // @ts-ignore
                        public setRetryDeclarationInterval(retryDeclarationInterval: number /*long*/): void
                        /**
                         * When starting a consumer, if this time (ms) elapses before the consumer starts, an
                         * error log is written; one possible cause would be if the
                         * {@link #setTaskExecutor(java.util.concurrent.Executor) taskExecutor} has
                         * insufficient threads to support the container concurrency. Default 60000.
                         * @param consumerStartTimeout the timeout.
                         * @since 1.7.5
                         */
                        // @ts-ignore
                        public setConsumerStartTimeout(consumerStartTimeout: number /*long*/): void
                        /**
                         * Avoid the possibility of not configuring the CachingConnectionFactory in sync with the number of concurrent
                         * consumers.
                         */
                        // @ts-ignore
                        validateConfiguration(): void
                        /**
                         * Always use a shared Rabbit Connection.
                         * @return true
                         */
                        // @ts-ignore
                        sharedConnectionEnabled(): boolean
                        // @ts-ignore
                        doInitialize(): void
                        // @ts-ignore
                        public getActiveConsumerCount(): number /*int*/
                        /**
                         * Re-initializes this container's Rabbit message consumers, if not initialized already. Then submits each consumer
                         * to this container's task executor.
                         */
                        // @ts-ignore
                        doStart(): void
                        // @ts-ignore
                        doShutdown(): void
                        // @ts-ignore
                        initializeConsumers(): number /*int*/
                        /**
                         * Adjust consumers depending on delta.
                         * @param deltaArg a negative value increases, positive decreases.
                         * @since 1.7.8
                         */
                        // @ts-ignore
                        adjustConsumers(deltaArg: number /*int*/): void
                        /**
                         * Start up to delta consumers, limited by {@link #setMaxConcurrentConsumers(int)}.
                         * @param delta the consumers to add.
                         */
                        // @ts-ignore
                        addAndStartConsumers(delta: number /*int*/): void
                        // @ts-ignore
                        createBlockingQueueConsumer(): org.springframework.amqp.rabbit.listener.BlockingQueueConsumer
                        // @ts-ignore
                        handleStartupFailure(backOffExecution: BackOffExecution): void
                        // @ts-ignore
                        publishConsumerFailedEvent(reason: java.lang.String | string, fatal: boolean, t: java.lang.Throwable | Error): void
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
