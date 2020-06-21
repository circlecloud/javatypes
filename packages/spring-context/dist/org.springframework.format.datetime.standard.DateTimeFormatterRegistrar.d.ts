declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace standard {
                    /**
                     * Configures the JSR-310 <code>java.time</code> formatting system for use with Spring.
                     * @author Juergen Hoeller
                     * @author Phillip Webb
                     * @since 4.0
                     * @see #setDateStyle
                     * @see #setTimeStyle
                     * @see #setDateTimeStyle
                     * @see #setUseIsoFormat
                     * @see org.springframework.format.FormatterRegistrar#registerFormatters
                     * @see org.springframework.format.datetime.DateFormatterRegistrar
                     * @see org.springframework.format.datetime.joda.DateTimeFormatterFactoryBean
                     */
                    // @ts-ignore
                    class DateTimeFormatterRegistrar extends java.lang.Object implements org.springframework.format.FormatterRegistrar {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set whether standard ISO formatting should be applied to all date/time types.
                         * Default is "false" (no).
                         * <p>If set to "true", the "dateStyle", "timeStyle" and "dateTimeStyle"
                         * properties are effectively ignored.
                         */
                        // @ts-ignore
                        public setUseIsoFormat(useIsoFormat: boolean): void
                        /**
                         * Set the default format style of {@link java.time.LocalDate} objects.
                         * Default is {@link java.time.format.FormatStyle#SHORT}.
                         */
                        // @ts-ignore
                        public setDateStyle(dateStyle: java.time.format.FormatStyle): void
                        /**
                         * Set the default format style of {@link java.time.LocalTime} objects.
                         * Default is {@link java.time.format.FormatStyle#SHORT}.
                         */
                        // @ts-ignore
                        public setTimeStyle(timeStyle: java.time.format.FormatStyle): void
                        /**
                         * Set the default format style of {@link java.time.LocalDateTime} objects.
                         * Default is {@link java.time.format.FormatStyle#SHORT}.
                         */
                        // @ts-ignore
                        public setDateTimeStyle(dateTimeStyle: java.time.format.FormatStyle): void
                        /**
                         * Set the formatter that will be used for objects representing date values.
                         * <p>This formatter will be used for the {@link LocalDate} type.
                         * When specified, the {@link #setDateStyle dateStyle} and
                         * {@link #setUseIsoFormat useIsoFormat} properties will be ignored.
                         * @param formatter the formatter to use
                         * @see #setTimeFormatter
                         * @see #setDateTimeFormatter
                         */
                        // @ts-ignore
                        public setDateFormatter(formatter: java.time.format.DateTimeFormatter): void
                        /**
                         * Set the formatter that will be used for objects representing time values.
                         * <p>This formatter will be used for the {@link LocalTime} and {@link OffsetTime}
                         * types. When specified, the {@link #setTimeStyle timeStyle} and
                         * {@link #setUseIsoFormat useIsoFormat} properties will be ignored.
                         * @param formatter the formatter to use
                         * @see #setDateFormatter
                         * @see #setDateTimeFormatter
                         */
                        // @ts-ignore
                        public setTimeFormatter(formatter: java.time.format.DateTimeFormatter): void
                        /**
                         * Set the formatter that will be used for objects representing date and time values.
                         * <p>This formatter will be used for {@link LocalDateTime}, {@link ZonedDateTime}
                         * and {@link OffsetDateTime} types. When specified, the
                         * {@link #setDateTimeStyle dateTimeStyle} and
                         * {@link #setUseIsoFormat useIsoFormat} properties will be ignored.
                         * @param formatter the formatter to use
                         * @see #setDateFormatter
                         * @see #setTimeFormatter
                         */
                        // @ts-ignore
                        public setDateTimeFormatter(formatter: java.time.format.DateTimeFormatter): void
                        // @ts-ignore
                        public registerFormatters(registry: org.springframework.format.FormatterRegistry): void
                    }
                }
            }
        }
    }
}
