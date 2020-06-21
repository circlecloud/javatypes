declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                // @ts-ignore
                class RpcContinuationRpcWrapper extends java.lang.Object implements com.rabbitmq.client.impl.RpcWrapper {
                    // @ts-ignore
                    constructor(continuation: com.rabbitmq.client.impl.AMQChannel.RpcContinuation)
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
