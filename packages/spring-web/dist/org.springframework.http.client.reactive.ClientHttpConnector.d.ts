declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                namespace reactive {
                    /**
                     * Abstraction over HTTP clients driving the underlying HTTP client to connect
                     * to the origin server and provide all necessary infrastructure to send a
                     * {@link ClientHttpRequest} and receive a {@link ClientHttpResponse}.
                     * @author Brian Clozel
                     * @since 5.0
                     */
                    // @ts-ignore
                    interface ClientHttpConnector {
                        /**
                         * Connect to the origin server using the given {@code HttpMethod} and
                         * {@code URI} and apply the given {@code requestCallback} when the HTTP
                         * request of the underlying API can be initialized and written to.
                         * @param method the HTTP request method
                         * @param uri the HTTP request URI
                         * @param requestCallback a function that prepares and writes to the request,
                         *  returning a publisher that signals when it's done writing.
                         *  Implementations can return a {#code Mono<Void>} by calling
                         *  {@link ClientHttpRequest#writeWith} or {@link ClientHttpRequest#setComplete}.
                         * @return publisher for the {#link ClientHttpResponse}
                         */
                        // @ts-ignore
                        connect(method: org.springframework.http.HttpMethod, uri: java.net.URI, requestCallback: java.util.function.Function<any super org.springframework.http.client.reactive.ClientHttpRequest, <any>> | java.util.function$.Function<? super org.springframework.http.client.reactive.ClientHttpRequest, <any>>): <any>
                    }
                }
            }
        }
    }
}
