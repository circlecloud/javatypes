declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * Implementation of a secure socket channel for NIO2.
                     */
                    // @ts-ignore
                    class SecureNio2Channel extends org.apache.tomcat.util.net.Nio2Channel {
                        // @ts-ignore
                        constructor(bufHandler: org.apache.tomcat.util.net.SocketBufferHandler, endpoint: org.apache.tomcat.util.net.Nio2Endpoint)
                        // @ts-ignore
                        netInBuffer: java.nio.ByteBuffer
                        // @ts-ignore
                        netOutBuffer: java.nio.ByteBuffer
                        // @ts-ignore
                        sslEngine: javax.net.ssl.SSLEngine
                        // @ts-ignore
                        readonly endpoint: org.apache.tomcat.util.net.Nio2Endpoint
                        // @ts-ignore
                        sniComplete: boolean
                        // @ts-ignore
                        closed: boolean
                        // @ts-ignore
                        closing: boolean
                        // @ts-ignore
                        public reset(channel: java.nio.channels.AsynchronousSocketChannel, socket: org.apache.tomcat.util.net.SocketWrapperBase<org.apache.tomcat.util.net.Nio2Channel>): void
                        // @ts-ignore
                        public free(): void
                        /**
                         * Flush the channel.
                         * @return <code>true</code> if the network buffer has been flushed out and
                         *          is empty else <code>false</code> (as a future)
                         */
                        // @ts-ignore
                        public flush(): java.util.concurrent.Future<java.lang.Boolean>
                        /**
                         * Performs SSL handshake, non blocking, but performs NEED_TASK on the same
                         * thread. Hence, you should never call this method using your Acceptor
                         * thread, as you would slow down your system significantly.
                         * <p>
                         * The return for this operation is 0 if the handshake is complete and a
                         * positive value if it is not complete. In the event of a positive value
                         * coming back, the appropriate read/write will already have been called
                         * with an appropriate CompletionHandler.
                         * @return 0 if hand shake is complete, negative if the socket needs to
                         *          close and positive if the handshake is incomplete
                         * @throws IOException if an error occurs during the handshake
                         */
                        // @ts-ignore
                        public handshake(): number /*int*/
                        // @ts-ignore
                        handshakeInternal(async: boolean): number /*int*/
                        /**
                         * Force a blocking handshake to take place for this key.
                         * This requires that both network and application buffers have been emptied out prior to this call taking place, or a
                         * IOException will be thrown.
                         * @throws IOException - if an IO exception occurs or if application or network buffers contain data
                         * @throws java.net.SocketTimeoutException - if a socket operation timed out
                         */
                        // @ts-ignore
                        public rehandshake(): void
                        /**
                         * Executes all the tasks needed on the same thread.
                         * @return the status
                         */
                        // @ts-ignore
                        tasks(): javax.net.ssl.SSLEngineResult.HandshakeStatus
                        /**
                         * Performs the WRAP function
                         * @return the result
                         * @throws IOException An IO error occurred
                         */
                        // @ts-ignore
                        handshakeWrap(): javax.net.ssl.SSLEngineResult
                        /**
                         * Perform handshake unwrap
                         * @return the result
                         * @throws IOException An IO error occurred
                         */
                        // @ts-ignore
                        handshakeUnwrap(): javax.net.ssl.SSLEngineResult
                        /**
                         * Sends a SSL close message, will not physically close the connection here.<br>
                         * To close the connection, you could do something like
                         * <pre><code>
                         * close();
                         * while (isOpen() &amp;&amp; !myTimeoutFunction()) Thread.sleep(25);
                         * if ( isOpen() ) close(true); //forces a close if you timed out
                         * </code></pre>
                         * @throws IOException if an I/O error occurs
                         * @throws IOException if there is data on the outgoing network buffer and we are unable to flush it
                         */
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        public close(force: boolean): void
                        /**
                         * Reads a sequence of bytes from this channel into the given buffer.
                         * @param dst The buffer into which bytes are to be transferred
                         * @return The number of bytes read, possibly zero, or <tt>-1</tt> if the channel has reached end-of-stream
                         * @throws IllegalStateException if the handshake was not completed
                         */
                        // @ts-ignore
                        public read(dst: java.nio.ByteBuffer): java.util.concurrent.Future<java.lang.Integer | number>
                        /**
                         * Writes a sequence of bytes to this channel from the given buffer.
                         * @param src The buffer from which bytes are to be retrieved
                         * @return The number of bytes written, possibly zero
                         */
                        // @ts-ignore
                        public write(src: java.nio.ByteBuffer): java.util.concurrent.Future<java.lang.Integer | number>
                        // @ts-ignore
                        public read<A>(dst: java.nio.ByteBuffer, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit, attachment: A, handler: java.nio.channels.CompletionHandler<java.lang.Integer | number, any>): void
                        // @ts-ignore
                        public read<A>(dsts: java.nio.ByteBuffer[], offset: number /*int*/, length: number /*int*/, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit, attachment: A, handler: java.nio.channels.CompletionHandler<java.lang.Long | number, any>): void
                        // @ts-ignore
                        public write<A>(src: java.nio.ByteBuffer, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit, attachment: A, handler: java.nio.channels.CompletionHandler<java.lang.Integer | number, any>): void
                        // @ts-ignore
                        public write<A>(srcs: java.nio.ByteBuffer[], offset: number /*int*/, length: number /*int*/, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit, attachment: A, handler: java.nio.channels.CompletionHandler<java.lang.Long | number, any>): void
                        // @ts-ignore
                        public isHandshakeComplete(): boolean
                        // @ts-ignore
                        public isClosing(): boolean
                        // @ts-ignore
                        public getSslEngine(): javax.net.ssl.SSLEngine
                        // @ts-ignore
                        public getEmptyBuf(): java.nio.ByteBuffer
                    }
                }
            }
        }
    }
}
