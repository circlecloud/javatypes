declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace json {
                    /**
                     * Abstract base class for Jackson 2.9 decoding, leveraging non-blocking parsing.
                     * <p>Compatible with Jackson 2.9.7 and higher.
                     * @author Sebastien Deleuze
                     * @author Rossen Stoyanchev
                     * @author Arjen Poutsma
                     * @since 5.0
                     * @see <a href="https://github.com/FasterXML/jackson-core/issues/57" target="_blank">Add support for non-blocking ("async") JSON parsing</a>
                     */
                    // @ts-ignore
                    class AbstractJackson2Decoder extends org.springframework.http.codec.json.Jackson2CodecSupport implements org.springframework.http.codec.HttpMessageDecoder<java.lang.Object> {
                        /**
                         * Constructor with a Jackson {@link ObjectMapper} to use.
                         */
                        // @ts-ignore
                        constructor(mapper: ObjectMapper, ...mimeTypes: MimeType[])
                        /**
                         * Set the max number of bytes that can be buffered by this decoder. This
                         * is either the size of the entire input when decoding as a whole, or the
                         * size of one top-level JSON object within a JSON stream. When the limit
                         * is exceeded, {@link DataBufferLimitException} is raised.
                         * <p>By default this is set to 256K.
                         * @param byteCount the max number of bytes to buffer, or -1 for unlimited
                         * @since 5.1.11
                         */
                        // @ts-ignore
                        setMaxInMemorySize(byteCount: number /*int*/): void
                        /**
                         * Return the {@link #setMaxInMemorySize configured} byte count limit.
                         * @since 5.1.11
                         */
                        // @ts-ignore
                        getMaxInMemorySize(): int
                        // @ts-ignore
                        canDecode(elementType: ResolvableType, mimeType: MimeType): boolean
                        // @ts-ignore
                        decode(input: object, elementType: ResolvableType, mimeType: MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                        /**
                         * Process the input publisher into a flux. Default implementation returns
                         * {@link Flux#from(Publisher)}, but subclasses can choose to customize
                         * this behavior.
                         * @param input the {#code DataBuffer} input stream to process
                         * @param elementType the expected type of elements in the output stream
                         * @param mimeType the MIME type associated with the input stream (optional)
                         * @param hints additional information about how to do encode
                         * @return the processed flux
                         * @since 5.1.14
                         */
                        // @ts-ignore
                        processInput(input: object, elementType: ResolvableType, mimeType: MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                        // @ts-ignore
                        decodeToMono(input: object, elementType: ResolvableType, mimeType: MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                        // @ts-ignore
                        decode(dataBuffer: DataBuffer, targetType: ResolvableType, mimeType: MimeType, hints: java.util.Map<java.lang.String, java.lang.Object>): java.lang.Object
                        // @ts-ignore
                        getDecodeHints(actualType: ResolvableType, elementType: ResolvableType, request: org.springframework.http.server.reactive.ServerHttpRequest, response: org.springframework.http.server.reactive.ServerHttpResponse): java.util.Map<java.lang.String, java.lang.Object>
                        // @ts-ignore
                        getDecodableMimeTypes(): java.util.List<MimeType>
                        // @ts-ignore
                        getAnnotation<A extends java.lang.annotation.Annotation>(parameter: MethodParameter, annotType: java.lang.Class<A>): A
                    }
                }
            }
        }
    }
}
