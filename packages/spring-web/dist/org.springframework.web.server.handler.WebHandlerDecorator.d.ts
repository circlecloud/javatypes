declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace handler {
                    /**
                     * {@link WebHandler} that decorates and delegates to another {@code WebHandler}.
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    class WebHandlerDecorator extends java.lang.Object implements org.springframework.web.server.WebHandler {
                        /**
                         * Create a {@code WebHandlerDecorator} for the given delegate.
                         * @param delegate the WebHandler delegate
                         */
                        // @ts-ignore
                        constructor(delegate: org.springframework.web.server.WebHandler)
                        /**
                         * Return the wrapped delegate.
                         */
                        // @ts-ignore
                        public getDelegate(): org.springframework.web.server.WebHandler
                        // @ts-ignore
                        public handle(exchange: org.springframework.web.server.ServerWebExchange): object
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
