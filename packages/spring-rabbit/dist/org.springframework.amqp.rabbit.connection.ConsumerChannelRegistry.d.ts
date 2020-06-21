declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * Consumers register their primary channels with this class. This is used
                     * to ensure that, when using transactions, the resource holder doesn't
                     * close the primary channel being used by the Consumer.
                     * This was previously in ConnectionFactoryUtils, but it caused a class
                     * tangle with RabbitResourceHolder.
                     * @author Gary Russell
                     * @since 1.2
                     */
                    // @ts-ignore
                    class ConsumerChannelRegistry extends java.lang.Object {
                        /**
                         * If a listener container is configured to use a RabbitTransactionManager, the
                         * consumer's channel is registered here so that it is used as the bound resource
                         * when the transaction actually starts. It is normally not necessary to use
                         * an external transaction manager because local transactions work the same in that
                         * the channel is bound to the thread. This is for the case when a user happens
                         * to wire in a RabbitTransactionManager.
                         * @param channel The channel to register.
                         * @param connectionFactory The connection factory.
                         */
                        // @ts-ignore
                        public static registerConsumerChannel(channel: Channel, connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory): void
                        /**
                         * See registerConsumerChannel. This method is called to unregister
                         * the channel when the consumer exits.
                         */
                        // @ts-ignore
                        public static unRegisterConsumerChannel(): void
                        /**
                         * See registerConsumerChannel. This method is called to retrieve the
                         * channel for this consumer.
                         * @return The channel.
                         */
                        // @ts-ignore
                        public static getConsumerChannel(): Channel
                        /**
                         * See registerConsumerChannel. This method is called to retrieve the
                         * channel for this consumer if the connection factory matches.
                         * @param connectionFactory The connection factory.
                         * @return The channel.
                         */
                        // @ts-ignore
                        public static getConsumerChannel(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory): Channel
                    }
                }
            }
        }
    }
}
