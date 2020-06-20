declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace xml {
                    /**
                     * Implementation of {@link org.springframework.http.converter.HttpMessageConverter HttpMessageConverter}
                     * that can read and write XML using Spring's {@link Marshaller} and {@link Unmarshaller} abstractions.
                     * <p>This converter requires a {@code Marshaller} and {@code Unmarshaller} before it can be used.
                     * These can be injected by the {@linkplain #MarshallingHttpMessageConverter(Marshaller) constructor}
                     * or {@linkplain #setMarshaller(Marshaller) bean properties}.
                     * <p>By default, this converter supports {@code text/xml} and {@code application/xml}. This can be
                     * overridden by setting the {@link #setSupportedMediaTypes(java.util.List) supportedMediaTypes} property.
                     * @author Arjen Poutsma
                     * @since 3.0
                     */
                    // @ts-ignore
                    class MarshallingHttpMessageConverter extends org.springframework.http.converter.xml.AbstractXmlHttpMessageConverter<java.lang.Object> {
                        /**
                         * Construct a new {@code MarshallingHttpMessageConverter} with no {@link Marshaller} or
                         * {@link Unmarshaller} set. The Marshaller and Unmarshaller must be set after construction
                         * by invoking {@link #setMarshaller(Marshaller)} and {@link #setUnmarshaller(Unmarshaller)}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct a new {@code MarshallingMessageConverter} with the given {@link Marshaller} set.
                         * <p>If the given {@link Marshaller} also implements the {@link Unmarshaller} interface,
                         * it is used for both marshalling and unmarshalling. Otherwise, an exception is thrown.
                         * <p>Note that all {@code Marshaller} implementations in Spring also implement the
                         * {@code Unmarshaller} interface, so that you can safely use this constructor.
                         * @param marshaller object used as marshaller and unmarshaller
                         */
                        // @ts-ignore
                        constructor(marshaller: Marshaller)
                        /**
                         * Construct a new {@code MarshallingMessageConverter} with the given
                         * {@code Marshaller} and {@code Unmarshaller}.
                         * @param marshaller the Marshaller to use
                         * @param unmarshaller the Unmarshaller to use
                         */
                        // @ts-ignore
                        constructor(marshaller: Marshaller, unmarshaller: Unmarshaller)
                        /**
                         * Set the {@link Marshaller} to be used by this message converter.
                         */
                        // @ts-ignore
                        setMarshaller(marshaller: Marshaller): void
                        /**
                         * Set the {@link Unmarshaller} to be used by this message converter.
                         */
                        // @ts-ignore
                        setUnmarshaller(unmarshaller: Unmarshaller): void
                        // @ts-ignore
                        canRead(clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                        // @ts-ignore
                        canWrite(clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                        // @ts-ignore
                        supports(clazz: java.lang.Class<any>): boolean
                        // @ts-ignore
                        readFromSource(clazz: java.lang.Class<any>, headers: org.springframework.http.HttpHeaders, source: javax.xml.transform.Source): java.lang.Object
                        // @ts-ignore
                        writeToResult(o: any, headers: org.springframework.http.HttpHeaders, result: javax.xml.transform.Result): void
                    }
                }
            }
        }
    }
}
