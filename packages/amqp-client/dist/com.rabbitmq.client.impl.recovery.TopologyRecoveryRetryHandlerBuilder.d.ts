declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * Builder to ease creation of {@link DefaultRetryHandler} instances.
                     * <p>
                     * Just override what you need. By default, retry conditions don't trigger retry,
                     * retry operations are no-op, the number of retry attempts is 2, and the backoff
                     * policy doesn't wait at all.
                     * @see DefaultRetryHandler
                     * @see TopologyRecoveryRetryLogic
                     * @since 5.4.0
                     */
                    // @ts-ignore
                    class TopologyRecoveryRetryHandlerBuilder extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static builder(): com.rabbitmq.client.impl.recovery.TopologyRecoveryRetryHandlerBuilder
                        // @ts-ignore
                        public queueRecoveryRetryCondition(queueRecoveryRetryCondition: java.util.function$.BiPredicate<any, java.lang.Exception>): com.rabbitmq.client.impl.recovery.TopologyRecoveryRetryHandlerBuilder
                        // @ts-ignore
                        public exchangeRecoveryRetryCondition(exchangeRecoveryRetryCondition: java.util.function$.BiPredicate<any, java.lang.Exception>): com.rabbitmq.client.impl.recovery.TopologyRecoveryRetryHandlerBuilder
                        // @ts-ignore
                        public bindingRecoveryRetryCondition(bindingRecoveryRetryCondition: java.util.function$.BiPredicate<any, java.lang.Exception>): com.rabbitmq.client.impl.recovery.TopologyRecoveryRetryHandlerBuilder
                        // @ts-ignore
                        public consumerRecoveryRetryCondition(consumerRecoveryRetryCondition: java.util.function$.BiPredicate<any, java.lang.Exception>): com.rabbitmq.client.impl.recovery.TopologyRecoveryRetryHandlerBuilder
                        // @ts-ignore
                        public queueRecoveryRetryOperation(queueRecoveryRetryOperation: com.rabbitmq.client.impl.recovery.DefaultRetryHandler.RetryOperation<any>): com.rabbitmq.client.impl.recovery.TopologyRecoveryRetryHandlerBuilder
                        // @ts-ignore
                        public exchangeRecoveryRetryOperation(exchangeRecoveryRetryOperation: com.rabbitmq.client.impl.recovery.DefaultRetryHandler.RetryOperation<any>): com.rabbitmq.client.impl.recovery.TopologyRecoveryRetryHandlerBuilder
                        // @ts-ignore
                        public bindingRecoveryRetryOperation(bindingRecoveryRetryOperation: com.rabbitmq.client.impl.recovery.DefaultRetryHandler.RetryOperation<any>): com.rabbitmq.client.impl.recovery.TopologyRecoveryRetryHandlerBuilder
                        // @ts-ignore
                        public consumerRecoveryRetryOperation(consumerRecoveryRetryOperation: com.rabbitmq.client.impl.recovery.DefaultRetryHandler.RetryOperation<any>): com.rabbitmq.client.impl.recovery.TopologyRecoveryRetryHandlerBuilder
                        // @ts-ignore
                        public backoffPolicy(backoffPolicy: com.rabbitmq.client.impl.recovery.BackoffPolicy): com.rabbitmq.client.impl.recovery.TopologyRecoveryRetryHandlerBuilder
                        // @ts-ignore
                        public retryAttempts(retryAttempts: number /*int*/): com.rabbitmq.client.impl.recovery.TopologyRecoveryRetryHandlerBuilder
                        // @ts-ignore
                        public build(): com.rabbitmq.client.impl.recovery.RetryHandler
                    }
                }
            }
        }
    }
}
