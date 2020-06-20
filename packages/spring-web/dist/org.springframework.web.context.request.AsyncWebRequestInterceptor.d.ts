declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    /**
                     * Extends {@code WebRequestInterceptor} with a callback method invoked during
                     * asynchronous request handling.
                     * <p>When a handler starts asynchronous request handling, the DispatcherServlet
                     * exits without invoking {@code postHandle} and {@code afterCompletion}, as it
                     * normally does, since the results of request handling (e.g. ModelAndView) are
                     * not available in the current thread and handling is not yet complete.
                     * In such scenarios, the {@link #afterConcurrentHandlingStarted(WebRequest)}
                     * method is invoked instead allowing implementations to perform tasks such as
                     * cleaning up thread bound attributes.
                     * <p>When asynchronous handling completes, the request is dispatched to the
                     * container for further processing. At this stage the DispatcherServlet invokes
                     * {@code preHandle}, {@code postHandle} and {@code afterCompletion} as usual.
                     * @author Rossen Stoyanchev
                     * @since 3.2
                     * @see org.springframework.web.context.request.async.WebAsyncManager
                     */
                    // @ts-ignore
                    interface AsyncWebRequestInterceptor extends org.springframework.web.context.request.WebRequestInterceptor {
                        /**
                         * Called instead of {@code postHandle} and {@code afterCompletion}, when the
                         * handler started handling the request concurrently.
                         * @param request the current request
                         */
                        // @ts-ignore
                        afterConcurrentHandlingStarted(request: org.springframework.web.context.request.WebRequest): void
                    }
                }
            }
        }
    }
}
