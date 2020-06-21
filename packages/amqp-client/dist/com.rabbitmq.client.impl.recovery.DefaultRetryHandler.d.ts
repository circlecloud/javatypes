declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * Composable topology recovery retry handler.
                     * This retry handler implementations let the user choose the condition
                     * to trigger retry and the retry operation for each type of recoverable
                     * entities. The number of attempts and the backoff policy (time to wait
                     * between retries) are also configurable.
                     * <p>
                     * See also {@link TopologyRecoveryRetryHandlerBuilder} to easily create
                     * instances and {@link TopologyRecoveryRetryLogic} for ready-to-use
                     * conditions and operations.
                     * @see TopologyRecoveryRetryHandlerBuilder
                     * @see TopologyRecoveryRetryLogic
                     * @since 5.4.0
                     */
                    // @ts-ignore
                    class DefaultRetryHandler extends java.lang.Object implements com.rabbitmq.client.impl.recovery.RetryHandler {
                        // @ts-ignore
                        constructor(queueRecoveryRetryCondition: java.util.function$.BiPredicate<any, java.lang.Exception>, exchangeRecoveryRetryCondition: java.util.function$.BiPredicate<any, java.lang.Exception>, bindingRecoveryRetryCondition: java.util.function$.BiPredicate<any, java.lang.Exception>, consumerRecoveryRetryCondition: java.util.function$.BiPredicate<any, java.lang.Exception>, queueRecoveryRetryOperation: com.rabbitmq.client.impl.recovery.DefaultRetryHandler.RetryOperation<any>, exchangeRecoveryRetryOperation: com.rabbitmq.client.impl.recovery.DefaultRetryHandler.RetryOperation<any>, bindingRecoveryRetryOperation: com.rabbitmq.client.impl.recovery.DefaultRetryHandler.RetryOperation<any>, consumerRecoveryRetryOperation: com.rabbitmq.client.impl.recovery.DefaultRetryHandler.RetryOperation<any>, retryAttempts: number /*int*/, backoffPolicy: com.rabbitmq.client.impl.recovery.BackoffPolicy)
                        // @ts-ignore
                        public retryQueueRecovery(context: com.rabbitmq.client.impl.recovery.RetryContext): com.rabbitmq.client.impl.recovery.RetryResult
                        // @ts-ignore
                        public retryExchangeRecovery(context: com.rabbitmq.client.impl.recovery.RetryContext): com.rabbitmq.client.impl.recovery.RetryResult
                        // @ts-ignore
                        public retryBindingRecovery(context: com.rabbitmq.client.impl.recovery.RetryContext): com.rabbitmq.client.impl.recovery.RetryResult
                        // @ts-ignore
                        public retryConsumerRecovery(context: com.rabbitmq.client.impl.recovery.RetryContext): com.rabbitmq.client.impl.recovery.RetryResult
                        // @ts-ignore
                        doRetry(condition: java.util.function$.BiPredicate<com.rabbitmq.client.impl.recovery.RecordedEntity, java.lang.Exception>, operation: com.rabbitmq.client.impl.recovery.DefaultRetryHandler.RetryOperation<any>, entity: com.rabbitmq.client.impl.recovery.RecordedEntity, context: com.rabbitmq.client.impl.recovery.RetryContext): com.rabbitmq.client.impl.recovery.RetryResult
                        // @ts-ignore
                        log(entity: com.rabbitmq.client.impl.recovery.RecordedEntity, exception: java.lang.Exception, attempts: number /*int*/): void
                    }
                }
            }
        }
    }
}
