declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scheduler {
                namespace SpongeExecutorService {
                    // @ts-ignore
                    interface SpongeFuture<V> extends java.util.concurrent.RunnableScheduledFuture<V> {
                        /**
                         * Retrieves the {@link Scheduler} {@link Task} instance that
                         * is responsible for the execution of this future.
                         * @return The backing task
                         */
                        // @ts-ignore
                        getTask(): org.spongepowered.api.scheduler.Task
                    }
                }
            }
        }
    }
}
