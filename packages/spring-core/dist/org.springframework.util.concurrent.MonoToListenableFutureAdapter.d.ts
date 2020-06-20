declare namespace org {
    namespace springframework {
        namespace util {
            namespace concurrent {
                /**
                 * Adapts a {@link Mono} into a {@link ListenableFuture}.
                 * @author Rossen Stoyanchev
                 * @author Stephane Maldini
                 * @since 5.1
                 * @param <T> the object type
                 */
                // @ts-ignore
                class MonoToListenableFutureAdapter<T> extends java.lang.Object implements org.springframework.util.concurrent.ListenableFuture<T> {
                    // @ts-ignore
                    constructor(mono: object)
                    // @ts-ignore
                    get(): T
                    // @ts-ignore
                    get(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): T
                    // @ts-ignore
                    cancel(mayInterruptIfRunning: boolean): boolean
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    isDone(): boolean
                    // @ts-ignore
                    addCallback(callback: org.springframework.util.concurrent.ListenableFutureCallback<any super T>): void
                    // @ts-ignore
                    addCallback(success: org.springframework.util.concurrent.SuccessCallback<any super T>, failure: org.springframework.util.concurrent.FailureCallback): void
                }
            }
        }
    }
}
