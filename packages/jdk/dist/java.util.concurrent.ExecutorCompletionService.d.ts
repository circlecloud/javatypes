declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * A {@link CompletionService} that uses a supplied {@link Executor}
             * to execute tasks.  This class arranges that submitted tasks are,
             * upon completion, placed on a queue accessible using {@code take}.
             * The class is lightweight enough to be suitable for transient use
             * when processing groups of tasks.
             * <p>
             * <b>Usage Examples.</b>
             * Suppose you have a set of solvers for a certain problem, each
             * returning a value of some type {@code Result}, and would like to
             * run them concurrently, processing the results of each of them that
             * return a non-null value, in some method {@code use(Result r)}. You
             * could write this as:
             * <pre> {@code
             * void solve(Executor e,
             * Collection<Callable<Result>> solvers)
             * throws InterruptedException, ExecutionException {
             * CompletionService<Result> ecs
             * = new ExecutorCompletionService<Result>(e);
             * for (Callable<Result> s : solvers)
             * ecs.submit(s);
             * int n = solvers.size();
             * for (int i = 0; i < n; ++i) {
             * Result r = ecs.take().get();
             * if (r != null)
             * use(r);
             * }
             * }}</pre>
             * Suppose instead that you would like to use the first non-null result
             * of the set of tasks, ignoring any that encounter exceptions,
             * and cancelling all other tasks when the first one is ready:
             * <pre> {@code
             * void solve(Executor e,
             * Collection<Callable<Result>> solvers)
             * throws InterruptedException {
             * CompletionService<Result> ecs
             * = new ExecutorCompletionService<Result>(e);
             * int n = solvers.size();
             * List<Future<Result>> futures
             * = new ArrayList<Future<Result>>(n);
             * Result result = null;
             * try {
             * for (Callable<Result> s : solvers)
             * futures.add(ecs.submit(s));
             * for (int i = 0; i < n; ++i) {
             * try {
             * Result r = ecs.take().get();
             * if (r != null) {
             * result = r;
             * break;
             * }
             * } catch (ExecutionException ignore) {}
             * }
             * }
             * finally {
             * for (Future<Result> f : futures)
             * f.cancel(true);
             * }
             * if (result != null)
             * use(result);
             * }}</pre>
             */
            // @ts-ignore
            class ExecutorCompletionService<V> extends java.lang.Object implements java.util.concurrent.CompletionService<V> {
                /**
                 * Creates an ExecutorCompletionService using the supplied
                 * executor for base task execution and a
                 * {@link LinkedBlockingQueue} as a completion queue.
                 * @param executor the executor to use
                 * @throws NullPointerException if executor is {#code null}
                 */
                // @ts-ignore
                constructor(executor: java.util.concurrent.Executor)
                /**
                 * Creates an ExecutorCompletionService using the supplied
                 * executor for base task execution and the supplied queue as its
                 * completion queue.
                 * @param executor the executor to use
                 * @param completionQueue the queue to use as the completion queue
                 *         normally one dedicated for use by this service. This
                 *         queue is treated as unbounded -- failed attempted
                 *         {#code Queue.add} operations for completed tasks cause
                 *         them not to be retrievable.
                 * @throws NullPointerException if executor or completionQueue are {#code null}
                 */
                // @ts-ignore
                constructor(executor: java.util.concurrent.Executor, completionQueue: java.util.concurrent.BlockingQueue<java.util.concurrent.Future<V>>)
                // @ts-ignore
                public submit(task: java.util.concurrent.Callable<V>): java.util.concurrent.Future<V>
                // @ts-ignore
                public submit(task: java.lang.Runnable, result: V): java.util.concurrent.Future<V>
                // @ts-ignore
                public take(): java.util.concurrent.Future<V>
                // @ts-ignore
                public poll(): java.util.concurrent.Future<V>
                // @ts-ignore
                public poll(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): java.util.concurrent.Future<V>
            }
        }
    }
}
