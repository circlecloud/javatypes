declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace threads {
                    /**
                     * As task queue specifically designed to run with a thread pool executor. The
                     * task queue is optimised to properly utilize threads within a thread pool
                     * executor. If you use a normal queue, the executor will spawn threads when
                     * there are idle threads and you wont be able to force items onto the queue
                     * itself.
                     */
                    // @ts-ignore
                    class TaskQueue extends java.util.concurrent.LinkedBlockingQueue<java.lang.Runnable> {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(capacity: number /*int*/)
                        // @ts-ignore
                        constructor(c: java.util.Collection<any> | Array<any>)
                        // @ts-ignore
                        static readonly sm: org.apache.tomcat.util.res.StringManager
                        // @ts-ignore
                        public setParent(tp: org.apache.tomcat.util.threads.ThreadPoolExecutor): void
                        // @ts-ignore
                        public force(o: java.lang.Runnable): boolean
                        // @ts-ignore
                        public force(o: java.lang.Runnable, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): boolean
                        // @ts-ignore
                        public offer(o: java.lang.Runnable): boolean
                        // @ts-ignore
                        public poll(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): java.lang.Runnable
                        // @ts-ignore
                        public take(): java.lang.Runnable
                        // @ts-ignore
                        public remainingCapacity(): number /*int*/
                        // @ts-ignore
                        public setForcedRemainingCapacity(forcedRemainingCapacity: java.lang.Integer | number): void
                    }
                }
            }
        }
    }
}
