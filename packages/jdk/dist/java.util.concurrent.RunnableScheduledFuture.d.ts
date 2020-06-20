declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * A {@link ScheduledFuture} that is {@link Runnable}. Successful
             * execution of the {@code run} method causes completion of the
             * {@code Future} and allows access to its results.
             * @see FutureTask
             * @see Executor
             * @since 1.6
             * @author Doug Lea
             * @param <V> The result type returned by this Future's {#code get} method
             */
            // @ts-ignore
            interface RunnableScheduledFuture<V> extends java.util.concurrent.RunnableFuture<V>, java.util.concurrent.ScheduledFuture<V> {
                /**
                 * Returns {@code true} if this task is periodic. A periodic task may
                 * re-run according to some schedule. A non-periodic task can be
                 * run only once.
                 * @return {#code true} if this task is periodic
                 */
                // @ts-ignore
                isPeriodic(): boolean
            }
        }
    }
}
