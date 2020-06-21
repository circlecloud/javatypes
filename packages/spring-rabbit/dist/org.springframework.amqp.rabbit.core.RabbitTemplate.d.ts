declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    /**
                     * <p>
                     * Helper class that simplifies synchronous RabbitMQ access (sending and receiving messages).
                     * </p>
                     * <p>
                     * The default settings are for non-transactional messaging, which reduces the amount of data exchanged with the broker.
                     * To use a new transaction for every send or receive set the {@link #setChannelTransacted(boolean) channelTransacted}
                     * flag. To extend the transaction over multiple invocations (more efficient), you can use a Spring transaction to
                     * bracket the calls (with <code>channelTransacted=true</code> as well).
                     * </p>
                     * <p>
                     * The only mandatory property is the {@link #setConnectionFactory(ConnectionFactory) ConnectionFactory}. There are
                     * strategies available for converting messages to and from Java objects (
                     * {@link #setMessageConverter(MessageConverter) MessageConverter}) and for converting message headers (known as message
                     * properties in AMQP, see {@link #setMessagePropertiesConverter(MessagePropertiesConverter) MessagePropertiesConverter}
                     * ). The defaults probably do something sensible for typical use cases, as long as the message content-type is set
                     * appropriately.
                     * </p>
                     * <p>
                     * The "send" methods all have overloaded versions that allow you to explicitly target an exchange and a routing key, or
                     * you can set default values to be used in all send operations. The plain "receive" methods allow you to explicitly
                     * target a queue to receive from, or you can set a default value for the template that applies to all explicit
                     * receives. The convenience methods for send <b>and</b> receive use the sender defaults if no exchange or routing key
                     * is specified, but they always use a temporary queue for the receive leg, so the default queue is ignored.
                     * </p>
                     * @author Mark Pollack
                     * @author Mark Fisher
                     * @author Dave Syer
                     * @author Gary Russell
                     * @author Artem Bilan
                     * @author Ernest Sadykov
                     * @author Mark Norkin
                     * @author Mohammad Hewedy
                     * @since 1.0
                     */
                    // @ts-ignore
                    class RabbitTemplate extends org.springframework.amqp.rabbit.connection.RabbitAccessor implements org.springframework.amqp.rabbit.core.RabbitOperations, org.springframework.amqp.rabbit.support.ListenerContainerAware, org.springframework.amqp.rabbit.connection.PublisherCallbackChannel.Listener {
                        /**
                         * Convenient constructor for use with setter injection. Don't forget to set the connection factory.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a rabbit template with default strategies and settings.
                         * @param connectionFactory the connection factory to use
                         */
                        // @ts-ignore
                        constructor(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory)
                        /**
                         * Set up the default strategies. Subclasses can override if necessary.
                         */
                        // @ts-ignore
                        initDefaultStrategies(): void
                        /**
                         * The name of the default exchange to use for send operations when none is specified. Defaults to <code>""</code>
                         * which is the default exchange in the broker (per the AMQP specification).
                         * @param exchange the exchange name to use for send operations
                         */
                        // @ts-ignore
                        public setExchange(exchange: java.lang.String | string): void
                        /**
                         * @return the name of the default exchange used by this template.
                         * @since 1.6
                         */
                        // @ts-ignore
                        public getExchange(): string
                        /**
                         * The value of a default routing key to use for send operations when none is specified. Default is empty which is
                         * not helpful when using the default (or any direct) exchange, but fine if the exchange is a headers exchange for
                         * instance.
                         * @param routingKey the default routing key to use for send operations
                         */
                        // @ts-ignore
                        public setRoutingKey(routingKey: java.lang.String | string): void
                        /**
                         * @return the default routing key used by this template.
                         * @since 1.6
                         */
                        // @ts-ignore
                        public getRoutingKey(): string
                        /**
                         * The name of the default queue to receive messages from when none is specified explicitly.
                         * @param queue the default queue name to use for receive
                         * @deprecated in favor of {#link #setDefaultReceiveQueue(String)}.
                         */
                        // @ts-ignore
                        public setQueue(queue: java.lang.String | string): void
                        /**
                         * The name of the default queue to receive messages from when none is specified explicitly.
                         * @param queue the default queue name to use for receive
                         * @since 2.1.2
                         */
                        // @ts-ignore
                        public setDefaultReceiveQueue(queue: java.lang.String | string): void
                        /**
                         * The encoding to use when converting between byte arrays and Strings in message properties.
                         * @param encoding the encoding to set
                         */
                        // @ts-ignore
                        public setEncoding(encoding: java.lang.String | string): void
                        /**
                         * The encoding used when converting between byte arrays and Strings in message properties.
                         * @return the encoding.
                         */
                        // @ts-ignore
                        public getEncoding(): string
                        /**
                         * An address for replies; if not provided, a temporary exclusive, auto-delete queue will
                         * be used for each reply, unless RabbitMQ supports 'amq.rabbitmq.reply-to' - see
                         * https://www.rabbitmq.com/direct-reply-to.html
                         * <p>The address can be a simple queue name (in which case the reply will be routed via the default
                         * exchange), or with the form {@code exchange/routingKey} to route the reply using an explicit
                         * exchange and routing key.
                         * @param replyAddress the replyAddress to set
                         */
                        // @ts-ignore
                        public setReplyAddress(replyAddress: java.lang.String | string): void
                        /**
                         * Specify the receive timeout in milliseconds when using {@code receive()} methods (for {@code sendAndReceive()}
                         * methods, refer to {@link #setReplyTimeout(long) replyTimeout}. By default, the value is zero, which
                         * means the {@code receive()} methods will return {@code null} immediately if there is no message
                         * available. Set to less than zero to wait for a message indefinitely.
                         * @param receiveTimeout the timeout.
                         * @since 1.5
                         */
                        // @ts-ignore
                        public setReceiveTimeout(receiveTimeout: number /*long*/): void
                        /**
                         * Specify the timeout in milliseconds to be used when waiting for a reply Message when using one of the
                         * sendAndReceive methods. The default value is defined as {@link #DEFAULT_REPLY_TIMEOUT}. A negative value
                         * indicates an indefinite timeout. Not used in the plain receive methods because there is no blocking receive
                         * operation defined in the protocol.
                         * @param replyTimeout the reply timeout in milliseconds
                         * @see #sendAndReceive(String, String, Message)
                         * @see #convertSendAndReceive(String, String, Object)
                         */
                        // @ts-ignore
                        public setReplyTimeout(replyTimeout: number /*long*/): void
                        /**
                         * Set the message converter for this template. Used to resolve Object parameters to convertAndSend methods and
                         * Object results from receiveAndConvert methods.
                         * <p>
                         * The default converter is a SimpleMessageConverter, which is able to handle byte arrays, Strings, and Serializable
                         * Objects depending on the message content type header.
                         * @param messageConverter The message converter.
                         * @see #convertAndSend
                         * @see #receiveAndConvert
                         * @see org.springframework.amqp.support.converter.SimpleMessageConverter
                         */
                        // @ts-ignore
                        public setMessageConverter(messageConverter: MessageConverter): void
                        /**
                         * Set the {@link MessagePropertiesConverter} for this template. This converter is used to convert between raw byte
                         * content in the message headers and plain Java objects. In particular there are limitations when dealing with very
                         * long string headers, which hopefully are rare in practice, but if you need to use long headers you might need to
                         * inject a special converter here.
                         * @param messagePropertiesConverter The message properties converter.
                         */
                        // @ts-ignore
                        public setMessagePropertiesConverter(messagePropertiesConverter: org.springframework.amqp.rabbit.support.MessagePropertiesConverter): void
                        /**
                         * Return the properties converter.
                         * @return the converter.
                         * @since 2.0
                         */
                        // @ts-ignore
                        getMessagePropertiesConverter(): org.springframework.amqp.rabbit.support.MessagePropertiesConverter
                        /**
                         * Return the message converter for this template. Useful for clients that want to take advantage of the converter
                         * in {@link ChannelCallback} implementations.
                         * @return The message converter.
                         */
                        // @ts-ignore
                        public getMessageConverter(): MessageConverter
                        // @ts-ignore
                        public setConfirmCallback(confirmCallback: org.springframework.amqp.rabbit.core.RabbitTemplate.ConfirmCallback): void
                        // @ts-ignore
                        public setReturnCallback(returnCallback: org.springframework.amqp.rabbit.core.RabbitTemplate.ReturnCallback): void
                        /**
                         * Set the mandatory flag when sending messages; only applies if a
                         * {@link #setReturnCallback(ReturnCallback) returnCallback} had been provided.
                         * @param mandatory the mandatory to set.
                         */
                        // @ts-ignore
                        public setMandatory(mandatory: boolean): void
                        /**
                         * @param mandatoryExpression a SpEL {#link Expression} to evaluate against each
                         *  request message, if a {@link #setReturnCallback(ReturnCallback) returnCallback} has
                         *  been provided. The result of the evaluation must be a {@code boolean} value.
                         * @since 1.4
                         */
                        // @ts-ignore
                        public setMandatoryExpression(mandatoryExpression: Expression): void
                        /**
                         * @param mandatoryExpression a SpEL {#link Expression} to evaluate against each
                         *  request message, if a {@link #setReturnCallback(ReturnCallback) returnCallback} has
                         *  been provided. The result of the evaluation must be a {@code boolean} value.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public setMandatoryExpressionString(mandatoryExpression: java.lang.String | string): void
                        /**
                         * A SpEL {@link Expression} to evaluate
                         * against each request message, if the provided {@link #getConnectionFactory()}
                         * is an instance of {@link AbstractRoutingConnectionFactory}.
                         * <p>
                         * The result of this expression is used as {@code lookupKey} to get the target
                         * {@link ConnectionFactory} from {@link AbstractRoutingConnectionFactory}
                         * directly.
                         * <p>
                         * If this expression is evaluated to {@code null}, we fallback to the normal
                         * {@link AbstractRoutingConnectionFactory} logic.
                         * <p>
                         * If there is no target {@link ConnectionFactory} with the evaluated {@code lookupKey},
                         * we fallback to the normal {@link AbstractRoutingConnectionFactory} logic
                         * only if its property {@code lenientFallback == true}.
                         * <p>
                         * This expression is used for {@code send} operations.
                         * @param sendConnectionFactorySelectorExpression a SpEL {#link Expression} to evaluate
                         * @since 1.4
                         */
                        // @ts-ignore
                        public setSendConnectionFactorySelectorExpression(sendConnectionFactorySelectorExpression: Expression): void
                        /**
                         * A SpEL {@link Expression} to evaluate
                         * against each {@code receive} {@code queueName}, if the provided {@link #getConnectionFactory()}
                         * is an instance of {@link AbstractRoutingConnectionFactory}.
                         * <p>
                         * The result of this expression is used as {@code lookupKey} to get the target
                         * {@link ConnectionFactory} from {@link AbstractRoutingConnectionFactory}
                         * directly.
                         * <p>
                         * If this expression is evaluated to {@code null}, we fallback to the normal
                         * {@link AbstractRoutingConnectionFactory} logic.
                         * <p>
                         * If there is no target {@link ConnectionFactory} with the evaluated {@code lookupKey},
                         * we fallback to the normal {@link AbstractRoutingConnectionFactory} logic
                         * only if its property {@code lenientFallback == true}.
                         * <p>
                         * This expression is used for {@code receive} operations.
                         * @param receiveConnectionFactorySelectorExpression a SpEL {#link Expression} to evaluate
                         * @since 1.4
                         */
                        // @ts-ignore
                        public setReceiveConnectionFactorySelectorExpression(receiveConnectionFactorySelectorExpression: Expression): void
                        /**
                         * If set to 'correlationId' (default) the correlationId property
                         * will be used; otherwise the supplied key will be used.
                         * @param correlationKey the correlationKey to set
                         */
                        // @ts-ignore
                        public setCorrelationKey(correlationKey: java.lang.String | string): void
                        /**
                         * Add a {@link RetryTemplate} which will be used for all rabbit operations.
                         * @param retryTemplate The retry template.
                         */
                        // @ts-ignore
                        public setRetryTemplate(retryTemplate: RetryTemplate): void
                        /**
                         * Add a {@link RecoveryCallback} which is used for the {@code retryTemplate.execute}.
                         * If {@link #retryTemplate} isn't provided {@link #recoveryCallback} is ignored.
                         * {@link RecoveryCallback} should produce result compatible with
                         * {@link #execute(ChannelCallback)} return type.
                         * @param recoveryCallback The retry recoveryCallback.
                         * @since 1.4
                         */
                        // @ts-ignore
                        public setRecoveryCallback(recoveryCallback: object): void
                        // @ts-ignore
                        public setBeanFactory(beanFactory: BeanFactory): void
                        /**
                         * Set {@link MessagePostProcessor}s that will be invoked immediately before invoking
                         * {@code Channel#basicPublish()}, after all other processing, except creating the
                         * {@link BasicProperties} from {@link MessageProperties}. May be used for operations
                         * such as compression. Processors are invoked in order, depending on {@code PriorityOrder},
                         * {@code Order} and finally unordered.
                         * @param beforePublishPostProcessors the post processor.
                         * @since 1.4.2
                         * @see #addBeforePublishPostProcessors(MessagePostProcessor...)
                         */
                        // @ts-ignore
                        public setBeforePublishPostProcessors(...beforePublishPostProcessors: MessagePostProcessor[]): void
                        /**
                         * Add {@link MessagePostProcessor} that will be invoked immediately before invoking
                         * {@code Channel#basicPublish()}, after all other processing, except creating the
                         * {@link BasicProperties} from {@link MessageProperties}. May be used for operations
                         * such as compression. Processors are invoked in order, depending on {@code PriorityOrder},
                         * {@code Order} and finally unordered.
                         * <p>
                         * In contrast to {@link #setBeforePublishPostProcessors(MessagePostProcessor...)}, this
                         * method does not override the previously added beforePublishPostProcessors.
                         * @param beforePublishPostProcessors the post processor.
                         * @since 2.1.4
                         */
                        // @ts-ignore
                        public addBeforePublishPostProcessors(...beforePublishPostProcessors: MessagePostProcessor[]): void
                        /**
                         * Remove the provided {@link MessagePostProcessor} from the {@link #beforePublishPostProcessors} list.
                         * @param beforePublishPostProcessor the MessagePostProcessor to remove.
                         * @return the boolean if the provided post processor has been removed.
                         * @since 2.1.4
                         * @see #addBeforePublishPostProcessors(MessagePostProcessor...)
                         */
                        // @ts-ignore
                        public removeBeforePublishPostProcessor(beforePublishPostProcessor: MessagePostProcessor): boolean
                        /**
                         * Set a {@link MessagePostProcessor} that will be invoked immediately after a {@code Channel#basicGet()}
                         * and before any message conversion is performed.
                         * May be used for operations such as decompression. Processors are invoked in order,
                         * depending on {@code PriorityOrder}, {@code Order} and finally unordered.
                         * @param afterReceivePostProcessors the post processor.
                         * @since 1.5
                         * @see #addAfterReceivePostProcessors(MessagePostProcessor...)
                         */
                        // @ts-ignore
                        public setAfterReceivePostProcessors(...afterReceivePostProcessors: MessagePostProcessor[]): void
                        /**
                         * Return configured after receive {@link MessagePostProcessor}s or {@code null}.
                         * @return configured after receive {#link MessagePostProcessor}s or {@code null}.
                         * @since 2.1.5
                         */
                        // @ts-ignore
                        public getAfterReceivePostProcessors(): Array<MessagePostProcessor>
                        /**
                         * Add {@link MessagePostProcessor} that will be invoked immediately after a {@code Channel#basicGet()}
                         * and before any message conversion is performed.
                         * May be used for operations such as decompression. Processors are invoked in order,
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
                         * Set a {@link CorrelationDataPostProcessor} to be invoked before publishing a message.
                         * Correlation data is used to correlate publisher confirms.
                         * @param correlationDataPostProcessor the post processor.
                         * @since 1.6.7
                         * @see #setConfirmCallback(ConfirmCallback)
                         */
                        // @ts-ignore
                        public setCorrelationDataPostProcessor(correlationDataPostProcessor: org.springframework.amqp.rabbit.core.CorrelationDataPostProcessor): void
                        /**
                         * By default, when the broker supports it and no
                         * {@link #setReplyAddress(String) replyAddress} is provided, send/receive
                         * methods will use Direct reply-to (https://www.rabbitmq.com/direct-reply-to.html).
                         * Setting this property to true will override that behavior and use
                         * a temporary, auto-delete, queue for each request instead.
                         * Changing this property has no effect once the first request has been
                         * processed.
                         * @param value true to use temporary queues.
                         * @since 1.6
                         */
                        // @ts-ignore
                        public setUseTemporaryReplyQueues(value: boolean): void
                        /**
                         * Set whether or not to use a {@link DirectReplyToMessageListenerContainer} when
                         * direct reply-to is available and being used. When false, a new consumer is created
                         * for each request (the mechanism used in versions prior to 2.0). Default true.
                         * @param useDirectReplyToContainer set to false to use a consumer per request.
                         * @since 2.0
                         * @see #setUseTemporaryReplyQueues(boolean)
                         */
                        // @ts-ignore
                        public setUseDirectReplyToContainer(useDirectReplyToContainer: boolean): void
                        /**
                         * Set an expression to be evaluated to set the userId message property if it
                         * evaluates to a non-null value and the property is not already set in the
                         * message to be sent.
                         * See https://www.rabbitmq.com/validated-user-id.html
                         * @param userIdExpression the expression.
                         * @since 1.6
                         */
                        // @ts-ignore
                        public setUserIdExpression(userIdExpression: Expression): void
                        /**
                         * Set an expression to be evaluated to set the userId message property if it
                         * evaluates to a non-null value and the property is not already set in the
                         * message to be sent.
                         * See https://www.rabbitmq.com/validated-user-id.html
                         * @param userIdExpression the expression.
                         * @since 1.6
                         */
                        // @ts-ignore
                        public setUserIdExpressionString(userIdExpression: java.lang.String | string): void
                        // @ts-ignore
                        public setBeanName(name: java.lang.String | string): void
                        /**
                         * Set a task executor to use when using a {@link DirectReplyToMessageListenerContainer}.
                         * @param taskExecutor the executor.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public setTaskExecutor(taskExecutor: java.util.concurrent.Executor): void
                        /**
                         * Set to true to use correlation id provided by the message instead of generating
                         * the correlation id for request/reply scenarios. The correlation id must be unique
                         * for all in-process requests to avoid cross talk.
                         * <p>
                         * <b>Users must therefore take create care to ensure uniqueness.</b>
                         * @param userCorrelationId true to use user correlation data.
                         */
                        // @ts-ignore
                        public setUserCorrelationId(userCorrelationId: boolean): void
                        /**
                         * True if separate publisher connection(s) are used.
                         * @return true or false.
                         * @since 2.0.2
                         * @see #setUsePublisherConnection(boolean)
                         */
                        // @ts-ignore
                        public isUsePublisherConnection(): boolean
                        /**
                         * To avoid deadlocked connections, it is generally recommended to use
                         * a separate connection for publishers and consumers (except when a publisher
                         * is participating in a consumer transaction). Default 'false'.
                         * @param usePublisherConnection true to use a publisher connection.
                         * @since 2.0.2
                         */
                        // @ts-ignore
                        public setUsePublisherConnection(usePublisherConnection: boolean): void
                        /**
                         * Set to true for a no-local consumer. Defaults to false.
                         * @param noLocalReplyConsumer true for a no-local consumer.
                         * @since 2.1
                         * @see AbstractMessageListenerContainer#setNoLocal(boolean)
                         * @see Channel#basicConsume(String, boolean, String, boolean, boolean, Map, com.rabbitmq.client.Consumer)
                         */
                        // @ts-ignore
                        public setNoLocalReplyConsumer(noLocalReplyConsumer: boolean): void
                        /**
                         * When using a direct reply-to container for request/reply operations, set an error
                         * handler to be invoked when a reply delivery fails (e.g. due to a late reply).
                         * @param replyErrorHandler the reply error handler
                         * @since 2.0.11
                         * @see #setUseDirectReplyToContainer(boolean)
                         */
                        // @ts-ignore
                        public setReplyErrorHandler(replyErrorHandler: ErrorHandler): void
                        /**
                         * Invoked by the container during startup so it can verify the queue is correctly
                         * configured (if a simple reply queue name is used instead of exchange/routingKey).
                         * @return the queue name, if configured.
                         * @since 1.5
                         */
                        // @ts-ignore
                        public expectedQueueNames(): Array<java.lang.String | string>
                        /**
                         * Gets unconfirmed correlation data older than age and removes them.
                         * @param age in milliseconds
                         * @return the collection of correlation data for which confirms have
                         *  not been received or null if no such confirms exist.
                         */
                        // @ts-ignore
                        public getUnconfirmed(age: number /*long*/): Array<org.springframework.amqp.rabbit.connection.CorrelationData>
                        /**
                         * Gets unconfirmed messages count.
                         * @return The count of the messages that are not confirmed yet by RabbitMQ.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public getUnconfirmedCount(): number /*int*/
                        // @ts-ignore
                        public start(): void
                        /**
                         * Perform additional start actions.
                         * @since 2.0
                         */
                        // @ts-ignore
                        doStart(): void
                        // @ts-ignore
                        public stop(): void
                        /**
                         * Perform additional stop actions.
                         * @since 2.0
                         */
                        // @ts-ignore
                        doStop(): void
                        // @ts-ignore
                        public isRunning(): boolean
                        /**
                         * Override this method use some other criteria to decide whether or not to use
                         * direct reply-to (https://www.rabbitmq.com/direct-reply-to.html).
                         * The default implementation returns true if the broker supports it and there
                         * is no {@link #setReplyAddress(String) replyAddress} set and
                         * {@link #setUseTemporaryReplyQueues(boolean) useTemporaryReplyQueues} is false.
                         * When direct reply-to is not used, the template
                         * will create a temporary, exclusive, auto-delete queue for the reply.
                         * <p>
                         * This method is invoked once only - when the first message is sent, from a
                         * synchronized block.
                         * @return true to use direct reply-to.
                         */
                        // @ts-ignore
                        useDirectReplyTo(): boolean
                        // @ts-ignore
                        public send(message: Message): void
                        // @ts-ignore
                        public send(routingKey: java.lang.String | string, message: Message): void
                        // @ts-ignore
                        public send(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: Message): void
                        // @ts-ignore
                        public send(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: Message, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): void
                        // @ts-ignore
                        public convertAndSend(object: java.lang.Object | any): void
                        // @ts-ignore
                        public correlationConvertAndSend(object: java.lang.Object | any, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): void
                        // @ts-ignore
                        public convertAndSend(routingKey: java.lang.String | string, object: java.lang.Object | any): void
                        // @ts-ignore
                        public convertAndSend(routingKey: java.lang.String | string, object: java.lang.Object | any, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): void
                        // @ts-ignore
                        public convertAndSend(exchange: java.lang.String | string, routingKey: java.lang.String | string, object: java.lang.Object | any): void
                        // @ts-ignore
                        public convertAndSend(exchange: java.lang.String | string, routingKey: java.lang.String | string, object: java.lang.Object | any, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): void
                        // @ts-ignore
                        public convertAndSend(message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor): void
                        // @ts-ignore
                        public convertAndSend(routingKey: java.lang.String | string, message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor): void
                        // @ts-ignore
                        public convertAndSend(message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): void
                        // @ts-ignore
                        public convertAndSend(routingKey: java.lang.String | string, message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): void
                        // @ts-ignore
                        public convertAndSend(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor): void
                        // @ts-ignore
                        public convertAndSend(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): void
                        // @ts-ignore
                        public receive(): Message
                        // @ts-ignore
                        public receive(queueName: java.lang.String | string): Message
                        /**
                         * Non-blocking receive.
                         * @param queueName the queue to receive from.
                         * @return The message, or null if none immediately available.
                         * @since 1.5
                         */
                        // @ts-ignore
                        doReceiveNoWait(queueName: java.lang.String | string): Message
                        // @ts-ignore
                        public receive(timeoutMillis: number /*long*/): Message
                        // @ts-ignore
                        public receive(queueName: java.lang.String | string, timeoutMillis: number /*long*/): Message
                        // @ts-ignore
                        public receiveAndConvert(): any
                        // @ts-ignore
                        public receiveAndConvert(queueName: java.lang.String | string): any
                        // @ts-ignore
                        public receiveAndConvert(timeoutMillis: number /*long*/): any
                        // @ts-ignore
                        public receiveAndConvert(queueName: java.lang.String | string, timeoutMillis: number /*long*/): any
                        // @ts-ignore
                        public receiveAndConvert<T>(type: object): T
                        // @ts-ignore
                        public receiveAndConvert<T>(queueName: java.lang.String | string, type: object): T
                        // @ts-ignore
                        public receiveAndConvert<T>(timeoutMillis: number /*long*/, type: object): T
                        // @ts-ignore
                        public receiveAndConvert<T>(queueName: java.lang.String | string, timeoutMillis: number /*long*/, type: object): T
                        // @ts-ignore
                        public receiveAndReply<R, S>(callback: object): boolean
                        // @ts-ignore
                        public receiveAndReply<R, S>(queueName: java.lang.String | string, callback: object): boolean
                        // @ts-ignore
                        public receiveAndReply<R, S>(callback: object, exchange: java.lang.String | string, routingKey: java.lang.String | string): boolean
                        // @ts-ignore
                        public receiveAndReply<R, S>(queueName: java.lang.String | string, callback: object, replyExchange: java.lang.String | string, replyRoutingKey: java.lang.String | string): boolean
                        // @ts-ignore
                        public receiveAndReply<R, S>(callback: object, replyToAddressCallback: object): boolean
                        // @ts-ignore
                        public receiveAndReply<R, S>(queueName: java.lang.String | string, callback: object, replyToAddressCallback: object): boolean
                        // @ts-ignore
                        public sendAndReceive(message: Message): Message
                        // @ts-ignore
                        public sendAndReceive(message: Message, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): Message
                        // @ts-ignore
                        public sendAndReceive(routingKey: java.lang.String | string, message: Message): Message
                        // @ts-ignore
                        public sendAndReceive(routingKey: java.lang.String | string, message: Message, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): Message
                        // @ts-ignore
                        public sendAndReceive(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: Message): Message
                        // @ts-ignore
                        public sendAndReceive(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: Message, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): Message
                        // @ts-ignore
                        public convertSendAndReceive(message: java.lang.Object | any): any
                        // @ts-ignore
                        public convertSendAndReceive(message: java.lang.Object | any, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): any
                        // @ts-ignore
                        public convertSendAndReceive(routingKey: java.lang.String | string, message: java.lang.Object | any): any
                        // @ts-ignore
                        public convertSendAndReceive(routingKey: java.lang.String | string, message: java.lang.Object | any, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): any
                        // @ts-ignore
                        public convertSendAndReceive(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: java.lang.Object | any): any
                        // @ts-ignore
                        public convertSendAndReceive(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: java.lang.Object | any, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): any
                        // @ts-ignore
                        public convertSendAndReceive(message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor): any
                        // @ts-ignore
                        public convertSendAndReceive(message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): any
                        // @ts-ignore
                        public convertSendAndReceive(routingKey: java.lang.String | string, message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor): any
                        // @ts-ignore
                        public convertSendAndReceive(routingKey: java.lang.String | string, message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): any
                        // @ts-ignore
                        public convertSendAndReceive(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor): any
                        // @ts-ignore
                        public convertSendAndReceive(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): any
                        // @ts-ignore
                        public convertSendAndReceiveAsType<T>(message: java.lang.Object | any, responseType: object): T
                        // @ts-ignore
                        public convertSendAndReceiveAsType<T>(message: java.lang.Object | any, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData, responseType: object): T
                        // @ts-ignore
                        public convertSendAndReceiveAsType<T>(routingKey: java.lang.String | string, message: java.lang.Object | any, responseType: object): T
                        // @ts-ignore
                        public convertSendAndReceiveAsType<T>(routingKey: java.lang.String | string, message: java.lang.Object | any, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData, responseType: object): T
                        // @ts-ignore
                        public convertSendAndReceiveAsType<T>(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: java.lang.Object | any, responseType: object): T
                        // @ts-ignore
                        public convertSendAndReceiveAsType<T>(message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, responseType: object): T
                        // @ts-ignore
                        public convertSendAndReceiveAsType<T>(message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData, responseType: object): T
                        // @ts-ignore
                        public convertSendAndReceiveAsType<T>(routingKey: java.lang.String | string, message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, responseType: object): T
                        // @ts-ignore
                        public convertSendAndReceiveAsType<T>(routingKey: java.lang.String | string, message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData, responseType: object): T
                        // @ts-ignore
                        public convertSendAndReceiveAsType<T>(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, responseType: object): T
                        // @ts-ignore
                        public convertSendAndReceiveAsType<T>(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData, responseType: object): T
                        /**
                         * Convert and send a message and return the raw reply message, or null. Subclasses can
                         * invoke this method if they want to perform conversion on the outbound message but
                         * have direct access to the reply message before conversion.
                         * @param exchange the exchange.
                         * @param routingKey the routing key.
                         * @param message the data to send.
                         * @param messagePostProcessor a message post processor (can be null).
                         * @param correlationData correlation data (can be null).
                         * @return the reply message or null if a timeout occurs.
                         * @since 1.6.6
                         */
                        // @ts-ignore
                        convertSendAndReceiveRaw(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): Message
                        // @ts-ignore
                        convertMessageIfNecessary(object: java.lang.Object | any): Message
                        /**
                         * Send a message and wait for a reply.
                         * @param exchange the exchange name
                         * @param routingKey the routing key
                         * @param message the message to send
                         * @param correlationData the correlation data for confirms
                         * @return the message that is received in reply
                         */
                        // @ts-ignore
                        doSendAndReceive(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: Message, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): Message
                        // @ts-ignore
                        doSendAndReceiveWithTemporary(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: Message, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): Message
                        // @ts-ignore
                        doSendAndReceiveWithFixed(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: Message, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): Message
                        /**
                         * Subclasses can implement this to be notified that a reply has timed out.
                         * @param correlationId the correlationId
                         * @since 2.1.2
                         */
                        // @ts-ignore
                        replyTimedOut(correlationId: java.lang.String | string): void
                        /**
                         * Return whether the provided message should be sent with the mandatory flag set.
                         * @param message the message.
                         * @return true for mandatory.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public isMandatoryFor(message: Message): java.lang.Boolean
                        // @ts-ignore
                        public execute<T>(action: org.springframework.amqp.rabbit.core.ChannelCallback<T>): T
                        // @ts-ignore
                        public invoke<T>(action: org.springframework.amqp.rabbit.core.RabbitOperations.OperationsCallback<T>, acks: com.rabbitmq.client.ConfirmCallback, nacks: com.rabbitmq.client.ConfirmCallback): T
                        // @ts-ignore
                        public waitForConfirms(timeout: number /*long*/): boolean
                        // @ts-ignore
                        public waitForConfirmsOrDie(timeout: number /*long*/): void
                        // @ts-ignore
                        public determineConfirmsReturnsCapability(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory): void
                        /**
                         * Send the given message to the specified exchange.
                         * @param channel The RabbitMQ Channel to operate within.
                         * @param exchangeArg The name of the RabbitMQ exchange to send to.
                         * @param routingKeyArg The routing key.
                         * @param message The Message to send.
                         * @param mandatory The mandatory flag.
                         * @param correlationData The correlation data.
                         * @throws Exception If thrown by RabbitMQ API methods
                         */
                        // @ts-ignore
                        public doSend(channel: Channel, exchangeArg: java.lang.String | string, routingKeyArg: java.lang.String | string, message: Message, mandatory: boolean, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): void
                        // @ts-ignore
                        sendToRabbit(channel: Channel, exchange: java.lang.String | string, routingKey: java.lang.String | string, mandatory: boolean, message: Message): void
                        /**
                         * Check whether the given Channel is locally transacted, that is, whether its transaction is managed by this
                         * template's Channel handling and not by an external transaction coordinator.
                         * @param channel the Channel to check
                         * @return whether the given Channel is locally transacted
                         * @see ConnectionFactoryUtils#isChannelTransactional
                         * @see #isChannelTransacted
                         */
                        // @ts-ignore
                        isChannelLocallyTransacted(channel: Channel): boolean
                        /**
                         * Add this template as a confirms listener for the provided channel.
                         * @param channel the channel.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public addListener(channel: Channel): void
                        // @ts-ignore
                        public handleConfirm(pendingConfirm: org.springframework.amqp.rabbit.connection.PendingConfirm, ack: boolean): void
                        // @ts-ignore
                        public handleReturn(replyCode: number /*int*/, replyText: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string, properties: BasicProperties, body: number /*byte*/[]): void
                        // @ts-ignore
                        public isConfirmListener(): boolean
                        // @ts-ignore
                        public isReturnListener(): boolean
                        // @ts-ignore
                        public revoke(channel: Channel): void
                        // @ts-ignore
                        public getUUID(): string
                        // @ts-ignore
                        public onMessage(message: Message): void
                    }
                }
            }
        }
    }
}
