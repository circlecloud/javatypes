declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                namespace reactive {
                    /**
                     * Wraps another {@link ClientHttpResponse} and delegates all methods to it.
                     * Sub-classes can override specific methods selectively.
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    class ClientHttpResponseDecorator extends java.lang.Object implements org.springframework.http.client.reactive.ClientHttpResponse {
                        // @ts-ignore
                        constructor(delegate: org.springframework.http.client.reactive.ClientHttpResponse)
                        // @ts-ignore
                        getDelegate(): org.springframework.http.client.reactive.ClientHttpResponse
                        // @ts-ignore
                        getStatusCode(): org.springframework.http.HttpStatus
                        // @ts-ignore
                        getRawStatusCode(): int
                        // @ts-ignore
                        getHeaders(): org.springframework.http.HttpHeaders
                        // @ts-ignore
                        getCookies(): <any>
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
