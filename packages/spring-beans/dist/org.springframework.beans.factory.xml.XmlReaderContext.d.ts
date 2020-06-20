declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * Extension of {@link org.springframework.beans.factory.parsing.ReaderContext},
                     * specific to use with an {@link XmlBeanDefinitionReader}. Provides access to the
                     * {@link NamespaceHandlerResolver} configured in the {@link XmlBeanDefinitionReader}.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 2.0
                     */
                    // @ts-ignore
                    class XmlReaderContext extends org.springframework.beans.factory.parsing.ReaderContext {
                        /**
                         * Construct a new {@code XmlReaderContext}.
                         * @param resource the XML bean definition resource
                         * @param problemReporter the problem reporter in use
                         * @param eventListener the event listener in use
                         * @param sourceExtractor the source extractor in use
                         * @param reader the XML bean definition reader in use
                         * @param namespaceHandlerResolver the XML namespace resolver
                         */
                        // @ts-ignore
                        constructor(resource: Resource, problemReporter: org.springframework.beans.factory.parsing.ProblemReporter, eventListener: org.springframework.beans.factory.parsing.ReaderEventListener, sourceExtractor: org.springframework.beans.factory.parsing.SourceExtractor, reader: org.springframework.beans.factory.xml.XmlBeanDefinitionReader, namespaceHandlerResolver: org.springframework.beans.factory.xml.NamespaceHandlerResolver)
                        /**
                         * Return the XML bean definition reader in use.
                         */
                        // @ts-ignore
                        getReader(): org.springframework.beans.factory.xml.XmlBeanDefinitionReader
                        /**
                         * Return the bean definition registry to use.
                         * @see XmlBeanDefinitionReader#XmlBeanDefinitionReader(BeanDefinitionRegistry)
                         */
                        // @ts-ignore
                        getRegistry(): org.springframework.beans.factory.support.BeanDefinitionRegistry
                        /**
                         * Return the resource loader to use, if any.
                         * <p>This will be non-null in regular scenarios,
                         * also allowing access to the resource class loader.
                         * @see XmlBeanDefinitionReader#setResourceLoader
                         * @see ResourceLoader#getClassLoader()
                         */
                        // @ts-ignore
                        getResourceLoader(): ResourceLoader
                        /**
                         * Return the bean class loader to use, if any.
                         * <p>Note that this will be null in regular scenarios,
                         * as an indication to lazily resolve bean classes.
                         * @see XmlBeanDefinitionReader#setBeanClassLoader
                         */
                        // @ts-ignore
                        getBeanClassLoader(): java.lang.ClassLoader
                        /**
                         * Return the environment to use.
                         * @see XmlBeanDefinitionReader#setEnvironment
                         */
                        // @ts-ignore
                        getEnvironment(): Environment
                        /**
                         * Return the namespace resolver.
                         * @see XmlBeanDefinitionReader#setNamespaceHandlerResolver
                         */
                        // @ts-ignore
                        getNamespaceHandlerResolver(): org.springframework.beans.factory.xml.NamespaceHandlerResolver
                        /**
                         * Call the bean name generator for the given bean definition.
                         * @see XmlBeanDefinitionReader#getBeanNameGenerator()
                         * @see org.springframework.beans.factory.support.BeanNameGenerator#generateBeanName
                         */
                        // @ts-ignore
                        generateBeanName(beanDefinition: org.springframework.beans.factory.config.BeanDefinition): java.lang.String
                        /**
                         * Call the bean name generator for the given bean definition
                         * and register the bean definition under the generated name.
                         * @see XmlBeanDefinitionReader#getBeanNameGenerator()
                         * @see org.springframework.beans.factory.support.BeanNameGenerator#generateBeanName
                         * @see BeanDefinitionRegistry#registerBeanDefinition
                         */
                        // @ts-ignore
                        registerWithGeneratedName(beanDefinition: org.springframework.beans.factory.config.BeanDefinition): java.lang.String
                        /**
                         * Read an XML document from the given String.
                         * @see #getReader()
                         */
                        // @ts-ignore
                        readDocumentFromString(documentContent: string): org.w3c.dom.Document
                    }
                }
            }
        }
    }
}
