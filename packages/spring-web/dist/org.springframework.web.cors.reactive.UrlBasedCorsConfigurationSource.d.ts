declare namespace org {
    namespace springframework {
        namespace web {
            namespace cors {
                namespace reactive {
                    /**
                     * Provide a per reactive request {@link CorsConfiguration} instance based on a
                     * collection of {@link CorsConfiguration} mapped on path patterns.
                     * <p>Exact path mapping URIs (such as {@code "/admin"}) are supported
                     * as well as Ant-style path patterns (such as {@code "/admin/**"}).
                     * @author Sebastien Deleuze
                     * @author Brian Clozel
                     * @since 5.0
                     */
                    // @ts-ignore
                    class UrlBasedCorsConfigurationSource extends java.lang.Object implements org.springframework.web.cors.reactive.CorsConfigurationSource {
                        /**
                         * Construct a new {@code UrlBasedCorsConfigurationSource} instance with default
                         * {@code PathPatternParser}.
                         * @since 5.0.6
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct a new {@code UrlBasedCorsConfigurationSource} instance from the supplied
                         * {@code PathPatternParser}.
                         */
                        // @ts-ignore
                        constructor(patternParser: org.springframework.web.util.pattern.PathPatternParser)
                        /**
                         * Set CORS configuration based on URL patterns.
                         */
                        // @ts-ignore
                        public setCorsConfigurations(corsConfigurations: java.util.Map<java.lang.String | string, org.springframework.web.cors.CorsConfiguration>): void
                        /**
                         * Register a {@link CorsConfiguration} for the specified path pattern.
                         */
                        // @ts-ignore
                        public registerCorsConfiguration(path: java.lang.String | string, config: org.springframework.web.cors.CorsConfiguration): void
                        // @ts-ignore
                        public getCorsConfiguration(exchange: org.springframework.web.server.ServerWebExchange): org.springframework.web.cors.CorsConfiguration
                    }
                }
            }
        }
    }
}
