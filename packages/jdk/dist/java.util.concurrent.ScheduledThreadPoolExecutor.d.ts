declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * A {@link ThreadPoolExecutor} that can additionally schedule
             * commands to run after a given delay, or to execute
             * periodically. This class is preferable to {@link java.util.Timer}
             * when multiple worker threads are needed, or when the additional
             * flexibility or capabilities of {@link ThreadPoolExecutor} (which
             * this class extends) are required.
             * <p>Delayed tasks execute no sooner than they are enabled, but
             * without any real-time guarantees about when, after they are
             * enabled, they will commence. Tasks scheduled for exactly the same
             * execution time are enabled in first-in-first-out (FIFO) order of
             * submission.
             * <p>When a submitted task is cancelled before it is run, execution
             * is suppressed. By default, such a cancelled task is not
             * automatically removed from the work queue until its delay
             * elapses. While this enables further inspection and monitoring, it
             * may also cause unbounded retention of cancelled tasks. To avoid
             * this, set {@link #setRemoveOnCancelPolicy} to {@code true}, which
             * causes tasks to be immediately removed from the work queue at
             * time of cancellation.
             * <p>Successive executions of a task scheduled via
             * {@code scheduleAtFixedRate} or
             * {@code scheduleWithFixedDelay} do not overlap. While different
             * executions may be performed by different threads, the effects of
             * prior executions <a
             * href="package-summary.html#MemoryVisibility"><i>happen-before</i></a>
             * those of subsequent ones.
             * <p>While this class inherits from {@link ThreadPoolExecutor}, a few
             * of the inherited tuning methods are not useful for it. In
             * particular, because it acts as a fixed-sized pool using
             * {@code corePoolSize} threads and an unbounded queue, adjustments
             * to {@code maximumPoolSize} have no useful effect. Additionally, it
             * is almost never a good idea to set {@code corePoolSize} to zero or
             * use {@code allowCoreThreadTimeOut} because this may leave the pool
             * without threads to handle tasks once they become eligible to run.
             * <p><b>Extension notes:</b> This class overrides the
             * {@link ThreadPoolExecutor#execute(Runnable) execute} and
             * {@link AbstractExecutorService#submit(Runnable) submit}
             * methods to generate internal {@link ScheduledFuture} objects to
             * control per-task delays and scheduling.  To preserve
             * functionality, any further overrides of these methods in
             * subclasses must invoke superclass versions, which effectively
             * disables additional task customization.  However, this class
             * provides alternative protected extension method
             * {@code decorateTask} (one version each for {@code Runnable} and
             * {@code Callable}) that can be used to customize the concrete task
             * types used to execute commands entered via {@code execute},
             * {@code submit}, {@code schedule}, {@code scheduleAtFixedRate},
             * and {@code scheduleWithFixedDelay}.  By default, a
             * {@code ScheduledThreadPoolExecutor} uses a task type extending
             * {@link FutureTask}. However, this may be modified or replaced using
             * subclasses of the form:
             * <pre> {@code
             * public class CustomScheduledExecutor extends ScheduledThreadPoolExecutor {
             * static class CustomTask<V> implements RunnableScheduledFuture<V> { ... }
             * protected <V> RunnableScheduledFuture<V> decorateTask(
             * Runnable r, RunnableScheduledFuture<V> task) {
             * return new CustomTask<V>(r, task);
             * }
             * protected <V> RunnableScheduledFuture<V> decorateTask(
             * Callable<V> c, RunnableScheduledFuture<V> task) {
             * return new CustomTask<V>(c, task);
             * }
             * // ... add constructors, etc.
             * }}</pre>
             * @since 1.5
             * @author Doug Lea
             */
            // @ts-ignore
            class ScheduledThreadPoolExecutor extends java.util.concurrent.ThreadPoolExecutor implements java.util.concurrent.ScheduledExecutorService {
                /**
                 * Creates a new {@code ScheduledThreadPoolExecutor} with the
                 * given core pool size.
                 * @param corePoolSize the number of threads to keep in the pool, even
                 *         if they are idle, unless {#code allowCoreThreadTimeOut} is set
                 * @throws IllegalArgumentException if {#code corePoolSize < 0}
                 */
                // @ts-ignore
                constructor(corePoolSize: number /*int*/)
                /**
                 * Creates a new {@code ScheduledThreadPoolExecutor} with the
                 * given initial parameters.
                 * @param corePoolSize the number of threads to keep in the pool, even
                 *         if they are idle, unless {#code allowCoreThreadTimeOut} is set
                 * @param threadFactory the factory to use when the executor
                 *         creates a new thread
                 * @throws IllegalArgumentException if {#code corePoolSize < 0}
                 * @throws NullPointerException if {#code threadFactory} is null
                 */
                // @ts-ignore
                constructor(corePoolSize: number /*int*/, threadFactory: java.util.concurrent.ThreadFactory)
                /**
                 * Creates a new ScheduledThreadPoolExecutor with the given
                 * initial parameters.
                 * @param corePoolSize the number of threads to keep in the pool, even
                 *         if they are idle, unless {#code allowCoreThreadTimeOut} is set
                 * @param handler the handler to use when execution is blocked
                 *         because the thread bounds and queue capacities are reached
                 * @throws IllegalArgumentException if {#code corePoolSize < 0}
                 * @throws NullPointerException if {#code handler} is null
                 */
                // @ts-ignore
                constructor(corePoolSize: number /*int*/, handler: java.util.concurrent.RejectedExecutionHandler)
                /**
                 * Creates a new ScheduledThreadPoolExecutor with the given
                 * initial parameters.
                 * @param corePoolSize the number of threads to keep in the pool, even
                 *         if they are idle, unless {#code allowCoreThreadTimeOut} is set
                 * @param threadFactory the factory to use when the executor
                 *         creates a new thread
                 * @param handler the handler to use when execution is blocked
                 *         because the thread bounds and queue capacities are reached
                 * @throws IllegalArgumentException if {#code corePoolSize < 0}
                 * @throws NullPointerException if {#code threadFactory} or
                 *          {@code handler} is null
                 */
                // @ts-ignore
                constructor(corePoolSize: number /*int*/, threadFactory: java.util.concurrent.ThreadFactory, handler: java.util.concurrent.RejectedExecutionHandler)
                /**
                 * Modifies or replaces the task used to execute a runnable.
                 * This method can be used to override the concrete
                 * class used for managing internal tasks.
                 * The default implementation simply returns the given task.
                 * @param runnable the submitted Runnable
                 * @param task the task created to execute the runnable
                 * @param <V> the type of the task's result
                 * @return a task that can execute the runnable
                 * @since 1.6
                 */
                // @ts-ignore
                decorateTask<V>(runnable: java.lang.Runnable, task: java.util.concurrent.RunnableScheduledFuture<V>): java.util.concurrent.RunnableScheduledFuture<V>
                /**
                 * Modifies or replaces the task used to execute a callable.
                 * This method can be used to override the concrete
                 * class used for managing internal tasks.
                 * The default implementation simply returns the given task.
                 * @param callable the submitted Callable
                 * @param task the task created to execute the callable
                 * @param <V> the type of the task's result
                 * @return a task that can execute the callable
                 * @since 1.6
                 */
                // @ts-ignore
                decorateTask<V>(callable: java.util.concurrent.Callable<V>, task: java.util.concurrent.RunnableScheduledFuture<V>): java.util.concurrent.RunnableScheduledFuture<V>
                /**
                 * @throws RejectedExecutionException {#inheritDoc}
                 * @throws NullPointerException       {#inheritDoc}
                 */
                // @ts-ignore
                schedule(command: java.lang.Runnable, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<?>
                /**
                 * @throws RejectedExecutionException {#inheritDoc}
                 * @throws NullPointerException       {#inheritDoc}
                 */
                // @ts-ignore
                schedule<V>(callable: java.util.concurrent.Callable<V>, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<V>
                /**
                 * @throws RejectedExecutionException {#inheritDoc}
                 * @throws NullPointerException       {#inheritDoc}
                 * @throws IllegalArgumentException   {#inheritDoc}
                 */
                // @ts-ignore
                scheduleAtFixedRate(command: java.lang.Runnable, initialDelay: number /*long*/, period: number /*long*/, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<?>
                /**
                 * @throws RejectedExecutionException {#inheritDoc}
                 * @throws NullPointerException       {#inheritDoc}
                 * @throws IllegalArgumentException   {#inheritDoc}
                 */
                // @ts-ignore
                scheduleWithFixedDelay(command: java.lang.Runnable, initialDelay: number /*long*/, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<?>
                /**
                 * Executes {@code command} with zero required delay.
                 * This has effect equivalent to
                 * {@link #schedule(Runnable,long,TimeUnit) schedule(command, 0, anyUnit)}.
                 * Note that inspections of the queue and of the list returned by
                 * {@code shutdownNow} will access the zero-delayed
                 * {@link ScheduledFuture}, not the {@code command} itself.
                 * <p>A consequence of the use of {@code ScheduledFuture} objects is
                 * that {@link ThreadPoolExecutor#afterExecute afterExecute} is always
                 * called with a null second {@code Throwable} argument, even if the
                 * {@code command} terminated abruptly.  Instead, the {@code Throwable}
                 * thrown by such a task can be obtained via {@link Future#get}.
                 * @throws RejectedExecutionException at discretion of
                 *          {#code RejectedExecutionHandler}, if the task
                 *          cannot be accepted for execution because the
                 *          executor has been shut down
                 * @throws NullPointerException {#inheritDoc}
                 */
                // @ts-ignore
                execute(command: java.lang.Runnable): void
                /**
                 * @throws RejectedExecutionException {#inheritDoc}
                 * @throws NullPointerException       {#inheritDoc}
                 */
                // @ts-ignore
                submit(task: java.lang.Runnable): java.util.concurrent.Future<?>
                /**
                 * @throws RejectedExecutionException {#inheritDoc}
                 * @throws NullPointerException       {#inheritDoc}
                 */
                // @ts-ignore
                submit<T>(task: java.lang.Runnable, result: T): java.util.concurrent.Future<T>
                /**
                 * @throws RejectedExecutionException {#inheritDoc}
                 * @throws NullPointerException       {#inheritDoc}
                 */
                // @ts-ignore
                submit<T>(task: java.util.concurrent.Callable<T>): java.util.concurrent.Future<T>
                /**
                 * Sets the policy on whether to continue executing existing
                 * periodic tasks even when this executor has been {@code shutdown}.
                 * In this case, these tasks will only terminate upon
                 * {@code shutdownNow} or after setting the policy to
                 * {@code false} when already shutdown.
                 * This value is by default {@code false}.
                 * @param value if {#code true}, continue after shutdown, else don't
                 * @see #getContinueExistingPeriodicTasksAfterShutdownPolicy
                 */
                // @ts-ignore
                setContinueExistingPeriodicTasksAfterShutdownPolicy(value: boolean): void
                /**
                 * Gets the policy on whether to continue executing existing
                 * periodic tasks even when this executor has been {@code shutdown}.
                 * In this case, these tasks will only terminate upon
                 * {@code shutdownNow} or after setting the policy to
                 * {@code false} when already shutdown.
                 * This value is by default {@code false}.
                 * @return {#code true} if will continue after shutdown
                 * @see #setContinueExistingPeriodicTasksAfterShutdownPolicy
                 */
                // @ts-ignore
                getContinueExistingPeriodicTasksAfterShutdownPolicy(): boolean
                /**
                 * Sets the policy on whether to execute existing delayed
                 * tasks even when this executor has been {@code shutdown}.
                 * In this case, these tasks will only terminate upon
                 * {@code shutdownNow}, or after setting the policy to
                 * {@code false} when already shutdown.
                 * This value is by default {@code true}.
                 * @param value if {#code true}, execute after shutdown, else don't
                 * @see #getExecuteExistingDelayedTasksAfterShutdownPolicy
                 */
                // @ts-ignore
                setExecuteExistingDelayedTasksAfterShutdownPolicy(value: boolean): void
                /**
                 * Gets the policy on whether to execute existing delayed
                 * tasks even when this executor has been {@code shutdown}.
                 * In this case, these tasks will only terminate upon
                 * {@code shutdownNow}, or after setting the policy to
                 * {@code false} when already shutdown.
                 * This value is by default {@code true}.
                 * @return {#code true} if will execute after shutdown
                 * @see #setExecuteExistingDelayedTasksAfterShutdownPolicy
                 */
                // @ts-ignore
                getExecuteExistingDelayedTasksAfterShutdownPolicy(): boolean
                /**
                 * Sets the policy on whether cancelled tasks should be immediately
                 * removed from the work queue at time of cancellation.  This value is
                 * by default {@code false}.
                 * @param value if {#code true}, remove on cancellation, else don't
                 * @see #getRemoveOnCancelPolicy
                 * @since 1.7
                 */
                // @ts-ignore
                setRemoveOnCancelPolicy(value: boolean): void
                /**
                 * Gets the policy on whether cancelled tasks should be immediately
                 * removed from the work queue at time of cancellation.  This value is
                 * by default {@code false}.
                 * @return {#code true} if cancelled tasks are immediately removed
                 *          from the queue
                 * @see #setRemoveOnCancelPolicy
                 * @since 1.7
                 */
                // @ts-ignore
                getRemoveOnCancelPolicy(): boolean
                /**
                 * Initiates an orderly shutdown in which previously submitted
                 * tasks are executed, but no new tasks will be accepted.
                 * Invocation has no additional effect if already shut down.
                 * <p>This method does not wait for previously submitted tasks to
                 * complete execution.  Use {@link #awaitTermination awaitTermination}
                 * to do that.
                 * <p>If the {@code ExecuteExistingDelayedTasksAfterShutdownPolicy}
                 * has been set {@code false}, existing delayed tasks whose delays
                 * have not yet elapsed are cancelled.  And unless the {@code
                 * ContinueExistingPeriodicTasksAfterShutdownPolicy} has been set
                 * {@code true}, future executions of existing periodic tasks will
                 * be cancelled.
                 * @throws SecurityException {#inheritDoc}
                 */
                // @ts-ignore
                shutdown(): void
                /**
                 * Attempts to stop all actively executing tasks, halts the
                 * processing of waiting tasks, and returns a list of the tasks
                 * that were awaiting execution.
                 * <p>This method does not wait for actively executing tasks to
                 * terminate.  Use {@link #awaitTermination awaitTermination} to
                 * do that.
                 * <p>There are no guarantees beyond best-effort attempts to stop
                 * processing actively executing tasks.  This implementation
                 * cancels tasks via {@link Thread#interrupt}, so any task that
                 * fails to respond to interrupts may never terminate.
                 * @return list of tasks that never commenced execution.
                 *          Each element of this list is a {#link ScheduledFuture},
                 *          including those tasks submitted using {@code execute},
                 *          which are for scheduling purposes used as the basis of a
                 *          zero-delay {@code ScheduledFuture}.
                 * @throws SecurityException {#inheritDoc}
                 */
                // @ts-ignore
                shutdownNow(): java.util.List<java.lang.Runnable>
                /**
                 * Returns the task queue used by this executor.  Each element of
                 * this queue is a {@link ScheduledFuture}, including those
                 * tasks submitted using {@code execute} which are for scheduling
                 * purposes used as the basis of a zero-delay
                 * {@code ScheduledFuture}.  Iteration over this queue is
                 * <em>not</em> guaranteed to traverse tasks in the order in
                 * which they will execute.
                 * @return the task queue
                 */
                // @ts-ignore
                getQueue(): java.util.concurrent.BlockingQueue<java.lang.Runnable>
            }
        }
    }
}
