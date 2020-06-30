declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                /**
                 * Generally, just passes calls straight to the wrapped
                 * {@link AsynchronousSocketChannel}. In some cases exceptions may be swallowed
                 * to save them being swallowed by the calling code.
                 */
                // @ts-ignore
                class AsyncChannelWrapperNonSecure extends java.lang.Object implements org.apache.tomcat.websocket.AsyncChannelWrapper {
                    // @ts-ignore
                    constructor(socketChannel: java.nio.channels.AsynchronousSocketChannel)
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
