declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * @since 3.3.0
                     */
                    // @ts-ignore
                    class RecoveryAwareChannelManager extends com.rabbitmq.client.impl.ChannelManager {
                        // @ts-ignore
                        constructor(workService: com.rabbitmq.client.impl.ConsumerWorkService, channelMax: number /*int*/)
                        // @ts-ignore
                        constructor(workService: com.rabbitmq.client.impl.ConsumerWorkService, channelMax: number /*int*/, threadFactory: java.util.concurrent.ThreadFactory)
                        // @ts-ignore
                        constructor(workService: com.rabbitmq.client.impl.ConsumerWorkService, channelMax: number /*int*/, threadFactory: java.util.concurrent.ThreadFactory, metricsCollector: com.rabbitmq.client.MetricsCollector)
                        // @ts-ignore
                        instantiateChannel(connection: com.rabbitmq.client.impl.AMQConnection, channelNumber: number /*int*/, workService: com.rabbitmq.client.impl.ConsumerWorkService): com.rabbitmq.client.impl.ChannelN
                    }
                }
            }
        }
    }
}
