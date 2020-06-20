declare namespace org {
    namespace springframework {
        namespace context {
            namespace i18n {
                /**
                 * Simple implementation of the {@link TimeZoneAwareLocaleContext} interface,
                 * always returning a specified {@code Locale} and {@code TimeZone}.
                 * <p>Note: Prefer the use of {@link SimpleLocaleContext} when only setting
                 * a Locale but no TimeZone.
                 * @author Juergen Hoeller
                 * @author Nicholas Williams
                 * @since 4.0
                 * @see LocaleContextHolder#setLocaleContext
                 * @see LocaleContextHolder#getTimeZone()
                 */
                // @ts-ignore
                class SimpleTimeZoneAwareLocaleContext extends org.springframework.context.i18n.SimpleLocaleContext implements org.springframework.context.i18n.TimeZoneAwareLocaleContext {
                    /**
                     * Create a new SimpleTimeZoneAwareLocaleContext that exposes the specified
                     * Locale and TimeZone. Every {@link #getLocale()} call will return the given
                     * Locale, and every {@link #getTimeZone()} call will return the given TimeZone.
                     * @param locale the Locale to expose
                     * @param timeZone the TimeZone to expose
                     */
                    // @ts-ignore
                    constructor(locale: java.util.Locale, timeZone: java.util.TimeZone)
                    // @ts-ignore
                    getTimeZone(): java.util.TimeZone
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
