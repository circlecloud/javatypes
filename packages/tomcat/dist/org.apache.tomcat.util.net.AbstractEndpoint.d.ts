declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * @param <S> The type used by the socket wrapper associated with this endpoint.
                     *             May be the same as U.
                     * @param <U> The type of the underlying socket used by this endpoint. May be
                     *             the same as S.
                     * @author Mladen Turk
                     * @author Remy Maucherat
                     */
                    // @ts-ignore
                    abstract class AbstractEndpoint<S, U> extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        static readonly sm: org.apache.tomcat.util.res.StringManager
                        /**
                         * Running state of the endpoint.
                         */
                        // @ts-ignore
                        running: boolean
                        /**
                         * Will be set to true whenever the endpoint is paused.
                         */
                        // @ts-ignore
                        paused: boolean
                        /**
                         * Are we using an internal executor
                         */
                        // @ts-ignore
                        internalExecutor: boolean
                        /**
                         * Socket properties
                         */
                        // @ts-ignore
                        readonly socketProperties: org.apache.tomcat.util.net.SocketProperties
                        /**
                         * Threads used to accept new connections and pass them to worker threads.
                         */
                        // @ts-ignore
                        acceptors: java.util.List<org.apache.tomcat.util.net.Acceptor<U>> | Array<org.apache.tomcat.util.net.Acceptor<U>>
                        /**
                         * Cache for SocketProcessor objects
                         */
                        // @ts-ignore
                        processorCache: org.apache.tomcat.util.collections.SynchronizedStack<org.apache.tomcat.util.net.SocketProcessorBase<S>>
                        // @ts-ignore
                        sslHostConfigs: java.util.concurrent.ConcurrentMap<java.lang.String | string, org.apache.tomcat.util.net.SSLHostConfig>
                        /**
                         * Acceptor thread count.
                         */
                        // @ts-ignore
                        acceptorThreadCount: number /*int*/
                        /**
                         * Priority of the acceptor threads.
                         */
                        // @ts-ignore
                        acceptorThreadPriority: number /*int*/
                        /**
                         * Priority of the worker threads.
                         */
                        // @ts-ignore
                        threadPriority: number /*int*/
                        // @ts-ignore
                        readonly negotiableProtocols: java.util.List<java.lang.String | string> | Array<java.lang.String | string>
                        /**
                         * Attributes provide a way for configuration to be passed to sub-components
                         * without the {@link org.apache.coyote.ProtocolHandler} being aware of the
                         * properties available on those sub-components.
                         */
                        // @ts-ignore
                        attributes: java.util.HashMap<java.lang.String | string, java.lang.Object | any>
                        // @ts-ignore
                        public getSocketProperties(): org.apache.tomcat.util.net.SocketProperties
                        // @ts-ignore
                        public getDefaultSSLHostConfigName(): string
                        // @ts-ignore
                        public setDefaultSSLHostConfigName(defaultSSLHostConfigName: java.lang.String | string): void
                        /**
                         * Add the given SSL Host configuration.
                         * @param sslHostConfig The configuration to add
                         * @throws IllegalArgumentException If the host name is not valid or if a
                         *                                   configuration has already been provided
                         *                                   for that host
                         */
                        // @ts-ignore
                        public addSslHostConfig(sslHostConfig: org.apache.tomcat.util.net.SSLHostConfig): void
                        /**
                         * Add the given SSL Host configuration, optionally replacing the existing
                         * configuration for the given host.
                         * @param sslHostConfig The configuration to add
                         * @param replace       If {#code true} replacement of an existing
                         *                       configuration is permitted, otherwise any such
                         *                       attempted replacement will trigger an exception
                         * @throws IllegalArgumentException If the host name is not valid or if a
                         *                                   configuration has already been provided
                         *                                   for that host and replacement is not
                         *                                   allowed
                         */
                        // @ts-ignore
                        public addSslHostConfig(sslHostConfig: org.apache.tomcat.util.net.SSLHostConfig, replace: boolean): void
                        /**
                         * Removes the SSL host configuration for the given host name, if such a
                         * configuration exists.
                         * @param hostName  The host name associated with the SSL host configuration
                         *                   to remove
                         * @return The SSL host configuration that was removed, if any
                         */
                        // @ts-ignore
                        public removeSslHostConfig(hostName: java.lang.String | string): org.apache.tomcat.util.net.SSLHostConfig
                        /**
                         * Re-read the configuration files for the SSL host and replace the existing
                         * SSL configuration with the updated settings. Note this replacement will
                         * happen even if the settings remain unchanged.
                         * @param hostName The SSL host for which the configuration should be
                         *                  reloaded. This must match a current SSL host
                         */
                        // @ts-ignore
                        public reloadSslHostConfig(hostName: java.lang.String | string): void
                        /**
                         * Re-read the configuration files for all SSL hosts and replace the
                         * existing SSL configuration with the updated settings. Note this
                         * replacement will happen even if the settings remain unchanged.
                         */
                        // @ts-ignore
                        public reloadSslHostConfigs(): void
                        // @ts-ignore
                        public findSslHostConfigs(): org.apache.tomcat.util.net.SSLHostConfig[]
                        // @ts-ignore
                        abstract getSslConfigType(): org.apache.tomcat.util.net.SSLHostConfig.Type
                        /**
                         * Create the SSLContextfor the the given SSLHostConfig.
                         * @param sslHostConfig The SSLHostConfig for which the SSLContext should be
                         *                       created
                         * @throws Exception If the SSLContext cannot be created for the given
                         *                    SSLHostConfig
                         */
                        // @ts-ignore
                        abstract createSSLContext(sslHostConfig: org.apache.tomcat.util.net.SSLHostConfig): void
                        /**
                         * Release the SSLContext, if any, associated with the SSLHostConfig.
                         * @param sslHostConfig The SSLHostConfig for which the SSLContext should be
                         *                       released
                         */
                        // @ts-ignore
                        abstract releaseSSLContext(sslHostConfig: org.apache.tomcat.util.net.SSLHostConfig): void
                        // @ts-ignore
                        getSSLHostConfig(sniHostName: java.lang.String | string): org.apache.tomcat.util.net.SSLHostConfig
                        // @ts-ignore
                        public getUseSendfile(): boolean
                        // @ts-ignore
                        public setUseSendfile(useSendfile: boolean): void
                        // @ts-ignore
                        public getExecutorTerminationTimeoutMillis(): number /*long*/
                        // @ts-ignore
                        public setExecutorTerminationTimeoutMillis(executorTerminationTimeoutMillis: number /*long*/): void
                        // @ts-ignore
                        public setAcceptorThreadCount(acceptorThreadCount: number /*int*/): void
                        // @ts-ignore
                        public getAcceptorThreadCount(): number /*int*/
                        // @ts-ignore
                        public setAcceptorThreadPriority(acceptorThreadPriority: number /*int*/): void
                        // @ts-ignore
                        public getAcceptorThreadPriority(): number /*int*/
                        // @ts-ignore
                        public setMaxConnections(maxCon: number /*int*/): void
                        // @ts-ignore
                        public getMaxConnections(): number /*int*/
                        /**
                         * Return the current count of connections handled by this endpoint, if the
                         * connections are counted (which happens when the maximum count of
                         * connections is limited), or <code>-1</code> if they are not. This
                         * property is added here so that this value can be inspected through JMX.
                         * It is visible on "ThreadPool" MBean.
                         * <p>The count is incremented by the Acceptor before it tries to accept a
                         * new connection. Until the limit is reached and thus the count cannot be
                         * incremented,  this value is more by 1 (the count of acceptors) than the
                         * actual count of connections that are being served.
                         * @return The count
                         */
                        // @ts-ignore
                        public getConnectionCount(): number /*long*/
                        // @ts-ignore
                        public setExecutor(executor: java.util.concurrent.Executor): void
                        // @ts-ignore
                        public getExecutor(): java.util.concurrent.Executor
                        // @ts-ignore
                        public setUtilityExecutor(utilityExecutor: java.util.concurrent.ScheduledExecutorService): void
                        // @ts-ignore
                        public getUtilityExecutor(): java.util.concurrent.ScheduledExecutorService
                        // @ts-ignore
                        public getPort(): number /*int*/
                        // @ts-ignore
                        public setPort(port: number /*int*/): void
                        // @ts-ignore
                        public getPortOffset(): number /*int*/
                        // @ts-ignore
                        public setPortOffset(portOffset: number /*int*/): void
                        // @ts-ignore
                        public getPortWithOffset(): number /*int*/
                        // @ts-ignore
                        public getLocalPort(): number /*int*/
                        // @ts-ignore
                        public getAddress(): java.net.InetAddress
                        // @ts-ignore
                        public setAddress(address: java.net.InetAddress): void
                        /**
                         * Obtain the network address the server socket is bound to. This primarily
                         * exists to enable the correct address to be used when unlocking the server
                         * socket since it removes the guess-work involved if no address is
                         * specifically set.
                         * @return The network address that the server socket is listening on or
                         *          null if the server socket is not currently bound.
                         * @throws IOException If there is a problem determining the currently bound
                         *                      socket
                         */
                        // @ts-ignore
                        abstract getLocalAddress(): java.net.InetSocketAddress
                        // @ts-ignore
                        public setAcceptCount(acceptCount: number /*int*/): void
                        // @ts-ignore
                        public getAcceptCount(): number /*int*/
                        // @ts-ignore
                        public getBindOnInit(): boolean
                        // @ts-ignore
                        public setBindOnInit(b: boolean): void
                        // @ts-ignore
                        public getKeepAliveTimeout(): number /*int*/
                        // @ts-ignore
                        public setKeepAliveTimeout(keepAliveTimeout: number /*int*/): void
                        /**
                         * Socket TCP no delay.
                         * @return The current TCP no delay setting for sockets created by this
                         *          endpoint
                         */
                        // @ts-ignore
                        public getTcpNoDelay(): boolean
                        // @ts-ignore
                        public setTcpNoDelay(tcpNoDelay: boolean): void
                        /**
                         * Socket linger.
                         * @return The current socket linger time for sockets created by this
                         *          endpoint
                         */
                        // @ts-ignore
                        public getConnectionLinger(): number /*int*/
                        // @ts-ignore
                        public setConnectionLinger(connectionLinger: number /*int*/): void
                        /**
                         * Socket timeout.
                         * @return The current socket timeout for sockets created by this endpoint
                         */
                        // @ts-ignore
                        public getConnectionTimeout(): number /*int*/
                        // @ts-ignore
                        public setConnectionTimeout(soTimeout: number /*int*/): void
                        // @ts-ignore
                        public isSSLEnabled(): boolean
                        // @ts-ignore
                        public setSSLEnabled(SSLEnabled: boolean): void
                        /**
                         * Identifies if the endpoint supports ALPN. Note that a return value of
                         * <code>true</code> implies that {@link #isSSLEnabled()} will also return
                         * <code>true</code>.
                         * @return <code>true</code> if the endpoint supports ALPN in its current
                         *          configuration, otherwise <code>false</code>.
                         */
                        // @ts-ignore
                        public abstract isAlpnSupported(): boolean
                        // @ts-ignore
                        public setMinSpareThreads(minSpareThreads: number /*int*/): void
                        // @ts-ignore
                        public getMinSpareThreads(): number /*int*/
                        // @ts-ignore
                        public setMaxThreads(maxThreads: number /*int*/): void
                        // @ts-ignore
                        public getMaxThreads(): number /*int*/
                        // @ts-ignore
                        public setThreadPriority(threadPriority: number /*int*/): void
                        // @ts-ignore
                        public getThreadPriority(): number /*int*/
                        // @ts-ignore
                        public getMaxKeepAliveRequests(): number /*int*/
                        // @ts-ignore
                        public setMaxKeepAliveRequests(maxKeepAliveRequests: number /*int*/): void
                        // @ts-ignore
                        public setName(name: java.lang.String | string): void
                        // @ts-ignore
                        public getName(): string
                        // @ts-ignore
                        public setDomain(domain: java.lang.String | string): void
                        // @ts-ignore
                        public getDomain(): string
                        // @ts-ignore
                        public setDaemon(b: boolean): void
                        // @ts-ignore
                        public getDaemon(): boolean
                        // @ts-ignore
                        abstract getDeferAccept(): boolean
                        // @ts-ignore
                        public addNegotiatedProtocol(negotiableProtocol: java.lang.String | string): void
                        // @ts-ignore
                        public hasNegotiableProtocols(): boolean
                        // @ts-ignore
                        public setHandler(handler: org.apache.tomcat.util.net.AbstractEndpoint.Handler<S>): void
                        // @ts-ignore
                        public getHandler(): org.apache.tomcat.util.net.AbstractEndpoint.Handler<S>
                        /**
                         * Generic property setter called when a property for which a specific
                         * setter already exists within the
                         * {@link org.apache.coyote.ProtocolHandler} needs to be made available to
                         * sub-components. The specific setter will call this method to populate the
                         * attributes.
                         * @param name  Name of property to set
                         * @param value The value to set the property to
                         */
                        // @ts-ignore
                        public setAttribute(name: java.lang.String | string, value: java.lang.Object | any): void
                        /**
                         * Used by sub-components to retrieve configuration information.
                         * @param key The name of the property for which the value should be
                         *             retrieved
                         * @return The value of the specified property
                         */
                        // @ts-ignore
                        public getAttribute(key: java.lang.String | string): any
                        // @ts-ignore
                        public setProperty(name: java.lang.String | string, value: java.lang.String | string): boolean
                        // @ts-ignore
                        public getProperty(name: java.lang.String | string): string
                        /**
                         * Return the amount of threads that are managed by the pool.
                         * @return the amount of threads that are managed by the pool
                         */
                        // @ts-ignore
                        public getCurrentThreadCount(): number /*int*/
                        /**
                         * Return the amount of threads that are in use
                         * @return the amount of threads that are in use
                         */
                        // @ts-ignore
                        public getCurrentThreadsBusy(): number /*int*/
                        // @ts-ignore
                        public isRunning(): boolean
                        // @ts-ignore
                        public isPaused(): boolean
                        // @ts-ignore
                        public createExecutor(): void
                        // @ts-ignore
                        public shutdownExecutor(): void
                        /**
                         * Process the given SocketWrapper with the given status. Used to trigger
                         * processing as if the Poller (for those endpoints that have one)
                         * selected the socket.
                         * @param socketWrapper The socket wrapper to process
                         * @param event         The socket event to be processed
                         * @param dispatch      Should the processing be performed on a new
                         *                           container thread
                         * @return if processing was triggered successfully
                         */
                        // @ts-ignore
                        public processSocket(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<S>, event: org.apache.tomcat.util.net.SocketEvent, dispatch: boolean): boolean
                        // @ts-ignore
                        abstract createSocketProcessor(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<S>, event: org.apache.tomcat.util.net.SocketEvent): org.apache.tomcat.util.net.SocketProcessorBase<S>
                        // @ts-ignore
                        public abstract bind(): void
                        // @ts-ignore
                        public abstract unbind(): void
                        // @ts-ignore
                        public abstract startInternal(): void
                        // @ts-ignore
                        public abstract stopInternal(): void
                        // @ts-ignore
                        public init(): void
                        // @ts-ignore
                        public start(): void
                        // @ts-ignore
                        startAcceptorThreads(): void
                        /**
                         * Pause the endpoint, which will stop it accepting new connections and
                         * unlock the acceptor.
                         */
                        // @ts-ignore
                        public pause(): void
                        /**
                         * Resume the endpoint, which will make it start accepting new connections
                         * again.
                         */
                        // @ts-ignore
                        public resume(): void
                        // @ts-ignore
                        public stop(): void
                        // @ts-ignore
                        public destroy(): void
                        // @ts-ignore
                        abstract getLog(): org.apache.juli.logging.Log
                        // @ts-ignore
                        initializeConnectionLatch(): org.apache.tomcat.util.threads.LimitLatch
                        // @ts-ignore
                        countUpOrAwaitConnection(): void
                        // @ts-ignore
                        countDownConnection(): number /*long*/
                        /**
                         * Close the server socket (to prevent further connections) if the server
                         * socket was originally bound on {@link #start()} (rather than on
                         * {@link #init()}).
                         * @see #getBindOnInit()
                         */
                        // @ts-ignore
                        public closeServerSocketGraceful(): void
                        /**
                         * Actually close the server socket but don't perform any other clean-up.
                         * @throws IOException If an error occurs closing the socket
                         */
                        // @ts-ignore
                        abstract doCloseServerSocket(): void
                        // @ts-ignore
                        abstract serverSocketAccept(): U
                        // @ts-ignore
                        abstract setSocketOptions(socket: U): boolean
                        /**
                         * Close the socket when the connection has to be immediately closed when
                         * an error occurs while configuring the accepted socket, allocating
                         * a wrapper for the socket, or trying to dispatch it for processing.
                         * @param socket The newly accepted socket
                         */
                        // @ts-ignore
                        abstract closeSocket(socket: U): void
                        // @ts-ignore
                        destroySocket(socket: U): void
                    }
                }
            }
        }
    }
}
