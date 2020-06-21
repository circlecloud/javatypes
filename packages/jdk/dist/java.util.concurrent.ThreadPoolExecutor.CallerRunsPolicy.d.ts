declare namespace java {
    namespace util {
        namespace concurrent {
            namespace ThreadPoolExecutor {
                /**
                 * A handler for rejected tasks that runs the rejected task
                 * directly in the calling thread of the {@code execute} method,
                 * unless the executor has been shut down, in which case the task
                 * is discarded.
                 */
                // @ts-ignore
                class CallerRunsPolicy extends java.lang.Object implements java.util.concurrent.RejectedExecutionHandler {
                    /**
                     * Creates a {@code CallerRunsPolicy}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Executes task r in the caller's thread, unless the executor
                     * has been shut down, in which case the task is discarded.
                     * @param r the runnable task requested to be executed
                     * @param e the executor attempting to execute this task
                     */
                    // @ts-ignore
                    public rejectedExecution(r: java.lang.Runnable, e: java.util.concurrent.ThreadPoolExecutor): void
                }
            }
        }
    }
}
