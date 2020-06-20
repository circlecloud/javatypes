declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace concurrent {
                /**
                 * A Spring {@link FactoryBean} that builds and exposes a preconfigured {@link ForkJoinPool}.
                 * @author Juergen Hoeller
                 * @since 3.1
                 */
                // @ts-ignore
                class ForkJoinPoolFactoryBean extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set whether to expose JDK 8's 'common' {@link ForkJoinPool}.
                     * <p>Default is "false", creating a local {@link ForkJoinPool} instance based on the
                     * {@link #setParallelism "parallelism"}, {@link #setThreadFactory "threadFactory"},
                     * {@link #setUncaughtExceptionHandler "uncaughtExceptionHandler"} and
                     * {@link #setAsyncMode "asyncMode"} properties on this FactoryBean.
                     * <p><b>NOTE:</b> Setting this flag to "true" effectively ignores all other
                     * properties on this FactoryBean, reusing the shared common JDK {@link ForkJoinPool}
                     * instead. This is a fine choice on JDK 8 but does remove the application's ability
                     * to customize ForkJoinPool behavior, in particular the use of custom threads.
                     * @since 3.2
                     * @see java.util.concurrent.ForkJoinPool#commonPool()
                     */
                    // @ts-ignore
                    setCommonPool(commonPool: boolean): void
                    /**
                     * Specify the parallelism level. Default is {@link Runtime#availableProcessors()}.
                     */
                    // @ts-ignore
                    setParallelism(parallelism: number /*int*/): void
                    /**
                     * Set the factory for creating new ForkJoinWorkerThreads.
                     * Default is {@link ForkJoinPool#defaultForkJoinWorkerThreadFactory}.
                     */
                    // @ts-ignore
                    setThreadFactory(threadFactory: java.util.concurrent.ForkJoinPool.ForkJoinWorkerThreadFactory): void
                    /**
                     * Set the handler for internal worker threads that terminate due to unrecoverable errors
                     * encountered while executing tasks. Default is none.
                     */
                    // @ts-ignore
                    setUncaughtExceptionHandler(uncaughtExceptionHandler: java.lang.Thread.UncaughtExceptionHandler): void
                    /**
                     * Specify whether to establish a local first-in-first-out scheduling mode for forked tasks
                     * that are never joined. This mode (asyncMode = {@code true}) may be more appropriate
                     * than the default locally stack-based mode in applications in which worker threads only
                     * process event-style asynchronous tasks. Default is {@code false}.
                     */
                    // @ts-ignore
                    setAsyncMode(asyncMode: boolean): void
                    /**
                     * Set the maximum number of seconds that this ForkJoinPool is supposed to block
                     * on shutdown in order to wait for remaining tasks to complete their execution
                     * before the rest of the container continues to shut down. This is particularly
                     * useful if your remaining tasks are likely to need access to other resources
                     * that are also managed by the container.
                     * <p>By default, this ForkJoinPool won't wait for the termination of tasks at all.
                     * It will continue to fully execute all ongoing tasks as well as all remaining
                     * tasks in the queue, in parallel to the rest of the container shutting down.
                     * In contrast, if you specify an await-termination period using this property,
                     * this executor will wait for the given time (max) for the termination of tasks.
                     * <p>Note that this feature works for the {@link #setCommonPool "commonPool"}
                     * mode as well. The underlying ForkJoinPool won't actually terminate in that
                     * case but will wait for all tasks to terminate.
                     * @see java.util.concurrent.ForkJoinPool#shutdown()
                     * @see java.util.concurrent.ForkJoinPool#awaitTermination
                     */
                    // @ts-ignore
                    setAwaitTerminationSeconds(awaitTerminationSeconds: number /*int*/): void
                    // @ts-ignore
                    afterPropertiesSet(): void
                    // @ts-ignore
                    getObject(): java.util.concurrent.ForkJoinPool
                    // @ts-ignore
                    getObjectType(): java.lang.Class<?>
                    // @ts-ignore
                    isSingleton(): boolean
                    // @ts-ignore
                    destroy(): void
                }
            }
        }
    }
}
