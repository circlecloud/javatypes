declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Dropwizard Metrics implementation of {@link MetricsCollector}.
                 * Note transactions are not supported (see {@link MetricsCollector}.
                 * Metrics provides out-of-the-box support for report backends like JMX,
                 * Graphite, Ganglia, or plain HTTP. See Metrics documentation for
                 * more details.
                 * @see MetricsCollector
                 */
                // @ts-ignore
                class StandardMetricsCollector extends com.rabbitmq.client.impl.AbstractMetricsCollector {
                    // @ts-ignore
                    constructor(registry: MetricRegistry, metricsPrefix: java.lang.String | string)
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(metricRegistry: MetricRegistry)
                    // @ts-ignore
                    incrementConnectionCount(connection: com.rabbitmq.client.Connection): void
                    // @ts-ignore
                    decrementConnectionCount(connection: com.rabbitmq.client.Connection): void
                    // @ts-ignore
                    incrementChannelCount(channel: com.rabbitmq.client.Channel): void
                    // @ts-ignore
                    decrementChannelCount(channel: com.rabbitmq.client.Channel): void
                    // @ts-ignore
                    markPublishedMessage(): void
                    // @ts-ignore
                    markMessagePublishFailed(): void
                    // @ts-ignore
                    markConsumedMessage(): void
                    // @ts-ignore
                    markAcknowledgedMessage(): void
                    // @ts-ignore
                    markRejectedMessage(): void
                    // @ts-ignore
                    markMessagePublishAcknowledged(): void
                    // @ts-ignore
                    markMessagePublishNotAcknowledged(): void
                    // @ts-ignore
                    markPublishedMessageUnrouted(): void
                    // @ts-ignore
                    public getMetricRegistry(): MetricRegistry
                    // @ts-ignore
                    public getConnections(): Counter
                    // @ts-ignore
                    public getChannels(): Counter
                    // @ts-ignore
                    public getPublishedMessages(): Meter
                    // @ts-ignore
                    public getConsumedMessages(): Meter
                    // @ts-ignore
                    public getAcknowledgedMessages(): Meter
                    // @ts-ignore
                    public getRejectedMessages(): Meter
                    // @ts-ignore
                    public getFailedToPublishMessages(): Meter
                    // @ts-ignore
                    public getPublishAcknowledgedMessages(): Meter
                    // @ts-ignore
                    public getPublishNotAcknowledgedMessages(): Meter
                    // @ts-ignore
                    public getPublishUnroutedMessages(): Meter
                }
            }
        }
    }
}
