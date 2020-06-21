declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Manages a set of channels, indexed by channel number (<code><b>1.._channelMax</b></code>).
                 */
                // @ts-ignore
                class ChannelManager extends java.lang.Object {
                    // @ts-ignore
                    constructor(workService: com.rabbitmq.client.impl.ConsumerWorkService, channelMax: number /*int*/)
                    // @ts-ignore
                    constructor(workService: com.rabbitmq.client.impl.ConsumerWorkService, channelMax: number /*int*/, threadFactory: java.util.concurrent.ThreadFactory)
                    // @ts-ignore
                    constructor(workService: com.rabbitmq.client.impl.ConsumerWorkService, channelMax: number /*int*/, threadFactory: java.util.concurrent.ThreadFactory, metricsCollector: com.rabbitmq.client.MetricsCollector)
                    // @ts-ignore
                    readonly metricsCollector: com.rabbitmq.client.MetricsCollector
                    // @ts-ignore
                    public getChannelMax(): number /*int*/
                    /**
                     * Looks up a channel on this connection.
                     * @param channelNumber the number of the required channel
                     * @return the channel on this connection with number <code><b>channelNumber</b></code>
                     * @throws UnknownChannelException if there is no channel with number <code><b>channelNumber</b></code> on this connection
                     */
                    // @ts-ignore
                    public getChannel(channelNumber: number /*int*/): com.rabbitmq.client.impl.ChannelN
                    /**
                     * Handle shutdown. All the managed {@link com.rabbitmq.client.Channel Channel}s are shutdown.
                     * @param signal reason for shutdown
                     */
                    // @ts-ignore
                    public handleSignal(signal: com.rabbitmq.client.ShutdownSignalException): void
                    // @ts-ignore
                    public createChannel(connection: com.rabbitmq.client.impl.AMQConnection): com.rabbitmq.client.impl.ChannelN
                    // @ts-ignore
                    public createChannel(connection: com.rabbitmq.client.impl.AMQConnection, channelNumber: number /*int*/): com.rabbitmq.client.impl.ChannelN
                    // @ts-ignore
                    instantiateChannel(connection: com.rabbitmq.client.impl.AMQConnection, channelNumber: number /*int*/, workService: com.rabbitmq.client.impl.ConsumerWorkService): com.rabbitmq.client.impl.ChannelN
                    /**
                     * Remove the channel from the channel map and free the number for re-use.
                     * This method must be safe to call multiple times on the same channel. If
                     * it is not then things go badly wrong.
                     */
                    // @ts-ignore
                    public releaseChannelNumber(channel: com.rabbitmq.client.impl.ChannelN): void
                    // @ts-ignore
                    public getShutdownExecutor(): java.util.concurrent.ExecutorService
                    // @ts-ignore
                    public setShutdownExecutor(shutdownExecutor: java.util.concurrent.ExecutorService): void
                    /**
                     * Set the shutdown timeout for channels.
                     * This is the amount of time the manager waits for a channel to
                     * shutdown before giving up.
                     * Works only when the {@code shutdownExecutor} property is set.
                     * Default to {@link com.rabbitmq.client.ConnectionFactory#DEFAULT_HEARTBEAT} + 5 % seconds
                     * @param channelShutdownTimeout shutdown timeout in milliseconds
                     */
                    // @ts-ignore
                    public setChannelShutdownTimeout(channelShutdownTimeout: number /*int*/): void
                }
            }
        }
    }
}
