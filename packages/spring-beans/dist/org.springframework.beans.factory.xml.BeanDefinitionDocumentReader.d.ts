declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * SPI for parsing an XML document that contains Spring bean definitions.
                     * Used by {@link XmlBeanDefinitionReader} for actually parsing a DOM document.
                     * <p>Instantiated per document to parse: implementations can hold
                     * state in instance variables during the execution of the
                     * {@code registerBeanDefinitions} method &mdash; for example, global
                     * settings that are defined for all bean definitions in the document.
                     * @author Juergen Hoeller
                     * @author Rob Harrop
                     * @since 18.12.2003
                     * @see XmlBeanDefinitionReader#setDocumentReaderClass
                     */
                    // @ts-ignore
                    interface BeanDefinitionDocumentReader {
                        /**
                         * Read bean definitions from the given DOM document and
                         * register them with the registry in the given reader context.
                         * @param doc the DOM document
                         * @param readerContext the current context of the reader
                         *  (includes the target registry and the resource being parsed)
                         * @throws BeanDefinitionStoreException in case of parsing errors
                         */
                        // @ts-ignore
                        registerBeanDefinitions(doc: org.w3c.dom.Document, readerContext: org.springframework.beans.factory.xml.XmlReaderContext): void
                    }
                }
            }
        }
    }
}
