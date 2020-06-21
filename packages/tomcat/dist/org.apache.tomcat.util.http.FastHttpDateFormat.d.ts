declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    /**
                     * Utility class to generate HTTP dates.
                     * @author Remy Maucherat
                     */
                    // @ts-ignore
                    class FastHttpDateFormat extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * The only date format permitted when generating HTTP headers.
                         * @deprecated Unused. This will be removed in Tomcat 10.
                         */
                        // @ts-ignore
                        public static readonly RFC1123_DATE: java.lang.String | string
                        /**
                         * Get the current date in HTTP format.
                         * @return the HTTP date
                         */
                        // @ts-ignore
                        public static getCurrentDate(): string
                        /**
                         * Get the HTTP format of the specified date.
                         * @param value The date
                         * @param threadLocalformat Ignored. The local ConcurrentDateFormat will
                         *                           always be used.
                         * @return the HTTP date
                         * @deprecated Unused. This will be removed in Tomcat 10
                         */
                        // @ts-ignore
                        public static formatDate(value: number /*long*/, threadLocalformat: java.text.DateFormat): string
                        /**
                         * Get the HTTP format of the specified date.
                         * @param value The date
                         * @return the HTTP date
                         */
                        // @ts-ignore
                        public static formatDate(value: number /*long*/): string
                        /**
                         * Try to parse the given date as a HTTP date.
                         * @param value The HTTP date
                         * @param threadLocalformats Ignored. The local array of
                         *                            ConcurrentDateFormat will always be used.
                         * @return the date as a long
                         * @deprecated Unused. This will be removed in Tomcat 10
                         *              Use {#link #parseDate(String)}
                         */
                        // @ts-ignore
                        public static parseDate(value: java.lang.String | string, threadLocalformats: java.text.DateFormat[]): number /*long*/
                        /**
                         * Try to parse the given date as a HTTP date.
                         * @param value The HTTP date
                         * @return the date as a long or <code>-1</code> if the value cannot be
                         *          parsed
                         */
                        // @ts-ignore
                        public static parseDate(value: java.lang.String | string): number /*long*/
                    }
                }
            }
        }
    }
}
