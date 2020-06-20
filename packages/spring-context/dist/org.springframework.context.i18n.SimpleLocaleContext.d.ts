declare namespace org {
    namespace springframework {
        namespace context {
            namespace i18n {
                /**
                 * Simple implementation of the {@link LocaleContext} interface,
                 * always returning a specified {@code Locale}.
                 * @author Juergen Hoeller
                 * @since 1.2
                 * @see LocaleContextHolder#setLocaleContext
                 * @see LocaleContextHolder#getLocale()
                 * @see SimpleTimeZoneAwareLocaleContext
                 */
                // @ts-ignore
                class SimpleLocaleContext extends java.lang.Object implements org.springframework.context.i18n.LocaleContext {
                    /**
                     * Create a new SimpleLocaleContext that exposes the specified Locale.
                     * Every {@link #getLocale()} call will return this Locale.
                     * @param locale the Locale to expose, or {#code null} for no specific one
                     */
                    // @ts-ignore
                    constructor(locale: java.util.Locale)
                    // @ts-ignore
                    getLocale(): java.util.Locale
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
