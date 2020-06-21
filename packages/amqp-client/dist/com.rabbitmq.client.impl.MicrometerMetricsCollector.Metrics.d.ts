declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace MicrometerMetricsCollector {
                    // @ts-ignore
                    class Metrics extends java.lang.Enum<com.rabbitmq.client.impl.MicrometerMetricsCollector.Metrics> {
                        // @ts-ignore
                        readonly CONNECTIONS: com.rabbitmq.client.impl.MicrometerMetricsCollector.Metrics
                        // @ts-ignore
                        readonly CHANNELS: com.rabbitmq.client.impl.MicrometerMetricsCollector.Metrics
                        // @ts-ignore
                        readonly PUBLISHED_MESSAGES: com.rabbitmq.client.impl.MicrometerMetricsCollector.Metrics
                        // @ts-ignore
                        readonly CONSUMED_MESSAGES: com.rabbitmq.client.impl.MicrometerMetricsCollector.Metrics
                        // @ts-ignore
                        readonly ACKNOWLEDGED_MESSAGES: com.rabbitmq.client.impl.MicrometerMetricsCollector.Metrics
                        // @ts-ignore
                        readonly REJECTED_MESSAGES: com.rabbitmq.client.impl.MicrometerMetricsCollector.Metrics
                        // @ts-ignore
                        readonly FAILED_TO_PUBLISH_MESSAGES: com.rabbitmq.client.impl.MicrometerMetricsCollector.Metrics
                        // @ts-ignore
                        readonly ACKED_PUBLISHED_MESSAGES: com.rabbitmq.client.impl.MicrometerMetricsCollector.Metrics
                        // @ts-ignore
                        readonly NACKED_PUBLISHED_MESSAGES: com.rabbitmq.client.impl.MicrometerMetricsCollector.Metrics
                        // @ts-ignore
                        readonly UNROUTED_PUBLISHED_MESSAGES: com.rabbitmq.client.impl.MicrometerMetricsCollector.Metrics
                        // @ts-ignore
                        values(): com.rabbitmq.client.impl.MicrometerMetricsCollector.Metrics[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): com.rabbitmq.client.impl.MicrometerMetricsCollector.Metrics
                    }
                }
            }
        }
    }
}
