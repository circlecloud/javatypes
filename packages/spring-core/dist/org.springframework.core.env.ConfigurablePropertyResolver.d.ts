declare namespace org {
    namespace springframework {
        namespace core {
            namespace env {
                /**
                 * Configuration interface to be implemented by most if not all {@link PropertyResolver}
                 * types. Provides facilities for accessing and customizing the
                 * {@link org.springframework.core.convert.ConversionService ConversionService}
                 * used when converting property values from one type to another.
                 * @author Chris Beams
                 * @since 3.1
                 */
                // @ts-ignore
                interface ConfigurablePropertyResolver extends org.springframework.core.env.PropertyResolver {
                    /**
                     * Return the {@link ConfigurableConversionService} used when performing type
                     * conversions on properties.
                     * <p>The configurable nature of the returned conversion service allows for
                     * the convenient addition and removal of individual {@code Converter} instances:
                     * <pre class="code">
                     * ConfigurableConversionService cs = env.getConversionService();
                     * cs.addConverter(new FooConverter());
                     * </pre>
                     * @see PropertyResolver#getProperty(String, Class)
                     * @see org.springframework.core.convert.converter.ConverterRegistry#addConverter
                     */
                    // @ts-ignore
                    getConversionService(): org.springframework.core.convert.support.ConfigurableConversionService
                    /**
                     * Set the {@link ConfigurableConversionService} to be used when performing type
                     * conversions on properties.
                     * <p><strong>Note:</strong> as an alternative to fully replacing the
                     * {@code ConversionService}, consider adding or removing individual
                     * {@code Converter} instances by drilling into {@link #getConversionService()}
                     * and calling methods such as {@code #addConverter}.
                     * @see PropertyResolver#getProperty(String, Class)
                     * @see #getConversionService()
                     * @see org.springframework.core.convert.converter.ConverterRegistry#addConverter
                     */
                    // @ts-ignore
                    setConversionService(conversionService: org.springframework.core.convert.support.ConfigurableConversionService): void
                    /**
                     * Set the prefix that placeholders replaced by this resolver must begin with.
                     */
                    // @ts-ignore
                    setPlaceholderPrefix(placeholderPrefix: java.lang.String | string): void
                    /**
                     * Set the suffix that placeholders replaced by this resolver must end with.
                     */
                    // @ts-ignore
                    setPlaceholderSuffix(placeholderSuffix: java.lang.String | string): void
                    /**
                     * Specify the separating character between the placeholders replaced by this
                     * resolver and their associated default value, or {@code null} if no such
                     * special character should be processed as a value separator.
                     */
                    // @ts-ignore
                    setValueSeparator(valueSeparator: java.lang.String | string): void
                    /**
                     * Set whether to throw an exception when encountering an unresolvable placeholder
                     * nested within the value of a given property. A {@code false} value indicates strict
                     * resolution, i.e. that an exception will be thrown. A {@code true} value indicates
                     * that unresolvable nested placeholders should be passed through in their unresolved
                     * ${...} form.
                     * <p>Implementations of {@link #getProperty(String)} and its variants must inspect
                     * the value set here to determine correct behavior when property values contain
                     * unresolvable placeholders.
                     * @since 3.2
                     */
                    // @ts-ignore
                    setIgnoreUnresolvableNestedPlaceholders(ignoreUnresolvableNestedPlaceholders: boolean): void
                    /**
                     * Specify which properties must be present, to be verified by
                     * {@link #validateRequiredProperties()}.
                     */
                    // @ts-ignore
                    setRequiredProperties(...requiredProperties: java.lang.String[] | string[]): void
                    /**
                     * Validate that each of the properties specified by
                     * {@link #setRequiredProperties} is present and resolves to a
                     * non-{@code null} value.
                     * @throws MissingRequiredPropertiesException if any of the required
                     *  properties are not resolvable.
                     */
                    // @ts-ignore
                    validateRequiredProperties(): void
                }
            }
        }
    }
}
