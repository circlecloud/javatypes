declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace nio {
                    /**
                     * Default {@link ByteBufferFactory} that creates heap-based {@link ByteBuffer}s.
                     * This behavior can be changed by passing in a custom {@link Function<Integer, ByteBuffer>}
                     * to the constructor.
                     * @see NioParams
                     * @see ByteBufferFactory
                     * @since 5.5.0
                     */
                    // @ts-ignore
                    class DefaultByteBufferFactory extends java.lang.Object implements com.rabbitmq.client.impl.nio.ByteBufferFactory {
                        // @ts-ignore
                        constructor(allocator: java.util.function$.Function<java.lang.Integer | number, java.nio.ByteBuffer>)
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public createReadBuffer(nioContext: com.rabbitmq.client.impl.nio.NioContext): java.nio.ByteBuffer
                        // @ts-ignore
                        public createWriteBuffer(nioContext: com.rabbitmq.client.impl.nio.NioContext): java.nio.ByteBuffer
                        // @ts-ignore
                        public createEncryptedReadBuffer(nioContext: com.rabbitmq.client.impl.nio.NioContext): java.nio.ByteBuffer
                        // @ts-ignore
                        public createEncryptedWriteBuffer(nioContext: com.rabbitmq.client.impl.nio.NioContext): java.nio.ByteBuffer
                        // @ts-ignore
                        createEncryptedByteBuffer(nioContext: com.rabbitmq.client.impl.nio.NioContext): java.nio.ByteBuffer
                    }
                }
            }
        }
    }
}
