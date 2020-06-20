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
                        constructor(source: any, requestUrl: string, clientAddress: string, method: string, servletName: string, sessionId: string, userName: string, processingTimeMillis: number /*long*/)
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
                        constructor(source: any, requestUrl: string, clientAddress: string, method: string, servletName: string, sessionId: string, userName: string, processingTimeMillis: number /*long*/, failureCause: Error)
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
                        constructor(source: any, requestUrl: string, clientAddress: string, method: string, servletName: string, sessionId: string, userName: string, processingTimeMillis: number /*long*/, failureCause: Error, statusCode: number /*int*/)
                        /**
                         * Return the URL of the request.
                         */
                        // @ts-ignore
                        getRequestUrl(): java.lang.String
                        /**
                         * Return the IP address that the request came from.
                         */
                        // @ts-ignore
                        getClientAddress(): java.lang.String
                        /**
                         * Return the HTTP method of the request (usually GET or POST).
                         */
                        // @ts-ignore
                        getMethod(): java.lang.String
                        /**
                         * Return the name of the servlet that handled the request.
                         */
                        // @ts-ignore
                        getServletName(): java.lang.String
                        /**
                         * Return the HTTP status code of the response or -1 if the status
                         * code is not available.
                         * @since 4.1
                         */
                        // @ts-ignore
                        getStatusCode(): int
                        // @ts-ignore
                        getShortDescription(): java.lang.String
                        // @ts-ignore
                        getDescription(): java.lang.String
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
