declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                /**
                 * {@code HttpMessageWriter} for {@code "text/event-stream"} responses.
                 * @author Sebastien Deleuze
                 * @author Arjen Poutsma
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                class ServerSentEventHttpMessageWriter extends java.lang.Object implements org.springframework.http.codec.HttpMessageWriter<java.lang.Object> {
                    /**
                     * Constructor without an {@code Encoder}. In this mode only {@code String}
                     * is supported for event data to be encoded.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructor with JSON {@code Encoder} for encoding objects.
                     * Support for {@code String} event data is built-in.
                     * @param encoder the Encoder to use (may be {#code null})
                     */
                    // @ts-ignore
                    constructor(encoder: object)
                    /**
                     * Return the configured {@code Encoder}, if any.
                     */
                    // @ts-ignore
                    getEncoder(): <any>
                    // @ts-ignore
                    getWritableMediaTypes(): java.util.List<org.springframework.http.MediaType>
                    // @ts-ignore
                    canWrite(elementType: ResolvableType, mediaType: org.springframework.http.MediaType): boolean
                    // @ts-ignore
                    write(input: object, elementType: ResolvableType, mediaType: org.springframework.http.MediaType, message: org.springframework.http.ReactiveHttpOutputMessage, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    // @ts-ignore
                    write(input: object, actualType: ResolvableType, elementType: ResolvableType, mediaType: org.springframework.http.MediaType, request: org.springframework.http.server.reactive.ServerHttpRequest, response: org.springframework.http.server.reactive.ServerHttpResponse, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                }
            }
        }
    }
}
