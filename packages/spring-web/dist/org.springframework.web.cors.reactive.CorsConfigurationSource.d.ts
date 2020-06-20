declare namespace org {
    namespace springframework {
        namespace web {
            namespace cors {
                namespace reactive {
                    /**
                     * Interface to be implemented by classes (usually HTTP request handlers) that
                     * provides a {@link CorsConfiguration} instance based on the provided reactive request.
                     * @author Sebastien Deleuze
                     * @since 5.0
                     */
                    // @ts-ignore
                    interface CorsConfigurationSource {
                        /**
                         * Return a {@link CorsConfiguration} based on the incoming request.
                         * @return the associated {#link CorsConfiguration}, or {@code null} if none
                         */
                        // @ts-ignore
                        getCorsConfiguration(exchange: org.springframework.web.server.ServerWebExchange): org.springframework.web.cors.CorsConfiguration
                    }
                }
            }
        }
    }
}
