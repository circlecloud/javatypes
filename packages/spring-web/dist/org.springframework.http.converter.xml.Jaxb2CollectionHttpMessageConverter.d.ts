declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace xml {
                    /**
                     * An {@code HttpMessageConverter} that can read XML collections using JAXB2.
                     * <p>This converter can read {@linkplain Collection collections} that contain classes
                     * annotated with {@link XmlRootElement} and {@link XmlType}. Note that this converter
                     * does not support writing.
                     * @author Arjen Poutsma
                     * @author Rossen Stoyanchev
                     * @since 3.2
                     * @param <T> the converted object type
                     */
                    // @ts-ignore
                    class Jaxb2CollectionHttpMessageConverter<T extends java.util.Collection> extends org.springframework.http.converter.xml.AbstractJaxb2HttpMessageConverter<T> implements org.springframework.http.converter.GenericHttpMessageConverter<T> {
                        // @ts-ignore
                        constructor()
                        /**
                         * Always returns {@code false} since Jaxb2CollectionHttpMessageConverter
                         * required generic type information in order to read a Collection.
                         */
                        // @ts-ignore
                        canRead(clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                        /**
                         * {@inheritDoc}
                         * <p>Jaxb2CollectionHttpMessageConverter can read a generic
                         * {@link Collection} where the generic type is a JAXB type annotated with
                         * {@link XmlRootElement} or {@link XmlType}.
                         */
                        // @ts-ignore
                        canRead(type: java.lang.reflect.Type, contextClass: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                        /**
                         * Always returns {@code false} since Jaxb2CollectionHttpMessageConverter
                         * does not convert collections to XML.
                         */
                        // @ts-ignore
                        canWrite(clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                        /**
                         * Always returns {@code false} since Jaxb2CollectionHttpMessageConverter
                         * does not convert collections to XML.
                         */
                        // @ts-ignore
                        canWrite(type: java.lang.reflect.Type, clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                        // @ts-ignore
                        supports(clazz: java.lang.Class<any>): boolean
                        // @ts-ignore
                        readFromSource(clazz: java.lang.Class<T>, headers: org.springframework.http.HttpHeaders, source: javax.xml.transform.Source): T
                        // @ts-ignore
                        read(type: java.lang.reflect.Type, contextClass: java.lang.Class<any>, inputMessage: org.springframework.http.HttpInputMessage): T
                        /**
                         * Create a Collection of the given type, with the given initial capacity
                         * (if supported by the Collection type).
                         * @param collectionClass the type of Collection to instantiate
                         * @return the created Collection instance
                         */
                        // @ts-ignore
                        createCollection(collectionClass: java.lang.Class<any>): T
                        // @ts-ignore
                        write(t: T extends java.util.Collection, type: java.lang.reflect.Type, contentType: org.springframework.http.MediaType, outputMessage: org.springframework.http.HttpOutputMessage): void
                        // @ts-ignore
                        writeToResult(t: T extends java.util.Collection, headers: org.springframework.http.HttpHeaders, result: javax.xml.transform.Result): void
                        /**
                         * Create an {@code XMLInputFactory} that this converter will use to create
                         * {@link javax.xml.stream.XMLStreamReader} and {@link javax.xml.stream.XMLEventReader}
                         * objects.
                         * <p>Can be overridden in subclasses, adding further initialization of the factory.
                         * The resulting factory is cached, so this method will only be called once.
                         * @see StaxUtils#createDefensiveInputFactory()
                         */
                        // @ts-ignore
                        createXmlInputFactory(): javax.xml.stream.XMLInputFactory
                    }
                }
            }
        }
    }
}
