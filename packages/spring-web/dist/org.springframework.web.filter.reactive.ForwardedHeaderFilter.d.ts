declare namespace org {
    namespace springframework {
        namespace web {
            namespace filter {
                namespace reactive {
                    /**
                     * Extract values from "Forwarded" and "X-Forwarded-*" headers to override the
                     * request URI (i.e. {@link ServerHttpRequest#getURI()}) so it reflects the
                     * client-originated protocol and address.
                     * <p>Alternatively if {@link #setRemoveOnly removeOnly} is set to "true", then
                     * "Forwarded" and "X-Forwarded-*" headers are only removed and not used.
                     * @author Arjen Poutsma
                     * @author Rossen Stoyanchev
                     * @deprecated as of 5.1 this filter is deprecated in favor of using
                     *  {#link ForwardedHeaderTransformer} which can be declared as a bean with the
                     *  name "forwardedHeaderTransformer" or registered explicitly in
                     *  {@link org.springframework.web.server.adapter.WebHttpHandlerBuilder
                     *  WebHttpHandlerBuilder}.
                     * @since 5.0
                     * @see <a href="https://tools.ietf.org/html/rfc7239">https://tools.ietf.org/html/rfc7239</a>
                     */
                    // @ts-ignore
                    class ForwardedHeaderFilter extends org.springframework.web.server.adapter.ForwardedHeaderTransformer implements org.springframework.web.server.WebFilter {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        filter(exchange: org.springframework.web.server.ServerWebExchange, chain: org.springframework.web.server.WebFilterChain): <any>
                    }
                }
            }
        }
    }
}
