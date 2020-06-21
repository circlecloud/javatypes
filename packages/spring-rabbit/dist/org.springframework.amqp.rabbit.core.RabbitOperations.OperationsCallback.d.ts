declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    namespace RabbitOperations {
                        /**
                         * Callback for using the same channel for multiple RabbitTemplate
                         * operations.
                         * @param <T> the type the callback returns.
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface OperationsCallback<T> {
                            /**
                             * Execute any number of operations using a dedicated
                             * {@link com.rabbitmq.client.Channel} as long as those operations are performed
                             * on the template argument and on the calling thread. The channel will be
                             * physically closed when the callback exits.
                             * @param operations The operations.
                             * @return The result.
                             */
                            // @ts-ignore
                            doInRabbit(operations: org.springframework.amqp.rabbit.core.RabbitOperations): T
                        }
                    }
                }
            }
        }
    }
}
