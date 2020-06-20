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
                // @ts-ignore
                values(): java.time.format.FormatStyle[]
                // @ts-ignore
                valueOf(name: string): java.time.format.FormatStyle
            }
        }
    }
}
