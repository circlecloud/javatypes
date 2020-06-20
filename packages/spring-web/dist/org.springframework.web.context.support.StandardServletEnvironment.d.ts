declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * {@link Environment} implementation to be used by {@code Servlet}-based web
                     * applications. All web-related (servlet-based) {@code ApplicationContext} classes
                     * initialize an instance by default.
                     * <p>Contributes {@code ServletConfig}, {@code ServletContext}, and JNDI-based
                     * {@link PropertySource} instances. See {@link #customizePropertySources} method
                     * documentation for details.
                     * @author Chris Beams
                     * @since 3.1
                     * @see StandardEnvironment
                     */
                    // @ts-ignore
                    class StandardServletEnvironment extends StandardEnvironment implements org.springframework.web.context.ConfigurableWebEnvironment {
                        // @ts-ignore
                        constructor()
                        /**
                         * Servlet context init parameters property source name: {@value}.
                         */
                        // @ts-ignore
                        readonly SERVLET_CONTEXT_PROPERTY_SOURCE_NAME: string
                        /**
                         * Servlet config init parameters property source name: {@value}.
                         */
                        // @ts-ignore
                        readonly SERVLET_CONFIG_PROPERTY_SOURCE_NAME: string
                        /**
                         * JNDI property source name: {@value}.
                         */
                        // @ts-ignore
                        readonly JNDI_PROPERTY_SOURCE_NAME: string
                        /**
                         * Customize the set of property sources with those contributed by superclasses as
                         * well as those appropriate for standard servlet-based environments:
                         * <ul>
                         * <li>{@value #SERVLET_CONFIG_PROPERTY_SOURCE_NAME}
                         * <li>{@value #SERVLET_CONTEXT_PROPERTY_SOURCE_NAME}
                         * <li>{@value #JNDI_PROPERTY_SOURCE_NAME}
                         * </ul>
                         * <p>Properties present in {@value #SERVLET_CONFIG_PROPERTY_SOURCE_NAME} will
                         * take precedence over those in {@value #SERVLET_CONTEXT_PROPERTY_SOURCE_NAME}, and
                         * properties found in either of the above take precedence over those found in
                         * {@value #JNDI_PROPERTY_SOURCE_NAME}.
                         * <p>Properties in any of the above will take precedence over system properties and
                         * environment variables contributed by the {@link StandardEnvironment} superclass.
                         * <p>The {@code Servlet}-related property sources are added as
                         * {@link StubPropertySource stubs} at this stage, and will be
                         * {@linkplain #initPropertySources(ServletContext, ServletConfig) fully initialized}
                         * once the actual {@link ServletContext} object becomes available.
                         * @see StandardEnvironment#customizePropertySources
                         * @see org.springframework.core.env.AbstractEnvironment#customizePropertySources
                         * @see ServletConfigPropertySource
                         * @see ServletContextPropertySource
                         * @see org.springframework.jndi.JndiPropertySource
                         * @see org.springframework.context.support.AbstractApplicationContext#initPropertySources
                         * @see #initPropertySources(ServletContext, ServletConfig)
                         */
                        // @ts-ignore
                        customizePropertySources(propertySources: MutablePropertySources): void
                        // @ts-ignore
                        initPropertySources(servletContext: ServletContext, servletConfig: ServletConfig): void
                    }
                }
            }
        }
    }
}
