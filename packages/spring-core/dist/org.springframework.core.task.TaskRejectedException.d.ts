declare namespace org {
    namespace springframework {
        namespace core {
            namespace task {
                /**
                 * Exception thrown when a {@link TaskExecutor} rejects to accept
                 * a given task for execution.
                 * @author Juergen Hoeller
                 * @since 2.0.1
                 * @see TaskExecutor#execute(Runnable)
                 * @see TaskTimeoutException
                 */
                // @ts-ignore
                class TaskRejectedException extends java.util.concurrent.RejectedExecutionException {
                    /**
                     * Create a new {@code TaskRejectedException}
                     * with the specified detail message and no root cause.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: string)
                    /**
                     * Create a new {@code TaskRejectedException}
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
