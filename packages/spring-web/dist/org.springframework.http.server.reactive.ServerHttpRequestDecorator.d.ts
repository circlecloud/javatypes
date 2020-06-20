declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace reactive {
                    /**
                     * Wraps another {@link ServerHttpRequest} and delegates all methods to it.
                     * Sub-classes can override specific methods selectively.
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    class ServerHttpRequestDecorator extends java.lang.Object implements org.springframework.http.server.reactive.ServerHttpRequest {
                        // @ts-ignore
                        constructor(delegate: org.springframework.http.server.reactive.ServerHttpRequest)
                        // @ts-ignore
                        getDelegate(): org.springframework.http.server.reactive.ServerHttpRequest
                        // @ts-ignore
                        getId(): java.lang.String
                        // @ts-ignore
                        getMethod(): org.springframework.http.HttpMethod
                        // @ts-ignore
                        getMethodValue(): java.lang.String
                        // @ts-ignore
                        getURI(): java.net.URI
                        // @ts-ignore
                        getPath(): org.springframework.http.server.RequestPath
                        // @ts-ignore
                        getQueryParams(): <any>
                        // @ts-ignore
                        getHeaders(): org.springframework.http.HttpHeaders
                        // @ts-ignore
                        getCookies(): <any>
                        // @ts-ignore
                        getRemoteAddress(): java.net.InetSocketAddress
                        // @ts-ignore
                        getLocalAddress(): java.net.InetSocketAddress
                        // @ts-ignore
                        getSslInfo(): org.springframework.http.server.reactive.SslInfo
                        // @ts-ignore
                        getBody(): <any>
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
