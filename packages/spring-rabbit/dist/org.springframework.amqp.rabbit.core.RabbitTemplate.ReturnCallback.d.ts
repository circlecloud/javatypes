declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    namespace RabbitTemplate {
                        /**
                         * A callback for returned messages.
                         */
                        // @ts-ignore
                        interface ReturnCallback {
                            /**
                             * Returned message callback.
                             * @param message the returned message.
                             * @param replyCode the reply code.
                             * @param replyText the reply text.
                             * @param exchange the exchange.
                             * @param routingKey the routing key.
                             */
                            // @ts-ignore
                            returnedMessage(message: Message, replyCode: number /*int*/, replyText: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string): void
                        }
                    }
                }
            }
        }
    }
}
