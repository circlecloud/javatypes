declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace nio {
                    /**
                     * Logic of the NIO loop.
                     */
                    // @ts-ignore
                    class NioLoop extends java.lang.Object implements java.lang.Runnable {
                        // @ts-ignore
                        constructor(nioParams: com.rabbitmq.client.impl.nio.NioParams, loopContext: com.rabbitmq.client.impl.nio.NioLoopContext)
                        // @ts-ignore
                        public run(): void
                        // @ts-ignore
                        handleIoError(state: com.rabbitmq.client.impl.nio.SocketChannelFrameHandlerState, ex: java.lang.Throwable | Error): void
                        // @ts-ignore
                        handleHeartbeatFailure(state: com.rabbitmq.client.impl.nio.SocketChannelFrameHandlerState): void
                        // @ts-ignore
                        needToDispatchIoError(state: com.rabbitmq.client.impl.nio.SocketChannelFrameHandlerState): boolean
                        // @ts-ignore
                        dispatchIoErrorToConnection(state: com.rabbitmq.client.impl.nio.SocketChannelFrameHandlerState, ex: java.lang.Throwable | Error): void
                        // @ts-ignore
                        dispatchShutdownToConnection(state: com.rabbitmq.client.impl.nio.SocketChannelFrameHandlerState): void
                        // @ts-ignore
                        dispatchShutdownToConnection(connectionShutdownRunnable: java.lang.Runnable, connectionName: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
