declare namespace javax {
    namespace xml {
        namespace ws {
            namespace spi {
                namespace http {
                    /**
                     * A handler which is invoked to process HTTP requests.
                     * <p>
                     * JAX-WS runtime provides the implementation for this and sets
                     * it using {@link HttpContext#setHandler(HttpHandler)} during
                     * {@link Endpoint#publish(HttpContext) }
                     * @author Jitendra Kotamraju
                     * @since JAX-WS 2.2
                     */
                    // @ts-ignore
                    abstract class HttpHandler extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Handles a given request and generates an appropriate response.
                         * See {@link HttpExchange} for a description of the steps
                         * involved in handling an exchange. Container invokes this method
                         * when it receives an incoming request.
                         * @param exchange the exchange containing the request from the
                         *       client and used to send the response
                         * @throws IOException when an I/O error happens during request
                         *       handling
                         */
                        // @ts-ignore
                        public abstract handle(exchange: javax.xml.ws.spi.http.HttpExchange): void
                    }
                }
            }
        }
    }
}
