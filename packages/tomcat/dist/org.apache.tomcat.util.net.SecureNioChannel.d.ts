declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * Implementation of a secure socket channel
                     */
                    // @ts-ignore
                    class SecureNioChannel extends org.apache.tomcat.util.net.NioChannel {
                        // @ts-ignore
                        constructor(channel: java.nio.channels.SocketChannel, bufHandler: org.apache.tomcat.util.net.SocketBufferHandler, pool: org.apache.tomcat.util.net.NioSelectorPool, endpoint: org.apache.tomcat.util.net.NioEndpoint)
                        // @ts-ignore
                        netInBuffer: java.nio.ByteBuffer
                        // @ts-ignore
                        netOutBuffer: java.nio.ByteBuffer
                        // @ts-ignore
                        sslEngine: javax.net.ssl.SSLEngine
                        // @ts-ignore
                        sniComplete: boolean
                        // @ts-ignore
                        handshakeComplete: boolean
                        // @ts-ignore
                        handshakeStatus: javax.net.ssl.SSLEngineResult.HandshakeStatus
                        // @ts-ignore
                        closed: boolean
                        // @ts-ignore
                        closing: boolean
                        // @ts-ignore
                        pool: org.apache.tomcat.util.net.NioSelectorPool
                        // @ts-ignore
                        public reset(): void
                        // @ts-ignore
                        public free(): void
                        /**
                         * Flush the channel.
                         * @param block     Should a blocking write be used?
                         * @param s         The selector to use for blocking, if null then a busy
                         *                   write will be initiated
                         * @param timeout   The timeout for this write operation in milliseconds,
                         *                   -1 means no timeout
                         * @return <code>true</code> if the network buffer has been flushed out and
                         *          is empty else <code>false</code>
                         * @throws IOException If an I/O error occurs during the operation
                         */
                        // @ts-ignore
                        public flush(block: boolean, s: java.nio.channels.Selector, timeout: number /*long*/): boolean
                        /**
                         * Flushes the buffer to the network, non blocking
                         * @param buf ByteBuffer
                         * @return boolean true if the buffer has been emptied out, false otherwise
                         * @throws IOException An IO error occurred writing data
                         */
                        // @ts-ignore
                        flush(buf: java.nio.ByteBuffer): boolean
                        /**
                         * Performs SSL handshake, non blocking, but performs NEED_TASK on the same
                         * thread. Hence, you should never call this method using your Acceptor
                         * thread, as you would slow down your system significantly. If the return
                         * value from this method is positive, the selection key should be
                         * registered interestOps given by the return value.
                         * @param read boolean - true if the underlying channel is readable
                         * @param write boolean - true if the underlying channel is writable
                         * @return 0 if hand shake is complete, -1 if an error (other than an
                         *          IOException) occurred, otherwise it returns a SelectionKey
                         *          interestOps value
                         * @throws IOException If an I/O error occurs during the handshake or if the
                         *                      handshake fails during wrapping or unwrapping
                         */
                        // @ts-ignore
                        public handshake(read: boolean, write: boolean): number /*int*/
                        /**
                         * Force a blocking handshake to take place for this key.
                         * This requires that both network and application buffers have been emptied out prior to this call taking place, or a
                         * IOException will be thrown.
                         * @param timeout - timeout in milliseconds for each socket operation
                         * @throws IOException - if an IO exception occurs or if application or network buffers contain data
                         * @throws SocketTimeoutException - if a socket operation timed out
                         */
                        // @ts-ignore
                        public rehandshake(timeout: number /*long*/): void
                        /**
                         * Executes all the tasks needed on the same thread.
                         * @return the status
                         */
                        // @ts-ignore
                        tasks(): javax.net.ssl.SSLEngineResult.HandshakeStatus
                        /**
                         * Performs the WRAP function
                         * @param doWrite boolean
                         * @return the result
                         * @throws IOException An IO error occurred
                         */
                        // @ts-ignore
                        handshakeWrap(doWrite: boolean): javax.net.ssl.SSLEngineResult
                        /**
                         * Perform handshake unwrap
                         * @param doread boolean
                         * @return the result
                         * @throws IOException An IO error occurred
                         */
                        // @ts-ignore
                        handshakeUnwrap(doread: boolean): javax.net.ssl.SSLEngineResult
                        /**
                         * Sends a SSL close message, will not physically close the connection here.
                         * <br>To close the connection, you could do something like
                         * <pre><code>
                         * close();
                         * while (isOpen() &amp;&amp; !myTimeoutFunction()) Thread.sleep(25);
                         * if ( isOpen() ) close(true); //forces a close if you timed out
                         * </code></pre>
                         * @throws IOException if an I/O error occurs
                         * @throws IOException if there is data on the outgoing network buffer and
                         *                      we are unable to flush it
                         */
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        public close(force: boolean): void
                        /**
                         * Reads a sequence of bytes from this channel into the given buffer.
                         * @param dst The buffer into which bytes are to be transferred
                         * @return The number of bytes read, possibly zero, or <tt>-1</tt> if the
                         *          channel has reached end-of-stream
                         * @throws IOException If some other I/O error occurs
                         * @throws IllegalArgumentException if the destination buffer is different
                         *                                   than getBufHandler().getReadBuffer()
                         */
                        // @ts-ignore
                        public read(dst: java.nio.ByteBuffer): number /*int*/
                        /**
                         * Writes a sequence of bytes to this channel from the given buffer.
                         * @param src The buffer from which bytes are to be retrieved
                         * @return The number of bytes written, possibly zero
                         * @throws IOException If some other I/O error occurs
                         */
                        // @ts-ignore
                        public write(src: java.nio.ByteBuffer): number /*int*/
                        // @ts-ignore
                        public getOutboundRemaining(): number /*int*/
                        // @ts-ignore
                        public flushOutbound(): boolean
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
