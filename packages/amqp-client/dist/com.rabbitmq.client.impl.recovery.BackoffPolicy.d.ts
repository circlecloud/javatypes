declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * Backoff policy for topology recovery retry attempts.
                     * @see DefaultRetryHandler
                     * @see TopologyRecoveryRetryHandlerBuilder
                     * @since 5.4.0
                     */
                    // @ts-ignore
                    interface BackoffPolicy {
                        /**
                         * Wait depending on the current attempt number (1, 2, 3, etc)
                         * @param attemptNumber current attempt number
                         * @throws InterruptedException
                         */
                        // @ts-ignore
                        backoff(attemptNumber: number /*int*/): void
                    }
                }
            }
        }
    }
}
