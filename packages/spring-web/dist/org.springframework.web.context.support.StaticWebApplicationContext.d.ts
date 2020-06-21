declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * Static {@link org.springframework.web.context.WebApplicationContext}
                     * implementation for testing. Not intended for use in production applications.
                     * <p>Implements the {@link org.springframework.web.context.ConfigurableWebApplicationContext}
                     * interface to allow for direct replacement of an {@link XmlWebApplicationContext},
                     * despite not actually supporting external configuration files.
                     * <p>Interprets resource paths as servlet context resources, i.e. as paths beneath
                     * the web application root. Absolute paths, e.g. for files outside the web app root,
                     * can be accessed via "file:" URLs, as implemented by
                     * {@link org.springframework.core.io.DefaultResourceLoader}.
                     * <p>In addition to the special beans detected by
                     * {@link org.springframework.context.support.AbstractApplicationContext},
                     * this class detects a bean of type {@link org.springframework.ui.context.ThemeSource}
                     * in the context, under the special bean name "themeSource".
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @see org.springframework.ui.context.ThemeSource
                     */
                    // @ts-ignore
                    class StaticWebApplicationContext extends StaticApplicationContext implements org.springframework.web.context.ConfigurableWebApplicationContext {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the ServletContext that this WebApplicationContext runs in.
                         */
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
                        /**
                         * The {@link StaticWebApplicationContext} class does not support this method.
                         * @throws UnsupportedOperationException <b>always</b>
                         */
                        // @ts-ignore
                        public setConfigLocation(configLocation: java.lang.String | string): void
                        /**
                         * The {@link StaticWebApplicationContext} class does not support this method.
                         * @throws UnsupportedOperationException <b>always</b>
                         */
                        // @ts-ignore
                        public setConfigLocations(...configLocations: java.lang.String[] | string[]): void
                        // @ts-ignore
                        public getConfigLocations(): string[]
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
                         * Create and return a new {@link StandardServletEnvironment}.
                         */
                        // @ts-ignore
                        createEnvironment(): ConfigurableEnvironment
                        /**
                         * Initialize the theme capability.
                         */
                        // @ts-ignore
                        onRefresh(): void
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
