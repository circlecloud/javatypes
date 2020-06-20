declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                /**
                 * Contract for handling exceptions during web server exchange processing.
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                interface WebExceptionHandler {
                    /**
                     * Handle the given exception. A completion signal through the return value
                     * indicates error handling is complete while an error signal indicates the
                     * exception is still not handled.
                     * @param exchange the current exchange
                     * @param ex the exception to handle
                     * @return {#code Mono<Void>} to indicate when exception handling is complete
                     */
                    // @ts-ignore
                    handle(exchange: org.springframework.web.server.ServerWebExchange, ex: Error): <any>
                }
            }
        }
    }
}
