declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace reactive {
                    /**
                     * {@link ServletHttpHandlerAdapter} extension that uses Tomcat APIs for reading
                     * from the request and writing to the response with {@link ByteBuffer}.
                     * @author Violeta Georgieva
                     * @author Brian Clozel
                     * @since 5.0
                     * @see org.springframework.web.server.adapter.AbstractReactiveWebInitializer
                     */
                    // @ts-ignore
                    class TomcatHttpHandlerAdapter extends org.springframework.http.server.reactive.ServletHttpHandlerAdapter {
                        // @ts-ignore
                        constructor(httpHandler: org.springframework.http.server.reactive.HttpHandler)
                        // @ts-ignore
                        createRequest(request: HttpServletRequest, asyncContext: AsyncContext): org.springframework.http.server.reactive.ServletServerHttpRequest
                        // @ts-ignore
                        createResponse(response: HttpServletResponse, asyncContext: AsyncContext, request: org.springframework.http.server.reactive.ServletServerHttpRequest): org.springframework.http.server.reactive.ServletServerHttpResponse
                    }
                }
            }
        }
    }
}
