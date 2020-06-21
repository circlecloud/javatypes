declare namespace java {
    namespace text {
        namespace spi {
            /**
             * An abstract class for service providers that
             * provide concrete implementations of the
             * {@link java.text.NumberFormat NumberFormat} class.
             * @since 1.6
             */
            // @ts-ignore
            abstract class NumberFormatProvider extends java.util.spi.LocaleServiceProvider {
                /**
                 * Sole constructor.  (For invocation by subclass constructors, typically
                 * implicit.)
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns a new <code>NumberFormat</code> instance which formats
                 * monetary values for the specified locale.
                 * @param locale the desired locale.
                 * @exception NullPointerException if <code>locale</code> is null
                 * @exception IllegalArgumentException if <code>locale</code> isn't
                 *      one of the locales returned from
                 *      {#link java.util.spi.LocaleServiceProvider#getAvailableLocales()
                 *      getAvailableLocales()}.
                 * @return a currency formatter
                 * @see java.text.NumberFormat#getCurrencyInstance(java.util.Locale)
                 */
                // @ts-ignore
                public abstract getCurrencyInstance(locale: java.util.Locale): java.text.NumberFormat
                /**
                 * Returns a new <code>NumberFormat</code> instance which formats
                 * integer values for the specified locale.
                 * The returned number format is configured to
                 * round floating point numbers to the nearest integer using
                 * half-even rounding (see {@link java.math.RoundingMode#HALF_EVEN HALF_EVEN})
                 * for formatting, and to parse only the integer part of
                 * an input string (see {@link
                 * java.text.NumberFormat#isParseIntegerOnly isParseIntegerOnly}).
                 * @param locale the desired locale
                 * @exception NullPointerException if <code>locale</code> is null
                 * @exception IllegalArgumentException if <code>locale</code> isn't
                 *      one of the locales returned from
                 *      {#link java.util.spi.LocaleServiceProvider#getAvailableLocales()
                 *      getAvailableLocales()}.
                 * @return a number format for integer values
                 * @see java.text.NumberFormat#getIntegerInstance(java.util.Locale)
                 */
                // @ts-ignore
                public abstract getIntegerInstance(locale: java.util.Locale): java.text.NumberFormat
                /**
                 * Returns a new general-purpose <code>NumberFormat</code> instance for
                 * the specified locale.
                 * @param locale the desired locale
                 * @exception NullPointerException if <code>locale</code> is null
                 * @exception IllegalArgumentException if <code>locale</code> isn't
                 *      one of the locales returned from
                 *      {#link java.util.spi.LocaleServiceProvider#getAvailableLocales()
                 *      getAvailableLocales()}.
                 * @return a general-purpose number formatter
                 * @see java.text.NumberFormat#getNumberInstance(java.util.Locale)
                 */
                // @ts-ignore
                public abstract getNumberInstance(locale: java.util.Locale): java.text.NumberFormat
                /**
                 * Returns a new <code>NumberFormat</code> instance which formats
                 * percentage values for the specified locale.
                 * @param locale the desired locale
                 * @exception NullPointerException if <code>locale</code> is null
                 * @exception IllegalArgumentException if <code>locale</code> isn't
                 *      one of the locales returned from
                 *      {#link java.util.spi.LocaleServiceProvider#getAvailableLocales()
                 *      getAvailableLocales()}.
                 * @return a percent formatter
                 * @see java.text.NumberFormat#getPercentInstance(java.util.Locale)
                 */
                // @ts-ignore
                public abstract getPercentInstance(locale: java.util.Locale): java.text.NumberFormat
            }
        }
    }
}
