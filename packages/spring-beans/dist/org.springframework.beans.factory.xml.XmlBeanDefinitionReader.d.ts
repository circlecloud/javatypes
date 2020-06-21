declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * Bean definition reader for XML bean definitions.
                     * Delegates the actual XML document reading to an implementation
                     * of the {@link BeanDefinitionDocumentReader} interface.
                     * <p>Typically applied to a
                     * {@link org.springframework.beans.factory.support.DefaultListableBeanFactory}
                     * or a {@link org.springframework.context.support.GenericApplicationContext}.
                     * <p>This class loads a DOM document and applies the BeanDefinitionDocumentReader to it.
                     * The document reader will register each bean definition with the given bean factory,
                     * talking to the latter's implementation of the
                     * {@link org.springframework.beans.factory.support.BeanDefinitionRegistry} interface.
                     * @author Juergen Hoeller
                     * @author Rob Harrop
                     * @author Chris Beams
                     * @since 26.11.2003
                     * @see #setDocumentReaderClass
                     * @see BeanDefinitionDocumentReader
                     * @see DefaultBeanDefinitionDocumentReader
                     * @see BeanDefinitionRegistry
                     * @see org.springframework.beans.factory.support.DefaultListableBeanFactory
                     * @see org.springframework.context.support.GenericApplicationContext
                     */
                    // @ts-ignore
                    class XmlBeanDefinitionReader extends org.springframework.beans.factory.support.AbstractBeanDefinitionReader {
                        /**
                         * Create new XmlBeanDefinitionReader for the given bean factory.
                         * @param registry the BeanFactory to load bean definitions into,
                         *  in the form of a BeanDefinitionRegistry
                         */
                        // @ts-ignore
                        constructor(registry: org.springframework.beans.factory.support.BeanDefinitionRegistry)
                        /**
                         * Indicates that the validation should be disabled.
                         */
                        // @ts-ignore
                        public static readonly VALIDATION_NONE: number /*int*/
                        /**
                         * Indicates that the validation mode should be detected automatically.
                         */
                        // @ts-ignore
                        public static readonly VALIDATION_AUTO: number /*int*/
                        /**
                         * Indicates that DTD validation should be used.
                         */
                        // @ts-ignore
                        public static readonly VALIDATION_DTD: number /*int*/
                        /**
                         * Indicates that XSD validation should be used.
                         */
                        // @ts-ignore
                        public static readonly VALIDATION_XSD: number /*int*/
                        /**
                         * Set whether to use XML validation. Default is {@code true}.
                         * <p>This method switches namespace awareness on if validation is turned off,
                         * in order to still process schema namespaces properly in such a scenario.
                         * @see #setValidationMode
                         * @see #setNamespaceAware
                         */
                        // @ts-ignore
                        public setValidating(validating: boolean): void
                        /**
                         * Set the validation mode to use by name. Defaults to {@link #VALIDATION_AUTO}.
                         * @see #setValidationMode
                         */
                        // @ts-ignore
                        public setValidationModeName(validationModeName: java.lang.String | string): void
                        /**
                         * Set the validation mode to use. Defaults to {@link #VALIDATION_AUTO}.
                         * <p>Note that this only activates or deactivates validation itself.
                         * If you are switching validation off for schema files, you might need to
                         * activate schema namespace support explicitly: see {@link #setNamespaceAware}.
                         */
                        // @ts-ignore
                        public setValidationMode(validationMode: number /*int*/): void
                        /**
                         * Return the validation mode to use.
                         */
                        // @ts-ignore
                        public getValidationMode(): number /*int*/
                        /**
                         * Set whether or not the XML parser should be XML namespace aware.
                         * Default is "false".
                         * <p>This is typically not needed when schema validation is active.
                         * However, without validation, this has to be switched to "true"
                         * in order to properly process schema namespaces.
                         */
                        // @ts-ignore
                        public setNamespaceAware(namespaceAware: boolean): void
                        /**
                         * Return whether or not the XML parser should be XML namespace aware.
                         */
                        // @ts-ignore
                        public isNamespaceAware(): boolean
                        /**
                         * Specify which {@link org.springframework.beans.factory.parsing.ProblemReporter} to use.
                         * <p>The default implementation is {@link org.springframework.beans.factory.parsing.FailFastProblemReporter}
                         * which exhibits fail fast behaviour. External tools can provide an alternative implementation
                         * that collates errors and warnings for display in the tool UI.
                         */
                        // @ts-ignore
                        public setProblemReporter(problemReporter: org.springframework.beans.factory.parsing.ProblemReporter): void
                        /**
                         * Specify which {@link ReaderEventListener} to use.
                         * <p>The default implementation is EmptyReaderEventListener which discards every event notification.
                         * External tools can provide an alternative implementation to monitor the components being
                         * registered in the BeanFactory.
                         */
                        // @ts-ignore
                        public setEventListener(eventListener: org.springframework.beans.factory.parsing.ReaderEventListener): void
                        /**
                         * Specify the {@link SourceExtractor} to use.
                         * <p>The default implementation is {@link NullSourceExtractor} which simply returns {@code null}
                         * as the source object. This means that - during normal runtime execution -
                         * no additional source metadata is attached to the bean configuration metadata.
                         */
                        // @ts-ignore
                        public setSourceExtractor(sourceExtractor: org.springframework.beans.factory.parsing.SourceExtractor): void
                        /**
                         * Specify the {@link NamespaceHandlerResolver} to use.
                         * <p>If none is specified, a default instance will be created through
                         * {@link #createDefaultNamespaceHandlerResolver()}.
                         */
                        // @ts-ignore
                        public setNamespaceHandlerResolver(namespaceHandlerResolver: org.springframework.beans.factory.xml.NamespaceHandlerResolver): void
                        /**
                         * Specify the {@link DocumentLoader} to use.
                         * <p>The default implementation is {@link DefaultDocumentLoader}
                         * which loads {@link Document} instances using JAXP.
                         */
                        // @ts-ignore
                        public setDocumentLoader(documentLoader: org.springframework.beans.factory.xml.DocumentLoader): void
                        /**
                         * Set a SAX entity resolver to be used for parsing.
                         * <p>By default, {@link ResourceEntityResolver} will be used. Can be overridden
                         * for custom entity resolution, for example relative to some specific base path.
                         */
                        // @ts-ignore
                        public setEntityResolver(entityResolver: org.xml.sax.EntityResolver): void
                        /**
                         * Return the EntityResolver to use, building a default resolver
                         * if none specified.
                         */
                        // @ts-ignore
                        getEntityResolver(): org.xml.sax.EntityResolver
                        /**
                         * Set an implementation of the {@code org.xml.sax.ErrorHandler}
                         * interface for custom handling of XML parsing errors and warnings.
                         * <p>If not set, a default SimpleSaxErrorHandler is used that simply
                         * logs warnings using the logger instance of the view class,
                         * and rethrows errors to discontinue the XML transformation.
                         * @see SimpleSaxErrorHandler
                         */
                        // @ts-ignore
                        public setErrorHandler(errorHandler: org.xml.sax.ErrorHandler): void
                        /**
                         * Specify the {@link BeanDefinitionDocumentReader} implementation to use,
                         * responsible for the actual reading of the XML bean definition document.
                         * <p>The default is {@link DefaultBeanDefinitionDocumentReader}.
                         * @param documentReaderClass the desired BeanDefinitionDocumentReader implementation class
                         */
                        // @ts-ignore
                        public setDocumentReaderClass(documentReaderClass: java.lang.Class<any>): void
                        /**
                         * Load bean definitions from the specified XML file.
                         * @param resource the resource descriptor for the XML file
                         * @return the number of bean definitions found
                         * @throws BeanDefinitionStoreException in case of loading or parsing errors
                         */
                        // @ts-ignore
                        public loadBeanDefinitions(resource: Resource): number /*int*/
                        /**
                         * Load bean definitions from the specified XML file.
                         * @param encodedResource the resource descriptor for the XML file,
                         *  allowing to specify an encoding to use for parsing the file
                         * @return the number of bean definitions found
                         * @throws BeanDefinitionStoreException in case of loading or parsing errors
                         */
                        // @ts-ignore
                        public loadBeanDefinitions(encodedResource: EncodedResource): number /*int*/
                        /**
                         * Load bean definitions from the specified XML file.
                         * @param inputSource the SAX InputSource to read from
                         * @param resourceDescription a description of the resource
                         *  (can be {#code null} or empty)
                         * @return the number of bean definitions found
                         * @throws BeanDefinitionStoreException in case of loading or parsing errors
                         */
                        // @ts-ignore
                        public loadBeanDefinitions(inputSource: org.xml.sax.InputSource, resourceDescription: java.lang.String | string): number /*int*/
                        /**
                         * Actually load bean definitions from the specified XML file.
                         * @param inputSource the SAX InputSource to read from
                         * @param resource the resource descriptor for the XML file
                         * @return the number of bean definitions found
                         * @throws BeanDefinitionStoreException in case of loading or parsing errors
                         * @see #doLoadDocument
                         * @see #registerBeanDefinitions
                         */
                        // @ts-ignore
                        doLoadBeanDefinitions(inputSource: org.xml.sax.InputSource, resource: Resource): number /*int*/
                        /**
                         * Actually load the specified document using the configured DocumentLoader.
                         * @param inputSource the SAX InputSource to read from
                         * @param resource the resource descriptor for the XML file
                         * @return the DOM Document
                         * @throws Exception when thrown from the DocumentLoader
                         * @see #setDocumentLoader
                         * @see DocumentLoader#loadDocument
                         */
                        // @ts-ignore
                        doLoadDocument(inputSource: org.xml.sax.InputSource, resource: Resource): org.w3c.dom.Document
                        /**
                         * Determine the validation mode for the specified {@link Resource}.
                         * If no explicit validation mode has been configured, then the validation
                         * mode gets {@link #detectValidationMode detected} from the given resource.
                         * <p>Override this method if you would like full control over the validation
                         * mode, even when something other than {@link #VALIDATION_AUTO} was set.
                         * @see #detectValidationMode
                         */
                        // @ts-ignore
                        getValidationModeForResource(resource: Resource): number /*int*/
                        /**
                         * Detect which kind of validation to perform on the XML file identified
                         * by the supplied {@link Resource}. If the file has a {@code DOCTYPE}
                         * definition then DTD validation is used otherwise XSD validation is assumed.
                         * <p>Override this method if you would like to customize resolution
                         * of the {@link #VALIDATION_AUTO} mode.
                         */
                        // @ts-ignore
                        detectValidationMode(resource: Resource): number /*int*/
                        /**
                         * Register the bean definitions contained in the given DOM document.
                         * Called by {@code loadBeanDefinitions}.
                         * <p>Creates a new instance of the parser class and invokes
                         * {@code registerBeanDefinitions} on it.
                         * @param doc the DOM document
                         * @param resource the resource descriptor (for context information)
                         * @return the number of bean definitions found
                         * @throws BeanDefinitionStoreException in case of parsing errors
                         * @see #loadBeanDefinitions
                         * @see #setDocumentReaderClass
                         * @see BeanDefinitionDocumentReader#registerBeanDefinitions
                         */
                        // @ts-ignore
                        public registerBeanDefinitions(doc: org.w3c.dom.Document, resource: Resource): number /*int*/
                        /**
                         * Create the {@link BeanDefinitionDocumentReader} to use for actually
                         * reading bean definitions from an XML document.
                         * <p>The default implementation instantiates the specified "documentReaderClass".
                         * @see #setDocumentReaderClass
                         */
                        // @ts-ignore
                        createBeanDefinitionDocumentReader(): org.springframework.beans.factory.xml.BeanDefinitionDocumentReader
                        /**
                         * Create the {@link XmlReaderContext} to pass over to the document reader.
                         */
                        // @ts-ignore
                        public createReaderContext(resource: Resource): org.springframework.beans.factory.xml.XmlReaderContext
                        /**
                         * Lazily create a default NamespaceHandlerResolver, if not set before.
                         * @see #createDefaultNamespaceHandlerResolver()
                         */
                        // @ts-ignore
                        public getNamespaceHandlerResolver(): org.springframework.beans.factory.xml.NamespaceHandlerResolver
                        /**
                         * Create the default implementation of {@link NamespaceHandlerResolver} used if none is specified.
                         * <p>The default implementation returns an instance of {@link DefaultNamespaceHandlerResolver}.
                         * @see DefaultNamespaceHandlerResolver#DefaultNamespaceHandlerResolver(ClassLoader)
                         */
                        // @ts-ignore
                        createDefaultNamespaceHandlerResolver(): org.springframework.beans.factory.xml.NamespaceHandlerResolver
                    }
                }
            }
        }
    }
}
