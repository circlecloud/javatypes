declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * Listener container for Direct ReplyTo only listens to the pseudo queue
                     * {@link Address#AMQ_RABBITMQ_REPLY_TO}. Consumers are added on-demand and
                     * terminated when idle for {@link #setIdleEventInterval(long) idleEventInterval}
                     * (default 60 seconds).
                     * @author Gary Russell
                     * @since 2.0
                     */
                    // @ts-ignore
                    class DirectReplyToMessageListenerContainer extends org.springframework.amqp.rabbit.listener.DirectMessageListenerContainer {
                        // @ts-ignore
                        constructor(connectionFactory: org.springframework.amqp.rabbit.connection.ConnectionFactory)
                        // @ts-ignore
                        public setConsumersPerQueue(consumersPerQueue: number /*int*/): void
                        // @ts-ignore
                        public setMonitorInterval(monitorInterval: number /*long*/): void
                        // @ts-ignore
                        public setQueueNames(...queueName: java.lang.String[] | string[]): void
                        // @ts-ignore
                        public addQueueNames(...queueNames: java.lang.String[] | string[]): void
                        // @ts-ignore
                        public removeQueueNames(...queueNames: java.lang.String[] | string[]): boolean
                        // @ts-ignore
                        public setMessageListener(messageListener: java.lang.Object | any): void
                        // @ts-ignore
                        public setChannelAwareMessageListener(messageListener: org.springframework.amqp.rabbit.listener.api.ChannelAwareMessageListener): void
                        // @ts-ignore
                        public setMessageListener(messageListener: MessageListener): void
                        // @ts-ignore
                        doStart(): void
                        // @ts-ignore
                        processMonitorTask(): void
                        // @ts-ignore
                        findIdleConsumer(): number /*int*/
                        // @ts-ignore
                        consumerRemoved(consumer: org.springframework.amqp.rabbit.listener.DirectMessageListenerContainer.SimpleConsumer): void
                        /**
                         * Get the channel holder associated with a direct reply-to consumer; contains a
                         * consumer epoch to prevent inappropriate releases.
                         * @return the channel holder.
                         */
                        // @ts-ignore
                        public getChannelHolder(): org.springframework.amqp.rabbit.listener.DirectReplyToMessageListenerContainer.ChannelHolder
                        /**
                         * Release the consumer associated with the channel for reuse.
                         * Set cancelConsumer to true if the client is not prepared to handle/discard a
                         * late arriving reply.
                         * @param channelHolder the channel holder.
                         * @param cancelConsumer true to cancel the consumer.
                         * @param message a message to be included in the cancel event if cancelConsumer is true.
                         */
                        // @ts-ignore
                        public releaseConsumerFor(channelHolder: org.springframework.amqp.rabbit.listener.DirectReplyToMessageListenerContainer.ChannelHolder, cancelConsumer: boolean, message: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
