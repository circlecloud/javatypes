declare namespace java {
    namespace util {
        namespace logging {
            /**
             * <tt>Handler</tt> that buffers requests in a circular buffer in memory.
             * <p>
             * Normally this <tt>Handler</tt> simply stores incoming <tt>LogRecords</tt>
             * into its memory buffer and discards earlier records.  This buffering
             * is very cheap and avoids formatting costs.  On certain trigger
             * conditions, the <tt>MemoryHandler</tt> will push out its current buffer
             * contents to a target <tt>Handler</tt>, which will typically publish
             * them to the outside world.
             * <p>
             * There are three main models for triggering a push of the buffer:
             * <ul>
             * <li>
             * An incoming <tt>LogRecord</tt> has a type that is greater than
             * a pre-defined level, the <tt>pushLevel</tt>. </li>
             * <li>
             * An external class calls the <tt>push</tt> method explicitly. </li>
             * <li>
             * A subclass overrides the <tt>log</tt> method and scans each incoming
             * <tt>LogRecord</tt> and calls <tt>push</tt> if a record matches some
             * desired criteria. </li>
             * </ul>
             * <p>
             * <b>Configuration:</b>
             * By default each <tt>MemoryHandler</tt> is initialized using the following
             * <tt>LogManager</tt> configuration properties where <tt>&lt;handler-name&gt;</tt>
             * refers to the fully-qualified class name of the handler.
             * If properties are not defined
             * (or have invalid values) then the specified default values are used.
             * If no default value is defined then a RuntimeException is thrown.
             * <ul>
             * <li>   &lt;handler-name&gt;.level
             * specifies the level for the <tt>Handler</tt>
             * (defaults to <tt>Level.ALL</tt>). </li>
             * <li>   &lt;handler-name&gt;.filter
             * specifies the name of a <tt>Filter</tt> class to use
             * (defaults to no <tt>Filter</tt>). </li>
             * <li>   &lt;handler-name&gt;.size
             * defines the buffer size (defaults to 1000). </li>
             * <li>   &lt;handler-name&gt;.push
             * defines the <tt>pushLevel</tt> (defaults to <tt>level.SEVERE</tt>). </li>
             * <li>   &lt;handler-name&gt;.target
             * specifies the name of the target <tt>Handler </tt> class.
             * (no default). </li>
             * </ul>
             * <p>
             * For example, the properties for {@code MemoryHandler} would be:
             * <ul>
             * <li>   java.util.logging.MemoryHandler.level=INFO </li>
             * <li>   java.util.logging.MemoryHandler.formatter=java.util.logging.SimpleFormatter </li>
             * </ul>
             * <p>
             * For a custom handler, e.g. com.foo.MyHandler, the properties would be:
             * <ul>
             * <li>   com.foo.MyHandler.level=INFO </li>
             * <li>   com.foo.MyHandler.formatter=java.util.logging.SimpleFormatter </li>
             * </ul>
             * <p>
             * @since 1.4
             */
            // @ts-ignore
            class MemoryHandler extends java.util.logging.Handler {
                /**
                 * Create a <tt>MemoryHandler</tt> and configure it based on
                 * <tt>LogManager</tt> configuration properties.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a <tt>MemoryHandler</tt>.
                 * <p>
                 * The <tt>MemoryHandler</tt> is configured based on <tt>LogManager</tt>
                 * properties (or their default values) except that the given <tt>pushLevel</tt>
                 * argument and buffer size argument are used.
                 * @param target  the Handler to which to publish output.
                 * @param size    the number of log records to buffer (must be greater than zero)
                 * @param pushLevel  message level to push on
                 * @throws IllegalArgumentException if {#code size is <= 0}
                 */
                // @ts-ignore
                constructor(target: java.util.logging.Handler, size: number /*int*/, pushLevel: java.util.logging.Level)
                /**
                 * Store a <tt>LogRecord</tt> in an internal buffer.
                 * <p>
                 * If there is a <tt>Filter</tt>, its <tt>isLoggable</tt>
                 * method is called to check if the given log record is loggable.
                 * If not we return.  Otherwise the given record is copied into
                 * an internal circular buffer.  Then the record's level property is
                 * compared with the <tt>pushLevel</tt>. If the given level is
                 * greater than or equal to the <tt>pushLevel</tt> then <tt>push</tt>
                 * is called to write all buffered records to the target output
                 * <tt>Handler</tt>.
                 * @param record  description of the log event. A null record is
                 *                  silently ignored and is not published
                 */
                // @ts-ignore
                publish(record: java.util.logging.LogRecord): void
                /**
                 * Push any buffered output to the target <tt>Handler</tt>.
                 * <p>
                 * The buffer is then cleared.
                 */
                // @ts-ignore
                push(): void
                /**
                 * Causes a flush on the target <tt>Handler</tt>.
                 * <p>
                 * Note that the current contents of the <tt>MemoryHandler</tt>
                 * buffer are <b>not</b> written out.  That requires a "push".
                 */
                // @ts-ignore
                flush(): void
                /**
                 * Close the <tt>Handler</tt> and free all associated resources.
                 * This will also close the target <tt>Handler</tt>.
                 * @exception SecurityException  if a security manager exists and if
                 *              the caller does not have <tt>LoggingPermission("control")</tt>.
                 */
                // @ts-ignore
                close(): void
                /**
                 * Set the <tt>pushLevel</tt>.  After a <tt>LogRecord</tt> is copied
                 * into our internal buffer, if its level is greater than or equal to
                 * the <tt>pushLevel</tt>, then <tt>push</tt> will be called.
                 * @param newLevel the new value of the <tt>pushLevel</tt>
                 * @exception SecurityException  if a security manager exists and if
                 *              the caller does not have <tt>LoggingPermission("control")</tt>.
                 */
                // @ts-ignore
                setPushLevel(newLevel: java.util.logging.Level): void
                /**
                 * Get the <tt>pushLevel</tt>.
                 * @return the value of the <tt>pushLevel</tt>
                 */
                // @ts-ignore
                getPushLevel(): java.util.logging.Level
                /**
                 * Check if this <tt>Handler</tt> would actually log a given
                 * <tt>LogRecord</tt> into its internal buffer.
                 * <p>
                 * This method checks if the <tt>LogRecord</tt> has an appropriate level and
                 * whether it satisfies any <tt>Filter</tt>.  However it does <b>not</b>
                 * check whether the <tt>LogRecord</tt> would result in a "push" of the
                 * buffer contents. It will return false if the <tt>LogRecord</tt> is null.
                 * <p>
                 * @param record  a <tt>LogRecord</tt>
                 * @return true if the <tt>LogRecord</tt> would be logged.
                 */
                // @ts-ignore
                isLoggable(record: java.util.logging.LogRecord): boolean
            }
        }
    }
}
