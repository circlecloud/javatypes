declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace messaging {
                        /**
                         * The actual {@link Task} to run within the {@link MessageListenerContainer}.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface Task extends org.springframework.data.mongodb.core.messaging.Cancelable {
                            /**
                             * @return {#literal true} if the task is currently {@link State#RUNNING running}.
                             */
                            // @ts-ignore
                            isActive(): boolean
                            /**
                             * Get the current lifecycle phase.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            getState(): org.springframework.data.mongodb.core.messaging.Task.State
                            /**
                             * Synchronous, <strong>blocking</strong> call that awaits until this {@link Task} becomes active.
                             * @param timeout must not be {#literal null}.
                             * @return {#code true} if the task was started. {@code false} if the waiting time elapsed before task was started.
                             * @throws InterruptedException if the current thread is interrupted while waiting.
                             */
                            // @ts-ignore
                            awaitStart(timeout: java.time.Duration): boolean
                        }
                    }
                }
            }
        }
    }
}
