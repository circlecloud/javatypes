declare namespace java {
    namespace text {
        namespace spi {
            /**
             * An abstract class for service providers that
             * provide concrete implementations of the
             * {@link java.text.DateFormat DateFormat} class.
             * @since 1.6
             */
            // @ts-ignore
            abstract class DateFormatProvider extends java.util.spi.LocaleServiceProvider {
                /**
                 * Sole constructor.  (For invocation by subclass constructors, typically
                 * implicit.)
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns a new <code>DateFormat</code> instance which formats time
                 * with the given formatting style for the specified locale.
                 * @param style the given formatting style.  Either one of
                 *      {#link java.text.DateFormat#SHORT DateFormat.SHORT},
                 *      {@link java.text.DateFormat#MEDIUM DateFormat.MEDIUM},
                 *      {@link java.text.DateFormat#LONG DateFormat.LONG}, or
                 *      {@link java.text.DateFormat#FULL DateFormat.FULL}.
                 * @param locale the desired locale.
                 * @exception IllegalArgumentException if <code>style</code> is invalid,
                 *      or if <code>locale</code> isn't
                 *      one of the locales returned from
                 *      {#link java.util.spi.LocaleServiceProvider#getAvailableLocales()
                 *      getAvailableLocales()}.
                 * @exception NullPointerException if <code>locale</code> is null
                 * @return a time formatter.
                 * @see java.text.DateFormat#getTimeInstance(int, java.util.Locale)
                 */
                // @ts-ignore
                public abstract getTimeInstance(style: number /*int*/, locale: java.util.Locale): java.text.DateFormat
                /**
                 * Returns a new <code>DateFormat</code> instance which formats date
                 * with the given formatting style for the specified locale.
                 * @param style the given formatting style.  Either one of
                 *      {#link java.text.DateFormat#SHORT DateFormat.SHORT},
                 *      {@link java.text.DateFormat#MEDIUM DateFormat.MEDIUM},
                 *      {@link java.text.DateFormat#LONG DateFormat.LONG}, or
                 *      {@link java.text.DateFormat#FULL DateFormat.FULL}.
                 * @param locale the desired locale.
                 * @exception IllegalArgumentException if <code>style</code> is invalid,
                 *      or if <code>locale</code> isn't
                 *      one of the locales returned from
                 *      {#link java.util.spi.LocaleServiceProvider#getAvailableLocales()
                 *      getAvailableLocales()}.
                 * @exception NullPointerException if <code>locale</code> is null
                 * @return a date formatter.
                 * @see java.text.DateFormat#getDateInstance(int, java.util.Locale)
                 */
                // @ts-ignore
                public abstract getDateInstance(style: number /*int*/, locale: java.util.Locale): java.text.DateFormat
                /**
                 * Returns a new <code>DateFormat</code> instance which formats date and time
                 * with the given formatting style for the specified locale.
                 * @param dateStyle the given date formatting style.  Either one of
                 *      {#link java.text.DateFormat#SHORT DateFormat.SHORT},
                 *      {@link java.text.DateFormat#MEDIUM DateFormat.MEDIUM},
                 *      {@link java.text.DateFormat#LONG DateFormat.LONG}, or
                 *      {@link java.text.DateFormat#FULL DateFormat.FULL}.
                 * @param timeStyle the given time formatting style.  Either one of
                 *      {#link java.text.DateFormat#SHORT DateFormat.SHORT},
                 *      {@link java.text.DateFormat#MEDIUM DateFormat.MEDIUM},
                 *      {@link java.text.DateFormat#LONG DateFormat.LONG}, or
                 *      {@link java.text.DateFormat#FULL DateFormat.FULL}.
                 * @param locale the desired locale.
                 * @exception IllegalArgumentException if <code>dateStyle</code> or
                 *      <code>timeStyle</code> is invalid,
                 *      or if <code>locale</code> isn't
                 *      one of the locales returned from
                 *      {#link java.util.spi.LocaleServiceProvider#getAvailableLocales()
                 *      getAvailableLocales()}.
                 * @exception NullPointerException if <code>locale</code> is null
                 * @return a date/time formatter.
                 * @see java.text.DateFormat#getDateTimeInstance(int, int, java.util.Locale)
                 */
                // @ts-ignore
                public abstract getDateTimeInstance(dateStyle: number /*int*/, timeStyle: number /*int*/, locale: java.util.Locale): java.text.DateFormat
            }
        }
    }
}
