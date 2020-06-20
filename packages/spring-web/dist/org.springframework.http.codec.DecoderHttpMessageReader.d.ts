declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                /**
                 * {@code HttpMessageReader} that wraps and delegates to a {@link Decoder}.
                 * <p>Also a {@code HttpMessageReader} that pre-resolves decoding hints
                 * from the extra information available on the server side such as the request
                 * or controller method parameter annotations.
                 * @author Arjen Poutsma
                 * @author Sebastien Deleuze
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 * @param <T> the type of objects in the decoded output stream
                 */
                // @ts-ignore
                class DecoderHttpMessageReader<T> extends java.lang.Object implements org.springframework.http.codec.HttpMessageReader<T> {
                    /**
                     * Create an instance wrapping the given {@link Decoder}.
                     */
                    // @ts-ignore
                    constructor(decoder: object)
                    /**
                     * Return the {@link Decoder} of this reader.
                     */
                    // @ts-ignore
                    getDecoder(): <any>
                    // @ts-ignore
                    getReadableMediaTypes(): java.util.List<org.springframework.http.MediaType>
                    // @ts-ignore
                    canRead(elementType: ResolvableType, mediaType: org.springframework.http.MediaType): boolean
                    // @ts-ignore
                    read(elementType: ResolvableType, message: org.springframework.http.ReactiveHttpInputMessage, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    // @ts-ignore
                    readMono(elementType: ResolvableType, message: org.springframework.http.ReactiveHttpInputMessage, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    /**
                     * Determine the Content-Type of the HTTP message based on the
                     * "Content-Type" header or otherwise default to
                     * {@link MediaType#APPLICATION_OCTET_STREAM}.
                     * @param inputMessage the HTTP message
                     * @return the MediaType, possibly {#code null}.
                     */
                    // @ts-ignore
                    getContentType(inputMessage: org.springframework.http.HttpMessage): org.springframework.http.MediaType
                    // @ts-ignore
                    read(actualType: ResolvableType, elementType: ResolvableType, request: org.springframework.http.server.reactive.ServerHttpRequest, response: org.springframework.http.server.reactive.ServerHttpResponse, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    // @ts-ignore
                    readMono(actualType: ResolvableType, elementType: ResolvableType, request: org.springframework.http.server.reactive.ServerHttpRequest, response: org.springframework.http.server.reactive.ServerHttpResponse, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    /**
                     * Get additional hints for decoding for example based on the server request
                     * or annotations from controller method parameters. By default, delegate to
                     * the decoder if it is an instance of {@link HttpMessageDecoder}.
                     */
                    // @ts-ignore
                    getReadHints(actualType: ResolvableType, elementType: ResolvableType, request: org.springframework.http.server.reactive.ServerHttpRequest, response: org.springframework.http.server.reactive.ServerHttpResponse): java.util.Map<java.lang.String, java.lang.Object>
                }
            }
        }
    }
}
