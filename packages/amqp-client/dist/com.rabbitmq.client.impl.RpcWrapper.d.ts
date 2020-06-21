declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                // @ts-ignore
                interface RpcWrapper {
                    // @ts-ignore
                    canHandleReply(command: com.rabbitmq.client.impl.AMQCommand): boolean
                    // @ts-ignore
                    complete(command: com.rabbitmq.client.impl.AMQCommand): void
                    // @ts-ignore
                    shutdown(signal: com.rabbitmq.client.ShutdownSignalException): void
                }
            }
        }
    }
}
