declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Time
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class Time extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * number of microseconds per second
                     */
                    // @ts-ignore
                    public static readonly APR_USEC_PER_SEC: number /*long*/
                    /**
                     * number of milliseconds per microsecond
                     */
                    // @ts-ignore
                    public static readonly APR_MSEC_PER_USEC: number /*long*/
                    /**
                     * @param t The time
                     * @return apr_time_t as a second
                     */
                    // @ts-ignore
                    public static sec(t: number /*long*/): number /*long*/
                    /**
                     * @param t The time
                     * @return apr_time_t as a msec
                     */
                    // @ts-ignore
                    public static msec(t: number /*long*/): number /*long*/
                    /**
                     * number of microseconds since 00:00:00 January 1, 1970 UTC
                     * @return the current time
                     */
                    // @ts-ignore
                    public static now(): number /*long*/
                    /**
                     * Formats dates in the RFC822
                     * format in an efficient manner.
                     * @param t the time to convert
                     * @return the formatted date
                     */
                    // @ts-ignore
                    public static rfc822(t: number /*long*/): string
                    /**
                     * Formats dates in the ctime() format
                     * in an efficient manner.
                     * Unlike ANSI/ISO C ctime(), apr_ctime() does not include
                     * a \n at the end of the string.
                     * @param t the time to convert
                     * @return the formatted date
                     */
                    // @ts-ignore
                    public static ctime(t: number /*long*/): string
                    /**
                     * Sleep for the specified number of micro-seconds.
                     * <br><b>Warning :</b> May sleep for longer than the specified time.
                     * @param t desired amount of time to sleep.
                     */
                    // @ts-ignore
                    public static sleep(t: number /*long*/): void
                }
            }
        }
    }
}
