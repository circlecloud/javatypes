declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace nio {
                    /**
                     * Sub-class of {@link FrameBuilder} that unwraps crypted data from the network.
                     * @since 4.4.0
                     */
                    // @ts-ignore
                    class SslEngineFrameBuilder extends com.rabbitmq.client.impl.nio.FrameBuilder {
                        // @ts-ignore
                        constructor(sslEngine: javax.net.ssl.SSLEngine, plainIn: java.nio.ByteBuffer, cipherIn: java.nio.ByteBuffer, channel: java.nio.channels.ReadableByteChannel)
                        // @ts-ignore
                        somethingToRead(): boolean
                    }
                }
            }
        }
    }
}
