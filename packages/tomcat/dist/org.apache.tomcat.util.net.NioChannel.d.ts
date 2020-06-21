declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * Base class for a SocketChannel wrapper used by the endpoint.
                     * This way, logic for a SSL socket channel remains the same as for
                     * a non SSL, making sure we don't need to code for any exception cases.
                     * @version 1.0
                     */
                    // @ts-ignore
                    class NioChannel extends java.lang.Object implements java.nio.channels.ByteChannel {
                        // @ts-ignore
                        constructor(channel: java.nio.channels.SocketChannel, bufHandler: org.apache.tomcat.util.net.SocketBufferHandler)
                        // @ts-ignore
                        static readonly sm: org.apache.tomcat.util.res.StringManager
                        // @ts-ignore
                        static readonly emptyBuf: java.nio.ByteBuffer
                        // @ts-ignore
                        sc: java.nio.channels.SocketChannel
                        // @ts-ignore
                        socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<org.apache.tomcat.util.net.NioChannel>
                        // @ts-ignore
                        readonly bufHandler: org.apache.tomcat.util.net.SocketBufferHandler
                        // @ts-ignore
                        poller: org.apache.tomcat.util.net.NioEndpoint.Poller
                        /**
                         * Reset the channel
                         * @throws IOException If a problem was encountered resetting the channel
                         */
                        // @ts-ignore
                        public reset(): void
                        /**
                         * Free the channel memory
                         */
                        // @ts-ignore
                        public free(): void
                        /**
                         * Returns true if the network buffer has been flushed out and is empty.
                         * @param block     Unused. May be used when overridden
                         * @param s         Unused. May be used when overridden
                         * @param timeout   Unused. May be used when overridden
                         * @return Always returns <code>true</code> since there is no network buffer
                         *          in the regular channel
                         * @throws IOException Never for non-secure channel
                         */
                        // @ts-ignore
                        public flush(block: boolean, s: java.nio.channels.Selector, timeout: number /*long*/): boolean
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
                        /**
                         * Writes a sequence of bytes to this channel from the given buffer.
                         * @param src The buffer from which bytes are to be retrieved
                         * @return The number of bytes written, possibly zero
                         * @throws IOException If some other I/O error occurs
                         */
                        // @ts-ignore
                        public write(src: java.nio.ByteBuffer): number /*int*/
                        /**
                         * Reads a sequence of bytes from this channel into the given buffer.
                         * @param dst The buffer into which bytes are to be transferred
                         * @return The number of bytes read, possibly zero, or <tt>-1</tt> if the
                         *          channel has reached end-of-stream
                         * @throws IOException If some other I/O error occurs
                         */
                        // @ts-ignore
                        public read(dst: java.nio.ByteBuffer): number /*int*/
                        // @ts-ignore
                        public getAttachment(): any
                        // @ts-ignore
                        public getBufHandler(): org.apache.tomcat.util.net.SocketBufferHandler
                        // @ts-ignore
                        public getPoller(): org.apache.tomcat.util.net.NioEndpoint.Poller
                        // @ts-ignore
                        public getIOChannel(): java.nio.channels.SocketChannel
                        // @ts-ignore
                        public isClosing(): boolean
                        // @ts-ignore
                        public isHandshakeComplete(): boolean
                        /**
                         * Performs SSL handshake hence is a no-op for the non-secure
                         * implementation.
                         * @param read  Unused in non-secure implementation
                         * @param write Unused in non-secure implementation
                         * @return Always returns zero
                         * @throws IOException Never for non-secure channel
                         */
                        // @ts-ignore
                        public handshake(read: boolean, write: boolean): number /*int*/
                        // @ts-ignore
                        public setPoller(poller: org.apache.tomcat.util.net.NioEndpoint.Poller): void
                        // @ts-ignore
                        public setIOChannel(IOChannel: java.nio.channels.SocketChannel): void
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public getOutboundRemaining(): number /*int*/
                        /**
                         * Return true if the buffer wrote data. NO-OP for non-secure channel.
                         * @return Always returns {#code false} for non-secure channel
                         * @throws IOException Never for non-secure channel
                         */
                        // @ts-ignore
                        public flushOutbound(): boolean
                        /**
                         * This method should be used to check the interrupt status before
                         * attempting a write.
                         * If a thread has been interrupted and the interrupt has not been cleared
                         * then an attempt to write to the socket will fail. When this happens the
                         * socket is removed from the poller without the socket being selected. This
                         * results in a connection limit leak for NIO as the endpoint expects the
                         * socket to be selected even in error conditions.
                         * @throws IOException If the current thread was interrupted
                         */
                        // @ts-ignore
                        checkInterruptStatus(): void
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
