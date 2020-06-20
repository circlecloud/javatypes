declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * A {@link Future} that is {@link Runnable}. Successful execution of
             * the {@code run} method causes completion of the {@code Future}
             * and allows access to its results.
             * @see FutureTask
             * @see Executor
             * @since 1.6
             * @author Doug Lea
             * @param <V> The result type returned by this Future's {#code get} method
             */
            // @ts-ignore
            interface RunnableFuture<V> extends java.lang.Runnable, java.util.concurrent.Future<V> {
                /**
                 * Sets this Future to the result of its computation
                 * unless it has been cancelled.
                 */
                // @ts-ignore
                run(): void
            }
        }
    }
}
