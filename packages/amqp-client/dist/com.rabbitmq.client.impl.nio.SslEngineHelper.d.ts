declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace nio {
                    // @ts-ignore
                    class SslEngineHelper extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static doHandshake(socketChannel: java.nio.channels.SocketChannel, engine: javax.net.ssl.SSLEngine): boolean
                        // @ts-ignore
                        public static write(socketChannel: java.nio.channels.WritableByteChannel, engine: javax.net.ssl.SSLEngine, plainOut: java.nio.ByteBuffer, cypherOut: java.nio.ByteBuffer): void
                        // @ts-ignore
                        public static close(channel: java.nio.channels.WritableByteChannel, engine: javax.net.ssl.SSLEngine): void
                    }
                }
            }
        }
    }
}
