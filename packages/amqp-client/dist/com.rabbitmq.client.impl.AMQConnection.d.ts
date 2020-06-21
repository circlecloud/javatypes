declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Concrete class representing and managing an AMQP connection to a broker.
                 * <p>
                 * To create a broker connection, use {@link ConnectionFactory}.  See {@link Connection}
                 * for an example.
                 */
                // @ts-ignore
                class AMQConnection extends com.rabbitmq.client.impl.ShutdownNotifierComponent implements com.rabbitmq.client.Connection, com.rabbitmq.client.impl.NetworkConnection {
                    // @ts-ignore
                    constructor(params: com.rabbitmq.client.impl.ConnectionParams, frameHandler: com.rabbitmq.client.impl.FrameHandler)
                    /**
                     * Construct a new connection
                     * @param params parameters for it
                     */
                    // @ts-ignore
                    constructor(params: com.rabbitmq.client.impl.ConnectionParams, frameHandler: com.rabbitmq.client.impl.FrameHandler, metricsCollector: com.rabbitmq.client.MetricsCollector)
                    // @ts-ignore
                    public static readonly CHANNEL_SHUTDOWN_TIMEOUT_MULTIPLIER: number /*double*/
                    // @ts-ignore
                    _workService: com.rabbitmq.client.impl.ConsumerWorkService
                    // @ts-ignore
                    readonly metricsCollector: com.rabbitmq.client.MetricsCollector
                    /**
                     * Retrieve a copy of the default table of client properties that
                     * will be sent to the server during connection startup. This
                     * method is called when each new ConnectionFactory instance is
                     * constructed.
                     * @return a map of client properties
                     * @see Connection#getClientProperties
                     */
                    // @ts-ignore
                    public static defaultClientProperties(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Protected API - respond, in the driver thread, to a ShutdownSignal.
                     * @param channel the channel to disconnect
                     */
                    // @ts-ignore
                    public disconnectChannel(channel: com.rabbitmq.client.impl.ChannelN): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getAddress(): java.net.InetAddress
                    // @ts-ignore
                    public getLocalAddress(): java.net.InetAddress
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getPort(): number /*int*/
                    // @ts-ignore
                    public getLocalPort(): number /*int*/
                    // @ts-ignore
                    public getFrameHandler(): com.rabbitmq.client.impl.FrameHandler
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getServerProperties(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Start up the connection, including the MainLoop thread.
                     * Sends the protocol
                     * version negotiation header, and runs through
                     * Connection.Start/.StartOk, Connection.Tune/.TuneOk, and then
                     * calls Connection.Open and waits for the OpenOk. Sets heart-beat
                     * and frame max values after tuning has taken place.
                     * @throws IOException if an error is encountered
                     *  either before, or during, protocol negotiation;
                     *  sub-classes {#link ProtocolVersionMismatchException} and
                     *  {@link PossibleAuthenticationFailureException} will be thrown in the
                     *  corresponding circumstances. {@link AuthenticationFailureException}
                     *  will be thrown if the broker closes the connection with ACCESS_REFUSED.
                     *  If an exception is thrown, connection resources allocated can all be
                     *  garbage collected when the connection object is no longer referenced.
                     */
                    // @ts-ignore
                    public start(): void
                    // @ts-ignore
                    instantiateChannelManager(channelMax: number /*int*/, threadFactory: java.util.concurrent.ThreadFactory): com.rabbitmq.client.impl.ChannelManager
                    // @ts-ignore
                    configureChannelManager(channelManager: com.rabbitmq.client.impl.ChannelManager): void
                    /**
                     * Package private API, allows for easier testing.
                     */
                    // @ts-ignore
                    public startMainLoop(): void
                    /**
                     * Private API, allows for easier simulation of bogus clients.
                     */
                    // @ts-ignore
                    negotiateChannelMax(requestedChannelMax: number /*int*/, serverMax: number /*int*/): number /*int*/
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getChannelMax(): number /*int*/
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getFrameMax(): number /*int*/
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getHeartbeat(): number /*int*/
                    /**
                     * Protected API - set the heartbeat timeout. Should only be called
                     * during tuning.
                     */
                    // @ts-ignore
                    public setHeartbeat(heartbeat: number /*int*/): void
                    /**
                     * Makes it possible to override thread factory that is used
                     * to instantiate connection network I/O loop. Only necessary
                     * in the environments with restricted
                     * @param threadFactory thread factory to use
                     */
                    // @ts-ignore
                    public setThreadFactory(threadFactory: java.util.concurrent.ThreadFactory): void
                    /**
                     * @return Thread factory used by this connection.
                     */
                    // @ts-ignore
                    public getThreadFactory(): java.util.concurrent.ThreadFactory
                    // @ts-ignore
                    public getClientProperties(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public getClientProvidedName(): string
                    /**
                     * Protected API - retrieve the current ExceptionHandler
                     */
                    // @ts-ignore
                    public getExceptionHandler(): com.rabbitmq.client.ExceptionHandler
                    /**
                     * Public API
                     * @return true if this work service instance uses its own consumerWorkServiceExecutor (as opposed to a shared one)
                     */
                    // @ts-ignore
                    public willShutDownConsumerExecutor(): boolean
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public createChannel(channelNumber: number /*int*/): com.rabbitmq.client.Channel
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public createChannel(): com.rabbitmq.client.Channel
                    /**
                     * Public API - sends a frame directly to the broker.
                     */
                    // @ts-ignore
                    public writeFrame(f: com.rabbitmq.client.impl.Frame): void
                    /**
                     * Public API - flush the output buffers
                     */
                    // @ts-ignore
                    public flush(): void
                    /**
                     * private API
                     */
                    // @ts-ignore
                    public handleReadFrame(frame: com.rabbitmq.client.impl.Frame): boolean
                    // @ts-ignore
                    public isRunning(): boolean
                    // @ts-ignore
                    public hasBrokerInitiatedShutdown(): boolean
                    /**
                     * private API
                     */
                    // @ts-ignore
                    public handleHeartbeatFailure(): void
                    /**
                     * private API
                     */
                    // @ts-ignore
                    public handleIoError(ex: java.lang.Throwable | Error): void
                    /**
                     * private API
                     */
                    // @ts-ignore
                    public doFinalShutdown(): void
                    // @ts-ignore
                    public addRecoveryCanBeginListener(fn: com.rabbitmq.client.impl.recovery.RecoveryCanBeginListener): void
                    // @ts-ignore
                    public removeRecoveryCanBeginListener(fn: com.rabbitmq.client.impl.recovery.RecoveryCanBeginListener): void
                    /**
                     * Handles incoming control commands on channel zero.
                     * @see ChannelN#processAsync
                     */
                    // @ts-ignore
                    public processControlCommand(c: com.rabbitmq.client.Command): boolean
                    // @ts-ignore
                    public handleConnectionClose(closeCommand: com.rabbitmq.client.Command): void
                    /**
                     * Protected API - causes all attached channels to terminate (shutdown) with a ShutdownSignal
                     * built from the argument, and stops this connection from accepting further work from the
                     * application. {@link com.rabbitmq.client.ShutdownListener ShutdownListener}s for the
                     * connection are notified when the main loop terminates.
                     * @param reason description of reason for the exception
                     * @param initiatedByApplication true if caused by a client command
                     * @param cause trigger exception which caused shutdown
                     * @param notifyRpc true if outstanding rpc should be informed of shutdown
                     * @return a shutdown signal built using the given arguments
                     */
                    // @ts-ignore
                    public shutdown(reason: com.rabbitmq.client.Method, initiatedByApplication: boolean, cause: java.lang.Throwable | Error, notifyRpc: boolean): com.rabbitmq.client.ShutdownSignalException
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public close(): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public close(timeout: number /*int*/): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public close(closeCode: number /*int*/, closeMessage: java.lang.String | string): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public close(closeCode: number /*int*/, closeMessage: java.lang.String | string, timeout: number /*int*/): void
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
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public abort(timeout: number /*int*/): void
                    /**
                     * Public API - {@inheritDoc}
                     */
                    // @ts-ignore
                    public abort(closeCode: number /*int*/, closeMessage: java.lang.String | string, timeout: number /*int*/): void
                    /**
                     * Protected API - Delegates to {@link
                     * #close(int,String,boolean,Throwable,int,boolean) the
                     * six-argument close method}, passing -1 for the timeout, and
                     * false for the abort flag.
                     */
                    // @ts-ignore
                    public close(closeCode: number /*int*/, closeMessage: java.lang.String | string, initiatedByApplication: boolean, cause: java.lang.Throwable | Error): void
                    /**
                     * Protected API - Close this connection with the given code, message, source
                     * and timeout value for all the close operations to complete.
                     * Specifies if any encountered exceptions should be ignored.
                     */
                    // @ts-ignore
                    public close(closeCode: number /*int*/, closeMessage: java.lang.String | string, initiatedByApplication: boolean, cause: java.lang.Throwable | Error, timeout: number /*int*/, abort: boolean): void
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public addBlockedListener(listener: com.rabbitmq.client.BlockedListener): void
                    // @ts-ignore
                    public addBlockedListener(blockedCallback: com.rabbitmq.client.BlockedCallback, unblockedCallback: com.rabbitmq.client.UnblockedCallback): com.rabbitmq.client.BlockedListener
                    // @ts-ignore
                    public removeBlockedListener(listener: com.rabbitmq.client.BlockedListener): boolean
                    // @ts-ignore
                    public clearBlockedListeners(): void
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
                    // @ts-ignore
                    public getChannelRpcTimeout(): number /*int*/
                    // @ts-ignore
                    public willCheckRpcResponseType(): boolean
                    // @ts-ignore
                    public getTrafficListener(): com.rabbitmq.client.TrafficListener
                }
            }
        }
    }
}
