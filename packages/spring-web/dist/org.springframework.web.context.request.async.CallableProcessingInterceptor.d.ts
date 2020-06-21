declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    namespace async {
                        /**
                         * Intercepts concurrent request handling, where the concurrent result is
                         * obtained by executing a {@link Callable} on behalf of the application with
                         * an {@link AsyncTaskExecutor}.
                         * <p>A {@code CallableProcessingInterceptor} is invoked before and after the
                         * invocation of the {@code Callable} task in the asynchronous thread, as well
                         * as on timeout/error from a container thread, or after completing for any reason
                         * including a timeout or network error.
                         * <p>As a general rule exceptions raised by interceptor methods will cause
                         * async processing to resume by dispatching back to the container and using
                         * the Exception instance as the concurrent result. Such exceptions will then
                         * be processed through the {@code HandlerExceptionResolver} mechanism.
                         * <p>The {@link #handleTimeout(NativeWebRequest, Callable) handleTimeout} method
                         * can select a value to be used to resume processing.
                         * @author Rossen Stoyanchev
                         * @author Rob Winch
                         * @since 3.2
                         */
                        // @ts-ignore
                        interface CallableProcessingInterceptor {
                            /**
                             * Constant indicating that no result has been determined by this
                             * interceptor, giving subsequent interceptors a chance.
                             * @see #handleTimeout
                             * @see #handleError
                             */
                            // @ts-ignore
                            readonly RESULT_NONE: java.lang.Object | any
                            /**
                             * Constant indicating that the response has been handled by this interceptor
                             * without a result and that no further interceptors are to be invoked.
                             * @see #handleTimeout
                             * @see #handleError
                             */
                            // @ts-ignore
                            readonly RESPONSE_HANDLED: java.lang.Object | any
                            /**
                             * Invoked <em>before</em> the start of concurrent handling in the original
                             * thread in which the {@code Callable} is submitted for concurrent handling.
                             * <p>This is useful for capturing the state of the current thread just prior to
                             * invoking the {@link Callable}. Once the state is captured, it can then be
                             * transferred to the new {@link Thread} in
                             * {@link #preProcess(NativeWebRequest, Callable)}. Capturing the state of
                             * Spring Security's SecurityContextHolder and migrating it to the new Thread
                             * is a concrete example of where this is useful.
                             * <p>The default implementation is empty.
                             * @param request the current request
                             * @param task the task for the current async request
                             * @throws Exception in case of errors
                             */
                            // @ts-ignore
                            beforeConcurrentHandling<T>(request: org.springframework.web.context.request.NativeWebRequest, task: java.util.concurrent.Callable<T>): void
                            /**
                             * Invoked <em>after</em> the start of concurrent handling in the async
                             * thread in which the {@code Callable} is executed and <em>before</em> the
                             * actual invocation of the {@code Callable}.
                             * <p>The default implementation is empty.
                             * @param request the current request
                             * @param task the task for the current async request
                             * @throws Exception in case of errors
                             */
                            // @ts-ignore
                            preProcess<T>(request: org.springframework.web.context.request.NativeWebRequest, task: java.util.concurrent.Callable<T>): void
                            /**
                             * Invoked <em>after</em> the {@code Callable} has produced a result in the
                             * async thread in which the {@code Callable} is executed. This method may
                             * be invoked later than {@code afterTimeout} or {@code afterCompletion}
                             * depending on when the {@code Callable} finishes processing.
                             * <p>The default implementation is empty.
                             * @param request the current request
                             * @param task the task for the current async request
                             * @param concurrentResult the result of concurrent processing, which could
                             *  be a {#link Throwable} if the {@code Callable} raised an exception
                             * @throws Exception in case of errors
                             */
                            // @ts-ignore
                            postProcess<T>(request: org.springframework.web.context.request.NativeWebRequest, task: java.util.concurrent.Callable<T>, concurrentResult: java.lang.Object | any): void
                            /**
                             * Invoked from a container thread when the async request times out before
                             * the {@code Callable} task completes. Implementations may return a value,
                             * including an {@link Exception}, to use instead of the value the
                             * {@link Callable} did not return in time.
                             * <p>The default implementation always returns {@link #RESULT_NONE}.
                             * @param request the current request
                             * @param task the task for the current async request
                             * @return a concurrent result value; if the value is anything other than
                             *  {#link #RESULT_NONE} or {@link #RESPONSE_HANDLED}, concurrent processing
                             *  is resumed and subsequent interceptors are not invoked
                             * @throws Exception in case of errors
                             */
                            // @ts-ignore
                            handleTimeout<T>(request: org.springframework.web.context.request.NativeWebRequest, task: java.util.concurrent.Callable<T>): any
                            /**
                             * Invoked from a container thread when an error occurred while processing
                             * the async request before the {@code Callable} task completes.
                             * Implementations may return a value, including an {@link Exception}, to
                             * use instead of the value the {@link Callable} did not return in time.
                             * <p>The default implementation always returns {@link #RESULT_NONE}.
                             * @param request the current request
                             * @param task the task for the current async request
                             * @param t the error that occurred while request processing
                             * @return a concurrent result value; if the value is anything other than
                             *  {#link #RESULT_NONE} or {@link #RESPONSE_HANDLED}, concurrent processing
                             *  is resumed and subsequent interceptors are not invoked
                             * @throws Exception in case of errors
                             * @since 5.0
                             */
                            // @ts-ignore
                            handleError<T>(request: org.springframework.web.context.request.NativeWebRequest, task: java.util.concurrent.Callable<T>, t: java.lang.Throwable | Error): any
                            /**
                             * Invoked from a container thread when async processing completes for any
                             * reason including timeout or network error.
                             * <p>The default implementation is empty.
                             * @param request the current request
                             * @param task the task for the current async request
                             * @throws Exception in case of errors
                             */
                            // @ts-ignore
                            afterCompletion<T>(request: org.springframework.web.context.request.NativeWebRequest, task: java.util.concurrent.Callable<T>): void
                        }
                    }
                }
            }
        }
    }
}
