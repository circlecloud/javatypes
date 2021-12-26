declare namespace io {
    namespace lumine {
        namespace utils {
            namespace tasks {
                // @ts-ignore
                class LumineExecutors extends java.lang.Object {
                    // @ts-ignore
                    public static sync(): java.util.concurrent.Executor
                    // @ts-ignore
                    public static asyncLumine(): java.util.concurrent.ScheduledExecutorService
                    // @ts-ignore
                    public static asyncBukkit(): java.util.concurrent.Executor
                    // @ts-ignore
                    public static shutdown(): void
                    // @ts-ignore
                    public static wrapRunnable(runnable: java.lang.Runnable): java.lang.Runnable
                }
            }
        }
    }
}
