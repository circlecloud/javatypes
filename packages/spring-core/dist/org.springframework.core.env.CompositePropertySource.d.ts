declare namespace org {
    namespace springframework {
        namespace core {
            namespace env {
                /**
                 * Composite {@link PropertySource} implementation that iterates over a set of
                 * {@link PropertySource} instances. Necessary in cases where multiple property sources
                 * share the same name, e.g. when multiple values are supplied to {@code @PropertySource}.
                 * <p>As of Spring 4.1.2, this class extends {@link EnumerablePropertySource} instead
                 * of plain {@link PropertySource}, exposing {@link #getPropertyNames()} based on the
                 * accumulated property names from all contained sources (as far as possible).
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @author Phillip Webb
                 * @since 3.1.1
                 */
                // @ts-ignore
                class CompositePropertySource extends org.springframework.core.env.EnumerablePropertySource<java.lang.Object> {
                    /**
                     * Create a new {@code CompositePropertySource}.
                     * @param name the name of the property source
                     */
                    // @ts-ignore
                    constructor(name: string)
                    // @ts-ignore
                    getProperty(name: string): java.lang.Object
                    // @ts-ignore
                    containsProperty(name: string): boolean
                    // @ts-ignore
                    getPropertyNames(): java.lang.String[]
                    /**
                     * Add the given {@link PropertySource} to the end of the chain.
                     * @param propertySource the PropertySource to add
                     */
                    // @ts-ignore
                    addPropertySource(propertySource: org.springframework.core.env.PropertySource<any>): void
                    /**
                     * Add the given {@link PropertySource} to the start of the chain.
                     * @param propertySource the PropertySource to add
                     * @since 4.1
                     */
                    // @ts-ignore
                    addFirstPropertySource(propertySource: org.springframework.core.env.PropertySource<any>): void
                    /**
                     * Return all property sources that this composite source holds.
                     * @since 4.1.1
                     */
                    // @ts-ignore
                    getPropertySources(): java.util.Collection<org.springframework.core.env.PropertySource<?>>
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
