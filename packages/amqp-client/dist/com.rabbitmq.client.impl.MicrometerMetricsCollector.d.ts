declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Micrometer implementation of {@link MetricsCollector}.
                 * Note transactions are not supported (see {@link MetricsCollector}.
                 * Micrometer provides out-of-the-box support for report backends like JMX,
                 * Graphite, Ganglia, Atlas, Datadog, etc. See Micrometer documentation for
                 * more details.
                 * Note Micrometer requires Java 8 or more, so does this {@link MetricsCollector}.
                 * @see MetricsCollector
                 * @since 4.3.0
                 */
                // @ts-ignore
                class MicrometerMetricsCollector extends com.rabbitmq.client.impl.AbstractMetricsCollector {
                    // @ts-ignore
                    constructor(registry: MeterRegistry)
                    // @ts-ignore
                    constructor(registry: MeterRegistry, prefix: java.lang.String | string)
                    // @ts-ignore
                    constructor(registry: MeterRegistry, prefix: java.lang.String | string, ...tags: java.lang.String[] | string[])
                    // @ts-ignore
                    constructor(registry: MeterRegistry, prefix: java.lang.String | string, tags: java.lang.Iterable<Tag>)
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
                    public getConnections(): java.util.concurrent.atomic.AtomicLong
                    // @ts-ignore
                    public getChannels(): java.util.concurrent.atomic.AtomicLong
                    // @ts-ignore
                    public getPublishedMessages(): Counter
                    // @ts-ignore
                    public getFailedToPublishMessages(): Counter
                    // @ts-ignore
                    public getAckedPublishedMessages(): Counter
                    // @ts-ignore
                    public getNackedPublishedMessages(): Counter
                    // @ts-ignore
                    public getUnroutedPublishedMessages(): Counter
                    // @ts-ignore
                    public getConsumedMessages(): Counter
                    // @ts-ignore
                    public getAcknowledgedMessages(): Counter
                    // @ts-ignore
                    public getRejectedMessages(): Counter
                }
            }
        }
    }
}
