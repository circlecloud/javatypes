declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    /**
                     * Interface for general web request interception. Allows for being applied
                     * to Servlet request by building on the {@link WebRequest} abstraction.
                     * <p>This interface assumes MVC-style request processing: A handler gets executed,
                     * exposes a set of model objects, then a view gets rendered based on that model.
                     * Alternatively, a handler may also process the request completely, with no
                     * view to be rendered.
                     * <p>In an async processing scenario, the handler may be executed in a separate
                     * thread while the main thread exits without rendering or invoking the
                     * {@code postHandle} and {@code afterCompletion} callbacks. When concurrent
                     * handler execution completes, the request is dispatched back in order to
                     * proceed with rendering the model and all methods of this contract are invoked
                     * again. For further options and comments see
                     * {@code org.springframework.web.context.request.async.AsyncWebRequestInterceptor}
                     * <p>This interface is deliberately minimalistic to keep the dependencies of
                     * generic request interceptors as minimal as feasible.
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see ServletWebRequest
                     * @see org.springframework.web.servlet.DispatcherServlet
                     * @see org.springframework.web.servlet.handler.AbstractHandlerMapping#setInterceptors
                     * @see org.springframework.web.servlet.HandlerInterceptor
                     */
                    // @ts-ignore
                    interface WebRequestInterceptor {
                        /**
                         * Intercept the execution of a request handler <i>before</i> its invocation.
                         * <p>Allows for preparing context resources (such as a Hibernate Session)
                         * and expose them as request attributes or as thread-local objects.
                         * @param request the current web request
                         * @throws Exception in case of errors
                         */
                        // @ts-ignore
                        preHandle(request: org.springframework.web.context.request.WebRequest): void
                        /**
                         * Intercept the execution of a request handler <i>after</i> its successful
                         * invocation, right before view rendering (if any).
                         * <p>Allows for modifying context resources after successful handler
                         * execution (for example, flushing a Hibernate Session).
                         * @param request the current web request
                         * @param model the map of model objects that will be exposed to the view
                         *  (may be {#code null}). Can be used to analyze the exposed model
                         *  and/or to add further model attributes, if desired.
                         * @throws Exception in case of errors
                         */
                        // @ts-ignore
                        postHandle(request: org.springframework.web.context.request.WebRequest, model: ModelMap): void
                        /**
                         * Callback after completion of request processing, that is, after rendering
                         * the view. Will be called on any outcome of handler execution, thus allows
                         * for proper resource cleanup.
                         * <p>Note: Will only be called if this interceptor's {@code preHandle}
                         * method has successfully completed!
                         * @param request the current web request
                         * @param ex exception thrown on handler execution, if any
                         * @throws Exception in case of errors
                         */
                        // @ts-ignore
                        afterCompletion(request: org.springframework.web.context.request.WebRequest, ex: java.lang.Exception): void
                    }
                }
            }
        }
    }
}
