declare namespace org {
    namespace springframework {
        namespace core {
            namespace env {
                /**
                 * {@link PropertyResolver} implementation that resolves property values against
                 * an underlying set of {@link PropertySources}.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @since 3.1
                 * @see PropertySource
                 * @see PropertySources
                 * @see AbstractEnvironment
                 */
                // @ts-ignore
                class PropertySourcesPropertyResolver extends org.springframework.core.env.AbstractPropertyResolver {
                    /**
                     * Create a new resolver against the given property sources.
                     * @param propertySources the set of {#link PropertySource} objects to use
                     */
                    // @ts-ignore
                    constructor(propertySources: org.springframework.core.env.PropertySources)
                    // @ts-ignore
                    containsProperty(key: string): boolean
                    // @ts-ignore
                    getProperty(key: string): java.lang.String
                    // @ts-ignore
                    getProperty<T>(key: string, targetValueType: java.lang.Class<T>): T
                    // @ts-ignore
                    getPropertyAsRawString(key: string): java.lang.String
                    // @ts-ignore
                    getProperty<T>(key: string, targetValueType: java.lang.Class<T>, resolveNestedPlaceholders: boolean): T
                    /**
                     * Log the given key as found in the given {@link PropertySource}, resulting in
                     * the given value.
                     * <p>The default implementation writes a debug log message with key and source.
                     * As of 4.3.3, this does not log the value anymore in order to avoid accidental
                     * logging of sensitive settings. Subclasses may override this method to change
                     * the log level and/or log message, including the property's value if desired.
                     * @param key the key found
                     * @param propertySource the {#code PropertySource} that the key has been found in
                     * @param value the corresponding value
                     * @since 4.3.1
                     */
                    // @ts-ignore
                    logKeyFound(key: string, propertySource: org.springframework.core.env.PropertySource<any>, value: any): void
                }
            }
        }
    }
}
