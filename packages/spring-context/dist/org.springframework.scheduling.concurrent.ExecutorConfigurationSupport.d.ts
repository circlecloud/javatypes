declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace concurrent {
                /**
                 * Base class for setting up a {@link java.util.concurrent.ExecutorService}
                 * (typically a {@link java.util.concurrent.ThreadPoolExecutor} or
                 * {@link java.util.concurrent.ScheduledThreadPoolExecutor}).
                 * Defines common configuration settings and common lifecycle handling.
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see java.util.concurrent.ExecutorService
                 * @see java.util.concurrent.Executors
                 * @see java.util.concurrent.ThreadPoolExecutor
                 * @see java.util.concurrent.ScheduledThreadPoolExecutor
                 */
                // @ts-ignore
                class ExecutorConfigurationSupport extends org.springframework.scheduling.concurrent.CustomizableThreadFactory {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Set the ThreadFactory to use for the ExecutorService's thread pool.
                     * Default is the underlying ExecutorService's default thread factory.
                     * <p>In a Java EE 7 or other managed environment with JSR-236 support,
                     * consider specifying a JNDI-located ManagedThreadFactory: by default,
                     * to be found at "java:comp/DefaultManagedThreadFactory".
                     * Use the "jee:jndi-lookup" namespace element in XML or the programmatic
                     * {@link org.springframework.jndi.JndiLocatorDelegate} for convenient lookup.
                     * Alternatively, consider using Spring's {@link DefaultManagedAwareThreadFactory}
                     * with its fallback to local threads in case of no managed thread factory found.
                     * @see java.util.concurrent.Executors#defaultThreadFactory()
                     * @see javax.enterprise.concurrent.ManagedThreadFactory
                     * @see DefaultManagedAwareThreadFactory
                     */
                    // @ts-ignore
                    setThreadFactory(threadFactory: java.util.concurrent.ThreadFactory): void
                    // @ts-ignore
                    setThreadNamePrefix(threadNamePrefix: string): void
                    /**
                     * Set the RejectedExecutionHandler to use for the ExecutorService.
                     * Default is the ExecutorService's default abort policy.
                     * @see java.util.concurrent.ThreadPoolExecutor.AbortPolicy
                     */
                    // @ts-ignore
                    setRejectedExecutionHandler(rejectedExecutionHandler: java.util.concurrent.RejectedExecutionHandler): void
                    /**
                     * Set whether to wait for scheduled tasks to complete on shutdown,
                     * not interrupting running tasks and executing all tasks in the queue.
                     * <p>Default is "false", shutting down immediately through interrupting
                     * ongoing tasks and clearing the queue. Switch this flag to "true" if you
                     * prefer fully completed tasks at the expense of a longer shutdown phase.
                     * <p>Note that Spring's container shutdown continues while ongoing tasks
                     * are being completed. If you want this executor to block and wait for the
                     * termination of tasks before the rest of the container continues to shut
                     * down - e.g. in order to keep up other resources that your tasks may need -,
                     * set the {@link #setAwaitTerminationSeconds "awaitTerminationSeconds"}
                     * property instead of or in addition to this property.
                     * @see java.util.concurrent.ExecutorService#shutdown()
                     * @see java.util.concurrent.ExecutorService#shutdownNow()
                     */
                    // @ts-ignore
                    setWaitForTasksToCompleteOnShutdown(waitForJobsToCompleteOnShutdown: boolean): void
                    /**
                     * Set the maximum number of seconds that this executor is supposed to block
                     * on shutdown in order to wait for remaining tasks to complete their execution
                     * before the rest of the container continues to shut down. This is particularly
                     * useful if your remaining tasks are likely to need access to other resources
                     * that are also managed by the container.
                     * <p>By default, this executor won't wait for the termination of tasks at all.
                     * It will either shut down immediately, interrupting ongoing tasks and clearing
                     * the remaining task queue - or, if the
                     * {@link #setWaitForTasksToCompleteOnShutdown "waitForTasksToCompleteOnShutdown"}
                     * flag has been set to {@code true}, it will continue to fully execute all
                     * ongoing tasks as well as all remaining tasks in the queue, in parallel to
                     * the rest of the container shutting down.
                     * <p>In either case, if you specify an await-termination period using this property,
                     * this executor will wait for the given time (max) for the termination of tasks.
                     * As a rule of thumb, specify a significantly higher timeout here if you set
                     * "waitForTasksToCompleteOnShutdown" to {@code true} at the same time,
                     * since all remaining tasks in the queue will still get executed - in contrast
                     * to the default shutdown behavior where it's just about waiting for currently
                     * executing tasks that aren't reacting to thread interruption.
                     * @see #setAwaitTerminationMillis
                     * @see java.util.concurrent.ExecutorService#shutdown()
                     * @see java.util.concurrent.ExecutorService#awaitTermination
                     */
                    // @ts-ignore
                    setAwaitTerminationSeconds(awaitTerminationSeconds: number /*int*/): void
                    /**
                     * Variant of {@link #setAwaitTerminationSeconds} with millisecond precision.
                     * @since 5.2.4
                     * @see #setAwaitTerminationSeconds
                     */
                    // @ts-ignore
                    setAwaitTerminationMillis(awaitTerminationMillis: number /*long*/): void
                    // @ts-ignore
                    setBeanName(name: string): void
                    /**
                     * Calls {@code initialize()} after the container applied all property values.
                     * @see #initialize()
                     */
                    // @ts-ignore
                    afterPropertiesSet(): void
                    /**
                     * Set up the ExecutorService.
                     */
                    // @ts-ignore
                    initialize(): void
                    /**
                     * Create the target {@link java.util.concurrent.ExecutorService} instance.
                     * Called by {@code afterPropertiesSet}.
                     * @param threadFactory the ThreadFactory to use
                     * @param rejectedExecutionHandler the RejectedExecutionHandler to use
                     * @return a new ExecutorService instance
                     * @see #afterPropertiesSet()
                     */
                    // @ts-ignore
                    abstract initializeExecutor(threadFactory: java.util.concurrent.ThreadFactory, rejectedExecutionHandler: java.util.concurrent.RejectedExecutionHandler): java.util.concurrent.ExecutorService
                    /**
                     * Calls {@code shutdown} when the BeanFactory destroys
                     * the task executor instance.
                     * @see #shutdown()
                     */
                    // @ts-ignore
                    destroy(): void
                    /**
                     * Perform a shutdown on the underlying ExecutorService.
                     * @see java.util.concurrent.ExecutorService#shutdown()
                     * @see java.util.concurrent.ExecutorService#shutdownNow()
                     */
                    // @ts-ignore
                    shutdown(): void
                    /**
                     * Cancel the given remaining task which never commended execution,
                     * as returned from {@link ExecutorService#shutdownNow()}.
                     * @param task the task to cancel (typically a {#link RunnableFuture})
                     * @since 5.0.5
                     * @see #shutdown()
                     * @see RunnableFuture#cancel(boolean)
                     */
                    // @ts-ignore
                    cancelRemainingTask(task: java.lang.Runnable): void
                }
            }
        }
    }
}
