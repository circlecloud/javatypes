declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace nio {
                    // @ts-ignore
                    class SocketChannelFrameHandlerFactory extends com.rabbitmq.client.impl.AbstractFrameHandlerFactory {
                        // @ts-ignore
                        constructor(connectionTimeout: number /*int*/, nioParams: com.rabbitmq.client.impl.nio.NioParams, ssl: boolean, sslContextFactory: com.rabbitmq.client.SslContextFactory)
                        // @ts-ignore
                        public create(addr: com.rabbitmq.client.Address, connectionName: java.lang.String | string): com.rabbitmq.client.impl.FrameHandler
                    }
                }
            }
        }
    }
}
