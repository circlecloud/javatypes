declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace threads {
                    /**
                     * Class which wraps a ScheduledExecutorService, while preventing
                     * lifecycle and configuration operations.
                     */
                    // @ts-ignore
                    class ScheduledThreadPoolExecutor extends java.lang.Object implements java.util.concurrent.ScheduledExecutorService {
                        /**
                         * Builds a wrapper for the given executor.
                         * @param executor the wrapped executor
                         */
                        // @ts-ignore
                        constructor(executor: java.util.concurrent.ScheduledExecutorService)
                        // @ts-ignore
                        readonly executor: java.util.concurrent.ScheduledExecutorService
                        // @ts-ignore
                        public shutdown(): void
                        // @ts-ignore
                        public shutdownNow(): Array<java.lang.Runnable>
                        // @ts-ignore
                        public isShutdown(): boolean
                        // @ts-ignore
                        public isTerminated(): boolean
                        // @ts-ignore
                        public awaitTermination(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                        // @ts-ignore
                        public submit<T>(task: java.util.concurrent.Callable<T>): java.util.concurrent.Future<T>
                        // @ts-ignore
                        public submit<T>(task: java.lang.Runnable, result: T): java.util.concurrent.Future<T>
                        // @ts-ignore
                        public submit(task: java.lang.Runnable): java.util.concurrent.Future<any>
                        // @ts-ignore
                        public invokeAll<T>(tasks: java.util.Collection<any> | Array<any>): Array<java.util.concurrent.Future<T>>
                        // @ts-ignore
                        public invokeAll<T>(tasks: java.util.Collection<any> | Array<any>, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): Array<java.util.concurrent.Future<T>>
                        // @ts-ignore
                        public invokeAny<T>(tasks: java.util.Collection<any> | Array<any>): T
                        // @ts-ignore
                        public invokeAny<T>(tasks: java.util.Collection<any> | Array<any>, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): T
                        // @ts-ignore
                        public execute(command: java.lang.Runnable): void
                        // @ts-ignore
                        public schedule(command: java.lang.Runnable, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>
                        // @ts-ignore
                        public schedule<V>(callable: java.util.concurrent.Callable<V>, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<V>
                        // @ts-ignore
                        public scheduleAtFixedRate(command: java.lang.Runnable, initialDelay: number /*long*/, period: number /*long*/, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>
                        // @ts-ignore
                        public scheduleWithFixedDelay(command: java.lang.Runnable, initialDelay: number /*long*/, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>
                    }
                }
            }
        }
    }
}
