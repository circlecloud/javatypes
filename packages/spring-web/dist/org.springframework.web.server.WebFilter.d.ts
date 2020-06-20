declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                /**
                 * Contract for interception-style, chained processing of Web requests that may
                 * be used to implement cross-cutting, application-agnostic requirements such
                 * as security, timeouts, and others.
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                interface WebFilter {
                    /**
                     * Process the Web request and (optionally) delegate to the next
                     * {@code WebFilter} through the given {@link WebFilterChain}.
                     * @param exchange the current server exchange
                     * @param chain provides a way to delegate to the next filter
                     * @return {#code Mono<Void>} to indicate when request processing is complete
                     */
                    // @ts-ignore
                    filter(exchange: org.springframework.web.server.ServerWebExchange, chain: org.springframework.web.server.WebFilterChain): <any>
                }
            }
        }
    }
}
