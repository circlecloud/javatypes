declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace json {
                    /**
                     * Abstract base class for Jackson based and content type independent
                     * {@link HttpMessageConverter} implementations.
                     * <p>Compatible with Jackson 2.9 and higher, as of Spring 5.0.
                     * @author Arjen Poutsma
                     * @author Keith Donald
                     * @author Rossen Stoyanchev
                     * @author Juergen Hoeller
                     * @author Sebastien Deleuze
                     * @since 4.1
                     * @see MappingJackson2HttpMessageConverter
                     */
                    // @ts-ignore
                    class AbstractJackson2HttpMessageConverter extends org.springframework.http.converter.AbstractGenericHttpMessageConverter<java.lang.Object> {
                        // @ts-ignore
                        constructor(objectMapper: ObjectMapper)
                        // @ts-ignore
                        constructor(objectMapper: ObjectMapper, supportedMediaType: org.springframework.http.MediaType)
                        // @ts-ignore
                        constructor(objectMapper: ObjectMapper, ...supportedMediaTypes: org.springframework.http.MediaType[])
                        /**
                         * The default charset used by the converter.
                         */
                        // @ts-ignore
                        readonly DEFAULT_CHARSET: java.nio.charset.Charset
                        // @ts-ignore
                        objectMapper: ObjectMapper
                        /**
                         * Set the {@code ObjectMapper} for this view.
                         * If not set, a default {@link ObjectMapper#ObjectMapper() ObjectMapper} is used.
                         * <p>Setting a custom-configured {@code ObjectMapper} is one way to take further
                         * control of the JSON serialization process. For example, an extended
                         * {@link com.fasterxml.jackson.databind.ser.SerializerFactory}
                         * can be configured that provides custom serializers for specific types.
                         * The other option for refining the serialization process is to use Jackson's
                         * provided annotations on the types to be serialized, in which case a
                         * custom-configured ObjectMapper is unnecessary.
                         */
                        // @ts-ignore
                        setObjectMapper(objectMapper: ObjectMapper): void
                        /**
                         * Return the underlying {@code ObjectMapper} for this view.
                         */
                        // @ts-ignore
                        getObjectMapper(): ObjectMapper
                        /**
                         * Whether to use the {@link DefaultPrettyPrinter} when writing JSON.
                         * This is a shortcut for setting up an {@code ObjectMapper} as follows:
                         * <pre class="code">
                         * ObjectMapper mapper = new ObjectMapper();
                         * mapper.configure(SerializationFeature.INDENT_OUTPUT, true);
                         * converter.setObjectMapper(mapper);
                         * </pre>
                         */
                        // @ts-ignore
                        setPrettyPrint(prettyPrint: boolean): void
                        // @ts-ignore
                        canRead(clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                        // @ts-ignore
                        canRead(type: java.lang.reflect.Type, contextClass: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                        // @ts-ignore
                        canWrite(clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                        /**
                         * Determine whether to log the given exception coming from a
                         * {@link ObjectMapper#canDeserialize} / {@link ObjectMapper#canSerialize} check.
                         * @param type the class that Jackson tested for (de-)serializability
                         * @param cause the Jackson-thrown exception to evaluate
                         *  (typically a {#link JsonMappingException})
                         * @since 4.3
                         */
                        // @ts-ignore
                        logWarningIfNecessary(type: java.lang.reflect.Type, cause: Error): void
                        // @ts-ignore
                        readInternal(clazz: java.lang.Class<any>, inputMessage: org.springframework.http.HttpInputMessage): java.lang.Object
                        // @ts-ignore
                        read(type: java.lang.reflect.Type, contextClass: java.lang.Class<any>, inputMessage: org.springframework.http.HttpInputMessage): java.lang.Object
                        // @ts-ignore
                        writeInternal(object: any, type: java.lang.reflect.Type, outputMessage: org.springframework.http.HttpOutputMessage): void
                        /**
                         * Write a prefix before the main content.
                         * @param generator the generator to use for writing content.
                         * @param object the object to write to the output message.
                         */
                        // @ts-ignore
                        writePrefix(generator: JsonGenerator, object: any): void
                        /**
                         * Write a suffix after the main content.
                         * @param generator the generator to use for writing content.
                         * @param object the object to write to the output message.
                         */
                        // @ts-ignore
                        writeSuffix(generator: JsonGenerator, object: any): void
                        /**
                         * Return the Jackson {@link JavaType} for the specified type and context class.
                         * @param type the generic type to return the Jackson JavaType for
                         * @param contextClass a context class for the target type, for example a class
                         *  in which the target type appears in a method signature (can be {#code null})
                         * @return the Jackson JavaType
                         */
                        // @ts-ignore
                        getJavaType(type: java.lang.reflect.Type, contextClass: java.lang.Class<any>): JavaType
                        /**
                         * Determine the JSON encoding to use for the given content type.
                         * @param contentType the media type as requested by the caller
                         * @return the JSON encoding to use (never {#code null})
                         */
                        // @ts-ignore
                        getJsonEncoding(contentType: org.springframework.http.MediaType): JsonEncoding
                        // @ts-ignore
                        getDefaultContentType(object: any): org.springframework.http.MediaType
                        // @ts-ignore
                        getContentLength(object: any, contentType: org.springframework.http.MediaType): java.lang.Long
                    }
                }
            }
        }
    }
}
