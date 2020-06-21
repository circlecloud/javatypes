declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace handler {
                    /**
                     * Default implementation of {@link WebFilterChain}.
                     * <p>Each instance of this class represents one link in the chain. The public
                     * constructor {@link #DefaultWebFilterChain(WebHandler, List)}
                     * initializes the full chain and represents its first link.
                     * <p>This class is immutable and thread-safe. It can be created once and
                     * re-used to handle request concurrently.
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    class DefaultWebFilterChain extends java.lang.Object implements org.springframework.web.server.WebFilterChain {
                        /**
                         * Public constructor with the list of filters and the target handler to use.
                         * @param handler the target handler
                         * @param filters the filters ahead of the handler
                         * @since 5.1
                         */
                        // @ts-ignore
                        constructor(handler: org.springframework.web.server.WebHandler, filters: java.util.List<org.springframework.web.server.WebFilter> | Array<org.springframework.web.server.WebFilter>)
                        /**
                         * Public constructor with the list of filters and the target handler to use.
                         * @param handler the target handler
                         * @param filters the filters ahead of the handler
                         * @deprecated as of 5.1 this constructor is deprecated in favor of
                         *  {#link #DefaultWebFilterChain(WebHandler, List)}.
                         */
                        // @ts-ignore
                        constructor(handler: org.springframework.web.server.WebHandler, ...filters: org.springframework.web.server.WebFilter[])
                        // @ts-ignore
                        public getFilters(): Array<org.springframework.web.server.WebFilter>
                        // @ts-ignore
                        public getHandler(): org.springframework.web.server.WebHandler
                        // @ts-ignore
                        public filter(exchange: org.springframework.web.server.ServerWebExchange): object
                    }
                }
            }
        }
    }
}
