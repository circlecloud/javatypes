declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Base class modelling an AMQ channel. Subclasses implement
                 * {@link com.rabbitmq.client.Channel#close} and
                 * {@link #processAsync processAsync()}, and may choose to override
                 * {@link #processShutdownSignal processShutdownSignal()} and
                 * {@link #rpc rpc()}.
                 * @see ChannelN
                 * @see Connection
                 */
                // @ts-ignore
                abstract class AMQChannel extends com.rabbitmq.client.impl.ShutdownNotifierComponent {
                    /**
                     * Construct a channel on the given connection, with the given channel number.
                     * @param connection the underlying connection for this channel
                     * @param channelNumber the allocated reference number for this channel
                     */
                    // @ts-ignore
                    constructor(connection: com.rabbitmq.client.impl.AMQConnection, channelNumber: number /*int*/)
                    // @ts-ignore
                    static readonly NO_RPC_TIMEOUT: number /*int*/
                    /**
                     * Protected; used instead of synchronizing on the channel itself,
                     * so that clients can themselves use the channel to synchronize
                     * on.
                     */
                    // @ts-ignore
                    readonly _channelMutex: java.lang.Object | any
                    /**
                     * Whether transmission of content-bearing methods should be blocked
                     */
                    // @ts-ignore
                    _blockContent: boolean
                    /**
                     * Timeout for RPC calls
                     */
                    // @ts-ignore
                    readonly _rpcTimeout: number /*int*/
                    /**
                     * Public API - Retrieves this channel's channel number.
                     * @return the channel number
                     */
                    // @ts-ignore
                    public getChannelNumber(): number /*int*/
                    /**
                     * Private API - When the Connection receives a Frame for this
                     * channel, it passes it to this method.
                     * @param frame the incoming frame
                     * @throws IOException if an error is encountered
                     */
                    // @ts-ignore
                    public handleFrame(frame: com.rabbitmq.client.impl.Frame): void
                    /**
                     * Placeholder until we address bug 15786 (implementing a proper exception hierarchy).
                     * In the meantime, this at least won't throw away any information from the wrapped exception.
                     * @param ex the exception to wrap
                     * @return the wrapped exception
                     */
                    // @ts-ignore
                    public static wrap(ex: com.rabbitmq.client.ShutdownSignalException): java.io.IOException
                    // @ts-ignore
                    public static wrap(ex: com.rabbitmq.client.ShutdownSignalException, message: java.lang.String | string): java.io.IOException
                    /**
                     * Placeholder until we address bug 15786 (implementing a proper exception hierarchy).
                     */
                    // @ts-ignore
                    public exnWrappingRpc(m: com.rabbitmq.client.Method): com.rabbitmq.client.impl.AMQCommand
                    // @ts-ignore
                    public exnWrappingAsyncRpc(m: com.rabbitmq.client.Method): java.util.concurrent.CompletableFuture<com.rabbitmq.client.Command>
                    /**
                     * Private API - handle a command which has been assembled
                     * @throws IOException if there's any problem
                     * @param command the incoming command
                     * @throws IOException
                     */
                    // @ts-ignore
                    public handleCompleteInboundCommand(command: com.rabbitmq.client.impl.AMQCommand): void
                    // @ts-ignore
                    public enqueueRpc(k: com.rabbitmq.client.impl.AMQChannel.RpcContinuation): void
                    // @ts-ignore
                    public enqueueAsyncRpc(method: com.rabbitmq.client.Method, future: java.util.concurrent.CompletableFuture<com.rabbitmq.client.Command>): void
                    // @ts-ignore
                    public isOutstandingRpc(): boolean
                    // @ts-ignore
                    public nextOutstandingRpc(): com.rabbitmq.client.impl.RpcWrapper
                    // @ts-ignore
                    markRpcFinished(): void
                    // @ts-ignore
                    public ensureIsOpen(): void
                    /**
                     * Protected API - sends a {@link Method} to the broker and waits for the
                     * next in-bound Command from the broker: only for use from
                     * non-connection-MainLoop threads!
                     */
                    // @ts-ignore
                    public rpc(m: com.rabbitmq.client.Method): com.rabbitmq.client.impl.AMQCommand
                    // @ts-ignore
                    public rpc(m: com.rabbitmq.client.Method, timeout: number /*int*/): com.rabbitmq.client.impl.AMQCommand
                    /**
                     * Cleans RPC channel state after a timeout and wraps the TimeoutException in a ChannelContinuationTimeoutException
                     */
                    // @ts-ignore
                    wrapTimeoutException(m: com.rabbitmq.client.Method, e: java.util.concurrent.TimeoutException): com.rabbitmq.client.ChannelContinuationTimeoutException
                    // @ts-ignore
                    public rpc(m: com.rabbitmq.client.Method, k: com.rabbitmq.client.impl.AMQChannel.RpcContinuation): void
                    // @ts-ignore
                    public quiescingRpc(m: com.rabbitmq.client.Method, k: com.rabbitmq.client.impl.AMQChannel.RpcContinuation): void
                    // @ts-ignore
                    public asyncRpc(m: com.rabbitmq.client.Method, future: java.util.concurrent.CompletableFuture<com.rabbitmq.client.Command>): void
                    // @ts-ignore
                    public quiescingAsyncRpc(m: com.rabbitmq.client.Method, future: java.util.concurrent.CompletableFuture<com.rabbitmq.client.Command>): void
                    /**
                     * Protected API - called by nextCommand to check possibly handle an incoming Command before it is returned to the caller of nextCommand. If this method
                     * returns true, the command is considered handled and is not passed back to nextCommand's caller; if it returns false, nextCommand returns the command as
                     * usual. This is used in subclasses to implement handling of Basic.Return and Basic.Deliver messages, as well as Channel.Close and Connection.Close.
                     * @param command the command to handle asynchronously
                     * @return true if we handled the command; otherwise the caller should consider it "unhandled"
                     */
                    // @ts-ignore
                    public abstract processAsync(command: com.rabbitmq.client.Command): boolean
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Protected API - respond, in the driver thread, to a {@link ShutdownSignalException}.
                     * @param signal the signal to handle
                     * @param ignoreClosed the flag indicating whether to ignore the AlreadyClosedException
                     *                      thrown when the channel is already closed
                     * @param notifyRpc the flag indicating whether any remaining rpc continuation should be
                     *                   notified with the given signal
                     */
                    // @ts-ignore
                    public processShutdownSignal(signal: com.rabbitmq.client.ShutdownSignalException, ignoreClosed: boolean, notifyRpc: boolean): void
                    // @ts-ignore
                    public notifyOutstandingRpc(signal: com.rabbitmq.client.ShutdownSignalException): void
                    // @ts-ignore
                    public transmit(m: com.rabbitmq.client.Method): void
                    // @ts-ignore
                    public transmit(c: com.rabbitmq.client.impl.AMQCommand): void
                    // @ts-ignore
                    public quiescingTransmit(m: com.rabbitmq.client.Method): void
                    // @ts-ignore
                    public quiescingTransmit(c: com.rabbitmq.client.impl.AMQCommand): void
                    // @ts-ignore
                    public getConnection(): com.rabbitmq.client.impl.AMQConnection
                }
            }
        }
    }
}
