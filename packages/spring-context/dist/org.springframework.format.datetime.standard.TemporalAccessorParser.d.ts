declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace standard {
                    /**
                     * {@link Parser} implementation for a JSR-310 {@link java.time.temporal.TemporalAccessor},
                     * using a {@link java.time.format.DateTimeFormatter}) (the contextual one, if available).
                     * @author Juergen Hoeller
                     * @since 4.0
                     * @see DateTimeContextHolder#getFormatter
                     * @see java.time.LocalDate#parse(CharSequence, java.time.format.DateTimeFormatter)
                     * @see java.time.LocalTime#parse(CharSequence, java.time.format.DateTimeFormatter)
                     * @see java.time.LocalDateTime#parse(CharSequence, java.time.format.DateTimeFormatter)
                     * @see java.time.ZonedDateTime#parse(CharSequence, java.time.format.DateTimeFormatter)
                     * @see java.time.OffsetDateTime#parse(CharSequence, java.time.format.DateTimeFormatter)
                     * @see java.time.OffsetTime#parse(CharSequence, java.time.format.DateTimeFormatter)
                     */
                    // @ts-ignore
                    class TemporalAccessorParser extends java.lang.Object implements org.springframework.format.Parser<java.time.temporal.TemporalAccessor> {
                        /**
                         * Create a new TemporalAccessorParser for the given TemporalAccessor type.
                         * @param temporalAccessorType the specific TemporalAccessor class
                         *  (LocalDate, LocalTime, LocalDateTime, ZonedDateTime, OffsetDateTime, OffsetTime)
                         * @param formatter the base DateTimeFormatter instance
                         */
                        // @ts-ignore
                        constructor(temporalAccessorType: java.lang.Class<any>, formatter: java.time.format.DateTimeFormatter)
                        // @ts-ignore
                        public parse(text: java.lang.String | string, locale: java.util.Locale): java.time.temporal.TemporalAccessor
                    }
                }
            }
        }
    }
}
