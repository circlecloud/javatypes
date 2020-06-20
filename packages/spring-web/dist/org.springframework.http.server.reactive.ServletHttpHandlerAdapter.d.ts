declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace reactive {
                    /**
                     * Adapt {@link HttpHandler} to an {@link HttpServlet} using Servlet Async support
                     * and Servlet 3.1 non-blocking I/O.
                     * @author Arjen Poutsma
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     * @see org.springframework.web.server.adapter.AbstractReactiveWebInitializer
                     */
                    // @ts-ignore
                    class ServletHttpHandlerAdapter extends java.lang.Object {
                        // @ts-ignore
                        constructor(httpHandler: org.springframework.http.server.reactive.HttpHandler)
                        /**
                         * Set the size of the input buffer used for reading in bytes.
                         * <p>By default this is set to 8192.
                         */
                        // @ts-ignore
                        setBufferSize(bufferSize: number /*int*/): void
                        /**
                         * Return the configured input buffer size.
                         */
                        // @ts-ignore
                        getBufferSize(): int
                        /**
                         * Return the Servlet path under which the Servlet is deployed by checking
                         * the Servlet registration from {@link #init(ServletConfig)}.
                         * @return the path, or an empty string if the Servlet is deployed without
                         *  a prefix (i.e. "/" or "/*"), or {#code null} if this method is invoked
                         *  before the {@link #init(ServletConfig)} Servlet container callback.
                         */
                        // @ts-ignore
                        getServletPath(): java.lang.String
                        // @ts-ignore
                        setDataBufferFactory(dataBufferFactory: DataBufferFactory): void
                        // @ts-ignore
                        getDataBufferFactory(): DataBufferFactory
                        // @ts-ignore
                        init(config: ServletConfig): void
                        // @ts-ignore
                        service(request: ServletRequest, response: ServletResponse): void
                        // @ts-ignore
                        createRequest(request: HttpServletRequest, context: AsyncContext): org.springframework.http.server.reactive.ServletServerHttpRequest
                        // @ts-ignore
                        createResponse(response: HttpServletResponse, context: AsyncContext, request: org.springframework.http.server.reactive.ServletServerHttpRequest): org.springframework.http.server.reactive.ServletServerHttpResponse
                        // @ts-ignore
                        getServletInfo(): java.lang.String
                        // @ts-ignore
                        getServletConfig(): ServletConfig
                        // @ts-ignore
                        destroy(): void
                    }
                }
            }
        }
    }
}
