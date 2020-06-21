declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace nio {
                    /**
                     * Contract to create {@link ByteBuffer}s.
                     * @see NioParams
                     * @since 5.5.0
                     */
                    // @ts-ignore
                    interface ByteBufferFactory {
                        /**
                         * Create the {@link ByteBuffer} that contains inbound frames.
                         * This buffer is the network buffer for plain connections.
                         * When using SSL/TLS, this buffer isn't directly connected to
                         * the network, the encrypted read buffer is.
                         * @param nioContext
                         * @return 
                         */
                        // @ts-ignore
                        createReadBuffer(nioContext: com.rabbitmq.client.impl.nio.NioContext): java.nio.ByteBuffer
                        /**
                         * Create the {@link ByteBuffer} that contains outbound frames.
                         * This buffer is the network buffer for plain connections.
                         * When using SSL/TLS, this buffer isn't directed connected to
                         * the network, the encrypted write buffer is.
                         * @param nioContext
                         * @return 
                         */
                        // @ts-ignore
                        createWriteBuffer(nioContext: com.rabbitmq.client.impl.nio.NioContext): java.nio.ByteBuffer
                        /**
                         * Create the network read {@link ByteBuffer}.
                         * This buffer contains encrypted frames read from the network.
                         * The {@link javax.net.ssl.SSLEngine} decrypts frame and pass them
                         * over to the read buffer.
                         * @param nioContext
                         * @return 
                         */
                        // @ts-ignore
                        createEncryptedReadBuffer(nioContext: com.rabbitmq.client.impl.nio.NioContext): java.nio.ByteBuffer
                        /**
                         * Create the network write {@link ByteBuffer}.
                         * This buffer contains encrypted outbound frames. These
                         * frames come from the write buffer that sends them through
                         * the {@link javax.net.ssl.SSLContext} for encryption to
                         * this buffer.
                         * @param nioContext
                         * @return 
                         */
                        // @ts-ignore
                        createEncryptedWriteBuffer(nioContext: com.rabbitmq.client.impl.nio.NioContext): java.nio.ByteBuffer
                    }
                }
            }
        }
    }
}
