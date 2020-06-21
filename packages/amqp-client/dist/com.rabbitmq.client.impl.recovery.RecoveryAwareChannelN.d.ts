declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * {@link com.rabbitmq.client.impl.ChannelN} modification that keeps track of delivery
                     * tags and avoids sending <pre>basic.ack</pre>, <pre>basic.nack</pre>, and <pre>basic.reject</pre>
                     * for stale tags.
                     * @since 3.3.0
                     */
                    // @ts-ignore
                    class RecoveryAwareChannelN extends com.rabbitmq.client.impl.ChannelN {
                        /**
                         * Construct a new channel on the given connection with the given
                         * channel number. Usually not called directly - call
                         * Connection.createChannel instead.
                         * @param connection    The connection associated with this channel
                         * @param channelNumber The channel number to be associated with this channel
                         * @param workService   service for managing this channel's consumer callbacks
                         */
                        // @ts-ignore
                        constructor(connection: com.rabbitmq.client.impl.AMQConnection, channelNumber: number /*int*/, workService: com.rabbitmq.client.impl.ConsumerWorkService)
                        /**
                         * Construct a new channel on the given connection with the given
                         * channel number. Usually not called directly - call
                         * Connection.createChannel instead.
                         * @param connection    The connection associated with this channel
                         * @param channelNumber The channel number to be associated with this channel
                         * @param workService   service for managing this channel's consumer callbacks
                         * @param metricsCollector service for managing metrics
                         */
                        // @ts-ignore
                        constructor(connection: com.rabbitmq.client.impl.AMQConnection, channelNumber: number /*int*/, workService: com.rabbitmq.client.impl.ConsumerWorkService, metricsCollector: com.rabbitmq.client.MetricsCollector)
                        // @ts-ignore
                        processDelivery(command: com.rabbitmq.client.Command, method: com.rabbitmq.client.impl.AMQImpl.Basic.Deliver): void
                        // @ts-ignore
                        public basicAck(deliveryTag: number /*long*/, multiple: boolean): void
                        // @ts-ignore
                        public basicNack(deliveryTag: number /*long*/, multiple: boolean, requeue: boolean): void
                        // @ts-ignore
                        public basicReject(deliveryTag: number /*long*/, requeue: boolean): void
                        // @ts-ignore
                        public getMaxSeenDeliveryTag(): number /*long*/
                        // @ts-ignore
                        public getActiveDeliveryTagOffset(): number /*long*/
                    }
                }
            }
        }
    }
}
