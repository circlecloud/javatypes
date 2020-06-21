declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                /**
                 * Interface to be implemented by configurable web application contexts.
                 * Supported by {@link ContextLoader} and
                 * {@link org.springframework.web.servlet.FrameworkServlet}.
                 * <p>Note: The setters of this interface need to be called before an
                 * invocation of the {@link #refresh} method inherited from
                 * {@link org.springframework.context.ConfigurableApplicationContext}.
                 * They do not cause an initialization of the context on their own.
                 * @author Juergen Hoeller
                 * @since 05.12.2003
                 * @see #refresh
                 * @see ContextLoader#createWebApplicationContext
                 * @see org.springframework.web.servlet.FrameworkServlet#createWebApplicationContext
                 */
                // @ts-ignore
                interface ConfigurableWebApplicationContext extends org.springframework.web.context.WebApplicationContext {
                    /**
                     * Prefix for ApplicationContext ids that refer to context path and/or servlet name.
                     */
                    // @ts-ignore
                    readonly APPLICATION_CONTEXT_ID_PREFIX: java.lang.String | string
                    /**
                     * Name of the ServletConfig environment bean in the factory.
                     * @see javax.servlet.ServletConfig
                     */
                    // @ts-ignore
                    readonly SERVLET_CONFIG_BEAN_NAME: java.lang.String | string
                    /**
                     * Set the ServletContext for this web application context.
                     * <p>Does not cause an initialization of the context: refresh needs to be
                     * called after the setting of all configuration properties.
                     * @see #refresh()
                     */
                    // @ts-ignore
                    setServletContext(servletContext: ServletContext): void
                    /**
                     * Set the ServletConfig for this web application context.
                     * Only called for a WebApplicationContext that belongs to a specific Servlet.
                     * @see #refresh()
                     */
                    // @ts-ignore
                    setServletConfig(servletConfig: ServletConfig): void
                    /**
                     * Return the ServletConfig for this web application context, if any.
                     */
                    // @ts-ignore
                    getServletConfig(): ServletConfig
                    /**
                     * Set the namespace for this web application context,
                     * to be used for building a default context config location.
                     * The root web application context does not have a namespace.
                     */
                    // @ts-ignore
                    setNamespace(namespace: java.lang.String | string): void
                    /**
                     * Return the namespace for this web application context, if any.
                     */
                    // @ts-ignore
                    getNamespace(): string
                    /**
                     * Set the config locations for this web application context in init-param style,
                     * i.e. with distinct locations separated by commas, semicolons or whitespace.
                     * <p>If not set, the implementation is supposed to use a default for the
                     * given namespace or the root web application context, as appropriate.
                     */
                    // @ts-ignore
                    setConfigLocation(configLocation: java.lang.String | string): void
                    /**
                     * Set the config locations for this web application context.
                     * <p>If not set, the implementation is supposed to use a default for the
                     * given namespace or the root web application context, as appropriate.
                     */
                    // @ts-ignore
                    setConfigLocations(...configLocations: java.lang.String[] | string[]): void
                    /**
                     * Return the config locations for this web application context,
                     * or {@code null} if none specified.
                     */
                    // @ts-ignore
                    getConfigLocations(): string[]
                }
            }
        }
    }
}
