declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace nio {
                    // @ts-ignore
                    class SocketChannelFrameHandler extends java.lang.Object implements com.rabbitmq.client.impl.FrameHandler {
                        // @ts-ignore
                        constructor(state: com.rabbitmq.client.impl.nio.SocketChannelFrameHandlerState)
                        // @ts-ignore
                        public getLocalAddress(): java.net.InetAddress
                        // @ts-ignore
                        public getLocalPort(): number /*int*/
                        // @ts-ignore
                        public getAddress(): java.net.InetAddress
                        // @ts-ignore
                        public getPort(): number /*int*/
                        // @ts-ignore
                        public setTimeout(timeoutMs: number /*int*/): void
                        // @ts-ignore
                        public getTimeout(): number /*int*/
                        // @ts-ignore
                        public sendHeader(): void
                        // @ts-ignore
                        public initialize(connection: com.rabbitmq.client.impl.AMQConnection): void
                        // @ts-ignore
                        public readFrame(): com.rabbitmq.client.impl.Frame
                        // @ts-ignore
                        public writeFrame(frame: com.rabbitmq.client.impl.Frame): void
                        // @ts-ignore
                        public flush(): void
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        public getState(): com.rabbitmq.client.impl.nio.SocketChannelFrameHandlerState
                    }
                }
            }
        }
    }
}
