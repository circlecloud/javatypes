declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Base class for {@link MetricsCollector}.
                 * Implements tricky logic such as keeping track of acknowledged and
                 * rejected messages. Sub-classes just need to implement
                 * the logic to increment their metrics.
                 * Note transactions are not supported (see {@link MetricsCollector}.
                 * @see MetricsCollector
                 */
                // @ts-ignore
                abstract class AbstractMetricsCollector extends java.lang.Object implements com.rabbitmq.client.MetricsCollector {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public newConnection(connection: com.rabbitmq.client.Connection): void
                    // @ts-ignore
                    public closeConnection(connection: com.rabbitmq.client.Connection): void
                    // @ts-ignore
                    public newChannel(channel: com.rabbitmq.client.Channel): void
                    // @ts-ignore
                    public closeChannel(channel: com.rabbitmq.client.Channel): void
                    // @ts-ignore
                    public basicPublish(channel: com.rabbitmq.client.Channel): void
                    // @ts-ignore
                    public basicPublishFailure(channel: com.rabbitmq.client.Channel, cause: java.lang.Throwable | Error): void
                    // @ts-ignore
                    public basicPublishAck(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/, multiple: boolean): void
                    // @ts-ignore
                    public basicPublishNack(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/, multiple: boolean): void
                    // @ts-ignore
                    public basicPublishUnrouted(channel: com.rabbitmq.client.Channel): void
                    // @ts-ignore
                    public basicConsume(channel: com.rabbitmq.client.Channel, consumerTag: java.lang.String | string, autoAck: boolean): void
                    // @ts-ignore
                    public basicCancel(channel: com.rabbitmq.client.Channel, consumerTag: java.lang.String | string): void
                    // @ts-ignore
                    public consumedMessage(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/, autoAck: boolean): void
                    // @ts-ignore
                    public consumedMessage(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/, consumerTag: java.lang.String | string): void
                    // @ts-ignore
                    public basicAck(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/, multiple: boolean): void
                    // @ts-ignore
                    public basicNack(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/): void
                    // @ts-ignore
                    public basicReject(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/): void
                    /**
                     * Clean inner state for close connections and channels.
                     * Inner state is automatically cleaned on connection
                     * and channel closing.
                     * Thus, this method is provided as a safety net, to be externally
                     * called periodically if closing of resources wouldn't work
                     * properly for some corner cases.
                     */
                    // @ts-ignore
                    public cleanStaleState(): void
                    /**
                     * Increments connection count.
                     * The connection object is passed in as complementary information
                     * and without any guarantee of not being null.
                     * @param connection the connection that has been created (can be null)
                     */
                    // @ts-ignore
                    abstract incrementConnectionCount(connection: com.rabbitmq.client.Connection): void
                    /**
                     * Decrements connection count.
                     * The connection object is passed in as complementary information
                     * and without any guarantee of not being null.
                     * @param connection the connection that has been closed (can be null)
                     */
                    // @ts-ignore
                    abstract decrementConnectionCount(connection: com.rabbitmq.client.Connection): void
                    /**
                     * Increments channel count.
                     * The channel object is passed in as complementary information
                     * and without any guarantee of not being null.
                     * @param channel the channel that has been created (can be null)
                     */
                    // @ts-ignore
                    abstract incrementChannelCount(channel: com.rabbitmq.client.Channel): void
                    /**
                     * Decrements channel count.
                     * The channel object is passed in as complementary information
                     * and without any guarantee of not being null.
                     * @param channel
                     */
                    // @ts-ignore
                    abstract decrementChannelCount(channel: com.rabbitmq.client.Channel): void
                    /**
                     * Marks the event of a published message.
                     */
                    // @ts-ignore
                    abstract markPublishedMessage(): void
                    /**
                     * Marks the event of a message publishing failure.
                     */
                    // @ts-ignore
                    abstract markMessagePublishFailed(): void
                    /**
                     * Marks the event of a consumed message.
                     */
                    // @ts-ignore
                    abstract markConsumedMessage(): void
                    /**
                     * Marks the event of an acknowledged message.
                     */
                    // @ts-ignore
                    abstract markAcknowledgedMessage(): void
                    /**
                     * Marks the event of a rejected message.
                     */
                    // @ts-ignore
                    abstract markRejectedMessage(): void
                    /**
                     * Marks the event of a message publishing acknowledgement.
                     */
                    // @ts-ignore
                    abstract markMessagePublishAcknowledged(): void
                    /**
                     * Marks the event of a message publishing not being acknowledged.
                     */
                    // @ts-ignore
                    abstract markMessagePublishNotAcknowledged(): void
                    /**
                     * Marks the event of a published message not being routed.
                     */
                    // @ts-ignore
                    abstract markPublishedMessageUnrouted(): void
                }
            }
        }
    }
}
