declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace ServerWebExchange {
                    /**
                     * Builder for mutating an existing {@link ServerWebExchange}.
                     * Removes the need
                     */
                    // @ts-ignore
                    interface Builder {
                        /**
                         * Configure a consumer to modify the current request using a builder.
                         * <p>Effectively this:
                         * <pre>
                         * exchange.mutate().request(builder-> builder.method(HttpMethod.PUT));
                         * // vs...
                         * ServerHttpRequest request = exchange.getRequest().mutate()
                         * .method(HttpMethod.PUT)
                         * .build();
                         * exchange.mutate().request(request);
                         * </pre>
                         * @see ServerHttpRequest#mutate()
                         */
                        // @ts-ignore
                        request(requestBuilderConsumer: java.util.function.Consumer<org.springframework.http.server.reactive.ServerHttpRequest.Builder> | java.util.function$.Consumer<org.springframework.http.server.reactive.ServerHttpRequest.Builder>): org.springframework.web.server.ServerWebExchange.Builder
                        /**
                         * Set the request to use especially when there is a need to override
                         * {@link ServerHttpRequest} methods. To simply mutate request properties
                         * see {@link #request(Consumer)} instead.
                         * @see org.springframework.http.server.reactive.ServerHttpRequestDecorator
                         */
                        // @ts-ignore
                        request(request: org.springframework.http.server.reactive.ServerHttpRequest): org.springframework.web.server.ServerWebExchange.Builder
                        /**
                         * Set the response to use.
                         * @see org.springframework.http.server.reactive.ServerHttpResponseDecorator
                         */
                        // @ts-ignore
                        response(response: org.springframework.http.server.reactive.ServerHttpResponse): org.springframework.web.server.ServerWebExchange.Builder
                        /**
                         * Set the {@code Mono<Principal>} to return for this exchange.
                         */
                        // @ts-ignore
                        principal(principalMono: object): org.springframework.web.server.ServerWebExchange.Builder
                        /**
                         * Build a {@link ServerWebExchange} decorator with the mutated properties.
                         */
                        // @ts-ignore
                        build(): org.springframework.web.server.ServerWebExchange
                    }
                }
            }
        }
    }
}
