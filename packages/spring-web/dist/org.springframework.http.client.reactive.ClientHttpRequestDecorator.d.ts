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
                        getDelegate(): org.springframework.http.client.reactive.ClientHttpRequest
                        // @ts-ignore
                        getMethod(): org.springframework.http.HttpMethod
                        // @ts-ignore
                        getURI(): java.net.URI
                        // @ts-ignore
                        getHeaders(): org.springframework.http.HttpHeaders
                        // @ts-ignore
                        getCookies(): <any>
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
