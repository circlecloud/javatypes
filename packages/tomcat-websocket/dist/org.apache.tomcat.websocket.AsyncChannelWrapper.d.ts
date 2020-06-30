declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                /**
                 * This is a wrapper for a {@link java.nio.channels.AsynchronousSocketChannel}
                 * that limits the methods available thereby simplifying the process of
                 * implementing SSL/TLS support since there are fewer methods to intercept.
                 */
                // @ts-ignore
                interface AsyncChannelWrapper {
                    // @ts-ignore
                    read(dst: java.nio.ByteBuffer): java.util.concurrent.Future<java.lang.Integer | number>
                    // @ts-ignore
                    read<B, A extends B>(dst: java.nio.ByteBuffer, attachment: A, handler: java.nio.channels.CompletionHandler<java.lang.Integer | number, B>): void
                    // @ts-ignore
                    write(src: java.nio.ByteBuffer): java.util.concurrent.Future<java.lang.Integer | number>
                    // @ts-ignore
                    write<B, A extends B>(srcs: java.nio.ByteBuffer[], offset: number /*int*/, length: number /*int*/, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit, attachment: A, handler: java.nio.channels.CompletionHandler<java.lang.Long | number, B>): void
                    // @ts-ignore
                    close(): void
                    // @ts-ignore
                    handshake(): java.util.concurrent.Future<java.lang.Void>
                }
            }
        }
    }
}
