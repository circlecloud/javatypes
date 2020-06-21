declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace nio {
                    /**
                     * Bridge between {@link NioQueue} and JDK's {@link BlockingQueue}.
                     * @see NioQueue
                     * @since 5.5.0
                     */
                    // @ts-ignore
                    class BlockingQueueNioQueue extends java.lang.Object implements com.rabbitmq.client.impl.nio.NioQueue {
                        // @ts-ignore
                        constructor(delegate: java.util.concurrent.BlockingQueue<com.rabbitmq.client.impl.nio.WriteRequest>, writeEnqueuingTimeoutInMs: number /*int*/)
                        // @ts-ignore
                        public offer(writeRequest: com.rabbitmq.client.impl.nio.WriteRequest): boolean
                        // @ts-ignore
                        public size(): number /*int*/
                        // @ts-ignore
                        public poll(): com.rabbitmq.client.impl.nio.WriteRequest
                        // @ts-ignore
                        public isEmpty(): boolean
                    }
                }
            }
        }
    }
}
