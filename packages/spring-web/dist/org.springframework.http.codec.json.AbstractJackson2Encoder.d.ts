declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace json {
                    /**
                     * Base class providing support methods for Jackson 2.9 encoding. For non-streaming use
                     * cases, {@link Flux} elements are collected into a {@link List} before serialization for
                     * performance reason.
                     * @author Sebastien Deleuze
                     * @author Arjen Poutsma
                     * @since 5.0
                     */
                    // @ts-ignore
                    abstract class AbstractJackson2Encoder extends org.springframework.http.codec.json.Jackson2CodecSupport implements org.springframework.http.codec.HttpMessageEncoder<java.lang.Object | any> {
                        /**
                         * Constructor with a Jackson {@link ObjectMapper} to use.
                         */
                        // @ts-ignore
                        constructor(mapper: ObjectMapper, ...mimeTypes: MimeType[])
                        /**
                         * Configure "streaming" media types for which flushing should be performed
                         * automatically vs at the end of the stream.
                         * <p>By default this is set to {@link MediaType#APPLICATION_STREAM_JSON}.
                         * @param mediaTypes one or more media types to add to the list
                         * @see HttpMessageEncoder#getStreamingMediaTypes()
                         */
                        // @ts-ignore
                        public setStreamingMediaTypes(mediaTypes: java.util.List<org.springframework.http.MediaType> | Array<org.springframework.http.MediaType>): void
                        // @ts-ignore
                        public canEncode(elementType: ResolvableType, mimeType: MimeType): boolean
                        // @ts-ignore
                        public encode(inputStream: object, bufferFactory: DataBufferFactory, elementType: ResolvableType, mimeType: MimeType, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): object
                        // @ts-ignore
                        public encodeValue(value: java.lang.Object | any, bufferFactory: DataBufferFactory, valueType: ResolvableType, mimeType: MimeType, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): DataBuffer
                        // @ts-ignore
                        customizeWriter(writer: ObjectWriter, mimeType: MimeType, elementType: ResolvableType, hints: java.util.Map<java.lang.String | string, java.lang.Object | any>): ObjectWriter
                        /**
                         * Determine the JSON encoding to use for the given mime type.
                         * @param mimeType the mime type as requested by the caller
                         * @return the JSON encoding to use (never {#code null})
                         * @since 5.0.5
                         */
                        // @ts-ignore
                        getJsonEncoding(mimeType: MimeType): JsonEncoding
                        // @ts-ignore
                        public getEncodableMimeTypes(): Array<MimeType>
                        // @ts-ignore
                        public getStreamingMediaTypes(): Array<org.springframework.http.MediaType>
                        // @ts-ignore
                        public getEncodeHints(actualType: ResolvableType, elementType: ResolvableType, mediaType: org.springframework.http.MediaType, request: org.springframework.http.server.reactive.ServerHttpRequest, response: org.springframework.http.server.reactive.ServerHttpResponse): java.util.Map<java.lang.String | string, java.lang.Object | any>
                        // @ts-ignore
                        getAnnotation<A extends java.lang.annotation.Annotation>(parameter: MethodParameter, annotType: java.lang.Class<A>): A
                    }
                }
            }
        }
    }
}
