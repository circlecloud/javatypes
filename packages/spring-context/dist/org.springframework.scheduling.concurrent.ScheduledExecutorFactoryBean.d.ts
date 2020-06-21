declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace concurrent {
                /**
                 * {@link org.springframework.beans.factory.FactoryBean} that sets up
                 * a {@link java.util.concurrent.ScheduledExecutorService}
                 * (by default: a {@link java.util.concurrent.ScheduledThreadPoolExecutor})
                 * and exposes it for bean references.
                 * <p>Allows for registration of {@link ScheduledExecutorTask ScheduledExecutorTasks},
                 * automatically starting the {@link ScheduledExecutorService} on initialization and
                 * cancelling it on destruction of the context. In scenarios that only require static
                 * registration of tasks at startup, there is no need to access the
                 * {@link ScheduledExecutorService} instance itself in application code at all;
                 * {@code ScheduledExecutorFactoryBean} is then just being used for lifecycle integration.
                 * <p>For an alternative, you may set up a {@link ScheduledThreadPoolExecutor} instance
                 * directly using constructor injection, or use a factory method definition that points
                 * to the {@link java.util.concurrent.Executors} class.
                 * <b>This is strongly recommended in particular for common {@code @Bean} methods in
                 * configuration classes, where this {@code FactoryBean} variant would force you to
                 * return the {@code FactoryBean} type instead of {@code ScheduledExecutorService}.</b>
                 * <p>Note that {@link java.util.concurrent.ScheduledExecutorService}
                 * uses a {@link Runnable} instance that is shared between repeated executions,
                 * in contrast to Quartz which instantiates a new Job for each execution.
                 * <p><b>WARNING:</b> {@link Runnable Runnables} submitted via a native
                 * {@link java.util.concurrent.ScheduledExecutorService} are removed from
                 * the execution schedule once they throw an exception. If you would prefer
                 * to continue execution after such an exception, switch this FactoryBean's
                 * {@link #setContinueScheduledExecutionAfterException "continueScheduledExecutionAfterException"}
                 * property to "true".
                 * @author Juergen Hoeller
                 * @since 2.0
                 * @see #setPoolSize
                 * @see #setRemoveOnCancelPolicy
                 * @see #setThreadFactory
                 * @see ScheduledExecutorTask
                 * @see java.util.concurrent.ScheduledExecutorService
                 * @see java.util.concurrent.ScheduledThreadPoolExecutor
                 */
                // @ts-ignore
                class ScheduledExecutorFactoryBean extends org.springframework.scheduling.concurrent.ExecutorConfigurationSupport {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the ScheduledExecutorService's pool size.
                     * Default is 1.
                     */
                    // @ts-ignore
                    public setPoolSize(poolSize: number /*int*/): void
                    /**
                     * Register a list of ScheduledExecutorTask objects with the ScheduledExecutorService
                     * that this FactoryBean creates. Depending on each ScheduledExecutorTask's settings,
                     * it will be registered via one of ScheduledExecutorService's schedule methods.
                     * @see java.util.concurrent.ScheduledExecutorService#schedule(java.lang.Runnable, long, java.util.concurrent.TimeUnit)
                     * @see java.util.concurrent.ScheduledExecutorService#scheduleWithFixedDelay(java.lang.Runnable, long, long, java.util.concurrent.TimeUnit)
                     * @see java.util.concurrent.ScheduledExecutorService#scheduleAtFixedRate(java.lang.Runnable, long, long, java.util.concurrent.TimeUnit)
                     */
                    // @ts-ignore
                    public setScheduledExecutorTasks(...scheduledExecutorTasks: org.springframework.scheduling.concurrent.ScheduledExecutorTask[]): void
                    /**
                     * Set the remove-on-cancel mode on {@link ScheduledThreadPoolExecutor}.
                     * <p>Default is {@code false}. If set to {@code true}, the target executor will be
                     * switched into remove-on-cancel mode (if possible, with a soft fallback otherwise).
                     */
                    // @ts-ignore
                    public setRemoveOnCancelPolicy(removeOnCancelPolicy: boolean): void
                    /**
                     * Specify whether to continue the execution of a scheduled task
                     * after it threw an exception.
                     * <p>Default is "false", matching the native behavior of a
                     * {@link java.util.concurrent.ScheduledExecutorService}.
                     * Switch this flag to "true" for exception-proof execution of each task,
                     * continuing scheduled execution as in the case of successful execution.
                     * @see java.util.concurrent.ScheduledExecutorService#scheduleAtFixedRate
                     */
                    // @ts-ignore
                    public setContinueScheduledExecutionAfterException(continueScheduledExecutionAfterException: boolean): void
                    /**
                     * Specify whether this FactoryBean should expose an unconfigurable
                     * decorator for the created executor.
                     * <p>Default is "false", exposing the raw executor as bean reference.
                     * Switch this flag to "true" to strictly prevent clients from
                     * modifying the executor's configuration.
                     * @see java.util.concurrent.Executors#unconfigurableScheduledExecutorService
                     */
                    // @ts-ignore
                    public setExposeUnconfigurableExecutor(exposeUnconfigurableExecutor: boolean): void
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
                     * Register the specified {@link ScheduledExecutorTask ScheduledExecutorTasks}
                     * on the given {@link ScheduledExecutorService}.
                     * @param tasks the specified ScheduledExecutorTasks (never empty)
                     * @param executor the ScheduledExecutorService to register the tasks on.
                     */
                    // @ts-ignore
                    registerTasks(tasks: org.springframework.scheduling.concurrent.ScheduledExecutorTask[], executor: java.util.concurrent.ScheduledExecutorService): void
                    /**
                     * Determine the actual Runnable to schedule for the given task.
                     * <p>Wraps the task's Runnable in a
                     * {@link org.springframework.scheduling.support.DelegatingErrorHandlingRunnable}
                     * that will catch and log the Exception. If necessary, it will suppress the
                     * Exception according to the
                     * {@link #setContinueScheduledExecutionAfterException "continueScheduledExecutionAfterException"}
                     * flag.
                     * @param task the ScheduledExecutorTask to schedule
                     * @return the actual Runnable to schedule (may be a decorator)
                     */
                    // @ts-ignore
                    getRunnableToSchedule(task: org.springframework.scheduling.concurrent.ScheduledExecutorTask): java.lang.Runnable
                    // @ts-ignore
                    public getObject(): java.util.concurrent.ScheduledExecutorService
                    // @ts-ignore
                    public getObjectType(): java.lang.Class<any>
                    // @ts-ignore
                    public isSingleton(): boolean
                }
            }
        }
    }
}
