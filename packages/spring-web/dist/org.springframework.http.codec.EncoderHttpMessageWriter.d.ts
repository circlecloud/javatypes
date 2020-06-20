declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                /**
                 * {@code HttpMessageWriter} that wraps and delegates to an {@link Encoder}.
                 * <p>Also a {@code HttpMessageWriter} that pre-resolves encoding hints
                 * from the extra information available on the server side such as the request
                 * or controller method annotations.
                 * @author Arjen Poutsma
                 * @author Sebastien Deleuze
                 * @author Rossen Stoyanchev
                 * @author Brian Clozel
                 * @author Sam Brannen
                 * @since 5.0
                 * @param <T> the type of objects in the input stream
                 */
                // @ts-ignore
                class EncoderHttpMessageWriter<T> extends java.lang.Object implements org.springframework.http.codec.HttpMessageWriter<T> {
                    /**
                     * Create an instance wrapping the given {@link Encoder}.
                     */
                    // @ts-ignore
                    constructor(encoder: object)
                    /**
                     * Return the {@code Encoder} of this writer.
                     */
                    // @ts-ignore
                    getEncoder(): <any>
                    // @ts-ignore
                    getWritableMediaTypes(): java.util.List<org.springframework.http.MediaType>
                    // @ts-ignore
                    canWrite(elementType: ResolvableType, mediaType: org.springframework.http.MediaType): boolean
                    // @ts-ignore
                    write(inputStream: object, elementType: ResolvableType, mediaType: org.springframework.http.MediaType, message: org.springframework.http.ReactiveHttpOutputMessage, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    // @ts-ignore
                    write(inputStream: object, actualType: ResolvableType, elementType: ResolvableType, mediaType: org.springframework.http.MediaType, request: org.springframework.http.server.reactive.ServerHttpRequest, response: org.springframework.http.server.reactive.ServerHttpResponse, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    /**
                     * Get additional hints for encoding for example based on the server request
                     * or annotations from controller method parameters. By default, delegate to
                     * the encoder if it is an instance of {@link HttpMessageEncoder}.
                     */
                    // @ts-ignore
                    getWriteHints(streamType: ResolvableType, elementType: ResolvableType, mediaType: org.springframework.http.MediaType, request: org.springframework.http.server.reactive.ServerHttpRequest, response: org.springframework.http.server.reactive.ServerHttpResponse): java.util.Map<java.lang.String, java.lang.Object>
                }
            }
        }
    }
}
