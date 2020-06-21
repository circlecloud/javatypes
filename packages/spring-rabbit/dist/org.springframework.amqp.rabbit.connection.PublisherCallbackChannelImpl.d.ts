declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * Channel wrapper to allow a single listener able to handle
                     * confirms from multiple channels.
                     * @author Gary Russell
                     * @author Arnaud Cogoluègnes
                     * @author Artem Bilan
                     * @since 1.0.1
                     */
                    // @ts-ignore
                    class PublisherCallbackChannelImpl extends java.lang.Object implements org.springframework.amqp.rabbit.connection.PublisherCallbackChannel {
                        /**
                         * Create a {@link PublisherCallbackChannelImpl} instance based on the provided
                         * delegate.
                         * @param delegate the {#link Channel} to delegate.
                         * @deprecated since 2.2.1 in favor of
                         *  {#link #PublisherCallbackChannelImpl(Channel, ExecutorService)}
                         */
                        // @ts-ignore
                        constructor(delegate: Channel)
                        // @ts-ignore
                        constructor(delegate: Channel, executor: java.util.concurrent.ExecutorService)
                        // @ts-ignore
                        public setAfterAckCallback(callback: java.util.function$.Consumer<Channel>): void
                        // @ts-ignore
                        public addShutdownListener(listener: ShutdownListener): void
                        // @ts-ignore
                        public removeShutdownListener(listener: ShutdownListener): void
                        // @ts-ignore
                        public getCloseReason(): ShutdownSignalException
                        // @ts-ignore
                        public notifyListeners(): void
                        // @ts-ignore
                        public isOpen(): boolean
                        // @ts-ignore
                        public getChannelNumber(): number /*int*/
                        // @ts-ignore
                        public getConnection(): org.springframework.amqp.rabbit.connection.Connection
                        // @ts-ignore
                        public close(closeCode: number /*int*/, closeMessage: java.lang.String | string): void
                        // @ts-ignore
                        public abort(): void
                        // @ts-ignore
                        public abort(closeCode: number /*int*/, closeMessage: java.lang.String | string): void
                        // @ts-ignore
                        public getDefaultConsumer(): Consumer
                        // @ts-ignore
                        public setDefaultConsumer(consumer: Consumer): void
                        // @ts-ignore
                        public basicQos(prefetchSize: number /*int*/, prefetchCount: number /*int*/, global: boolean): void
                        /**
                         * Added to the 3.3.x client.
                         * @since 1.3.3
                         */
                        // @ts-ignore
                        public basicQos(prefetchCount: number /*int*/, global: boolean): void
                        // @ts-ignore
                        public basicQos(prefetchCount: number /*int*/): void
                        // @ts-ignore
                        public basicPublish(exchange: java.lang.String | string, routingKey: java.lang.String | string, props: BasicProperties, body: number /*byte*/[]): void
                        // @ts-ignore
                        public basicPublish(exchange: java.lang.String | string, routingKey: java.lang.String | string, mandatory: boolean, immediate: boolean, props: BasicProperties, body: number /*byte*/[]): void
                        // @ts-ignore
                        public basicPublish(exchange: java.lang.String | string, routingKey: java.lang.String | string, mandatory: boolean, props: BasicProperties, body: number /*byte*/[]): void
                        // @ts-ignore
                        public exchangeDeclare(exchange: java.lang.String | string, type: java.lang.String | string): DeclareOk
                        // @ts-ignore
                        public exchangeDeclare(exchange: java.lang.String | string, type: BuiltinExchangeType): DeclareOk
                        // @ts-ignore
                        public exchangeDeclare(exchange: java.lang.String | string, type: java.lang.String | string, durable: boolean): DeclareOk
                        // @ts-ignore
                        public exchangeDeclare(exchange: java.lang.String | string, type: BuiltinExchangeType, durable: boolean): DeclareOk
                        // @ts-ignore
                        public exchangeDeclare(exchange: java.lang.String | string, type: java.lang.String | string, durable: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): DeclareOk
                        // @ts-ignore
                        public exchangeDeclare(exchange: java.lang.String | string, type: BuiltinExchangeType, durable: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): DeclareOk
                        // @ts-ignore
                        public exchangeDeclare(exchange: java.lang.String | string, type: java.lang.String | string, durable: boolean, autoDelete: boolean, internal: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): DeclareOk
                        // @ts-ignore
                        public exchangeDeclare(exchange: java.lang.String | string, type: BuiltinExchangeType, durable: boolean, autoDelete: boolean, internal: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): DeclareOk
                        // @ts-ignore
                        public exchangeDeclarePassive(name: java.lang.String | string): DeclareOk
                        // @ts-ignore
                        public exchangeDelete(exchange: java.lang.String | string, ifUnused: boolean): DeleteOk
                        // @ts-ignore
                        public exchangeDelete(exchange: java.lang.String | string): DeleteOk
                        // @ts-ignore
                        public exchangeBind(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string): BindOk
                        // @ts-ignore
                        public exchangeBind(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): BindOk
                        // @ts-ignore
                        public exchangeUnbind(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string): UnbindOk
                        // @ts-ignore
                        public exchangeUnbind(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): UnbindOk
                        // @ts-ignore
                        public queueDeclare(): com.rabbitmq.client.AMQP.Queue.DeclareOk
                        // @ts-ignore
                        public queueDeclare(queue: java.lang.String | string, durable: boolean, exclusive: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Queue.DeclareOk
                        // @ts-ignore
                        public queueDeclarePassive(queue: java.lang.String | string): com.rabbitmq.client.AMQP.Queue.DeclareOk
                        // @ts-ignore
                        public queueDelete(queue: java.lang.String | string): com.rabbitmq.client.AMQP.Queue.DeleteOk
                        // @ts-ignore
                        public queueDelete(queue: java.lang.String | string, ifUnused: boolean, ifEmpty: boolean): com.rabbitmq.client.AMQP.Queue.DeleteOk
                        // @ts-ignore
                        public queueBind(queue: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string): com.rabbitmq.client.AMQP.Queue.BindOk
                        // @ts-ignore
                        public queueBind(queue: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Queue.BindOk
                        // @ts-ignore
                        public queueUnbind(queue: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string): com.rabbitmq.client.AMQP.Queue.UnbindOk
                        // @ts-ignore
                        public queueUnbind(queue: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Queue.UnbindOk
                        // @ts-ignore
                        public queuePurge(queue: java.lang.String | string): PurgeOk
                        // @ts-ignore
                        public basicGet(queue: java.lang.String | string, autoAck: boolean): GetResponse
                        // @ts-ignore
                        public basicAck(deliveryTag: number /*long*/, multiple: boolean): void
                        // @ts-ignore
                        public basicNack(deliveryTag: number /*long*/, multiple: boolean, requeue: boolean): void
                        // @ts-ignore
                        public basicReject(deliveryTag: number /*long*/, requeue: boolean): void
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, callback: Consumer): string
                        /**
                         * Added to the 5.0.x client.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, deliverCallback: DeliverCallback, cancelCallback: CancelCallback): string
                        /**
                         * Added to the 5.0.x client.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, deliverCallback: DeliverCallback, shutdownSignalCallback: ConsumerShutdownSignalCallback): string
                        /**
                         * Added to the 5.0.x client.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, deliverCallback: DeliverCallback, cancelCallback: CancelCallback, shutdownSignalCallback: ConsumerShutdownSignalCallback): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, callback: Consumer): string
                        /**
                         * Added to the 5.0.x client.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, deliverCallback: DeliverCallback, cancelCallback: CancelCallback): string
                        /**
                         * Added to the 5.0.x client.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, deliverCallback: DeliverCallback, shutdownSignalCallback: ConsumerShutdownSignalCallback): string
                        /**
                         * Added to the 5.0.x client.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, deliverCallback: DeliverCallback, cancelCallback: CancelCallback, shutdownSignalCallback: ConsumerShutdownSignalCallback): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, callback: Consumer): string
                        /**
                         * Added to the 5.0.x client.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, deliverCallback: DeliverCallback, cancelCallback: CancelCallback): string
                        /**
                         * Added to the 5.0.x client.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, deliverCallback: DeliverCallback, shutdownSignalCallback: ConsumerShutdownSignalCallback): string
                        /**
                         * Added to the 5.0.x client.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, deliverCallback: DeliverCallback, cancelCallback: CancelCallback, shutdownSignalCallback: ConsumerShutdownSignalCallback): string
                        /**
                         * Added to the 3.3.x client.
                         * @since 1.3.3
                         */
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, callback: Consumer): string
                        /**
                         * Added to the 5.0.x client.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: DeliverCallback, cancelCallback: CancelCallback): string
                        /**
                         * Added to the 5.0.x client.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: DeliverCallback, shutdownSignalCallback: ConsumerShutdownSignalCallback): string
                        /**
                         * Added to the 5.0.x client.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: DeliverCallback, cancelCallback: CancelCallback, shutdownSignalCallback: ConsumerShutdownSignalCallback): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, noLocal: boolean, exclusive: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, callback: Consumer): string
                        /**
                         * Added to the 5.0.x client.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, noLocal: boolean, exclusive: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: DeliverCallback, cancelCallback: CancelCallback): string
                        /**
                         * Added to the 5.0.x client.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, noLocal: boolean, exclusive: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: DeliverCallback, shutdownSignalCallback: ConsumerShutdownSignalCallback): string
                        /**
                         * Added to the 5.0.x client.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, noLocal: boolean, exclusive: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: DeliverCallback, cancelCallback: CancelCallback, shutdownSignalCallback: ConsumerShutdownSignalCallback): string
                        // @ts-ignore
                        public basicCancel(consumerTag: java.lang.String | string): void
                        // @ts-ignore
                        public basicRecover(): RecoverOk
                        // @ts-ignore
                        public basicRecover(requeue: boolean): RecoverOk
                        // @ts-ignore
                        public txSelect(): SelectOk
                        // @ts-ignore
                        public txCommit(): CommitOk
                        // @ts-ignore
                        public txRollback(): RollbackOk
                        // @ts-ignore
                        public confirmSelect(): com.rabbitmq.client.AMQP.Confirm.SelectOk
                        // @ts-ignore
                        public getNextPublishSeqNo(): number /*long*/
                        // @ts-ignore
                        public waitForConfirms(): boolean
                        // @ts-ignore
                        public waitForConfirms(timeout: number /*long*/): boolean
                        // @ts-ignore
                        public waitForConfirmsOrDie(): void
                        // @ts-ignore
                        public waitForConfirmsOrDie(timeout: number /*long*/): void
                        // @ts-ignore
                        public asyncRpc(method: Method): void
                        // @ts-ignore
                        public rpc(method: Method): Command
                        // @ts-ignore
                        public addConfirmListener(listener: ConfirmListener): void
                        // @ts-ignore
                        public addConfirmListener(ackCallback: ConfirmCallback, nackCallback: ConfirmCallback): ConfirmListener
                        // @ts-ignore
                        public removeConfirmListener(listener: ConfirmListener): boolean
                        // @ts-ignore
                        public clearConfirmListeners(): void
                        // @ts-ignore
                        public addReturnListener(listener: ReturnListener): void
                        /**
                         * Added to the 5.0.x client.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public addReturnListener(returnCallback: ReturnCallback): ReturnListener
                        // @ts-ignore
                        public removeReturnListener(listener: ReturnListener): boolean
                        // @ts-ignore
                        public clearReturnListeners(): void
                        // @ts-ignore
                        public exchangeBindNoWait(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        // @ts-ignore
                        public exchangeDeclareNoWait(exchange: java.lang.String | string, type: java.lang.String | string, durable: boolean, autoDelete: boolean, internal: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        // @ts-ignore
                        public exchangeDeclareNoWait(exchange: java.lang.String | string, type: BuiltinExchangeType, durable: boolean, autoDelete: boolean, internal: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        // @ts-ignore
                        public exchangeDeleteNoWait(exchange: java.lang.String | string, ifUnused: boolean): void
                        // @ts-ignore
                        public exchangeUnbindNoWait(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        // @ts-ignore
                        public queueBindNoWait(queue: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        // @ts-ignore
                        public queueDeclareNoWait(queue: java.lang.String | string, durable: boolean, exclusive: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        // @ts-ignore
                        public queueDeleteNoWait(queue: java.lang.String | string, ifUnused: boolean, ifEmpty: boolean): void
                        // @ts-ignore
                        public consumerCount(queue: java.lang.String | string): number /*long*/
                        /**
                         * Added to the 5.0.x client.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public asyncCompletableRpc(method: Method): java.util.concurrent.CompletableFuture<Command>
                        // @ts-ignore
                        public messageCount(queue: java.lang.String | string): number /*long*/
                        // @ts-ignore
                        public getDelegate(): Channel
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        public getPendingConfirmsCount(listener: org.springframework.amqp.rabbit.connection.PublisherCallbackChannel.Listener): number /*int*/
                        // @ts-ignore
                        public getPendingConfirmsCount(): number /*int*/
                        /**
                         * Add the listener and return the internal map of pending confirmations for that listener.
                         * @param listener the listener.
                         */
                        // @ts-ignore
                        public addListener(listener: org.springframework.amqp.rabbit.connection.PublisherCallbackChannel.Listener): void
                        // @ts-ignore
                        public expire(listener: org.springframework.amqp.rabbit.connection.PublisherCallbackChannel.Listener, cutoffTime: number /*long*/): Array<org.springframework.amqp.rabbit.connection.PendingConfirm>
                        // @ts-ignore
                        public handleAck(seq: number /*long*/, multiple: boolean): void
                        // @ts-ignore
                        public handleNack(seq: number /*long*/, multiple: boolean): void
                        // @ts-ignore
                        public addPendingConfirm(listener: org.springframework.amqp.rabbit.connection.PublisherCallbackChannel.Listener, seq: number /*long*/, pendingConfirm: org.springframework.amqp.rabbit.connection.PendingConfirm): void
                        // @ts-ignore
                        public handleReturn(replyCode: number /*int*/, replyText: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string, properties: AMQP.BasicProperties, body: number /*byte*/[]): void
                        // @ts-ignore
                        public shutdownCompleted(cause: ShutdownSignalException): void
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public equals(obj: java.lang.Object | any): boolean
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public static factory(): org.springframework.amqp.rabbit.connection.PublisherCallbackChannelFactory
                    }
                }
            }
        }
    }
}
