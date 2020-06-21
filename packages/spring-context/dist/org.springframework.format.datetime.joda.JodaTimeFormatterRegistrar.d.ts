declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace joda {
                    /**
                     * Configures Joda-Time's formatting system for use with Spring.
                     * <p><b>NOTE:</b> Spring's Joda-Time support requires Joda-Time 2.x, as of Spring 4.0.
                     * @author Keith Donald
                     * @author Juergen Hoeller
                     * @author Phillip Webb
                     * @since 3.1
                     * @see #setDateStyle
                     * @see #setTimeStyle
                     * @see #setDateTimeStyle
                     * @see #setUseIsoFormat
                     * @see FormatterRegistrar#registerFormatters
                     * @see org.springframework.format.datetime.DateFormatterRegistrar
                     * @see DateTimeFormatterFactoryBean
                     */
                    // @ts-ignore
                    class JodaTimeFormatterRegistrar extends java.lang.Object implements org.springframework.format.FormatterRegistrar {
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
                         * Set the default format style of Joda {@link LocalDate} objects.
                         * Default is {@link DateTimeFormat#shortDate()}.
                         */
                        // @ts-ignore
                        public setDateStyle(dateStyle: java.lang.String | string): void
                        /**
                         * Set the default format style of Joda {@link LocalTime} objects.
                         * Default is {@link DateTimeFormat#shortTime()}.
                         */
                        // @ts-ignore
                        public setTimeStyle(timeStyle: java.lang.String | string): void
                        /**
                         * Set the default format style of Joda {@link LocalDateTime} and {@link DateTime} objects,
                         * as well as JDK {@link Date} and {@link Calendar} objects.
                         * Default is {@link DateTimeFormat#shortDateTime()}.
                         */
                        // @ts-ignore
                        public setDateTimeStyle(dateTimeStyle: java.lang.String | string): void
                        /**
                         * Set the formatter that will be used for objects representing date values.
                         * <p>This formatter will be used for the {@link LocalDate} type. When specified
                         * the {@link #setDateStyle(String) dateStyle} and
                         * {@link #setUseIsoFormat(boolean) useIsoFormat} properties will be ignored.
                         * @param formatter the formatter to use
                         * @since 3.2
                         * @see #setTimeFormatter
                         * @see #setDateTimeFormatter
                         */
                        // @ts-ignore
                        public setDateFormatter(formatter: DateTimeFormatter): void
                        /**
                         * Set the formatter that will be used for objects representing time values.
                         * <p>This formatter will be used for the {@link LocalTime} type. When specified
                         * the {@link #setTimeStyle(String) timeStyle} and
                         * {@link #setUseIsoFormat(boolean) useIsoFormat} properties will be ignored.
                         * @param formatter the formatter to use
                         * @since 3.2
                         * @see #setDateFormatter
                         * @see #setDateTimeFormatter
                         */
                        // @ts-ignore
                        public setTimeFormatter(formatter: DateTimeFormatter): void
                        /**
                         * Set the formatter that will be used for objects representing date and time values.
                         * <p>This formatter will be used for {@link LocalDateTime}, {@link ReadableInstant},
                         * {@link Date} and {@link Calendar} types. When specified
                         * the {@link #setDateTimeStyle(String) dateTimeStyle} and
                         * {@link #setUseIsoFormat(boolean) useIsoFormat} properties will be ignored.
                         * @param formatter the formatter to use
                         * @since 3.2
                         * @see #setDateFormatter
                         * @see #setTimeFormatter
                         */
                        // @ts-ignore
                        public setDateTimeFormatter(formatter: DateTimeFormatter): void
                        // @ts-ignore
                        public registerFormatters(registry: org.springframework.format.FormatterRegistry): void
                    }
                }
            }
        }
    }
}
