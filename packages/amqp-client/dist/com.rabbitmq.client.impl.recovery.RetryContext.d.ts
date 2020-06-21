declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * The context of a topology recovery retry operation.
                     * @since 5.4.0
                     */
                    // @ts-ignore
                    class RetryContext extends java.lang.Object {
                        // @ts-ignore
                        constructor(entity: com.rabbitmq.client.impl.recovery.RecordedEntity, exception: java.lang.Exception, connection: com.rabbitmq.client.impl.recovery.AutorecoveringConnection)
                        /**
                         * The underlying connection.
                         * @return 
                         */
                        // @ts-ignore
                        public connection(): com.rabbitmq.client.impl.recovery.AutorecoveringConnection
                        /**
                         * The exception that triggered the retry attempt.
                         * @return 
                         */
                        // @ts-ignore
                        public exception(): java.lang.Exception
                        /**
                         * The to-be-recovered entity.
                         * @return 
                         */
                        // @ts-ignore
                        public entity(): com.rabbitmq.client.impl.recovery.RecordedEntity
                        /**
                         * The to-be-recovered entity as a queue.
                         * @return 
                         */
                        // @ts-ignore
                        public queue(): com.rabbitmq.client.impl.recovery.RecordedQueue
                        /**
                         * The to-be-recovered entity as an exchange.
                         * @return 
                         */
                        // @ts-ignore
                        public exchange(): com.rabbitmq.client.impl.recovery.RecordedExchange
                        /**
                         * The to-be-recovered entity as a binding.
                         * @return 
                         */
                        // @ts-ignore
                        public binding(): com.rabbitmq.client.impl.recovery.RecordedBinding
                        /**
                         * The to-be-recovered entity as a consumer.
                         * @return 
                         */
                        // @ts-ignore
                        public consumer(): com.rabbitmq.client.impl.recovery.RecordedConsumer
                    }
                }
            }
        }
    }
}
