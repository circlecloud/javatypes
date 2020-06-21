declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace threads {
                    // @ts-ignore
                    class InlineExecutorService extends java.util.concurrent.AbstractExecutorService {
                        // @ts-ignore
                        constructor()
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
                        public execute(command: java.lang.Runnable): void
                    }
                }
            }
        }
    }
}
