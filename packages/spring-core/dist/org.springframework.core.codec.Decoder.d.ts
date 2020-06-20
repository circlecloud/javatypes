declare namespace org {
    namespace springframework {
        namespace core {
            namespace codec {
                /**
                 * Strategy for decoding a {@link DataBuffer} input stream into an output stream
                 * of elements of type {@code <T>}.
                 * @author Sebastien Deleuze
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 * @param <T> the type of elements in the output stream
                 */
                // @ts-ignore
                interface Decoder<T> {
                    /**
                     * Whether the decoder supports the given target element type and the MIME
                     * type of the source stream.
                     * @param elementType the target element type for the output stream
                     * @param mimeType the mime type associated with the stream to decode
                     *  (can be {#code null} if not specified)
                     * @return {#code true} if supported, {@code false} otherwise
                     */
                    // @ts-ignore
                    canDecode(elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType): boolean
                    /**
                     * Decode a {@link DataBuffer} input stream into a Flux of {@code T}.
                     * @param inputStream the {#code DataBuffer} input stream to decode
                     * @param elementType the expected type of elements in the output stream;
                     *  this type must have been previously passed to the {#link #canDecode}
                     *  method and it must have returned {@code true}.
                     * @param mimeType the MIME type associated with the input stream (optional)
                     * @param hints additional information about how to do encode
                     * @return the output stream with decoded elements
                     */
                    // @ts-ignore
                    decode(inputStream: object, elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    /**
                     * Decode a {@link DataBuffer} input stream into a Mono of {@code T}.
                     * @param inputStream the {#code DataBuffer} input stream to decode
                     * @param elementType the expected type of elements in the output stream;
                     *  this type must have been previously passed to the {#link #canDecode}
                     *  method and it must have returned {@code true}.
                     * @param mimeType the MIME type associated with the input stream (optional)
                     * @param hints additional information about how to do encode
                     * @return the output stream with the decoded element
                     */
                    // @ts-ignore
                    decodeToMono(inputStream: object, elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    /**
                     * Return the list of MIME types this decoder supports.
                     */
                    // @ts-ignore
                    getDecodableMimeTypes(): java.util.List<org.springframework.util.MimeType>
                }
            }
        }
    }
}
