declare namespace org {
    namespace springframework {
        namespace core {
            namespace env {
                /**
                 * {@link Environment} implementation suitable for use in 'standard' (i.e. non-web)
                 * applications.
                 * <p>In addition to the usual functions of a {@link ConfigurableEnvironment} such as
                 * property resolution and profile-related operations, this implementation configures two
                 * default property sources, to be searched in the following order:
                 * <ul>
                 * <li>{@linkplain AbstractEnvironment#getSystemProperties() system properties}
                 * <li>{@linkplain AbstractEnvironment#getSystemEnvironment() system environment variables}
                 * </ul>
                 * That is, if the key "xyz" is present both in the JVM system properties as well as in
                 * the set of environment variables for the current process, the value of key "xyz" from
                 * system properties will return from a call to {@code environment.getProperty("xyz")}.
                 * This ordering is chosen by default because system properties are per-JVM, while
                 * environment variables may be the same across many JVMs on a given system.  Giving
                 * system properties precedence allows for overriding of environment variables on a
                 * per-JVM basis.
                 * <p>These default property sources may be removed, reordered, or replaced; and
                 * additional property sources may be added using the {@link MutablePropertySources}
                 * instance available from {@link #getPropertySources()}. See
                 * {@link ConfigurableEnvironment} Javadoc for usage examples.
                 * <p>See {@link SystemEnvironmentPropertySource} javadoc for details on special handling
                 * of property names in shell environments (e.g. Bash) that disallow period characters in
                 * variable names.
                 * @author Chris Beams
                 * @since 3.1
                 * @see ConfigurableEnvironment
                 * @see SystemEnvironmentPropertySource
                 * @see org.springframework.web.context.support.StandardServletEnvironment
                 */
                // @ts-ignore
                class StandardEnvironment extends org.springframework.core.env.AbstractEnvironment {
                    // @ts-ignore
                    constructor()
                    /**
                     * System environment property source name: {@value}.
                     */
                    // @ts-ignore
                    readonly SYSTEM_ENVIRONMENT_PROPERTY_SOURCE_NAME: string
                    /**
                     * JVM system properties property source name: {@value}.
                     */
                    // @ts-ignore
                    readonly SYSTEM_PROPERTIES_PROPERTY_SOURCE_NAME: string
                    /**
                     * Customize the set of property sources with those appropriate for any standard
                     * Java environment:
                     * <ul>
                     * <li>{@value #SYSTEM_PROPERTIES_PROPERTY_SOURCE_NAME}
                     * <li>{@value #SYSTEM_ENVIRONMENT_PROPERTY_SOURCE_NAME}
                     * </ul>
                     * <p>Properties present in {@value #SYSTEM_PROPERTIES_PROPERTY_SOURCE_NAME} will
                     * take precedence over those in {@value #SYSTEM_ENVIRONMENT_PROPERTY_SOURCE_NAME}.
                     * @see AbstractEnvironment#customizePropertySources(MutablePropertySources)
                     * @see #getSystemProperties()
                     * @see #getSystemEnvironment()
                     */
                    // @ts-ignore
                    customizePropertySources(propertySources: org.springframework.core.env.MutablePropertySources): void
                }
            }
        }
    }
}
