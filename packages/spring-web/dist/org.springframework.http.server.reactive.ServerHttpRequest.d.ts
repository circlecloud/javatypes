declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace reactive {
                    /**
                     * Represents a reactive server-side HTTP request.
                     * @author Arjen Poutsma
                     * @author Rossen Stoyanchev
                     * @author Sam Brannen
                     * @since 5.0
                     */
                    // @ts-ignore
                    interface ServerHttpRequest extends org.springframework.http.HttpRequest, org.springframework.http.ReactiveHttpInputMessage {
                        /**
                         * Return an id that represents the underlying connection, if available,
                         * or the request for the purpose of correlating log messages.
                         * @since 5.1
                         * @see org.springframework.web.server.ServerWebExchange#getLogPrefix()
                         */
                        // @ts-ignore
                        getId(): string
                        /**
                         * Returns a structured representation of the request path including the
                         * context path + path within application portions, path segments with
                         * encoded and decoded values, and path parameters.
                         */
                        // @ts-ignore
                        getPath(): org.springframework.http.server.RequestPath
                        /**
                         * Return a read-only map with parsed and decoded query parameter values.
                         */
                        // @ts-ignore
                        getQueryParams(): object
                        /**
                         * Return a read-only map of cookies sent by the client.
                         */
                        // @ts-ignore
                        getCookies(): object
                        /**
                         * Return the remote address where this request is connected to, if available.
                         */
                        // @ts-ignore
                        getRemoteAddress(): java.net.InetSocketAddress
                        /**
                         * Return the local address the request was accepted on, if available.
                         * 5.2.3
                         */
                        // @ts-ignore
                        getLocalAddress(): java.net.InetSocketAddress
                        /**
                         * Return the SSL session information if the request has been transmitted
                         * over a secure protocol including SSL certificates, if available.
                         * @return the session information, or {#code null} if none available
                         * @since 5.0.2
                         */
                        // @ts-ignore
                        getSslInfo(): org.springframework.http.server.reactive.SslInfo
                        /**
                         * Return a builder to mutate properties of this request by wrapping it
                         * with {@link ServerHttpRequestDecorator} and returning either mutated
                         * values or delegating back to this instance.
                         */
                        // @ts-ignore
                        mutate(): org.springframework.http.server.reactive.ServerHttpRequest.Builder
                    }
                }
            }
        }
    }
}
