declare namespace org {
    namespace springframework {
        namespace util {
            namespace concurrent {
                /**
                 * Extension of {@link FutureTask} that implements {@link ListenableFuture}.
                 * @author Arjen Poutsma
                 * @since 4.0
                 * @param <T> the result type returned by this Future's {#code get} method
                 */
                // @ts-ignore
                class ListenableFutureTask<T> extends java.util.concurrent.FutureTask<T> implements org.springframework.util.concurrent.ListenableFuture<T> {
                    /**
                     * Create a new {@code ListenableFutureTask} that will, upon running,
                     * execute the given {@link Callable}.
                     * @param callable the callable task
                     */
                    // @ts-ignore
                    constructor(callable: java.util.concurrent.Callable<T>)
                    /**
                     * Create a {@code ListenableFutureTask} that will, upon running,
                     * execute the given {@link Runnable}, and arrange that {@link #get()}
                     * will return the given result on successful completion.
                     * @param runnable the runnable task
                     * @param result the result to return on successful completion
                     */
                    // @ts-ignore
                    constructor(runnable: java.lang.Runnable, result: T)
                    // @ts-ignore
                    public addCallback(callback: org.springframework.util.concurrent.ListenableFutureCallback<any>): void
                    // @ts-ignore
                    public addCallback(successCallback: org.springframework.util.concurrent.SuccessCallback<any>, failureCallback: org.springframework.util.concurrent.FailureCallback): void
                    // @ts-ignore
                    public completable(): java.util.concurrent.CompletableFuture<T>
                    // @ts-ignore
                    done(): void
                }
            }
        }
    }
}
