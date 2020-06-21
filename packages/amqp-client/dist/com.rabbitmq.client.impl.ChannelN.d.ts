declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Main interface to AMQP protocol functionality. Public API -
                 * Implementation of all AMQChannels except channel zero.
                 * <p>
                 * To open a channel,
                 * <pre>
                 * {@link Connection} conn = ...;
                 * {@link ChannelN} ch1 = conn.{@link Connection#createChannel createChannel}();
                 * </pre>
                 */
                // @ts-ignore
                class ChannelN extends com.rabbitmq.client.impl.AMQChannel implements com.rabbitmq.client.Channel {
                    /**
                     * Construct a new channel on the given connection with the given
                     * channel number. Usually not called directly - call
                     * Connection.createChannel instead.
                     * @see Connection#createChannel
                     * @param connection The connection associated with this channel
                     * @param channelNumber The channel number to be associated with this channel
                     * @param workService service for managing this channel's consumer callbacks
                     */
                    // @ts-ignore
                    constructor(connection: com.rabbitmq.client.impl.AMQConnection, channelNumber: number /*int*/, workService: com.rabbitmq.client.impl.ConsumerWorkService)
                    /**
                     * Construct a new channel on the given connection with the given
                     * channel number. Usually not called directly - call
                     * Connection.createChannel instead.
                     * @see Connection#createChannel
                     * @param connection The connection associated with this channel
                     * @param channelNumber The channel number to be associated with this channel
                     * @param workService service for managing this channel's consumer callbacks
                     * @param metricsCollector service for managing metrics
                     */
                    // @ts-ignore
                    constructor(connection: com.rabbitmq.client.impl.AMQConnection, channelNumber: number /*int*/, workService: com.rabbitmq.client.impl.ConsumerWorkService, metricsCollector: com.rabbitmq.client.MetricsCollector)
                    // @ts-ignore
                    readonly metricsCollector: com.rabbitmq.client.MetricsCollector
                    /**
                     * Package method: open the channel.
                     * This is only called from {@link ChannelManager}.
                     * @throws IOException if any problem is encountered
                     */
                    // @ts-ignore
                    public open(): void
                    // @ts-ignore
                    public addReturnListener(listener: com.rabbitmq.client.ReturnListener): void
                    // @ts-ignore
                    public addReturnListener(returnCallback: com.rabbitmq.client.ReturnCallback): com.rabbitmq.client.ReturnListener
                    // @ts-ignore
                    public removeReturnListener(listener: com.rabbitmq.client.ReturnListener): boolean
                    // @ts-ignore
                    public clearReturnListeners(): void
                    // @ts-ignore
                    public addConfirmListener(listener: com.rabbitmq.client.ConfirmListener): void
                    // @ts-ignore
                    public addConfirmListener(ackCallback: com.rabbitmq.client.ConfirmCallback, nackCallback: com.rabbitmq.client.ConfirmCallback): com.rabbitmq.client.ConfirmListener
                    // @ts-ignore
                    public removeConfirmListener(listener: com.rabbitmq.client.ConfirmListener): boolean
                    // @ts-ignore
                    public clearConfirmListeners(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public waitForConfirms(): boolean
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public waitForConfirms(timeout: number /*long*/): boolean
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public waitForConfirmsOrDie(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public waitForConfirmsOrDie(timeout: number /*long*/): void
                    /**
                     * Returns the current default consumer.
                     */
                    // @ts-ignore
                    public getDefaultConsumer(): com.rabbitmq.client.Consumer
                    /**
                     * Sets the current default consumer.
                     * A null argument is interpreted to mean "do not use a default consumer".
                     */
                    // @ts-ignore
                    public setDefaultConsumer(consumer: com.rabbitmq.client.Consumer): void
                    /**
                     * Protected API - overridden to quiesce consumer work and broadcast the signal
                     * to all consumers after calling the superclass's method.
                     */
                    // @ts-ignore
                    public processShutdownSignal(signal: com.rabbitmq.client.ShutdownSignalException, ignoreClosed: boolean, notifyRpc: boolean): void
                    /**
                     * Protected API - Filters the inbound command stream, processing
                     * Basic.Deliver, Basic.Return and Channel.Close specially.  If
                     * we're in quiescing mode, all inbound commands are ignored,
                     * except for Channel.Close and Channel.CloseOk.
                     */
                    // @ts-ignore
                    public processAsync(command: com.rabbitmq.client.Command): boolean
                    // @ts-ignore
                    processDelivery(command: com.rabbitmq.client.Command, method: com.rabbitmq.client.impl.AMQImpl.Basic.Deliver): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public close(): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public close(closeCode: number /*int*/, closeMessage: java.lang.String | string): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public abort(): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public abort(closeCode: number /*int*/, closeMessage: java.lang.String | string): void
                    /**
                     * Protected API - Close channel with code and message, indicating
                     * the source of the closure and a causing exception (null if
                     * none).
                     * @param closeCode the close code (See under "Reply Codes" in the AMQP specification)
                     * @param closeMessage a message indicating the reason for closing the connection
                     * @param initiatedByApplication true if this comes from an API call, false otherwise
                     * @param cause exception triggering close
                     * @param abort true if we should close and ignore errors
                     * @throws IOException if an error is encountered
                     */
                    // @ts-ignore
                    close(closeCode: number /*int*/, closeMessage: java.lang.String | string, initiatedByApplication: boolean, cause: java.lang.Throwable | Error, abort: boolean): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicQos(prefetchSize: number /*int*/, prefetchCount: number /*int*/, global: boolean): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicQos(prefetchCount: number /*int*/, global: boolean): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicQos(prefetchCount: number /*int*/): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicPublish(exchange: java.lang.String | string, routingKey: java.lang.String | string, props: com.rabbitmq.client.AMQP.BasicProperties, body: number /*byte*/[]): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicPublish(exchange: java.lang.String | string, routingKey: java.lang.String | string, mandatory: boolean, props: com.rabbitmq.client.AMQP.BasicProperties, body: number /*byte*/[]): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicPublish(exchange: java.lang.String | string, routingKey: java.lang.String | string, mandatory: boolean, immediate: boolean, props: com.rabbitmq.client.AMQP.BasicProperties, body: number /*byte*/[]): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public exchangeDeclare(exchange: java.lang.String | string, type: java.lang.String | string, durable: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.impl.AMQImpl.Exchange.DeclareOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public exchangeDeclare(exchange: java.lang.String | string, type: com.rabbitmq.client.BuiltinExchangeType, durable: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.impl.AMQImpl.Exchange.DeclareOk
                    // @ts-ignore
                    public exchangeDeclareNoWait(exchange: java.lang.String | string, type: java.lang.String | string, durable: boolean, autoDelete: boolean, internal: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                    // @ts-ignore
                    public exchangeDeclareNoWait(exchange: java.lang.String | string, type: com.rabbitmq.client.BuiltinExchangeType, durable: boolean, autoDelete: boolean, internal: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public exchangeDeclare(exchange: java.lang.String | string, type: java.lang.String | string, durable: boolean, autoDelete: boolean, internal: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.impl.AMQImpl.Exchange.DeclareOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public exchangeDeclare(exchange: java.lang.String | string, type: com.rabbitmq.client.BuiltinExchangeType, durable: boolean, autoDelete: boolean, internal: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.impl.AMQImpl.Exchange.DeclareOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public exchangeDeclare(exchange: java.lang.String | string, type: java.lang.String | string, durable: boolean): com.rabbitmq.client.impl.AMQImpl.Exchange.DeclareOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public exchangeDeclare(exchange: java.lang.String | string, type: com.rabbitmq.client.BuiltinExchangeType, durable: boolean): com.rabbitmq.client.impl.AMQImpl.Exchange.DeclareOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public exchangeDeclare(exchange: java.lang.String | string, type: java.lang.String | string): com.rabbitmq.client.impl.AMQImpl.Exchange.DeclareOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public exchangeDeclare(exchange: java.lang.String | string, type: com.rabbitmq.client.BuiltinExchangeType): com.rabbitmq.client.impl.AMQImpl.Exchange.DeclareOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public exchangeDeclarePassive(exchange: java.lang.String | string): com.rabbitmq.client.impl.AMQImpl.Exchange.DeclareOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public exchangeDelete(exchange: java.lang.String | string, ifUnused: boolean): com.rabbitmq.client.impl.AMQImpl.Exchange.DeleteOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public exchangeDeleteNoWait(exchange: java.lang.String | string, ifUnused: boolean): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public exchangeDelete(exchange: java.lang.String | string): com.rabbitmq.client.impl.AMQImpl.Exchange.DeleteOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public exchangeBind(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.impl.AMQImpl.Exchange.BindOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public exchangeBindNoWait(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public exchangeBind(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string): com.rabbitmq.client.impl.AMQImpl.Exchange.BindOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public exchangeUnbind(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.impl.AMQImpl.Exchange.UnbindOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public exchangeUnbind(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string): com.rabbitmq.client.impl.AMQImpl.Exchange.UnbindOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public exchangeUnbindNoWait(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public queueDeclare(queue: java.lang.String | string, durable: boolean, exclusive: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.impl.AMQImpl.Queue.DeclareOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public queueDeclare(): com.rabbitmq.client.AMQP.Queue.DeclareOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public queueDeclareNoWait(queue: java.lang.String | string, durable: boolean, exclusive: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public queueDeclarePassive(queue: java.lang.String | string): com.rabbitmq.client.impl.AMQImpl.Queue.DeclareOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public messageCount(queue: java.lang.String | string): number /*long*/
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public consumerCount(queue: java.lang.String | string): number /*long*/
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public queueDelete(queue: java.lang.String | string, ifUnused: boolean, ifEmpty: boolean): com.rabbitmq.client.impl.AMQImpl.Queue.DeleteOk
                    // @ts-ignore
                    public queueDeleteNoWait(queue: java.lang.String | string, ifUnused: boolean, ifEmpty: boolean): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public queueDelete(queue: java.lang.String | string): com.rabbitmq.client.impl.AMQImpl.Queue.DeleteOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public queueBind(queue: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.impl.AMQImpl.Queue.BindOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public queueBind(queue: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string): com.rabbitmq.client.impl.AMQImpl.Queue.BindOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public queueBindNoWait(queue: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public queueUnbind(queue: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.impl.AMQImpl.Queue.UnbindOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public queuePurge(queue: java.lang.String | string): com.rabbitmq.client.impl.AMQImpl.Queue.PurgeOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public queueUnbind(queue: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string): com.rabbitmq.client.impl.AMQImpl.Queue.UnbindOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicGet(queue: java.lang.String | string, autoAck: boolean): com.rabbitmq.client.GetResponse
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicAck(deliveryTag: number /*long*/, multiple: boolean): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicNack(deliveryTag: number /*long*/, multiple: boolean, requeue: boolean): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicReject(deliveryTag: number /*long*/, requeue: boolean): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicConsume(queue: java.lang.String | string, callback: com.rabbitmq.client.Consumer): string
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicConsume(queue: java.lang.String | string, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback): string
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicConsume(queue: java.lang.String | string, deliverCallback: com.rabbitmq.client.DeliverCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicConsume(queue: java.lang.String | string, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicConsume(queue: java.lang.String | string, autoAck: boolean, callback: com.rabbitmq.client.Consumer): string
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicConsume(queue: java.lang.String | string, autoAck: boolean, deliverCallback: com.rabbitmq.client.DeliverCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicConsume(queue: java.lang.String | string, autoAck: boolean, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback): string
                    // @ts-ignore
                    public basicConsume(queue: java.lang.String | string, autoAck: boolean, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicConsume(queue: java.lang.String | string, autoAck: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, callback: com.rabbitmq.client.Consumer): string
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicConsume(queue: java.lang.String | string, autoAck: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback): string
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicConsume(queue: java.lang.String | string, autoAck: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: com.rabbitmq.client.DeliverCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicConsume(queue: java.lang.String | string, autoAck: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, callback: com.rabbitmq.client.Consumer): string
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback): string
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, deliverCallback: com.rabbitmq.client.DeliverCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, noLocal: boolean, exclusive: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback): string
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, noLocal: boolean, exclusive: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: com.rabbitmq.client.DeliverCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                    // @ts-ignore
                    public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, noLocal: boolean, exclusive: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, noLocal: boolean, exclusive: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, callback: com.rabbitmq.client.Consumer): string
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicCancel(consumerTag: java.lang.String | string): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicRecover(): com.rabbitmq.client.impl.AMQImpl.Basic.RecoverOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public basicRecover(requeue: boolean): com.rabbitmq.client.impl.AMQImpl.Basic.RecoverOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public txSelect(): com.rabbitmq.client.impl.AMQImpl.Tx.SelectOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public txCommit(): com.rabbitmq.client.impl.AMQImpl.Tx.CommitOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public txRollback(): com.rabbitmq.client.impl.AMQImpl.Tx.RollbackOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public confirmSelect(): com.rabbitmq.client.impl.AMQImpl.Confirm.SelectOk
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public getNextPublishSeqNo(): number /*long*/
                    // @ts-ignore
                    public asyncRpc(method: com.rabbitmq.client.Method): void
                    // @ts-ignore
                    public rpc(method: com.rabbitmq.client.Method): com.rabbitmq.client.impl.AMQCommand
                    // @ts-ignore
                    public asyncCompletableRpc(method: com.rabbitmq.client.Method): java.util.concurrent.CompletableFuture<com.rabbitmq.client.Command>
                    // @ts-ignore
                    public enqueueRpc(k: com.rabbitmq.client.impl.AMQChannel.RpcContinuation): void
                    // @ts-ignore
                    markRpcFinished(): void
                }
            }
        }
    }
}
