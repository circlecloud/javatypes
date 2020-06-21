declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace reactive {
                    /**
                     * Adapt {@link HttpHandler} to the Undertow {@link io.undertow.server.HttpHandler}.
                     * @author Marek Hawrylczak
                     * @author Rossen Stoyanchev
                     * @author Arjen Poutsma
                     * @since 5.0
                     */
                    // @ts-ignore
                    class UndertowHttpHandlerAdapter extends java.lang.Object {
                        // @ts-ignore
                        constructor(httpHandler: org.springframework.http.server.reactive.HttpHandler)
                        // @ts-ignore
                        public setDataBufferFactory(bufferFactory: DataBufferFactory): void
                        // @ts-ignore
                        public getDataBufferFactory(): DataBufferFactory
                        // @ts-ignore
                        public handleRequest(exchange: HttpServerExchange): void
                    }
                }
            }
        }
    }
}
