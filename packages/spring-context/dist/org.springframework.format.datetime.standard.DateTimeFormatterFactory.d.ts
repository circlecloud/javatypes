declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace standard {
                    /**
                     * Factory that creates a JSR-310 {@link java.time.format.DateTimeFormatter}.
                     * <p>Formatters will be created using the defined {@link #setPattern pattern},
                     * {@link #setIso ISO}, and <code>xxxStyle</code> methods (considered in that order).
                     * @author Juergen Hoeller
                     * @author Phillip Webb
                     * @since 4.0
                     * @see #createDateTimeFormatter()
                     * @see #createDateTimeFormatter(DateTimeFormatter)
                     * @see #setPattern
                     * @see #setIso
                     * @see #setDateStyle
                     * @see #setTimeStyle
                     * @see #setDateTimeStyle
                     * @see DateTimeFormatterFactoryBean
                     */
                    // @ts-ignore
                    class DateTimeFormatterFactory extends java.lang.Object {
                        /**
                         * Create a new {@code DateTimeFormatterFactory} instance.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new {@code DateTimeFormatterFactory} instance.
                         * @param pattern the pattern to use to format date values
                         */
                        // @ts-ignore
                        constructor(pattern: java.lang.String | string)
                        /**
                         * Set the pattern to use to format date values.
                         * @param pattern the format pattern
                         */
                        // @ts-ignore
                        public setPattern(pattern: java.lang.String | string): void
                        /**
                         * Set the ISO format used to format date values.
                         * @param iso the ISO format
                         */
                        // @ts-ignore
                        public setIso(iso: org.springframework.format.annotation.DateTimeFormat.ISO): void
                        /**
                         * Set the style to use for date types.
                         */
                        // @ts-ignore
                        public setDateStyle(dateStyle: java.time.format.FormatStyle): void
                        /**
                         * Set the style to use for time types.
                         */
                        // @ts-ignore
                        public setTimeStyle(timeStyle: java.time.format.FormatStyle): void
                        /**
                         * Set the style to use for date and time types.
                         */
                        // @ts-ignore
                        public setDateTimeStyle(dateTimeStyle: java.time.format.FormatStyle): void
                        /**
                         * Set the two characters to use to format date values, in Joda-Time style.
                         * <p>The first character is used for the date style; the second is for
                         * the time style. Supported characters are:
                         * <ul>
                         * <li>'S' = Small</li>
                         * <li>'M' = Medium</li>
                         * <li>'L' = Long</li>
                         * <li>'F' = Full</li>
                         * <li>'-' = Omitted</li>
                         * </ul>
                         * <p>This method mimics the styles supported by Joda-Time. Note that
                         * JSR-310 natively favors {@link java.time.format.FormatStyle} as used for
                         * {@link #setDateStyle}, {@link #setTimeStyle} and {@link #setDateTimeStyle}.
                         * @param style two characters from the set {"S", "M", "L", "F", "-"}
                         */
                        // @ts-ignore
                        public setStylePattern(style: java.lang.String | string): void
                        /**
                         * Set the {@code TimeZone} to normalize the date values into, if any.
                         * @param timeZone the time zone
                         */
                        // @ts-ignore
                        public setTimeZone(timeZone: java.util.TimeZone): void
                        /**
                         * Create a new {@code DateTimeFormatter} using this factory.
                         * <p>If no specific pattern or style has been defined,
                         * {@link FormatStyle#MEDIUM medium date time format} will be used.
                         * @return a new date time formatter
                         * @see #createDateTimeFormatter(DateTimeFormatter)
                         */
                        // @ts-ignore
                        public createDateTimeFormatter(): java.time.format.DateTimeFormatter
                        /**
                         * Create a new {@code DateTimeFormatter} using this factory.
                         * <p>If no specific pattern or style has been defined,
                         * the supplied {@code fallbackFormatter} will be used.
                         * @param fallbackFormatter the fall-back formatter to use
                         *  when no specific factory properties have been set
                         * @return a new date time formatter
                         */
                        // @ts-ignore
                        public createDateTimeFormatter(fallbackFormatter: java.time.format.DateTimeFormatter): java.time.format.DateTimeFormatter
                    }
                }
            }
        }
    }
}
