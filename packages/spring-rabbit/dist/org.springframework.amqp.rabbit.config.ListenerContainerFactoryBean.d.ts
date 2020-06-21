declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace config {
                    /**
                     * A Factory bean to create a listener container.
                     * @author Gary Russell
                     * @author Artem Bilan
                     * @author Johno Crawford
                     * @since 2.0
                     */
                    // @ts-ignore
                    class ListenerContainerFactoryBean extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public setApplicationEventPublisher(applicationEventPublisher: ApplicationEventPublisher): void
                        // @ts-ignore
                        public setBeanName(beanName: java.lang.String | string): void
                        // @ts-ignore
                        public setApplicationContext(applicationContext: ApplicationContext): void
                        // @ts-ignore
                        public setType(type: org.springframework.amqp.rabbit.config.ListenerContainerFactoryBean.Type): void
                        // @ts-ignore
                        public setConnectionFactory(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory): void
                        // @ts-ignore
                        public setChannelTransacted(transactional: boolean): void
                        // @ts-ignore
                        public setAcknowledgeMode(acknowledgeMode: AcknowledgeMode): void
                        // @ts-ignore
                        public setQueueNames(...queueName: java.lang.String[] | string[]): void
                        // @ts-ignore
                        public setQueues(...queues: Queue[]): void
                        // @ts-ignore
                        public setExposeListenerChannel(exposeListenerChannel: boolean): void
                        // @ts-ignore
                        public setMessageListener(messageListener: MessageListener): void
                        // @ts-ignore
                        public setErrorHandler(errorHandler: ErrorHandler): void
                        /**
                         * Set the {@link MessageConverter} strategy for converting AMQP Messages.
                         * @param messageConverter the message converter to use
                         * @deprecated - this converter is not used by the container; it was only
                         *  used to configure the converter for a {#code @RabbitListener} adapter.
                         *  That is now handled differently. If you are manually creating a listener
                         *  container, the converter must be configured in a listener adapter (if
                         *  present).
                         */
                        // @ts-ignore
                        public setMessageConverter(messageConverter: MessageConverter): void
                        // @ts-ignore
                        public setDeBatchingEnabled(deBatchingEnabled: boolean): void
                        // @ts-ignore
                        public setAdviceChain(...adviceChain: Advice[]): void
                        // @ts-ignore
                        public setAfterReceivePostProcessors(...afterReceivePostProcessors: MessagePostProcessor[]): void
                        // @ts-ignore
                        public setAutoStartup(autoStartup: boolean): void
                        // @ts-ignore
                        public setPhase(phase: number /*int*/): void
                        // @ts-ignore
                        public setListenerId(listenerId: java.lang.String | string): void
                        // @ts-ignore
                        public setConsumerTagStrategy(consumerTagStrategy: ConsumerTagStrategy): void
                        // @ts-ignore
                        public setConsumerArguments(args: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        // @ts-ignore
                        public setNoLocal(noLocal: java.lang.Boolean): void
                        // @ts-ignore
                        public setExclusive(exclusive: boolean): void
                        // @ts-ignore
                        public setDefaultRequeueRejected(defaultRequeueRejected: boolean): void
                        // @ts-ignore
                        public setPrefetchCount(prefetchCount: number /*int*/): void
                        // @ts-ignore
                        public setShutdownTimeout(shutdownTimeout: number /*long*/): void
                        // @ts-ignore
                        public setIdleEventInterval(idleEventInterval: number /*long*/): void
                        // @ts-ignore
                        public setTransactionManager(transactionManager: PlatformTransactionManager): void
                        // @ts-ignore
                        public setTransactionAttribute(transactionAttribute: TransactionAttribute): void
                        // @ts-ignore
                        public setTaskExecutor(taskExecutor: java.util.concurrent.Executor): void
                        // @ts-ignore
                        public setRecoveryInterval(recoveryInterval: number /*long*/): void
                        // @ts-ignore
                        public setRecoveryBackOff(recoveryBackOff: BackOff): void
                        // @ts-ignore
                        public setMessagePropertiesConverter(messagePropertiesConverter: org.springframework.amqp.rabbit.support.MessagePropertiesConverter): void
                        // @ts-ignore
                        public setRabbitAdmin(rabbitAdmin: org.springframework.amqp.rabbit.core.RabbitAdmin): void
                        // @ts-ignore
                        public setMissingQueuesFatal(missingQueuesFatal: boolean): void
                        // @ts-ignore
                        public setPossibleAuthenticationFailureFatal(possibleAuthenticationFailureFatal: java.lang.Boolean): void
                        // @ts-ignore
                        public setMismatchedQueuesFatal(mismatchedQueuesFatal: boolean): void
                        // @ts-ignore
                        public setAutoDeclare(autoDeclare: boolean): void
                        // @ts-ignore
                        public setFailedDeclarationRetryInterval(failedDeclarationRetryInterval: number /*long*/): void
                        // @ts-ignore
                        public setExclusiveConsumerExceptionLogger(exclusiveConsumerExceptionLogger: ConditionalExceptionLogger): void
                        // @ts-ignore
                        public setConsumersPerQueue(consumersPerQueue: number /*int*/): void
                        // @ts-ignore
                        public setTaskScheduler(taskScheduler: TaskScheduler): void
                        // @ts-ignore
                        public setMonitorInterval(monitorInterval: number /*long*/): void
                        // @ts-ignore
                        public setConcurrentConsumers(concurrentConsumers: number /*int*/): void
                        // @ts-ignore
                        public setMaxConcurrentConsumers(maxConcurrentConsumers: number /*int*/): void
                        // @ts-ignore
                        public setStartConsumerMinInterval(startConsumerMinInterval: number /*long*/): void
                        // @ts-ignore
                        public setStopConsumerMinInterval(stopConsumerMinInterval: number /*long*/): void
                        // @ts-ignore
                        public setConsecutiveActiveTrigger(consecutiveActiveTrigger: number /*int*/): void
                        // @ts-ignore
                        public setConsecutiveIdleTrigger(consecutiveIdleTrigger: number /*int*/): void
                        // @ts-ignore
                        public setReceiveTimeout(receiveTimeout: number /*long*/): void
                        // @ts-ignore
                        public setTxSize(txSize: number /*int*/): void
                        // @ts-ignore
                        public setDeclarationRetries(declarationRetries: number /*int*/): void
                        // @ts-ignore
                        public setRetryDeclarationInterval(retryDeclarationInterval: number /*long*/): void
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<any>
                        // @ts-ignore
                        createInstance(): org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer
                        // @ts-ignore
                        public start(): void
                        // @ts-ignore
                        public stop(): void
                        // @ts-ignore
                        public isRunning(): boolean
                        // @ts-ignore
                        public getPhase(): number /*int*/
                        // @ts-ignore
                        public isAutoStartup(): boolean
                        // @ts-ignore
                        public stop(callback: java.lang.Runnable): void
                    }
                }
            }
        }
    }
}
