declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace nio {
                    /**
                     * Bridge between the byte buffer and stream worlds.
                     */
                    // @ts-ignore
                    class ByteBufferOutputStream extends java.io.OutputStream {
                        // @ts-ignore
                        constructor(channel: java.nio.channels.WritableByteChannel, buffer: java.nio.ByteBuffer)
                        // @ts-ignore
                        public write(b: number /*int*/): void
                        // @ts-ignore
                        public flush(): void
                        // @ts-ignore
                        public static drain(channel: java.nio.channels.WritableByteChannel, buffer: java.nio.ByteBuffer): void
                    }
                }
            }
        }
    }
}
