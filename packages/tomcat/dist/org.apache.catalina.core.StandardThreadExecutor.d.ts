declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                // @ts-ignore
                class StandardThreadExecutor extends org.apache.catalina.util.LifecycleMBeanBase implements org.apache.catalina.Executor, org.apache.tomcat.util.threads.ResizableExecutor {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * Default thread priority
                     */
                    // @ts-ignore
                    threadPriority: number /*int*/
                    /**
                     * Run threads in daemon or non-daemon state
                     */
                    // @ts-ignore
                    daemon: boolean
                    /**
                     * Default name prefix for the thread name
                     */
                    // @ts-ignore
                    namePrefix: java.lang.String | string
                    /**
                     * max number of threads
                     */
                    // @ts-ignore
                    maxThreads: number /*int*/
                    /**
                     * min number of threads
                     */
                    // @ts-ignore
                    minSpareThreads: number /*int*/
                    /**
                     * idle time in milliseconds
                     */
                    // @ts-ignore
                    maxIdleTime: number /*int*/
                    /**
                     * The executor we use for this component
                     */
                    // @ts-ignore
                    executor: org.apache.tomcat.util.threads.ThreadPoolExecutor
                    /**
                     * the name of this thread pool
                     */
                    // @ts-ignore
                    name: java.lang.String | string
                    /**
                     * prestart threads?
                     */
                    // @ts-ignore
                    prestartminSpareThreads: boolean
                    /**
                     * The maximum number of elements that can queue up before we reject them
                     */
                    // @ts-ignore
                    maxQueueSize: number /*int*/
                    /**
                     * After a context is stopped, threads in the pool are renewed. To avoid
                     * renewing all threads at the same time, this delay is observed between 2
                     * threads being renewed.
                     */
                    // @ts-ignore
                    threadRenewalDelay: number /*long*/
                    // @ts-ignore
                    initInternal(): void
                    /**
                     * Start the component and implement the requirements
                     * of {@link org.apache.catalina.util.LifecycleBase#startInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    startInternal(): void
                    /**
                     * Stop the component and implement the requirements
                     * of {@link org.apache.catalina.util.LifecycleBase#stopInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that needs to be reported
                     */
                    // @ts-ignore
                    stopInternal(): void
                    // @ts-ignore
                    destroyInternal(): void
                    // @ts-ignore
                    public execute(command: java.lang.Runnable, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): void
                    // @ts-ignore
                    public execute(command: java.lang.Runnable): void
                    // @ts-ignore
                    public contextStopping(): void
                    // @ts-ignore
                    public getThreadPriority(): number /*int*/
                    // @ts-ignore
                    public isDaemon(): boolean
                    // @ts-ignore
                    public getNamePrefix(): string
                    // @ts-ignore
                    public getMaxIdleTime(): number /*int*/
                    // @ts-ignore
                    public getMaxThreads(): number /*int*/
                    // @ts-ignore
                    public getMinSpareThreads(): number /*int*/
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public isPrestartminSpareThreads(): boolean
                    // @ts-ignore
                    public setThreadPriority(threadPriority: number /*int*/): void
                    // @ts-ignore
                    public setDaemon(daemon: boolean): void
                    // @ts-ignore
                    public setNamePrefix(namePrefix: java.lang.String | string): void
                    // @ts-ignore
                    public setMaxIdleTime(maxIdleTime: number /*int*/): void
                    // @ts-ignore
                    public setMaxThreads(maxThreads: number /*int*/): void
                    // @ts-ignore
                    public setMinSpareThreads(minSpareThreads: number /*int*/): void
                    // @ts-ignore
                    public setPrestartminSpareThreads(prestartminSpareThreads: boolean): void
                    // @ts-ignore
                    public setName(name: java.lang.String | string): void
                    // @ts-ignore
                    public setMaxQueueSize(size: number /*int*/): void
                    // @ts-ignore
                    public getMaxQueueSize(): number /*int*/
                    // @ts-ignore
                    public getThreadRenewalDelay(): number /*long*/
                    // @ts-ignore
                    public setThreadRenewalDelay(threadRenewalDelay: number /*long*/): void
                    // @ts-ignore
                    public getActiveCount(): number /*int*/
                    // @ts-ignore
                    public getCompletedTaskCount(): number /*long*/
                    // @ts-ignore
                    public getCorePoolSize(): number /*int*/
                    // @ts-ignore
                    public getLargestPoolSize(): number /*int*/
                    // @ts-ignore
                    public getPoolSize(): number /*int*/
                    // @ts-ignore
                    public getQueueSize(): number /*int*/
                    // @ts-ignore
                    public resizePool(corePoolSize: number /*int*/, maximumPoolSize: number /*int*/): boolean
                    // @ts-ignore
                    public resizeQueue(capacity: number /*int*/): boolean
                    // @ts-ignore
                    getDomainInternal(): string
                    // @ts-ignore
                    getObjectNameKeyProperties(): string
                }
            }
        }
    }
}
