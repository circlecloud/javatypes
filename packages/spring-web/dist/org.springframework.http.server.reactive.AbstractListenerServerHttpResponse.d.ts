declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace reactive {
                    /**
                     * Abstract base class for listener-based server responses, e.g. Servlet 3.1
                     * and Undertow.
                     * @author Arjen Poutsma
                     * @since 5.0
                     */
                    // @ts-ignore
                    class AbstractListenerServerHttpResponse extends org.springframework.http.server.reactive.AbstractServerHttpResponse {
                        // @ts-ignore
                        constructor(dataBufferFactory: DataBufferFactory)
                        // @ts-ignore
                        constructor(dataBufferFactory: DataBufferFactory, headers: org.springframework.http.HttpHeaders)
                        // @ts-ignore
                        writeWithInternal(body: object): <any>
                        // @ts-ignore
                        writeAndFlushWithInternal(body: object): <any>
                        /**
                         * Abstract template method to create a {@code Processor<Publisher<DataBuffer>, Void>}
                         * that will write the response body with flushes to the underlying output. Called from
                         * {@link #writeAndFlushWithInternal(Publisher)}.
                         */
                        // @ts-ignore
                        abstract createBodyFlushProcessor(): <any>
                    }
                }
            }
        }
    }
}
