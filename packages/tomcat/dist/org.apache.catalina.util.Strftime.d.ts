declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                /**
                 * Converts dates to strings using the same format specifiers as strftime
                 * Note: This does not mimic strftime perfectly.  Certain strftime commands,
                 * are not supported, and will convert as if they were literals.
                 * Certain complicated commands, like those dealing with the week of the year
                 * probably don't have exactly the same behavior as strftime.
                 * These limitations are due to use SimpleDateTime.  If the conversion was done
                 * manually, all these limitations could be eliminated.
                 * The interface looks like a subset of DateFormat.  Maybe someday someone will make this class
                 * extend DateFormat.
                 * @author Bip Thelin
                 * @author Dan Sandberg
                 */
                // @ts-ignore
                class Strftime extends java.lang.Object {
                    /**
                     * Create an instance of this date formatting class
                     * @param origFormat the strftime-style formatting string
                     * @param locale the locale to use for locale-specific conversions
                     */
                    // @ts-ignore
                    constructor(origFormat: java.lang.String | string, locale: java.util.Locale)
                    // @ts-ignore
                    static readonly translate: java.util.Properties
                    // @ts-ignore
                    readonly simpleDateFormat: java.text.SimpleDateFormat
                    /**
                     * Format the date according to the strftime-style string given in the constructor.
                     * @param date the date to format
                     * @return the formatted date
                     */
                    // @ts-ignore
                    public format(date: java.util.Date): string
                    /**
                     * Get the timezone used for formatting conversions
                     * @return the timezone
                     */
                    // @ts-ignore
                    public getTimeZone(): java.util.TimeZone
                    /**
                     * Change the timezone used to format dates
                     * @param timeZone The new time zone
                     * @see SimpleDateFormat#setTimeZone
                     */
                    // @ts-ignore
                    public setTimeZone(timeZone: java.util.TimeZone): void
                    /**
                     * Search the provided pattern and get the C standard
                     * Date/Time formatting rules and convert them to the
                     * Java equivalent.
                     * @param pattern The pattern to search
                     * @return The modified pattern
                     */
                    // @ts-ignore
                    convertDateFormat(pattern: java.lang.String | string): string
                    // @ts-ignore
                    quote(str: java.lang.String | string, insideQuotes: boolean): string
                    /**
                     * Try to get the Java Date/Time formatting associated with
                     * the C standard provided.
                     * @param buf The buffer
                     * @param pattern The date/time pattern
                     * @param index The char index
                     * @param oldInside Flag value
                     * @return True if new is inside buffer
                     */
                    // @ts-ignore
                    translateCommand(buf: java.lang.StringBuilder, pattern: java.lang.String | string, index: number /*int*/, oldInside: boolean): boolean
                }
            }
        }
    }
}
