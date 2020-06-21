declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    namespace support {
                        /**
                         * An object encapsulating a {@link Message} containing the batch of messages,
                         * the exchange, and routing key.
                         * @author Gary Russell
                         * @since 1.4.1
                         */
                        // @ts-ignore
                        class MessageBatch extends java.lang.Object {
                            // @ts-ignore
                            constructor(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: Message)
                            /**
                             * @return the exchange
                             */
                            // @ts-ignore
                            public getExchange(): string
                            /**
                             * @return the routingKey
                             */
                            // @ts-ignore
                            public getRoutingKey(): string
                            /**
                             * @return the message
                             */
                            // @ts-ignore
                            public getMessage(): Message
                        }
                    }
                }
            }
        }
    }
}
