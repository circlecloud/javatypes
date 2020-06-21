declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace joda {
                    /**
                     * Parses Joda {@link org.joda.time.LocalDateTime} instances using a
                     * {@link org.joda.time.format.DateTimeFormatter}.
                     * @author Juergen Hoeller
                     * @since 4.0
                     */
                    // @ts-ignore
                    class LocalDateTimeParser extends java.lang.Object implements org.springframework.format.Parser<LocalDateTime> {
                        /**
                         * Create a new DateTimeParser.
                         * @param formatter the Joda DateTimeFormatter instance
                         */
                        // @ts-ignore
                        constructor(formatter: DateTimeFormatter)
                        // @ts-ignore
                        public parse(text: java.lang.String | string, locale: java.util.Locale): LocalDateTime
                    }
                }
            }
        }
    }
}
