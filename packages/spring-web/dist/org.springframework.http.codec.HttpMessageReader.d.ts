declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                /**
                 * Strategy for reading from a {@link ReactiveHttpInputMessage} and decoding
                 * the stream of bytes to Objects of type {@code <T>}.
                 * @author Rossen Stoyanchev
                 * @author Arjen Poutsma
                 * @author Sebastien Deleuze
                 * @since 5.0
                 * @param <T> the type of objects in the decoded output stream
                 */
                // @ts-ignore
                interface HttpMessageReader<T> {
                    /**
                     * Return the {@link MediaType}'s that this reader supports.
                     */
                    // @ts-ignore
                    getReadableMediaTypes(): java.util.List<org.springframework.http.MediaType>
                    /**
                     * Whether the given object type is supported by this reader.
                     * @param elementType the type of object to check
                     * @param mediaType the media type for the read (possibly {#code null})
                     * @return {#code true} if readable, {@code false} otherwise
                     */
                    // @ts-ignore
                    canRead(elementType: ResolvableType, mediaType: org.springframework.http.MediaType): boolean
                    /**
                     * Read from the input message and encode to a stream of objects.
                     * @param elementType the type of objects in the stream which must have been
                     *  previously checked via {#link #canRead(ResolvableType, MediaType)}
                     * @param message the message to read from
                     * @param hints additional information about how to read and decode the input
                     * @return the decoded stream of elements
                     */
                    // @ts-ignore
                    read(elementType: ResolvableType, message: org.springframework.http.ReactiveHttpInputMessage, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    /**
                     * Read from the input message and encode to a single object.
                     * @param elementType the type of objects in the stream which must have been
                     *  previously checked via {#link #canRead(ResolvableType, MediaType)}
                     * @param message the message to read from
                     * @param hints additional information about how to read and decode the input
                     * @return the decoded object
                     */
                    // @ts-ignore
                    readMono(elementType: ResolvableType, message: org.springframework.http.ReactiveHttpInputMessage, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    /**
                     * Server-side only alternative to
                     * {@link #read(ResolvableType, ReactiveHttpInputMessage, Map)}
                     * with additional context available.
                     * @param actualType the actual type of the target method parameter;
                     *  for annotated controllers, the {#link MethodParameter} can be accessed
                     *  via {@link ResolvableType#getSource()}.
                     * @param elementType the type of Objects in the output stream
                     * @param request the current request
                     * @param response the current response
                     * @param hints additional information about how to read the body
                     * @return the decoded stream of elements
                     */
                    // @ts-ignore
                    read(actualType: ResolvableType, elementType: ResolvableType, request: org.springframework.http.server.reactive.ServerHttpRequest, response: org.springframework.http.server.reactive.ServerHttpResponse, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    /**
                     * Server-side only alternative to
                     * {@link #readMono(ResolvableType, ReactiveHttpInputMessage, Map)}
                     * with additional, context available.
                     * @param actualType the actual type of the target method parameter;
                     *  for annotated controllers, the {#link MethodParameter} can be accessed
                     *  via {@link ResolvableType#getSource()}.
                     * @param elementType the type of Objects in the output stream
                     * @param request the current request
                     * @param response the current response
                     * @param hints additional information about how to read the body
                     * @return the decoded stream of elements
                     */
                    // @ts-ignore
                    readMono(actualType: ResolvableType, elementType: ResolvableType, request: org.springframework.http.server.reactive.ServerHttpRequest, response: org.springframework.http.server.reactive.ServerHttpResponse, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                }
            }
        }
    }
}
