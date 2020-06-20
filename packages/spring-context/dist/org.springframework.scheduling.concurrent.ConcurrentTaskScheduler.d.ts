declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace concurrent {
                /**
                 * Adapter that takes a {@code java.util.concurrent.ScheduledExecutorService} and
                 * exposes a Spring {@link org.springframework.scheduling.TaskScheduler} for it.
                 * Extends {@link ConcurrentTaskExecutor} in order to implement the
                 * {@link org.springframework.scheduling.SchedulingTaskExecutor} interface as well.
                 * <p>Autodetects a JSR-236 {@link javax.enterprise.concurrent.ManagedScheduledExecutorService}
                 * in order to use it for trigger-based scheduling if possible, instead of Spring's
                 * local trigger management which ends up delegating to regular delay-based scheduling
                 * against the {@code java.util.concurrent.ScheduledExecutorService} API. For JSR-236 style
                 * lookup in a Java EE 7 environment, consider using {@link DefaultManagedTaskScheduler}.
                 * <p>Note that there is a pre-built {@link ThreadPoolTaskScheduler} that allows for
                 * defining a {@link java.util.concurrent.ScheduledThreadPoolExecutor} in bean style,
                 * exposing it as a Spring {@link org.springframework.scheduling.TaskScheduler} directly.
                 * This is a convenient alternative to a raw ScheduledThreadPoolExecutor definition with
                 * a separate definition of the present adapter class.
                 * @author Juergen Hoeller
                 * @author Mark Fisher
                 * @since 3.0
                 * @see java.util.concurrent.ScheduledExecutorService
                 * @see java.util.concurrent.ScheduledThreadPoolExecutor
                 * @see java.util.concurrent.Executors
                 * @see DefaultManagedTaskScheduler
                 * @see ThreadPoolTaskScheduler
                 */
                // @ts-ignore
                class ConcurrentTaskScheduler extends org.springframework.scheduling.concurrent.ConcurrentTaskExecutor implements org.springframework.scheduling.TaskScheduler {
                    /**
                     * Create a new ConcurrentTaskScheduler,
                     * using a single thread executor as default.
                     * @see java.util.concurrent.Executors#newSingleThreadScheduledExecutor()
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new ConcurrentTaskScheduler, using the given
                     * {@link java.util.concurrent.ScheduledExecutorService} as shared delegate.
                     * <p>Autodetects a JSR-236 {@link javax.enterprise.concurrent.ManagedScheduledExecutorService}
                     * in order to use it for trigger-based scheduling if possible,
                     * instead of Spring's local trigger management.
                     * @param scheduledExecutor the {#link java.util.concurrent.ScheduledExecutorService}
                     *  to delegate to for {@link org.springframework.scheduling.SchedulingTaskExecutor}
                     *  as well as {@link TaskScheduler} invocations
                     */
                    // @ts-ignore
                    constructor(scheduledExecutor: java.util.concurrent.ScheduledExecutorService)
                    /**
                     * Create a new ConcurrentTaskScheduler, using the given {@link java.util.concurrent.Executor}
                     * and {@link java.util.concurrent.ScheduledExecutorService} as delegates.
                     * <p>Autodetects a JSR-236 {@link javax.enterprise.concurrent.ManagedScheduledExecutorService}
                     * in order to use it for trigger-based scheduling if possible,
                     * instead of Spring's local trigger management.
                     * @param concurrentExecutor the {#link java.util.concurrent.Executor} to delegate to
                     *  for {@link org.springframework.scheduling.SchedulingTaskExecutor} invocations
                     * @param scheduledExecutor the {#link java.util.concurrent.ScheduledExecutorService}
                     *  to delegate to for {@link TaskScheduler} invocations
                     */
                    // @ts-ignore
                    constructor(concurrentExecutor: java.util.concurrent.Executor, scheduledExecutor: java.util.concurrent.ScheduledExecutorService)
                    /**
                     * Specify the {@link java.util.concurrent.ScheduledExecutorService} to delegate to.
                     * <p>Autodetects a JSR-236 {@link javax.enterprise.concurrent.ManagedScheduledExecutorService}
                     * in order to use it for trigger-based scheduling if possible,
                     * instead of Spring's local trigger management.
                     * <p>Note: This will only apply to {@link TaskScheduler} invocations.
                     * If you want the given executor to apply to
                     * {@link org.springframework.scheduling.SchedulingTaskExecutor} invocations
                     * as well, pass the same executor reference to {@link #setConcurrentExecutor}.
                     * @see #setConcurrentExecutor
                     */
                    // @ts-ignore
                    setScheduledExecutor(scheduledExecutor: java.util.concurrent.ScheduledExecutorService): void
                    /**
                     * Provide an {@link ErrorHandler} strategy.
                     */
                    // @ts-ignore
                    setErrorHandler(errorHandler: ErrorHandler): void
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
