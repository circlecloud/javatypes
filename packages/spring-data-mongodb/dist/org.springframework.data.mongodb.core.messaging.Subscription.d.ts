declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace messaging {
                        /**
                         * The {@link Subscription} is the link between the {@link SubscriptionRequest} and the actual running {@link Task}.
                         * <p />
                         * Due to the asynchronous nature of the {@link Task} execution a {@link Subscription} might not immediately become
                         * active. {@link #isActive()} provides an answer if the underlying {@link Task} is already running.
                         * <p />
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface Subscription extends org.springframework.data.mongodb.core.messaging.Cancelable {
                            /**
                             * @return {#literal true} if the subscription is currently executed.
                             */
                            // @ts-ignore
                            isActive(): boolean
                            /**
                             * Synchronous, <strong>blocking</strong> call returns once the {@link Subscription} becomes {@link #isActive()
                             * active} or {@link Duration timeout} exceeds.
                             * @param timeout must not be {#literal null}.
                             * @return {#code true} if the subscription was activated. {@code false} if the waiting time elapsed before task was
                             *          activated.
                             * @throws InterruptedException if the current thread is interrupted while waiting.
                             */
                            // @ts-ignore
                            await(timeout: java.time.Duration): boolean
                        }
                    }
                }
            }
        }
    }
}
