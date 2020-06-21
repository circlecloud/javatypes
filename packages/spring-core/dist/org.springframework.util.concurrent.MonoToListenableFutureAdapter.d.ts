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
                    public get(): T
                    // @ts-ignore
                    public get(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): T
                    // @ts-ignore
                    public cancel(mayInterruptIfRunning: boolean): boolean
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public isDone(): boolean
                    // @ts-ignore
                    public addCallback(callback: org.springframework.util.concurrent.ListenableFutureCallback<any>): void
                    // @ts-ignore
                    public addCallback(success: org.springframework.util.concurrent.SuccessCallback<any>, failure: org.springframework.util.concurrent.FailureCallback): void
                }
            }
        }
    }
}
