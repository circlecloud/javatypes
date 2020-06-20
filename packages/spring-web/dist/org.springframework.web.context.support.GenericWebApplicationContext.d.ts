declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * Subclass of {@link GenericApplicationContext}, suitable for web environments.
                     * <p>Implements {@link org.springframework.web.context.ConfigurableWebApplicationContext},
                     * but is not intended for declarative setup in {@code web.xml}. Instead, it is designed
                     * for programmatic setup, for example for building nested contexts or for use within
                     * {@link org.springframework.web.WebApplicationInitializer WebApplicationInitializers}.
                     * <p><b>If you intend to implement a WebApplicationContext that reads bean definitions
                     * from configuration files, consider deriving from AbstractRefreshableWebApplicationContext,
                     * reading the bean definitions in an implementation of the {@code loadBeanDefinitions}
                     * method.</b>
                     * <p>Interprets resource paths as servlet context resources, i.e. as paths beneath
                     * the web application root. Absolute paths, e.g. for files outside the web app root,
                     * can be accessed via "file:" URLs, as implemented by AbstractApplicationContext.
                     * <p>In addition to the special beans detected by
                     * {@link org.springframework.context.support.AbstractApplicationContext},
                     * this class detects a ThemeSource bean in the context, with the name "themeSource".
                     * @author Juergen Hoeller
                     * @author Chris Beams
                     * @since 1.2
                     */
                    // @ts-ignore
                    class GenericWebApplicationContext extends GenericApplicationContext implements org.springframework.web.context.ConfigurableWebApplicationContext {
                        /**
                         * Create a new GenericWebApplicationContext.
                         * @see #setServletContext
                         * @see #registerBeanDefinition
                         * @see #refresh
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new GenericWebApplicationContext for the given ServletContext.
                         * @param servletContext the ServletContext to run in
                         * @see #registerBeanDefinition
                         * @see #refresh
                         */
                        // @ts-ignore
                        constructor(servletContext: ServletContext)
                        /**
                         * Create a new GenericWebApplicationContext with the given DefaultListableBeanFactory.
                         * @param beanFactory the DefaultListableBeanFactory instance to use for this context
                         * @see #setServletContext
                         * @see #registerBeanDefinition
                         * @see #refresh
                         */
                        // @ts-ignore
                        constructor(beanFactory: DefaultListableBeanFactory)
                        /**
                         * Create a new GenericWebApplicationContext with the given DefaultListableBeanFactory.
                         * @param beanFactory the DefaultListableBeanFactory instance to use for this context
                         * @param servletContext the ServletContext to run in
                         * @see #registerBeanDefinition
                         * @see #refresh
                         */
                        // @ts-ignore
                        constructor(beanFactory: DefaultListableBeanFactory, servletContext: ServletContext)
                        /**
                         * Set the ServletContext that this WebApplicationContext runs in.
                         */
                        // @ts-ignore
                        setServletContext(servletContext: ServletContext): void
                        // @ts-ignore
                        getServletContext(): ServletContext
                        // @ts-ignore
                        getApplicationName(): java.lang.String
                        /**
                         * Create and return a new {@link StandardServletEnvironment}.
                         */
                        // @ts-ignore
                        createEnvironment(): ConfigurableEnvironment
                        /**
                         * Register ServletContextAwareProcessor.
                         * @see ServletContextAwareProcessor
                         */
                        // @ts-ignore
                        postProcessBeanFactory(beanFactory: ConfigurableListableBeanFactory): void
                        /**
                         * This implementation supports file paths beneath the root of the ServletContext.
                         * @see ServletContextResource
                         */
                        // @ts-ignore
                        getResourceByPath(path: string): Resource
                        /**
                         * This implementation supports pattern matching in unexpanded WARs too.
                         * @see ServletContextResourcePatternResolver
                         */
                        // @ts-ignore
                        getResourcePatternResolver(): ResourcePatternResolver
                        /**
                         * Initialize the theme capability.
                         */
                        // @ts-ignore
                        onRefresh(): void
                        /**
                         * {@inheritDoc}
                         * <p>Replace {@code Servlet}-related property sources.
                         */
                        // @ts-ignore
                        initPropertySources(): void
                        // @ts-ignore
                        getTheme(themeName: string): Theme
                        // @ts-ignore
                        setServletConfig(servletConfig: ServletConfig): void
                        // @ts-ignore
                        getServletConfig(): ServletConfig
                        // @ts-ignore
                        setNamespace(namespace: string): void
                        // @ts-ignore
                        getNamespace(): java.lang.String
                        // @ts-ignore
                        setConfigLocation(configLocation: string): void
                        // @ts-ignore
                        setConfigLocations(...configLocations: string[]): void
                        // @ts-ignore
                        getConfigLocations(): java.lang.String[]
                    }
                }
            }
        }
    }
}
