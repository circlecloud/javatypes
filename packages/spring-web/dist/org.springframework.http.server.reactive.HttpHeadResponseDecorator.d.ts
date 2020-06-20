declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace reactive {
                    /**
                     * {@link ServerHttpResponse} decorator for HTTP HEAD requests.
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    class HttpHeadResponseDecorator extends org.springframework.http.server.reactive.ServerHttpResponseDecorator {
                        // @ts-ignore
                        constructor(delegate: org.springframework.http.server.reactive.ServerHttpResponse)
                        /**
                         * Apply {@link Flux#reduce(Object, BiFunction) reduce} on the body, count
                         * the number of bytes produced, release data buffers without writing, and
                         * set the {@literal Content-Length} header.
                         */
                        // @ts-ignore
                        writeWith(body: object): <any>
                        /**
                         * Invoke {@link #setComplete()} without writing.
                         * <p>RFC 7302 allows HTTP HEAD response without content-length and it's not
                         * something that can be computed on a streaming response.
                         */
                        // @ts-ignore
                        writeAndFlushWith(body: object): <any>
                    }
                }
            }
        }
    }
}
