declare namespace org {
    namespace springframework {
        namespace core {
            namespace task {
                /**
                 * {@link TaskExecutor} implementation that fires up a new Thread for each task,
                 * executing it asynchronously.
                 * <p>Supports limiting concurrent threads through the "concurrencyLimit"
                 * bean property. By default, the number of concurrent threads is unlimited.
                 * <p><b>NOTE: This implementation does not reuse threads!</b> Consider a
                 * thread-pooling TaskExecutor implementation instead, in particular for
                 * executing a large number of short-lived tasks.
                 * @author Juergen Hoeller
                 * @since 2.0
                 * @see #setConcurrencyLimit
                 * @see SyncTaskExecutor
                 * @see org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor
                 * @see org.springframework.scheduling.commonj.WorkManagerTaskExecutor
                 */
                // @ts-ignore
                class SimpleAsyncTaskExecutor extends org.springframework.util.CustomizableThreadCreator implements org.springframework.core.task.AsyncListenableTaskExecutor, java.io.Serializable {
                    /**
                     * Create a new SimpleAsyncTaskExecutor with default thread name prefix.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new SimpleAsyncTaskExecutor with the given thread name prefix.
                     * @param threadNamePrefix the prefix to use for the names of newly created threads
                     */
                    // @ts-ignore
                    constructor(threadNamePrefix: java.lang.String | string)
                    /**
                     * Create a new SimpleAsyncTaskExecutor with the given external thread factory.
                     * @param threadFactory the factory to use for creating new Threads
                     */
                    // @ts-ignore
                    constructor(threadFactory: java.util.concurrent.ThreadFactory)
                    /**
                     * Permit any number of concurrent invocations: that is, don't throttle concurrency.
                     * @see ConcurrencyThrottleSupport#UNBOUNDED_CONCURRENCY
                     */
                    // @ts-ignore
                    public static readonly UNBOUNDED_CONCURRENCY: number /*int*/
                    /**
                     * Switch concurrency 'off': that is, don't allow any concurrent invocations.
                     * @see ConcurrencyThrottleSupport#NO_CONCURRENCY
                     */
                    // @ts-ignore
                    public static readonly NO_CONCURRENCY: number /*int*/
                    /**
                     * Specify an external factory to use for creating new Threads,
                     * instead of relying on the local properties of this executor.
                     * <p>You may specify an inner ThreadFactory bean or also a ThreadFactory reference
                     * obtained from JNDI (on a Java EE 6 server) or some other lookup mechanism.
                     * @see #setThreadNamePrefix
                     * @see #setThreadPriority
                     */
                    // @ts-ignore
                    public setThreadFactory(threadFactory: java.util.concurrent.ThreadFactory): void
                    /**
                     * Return the external factory to use for creating new Threads, if any.
                     */
                    // @ts-ignore
                    public getThreadFactory(): java.util.concurrent.ThreadFactory
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
                    public setTaskDecorator(taskDecorator: org.springframework.core.task.TaskDecorator): void
                    /**
                     * Set the maximum number of parallel accesses allowed.
                     * -1 indicates no concurrency limit at all.
                     * <p>In principle, this limit can be changed at runtime,
                     * although it is generally designed as a config time setting.
                     * NOTE: Do not switch between -1 and any concrete limit at runtime,
                     * as this will lead to inconsistent concurrency counts: A limit
                     * of -1 effectively turns off concurrency counting completely.
                     * @see #UNBOUNDED_CONCURRENCY
                     */
                    // @ts-ignore
                    public setConcurrencyLimit(concurrencyLimit: number /*int*/): void
                    /**
                     * Return the maximum number of parallel accesses allowed.
                     */
                    // @ts-ignore
                    public getConcurrencyLimit(): number /*int*/
                    /**
                     * Return whether this throttle is currently active.
                     * @return {#code true} if the concurrency limit for this instance is active
                     * @see #getConcurrencyLimit()
                     * @see #setConcurrencyLimit
                     */
                    // @ts-ignore
                    public isThrottleActive(): boolean
                    /**
                     * Executes the given task, within a concurrency throttle
                     * if configured (through the superclass's settings).
                     * @see #doExecute(Runnable)
                     */
                    // @ts-ignore
                    public execute(task: java.lang.Runnable): void
                    /**
                     * Executes the given task, within a concurrency throttle
                     * if configured (through the superclass's settings).
                     * <p>Executes urgent tasks (with 'immediate' timeout) directly,
                     * bypassing the concurrency throttle (if active). All other
                     * tasks are subject to throttling.
                     * @see #TIMEOUT_IMMEDIATE
                     * @see #doExecute(Runnable)
                     */
                    // @ts-ignore
                    public execute(task: java.lang.Runnable, startTimeout: number /*long*/): void
                    // @ts-ignore
                    public submit(task: java.lang.Runnable): java.util.concurrent.Future<any>
                    // @ts-ignore
                    public submit<T>(task: java.util.concurrent.Callable<T>): java.util.concurrent.Future<T>
                    // @ts-ignore
                    public submitListenable(task: java.lang.Runnable): org.springframework.util.concurrent.ListenableFuture<any>
                    // @ts-ignore
                    public submitListenable<T>(task: java.util.concurrent.Callable<T>): org.springframework.util.concurrent.ListenableFuture<T>
                    /**
                     * Template method for the actual execution of a task.
                     * <p>The default implementation creates a new Thread and starts it.
                     * @param task the Runnable to execute
                     * @see #setThreadFactory
                     * @see #createThread
                     * @see java.lang.Thread#start()
                     */
                    // @ts-ignore
                    doExecute(task: java.lang.Runnable): void
                }
            }
        }
    }
}
