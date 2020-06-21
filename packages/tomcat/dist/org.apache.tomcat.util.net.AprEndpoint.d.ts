declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * APR tailored thread pool, providing the following services:
                     * <ul>
                     * <li>Socket acceptor thread</li>
                     * <li>Socket poller thread</li>
                     * <li>Sendfile thread</li>
                     * <li>Worker threads pool</li>
                     * </ul>
                     * When switching to Java 5, there's an opportunity to use the virtual
                     * machine's thread pool.
                     * @author Mladen Turk
                     * @author Remy Maucherat
                     */
                    // @ts-ignore
                    class AprEndpoint extends org.apache.tomcat.util.net.AbstractEndpoint<java.lang.Long | number, java.lang.Long | number> implements org.apache.tomcat.jni.SSLContext.SNICallBack {
                        // @ts-ignore
                        constructor()
                        /**
                         * Root APR memory pool.
                         */
                        // @ts-ignore
                        rootPool: number /*long*/
                        /**
                         * Server socket "pointer".
                         */
                        // @ts-ignore
                        serverSock: number /*long*/
                        /**
                         * APR memory pool for the server socket.
                         */
                        // @ts-ignore
                        serverSockPool: number /*long*/
                        /**
                         * SSL context.
                         */
                        // @ts-ignore
                        sslContext: number /*long*/
                        /**
                         * Defer accept.
                         */
                        // @ts-ignore
                        deferAccept: boolean
                        /**
                         * Size of the sendfile (= concurrent files which can be served).
                         */
                        // @ts-ignore
                        sendfileSize: number /*int*/
                        /**
                         * Poll interval, in microseconds. The smaller the value, the more CPU the poller
                         * will use, but the more responsive to activity it will be.
                         */
                        // @ts-ignore
                        pollTime: number /*int*/
                        /**
                         * The socket poller.
                         */
                        // @ts-ignore
                        poller: org.apache.tomcat.util.net.AprEndpoint.Poller
                        /**
                         * The static file sender.
                         */
                        // @ts-ignore
                        sendfile: org.apache.tomcat.util.net.AprEndpoint.Sendfile
                        // @ts-ignore
                        public setDeferAccept(deferAccept: boolean): void
                        // @ts-ignore
                        public getDeferAccept(): boolean
                        // @ts-ignore
                        public setIpv6v6only(ipv6v6only: boolean): void
                        // @ts-ignore
                        public getIpv6v6only(): boolean
                        // @ts-ignore
                        public setSendfileSize(sendfileSize: number /*int*/): void
                        // @ts-ignore
                        public getSendfileSize(): number /*int*/
                        // @ts-ignore
                        public getPollTime(): number /*int*/
                        // @ts-ignore
                        public setPollTime(pollTime: number /*int*/): void
                        // @ts-ignore
                        public setUseSendfile(useSendfile: boolean): void
                        // @ts-ignore
                        public getPoller(): org.apache.tomcat.util.net.AprEndpoint.Poller
                        // @ts-ignore
                        public getSendfile(): org.apache.tomcat.util.net.AprEndpoint.Sendfile
                        // @ts-ignore
                        getSslConfigType(): org.apache.tomcat.util.net.SSLHostConfig.Type
                        // @ts-ignore
                        public getLocalAddress(): java.net.InetSocketAddress
                        /**
                         * This endpoint does not support <code>-1</code> for unlimited connections,
                         * nor does it support setting this attribute while the endpoint is running.
                         * {@inheritDoc}
                         */
                        // @ts-ignore
                        public setMaxConnections(maxConnections: number /*int*/): void
                        /**
                         * Obtain the number of kept alive sockets.
                         * @return The number of open sockets currently managed by the Poller
                         */
                        // @ts-ignore
                        public getKeepAliveCount(): number /*int*/
                        /**
                         * Obtain the number of sendfile sockets.
                         * @return The number of sockets currently managed by the Sendfile poller.
                         */
                        // @ts-ignore
                        public getSendfileCount(): number /*int*/
                        /**
                         * Initialize the endpoint.
                         */
                        // @ts-ignore
                        public bind(): void
                        // @ts-ignore
                        createSSLContext(sslHostConfig: org.apache.tomcat.util.net.SSLHostConfig): void
                        // @ts-ignore
                        releaseSSLContext(sslHostConfig: org.apache.tomcat.util.net.SSLHostConfig): void
                        // @ts-ignore
                        public getSslContext(sniHostName: java.lang.String | string): number /*long*/
                        // @ts-ignore
                        public isAlpnSupported(): boolean
                        /**
                         * Start the APR endpoint, creating acceptor, poller and sendfile threads.
                         */
                        // @ts-ignore
                        public startInternal(): void
                        /**
                         * Stop the endpoint. This will cause all processing threads to stop.
                         */
                        // @ts-ignore
                        public stopInternal(): void
                        /**
                         * Deallocate APR memory pools, and close server socket.
                         */
                        // @ts-ignore
                        public unbind(): void
                        // @ts-ignore
                        doCloseServerSocket(): void
                        /**
                         * Process the specified connection.
                         * @param socketWrapper The socket wrapper
                         * @return <code>true</code> if the socket was correctly configured
                         *   and processing may continue, <code>false</code> if the socket needs to be
                         *   close immediately
                         */
                        // @ts-ignore
                        setSocketOptions(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<java.lang.Long | number>): boolean
                        /**
                         * Allocate a new poller of the specified size.
                         * @param size The size
                         * @param pool The pool from which the poller will be allocated
                         * @param timeout The timeout
                         * @return the poller pointer
                         */
                        // @ts-ignore
                        allocatePoller(size: number /*int*/, pool: number /*long*/, timeout: number /*int*/): number /*long*/
                        /**
                         * Process given socket. This is called when the socket has been
                         * accepted.
                         * @param socket The socket
                         * @return <code>true</code> if the socket was correctly configured
                         *   and processing may continue, <code>false</code> if the socket needs to be
                         *   close immediately
                         */
                        // @ts-ignore
                        setSocketOptions(socket: java.lang.Long | number): boolean
                        // @ts-ignore
                        serverSocketAccept(): number
                        /**
                         * Process the given socket. Typically keep alive or upgraded protocol.
                         * @param socket    The socket to process
                         * @param event     The event to process
                         * @return <code>true</code> if the processing completed normally otherwise
                         *          <code>false</code> which indicates an error occurred and that the
                         *          socket should be closed
                         */
                        // @ts-ignore
                        processSocket(socket: number /*long*/, event: org.apache.tomcat.util.net.SocketEvent): boolean
                        // @ts-ignore
                        createSocketProcessor(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<java.lang.Long | number>, event: org.apache.tomcat.util.net.SocketEvent): org.apache.tomcat.util.net.SocketProcessorBase<java.lang.Long | number>
                        // @ts-ignore
                        closeSocket(socket: java.lang.Long | number): void
                        // @ts-ignore
                        destroySocket(socket: java.lang.Long | number): void
                        // @ts-ignore
                        getLog(): org.apache.juli.logging.Log
                    }
                }
            }
        }
    }
}
