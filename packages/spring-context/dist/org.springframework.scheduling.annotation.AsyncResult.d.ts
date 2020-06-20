declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace annotation {
                /**
                 * A pass-through {@code Future} handle that can be used for method signatures
                 * which are declared with a {@code Future} return type for asynchronous execution.
                 * <p>As of Spring 4.1, this class implements {@link ListenableFuture}, not just
                 * plain {@link java.util.concurrent.Future}, along with the corresponding support
                 * in {@code @Async} processing.
                 * <p>As of Spring 4.2, this class also supports passing execution exceptions back
                 * to the caller.
                 * @author Juergen Hoeller
                 * @author Rossen Stoyanchev
                 * @since 3.0
                 * @param <V> the value type
                 * @see Async
                 * @see #forValue(Object)
                 * @see #forExecutionException(Throwable)
                 */
                // @ts-ignore
                class AsyncResult<V> extends java.lang.Object {
                    /**
                     * Create a new AsyncResult holder.
                     * @param value the value to pass through
                     */
                    // @ts-ignore
                    constructor(value: V)
                    // @ts-ignore
                    cancel(mayInterruptIfRunning: boolean): boolean
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    isDone(): boolean
                    // @ts-ignore
                    get(): V
                    // @ts-ignore
                    get(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): V
                    // @ts-ignore
                    addCallback(callback: object): void
                    // @ts-ignore
                    addCallback(successCallback: object, failureCallback: FailureCallback): void
                    // @ts-ignore
                    completable(): java.util.concurrent.CompletableFuture<V>
                    /**
                     * Create a new async result which exposes the given value from {@link Future#get()}.
                     * @param value the value to expose
                     * @since 4.2
                     * @see Future#get()
                     */
                    // @ts-ignore
                    forValue<V>(value: V): <any>
                    /**
                     * Create a new async result which exposes the given exception as an
                     * {@link ExecutionException} from {@link Future#get()}.
                     * @param ex the exception to expose (either an pre-built {#link ExecutionException}
                     *  or a cause to be wrapped in an {@link ExecutionException})
                     * @since 4.2
                     * @see ExecutionException
                     */
                    // @ts-ignore
                    forExecutionException<V>(ex: Error): <any>
                }
            }
        }
    }
}
