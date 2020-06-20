declare namespace org {
    namespace springframework {
        namespace util {
            namespace concurrent {
                /**
                 * Extend {@link Future} with the capability to accept completion callbacks.
                 * If the future has completed when the callback is added, the callback is
                 * triggered immediately.
                 * <p>Inspired by {@code com.google.common.util.concurrent.ListenableFuture}.
                 * @author Arjen Poutsma
                 * @author Sebastien Deleuze
                 * @author Juergen Hoeller
                 * @since 4.0
                 * @param <T> the result type returned by this Future's {#code get} method
                 */
                // @ts-ignore
                interface ListenableFuture<T> extends java.util.concurrent.Future<T> {
                    /**
                     * Register the given {@code ListenableFutureCallback}.
                     * @param callback the callback to register
                     */
                    // @ts-ignore
                    addCallback(callback: org.springframework.util.concurrent.ListenableFutureCallback<any super T>): void
                    /**
                     * Java 8 lambda-friendly alternative with success and failure callbacks.
                     * @param successCallback the success callback
                     * @param failureCallback the failure callback
                     * @since 4.1
                     */
                    // @ts-ignore
                    addCallback(successCallback: org.springframework.util.concurrent.SuccessCallback<any super T>, failureCallback: org.springframework.util.concurrent.FailureCallback): void
                    /**
                     * Expose this {@link ListenableFuture} as a JDK {@link CompletableFuture}.
                     * @since 5.0
                     */
                    // @ts-ignore
                    completable(): java.util.concurrent.CompletableFuture<T>
                }
            }
        }
    }
}
