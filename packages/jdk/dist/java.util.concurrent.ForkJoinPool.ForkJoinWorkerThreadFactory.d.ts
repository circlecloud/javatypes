declare namespace java {
    namespace util {
        namespace concurrent {
            namespace ForkJoinPool {
                /**
                 * Factory for creating new {@link ForkJoinWorkerThread}s.
                 * A {@code ForkJoinWorkerThreadFactory} must be defined and used
                 * for {@code ForkJoinWorkerThread} subclasses that extend base
                 * functionality or initialize threads with different contexts.
                 */
                // @ts-ignore
                interface ForkJoinWorkerThreadFactory {
                    /**
                     * Returns a new worker thread operating in the given pool.
                     * @param pool the pool this thread works in
                     * @return the new worker thread
                     * @throws NullPointerException if the pool is null
                     */
                    // @ts-ignore
                    newThread(pool: java.util.concurrent.ForkJoinPool): java.util.concurrent.ForkJoinWorkerThread
                }
            }
        }
    }
}
