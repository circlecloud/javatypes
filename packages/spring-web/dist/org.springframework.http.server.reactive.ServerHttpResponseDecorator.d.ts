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
                        public getDelegate(): org.springframework.http.server.reactive.ServerHttpResponse
                        // @ts-ignore
                        public setStatusCode(status: org.springframework.http.HttpStatus): boolean
                        // @ts-ignore
                        public getStatusCode(): org.springframework.http.HttpStatus
                        // @ts-ignore
                        public getHeaders(): org.springframework.http.HttpHeaders
                        // @ts-ignore
                        public getCookies(): object
                        // @ts-ignore
                        public addCookie(cookie: org.springframework.http.ResponseCookie): void
                        // @ts-ignore
                        public bufferFactory(): DataBufferFactory
                        // @ts-ignore
                        public beforeCommit(action: java.util.function$.Supplier<any>): void
                        // @ts-ignore
                        public isCommitted(): boolean
                        // @ts-ignore
                        public writeWith(body: object): object
                        // @ts-ignore
                        public writeAndFlushWith(body: object): object
                        // @ts-ignore
                        public setComplete(): object
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
