declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace joda {
                    /**
                     * Prints Long instances using a Joda {@link DateTimeFormatter}.
                     * @author Keith Donald
                     * @since 3.0
                     */
                    // @ts-ignore
                    class MillisecondInstantPrinter extends java.lang.Object implements org.springframework.format.Printer<java.lang.Long | number> {
                        /**
                         * Create a new ReadableInstantPrinter.
                         * @param formatter the Joda DateTimeFormatter instance
                         */
                        // @ts-ignore
                        constructor(formatter: DateTimeFormatter)
                        // @ts-ignore
                        public print(instant: java.lang.Long | number, locale: java.util.Locale): string
                    }
                }
            }
        }
    }
}
