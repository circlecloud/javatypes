declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * A {@link Future} that may be explicitly completed (setting its
             * value and status), and may be used as a {@link CompletionStage},
             * supporting dependent functions and actions that trigger upon its
             * completion.
             * <p>When two or more threads attempt to
             * {@link #complete complete},
             * {@link #completeExceptionally completeExceptionally}, or
             * {@link #cancel cancel}
             * a CompletableFuture, only one of them succeeds.
             * <p>In addition to these and related methods for directly
             * manipulating status and results, CompletableFuture implements
             * interface {@link CompletionStage} with the following policies: <ul>
             * <li>Actions supplied for dependent completions of
             * <em>non-async</em> methods may be performed by the thread that
             * completes the current CompletableFuture, or by any other caller of
             * a completion method.</li>
             * <li>All <em>async</em> methods without an explicit Executor
             * argument are performed using the {@link ForkJoinPool#commonPool()}
             * (unless it does not support a parallelism level of at least two, in
             * which case, a new Thread is created to run each task).  To simplify
             * monitoring, debugging, and tracking, all generated asynchronous
             * tasks are instances of the marker interface {@link
             * AsynchronousCompletionTask}. </li>
             * <li>All CompletionStage methods are implemented independently of
             * other public methods, so the behavior of one method is not impacted
             * by overrides of others in subclasses.  </li> </ul>
             * <p>CompletableFuture also implements {@link Future} with the following
             * policies: <ul>
             * <li>Since (unlike {@link FutureTask}) this class has no direct
             * control over the computation that causes it to be completed,
             * cancellation is treated as just another form of exceptional
             * completion.  Method {@link #cancel cancel} has the same effect as
             * {@code completeExceptionally(new CancellationException())}. Method
             * {@link #isCompletedExceptionally} can be used to determine if a
             * CompletableFuture completed in any exceptional fashion.</li>
             * <li>In case of exceptional completion with a CompletionException,
             * methods {@link #get()} and {@link #get(long, TimeUnit)} throw an
             * {@link ExecutionException} with the same cause as held in the
             * corresponding CompletionException.  To simplify usage in most
             * contexts, this class also defines methods {@link #join()} and
             * {@link #getNow} that instead throw the CompletionException directly
             * in these cases.</li> </ul>
             * @author Doug Lea
             * @since 1.8
             */
            // @ts-ignore
            class CompletableFuture<T> extends java.lang.Object implements java.util.concurrent.Future<T>, java.util.concurrent.CompletionStage<T> {
                /**
                 * Creates a new incomplete CompletableFuture.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns a new CompletableFuture that is asynchronously completed
                 * by a task running in the {@link ForkJoinPool#commonPool()} with
                 * the value obtained by calling the given Supplier.
                 * @param supplier a function returning the value to be used
                 *  to complete the returned CompletableFuture
                 * @param <U> the function's return type
                 * @return the new CompletableFuture
                 */
                // @ts-ignore
                supplyAsync<U>(supplier: java.util.function.Supplier<U> | java.util.function$.Supplier<U>): java.util.concurrent.CompletableFuture<U>
                /**
                 * Returns a new CompletableFuture that is asynchronously completed
                 * by a task running in the given executor with the value obtained
                 * by calling the given Supplier.
                 * @param supplier a function returning the value to be used
                 *  to complete the returned CompletableFuture
                 * @param executor the executor to use for asynchronous execution
                 * @param <U> the function's return type
                 * @return the new CompletableFuture
                 */
                // @ts-ignore
                supplyAsync<U>(supplier: java.util.function.Supplier<U> | java.util.function$.Supplier<U>, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<U>
                /**
                 * Returns a new CompletableFuture that is asynchronously completed
                 * by a task running in the {@link ForkJoinPool#commonPool()} after
                 * it runs the given action.
                 * @param runnable the action to run before completing the
                 *  returned CompletableFuture
                 * @return the new CompletableFuture
                 */
                // @ts-ignore
                runAsync(runnable: java.lang.Runnable): java.util.concurrent.CompletableFuture<java.lang.Void>
                /**
                 * Returns a new CompletableFuture that is asynchronously completed
                 * by a task running in the given executor after it runs the given
                 * action.
                 * @param runnable the action to run before completing the
                 *  returned CompletableFuture
                 * @param executor the executor to use for asynchronous execution
                 * @return the new CompletableFuture
                 */
                // @ts-ignore
                runAsync(runnable: java.lang.Runnable, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<java.lang.Void>
                /**
                 * Returns a new CompletableFuture that is already completed with
                 * the given value.
                 * @param value the value
                 * @param <U> the type of the value
                 * @return the completed CompletableFuture
                 */
                // @ts-ignore
                completedFuture<U>(value: U): java.util.concurrent.CompletableFuture<U>
                /**
                 * Returns {@code true} if completed in any fashion: normally,
                 * exceptionally, or via cancellation.
                 * @return {#code true} if completed
                 */
                // @ts-ignore
                isDone(): boolean
                /**
                 * Waits if necessary for this future to complete, and then
                 * returns its result.
                 * @return the result value
                 * @throws CancellationException if this future was cancelled
                 * @throws ExecutionException if this future completed exceptionally
                 * @throws InterruptedException if the current thread was interrupted
                 *  while waiting
                 */
                // @ts-ignore
                get(): T
                /**
                 * Waits if necessary for at most the given time for this future
                 * to complete, and then returns its result, if available.
                 * @param timeout the maximum time to wait
                 * @param unit the time unit of the timeout argument
                 * @return the result value
                 * @throws CancellationException if this future was cancelled
                 * @throws ExecutionException if this future completed exceptionally
                 * @throws InterruptedException if the current thread was interrupted
                 *  while waiting
                 * @throws TimeoutException if the wait timed out
                 */
                // @ts-ignore
                get(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): T
                /**
                 * Returns the result value when complete, or throws an
                 * (unchecked) exception if completed exceptionally. To better
                 * conform with the use of common functional forms, if a
                 * computation involved in the completion of this
                 * CompletableFuture threw an exception, this method throws an
                 * (unchecked) {@link CompletionException} with the underlying
                 * exception as its cause.
                 * @return the result value
                 * @throws CancellationException if the computation was cancelled
                 * @throws CompletionException if this future completed
                 *  exceptionally or a completion computation threw an exception
                 */
                // @ts-ignore
                join(): T
                /**
                 * Returns the result value (or throws any encountered exception)
                 * if completed, else returns the given valueIfAbsent.
                 * @param valueIfAbsent the value to return if not completed
                 * @return the result value, if completed, else the given valueIfAbsent
                 * @throws CancellationException if the computation was cancelled
                 * @throws CompletionException if this future completed
                 *  exceptionally or a completion computation threw an exception
                 */
                // @ts-ignore
                getNow(valueIfAbsent: T): T
                /**
                 * If not already completed, sets the value returned by {@link
                 * #get()} and related methods to the given value.
                 * @param value the result value
                 * @return {#code true} if this invocation caused this CompletableFuture
                 *  to transition to a completed state, else {@code false}
                 */
                // @ts-ignore
                complete(value: T): boolean
                /**
                 * If not already completed, causes invocations of {@link #get()}
                 * and related methods to throw the given exception.
                 * @param ex the exception
                 * @return {#code true} if this invocation caused this CompletableFuture
                 *  to transition to a completed state, else {@code false}
                 */
                // @ts-ignore
                completeExceptionally(ex: Error): boolean
                // @ts-ignore
                thenApply<U>(fn: java.util.function.Function<any super T, U> | java.util.function$.Function<? super T, U>): java.util.concurrent.CompletableFuture<U>
                // @ts-ignore
                thenApplyAsync<U>(fn: java.util.function.Function<any super T, U> | java.util.function$.Function<? super T, U>): java.util.concurrent.CompletableFuture<U>
                // @ts-ignore
                thenApplyAsync<U>(fn: java.util.function.Function<any super T, U> | java.util.function$.Function<? super T, U>, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<U>
                // @ts-ignore
                thenAccept(action: java.util.function.Consumer<any super T> | java.util.function$.Consumer<? super T>): java.util.concurrent.CompletableFuture<java.lang.Void>
                // @ts-ignore
                thenAcceptAsync(action: java.util.function.Consumer<any super T> | java.util.function$.Consumer<? super T>): java.util.concurrent.CompletableFuture<java.lang.Void>
                // @ts-ignore
                thenAcceptAsync(action: java.util.function.Consumer<any super T> | java.util.function$.Consumer<? super T>, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<java.lang.Void>
                // @ts-ignore
                thenRun(action: java.lang.Runnable): java.util.concurrent.CompletableFuture<java.lang.Void>
                // @ts-ignore
                thenRunAsync(action: java.lang.Runnable): java.util.concurrent.CompletableFuture<java.lang.Void>
                // @ts-ignore
                thenRunAsync(action: java.lang.Runnable, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<java.lang.Void>
                // @ts-ignore
                thenCombine<U, V>(other: java.util.concurrent.CompletionStage<U>, fn: java.util.function.BiFunction<any super T, ? super U, V> | java.util.function$.BiFunction<? super T, ? super U, V>): java.util.concurrent.CompletableFuture<V>
                // @ts-ignore
                thenCombineAsync<U, V>(other: java.util.concurrent.CompletionStage<U>, fn: java.util.function.BiFunction<any super T, ? super U, V> | java.util.function$.BiFunction<? super T, ? super U, V>): java.util.concurrent.CompletableFuture<V>
                // @ts-ignore
                thenCombineAsync<U, V>(other: java.util.concurrent.CompletionStage<U>, fn: java.util.function.BiFunction<any super T, ? super U, V> | java.util.function$.BiFunction<? super T, ? super U, V>, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<V>
                // @ts-ignore
                thenAcceptBoth<U>(other: java.util.concurrent.CompletionStage<U>, action: java.util.function.BiConsumer<any super T, ? super U> | java.util.function$.BiConsumer<? super T, ? super U>): java.util.concurrent.CompletableFuture<java.lang.Void>
                // @ts-ignore
                thenAcceptBothAsync<U>(other: java.util.concurrent.CompletionStage<U>, action: java.util.function.BiConsumer<any super T, ? super U> | java.util.function$.BiConsumer<? super T, ? super U>): java.util.concurrent.CompletableFuture<java.lang.Void>
                // @ts-ignore
                thenAcceptBothAsync<U>(other: java.util.concurrent.CompletionStage<U>, action: java.util.function.BiConsumer<any super T, ? super U> | java.util.function$.BiConsumer<? super T, ? super U>, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<java.lang.Void>
                // @ts-ignore
                runAfterBoth(other: java.util.concurrent.CompletionStage<any>, action: java.lang.Runnable): java.util.concurrent.CompletableFuture<java.lang.Void>
                // @ts-ignore
                runAfterBothAsync(other: java.util.concurrent.CompletionStage<any>, action: java.lang.Runnable): java.util.concurrent.CompletableFuture<java.lang.Void>
                // @ts-ignore
                runAfterBothAsync(other: java.util.concurrent.CompletionStage<any>, action: java.lang.Runnable, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<java.lang.Void>
                // @ts-ignore
                applyToEither<U>(other: java.util.concurrent.CompletionStage<T>, fn: java.util.function.Function<any super T, U> | java.util.function$.Function<? super T, U>): java.util.concurrent.CompletableFuture<U>
                // @ts-ignore
                applyToEitherAsync<U>(other: java.util.concurrent.CompletionStage<T>, fn: java.util.function.Function<any super T, U> | java.util.function$.Function<? super T, U>): java.util.concurrent.CompletableFuture<U>
                // @ts-ignore
                applyToEitherAsync<U>(other: java.util.concurrent.CompletionStage<T>, fn: java.util.function.Function<any super T, U> | java.util.function$.Function<? super T, U>, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<U>
                // @ts-ignore
                acceptEither(other: java.util.concurrent.CompletionStage<T>, action: java.util.function.Consumer<any super T> | java.util.function$.Consumer<? super T>): java.util.concurrent.CompletableFuture<java.lang.Void>
                // @ts-ignore
                acceptEitherAsync(other: java.util.concurrent.CompletionStage<T>, action: java.util.function.Consumer<any super T> | java.util.function$.Consumer<? super T>): java.util.concurrent.CompletableFuture<java.lang.Void>
                // @ts-ignore
                acceptEitherAsync(other: java.util.concurrent.CompletionStage<T>, action: java.util.function.Consumer<any super T> | java.util.function$.Consumer<? super T>, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<java.lang.Void>
                // @ts-ignore
                runAfterEither(other: java.util.concurrent.CompletionStage<any>, action: java.lang.Runnable): java.util.concurrent.CompletableFuture<java.lang.Void>
                // @ts-ignore
                runAfterEitherAsync(other: java.util.concurrent.CompletionStage<any>, action: java.lang.Runnable): java.util.concurrent.CompletableFuture<java.lang.Void>
                // @ts-ignore
                runAfterEitherAsync(other: java.util.concurrent.CompletionStage<any>, action: java.lang.Runnable, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<java.lang.Void>
                // @ts-ignore
                thenCompose<U>(fn: java.util.function.Function<any super T, java.util.concurrent.CompletionStage<U>> | java.util.function$.Function<? super T, java.util.concurrent.CompletionStage<U>>): java.util.concurrent.CompletableFuture<U>
                // @ts-ignore
                thenComposeAsync<U>(fn: java.util.function.Function<any super T, java.util.concurrent.CompletionStage<U>> | java.util.function$.Function<? super T, java.util.concurrent.CompletionStage<U>>): java.util.concurrent.CompletableFuture<U>
                // @ts-ignore
                thenComposeAsync<U>(fn: java.util.function.Function<any super T, java.util.concurrent.CompletionStage<U>> | java.util.function$.Function<? super T, java.util.concurrent.CompletionStage<U>>, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<U>
                // @ts-ignore
                whenComplete(action: java.util.function.BiConsumer<any super T, ? super java.lang.Throwable> | java.util.function$.BiConsumer<? super T, ? super java.lang.Throwable>): java.util.concurrent.CompletableFuture<T>
                // @ts-ignore
                whenCompleteAsync(action: java.util.function.BiConsumer<any super T, ? super java.lang.Throwable> | java.util.function$.BiConsumer<? super T, ? super java.lang.Throwable>): java.util.concurrent.CompletableFuture<T>
                // @ts-ignore
                whenCompleteAsync(action: java.util.function.BiConsumer<any super T, ? super java.lang.Throwable> | java.util.function$.BiConsumer<? super T, ? super java.lang.Throwable>, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<T>
                // @ts-ignore
                handle<U>(fn: java.util.function.BiFunction<any super T, java.lang.Throwable, U> | java.util.function$.BiFunction<? super T, java.lang.Throwable, U>): java.util.concurrent.CompletableFuture<U>
                // @ts-ignore
                handleAsync<U>(fn: java.util.function.BiFunction<any super T, java.lang.Throwable, U> | java.util.function$.BiFunction<? super T, java.lang.Throwable, U>): java.util.concurrent.CompletableFuture<U>
                // @ts-ignore
                handleAsync<U>(fn: java.util.function.BiFunction<any super T, java.lang.Throwable, U> | java.util.function$.BiFunction<? super T, java.lang.Throwable, U>, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<U>
                /**
                 * Returns this CompletableFuture.
                 * @return this CompletableFuture
                 */
                // @ts-ignore
                toCompletableFuture(): java.util.concurrent.CompletableFuture<T>
                /**
                 * Returns a new CompletableFuture that is completed when this
                 * CompletableFuture completes, with the result of the given
                 * function of the exception triggering this CompletableFuture's
                 * completion when it completes exceptionally; otherwise, if this
                 * CompletableFuture completes normally, then the returned
                 * CompletableFuture also completes normally with the same value.
                 * Note: More flexible versions of this functionality are
                 * available using methods {@code whenComplete} and {@code handle}.
                 * @param fn the function to use to compute the value of the
                 *  returned CompletableFuture if this CompletableFuture completed
                 *  exceptionally
                 * @return the new CompletableFuture
                 */
                // @ts-ignore
                exceptionally(fn: java.util.function.Function<java.lang.Throwable, T> | java.util.function$.Function<java.lang.Throwable, T>): java.util.concurrent.CompletableFuture<T>
                /**
                 * Returns a new CompletableFuture that is completed when all of
                 * the given CompletableFutures complete.  If any of the given
                 * CompletableFutures complete exceptionally, then the returned
                 * CompletableFuture also does so, with a CompletionException
                 * holding this exception as its cause.  Otherwise, the results,
                 * if any, of the given CompletableFutures are not reflected in
                 * the returned CompletableFuture, but may be obtained by
                 * inspecting them individually. If no CompletableFutures are
                 * provided, returns a CompletableFuture completed with the value
                 * {@code null}.
                 * <p>Among the applications of this method is to await completion
                 * of a set of independent CompletableFutures before continuing a
                 * program, as in: {@code CompletableFuture.allOf(c1, c2,
                 * c3).join();}.
                 * @param cfs the CompletableFutures
                 * @return a new CompletableFuture that is completed when all of the
                 *  given CompletableFutures complete
                 * @throws NullPointerException if the array or any of its elements are
                 *  {#code null}
                 */
                // @ts-ignore
                allOf(...cfs: java.util.concurrent.CompletableFuture[]): java.util.concurrent.CompletableFuture<java.lang.Void>
                /**
                 * Returns a new CompletableFuture that is completed when any of
                 * the given CompletableFutures complete, with the same result.
                 * Otherwise, if it completed exceptionally, the returned
                 * CompletableFuture also does so, with a CompletionException
                 * holding this exception as its cause.  If no CompletableFutures
                 * are provided, returns an incomplete CompletableFuture.
                 * @param cfs the CompletableFutures
                 * @return a new CompletableFuture that is completed with the
                 *  result or exception of any of the given CompletableFutures when
                 *  one completes
                 * @throws NullPointerException if the array or any of its elements are
                 *  {#code null}
                 */
                // @ts-ignore
                anyOf(...cfs: java.util.concurrent.CompletableFuture[]): java.util.concurrent.CompletableFuture<java.lang.Object>
                /**
                 * If not already completed, completes this CompletableFuture with
                 * a {@link CancellationException}. Dependent CompletableFutures
                 * that have not already completed will also complete
                 * exceptionally, with a {@link CompletionException} caused by
                 * this {@code CancellationException}.
                 * @param mayInterruptIfRunning this value has no effect in this
                 *  implementation because interrupts are not used to control
                 *  processing.
                 * @return {#code true} if this task is now cancelled
                 */
                // @ts-ignore
                cancel(mayInterruptIfRunning: boolean): boolean
                /**
                 * Returns {@code true} if this CompletableFuture was cancelled
                 * before it completed normally.
                 * @return {#code true} if this CompletableFuture was cancelled
                 *  before it completed normally
                 */
                // @ts-ignore
                isCancelled(): boolean
                /**
                 * Returns {@code true} if this CompletableFuture completed
                 * exceptionally, in any way. Possible causes include
                 * cancellation, explicit invocation of {@code
                 * completeExceptionally}, and abrupt termination of a
                 * CompletionStage action.
                 * @return {#code true} if this CompletableFuture completed
                 *  exceptionally
                 */
                // @ts-ignore
                isCompletedExceptionally(): boolean
                /**
                 * Forcibly sets or resets the value subsequently returned by
                 * method {@link #get()} and related methods, whether or not
                 * already completed. This method is designed for use only in
                 * error recovery actions, and even in such situations may result
                 * in ongoing dependent completions using established versus
                 * overwritten outcomes.
                 * @param value the completion value
                 */
                // @ts-ignore
                obtrudeValue(value: T): void
                /**
                 * Forcibly causes subsequent invocations of method {@link #get()}
                 * and related methods to throw the given exception, whether or
                 * not already completed. This method is designed for use only in
                 * error recovery actions, and even in such situations may result
                 * in ongoing dependent completions using established versus
                 * overwritten outcomes.
                 * @param ex the exception
                 * @throws NullPointerException if the exception is null
                 */
                // @ts-ignore
                obtrudeException(ex: Error): void
                /**
                 * Returns the estimated number of CompletableFutures whose
                 * completions are awaiting completion of this CompletableFuture.
                 * This method is designed for use in monitoring system state, not
                 * for synchronization control.
                 * @return the number of dependent CompletableFutures
                 */
                // @ts-ignore
                getNumberOfDependents(): int
                /**
                 * Returns a string identifying this CompletableFuture, as well as
                 * its completion state.  The state, in brackets, contains the
                 * String {@code "Completed Normally"} or the String {@code
                 * "Completed Exceptionally"}, or the String {@code "Not
                 * completed"} followed by the number of CompletableFutures
                 * dependent upon its completion, if any.
                 * @return a string identifying this CompletableFuture, as well as its state
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
