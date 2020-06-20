declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace reactive {
                    /**
                     * Wraps another {@link ServerHttpResponse} and delegates all methods to it.
                     * Sub-classes can override specific methods selectively.
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    class ServerHttpResponseDecorator extends java.lang.Object implements org.springframework.http.server.reactive.ServerHttpResponse {
                        // @ts-ignore
                        constructor(delegate: org.springframework.http.server.reactive.ServerHttpResponse)
                        // @ts-ignore
                        getDelegate(): org.springframework.http.server.reactive.ServerHttpResponse
                        // @ts-ignore
                        setStatusCode(status: org.springframework.http.HttpStatus): boolean
                        // @ts-ignore
                        getStatusCode(): org.springframework.http.HttpStatus
                        // @ts-ignore
                        getHeaders(): org.springframework.http.HttpHeaders
                        // @ts-ignore
                        getCookies(): <any>
                        // @ts-ignore
                        addCookie(cookie: org.springframework.http.ResponseCookie): void
                        // @ts-ignore
                        bufferFactory(): DataBufferFactory
                        // @ts-ignore
                        beforeCommit(action: java.util.function.Supplier<<any>> | java.util.function$.Supplier<<any>>): void
                        // @ts-ignore
                        isCommitted(): boolean
                        // @ts-ignore
                        writeWith(body: object): <any>
                        // @ts-ignore
                        writeAndFlushWith(body: object): <any>
                        // @ts-ignore
                        setComplete(): <any>
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
