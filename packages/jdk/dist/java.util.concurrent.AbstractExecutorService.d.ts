declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * Provides default implementations of {@link ExecutorService}
             * execution methods. This class implements the {@code submit},
             * {@code invokeAny} and {@code invokeAll} methods using a
             * {@link RunnableFuture} returned by {@code newTaskFor}, which defaults
             * to the {@link FutureTask} class provided in this package.  For example,
             * the implementation of {@code submit(Runnable)} creates an
             * associated {@code RunnableFuture} that is executed and
             * returned. Subclasses may override the {@code newTaskFor} methods
             * to return {@code RunnableFuture} implementations other than
             * {@code FutureTask}.
             * <p><b>Extension example</b>. Here is a sketch of a class
             * that customizes {@link ThreadPoolExecutor} to use
             * a {@code CustomTask} class instead of the default {@code FutureTask}:
             * <pre> {@code
             * public class CustomThreadPoolExecutor extends ThreadPoolExecutor {
             * static class CustomTask<V> implements RunnableFuture<V> {...}
             * protected <V> RunnableFuture<V> newTaskFor(Callable<V> c) {
             * return new CustomTask<V>(c);
             * }
             * protected <V> RunnableFuture<V> newTaskFor(Runnable r, V v) {
             * return new CustomTask<V>(r, v);
             * }
             * // ... add constructors, etc.
             * }}</pre>
             * @since 1.5
             * @author Doug Lea
             */
            // @ts-ignore
            abstract class AbstractExecutorService extends java.lang.Object implements java.util.concurrent.ExecutorService {
                // @ts-ignore
                constructor()
                /**
                 * Returns a {@code RunnableFuture} for the given runnable and default
                 * value.
                 * @param runnable the runnable task being wrapped
                 * @param value the default value for the returned future
                 * @param <T> the type of the given value
                 * @return a {#code RunnableFuture} which, when run, will run the
                 *  underlying runnable and which, as a {@code Future}, will yield
                 *  the given value as its result and provide for cancellation of
                 *  the underlying task
                 * @since 1.6
                 */
                // @ts-ignore
                newTaskFor<T>(runnable: java.lang.Runnable, value: T): java.util.concurrent.RunnableFuture<T>
                /**
                 * Returns a {@code RunnableFuture} for the given callable task.
                 * @param callable the callable task being wrapped
                 * @param <T> the type of the callable's result
                 * @return a {#code RunnableFuture} which, when run, will call the
                 *  underlying callable and which, as a {@code Future}, will yield
                 *  the callable's result as its result and provide for
                 *  cancellation of the underlying task
                 * @since 1.6
                 */
                // @ts-ignore
                newTaskFor<T>(callable: java.util.concurrent.Callable<T>): java.util.concurrent.RunnableFuture<T>
                /**
                 * @throws RejectedExecutionException {#inheritDoc}
                 * @throws NullPointerException       {#inheritDoc}
                 */
                // @ts-ignore
                public submit(task: java.lang.Runnable): java.util.concurrent.Future<any>
                /**
                 * @throws RejectedExecutionException {#inheritDoc}
                 * @throws NullPointerException       {#inheritDoc}
                 */
                // @ts-ignore
                public submit<T>(task: java.lang.Runnable, result: T): java.util.concurrent.Future<T>
                /**
                 * @throws RejectedExecutionException {#inheritDoc}
                 * @throws NullPointerException       {#inheritDoc}
                 */
                // @ts-ignore
                public submit<T>(task: java.util.concurrent.Callable<T>): java.util.concurrent.Future<T>
                // @ts-ignore
                public invokeAny<T>(tasks: java.util.Collection<any> | Array<any>): T
                // @ts-ignore
                public invokeAny<T>(tasks: java.util.Collection<any> | Array<any>, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): T
                // @ts-ignore
                public invokeAll<T>(tasks: java.util.Collection<any> | Array<any>): Array<java.util.concurrent.Future<T>>
                // @ts-ignore
                public invokeAll<T>(tasks: java.util.Collection<any> | Array<any>, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): Array<java.util.concurrent.Future<T>>
            }
        }
    }
}
