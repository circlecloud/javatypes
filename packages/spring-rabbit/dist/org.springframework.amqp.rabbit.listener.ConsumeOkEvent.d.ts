declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * An {@link AmqpEvent} emitted by the listener container
                     * when consumer is subscribed to the queue.
                     * @author Gary Russell
                     * @author Artem Bilan
                     * @since 1.7.5
                     */
                    // @ts-ignore
                    class ConsumeOkEvent extends AmqpEvent {
                        /**
                         * Instantiate a {@link ConsumeOkEvent} based on the provided
                         * consumer, queue and consumer tag.
                         * @param source the consumer subscribed to the queue
                         * @param queue the queue to consume
                         * @param consumerTag the tag indicate a consumer subscription
                         */
                        // @ts-ignore
                        constructor(source: java.lang.Object | any, queue: java.lang.String | string, consumerTag: java.lang.String | string)
                        /**
                         * Obtain the queue name a consumer has been subscribed.
                         * @return the queue name a consumer subscribed.
                         * @since 1.7.7
                         */
                        // @ts-ignore
                        public getQueue(): string
                        /**
                         * Obtain the consumer tag assigned to the consumer.
                         * @return the consumer tag for subscription.
                         * @since 1.7.7
                         */
                        // @ts-ignore
                        public getConsumerTag(): string
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
