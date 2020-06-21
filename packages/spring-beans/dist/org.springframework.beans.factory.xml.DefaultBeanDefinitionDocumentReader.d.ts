declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * Default implementation of the {@link BeanDefinitionDocumentReader} interface that
                     * reads bean definitions according to the "spring-beans" DTD and XSD format
                     * (Spring's default XML bean definition format).
                     * <p>The structure, elements, and attribute names of the required XML document
                     * are hard-coded in this class. (Of course a transform could be run if necessary
                     * to produce this format). {@code <beans>} does not need to be the root
                     * element of the XML document: this class will parse all bean definition elements
                     * in the XML file, regardless of the actual root element.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @author Rob Harrop
                     * @author Erik Wiersma
                     * @since 18.12.2003
                     */
                    // @ts-ignore
                    class DefaultBeanDefinitionDocumentReader extends java.lang.Object implements org.springframework.beans.factory.xml.BeanDefinitionDocumentReader {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static readonly BEAN_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly NESTED_BEANS_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly ALIAS_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly NAME_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly ALIAS_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly IMPORT_ELEMENT: java.lang.String | string
                        // @ts-ignore
                        public static readonly RESOURCE_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        public static readonly PROFILE_ATTRIBUTE: java.lang.String | string
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * This implementation parses bean definitions according to the "spring-beans" XSD
                         * (or DTD, historically).
                         * <p>Opens a DOM Document; then initializes the default settings
                         * specified at the {@code <beans/>} level; then parses the contained bean definitions.
                         */
                        // @ts-ignore
                        public registerBeanDefinitions(doc: org.w3c.dom.Document, readerContext: org.springframework.beans.factory.xml.XmlReaderContext): void
                        /**
                         * Return the descriptor for the XML resource that this parser works on.
                         */
                        // @ts-ignore
                        getReaderContext(): org.springframework.beans.factory.xml.XmlReaderContext
                        /**
                         * Invoke the {@link org.springframework.beans.factory.parsing.SourceExtractor}
                         * to pull the source metadata from the supplied {@link Element}.
                         */
                        // @ts-ignore
                        extractSource(ele: org.w3c.dom.Element): any
                        /**
                         * Register each bean definition within the given root {@code <beans/>} element.
                         */
                        // @ts-ignore
                        doRegisterBeanDefinitions(root: org.w3c.dom.Element): void
                        // @ts-ignore
                        createDelegate(readerContext: org.springframework.beans.factory.xml.XmlReaderContext, root: org.w3c.dom.Element, parentDelegate: org.springframework.beans.factory.xml.BeanDefinitionParserDelegate): org.springframework.beans.factory.xml.BeanDefinitionParserDelegate
                        /**
                         * Parse the elements at the root level in the document:
                         * "import", "alias", "bean".
                         * @param root the DOM root element of the document
                         */
                        // @ts-ignore
                        parseBeanDefinitions(root: org.w3c.dom.Element, delegate: org.springframework.beans.factory.xml.BeanDefinitionParserDelegate): void
                        /**
                         * Parse an "import" element and load the bean definitions
                         * from the given resource into the bean factory.
                         */
                        // @ts-ignore
                        importBeanDefinitionResource(ele: org.w3c.dom.Element): void
                        /**
                         * Process the given alias element, registering the alias with the registry.
                         */
                        // @ts-ignore
                        processAliasRegistration(ele: org.w3c.dom.Element): void
                        /**
                         * Process the given bean element, parsing the bean definition
                         * and registering it with the registry.
                         */
                        // @ts-ignore
                        processBeanDefinition(ele: org.w3c.dom.Element, delegate: org.springframework.beans.factory.xml.BeanDefinitionParserDelegate): void
                        /**
                         * Allow the XML to be extensible by processing any custom element types first,
                         * before we start to process the bean definitions. This method is a natural
                         * extension point for any other custom pre-processing of the XML.
                         * <p>The default implementation is empty. Subclasses can override this method to
                         * convert custom elements into standard Spring bean definitions, for example.
                         * Implementors have access to the parser's bean definition reader and the
                         * underlying XML resource, through the corresponding accessors.
                         * @see #getReaderContext()
                         */
                        // @ts-ignore
                        preProcessXml(root: org.w3c.dom.Element): void
                        /**
                         * Allow the XML to be extensible by processing any custom element types last,
                         * after we finished processing the bean definitions. This method is a natural
                         * extension point for any other custom post-processing of the XML.
                         * <p>The default implementation is empty. Subclasses can override this method to
                         * convert custom elements into standard Spring bean definitions, for example.
                         * Implementors have access to the parser's bean definition reader and the
                         * underlying XML resource, through the corresponding accessors.
                         * @see #getReaderContext()
                         */
                        // @ts-ignore
                        postProcessXml(root: org.w3c.dom.Element): void
                    }
                }
            }
        }
    }
}
