declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * Abstract base class for tasks that run within a {@link ForkJoinPool}.
             * A {@code ForkJoinTask} is a thread-like entity that is much
             * lighter weight than a normal thread.  Huge numbers of tasks and
             * subtasks may be hosted by a small number of actual threads in a
             * ForkJoinPool, at the price of some usage limitations.
             * <p>A "main" {@code ForkJoinTask} begins execution when it is
             * explicitly submitted to a {@link ForkJoinPool}, or, if not already
             * engaged in a ForkJoin computation, commenced in the {@link
             * ForkJoinPool#commonPool()} via {@link #fork}, {@link #invoke}, or
             * related methods.  Once started, it will usually in turn start other
             * subtasks.  As indicated by the name of this class, many programs
             * using {@code ForkJoinTask} employ only methods {@link #fork} and
             * {@link #join}, or derivatives such as {@link
             * #invokeAll(ForkJoinTask...) invokeAll}.  However, this class also
             * provides a number of other methods that can come into play in
             * advanced usages, as well as extension mechanics that allow support
             * of new forms of fork/join processing.
             * <p>A {@code ForkJoinTask} is a lightweight form of {@link Future}.
             * The efficiency of {@code ForkJoinTask}s stems from a set of
             * restrictions (that are only partially statically enforceable)
             * reflecting their main use as computational tasks calculating pure
             * functions or operating on purely isolated objects.  The primary
             * coordination mechanisms are {@link #fork}, that arranges
             * asynchronous execution, and {@link #join}, that doesn't proceed
             * until the task's result has been computed.  Computations should
             * ideally avoid {@code synchronized} methods or blocks, and should
             * minimize other blocking synchronization apart from joining other
             * tasks or using synchronizers such as Phasers that are advertised to
             * cooperate with fork/join scheduling. Subdividable tasks should also
             * not perform blocking I/O, and should ideally access variables that
             * are completely independent of those accessed by other running
             * tasks. These guidelines are loosely enforced by not permitting
             * checked exceptions such as {@code IOExceptions} to be
             * thrown. However, computations may still encounter unchecked
             * exceptions, that are rethrown to callers attempting to join
             * them. These exceptions may additionally include {@link
             * RejectedExecutionException} stemming from internal resource
             * exhaustion, such as failure to allocate internal task
             * queues. Rethrown exceptions behave in the same way as regular
             * exceptions, but, when possible, contain stack traces (as displayed
             * for example using {@code ex.printStackTrace()}) of both the thread
             * that initiated the computation as well as the thread actually
             * encountering the exception; minimally only the latter.
             * <p>It is possible to define and use ForkJoinTasks that may block,
             * but doing do requires three further considerations: (1) Completion
             * of few if any <em>other</em> tasks should be dependent on a task
             * that blocks on external synchronization or I/O. Event-style async
             * tasks that are never joined (for example, those subclassing {@link
             * CountedCompleter}) often fall into this category.  (2) To minimize
             * resource impact, tasks should be small; ideally performing only the
             * (possibly) blocking action. (3) Unless the {@link
             * ForkJoinPool.ManagedBlocker} API is used, or the number of possibly
             * blocked tasks is known to be less than the pool's {@link
             * ForkJoinPool#getParallelism} level, the pool cannot guarantee that
             * enough threads will be available to ensure progress or good
             * performance.
             * <p>The primary method for awaiting completion and extracting
             * results of a task is {@link #join}, but there are several variants:
             * The {@link Future#get} methods support interruptible and/or timed
             * waits for completion and report results using {@code Future}
             * conventions. Method {@link #invoke} is semantically
             * equivalent to {@code fork(); join()} but always attempts to begin
             * execution in the current thread. The "<em>quiet</em>" forms of
             * these methods do not extract results or report exceptions. These
             * may be useful when a set of tasks are being executed, and you need
             * to delay processing of results or exceptions until all complete.
             * Method {@code invokeAll} (available in multiple versions)
             * performs the most common form of parallel invocation: forking a set
             * of tasks and joining them all.
             * <p>In the most typical usages, a fork-join pair act like a call
             * (fork) and return (join) from a parallel recursive function. As is
             * the case with other forms of recursive calls, returns (joins)
             * should be performed innermost-first. For example, {@code a.fork();
             * b.fork(); b.join(); a.join();} is likely to be substantially more
             * efficient than joining {@code a} before {@code b}.
             * <p>The execution status of tasks may be queried at several levels
             * of detail: {@link #isDone} is true if a task completed in any way
             * (including the case where a task was cancelled without executing);
             * {@link #isCompletedNormally} is true if a task completed without
             * cancellation or encountering an exception; {@link #isCancelled} is
             * true if the task was cancelled (in which case {@link #getException}
             * returns a {@link java.util.concurrent.CancellationException}); and
             * {@link #isCompletedAbnormally} is true if a task was either
             * cancelled or encountered an exception, in which case {@link
             * #getException} will return either the encountered exception or
             * {@link java.util.concurrent.CancellationException}.
             * <p>The ForkJoinTask class is not usually directly subclassed.
             * Instead, you subclass one of the abstract classes that support a
             * particular style of fork/join processing, typically {@link
             * RecursiveAction} for most computations that do not return results,
             * {@link RecursiveTask} for those that do, and {@link
             * CountedCompleter} for those in which completed actions trigger
             * other actions.  Normally, a concrete ForkJoinTask subclass declares
             * fields comprising its parameters, established in a constructor, and
             * then defines a {@code compute} method that somehow uses the control
             * methods supplied by this base class.
             * <p>Method {@link #join} and its variants are appropriate for use
             * only when completion dependencies are acyclic; that is, the
             * parallel computation can be described as a directed acyclic graph
             * (DAG). Otherwise, executions may encounter a form of deadlock as
             * tasks cyclically wait for each other.  However, this framework
             * supports other methods and techniques (for example the use of
             * {@link Phaser}, {@link #helpQuiesce}, and {@link #complete}) that
             * may be of use in constructing custom subclasses for problems that
             * are not statically structured as DAGs. To support such usages, a
             * ForkJoinTask may be atomically <em>tagged</em> with a {@code short}
             * value using {@link #setForkJoinTaskTag} or {@link
             * #compareAndSetForkJoinTaskTag} and checked using {@link
             * #getForkJoinTaskTag}. The ForkJoinTask implementation does not use
             * these {@code protected} methods or tags for any purpose, but they
             * may be of use in the construction of specialized subclasses.  For
             * example, parallel graph traversals can use the supplied methods to
             * avoid revisiting nodes/tasks that have already been processed.
             * (Method names for tagging are bulky in part to encourage definition
             * of methods that reflect their usage patterns.)
             * <p>Most base support methods are {@code final}, to prevent
             * overriding of implementations that are intrinsically tied to the
             * underlying lightweight task scheduling framework.  Developers
             * creating new basic styles of fork/join processing should minimally
             * implement {@code protected} methods {@link #exec}, {@link
             * #setRawResult}, and {@link #getRawResult}, while also introducing
             * an abstract computational method that can be implemented in its
             * subclasses, possibly relying on other {@code protected} methods
             * provided by this class.
             * <p>ForkJoinTasks should perform relatively small amounts of
             * computation. Large tasks should be split into smaller subtasks,
             * usually via recursive decomposition. As a very rough rule of thumb,
             * a task should perform more than 100 and less than 10000 basic
             * computational steps, and should avoid indefinite looping. If tasks
             * are too big, then parallelism cannot improve throughput. If too
             * small, then memory and internal task maintenance overhead may
             * overwhelm processing.
             * <p>This class provides {@code adapt} methods for {@link Runnable}
             * and {@link Callable}, that may be of use when mixing execution of
             * {@code ForkJoinTasks} with other kinds of tasks. When all tasks are
             * of this form, consider using a pool constructed in <em>asyncMode</em>.
             * <p>ForkJoinTasks are {@code Serializable}, which enables them to be
             * used in extensions such as remote execution frameworks. It is
             * sensible to serialize tasks only before or after, but not during,
             * execution. Serialization is not relied on during execution itself.
             * @since 1.7
             * @author Doug Lea
             */
            // @ts-ignore
            class ForkJoinTask<V> extends java.lang.Object implements java.util.concurrent.Future<V>, java.io.Serializable {
                // @ts-ignore
                constructor()
                /**
                 * Arranges to asynchronously execute this task in the pool the
                 * current task is running in, if applicable, or using the {@link
                 * ForkJoinPool#commonPool()} if not {@link #inForkJoinPool}.  While
                 * it is not necessarily enforced, it is a usage error to fork a
                 * task more than once unless it has completed and been
                 * reinitialized.  Subsequent modifications to the state of this
                 * task or any data it operates on are not necessarily
                 * consistently observable by any thread other than the one
                 * executing it unless preceded by a call to {@link #join} or
                 * related methods, or a call to {@link #isDone} returning {@code
                 * true}.
                 * @return {#code this}, to simplify usage
                 */
                // @ts-ignore
                fork(): java.util.concurrent.ForkJoinTask<V>
                /**
                 * Returns the result of the computation when it {@link #isDone is
                 * done}.  This method differs from {@link #get()} in that
                 * abnormal completion results in {@code RuntimeException} or
                 * {@code Error}, not {@code ExecutionException}, and that
                 * interrupts of the calling thread do <em>not</em> cause the
                 * method to abruptly return by throwing {@code
                 * InterruptedException}.
                 * @return the computed result
                 */
                // @ts-ignore
                join(): V
                /**
                 * Commences performing this task, awaits its completion if
                 * necessary, and returns its result, or throws an (unchecked)
                 * {@code RuntimeException} or {@code Error} if the underlying
                 * computation did so.
                 * @return the computed result
                 */
                // @ts-ignore
                invoke(): V
                /**
                 * Forks the given tasks, returning when {@code isDone} holds for
                 * each task or an (unchecked) exception is encountered, in which
                 * case the exception is rethrown. If more than one task
                 * encounters an exception, then this method throws any one of
                 * these exceptions. If any task encounters an exception, the
                 * other may be cancelled. However, the execution status of
                 * individual tasks is not guaranteed upon exceptional return. The
                 * status of each task may be obtained using {@link
                 * #getException()} and related methods to check if they have been
                 * cancelled, completed normally or exceptionally, or left
                 * unprocessed.
                 * @param t1 the first task
                 * @param t2 the second task
                 * @throws NullPointerException if any task is null
                 */
                // @ts-ignore
                invokeAll(t1: java.util.concurrent.ForkJoinTask<any>, t2: java.util.concurrent.ForkJoinTask<any>): void
                /**
                 * Forks the given tasks, returning when {@code isDone} holds for
                 * each task or an (unchecked) exception is encountered, in which
                 * case the exception is rethrown. If more than one task
                 * encounters an exception, then this method throws any one of
                 * these exceptions. If any task encounters an exception, others
                 * may be cancelled. However, the execution status of individual
                 * tasks is not guaranteed upon exceptional return. The status of
                 * each task may be obtained using {@link #getException()} and
                 * related methods to check if they have been cancelled, completed
                 * normally or exceptionally, or left unprocessed.
                 * @param tasks the tasks
                 * @throws NullPointerException if any task is null
                 */
                // @ts-ignore
                invokeAll(...tasks: java.util.concurrent.ForkJoinTask[]): void
                /**
                 * Forks all tasks in the specified collection, returning when
                 * {@code isDone} holds for each task or an (unchecked) exception
                 * is encountered, in which case the exception is rethrown. If
                 * more than one task encounters an exception, then this method
                 * throws any one of these exceptions. If any task encounters an
                 * exception, others may be cancelled. However, the execution
                 * status of individual tasks is not guaranteed upon exceptional
                 * return. The status of each task may be obtained using {@link
                 * #getException()} and related methods to check if they have been
                 * cancelled, completed normally or exceptionally, or left
                 * unprocessed.
                 * @param tasks the collection of tasks
                 * @param <T> the type of the values returned from the tasks
                 * @return the tasks argument, to simplify usage
                 * @throws NullPointerException if tasks or any element are null
                 */
                // @ts-ignore
                invokeAll<T extends java.util.concurrent.ForkJoinTask<?>>(tasks: Array<T>): java.util.Collection<T>
                /**
                 * Attempts to cancel execution of this task. This attempt will
                 * fail if the task has already completed or could not be
                 * cancelled for some other reason. If successful, and this task
                 * has not started when {@code cancel} is called, execution of
                 * this task is suppressed. After this method returns
                 * successfully, unless there is an intervening call to {@link
                 * #reinitialize}, subsequent calls to {@link #isCancelled},
                 * {@link #isDone}, and {@code cancel} will return {@code true}
                 * and calls to {@link #join} and related methods will result in
                 * {@code CancellationException}.
                 * <p>This method may be overridden in subclasses, but if so, must
                 * still ensure that these properties hold. In particular, the
                 * {@code cancel} method itself must not throw exceptions.
                 * <p>This method is designed to be invoked by <em>other</em>
                 * tasks. To terminate the current task, you can just return or
                 * throw an unchecked exception from its computation method, or
                 * invoke {@link #completeExceptionally(Throwable)}.
                 * @param mayInterruptIfRunning this value has no effect in the
                 *  default implementation because interrupts are not used to
                 *  control cancellation.
                 * @return {#code true} if this task is now cancelled
                 */
                // @ts-ignore
                cancel(mayInterruptIfRunning: boolean): boolean
                // @ts-ignore
                isDone(): boolean
                // @ts-ignore
                isCancelled(): boolean
                /**
                 * Returns {@code true} if this task threw an exception or was cancelled.
                 * @return {#code true} if this task threw an exception or was cancelled
                 */
                // @ts-ignore
                isCompletedAbnormally(): boolean
                /**
                 * Returns {@code true} if this task completed without throwing an
                 * exception and was not cancelled.
                 * @return {#code true} if this task completed without throwing an
                 *  exception and was not cancelled
                 */
                // @ts-ignore
                isCompletedNormally(): boolean
                /**
                 * Returns the exception thrown by the base computation, or a
                 * {@code CancellationException} if cancelled, or {@code null} if
                 * none or if the method has not yet completed.
                 * @return the exception, or {#code null} if none
                 */
                // @ts-ignore
                getException(): java.lang.Throwable
                /**
                 * Completes this task abnormally, and if not already aborted or
                 * cancelled, causes it to throw the given exception upon
                 * {@code join} and related operations. This method may be used
                 * to induce exceptions in asynchronous tasks, or to force
                 * completion of tasks that would not otherwise complete.  Its use
                 * in other situations is discouraged.  This method is
                 * overridable, but overridden versions must invoke {@code super}
                 * implementation to maintain guarantees.
                 * @param ex the exception to throw. If this exception is not a
                 *  {#code RuntimeException} or {@code Error}, the actual exception
                 *  thrown will be a {@code RuntimeException} with cause {@code ex}.
                 */
                // @ts-ignore
                completeExceptionally(ex: Error): void
                /**
                 * Completes this task, and if not already aborted or cancelled,
                 * returning the given value as the result of subsequent
                 * invocations of {@code join} and related operations. This method
                 * may be used to provide results for asynchronous tasks, or to
                 * provide alternative handling for tasks that would not otherwise
                 * complete normally. Its use in other situations is
                 * discouraged. This method is overridable, but overridden
                 * versions must invoke {@code super} implementation to maintain
                 * guarantees.
                 * @param value the result value for this task
                 */
                // @ts-ignore
                complete(value: V): void
                /**
                 * Completes this task normally without setting a value. The most
                 * recent value established by {@link #setRawResult} (or {@code
                 * null} by default) will be returned as the result of subsequent
                 * invocations of {@code join} and related operations.
                 * @since 1.8
                 */
                // @ts-ignore
                quietlyComplete(): void
                /**
                 * Waits if necessary for the computation to complete, and then
                 * retrieves its result.
                 * @return the computed result
                 * @throws CancellationException if the computation was cancelled
                 * @throws ExecutionException if the computation threw an
                 *  exception
                 * @throws InterruptedException if the current thread is not a
                 *  member of a ForkJoinPool and was interrupted while waiting
                 */
                // @ts-ignore
                get(): V
                /**
                 * Waits if necessary for at most the given time for the computation
                 * to complete, and then retrieves its result, if available.
                 * @param timeout the maximum time to wait
                 * @param unit the time unit of the timeout argument
                 * @return the computed result
                 * @throws CancellationException if the computation was cancelled
                 * @throws ExecutionException if the computation threw an
                 *  exception
                 * @throws InterruptedException if the current thread is not a
                 *  member of a ForkJoinPool and was interrupted while waiting
                 * @throws TimeoutException if the wait timed out
                 */
                // @ts-ignore
                get(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): V
                /**
                 * Joins this task, without returning its result or throwing its
                 * exception. This method may be useful when processing
                 * collections of tasks when some have been cancelled or otherwise
                 * known to have aborted.
                 */
                // @ts-ignore
                quietlyJoin(): void
                /**
                 * Commences performing this task and awaits its completion if
                 * necessary, without returning its result or throwing its
                 * exception.
                 */
                // @ts-ignore
                quietlyInvoke(): void
                /**
                 * Possibly executes tasks until the pool hosting the current task
                 * {@link ForkJoinPool#isQuiescent is quiescent}. This method may
                 * be of use in designs in which many tasks are forked, but none
                 * are explicitly joined, instead executing them until all are
                 * processed.
                 */
                // @ts-ignore
                helpQuiesce(): void
                /**
                 * Resets the internal bookkeeping state of this task, allowing a
                 * subsequent {@code fork}. This method allows repeated reuse of
                 * this task, but only if reuse occurs when this task has either
                 * never been forked, or has been forked, then completed and all
                 * outstanding joins of this task have also completed. Effects
                 * under any other usage conditions are not guaranteed.
                 * This method may be useful when executing
                 * pre-constructed trees of subtasks in loops.
                 * <p>Upon completion of this method, {@code isDone()} reports
                 * {@code false}, and {@code getException()} reports {@code
                 * null}. However, the value returned by {@code getRawResult} is
                 * unaffected. To clear this value, you can invoke {@code
                 * setRawResult(null)}.
                 */
                // @ts-ignore
                reinitialize(): void
                /**
                 * Returns the pool hosting the current task execution, or null
                 * if this task is executing outside of any ForkJoinPool.
                 * @see #inForkJoinPool
                 * @return the pool, or {#code null} if none
                 */
                // @ts-ignore
                getPool(): java.util.concurrent.ForkJoinPool
                /**
                 * Returns {@code true} if the current thread is a {@link
                 * ForkJoinWorkerThread} executing as a ForkJoinPool computation.
                 * @return {#code true} if the current thread is a {@link
                 *  ForkJoinWorkerThread} executing as a ForkJoinPool computation,
                 *  or {@code false} otherwise
                 */
                // @ts-ignore
                inForkJoinPool(): boolean
                /**
                 * Tries to unschedule this task for execution. This method will
                 * typically (but is not guaranteed to) succeed if this task is
                 * the most recently forked task by the current thread, and has
                 * not commenced executing in another thread.  This method may be
                 * useful when arranging alternative local processing of tasks
                 * that could have been, but were not, stolen.
                 * @return {#code true} if unforked
                 */
                // @ts-ignore
                tryUnfork(): boolean
                /**
                 * Returns an estimate of the number of tasks that have been
                 * forked by the current worker thread but not yet executed. This
                 * value may be useful for heuristic decisions about whether to
                 * fork other tasks.
                 * @return the number of tasks
                 */
                // @ts-ignore
                getQueuedTaskCount(): int
                /**
                 * Returns an estimate of how many more locally queued tasks are
                 * held by the current worker thread than there are other worker
                 * threads that might steal them, or zero if this thread is not
                 * operating in a ForkJoinPool. This value may be useful for
                 * heuristic decisions about whether to fork other tasks. In many
                 * usages of ForkJoinTasks, at steady state, each worker should
                 * aim to maintain a small constant surplus (for example, 3) of
                 * tasks, and to process computations locally if this threshold is
                 * exceeded.
                 * @return the surplus number of tasks, which may be negative
                 */
                // @ts-ignore
                getSurplusQueuedTaskCount(): int
                /**
                 * Returns the result that would be returned by {@link #join}, even
                 * if this task completed abnormally, or {@code null} if this task
                 * is not known to have been completed.  This method is designed
                 * to aid debugging, as well as to support extensions. Its use in
                 * any other context is discouraged.
                 * @return the result, or {#code null} if not completed
                 */
                // @ts-ignore
                abstract getRawResult(): V
                /**
                 * Forces the given value to be returned as a result.  This method
                 * is designed to support extensions, and should not in general be
                 * called otherwise.
                 * @param value the value
                 */
                // @ts-ignore
                abstract setRawResult(value: V): void
                /**
                 * Immediately performs the base action of this task and returns
                 * true if, upon return from this method, this task is guaranteed
                 * to have completed normally. This method may return false
                 * otherwise, to indicate that this task is not necessarily
                 * complete (or is not known to be complete), for example in
                 * asynchronous actions that require explicit invocations of
                 * completion methods. This method may also throw an (unchecked)
                 * exception to indicate abnormal exit. This method is designed to
                 * support extensions, and should not in general be called
                 * otherwise.
                 * @return {#code true} if this task is known to have completed normally
                 */
                // @ts-ignore
                abstract exec(): boolean
                /**
                 * Returns, but does not unschedule or execute, a task queued by
                 * the current thread but not yet executed, if one is immediately
                 * available. There is no guarantee that this task will actually
                 * be polled or executed next. Conversely, this method may return
                 * null even if a task exists but cannot be accessed without
                 * contention with other threads.  This method is designed
                 * primarily to support extensions, and is unlikely to be useful
                 * otherwise.
                 * @return the next task, or {#code null} if none are available
                 */
                // @ts-ignore
                peekNextLocalTask(): java.util.concurrent.ForkJoinTask<?>
                /**
                 * Unschedules and returns, without executing, the next task
                 * queued by the current thread but not yet executed, if the
                 * current thread is operating in a ForkJoinPool.  This method is
                 * designed primarily to support extensions, and is unlikely to be
                 * useful otherwise.
                 * @return the next task, or {#code null} if none are available
                 */
                // @ts-ignore
                pollNextLocalTask(): java.util.concurrent.ForkJoinTask<?>
                /**
                 * If the current thread is operating in a ForkJoinPool,
                 * unschedules and returns, without executing, the next task
                 * queued by the current thread but not yet executed, if one is
                 * available, or if not available, a task that was forked by some
                 * other thread, if available. Availability may be transient, so a
                 * {@code null} result does not necessarily imply quiescence of
                 * the pool this task is operating in.  This method is designed
                 * primarily to support extensions, and is unlikely to be useful
                 * otherwise.
                 * @return a task, or {#code null} if none are available
                 */
                // @ts-ignore
                pollTask(): java.util.concurrent.ForkJoinTask<?>
                /**
                 * Returns the tag for this task.
                 * @return the tag for this task
                 * @since 1.8
                 */
                // @ts-ignore
                getForkJoinTaskTag(): short
                /**
                 * Atomically sets the tag value for this task.
                 * @param tag the tag value
                 * @return the previous value of the tag
                 * @since 1.8
                 */
                // @ts-ignore
                setForkJoinTaskTag(tag: number /*short*/): short
                /**
                 * Atomically conditionally sets the tag value for this task.
                 * Among other applications, tags can be used as visit markers
                 * in tasks operating on graphs, as in methods that check: {@code
                 * if (task.compareAndSetForkJoinTaskTag((short)0, (short)1))}
                 * before processing, otherwise exiting because the node has
                 * already been visited.
                 * @param e the expected tag value
                 * @param tag the new tag value
                 * @return {#code true} if successful; i.e., the current value was
                 *  equal to e and is now tag.
                 * @since 1.8
                 */
                // @ts-ignore
                compareAndSetForkJoinTaskTag(e: number /*short*/, tag: number /*short*/): boolean
                /**
                 * Returns a new {@code ForkJoinTask} that performs the {@code run}
                 * method of the given {@code Runnable} as its action, and returns
                 * a null result upon {@link #join}.
                 * @param runnable the runnable action
                 * @return the task
                 */
                // @ts-ignore
                adapt(runnable: java.lang.Runnable): java.util.concurrent.ForkJoinTask<?>
                /**
                 * Returns a new {@code ForkJoinTask} that performs the {@code run}
                 * method of the given {@code Runnable} as its action, and returns
                 * the given result upon {@link #join}.
                 * @param runnable the runnable action
                 * @param result the result upon completion
                 * @param <T> the type of the result
                 * @return the task
                 */
                // @ts-ignore
                adapt<T>(runnable: java.lang.Runnable, result: T): java.util.concurrent.ForkJoinTask<T>
                /**
                 * Returns a new {@code ForkJoinTask} that performs the {@code call}
                 * method of the given {@code Callable} as its action, and returns
                 * its result upon {@link #join}, translating any checked exceptions
                 * encountered into {@code RuntimeException}.
                 * @param callable the callable action
                 * @param <T> the type of the callable's result
                 * @return the task
                 */
                // @ts-ignore
                adapt<T>(callable: java.util.concurrent.Callable<T>): java.util.concurrent.ForkJoinTask<T>
            }
        }
    }
}
