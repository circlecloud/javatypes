declare namespace org {
    namespace springframework {
        namespace core {
            namespace task {
                /**
                 * Extension of the {@link AsyncTaskExecutor} interface, adding the capability to submit
                 * tasks for {@link ListenableFuture ListenableFutures}.
                 * @author Arjen Poutsma
                 * @since 4.0
                 * @see ListenableFuture
                 */
                // @ts-ignore
                interface AsyncListenableTaskExecutor extends org.springframework.core.task.AsyncTaskExecutor {
                    /**
                     * Submit a {@code Runnable} task for execution, receiving a {@code ListenableFuture}
                     * representing that task. The Future will return a {@code null} result upon completion.
                     * @param task the {#code Runnable} to execute (never {@code null})
                     * @return a {#code ListenableFuture} representing pending completion of the task
                     * @throws TaskRejectedException if the given task was not accepted
                     */
                    // @ts-ignore
                    submitListenable(task: java.lang.Runnable): org.springframework.util.concurrent.ListenableFuture<any>
                    /**
                     * Submit a {@code Callable} task for execution, receiving a {@code ListenableFuture}
                     * representing that task. The Future will return the Callable's result upon
                     * completion.
                     * @param task the {#code Callable} to execute (never {@code null})
                     * @return a {#code ListenableFuture} representing pending completion of the task
                     * @throws TaskRejectedException if the given task was not accepted
                     */
                    // @ts-ignore
                    submitListenable<T>(task: java.util.concurrent.Callable<T>): org.springframework.util.concurrent.ListenableFuture<T>
                }
            }
        }
    }
}
