declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * Connection implementation that performs automatic recovery when
                     * connection shutdown is not initiated by the application (e.g. due to
                     * an I/O exception).
                     * Topology (exchanges, queues, bindings, and consumers) can be (and by default is) recovered
                     * as well, in this order:
                     * <ol>
                     * <li>Exchanges</li>
                     * <li>Queues</li>
                     * <li>Bindings (both queue and exchange-to-exchange)</li>
                     * <li>Consumers</li>
                     * </ol>
                     * @see com.rabbitmq.client.Connection
                     * @see com.rabbitmq.client.Recoverable
                     * @see com.rabbitmq.client.ConnectionFactory#setAutomaticRecoveryEnabled(boolean)
                     * @see com.rabbitmq.client.ConnectionFactory#setTopologyRecoveryEnabled(boolean)
                     * @since 3.3.0
                     */
                    // @ts-ignore
                    class AutorecoveringConnection extends java.lang.Object implements com.rabbitmq.client.RecoverableConnection, com.rabbitmq.client.impl.NetworkConnection {
                        // @ts-ignore
                        constructor(params: com.rabbitmq.client.impl.ConnectionParams, f: com.rabbitmq.client.impl.FrameHandlerFactory, addrs: java.util.List<com.rabbitmq.client.Address> | Array<com.rabbitmq.client.Address>)
                        // @ts-ignore
                        constructor(params: com.rabbitmq.client.impl.ConnectionParams, f: com.rabbitmq.client.impl.FrameHandlerFactory, addressResolver: com.rabbitmq.client.AddressResolver)
                        // @ts-ignore
                        constructor(params: com.rabbitmq.client.impl.ConnectionParams, f: com.rabbitmq.client.impl.FrameHandlerFactory, addressResolver: com.rabbitmq.client.AddressResolver, metricsCollector: com.rabbitmq.client.MetricsCollector)
                        // @ts-ignore
                        public static readonly DEFAULT_CONNECTION_RECOVERY_TRIGGERING_CONDITION: java.util.function$.Predicate<com.rabbitmq.client.ShutdownSignalException>
                        /**
                         * Private API.
                         * @throws IOException
                         * @see com.rabbitmq.client.ConnectionFactory#newConnection(java.util.concurrent.ExecutorService)
                         */
                        // @ts-ignore
                        public init(): void
                        /**
                         * @see com.rabbitmq.client.Connection#createChannel()
                         */
                        // @ts-ignore
                        public createChannel(): com.rabbitmq.client.Channel
                        /**
                         * @see com.rabbitmq.client.Connection#createChannel(int)
                         */
                        // @ts-ignore
                        public createChannel(channelNumber: number /*int*/): com.rabbitmq.client.Channel
                        /**
                         * @see com.rabbitmq.client.Connection#getServerProperties()
                         */
                        // @ts-ignore
                        public getServerProperties(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        /**
                         * @see com.rabbitmq.client.Connection#getClientProperties()
                         */
                        // @ts-ignore
                        public getClientProperties(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        /**
                         * @see com.rabbitmq.client.Connection#getClientProvidedName()
                         * @see ConnectionFactory#newConnection(Address[], String)
                         * @see ConnectionFactory#newConnection(ExecutorService, Address[], String)
                         */
                        // @ts-ignore
                        public getClientProvidedName(): string
                        /**
                         * @see com.rabbitmq.client.Connection#getFrameMax()
                         */
                        // @ts-ignore
                        public getFrameMax(): number /*int*/
                        /**
                         * @see com.rabbitmq.client.Connection#getHeartbeat()
                         */
                        // @ts-ignore
                        public getHeartbeat(): number /*int*/
                        /**
                         * @see com.rabbitmq.client.Connection#getChannelMax()
                         */
                        // @ts-ignore
                        public getChannelMax(): number /*int*/
                        /**
                         * @see com.rabbitmq.client.Connection#isOpen()
                         */
                        // @ts-ignore
                        public isOpen(): boolean
                        /**
                         * @see com.rabbitmq.client.Connection#close()
                         */
                        // @ts-ignore
                        public close(): void
                        /**
                         * @see Connection#close(int)
                         */
                        // @ts-ignore
                        public close(timeout: number /*int*/): void
                        /**
                         * @see Connection#close(int, String, int)
                         */
                        // @ts-ignore
                        public close(closeCode: number /*int*/, closeMessage: java.lang.String | string, timeout: number /*int*/): void
                        /**
                         * @see com.rabbitmq.client.Connection#abort()
                         */
                        // @ts-ignore
                        public abort(): void
                        /**
                         * @see Connection#abort(int, String, int)
                         */
                        // @ts-ignore
                        public abort(closeCode: number /*int*/, closeMessage: java.lang.String | string, timeout: number /*int*/): void
                        /**
                         * @see Connection#abort(int, String)
                         */
                        // @ts-ignore
                        public abort(closeCode: number /*int*/, closeMessage: java.lang.String | string): void
                        /**
                         * @see Connection#abort(int)
                         */
                        // @ts-ignore
                        public abort(timeout: number /*int*/): void
                        /**
                         * Not supposed to be used outside of automated tests.
                         */
                        // @ts-ignore
                        public getDelegate(): com.rabbitmq.client.impl.AMQConnection
                        /**
                         * @see com.rabbitmq.client.Connection#getCloseReason()
                         */
                        // @ts-ignore
                        public getCloseReason(): com.rabbitmq.client.ShutdownSignalException
                        /**
                         * @see com.rabbitmq.client.ShutdownNotifier#addShutdownListener(com.rabbitmq.client.ShutdownListener)
                         */
                        // @ts-ignore
                        public addBlockedListener(listener: com.rabbitmq.client.BlockedListener): void
                        // @ts-ignore
                        public addBlockedListener(blockedCallback: com.rabbitmq.client.BlockedCallback, unblockedCallback: com.rabbitmq.client.UnblockedCallback): com.rabbitmq.client.BlockedListener
                        /**
                         * @see Connection#removeBlockedListener(com.rabbitmq.client.BlockedListener)
                         */
                        // @ts-ignore
                        public removeBlockedListener(listener: com.rabbitmq.client.BlockedListener): boolean
                        /**
                         * @see com.rabbitmq.client.Connection#clearBlockedListeners()
                         */
                        // @ts-ignore
                        public clearBlockedListeners(): void
                        /**
                         * @see com.rabbitmq.client.Connection#close(int, String)
                         */
                        // @ts-ignore
                        public close(closeCode: number /*int*/, closeMessage: java.lang.String | string): void
                        /**
                         * @see Connection#addShutdownListener(com.rabbitmq.client.ShutdownListener)
                         */
                        // @ts-ignore
                        public addShutdownListener(listener: com.rabbitmq.client.ShutdownListener): void
                        /**
                         * @see com.rabbitmq.client.ShutdownNotifier#removeShutdownListener(com.rabbitmq.client.ShutdownListener)
                         */
                        // @ts-ignore
                        public removeShutdownListener(listener: com.rabbitmq.client.ShutdownListener): void
                        /**
                         * @see com.rabbitmq.client.ShutdownNotifier#notifyListeners()
                         */
                        // @ts-ignore
                        public notifyListeners(): void
                        /**
                         * Adds the recovery listener
                         * @param listener {#link com.rabbitmq.client.RecoveryListener} to execute after this connection recovers from network failure
                         */
                        // @ts-ignore
                        public addRecoveryListener(listener: com.rabbitmq.client.RecoveryListener): void
                        /**
                         * Removes the recovery listener
                         * @param listener {#link com.rabbitmq.client.RecoveryListener} to remove
                         */
                        // @ts-ignore
                        public removeRecoveryListener(listener: com.rabbitmq.client.RecoveryListener): void
                        /**
                         * @see com.rabbitmq.client.impl.AMQConnection#getExceptionHandler()
                         */
                        // @ts-ignore
                        public getExceptionHandler(): com.rabbitmq.client.ExceptionHandler
                        /**
                         * @see com.rabbitmq.client.Connection#getPort()
                         */
                        // @ts-ignore
                        public getPort(): number /*int*/
                        /**
                         * @see com.rabbitmq.client.Connection#getAddress()
                         */
                        // @ts-ignore
                        public getAddress(): java.net.InetAddress
                        /**
                         * @return client socket address
                         */
                        // @ts-ignore
                        public getLocalAddress(): java.net.InetAddress
                        /**
                         * @return client socket port
                         */
                        // @ts-ignore
                        public getLocalPort(): number /*int*/
                        // @ts-ignore
                        shouldTriggerConnectionRecovery(cause: com.rabbitmq.client.ShutdownSignalException): boolean
                        /**
                         * Not part of the public API. Mean to be used by JVM RabbitMQ clients that build on
                         * top of the Java client and need to be notified when server-named queue name changes
                         * after recovery.
                         * @param listener listener that observes queue name changes after recovery
                         */
                        // @ts-ignore
                        public addQueueRecoveryListener(listener: com.rabbitmq.client.impl.recovery.QueueRecoveryListener): void
                        /**
                         * @see com.rabbitmq.client.impl.recovery.AutorecoveringConnection#addQueueRecoveryListener
                         * @param listener listener to be removed
                         */
                        // @ts-ignore
                        public removeQueueRecoveryListener(listener: com.rabbitmq.client.impl.recovery.QueueRecoveryListener): void
                        /**
                         * Not part of the public API. Mean to be used by JVM RabbitMQ clients that build on
                         * top of the Java client and need to be notified when consumer tag changes
                         * after recovery.
                         * @param listener listener that observes consumer tag changes after recovery
                         */
                        // @ts-ignore
                        public addConsumerRecoveryListener(listener: com.rabbitmq.client.impl.recovery.ConsumerRecoveryListener): void
                        /**
                         * @see com.rabbitmq.client.impl.recovery.AutorecoveringConnection#addConsumerRecoveryListener(ConsumerRecoveryListener)
                         * @param listener listener to be removed
                         */
                        // @ts-ignore
                        public removeConsumerRecoveryListener(listener: com.rabbitmq.client.impl.recovery.ConsumerRecoveryListener): void
                        // @ts-ignore
                        public recoverQueue(oldName: java.lang.String | string, q: com.rabbitmq.client.impl.recovery.RecordedQueue, retry: boolean): void
                        // @ts-ignore
                        public recoverConsumer(tag: java.lang.String | string, consumer: com.rabbitmq.client.impl.recovery.RecordedConsumer, retry: boolean): void
                        /**
                         * Exclude the queue from the list of queues to recover after connection failure.
                         * Intended to be used in usecases where you want to remove the queue from this connection's recovery list but don't want to delete the queue from the server.
                         * @param queue queue name to exclude from recorded recovery queues
                         * @param ifUnused if true, the RecordedQueue will only be excluded if no local consumers are using it.
                         */
                        // @ts-ignore
                        public excludeQueueFromRecovery(queue: java.lang.String | string, ifUnused: boolean): void
                        // @ts-ignore
                        public getRecordedQueues(): java.util.Map<java.lang.String | string, com.rabbitmq.client.impl.recovery.RecordedQueue>
                        // @ts-ignore
                        public getRecordedExchanges(): java.util.Map<java.lang.String | string, com.rabbitmq.client.impl.recovery.RecordedExchange>
                        // @ts-ignore
                        public getRecordedBindings(): Array<com.rabbitmq.client.impl.recovery.RecordedBinding>
                        // @ts-ignore
                        public toString(): string
                        /**
                         * Public API - {@inheritDoc}
                         */
                        // @ts-ignore
                        public getId(): string
                        /**
                         * Public API - {@inheritDoc}
                         */
                        // @ts-ignore
                        public setId(id: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
