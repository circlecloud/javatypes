declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace joda {
                    /**
                     * Parses Joda {@link org.joda.time.LocalTime} instances using a
                     * {@link org.joda.time.format.DateTimeFormatter}.
                     * @author Juergen Hoeller
                     * @since 4.0
                     */
                    // @ts-ignore
                    class LocalTimeParser extends java.lang.Object implements org.springframework.format.Parser<LocalTime> {
                        /**
                         * Create a new DateTimeParser.
                         * @param formatter the Joda DateTimeFormatter instance
                         */
                        // @ts-ignore
                        constructor(formatter: DateTimeFormatter)
                        // @ts-ignore
                        public parse(text: java.lang.String | string, locale: java.util.Locale): LocalTime
                    }
                }
            }
        }
    }
}
