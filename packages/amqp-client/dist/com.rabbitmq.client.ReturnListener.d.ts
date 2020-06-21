declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Implement this interface in order to be notified of failed
             * deliveries when basicPublish is called with "mandatory" or
             * "immediate" flags set.
             * For a lambda-oriented syntax, use {@link ReturnCallback}.
             * @see Channel#basicPublish
             */
            // @ts-ignore
            interface ReturnListener {
                // @ts-ignore
                handleReturn(replyCode: number /*int*/, replyText: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string, properties: com.rabbitmq.client.AMQP.BasicProperties, body: number /*byte*/[]): void
            }
        }
    }
}
