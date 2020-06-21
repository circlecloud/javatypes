declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * {@link com.rabbitmq.client.impl.AMQConnection} modification that uses {@link com.rabbitmq.client.impl.recovery.RecoveryAwareChannelN}
                     * @since 3.3.0
                     */
                    // @ts-ignore
                    class RecoveryAwareAMQConnection extends com.rabbitmq.client.impl.AMQConnection {
                        // @ts-ignore
                        constructor(params: com.rabbitmq.client.impl.ConnectionParams, handler: com.rabbitmq.client.impl.FrameHandler, metricsCollector: com.rabbitmq.client.MetricsCollector)
                        // @ts-ignore
                        constructor(params: com.rabbitmq.client.impl.ConnectionParams, handler: com.rabbitmq.client.impl.FrameHandler)
                        // @ts-ignore
                        instantiateChannelManager(channelMax: number /*int*/, threadFactory: java.util.concurrent.ThreadFactory): com.rabbitmq.client.impl.recovery.RecoveryAwareChannelManager
                    }
                }
            }
        }
    }
}
