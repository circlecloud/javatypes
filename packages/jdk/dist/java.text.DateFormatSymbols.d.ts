declare namespace java {
    namespace text {
        /**
         * <code>DateFormatSymbols</code> is a public class for encapsulating
         * localizable date-time formatting data, such as the names of the
         * months, the names of the days of the week, and the time zone data.
         * <code>SimpleDateFormat</code> uses
         * <code>DateFormatSymbols</code> to encapsulate this information.
         * <p>
         * Typically you shouldn't use <code>DateFormatSymbols</code> directly.
         * Rather, you are encouraged to create a date-time formatter with the
         * <code>DateFormat</code> class's factory methods: <code>getTimeInstance</code>,
         * <code>getDateInstance</code>, or <code>getDateTimeInstance</code>.
         * These methods automatically create a <code>DateFormatSymbols</code> for
         * the formatter so that you don't have to. After the
         * formatter is created, you may modify its format pattern using the
         * <code>setPattern</code> method. For more information about
         * creating formatters using <code>DateFormat</code>'s factory methods,
         * see {@link DateFormat}.
         * <p>
         * If you decide to create a date-time formatter with a specific
         * format pattern for a specific locale, you can do so with:
         * <blockquote>
         * <pre>
         * new SimpleDateFormat(aPattern, DateFormatSymbols.getInstance(aLocale)).
         * </pre>
         * </blockquote>
         * <p>
         * <code>DateFormatSymbols</code> objects are cloneable. When you obtain
         * a <code>DateFormatSymbols</code> object, feel free to modify the
         * date-time formatting data. For instance, you can replace the localized
         * date-time format pattern characters with the ones that you feel easy
         * to remember. Or you can change the representative cities
         * to your favorite ones.
         * <p>
         * New <code>DateFormatSymbols</code> subclasses may be added to support
         * <code>SimpleDateFormat</code> for date-time formatting for additional locales.
         * @see DateFormat
         * @see SimpleDateFormat
         * @see java.util.SimpleTimeZone
         * @author Chen-Lieh Huang
         */
        // @ts-ignore
        class DateFormatSymbols extends java.lang.Object implements java.io.Serializable, java.lang.Cloneable {
            /**
             * Construct a DateFormatSymbols object by loading format data from
             * resources for the default {@link java.util.Locale.Category#FORMAT FORMAT}
             * locale. This constructor can only
             * construct instances for the locales supported by the Java
             * runtime environment, not for those supported by installed
             * {@link java.text.spi.DateFormatSymbolsProvider DateFormatSymbolsProvider}
             * implementations. For full locale coverage, use the
             * {@link #getInstance(Locale) getInstance} method.
             * <p>This is equivalent to calling
             * {@link #DateFormatSymbols(Locale)
             * DateFormatSymbols(Locale.getDefault(Locale.Category.FORMAT))}.
             * @see #getInstance()
             * @see java.util.Locale#getDefault(java.util.Locale.Category)
             * @see java.util.Locale.Category#FORMAT
             * @exception java.util.MissingResourceException
             *              if the resources for the default locale cannot be
             *              found or cannot be loaded.
             */
            // @ts-ignore
            constructor()
            /**
             * Construct a DateFormatSymbols object by loading format data from
             * resources for the given locale. This constructor can only
             * construct instances for the locales supported by the Java
             * runtime environment, not for those supported by installed
             * {@link java.text.spi.DateFormatSymbolsProvider DateFormatSymbolsProvider}
             * implementations. For full locale coverage, use the
             * {@link #getInstance(Locale) getInstance} method.
             * @param locale the desired locale
             * @see #getInstance(Locale)
             * @exception java.util.MissingResourceException
             *              if the resources for the specified locale cannot be
             *              found or cannot be loaded.
             */
            // @ts-ignore
            constructor(locale: java.util.Locale)
            /**
             * Returns an array of all locales for which the
             * <code>getInstance</code> methods of this class can return
             * localized instances.
             * The returned array represents the union of locales supported by the
             * Java runtime and by installed
             * {@link java.text.spi.DateFormatSymbolsProvider DateFormatSymbolsProvider}
             * implementations.  It must contain at least a <code>Locale</code>
             * instance equal to {@link java.util.Locale#US Locale.US}.
             * @return An array of locales for which localized
             *          <code>DateFormatSymbols</code> instances are available.
             * @since 1.6
             */
            // @ts-ignore
            getAvailableLocales(): java.util.Locale[]
            /**
             * Gets the <code>DateFormatSymbols</code> instance for the default
             * locale.  This method provides access to <code>DateFormatSymbols</code>
             * instances for locales supported by the Java runtime itself as well
             * as for those supported by installed
             * {@link java.text.spi.DateFormatSymbolsProvider DateFormatSymbolsProvider}
             * implementations.
             * <p>This is equivalent to calling {@link #getInstance(Locale)
             * getInstance(Locale.getDefault(Locale.Category.FORMAT))}.
             * @see java.util.Locale#getDefault(java.util.Locale.Category)
             * @see java.util.Locale.Category#FORMAT
             * @return a <code>DateFormatSymbols</code> instance.
             * @since 1.6
             */
            // @ts-ignore
            getInstance(): java.text.DateFormatSymbols
            /**
             * Gets the <code>DateFormatSymbols</code> instance for the specified
             * locale.  This method provides access to <code>DateFormatSymbols</code>
             * instances for locales supported by the Java runtime itself as well
             * as for those supported by installed
             * {@link java.text.spi.DateFormatSymbolsProvider DateFormatSymbolsProvider}
             * implementations.
             * @param locale the given locale.
             * @return a <code>DateFormatSymbols</code> instance.
             * @exception NullPointerException if <code>locale</code> is null
             * @since 1.6
             */
            // @ts-ignore
            getInstance(locale: java.util.Locale): java.text.DateFormatSymbols
            /**
             * Gets era strings. For example: "AD" and "BC".
             * @return the era strings.
             */
            // @ts-ignore
            getEras(): java.lang.String[]
            /**
             * Sets era strings. For example: "AD" and "BC".
             * @param newEras the new era strings.
             */
            // @ts-ignore
            setEras(newEras: string[]): void
            /**
             * Gets month strings. For example: "January", "February", etc.
             * <p>If the language requires different forms for formatting and
             * stand-alone usages, this method returns month names in the
             * formatting form. For example, the preferred month name for
             * January in the Czech language is <em>ledna</em> in the
             * formatting form, while it is <em>leden</em> in the stand-alone
             * form. This method returns {@code "ledna"} in this case. Refer
             * to the <a href="http://unicode.org/reports/tr35/#Calendar_Elements">
             * Calendar Elements in the Unicode Locale Data Markup Language
             * (LDML) specification</a> for more details.
             * @return the month strings.
             */
            // @ts-ignore
            getMonths(): java.lang.String[]
            /**
             * Sets month strings. For example: "January", "February", etc.
             * @param newMonths the new month strings.
             */
            // @ts-ignore
            setMonths(newMonths: string[]): void
            /**
             * Gets short month strings. For example: "Jan", "Feb", etc.
             * <p>If the language requires different forms for formatting and
             * stand-alone usages, This method returns short month names in
             * the formatting form. For example, the preferred abbreviation
             * for January in the Catalan language is <em>de gen.</em> in the
             * formatting form, while it is <em>gen.</em> in the stand-alone
             * form. This method returns {@code "de gen."} in this case. Refer
             * to the <a href="http://unicode.org/reports/tr35/#Calendar_Elements">
             * Calendar Elements in the Unicode Locale Data Markup Language
             * (LDML) specification</a> for more details.
             * @return the short month strings.
             */
            // @ts-ignore
            getShortMonths(): java.lang.String[]
            /**
             * Sets short month strings. For example: "Jan", "Feb", etc.
             * @param newShortMonths the new short month strings.
             */
            // @ts-ignore
            setShortMonths(newShortMonths: string[]): void
            /**
             * Gets weekday strings. For example: "Sunday", "Monday", etc.
             * @return the weekday strings. Use <code>Calendar.SUNDAY</code>,
             *  <code>Calendar.MONDAY</code>, etc. to index the result array.
             */
            // @ts-ignore
            getWeekdays(): java.lang.String[]
            /**
             * Sets weekday strings. For example: "Sunday", "Monday", etc.
             * @param newWeekdays the new weekday strings. The array should
             *  be indexed by <code>Calendar.SUNDAY</code>,
             *  <code>Calendar.MONDAY</code>, etc.
             */
            // @ts-ignore
            setWeekdays(newWeekdays: string[]): void
            /**
             * Gets short weekday strings. For example: "Sun", "Mon", etc.
             * @return the short weekday strings. Use <code>Calendar.SUNDAY</code>,
             *  <code>Calendar.MONDAY</code>, etc. to index the result array.
             */
            // @ts-ignore
            getShortWeekdays(): java.lang.String[]
            /**
             * Sets short weekday strings. For example: "Sun", "Mon", etc.
             * @param newShortWeekdays the new short weekday strings. The array should
             *  be indexed by <code>Calendar.SUNDAY</code>,
             *  <code>Calendar.MONDAY</code>, etc.
             */
            // @ts-ignore
            setShortWeekdays(newShortWeekdays: string[]): void
            /**
             * Gets ampm strings. For example: "AM" and "PM".
             * @return the ampm strings.
             */
            // @ts-ignore
            getAmPmStrings(): java.lang.String[]
            /**
             * Sets ampm strings. For example: "AM" and "PM".
             * @param newAmpms the new ampm strings.
             */
            // @ts-ignore
            setAmPmStrings(newAmpms: string[]): void
            /**
             * Gets time zone strings.  Use of this method is discouraged; use
             * {@link java.util.TimeZone#getDisplayName() TimeZone.getDisplayName()}
             * instead.
             * <p>
             * The value returned is a
             * two-dimensional array of strings of size <em>n</em> by <em>m</em>,
             * where <em>m</em> is at least 5.  Each of the <em>n</em> rows is an
             * entry containing the localized names for a single <code>TimeZone</code>.
             * Each such row contains (with <code>i</code> ranging from
             * 0..<em>n</em>-1):
             * <ul>
             * <li><code>zoneStrings[i][0]</code> - time zone ID</li>
             * <li><code>zoneStrings[i][1]</code> - long name of zone in standard
             * time</li>
             * <li><code>zoneStrings[i][2]</code> - short name of zone in
             * standard time</li>
             * <li><code>zoneStrings[i][3]</code> - long name of zone in daylight
             * saving time</li>
             * <li><code>zoneStrings[i][4]</code> - short name of zone in daylight
             * saving time</li>
             * </ul>
             * The zone ID is <em>not</em> localized; it's one of the valid IDs of
             * the {@link java.util.TimeZone TimeZone} class that are not
             * <a href="../util/TimeZone.html#CustomID">custom IDs</a>.
             * All other entries are localized names.  If a zone does not implement
             * daylight saving time, the daylight saving time names should not be used.
             * <p>
             * If {@link #setZoneStrings(String[][]) setZoneStrings} has been called
             * on this <code>DateFormatSymbols</code> instance, then the strings
             * provided by that call are returned. Otherwise, the returned array
             * contains names provided by the Java runtime and by installed
             * {@link java.util.spi.TimeZoneNameProvider TimeZoneNameProvider}
             * implementations.
             * @return the time zone strings.
             * @see #setZoneStrings(String[][])
             */
            // @ts-ignore
            getZoneStrings(): java.lang.String[][]
            /**
             * Sets time zone strings.  The argument must be a
             * two-dimensional array of strings of size <em>n</em> by <em>m</em>,
             * where <em>m</em> is at least 5.  Each of the <em>n</em> rows is an
             * entry containing the localized names for a single <code>TimeZone</code>.
             * Each such row contains (with <code>i</code> ranging from
             * 0..<em>n</em>-1):
             * <ul>
             * <li><code>zoneStrings[i][0]</code> - time zone ID</li>
             * <li><code>zoneStrings[i][1]</code> - long name of zone in standard
             * time</li>
             * <li><code>zoneStrings[i][2]</code> - short name of zone in
             * standard time</li>
             * <li><code>zoneStrings[i][3]</code> - long name of zone in daylight
             * saving time</li>
             * <li><code>zoneStrings[i][4]</code> - short name of zone in daylight
             * saving time</li>
             * </ul>
             * The zone ID is <em>not</em> localized; it's one of the valid IDs of
             * the {@link java.util.TimeZone TimeZone} class that are not
             * <a href="../util/TimeZone.html#CustomID">custom IDs</a>.
             * All other entries are localized names.
             * @param newZoneStrings the new time zone strings.
             * @exception IllegalArgumentException if the length of any row in
             *     <code>newZoneStrings</code> is less than 5
             * @exception NullPointerException if <code>newZoneStrings</code> is null
             * @see #getZoneStrings()
             */
            // @ts-ignore
            setZoneStrings(newZoneStrings: string[][]): void
            /**
             * Gets localized date-time pattern characters. For example: 'u', 't', etc.
             * @return the localized date-time pattern characters.
             */
            // @ts-ignore
            getLocalPatternChars(): java.lang.String
            /**
             * Sets localized date-time pattern characters. For example: 'u', 't', etc.
             * @param newLocalPatternChars the new localized date-time
             *  pattern characters.
             */
            // @ts-ignore
            setLocalPatternChars(newLocalPatternChars: string): void
            /**
             * Overrides Cloneable
             */
            // @ts-ignore
            clone(): java.lang.Object
            /**
             * Override hashCode.
             * Generates a hash code for the DateFormatSymbols object.
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Override equals
             */
            // @ts-ignore
            equals(obj: any): boolean
        }
    }
}
