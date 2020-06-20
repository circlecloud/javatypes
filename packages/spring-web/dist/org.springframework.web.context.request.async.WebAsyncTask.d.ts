declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    namespace async {
                        /**
                         * Holder for a {@link Callable}, a timeout value, and a task executor.
                         * @author Rossen Stoyanchev
                         * @author Juergen Hoeller
                         * @since 3.2
                         * @param <V> the value type
                         */
                        // @ts-ignore
                        class WebAsyncTask<V> extends java.lang.Object {
                            /**
                             * Create a {@code WebAsyncTask} wrapping the given {@link Callable}.
                             * @param callable the callable for concurrent handling
                             */
                            // @ts-ignore
                            constructor(callable: java.util.concurrent.Callable<V>)
                            /**
                             * Create a {@code WebAsyncTask} with a timeout value and a {@link Callable}.
                             * @param timeout a timeout value in milliseconds
                             * @param callable the callable for concurrent handling
                             */
                            // @ts-ignore
                            constructor(timeout: number /*long*/, callable: java.util.concurrent.Callable<V>)
                            /**
                             * Create a {@code WebAsyncTask} with a timeout value, an executor name, and a {@link Callable}.
                             * @param timeout the timeout value in milliseconds; ignored if {#code null}
                             * @param executorName the name of an executor bean to use
                             * @param callable the callable for concurrent handling
                             */
                            // @ts-ignore
                            constructor(timeout: number, executorName: string, callable: java.util.concurrent.Callable<V>)
                            /**
                             * Create a {@code WebAsyncTask} with a timeout value, an executor instance, and a Callable.
                             * @param timeout the timeout value in milliseconds; ignored if {#code null}
                             * @param executor the executor to use
                             * @param callable the callable for concurrent handling
                             */
                            // @ts-ignore
                            constructor(timeout: number, executor: AsyncTaskExecutor, callable: java.util.concurrent.Callable<V>)
                            /**
                             * Return the {@link Callable} to use for concurrent handling (never {@code null}).
                             */
                            // @ts-ignore
                            getCallable(): java.util.concurrent.Callable<?>
                            /**
                             * Return the timeout value in milliseconds, or {@code null} if no timeout is set.
                             */
                            // @ts-ignore
                            getTimeout(): java.lang.Long
                            /**
                             * A {@link BeanFactory} to use for resolving an executor name.
                             * <p>This factory reference will automatically be set when
                             * {@code WebAsyncTask} is used within a Spring MVC controller.
                             */
                            // @ts-ignore
                            setBeanFactory(beanFactory: BeanFactory): void
                            /**
                             * Return the AsyncTaskExecutor to use for concurrent handling,
                             * or {@code null} if none specified.
                             */
                            // @ts-ignore
                            getExecutor(): AsyncTaskExecutor
                            /**
                             * Register code to invoke when the async request times out.
                             * <p>This method is called from a container thread when an async request times
                             * out before the {@code Callable} has completed. The callback is executed in
                             * the same thread and therefore should return without blocking. It may return
                             * an alternative value to use, including an {@link Exception} or return
                             * {@link CallableProcessingInterceptor#RESULT_NONE RESULT_NONE}.
                             */
                            // @ts-ignore
                            onTimeout(callback: java.util.concurrent.Callable<V>): void
                            /**
                             * Register code to invoke for an error during async request processing.
                             * <p>This method is called from a container thread when an error occurred
                             * while processing an async request before the {@code Callable} has
                             * completed. The callback is executed in the same thread and therefore
                             * should return without blocking. It may return an alternative value to
                             * use, including an {@link Exception} or return
                             * {@link CallableProcessingInterceptor#RESULT_NONE RESULT_NONE}.
                             * @since 5.0
                             */
                            // @ts-ignore
                            onError(callback: java.util.concurrent.Callable<V>): void
                            /**
                             * Register code to invoke when the async request completes.
                             * <p>This method is called from a container thread when an async request
                             * completed for any reason, including timeout and network error.
                             */
                            // @ts-ignore
                            onCompletion(callback: java.lang.Runnable): void
                        }
                    }
                }
            }
        }
    }
}
