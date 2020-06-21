declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * {@link org.springframework.web.context.WebApplicationContext} implementation
                     * which takes its configuration from XML documents, understood by an
                     * {@link org.springframework.beans.factory.xml.XmlBeanDefinitionReader}.
                     * This is essentially the equivalent of
                     * {@link org.springframework.context.support.GenericXmlApplicationContext}
                     * for a web environment.
                     * <p>By default, the configuration will be taken from "/WEB-INF/applicationContext.xml"
                     * for the root context, and "/WEB-INF/test-servlet.xml" for a context with the namespace
                     * "test-servlet" (like for a DispatcherServlet instance with the servlet-name "test").
                     * <p>The config location defaults can be overridden via the "contextConfigLocation"
                     * context-param of {@link org.springframework.web.context.ContextLoader} and servlet
                     * init-param of {@link org.springframework.web.servlet.FrameworkServlet}. Config locations
                     * can either denote concrete files like "/WEB-INF/context.xml" or Ant-style patterns
                     * like "/WEB-INF/*-context.xml" (see {@link org.springframework.util.PathMatcher}
                     * javadoc for pattern details).
                     * <p>Note: In case of multiple config locations, later bean definitions will
                     * override ones defined in earlier loaded files. This can be leveraged to
                     * deliberately override certain bean definitions via an extra XML file.
                     * <p><b>For a WebApplicationContext that reads in a different bean definition format,
                     * create an analogous subclass of {@link AbstractRefreshableWebApplicationContext}.</b>
                     * Such a context implementation can be specified as "contextClass" context-param
                     * for ContextLoader or "contextClass" init-param for FrameworkServlet.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @see #setNamespace
                     * @see #setConfigLocations
                     * @see org.springframework.beans.factory.xml.XmlBeanDefinitionReader
                     * @see org.springframework.web.context.ContextLoader#initWebApplicationContext
                     * @see org.springframework.web.servlet.FrameworkServlet#initWebApplicationContext
                     */
                    // @ts-ignore
                    class XmlWebApplicationContext extends org.springframework.web.context.support.AbstractRefreshableWebApplicationContext {
                        // @ts-ignore
                        constructor()
                        /**
                         * Default config location for the root context.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_CONFIG_LOCATION: java.lang.String | string
                        /**
                         * Default prefix for building a config location for a namespace.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_CONFIG_LOCATION_PREFIX: java.lang.String | string
                        /**
                         * Default suffix for building a config location for a namespace.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_CONFIG_LOCATION_SUFFIX: java.lang.String | string
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
                         * @param beanDefinitionReader the bean definition reader used by this context
                         * @see org.springframework.beans.factory.xml.XmlBeanDefinitionReader#setValidationMode
                         * @see org.springframework.beans.factory.xml.XmlBeanDefinitionReader#setDocumentReaderClass
                         */
                        // @ts-ignore
                        initBeanDefinitionReader(beanDefinitionReader: XmlBeanDefinitionReader): void
                        /**
                         * Load the bean definitions with the given XmlBeanDefinitionReader.
                         * <p>The lifecycle of the bean factory is handled by the refreshBeanFactory method;
                         * therefore this method is just supposed to load and/or register bean definitions.
                         * <p>Delegates to a ResourcePatternResolver for resolving location patterns
                         * into Resource instances.
                         * @throws IOException if the required XML document isn't found
                         * @see #refreshBeanFactory
                         * @see #getConfigLocations
                         * @see #getResources
                         * @see #getResourcePatternResolver
                         */
                        // @ts-ignore
                        loadBeanDefinitions(reader: XmlBeanDefinitionReader): void
                        /**
                         * The default location for the root context is "/WEB-INF/applicationContext.xml",
                         * and "/WEB-INF/test-servlet.xml" for a context with the namespace "test-servlet"
                         * (like for a DispatcherServlet instance with the servlet-name "test").
                         */
                        // @ts-ignore
                        getDefaultConfigLocations(): string[]
                    }
                }
            }
        }
    }
}
