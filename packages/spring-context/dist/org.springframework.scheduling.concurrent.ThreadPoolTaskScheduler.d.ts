declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace concurrent {
                /**
                 * Implementation of Spring's {@link TaskScheduler} interface, wrapping
                 * a native {@link java.util.concurrent.ScheduledThreadPoolExecutor}.
                 * @author Juergen Hoeller
                 * @author Mark Fisher
                 * @since 3.0
                 * @see #setPoolSize
                 * @see #setRemoveOnCancelPolicy
                 * @see #setThreadFactory
                 * @see #setErrorHandler
                 */
                // @ts-ignore
                class ThreadPoolTaskScheduler extends org.springframework.scheduling.concurrent.ExecutorConfigurationSupport implements org.springframework.scheduling.SchedulingTaskExecutor, org.springframework.scheduling.TaskScheduler {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the ScheduledExecutorService's pool size.
                     * Default is 1.
                     * <p><b>This setting can be modified at runtime, for example through JMX.</b>
                     */
                    // @ts-ignore
                    setPoolSize(poolSize: number /*int*/): void
                    /**
                     * Set the remove-on-cancel mode on {@link ScheduledThreadPoolExecutor}.
                     * <p>Default is {@code false}. If set to {@code true}, the target executor will be
                     * switched into remove-on-cancel mode (if possible, with a soft fallback otherwise).
                     * <p><b>This setting can be modified at runtime, for example through JMX.</b>
                     */
                    // @ts-ignore
                    setRemoveOnCancelPolicy(removeOnCancelPolicy: boolean): void
                    /**
                     * Set a custom {@link ErrorHandler} strategy.
                     */
                    // @ts-ignore
                    setErrorHandler(errorHandler: ErrorHandler): void
                    // @ts-ignore
                    initializeExecutor(threadFactory: java.util.concurrent.ThreadFactory, rejectedExecutionHandler: java.util.concurrent.RejectedExecutionHandler): java.util.concurrent.ExecutorService
                    /**
                     * Create a new {@link ScheduledExecutorService} instance.
                     * <p>The default implementation creates a {@link ScheduledThreadPoolExecutor}.
                     * Can be overridden in subclasses to provide custom {@link ScheduledExecutorService} instances.
                     * @param poolSize the specified pool size
                     * @param threadFactory the ThreadFactory to use
                     * @param rejectedExecutionHandler the RejectedExecutionHandler to use
                     * @return a new ScheduledExecutorService instance
                     * @see #afterPropertiesSet()
                     * @see java.util.concurrent.ScheduledThreadPoolExecutor
                     */
                    // @ts-ignore
                    createExecutor(poolSize: number /*int*/, threadFactory: java.util.concurrent.ThreadFactory, rejectedExecutionHandler: java.util.concurrent.RejectedExecutionHandler): java.util.concurrent.ScheduledExecutorService
                    /**
                     * Return the underlying ScheduledExecutorService for native access.
                     * @return the underlying ScheduledExecutorService (never {#code null})
                     * @throws IllegalStateException if the ThreadPoolTaskScheduler hasn't been initialized yet
                     */
                    // @ts-ignore
                    getScheduledExecutor(): java.util.concurrent.ScheduledExecutorService
                    /**
                     * Return the underlying ScheduledThreadPoolExecutor, if available.
                     * @return the underlying ScheduledExecutorService (never {#code null})
                     * @throws IllegalStateException if the ThreadPoolTaskScheduler hasn't been initialized yet
                     *  or if the underlying ScheduledExecutorService isn't a ScheduledThreadPoolExecutor
                     * @see #getScheduledExecutor()
                     */
                    // @ts-ignore
                    getScheduledThreadPoolExecutor(): java.util.concurrent.ScheduledThreadPoolExecutor
                    /**
                     * Return the current pool size.
                     * <p>Requires an underlying {@link ScheduledThreadPoolExecutor}.
                     * @see #getScheduledThreadPoolExecutor()
                     * @see java.util.concurrent.ScheduledThreadPoolExecutor#getPoolSize()
                     */
                    // @ts-ignore
                    getPoolSize(): int
                    /**
                     * Return the current setting for the remove-on-cancel mode.
                     * <p>Requires an underlying {@link ScheduledThreadPoolExecutor}.
                     */
                    // @ts-ignore
                    isRemoveOnCancelPolicy(): boolean
                    /**
                     * Return the number of currently active threads.
                     * <p>Requires an underlying {@link ScheduledThreadPoolExecutor}.
                     * @see #getScheduledThreadPoolExecutor()
                     * @see java.util.concurrent.ScheduledThreadPoolExecutor#getActiveCount()
                     */
                    // @ts-ignore
                    getActiveCount(): int
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
                    // @ts-ignore
                    cancelRemainingTask(task: java.lang.Runnable): void
                    // @ts-ignore
                    schedule(task: java.lang.Runnable, trigger: org.springframework.scheduling.Trigger): java.util.concurrent.ScheduledFuture<?>
                    // @ts-ignore
                    schedule(task: java.lang.Runnable, startTime: java.util.Date): java.util.concurrent.ScheduledFuture<?>
                    // @ts-ignore
                    scheduleAtFixedRate(task: java.lang.Runnable, startTime: java.util.Date, period: number /*long*/): java.util.concurrent.ScheduledFuture<?>
                    // @ts-ignore
                    scheduleAtFixedRate(task: java.lang.Runnable, period: number /*long*/): java.util.concurrent.ScheduledFuture<?>
                    // @ts-ignore
                    scheduleWithFixedDelay(task: java.lang.Runnable, startTime: java.util.Date, delay: number /*long*/): java.util.concurrent.ScheduledFuture<?>
                    // @ts-ignore
                    scheduleWithFixedDelay(task: java.lang.Runnable, delay: number /*long*/): java.util.concurrent.ScheduledFuture<?>
                }
            }
        }
    }
}
