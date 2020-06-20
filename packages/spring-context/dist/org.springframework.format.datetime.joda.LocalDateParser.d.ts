declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace joda {
                    /**
                     * Parses Joda {@link org.joda.time.LocalDate} instances using a
                     * {@link org.joda.time.format.DateTimeFormatter}.
                     * @author Juergen Hoeller
                     * @since 4.0
                     */
                    // @ts-ignore
                    class LocalDateParser extends java.lang.Object implements org.springframework.format.Parser<LocalDate> {
                        /**
                         * Create a new DateTimeParser.
                         * @param formatter the Joda DateTimeFormatter instance
                         */
                        // @ts-ignore
                        constructor(formatter: DateTimeFormatter)
                        // @ts-ignore
                        parse(text: string, locale: java.util.Locale): LocalDate
                    }
                }
            }
        }
    }
}
