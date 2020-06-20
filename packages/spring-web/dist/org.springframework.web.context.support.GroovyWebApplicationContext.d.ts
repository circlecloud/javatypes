declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * {@link org.springframework.web.context.WebApplicationContext} implementation which takes
                     * its configuration from Groovy bean definition scripts and/or XML files, as understood by
                     * a {@link org.springframework.beans.factory.groovy.GroovyBeanDefinitionReader}.
                     * This is essentially the equivalent of
                     * {@link org.springframework.context.support.GenericGroovyApplicationContext}
                     * for a web environment.
                     * <p>By default, the configuration will be taken from "/WEB-INF/applicationContext.groovy"
                     * for the root context, and "/WEB-INF/test-servlet.groovy" for a context with the namespace
                     * "test-servlet" (like for a DispatcherServlet instance with the servlet-name "test").
                     * <p>The config location defaults can be overridden via the "contextConfigLocation"
                     * context-param of {@link org.springframework.web.context.ContextLoader} and servlet
                     * init-param of {@link org.springframework.web.servlet.FrameworkServlet}. Config locations
                     * can either denote concrete files like "/WEB-INF/context.groovy" or Ant-style patterns
                     * like "/WEB-INF/*-context.groovy" (see {@link org.springframework.util.PathMatcher}
                     * javadoc for pattern details). Note that ".xml" files will be parsed as XML content;
                     * all other kinds of resources will be parsed as Groovy scripts.
                     * <p>Note: In case of multiple config locations, later bean definitions will
                     * override ones defined in earlier loaded files. This can be leveraged to
                     * deliberately override certain bean definitions via an extra Groovy script.
                     * <p><b>For a WebApplicationContext that reads in a different bean definition format,
                     * create an analogous subclass of {@link AbstractRefreshableWebApplicationContext}.</b>
                     * Such a context implementation can be specified as "contextClass" context-param
                     * for ContextLoader or "contextClass" init-param for FrameworkServlet.
                     * @author Juergen Hoeller
                     * @since 4.1
                     * @see #setNamespace
                     * @see #setConfigLocations
                     * @see org.springframework.beans.factory.groovy.GroovyBeanDefinitionReader
                     * @see org.springframework.web.context.ContextLoader#initWebApplicationContext
                     * @see org.springframework.web.servlet.FrameworkServlet#initWebApplicationContext
                     */
                    // @ts-ignore
                    class GroovyWebApplicationContext extends org.springframework.web.context.support.AbstractRefreshableWebApplicationContext {
                        // @ts-ignore
                        constructor()
                        /**
                         * Default config location for the root context.
                         */
                        // @ts-ignore
                        readonly DEFAULT_CONFIG_LOCATION: string
                        /**
                         * Default prefix for building a config location for a namespace.
                         */
                        // @ts-ignore
                        readonly DEFAULT_CONFIG_LOCATION_PREFIX: string
                        /**
                         * Default suffix for building a config location for a namespace.
                         */
                        // @ts-ignore
                        readonly DEFAULT_CONFIG_LOCATION_SUFFIX: string
                        /**
                         * Loads the bean definitions via an GroovyBeanDefinitionReader.
                         * @see org.springframework.beans.factory.groovy.GroovyBeanDefinitionReader
                         * @see #initBeanDefinitionReader
                         * @see #loadBeanDefinitions
                         */
                        // @ts-ignore
                        loadBeanDefinitions(beanFactory: DefaultListableBeanFactory): void
                        /**
                         * Initialize the bean definition reader used for loading the bean
                         * definitions of this context. Default implementation is empty.
                         * <p>Can be overridden in subclasses.
                         * @param beanDefinitionReader the bean definition reader used by this context
                         */
                        // @ts-ignore
                        initBeanDefinitionReader(beanDefinitionReader: GroovyBeanDefinitionReader): void
                        /**
                         * Load the bean definitions with the given GroovyBeanDefinitionReader.
                         * <p>The lifecycle of the bean factory is handled by the refreshBeanFactory method;
                         * therefore this method is just supposed to load and/or register bean definitions.
                         * <p>Delegates to a ResourcePatternResolver for resolving location patterns
                         * into Resource instances.
                         * @throws IOException if the required Groovy script or XML file isn't found
                         * @see #refreshBeanFactory
                         * @see #getConfigLocations
                         * @see #getResources
                         * @see #getResourcePatternResolver
                         */
                        // @ts-ignore
                        loadBeanDefinitions(reader: GroovyBeanDefinitionReader): void
                        /**
                         * The default location for the root context is "/WEB-INF/applicationContext.groovy",
                         * and "/WEB-INF/test-servlet.groovy" for a context with the namespace "test-servlet"
                         * (like for a DispatcherServlet instance with the servlet-name "test").
                         */
                        // @ts-ignore
                        getDefaultConfigLocations(): java.lang.String[]
                        // @ts-ignore
                        setMetaClass(metaClass: MetaClass): void
                        // @ts-ignore
                        getMetaClass(): MetaClass
                        // @ts-ignore
                        invokeMethod(name: string, args: any): java.lang.Object
                        // @ts-ignore
                        setProperty(property: string, newValue: any): void
                        // @ts-ignore
                        getProperty(property: string): java.lang.Object
                    }
                }
            }
        }
    }
}
