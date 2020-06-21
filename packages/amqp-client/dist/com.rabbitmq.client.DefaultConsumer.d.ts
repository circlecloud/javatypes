declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Convenience class providing a default implementation of {@link Consumer}.
             * We anticipate that most Consumer implementations will subclass this class.
             */
            // @ts-ignore
            class DefaultConsumer extends java.lang.Object implements com.rabbitmq.client.Consumer {
                /**
                 * Constructs a new instance and records its association to the passed-in channel.
                 * @param channel the channel to which this consumer is attached
                 */
                // @ts-ignore
                constructor(channel: com.rabbitmq.client.Channel)
                /**
                 * Stores the most recently passed-in consumerTag - semantically, there should be only one.
                 * @see Consumer#handleConsumeOk
                 */
                // @ts-ignore
                public handleConsumeOk(consumerTag: java.lang.String | string): void
                /**
                 * No-op implementation of {@link Consumer#handleCancelOk}.
                 * @param consumerTag the defined consumer tag (client- or server-generated)
                 */
                // @ts-ignore
                public handleCancelOk(consumerTag: java.lang.String | string): void
                /**
                 * No-op implementation of {@link Consumer#handleCancel(String)}
                 * @param consumerTag the defined consumer tag (client- or server-generated)
                 */
                // @ts-ignore
                public handleCancel(consumerTag: java.lang.String | string): void
                /**
                 * No-op implementation of {@link Consumer#handleShutdownSignal}.
                 */
                // @ts-ignore
                public handleShutdownSignal(consumerTag: java.lang.String | string, sig: com.rabbitmq.client.ShutdownSignalException): void
                /**
                 * No-op implementation of {@link Consumer#handleRecoverOk}.
                 */
                // @ts-ignore
                public handleRecoverOk(consumerTag: java.lang.String | string): void
                /**
                 * No-op implementation of {@link Consumer#handleDelivery}.
                 */
                // @ts-ignore
                public handleDelivery(consumerTag: java.lang.String | string, envelope: com.rabbitmq.client.Envelope, properties: com.rabbitmq.client.AMQP.BasicProperties, body: number /*byte*/[]): void
                /**
                 * Retrieve the channel.
                 * @return the channel this consumer is attached to.
                 */
                // @ts-ignore
                public getChannel(): com.rabbitmq.client.Channel
                /**
                 * Retrieve the consumer tag.
                 * @return the most recently notified consumer tag.
                 */
                // @ts-ignore
                public getConsumerTag(): string
            }
        }
    }
}
