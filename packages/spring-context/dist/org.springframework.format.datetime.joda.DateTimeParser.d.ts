declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace joda {
                    /**
                     * Parses Joda {@link DateTime} instances using a {@link DateTimeFormatter}.
                     * @author Keith Donald
                     * @since 3.0
                     */
                    // @ts-ignore
                    class DateTimeParser extends java.lang.Object implements org.springframework.format.Parser<DateTime> {
                        /**
                         * Create a new DateTimeParser.
                         * @param formatter the Joda DateTimeFormatter instance
                         */
                        // @ts-ignore
                        constructor(formatter: DateTimeFormatter)
                        // @ts-ignore
                        parse(text: string, locale: java.util.Locale): DateTime
                    }
                }
            }
        }
    }
}
