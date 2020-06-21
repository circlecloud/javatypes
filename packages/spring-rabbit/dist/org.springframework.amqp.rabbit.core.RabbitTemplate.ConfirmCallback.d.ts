declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    namespace RabbitTemplate {
                        /**
                         * A callback for publisher confirmations.
                         */
                        // @ts-ignore
                        interface ConfirmCallback {
                            /**
                             * Confirmation callback.
                             * @param correlationData correlation data for the callback.
                             * @param ack true for ack, false for nack
                             * @param cause An optional cause, for nack, when available, otherwise null.
                             */
                            // @ts-ignore
                            confirm(correlationData: org.springframework.amqp.rabbit.connection.CorrelationData, ack: boolean, cause: java.lang.String | string): void
                        }
                    }
                }
            }
        }
    }
}
