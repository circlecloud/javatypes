declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * {@link PlaceholderConfigurerSupport} subclass that resolves ${...} placeholders against
                     * {@link #setLocation local} {@link #setProperties properties} and/or system properties
                     * and environment variables.
                     * <p>{@link PropertyPlaceholderConfigurer} is still appropriate for use when:
                     * <ul>
                     * <li>the {@code spring-context} module is not available (i.e., one is using Spring's
                     * {@code BeanFactory} API as opposed to {@code ApplicationContext}).
                     * <li>existing configuration makes use of the {@link #setSystemPropertiesMode(int) "systemPropertiesMode"}
                     * and/or {@link #setSystemPropertiesModeName(String) "systemPropertiesModeName"} properties.
                     * Users are encouraged to move away from using these settings, and rather configure property
                     * source search order through the container's {@code Environment}; however, exact preservation
                     * of functionality may be maintained by continuing to use {@code PropertyPlaceholderConfigurer}.
                     * </ul>
                     * @author Juergen Hoeller
                     * @author Chris Beams
                     * @since 02.10.2003
                     * @see #setSystemPropertiesModeName
                     * @see PlaceholderConfigurerSupport
                     * @see PropertyOverrideConfigurer
                     * @deprecated as of 5.2; use {#code org.springframework.context.support.PropertySourcesPlaceholderConfigurer}
                     *  instead which is more flexible through taking advantage of the {@link org.springframework.core.env.Environment}
                     *  and {@link org.springframework.core.env.PropertySource} mechanisms.
                     */
                    // @ts-ignore
                    class PropertyPlaceholderConfigurer extends org.springframework.beans.factory.config.PlaceholderConfigurerSupport {
                        // @ts-ignore
                        constructor()
                        /**
                         * Never check system properties.
                         */
                        // @ts-ignore
                        public static readonly SYSTEM_PROPERTIES_MODE_NEVER: number /*int*/
                        /**
                         * Check system properties if not resolvable in the specified properties.
                         * This is the default.
                         */
                        // @ts-ignore
                        public static readonly SYSTEM_PROPERTIES_MODE_FALLBACK: number /*int*/
                        /**
                         * Check system properties first, before trying the specified properties.
                         * This allows system properties to override any other property source.
                         */
                        // @ts-ignore
                        public static readonly SYSTEM_PROPERTIES_MODE_OVERRIDE: number /*int*/
                        /**
                         * Set the system property mode by the name of the corresponding constant,
                         * e.g. "SYSTEM_PROPERTIES_MODE_OVERRIDE".
                         * @param constantName name of the constant
                         * @see #setSystemPropertiesMode
                         */
                        // @ts-ignore
                        public setSystemPropertiesModeName(constantName: java.lang.String | string): void
                        /**
                         * Set how to check system properties: as fallback, as override, or never.
                         * For example, will resolve ${user.dir} to the "user.dir" system property.
                         * <p>The default is "fallback": If not being able to resolve a placeholder
                         * with the specified properties, a system property will be tried.
                         * "override" will check for a system property first, before trying the
                         * specified properties. "never" will not check system properties at all.
                         * @see #SYSTEM_PROPERTIES_MODE_NEVER
                         * @see #SYSTEM_PROPERTIES_MODE_FALLBACK
                         * @see #SYSTEM_PROPERTIES_MODE_OVERRIDE
                         * @see #setSystemPropertiesModeName
                         */
                        // @ts-ignore
                        public setSystemPropertiesMode(systemPropertiesMode: number /*int*/): void
                        /**
                         * Set whether to search for a matching system environment variable
                         * if no matching system property has been found. Only applied when
                         * "systemPropertyMode" is active (i.e. "fallback" or "override"), right
                         * after checking JVM system properties.
                         * <p>Default is "true". Switch this setting off to never resolve placeholders
                         * against system environment variables. Note that it is generally recommended
                         * to pass external values in as JVM system properties: This can easily be
                         * achieved in a startup script, even for existing environment variables.
                         * @see #setSystemPropertiesMode
                         * @see System#getProperty(String)
                         * @see System#getenv(String)
                         */
                        // @ts-ignore
                        public setSearchSystemEnvironment(searchSystemEnvironment: boolean): void
                        /**
                         * Resolve the given placeholder using the given properties, performing
                         * a system properties check according to the given mode.
                         * <p>The default implementation delegates to {@code resolvePlaceholder
                         * (placeholder, props)} before/after the system properties check.
                         * <p>Subclasses can override this for custom resolution strategies,
                         * including customized points for the system properties check.
                         * @param placeholder the placeholder to resolve
                         * @param props the merged properties of this configurer
                         * @param systemPropertiesMode the system properties mode,
                         *  according to the constants in this class
                         * @return the resolved value, of null if none
                         * @see #setSystemPropertiesMode
                         * @see System#getProperty
                         * @see #resolvePlaceholder(String, java.util.Properties)
                         */
                        // @ts-ignore
                        resolvePlaceholder(placeholder: java.lang.String | string, props: java.util.Properties, systemPropertiesMode: number /*int*/): string
                        /**
                         * Resolve the given placeholder using the given properties.
                         * The default implementation simply checks for a corresponding property key.
                         * <p>Subclasses can override this for customized placeholder-to-key mappings
                         * or custom resolution strategies, possibly just using the given properties
                         * as fallback.
                         * <p>Note that system properties will still be checked before respectively
                         * after this method is invoked, according to the system properties mode.
                         * @param placeholder the placeholder to resolve
                         * @param props the merged properties of this configurer
                         * @return the resolved value, of {#code null} if none
                         * @see #setSystemPropertiesMode
                         */
                        // @ts-ignore
                        resolvePlaceholder(placeholder: java.lang.String | string, props: java.util.Properties): string
                        /**
                         * Resolve the given key as JVM system property, and optionally also as
                         * system environment variable if no matching system property has been found.
                         * @param key the placeholder to resolve as system property key
                         * @return the system property value, or {#code null} if not found
                         * @see #setSearchSystemEnvironment
                         * @see System#getProperty(String)
                         * @see System#getenv(String)
                         */
                        // @ts-ignore
                        resolveSystemProperty(key: java.lang.String | string): string
                        /**
                         * Visit each bean definition in the given bean factory and attempt to replace ${...} property
                         * placeholders with values from the given properties.
                         */
                        // @ts-ignore
                        processProperties(beanFactoryToProcess: org.springframework.beans.factory.config.ConfigurableListableBeanFactory, props: java.util.Properties): void
                    }
                }
            }
        }
    }
}
