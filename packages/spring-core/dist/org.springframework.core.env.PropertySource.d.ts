declare namespace org {
    namespace springframework {
        namespace core {
            namespace env {
                /**
                 * Abstract base class representing a source of name/value property pairs. The underlying
                 * {@linkplain #getSource() source object} may be of any type {@code T} that encapsulates
                 * properties. Examples include {@link java.util.Properties} objects, {@link java.util.Map}
                 * objects, {@code ServletContext} and {@code ServletConfig} objects (for access to init
                 * parameters). Explore the {@code PropertySource} type hierarchy to see provided
                 * implementations.
                 * <p>{@code PropertySource} objects are not typically used in isolation, but rather
                 * through a {@link PropertySources} object, which aggregates property sources and in
                 * conjunction with a {@link PropertyResolver} implementation that can perform
                 * precedence-based searches across the set of {@code PropertySources}.
                 * <p>{@code PropertySource} identity is determined not based on the content of
                 * encapsulated properties, but rather based on the {@link #getName() name} of the
                 * {@code PropertySource} alone. This is useful for manipulating {@code PropertySource}
                 * objects when in collection contexts. See operations in {@link MutablePropertySources}
                 * as well as the {@link #named(String)} and {@link #toString()} methods for details.
                 * <p>Note that when working with @{@link
                 * org.springframework.context.annotation.Configuration Configuration} classes that
                 * the @{@link org.springframework.context.annotation.PropertySource PropertySource}
                 * annotation provides a convenient and declarative way of adding property sources to the
                 * enclosing {@code Environment}.
                 * @author Chris Beams
                 * @since 3.1
                 * @param <T> the source type
                 * @see PropertySources
                 * @see PropertyResolver
                 * @see PropertySourcesPropertyResolver
                 * @see MutablePropertySources
                 * @see org.springframework.context.annotation.PropertySource
                 */
                // @ts-ignore
                abstract class PropertySource<T> extends java.lang.Object {
                    /**
                     * Create a new {@code PropertySource} with the given name and source object.
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, source: T)
                    /**
                     * Create a new {@code PropertySource} with the given name and with a new
                     * {@code Object} instance as the underlying source.
                     * <p>Often useful in testing scenarios when creating anonymous implementations
                     * that never query an actual source but rather return hard-coded values.
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    // @ts-ignore
                    readonly logger: Log
                    // @ts-ignore
                    readonly name: java.lang.String | string
                    // @ts-ignore
                    readonly source: T
                    /**
                     * Return the name of this {@code PropertySource}.
                     */
                    // @ts-ignore
                    public getName(): string
                    /**
                     * Return the underlying source object for this {@code PropertySource}.
                     */
                    // @ts-ignore
                    public getSource(): T
                    /**
                     * Return whether this {@code PropertySource} contains the given name.
                     * <p>This implementation simply checks for a {@code null} return value
                     * from {@link #getProperty(String)}. Subclasses may wish to implement
                     * a more efficient algorithm if possible.
                     * @param name the property name to find
                     */
                    // @ts-ignore
                    public containsProperty(name: java.lang.String | string): boolean
                    /**
                     * Return the value associated with the given name,
                     * or {@code null} if not found.
                     * @param name the property to find
                     * @see PropertyResolver#getRequiredProperty(String)
                     */
                    // @ts-ignore
                    public abstract getProperty(name: java.lang.String | string): any
                    /**
                     * This {@code PropertySource} object is equal to the given object if:
                     * <ul>
                     * <li>they are the same instance
                     * <li>the {@code name} properties for both objects are equal
                     * </ul>
                     * <p>No properties other than {@code name} are evaluated.
                     */
                    // @ts-ignore
                    public equals(other: java.lang.Object | any): boolean
                    /**
                     * Return a hash code derived from the {@code name} property
                     * of this {@code PropertySource} object.
                     */
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    /**
                     * Produce concise output (type and name) if the current log level does not include
                     * debug. If debug is enabled, produce verbose output including the hash code of the
                     * PropertySource instance and every name/value property pair.
                     * <p>This variable verbosity is useful as a property source such as system properties
                     * or environment variables may contain an arbitrary number of property pairs,
                     * potentially leading to difficult to read exception and log messages.
                     * @see Log#isDebugEnabled()
                     */
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Return a {@code PropertySource} implementation intended for collection comparison purposes only.
                     * <p>Primarily for internal use, but given a collection of {@code PropertySource} objects, may be
                     * used as follows:
                     * <pre class="code">
                     * {@code List<PropertySource<?>> sources = new ArrayList<PropertySource<?>>();
                     * sources.add(new MapPropertySource("sourceA", mapA));
                     * sources.add(new MapPropertySource("sourceB", mapB));
                     * assert sources.contains(PropertySource.named("sourceA"));
                     * assert sources.contains(PropertySource.named("sourceB"));
                     * assert !sources.contains(PropertySource.named("sourceC"));
                     * }</pre>
                     * The returned {@code PropertySource} will throw {@code UnsupportedOperationException}
                     * if any methods other than {@code equals(Object)}, {@code hashCode()}, and {@code toString()}
                     * are called.
                     * @param name the name of the comparison {#code PropertySource} to be created and returned.
                     */
                    // @ts-ignore
                    public static named(name: java.lang.String | string): org.springframework.core.env.PropertySource<any>
                }
            }
        }
    }
}
