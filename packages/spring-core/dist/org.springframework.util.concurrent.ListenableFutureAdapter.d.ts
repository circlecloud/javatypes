declare namespace org {
    namespace springframework {
        namespace util {
            namespace concurrent {
                /**
                 * Abstract class that adapts a {@link ListenableFuture} parameterized over S into a
                 * {@code ListenableFuture} parameterized over T. All methods are delegated to the
                 * adaptee, where {@link #get()}, {@link #get(long, java.util.concurrent.TimeUnit)},
                 * and {@link ListenableFutureCallback#onSuccess(Object)} call {@link #adapt(Object)}
                 * on the adaptee's result.
                 * @author Arjen Poutsma
                 * @since 4.0
                 * @param <T> the type of this {#code Future}
                 * @param <S> the type of the adaptee's {#code Future}
                 */
                // @ts-ignore
                class ListenableFutureAdapter<T, S> extends org.springframework.util.concurrent.FutureAdapter<T, S> implements org.springframework.util.concurrent.ListenableFuture<T> {
                    /**
                     * Construct a new {@code ListenableFutureAdapter} with the given adaptee.
                     * @param adaptee the future to adapt to
                     */
                    // @ts-ignore
                    constructor(adaptee: org.springframework.util.concurrent.ListenableFuture<S>)
                    // @ts-ignore
                    addCallback(callback: org.springframework.util.concurrent.ListenableFutureCallback<any super T>): void
                    // @ts-ignore
                    addCallback(successCallback: org.springframework.util.concurrent.SuccessCallback<any super T>, failureCallback: org.springframework.util.concurrent.FailureCallback): void
                }
            }
        }
    }
}
