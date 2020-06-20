declare namespace java {
    namespace util {
        namespace concurrent {
            namespace ThreadPoolExecutor {
                /**
                 * A handler for rejected tasks that discards the oldest unhandled
                 * request and then retries {@code execute}, unless the executor
                 * is shut down, in which case the task is discarded.
                 */
                // @ts-ignore
                class DiscardOldestPolicy extends java.lang.Object implements java.util.concurrent.RejectedExecutionHandler {
                    /**
                     * Creates a {@code DiscardOldestPolicy} for the given executor.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Obtains and ignores the next task that the executor
                     * would otherwise execute, if one is immediately available,
                     * and then retries execution of task r, unless the executor
                     * is shut down, in which case task r is instead discarded.
                     * @param r the runnable task requested to be executed
                     * @param e the executor attempting to execute this task
                     */
                    // @ts-ignore
                    rejectedExecution(r: java.lang.Runnable, e: java.util.concurrent.ThreadPoolExecutor): void
                }
            }
        }
    }
}
