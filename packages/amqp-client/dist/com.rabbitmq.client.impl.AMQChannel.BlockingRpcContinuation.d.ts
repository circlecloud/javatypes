declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace AMQChannel {
                    // @ts-ignore
                    abstract class BlockingRpcContinuation<T> extends java.lang.Object implements com.rabbitmq.client.impl.AMQChannel.RpcContinuation {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(request: com.rabbitmq.client.Method)
                        // @ts-ignore
                        public readonly _blocker: com.rabbitmq.utility.BlockingValueOrException<T, com.rabbitmq.client.ShutdownSignalException>
                        // @ts-ignore
                        readonly request: com.rabbitmq.client.Method
                        // @ts-ignore
                        public handleCommand(command: com.rabbitmq.client.impl.AMQCommand): void
                        // @ts-ignore
                        public handleShutdownSignal(signal: com.rabbitmq.client.ShutdownSignalException): void
                        // @ts-ignore
                        public getReply(): T
                        // @ts-ignore
                        public getReply(timeout: number /*int*/): T
                        // @ts-ignore
                        public canHandleReply(command: com.rabbitmq.client.impl.AMQCommand): boolean
                        // @ts-ignore
                        public abstract transformReply(command: com.rabbitmq.client.impl.AMQCommand): T
                        // @ts-ignore
                        public static isResponseCompatibleWithRequest(request: com.rabbitmq.client.Method, response: com.rabbitmq.client.Method): boolean
                    }
                }
            }
        }
    }
}
