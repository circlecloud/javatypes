declare namespace java {
    namespace util {
        namespace logging {
            /**
             * Stream based logging <tt>Handler</tt>.
             * <p>
             * This is primarily intended as a base class or support class to
             * be used in implementing other logging <tt>Handlers</tt>.
             * <p>
             * <tt>LogRecords</tt> are published to a given <tt>java.io.OutputStream</tt>.
             * <p>
             * <b>Configuration:</b>
             * By default each <tt>StreamHandler</tt> is initialized using the following
             * <tt>LogManager</tt> configuration properties where <tt>&lt;handler-name&gt;</tt>
             * refers to the fully-qualified class name of the handler.
             * If properties are not defined
             * (or have invalid values) then the specified default values are used.
             * <ul>
             * <li>   &lt;handler-name&gt;.level
             * specifies the default level for the <tt>Handler</tt>
             * (defaults to <tt>Level.INFO</tt>). </li>
             * <li>   &lt;handler-name&gt;.filter
             * specifies the name of a <tt>Filter</tt> class to use
             * (defaults to no <tt>Filter</tt>). </li>
             * <li>   &lt;handler-name&gt;.formatter
             * specifies the name of a <tt>Formatter</tt> class to use
             * (defaults to <tt>java.util.logging.SimpleFormatter</tt>). </li>
             * <li>   &lt;handler-name&gt;.encoding
             * the name of the character set encoding to use (defaults to
             * the default platform encoding). </li>
             * </ul>
             * <p>
             * For example, the properties for {@code StreamHandler} would be:
             * <ul>
             * <li>   java.util.logging.StreamHandler.level=INFO </li>
             * <li>   java.util.logging.StreamHandler.formatter=java.util.logging.SimpleFormatter </li>
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
            class StreamHandler extends java.util.logging.Handler {
                /**
                 * Create a <tt>StreamHandler</tt>, with no current output stream.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a <tt>StreamHandler</tt> with a given <tt>Formatter</tt>
                 * and output stream.
                 * <p>
                 * @param out         the target output stream
                 * @param formatter   Formatter to be used to format output
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, formatter: java.util.logging.Formatter)
                /**
                 * Change the output stream.
                 * <P>
                 * If there is a current output stream then the <tt>Formatter</tt>'s
                 * tail string is written and the stream is flushed and closed.
                 * Then the output stream is replaced with the new output stream.
                 * @param out   New output stream.  May not be null.
                 * @exception SecurityException  if a security manager exists and if
                 *              the caller does not have <tt>LoggingPermission("control")</tt>.
                 */
                // @ts-ignore
                setOutputStream(out: java.io.OutputStream): void
                /**
                 * Set (or change) the character encoding used by this <tt>Handler</tt>.
                 * <p>
                 * The encoding should be set before any <tt>LogRecords</tt> are written
                 * to the <tt>Handler</tt>.
                 * @param encoding  The name of a supported character encoding.
                 *         May be null, to indicate the default platform encoding.
                 * @exception SecurityException  if a security manager exists and if
                 *              the caller does not have <tt>LoggingPermission("control")</tt>.
                 * @exception UnsupportedEncodingException if the named encoding is
                 *           not supported.
                 */
                // @ts-ignore
                setEncoding(encoding: string): void
                /**
                 * Format and publish a <tt>LogRecord</tt>.
                 * <p>
                 * The <tt>StreamHandler</tt> first checks if there is an <tt>OutputStream</tt>
                 * and if the given <tt>LogRecord</tt> has at least the required log level.
                 * If not it silently returns.  If so, it calls any associated
                 * <tt>Filter</tt> to check if the record should be published.  If so,
                 * it calls its <tt>Formatter</tt> to format the record and then writes
                 * the result to the current output stream.
                 * <p>
                 * If this is the first <tt>LogRecord</tt> to be written to a given
                 * <tt>OutputStream</tt>, the <tt>Formatter</tt>'s "head" string is
                 * written to the stream before the <tt>LogRecord</tt> is written.
                 * @param record  description of the log event. A null record is
                 *                  silently ignored and is not published
                 */
                // @ts-ignore
                publish(record: java.util.logging.LogRecord): void
                /**
                 * Check if this <tt>Handler</tt> would actually log a given <tt>LogRecord</tt>.
                 * <p>
                 * This method checks if the <tt>LogRecord</tt> has an appropriate level and
                 * whether it satisfies any <tt>Filter</tt>.  It will also return false if
                 * no output stream has been assigned yet or the LogRecord is null.
                 * <p>
                 * @param record  a <tt>LogRecord</tt>
                 * @return true if the <tt>LogRecord</tt> would be logged.
                 */
                // @ts-ignore
                isLoggable(record: java.util.logging.LogRecord): boolean
                /**
                 * Flush any buffered messages.
                 */
                // @ts-ignore
                flush(): void
                /**
                 * Close the current output stream.
                 * <p>
                 * The <tt>Formatter</tt>'s "tail" string is written to the stream before it
                 * is closed.  In addition, if the <tt>Formatter</tt>'s "head" string has not
                 * yet been written to the stream, it will be written before the
                 * "tail" string.
                 * @exception SecurityException  if a security manager exists and if
                 *              the caller does not have LoggingPermission("control").
                 */
                // @ts-ignore
                close(): void
            }
        }
    }
}
