declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                namespace reactive {
                    namespace ServerHttpRequest {
                        /**
                         * Builder for mutating an existing {@link ServerHttpRequest}.
                         */
                        // @ts-ignore
                        interface Builder {
                            /**
                             * Set the HTTP method to return.
                             */
                            // @ts-ignore
                            method(httpMethod: org.springframework.http.HttpMethod): org.springframework.http.server.reactive.ServerHttpRequest.Builder
                            /**
                             * Set the URI to use with the following conditions:
                             * <ul>
                             * <li>If {@link #path(String) path} is also set, it overrides the path
                             * of the URI provided here.
                             * <li>If {@link #contextPath(String) contextPath} is also set, or
                             * already present, it must match the start of the path of the URI
                             * provided here.
                             * </ul>
                             */
                            // @ts-ignore
                            uri(uri: java.net.URI): org.springframework.http.server.reactive.ServerHttpRequest.Builder
                            /**
                             * Set the path to use instead of the {@code "rawPath"} of the URI of
                             * the request with the following conditions:
                             * <ul>
                             * <li>If {@link #uri(URI) uri} is also set, the path given here
                             * overrides the path of the given URI.
                             * <li>If {@link #contextPath(String) contextPath} is also set, or
                             * already present, it must match the start of the path given here.
                             * <li>The given value must begin with a slash.
                             * </ul>
                             */
                            // @ts-ignore
                            path(path: java.lang.String | string): org.springframework.http.server.reactive.ServerHttpRequest.Builder
                            /**
                             * Set the contextPath to use.
                             * <p>The given value must be a valid {@link RequestPath#contextPath()
                             * contextPath} and it must match the start of the path of the URI of
                             * the request. That means changing the contextPath, implies also
                             * changing the path via {@link #path(String)}.
                             */
                            // @ts-ignore
                            contextPath(contextPath: java.lang.String | string): org.springframework.http.server.reactive.ServerHttpRequest.Builder
                            /**
                             * Set or override the specified header values under the given name.
                             * <p>If you need to add header values, remove headers, etc., use
                             * {@link #headers(Consumer)} for greater control.
                             * @param headerName the header name
                             * @param headerValues the header values
                             * @since 5.1.9
                             * @see #headers(Consumer)
                             */
                            // @ts-ignore
                            header(headerName: java.lang.String | string, ...headerValues: java.lang.String[] | string[]): org.springframework.http.server.reactive.ServerHttpRequest.Builder
                            /**
                             * Manipulate request headers. The provided {@code HttpHeaders} contains
                             * current request headers, so that the {@code Consumer} can
                             * {@linkplain HttpHeaders#set(String, String) overwrite} or
                             * {@linkplain HttpHeaders#remove(Object) remove} existing values, or
                             * use any other {@link HttpHeaders} methods.
                             * @see #header(String, String...)
                             */
                            // @ts-ignore
                            headers(headersConsumer: java.util.function$.Consumer<org.springframework.http.HttpHeaders>): org.springframework.http.server.reactive.ServerHttpRequest.Builder
                            /**
                             * Set the SSL session information. This may be useful in environments
                             * where TLS termination is done at the router, but SSL information is
                             * made available in some other way such as through a header.
                             * @since 5.0.7
                             */
                            // @ts-ignore
                            sslInfo(sslInfo: org.springframework.http.server.reactive.SslInfo): org.springframework.http.server.reactive.ServerHttpRequest.Builder
                            /**
                             * Build a {@link ServerHttpRequest} decorator with the mutated properties.
                             */
                            // @ts-ignore
                            build(): org.springframework.http.server.reactive.ServerHttpRequest
                        }
                    }
                }
            }
        }
    }
}
