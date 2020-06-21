declare namespace java {
    namespace text {
        namespace spi {
            /**
             * An abstract class for service providers that
             * provide instances of the
             * {@link java.text.DateFormatSymbols DateFormatSymbols} class.
             * @since 1.6
             */
            // @ts-ignore
            abstract class DateFormatSymbolsProvider extends java.util.spi.LocaleServiceProvider {
                /**
                 * Sole constructor.  (For invocation by subclass constructors, typically
                 * implicit.)
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns a new <code>DateFormatSymbols</code> instance for the
                 * specified locale.
                 * @param locale the desired locale
                 * @exception NullPointerException if <code>locale</code> is null
                 * @exception IllegalArgumentException if <code>locale</code> isn't
                 *      one of the locales returned from
                 *      {#link java.util.spi.LocaleServiceProvider#getAvailableLocales()
                 *      getAvailableLocales()}.
                 * @return a <code>DateFormatSymbols</code> instance.
                 * @see java.text.DateFormatSymbols#getInstance(java.util.Locale)
                 */
                // @ts-ignore
                public abstract getInstance(locale: java.util.Locale): java.text.DateFormatSymbols
            }
        }
    }
}
