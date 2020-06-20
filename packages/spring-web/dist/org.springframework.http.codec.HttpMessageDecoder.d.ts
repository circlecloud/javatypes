declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                /**
                 * Extension of {@code Decoder} exposing extra methods relevant in the context
                 * of HTTP request or response body decoding.
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 * @param <T> the type of elements in the output stream
                 */
                // @ts-ignore
                interface HttpMessageDecoder<T> {
                    /**
                     * Get decoding hints based on the server request or annotations on the
                     * target controller method parameter.
                     * @param actualType the actual target type to decode to, possibly a reactive
                     *  wrapper and sourced from {#link org.springframework.core.MethodParameter},
                     *  i.e. providing access to method parameter annotations
                     * @param elementType the element type within {#code Flux/Mono} that we're
                     *  trying to decode to
                     * @param request the current request
                     * @param response the current response
                     * @return a Map with hints, possibly empty
                     */
                    // @ts-ignore
                    getDecodeHints(actualType: ResolvableType, elementType: ResolvableType, request: org.springframework.http.server.reactive.ServerHttpRequest, response: org.springframework.http.server.reactive.ServerHttpResponse): java.util.Map<java.lang.String, java.lang.Object>
                }
            }
        }
    }
}
