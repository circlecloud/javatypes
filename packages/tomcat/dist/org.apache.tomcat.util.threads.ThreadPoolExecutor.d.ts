declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace threads {
                    /**
                     * Same as a java.util.concurrent.ThreadPoolExecutor but implements a much more efficient
                     * {@link #getSubmittedCount()} method, to be used to properly handle the work queue.
                     * If a RejectedExecutionHandler is not specified a default one will be configured
                     * and that one will always throw a RejectedExecutionException
                     */
                    // @ts-ignore
                    class ThreadPoolExecutor extends java.util.concurrent.ThreadPoolExecutor {
                        // @ts-ignore
                        constructor(corePoolSize: number /*int*/, maximumPoolSize: number /*int*/, keepAliveTime: number /*long*/, unit: java.util.concurrent.TimeUnit, workQueue: java.util.concurrent.BlockingQueue<java.lang.Runnable>, handler: java.util.concurrent.RejectedExecutionHandler)
                        // @ts-ignore
                        constructor(corePoolSize: number /*int*/, maximumPoolSize: number /*int*/, keepAliveTime: number /*long*/, unit: java.util.concurrent.TimeUnit, workQueue: java.util.concurrent.BlockingQueue<java.lang.Runnable>, threadFactory: java.util.concurrent.ThreadFactory, handler: java.util.concurrent.RejectedExecutionHandler)
                        // @ts-ignore
                        constructor(corePoolSize: number /*int*/, maximumPoolSize: number /*int*/, keepAliveTime: number /*long*/, unit: java.util.concurrent.TimeUnit, workQueue: java.util.concurrent.BlockingQueue<java.lang.Runnable>, threadFactory: java.util.concurrent.ThreadFactory)
                        // @ts-ignore
                        constructor(corePoolSize: number /*int*/, maximumPoolSize: number /*int*/, keepAliveTime: number /*long*/, unit: java.util.concurrent.TimeUnit, workQueue: java.util.concurrent.BlockingQueue<java.lang.Runnable>)
                        /**
                         * The string manager for this package.
                         */
                        // @ts-ignore
                        static readonly sm: org.apache.tomcat.util.res.StringManager
                        // @ts-ignore
                        public getThreadRenewalDelay(): number /*long*/
                        // @ts-ignore
                        public setThreadRenewalDelay(threadRenewalDelay: number /*long*/): void
                        // @ts-ignore
                        afterExecute(r: java.lang.Runnable, t: java.lang.Throwable | Error): void
                        /**
                         * If the current thread was started before the last time when a context was
                         * stopped, an exception is thrown so that the current thread is stopped.
                         */
                        // @ts-ignore
                        stopCurrentThreadIfNeeded(): void
                        // @ts-ignore
                        currentThreadShouldBeStopped(): boolean
                        // @ts-ignore
                        public getSubmittedCount(): number /*int*/
                        /**
                         * {@inheritDoc}
                         */
                        // @ts-ignore
                        public execute(command: java.lang.Runnable): void
                        /**
                         * Executes the given command at some time in the future.  The command
                         * may execute in a new thread, in a pooled thread, or in the calling
                         * thread, at the discretion of the <tt>Executor</tt> implementation.
                         * If no threads are available, it will be added to the work queue.
                         * If the work queue is full, the system will wait for the specified
                         * time and it throw a RejectedExecutionException if the queue is still
                         * full after that.
                         * @param command the runnable task
                         * @param timeout A timeout for the completion of the task
                         * @param unit The timeout time unit
                         * @throws RejectedExecutionException if this task cannot be
                         *  accepted for execution - the queue is full
                         * @throws NullPointerException if command or unit is null
                         */
                        // @ts-ignore
                        public execute(command: java.lang.Runnable, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): void
                        // @ts-ignore
                        public contextStopping(): void
                    }
                }
            }
        }
    }
}
