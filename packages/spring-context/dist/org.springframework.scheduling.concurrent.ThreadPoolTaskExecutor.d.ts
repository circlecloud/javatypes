declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace concurrent {
                /**
                 * JavaBean that allows for configuring a {@link java.util.concurrent.ThreadPoolExecutor}
                 * in bean style (through its "corePoolSize", "maxPoolSize", "keepAliveSeconds", "queueCapacity"
                 * properties) and exposing it as a Spring {@link org.springframework.core.task.TaskExecutor}.
                 * This class is also well suited for management and monitoring (e.g. through JMX),
                 * providing several useful attributes: "corePoolSize", "maxPoolSize", "keepAliveSeconds"
                 * (all supporting updates at runtime); "poolSize", "activeCount" (for introspection only).
                 * <p>The default configuration is a core pool size of 1, with unlimited max pool size
                 * and unlimited queue capacity. This is roughly equivalent to
                 * {@link java.util.concurrent.Executors#newSingleThreadExecutor()}, sharing a single
                 * thread for all tasks. Setting {@link #setQueueCapacity "queueCapacity"} to 0 mimics
                 * {@link java.util.concurrent.Executors#newCachedThreadPool()}, with immediate scaling
                 * of threads in the pool to a potentially very high number. Consider also setting a
                 * {@link #setMaxPoolSize "maxPoolSize"} at that point, as well as possibly a higher
                 * {@link #setCorePoolSize "corePoolSize"} (see also the
                 * {@link #setAllowCoreThreadTimeOut "allowCoreThreadTimeOut"} mode of scaling).
                 * <p><b>NOTE:</b> This class implements Spring's
                 * {@link org.springframework.core.task.TaskExecutor} interface as well as the
                 * {@link java.util.concurrent.Executor} interface, with the former being the primary
                 * interface, the other just serving as secondary convenience. For this reason, the
                 * exception handling follows the TaskExecutor contract rather than the Executor contract,
                 * in particular regarding the {@link org.springframework.core.task.TaskRejectedException}.
                 * <p>For an alternative, you may set up a ThreadPoolExecutor instance directly using
                 * constructor injection, or use a factory method definition that points to the
                 * {@link java.util.concurrent.Executors} class. To expose such a raw Executor as a
                 * Spring {@link org.springframework.core.task.TaskExecutor}, simply wrap it with a
                 * {@link org.springframework.scheduling.concurrent.ConcurrentTaskExecutor} adapter.
                 * @author Juergen Hoeller
                 * @since 2.0
                 * @see org.springframework.core.task.TaskExecutor
                 * @see java.util.concurrent.ThreadPoolExecutor
                 * @see ThreadPoolExecutorFactoryBean
                 * @see ConcurrentTaskExecutor
                 */
                // @ts-ignore
                class ThreadPoolTaskExecutor extends org.springframework.scheduling.concurrent.ExecutorConfigurationSupport implements org.springframework.scheduling.SchedulingTaskExecutor {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the ThreadPoolExecutor's core pool size.
                     * Default is 1.
                     * <p><b>This setting can be modified at runtime, for example through JMX.</b>
                     */
                    // @ts-ignore
                    public setCorePoolSize(corePoolSize: number /*int*/): void
                    /**
                     * Return the ThreadPoolExecutor's core pool size.
                     */
                    // @ts-ignore
                    public getCorePoolSize(): number /*int*/
                    /**
                     * Set the ThreadPoolExecutor's maximum pool size.
                     * Default is {@code Integer.MAX_VALUE}.
                     * <p><b>This setting can be modified at runtime, for example through JMX.</b>
                     */
                    // @ts-ignore
                    public setMaxPoolSize(maxPoolSize: number /*int*/): void
                    /**
                     * Return the ThreadPoolExecutor's maximum pool size.
                     */
                    // @ts-ignore
                    public getMaxPoolSize(): number /*int*/
                    /**
                     * Set the ThreadPoolExecutor's keep-alive seconds.
                     * Default is 60.
                     * <p><b>This setting can be modified at runtime, for example through JMX.</b>
                     */
                    // @ts-ignore
                    public setKeepAliveSeconds(keepAliveSeconds: number /*int*/): void
                    /**
                     * Return the ThreadPoolExecutor's keep-alive seconds.
                     */
                    // @ts-ignore
                    public getKeepAliveSeconds(): number /*int*/
                    /**
                     * Set the capacity for the ThreadPoolExecutor's BlockingQueue.
                     * Default is {@code Integer.MAX_VALUE}.
                     * <p>Any positive value will lead to a LinkedBlockingQueue instance;
                     * any other value will lead to a SynchronousQueue instance.
                     * @see java.util.concurrent.LinkedBlockingQueue
                     * @see java.util.concurrent.SynchronousQueue
                     */
                    // @ts-ignore
                    public setQueueCapacity(queueCapacity: number /*int*/): void
                    /**
                     * Specify whether to allow core threads to time out. This enables dynamic
                     * growing and shrinking even in combination with a non-zero queue (since
                     * the max pool size will only grow once the queue is full).
                     * <p>Default is "false".
                     * @see java.util.concurrent.ThreadPoolExecutor#allowCoreThreadTimeOut(boolean)
                     */
                    // @ts-ignore
                    public setAllowCoreThreadTimeOut(allowCoreThreadTimeOut: boolean): void
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
                    public setTaskDecorator(taskDecorator: TaskDecorator): void
                    /**
                     * Note: This method exposes an {@link ExecutorService} to its base class
                     * but stores the actual {@link ThreadPoolExecutor} handle internally.
                     * Do not override this method for replacing the executor, rather just for
                     * decorating its {@code ExecutorService} handle or storing custom state.
                     */
                    // @ts-ignore
                    initializeExecutor(threadFactory: java.util.concurrent.ThreadFactory, rejectedExecutionHandler: java.util.concurrent.RejectedExecutionHandler): java.util.concurrent.ExecutorService
                    /**
                     * Create the BlockingQueue to use for the ThreadPoolExecutor.
                     * <p>A LinkedBlockingQueue instance will be created for a positive
                     * capacity value; a SynchronousQueue else.
                     * @param queueCapacity the specified queue capacity
                     * @return the BlockingQueue instance
                     * @see java.util.concurrent.LinkedBlockingQueue
                     * @see java.util.concurrent.SynchronousQueue
                     */
                    // @ts-ignore
                    createQueue(queueCapacity: number /*int*/): java.util.concurrent.BlockingQueue<java.lang.Runnable>
                    /**
                     * Return the underlying ThreadPoolExecutor for native access.
                     * @return the underlying ThreadPoolExecutor (never {#code null})
                     * @throws IllegalStateException if the ThreadPoolTaskExecutor hasn't been initialized yet
                     */
                    // @ts-ignore
                    public getThreadPoolExecutor(): java.util.concurrent.ThreadPoolExecutor
                    /**
                     * Return the current pool size.
                     * @see java.util.concurrent.ThreadPoolExecutor#getPoolSize()
                     */
                    // @ts-ignore
                    public getPoolSize(): number /*int*/
                    /**
                     * Return the number of currently active threads.
                     * @see java.util.concurrent.ThreadPoolExecutor#getActiveCount()
                     */
                    // @ts-ignore
                    public getActiveCount(): number /*int*/
                    // @ts-ignore
                    public execute(task: java.lang.Runnable): void
                    // @ts-ignore
                    public execute(task: java.lang.Runnable, startTimeout: number /*long*/): void
                    // @ts-ignore
                    public submit(task: java.lang.Runnable): java.util.concurrent.Future<any>
                    // @ts-ignore
                    public submit<T>(task: java.util.concurrent.Callable<T>): java.util.concurrent.Future<T>
                    // @ts-ignore
                    public submitListenable(task: java.lang.Runnable): object
                    // @ts-ignore
                    public submitListenable<T>(task: java.util.concurrent.Callable<T>): object
                    // @ts-ignore
                    cancelRemainingTask(task: java.lang.Runnable): void
                }
            }
        }
    }
}
