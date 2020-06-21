declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace nio {
                    /**
                     * Bridge between the byte buffer and stream worlds.
                     */
                    // @ts-ignore
                    class SslEngineByteBufferOutputStream extends java.io.OutputStream {
                        // @ts-ignore
                        constructor(sslEngine: javax.net.ssl.SSLEngine, plainOut: java.nio.ByteBuffer, cypherOut: java.nio.ByteBuffer, channel: java.nio.channels.WritableByteChannel)
                        // @ts-ignore
                        public write(b: number /*int*/): void
                        // @ts-ignore
                        public flush(): void
                    }
                }
            }
        }
    }
}
