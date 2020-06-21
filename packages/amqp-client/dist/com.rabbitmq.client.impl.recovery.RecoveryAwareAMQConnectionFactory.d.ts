declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    // @ts-ignore
                    class RecoveryAwareAMQConnectionFactory extends java.lang.Object {
                        // @ts-ignore
                        constructor(params: com.rabbitmq.client.impl.ConnectionParams, factory: com.rabbitmq.client.impl.FrameHandlerFactory, addrs: java.util.List<com.rabbitmq.client.Address> | Array<com.rabbitmq.client.Address>)
                        // @ts-ignore
                        constructor(params: com.rabbitmq.client.impl.ConnectionParams, factory: com.rabbitmq.client.impl.FrameHandlerFactory, addressResolver: com.rabbitmq.client.AddressResolver)
                        // @ts-ignore
                        constructor(params: com.rabbitmq.client.impl.ConnectionParams, factory: com.rabbitmq.client.impl.FrameHandlerFactory, addressResolver: com.rabbitmq.client.AddressResolver, metricsCollector: com.rabbitmq.client.MetricsCollector)
                        /**
                         * @return an interface to the connection
                         * @throws java.io.IOException if it encounters a problem
                         */
                        // @ts-ignore
                        public newConnection(): com.rabbitmq.client.impl.recovery.RecoveryAwareAMQConnection
                        // @ts-ignore
                        createConnection(params: com.rabbitmq.client.impl.ConnectionParams, handler: com.rabbitmq.client.impl.FrameHandler, metricsCollector: com.rabbitmq.client.MetricsCollector): com.rabbitmq.client.impl.recovery.RecoveryAwareAMQConnection
                    }
                }
            }
        }
    }
}
