declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * OS
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class OS extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly LOG_EMERG: number /*int*/
                    // @ts-ignore
                    public static readonly LOG_ERROR: number /*int*/
                    // @ts-ignore
                    public static readonly LOG_NOTICE: number /*int*/
                    // @ts-ignore
                    public static readonly LOG_WARN: number /*int*/
                    // @ts-ignore
                    public static readonly LOG_INFO: number /*int*/
                    // @ts-ignore
                    public static readonly LOG_DEBUG: number /*int*/
                    // @ts-ignore
                    public static readonly IS_UNIX: boolean
                    /**
                     * @deprecated Hard-coded to false since there has not been a supported
                     *              Netware platform for many years.
                     *              This will be removed in Tomcat 10 onwards
                     */
                    // @ts-ignore
                    public static readonly IS_NETWARE: boolean
                    // @ts-ignore
                    public static readonly IS_WIN32: boolean
                    // @ts-ignore
                    public static readonly IS_WIN64: boolean
                    // @ts-ignore
                    public static readonly IS_LINUX: boolean
                    // @ts-ignore
                    public static readonly IS_SOLARIS: boolean
                    // @ts-ignore
                    public static readonly IS_BSD: boolean
                    // @ts-ignore
                    public static readonly IS_MACOSX: boolean
                    /**
                     * Get the name of the system default character set.
                     * @param pool the pool to allocate the name from, if needed
                     * @return the encoding
                     */
                    // @ts-ignore
                    public static defaultEncoding(pool: number /*long*/): string
                    /**
                     * Get the name of the current locale character set.
                     * Defers to apr_os_default_encoding if the current locale's
                     * data can't be retrieved on this system.
                     * @param pool the pool to allocate the name from, if needed
                     * @return the encoding
                     */
                    // @ts-ignore
                    public static localeEncoding(pool: number /*long*/): string
                    /**
                     * Generate random bytes.
                     * @param buf Buffer to fill with random bytes
                     * @param len Length of buffer in bytes
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static random(buf: number /*byte*/[], len: number /*int*/): number /*int*/
                    /**
                     * Gather system info.
                     * <PRE>
                     * On exit the inf array will be filled with:
                     * inf[0]  - Total usable main memory size
                     * inf[1]  - Available memory size
                     * inf[2]  - Total page file/swap space size
                     * inf[3]  - Page file/swap space still available
                     * inf[4]  - Amount of shared memory
                     * inf[5]  - Memory used by buffers
                     * inf[6]  - Memory Load
                     * inf[7]  - Idle Time in microseconds
                     * inf[8]  - Kernel Time in microseconds
                     * inf[9]  - User Time in microseconds
                     * inf[10] - Process creation time (apr_time_t)
                     * inf[11] - Process Kernel Time in microseconds
                     * inf[12] - Process User Time in microseconds
                     * inf[13] - Current working set size.
                     * inf[14] - Peak working set size.
                     * inf[15] - Number of page faults.
                     * </PRE>
                     * @param inf array that will be filled with system information.
                     *             Array length must be at least 16.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static info(inf: number /*long*/[]): number /*int*/
                    /**
                     * Expand environment variables.
                     * @param str String to expand
                     * @return Expanded string with replaced environment variables.
                     */
                    // @ts-ignore
                    public static expand(str: java.lang.String | string): string
                    /**
                     * Initialize system logging.
                     * @param domain String that will be prepended to every message
                     */
                    // @ts-ignore
                    public static sysloginit(domain: java.lang.String | string): void
                    /**
                     * Log message.
                     * @param level Log message severity. See LOG_XXX enums.
                     * @param message Message to log
                     */
                    // @ts-ignore
                    public static syslog(level: number /*int*/, message: java.lang.String | string): void
                }
            }
        }
    }
}
