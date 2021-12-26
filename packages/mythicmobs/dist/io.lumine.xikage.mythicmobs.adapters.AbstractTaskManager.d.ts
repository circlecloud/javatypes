declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace adapters {
                    // @ts-ignore
                    interface AbstractTaskManager {
                        // @ts-ignore
                        scheduleAsyncTask(p0: java.lang.Runnable, p1: number /*int*/, p2: number /*int*/): number /*int*/
                        // @ts-ignore
                        scheduleTask(p0: java.lang.Runnable, p1: number /*int*/, p2: number /*int*/): number /*int*/
                        // @ts-ignore
                        cancelTask(p0: number /*int*/): void
                        // @ts-ignore
                        runAsync(p0: java.lang.Runnable): void
                        // @ts-ignore
                        runLater(p0: java.lang.Runnable, p1: number /*int*/): void
                        // @ts-ignore
                        runAsyncLater(p0: java.lang.Runnable, p1: number /*int*/): void
                        // @ts-ignore
                        run(p0: java.lang.Runnable): void
                    }
                }
            }
        }
    }
}
