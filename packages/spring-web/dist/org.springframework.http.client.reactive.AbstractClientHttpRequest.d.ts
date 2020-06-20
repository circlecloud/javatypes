declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                namespace reactive {
                    /**
                     * Base class for {@link ClientHttpRequest} implementations.
                     * @author Rossen Stoyanchev
                     * @author Brian Clozel
                     * @since 5.0
                     */
                    // @ts-ignore
                    class AbstractClientHttpRequest extends java.lang.Object implements org.springframework.http.client.reactive.ClientHttpRequest {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(headers: org.springframework.http.HttpHeaders)
                        // @ts-ignore
                        getHeaders(): org.springframework.http.HttpHeaders
                        // @ts-ignore
                        getCookies(): <any>
                        // @ts-ignore
                        beforeCommit(action: java.util.function.Supplier<<any>> | java.util.function$.Supplier<<any>>): void
                        // @ts-ignore
                        isCommitted(): boolean
                        /**
                         * A variant of {@link #doCommit(Supplier)} for a request without body.
                         * @return a completion publisher
                         */
                        // @ts-ignore
                        doCommit(): <any>
                        /**
                         * Apply {@link #beforeCommit(Supplier) beforeCommit} actions, apply the
                         * request headers/cookies, and write the request body.
                         * @param writeAction the action to write the request body (may be {#code null})
                         * @return a completion publisher
                         */
                        // @ts-ignore
                        doCommit(writeAction: java.util.function.Supplier<<any>> | java.util.function$.Supplier<<any>>): <any>
                        /**
                         * Apply header changes from {@link #getHeaders()} to the underlying request.
                         * This method is called once only.
                         */
                        // @ts-ignore
                        abstract applyHeaders(): void
                        /**
                         * Add cookies from {@link #getHeaders()} to the underlying request.
                         * This method is called once only.
                         */
                        // @ts-ignore
                        abstract applyCookies(): void
                    }
                }
            }
        }
    }
}
