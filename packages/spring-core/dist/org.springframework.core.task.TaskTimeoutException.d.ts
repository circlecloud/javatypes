declare namespace org {
    namespace springframework {
        namespace core {
            namespace task {
                /**
                 * Exception thrown when a {@link AsyncTaskExecutor} rejects to accept
                 * a given task for execution because of the specified timeout.
                 * @author Juergen Hoeller
                 * @since 2.0.3
                 * @see AsyncTaskExecutor#execute(Runnable, long)
                 * @see TaskRejectedException
                 */
                // @ts-ignore
                class TaskTimeoutException extends org.springframework.core.task.TaskRejectedException {
                    /**
                     * Create a new {@code TaskTimeoutException}
                     * with the specified detail message and no root cause.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: string)
                    /**
                     * Create a new {@code TaskTimeoutException}
                     * with the specified detail message and the given root cause.
                     * @param msg the detail message
                     * @param cause the root cause (usually from using an underlying
                     *  API such as the {#code java.util.concurrent} package)
                     * @see java.util.concurrent.RejectedExecutionException
                     */
                    // @ts-ignore
                    constructor(msg: string, cause: Error)
                }
            }
        }
    }
}
