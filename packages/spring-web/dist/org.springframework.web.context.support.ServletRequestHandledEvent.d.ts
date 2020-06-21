declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * Servlet-specific subclass of RequestHandledEvent,
                     * adding servlet-specific context information.
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see org.springframework.web.servlet.FrameworkServlet
                     * @see org.springframework.context.ApplicationContext#publishEvent
                     */
                    // @ts-ignore
                    class ServletRequestHandledEvent extends org.springframework.web.context.support.RequestHandledEvent {
                        /**
                         * Create a new ServletRequestHandledEvent.
                         * @param source the component that published the event
                         * @param requestUrl the URL of the request
                         * @param clientAddress the IP address that the request came from
                         * @param method the HTTP method of the request (usually GET or POST)
                         * @param servletName the name of the servlet that handled the request
                         * @param sessionId the id of the HTTP session, if any
                         * @param userName the name of the user that was associated with the
                         *  request, if any (usually the UserPrincipal)
                         * @param processingTimeMillis the processing time of the request in milliseconds
                         */
                        // @ts-ignore
                        constructor(source: java.lang.Object | any, requestUrl: java.lang.String | string, clientAddress: java.lang.String | string, method: java.lang.String | string, servletName: java.lang.String | string, sessionId: java.lang.String | string, userName: java.lang.String | string, processingTimeMillis: number /*long*/)
                        /**
                         * Create a new ServletRequestHandledEvent.
                         * @param source the component that published the event
                         * @param requestUrl the URL of the request
                         * @param clientAddress the IP address that the request came from
                         * @param method the HTTP method of the request (usually GET or POST)
                         * @param servletName the name of the servlet that handled the request
                         * @param sessionId the id of the HTTP session, if any
                         * @param userName the name of the user that was associated with the
                         *  request, if any (usually the UserPrincipal)
                         * @param processingTimeMillis the processing time of the request in milliseconds
                         * @param failureCause the cause of failure, if any
                         */
                        // @ts-ignore
                        constructor(source: java.lang.Object | any, requestUrl: java.lang.String | string, clientAddress: java.lang.String | string, method: java.lang.String | string, servletName: java.lang.String | string, sessionId: java.lang.String | string, userName: java.lang.String | string, processingTimeMillis: number /*long*/, failureCause: java.lang.Throwable | Error)
                        /**
                         * Create a new ServletRequestHandledEvent.
                         * @param source the component that published the event
                         * @param requestUrl the URL of the request
                         * @param clientAddress the IP address that the request came from
                         * @param method the HTTP method of the request (usually GET or POST)
                         * @param servletName the name of the servlet that handled the request
                         * @param sessionId the id of the HTTP session, if any
                         * @param userName the name of the user that was associated with the
                         *  request, if any (usually the UserPrincipal)
                         * @param processingTimeMillis the processing time of the request in milliseconds
                         * @param failureCause the cause of failure, if any
                         * @param statusCode the HTTP status code of the response
                         */
                        // @ts-ignore
                        constructor(source: java.lang.Object | any, requestUrl: java.lang.String | string, clientAddress: java.lang.String | string, method: java.lang.String | string, servletName: java.lang.String | string, sessionId: java.lang.String | string, userName: java.lang.String | string, processingTimeMillis: number /*long*/, failureCause: java.lang.Throwable | Error, statusCode: number /*int*/)
                        /**
                         * Return the URL of the request.
                         */
                        // @ts-ignore
                        public getRequestUrl(): string
                        /**
                         * Return the IP address that the request came from.
                         */
                        // @ts-ignore
                        public getClientAddress(): string
                        /**
                         * Return the HTTP method of the request (usually GET or POST).
                         */
                        // @ts-ignore
                        public getMethod(): string
                        /**
                         * Return the name of the servlet that handled the request.
                         */
                        // @ts-ignore
                        public getServletName(): string
                        /**
                         * Return the HTTP status code of the response or -1 if the status
                         * code is not available.
                         * @since 4.1
                         */
                        // @ts-ignore
                        public getStatusCode(): number /*int*/
                        // @ts-ignore
                        public getShortDescription(): string
                        // @ts-ignore
                        public getDescription(): string
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
