declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace standard {
                    /**
                     * {@link Formatter} implementation for a JSR-310 {@link java.time.Instant},
                     * following JSR-310's parsing rules for an Instant (that is, not using a
                     * configurable {@link java.time.format.DateTimeFormatter}): accepting the
                     * default {@code ISO_INSTANT} format as well as {@code RFC_1123_DATE_TIME}
                     * (which is commonly used for HTTP date header values), as of Spring 4.3.
                     * @author Juergen Hoeller
                     * @author Andrei Nevedomskii
                     * @since 4.0
                     * @see java.time.Instant#parse
                     * @see java.time.format.DateTimeFormatter#ISO_INSTANT
                     * @see java.time.format.DateTimeFormatter#RFC_1123_DATE_TIME
                     */
                    // @ts-ignore
                    class InstantFormatter extends java.lang.Object implements org.springframework.format.Formatter<java.time.Instant> {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public parse(text: java.lang.String | string, locale: java.util.Locale): java.time.Instant
                        // @ts-ignore
                        public print(object: java.time.Instant, locale: java.util.Locale): string
                    }
                }
            }
        }
    }
}
