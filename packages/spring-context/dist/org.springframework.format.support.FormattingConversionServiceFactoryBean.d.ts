declare namespace org {
    namespace springframework {
        namespace format {
            namespace support {
                /**
                 * A factory providing convenient access to a {@code FormattingConversionService}
                 * configured with converters and formatters for common types such as numbers and
                 * datetimes.
                 * <p>Additional converters and formatters can be registered declaratively through
                 * {@link #setConverters(Set)} and {@link #setFormatters(Set)}. Another option
                 * is to register converters and formatters in code by implementing the
                 * {@link FormatterRegistrar} interface. You can then configure provide the set
                 * of registrars to use through {@link #setFormatterRegistrars(Set)}.
                 * <p>A good example for registering converters and formatters in code is
                 * {@code JodaTimeFormatterRegistrar}, which registers a number of
                 * date-related formatters and converters. For a more detailed list of cases
                 * see {@link #setFormatterRegistrars(Set)}
                 * <p>Like all {@code FactoryBean} implementations, this class is suitable for
                 * use when configuring a Spring application context using Spring {@code <beans>}
                 * XML. When configuring the container with
                 * {@link org.springframework.context.annotation.Configuration @Configuration}
                 * classes, simply instantiate, configure and return the appropriate
                 * {@code FormattingConversionService} object from a
                 * {@link org.springframework.context.annotation.Bean @Bean} method.
                 * @author Keith Donald
                 * @author Juergen Hoeller
                 * @author Rossen Stoyanchev
                 * @author Chris Beams
                 * @since 3.0
                 */
                // @ts-ignore
                class FormattingConversionServiceFactoryBean extends java.lang.Object implements org.springframework.context.EmbeddedValueResolverAware {
                    // @ts-ignore
                    constructor()
                    /**
                     * Configure the set of custom converter objects that should be added.
                     * @param converters instances of any of the following:
                     *  {#link org.springframework.core.convert.converter.Converter},
                     *  {@link org.springframework.core.convert.converter.ConverterFactory},
                     *  {@link org.springframework.core.convert.converter.GenericConverter}
                     */
                    // @ts-ignore
                    public setConverters(converters: java.util.Set<any> | Array<any>): void
                    /**
                     * Configure the set of custom formatter objects that should be added.
                     * @param formatters instances of {#link Formatter} or {@link AnnotationFormatterFactory}
                     */
                    // @ts-ignore
                    public setFormatters(formatters: java.util.Set<any> | Array<any>): void
                    /**
                     * <p>Configure the set of FormatterRegistrars to invoke to register
                     * Converters and Formatters in addition to those added declaratively
                     * via {@link #setConverters(Set)} and {@link #setFormatters(Set)}.
                     * <p>FormatterRegistrars are useful when registering multiple related
                     * converters and formatters for a formatting category, such as Date
                     * formatting. All types related needed to support the formatting
                     * category can be registered from one place.
                     * <p>FormatterRegistrars can also be used to register Formatters
                     * indexed under a specific field type different from its own &lt;T&gt;,
                     * or when registering a Formatter from a Printer/Parser pair.
                     * @see FormatterRegistry#addFormatterForFieldType(Class, Formatter)
                     * @see FormatterRegistry#addFormatterForFieldType(Class, Printer, Parser)
                     */
                    // @ts-ignore
                    public setFormatterRegistrars(formatterRegistrars: java.util.Set<org.springframework.format.FormatterRegistrar> | Array<org.springframework.format.FormatterRegistrar>): void
                    /**
                     * Indicate whether default formatters should be registered or not.
                     * <p>By default, built-in formatters are registered. This flag can be used
                     * to turn that off and rely on explicitly registered formatters only.
                     * @see #setFormatters(Set)
                     * @see #setFormatterRegistrars(Set)
                     */
                    // @ts-ignore
                    public setRegisterDefaultFormatters(registerDefaultFormatters: boolean): void
                    // @ts-ignore
                    public setEmbeddedValueResolver(embeddedValueResolver: StringValueResolver): void
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    // @ts-ignore
                    public getObject(): org.springframework.format.support.FormattingConversionService
                    // @ts-ignore
                    public getObjectType(): java.lang.Class<any>
                    // @ts-ignore
                    public isSingleton(): boolean
                }
            }
        }
    }
}
