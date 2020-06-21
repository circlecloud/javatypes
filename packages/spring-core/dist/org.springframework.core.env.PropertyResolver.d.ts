declare namespace org {
    namespace springframework {
        namespace core {
            namespace env {
                /**
                 * Interface for resolving properties against any underlying source.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @since 3.1
                 * @see Environment
                 * @see PropertySourcesPropertyResolver
                 */
                // @ts-ignore
                interface PropertyResolver {
                    /**
                     * Return whether the given property key is available for resolution,
                     * i.e. if the value for the given key is not {@code null}.
                     */
                    // @ts-ignore
                    containsProperty(key: java.lang.String | string): boolean
                    /**
                     * Return the property value associated with the given key,
                     * or {@code null} if the key cannot be resolved.
                     * @param key the property name to resolve
                     * @see #getProperty(String, String)
                     * @see #getProperty(String, Class)
                     * @see #getRequiredProperty(String)
                     */
                    // @ts-ignore
                    getProperty(key: java.lang.String | string): string
                    /**
                     * Return the property value associated with the given key, or
                     * {@code defaultValue} if the key cannot be resolved.
                     * @param key the property name to resolve
                     * @param defaultValue the default value to return if no value is found
                     * @see #getRequiredProperty(String)
                     * @see #getProperty(String, Class)
                     */
                    // @ts-ignore
                    getProperty(key: java.lang.String | string, defaultValue: java.lang.String | string): string
                    /**
                     * Return the property value associated with the given key,
                     * or {@code null} if the key cannot be resolved.
                     * @param key the property name to resolve
                     * @param targetType the expected type of the property value
                     * @see #getRequiredProperty(String, Class)
                     */
                    // @ts-ignore
                    getProperty<T>(key: java.lang.String | string, targetType: java.lang.Class<T>): T
                    /**
                     * Return the property value associated with the given key,
                     * or {@code defaultValue} if the key cannot be resolved.
                     * @param key the property name to resolve
                     * @param targetType the expected type of the property value
                     * @param defaultValue the default value to return if no value is found
                     * @see #getRequiredProperty(String, Class)
                     */
                    // @ts-ignore
                    getProperty<T>(key: java.lang.String | string, targetType: java.lang.Class<T>, defaultValue: T): T
                    /**
                     * Return the property value associated with the given key (never {@code null}).
                     * @throws IllegalStateException if the key cannot be resolved
                     * @see #getRequiredProperty(String, Class)
                     */
                    // @ts-ignore
                    getRequiredProperty(key: java.lang.String | string): string
                    /**
                     * Return the property value associated with the given key, converted to the given
                     * targetType (never {@code null}).
                     * @throws IllegalStateException if the given key cannot be resolved
                     */
                    // @ts-ignore
                    getRequiredProperty<T>(key: java.lang.String | string, targetType: java.lang.Class<T>): T
                    /**
                     * Resolve ${...} placeholders in the given text, replacing them with corresponding
                     * property values as resolved by {@link #getProperty}. Unresolvable placeholders with
                     * no default value are ignored and passed through unchanged.
                     * @param text the String to resolve
                     * @return the resolved String (never {#code null})
                     * @throws IllegalArgumentException if given text is {#code null}
                     * @see #resolveRequiredPlaceholders
                     * @see org.springframework.util.SystemPropertyUtils#resolvePlaceholders(String)
                     */
                    // @ts-ignore
                    resolvePlaceholders(text: java.lang.String | string): string
                    /**
                     * Resolve ${...} placeholders in the given text, replacing them with corresponding
                     * property values as resolved by {@link #getProperty}. Unresolvable placeholders with
                     * no default value will cause an IllegalArgumentException to be thrown.
                     * @return the resolved String (never {#code null})
                     * @throws IllegalArgumentException if given text is {#code null}
                     *  or if any placeholders are unresolvable
                     * @see org.springframework.util.SystemPropertyUtils#resolvePlaceholders(String, boolean)
                     */
                    // @ts-ignore
                    resolveRequiredPlaceholders(text: java.lang.String | string): string
                }
            }
        }
    }
}
