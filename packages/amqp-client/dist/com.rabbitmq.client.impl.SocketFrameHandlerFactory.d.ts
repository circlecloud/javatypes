declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                // @ts-ignore
                class SocketFrameHandlerFactory extends com.rabbitmq.client.impl.AbstractFrameHandlerFactory {
                    // @ts-ignore
                    constructor(connectionTimeout: number /*int*/, socketFactory: javax.net.SocketFactory, configurator: com.rabbitmq.client.SocketConfigurator, ssl: boolean)
                    // @ts-ignore
                    constructor(connectionTimeout: number /*int*/, socketFactory: javax.net.SocketFactory, configurator: com.rabbitmq.client.SocketConfigurator, ssl: boolean, shutdownExecutor: java.util.concurrent.ExecutorService)
                    // @ts-ignore
                    constructor(connectionTimeout: number /*int*/, socketFactory: javax.net.SocketFactory, configurator: com.rabbitmq.client.SocketConfigurator, ssl: boolean, shutdownExecutor: java.util.concurrent.ExecutorService, sslContextFactory: com.rabbitmq.client.SslContextFactory)
                    // @ts-ignore
                    public create(addr: com.rabbitmq.client.Address, connectionName: java.lang.String | string): com.rabbitmq.client.impl.FrameHandler
                    // @ts-ignore
                    createSocket(connectionName: java.lang.String | string): java.net.Socket
                    // @ts-ignore
                    public create(sock: java.net.Socket): com.rabbitmq.client.impl.FrameHandler
                }
            }
        }
    }
}
