declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                /**
                 * Provides asynchronous send and receive operations returning a {@link ListenableFuture}
                 * allowing the caller to obtain the reply later, using {@code get()} or a callback.
                 * <p>
                 * When confirms are enabled, the future has a confirm property which is itself a
                 * {@link ListenableFuture}. If the reply is received before the publisher confirm,
                 * the confirm is discarded since the reply implicitly indicates the message was
                 * published.
                 * <p>
                 * Returned (undeliverable) request messages are presented as a
                 * {@link AmqpMessageReturnedException} cause of an
                 * {@link java.util.concurrent.ExecutionException}.
                 * <p>
                 * Internally, the template uses a {@link RabbitTemplate} and an
                 * {@link AbstractMessageListenerContainer} either provided or constructed internally
                 * (a {@link SimpleMessageListenerContainer}).
                 * If an external {@link RabbitTemplate} is provided and confirms/returns are enabled,
                 * it must not previously have had callbacks registered because this object needs to
                 * be the callback.
                 * @author Gary Russell
                 * @author Artem Bilan
                 * @since 1.6
                 */
                // @ts-ignore
                class AsyncRabbitTemplate extends java.lang.Object implements org.springframework.amqp.rabbit.listener.api.ChannelAwareMessageListener, org.springframework.amqp.rabbit.core.RabbitTemplate.ReturnCallback, org.springframework.amqp.rabbit.core.RabbitTemplate.ConfirmCallback {
                    /**
                     * Construct an instance using the provided arguments. Replies will be
                     * routed to the default exchange using the reply queue name as the routing
                     * key.
                     * @param connectionFactory the connection factory.
                     * @param exchange the default exchange to which requests will be sent.
                     * @param routingKey the default routing key.
                     * @param replyQueue the name of the reply queue to listen for replies.
                     */
                    // @ts-ignore
                    constructor(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory, exchange: java.lang.String | string, routingKey: java.lang.String | string, replyQueue: java.lang.String | string)
                    /**
                     * Construct an instance using the provided arguments. If 'replyAddress' is null,
                     * replies will be routed to the default exchange using the reply queue name as the
                     * routing key. Otherwise it should have the form exchange/routingKey and must
                     * cause messages to be routed to the reply queue.
                     * @param connectionFactory the connection factory.
                     * @param exchange the default exchange to which requests will be sent.
                     * @param routingKey the default routing key.
                     * @param replyQueue the name of the reply queue to listen for replies.
                     * @param replyAddress the reply address (exchange/routingKey).
                     */
                    // @ts-ignore
                    constructor(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory, exchange: java.lang.String | string, routingKey: java.lang.String | string, replyQueue: java.lang.String | string, replyAddress: java.lang.String | string)
                    /**
                     * Construct an instance using the provided arguments. The first queue the container
                     * is configured to listen to will be used as the reply queue. Replies will be
                     * routed using the default exchange with that queue name as the routing key.
                     * @param template a {#link RabbitTemplate}
                     * @param container a {#link AbstractMessageListenerContainer}.
                     */
                    // @ts-ignore
                    constructor(template: org.springframework.amqp.rabbit.core.RabbitTemplate, container: org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer)
                    /**
                     * Construct an instance using the provided arguments. The first queue the container
                     * is configured to listen to will be used as the reply queue. If 'replyAddress' is
                     * null, replies will be routed using the default exchange with that queue name as the
                     * routing key. Otherwise it should have the form exchange/routingKey and must
                     * cause messages to be routed to the reply queue.
                     * @param template a {#link RabbitTemplate}.
                     * @param container a {#link AbstractMessageListenerContainer}.
                     * @param replyAddress the reply address.
                     */
                    // @ts-ignore
                    constructor(template: org.springframework.amqp.rabbit.core.RabbitTemplate, container: org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer, replyAddress: java.lang.String | string)
                    /**
                     * Construct an instance using the provided arguments. "Direct replyTo" is used for
                     * replies.
                     * @param connectionFactory the connection factory.
                     * @param exchange the default exchange to which requests will be sent.
                     * @param routingKey the default routing key.
                     * @since 2.0
                     */
                    // @ts-ignore
                    constructor(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory, exchange: java.lang.String | string, routingKey: java.lang.String | string)
                    /**
                     * Construct an instance using the provided arguments. "Direct replyTo" is used for
                     * replies.
                     * @param template a {#link RabbitTemplate}
                     * @since 2.0
                     */
                    // @ts-ignore
                    constructor(template: org.springframework.amqp.rabbit.core.RabbitTemplate)
                    // @ts-ignore
                    public static readonly DEFAULT_RECEIVE_TIMEOUT: number /*int*/
                    /**
                     * @param autoStartup true for auto start.
                     * @see #isAutoStartup()
                     */
                    // @ts-ignore
                    public setAutoStartup(autoStartup: boolean): void
                    /**
                     * @param phase the phase.
                     * @see #getPhase()
                     */
                    // @ts-ignore
                    public setPhase(phase: number /*int*/): void
                    /**
                     * Set to true to enable the receipt of returned messages that cannot be delivered
                     * in the form of a {@link AmqpMessageReturnedException}.
                     * @param mandatory true to enable returns.
                     */
                    // @ts-ignore
                    public setMandatory(mandatory: boolean): void
                    /**
                     * @param mandatoryExpression a SpEL {#link Expression} to evaluate against each request
                     *  message. The result of the evaluation must be a {@code boolean} value.
                     * @since 2.0
                     */
                    // @ts-ignore
                    public setMandatoryExpression(mandatoryExpression: Expression): void
                    /**
                     * @param mandatoryExpression a SpEL {#link Expression} to evaluate against each request
                     *  message. The result of the evaluation must be a {@code boolean} value.
                     * @since 2.0
                     */
                    // @ts-ignore
                    public setMandatoryExpressionString(mandatoryExpression: java.lang.String | string): void
                    /**
                     * Set to true to enable publisher confirms. When enabled, the {@link RabbitFuture}
                     * returned by the send and receive operation will have a
                     * {@code ListenableFuture<Boolean>} in its {@code confirm} property.
                     * @param enableConfirms true to enable publisher confirms.
                     */
                    // @ts-ignore
                    public setEnableConfirms(enableConfirms: boolean): void
                    // @ts-ignore
                    public getBeanName(): string
                    // @ts-ignore
                    public setBeanName(beanName: java.lang.String | string): void
                    /**
                     * @return a reference to the underlying connection factory in the
                     *  {#link RabbitTemplate}.
                     */
                    // @ts-ignore
                    public getConnectionFactory(): org.springframework.amqp.rabbit.connection.ConnectionFactory
                    /**
                     * Set the receive timeout - the future returned by the send and receive
                     * methods will be canceled when this timeout expires. {@code <= 0} means
                     * futures never expire. Beware that this will cause a memory leak if a
                     * reply is not received. Default: 30000 (30 seconds).
                     * @param receiveTimeout the timeout in milliseconds.
                     */
                    // @ts-ignore
                    public setReceiveTimeout(receiveTimeout: number /*long*/): void
                    /**
                     * Set the task scheduler to expire timed out futures.
                     * @param taskScheduler the task scheduler
                     * @see #setReceiveTimeout(long)
                     */
                    // @ts-ignore
                    public setTaskScheduler(taskScheduler: TaskScheduler): void
                    /**
                     * @return a reference to the underlying {#link RabbitTemplate}'s
                     *  {@link MessageConverter}.
                     */
                    // @ts-ignore
                    public getMessageConverter(): MessageConverter
                    // @ts-ignore
                    public sendAndReceive(message: Message): org.springframework.amqp.rabbit.AsyncRabbitTemplate.RabbitMessageFuture
                    // @ts-ignore
                    public sendAndReceive(routingKey: java.lang.String | string, message: Message): org.springframework.amqp.rabbit.AsyncRabbitTemplate.RabbitMessageFuture
                    // @ts-ignore
                    public sendAndReceive(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: Message): org.springframework.amqp.rabbit.AsyncRabbitTemplate.RabbitMessageFuture
                    // @ts-ignore
                    public convertSendAndReceive<C>(object: java.lang.Object | any): org.springframework.amqp.rabbit.AsyncRabbitTemplate.RabbitConverterFuture<C>
                    // @ts-ignore
                    public convertSendAndReceive<C>(routingKey: java.lang.String | string, object: java.lang.Object | any): org.springframework.amqp.rabbit.AsyncRabbitTemplate.RabbitConverterFuture<C>
                    // @ts-ignore
                    public convertSendAndReceive<C>(exchange: java.lang.String | string, routingKey: java.lang.String | string, object: java.lang.Object | any): org.springframework.amqp.rabbit.AsyncRabbitTemplate.RabbitConverterFuture<C>
                    // @ts-ignore
                    public convertSendAndReceive<C>(object: java.lang.Object | any, messagePostProcessor: MessagePostProcessor): org.springframework.amqp.rabbit.AsyncRabbitTemplate.RabbitConverterFuture<C>
                    // @ts-ignore
                    public convertSendAndReceive<C>(routingKey: java.lang.String | string, object: java.lang.Object | any, messagePostProcessor: MessagePostProcessor): org.springframework.amqp.rabbit.AsyncRabbitTemplate.RabbitConverterFuture<C>
                    // @ts-ignore
                    public convertSendAndReceive<C>(exchange: java.lang.String | string, routingKey: java.lang.String | string, object: java.lang.Object | any, messagePostProcessor: MessagePostProcessor): org.springframework.amqp.rabbit.AsyncRabbitTemplate.RabbitConverterFuture<C>
                    // @ts-ignore
                    public convertSendAndReceiveAsType<C>(object: java.lang.Object | any, responseType: object): org.springframework.amqp.rabbit.AsyncRabbitTemplate.RabbitConverterFuture<C>
                    // @ts-ignore
                    public convertSendAndReceiveAsType<C>(routingKey: java.lang.String | string, object: java.lang.Object | any, responseType: object): org.springframework.amqp.rabbit.AsyncRabbitTemplate.RabbitConverterFuture<C>
                    // @ts-ignore
                    public convertSendAndReceiveAsType<C>(exchange: java.lang.String | string, routingKey: java.lang.String | string, object: java.lang.Object | any, responseType: object): org.springframework.amqp.rabbit.AsyncRabbitTemplate.RabbitConverterFuture<C>
                    // @ts-ignore
                    public convertSendAndReceiveAsType<C>(object: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, responseType: object): org.springframework.amqp.rabbit.AsyncRabbitTemplate.RabbitConverterFuture<C>
                    // @ts-ignore
                    public convertSendAndReceiveAsType<C>(routingKey: java.lang.String | string, object: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, responseType: object): org.springframework.amqp.rabbit.AsyncRabbitTemplate.RabbitConverterFuture<C>
                    // @ts-ignore
                    public convertSendAndReceiveAsType<C>(exchange: java.lang.String | string, routingKey: java.lang.String | string, object: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, responseType: object): org.springframework.amqp.rabbit.AsyncRabbitTemplate.RabbitConverterFuture<C>
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
                    public onMessage(message: Message, channel: Channel): void
                    // @ts-ignore
                    public returnedMessage(message: Message, replyCode: number /*int*/, replyText: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string): void
                    // @ts-ignore
                    public confirm(correlationData: org.springframework.amqp.rabbit.connection.CorrelationData, ack: boolean, cause: java.lang.String | string): void
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
