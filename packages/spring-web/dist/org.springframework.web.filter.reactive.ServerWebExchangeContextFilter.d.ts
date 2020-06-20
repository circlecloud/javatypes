declare namespace org {
    namespace springframework {
        namespace web {
            namespace filter {
                namespace reactive {
                    /**
                     * Inserts an attribute in the Reactor {@link Context} that makes the current
                     * {@link ServerWebExchange} available under the attribute name
                     * {@link #EXCHANGE_CONTEXT_ATTRIBUTE}. This is useful for access to the
                     * exchange without explicitly passing it to components that participate in
                     * request processing.
                     * <p>The convenience method {@link #get(Context)} looks up the exchange.
                     * @author Rossen Stoyanchev
                     * @since 5.2
                     */
                    // @ts-ignore
                    class ServerWebExchangeContextFilter extends java.lang.Object implements org.springframework.web.server.WebFilter {
                        // @ts-ignore
                        constructor()
                        /**
                         * Attribute name under which the exchange is saved in the context.
                         */
                        // @ts-ignore
                        readonly EXCHANGE_CONTEXT_ATTRIBUTE: string
                        // @ts-ignore
                        filter(exchange: org.springframework.web.server.ServerWebExchange, chain: org.springframework.web.server.WebFilterChain): <any>
                        /**
                         * Access the {@link ServerWebExchange} from the Reactor Context, if available,
                         * which is if {@link ServerWebExchangeContextFilter} is configured for use
                         * and the give context was obtained from a request processing chain.
                         * @param context the context in which to access the exchange
                         * @return the exchange
                         */
                        // @ts-ignore
                        get(context: Context): java.util.Optional<org.springframework.web.server.ServerWebExchange>
                    }
                }
            }
        }
    }
}
