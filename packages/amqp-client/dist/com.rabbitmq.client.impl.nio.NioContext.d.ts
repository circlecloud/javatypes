declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace nio {
                    /**
                     * Context when creating resources for a NIO-based connection.
                     * @see ByteBufferFactory
                     * @since 5.5.0
                     */
                    // @ts-ignore
                    class NioContext extends java.lang.Object {
                        /**
                         * NIO params.
                         * @return 
                         */
                        // @ts-ignore
                        public getNioParams(): com.rabbitmq.client.impl.nio.NioParams
                        /**
                         * {@link SSLEngine} for SSL/TLS connection.
                         * Null for plain connection.
                         * @return 
                         */
                        // @ts-ignore
                        public getSslEngine(): javax.net.ssl.SSLEngine
                    }
                }
            }
        }
    }
}
