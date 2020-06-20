declare namespace org {
    namespace springframework {
        namespace format {
            namespace support {
                /**
                 * A specialization of {@link FormattingConversionService} configured by default with
                 * converters and formatters appropriate for most applications.
                 * <p>Designed for direct instantiation but also exposes the static {@link #addDefaultFormatters}
                 * utility method for ad hoc use against any {@code FormatterRegistry} instance, just
                 * as {@code DefaultConversionService} exposes its own
                 * {@link DefaultConversionService#addDefaultConverters addDefaultConverters} method.
                 * <p>Automatically registers formatters for JSR-354 Money & Currency, JSR-310 Date-Time
                 * and/or Joda-Time, depending on the presence of the corresponding API on the classpath.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @since 3.1
                 */
                // @ts-ignore
                class DefaultFormattingConversionService extends org.springframework.format.support.FormattingConversionService {
                    /**
                     * Create a new {@code DefaultFormattingConversionService} with the set of
                     * {@linkplain DefaultConversionService#addDefaultConverters default converters} and
                     * {@linkplain #addDefaultFormatters default formatters}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new {@code DefaultFormattingConversionService} with the set of
                     * {@linkplain DefaultConversionService#addDefaultConverters default converters} and,
                     * based on the value of {@code registerDefaultFormatters}, the set of
                     * {@linkplain #addDefaultFormatters default formatters}.
                     * @param registerDefaultFormatters whether to register default formatters
                     */
                    // @ts-ignore
                    constructor(registerDefaultFormatters: boolean)
                    /**
                     * Create a new {@code DefaultFormattingConversionService} with the set of
                     * {@linkplain DefaultConversionService#addDefaultConverters default converters} and,
                     * based on the value of {@code registerDefaultFormatters}, the set of
                     * {@linkplain #addDefaultFormatters default formatters}.
                     * @param embeddedValueResolver delegated to {#link #setEmbeddedValueResolver(StringValueResolver)}
                     *  prior to calling {@link #addDefaultFormatters}.
                     * @param registerDefaultFormatters whether to register default formatters
                     */
                    // @ts-ignore
                    constructor(embeddedValueResolver: StringValueResolver, registerDefaultFormatters: boolean)
                    /**
                     * Add formatters appropriate for most environments: including number formatters,
                     * JSR-354 Money & Currency formatters, JSR-310 Date-Time and/or Joda-Time formatters,
                     * depending on the presence of the corresponding API on the classpath.
                     * @param formatterRegistry the service to register default formatters with
                     */
                    // @ts-ignore
                    addDefaultFormatters(formatterRegistry: org.springframework.format.FormatterRegistry): void
                }
            }
        }
    }
}
