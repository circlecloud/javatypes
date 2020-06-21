declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                /**
                 * {@link java.beans.PropertyEditor Editor} for {@link Resource}
                 * descriptors, to automatically convert {@code String} locations
                 * e.g. {@code file:C:/myfile.txt} or {@code classpath:myfile.txt} to
                 * {@code Resource} properties instead of using a {@code String} location property.
                 * <p>The path may contain {@code ${...}} placeholders, to be
                 * resolved as {@link org.springframework.core.env.Environment} properties:
                 * e.g. {@code ${user.dir}}. Unresolvable placeholders are ignored by default.
                 * <p>Delegates to a {@link ResourceLoader} to do the heavy lifting,
                 * by default using a {@link DefaultResourceLoader}.
                 * @author Juergen Hoeller
                 * @author Dave Syer
                 * @author Chris Beams
                 * @since 28.12.2003
                 * @see Resource
                 * @see ResourceLoader
                 * @see DefaultResourceLoader
                 * @see PropertyResolver#resolvePlaceholders
                 */
                // @ts-ignore
                class ResourceEditor extends java.beans.PropertyEditorSupport {
                    /**
                     * Create a new instance of the {@link ResourceEditor} class
                     * using a {@link DefaultResourceLoader} and {@link StandardEnvironment}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new instance of the {@link ResourceEditor} class
                     * using the given {@link ResourceLoader} and {@link PropertyResolver}.
                     * @param resourceLoader the {#code ResourceLoader} to use
                     * @param propertyResolver the {#code PropertyResolver} to use
                     */
                    // @ts-ignore
                    constructor(resourceLoader: org.springframework.core.io.ResourceLoader, propertyResolver: org.springframework.core.env.PropertyResolver)
                    /**
                     * Create a new instance of the {@link ResourceEditor} class
                     * using the given {@link ResourceLoader}.
                     * @param resourceLoader the {#code ResourceLoader} to use
                     * @param propertyResolver the {#code PropertyResolver} to use
                     * @param ignoreUnresolvablePlaceholders whether to ignore unresolvable placeholders
                     *  if no corresponding property could be found in the given {#code propertyResolver}
                     */
                    // @ts-ignore
                    constructor(resourceLoader: org.springframework.core.io.ResourceLoader, propertyResolver: org.springframework.core.env.PropertyResolver, ignoreUnresolvablePlaceholders: boolean)
                    // @ts-ignore
                    public setAsText(text: java.lang.String | string): void
                    /**
                     * Resolve the given path, replacing placeholders with corresponding
                     * property values from the {@code environment} if necessary.
                     * @param path the original file path
                     * @return the resolved file path
                     * @see PropertyResolver#resolvePlaceholders
                     * @see PropertyResolver#resolveRequiredPlaceholders
                     */
                    // @ts-ignore
                    resolvePath(path: java.lang.String | string): string
                    // @ts-ignore
                    public getAsText(): string
                }
            }
        }
    }
}
