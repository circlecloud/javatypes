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
                    public setPoolSize(poolSize: number /*int*/): void
                    /**
                     * Set the remove-on-cancel mode on {@link ScheduledThreadPoolExecutor}.
                     * <p>Default is {@code false}. If set to {@code true}, the target executor will be
                     * switched into remove-on-cancel mode (if possible, with a soft fallback otherwise).
                     * <p><b>This setting can be modified at runtime, for example through JMX.</b>
                     */
                    // @ts-ignore
                    public setRemoveOnCancelPolicy(removeOnCancelPolicy: boolean): void
                    /**
                     * Set a custom {@link ErrorHandler} strategy.
                     */
                    // @ts-ignore
                    public setErrorHandler(errorHandler: ErrorHandler): void
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
                    public getScheduledExecutor(): java.util.concurrent.ScheduledExecutorService
                    /**
                     * Return the underlying ScheduledThreadPoolExecutor, if available.
                     * @return the underlying ScheduledExecutorService (never {#code null})
                     * @throws IllegalStateException if the ThreadPoolTaskScheduler hasn't been initialized yet
                     *  or if the underlying ScheduledExecutorService isn't a ScheduledThreadPoolExecutor
                     * @see #getScheduledExecutor()
                     */
                    // @ts-ignore
                    public getScheduledThreadPoolExecutor(): java.util.concurrent.ScheduledThreadPoolExecutor
                    /**
                     * Return the current pool size.
                     * <p>Requires an underlying {@link ScheduledThreadPoolExecutor}.
                     * @see #getScheduledThreadPoolExecutor()
                     * @see java.util.concurrent.ScheduledThreadPoolExecutor#getPoolSize()
                     */
                    // @ts-ignore
                    public getPoolSize(): number /*int*/
                    /**
                     * Return the current setting for the remove-on-cancel mode.
                     * <p>Requires an underlying {@link ScheduledThreadPoolExecutor}.
                     */
                    // @ts-ignore
                    public isRemoveOnCancelPolicy(): boolean
                    /**
                     * Return the number of currently active threads.
                     * <p>Requires an underlying {@link ScheduledThreadPoolExecutor}.
                     * @see #getScheduledThreadPoolExecutor()
                     * @see java.util.concurrent.ScheduledThreadPoolExecutor#getActiveCount()
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
                    // @ts-ignore
                    public schedule(task: java.lang.Runnable, trigger: org.springframework.scheduling.Trigger): java.util.concurrent.ScheduledFuture<any>
                    // @ts-ignore
                    public schedule(task: java.lang.Runnable, startTime: java.util.Date): java.util.concurrent.ScheduledFuture<any>
                    // @ts-ignore
                    public scheduleAtFixedRate(task: java.lang.Runnable, startTime: java.util.Date, period: number /*long*/): java.util.concurrent.ScheduledFuture<any>
                    // @ts-ignore
                    public scheduleAtFixedRate(task: java.lang.Runnable, period: number /*long*/): java.util.concurrent.ScheduledFuture<any>
                    // @ts-ignore
                    public scheduleWithFixedDelay(task: java.lang.Runnable, startTime: java.util.Date, delay: number /*long*/): java.util.concurrent.ScheduledFuture<any>
                    // @ts-ignore
                    public scheduleWithFixedDelay(task: java.lang.Runnable, delay: number /*long*/): java.util.concurrent.ScheduledFuture<any>
                }
            }
        }
    }
}
