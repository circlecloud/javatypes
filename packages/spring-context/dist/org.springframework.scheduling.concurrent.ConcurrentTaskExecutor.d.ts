declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace concurrent {
                /**
                 * Adapter that takes a {@code java.util.concurrent.Executor} and exposes
                 * a Spring {@link org.springframework.core.task.TaskExecutor} for it.
                 * Also detects an extended {@code java.util.concurrent.ExecutorService}, adapting
                 * the {@link org.springframework.core.task.AsyncTaskExecutor} interface accordingly.
                 * <p>Autodetects a JSR-236 {@link javax.enterprise.concurrent.ManagedExecutorService}
                 * in order to expose {@link javax.enterprise.concurrent.ManagedTask} adapters for it,
                 * exposing a long-running hint based on {@link SchedulingAwareRunnable} and an identity
                 * name based on the given Runnable/Callable's {@code toString()}. For JSR-236 style
                 * lookup in a Java EE 7 environment, consider using {@link DefaultManagedTaskExecutor}.
                 * <p>Note that there is a pre-built {@link ThreadPoolTaskExecutor} that allows
                 * for defining a {@link java.util.concurrent.ThreadPoolExecutor} in bean style,
                 * exposing it as a Spring {@link org.springframework.core.task.TaskExecutor} directly.
                 * This is a convenient alternative to a raw ThreadPoolExecutor definition with
                 * a separate definition of the present adapter class.
                 * @author Juergen Hoeller
                 * @since 2.0
                 * @see java.util.concurrent.Executor
                 * @see java.util.concurrent.ExecutorService
                 * @see java.util.concurrent.ThreadPoolExecutor
                 * @see java.util.concurrent.Executors
                 * @see DefaultManagedTaskExecutor
                 * @see ThreadPoolTaskExecutor
                 */
                // @ts-ignore
                class ConcurrentTaskExecutor extends java.lang.Object implements org.springframework.scheduling.SchedulingTaskExecutor {
                    /**
                     * Create a new ConcurrentTaskExecutor, using a single thread executor as default.
                     * @see java.util.concurrent.Executors#newSingleThreadExecutor()
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new ConcurrentTaskExecutor, using the given {@link java.util.concurrent.Executor}.
                     * <p>Autodetects a JSR-236 {@link javax.enterprise.concurrent.ManagedExecutorService}
                     * in order to expose {@link javax.enterprise.concurrent.ManagedTask} adapters for it.
                     * @param executor the {#link java.util.concurrent.Executor} to delegate to
                     */
                    // @ts-ignore
                    constructor(executor: java.util.concurrent.Executor)
                    /**
                     * Specify the {@link java.util.concurrent.Executor} to delegate to.
                     * <p>Autodetects a JSR-236 {@link javax.enterprise.concurrent.ManagedExecutorService}
                     * in order to expose {@link javax.enterprise.concurrent.ManagedTask} adapters for it.
                     */
                    // @ts-ignore
                    setConcurrentExecutor(executor: java.util.concurrent.Executor): void
                    /**
                     * Return the {@link java.util.concurrent.Executor} that this adapter delegates to.
                     */
                    // @ts-ignore
                    getConcurrentExecutor(): java.util.concurrent.Executor
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
                    setTaskDecorator(taskDecorator: TaskDecorator): void
                    // @ts-ignore
                    execute(task: java.lang.Runnable): void
                    // @ts-ignore
                    execute(task: java.lang.Runnable, startTimeout: number /*long*/): void
                    // @ts-ignore
                    submit(task: java.lang.Runnable): java.util.concurrent.Future<?>
                    // @ts-ignore
                    submit<T>(task: java.util.concurrent.Callable<T>): java.util.concurrent.Future<T>
                    // @ts-ignore
                    submitListenable(task: java.lang.Runnable): <any>
                    // @ts-ignore
                    submitListenable<T>(task: java.util.concurrent.Callable<T>): <any>
                }
            }
        }
    }
}
