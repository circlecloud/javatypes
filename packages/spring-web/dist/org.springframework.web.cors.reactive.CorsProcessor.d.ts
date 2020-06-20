declare namespace org {
    namespace springframework {
        namespace web {
            namespace cors {
                namespace reactive {
                    /**
                     * A strategy to apply CORS validation checks and updates to a
                     * {@link ServerWebExchange}, either rejecting through the response or adding
                     * CORS related headers, based on a pre-selected {@link CorsConfiguration}.
                     * @author Sebastien Deleuze
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     * @see <a href="https://www.w3.org/TR/cors/">CORS W3C recommendation</a>
                     */
                    // @ts-ignore
                    interface CorsProcessor {
                        /**
                         * Process a request using the given {@code CorsConfiguration}.
                         * @param configuration the CORS configuration to use; possibly {#code null}
                         *  in which case pre-flight requests are rejected, but all others allowed.
                         * @param exchange the current exchange
                         * @return {#code false} if the request was rejected, {@code true} otherwise
                         */
                        // @ts-ignore
                        process(configuration: org.springframework.web.cors.CorsConfiguration, exchange: org.springframework.web.server.ServerWebExchange): boolean
                    }
                }
            }
        }
    }
}
