declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                /**
                 * This is a concrete implementation of {@link AbstractAccessLogValve} that
                 * outputs the access log to a file. The features of this implementation
                 * include:
                 * <ul>
                 * <li>Automatic date-based rollover of log files</li>
                 * <li>Optional log file rotation</li>
                 * </ul>
                 * <p>
                 * For UNIX users, another field called <code>checkExists</code> is also
                 * available. If set to true, the log file's existence will be checked before
                 * each logging. This way an external log rotator can move the file
                 * somewhere and Tomcat will start with a new file.
                 * </p>
                 * <p>
                 * For JMX junkies, a public method called <code>rotate</code> has
                 * been made available to allow you to tell this instance to move
                 * the existing log file to somewhere else and start writing a new log file.
                 * </p>
                 */
                // @ts-ignore
                class AccessLogValve extends org.apache.catalina.valves.AbstractAccessLogValve {
                    // @ts-ignore
                    constructor()
                    /**
                     * The prefix that is added to log file filenames.
                     */
                    // @ts-ignore
                    prefix: java.lang.String | string
                    /**
                     * Should we rotate our log file? Default is true (like old behavior)
                     */
                    // @ts-ignore
                    rotatable: boolean
                    /**
                     * Should we defer inclusion of the date stamp in the file
                     * name until rotate time? Default is false.
                     */
                    // @ts-ignore
                    renameOnRotate: boolean
                    /**
                     * The suffix that is added to log file filenames.
                     */
                    // @ts-ignore
                    suffix: java.lang.String | string
                    /**
                     * The PrintWriter to which we are currently logging, if any.
                     */
                    // @ts-ignore
                    writer: java.io.PrintWriter
                    /**
                     * A date formatter to format a Date using the format
                     * given by <code>fileDateFormat</code>.
                     */
                    // @ts-ignore
                    fileDateFormatter: java.text.SimpleDateFormat
                    /**
                     * The current log file we are writing to. Helpful when checkExists
                     * is true.
                     */
                    // @ts-ignore
                    currentLogFile: java.io.File
                    /**
                     * Date format to place in log file name.
                     */
                    // @ts-ignore
                    fileDateFormat: java.lang.String | string
                    /**
                     * Character set used by the log file. If it is <code>null</code>, the
                     * system default character set will be used. An empty string will be
                     * treated as <code>null</code> when this property is assigned.
                     */
                    // @ts-ignore
                    encoding: java.lang.String | string
                    // @ts-ignore
                    public getMaxDays(): number /*int*/
                    // @ts-ignore
                    public setMaxDays(maxDays: number /*int*/): void
                    /**
                     * @return the directory in which we create log files.
                     */
                    // @ts-ignore
                    public getDirectory(): string
                    /**
                     * Set the directory in which we create log files.
                     * @param directory The new log file directory
                     */
                    // @ts-ignore
                    public setDirectory(directory: java.lang.String | string): void
                    /**
                     * Check for file existence before logging.
                     * @return <code>true</code> if file existence is checked first
                     */
                    // @ts-ignore
                    public isCheckExists(): boolean
                    /**
                     * Set whether to check for log file existence before logging.
                     * @param checkExists true meaning to check for file existence.
                     */
                    // @ts-ignore
                    public setCheckExists(checkExists: boolean): void
                    /**
                     * @return the log file prefix.
                     */
                    // @ts-ignore
                    public getPrefix(): string
                    /**
                     * Set the log file prefix.
                     * @param prefix The new log file prefix
                     */
                    // @ts-ignore
                    public setPrefix(prefix: java.lang.String | string): void
                    /**
                     * Should we rotate the access log.
                     * @return <code>true</code> if the access log should be rotated
                     */
                    // @ts-ignore
                    public isRotatable(): boolean
                    /**
                     * Configure whether the access log should be rotated.
                     * @param rotatable true if the log should be rotated
                     */
                    // @ts-ignore
                    public setRotatable(rotatable: boolean): void
                    /**
                     * Should we defer inclusion of the date stamp in the file
                     * name until rotate time.
                     * @return <code>true</code> if the logs file names are time stamped
                     *   only when they are rotated
                     */
                    // @ts-ignore
                    public isRenameOnRotate(): boolean
                    /**
                     * Set the value if we should defer inclusion of the date
                     * stamp in the file name until rotate time
                     * @param renameOnRotate true if defer inclusion of date stamp
                     */
                    // @ts-ignore
                    public setRenameOnRotate(renameOnRotate: boolean): void
                    /**
                     * Is the logging buffered. Usually buffering can increase performance.
                     * @return <code>true</code> if the logging uses a buffer
                     */
                    // @ts-ignore
                    public isBuffered(): boolean
                    /**
                     * Set the value if the logging should be buffered
                     * @param buffered <code>true</code> if buffered.
                     */
                    // @ts-ignore
                    public setBuffered(buffered: boolean): void
                    /**
                     * @return the log file suffix.
                     */
                    // @ts-ignore
                    public getSuffix(): string
                    /**
                     * Set the log file suffix.
                     * @param suffix The new log file suffix
                     */
                    // @ts-ignore
                    public setSuffix(suffix: java.lang.String | string): void
                    /**
                     * @return the date format date based log rotation.
                     */
                    // @ts-ignore
                    public getFileDateFormat(): string
                    /**
                     * Set the date format date based log rotation.
                     * @param fileDateFormat The format for the file timestamp
                     */
                    // @ts-ignore
                    public setFileDateFormat(fileDateFormat: java.lang.String | string): void
                    /**
                     * Return the character set name that is used to write the log file.
                     * @return Character set name, or <code>null</code> if the system default
                     *   character set is used.
                     */
                    // @ts-ignore
                    public getEncoding(): string
                    /**
                     * Set the character set that is used to write the log file.
                     * @param encoding The name of the character set.
                     */
                    // @ts-ignore
                    public setEncoding(encoding: java.lang.String | string): void
                    /**
                     * Execute a periodic task, such as reloading, etc. This method will be
                     * invoked inside the classloading context of this container. Unexpected
                     * throwables will be caught and logged.
                     */
                    // @ts-ignore
                    public backgroundProcess(): void
                    /**
                     * Rotate the log file if necessary.
                     */
                    // @ts-ignore
                    public rotate(): void
                    /**
                     * Rename the existing log file to something else. Then open the
                     * old log file name up once again. Intended to be called by a JMX
                     * agent.
                     * @param newFileName The file name to move the log file entry to
                     * @return true if a file was rotated with no error
                     */
                    // @ts-ignore
                    public rotate(newFileName: java.lang.String | string): boolean
                    /**
                     * Log the specified message to the log file, switching files if the date
                     * has changed since the previous log call.
                     * @param message Message to be logged
                     */
                    // @ts-ignore
                    public log(message: java.io.CharArrayWriter): void
                    /**
                     * Open the new log file for the date specified by <code>dateStamp</code>.
                     */
                    // @ts-ignore
                    open(): void
                    /**
                     * Start this component and implement the requirements
                     * of {@link org.apache.catalina.util.LifecycleBase#startInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    startInternal(): void
                    /**
                     * Stop this component and implement the requirements
                     * of {@link org.apache.catalina.util.LifecycleBase#stopInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    stopInternal(): void
                }
            }
        }
    }
}
