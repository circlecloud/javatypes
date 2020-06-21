declare namespace org {
    namespace springframework {
        namespace util {
            namespace concurrent {
                /**
                 * A {@link ListenableFuture} whose value can be set via {@link #set(Object)}
                 * or {@link #setException(Throwable)}. It may also get cancelled.
                 * <p>Inspired by {@code com.google.common.util.concurrent.SettableFuture}.
                 * @author Mattias Severson
                 * @author Rossen Stoyanchev
                 * @author Juergen Hoeller
                 * @since 4.1
                 * @param <T> the result type returned by this Future's {#code get} method
                 */
                // @ts-ignore
                class SettableListenableFuture<T> extends java.lang.Object implements org.springframework.util.concurrent.ListenableFuture<T> {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the value of this future. This method will return {@code true} if the
                     * value was set successfully, or {@code false} if the future has already been
                     * set or cancelled.
                     * @param value the value that will be set
                     * @return {#code true} if the value was successfully set, else {@code false}
                     */
                    // @ts-ignore
                    public set(value: T): boolean
                    /**
                     * Set the exception of this future. This method will return {@code true} if the
                     * exception was set successfully, or {@code false} if the future has already been
                     * set or cancelled.
                     * @param exception the value that will be set
                     * @return {#code true} if the exception was successfully set, else {@code false}
                     */
                    // @ts-ignore
                    public setException(exception: java.lang.Throwable | Error): boolean
                    // @ts-ignore
                    public addCallback(callback: org.springframework.util.concurrent.ListenableFutureCallback<any>): void
                    // @ts-ignore
                    public addCallback(successCallback: org.springframework.util.concurrent.SuccessCallback<any>, failureCallback: org.springframework.util.concurrent.FailureCallback): void
                    // @ts-ignore
                    public completable(): java.util.concurrent.CompletableFuture<T>
                    // @ts-ignore
                    public cancel(mayInterruptIfRunning: boolean): boolean
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public isDone(): boolean
                    /**
                     * Retrieve the value.
                     * <p>This method returns the value if it has been set via {@link #set(Object)},
                     * throws an {@link java.util.concurrent.ExecutionException} if an exception has
                     * been set via {@link #setException(Throwable)}, or throws a
                     * {@link java.util.concurrent.CancellationException} if the future has been cancelled.
                     * @return the value associated with this future
                     */
                    // @ts-ignore
                    public get(): T
                    /**
                     * Retrieve the value.
                     * <p>This method returns the value if it has been set via {@link #set(Object)},
                     * throws an {@link java.util.concurrent.ExecutionException} if an exception has
                     * been set via {@link #setException(Throwable)}, or throws a
                     * {@link java.util.concurrent.CancellationException} if the future has been cancelled.
                     * @param timeout the maximum time to wait
                     * @param unit the unit of the timeout argument
                     * @return the value associated with this future
                     */
                    // @ts-ignore
                    public get(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): T
                    /**
                     * Subclasses can override this method to implement interruption of the future's
                     * computation. The method is invoked automatically by a successful call to
                     * {@link #cancel(boolean) cancel(true)}.
                     * <p>The default implementation is empty.
                     */
                    // @ts-ignore
                    interruptTask(): void
                }
            }
        }
    }
}
