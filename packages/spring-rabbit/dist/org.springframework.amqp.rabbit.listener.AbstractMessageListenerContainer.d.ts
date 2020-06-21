declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * @author Mark Pollack
                     * @author Mark Fisher
                     * @author Dave Syer
                     * @author James Carr
                     * @author Gary Russell
                     * @author Alex Panchenko
                     * @author Johno Crawford
                     * @author Arnaud Cogoluègnes
                     * @author Artem Bilan
                     * @author Mohammad Hewedy
                     */
                    // @ts-ignore
                    abstract class AbstractMessageListenerContainer extends org.springframework.amqp.rabbit.connection.RabbitAccessor implements org.springframework.amqp.rabbit.listener.MessageListenerContainer {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static readonly DEFAULT_DEBATCHING_ENABLED: boolean
                        // @ts-ignore
                        public static readonly DEFAULT_PREFETCH_COUNT: number /*int*/
                        /**
                         * The default recovery interval: 5000 ms = 5 seconds.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_RECOVERY_INTERVAL: number /*long*/
                        // @ts-ignore
                        public static readonly DEFAULT_SHUTDOWN_TIMEOUT: number /*long*/
                        // @ts-ignore
                        readonly consumersMonitor: java.lang.Object | any
                        // @ts-ignore
                        public setApplicationEventPublisher(applicationEventPublisher: ApplicationEventPublisher): void
                        // @ts-ignore
                        getApplicationEventPublisher(): ApplicationEventPublisher
                        /**
                         * <p>
                         * Flag controlling the behaviour of the container with respect to message acknowledgement. The most common usage is
                         * to let the container handle the acknowledgements (so the listener doesn't need to know about the channel or the
                         * message).
                         * <p>
                         * Set to {@link AcknowledgeMode#MANUAL} if the listener will send the acknowledgements itself using
                         * {@link Channel#basicAck(long, boolean)}. Manual acks are consistent with either a transactional or
                         * non-transactional channel, but if you are doing no other work on the channel at the same other than receiving a
                         * single message then the transaction is probably unnecessary.
                         * <p>
                         * Set to {@link AcknowledgeMode#NONE} to tell the broker not to expect any acknowledgements, and it will assume all
                         * messages are acknowledged as soon as they are sent (this is "autoack" in native Rabbit broker terms). If
                         * {@link AcknowledgeMode#NONE} then the channel cannot be transactional (so the container will fail on start up if
                         * that flag is accidentally set).
                         * @param acknowledgeMode the acknowledge mode to set. Defaults to {#link AcknowledgeMode#AUTO}
                         * @see AcknowledgeMode
                         */
                        // @ts-ignore
                        public setAcknowledgeMode(acknowledgeMode: AcknowledgeMode): void
                        /**
                         * @return the acknowledgeMode
                         */
                        // @ts-ignore
                        public getAcknowledgeMode(): AcknowledgeMode
                        /**
                         * Set the name of the queue(s) to receive messages from.
                         * @param queueName the desired queueName(s) (can not be <code>null</code>)
                         */
                        // @ts-ignore
                        public setQueueNames(...queueName: java.lang.String[] | string[]): void
                        /**
                         * Set the name of the queue(s) to receive messages from.
                         * @param queues the desired queue(s) (can not be <code>null</code>)
                         */
                        // @ts-ignore
                        public setQueues(...queues: Queue[]): void
                        /**
                         * @return the name of the queues to receive messages from.
                         */
                        // @ts-ignore
                        public getQueueNames(): string[]
                        // @ts-ignore
                        getQueueNamesAsSet(): Array<java.lang.String | string>
                        /**
                         * Returns a map of current queue names to the Queue object; allows the
                         * determination of a changed broker-named queue.
                         * @return the map.
                         * @since 2.1
                         */
                        // @ts-ignore
                        getQueueNamesToQueues(): java.util.Map<java.lang.String | string, Queue>
                        /**
                         * Add queue(s) to this container's list of queues.
                         * @param queueNames The queue(s) to add.
                         */
                        // @ts-ignore
                        public addQueueNames(...queueNames: java.lang.String[] | string[]): void
                        /**
                         * Add queue(s) to this container's list of queues.
                         * @param queues The queue(s) to add.
                         */
                        // @ts-ignore
                        public addQueues(...queues: Queue[]): void
                        /**
                         * Remove queue(s) from this container's list of queues.
                         * @param queueNames The queue(s) to remove.
                         * @return the boolean result of removal on the target {#code queueNames} List.
                         */
                        // @ts-ignore
                        public removeQueueNames(...queueNames: java.lang.String[] | string[]): boolean
                        /**
                         * Remove queue(s) from this container's list of queues.
                         * @param queues The queue(s) to remove.
                         * @return the boolean result of removal on the target {#code queueNames} List.
                         */
                        // @ts-ignore
                        public removeQueues(...queues: Queue[]): boolean
                        /**
                         * @return whether to expose the listener {#link Channel} to a registered {@link ChannelAwareMessageListener}.
                         */
                        // @ts-ignore
                        public isExposeListenerChannel(): boolean
                        /**
                         * Set whether to expose the listener Rabbit Channel to a registered {@link ChannelAwareMessageListener} as well as
                         * to {@link org.springframework.amqp.rabbit.core.RabbitTemplate} calls.
                         * <p>
                         * Default is "true", reusing the listener's {@link Channel}. Turn this off to expose a fresh Rabbit Channel fetched
                         * from the same underlying Rabbit {@link Connection} instead.
                         * <p>
                         * Note that Channels managed by an external transaction manager will always get exposed to
                         * {@link org.springframework.amqp.rabbit.core.RabbitTemplate} calls. So in terms of RabbitTemplate exposure, this
                         * setting only affects locally transacted Channels.
                         * @param exposeListenerChannel true to expose the channel.
                         * @see ChannelAwareMessageListener
                         */
                        // @ts-ignore
                        public setExposeListenerChannel(exposeListenerChannel: boolean): void
                        /**
                         * Set the message listener implementation to register. This can be either a Spring
                         * {@link MessageListener} object or a Spring {@link ChannelAwareMessageListener}
                         * object.
                         * @param messageListener The listener.
                         * @throws IllegalArgumentException if the supplied listener is not a
                         *  {#link MessageListener} or a {@link ChannelAwareMessageListener}
                         * @deprecated use {#link #setMessageListener(MessageListener)}.
                         * @see MessageListener
                         * @see ChannelAwareMessageListener
                         */
                        // @ts-ignore
                        public setMessageListener(messageListener: java.lang.Object | any): void
                        /**
                         * Set the {@link MessageListener}.
                         * @param messageListener the listener.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public setMessageListener(messageListener: MessageListener): void
                        /**
                         * Set the {@link ChannelAwareMessageListener}.
                         * @param messageListener the listener.
                         * @since 2.0
                         * @deprecated use {#link #setMessageListener(MessageListener)} since
                         *  {@link ChannelAwareMessageListener} now inherits {@link MessageListener}.
                         */
                        // @ts-ignore
                        public setChannelAwareMessageListener(messageListener: org.springframework.amqp.rabbit.listener.api.ChannelAwareMessageListener): void
                        /**
                         * Check the given message listener, throwing an exception if it does not correspond to a supported listener type.
                         * <p>
                         * Only a Spring {@link MessageListener} object will be accepted.
                         * @param messageListener the message listener object to check
                         * @throws IllegalArgumentException if the supplied listener is not a MessageListener
                         * @see MessageListener
                         */
                        // @ts-ignore
                        checkMessageListener(messageListener: java.lang.Object | any): void
                        /**
                         * @return The message listener object to register.
                         */
                        // @ts-ignore
                        public getMessageListener(): any
                        /**
                         * Set an ErrorHandler to be invoked in case of any uncaught exceptions thrown while processing a Message. By
                         * default there will be <b>no</b> ErrorHandler so that error-level logging is the only result.
                         * @param errorHandler The error handler.
                         */
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
                        public getMessageConverter(): MessageConverter
                        /**
                         * Determine whether or not the container should de-batch batched
                         * messages (true) or call the listener with the batch (false). Default: true.
                         * @param deBatchingEnabled the deBatchingEnabled to set.
                         */
                        // @ts-ignore
                        public setDeBatchingEnabled(deBatchingEnabled: boolean): void
                        /**
                         * Public setter for the {@link Advice} to apply to listener executions.
                         * <p>
                         * If a {code #setTransactionManager(PlatformTransactionManager) transactionManager} is provided as well, then
                         * separate advice is created for the transaction and applied first in the chain. In that case the advice chain
                         * provided here should not contain a transaction interceptor (otherwise two transactions would be be applied).
                         * @param adviceChain the advice chain to set
                         */
                        // @ts-ignore
                        public setAdviceChain(...adviceChain: Advice[]): void
                        // @ts-ignore
                        getAdviceChain(): Advice[]
                        /**
                         * Set {@link MessagePostProcessor}s that will be applied after message reception, before
                         * invoking the {@link MessageListener}. Often used to decompress data.  Processors are invoked in order,
                         * depending on {@code PriorityOrder}, {@code Order} and finally unordered.
                         * @param afterReceivePostProcessors the post processor.
                         * @since 1.4.2
                         * @see #addAfterReceivePostProcessors(MessagePostProcessor...)
                         */
                        // @ts-ignore
                        public setAfterReceivePostProcessors(...afterReceivePostProcessors: MessagePostProcessor[]): void
                        /**
                         * Add {@link MessagePostProcessor}s that will be applied after message reception, before
                         * invoking the {@link MessageListener}. Often used to decompress data.  Processors are invoked in order,
                         * depending on {@code PriorityOrder}, {@code Order} and finally unordered.
                         * <p>
                         * In contrast to {@link #setAfterReceivePostProcessors(MessagePostProcessor...)}, this
                         * method does not override the previously added afterReceivePostProcessors.
                         * @param afterReceivePostProcessors the post processor.
                         * @since 2.1.4
                         */
                        // @ts-ignore
                        public addAfterReceivePostProcessors(...afterReceivePostProcessors: MessagePostProcessor[]): void
                        /**
                         * Remove the provided {@link MessagePostProcessor} from the {@link #afterReceivePostProcessors} list.
                         * @param afterReceivePostProcessor the MessagePostProcessor to remove.
                         * @return the boolean if the provided post processor has been removed.
                         * @since 2.1.4
                         * @see #addAfterReceivePostProcessors(MessagePostProcessor...)
                         */
                        // @ts-ignore
                        public removeAfterReceivePostProcessor(afterReceivePostProcessor: MessagePostProcessor): boolean
                        /**
                         * Set whether to automatically start the container after initialization.
                         * <p>
                         * Default is "true"; set this to "false" to allow for manual startup through the {@link #start()} method.
                         * @param autoStartup true for auto startup.
                         */
                        // @ts-ignore
                        public setAutoStartup(autoStartup: boolean): void
                        // @ts-ignore
                        public isAutoStartup(): boolean
                        /**
                         * Specify the phase in which this container should be started and stopped. The startup order proceeds from lowest
                         * to highest, and the shutdown order is the reverse of that. By default this value is Integer.MAX_VALUE meaning
                         * that this container starts as late as possible and stops as soon as possible.
                         * @param phase The phase.
                         */
                        // @ts-ignore
                        public setPhase(phase: number /*int*/): void
                        /**
                         * @return The phase in which this container will be started and stopped.
                         */
                        // @ts-ignore
                        public getPhase(): number /*int*/
                        // @ts-ignore
                        public setBeanName(beanName: java.lang.String | string): void
                        /**
                         * @return The bean name that this listener container has been assigned in its containing bean factory, if any.
                         */
                        // @ts-ignore
                        getBeanName(): string
                        // @ts-ignore
                        getApplicationContext(): ApplicationContext
                        // @ts-ignore
                        public setApplicationContext(applicationContext: ApplicationContext): void
                        // @ts-ignore
                        public getConnectionFactory(): org.springframework.amqp.rabbit.connection.ConnectionFactory
                        /**
                         * Set a qualifier that will prefix the connection factory lookup key; default none.
                         * @param lookupKeyQualifier the qualifier
                         * @since 1.6.9
                         * @see #getRoutingLookupKey()
                         */
                        // @ts-ignore
                        public setLookupKeyQualifier(lookupKeyQualifier: java.lang.String | string): void
                        /**
                         * Force close the channel if the consumer threads don't respond to a shutdown.
                         * @return true to force close.
                         * @since 1.7.4
                         */
                        // @ts-ignore
                        isForceCloseChannel(): boolean
                        /**
                         * Set to true to force close the channel if the consumer threads don't respond to a
                         * shutdown. Default: true (since 2.0).
                         * @param forceCloseChannel true to force close.
                         * @since 1.7.4
                         */
                        // @ts-ignore
                        public setForceCloseChannel(forceCloseChannel: boolean): void
                        /**
                         * Return the lookup key if the connection factory is a
                         * {@link RoutingConnectionFactory}; null otherwise. The routing key is the
                         * comma-delimited list of queue names with all spaces removed and bracketed by [...],
                         * optionally prefixed by a qualifier, e.g. "foo[...]".
                         * @return the key or null.
                         * @since 1.6.9
                         * @see #setLookupKeyQualifier(String)
                         */
                        // @ts-ignore
                        getRoutingLookupKey(): string
                        /**
                         * Return the (@link RoutingConnectionFactory} if the connection factory is a
                         * {@link RoutingConnectionFactory}; null otherwise.
                         * @return the {#link RoutingConnectionFactory} or null.
                         * @since 1.6.9
                         */
                        // @ts-ignore
                        getRoutingConnectionFactory(): org.springframework.amqp.rabbit.connection.RoutingConnectionFactory
                        /**
                         * The 'id' attribute of the listener.
                         * @return the id (or the container bean name if no id set).
                         */
                        // @ts-ignore
                        public getListenerId(): string
                        // @ts-ignore
                        public setListenerId(listenerId: java.lang.String | string): void
                        /**
                         * Set the implementation of {@link ConsumerTagStrategy} to generate consumer tags.
                         * By default, the RabbitMQ server generates consumer tags.
                         * @param consumerTagStrategy the consumerTagStrategy to set.
                         * @since 1.4.5
                         */
                        // @ts-ignore
                        public setConsumerTagStrategy(consumerTagStrategy: ConsumerTagStrategy): void
                        /**
                         * Return the consumer tag strategy to use.
                         * @return the strategy.
                         * @since 2.0
                         */
                        // @ts-ignore
                        getConsumerTagStrategy(): ConsumerTagStrategy
                        /**
                         * Set consumer arguments.
                         * @param args the arguments.
                         * @since 1.3
                         */
                        // @ts-ignore
                        public setConsumerArguments(args: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        /**
                         * Return the consumer arguments.
                         * @return the arguments.
                         * @since 2.0
                         */
                        // @ts-ignore
                        getConsumerArguments(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        /**
                         * Set to true for an exclusive consumer.
                         * @param exclusive true for an exclusive consumer.
                         */
                        // @ts-ignore
                        public setExclusive(exclusive: boolean): void
                        /**
                         * Return whether the consumers should be exclusive.
                         * @return true for exclusive consumers.
                         */
                        // @ts-ignore
                        isExclusive(): boolean
                        /**
                         * Set to true for an no-local consumer.
                         * @param noLocal true for an no-local consumer.
                         */
                        // @ts-ignore
                        public setNoLocal(noLocal: boolean): void
                        /**
                         * Return whether the consumers should be no-local.
                         * @return true for no-local consumers.
                         */
                        // @ts-ignore
                        isNoLocal(): boolean
                        /**
                         * Set the default behavior when a message is rejected, for example because the listener
                         * threw an exception. When true, messages will be requeued, when false, they will not. For
                         * versions of Rabbit that support dead-lettering, the message must not be requeued in order
                         * to be sent to the dead letter exchange. Setting to false causes all rejections to not
                         * be requeued. When true, the default can be overridden by the listener throwing an
                         * {@link AmqpRejectAndDontRequeueException}. Default true.
                         * @param defaultRequeueRejected true to reject by default.
                         */
                        // @ts-ignore
                        public setDefaultRequeueRejected(defaultRequeueRejected: boolean): void
                        /**
                         * Return the default requeue rejected.
                         * @return the boolean.
                         * @since 2.0
                         * @see #setDefaultRequeueRejected(boolean)
                         */
                        // @ts-ignore
                        isDefaultRequeueRejected(): boolean
                        /**
                         * Tell the broker how many messages to send to each consumer in a single request.
                         * Often this can be set quite high to improve throughput.
                         * @param prefetchCount the prefetch count
                         */
                        // @ts-ignore
                        public setPrefetchCount(prefetchCount: number /*int*/): void
                        /**
                         * Return the prefetch count.
                         * @return the count.
                         * @since 2.0
                         */
                        // @ts-ignore
                        getPrefetchCount(): number /*int*/
                        /**
                         * The time to wait for workers in milliseconds after the container is stopped. If any
                         * workers are active when the shutdown signal comes they will be allowed to finish
                         * processing as long as they can finish within this timeout. Defaults
                         * to 5 seconds.
                         * @param shutdownTimeout the shutdown timeout to set
                         */
                        // @ts-ignore
                        public setShutdownTimeout(shutdownTimeout: number /*long*/): void
                        // @ts-ignore
                        getShutdownTimeout(): number /*long*/
                        /**
                         * How often to emit {@link ListenerContainerIdleEvent}s in milliseconds.
                         * @param idleEventInterval the interval.
                         */
                        // @ts-ignore
                        public setIdleEventInterval(idleEventInterval: number /*long*/): void
                        // @ts-ignore
                        getIdleEventInterval(): number /*long*/
                        /**
                         * Get the time the last message was received - initialized to container start
                         * time.
                         * @return the time.
                         */
                        // @ts-ignore
                        getLastReceive(): number /*long*/
                        /**
                         * Set the transaction manager to use.
                         * @param transactionManager the transaction manager.
                         */
                        // @ts-ignore
                        public setTransactionManager(transactionManager: PlatformTransactionManager): void
                        // @ts-ignore
                        getTransactionManager(): PlatformTransactionManager
                        /**
                         * Set the transaction attribute to use when using an external transaction manager.
                         * @param transactionAttribute the transaction attribute to set
                         */
                        // @ts-ignore
                        public setTransactionAttribute(transactionAttribute: TransactionAttribute): void
                        // @ts-ignore
                        getTransactionAttribute(): TransactionAttribute
                        /**
                         * Set a task executor for the container - used to create the consumers not at
                         * runtime.
                         * @param taskExecutor the task executor.
                         */
                        // @ts-ignore
                        public setTaskExecutor(taskExecutor: java.util.concurrent.Executor): void
                        // @ts-ignore
                        getTaskExecutor(): java.util.concurrent.Executor
                        /**
                         * Specify the interval between recovery attempts, in <b>milliseconds</b>.
                         * The default is 5000 ms, that is, 5 seconds.
                         * @param recoveryInterval The recovery interval.
                         */
                        // @ts-ignore
                        public setRecoveryInterval(recoveryInterval: number /*long*/): void
                        /**
                         * Specify the {@link BackOff} for interval between recovery attempts.
                         * The default is 5000 ms, that is, 5 seconds.
                         * With the {@link BackOff} you can supply the {@code maxAttempts} for recovery before
                         * the {@link #stop()} will be performed.
                         * @param recoveryBackOff The BackOff to recover.
                         * @since 1.5
                         */
                        // @ts-ignore
                        public setRecoveryBackOff(recoveryBackOff: BackOff): void
                        // @ts-ignore
                        getRecoveryBackOff(): BackOff
                        /**
                         * Set the {@link MessagePropertiesConverter} for this listener container.
                         * @param messagePropertiesConverter The properties converter.
                         */
                        // @ts-ignore
                        public setMessagePropertiesConverter(messagePropertiesConverter: org.springframework.amqp.rabbit.support.MessagePropertiesConverter): void
                        // @ts-ignore
                        getMessagePropertiesConverter(): org.springframework.amqp.rabbit.support.MessagePropertiesConverter
                        /**
                         * Return the admin.
                         * @return the admin.
                         * @deprecated in favor of {#link #getAmqpAdmin()}
                         */
                        // @ts-ignore
                        getRabbitAdmin(): AmqpAdmin
                        // @ts-ignore
                        getAmqpAdmin(): AmqpAdmin
                        /**
                         * Set the {@link AmqpAdmin}, used to declare any auto-delete queues, bindings
                         * etc when the container is started. Only needed if those queues use conditional
                         * declaration (have a 'declared-by' attribute). If not specified, an internal
                         * admin will be used which will attempt to declare all elements not having a
                         * 'declared-by' attribute.
                         * @param amqpAdmin the AmqpAdmin to use
                         * @since 2.1
                         */
                        // @ts-ignore
                        public setAmqpAdmin(amqpAdmin: AmqpAdmin): void
                        /**
                         * Set the {@link AmqpAdmin}, used to declare any auto-delete queues, bindings
                         * etc when the container is started. Only needed if those queues use conditional
                         * declaration (have a 'declared-by' attribute). If not specified, an internal
                         * admin will be used which will attempt to declare all elements not having a
                         * 'declared-by' attribute.
                         * @param amqpAdmin The admin.
                         * @deprecated in favor of {#link #setAmqpAdmin(AmqpAdmin)}
                         */
                        // @ts-ignore
                        public setRabbitAdmin(amqpAdmin: AmqpAdmin): void
                        /**
                         * If all of the configured queue(s) are not available on the broker, this setting
                         * determines whether the condition is fatal. When true, and
                         * the queues are missing during startup, the context refresh() will fail.
                         * <p> When false, the condition is not considered fatal and the container will
                         * continue to attempt to start the consumers.
                         * @param missingQueuesFatal the missingQueuesFatal to set.
                         * @since 1.3.5
                         * @see #setAutoDeclare(boolean)
                         */
                        // @ts-ignore
                        public setMissingQueuesFatal(missingQueuesFatal: boolean): void
                        // @ts-ignore
                        isMissingQueuesFatal(): boolean
                        // @ts-ignore
                        isMissingQueuesFatalSet(): boolean
                        /**
                         * Prevent the container from starting if any of the queues defined in the context have
                         * mismatched arguments (TTL etc). Default false.
                         * @param mismatchedQueuesFatal true to fail initialization when this condition occurs.
                         * @since 1.6
                         */
                        // @ts-ignore
                        public setMismatchedQueuesFatal(mismatchedQueuesFatal: boolean): void
                        // @ts-ignore
                        isMismatchedQueuesFatal(): boolean
                        // @ts-ignore
                        public setPossibleAuthenticationFailureFatal(possibleAuthenticationFailureFatal: boolean): void
                        // @ts-ignore
                        public isPossibleAuthenticationFailureFatal(): boolean
                        // @ts-ignore
                        isPossibleAuthenticationFailureFatalSet(): boolean
                        /**
                         * Set to true to automatically declare elements (queues, exchanges, bindings)
                         * in the application context during container start().
                         * @param autoDeclare the boolean flag to indicate an declaration operation.
                         * @since 1.4
                         * @see #redeclareElementsIfNecessary
                         */
                        // @ts-ignore
                        public setAutoDeclare(autoDeclare: boolean): void
                        // @ts-ignore
                        isAutoDeclare(): boolean
                        /**
                         * Set the interval between passive queue declaration attempts in milliseconds.
                         * @param failedDeclarationRetryInterval the interval, default 5000.
                         * @since 1.3.9
                         */
                        // @ts-ignore
                        public setFailedDeclarationRetryInterval(failedDeclarationRetryInterval: number /*long*/): void
                        // @ts-ignore
                        getFailedDeclarationRetryInterval(): number /*long*/
                        // @ts-ignore
                        isStatefulRetryFatalWithNullMessageId(): boolean
                        /**
                         * Set whether a message with a null messageId is fatal for the consumer
                         * when using stateful retry. When false, instead of stopping the consumer,
                         * the message is rejected and not requeued - it will be discarded or routed
                         * to the dead letter queue, if so configured. Default true.
                         * @param statefulRetryFatalWithNullMessageId true for fatal.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public setStatefulRetryFatalWithNullMessageId(statefulRetryFatalWithNullMessageId: boolean): void
                        /**
                         * Set a {@link ConditionalExceptionLogger} for logging exclusive consumer failures. The
                         * default is to log such failures at WARN level.
                         * @param exclusiveConsumerExceptionLogger the conditional exception logger.
                         * @since 1.5
                         */
                        // @ts-ignore
                        public setExclusiveConsumerExceptionLogger(exclusiveConsumerExceptionLogger: ConditionalExceptionLogger): void
                        // @ts-ignore
                        getExclusiveConsumerExceptionLogger(): ConditionalExceptionLogger
                        /**
                         * Set to true to always requeue on transaction rollback with an external
                         * {@link #setTransactionManager(PlatformTransactionManager) TransactionManager}.
                         * With earlier releases, when a transaction manager was configured, a transaction
                         * rollback always requeued the message. This was inconsistent with local transactions
                         * where the normal {@link #setDefaultRequeueRejected(boolean) defaultRequeueRejected}
                         * and {@link AmqpRejectAndDontRequeueException} logic was honored to determine whether
                         * the message was requeued. RabbitMQ does not consider the message delivery to be part
                         * of the transaction.
                         * This boolean was introduced in 1.7.1, set to true by default, to be consistent with
                         * previous behavior. Starting with version 2.0, it is false by default.
                         * @param alwaysRequeueWithTxManagerRollback true to always requeue on rollback.
                         * @since 1.7.1.
                         */
                        // @ts-ignore
                        public setAlwaysRequeueWithTxManagerRollback(alwaysRequeueWithTxManagerRollback: boolean): void
                        // @ts-ignore
                        isAlwaysRequeueWithTxManagerRollback(): boolean
                        /**
                         * Set the name (category) of the logger used to log exceptions thrown by the error handler.
                         * It defaults to the container's logger but can be overridden if you want it to log at a different
                         * level to the container. Such exceptions are logged at the ERROR level.
                         * @param errorHandlerLoggerName the logger name.
                         * @since 2.0.8
                         */
                        // @ts-ignore
                        public setErrorHandlerLoggerName(errorHandlerLoggerName: java.lang.String | string): void
                        /**
                         * Delegates to {@link #validateConfiguration()} and {@link #initialize()}.
                         */
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        // @ts-ignore
                        public setupMessageListener(messageListener: MessageListener): void
                        /**
                         * Validate the configuration of this container.
                         * <p>
                         * The default implementation is empty. To be overridden in subclasses.
                         */
                        // @ts-ignore
                        validateConfiguration(): void
                        // @ts-ignore
                        initializeProxy(delegate: java.lang.Object | any): void
                        /**
                         * Calls {@link #shutdown()} when the BeanFactory destroys the container instance.
                         * @see #shutdown()
                         */
                        // @ts-ignore
                        public destroy(): void
                        /**
                         * Initialize this container.
                         * <p>
                         * Creates a Rabbit Connection and calls {@link #doInitialize()}.
                         */
                        // @ts-ignore
                        public initialize(): void
                        /**
                         * Stop the shared Connection, call {@link #doShutdown()}, and close this container.
                         */
                        // @ts-ignore
                        public shutdown(): void
                        /**
                         * Register any invokers within this container.
                         * <p>
                         * Subclasses need to implement this method for their specific invoker management process.
                         */
                        // @ts-ignore
                        abstract doInitialize(): void
                        /**
                         * Close the registered invokers.
                         * <p>
                         * Subclasses need to implement this method for their specific invoker management process.
                         * <p>
                         * A shared Rabbit Connection, if any, will automatically be closed <i>afterwards</i>.
                         * @see #shutdown()
                         */
                        // @ts-ignore
                        abstract doShutdown(): void
                        /**
                         * @return Whether this container is currently active, that is, whether it has been set up but not shut down yet.
                         */
                        // @ts-ignore
                        public isActive(): boolean
                        /**
                         * Start this container.
                         * @see #doStart
                         */
                        // @ts-ignore
                        public start(): void
                        /**
                         * Start this container, and notify all invoker tasks.
                         */
                        // @ts-ignore
                        doStart(): void
                        /**
                         * Stop this container.
                         * @see #doStop
                         * @see #doStop
                         */
                        // @ts-ignore
                        public stop(): void
                        /**
                         * This method is invoked when the container is stopping.
                         */
                        // @ts-ignore
                        doStop(): void
                        /**
                         * Determine whether this container is currently running, that is, whether it has been started and not stopped yet.
                         * @see #start()
                         * @see #stop()
                         */
                        // @ts-ignore
                        public isRunning(): boolean
                        /**
                         * Invoke the registered ErrorHandler, if any. Log at error level otherwise.
                         * The default error handler is a {@link ConditionalRejectingErrorHandler} with
                         * the default {@link FatalExceptionStrategy} implementation.
                         * @param ex the uncaught error that arose during Rabbit processing.
                         * @see #setErrorHandler
                         */
                        // @ts-ignore
                        invokeErrorHandler(ex: java.lang.Throwable | Error): void
                        /**
                         * Execute the specified listener, committing or rolling back the transaction afterwards (if necessary).
                         * @param channel the Rabbit Channel to operate on
                         * @param messageIn the received Rabbit Message
                         * @see #invokeListener
                         * @see #handleListenerException
                         */
                        // @ts-ignore
                        executeListener(channel: Channel, messageIn: Message): void
                        // @ts-ignore
                        invokeListener(channel: Channel, message: Message): void
                        /**
                         * Invoke the specified listener: either as standard MessageListener or (preferably) as SessionAwareMessageListener.
                         * @param channel the Rabbit Channel to operate on
                         * @param message the received Rabbit Message
                         * @see #setMessageListener(MessageListener)
                         */
                        // @ts-ignore
                        actualInvokeListener(channel: Channel, message: Message): void
                        /**
                         * Invoke the specified listener as Spring ChannelAwareMessageListener, exposing a new Rabbit Session (potentially
                         * with its own transaction) to the listener if demanded.
                         * An exception thrown from the listener will be wrapped in a {@link ListenerExecutionFailedException}.
                         * @param listener the Spring ChannelAwareMessageListener to invoke
                         * @param channel the Rabbit Channel to operate on
                         * @param message the received Rabbit Message
                         * @see ChannelAwareMessageListener
                         * @see #setExposeListenerChannel(boolean)
                         */
                        // @ts-ignore
                        doInvokeListener(listener: org.springframework.amqp.rabbit.listener.api.ChannelAwareMessageListener, channel: Channel, message: Message): void
                        /**
                         * Invoke the specified listener as Spring Rabbit MessageListener.
                         * <p>
                         * Default implementation performs a plain invocation of the <code>onMessage</code> method.
                         * <p>
                         * Exception thrown from listener will be wrapped to {@link ListenerExecutionFailedException}.
                         * @param listener the Rabbit MessageListener to invoke
                         * @param message the received Rabbit Message
                         * @see org.springframework.amqp.core.MessageListener#onMessage
                         */
                        // @ts-ignore
                        doInvokeListener(listener: MessageListener, message: Message): void
                        /**
                         * Check whether the given Channel is locally transacted, that is, whether its transaction is managed by this
                         * listener container's Channel handling and not by an external transaction coordinator.
                         * <p>
                         * Note:This method is about finding out whether the Channel's transaction is local or externally coordinated.
                         * @return whether the given Channel is locally transacted
                         * @see #isChannelTransacted()
                         */
                        // @ts-ignore
                        isChannelLocallyTransacted(): boolean
                        /**
                         * Handle the given exception that arose during listener execution.
                         * <p>
                         * The default implementation logs the exception at error level, not propagating it to the Rabbit provider -
                         * assuming that all handling of acknowledgment and/or transactions is done by this listener container. This can be
                         * overridden in subclasses.
                         * @param ex the exception to handle
                         */
                        // @ts-ignore
                        handleListenerException(ex: java.lang.Throwable | Error): void
                        /**
                         * @param e The Exception.
                         * @param message The failed message.
                         * @return If 'e' is of type {#link ListenerExecutionFailedException} - return 'e' as it is, otherwise wrap it to
                         *  {@link ListenerExecutionFailedException} and return.
                         */
                        // @ts-ignore
                        wrapToListenerExecutionFailedExceptionIfNeeded(e: java.lang.Exception, message: Message): org.springframework.amqp.rabbit.listener.exception.ListenerExecutionFailedException
                        // @ts-ignore
                        publishConsumerFailedEvent(reason: java.lang.String | string, fatal: boolean, t: java.lang.Throwable | Error): void
                        // @ts-ignore
                        publishIdleContainerEvent(idleTime: number /*long*/): void
                        // @ts-ignore
                        updateLastReceive(): void
                        // @ts-ignore
                        configureAdminIfNeeded(): void
                        // @ts-ignore
                        checkMismatchedQueues(): void
                        // @ts-ignore
                        public lazyLoad(): void
                        /**
                         * Use {@link AmqpAdmin#initialize()} to redeclare everything if necessary.
                         * Since auto deletion of a queue can cause upstream elements
                         * (bindings, exchanges) to be deleted too, everything needs to be redeclared if
                         * a queue is missing.
                         * Declaration is idempotent so, aside from some network chatter, there is no issue,
                         * and we only will do it if we detect our queue is gone.
                         * <p>
                         * In general it makes sense only for the 'auto-delete' or 'expired' queues,
                         * but with the server TTL policy we don't have ability to determine 'expiration'
                         * option for the queue.
                         * <p>
                         * Starting with version 1.6, if
                         * {@link #setMismatchedQueuesFatal(boolean) mismatchedQueuesFatal} is true,
                         * the declarations are always attempted during restart so the listener will
                         * fail with a fatal error if mismatches occur.
                         */
                        // @ts-ignore
                        redeclareElementsIfNecessary(): void
                        /**
                         * Traverse the cause chain and, if an {@link ImmediateAcknowledgeAmqpException}
                         * is found before an {@link AmqpRejectAndDontRequeueException}, return true.
                         * An {@link Error} will take precedence.
                         * @param ex the exception
                         * @return true if we should ack immediately.
                         * @since 1.6.6
                         */
                        // @ts-ignore
                        causeChainHasImmediateAcknowledgeAmqpException(ex: java.lang.Throwable | Error): boolean
                        /**
                         * A null resource holder is rare, but possible if the transaction attribute caused no
                         * transaction to be started (e.g. {@code TransactionDefinition.PROPAGATION_NONE}). In
                         * that case the delivery tags will have been processed manually.
                         * @param resourceHolder the bound resource holder (if a transaction is active).
                         * @param exception the exception.
                         */
                        // @ts-ignore
                        prepareHolderForRollback(resourceHolder: org.springframework.amqp.rabbit.connection.RabbitResourceHolder, exception: java.lang.RuntimeException): void
                    }
                }
            }
        }
    }
}
