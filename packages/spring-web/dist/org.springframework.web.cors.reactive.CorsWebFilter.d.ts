declare namespace org {
    namespace springframework {
        namespace web {
            namespace cors {
                namespace reactive {
                    /**
                     * {@link WebFilter} that handles CORS preflight requests and intercepts
                     * CORS simple and actual requests thanks to a {@link CorsProcessor} implementation
                     * ({@link DefaultCorsProcessor} by default) in order to add the relevant CORS
                     * response headers (like {@code Access-Control-Allow-Origin}) using the provided
                     * {@link CorsConfigurationSource} (for example an {@link UrlBasedCorsConfigurationSource}
                     * instance.
                     * <p>This is an alternative to Spring WebFlux Java config CORS configuration,
                     * mostly useful for applications using the functional API.
                     * @author Sebastien Deleuze
                     * @since 5.0
                     * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
                     */
                    // @ts-ignore
                    class CorsWebFilter extends java.lang.Object implements org.springframework.web.server.WebFilter {
                        /**
                         * Constructor accepting a {@link CorsConfigurationSource} used by the filter
                         * to find the {@link CorsConfiguration} to use for each incoming request.
                         * @see UrlBasedCorsConfigurationSource
                         */
                        // @ts-ignore
                        constructor(configSource: org.springframework.web.cors.reactive.CorsConfigurationSource)
                        /**
                         * Constructor accepting a {@link CorsConfigurationSource} used by the filter
                         * to find the {@link CorsConfiguration} to use for each incoming request and a
                         * custom {@link CorsProcessor} to use to apply the matched
                         * {@link CorsConfiguration} for a request.
                         * @see UrlBasedCorsConfigurationSource
                         */
                        // @ts-ignore
                        constructor(configSource: org.springframework.web.cors.reactive.CorsConfigurationSource, processor: org.springframework.web.cors.reactive.CorsProcessor)
                        // @ts-ignore
                        filter(exchange: org.springframework.web.server.ServerWebExchange, chain: org.springframework.web.server.WebFilterChain): <any>
                    }
                }
            }
        }
    }
}
