declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * Spring's default {@link DocumentLoader} implementation.
                     * <p>Simply loads {@link Document documents} using the standard JAXP-configured
                     * XML parser. If you want to change the {@link DocumentBuilder} that is used to
                     * load documents, then one strategy is to define a corresponding Java system property
                     * when starting your JVM. For example, to use the Oracle {@link DocumentBuilder},
                     * you might start your application like as follows:
                     * <pre code="class">java -Djavax.xml.parsers.DocumentBuilderFactory=oracle.xml.jaxp.JXDocumentBuilderFactory MyMainClass</pre>
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 2.0
                     */
                    // @ts-ignore
                    class DefaultDocumentLoader extends java.lang.Object implements org.springframework.beans.factory.xml.DocumentLoader {
                        // @ts-ignore
                        constructor()
                        /**
                         * Load the {@link Document} at the supplied {@link InputSource} using the standard JAXP-configured
                         * XML parser.
                         */
                        // @ts-ignore
                        loadDocument(inputSource: org.xml.sax.InputSource, entityResolver: org.xml.sax.EntityResolver, errorHandler: org.xml.sax.ErrorHandler, validationMode: number /*int*/, namespaceAware: boolean): org.w3c.dom.Document
                        /**
                         * Create the {@link DocumentBuilderFactory} instance.
                         * @param validationMode the type of validation: {#link XmlValidationModeDetector#VALIDATION_DTD DTD}
                         *  or {@link XmlValidationModeDetector#VALIDATION_XSD XSD})
                         * @param namespaceAware whether the returned factory is to provide support for XML namespaces
                         * @return the JAXP DocumentBuilderFactory
                         * @throws ParserConfigurationException if we failed to build a proper DocumentBuilderFactory
                         */
                        // @ts-ignore
                        createDocumentBuilderFactory(validationMode: number /*int*/, namespaceAware: boolean): javax.xml.parsers.DocumentBuilderFactory
                        /**
                         * Create a JAXP DocumentBuilder that this bean definition reader
                         * will use for parsing XML documents. Can be overridden in subclasses,
                         * adding further initialization of the builder.
                         * @param factory the JAXP DocumentBuilderFactory that the DocumentBuilder
                         *  should be created with
                         * @param entityResolver the SAX EntityResolver to use
                         * @param errorHandler the SAX ErrorHandler to use
                         * @return the JAXP DocumentBuilder
                         * @throws ParserConfigurationException if thrown by JAXP methods
                         */
                        // @ts-ignore
                        createDocumentBuilder(factory: javax.xml.parsers.DocumentBuilderFactory, entityResolver: org.xml.sax.EntityResolver, errorHandler: org.xml.sax.ErrorHandler): javax.xml.parsers.DocumentBuilder
                    }
                }
            }
        }
    }
}
