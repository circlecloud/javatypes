declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace config {
                    /**
                     * Base {@link RabbitListenerContainerFactory} for Spring's base container implementation.
                     * @param <C> the container type.
                     * @author Stephane Nicoll
                     * @author Gary Russell
                     * @author Artem Bilan
                     * @author Joris Kuipers
                     * @since 1.4
                     * @see AbstractMessageListenerContainer
                     */
                    // @ts-ignore
                    abstract class AbstractRabbitListenerContainerFactory<C extends org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer> extends java.lang.Object implements org.springframework.amqp.rabbit.listener.RabbitListenerContainerFactory<C> {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        readonly logger: Log
                        // @ts-ignore
                        readonly counter: java.util.concurrent.atomic.AtomicInteger
                        /**
                         * @param connectionFactory The connection factory.
                         * @see AbstractMessageListenerContainer#setConnectionFactory(ConnectionFactory)
                         */
                        // @ts-ignore
                        public setConnectionFactory(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory): void
                        /**
                         * @param errorHandler The error handler.
                         * @see AbstractMessageListenerContainer#setErrorHandler(org.springframework.util.ErrorHandler)
                         */
                        // @ts-ignore
                        public setErrorHandler(errorHandler: ErrorHandler): void
                        /**
                         * @param messageConverter the message converter to use
                         * @see AbstractMessageListenerContainer#setMessageConverter(MessageConverter)
                         */
                        // @ts-ignore
                        public setMessageConverter(messageConverter: MessageConverter): void
                        /**
                         * @param acknowledgeMode the acknowledge mode to set. Defaults to {#link AcknowledgeMode#AUTO}
                         * @see AbstractMessageListenerContainer#setAcknowledgeMode(AcknowledgeMode)
                         */
                        // @ts-ignore
                        public setAcknowledgeMode(acknowledgeMode: AcknowledgeMode): void
                        /**
                         * @param channelTransacted the flag value to set
                         * @see AbstractMessageListenerContainer#setChannelTransacted
                         */
                        // @ts-ignore
                        public setChannelTransacted(channelTransacted: java.lang.Boolean): void
                        /**
                         * @param taskExecutor the {#link Executor} to use.
                         * @see AbstractMessageListenerContainer#setTaskExecutor
                         */
                        // @ts-ignore
                        public setTaskExecutor(taskExecutor: java.util.concurrent.Executor): void
                        /**
                         * @param transactionManager the {#link PlatformTransactionManager} to use.
                         * @see AbstractMessageListenerContainer#setTransactionManager
                         */
                        // @ts-ignore
                        public setTransactionManager(transactionManager: PlatformTransactionManager): void
                        /**
                         * @param prefetch the prefetch count
                         * @see AbstractMessageListenerContainer#setPrefetchCount(int)
                         */
                        // @ts-ignore
                        public setPrefetchCount(prefetch: java.lang.Integer | number): void
                        /**
                         * @param requeueRejected true to reject by default.
                         * @see AbstractMessageListenerContainer#setDefaultRequeueRejected
                         */
                        // @ts-ignore
                        public setDefaultRequeueRejected(requeueRejected: java.lang.Boolean): void
                        /**
                         * @return the advice chain that was set. Defaults to {#code null}.
                         * @since 1.7.4
                         */
                        // @ts-ignore
                        public getAdviceChain(): Advice[]
                        /**
                         * @param adviceChain the advice chain to set.
                         * @see AbstractMessageListenerContainer#setAdviceChain
                         */
                        // @ts-ignore
                        public setAdviceChain(...adviceChain: Advice[]): void
                        /**
                         * @param recoveryInterval The recovery interval.
                         * @see AbstractMessageListenerContainer#setRecoveryInterval
                         */
                        // @ts-ignore
                        public setRecoveryInterval(recoveryInterval: java.lang.Long | number): void
                        /**
                         * @param recoveryBackOff The BackOff to recover.
                         * @since 1.5
                         * @see AbstractMessageListenerContainer#setRecoveryBackOff(BackOff)
                         */
                        // @ts-ignore
                        public setRecoveryBackOff(recoveryBackOff: BackOff): void
                        /**
                         * @param missingQueuesFatal the missingQueuesFatal to set.
                         * @see AbstractMessageListenerContainer#setMissingQueuesFatal
                         */
                        // @ts-ignore
                        public setMissingQueuesFatal(missingQueuesFatal: java.lang.Boolean): void
                        /**
                         * @param mismatchedQueuesFatal the mismatchedQueuesFatal to set.
                         * @since 1.6
                         * @see AbstractMessageListenerContainer#setMismatchedQueuesFatal(boolean)
                         */
                        // @ts-ignore
                        public setMismatchedQueuesFatal(mismatchedQueuesFatal: java.lang.Boolean): void
                        /**
                         * @param consumerTagStrategy the consumerTagStrategy to set
                         * @see AbstractMessageListenerContainer#setConsumerTagStrategy(ConsumerTagStrategy)
                         */
                        // @ts-ignore
                        public setConsumerTagStrategy(consumerTagStrategy: ConsumerTagStrategy): void
                        /**
                         * How often to publish idle container events.
                         * @param idleEventInterval the interval.
                         */
                        // @ts-ignore
                        public setIdleEventInterval(idleEventInterval: java.lang.Long | number): void
                        // @ts-ignore
                        public setFailedDeclarationRetryInterval(failedDeclarationRetryInterval: java.lang.Long | number): void
                        // @ts-ignore
                        public setApplicationEventPublisher(applicationEventPublisher: ApplicationEventPublisher): void
                        // @ts-ignore
                        public setApplicationContext(applicationContext: ApplicationContext): void
                        /**
                         * @param autoStartup true for auto startup.
                         * @see AbstractMessageListenerContainer#setAutoStartup(boolean)
                         */
                        // @ts-ignore
                        public setAutoStartup(autoStartup: java.lang.Boolean): void
                        /**
                         * @param phase The phase.
                         * @see AbstractMessageListenerContainer#setPhase(int)
                         */
                        // @ts-ignore
                        public setPhase(phase: number /*int*/): void
                        /**
                         * Set post processors which will be applied after the Message is received.
                         * @param afterReceivePostProcessors the post processors.
                         * @since 2.0
                         * @see AbstractMessageListenerContainer#setAfterReceivePostProcessors(MessagePostProcessor...)
                         */
                        // @ts-ignore
                        public setAfterReceivePostProcessors(...afterReceivePostProcessors: MessagePostProcessor[]): void
                        /**
                         * Set post processors that will be applied before sending replies; added to each
                         * message listener adapter.
                         * @param beforeSendReplyPostProcessors the post processors.
                         * @since 2.0.3
                         * @see AbstractAdaptableMessageListener#setBeforeSendReplyPostProcessors(MessagePostProcessor...)
                         */
                        // @ts-ignore
                        public setBeforeSendReplyPostProcessors(...beforeSendReplyPostProcessors: MessagePostProcessor[]): void
                        /**
                         * Set a {@link RetryTemplate} to use when sending replies; added to each message
                         * listener adapter.
                         * @param retryTemplate the template.
                         * @since 2.0.6
                         * @see #setReplyRecoveryCallback(RecoveryCallback)
                         * @see AbstractAdaptableMessageListener#setRetryTemplate(RetryTemplate)
                         */
                        // @ts-ignore
                        public setRetryTemplate(retryTemplate: RetryTemplate): void
                        /**
                         * Set a {@link RecoveryCallback} to invoke when retries are exhausted. Added to each
                         * message listener adapter. Only used if a {@link #setRetryTemplate(RetryTemplate)
                         * retryTemplate} is provided.
                         * @param recoveryCallback the recovery callback.
                         * @since 2.0.6
                         * @see #setRetryTemplate(RetryTemplate)
                         * @see AbstractAdaptableMessageListener#setRecoveryCallback(RecoveryCallback)
                         */
                        // @ts-ignore
                        public setReplyRecoveryCallback(recoveryCallback: object): void
                        /**
                         * A {@link Consumer} that is invoked to enable setting other container properties not
                         * exposed  by this container factory.
                         * @param configurer the configurer;
                         * @since 2.1.1
                         */
                        // @ts-ignore
                        public setContainerConfigurer(configurer: java.util.function$.Consumer<C>): void
                        // @ts-ignore
                        public createListenerContainer(endpoint: org.springframework.amqp.rabbit.listener.RabbitListenerEndpoint): C
                        /**
                         * Create an empty container instance.
                         * @return the new container instance.
                         */
                        // @ts-ignore
                        abstract createContainerInstance(): C
                        /**
                         * Further initialize the specified container.
                         * <p>Subclasses can inherit from this method to apply extra
                         * configuration if necessary.
                         * @param instance the container instance to configure.
                         * @param endpoint the endpoint.
                         */
                        // @ts-ignore
                        initializeContainer(instance: C, endpoint: org.springframework.amqp.rabbit.listener.RabbitListenerEndpoint): void
                    }
                }
            }
        }
    }
}
