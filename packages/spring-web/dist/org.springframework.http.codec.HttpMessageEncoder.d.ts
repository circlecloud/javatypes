declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                /**
                 * Extension of {@code Encoder} exposing extra methods relevant in the context
                 * of HTTP request or response body encoding.
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 * @param <T> the type of elements in the input stream
                 */
                // @ts-ignore
                interface HttpMessageEncoder<T> {
                    /**
                     * Return "streaming" media types for which flushing should be performed
                     * automatically vs at the end of the input stream.
                     */
                    // @ts-ignore
                    getStreamingMediaTypes(): Array<org.springframework.http.MediaType>
                    /**
                     * Get decoding hints based on the server request or annotations on the
                     * target controller method parameter.
                     * @param actualType the actual source type to encode, possibly a reactive
                     *  wrapper and sourced from {#link org.springframework.core.MethodParameter},
                     *  i.e. providing access to method annotations.
                     * @param elementType the element type within {#code Flux/Mono} that we're
                     *  trying to encode.
                     * @param request the current request
                     * @param response the current response
                     * @return a Map with hints, possibly empty
                     */
                    // @ts-ignore
                    getEncodeHints(actualType: ResolvableType, elementType: ResolvableType, mediaType: org.springframework.http.MediaType, request: org.springframework.http.server.reactive.ServerHttpRequest, response: org.springframework.http.server.reactive.ServerHttpResponse): java.util.Map<java.lang.String | string, java.lang.Object | any>
                }
            }
        }
    }
}
