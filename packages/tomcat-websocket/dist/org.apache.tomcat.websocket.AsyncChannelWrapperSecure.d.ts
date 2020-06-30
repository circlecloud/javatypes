declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                /**
                 * Wraps the {@link AsynchronousSocketChannel} with SSL/TLS. This needs a lot
                 * more testing before it can be considered robust.
                 */
                // @ts-ignore
                class AsyncChannelWrapperSecure extends java.lang.Object implements org.apache.tomcat.websocket.AsyncChannelWrapper {
                    // @ts-ignore
                    constructor(socketChannel: java.nio.channels.AsynchronousSocketChannel, sslEngine: javax.net.ssl.SSLEngine)
                    // @ts-ignore
                    public read(dst: java.nio.ByteBuffer): java.util.concurrent.Future<java.lang.Integer | number>
                    // @ts-ignore
                    public read<B, A extends B>(dst: java.nio.ByteBuffer, attachment: A, handler: java.nio.channels.CompletionHandler<java.lang.Integer | number, B>): void
                    // @ts-ignore
                    public write(src: java.nio.ByteBuffer): java.util.concurrent.Future<java.lang.Integer | number>
                    // @ts-ignore
                    public write<B, A extends B>(srcs: java.nio.ByteBuffer[], offset: number /*int*/, length: number /*int*/, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit, attachment: A, handler: java.nio.channels.CompletionHandler<java.lang.Long | number, B>): void
                    // @ts-ignore
                    public close(): void
                    // @ts-ignore
                    public handshake(): java.util.concurrent.Future<java.lang.Void>
                }
            }
        }
    }
}
