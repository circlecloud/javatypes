declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                /**
                 * Contract to handle a web request.
                 * <p>Use {@link HttpWebHandlerAdapter} to adapt a {@code WebHandler} to an
                 * {@link org.springframework.http.server.reactive.HttpHandler HttpHandler}.
                 * The {@link WebHttpHandlerBuilder} provides a convenient way to do that while
                 * also optionally configuring one or more filters and/or exception handlers.
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                interface WebHandler {
                    /**
                     * Handle the web server exchange.
                     * @param exchange the current server exchange
                     * @return {#code Mono<Void>} to indicate when request handling is complete
                     */
                    // @ts-ignore
                    handle(exchange: org.springframework.web.server.ServerWebExchange): object
                }
            }
        }
    }
}
