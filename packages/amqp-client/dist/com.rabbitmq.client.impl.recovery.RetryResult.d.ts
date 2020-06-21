declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * The retry of a retried topology recovery operation.
                     * @since 5.4.0
                     */
                    // @ts-ignore
                    class RetryResult extends java.lang.Object {
                        // @ts-ignore
                        constructor(recordedEntity: com.rabbitmq.client.impl.recovery.RecordedEntity, result: java.lang.Object | any)
                        /**
                         * The entity to recover.
                         * @return 
                         */
                        // @ts-ignore
                        public getRecordedEntity(): com.rabbitmq.client.impl.recovery.RecordedEntity
                        /**
                         * The result of the recovery operation.
                         * E.g. a consumer tag when recovering a consumer.
                         */
                        // @ts-ignore
                        public getResult(): any
                    }
                }
            }
        }
    }
}
