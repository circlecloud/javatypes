declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace reactive {
                    /**
                     * Adapt {@link HttpHandler} to the Reactor Netty channel handling function.
                     * @author Stephane Maldini
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    class ReactorHttpHandlerAdapter extends java.lang.Object implements java.util.function.BiFunction<HttpServerRequest, HttpServerResponse, object> {
                        // @ts-ignore
                        constructor(httpHandler: org.springframework.http.server.reactive.HttpHandler)
                        // @ts-ignore
                        public apply(reactorRequest: HttpServerRequest, reactorResponse: HttpServerResponse): object
                    }
                }
            }
        }
    }
}
