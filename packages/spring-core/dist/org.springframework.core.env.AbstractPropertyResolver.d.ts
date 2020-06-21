declare namespace org {
    namespace springframework {
        namespace core {
            namespace env {
                /**
                 * Abstract base class for resolving properties against any underlying source.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @since 3.1
                 */
                // @ts-ignore
                abstract class AbstractPropertyResolver extends java.lang.Object implements org.springframework.core.env.ConfigurablePropertyResolver {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    readonly logger: Log
                    // @ts-ignore
                    public getConversionService(): org.springframework.core.convert.support.ConfigurableConversionService
                    // @ts-ignore
                    public setConversionService(conversionService: org.springframework.core.convert.support.ConfigurableConversionService): void
                    /**
                     * Set the prefix that placeholders replaced by this resolver must begin with.
                     * <p>The default is "${".
                     * @see org.springframework.util.SystemPropertyUtils#PLACEHOLDER_PREFIX
                     */
                    // @ts-ignore
                    public setPlaceholderPrefix(placeholderPrefix: java.lang.String | string): void
                    /**
                     * Set the suffix that placeholders replaced by this resolver must end with.
                     * <p>The default is "}".
                     * @see org.springframework.util.SystemPropertyUtils#PLACEHOLDER_SUFFIX
                     */
                    // @ts-ignore
                    public setPlaceholderSuffix(placeholderSuffix: java.lang.String | string): void
                    /**
                     * Specify the separating character between the placeholders replaced by this
                     * resolver and their associated default value, or {@code null} if no such
                     * special character should be processed as a value separator.
                     * <p>The default is ":".
                     * @see org.springframework.util.SystemPropertyUtils#VALUE_SEPARATOR
                     */
                    // @ts-ignore
                    public setValueSeparator(valueSeparator: java.lang.String | string): void
                    /**
                     * Set whether to throw an exception when encountering an unresolvable placeholder
                     * nested within the value of a given property. A {@code false} value indicates strict
                     * resolution, i.e. that an exception will be thrown. A {@code true} value indicates
                     * that unresolvable nested placeholders should be passed through in their unresolved
                     * ${...} form.
                     * <p>The default is {@code false}.
                     * @since 3.2
                     */
                    // @ts-ignore
                    public setIgnoreUnresolvableNestedPlaceholders(ignoreUnresolvableNestedPlaceholders: boolean): void
                    // @ts-ignore
                    public setRequiredProperties(...requiredProperties: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public validateRequiredProperties(): void
                    // @ts-ignore
                    public containsProperty(key: java.lang.String | string): boolean
                    // @ts-ignore
                    public getProperty(key: java.lang.String | string): string
                    // @ts-ignore
                    public getProperty(key: java.lang.String | string, defaultValue: java.lang.String | string): string
                    // @ts-ignore
                    public getProperty<T>(key: java.lang.String | string, targetType: java.lang.Class<T>, defaultValue: T): T
                    // @ts-ignore
                    public getRequiredProperty(key: java.lang.String | string): string
                    // @ts-ignore
                    public getRequiredProperty<T>(key: java.lang.String | string, valueType: java.lang.Class<T>): T
                    // @ts-ignore
                    public resolvePlaceholders(text: java.lang.String | string): string
                    // @ts-ignore
                    public resolveRequiredPlaceholders(text: java.lang.String | string): string
                    /**
                     * Resolve placeholders within the given string, deferring to the value of
                     * {@link #setIgnoreUnresolvableNestedPlaceholders} to determine whether any
                     * unresolvable placeholders should raise an exception or be ignored.
                     * <p>Invoked from {@link #getProperty} and its variants, implicitly resolving
                     * nested placeholders. In contrast, {@link #resolvePlaceholders} and
                     * {@link #resolveRequiredPlaceholders} do <i>not</i> delegate
                     * to this method but rather perform their own handling of unresolvable
                     * placeholders, as specified by each of those methods.
                     * @since 3.2
                     * @see #setIgnoreUnresolvableNestedPlaceholders
                     */
                    // @ts-ignore
                    resolveNestedPlaceholders(value: java.lang.String | string): string
                    /**
                     * Convert the given value to the specified target type, if necessary.
                     * @param value the original property value
                     * @param targetType the specified target type for property retrieval
                     * @return the converted value, or the original value if no conversion
                     *  is necessary
                     * @since 4.3.5
                     */
                    // @ts-ignore
                    convertValueIfNecessary<T>(value: java.lang.Object | any, targetType: java.lang.Class<T>): T
                    /**
                     * Retrieve the specified property as a raw String,
                     * i.e. without resolution of nested placeholders.
                     * @param key the property name to resolve
                     * @return the property value or {#code null} if none found
                     */
                    // @ts-ignore
                    abstract getPropertyAsRawString(key: java.lang.String | string): string
                }
            }
        }
    }
}
