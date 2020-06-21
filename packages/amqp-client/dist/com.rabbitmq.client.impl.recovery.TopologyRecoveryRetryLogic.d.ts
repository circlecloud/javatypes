declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * Useful ready-to-use conditions and operations for {@link DefaultRetryHandler}.
                     * They're composed and used with the {@link TopologyRecoveryRetryHandlerBuilder}.
                     * @see DefaultRetryHandler
                     * @see RetryHandler
                     * @see TopologyRecoveryRetryHandlerBuilder
                     * @since 5.4.0
                     */
                    // @ts-ignore
                    abstract class TopologyRecoveryRetryLogic extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Channel has been closed because of a resource that doesn't exist.
                         */
                        // @ts-ignore
                        public static readonly CHANNEL_CLOSED_NOT_FOUND: java.util.function$.BiPredicate<com.rabbitmq.client.impl.recovery.RecordedEntity, java.lang.Exception>
                        /**
                         * Recover a channel.
                         */
                        // @ts-ignore
                        public static readonly RECOVER_CHANNEL: com.rabbitmq.client.impl.recovery.DefaultRetryHandler.RetryOperation<java.lang.Void>
                        /**
                         * Recover the destination queue of a binding.
                         */
                        // @ts-ignore
                        public static readonly RECOVER_BINDING_QUEUE: com.rabbitmq.client.impl.recovery.DefaultRetryHandler.RetryOperation<java.lang.Void>
                        /**
                         * Recover a binding.
                         */
                        // @ts-ignore
                        public static readonly RECOVER_BINDING: com.rabbitmq.client.impl.recovery.DefaultRetryHandler.RetryOperation<java.lang.Void>
                        /**
                         * Recover the queue of a consumer.
                         */
                        // @ts-ignore
                        public static readonly RECOVER_CONSUMER_QUEUE: com.rabbitmq.client.impl.recovery.DefaultRetryHandler.RetryOperation<java.lang.Void>
                        /**
                         * Recover all the bindings of the queue of a consumer.
                         */
                        // @ts-ignore
                        public static readonly RECOVER_CONSUMER_QUEUE_BINDINGS: com.rabbitmq.client.impl.recovery.DefaultRetryHandler.RetryOperation<java.lang.Void>
                        /**
                         * Recover a consumer.
                         */
                        // @ts-ignore
                        public static readonly RECOVER_CONSUMER: com.rabbitmq.client.impl.recovery.DefaultRetryHandler.RetryOperation<java.lang.String | string>
                        /**
                         * Pre-configured {@link TopologyRecoveryRetryHandlerBuilder} that retries recovery of bindings and consumers
                         * when their respective queue is not found.
                         * This retry handler can be useful for long recovery processes, whereby auto-delete queues
                         * can be deleted between queue recovery and binding/consumer recovery.
                         */
                        // @ts-ignore
                        public static readonly RETRY_ON_QUEUE_NOT_FOUND_RETRY_HANDLER: com.rabbitmq.client.impl.recovery.TopologyRecoveryRetryHandlerBuilder
                    }
                }
            }
        }
    }
}
