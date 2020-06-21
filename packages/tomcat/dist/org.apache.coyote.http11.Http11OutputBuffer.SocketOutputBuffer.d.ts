declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                namespace Http11OutputBuffer {
                    /**
                     * This class is an output buffer which will write data to a socket.
                     */
                    // @ts-ignore
                    class SocketOutputBuffer extends java.lang.Object implements org.apache.coyote.http11.HttpOutputBuffer {
                        // @ts-ignore
                        constructor()
                        /**
                         * Write chunk.
                         */
                        // @ts-ignore
                        public doWrite(chunk: java.nio.ByteBuffer): number /*int*/
                        // @ts-ignore
                        public getBytesWritten(): number /*long*/
                        // @ts-ignore
                        public end(): void
                        // @ts-ignore
                        public flush(): void
                    }
                }
            }
        }
    }
}
