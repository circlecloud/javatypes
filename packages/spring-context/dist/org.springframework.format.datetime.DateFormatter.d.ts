declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                /**
                 * A formatter for {@link java.util.Date} types.
                 * Allows the configuration of an explicit date pattern and locale.
                 * @author Keith Donald
                 * @author Juergen Hoeller
                 * @author Phillip Webb
                 * @since 3.0
                 * @see SimpleDateFormat
                 */
                // @ts-ignore
                class DateFormatter extends java.lang.Object implements org.springframework.format.Formatter<java.util.Date> {
                    /**
                     * Create a new default DateFormatter.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new DateFormatter for the given date pattern.
                     */
                    // @ts-ignore
                    constructor(pattern: string)
                    /**
                     * Set the pattern to use to format date values.
                     * <p>If not specified, DateFormat's default style will be used.
                     */
                    // @ts-ignore
                    setPattern(pattern: string): void
                    /**
                     * Set the ISO format used for this date.
                     * @param iso the {#link ISO} format
                     * @since 3.2
                     */
                    // @ts-ignore
                    setIso(iso: org.springframework.format.annotation.DateTimeFormat.ISO): void
                    /**
                     * Set the style to use to format date values.
                     * <p>If not specified, DateFormat's default style will be used.
                     * @see DateFormat#DEFAULT
                     * @see DateFormat#SHORT
                     * @see DateFormat#MEDIUM
                     * @see DateFormat#LONG
                     * @see DateFormat#FULL
                     */
                    // @ts-ignore
                    setStyle(style: number /*int*/): void
                    /**
                     * Set the two character to use to format date values. The first character used for
                     * the date style, the second is for the time style. Supported characters are
                     * <ul>
                     * <li>'S' = Small</li>
                     * <li>'M' = Medium</li>
                     * <li>'L' = Long</li>
                     * <li>'F' = Full</li>
                     * <li>'-' = Omitted</li>
                     * </ul>
                     * This method mimics the styles supported by Joda-Time.
                     * @param stylePattern two characters from the set {"S", "M", "L", "F", "-"}
                     * @since 3.2
                     */
                    // @ts-ignore
                    setStylePattern(stylePattern: string): void
                    /**
                     * Set the TimeZone to normalize the date values into, if any.
                     */
                    // @ts-ignore
                    setTimeZone(timeZone: java.util.TimeZone): void
                    /**
                     * Specify whether or not parsing is to be lenient. Default is false.
                     * <p>With lenient parsing, the parser may allow inputs that do not precisely match the format.
                     * With strict parsing, inputs must match the format exactly.
                     */
                    // @ts-ignore
                    setLenient(lenient: boolean): void
                    // @ts-ignore
                    print(date: java.util.Date, locale: java.util.Locale): java.lang.String
                    // @ts-ignore
                    parse(text: string, locale: java.util.Locale): java.util.Date
                    // @ts-ignore
                    getDateFormat(locale: java.util.Locale): java.text.DateFormat
                }
            }
        }
    }
}
