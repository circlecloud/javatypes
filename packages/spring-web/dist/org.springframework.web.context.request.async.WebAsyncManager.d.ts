declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    namespace async {
                        /**
                         * The central class for managing asynchronous request processing, mainly intended
                         * as an SPI and not typically used directly by application classes.
                         * <p>An async scenario starts with request processing as usual in a thread (T1).
                         * Concurrent request handling can be initiated by calling
                         * {@link #startCallableProcessing(Callable, Object...) startCallableProcessing} or
                         * {@link #startDeferredResultProcessing(DeferredResult, Object...) startDeferredResultProcessing},
                         * both of which produce a result in a separate thread (T2). The result is saved
                         * and the request dispatched to the container, to resume processing with the saved
                         * result in a third thread (T3). Within the dispatched thread (T3), the saved
                         * result can be accessed via {@link #getConcurrentResult()} or its presence
                         * detected via {@link #hasConcurrentResult()}.
                         * @author Rossen Stoyanchev
                         * @author Juergen Hoeller
                         * @since 3.2
                         * @see org.springframework.web.context.request.AsyncWebRequestInterceptor
                         * @see org.springframework.web.servlet.AsyncHandlerInterceptor
                         * @see org.springframework.web.filter.OncePerRequestFilter#shouldNotFilterAsyncDispatch
                         * @see org.springframework.web.filter.OncePerRequestFilter#isAsyncDispatch
                         */
                        // @ts-ignore
                        class WebAsyncManager extends java.lang.Object {
                            /**
                             * Configure the {@link AsyncWebRequest} to use. This property may be set
                             * more than once during a single request to accurately reflect the current
                             * state of the request (e.g. following a forward, request/response
                             * wrapping, etc). However, it should not be set while concurrent handling
                             * is in progress, i.e. while {@link #isConcurrentHandlingStarted()} is
                             * {@code true}.
                             * @param asyncWebRequest the web request to use
                             */
                            // @ts-ignore
                            setAsyncWebRequest(asyncWebRequest: org.springframework.web.context.request.async.AsyncWebRequest): void
                            /**
                             * Configure an AsyncTaskExecutor for use with concurrent processing via
                             * {@link #startCallableProcessing(Callable, Object...)}.
                             * <p>By default a {@link SimpleAsyncTaskExecutor} instance is used.
                             */
                            // @ts-ignore
                            setTaskExecutor(taskExecutor: AsyncTaskExecutor): void
                            /**
                             * Whether the selected handler for the current request chose to handle the
                             * request asynchronously. A return value of "true" indicates concurrent
                             * handling is under way and the response will remain open. A return value
                             * of "false" means concurrent handling was either not started or possibly
                             * that it has completed and the request was dispatched for further
                             * processing of the concurrent result.
                             */
                            // @ts-ignore
                            isConcurrentHandlingStarted(): boolean
                            /**
                             * Whether a result value exists as a result of concurrent handling.
                             */
                            // @ts-ignore
                            hasConcurrentResult(): boolean
                            /**
                             * Provides access to the result from concurrent handling.
                             * @return an Object, possibly an {#code Exception} or {@code Throwable} if
                             *  concurrent handling raised one.
                             * @see #clearConcurrentResult()
                             */
                            // @ts-ignore
                            getConcurrentResult(): java.lang.Object
                            /**
                             * Provides access to additional processing context saved at the start of
                             * concurrent handling.
                             * @see #clearConcurrentResult()
                             */
                            // @ts-ignore
                            getConcurrentResultContext(): java.lang.Object[]
                            /**
                             * Get the {@link CallableProcessingInterceptor} registered under the given key.
                             * @param key the key
                             * @return the interceptor registered under that key, or {#code null} if none
                             */
                            // @ts-ignore
                            getCallableInterceptor(key: any): org.springframework.web.context.request.async.CallableProcessingInterceptor
                            /**
                             * Get the {@link DeferredResultProcessingInterceptor} registered under the given key.
                             * @param key the key
                             * @return the interceptor registered under that key, or {#code null} if none
                             */
                            // @ts-ignore
                            getDeferredResultInterceptor(key: any): org.springframework.web.context.request.async.DeferredResultProcessingInterceptor
                            /**
                             * Register a {@link CallableProcessingInterceptor} under the given key.
                             * @param key the key
                             * @param interceptor the interceptor to register
                             */
                            // @ts-ignore
                            registerCallableInterceptor(key: any, interceptor: org.springframework.web.context.request.async.CallableProcessingInterceptor): void
                            /**
                             * Register a {@link CallableProcessingInterceptor} without a key.
                             * The key is derived from the class name and hashcode.
                             * @param interceptors one or more interceptors to register
                             */
                            // @ts-ignore
                            registerCallableInterceptors(...interceptors: org.springframework.web.context.request.async.CallableProcessingInterceptor[]): void
                            /**
                             * Register a {@link DeferredResultProcessingInterceptor} under the given key.
                             * @param key the key
                             * @param interceptor the interceptor to register
                             */
                            // @ts-ignore
                            registerDeferredResultInterceptor(key: any, interceptor: org.springframework.web.context.request.async.DeferredResultProcessingInterceptor): void
                            /**
                             * Register one or more {@link DeferredResultProcessingInterceptor DeferredResultProcessingInterceptors} without a specified key.
                             * The default key is derived from the interceptor class name and hash code.
                             * @param interceptors one or more interceptors to register
                             */
                            // @ts-ignore
                            registerDeferredResultInterceptors(...interceptors: org.springframework.web.context.request.async.DeferredResultProcessingInterceptor[]): void
                            /**
                             * Clear {@linkplain #getConcurrentResult() concurrentResult} and
                             * {@linkplain #getConcurrentResultContext() concurrentResultContext}.
                             */
                            // @ts-ignore
                            clearConcurrentResult(): void
                            /**
                             * Start concurrent request processing and execute the given task with an
                             * {@link #setTaskExecutor(AsyncTaskExecutor) AsyncTaskExecutor}. The result
                             * from the task execution is saved and the request dispatched in order to
                             * resume processing of that result. If the task raises an Exception then
                             * the saved result will be the raised Exception.
                             * @param callable a unit of work to be executed asynchronously
                             * @param processingContext additional context to save that can be accessed
                             *  via {#link #getConcurrentResultContext()}
                             * @throws Exception if concurrent processing failed to start
                             * @see #getConcurrentResult()
                             * @see #getConcurrentResultContext()
                             */
                            // @ts-ignore
                            startCallableProcessing(callable: java.util.concurrent.Callable<any>, ...processingContext: any[]): void
                            /**
                             * Use the given {@link WebAsyncTask} to configure the task executor as well as
                             * the timeout value of the {@code AsyncWebRequest} before delegating to
                             * {@link #startCallableProcessing(Callable, Object...)}.
                             * @param webAsyncTask a WebAsyncTask containing the target {#code Callable}
                             * @param processingContext additional context to save that can be accessed
                             *  via {#link #getConcurrentResultContext()}
                             * @throws Exception if concurrent processing failed to start
                             */
                            // @ts-ignore
                            startCallableProcessing(webAsyncTask: org.springframework.web.context.request.async.WebAsyncTask<any>, ...processingContext: any[]): void
                            /**
                             * Start concurrent request processing and initialize the given
                             * {@link DeferredResult} with a {@link DeferredResultHandler} that saves
                             * the result and dispatches the request to resume processing of that
                             * result. The {@code AsyncWebRequest} is also updated with a completion
                             * handler that expires the {@code DeferredResult} and a timeout handler
                             * assuming the {@code DeferredResult} has a default timeout result.
                             * @param deferredResult the DeferredResult instance to initialize
                             * @param processingContext additional context to save that can be accessed
                             *  via {#link #getConcurrentResultContext()}
                             * @throws Exception if concurrent processing failed to start
                             * @see #getConcurrentResult()
                             * @see #getConcurrentResultContext()
                             */
                            // @ts-ignore
                            startDeferredResultProcessing(deferredResult: org.springframework.web.context.request.async.DeferredResult<any>, ...processingContext: any[]): void
                        }
                    }
                }
            }
        }
    }
}
