declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * {@link com.rabbitmq.client.Channel} implementation that is automatically
                     * recovered during connection recovery.
                     * @since 3.3.0
                     */
                    // @ts-ignore
                    class AutorecoveringChannel extends java.lang.Object implements com.rabbitmq.client.RecoverableChannel {
                        // @ts-ignore
                        constructor(connection: com.rabbitmq.client.impl.recovery.AutorecoveringConnection, delegate: com.rabbitmq.client.impl.recovery.RecoveryAwareChannelN)
                        // @ts-ignore
                        public getChannelNumber(): number /*int*/
                        // @ts-ignore
                        public getConnection(): com.rabbitmq.client.Connection
                        // @ts-ignore
                        public getDelegate(): com.rabbitmq.client.Channel
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        public close(closeCode: number /*int*/, closeMessage: java.lang.String | string): void
                        // @ts-ignore
                        public abort(): void
                        // @ts-ignore
                        public abort(closeCode: number /*int*/, closeMessage: java.lang.String | string): void
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
                        // @ts-ignore
                        public getDefaultConsumer(): com.rabbitmq.client.Consumer
                        // @ts-ignore
                        public setDefaultConsumer(consumer: com.rabbitmq.client.Consumer): void
                        // @ts-ignore
                        public basicQos(prefetchSize: number /*int*/, prefetchCount: number /*int*/, global: boolean): void
                        // @ts-ignore
                        public basicQos(prefetchCount: number /*int*/): void
                        // @ts-ignore
                        public basicQos(prefetchCount: number /*int*/, global: boolean): void
                        // @ts-ignore
                        public basicPublish(exchange: java.lang.String | string, routingKey: java.lang.String | string, props: com.rabbitmq.client.AMQP.BasicProperties, body: number /*byte*/[]): void
                        // @ts-ignore
                        public basicPublish(exchange: java.lang.String | string, routingKey: java.lang.String | string, mandatory: boolean, props: com.rabbitmq.client.AMQP.BasicProperties, body: number /*byte*/[]): void
                        // @ts-ignore
                        public basicPublish(exchange: java.lang.String | string, routingKey: java.lang.String | string, mandatory: boolean, immediate: boolean, props: com.rabbitmq.client.AMQP.BasicProperties, body: number /*byte*/[]): void
                        // @ts-ignore
                        public exchangeDeclare(exchange: java.lang.String | string, type: java.lang.String | string): com.rabbitmq.client.AMQP.Exchange.DeclareOk
                        // @ts-ignore
                        public exchangeDeclare(exchange: java.lang.String | string, type: com.rabbitmq.client.BuiltinExchangeType): com.rabbitmq.client.AMQP.Exchange.DeclareOk
                        // @ts-ignore
                        public exchangeDeclare(exchange: java.lang.String | string, type: java.lang.String | string, durable: boolean): com.rabbitmq.client.AMQP.Exchange.DeclareOk
                        // @ts-ignore
                        public exchangeDeclare(exchange: java.lang.String | string, type: com.rabbitmq.client.BuiltinExchangeType, durable: boolean): com.rabbitmq.client.AMQP.Exchange.DeclareOk
                        // @ts-ignore
                        public exchangeDeclare(exchange: java.lang.String | string, type: java.lang.String | string, durable: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Exchange.DeclareOk
                        // @ts-ignore
                        public exchangeDeclare(exchange: java.lang.String | string, type: com.rabbitmq.client.BuiltinExchangeType, durable: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Exchange.DeclareOk
                        // @ts-ignore
                        public exchangeDeclare(exchange: java.lang.String | string, type: java.lang.String | string, durable: boolean, autoDelete: boolean, internal: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Exchange.DeclareOk
                        // @ts-ignore
                        public exchangeDeclare(exchange: java.lang.String | string, type: com.rabbitmq.client.BuiltinExchangeType, durable: boolean, autoDelete: boolean, internal: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Exchange.DeclareOk
                        // @ts-ignore
                        public exchangeDeclareNoWait(exchange: java.lang.String | string, type: java.lang.String | string, durable: boolean, autoDelete: boolean, internal: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        // @ts-ignore
                        public exchangeDeclareNoWait(exchange: java.lang.String | string, type: com.rabbitmq.client.BuiltinExchangeType, durable: boolean, autoDelete: boolean, internal: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        // @ts-ignore
                        public exchangeDeclarePassive(name: java.lang.String | string): com.rabbitmq.client.AMQP.Exchange.DeclareOk
                        // @ts-ignore
                        public exchangeDelete(exchange: java.lang.String | string, ifUnused: boolean): com.rabbitmq.client.AMQP.Exchange.DeleteOk
                        // @ts-ignore
                        public exchangeDeleteNoWait(exchange: java.lang.String | string, ifUnused: boolean): void
                        // @ts-ignore
                        public exchangeDelete(exchange: java.lang.String | string): com.rabbitmq.client.AMQP.Exchange.DeleteOk
                        // @ts-ignore
                        public exchangeBind(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string): com.rabbitmq.client.AMQP.Exchange.BindOk
                        // @ts-ignore
                        public exchangeBind(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Exchange.BindOk
                        // @ts-ignore
                        public exchangeBindNoWait(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        // @ts-ignore
                        public exchangeUnbind(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string): com.rabbitmq.client.AMQP.Exchange.UnbindOk
                        // @ts-ignore
                        public exchangeUnbind(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Exchange.UnbindOk
                        // @ts-ignore
                        public exchangeUnbindNoWait(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        // @ts-ignore
                        public queueDeclare(): com.rabbitmq.client.AMQP.Queue.DeclareOk
                        // @ts-ignore
                        public queueDeclare(queue: java.lang.String | string, durable: boolean, exclusive: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Queue.DeclareOk
                        // @ts-ignore
                        public queueDeclareNoWait(queue: java.lang.String | string, durable: boolean, exclusive: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        // @ts-ignore
                        public queueDeclarePassive(queue: java.lang.String | string): com.rabbitmq.client.AMQP.Queue.DeclareOk
                        // @ts-ignore
                        public messageCount(queue: java.lang.String | string): number /*long*/
                        // @ts-ignore
                        public consumerCount(queue: java.lang.String | string): number /*long*/
                        // @ts-ignore
                        public queueDelete(queue: java.lang.String | string): com.rabbitmq.client.AMQP.Queue.DeleteOk
                        // @ts-ignore
                        public queueDelete(queue: java.lang.String | string, ifUnused: boolean, ifEmpty: boolean): com.rabbitmq.client.AMQP.Queue.DeleteOk
                        // @ts-ignore
                        public queueDeleteNoWait(queue: java.lang.String | string, ifUnused: boolean, ifEmpty: boolean): void
                        // @ts-ignore
                        public queueBind(queue: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string): com.rabbitmq.client.AMQP.Queue.BindOk
                        // @ts-ignore
                        public queueBind(queue: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Queue.BindOk
                        // @ts-ignore
                        public queueBindNoWait(queue: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        // @ts-ignore
                        public queueUnbind(queue: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string): com.rabbitmq.client.AMQP.Queue.UnbindOk
                        // @ts-ignore
                        public queueUnbind(queue: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Queue.UnbindOk
                        // @ts-ignore
                        public queuePurge(queue: java.lang.String | string): com.rabbitmq.client.AMQP.Queue.PurgeOk
                        // @ts-ignore
                        public basicGet(queue: java.lang.String | string, autoAck: boolean): com.rabbitmq.client.GetResponse
                        // @ts-ignore
                        public basicAck(deliveryTag: number /*long*/, multiple: boolean): void
                        // @ts-ignore
                        public basicNack(deliveryTag: number /*long*/, multiple: boolean, requeue: boolean): void
                        // @ts-ignore
                        public basicReject(deliveryTag: number /*long*/, requeue: boolean): void
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, callback: com.rabbitmq.client.Consumer): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, deliverCallback: com.rabbitmq.client.DeliverCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, callback: com.rabbitmq.client.Consumer): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, deliverCallback: com.rabbitmq.client.DeliverCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, callback: com.rabbitmq.client.Consumer): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, deliverCallback: com.rabbitmq.client.DeliverCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, callback: com.rabbitmq.client.Consumer): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: com.rabbitmq.client.DeliverCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, noLocal: boolean, exclusive: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, callback: com.rabbitmq.client.Consumer): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, noLocal: boolean, exclusive: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, noLocal: boolean, exclusive: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: com.rabbitmq.client.DeliverCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                        // @ts-ignore
                        public basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, noLocal: boolean, exclusive: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                        // @ts-ignore
                        public basicCancel(consumerTag: java.lang.String | string): void
                        // @ts-ignore
                        public basicRecover(): com.rabbitmq.client.AMQP.Basic.RecoverOk
                        // @ts-ignore
                        public basicRecover(requeue: boolean): com.rabbitmq.client.AMQP.Basic.RecoverOk
                        // @ts-ignore
                        public txSelect(): com.rabbitmq.client.AMQP.Tx.SelectOk
                        // @ts-ignore
                        public txCommit(): com.rabbitmq.client.AMQP.Tx.CommitOk
                        // @ts-ignore
                        public txRollback(): com.rabbitmq.client.AMQP.Tx.RollbackOk
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
                        public asyncRpc(method: com.rabbitmq.client.Method): void
                        // @ts-ignore
                        public rpc(method: com.rabbitmq.client.Method): com.rabbitmq.client.Command
                        /**
                         * @see Connection#addShutdownListener(com.rabbitmq.client.ShutdownListener)
                         */
                        // @ts-ignore
                        public addShutdownListener(listener: com.rabbitmq.client.ShutdownListener): void
                        // @ts-ignore
                        public removeShutdownListener(listener: com.rabbitmq.client.ShutdownListener): void
                        // @ts-ignore
                        public getCloseReason(): com.rabbitmq.client.ShutdownSignalException
                        // @ts-ignore
                        public notifyListeners(): void
                        // @ts-ignore
                        public isOpen(): boolean
                        // @ts-ignore
                        public addRecoveryListener(listener: com.rabbitmq.client.RecoveryListener): void
                        // @ts-ignore
                        public removeRecoveryListener(listener: com.rabbitmq.client.RecoveryListener): void
                        // @ts-ignore
                        public automaticallyRecover(connection: com.rabbitmq.client.impl.recovery.AutorecoveringConnection, connDelegate: com.rabbitmq.client.Connection): void
                        // @ts-ignore
                        public asyncCompletableRpc(method: com.rabbitmq.client.Method): java.util.concurrent.CompletableFuture<com.rabbitmq.client.Command>
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
