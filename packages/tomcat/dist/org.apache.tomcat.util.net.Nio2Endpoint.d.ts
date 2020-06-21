declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * NIO2 endpoint.
                     */
                    // @ts-ignore
                    class Nio2Endpoint extends org.apache.tomcat.util.net.AbstractJsseEndpoint<org.apache.tomcat.util.net.Nio2Channel, java.nio.channels.AsynchronousSocketChannel> {
                        // @ts-ignore
                        constructor()
                        /**
                         * Is deferAccept supported?
                         */
                        // @ts-ignore
                        public getDeferAccept(): boolean
                        /**
                         * Number of keep-alive sockets.
                         * @return Always returns -1.
                         */
                        // @ts-ignore
                        public getKeepAliveCount(): number /*int*/
                        /**
                         * Initialize the endpoint.
                         */
                        // @ts-ignore
                        public bind(): void
                        /**
                         * Start the NIO2 endpoint, creating acceptor.
                         */
                        // @ts-ignore
                        public startInternal(): void
                        // @ts-ignore
                        startAcceptorThreads(): void
                        // @ts-ignore
                        public resume(): void
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
                        public shutdownExecutor(): void
                        /**
                         * Process the specified connection.
                         * @param socket The socket channel
                         * @return <code>true</code> if the socket was correctly configured
                         *   and processing may continue, <code>false</code> if the socket needs to be
                         *   close immediately
                         */
                        // @ts-ignore
                        setSocketOptions(socket: java.nio.channels.AsynchronousSocketChannel): boolean
                        // @ts-ignore
                        closeSocket(socket: java.nio.channels.AsynchronousSocketChannel): void
                        // @ts-ignore
                        getServerSocket(): java.nio.channels.NetworkChannel
                        // @ts-ignore
                        serverSocketAccept(): java.nio.channels.AsynchronousSocketChannel
                        // @ts-ignore
                        getLog(): org.apache.juli.logging.Log
                        // @ts-ignore
                        createSocketProcessor(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<org.apache.tomcat.util.net.Nio2Channel>, event: org.apache.tomcat.util.net.SocketEvent): org.apache.tomcat.util.net.SocketProcessorBase<org.apache.tomcat.util.net.Nio2Channel>
                        // @ts-ignore
                        public static toNio2Timeout(timeout: number /*long*/): number /*long*/
                        // @ts-ignore
                        public static startInline(): void
                        // @ts-ignore
                        public static endInline(): void
                        // @ts-ignore
                        public static isInline(): boolean
                    }
                }
            }
        }
    }
}
