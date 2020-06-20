declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace joda {
                    /**
                     * Prints Joda-Time {@link ReadablePartial} instances using a {@link DateTimeFormatter}.
                     * @author Keith Donald
                     * @since 3.0
                     */
                    // @ts-ignore
                    class ReadablePartialPrinter extends java.lang.Object implements org.springframework.format.Printer<ReadablePartial> {
                        /**
                         * Create a new ReadableInstantPrinter.
                         * @param formatter the Joda DateTimeFormatter instance
                         */
                        // @ts-ignore
                        constructor(formatter: DateTimeFormatter)
                        // @ts-ignore
                        print(partial: ReadablePartial, locale: java.util.Locale): java.lang.String
                    }
                }
            }
        }
    }
}
