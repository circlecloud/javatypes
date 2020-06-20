declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                /**
                 * Configures basic date formatting for use with Spring, primarily for
                 * {@link org.springframework.format.annotation.DateTimeFormat} declarations.
                 * Applies to fields of type {@link Date}, {@link Calendar} and {@code long}.
                 * <p>Designed for direct instantiation but also exposes the static
                 * {@link #addDateConverters(ConverterRegistry)} utility method for
                 * ad-hoc use against any {@code ConverterRegistry} instance.
                 * @author Phillip Webb
                 * @since 3.2
                 * @see org.springframework.format.datetime.standard.DateTimeFormatterRegistrar
                 * @see org.springframework.format.datetime.joda.JodaTimeFormatterRegistrar
                 * @see FormatterRegistrar#registerFormatters
                 */
                // @ts-ignore
                class DateFormatterRegistrar extends java.lang.Object implements org.springframework.format.FormatterRegistrar {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set a global date formatter to register.
                     * <p>If not specified, no general formatter for non-annotated
                     * {@link Date} and {@link Calendar} fields will be registered.
                     */
                    // @ts-ignore
                    setFormatter(dateFormatter: org.springframework.format.datetime.DateFormatter): void
                    // @ts-ignore
                    registerFormatters(registry: org.springframework.format.FormatterRegistry): void
                    /**
                     * Add date converters to the specified registry.
                     * @param converterRegistry the registry of converters to add to
                     */
                    // @ts-ignore
                    addDateConverters(converterRegistry: ConverterRegistry): void
                }
            }
        }
    }
}
