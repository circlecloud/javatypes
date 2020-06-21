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
                        public getDelegate(): org.springframework.http.client.reactive.ClientHttpResponse
                        // @ts-ignore
                        public getStatusCode(): org.springframework.http.HttpStatus
                        // @ts-ignore
                        public getRawStatusCode(): number /*int*/
                        // @ts-ignore
                        public getHeaders(): org.springframework.http.HttpHeaders
                        // @ts-ignore
                        public getCookies(): object
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
