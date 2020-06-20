declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace joda {
                    /**
                     * Prints Joda-Time {@link ReadableInstant} instances using a {@link DateTimeFormatter}.
                     * @author Keith Donald
                     * @since 3.0
                     */
                    // @ts-ignore
                    class ReadableInstantPrinter extends java.lang.Object implements org.springframework.format.Printer<ReadableInstant> {
                        /**
                         * Create a new ReadableInstantPrinter.
                         * @param formatter the Joda DateTimeFormatter instance
                         */
                        // @ts-ignore
                        constructor(formatter: DateTimeFormatter)
                        // @ts-ignore
                        print(instant: ReadableInstant, locale: java.util.Locale): java.lang.String
                    }
                }
            }
        }
    }
}
