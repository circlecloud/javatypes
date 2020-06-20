declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    namespace async {
                        /**
                         * A Servlet 3.0 implementation of {@link AsyncWebRequest}.
                         * <p>The servlet and all filters involved in an async request must have async
                         * support enabled using the Servlet API or by adding an
                         * <code>&ltasync-supported&gttrue&lt/async-supported&gt</code> element to servlet and filter
                         * declarations in {@code web.xml}.
                         * @author Rossen Stoyanchev
                         * @since 3.2
                         */
                        // @ts-ignore
                        class StandardServletAsyncWebRequest extends org.springframework.web.context.request.ServletWebRequest implements org.springframework.web.context.request.async.AsyncWebRequest {
                            /**
                             * Create a new instance for the given request/response pair.
                             * @param request current HTTP request
                             * @param response current HTTP response
                             */
                            // @ts-ignore
                            constructor(request: HttpServletRequest, response: HttpServletResponse)
                            /**
                             * In Servlet 3 async processing, the timeout period begins after the
                             * container processing thread has exited.
                             */
                            // @ts-ignore
                            setTimeout(timeout: number): void
                            // @ts-ignore
                            addTimeoutHandler(timeoutHandler: java.lang.Runnable): void
                            // @ts-ignore
                            addErrorHandler(exceptionHandler: java.util.function.Consumer<java.lang.Throwable> | java.util.function$.Consumer<java.lang.Throwable>): void
                            // @ts-ignore
                            addCompletionHandler(runnable: java.lang.Runnable): void
                            // @ts-ignore
                            isAsyncStarted(): boolean
                            /**
                             * Whether async request processing has completed.
                             * <p>It is important to avoid use of request and response objects after async
                             * processing has completed. Servlet containers often re-use them.
                             */
                            // @ts-ignore
                            isAsyncComplete(): boolean
                            // @ts-ignore
                            startAsync(): void
                            // @ts-ignore
                            dispatch(): void
                            // @ts-ignore
                            onStartAsync(event: AsyncEvent): void
                            // @ts-ignore
                            onError(event: AsyncEvent): void
                            // @ts-ignore
                            onTimeout(event: AsyncEvent): void
                            // @ts-ignore
                            onComplete(event: AsyncEvent): void
                        }
                    }
                }
            }
        }
    }
}
