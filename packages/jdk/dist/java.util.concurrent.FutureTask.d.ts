declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * A cancellable asynchronous computation.  This class provides a base
             * implementation of {@link Future}, with methods to start and cancel
             * a computation, query to see if the computation is complete, and
             * retrieve the result of the computation.  The result can only be
             * retrieved when the computation has completed; the {@code get}
             * methods will block if the computation has not yet completed.  Once
             * the computation has completed, the computation cannot be restarted
             * or cancelled (unless the computation is invoked using
             * {@link #runAndReset}).
             * <p>A {@code FutureTask} can be used to wrap a {@link Callable} or
             * {@link Runnable} object.  Because {@code FutureTask} implements
             * {@code Runnable}, a {@code FutureTask} can be submitted to an
             * {@link Executor} for execution.
             * <p>In addition to serving as a standalone class, this class provides
             * {@code protected} functionality that may be useful when creating
             * customized task classes.
             * @since 1.5
             * @author Doug Lea
             * @param <V> The result type returned by this FutureTask's {#code get} methods
             */
            // @ts-ignore
            class FutureTask<V> extends java.lang.Object implements java.util.concurrent.RunnableFuture<V> {
                /**
                 * Creates a {@code FutureTask} that will, upon running, execute the
                 * given {@code Callable}.
                 * @param callable the callable task
                 * @throws NullPointerException if the callable is null
                 */
                // @ts-ignore
                constructor(callable: java.util.concurrent.Callable<V>)
                /**
                 * Creates a {@code FutureTask} that will, upon running, execute the
                 * given {@code Runnable}, and arrange that {@code get} will return the
                 * given result on successful completion.
                 * @param runnable the runnable task
                 * @param result the result to return on successful completion. If
                 *  you don't need a particular result, consider using
                 *  constructions of the form:
                 *  {#code Future<?> f = new FutureTask<Void>(runnable, null)}
                 * @throws NullPointerException if the runnable is null
                 */
                // @ts-ignore
                constructor(runnable: java.lang.Runnable, result: V)
                // @ts-ignore
                public isCancelled(): boolean
                // @ts-ignore
                public isDone(): boolean
                // @ts-ignore
                public cancel(mayInterruptIfRunning: boolean): boolean
                /**
                 * @throws CancellationException {#inheritDoc}
                 */
                // @ts-ignore
                public get(): V
                /**
                 * @throws CancellationException {#inheritDoc}
                 */
                // @ts-ignore
                public get(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): V
                /**
                 * Protected method invoked when this task transitions to state
                 * {@code isDone} (whether normally or via cancellation). The
                 * default implementation does nothing.  Subclasses may override
                 * this method to invoke completion callbacks or perform
                 * bookkeeping. Note that you can query status inside the
                 * implementation of this method to determine whether this task
                 * has been cancelled.
                 */
                // @ts-ignore
                done(): void
                /**
                 * Sets the result of this future to the given value unless
                 * this future has already been set or has been cancelled.
                 * <p>This method is invoked internally by the {@link #run} method
                 * upon successful completion of the computation.
                 * @param v the value
                 */
                // @ts-ignore
                set(v: V): void
                /**
                 * Causes this future to report an {@link ExecutionException}
                 * with the given throwable as its cause, unless this future has
                 * already been set or has been cancelled.
                 * <p>This method is invoked internally by the {@link #run} method
                 * upon failure of the computation.
                 * @param t the cause of failure
                 */
                // @ts-ignore
                setException(t: java.lang.Throwable | Error): void
                // @ts-ignore
                public run(): void
                /**
                 * Executes the computation without setting its result, and then
                 * resets this future to initial state, failing to do so if the
                 * computation encounters an exception or is cancelled.  This is
                 * designed for use with tasks that intrinsically execute more
                 * than once.
                 * @return {#code true} if successfully run and reset
                 */
                // @ts-ignore
                runAndReset(): boolean
            }
        }
    }
}
