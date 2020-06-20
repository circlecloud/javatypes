declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                /**
                 * Strategy for encoding a stream of objects of type {@code <T>} and writing
                 * the encoded stream of bytes to an {@link ReactiveHttpOutputMessage}.
                 * @author Rossen Stoyanchev
                 * @author Arjen Poutsma
                 * @author Sebastien Deleuze
                 * @since 5.0
                 * @param <T> the type of objects in the input stream
                 */
                // @ts-ignore
                interface HttpMessageWriter<T> {
                    /**
                     * Return the {@link MediaType}'s that this writer supports.
                     */
                    // @ts-ignore
                    getWritableMediaTypes(): java.util.List<org.springframework.http.MediaType>
                    /**
                     * Whether the given object type is supported by this writer.
                     * @param elementType the type of object to check
                     * @param mediaType the media type for the write (possibly {#code null})
                     * @return {#code true} if writable, {@code false} otherwise
                     */
                    // @ts-ignore
                    canWrite(elementType: ResolvableType, mediaType: org.springframework.http.MediaType): boolean
                    /**
                     * Write an given stream of object to the output message.
                     * @param inputStream the objects to write
                     * @param elementType the type of objects in the stream which must have been
                     *  previously checked via {#link #canWrite(ResolvableType, MediaType)}
                     * @param mediaType the content type for the write (possibly {#code null} to
                     *  indicate that the default content type of the writer must be used)
                     * @param message the message to write to
                     * @param hints additional information about how to encode and write
                     * @return indicates completion or error
                     */
                    // @ts-ignore
                    write(inputStream: object, elementType: ResolvableType, mediaType: org.springframework.http.MediaType, message: org.springframework.http.ReactiveHttpOutputMessage, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    /**
                     * Server-side only alternative to
                     * {@link #write(Publisher, ResolvableType, MediaType, ReactiveHttpOutputMessage, Map)}
                     * with additional context available.
                     * @param actualType the actual return type of the method that returned the
                     *  value; for annotated controllers, the {#link MethodParameter} can be
                     *  accessed via {@link ResolvableType#getSource()}.
                     * @param elementType the type of Objects in the input stream
                     * @param mediaType the content type to use (possibly {#code null} indicating
                     *  the default content type of the writer should be used)
                     * @param request the current request
                     * @param response the current response
                     * @return a {#link Mono} that indicates completion of writing or error
                     */
                    // @ts-ignore
                    write(inputStream: object, actualType: ResolvableType, elementType: ResolvableType, mediaType: org.springframework.http.MediaType, request: org.springframework.http.server.reactive.ServerHttpRequest, response: org.springframework.http.server.reactive.ServerHttpResponse, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                }
            }
        }
    }
}
