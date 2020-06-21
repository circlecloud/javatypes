declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace handler {
                    /**
                     * WebHandler decorator that invokes one or more {@link WebExceptionHandler WebExceptionHandlers}
                     * after the delegate {@link WebHandler}.
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    class ExceptionHandlingWebHandler extends org.springframework.web.server.handler.WebHandlerDecorator {
                        /**
                         * Create an {@code ExceptionHandlingWebHandler} for the given delegate.
                         * @param delegate the WebHandler delegate
                         * @param handlers the WebExceptionHandlers to apply
                         */
                        // @ts-ignore
                        constructor(delegate: org.springframework.web.server.WebHandler, handlers: java.util.List<org.springframework.web.server.WebExceptionHandler> | Array<org.springframework.web.server.WebExceptionHandler>)
                        /**
                         * Return a read-only list of the configured exception handlers.
                         */
                        // @ts-ignore
                        public getExceptionHandlers(): Array<org.springframework.web.server.WebExceptionHandler>
                        // @ts-ignore
                        public handle(exchange: org.springframework.web.server.ServerWebExchange): object
                    }
                }
            }
        }
    }
}
