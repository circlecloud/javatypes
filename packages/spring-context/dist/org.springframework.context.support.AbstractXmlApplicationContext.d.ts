declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Convenient base class for {@link org.springframework.context.ApplicationContext}
                 * implementations, drawing configuration from XML documents containing bean definitions
                 * understood by an {@link org.springframework.beans.factory.xml.XmlBeanDefinitionReader}.
                 * <p>Subclasses just have to implement the {@link #getConfigResources} and/or
                 * the {@link #getConfigLocations} method. Furthermore, they might override
                 * the {@link #getResourceByPath} hook to interpret relative paths in an
                 * environment-specific fashion, and/or {@link #getResourcePatternResolver}
                 * for extended pattern resolution.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @see #getConfigResources
                 * @see #getConfigLocations
                 * @see org.springframework.beans.factory.xml.XmlBeanDefinitionReader
                 */
                // @ts-ignore
                class AbstractXmlApplicationContext extends org.springframework.context.support.AbstractRefreshableConfigApplicationContext {
                    /**
                     * Create a new AbstractXmlApplicationContext with no parent.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new AbstractXmlApplicationContext with the given parent context.
                     * @param parent the parent context
                     */
                    // @ts-ignore
                    constructor(parent: org.springframework.context.ApplicationContext)
                    /**
                     * Set whether to use XML validation. Default is {@code true}.
                     */
                    // @ts-ignore
                    setValidating(validating: boolean): void
                    /**
                     * Loads the bean definitions via an XmlBeanDefinitionReader.
                     * @see org.springframework.beans.factory.xml.XmlBeanDefinitionReader
                     * @see #initBeanDefinitionReader
                     * @see #loadBeanDefinitions
                     */
                    // @ts-ignore
                    loadBeanDefinitions(beanFactory: DefaultListableBeanFactory): void
                    /**
                     * Initialize the bean definition reader used for loading the bean
                     * definitions of this context. Default implementation is empty.
                     * <p>Can be overridden in subclasses, e.g. for turning off XML validation
                     * or using a different XmlBeanDefinitionParser implementation.
                     * @param reader the bean definition reader used by this context
                     * @see org.springframework.beans.factory.xml.XmlBeanDefinitionReader#setDocumentReaderClass
                     */
                    // @ts-ignore
                    initBeanDefinitionReader(reader: XmlBeanDefinitionReader): void
                    /**
                     * Load the bean definitions with the given XmlBeanDefinitionReader.
                     * <p>The lifecycle of the bean factory is handled by the {@link #refreshBeanFactory}
                     * method; hence this method is just supposed to load and/or register bean definitions.
                     * @param reader the XmlBeanDefinitionReader to use
                     * @throws BeansException in case of bean registration errors
                     * @throws IOException if the required XML document isn't found
                     * @see #refreshBeanFactory
                     * @see #getConfigLocations
                     * @see #getResources
                     * @see #getResourcePatternResolver
                     */
                    // @ts-ignore
                    loadBeanDefinitions(reader: XmlBeanDefinitionReader): void
                    /**
                     * Return an array of Resource objects, referring to the XML bean definition
                     * files that this context should be built with.
                     * <p>The default implementation returns {@code null}. Subclasses can override
                     * this to provide pre-built Resource objects rather than location Strings.
                     * @return an array of Resource objects, or {#code null} if none
                     * @see #getConfigLocations()
                     */
                    // @ts-ignore
                    getConfigResources(): Resource[]
                }
            }
        }
    }
}
