declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * Contract to retry failed operations during topology recovery.
                     * Not all operations have to be retried, it's a decision of the
                     * underlying implementation.
                     * @since 5.4.0
                     */
                    // @ts-ignore
                    interface RetryHandler {
                        /**
                         * Retry a failed queue recovery operation.
                         * @param context the context of the retry
                         * @return the result of the retry attempt
                         * @throws Exception if the retry fails
                         */
                        // @ts-ignore
                        retryQueueRecovery(context: com.rabbitmq.client.impl.recovery.RetryContext): com.rabbitmq.client.impl.recovery.RetryResult
                        /**
                         * Retry a failed exchange recovery operation.
                         * @param context the context of the retry
                         * @return the result of the retry attempt
                         * @throws Exception if the retry fails
                         */
                        // @ts-ignore
                        retryExchangeRecovery(context: com.rabbitmq.client.impl.recovery.RetryContext): com.rabbitmq.client.impl.recovery.RetryResult
                        /**
                         * Retry a failed binding recovery operation.
                         * @param context the context of the retry
                         * @return the result of the retry attempt
                         * @throws Exception if the retry fails
                         */
                        // @ts-ignore
                        retryBindingRecovery(context: com.rabbitmq.client.impl.recovery.RetryContext): com.rabbitmq.client.impl.recovery.RetryResult
                        /**
                         * Retry a failed consumer recovery operation.
                         * @param context the context of the retry
                         * @return the result of the retry attempt
                         * @throws Exception if the retry fails
                         */
                        // @ts-ignore
                        retryConsumerRecovery(context: com.rabbitmq.client.impl.recovery.RetryContext): com.rabbitmq.client.impl.recovery.RetryResult
                    }
                }
            }
        }
    }
}
