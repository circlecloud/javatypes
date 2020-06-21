declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                // @ts-ignore
                class ConnectionParams extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getCredentialsProvider(): com.rabbitmq.client.impl.CredentialsProvider
                    // @ts-ignore
                    public getConsumerWorkServiceExecutor(): java.util.concurrent.ExecutorService
                    // @ts-ignore
                    public getVirtualHost(): string
                    // @ts-ignore
                    public getClientProperties(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public getRequestedFrameMax(): number /*int*/
                    // @ts-ignore
                    public getRequestedChannelMax(): number /*int*/
                    // @ts-ignore
                    public getRequestedHeartbeat(): number /*int*/
                    // @ts-ignore
                    public getHandshakeTimeout(): number /*int*/
                    // @ts-ignore
                    public setHandshakeTimeout(timeout: number /*int*/): void
                    // @ts-ignore
                    public getShutdownTimeout(): number /*int*/
                    // @ts-ignore
                    public getSaslConfig(): com.rabbitmq.client.SaslConfig
                    // @ts-ignore
                    public getExceptionHandler(): com.rabbitmq.client.ExceptionHandler
                    // @ts-ignore
                    public getNetworkRecoveryInterval(): number /*long*/
                    /**
                     * Get the recovery delay handler.
                     * @return recovery delay handler or if none was set a {#link DefaultRecoveryDelayHandler} will be returned with a delay of {@link #getNetworkRecoveryInterval()}.
                     */
                    // @ts-ignore
                    public getRecoveryDelayHandler(): com.rabbitmq.client.RecoveryDelayHandler
                    // @ts-ignore
                    public isTopologyRecoveryEnabled(): boolean
                    /**
                     * Get the topology recovery executor. If null, the main connection thread should be used.
                     * @return executor. May be null.
                     */
                    // @ts-ignore
                    public getTopologyRecoveryExecutor(): java.util.concurrent.ExecutorService
                    // @ts-ignore
                    public getThreadFactory(): java.util.concurrent.ThreadFactory
                    // @ts-ignore
                    public getChannelRpcTimeout(): number /*int*/
                    // @ts-ignore
                    public channelShouldCheckRpcResponseType(): boolean
                    // @ts-ignore
                    public setCredentialsProvider(credentialsProvider: com.rabbitmq.client.impl.CredentialsProvider): void
                    // @ts-ignore
                    public setConsumerWorkServiceExecutor(consumerWorkServiceExecutor: java.util.concurrent.ExecutorService): void
                    // @ts-ignore
                    public setVirtualHost(virtualHost: java.lang.String | string): void
                    // @ts-ignore
                    public setClientProperties(clientProperties: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                    // @ts-ignore
                    public setRequestedFrameMax(requestedFrameMax: number /*int*/): void
                    // @ts-ignore
                    public setRequestedChannelMax(requestedChannelMax: number /*int*/): void
                    // @ts-ignore
                    public setRequestedHeartbeat(requestedHeartbeat: number /*int*/): void
                    // @ts-ignore
                    public setShutdownTimeout(shutdownTimeout: number /*int*/): void
                    // @ts-ignore
                    public setSaslConfig(saslConfig: com.rabbitmq.client.SaslConfig): void
                    // @ts-ignore
                    public setNetworkRecoveryInterval(networkRecoveryInterval: number /*long*/): void
                    // @ts-ignore
                    public setRecoveryDelayHandler(recoveryDelayHandler: com.rabbitmq.client.RecoveryDelayHandler): void
                    // @ts-ignore
                    public setTopologyRecovery(topologyRecovery: boolean): void
                    // @ts-ignore
                    public setTopologyRecoveryExecutor(topologyRecoveryExecutor: java.util.concurrent.ExecutorService): void
                    // @ts-ignore
                    public setExceptionHandler(exceptionHandler: com.rabbitmq.client.ExceptionHandler): void
                    // @ts-ignore
                    public setThreadFactory(threadFactory: java.util.concurrent.ThreadFactory): void
                    // @ts-ignore
                    public getShutdownExecutor(): java.util.concurrent.ExecutorService
                    // @ts-ignore
                    public setShutdownExecutor(shutdownExecutor: java.util.concurrent.ExecutorService): void
                    // @ts-ignore
                    public getHeartbeatExecutor(): java.util.concurrent.ScheduledExecutorService
                    // @ts-ignore
                    public setHeartbeatExecutor(heartbeatExecutor: java.util.concurrent.ScheduledExecutorService): void
                    // @ts-ignore
                    public setChannelRpcTimeout(channelRpcTimeout: number /*int*/): void
                    // @ts-ignore
                    public setChannelShouldCheckRpcResponseType(channelShouldCheckRpcResponseType: boolean): void
                    // @ts-ignore
                    public setErrorOnWriteListener(errorOnWriteListener: com.rabbitmq.client.impl.ErrorOnWriteListener): void
                    // @ts-ignore
                    public getErrorOnWriteListener(): com.rabbitmq.client.impl.ErrorOnWriteListener
                    // @ts-ignore
                    public setWorkPoolTimeout(workPoolTimeout: number /*int*/): void
                    // @ts-ignore
                    public getWorkPoolTimeout(): number /*int*/
                    // @ts-ignore
                    public setTopologyRecoveryFilter(topologyRecoveryFilter: com.rabbitmq.client.impl.recovery.TopologyRecoveryFilter): void
                    // @ts-ignore
                    public getTopologyRecoveryFilter(): com.rabbitmq.client.impl.recovery.TopologyRecoveryFilter
                    // @ts-ignore
                    public setConnectionRecoveryTriggeringCondition(connectionRecoveryTriggeringCondition: java.util.function$.Predicate<com.rabbitmq.client.ShutdownSignalException>): void
                    // @ts-ignore
                    public getConnectionRecoveryTriggeringCondition(): java.util.function$.Predicate<com.rabbitmq.client.ShutdownSignalException>
                    // @ts-ignore
                    public setTopologyRecoveryRetryHandler(topologyRecoveryRetryHandler: com.rabbitmq.client.impl.recovery.RetryHandler): void
                    // @ts-ignore
                    public getTopologyRecoveryRetryHandler(): com.rabbitmq.client.impl.recovery.RetryHandler
                    // @ts-ignore
                    public setTrafficListener(trafficListener: com.rabbitmq.client.TrafficListener): void
                    // @ts-ignore
                    public getTrafficListener(): com.rabbitmq.client.TrafficListener
                    // @ts-ignore
                    public setCredentialsRefreshService(credentialsRefreshService: com.rabbitmq.client.impl.CredentialsRefreshService): void
                    // @ts-ignore
                    public getCredentialsRefreshService(): com.rabbitmq.client.impl.CredentialsRefreshService
                }
            }
        }
    }
}
