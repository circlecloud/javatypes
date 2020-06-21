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
                        public getDelegate(): org.springframework.http.server.reactive.ServerHttpRequest
                        // @ts-ignore
                        public getId(): string
                        // @ts-ignore
                        public getMethod(): org.springframework.http.HttpMethod
                        // @ts-ignore
                        public getMethodValue(): string
                        // @ts-ignore
                        public getURI(): java.net.URI
                        // @ts-ignore
                        public getPath(): org.springframework.http.server.RequestPath
                        // @ts-ignore
                        public getQueryParams(): object
                        // @ts-ignore
                        public getHeaders(): org.springframework.http.HttpHeaders
                        // @ts-ignore
                        public getCookies(): object
                        // @ts-ignore
                        public getRemoteAddress(): java.net.InetSocketAddress
                        // @ts-ignore
                        public getLocalAddress(): java.net.InetSocketAddress
                        // @ts-ignore
                        public getSslInfo(): org.springframework.http.server.reactive.SslInfo
                        // @ts-ignore
                        public getBody(): object
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
