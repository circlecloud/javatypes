declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    // @ts-ignore
                    class NioBlockingSelector extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        static readonly sm: org.apache.tomcat.util.res.StringManager
                        // @ts-ignore
                        sharedSelector: java.nio.channels.Selector
                        // @ts-ignore
                        poller: org.apache.tomcat.util.net.NioBlockingSelector.BlockPoller
                        // @ts-ignore
                        public open(selector: java.nio.channels.Selector): void
                        // @ts-ignore
                        public close(): void
                        /**
                         * Performs a blocking write using the bytebuffer for data to be written
                         * If the <code>selector</code> parameter is null, then it will perform a busy write that could
                         * take up a lot of CPU cycles.
                         * @param buf ByteBuffer - the buffer containing the data, we will write as long as <code>(buf.hasRemaining()==true)</code>
                         * @param socket SocketChannel - the socket to write data to
                         * @param writeTimeout long - the timeout for this write operation in milliseconds, -1 means no timeout
                         * @return int - returns the number of bytes written
                         * @throws EOFException if write returns -1
                         * @throws SocketTimeoutException if the write times out
                         * @throws IOException if an IO Exception occurs in the underlying socket logic
                         */
                        // @ts-ignore
                        public write(buf: java.nio.ByteBuffer, socket: org.apache.tomcat.util.net.NioChannel, writeTimeout: number /*long*/): number /*int*/
                        /**
                         * Performs a blocking read using the bytebuffer for data to be read
                         * If the <code>selector</code> parameter is null, then it will perform a busy read that could
                         * take up a lot of CPU cycles.
                         * @param buf ByteBuffer - the buffer containing the data, we will read as until we have read at least one byte or we timed out
                         * @param socket SocketChannel - the socket to write data to
                         * @param readTimeout long - the timeout for this read operation in milliseconds, -1 means no timeout
                         * @return int - returns the number of bytes read
                         * @throws EOFException if read returns -1
                         * @throws SocketTimeoutException if the read times out
                         * @throws IOException if an IO Exception occurs in the underlying socket logic
                         */
                        // @ts-ignore
                        public read(buf: java.nio.ByteBuffer, socket: org.apache.tomcat.util.net.NioChannel, readTimeout: number /*long*/): number /*int*/
                    }
                }
            }
        }
    }
}
