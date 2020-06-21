declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                // @ts-ignore
                class CompletableFutureRpcWrapper extends java.lang.Object implements com.rabbitmq.client.impl.RpcWrapper {
                    // @ts-ignore
                    constructor(method: com.rabbitmq.client.Method, completableFuture: java.util.concurrent.CompletableFuture<com.rabbitmq.client.Command>)
                    // @ts-ignore
                    public canHandleReply(command: com.rabbitmq.client.impl.AMQCommand): boolean
                    // @ts-ignore
                    public complete(command: com.rabbitmq.client.impl.AMQCommand): void
                    // @ts-ignore
                    public shutdown(signal: com.rabbitmq.client.ShutdownSignalException): void
                }
            }
        }
    }
}
