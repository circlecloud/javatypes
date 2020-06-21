declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace nio {
                    // @ts-ignore
                    class SocketChannelFrameHandlerState extends java.lang.Object {
                        // @ts-ignore
                        constructor(channel: java.nio.channels.SocketChannel, nioLoopsState: com.rabbitmq.client.impl.nio.NioLoopContext, nioParams: com.rabbitmq.client.impl.nio.NioParams, sslEngine: javax.net.ssl.SSLEngine)
                        // @ts-ignore
                        public getChannel(): java.nio.channels.SocketChannel
                        // @ts-ignore
                        public getWriteQueue(): com.rabbitmq.client.impl.nio.NioQueue
                        // @ts-ignore
                        public sendHeader(): void
                        // @ts-ignore
                        public write(frame: com.rabbitmq.client.impl.Frame): void
                        // @ts-ignore
                        public startReading(): void
                        // @ts-ignore
                        public getConnection(): com.rabbitmq.client.impl.AMQConnection
                        // @ts-ignore
                        public setConnection(connection: com.rabbitmq.client.impl.AMQConnection): void
                        // @ts-ignore
                        public setLastActivity(lastActivity: number /*long*/): void
                        // @ts-ignore
                        public getLastActivity(): number /*long*/
                    }
                }
            }
        }
    }
}
