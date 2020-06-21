declare namespace org {
    namespace springframework {
        namespace core {
            namespace env {
                /**
                 * The default implementation of the {@link PropertySources} interface.
                 * Allows manipulation of contained property sources and provides a constructor
                 * for copying an existing {@code PropertySources} instance.
                 * <p>Where <em>precedence</em> is mentioned in methods such as {@link #addFirst}
                 * and {@link #addLast}, this is with regard to the order in which property sources
                 * will be searched when resolving a given property with a {@link PropertyResolver}.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @since 3.1
                 * @see PropertySourcesPropertyResolver
                 */
                // @ts-ignore
                class MutablePropertySources extends java.lang.Object implements org.springframework.core.env.PropertySources {
                    /**
                     * Create a new {@link MutablePropertySources} object.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new {@code MutablePropertySources} from the given propertySources
                     * object, preserving the original order of contained {@code PropertySource} objects.
                     */
                    // @ts-ignore
                    constructor(propertySources: org.springframework.core.env.PropertySources)
                    // @ts-ignore
                    public iterator(): java.util.Iterator<org.springframework.core.env.PropertySource<any>>
                    // @ts-ignore
                    public spliterator(): java.util.Spliterator<org.springframework.core.env.PropertySource<any>>
                    // @ts-ignore
                    public stream(): java.util.stream.Stream<org.springframework.core.env.PropertySource<any>>
                    // @ts-ignore
                    public contains(name: java.lang.String | string): boolean
                    // @ts-ignore
                    public get(name: java.lang.String | string): org.springframework.core.env.PropertySource<any>
                    /**
                     * Add the given property source object with highest precedence.
                     */
                    // @ts-ignore
                    public addFirst(propertySource: org.springframework.core.env.PropertySource<any>): void
                    /**
                     * Add the given property source object with lowest precedence.
                     */
                    // @ts-ignore
                    public addLast(propertySource: org.springframework.core.env.PropertySource<any>): void
                    /**
                     * Add the given property source object with precedence immediately higher
                     * than the named relative property source.
                     */
                    // @ts-ignore
                    public addBefore(relativePropertySourceName: java.lang.String | string, propertySource: org.springframework.core.env.PropertySource<any>): void
                    /**
                     * Add the given property source object with precedence immediately lower
                     * than the named relative property source.
                     */
                    // @ts-ignore
                    public addAfter(relativePropertySourceName: java.lang.String | string, propertySource: org.springframework.core.env.PropertySource<any>): void
                    /**
                     * Return the precedence of the given property source, {@code -1} if not found.
                     */
                    // @ts-ignore
                    public precedenceOf(propertySource: org.springframework.core.env.PropertySource<any>): number /*int*/
                    /**
                     * Remove and return the property source with the given name, {@code null} if not found.
                     * @param name the name of the property source to find and remove
                     */
                    // @ts-ignore
                    public remove(name: java.lang.String | string): org.springframework.core.env.PropertySource<any>
                    /**
                     * Replace the property source with the given name with the given property source object.
                     * @param name the name of the property source to find and replace
                     * @param propertySource the replacement property source
                     * @throws IllegalArgumentException if no property source with the given name is present
                     * @see #contains
                     */
                    // @ts-ignore
                    public replace(name: java.lang.String | string, propertySource: org.springframework.core.env.PropertySource<any>): void
                    /**
                     * Return the number of {@link PropertySource} objects contained.
                     */
                    // @ts-ignore
                    public size(): number /*int*/
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Ensure that the given property source is not being added relative to itself.
                     */
                    // @ts-ignore
                    assertLegalRelativeAddition(relativePropertySourceName: java.lang.String | string, propertySource: org.springframework.core.env.PropertySource<any>): void
                    /**
                     * Remove the given property source if it is present.
                     */
                    // @ts-ignore
                    removeIfPresent(propertySource: org.springframework.core.env.PropertySource<any>): void
                }
            }
        }
    }
}
