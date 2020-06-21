declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * A stage of a possibly asynchronous computation, that performs an
             * action or computes a value when another CompletionStage completes.
             * A stage completes upon termination of its computation, but this may
             * in turn trigger other dependent stages.  The functionality defined
             * in this interface takes only a few basic forms, which expand out to
             * a larger set of methods to capture a range of usage styles: <ul>
             * <li>The computation performed by a stage may be expressed as a
             * Function, Consumer, or Runnable (using methods with names including
             * <em>apply</em>, <em>accept</em>, or <em>run</em>, respectively)
             * depending on whether it requires arguments and/or produces results.
             * For example, {@code stage.thenApply(x -> square(x)).thenAccept(x ->
             * System.out.print(x)).thenRun(() -> System.out.println())}. An
             * additional form (<em>compose</em>) applies functions of stages
             * themselves, rather than their results. </li>
             * <li> One stage's execution may be triggered by completion of a
             * single stage, or both of two stages, or either of two stages.
             * Dependencies on a single stage are arranged using methods with
             * prefix <em>then</em>. Those triggered by completion of
             * <em>both</em> of two stages may <em>combine</em> their results or
             * effects, using correspondingly named methods. Those triggered by
             * <em>either</em> of two stages make no guarantees about which of the
             * results or effects are used for the dependent stage's
             * computation.</li>
             * <li> Dependencies among stages control the triggering of
             * computations, but do not otherwise guarantee any particular
             * ordering. Additionally, execution of a new stage's computations may
             * be arranged in any of three ways: default execution, default
             * asynchronous execution (using methods with suffix <em>async</em>
             * that employ the stage's default asynchronous execution facility),
             * or custom (via a supplied {@link Executor}).  The execution
             * properties of default and async modes are specified by
             * CompletionStage implementations, not this interface. Methods with
             * explicit Executor arguments may have arbitrary execution
             * properties, and might not even support concurrent execution, but
             * are arranged for processing in a way that accommodates asynchrony.
             * <li> Two method forms support processing whether the triggering
             * stage completed normally or exceptionally: Method {@link
             * #whenComplete whenComplete} allows injection of an action
             * regardless of outcome, otherwise preserving the outcome in its
             * completion. Method {@link #handle handle} additionally allows the
             * stage to compute a replacement result that may enable further
             * processing by other dependent stages.  In all other cases, if a
             * stage's computation terminates abruptly with an (unchecked)
             * exception or error, then all dependent stages requiring its
             * completion complete exceptionally as well, with a {@link
             * CompletionException} holding the exception as its cause.  If a
             * stage is dependent on <em>both</em> of two stages, and both
             * complete exceptionally, then the CompletionException may correspond
             * to either one of these exceptions.  If a stage is dependent on
             * <em>either</em> of two others, and only one of them completes
             * exceptionally, no guarantees are made about whether the dependent
             * stage completes normally or exceptionally. In the case of method
             * {@code whenComplete}, when the supplied action itself encounters an
             * exception, then the stage exceptionally completes with this
             * exception if not already completed exceptionally.</li>
             * </ul>
             * <p>All methods adhere to the above triggering, execution, and
             * exceptional completion specifications (which are not repeated in
             * individual method specifications). Additionally, while arguments
             * used to pass a completion result (that is, for parameters of type
             * {@code T}) for methods accepting them may be null, passing a null
             * value for any other parameter will result in a {@link
             * NullPointerException} being thrown.
             * <p>This interface does not define methods for initially creating,
             * forcibly completing normally or exceptionally, probing completion
             * status or results, or awaiting completion of a stage.
             * Implementations of CompletionStage may provide means of achieving
             * such effects, as appropriate.  Method {@link #toCompletableFuture}
             * enables interoperability among different implementations of this
             * interface by providing a common conversion type.
             * @author Doug Lea
             * @since 1.8
             */
            // @ts-ignore
            interface CompletionStage<T> {
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, is executed with this stage's result as the argument
                 * to the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param fn the function to use to compute the value of
                 *  the returned CompletionStage
                 * @param <U> the function's return type
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                thenApply<U>(fn: java.util.function$.Function<any, any>): java.util.concurrent.CompletionStage<U>
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, is executed using this stage's default asynchronous
                 * execution facility, with this stage's result as the argument to
                 * the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param fn the function to use to compute the value of
                 *  the returned CompletionStage
                 * @param <U> the function's return type
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                thenApplyAsync<U>(fn: java.util.function$.Function<any, any>): java.util.concurrent.CompletionStage<U>
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, is executed using the supplied Executor, with this
                 * stage's result as the argument to the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param fn the function to use to compute the value of
                 *  the returned CompletionStage
                 * @param executor the executor to use for asynchronous execution
                 * @param <U> the function's return type
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                thenApplyAsync<U>(fn: java.util.function$.Function<any, any>, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage<U>
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, is executed with this stage's result as the argument
                 * to the supplied action.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param action the action to perform before completing the
                 *  returned CompletionStage
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                thenAccept(action: java.util.function$.Consumer<any>): java.util.concurrent.CompletionStage<java.lang.Void>
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, is executed using this stage's default asynchronous
                 * execution facility, with this stage's result as the argument to
                 * the supplied action.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param action the action to perform before completing the
                 *  returned CompletionStage
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                thenAcceptAsync(action: java.util.function$.Consumer<any>): java.util.concurrent.CompletionStage<java.lang.Void>
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, is executed using the supplied Executor, with this
                 * stage's result as the argument to the supplied action.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param action the action to perform before completing the
                 *  returned CompletionStage
                 * @param executor the executor to use for asynchronous execution
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                thenAcceptAsync(action: java.util.function$.Consumer<any>, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage<java.lang.Void>
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, executes the given action.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param action the action to perform before completing the
                 *  returned CompletionStage
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                thenRun(action: java.lang.Runnable): java.util.concurrent.CompletionStage<java.lang.Void>
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, executes the given action using this stage's default
                 * asynchronous execution facility.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param action the action to perform before completing the
                 *  returned CompletionStage
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                thenRunAsync(action: java.lang.Runnable): java.util.concurrent.CompletionStage<java.lang.Void>
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, executes the given action using the supplied Executor.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param action the action to perform before completing the
                 *  returned CompletionStage
                 * @param executor the executor to use for asynchronous execution
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                thenRunAsync(action: java.lang.Runnable, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage<java.lang.Void>
                /**
                 * Returns a new CompletionStage that, when this and the other
                 * given stage both complete normally, is executed with the two
                 * results as arguments to the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param other the other CompletionStage
                 * @param fn the function to use to compute the value of
                 *  the returned CompletionStage
                 * @param <U> the type of the other CompletionStage's result
                 * @param <V> the function's return type
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                thenCombine<U, V>(other: java.util.concurrent.CompletionStage<any>, fn: java.util.function$.BiFunction<any, any, any>): java.util.concurrent.CompletionStage<V>
                /**
                 * Returns a new CompletionStage that, when this and the other
                 * given stage complete normally, is executed using this stage's
                 * default asynchronous execution facility, with the two results
                 * as arguments to the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param other the other CompletionStage
                 * @param fn the function to use to compute the value of
                 *  the returned CompletionStage
                 * @param <U> the type of the other CompletionStage's result
                 * @param <V> the function's return type
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                thenCombineAsync<U, V>(other: java.util.concurrent.CompletionStage<any>, fn: java.util.function$.BiFunction<any, any, any>): java.util.concurrent.CompletionStage<V>
                /**
                 * Returns a new CompletionStage that, when this and the other
                 * given stage complete normally, is executed using the supplied
                 * executor, with the two results as arguments to the supplied
                 * function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param other the other CompletionStage
                 * @param fn the function to use to compute the value of
                 *  the returned CompletionStage
                 * @param executor the executor to use for asynchronous execution
                 * @param <U> the type of the other CompletionStage's result
                 * @param <V> the function's return type
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                thenCombineAsync<U, V>(other: java.util.concurrent.CompletionStage<any>, fn: java.util.function$.BiFunction<any, any, any>, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage<V>
                /**
                 * Returns a new CompletionStage that, when this and the other
                 * given stage both complete normally, is executed with the two
                 * results as arguments to the supplied action.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param other the other CompletionStage
                 * @param action the action to perform before completing the
                 *  returned CompletionStage
                 * @param <U> the type of the other CompletionStage's result
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                thenAcceptBoth<U>(other: java.util.concurrent.CompletionStage<any>, action: java.util.function$.BiConsumer<any, any>): java.util.concurrent.CompletionStage<java.lang.Void>
                /**
                 * Returns a new CompletionStage that, when this and the other
                 * given stage complete normally, is executed using this stage's
                 * default asynchronous execution facility, with the two results
                 * as arguments to the supplied action.
                 * @param other the other CompletionStage
                 * @param action the action to perform before completing the
                 *  returned CompletionStage
                 * @param <U> the type of the other CompletionStage's result
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                thenAcceptBothAsync<U>(other: java.util.concurrent.CompletionStage<any>, action: java.util.function$.BiConsumer<any, any>): java.util.concurrent.CompletionStage<java.lang.Void>
                /**
                 * Returns a new CompletionStage that, when this and the other
                 * given stage complete normally, is executed using the supplied
                 * executor, with the two results as arguments to the supplied
                 * function.
                 * @param other the other CompletionStage
                 * @param action the action to perform before completing the
                 *  returned CompletionStage
                 * @param executor the executor to use for asynchronous execution
                 * @param <U> the type of the other CompletionStage's result
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                thenAcceptBothAsync<U>(other: java.util.concurrent.CompletionStage<any>, action: java.util.function$.BiConsumer<any, any>, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage<java.lang.Void>
                /**
                 * Returns a new CompletionStage that, when this and the other
                 * given stage both complete normally, executes the given action.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param other the other CompletionStage
                 * @param action the action to perform before completing the
                 *  returned CompletionStage
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                runAfterBoth(other: java.util.concurrent.CompletionStage<any>, action: java.lang.Runnable): java.util.concurrent.CompletionStage<java.lang.Void>
                /**
                 * Returns a new CompletionStage that, when this and the other
                 * given stage complete normally, executes the given action using
                 * this stage's default asynchronous execution facility.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param other the other CompletionStage
                 * @param action the action to perform before completing the
                 *  returned CompletionStage
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                runAfterBothAsync(other: java.util.concurrent.CompletionStage<any>, action: java.lang.Runnable): java.util.concurrent.CompletionStage<java.lang.Void>
                /**
                 * Returns a new CompletionStage that, when this and the other
                 * given stage complete normally, executes the given action using
                 * the supplied executor.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param other the other CompletionStage
                 * @param action the action to perform before completing the
                 *  returned CompletionStage
                 * @param executor the executor to use for asynchronous execution
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                runAfterBothAsync(other: java.util.concurrent.CompletionStage<any>, action: java.lang.Runnable, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage<java.lang.Void>
                /**
                 * Returns a new CompletionStage that, when either this or the
                 * other given stage complete normally, is executed with the
                 * corresponding result as argument to the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param other the other CompletionStage
                 * @param fn the function to use to compute the value of
                 *  the returned CompletionStage
                 * @param <U> the function's return type
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                applyToEither<U>(other: java.util.concurrent.CompletionStage<any>, fn: java.util.function$.Function<any, U>): java.util.concurrent.CompletionStage<U>
                /**
                 * Returns a new CompletionStage that, when either this or the
                 * other given stage complete normally, is executed using this
                 * stage's default asynchronous execution facility, with the
                 * corresponding result as argument to the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param other the other CompletionStage
                 * @param fn the function to use to compute the value of
                 *  the returned CompletionStage
                 * @param <U> the function's return type
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                applyToEitherAsync<U>(other: java.util.concurrent.CompletionStage<any>, fn: java.util.function$.Function<any, U>): java.util.concurrent.CompletionStage<U>
                /**
                 * Returns a new CompletionStage that, when either this or the
                 * other given stage complete normally, is executed using the
                 * supplied executor, with the corresponding result as argument to
                 * the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param other the other CompletionStage
                 * @param fn the function to use to compute the value of
                 *  the returned CompletionStage
                 * @param executor the executor to use for asynchronous execution
                 * @param <U> the function's return type
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                applyToEitherAsync<U>(other: java.util.concurrent.CompletionStage<any>, fn: java.util.function$.Function<any, U>, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage<U>
                /**
                 * Returns a new CompletionStage that, when either this or the
                 * other given stage complete normally, is executed with the
                 * corresponding result as argument to the supplied action.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param other the other CompletionStage
                 * @param action the action to perform before completing the
                 *  returned CompletionStage
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                acceptEither(other: java.util.concurrent.CompletionStage<any>, action: java.util.function$.Consumer<any>): java.util.concurrent.CompletionStage<java.lang.Void>
                /**
                 * Returns a new CompletionStage that, when either this or the
                 * other given stage complete normally, is executed using this
                 * stage's default asynchronous execution facility, with the
                 * corresponding result as argument to the supplied action.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param other the other CompletionStage
                 * @param action the action to perform before completing the
                 *  returned CompletionStage
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                acceptEitherAsync(other: java.util.concurrent.CompletionStage<any>, action: java.util.function$.Consumer<any>): java.util.concurrent.CompletionStage<java.lang.Void>
                /**
                 * Returns a new CompletionStage that, when either this or the
                 * other given stage complete normally, is executed using the
                 * supplied executor, with the corresponding result as argument to
                 * the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param other the other CompletionStage
                 * @param action the action to perform before completing the
                 *  returned CompletionStage
                 * @param executor the executor to use for asynchronous execution
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                acceptEitherAsync(other: java.util.concurrent.CompletionStage<any>, action: java.util.function$.Consumer<any>, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage<java.lang.Void>
                /**
                 * Returns a new CompletionStage that, when either this or the
                 * other given stage complete normally, executes the given action.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param other the other CompletionStage
                 * @param action the action to perform before completing the
                 *  returned CompletionStage
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                runAfterEither(other: java.util.concurrent.CompletionStage<any>, action: java.lang.Runnable): java.util.concurrent.CompletionStage<java.lang.Void>
                /**
                 * Returns a new CompletionStage that, when either this or the
                 * other given stage complete normally, executes the given action
                 * using this stage's default asynchronous execution facility.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param other the other CompletionStage
                 * @param action the action to perform before completing the
                 *  returned CompletionStage
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                runAfterEitherAsync(other: java.util.concurrent.CompletionStage<any>, action: java.lang.Runnable): java.util.concurrent.CompletionStage<java.lang.Void>
                /**
                 * Returns a new CompletionStage that, when either this or the
                 * other given stage complete normally, executes the given action
                 * using the supplied executor.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param other the other CompletionStage
                 * @param action the action to perform before completing the
                 *  returned CompletionStage
                 * @param executor the executor to use for asynchronous execution
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                runAfterEitherAsync(other: java.util.concurrent.CompletionStage<any>, action: java.lang.Runnable, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage<java.lang.Void>
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, is executed with this stage as the argument
                 * to the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param fn the function returning a new CompletionStage
                 * @param <U> the type of the returned CompletionStage's result
                 * @return the CompletionStage
                 */
                // @ts-ignore
                thenCompose<U>(fn: java.util.function$.Function<any, any>): java.util.concurrent.CompletionStage<U>
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, is executed using this stage's default asynchronous
                 * execution facility, with this stage as the argument to the
                 * supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param fn the function returning a new CompletionStage
                 * @param <U> the type of the returned CompletionStage's result
                 * @return the CompletionStage
                 */
                // @ts-ignore
                thenComposeAsync<U>(fn: java.util.function$.Function<any, any>): java.util.concurrent.CompletionStage<U>
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * normally, is executed using the supplied Executor, with this
                 * stage's result as the argument to the supplied function.
                 * See the {@link CompletionStage} documentation for rules
                 * covering exceptional completion.
                 * @param fn the function returning a new CompletionStage
                 * @param executor the executor to use for asynchronous execution
                 * @param <U> the type of the returned CompletionStage's result
                 * @return the CompletionStage
                 */
                // @ts-ignore
                thenComposeAsync<U>(fn: java.util.function$.Function<any, any>, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage<U>
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * exceptionally, is executed with this stage's exception as the
                 * argument to the supplied function.  Otherwise, if this stage
                 * completes normally, then the returned stage also completes
                 * normally with the same value.
                 * @param fn the function to use to compute the value of the
                 *  returned CompletionStage if this CompletionStage completed
                 *  exceptionally
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                exceptionally(fn: java.util.function$.Function<java.lang.Throwable | Error, any>): java.util.concurrent.CompletionStage<T>
                /**
                 * Returns a new CompletionStage with the same result or exception as
                 * this stage, that executes the given action when this stage completes.
                 * <p>When this stage is complete, the given action is invoked with the
                 * result (or {@code null} if none) and the exception (or {@code null}
                 * if none) of this stage as arguments.  The returned stage is completed
                 * when the action returns.  If the supplied action itself encounters an
                 * exception, then the returned stage exceptionally completes with this
                 * exception unless this stage also completed exceptionally.
                 * @param action the action to perform
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                whenComplete(action: java.util.function$.BiConsumer<any, any>): java.util.concurrent.CompletionStage<T>
                /**
                 * Returns a new CompletionStage with the same result or exception as
                 * this stage, that executes the given action using this stage's
                 * default asynchronous execution facility when this stage completes.
                 * <p>When this stage is complete, the given action is invoked with the
                 * result (or {@code null} if none) and the exception (or {@code null}
                 * if none) of this stage as arguments.  The returned stage is completed
                 * when the action returns.  If the supplied action itself encounters an
                 * exception, then the returned stage exceptionally completes with this
                 * exception unless this stage also completed exceptionally.
                 * @param action the action to perform
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                whenCompleteAsync(action: java.util.function$.BiConsumer<any, any>): java.util.concurrent.CompletionStage<T>
                /**
                 * Returns a new CompletionStage with the same result or exception as
                 * this stage, that executes the given action using the supplied
                 * Executor when this stage completes.
                 * <p>When this stage is complete, the given action is invoked with the
                 * result (or {@code null} if none) and the exception (or {@code null}
                 * if none) of this stage as arguments.  The returned stage is completed
                 * when the action returns.  If the supplied action itself encounters an
                 * exception, then the returned stage exceptionally completes with this
                 * exception unless this stage also completed exceptionally.
                 * @param action the action to perform
                 * @param executor the executor to use for asynchronous execution
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                whenCompleteAsync(action: java.util.function$.BiConsumer<any, any>, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage<T>
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * either normally or exceptionally, is executed with this stage's
                 * result and exception as arguments to the supplied function.
                 * <p>When this stage is complete, the given function is invoked
                 * with the result (or {@code null} if none) and the exception (or
                 * {@code null} if none) of this stage as arguments, and the
                 * function's result is used to complete the returned stage.
                 * @param fn the function to use to compute the value of the
                 *  returned CompletionStage
                 * @param <U> the function's return type
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                handle<U>(fn: java.util.function$.BiFunction<any, java.lang.Throwable | Error, any>): java.util.concurrent.CompletionStage<U>
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * either normally or exceptionally, is executed using this stage's
                 * default asynchronous execution facility, with this stage's
                 * result and exception as arguments to the supplied function.
                 * <p>When this stage is complete, the given function is invoked
                 * with the result (or {@code null} if none) and the exception (or
                 * {@code null} if none) of this stage as arguments, and the
                 * function's result is used to complete the returned stage.
                 * @param fn the function to use to compute the value of the
                 *  returned CompletionStage
                 * @param <U> the function's return type
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                handleAsync<U>(fn: java.util.function$.BiFunction<any, java.lang.Throwable | Error, any>): java.util.concurrent.CompletionStage<U>
                /**
                 * Returns a new CompletionStage that, when this stage completes
                 * either normally or exceptionally, is executed using the
                 * supplied executor, with this stage's result and exception as
                 * arguments to the supplied function.
                 * <p>When this stage is complete, the given function is invoked
                 * with the result (or {@code null} if none) and the exception (or
                 * {@code null} if none) of this stage as arguments, and the
                 * function's result is used to complete the returned stage.
                 * @param fn the function to use to compute the value of the
                 *  returned CompletionStage
                 * @param executor the executor to use for asynchronous execution
                 * @param <U> the function's return type
                 * @return the new CompletionStage
                 */
                // @ts-ignore
                handleAsync<U>(fn: java.util.function$.BiFunction<any, java.lang.Throwable | Error, any>, executor: java.util.concurrent.Executor): java.util.concurrent.CompletionStage<U>
                /**
                 * Returns a {@link CompletableFuture} maintaining the same
                 * completion properties as this stage. If this stage is already a
                 * CompletableFuture, this method may return this stage itself.
                 * Otherwise, invocation of this method may be equivalent in
                 * effect to {@code thenApply(x -> x)}, but returning an instance
                 * of type {@code CompletableFuture}. A CompletionStage
                 * implementation that does not choose to interoperate with others
                 * may throw {@code UnsupportedOperationException}.
                 * @return the CompletableFuture
                 * @throws UnsupportedOperationException if this implementation
                 *  does not interoperate with CompletableFuture
                 */
                // @ts-ignore
                toCompletableFuture(): java.util.concurrent.CompletableFuture<T>
            }
        }
    }
}
