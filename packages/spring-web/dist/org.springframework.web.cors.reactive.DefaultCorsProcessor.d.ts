declare namespace org {
    namespace springframework {
        namespace web {
            namespace cors {
                namespace reactive {
                    /**
                     * The default implementation of {@link CorsProcessor},
                     * as defined by the <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>.
                     * <p>Note that when input {@link CorsConfiguration} is {@code null}, this
                     * implementation does not reject simple or actual requests outright but simply
                     * avoid adding CORS headers to the response. CORS processing is also skipped
                     * if the response already contains CORS headers.
                     * @author Sebastien Deleuze
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    class DefaultCorsProcessor extends java.lang.Object implements org.springframework.web.cors.reactive.CorsProcessor {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public process(config: org.springframework.web.cors.CorsConfiguration, exchange: org.springframework.web.server.ServerWebExchange): boolean
                        /**
                         * Invoked when one of the CORS checks failed.
                         */
                        // @ts-ignore
                        rejectRequest(response: org.springframework.http.server.reactive.ServerHttpResponse): void
                        /**
                         * Handle the given request.
                         */
                        // @ts-ignore
                        handleInternal(exchange: org.springframework.web.server.ServerWebExchange, config: org.springframework.web.cors.CorsConfiguration, preFlightRequest: boolean): boolean
                        /**
                         * Check the origin and determine the origin for the response. The default
                         * implementation simply delegates to
                         * {@link CorsConfiguration#checkOrigin(String)}.
                         */
                        // @ts-ignore
                        checkOrigin(config: org.springframework.web.cors.CorsConfiguration, requestOrigin: java.lang.String | string): string
                        /**
                         * Check the HTTP method and determine the methods for the response of a
                         * pre-flight request. The default implementation simply delegates to
                         * {@link CorsConfiguration#checkHttpMethod(HttpMethod)}.
                         */
                        // @ts-ignore
                        checkMethods(config: org.springframework.web.cors.CorsConfiguration, requestMethod: org.springframework.http.HttpMethod): Array<org.springframework.http.HttpMethod>
                        /**
                         * Check the headers and determine the headers for the response of a
                         * pre-flight request. The default implementation simply delegates to
                         * {@link CorsConfiguration#checkOrigin(String)}.
                         */
                        // @ts-ignore
                        checkHeaders(config: org.springframework.web.cors.CorsConfiguration, requestHeaders: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): Array<java.lang.String | string>
                    }
                }
            }
        }
    }
}
