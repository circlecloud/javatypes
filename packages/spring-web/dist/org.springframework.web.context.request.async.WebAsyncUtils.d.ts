declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    namespace async {
                        /**
                         * Utility methods related to processing asynchronous web requests.
                         * @author Rossen Stoyanchev
                         * @author Juergen Hoeller
                         * @since 3.2
                         */
                        // @ts-ignore
                        abstract class WebAsyncUtils extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * The name attribute containing the {@link WebAsyncManager}.
                             */
                            // @ts-ignore
                            public static readonly WEB_ASYNC_MANAGER_ATTRIBUTE: java.lang.String | string
                            /**
                             * Obtain the {@link WebAsyncManager} for the current request, or if not
                             * found, create and associate it with the request.
                             */
                            // @ts-ignore
                            public static getAsyncManager(servletRequest: ServletRequest): org.springframework.web.context.request.async.WebAsyncManager
                            /**
                             * Create an AsyncWebRequest instance. By default, an instance of
                             * {@link StandardServletAsyncWebRequest} gets created.
                             * @param request the current request
                             * @param response the current response
                             * @return an AsyncWebRequest instance (never {#code null})
                             */
                            // @ts-ignore
                            public static createAsyncWebRequest(request: HttpServletRequest, response: HttpServletResponse): org.springframework.web.context.request.async.AsyncWebRequest
                        }
                    }
                }
            }
        }
    }
}
