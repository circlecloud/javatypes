declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                namespace reactive {
                    /**
                     * Wraps another {@link ClientHttpRequest} and delegates all methods to it.
                     * Sub-classes can override specific methods selectively.
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    class ClientHttpRequestDecorator extends java.lang.Object implements org.springframework.http.client.reactive.ClientHttpRequest {
                        // @ts-ignore
                        constructor(delegate: org.springframework.http.client.reactive.ClientHttpRequest)
                        // @ts-ignore
                        public getDelegate(): org.springframework.http.client.reactive.ClientHttpRequest
                        // @ts-ignore
                        public getMethod(): org.springframework.http.HttpMethod
                        // @ts-ignore
                        public getURI(): java.net.URI
                        // @ts-ignore
                        public getHeaders(): org.springframework.http.HttpHeaders
                        // @ts-ignore
                        public getCookies(): object
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
