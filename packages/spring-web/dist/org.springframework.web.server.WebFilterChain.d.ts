declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                /**
                 * Contract to allow a {@link WebFilter} to delegate to the next in the chain.
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                interface WebFilterChain {
                    /**
                     * Delegate to the next {@code WebFilter} in the chain.
                     * @param exchange the current server exchange
                     * @return {#code Mono<Void>} to indicate when request handling is complete
                     */
                    // @ts-ignore
                    filter(exchange: org.springframework.web.server.ServerWebExchange): object
                }
            }
        }
    }
}
