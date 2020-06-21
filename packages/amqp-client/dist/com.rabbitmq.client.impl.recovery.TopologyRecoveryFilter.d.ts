declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * Filter to know whether entities should be recovered or not.
                     * @since 4.8.0
                     */
                    // @ts-ignore
                    interface TopologyRecoveryFilter {
                        /**
                         * Decides whether an exchange is recovered or not.
                         * @param recordedExchange
                         * @return true to recover the exchange, false otherwise
                         */
                        // @ts-ignore
                        filterExchange(recordedExchange: com.rabbitmq.client.impl.recovery.RecordedExchange): boolean
                        /**
                         * Decides whether a queue is recovered or not.
                         * @param recordedQueue
                         * @return true to recover the queue, false otherwise
                         */
                        // @ts-ignore
                        filterQueue(recordedQueue: com.rabbitmq.client.impl.recovery.RecordedQueue): boolean
                        /**
                         * Decides whether a binding is recovered or not.
                         * @param recordedBinding
                         * @return true to recover the binding, false otherwise
                         */
                        // @ts-ignore
                        filterBinding(recordedBinding: com.rabbitmq.client.impl.recovery.RecordedBinding): boolean
                        /**
                         * Decides whether a consumer is recovered or not.
                         * @param recordedConsumer
                         * @return true to recover the consumer, false otherwise
                         */
                        // @ts-ignore
                        filterConsumer(recordedConsumer: com.rabbitmq.client.impl.recovery.RecordedConsumer): boolean
                    }
                }
            }
        }
    }
}
