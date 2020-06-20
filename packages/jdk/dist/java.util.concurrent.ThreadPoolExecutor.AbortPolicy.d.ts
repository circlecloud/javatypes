declare namespace java {
    namespace util {
        namespace concurrent {
            namespace ThreadPoolExecutor {
                /**
                 * A handler for rejected tasks that throws a
                 * {@code RejectedExecutionException}.
                 */
                // @ts-ignore
                class AbortPolicy extends java.lang.Object implements java.util.concurrent.RejectedExecutionHandler {
                    /**
                     * Creates an {@code AbortPolicy}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Always throws RejectedExecutionException.
                     * @param r the runnable task requested to be executed
                     * @param e the executor attempting to execute this task
                     * @throws RejectedExecutionException always
                     */
                    // @ts-ignore
                    rejectedExecution(r: java.lang.Runnable, e: java.util.concurrent.ThreadPoolExecutor): void
                }
            }
        }
    }
}
