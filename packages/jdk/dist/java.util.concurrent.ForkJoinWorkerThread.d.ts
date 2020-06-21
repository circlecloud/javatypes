declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * A thread managed by a {@link ForkJoinPool}, which executes
             * {@link ForkJoinTask}s.
             * This class is subclassable solely for the sake of adding
             * functionality -- there are no overridable methods dealing with
             * scheduling or execution.  However, you can override initialization
             * and termination methods surrounding the main task processing loop.
             * If you do create such a subclass, you will also need to supply a
             * custom {@link ForkJoinPool.ForkJoinWorkerThreadFactory} to
             * {@linkplain ForkJoinPool#ForkJoinPool use it} in a {@code ForkJoinPool}.
             * @since 1.7
             * @author Doug Lea
             */
            // @ts-ignore
            class ForkJoinWorkerThread extends java.lang.Thread {
                /**
                 * Creates a ForkJoinWorkerThread operating in the given pool.
                 * @param pool the pool this thread works in
                 * @throws NullPointerException if pool is null
                 */
                // @ts-ignore
                constructor(pool: java.util.concurrent.ForkJoinPool)
                /**
                 * Returns the pool hosting this thread.
                 * @return the pool
                 */
                // @ts-ignore
                public getPool(): java.util.concurrent.ForkJoinPool
                /**
                 * Returns the unique index number of this thread in its pool.
                 * The returned value ranges from zero to the maximum number of
                 * threads (minus one) that may exist in the pool, and does not
                 * change during the lifetime of the thread.  This method may be
                 * useful for applications that track status or collect results
                 * per-worker-thread rather than per-task.
                 * @return the index number
                 */
                // @ts-ignore
                public getPoolIndex(): number /*int*/
                /**
                 * Initializes internal state after construction but before
                 * processing any tasks. If you override this method, you must
                 * invoke {@code super.onStart()} at the beginning of the method.
                 * Initialization requires care: Most fields must have legal
                 * default values, to ensure that attempted accesses from other
                 * threads work correctly even before this thread starts
                 * processing tasks.
                 */
                // @ts-ignore
                onStart(): void
                /**
                 * Performs cleanup associated with termination of this worker
                 * thread.  If you override this method, you must invoke
                 * {@code super.onTermination} at the end of the overridden method.
                 * @param exception the exception causing this thread to abort due
                 *  to an unrecoverable error, or {#code null} if completed normally
                 */
                // @ts-ignore
                onTermination(exception: java.lang.Throwable | Error): void
                /**
                 * This method is required to be public, but should never be
                 * called explicitly. It performs the main run loop to execute
                 * {@link ForkJoinTask}s.
                 */
                // @ts-ignore
                public run(): void
            }
        }
    }
}
