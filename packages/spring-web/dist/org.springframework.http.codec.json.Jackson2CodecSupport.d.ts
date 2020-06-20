declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace json {
                    /**
                     * Base class providing support methods for Jackson 2.9 encoding and decoding.
                     * @author Sebastien Deleuze
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    class Jackson2CodecSupport extends java.lang.Object {
                        /**
                         * Constructor with a Jackson {@link ObjectMapper} to use.
                         */
                        // @ts-ignore
                        constructor(objectMapper: ObjectMapper, ...mimeTypes: MimeType[])
                        /**
                         * The key for the hint to specify a "JSON View" for encoding or decoding
                         * with the value expected to be a {@link Class}.
                         * @see <a href="https://www.baeldung.com/jackson-json-view-annotation">Jackson JSON Views</a>
                         */
                        // @ts-ignore
                        readonly JSON_VIEW_HINT: string
                        // @ts-ignore
                        readonly logger: Log
                        // @ts-ignore
                        getObjectMapper(): ObjectMapper
                        /**
                         * Subclasses should expose this as "decodable" or "encodable" mime types.
                         */
                        // @ts-ignore
                        getMimeTypes(): java.util.List<MimeType>
                        // @ts-ignore
                        supportsMimeType(mimeType: MimeType): boolean
                        // @ts-ignore
                        getJavaType(type: java.lang.reflect.Type, contextClass: java.lang.Class<any>): JavaType
                        // @ts-ignore
                        getHints(resolvableType: ResolvableType): java.util.Map<java.lang.String, java.lang.Object>
                        // @ts-ignore
                        getParameter(type: ResolvableType): MethodParameter
                        // @ts-ignore
                        abstract getAnnotation<A extends java.lang.annotation.Annotation>(parameter: MethodParameter, annotType: java.lang.Class<A>): A
                    }
                }
            }
        }
    }
}
