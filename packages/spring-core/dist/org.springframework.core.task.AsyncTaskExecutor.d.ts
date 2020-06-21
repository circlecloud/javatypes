declare namespace org {
    namespace springframework {
        namespace core {
            namespace task {
                /**
                 * Extended interface for asynchronous {@link TaskExecutor} implementations,
                 * offering an overloaded {@link #execute(Runnable, long)} variant with a start
                 * timeout parameter as well support for {@link java.util.concurrent.Callable}.
                 * <p>Note: The {@link java.util.concurrent.Executors} class includes a set of
                 * methods that can convert some other common closure-like objects, for example,
                 * {@link java.security.PrivilegedAction} to {@link Callable} before executing them.
                 * <p>Implementing this interface also indicates that the {@link #execute(Runnable)}
                 * method will not execute its Runnable in the caller's thread but rather
                 * asynchronously in some other thread.
                 * @author Juergen Hoeller
                 * @since 2.0.3
                 * @see SimpleAsyncTaskExecutor
                 * @see org.springframework.scheduling.SchedulingTaskExecutor
                 * @see java.util.concurrent.Callable
                 * @see java.util.concurrent.Executors
                 */
                // @ts-ignore
                interface AsyncTaskExecutor extends org.springframework.core.task.TaskExecutor {
                    /**
                     * Constant that indicates immediate execution.
                     */
                    // @ts-ignore
                    readonly TIMEOUT_IMMEDIATE: number /*long*/
                    /**
                     * Constant that indicates no time limit.
                     */
                    // @ts-ignore
                    readonly TIMEOUT_INDEFINITE: number /*long*/
                    /**
                     * Execute the given {@code task}.
                     * @param task the {#code Runnable} to execute (never {@code null})
                     * @param startTimeout the time duration (milliseconds) within which the task is
                     *  supposed to start. This is intended as a hint to the executor, allowing for
                     *  preferred handling of immediate tasks. Typical values are {#link #TIMEOUT_IMMEDIATE}
                     *  or {@link #TIMEOUT_INDEFINITE} (the default as used by {@link #execute(Runnable)}).
                     * @throws TaskTimeoutException in case of the task being rejected because
                     *  of the timeout (i.e. it cannot be started in time)
                     * @throws TaskRejectedException if the given task was not accepted
                     */
                    // @ts-ignore
                    execute(task: java.lang.Runnable, startTimeout: number /*long*/): void
                    /**
                     * Submit a Runnable task for execution, receiving a Future representing that task.
                     * The Future will return a {@code null} result upon completion.
                     * @param task the {#code Runnable} to execute (never {@code null})
                     * @return a Future representing pending completion of the task
                     * @throws TaskRejectedException if the given task was not accepted
                     * @since 3.0
                     */
                    // @ts-ignore
                    submit(task: java.lang.Runnable): java.util.concurrent.Future<any>
                    /**
                     * Submit a Callable task for execution, receiving a Future representing that task.
                     * The Future will return the Callable's result upon completion.
                     * @param task the {#code Callable} to execute (never {@code null})
                     * @return a Future representing pending completion of the task
                     * @throws TaskRejectedException if the given task was not accepted
                     * @since 3.0
                     */
                    // @ts-ignore
                    submit<T>(task: java.util.concurrent.Callable<T>): java.util.concurrent.Future<T>
                }
            }
        }
    }
}
