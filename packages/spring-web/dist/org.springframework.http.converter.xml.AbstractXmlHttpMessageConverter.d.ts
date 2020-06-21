declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace xml {
                    /**
                     * Abstract base class for {@link org.springframework.http.converter.HttpMessageConverter HttpMessageConverters}
                     * that convert from/to XML.
                     * <p>By default, subclasses of this converter support {@code text/xml}, {@code application/xml}, and {@code
                     * application/*-xml}. This can be overridden by setting the {@link #setSupportedMediaTypes(java.util.List)
                     * supportedMediaTypes} property.
                     * @author Arjen Poutsma
                     * @author Juergen Hoeller
                     * @since 3.0
                     * @param <T> the converted object type
                     */
                    // @ts-ignore
                    abstract class AbstractXmlHttpMessageConverter<T> extends org.springframework.http.converter.AbstractHttpMessageConverter<T> {
                        /**
                         * Protected constructor that sets the {@link #setSupportedMediaTypes(java.util.List) supportedMediaTypes}
                         * to {@code text/xml} and {@code application/xml}, and {@code application/*-xml}.
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public readInternal(clazz: java.lang.Class<any>, inputMessage: org.springframework.http.HttpInputMessage): T
                        // @ts-ignore
                        writeInternal(t: T, outputMessage: org.springframework.http.HttpOutputMessage): void
                        /**
                         * Transforms the given {@code Source} to the {@code Result}.
                         * @param source the source to transform from
                         * @param result the result to transform to
                         * @throws TransformerException in case of transformation errors
                         */
                        // @ts-ignore
                        transform(source: javax.xml.transform.Source, result: javax.xml.transform.Result): void
                        /**
                         * Abstract template method called from {@link #read(Class, HttpInputMessage)}.
                         * @param clazz the type of object to return
                         * @param headers the HTTP input headers
                         * @param source the HTTP input body
                         * @return the converted object
                         * @throws Exception in case of I/O or conversion errors
                         */
                        // @ts-ignore
                        abstract readFromSource(clazz: java.lang.Class<any>, headers: org.springframework.http.HttpHeaders, source: javax.xml.transform.Source): T
                        /**
                         * Abstract template method called from {@link #writeInternal(Object, HttpOutputMessage)}.
                         * @param t the object to write to the output message
                         * @param headers the HTTP output headers
                         * @param result the HTTP output body
                         * @throws Exception in case of I/O or conversion errors
                         */
                        // @ts-ignore
                        abstract writeToResult(t: T, headers: org.springframework.http.HttpHeaders, result: javax.xml.transform.Result): void
                    }
                }
            }
        }
    }
}
