declare namespace io {
    namespace lumine {
        namespace utils {
            namespace tasks {
                // @ts-ignore
                interface TaskScheduler extends java.util.concurrent.Executor {
                    // @ts-ignore
                    getContext(): io.lumine.utils.promise.ThreadContext
                    // @ts-ignore
                    supply<T>(supplier: java.util.function$.Supplier<T>): io.lumine.utils.promise.Promise<T>
                    // @ts-ignore
                    call<T>(callable: java.util.concurrent.Callable<T>): io.lumine.utils.promise.Promise<T>
                    // @ts-ignore
                    run(runnable: java.lang.Runnable): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    supplyLater<T>(supplier: java.util.function$.Supplier<T>, delayTicks: number /*long*/): io.lumine.utils.promise.Promise<T>
                    // @ts-ignore
                    supplyLater<T>(supplier: java.util.function$.Supplier<T>, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<T>
                    // @ts-ignore
                    callLater<T>(callable: java.util.concurrent.Callable<T>, delayTicks: number /*long*/): io.lumine.utils.promise.Promise<T>
                    // @ts-ignore
                    callLater<T>(callable: java.util.concurrent.Callable<T>, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<T>
                    // @ts-ignore
                    runLater(runnable: java.lang.Runnable, delayTicks: number /*long*/): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    runLater(runnable: java.lang.Runnable, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    runRepeating(p0: java.util.function$.Consumer<io.lumine.utils.tasks.Task>, p1: number /*long*/, p2: number /*long*/): io.lumine.utils.tasks.Task
                    // @ts-ignore
                    runRepeating(p0: java.util.function$.Consumer<io.lumine.utils.tasks.Task>, p1: number /*long*/, p2: java.util.concurrent.TimeUnit, p3: number /*long*/, p4: java.util.concurrent.TimeUnit): io.lumine.utils.tasks.Task
                    // @ts-ignore
                    runRepeating(runnable: java.lang.Runnable, delayTicks: number /*long*/, intervalTicks: number /*long*/): io.lumine.utils.tasks.Task
                    // @ts-ignore
                    runRepeating(runnable: java.lang.Runnable, delay: number /*long*/, delayUnit: java.util.concurrent.TimeUnit, interval: number /*long*/, intervalUnit: java.util.concurrent.TimeUnit): io.lumine.utils.tasks.Task
                }
            }
        }
    }
}
