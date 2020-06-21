declare namespace java {
    namespace text {
        namespace spi {
            /**
             * An abstract class for service providers that
             * provide instances of the
             * {@link java.text.DecimalFormatSymbols DecimalFormatSymbols} class.
             * <p>The requested {@code Locale} may contain an <a
             * href="../../util/Locale.html#def_locale_extension"> extension</a> for
             * specifying the desired numbering system. For example, {@code "ar-u-nu-arab"}
             * (in the BCP 47 language tag form) specifies Arabic with the Arabic-Indic
             * digits and symbols, while {@code "ar-u-nu-latn"} specifies Arabic with the
             * Latin digits and symbols. Refer to the <em>Unicode Locale Data Markup
             * Language (LDML)</em> specification for numbering systems.
             * @since 1.6
             * @see Locale#forLanguageTag(String)
             * @see Locale#getExtension(char)
             */
            // @ts-ignore
            abstract class DecimalFormatSymbolsProvider extends java.util.spi.LocaleServiceProvider {
                /**
                 * Sole constructor.  (For invocation by subclass constructors, typically
                 * implicit.)
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns a new <code>DecimalFormatSymbols</code> instance for the
                 * specified locale.
                 * @param locale the desired locale
                 * @exception NullPointerException if <code>locale</code> is null
                 * @exception IllegalArgumentException if <code>locale</code> isn't
                 *      one of the locales returned from
                 *      {#link java.util.spi.LocaleServiceProvider#getAvailableLocales()
                 *      getAvailableLocales()}.
                 * @return a <code>DecimalFormatSymbols</code> instance.
                 * @see java.text.DecimalFormatSymbols#getInstance(java.util.Locale)
                 */
                // @ts-ignore
                public abstract getInstance(locale: java.util.Locale): java.text.DecimalFormatSymbols
            }
        }
    }
}
