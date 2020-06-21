declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace json {
                    /**
                     * Common base class for plain JSON converters, e.g. Gson and JSON-B.
                     * <p>Note that the Jackson converters have a dedicated class hierarchy
                     * due to their multi-format support.
                     * @author Juergen Hoeller
                     * @since 5.0
                     * @see GsonHttpMessageConverter
                     * @see JsonbHttpMessageConverter
                     * @see #readInternal(Type, Reader)
                     * @see #writeInternal(Object, Type, Writer)
                     */
                    // @ts-ignore
                    abstract class AbstractJsonHttpMessageConverter extends org.springframework.http.converter.AbstractGenericHttpMessageConverter<java.lang.Object | any> {
                        // @ts-ignore
                        constructor()
                        /**
                         * The default charset used by the converter.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_CHARSET: java.nio.charset.Charset
                        /**
                         * Specify a custom prefix to use for JSON output. Default is none.
                         * @see #setPrefixJson
                         */
                        // @ts-ignore
                        public setJsonPrefix(jsonPrefix: java.lang.String | string): void
                        /**
                         * Indicate whether the JSON output by this view should be prefixed with ")]}', ".
                         * Default is {@code false}.
                         * <p>Prefixing the JSON string in this manner is used to help prevent JSON
                         * Hijacking. The prefix renders the string syntactically invalid as a script
                         * so that it cannot be hijacked.
                         * This prefix should be stripped before parsing the string as JSON.
                         * @see #setJsonPrefix
                         */
                        // @ts-ignore
                        public setPrefixJson(prefixJson: boolean): void
                        // @ts-ignore
                        public read(type: java.lang.reflect.Type, contextClass: java.lang.Class<any>, inputMessage: org.springframework.http.HttpInputMessage): any
                        // @ts-ignore
                        readInternal(clazz: java.lang.Class<any>, inputMessage: org.springframework.http.HttpInputMessage): any
                        // @ts-ignore
                        writeInternal(o: java.lang.Object | any, type: java.lang.reflect.Type, outputMessage: org.springframework.http.HttpOutputMessage): void
                        /**
                         * Template method that reads the JSON-bound object from the given {@link Reader}.
                         * @param resolvedType the resolved generic type
                         * @param reader the {#code} Reader to use
                         * @return the JSON-bound object
                         * @throws Exception in case of read/parse failures
                         */
                        // @ts-ignore
                        abstract readInternal(resolvedType: java.lang.reflect.Type, reader: java.io.Reader): any
                        /**
                         * Template method that writes the JSON-bound object to the given {@link Writer}.
                         * @param o the object to write to the output message
                         * @param type the type of object to write (may be {#code null})
                         * @param writer the {#code} Writer to use
                         * @throws Exception in case of write failures
                         */
                        // @ts-ignore
                        abstract writeInternal(o: java.lang.Object | any, type: java.lang.reflect.Type, writer: java.io.Writer): void
                    }
                }
            }
        }
    }
}
