declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    /**
                     * Thread safe non blocking selector pool
                     */
                    // @ts-ignore
                    class NioSelectorPool extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        static readonly SHARED: boolean
                        // @ts-ignore
                        blockingSelector: org.apache.tomcat.util.net.NioBlockingSelector
                        // @ts-ignore
                        SHARED_SELECTOR: java.nio.channels.Selector
                        // @ts-ignore
                        maxSelectors: number /*int*/
                        // @ts-ignore
                        sharedSelectorTimeout: number /*long*/
                        // @ts-ignore
                        maxSpareSelectors: number /*int*/
                        // @ts-ignore
                        enabled: boolean
                        // @ts-ignore
                        active: java.util.concurrent.atomic.AtomicInteger
                        // @ts-ignore
                        spare: java.util.concurrent.atomic.AtomicInteger
                        // @ts-ignore
                        selectors: java.util.concurrent.ConcurrentLinkedQueue<java.nio.channels.Selector>
                        // @ts-ignore
                        getSharedSelector(): java.nio.channels.Selector
                        // @ts-ignore
                        public get(): java.nio.channels.Selector
                        // @ts-ignore
                        public put(s: java.nio.channels.Selector): void
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        public open(): void
                        /**
                         * Performs a write using the bytebuffer for data to be written and a
                         * selector to block (if blocking is requested). If the
                         * <code>selector</code> parameter is null, and blocking is requested then
                         * it will perform a busy write that could take up a lot of CPU cycles.
                         * @param buf           The buffer containing the data, we will write as long as <code>(buf.hasRemaining()==true)</code>
                         * @param socket        The socket to write data to
                         * @param selector      The selector to use for blocking, if null then a busy write will be initiated
                         * @param writeTimeout  The timeout for this write operation in milliseconds, -1 means no timeout
                         * @param block         <code>true</code> to perform a blocking write
                         *                       otherwise a non-blocking write will be performed
                         * @return int - returns the number of bytes written
                         * @throws EOFException if write returns -1
                         * @throws SocketTimeoutException if the write times out
                         * @throws IOException if an IO Exception occurs in the underlying socket logic
                         */
                        // @ts-ignore
                        public write(buf: java.nio.ByteBuffer, socket: org.apache.tomcat.util.net.NioChannel, selector: java.nio.channels.Selector, writeTimeout: number /*long*/, block: boolean): number /*int*/
                        /**
                         * Performs a blocking read using the bytebuffer for data to be read and a selector to block.
                         * If the <code>selector</code> parameter is null, then it will perform a busy read that could
                         * take up a lot of CPU cycles.
                         * @param buf ByteBuffer - the buffer containing the data, we will read as until we have read at least one byte or we timed out
                         * @param socket SocketChannel - the socket to write data to
                         * @param selector Selector - the selector to use for blocking, if null then a busy read will be initiated
                         * @param readTimeout long - the timeout for this read operation in milliseconds, -1 means no timeout
                         * @return int - returns the number of bytes read
                         * @throws EOFException if read returns -1
                         * @throws SocketTimeoutException if the read times out
                         * @throws IOException if an IO Exception occurs in the underlying socket logic
                         */
                        // @ts-ignore
                        public read(buf: java.nio.ByteBuffer, socket: org.apache.tomcat.util.net.NioChannel, selector: java.nio.channels.Selector, readTimeout: number /*long*/): number /*int*/
                        /**
                         * Performs a read using the bytebuffer for data to be read and a selector to register for events should
                         * you have the block=true.
                         * If the <code>selector</code> parameter is null, then it will perform a busy read that could
                         * take up a lot of CPU cycles.
                         * @param buf ByteBuffer - the buffer containing the data, we will read as until we have read at least one byte or we timed out
                         * @param socket SocketChannel - the socket to write data to
                         * @param selector Selector - the selector to use for blocking, if null then a busy read will be initiated
                         * @param readTimeout long - the timeout for this read operation in milliseconds, -1 means no timeout
                         * @param block - true if you want to block until data becomes available or timeout time has been reached
                         * @return int - returns the number of bytes read
                         * @throws EOFException if read returns -1
                         * @throws SocketTimeoutException if the read times out
                         * @throws IOException if an IO Exception occurs in the underlying socket logic
                         */
                        // @ts-ignore
                        public read(buf: java.nio.ByteBuffer, socket: org.apache.tomcat.util.net.NioChannel, selector: java.nio.channels.Selector, readTimeout: number /*long*/, block: boolean): number /*int*/
                        // @ts-ignore
                        public setMaxSelectors(maxSelectors: number /*int*/): void
                        // @ts-ignore
                        public setMaxSpareSelectors(maxSpareSelectors: number /*int*/): void
                        // @ts-ignore
                        public setEnabled(enabled: boolean): void
                        // @ts-ignore
                        public setSharedSelectorTimeout(sharedSelectorTimeout: number /*long*/): void
                        // @ts-ignore
                        public getMaxSelectors(): number /*int*/
                        // @ts-ignore
                        public getMaxSpareSelectors(): number /*int*/
                        // @ts-ignore
                        public isEnabled(): boolean
                        // @ts-ignore
                        public getSharedSelectorTimeout(): number /*long*/
                        // @ts-ignore
                        public getSelectors(): java.util.concurrent.ConcurrentLinkedQueue<java.nio.channels.Selector>
                        // @ts-ignore
                        public getSpare(): java.util.concurrent.atomic.AtomicInteger
                    }
                }
            }
        }
    }
}
