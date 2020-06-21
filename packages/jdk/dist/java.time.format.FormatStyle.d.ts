declare namespace java {
    namespace time {
        namespace format {
            /**
             * Enumeration of the style of a localized date, time or date-time formatter.
             * <p>
             * These styles are used when obtaining a date-time style from configuration.
             * See {@link DateTimeFormatter} and {@link DateTimeFormatterBuilder} for usage.
             * @implSpec This is an immutable and thread-safe enum.
             * @since 1.8
             */
            // @ts-ignore
            class FormatStyle extends java.lang.Enum<java.time.format.FormatStyle> {
                /**
                 * Full text style, with the most detail.
                 * For example, the format might be 'Tuesday, April 12, 1952 AD' or '3:30:42pm PST'.
                 */
                // @ts-ignore
                readonly FULL: java.time.format.FormatStyle
                /**
                 * Long text style, with lots of detail.
                 * For example, the format might be 'January 12, 1952'.
                 */
                // @ts-ignore
                readonly LONG: java.time.format.FormatStyle
                /**
                 * Medium text style, with some detail.
                 * For example, the format might be 'Jan 12, 1952'.
                 */
                // @ts-ignore
                readonly MEDIUM: java.time.format.FormatStyle
                /**
                 * Short text style, typically numeric.
                 * For example, the format might be '12.13.52' or '3:30pm'.
                 */
                // @ts-ignore
                readonly SHORT: java.time.format.FormatStyle
                // @ts-ignore
                values(): java.time.format.FormatStyle[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): java.time.format.FormatStyle
            }
        }
    }
}
