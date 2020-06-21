declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                // @ts-ignore
                class Diagnostics extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Check whether thread contention monitoring is enabled.
                     * @return true if thread contention monitoring is enabled
                     */
                    // @ts-ignore
                    public static isThreadContentionMonitoringEnabled(): boolean
                    /**
                     * Enable or disable thread contention monitoring via the ThreadMxMXBean.
                     * @param enable whether to enable thread contention monitoring
                     */
                    // @ts-ignore
                    public static setThreadContentionMonitoringEnabled(enable: boolean): void
                    /**
                     * Check whether thread cpu time measurement is enabled.
                     * @return true if thread cpu time measurement is enabled
                     */
                    // @ts-ignore
                    public static isThreadCpuTimeEnabled(): boolean
                    /**
                     * Enable or disable thread cpu time measurement via the ThreadMxMXBean.
                     * @param enable whether to enable thread cpu time measurement
                     */
                    // @ts-ignore
                    public static setThreadCpuTimeEnabled(enable: boolean): void
                    /**
                     * Reset peak thread count in ThreadMXBean
                     */
                    // @ts-ignore
                    public static resetPeakThreadCount(): void
                    /**
                     * Set verbose class loading
                     * @param verbose whether to enable verbose class loading
                     */
                    // @ts-ignore
                    public static setVerboseClassLoading(verbose: boolean): void
                    /**
                     * Set logger level
                     * @param loggerName the name of the logger
                     * @param levelName the level to set
                     */
                    // @ts-ignore
                    public static setLoggerLevel(loggerName: java.lang.String | string, levelName: java.lang.String | string): void
                    /**
                     * Set verbose garbage collection logging
                     * @param verbose whether to enable verbose gc logging
                     */
                    // @ts-ignore
                    public static setVerboseGarbageCollection(verbose: boolean): void
                    /**
                     * Initiate garbage collection via MX Bean
                     */
                    // @ts-ignore
                    public static gc(): void
                    /**
                     * Reset peak memory usage data in MemoryPoolMXBean
                     * @param name name of the MemoryPoolMXBean or "all"
                     */
                    // @ts-ignore
                    public static resetPeakUsage(name: java.lang.String | string): void
                    /**
                     * Set usage threshold in MemoryPoolMXBean
                     * @param name name of the MemoryPoolMXBean
                     * @param threshold the threshold to set
                     * @return true if setting the threshold succeeded
                     */
                    // @ts-ignore
                    public static setUsageThreshold(name: java.lang.String | string, threshold: number /*long*/): boolean
                    /**
                     * Set collection usage threshold in MemoryPoolMXBean
                     * @param name name of the MemoryPoolMXBean
                     * @param threshold the collection threshold to set
                     * @return true if setting the threshold succeeded
                     */
                    // @ts-ignore
                    public static setCollectionUsageThreshold(name: java.lang.String | string, threshold: number /*long*/): boolean
                    /**
                     * Check if any threads are deadlocked. If any, print
                     * the thread dump for those threads.
                     * @return a deadlock message and the formatted thread dump
                     *          of the deadlocked threads
                     */
                    // @ts-ignore
                    public static findDeadlock(): string
                    /**
                     * Retrieves a formatted JVM thread dump.
                     * The default StringManager will be used.
                     * @return the formatted JVM thread dump
                     */
                    // @ts-ignore
                    public static getThreadDump(): string
                    /**
                     * Retrieves a formatted JVM thread dump.
                     * The given list of locales will be used
                     * to retrieve a StringManager.
                     * @param requestedLocales list of locales to use
                     * @return the formatted JVM thread dump
                     */
                    // @ts-ignore
                    public static getThreadDump(requestedLocales: java.util.Enumeration<java.util.Locale>): string
                    /**
                     * Retrieve a JVM thread dump formatted
                     * using the given StringManager.
                     * @param requestedSm the StringManager to use
                     * @return the formatted JVM thread dump
                     */
                    // @ts-ignore
                    public static getThreadDump(requestedSm: org.apache.tomcat.util.res.StringManager): string
                    /**
                     * Retrieves a formatted JVM information text.
                     * The default StringManager will be used.
                     * @return the formatted JVM information text
                     */
                    // @ts-ignore
                    public static getVMInfo(): string
                    /**
                     * Retrieves a formatted JVM information text.
                     * The given list of locales will be used
                     * to retrieve a StringManager.
                     * @param requestedLocales list of locales to use
                     * @return the formatted JVM information text
                     */
                    // @ts-ignore
                    public static getVMInfo(requestedLocales: java.util.Enumeration<java.util.Locale>): string
                    /**
                     * Retrieve a JVM information text formatted
                     * using the given StringManager.
                     * @param requestedSm the StringManager to use
                     * @return the formatted JVM information text
                     */
                    // @ts-ignore
                    public static getVMInfo(requestedSm: org.apache.tomcat.util.res.StringManager): string
                }
            }
        }
    }
}
