declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace handler {
                    /**
                     * {@link WebHandlerDecorator} that invokes a chain of {@link WebFilter WebFilters}
                     * before invoking the delegate {@link WebHandler}.
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    class FilteringWebHandler extends org.springframework.web.server.handler.WebHandlerDecorator {
                        /**
                         * Constructor.
                         * @param filters the chain of filters
                         */
                        // @ts-ignore
                        constructor(handler: org.springframework.web.server.WebHandler, filters: java.util.List<org.springframework.web.server.WebFilter> | Array<org.springframework.web.server.WebFilter>)
                        /**
                         * Return a read-only list of the configured filters.
                         */
                        // @ts-ignore
                        public getFilters(): Array<org.springframework.web.server.WebFilter>
                        // @ts-ignore
                        public handle(exchange: org.springframework.web.server.ServerWebExchange): object
                    }
                }
            }
        }
    }
}
