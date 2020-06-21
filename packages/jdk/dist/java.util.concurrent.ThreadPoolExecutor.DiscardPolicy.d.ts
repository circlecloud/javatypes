declare namespace java {
    namespace util {
        namespace concurrent {
            namespace ThreadPoolExecutor {
                /**
                 * A handler for rejected tasks that silently discards the
                 * rejected task.
                 */
                // @ts-ignore
                class DiscardPolicy extends java.lang.Object implements java.util.concurrent.RejectedExecutionHandler {
                    /**
                     * Creates a {@code DiscardPolicy}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Does nothing, which has the effect of discarding task r.
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
