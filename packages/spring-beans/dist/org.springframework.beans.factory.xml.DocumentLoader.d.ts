declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * Strategy interface for loading an XML {@link Document}.
                     * @author Rob Harrop
                     * @since 2.0
                     * @see DefaultDocumentLoader
                     */
                    // @ts-ignore
                    interface DocumentLoader {
                        /**
                         * Load a {@link Document document} from the supplied {@link InputSource source}.
                         * @param inputSource the source of the document that is to be loaded
                         * @param entityResolver the resolver that is to be used to resolve any entities
                         * @param errorHandler used to report any errors during document loading
                         * @param validationMode the type of validation
                         *  {#link org.springframework.util.xml.XmlValidationModeDetector#VALIDATION_DTD DTD}
                         *  or {@link org.springframework.util.xml.XmlValidationModeDetector#VALIDATION_XSD XSD})
                         * @param namespaceAware {#code true} if support for XML namespaces is to be provided
                         * @return the loaded {#link Document document}
                         * @throws Exception if an error occurs
                         */
                        // @ts-ignore
                        loadDocument(inputSource: org.xml.sax.InputSource, entityResolver: org.xml.sax.EntityResolver, errorHandler: org.xml.sax.ErrorHandler, validationMode: number /*int*/, namespaceAware: boolean): org.w3c.dom.Document
                    }
                }
            }
        }
    }
}
