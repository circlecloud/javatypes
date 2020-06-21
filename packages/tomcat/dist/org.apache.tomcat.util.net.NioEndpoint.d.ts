declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * NIO tailored thread pool, providing the following services:
                     * <ul>
                     * <li>Socket acceptor thread</li>
                     * <li>Socket poller thread</li>
                     * <li>Worker threads pool</li>
                     * </ul>
                     * When switching to Java 5, there's an opportunity to use the virtual
                     * machine's thread pool.
                     * @author Mladen Turk
                     * @author Remy Maucherat
                     */
                    // @ts-ignore
                    class NioEndpoint extends org.apache.tomcat.util.net.AbstractJsseEndpoint<org.apache.tomcat.util.net.NioChannel, java.nio.channels.SocketChannel> {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static readonly OP_REGISTER: number /*int*/
                        /**
                         * Generic properties, introspected
                         */
                        // @ts-ignore
                        public setProperty(name: java.lang.String | string, value: java.lang.String | string): boolean
                        // @ts-ignore
                        public setUseInheritedChannel(useInheritedChannel: boolean): void
                        // @ts-ignore
                        public getUseInheritedChannel(): boolean
                        // @ts-ignore
                        public setPollerThreadPriority(pollerThreadPriority: number /*int*/): void
                        // @ts-ignore
                        public getPollerThreadPriority(): number /*int*/
                        // @ts-ignore
                        public setPollerThreadCount(pollerThreadCount: number /*int*/): void
                        // @ts-ignore
                        public getPollerThreadCount(): number /*int*/
                        // @ts-ignore
                        public setSelectorTimeout(timeout: number /*long*/): void
                        // @ts-ignore
                        public getSelectorTimeout(): number /*long*/
                        /**
                         * Return an available poller in true round robin fashion.
                         * @return The next poller in sequence
                         */
                        // @ts-ignore
                        public getPoller0(): org.apache.tomcat.util.net.NioEndpoint.Poller
                        // @ts-ignore
                        public setSelectorPool(selectorPool: org.apache.tomcat.util.net.NioSelectorPool): void
                        /**
                         * Is deferAccept supported?
                         */
                        // @ts-ignore
                        public getDeferAccept(): boolean
                        /**
                         * Number of keep-alive sockets.
                         * @return The number of sockets currently in the keep-alive state waiting
                         *          for the next request to be received on the socket
                         */
                        // @ts-ignore
                        public getKeepAliveCount(): number /*int*/
                        /**
                         * Initialize the endpoint.
                         */
                        // @ts-ignore
                        public bind(): void
                        // @ts-ignore
                        initServerSocket(): void
                        /**
                         * Start the NIO endpoint, creating acceptor, poller threads.
                         */
                        // @ts-ignore
                        public startInternal(): void
                        /**
                         * Stop the endpoint. This will cause all processing threads to stop.
                         */
                        // @ts-ignore
                        public stopInternal(): void
                        /**
                         * Deallocate NIO memory pools, and close server socket.
                         */
                        // @ts-ignore
                        public unbind(): void
                        // @ts-ignore
                        doCloseServerSocket(): void
                        // @ts-ignore
                        public getSelectorPool(): org.apache.tomcat.util.net.NioSelectorPool
                        // @ts-ignore
                        getStopLatch(): java.util.concurrent.CountDownLatch
                        // @ts-ignore
                        setStopLatch(stopLatch: java.util.concurrent.CountDownLatch): void
                        /**
                         * Process the specified connection.
                         * @param socket The socket channel
                         * @return <code>true</code> if the socket was correctly configured
                         *   and processing may continue, <code>false</code> if the socket needs to be
                         *   close immediately
                         */
                        // @ts-ignore
                        setSocketOptions(socket: java.nio.channels.SocketChannel): boolean
                        // @ts-ignore
                        closeSocket(socket: java.nio.channels.SocketChannel): void
                        // @ts-ignore
                        getServerSocket(): java.nio.channels.NetworkChannel
                        // @ts-ignore
                        serverSocketAccept(): java.nio.channels.SocketChannel
                        // @ts-ignore
                        getLog(): org.apache.juli.logging.Log
                        // @ts-ignore
                        createSocketProcessor(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<org.apache.tomcat.util.net.NioChannel>, event: org.apache.tomcat.util.net.SocketEvent): org.apache.tomcat.util.net.SocketProcessorBase<org.apache.tomcat.util.net.NioChannel>
                    }
                }
            }
        }
    }
}
