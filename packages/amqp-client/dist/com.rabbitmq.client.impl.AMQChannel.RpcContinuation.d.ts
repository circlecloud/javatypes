declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace AMQChannel {
                    // @ts-ignore
                    interface RpcContinuation {
                        // @ts-ignore
                        handleCommand(command: com.rabbitmq.client.impl.AMQCommand): void
                        /**
                         * @return true if the reply command can be handled for this request
                         */
                        // @ts-ignore
                        canHandleReply(command: com.rabbitmq.client.impl.AMQCommand): boolean
                        // @ts-ignore
                        handleShutdownSignal(signal: com.rabbitmq.client.ShutdownSignalException): void
                    }
                }
            }
        }
    }
}
