declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * {@link AbstractRefreshableApplicationContext} subclass that adds common handling
                 * of specified config locations. Serves as base class for XML-based application
                 * context implementations such as {@link ClassPathXmlApplicationContext} and
                 * {@link FileSystemXmlApplicationContext}, as well as
                 * {@link org.springframework.web.context.support.XmlWebApplicationContext}.
                 * @author Juergen Hoeller
                 * @since 2.5.2
                 * @see #setConfigLocation
                 * @see #setConfigLocations
                 * @see #getDefaultConfigLocations
                 */
                // @ts-ignore
                class AbstractRefreshableConfigApplicationContext extends org.springframework.context.support.AbstractRefreshableApplicationContext {
                    /**
                     * Create a new AbstractRefreshableConfigApplicationContext with no parent.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new AbstractRefreshableConfigApplicationContext with the given parent context.
                     * @param parent the parent context
                     */
                    // @ts-ignore
                    constructor(parent: org.springframework.context.ApplicationContext)
                    /**
                     * Set the config locations for this application context in init-param style,
                     * i.e. with distinct locations separated by commas, semicolons or whitespace.
                     * <p>If not set, the implementation may use a default as appropriate.
                     */
                    // @ts-ignore
                    setConfigLocation(location: string): void
                    /**
                     * Set the config locations for this application context.
                     * <p>If not set, the implementation may use a default as appropriate.
                     */
                    // @ts-ignore
                    setConfigLocations(...locations: string[]): void
                    /**
                     * Return an array of resource locations, referring to the XML bean definition
                     * files that this context should be built with. Can also include location
                     * patterns, which will get resolved via a ResourcePatternResolver.
                     * <p>The default implementation returns {@code null}. Subclasses can override
                     * this to provide a set of resource locations to load bean definitions from.
                     * @return an array of resource locations, or {#code null} if none
                     * @see #getResources
                     * @see #getResourcePatternResolver
                     */
                    // @ts-ignore
                    getConfigLocations(): java.lang.String[]
                    /**
                     * Return the default config locations to use, for the case where no
                     * explicit config locations have been specified.
                     * <p>The default implementation returns {@code null},
                     * requiring explicit config locations.
                     * @return an array of default config locations, if any
                     * @see #setConfigLocations
                     */
                    // @ts-ignore
                    getDefaultConfigLocations(): java.lang.String[]
                    /**
                     * Resolve the given path, replacing placeholders with corresponding
                     * environment property values if necessary. Applied to config locations.
                     * @param path the original file path
                     * @return the resolved file path
                     * @see org.springframework.core.env.Environment#resolveRequiredPlaceholders(String)
                     */
                    // @ts-ignore
                    resolvePath(path: string): java.lang.String
                    // @ts-ignore
                    setId(id: string): void
                    /**
                     * Sets the id of this context to the bean name by default,
                     * for cases where the context instance is itself defined as a bean.
                     */
                    // @ts-ignore
                    setBeanName(name: string): void
                    /**
                     * Triggers {@link #refresh()} if not refreshed in the concrete context's
                     * constructor already.
                     */
                    // @ts-ignore
                    afterPropertiesSet(): void
                }
            }
        }
    }
}
