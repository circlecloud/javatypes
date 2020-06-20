declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace reactive {
                    /**
                     * {@link ServletHttpHandlerAdapter} extension that uses Jetty APIs for writing
                     * to the response with {@link ByteBuffer}.
                     * @author Violeta Georgieva
                     * @author Brian Clozel
                     * @since 5.0
                     * @see org.springframework.web.server.adapter.AbstractReactiveWebInitializer
                     */
                    // @ts-ignore
                    class JettyHttpHandlerAdapter extends org.springframework.http.server.reactive.ServletHttpHandlerAdapter {
                        // @ts-ignore
                        constructor(httpHandler: org.springframework.http.server.reactive.HttpHandler)
                        // @ts-ignore
                        createRequest(request: HttpServletRequest, context: AsyncContext): org.springframework.http.server.reactive.ServletServerHttpRequest
                        // @ts-ignore
                        createResponse(response: HttpServletResponse, context: AsyncContext, request: org.springframework.http.server.reactive.ServletServerHttpRequest): org.springframework.http.server.reactive.ServletServerHttpResponse
                    }
                }
            }
        }
    }
}
