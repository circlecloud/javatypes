declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace concurrent {
                /**
                 * JavaBean that allows for configuring a {@link java.util.concurrent.ThreadPoolExecutor}
                 * in bean style (through its "corePoolSize", "maxPoolSize", "keepAliveSeconds",
                 * "queueCapacity" properties) and exposing it as a bean reference of its native
                 * {@link java.util.concurrent.ExecutorService} type.
                 * <p>The default configuration is a core pool size of 1, with unlimited max pool size
                 * and unlimited queue capacity. This is roughly equivalent to
                 * {@link java.util.concurrent.Executors#newSingleThreadExecutor()}, sharing a single
                 * thread for all tasks. Setting {@link #setQueueCapacity "queueCapacity"} to 0 mimics
                 * {@link java.util.concurrent.Executors#newCachedThreadPool()}, with immediate scaling
                 * of threads in the pool to a potentially very high number. Consider also setting a
                 * {@link #setMaxPoolSize "maxPoolSize"} at that point, as well as possibly a higher
                 * {@link #setCorePoolSize "corePoolSize"} (see also the
                 * {@link #setAllowCoreThreadTimeOut "allowCoreThreadTimeOut"} mode of scaling).
                 * <p>For an alternative, you may set up a {@link ThreadPoolExecutor} instance directly
                 * using constructor injection, or use a factory method definition that points to the
                 * {@link java.util.concurrent.Executors} class.
                 * <b>This is strongly recommended in particular for common {@code @Bean} methods in
                 * configuration classes, where this {@code FactoryBean} variant would force you to
                 * return the {@code FactoryBean} type instead of the actual {@code Executor} type.</b>
                 * <p>If you need a timing-based {@link java.util.concurrent.ScheduledExecutorService}
                 * instead, consider {@link ScheduledExecutorFactoryBean}.
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see java.util.concurrent.ExecutorService
                 * @see java.util.concurrent.Executors
                 * @see java.util.concurrent.ThreadPoolExecutor
                 */
                // @ts-ignore
                class ThreadPoolExecutorFactoryBean extends org.springframework.scheduling.concurrent.ExecutorConfigurationSupport {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the ThreadPoolExecutor's core pool size.
                     * Default is 1.
                     */
                    // @ts-ignore
                    setCorePoolSize(corePoolSize: number /*int*/): void
                    /**
                     * Set the ThreadPoolExecutor's maximum pool size.
                     * Default is {@code Integer.MAX_VALUE}.
                     */
                    // @ts-ignore
                    setMaxPoolSize(maxPoolSize: number /*int*/): void
                    /**
                     * Set the ThreadPoolExecutor's keep-alive seconds.
                     * Default is 60.
                     */
                    // @ts-ignore
                    setKeepAliveSeconds(keepAliveSeconds: number /*int*/): void
                    /**
                     * Specify whether to allow core threads to time out. This enables dynamic
                     * growing and shrinking even in combination with a non-zero queue (since
                     * the max pool size will only grow once the queue is full).
                     * <p>Default is "false".
                     * @see java.util.concurrent.ThreadPoolExecutor#allowCoreThreadTimeOut(boolean)
                     */
                    // @ts-ignore
                    setAllowCoreThreadTimeOut(allowCoreThreadTimeOut: boolean): void
                    /**
                     * Set the capacity for the ThreadPoolExecutor's BlockingQueue.
                     * Default is {@code Integer.MAX_VALUE}.
                     * <p>Any positive value will lead to a LinkedBlockingQueue instance;
                     * any other value will lead to a SynchronousQueue instance.
                     * @see java.util.concurrent.LinkedBlockingQueue
                     * @see java.util.concurrent.SynchronousQueue
                     */
                    // @ts-ignore
                    setQueueCapacity(queueCapacity: number /*int*/): void
                    /**
                     * Specify whether this FactoryBean should expose an unconfigurable
                     * decorator for the created executor.
                     * <p>Default is "false", exposing the raw executor as bean reference.
                     * Switch this flag to "true" to strictly prevent clients from
                     * modifying the executor's configuration.
                     * @see java.util.concurrent.Executors#unconfigurableExecutorService
                     */
                    // @ts-ignore
                    setExposeUnconfigurableExecutor(exposeUnconfigurableExecutor: boolean): void
                    // @ts-ignore
                    initializeExecutor(threadFactory: java.util.concurrent.ThreadFactory, rejectedExecutionHandler: java.util.concurrent.RejectedExecutionHandler): java.util.concurrent.ExecutorService
                    /**
                     * Create a new instance of {@link ThreadPoolExecutor} or a subclass thereof.
                     * <p>The default implementation creates a standard {@link ThreadPoolExecutor}.
                     * Can be overridden to provide custom {@link ThreadPoolExecutor} subclasses.
                     * @param corePoolSize the specified core pool size
                     * @param maxPoolSize the specified maximum pool size
                     * @param keepAliveSeconds the specified keep-alive time in seconds
                     * @param queue the BlockingQueue to use
                     * @param threadFactory the ThreadFactory to use
                     * @param rejectedExecutionHandler the RejectedExecutionHandler to use
                     * @return a new ThreadPoolExecutor instance
                     * @see #afterPropertiesSet()
                     */
                    // @ts-ignore
                    createExecutor(corePoolSize: number /*int*/, maxPoolSize: number /*int*/, keepAliveSeconds: number /*int*/, queue: java.util.concurrent.BlockingQueue<java.lang.Runnable>, threadFactory: java.util.concurrent.ThreadFactory, rejectedExecutionHandler: java.util.concurrent.RejectedExecutionHandler): java.util.concurrent.ThreadPoolExecutor
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
                    // @ts-ignore
                    getObject(): java.util.concurrent.ExecutorService
                    // @ts-ignore
                    getObjectType(): java.lang.Class<? extends java.util.concurrent.ExecutorService>
                    // @ts-ignore
                    isSingleton(): boolean
                }
            }
        }
    }
}
