declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                /**
                 * Specialization of {@link ConfigurableEnvironment} allowing initialization of
                 * servlet-related {@link org.springframework.core.env.PropertySource} objects at the
                 * earliest moment that the {@link ServletContext} and (optionally) {@link ServletConfig}
                 * become available.
                 * @author Chris Beams
                 * @since 3.1.2
                 * @see ConfigurableWebApplicationContext#getEnvironment()
                 */
                // @ts-ignore
                interface ConfigurableWebEnvironment {
                    /**
                     * Replace any {@linkplain
                     * org.springframework.core.env.PropertySource.StubPropertySource stub property source}
                     * instances acting as placeholders with real servlet context/config property sources
                     * using the given parameters.
                     * @param servletContext the {#link ServletContext} (may not be {@code null})
                     * @param servletConfig the {#link ServletConfig} ({@code null} if not available)
                     * @see org.springframework.web.context.support.WebApplicationContextUtils#initServletPropertySources(
                     *  org.springframework.core.env.MutablePropertySources, ServletContext, ServletConfig)
                     */
                    // @ts-ignore
                    initPropertySources(servletContext: ServletContext, servletConfig: ServletConfig): void
                }
            }
        }
    }
}
