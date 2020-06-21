declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    /**
                     * A thread safe wrapper around {@link SimpleDateFormat} that does not make use
                     * of ThreadLocal and - broadly - only creates enough SimpleDateFormat objects
                     * to satisfy the concurrency requirements.
                     */
                    // @ts-ignore
                    class ConcurrentDateFormat extends java.lang.Object {
                        // @ts-ignore
                        constructor(format: java.lang.String | string, locale: java.util.Locale, timezone: java.util.TimeZone)
                        // @ts-ignore
                        public format(date: java.util.Date): string
                        // @ts-ignore
                        public parse(source: java.lang.String | string): java.util.Date
                    }
                }
            }
        }
    }
}
