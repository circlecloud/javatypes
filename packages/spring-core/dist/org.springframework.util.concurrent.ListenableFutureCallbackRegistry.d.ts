declare namespace org {
    namespace springframework {
        namespace util {
            namespace concurrent {
                /**
                 * Helper class for {@link ListenableFuture} implementations that maintains a
                 * of success and failure callbacks and helps to notify them.
                 * <p>Inspired by {@code com.google.common.util.concurrent.ExecutionList}.
                 * @author Arjen Poutsma
                 * @author Sebastien Deleuze
                 * @author Rossen Stoyanchev
                 * @since 4.0
                 * @param <T> the callback result type
                 */
                // @ts-ignore
                class ListenableFutureCallbackRegistry<T> extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Add the given callback to this registry.
                     * @param callback the callback to add
                     */
                    // @ts-ignore
                    public addCallback(callback: org.springframework.util.concurrent.ListenableFutureCallback<any>): void
                    /**
                     * Add the given success callback to this registry.
                     * @param callback the success callback to add
                     * @since 4.1
                     */
                    // @ts-ignore
                    public addSuccessCallback(callback: org.springframework.util.concurrent.SuccessCallback<any>): void
                    /**
                     * Add the given failure callback to this registry.
                     * @param callback the failure callback to add
                     * @since 4.1
                     */
                    // @ts-ignore
                    public addFailureCallback(callback: org.springframework.util.concurrent.FailureCallback): void
                    /**
                     * Trigger a {@link ListenableFutureCallback#onSuccess(Object)} call on all
                     * added callbacks with the given result.
                     * @param result the result to trigger the callbacks with
                     */
                    // @ts-ignore
                    public success(result: T): void
                    /**
                     * Trigger a {@link ListenableFutureCallback#onFailure(Throwable)} call on all
                     * added callbacks with the given {@code Throwable}.
                     * @param ex the exception to trigger the callbacks with
                     */
                    // @ts-ignore
                    public failure(ex: java.lang.Throwable | Error): void
                }
            }
        }
    }
}
