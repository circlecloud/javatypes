declare namespace org {
    namespace springframework {
        namespace core {
            namespace task {
                namespace support {
                    /**
                     * Adapter that takes a JDK {@code java.util.concurrent.Executor} and
                     * exposes a Spring {@link org.springframework.core.task.TaskExecutor} for it.
                     * Also detects an extended {@code java.util.concurrent.ExecutorService}, adapting
                     * the {@link org.springframework.core.task.AsyncTaskExecutor} interface accordingly.
                     * @author Juergen Hoeller
                     * @since 3.0
                     * @see java.util.concurrent.Executor
                     * @see java.util.concurrent.ExecutorService
                     * @see java.util.concurrent.Executors
                     */
                    // @ts-ignore
                    class TaskExecutorAdapter extends java.lang.Object implements org.springframework.core.task.AsyncListenableTaskExecutor {
                        /**
                         * Create a new TaskExecutorAdapter,
                         * using the given JDK concurrent executor.
                         * @param concurrentExecutor the JDK concurrent executor to delegate to
                         */
                        // @ts-ignore
                        constructor(concurrentExecutor: java.util.concurrent.Executor)
                        /**
                         * Specify a custom {@link TaskDecorator} to be applied to any {@link Runnable}
                         * about to be executed.
                         * <p>Note that such a decorator is not necessarily being applied to the
                         * user-supplied {@code Runnable}/{@code Callable} but rather to the actual
                         * execution callback (which may be a wrapper around the user-supplied task).
                         * <p>The primary use case is to set some execution context around the task's
                         * invocation, or to provide some monitoring/statistics for task execution.
                         * @since 4.3
                         */
                        // @ts-ignore
                        setTaskDecorator(taskDecorator: org.springframework.core.task.TaskDecorator): void
                        /**
                         * Delegates to the specified JDK concurrent executor.
                         * @see java.util.concurrent.Executor#execute(Runnable)
                         */
                        // @ts-ignore
                        execute(task: java.lang.Runnable): void
                        // @ts-ignore
                        execute(task: java.lang.Runnable, startTimeout: number /*long*/): void
                        // @ts-ignore
                        submit(task: java.lang.Runnable): java.util.concurrent.Future<?>
                        // @ts-ignore
                        submit<T>(task: java.util.concurrent.Callable<T>): java.util.concurrent.Future<T>
                        // @ts-ignore
                        submitListenable(task: java.lang.Runnable): org.springframework.util.concurrent.ListenableFuture<?>
                        // @ts-ignore
                        submitListenable<T>(task: java.util.concurrent.Callable<T>): org.springframework.util.concurrent.ListenableFuture<T>
                        /**
                         * Actually execute the given {@code Runnable} (which may be a user-supplied task
                         * or a wrapper around a user-supplied task) with the given executor.
                         * @param concurrentExecutor the underlying JDK concurrent executor to delegate to
                         * @param taskDecorator the specified decorator to be applied, if any
                         * @param runnable the runnable to execute
                         * @throws RejectedExecutionException if the given runnable cannot be accepted
                         * @since 4.3
                         */
                        // @ts-ignore
                        doExecute(concurrentExecutor: java.util.concurrent.Executor, taskDecorator: org.springframework.core.task.TaskDecorator, runnable: java.lang.Runnable): void
                    }
                }
            }
        }
    }
}
