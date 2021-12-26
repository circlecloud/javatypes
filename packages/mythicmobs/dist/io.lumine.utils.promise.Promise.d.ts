declare namespace io {
    namespace lumine {
        namespace utils {
            namespace promise {
                // @ts-ignore
                interface Promise<V> extends java.util.concurrent.Future<V>, io.lumine.utils.terminable.Terminable {
                    // @ts-ignore
                    empty<U>(): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    start(): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    completed<U>(value: U): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    exceptionally<U>(exception: java.lang.Throwable | Error): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    wrapFuture<U>(future: java.util.concurrent.Future<U>): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    supplying<U>(context: io.lumine.utils.promise.ThreadContext, supplier: java.util.function$.Supplier<U>): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    supplyingSync<U>(supplier: java.util.function$.Supplier<U>): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    supplyingAsync<U>(supplier: java.util.function$.Supplier<U>): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    supplyingDelayed<U>(context: io.lumine.utils.promise.ThreadContext, supplier: java.util.function$.Supplier<U>, delayTicks: number /*long*/): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    supplyingDelayed<U>(context: io.lumine.utils.promise.ThreadContext, supplier: java.util.function$.Supplier<U>, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    supplyingDelayedSync<U>(supplier: java.util.function$.Supplier<U>, delayTicks: number /*long*/): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    supplyingDelayedSync<U>(supplier: java.util.function$.Supplier<U>, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    supplyingDelayedAsync<U>(supplier: java.util.function$.Supplier<U>, delayTicks: number /*long*/): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    supplyingDelayedAsync<U>(supplier: java.util.function$.Supplier<U>, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    supplyingExceptionally<U>(context: io.lumine.utils.promise.ThreadContext, callable: java.util.concurrent.Callable<U>): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    supplyingExceptionallySync<U>(callable: java.util.concurrent.Callable<U>): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    supplyingExceptionallyAsync<U>(callable: java.util.concurrent.Callable<U>): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    supplyingExceptionallyDelayed<U>(context: io.lumine.utils.promise.ThreadContext, callable: java.util.concurrent.Callable<U>, delayTicks: number /*long*/): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    supplyingExceptionallyDelayed<U>(context: io.lumine.utils.promise.ThreadContext, callable: java.util.concurrent.Callable<U>, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    supplyingExceptionallyDelayedSync<U>(callable: java.util.concurrent.Callable<U>, delayTicks: number /*long*/): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    supplyingExceptionallyDelayedSync<U>(callable: java.util.concurrent.Callable<U>, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    supplyingExceptionallyDelayedAsync<U>(callable: java.util.concurrent.Callable<U>, delayTicks: number /*long*/): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    supplyingExceptionallyDelayedAsync<U>(callable: java.util.concurrent.Callable<U>, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    cancel(): boolean
                    // @ts-ignore
                    join(): V
                    // @ts-ignore
                    getNow(p0: V): V
                    // @ts-ignore
                    supply(p0: V): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    supplyException(p0: java.lang.Throwable | Error): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    supply(context: io.lumine.utils.promise.ThreadContext, supplier: java.util.function$.Supplier<V>): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    supplySync(p0: java.util.function$.Supplier<V>): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    supplyAsync(p0: java.util.function$.Supplier<V>): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    supplyDelayed(context: io.lumine.utils.promise.ThreadContext, supplier: java.util.function$.Supplier<V>, delayTicks: number /*long*/): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    supplyDelayed(context: io.lumine.utils.promise.ThreadContext, supplier: java.util.function$.Supplier<V>, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    supplyDelayedSync(p0: java.util.function$.Supplier<V>, p1: number /*long*/): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    supplyDelayedSync(p0: java.util.function$.Supplier<V>, p1: number /*long*/, p2: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    supplyDelayedAsync(p0: java.util.function$.Supplier<V>, p1: number /*long*/): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    supplyDelayedAsync(p0: java.util.function$.Supplier<V>, p1: number /*long*/, p2: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    supplyExceptionally(context: io.lumine.utils.promise.ThreadContext, callable: java.util.concurrent.Callable<V>): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    supplyExceptionallySync(p0: java.util.concurrent.Callable<V>): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    supplyExceptionallyAsync(p0: java.util.concurrent.Callable<V>): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    supplyExceptionallyDelayed(context: io.lumine.utils.promise.ThreadContext, callable: java.util.concurrent.Callable<V>, delayTicks: number /*long*/): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    supplyExceptionallyDelayed(context: io.lumine.utils.promise.ThreadContext, callable: java.util.concurrent.Callable<V>, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    supplyExceptionallyDelayedSync(p0: java.util.concurrent.Callable<V>, p1: number /*long*/): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    supplyExceptionallyDelayedSync(p0: java.util.concurrent.Callable<V>, p1: number /*long*/, p2: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    supplyExceptionallyDelayedAsync(p0: java.util.concurrent.Callable<V>, p1: number /*long*/): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    supplyExceptionallyDelayedAsync(p0: java.util.concurrent.Callable<V>, p1: number /*long*/, p2: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    thenApply<U>(context: io.lumine.utils.promise.ThreadContext, fn: java.util.function$.Function<any, any>): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    thenApplySync<U>(p0: java.util.function$.Function<any, any>): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    thenApplyAsync<U>(p0: java.util.function$.Function<any, any>): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    thenApplyDelayed<U>(context: io.lumine.utils.promise.ThreadContext, fn: java.util.function$.Function<any, any>, delayTicks: number /*long*/): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    thenApplyDelayed<U>(context: io.lumine.utils.promise.ThreadContext, fn: java.util.function$.Function<any, any>, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    thenApplyDelayedSync<U>(p0: java.util.function$.Function<any, any>, p1: number /*long*/): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    thenApplyDelayedSync<U>(p0: java.util.function$.Function<any, any>, p1: number /*long*/, p2: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    thenApplyDelayedAsync<U>(p0: java.util.function$.Function<any, any>, p1: number /*long*/): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    thenApplyDelayedAsync<U>(p0: java.util.function$.Function<any, any>, p1: number /*long*/, p2: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    thenAccept(context: io.lumine.utils.promise.ThreadContext, action: java.util.function$.Consumer<any>): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    thenAcceptSync(action: java.util.function$.Consumer<any>): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    thenAcceptAsync(action: java.util.function$.Consumer<any>): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    thenAcceptDelayed(context: io.lumine.utils.promise.ThreadContext, action: java.util.function$.Consumer<any>, delayTicks: number /*long*/): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    thenAcceptDelayed(context: io.lumine.utils.promise.ThreadContext, action: java.util.function$.Consumer<any>, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    thenAcceptDelayedSync(action: java.util.function$.Consumer<any>, delayTicks: number /*long*/): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    thenAcceptDelayedSync(action: java.util.function$.Consumer<any>, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    thenAcceptDelayedAsync(action: java.util.function$.Consumer<any>, delayTicks: number /*long*/): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    thenAcceptDelayedAsync(action: java.util.function$.Consumer<any>, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    thenRun(context: io.lumine.utils.promise.ThreadContext, action: java.lang.Runnable): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    thenRunSync(action: java.lang.Runnable): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    thenRunAsync(action: java.lang.Runnable): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    thenRunDelayed(context: io.lumine.utils.promise.ThreadContext, action: java.lang.Runnable, delayTicks: number /*long*/): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    thenRunDelayed(context: io.lumine.utils.promise.ThreadContext, action: java.lang.Runnable, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    thenRunDelayedSync(action: java.lang.Runnable, delayTicks: number /*long*/): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    thenRunDelayedSync(action: java.lang.Runnable, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    thenRunDelayedAsync(action: java.lang.Runnable, delayTicks: number /*long*/): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    thenRunDelayedAsync(action: java.lang.Runnable, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<java.lang.Void>
                    // @ts-ignore
                    thenCompose<U>(context: io.lumine.utils.promise.ThreadContext, fn: java.util.function$.Function<any, any>): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    thenComposeSync<U>(p0: java.util.function$.Function<any, any>): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    thenComposeAsync<U>(p0: java.util.function$.Function<any, any>): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    thenComposeDelayedSync<U>(context: io.lumine.utils.promise.ThreadContext, fn: java.util.function$.Function<any, any>, delayTicks: number /*long*/): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    thenComposeDelayedSync<U>(context: io.lumine.utils.promise.ThreadContext, fn: java.util.function$.Function<any, any>, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    thenComposeDelayedSync<U>(p0: java.util.function$.Function<any, any>, p1: number /*long*/): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    thenComposeDelayedSync<U>(p0: java.util.function$.Function<any, any>, p1: number /*long*/, p2: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    thenComposeDelayedAsync<U>(p0: java.util.function$.Function<any, any>, p1: number /*long*/): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    thenComposeDelayedAsync<U>(p0: java.util.function$.Function<any, any>, p1: number /*long*/, p2: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<U>
                    // @ts-ignore
                    exceptionally(context: io.lumine.utils.promise.ThreadContext, fn: java.util.function$.Function<java.lang.Throwable | Error, any>): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    exceptionallySync(p0: java.util.function$.Function<java.lang.Throwable | Error, any>): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    exceptionallyAsync(p0: java.util.function$.Function<java.lang.Throwable | Error, any>): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    exceptionallyDelayed(context: io.lumine.utils.promise.ThreadContext, fn: java.util.function$.Function<java.lang.Throwable | Error, any>, delayTicks: number /*long*/): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    exceptionallyDelayed(context: io.lumine.utils.promise.ThreadContext, fn: java.util.function$.Function<java.lang.Throwable | Error, any>, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    exceptionallyDelayedSync(p0: java.util.function$.Function<java.lang.Throwable | Error, any>, p1: number /*long*/): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    exceptionallyDelayedSync(p0: java.util.function$.Function<java.lang.Throwable | Error, any>, p1: number /*long*/, p2: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    exceptionallyDelayedAsync(p0: java.util.function$.Function<java.lang.Throwable | Error, any>, p1: number /*long*/): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    exceptionallyDelayedAsync(p0: java.util.function$.Function<java.lang.Throwable | Error, any>, p1: number /*long*/, p2: java.util.concurrent.TimeUnit): io.lumine.utils.promise.Promise<V>
                    // @ts-ignore
                    toCompletableFuture(): java.util.concurrent.CompletableFuture<V>
                }
            }
        }
    }
}
