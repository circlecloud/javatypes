declare namespace org {
    namespace springframework {
        namespace web {
            namespace filter {
                namespace reactive {
                    /**
                     * Reactive {@link WebFilter} that converts posted method parameters into HTTP methods,
                     * retrievable via {@link ServerHttpRequest#getMethod()}. Since browsers currently only
                     * support GET and POST, a common technique is to use a normal POST with an additional
                     * hidden form field ({@code _method}) to pass the "real" HTTP method along.
                     * This filter reads that parameter and changes the {@link ServerHttpRequest#getMethod()}
                     * return value using {@link ServerWebExchange#mutate()}.
                     * <p>The name of the request parameter defaults to {@code _method}, but can be
                     * adapted via the {@link #setMethodParamName(String) methodParamName} property.
                     * @author Greg Turnquist
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    class HiddenHttpMethodFilter extends java.lang.Object implements org.springframework.web.server.WebFilter {
                        // @ts-ignore
                        constructor()
                        /**
                         * Default name of the form parameter with the HTTP method to use.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_METHOD_PARAMETER_NAME: java.lang.String | string
                        /**
                         * Set the name of the form parameter with the HTTP method to use.
                         * <p>By default this is set to {@code "_method"}.
                         */
                        // @ts-ignore
                        public setMethodParamName(methodParamName: java.lang.String | string): void
                        /**
                         * Transform an HTTP POST into another method based on {@code methodParamName}.
                         * @param exchange the current server exchange
                         * @param chain provides a way to delegate to the next filter
                         * @return {#code Mono<Void>} to indicate when request processing is complete
                         */
                        // @ts-ignore
                        public filter(exchange: org.springframework.web.server.ServerWebExchange, chain: org.springframework.web.server.WebFilterChain): object
                    }
                }
            }
        }
    }
}
