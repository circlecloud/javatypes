declare namespace org {
    namespace apache {
        namespace juli {
            /**
             * Implementation of <b>Handler</b> that appends log messages to a file
             * named {prefix}{date}{suffix} in a configured directory.
             * <p>The following configuration properties are available:</p>
             * <ul>
             * <li><code>directory</code> - The directory where to create the log file.
             * If the path is not absolute, it is relative to the current working
             * directory of the application. The Apache Tomcat configuration files usually
             * specify an absolute path for this property,
             * <code>${catalina.base}/logs</code>
             * Default value: <code>logs</code></li>
             * <li><code>rotatable</code> - If <code>true</code>, the log file will be
             * rotated on the first write past midnight and the filename will be
             * <code>{prefix}{date}{suffix}</code>, where date is yyyy-MM-dd. If <code>false</code>,
             * the file will not be rotated and the filename will be <code>{prefix}{suffix}</code>.
             * Default value: <code>true</code></li>
             * <li><code>prefix</code> - The leading part of the log file name.
             * Default value: <code>juli.</code></li>
             * <li><code>suffix</code> - The trailing part of the log file name. Default value: <code>.log</code></li>
             * <li><code>bufferSize</code> - Configures buffering. The value of <code>0</code>
             * uses system default buffering (typically an 8K buffer will be used). A
             * value of <code>&lt;0</code> forces a writer flush upon each log write. A
             * value <code>&gt;0</code> uses a BufferedOutputStream with the defined
             * value but note that the system default buffering will also be
             * applied. Default value: <code>-1</code></li>
             * <li><code>encoding</code> - Character set used by the log file. Default value:
             * empty string, which means to use the system default character set.</li>
             * <li><code>level</code> - The level threshold for this Handler. See the
             * <code>java.util.logging.Level</code> class for the possible levels.
             * Default value: <code>ALL</code></li>
             * <li><code>filter</code> - The <code>java.util.logging.Filter</code>
             * implementation class name for this Handler. Default value: unset</li>
             * <li><code>formatter</code> - The <code>java.util.logging.Formatter</code>
             * implementation class name for this Handler. Default value:
             * <code>java.util.logging.SimpleFormatter</code></li>
             * <li><code>maxDays</code> - The maximum number of days to keep the log
             * files. If the specified value is <code>&lt;=0</code> then the log files
             * will be kept on the file system forever, otherwise they will be kept the
             * specified maximum days. Default value: <code>-1</code>.</li>
             * </ul>
             */
            // @ts-ignore
            class FileHandler extends java.util.logging.Handler {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(directory: java.lang.String | string, prefix: java.lang.String | string, suffix: java.lang.String | string)
                // @ts-ignore
                constructor(directory: java.lang.String | string, prefix: java.lang.String | string, suffix: java.lang.String | string, maxDays: java.lang.Integer | number)
                // @ts-ignore
                constructor(directory: java.lang.String | string, prefix: java.lang.String | string, suffix: java.lang.String | string, maxDays: java.lang.Integer | number, rotatable: java.lang.Boolean, bufferSize: java.lang.Integer | number)
                // @ts-ignore
                public static readonly DEFAULT_MAX_DAYS: number /*int*/
                // @ts-ignore
                public static readonly DEFAULT_BUFFER_SIZE: number /*int*/
                /**
                 * Lock used to control access to the writer.
                 */
                // @ts-ignore
                readonly writerLock: java.util.concurrent.locks.ReadWriteLock
                /**
                 * Format and publish a <tt>LogRecord</tt>.
                 * @param record  description of the log event
                 */
                // @ts-ignore
                public publish(record: java.util.logging.LogRecord): void
                /**
                 * Close the currently open log file (if any).
                 */
                // @ts-ignore
                public close(): void
                // @ts-ignore
                closeWriter(): void
                /**
                 * Flush the writer.
                 */
                // @ts-ignore
                public flush(): void
                /**
                 * Open the new log file for the date specified by <code>date</code>.
                 */
                // @ts-ignore
                open(): void
                // @ts-ignore
                openWriter(): void
            }
        }
    }
}
