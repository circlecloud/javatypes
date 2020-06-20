declare namespace org {
    namespace springframework {
        namespace context {
            namespace i18n {
                /**
                 * Strategy interface for determining the current Locale.
                 * <p>A LocaleContext instance can be associated with a thread
                 * via the LocaleContextHolder class.
                 * @author Juergen Hoeller
                 * @since 1.2
                 * @see LocaleContextHolder#getLocale()
                 * @see TimeZoneAwareLocaleContext
                 */
                // @ts-ignore
                interface LocaleContext {
                    /**
                     * Return the current Locale, which can be fixed or determined dynamically,
                     * depending on the implementation strategy.
                     * @return the current Locale, or {#code null} if no specific Locale associated
                     */
                    // @ts-ignore
                    getLocale(): java.util.Locale
                }
            }
        }
    }
}
