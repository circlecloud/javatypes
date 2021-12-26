declare namespace io {
    namespace lumine {
        namespace utils {
            namespace tasks {
                // @ts-ignore
                class Scheduler extends java.lang.Object {
                    // @ts-ignore
                    public static sync(): java.util.concurrent.Executor
                    // @ts-ignore
                    public static bukkitAsync(): java.util.concurrent.Executor
                    // @ts-ignore
                    public static internalAsync(): java.util.concurrent.ExecutorService
                    // @ts-ignore
                    public static async(): java.util.concurrent.Executor
                    // @ts-ignore
                    public static bukkit(): BukkitScheduler
                    // @ts-ignore
                    public static supplySync<T>(supplier: java.util.function$.Supplier<T>): java.util.concurrent.CompletableFuture<T>
                    // @ts-ignore
                    public static supplyAsync<T>(supplier: java.util.function$.Supplier<T>): java.util.concurrent.CompletableFuture<T>
                    // @ts-ignore
                    public static callSync<T>(callable: java.util.concurrent.Callable<T>): java.util.concurrent.CompletableFuture<T>
                    // @ts-ignore
                    public static callAsync<T>(callable: java.util.concurrent.Callable<T>): java.util.concurrent.CompletableFuture<T>
                    // @ts-ignore
                    public static runSync(runnable: java.lang.Runnable): java.util.concurrent.CompletableFuture<java.lang.Void>
                    // @ts-ignore
                    public static runAsync(runnable: java.lang.Runnable): java.util.concurrent.CompletableFuture<java.lang.Void>
                    // @ts-ignore
                    public static supplyLaterSync<T>(supplier: java.util.function$.Supplier<T>, delay: number /*long*/): java.util.concurrent.CompletableFuture<T>
                    // @ts-ignore
                    public static supplyLaterAsync<T>(supplier: java.util.function$.Supplier<T>, delay: number /*long*/): java.util.concurrent.CompletableFuture<T>
                    // @ts-ignore
                    public static callLaterSync<T>(callable: java.util.concurrent.Callable<T>, delay: number /*long*/): java.util.concurrent.CompletableFuture<T>
                    // @ts-ignore
                    public static callLaterAsync<T>(callable: java.util.concurrent.Callable<T>, delay: number /*long*/): java.util.concurrent.CompletableFuture<T>
                    // @ts-ignore
                    public static runLaterSync(runnable: java.lang.Runnable, delay: number /*long*/): java.util.concurrent.CompletableFuture<java.lang.Void>
                    // @ts-ignore
                    public static runLaterAsync(runnable: java.lang.Runnable, delay: number /*long*/): java.util.concurrent.CompletableFuture<java.lang.Void>
                    // @ts-ignore
                    public static runTaskRepeatingSync(consumer: java.util.function$.Consumer<io.lumine.utils.tasks.Scheduler.Task>, delay: number /*long*/, interval: number /*long*/): io.lumine.utils.tasks.Scheduler.Task
                    // @ts-ignore
                    public static runTaskRepeatingAsync(consumer: java.util.function$.Consumer<io.lumine.utils.tasks.Scheduler.Task>, delay: number /*long*/, interval: number /*long*/): io.lumine.utils.tasks.Scheduler.Task
                    // @ts-ignore
                    public static runTaskRepeatingSync(runnable: java.lang.Runnable, delay: number /*long*/, interval: number /*long*/): io.lumine.utils.tasks.Scheduler.Task
                    // @ts-ignore
                    public static runTaskRepeatingAsync(runnable: java.lang.Runnable, delay: number /*long*/, interval: number /*long*/): io.lumine.utils.tasks.Scheduler.Task
                }
            }
        }
    }
}
