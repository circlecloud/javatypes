declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace xml {
                    /**
                     * Abstract base class for {@link org.springframework.http.converter.HttpMessageConverter HttpMessageConverters}
                     * that use JAXB2. Creates {@link JAXBContext} object lazily.
                     * @author Arjen Poutsma
                     * @author Rossen Stoyanchev
                     * @since 3.0
                     * @param <T> the converted object type
                     */
                    // @ts-ignore
                    abstract class AbstractJaxb2HttpMessageConverter<T> extends org.springframework.http.converter.xml.AbstractXmlHttpMessageConverter<T> {
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new {@link Marshaller} for the given class.
                         * @param clazz the class to create the marshaller for
                         * @return the {#code Marshaller}
                         * @throws HttpMessageConversionException in case of JAXB errors
                         */
                        // @ts-ignore
                        createMarshaller(clazz: java.lang.Class<any>): javax.xml.bind.Marshaller
                        /**
                         * Customize the {@link Marshaller} created by this
                         * message converter before using it to write the object to the output.
                         * @param marshaller the marshaller to customize
                         * @since 4.0.3
                         * @see #createMarshaller(Class)
                         */
                        // @ts-ignore
                        customizeMarshaller(marshaller: javax.xml.bind.Marshaller): void
                        /**
                         * Create a new {@link Unmarshaller} for the given class.
                         * @param clazz the class to create the unmarshaller for
                         * @return the {#code Unmarshaller}
                         * @throws HttpMessageConversionException in case of JAXB errors
                         */
                        // @ts-ignore
                        createUnmarshaller(clazz: java.lang.Class<any>): javax.xml.bind.Unmarshaller
                        /**
                         * Customize the {@link Unmarshaller} created by this
                         * message converter before using it to read the object from the input.
                         * @param unmarshaller the unmarshaller to customize
                         * @since 4.0.3
                         * @see #createUnmarshaller(Class)
                         */
                        // @ts-ignore
                        customizeUnmarshaller(unmarshaller: javax.xml.bind.Unmarshaller): void
                        /**
                         * Return a {@link JAXBContext} for the given class.
                         * @param clazz the class to return the context for
                         * @return the {#code JAXBContext}
                         * @throws HttpMessageConversionException in case of JAXB errors
                         */
                        // @ts-ignore
                        getJaxbContext(clazz: java.lang.Class<any>): javax.xml.bind.JAXBContext
                    }
                }
            }
        }
    }
}
