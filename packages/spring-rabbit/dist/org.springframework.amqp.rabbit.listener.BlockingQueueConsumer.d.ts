declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * Specialized consumer encapsulating knowledge of the broker
                     * connections and having its own lifecycle (start and stop).
                     * @author Mark Pollack
                     * @author Dave Syer
                     * @author Gary Russell
                     * @author Casper Mout
                     * @author Artem Bilan
                     * @author Alex Panchenko
                     * @author Johno Crawford
                     * @author Ian Roberts
                     */
                    // @ts-ignore
                    class BlockingQueueConsumer extends java.lang.Object {
                        /**
                         * Create a consumer. The consumer must not attempt to use
                         * the connection factory or communicate with the broker
                         * until it is started. RequeueRejected defaults to true.
                         * @param connectionFactory The connection factory.
                         * @param messagePropertiesConverter The properties converter.
                         * @param activeObjectCounter The active object counter; used during shutdown.
                         * @param acknowledgeMode The acknowledgemode.
                         * @param transactional Whether the channel is transactional.
                         * @param prefetchCount The prefetch count.
                         * @param queues The queues.
                         */
                        // @ts-ignore
                        constructor(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory, messagePropertiesConverter: org.springframework.amqp.rabbit.support.MessagePropertiesConverter, activeObjectCounter: org.springframework.amqp.rabbit.listener.ActiveObjectCounter<org.springframework.amqp.rabbit.listener.BlockingQueueConsumer>, acknowledgeMode: AcknowledgeMode, transactional: boolean, prefetchCount: number /*int*/, ...queues: java.lang.String[] | string[])
                        /**
                         * Create a consumer. The consumer must not attempt to use
                         * the connection factory or communicate with the broker
                         * until it is started.
                         * @param connectionFactory The connection factory.
                         * @param messagePropertiesConverter The properties converter.
                         * @param activeObjectCounter The active object counter; used during shutdown.
                         * @param acknowledgeMode The acknowledge mode.
                         * @param transactional Whether the channel is transactional.
                         * @param prefetchCount The prefetch count.
                         * @param defaultRequeueRejected true to reject requeued messages.
                         * @param queues The queues.
                         */
                        // @ts-ignore
                        constructor(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory, messagePropertiesConverter: org.springframework.amqp.rabbit.support.MessagePropertiesConverter, activeObjectCounter: org.springframework.amqp.rabbit.listener.ActiveObjectCounter<org.springframework.amqp.rabbit.listener.BlockingQueueConsumer>, acknowledgeMode: AcknowledgeMode, transactional: boolean, prefetchCount: number /*int*/, defaultRequeueRejected: boolean, ...queues: java.lang.String[] | string[])
                        /**
                         * Create a consumer. The consumer must not attempt to use the
                         * connection factory or communicate with the broker
                         * until it is started.
                         * @param connectionFactory The connection factory.
                         * @param messagePropertiesConverter The properties converter.
                         * @param activeObjectCounter The active object counter; used during shutdown.
                         * @param acknowledgeMode The acknowledge mode.
                         * @param transactional Whether the channel is transactional.
                         * @param prefetchCount The prefetch count.
                         * @param defaultRequeueRejected true to reject requeued messages.
                         * @param consumerArgs The consumer arguments (e.g. x-priority).
                         * @param queues The queues.
                         */
                        // @ts-ignore
                        constructor(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory, messagePropertiesConverter: org.springframework.amqp.rabbit.support.MessagePropertiesConverter, activeObjectCounter: org.springframework.amqp.rabbit.listener.ActiveObjectCounter<org.springframework.amqp.rabbit.listener.BlockingQueueConsumer>, acknowledgeMode: AcknowledgeMode, transactional: boolean, prefetchCount: number /*int*/, defaultRequeueRejected: boolean, consumerArgs: java.util.Map<java.lang.String | string, java.lang.Object | any>, ...queues: java.lang.String[] | string[])
                        /**
                         * Create a consumer. The consumer must not attempt to use
                         * the connection factory or communicate with the broker
                         * until it is started.
                         * @param connectionFactory The connection factory.
                         * @param messagePropertiesConverter The properties converter.
                         * @param activeObjectCounter The active object counter; used during shutdown.
                         * @param acknowledgeMode The acknowledge mode.
                         * @param transactional Whether the channel is transactional.
                         * @param prefetchCount The prefetch count.
                         * @param defaultRequeueRejected true to reject requeued messages.
                         * @param consumerArgs The consumer arguments (e.g. x-priority).
                         * @param exclusive true if the consumer is to be exclusive.
                         * @param queues The queues.
                         */
                        // @ts-ignore
                        constructor(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory, messagePropertiesConverter: org.springframework.amqp.rabbit.support.MessagePropertiesConverter, activeObjectCounter: org.springframework.amqp.rabbit.listener.ActiveObjectCounter<org.springframework.amqp.rabbit.listener.BlockingQueueConsumer>, acknowledgeMode: AcknowledgeMode, transactional: boolean, prefetchCount: number /*int*/, defaultRequeueRejected: boolean, consumerArgs: java.util.Map<java.lang.String | string, java.lang.Object | any>, exclusive: boolean, ...queues: java.lang.String[] | string[])
                        /**
                         * Create a consumer. The consumer must not attempt to use
                         * the connection factory or communicate with the broker
                         * until it is started.
                         * @param connectionFactory The connection factory.
                         * @param messagePropertiesConverter The properties converter.
                         * @param activeObjectCounter The active object counter; used during shutdown.
                         * @param acknowledgeMode The acknowledge mode.
                         * @param transactional Whether the channel is transactional.
                         * @param prefetchCount The prefetch count.
                         * @param defaultRequeueRejected true to reject requeued messages.
                         * @param consumerArgs The consumer arguments (e.g. x-priority).
                         * @param noLocal true if the consumer is to be no-local.
                         * @param exclusive true if the consumer is to be exclusive.
                         * @param queues The queues.
                         * @since 1.7.4
                         */
                        // @ts-ignore
                        constructor(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory, messagePropertiesConverter: org.springframework.amqp.rabbit.support.MessagePropertiesConverter, activeObjectCounter: org.springframework.amqp.rabbit.listener.ActiveObjectCounter<org.springframework.amqp.rabbit.listener.BlockingQueueConsumer>, acknowledgeMode: AcknowledgeMode, transactional: boolean, prefetchCount: number /*int*/, defaultRequeueRejected: boolean, consumerArgs: java.util.Map<java.lang.String | string, java.lang.Object | any>, noLocal: boolean, exclusive: boolean, ...queues: java.lang.String[] | string[])
                        // @ts-ignore
                        public getChannel(): Channel
                        // @ts-ignore
                        public getConsumerTags(): Array<java.lang.String | string>
                        // @ts-ignore
                        public setShutdownTimeout(shutdownTimeout: number /*long*/): void
                        /**
                         * Set the number of retries after passive queue declaration fails.
                         * @param declarationRetries The number of retries, default 3.
                         * @since 1.3.9
                         * @see #setFailedDeclarationRetryInterval(long)
                         */
                        // @ts-ignore
                        public setDeclarationRetries(declarationRetries: number /*int*/): void
                        /**
                         * Set the interval between passive queue declaration attempts in milliseconds.
                         * @param failedDeclarationRetryInterval the interval, default 5000.
                         * @since 1.3.9
                         * @see #setDeclarationRetries(int)
                         */
                        // @ts-ignore
                        public setFailedDeclarationRetryInterval(failedDeclarationRetryInterval: number /*long*/): void
                        /**
                         * When consuming multiple queues, set the interval between declaration attempts when only
                         * a subset of the queues were available (milliseconds).
                         * @param retryDeclarationInterval the interval, default 60000.
                         * @since 1.3.9
                         */
                        // @ts-ignore
                        public setRetryDeclarationInterval(retryDeclarationInterval: number /*long*/): void
                        /**
                         * Set the {@link ConsumerTagStrategy} to use when generating consumer tags.
                         * @param tagStrategy the tagStrategy to set
                         * @since 1.4.5
                         */
                        // @ts-ignore
                        public setTagStrategy(tagStrategy: ConsumerTagStrategy): void
                        /**
                         * Set the {@link BackOffExecution} to use for the recovery in the {@code SimpleMessageListenerContainer}.
                         * @param backOffExecution the backOffExecution.
                         * @since 1.5
                         */
                        // @ts-ignore
                        public setBackOffExecution(backOffExecution: BackOffExecution): void
                        // @ts-ignore
                        public getBackOffExecution(): BackOffExecution
                        /**
                         * True if the channel is locally transacted.
                         * @param locallyTransacted the locally transacted to set.
                         * @since 1.6.6
                         */
                        // @ts-ignore
                        public setLocallyTransacted(locallyTransacted: boolean): void
                        // @ts-ignore
                        public setApplicationEventPublisher(applicationEventPublisher: ApplicationEventPublisher): void
                        /**
                         * Clear the delivery tags when rolling back with an external transaction
                         * manager.
                         * @since 1.6.6
                         */
                        // @ts-ignore
                        public clearDeliveryTags(): void
                        /**
                         * Return true if cancellation is expected.
                         * @return true if expected.
                         */
                        // @ts-ignore
                        public isNormalCancel(): boolean
                        // @ts-ignore
                        basicCancel(): void
                        // @ts-ignore
                        basicCancel(expected: boolean): void
                        // @ts-ignore
                        hasDelivery(): boolean
                        // @ts-ignore
                        cancelled(): boolean
                        /**
                         * Main application-side API: wait for the next message delivery and return it.
                         * @return the next message
                         * @throws InterruptedException if an interrupt is received while waiting
                         * @throws ShutdownSignalException if the connection is shut down while waiting
                         */
                        // @ts-ignore
                        public nextMessage(): Message
                        /**
                         * Main application-side API: wait for the next message delivery and return it.
                         * @param timeout timeout in millisecond
                         * @return the next message or null if timed out
                         * @throws InterruptedException if an interrupt is received while waiting
                         * @throws ShutdownSignalException if the connection is shut down while waiting
                         */
                        // @ts-ignore
                        public nextMessage(timeout: number /*long*/): Message
                        // @ts-ignore
                        public start(): void
                        // @ts-ignore
                        public stop(): void
                        /**
                         * Perform a rollback, handling rollback exceptions properly.
                         * @param ex the thrown application exception or error
                         */
                        // @ts-ignore
                        public rollbackOnExceptionIfNecessary(ex: java.lang.Throwable | Error): void
                        /**
                         * Perform a commit or message acknowledgement, as appropriate.
                         * @param localTx Whether the channel is locally transacted.
                         * @return true if at least one delivery tag exists.
                         * @throws IOException Any IOException.
                         */
                        // @ts-ignore
                        public commitIfNecessary(localTx: boolean): boolean
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
