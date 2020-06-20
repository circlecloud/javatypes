declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace standard {
                    /**
                     * {@link Printer} implementation for a JSR-310 {@link java.time.temporal.TemporalAccessor},
                     * using a {@link java.time.format.DateTimeFormatter}) (the contextual one, if available).
                     * @author Juergen Hoeller
                     * @since 4.0
                     * @see DateTimeContextHolder#getFormatter
                     * @see java.time.format.DateTimeFormatter#format(java.time.temporal.TemporalAccessor)
                     */
                    // @ts-ignore
                    class TemporalAccessorPrinter extends java.lang.Object implements org.springframework.format.Printer<java.time.temporal.TemporalAccessor> {
                        /**
                         * Create a new TemporalAccessorPrinter.
                         * @param formatter the base DateTimeFormatter instance
                         */
                        // @ts-ignore
                        constructor(formatter: java.time.format.DateTimeFormatter)
                        // @ts-ignore
                        print(partial: java.time.temporal.TemporalAccessor, locale: java.util.Locale): java.lang.String
                    }
                }
            }
        }
    }
}
