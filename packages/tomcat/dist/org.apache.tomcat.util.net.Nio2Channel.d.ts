declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * Base class for a SocketChannel wrapper used by the endpoint.
                     * This way, logic for a SSL socket channel remains the same as for
                     * a non SSL, making sure we don't need to code for any exception cases.
                     */
                    // @ts-ignore
                    class Nio2Channel extends java.lang.Object implements java.nio.channels.AsynchronousByteChannel {
                        // @ts-ignore
                        constructor(bufHandler: org.apache.tomcat.util.net.SocketBufferHandler)
                        // @ts-ignore
                        static readonly emptyBuf: java.nio.ByteBuffer
                        // @ts-ignore
                        sc: java.nio.channels.AsynchronousSocketChannel
                        // @ts-ignore
                        socket: org.apache.tomcat.util.net.SocketWrapperBase<org.apache.tomcat.util.net.Nio2Channel>
                        // @ts-ignore
                        readonly bufHandler: org.apache.tomcat.util.net.SocketBufferHandler
                        /**
                         * Reset the channel.
                         * @param channel The new async channel to associate with this NIO2 channel
                         * @param socket  The new socket to associate with this NIO2 channel
                         * @throws IOException If a problem was encountered resetting the channel
                         */
                        // @ts-ignore
                        public reset(channel: java.nio.channels.AsynchronousSocketChannel, socket: org.apache.tomcat.util.net.SocketWrapperBase<org.apache.tomcat.util.net.Nio2Channel>): void
                        /**
                         * Free the channel memory
                         */
                        // @ts-ignore
                        public free(): void
                        // @ts-ignore
                        public getSocket(): org.apache.tomcat.util.net.SocketWrapperBase<org.apache.tomcat.util.net.Nio2Channel>
                        /**
                         * Closes this channel.
                         * @throws IOException If an I/O error occurs
                         */
                        // @ts-ignore
                        public close(): void
                        /**
                         * Close the connection.
                         * @param force Should the underlying socket be forcibly closed?
                         * @throws IOException If closing the secure channel fails.
                         */
                        // @ts-ignore
                        public close(force: boolean): void
                        /**
                         * Tells whether or not this channel is open.
                         * @return <tt>true</tt> if, and only if, this channel is open
                         */
                        // @ts-ignore
                        public isOpen(): boolean
                        // @ts-ignore
                        public getBufHandler(): org.apache.tomcat.util.net.SocketBufferHandler
                        // @ts-ignore
                        public getIOChannel(): java.nio.channels.AsynchronousSocketChannel
                        // @ts-ignore
                        public isClosing(): boolean
                        // @ts-ignore
                        public isHandshakeComplete(): boolean
                        /**
                         * Performs SSL handshake hence is a no-op for the non-secure
                         * implementation.
                         * @return Always returns zero
                         * @throws IOException Never for non-secure channel
                         */
                        // @ts-ignore
                        public handshake(): number /*int*/
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public read(dst: java.nio.ByteBuffer): java.util.concurrent.Future<java.lang.Integer | number>
                        // @ts-ignore
                        public read<A>(dst: java.nio.ByteBuffer, attachment: A, handler: java.nio.channels.CompletionHandler<java.lang.Integer | number, any>): void
                        // @ts-ignore
                        public read<A>(dst: java.nio.ByteBuffer, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit, attachment: A, handler: java.nio.channels.CompletionHandler<java.lang.Integer | number, any>): void
                        // @ts-ignore
                        public read<A>(dsts: java.nio.ByteBuffer[], offset: number /*int*/, length: number /*int*/, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit, attachment: A, handler: java.nio.channels.CompletionHandler<java.lang.Long | number, any>): void
                        // @ts-ignore
                        public write(src: java.nio.ByteBuffer): java.util.concurrent.Future<java.lang.Integer | number>
                        // @ts-ignore
                        public write<A>(src: java.nio.ByteBuffer, attachment: A, handler: java.nio.channels.CompletionHandler<java.lang.Integer | number, any>): void
                        // @ts-ignore
                        public write<A>(src: java.nio.ByteBuffer, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit, attachment: A, handler: java.nio.channels.CompletionHandler<java.lang.Integer | number, any>): void
                        // @ts-ignore
                        public write<A>(srcs: java.nio.ByteBuffer[], offset: number /*int*/, length: number /*int*/, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit, attachment: A, handler: java.nio.channels.CompletionHandler<java.lang.Long | number, any>): void
                        // @ts-ignore
                        public flush(): java.util.concurrent.Future<java.lang.Boolean>
                        // @ts-ignore
                        public setAppReadBufHandler(handler: org.apache.tomcat.util.net.ApplicationBufferHandler): void
                        // @ts-ignore
                        getAppReadBufHandler(): org.apache.tomcat.util.net.ApplicationBufferHandler
                    }
                }
            }
        }
    }
}
