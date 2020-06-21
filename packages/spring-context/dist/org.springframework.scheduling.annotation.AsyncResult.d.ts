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
                    public cancel(mayInterruptIfRunning: boolean): boolean
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public isDone(): boolean
                    // @ts-ignore
                    public get(): V
                    // @ts-ignore
                    public get(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): V
                    // @ts-ignore
                    public addCallback(callback: object): void
                    // @ts-ignore
                    public addCallback(successCallback: object, failureCallback: FailureCallback): void
                    // @ts-ignore
                    public completable(): java.util.concurrent.CompletableFuture<V>
                    /**
                     * Create a new async result which exposes the given value from {@link Future#get()}.
                     * @param value the value to expose
                     * @since 4.2
                     * @see Future#get()
                     */
                    // @ts-ignore
                    public static forValue<V>(value: V): object
                    /**
                     * Create a new async result which exposes the given exception as an
                     * {@link ExecutionException} from {@link Future#get()}.
                     * @param ex the exception to expose (either an pre-built {#link ExecutionException}
                     *  or a cause to be wrapped in an {@link ExecutionException})
                     * @since 4.2
                     * @see ExecutionException
                     */
                    // @ts-ignore
                    public static forExecutionException<V>(ex: java.lang.Throwable | Error): object
                }
            }
        }
    }
}
