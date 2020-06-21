declare namespace java {
    namespace util {
        namespace spi {
            /**
             * An abstract class for service providers that
             * provide localized currency symbols and display names for the
             * {@link java.util.Currency Currency} class.
             * Note that currency symbols are considered names when determining
             * behaviors described in the
             * {@link java.util.spi.LocaleServiceProvider LocaleServiceProvider}
             * specification.
             * @since 1.6
             */
            // @ts-ignore
            abstract class CurrencyNameProvider extends java.util.spi.LocaleServiceProvider {
                /**
                 * Sole constructor.  (For invocation by subclass constructors, typically
                 * implicit.)
                 */
                // @ts-ignore
                constructor()
                /**
                 * Gets the symbol of the given currency code for the specified locale.
                 * For example, for "USD" (US Dollar), the symbol is "$" if the specified
                 * locale is the US, while for other locales it may be "US$". If no
                 * symbol can be determined, null should be returned.
                 * @param currencyCode the ISO 4217 currency code, which
                 *      consists of three upper-case letters between 'A' (U+0041) and
                 *      'Z' (U+005A)
                 * @param locale the desired locale
                 * @return the symbol of the given currency code for the specified locale, or null if
                 *      the symbol is not available for the locale
                 * @exception NullPointerException if <code>currencyCode</code> or
                 *      <code>locale</code> is null
                 * @exception IllegalArgumentException if <code>currencyCode</code> is not in
                 *      the form of three upper-case letters, or <code>locale</code> isn't
                 *      one of the locales returned from
                 *      {#link java.util.spi.LocaleServiceProvider#getAvailableLocales()
                 *      getAvailableLocales()}.
                 * @see java.util.Currency#getSymbol(java.util.Locale)
                 */
                // @ts-ignore
                public abstract getSymbol(currencyCode: java.lang.String | string, locale: java.util.Locale): string
                /**
                 * Returns a name for the currency that is appropriate for display to the
                 * user.  The default implementation returns null.
                 * @param currencyCode the ISO 4217 currency code, which
                 *      consists of three upper-case letters between 'A' (U+0041) and
                 *      'Z' (U+005A)
                 * @param locale the desired locale
                 * @return the name for the currency that is appropriate for display to the
                 *      user, or null if the name is not available for the locale
                 * @exception IllegalArgumentException if <code>currencyCode</code> is not in
                 *      the form of three upper-case letters, or <code>locale</code> isn't
                 *      one of the locales returned from
                 *      {#link java.util.spi.LocaleServiceProvider#getAvailableLocales()
                 *      getAvailableLocales()}.
                 * @exception NullPointerException if <code>currencyCode</code> or
                 *      <code>locale</code> is <code>null</code>
                 * @since 1.7
                 */
                // @ts-ignore
                public getDisplayName(currencyCode: java.lang.String | string, locale: java.util.Locale): string
            }
        }
    }
}
