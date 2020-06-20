declare namespace org {
    namespace springframework {
        namespace core {
            namespace env {
                /**
                 * Holder containing one or more {@link PropertySource} objects.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @since 3.1
                 * @see PropertySource
                 */
                // @ts-ignore
                interface PropertySources extends java.lang.Iterable<org.springframework.core.env.PropertySource<?>> {
                    /**
                     * Return a sequential {@link Stream} containing the property sources.
                     * @since 5.1
                     */
                    // @ts-ignore
                    stream(): java.util.stream.Stream<org.springframework.core.env.PropertySource<?>>
                    /**
                     * Return whether a property source with the given name is contained.
                     * @param name the {#linkplain PropertySource#getName() name of the property source} to find
                     */
                    // @ts-ignore
                    contains(name: string): boolean
                    /**
                     * Return the property source with the given name, {@code null} if not found.
                     * @param name the {#linkplain PropertySource#getName() name of the property source} to find
                     */
                    // @ts-ignore
                    get(name: string): org.springframework.core.env.PropertySource<?>
                }
            }
        }
    }
}
