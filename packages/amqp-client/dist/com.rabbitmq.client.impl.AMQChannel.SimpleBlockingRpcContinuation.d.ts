declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace AMQChannel {
                    // @ts-ignore
                    class SimpleBlockingRpcContinuation extends com.rabbitmq.client.impl.AMQChannel.BlockingRpcContinuation<com.rabbitmq.client.impl.AMQCommand> {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(method: com.rabbitmq.client.Method)
                        // @ts-ignore
                        public transformReply(command: com.rabbitmq.client.impl.AMQCommand): com.rabbitmq.client.impl.AMQCommand
                    }
                }
            }
        }
    }
}
