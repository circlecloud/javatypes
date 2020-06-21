declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                /**
                 * A thread safe wrapper around {@link SimpleDateFormat} that does not make use
                 * of ThreadLocal and - broadly - only creates enough SimpleDateFormat objects
                 * to satisfy the concurrency requirements.
                 * @deprecated Unused. This will be removed in Tomcat 10.
                 *              Use {#link org.apache.tomcat.util.http.ConcurrentDateFormat}
                 */
                // @ts-ignore
                class ConcurrentDateFormat extends java.lang.Object {
                    // @ts-ignore
                    constructor(format: java.lang.String | string, locale: java.util.Locale, timezone: java.util.TimeZone)
                    // @ts-ignore
                    public static readonly RFC1123_DATE: java.lang.String | string
                    // @ts-ignore
                    public static readonly GMT: java.util.TimeZone
                    // @ts-ignore
                    public static formatRfc1123(date: java.util.Date): string
                    // @ts-ignore
                    public format(date: java.util.Date): string
                }
            }
        }
    }
}
