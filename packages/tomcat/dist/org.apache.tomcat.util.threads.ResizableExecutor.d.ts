declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace threads {
                    // @ts-ignore
                    interface ResizableExecutor extends java.util.concurrent.Executor {
                        /**
                         * Returns the current number of threads in the pool.
                         * @return the number of threads
                         */
                        // @ts-ignore
                        getPoolSize(): number /*int*/
                        // @ts-ignore
                        getMaxThreads(): number /*int*/
                        /**
                         * Returns the approximate number of threads that are actively executing
                         * tasks.
                         * @return the number of threads
                         */
                        // @ts-ignore
                        getActiveCount(): number /*int*/
                        // @ts-ignore
                        resizePool(corePoolSize: number /*int*/, maximumPoolSize: number /*int*/): boolean
                        // @ts-ignore
                        resizeQueue(capacity: number /*int*/): boolean
                    }
                }
            }
        }
    }
}
