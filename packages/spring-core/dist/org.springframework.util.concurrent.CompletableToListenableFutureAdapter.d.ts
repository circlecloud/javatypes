declare namespace org {
    namespace springframework {
        namespace util {
            namespace concurrent {
                /**
                 * Adapts a {@link CompletableFuture} or {@link CompletionStage} into a
                 * Spring {@link ListenableFuture}.
                 * @author Sebastien Deleuze
                 * @author Juergen Hoeller
                 * @since 4.2
                 * @param <T> the result type returned by this Future's {#code get} method
                 */
                // @ts-ignore
                class CompletableToListenableFutureAdapter<T> extends java.lang.Object implements org.springframework.util.concurrent.ListenableFuture<T> {
                    /**
                     * Create a new adapter for the given {@link CompletionStage}.
                     * @since 4.3.7
                     */
                    // @ts-ignore
                    constructor(completionStage: java.util.concurrent.CompletionStage<T>)
                    /**
                     * Create a new adapter for the given {@link CompletableFuture}.
                     */
                    // @ts-ignore
                    constructor(completableFuture: java.util.concurrent.CompletableFuture<T>)
                    // @ts-ignore
                    addCallback(callback: org.springframework.util.concurrent.ListenableFutureCallback<any super T>): void
                    // @ts-ignore
                    addCallback(successCallback: org.springframework.util.concurrent.SuccessCallback<any super T>, failureCallback: org.springframework.util.concurrent.FailureCallback): void
                    // @ts-ignore
                    completable(): java.util.concurrent.CompletableFuture<T>
                    // @ts-ignore
                    cancel(mayInterruptIfRunning: boolean): boolean
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    isDone(): boolean
                    // @ts-ignore
                    get(): T
                    // @ts-ignore
                    get(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): T
                }
            }
        }
    }
}
