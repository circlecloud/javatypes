declare namespace org {
    namespace springframework {
        namespace core {
            namespace codec {
                /**
                 * Strategy to encode a stream of Objects of type {@code <T>} into an output
                 * stream of bytes.
                 * @author Sebastien Deleuze
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 * @param <T> the type of elements in the input stream
                 */
                // @ts-ignore
                interface Encoder<T> {
                    /**
                     * Whether the encoder supports the given source element type and the MIME
                     * type for the output stream.
                     * @param elementType the type of elements in the source stream
                     * @param mimeType the MIME type for the output stream
                     *  (can be {#code null} if not specified)
                     * @return {#code true} if supported, {@code false} otherwise
                     */
                    // @ts-ignore
                    canEncode(elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType): boolean
                    /**
                     * Encode a stream of Objects of type {@code T} into a {@link DataBuffer}
                     * output stream.
                     * @param inputStream the input stream of Objects to encode. If the input should be
                     *  encoded as a single value rather than as a stream of elements, an instance of
                     *  {#link Mono} should be used.
                     * @param bufferFactory for creating output stream {#code DataBuffer}'s
                     * @param elementType the expected type of elements in the input stream;
                     *  this type must have been previously passed to the {#link #canEncode}
                     *  method and it must have returned {@code true}.
                     * @param mimeType the MIME type for the output content (optional)
                     * @param hints additional information about how to encode
                     * @return the output stream
                     */
                    // @ts-ignore
                    encode(inputStream: object, bufferFactory: org.springframework.core.io.buffer.DataBufferFactory, elementType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    /**
                     * Encode an Object of type T to a data buffer. This is useful for scenarios,
                     * that distinct messages (or events) are encoded and handled individually,
                     * in fully aggregated form.
                     * <p>By default this method raises {@link UnsupportedOperationException}
                     * and it is expected that some encoders cannot produce a single buffer or
                     * cannot do so synchronously (e.g. encoding a {@code Resource}).
                     * @param value the value to be encoded
                     * @param bufferFactory for creating the output {#code DataBuffer}
                     * @param valueType the type for the value being encoded
                     * @param mimeType the MIME type for the output content (optional)
                     * @param hints additional information about how to encode
                     * @return the encoded content
                     * @since 5.2
                     */
                    // @ts-ignore
                    encodeValue(value: T, bufferFactory: org.springframework.core.io.buffer.DataBufferFactory, valueType: org.springframework.core.ResolvableType, mimeType: org.springframework.util.MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): org.springframework.core.io.buffer.DataBuffer
                    /**
                     * Return the list of mime types this encoder supports.
                     */
                    // @ts-ignore
                    getEncodableMimeTypes(): java.util.List<org.springframework.util.MimeType>
                }
            }
        }
    }
}
