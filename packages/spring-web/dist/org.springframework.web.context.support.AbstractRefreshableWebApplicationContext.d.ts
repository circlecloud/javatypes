declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * {@link org.springframework.context.support.AbstractRefreshableApplicationContext}
                     * subclass which implements the
                     * {@link org.springframework.web.context.ConfigurableWebApplicationContext}
                     * interface for web environments. Provides a "configLocations" property,
                     * to be populated through the ConfigurableWebApplicationContext interface
                     * on web application startup.
                     * <p>This class is as easy to subclass as AbstractRefreshableApplicationContext:
                     * All you need to implements is the {@link #loadBeanDefinitions} method;
                     * see the superclass javadoc for details. Note that implementations are supposed
                     * to load bean definitions from the files specified by the locations returned
                     * by the {@link #getConfigLocations} method.
                     * <p>Interprets resource paths as servlet context resources, i.e. as paths beneath
                     * the web application root. Absolute paths, e.g. for files outside the web app root,
                     * can be accessed via "file:" URLs, as implemented by
                     * {@link org.springframework.core.io.DefaultResourceLoader}.
                     * <p>In addition to the special beans detected by
                     * {@link org.springframework.context.support.AbstractApplicationContext},
                     * this class detects a bean of type {@link org.springframework.ui.context.ThemeSource}
                     * in the context, under the special bean name "themeSource".
                     * <p><b>This is the web context to be subclassed for a different bean definition format.</b>
                     * Such a context implementation can be specified as "contextClass" context-param
                     * for {@link org.springframework.web.context.ContextLoader} or as "contextClass"
                     * init-param for {@link org.springframework.web.servlet.FrameworkServlet},
                     * replacing the default {@link XmlWebApplicationContext}. It will then automatically
                     * receive the "contextConfigLocation" context-param or init-param, respectively.
                     * <p>Note that WebApplicationContext implementations are generally supposed
                     * to configure themselves based on the configuration received through the
                     * {@link ConfigurableWebApplicationContext} interface. In contrast, a standalone
                     * application context might allow for configuration in custom startup code
                     * (for example, {@link org.springframework.context.support.GenericApplicationContext}).
                     * @author Juergen Hoeller
                     * @since 1.1.3
                     * @see #loadBeanDefinitions
                     * @see org.springframework.web.context.ConfigurableWebApplicationContext#setConfigLocations
                     * @see org.springframework.ui.context.ThemeSource
                     * @see XmlWebApplicationContext
                     */
                    // @ts-ignore
                    abstract class AbstractRefreshableWebApplicationContext extends AbstractRefreshableConfigApplicationContext implements org.springframework.web.context.ConfigurableWebApplicationContext {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public setServletContext(servletContext: ServletContext): void
                        // @ts-ignore
                        public getServletContext(): ServletContext
                        // @ts-ignore
                        public setServletConfig(servletConfig: ServletConfig): void
                        // @ts-ignore
                        public getServletConfig(): ServletConfig
                        // @ts-ignore
                        public setNamespace(namespace: java.lang.String | string): void
                        // @ts-ignore
                        public getNamespace(): string
                        // @ts-ignore
                        public getConfigLocations(): string[]
                        // @ts-ignore
                        public getApplicationName(): string
                        /**
                         * Create and return a new {@link StandardServletEnvironment}. Subclasses may override
                         * in order to configure the environment or specialize the environment type returned.
                         */
                        // @ts-ignore
                        createEnvironment(): ConfigurableEnvironment
                        /**
                         * Register request/session scopes, a {@link ServletContextAwareProcessor}, etc.
                         */
                        // @ts-ignore
                        postProcessBeanFactory(beanFactory: ConfigurableListableBeanFactory): void
                        /**
                         * This implementation supports file paths beneath the root of the ServletContext.
                         * @see ServletContextResource
                         */
                        // @ts-ignore
                        getResourceByPath(path: java.lang.String | string): Resource
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
                        public getTheme(themeName: java.lang.String | string): Theme
                    }
                }
            }
        }
    }
}
