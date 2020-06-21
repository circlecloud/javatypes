declare namespace java {
    namespace util {
        namespace logging {
            /**
             * This <tt>Handler</tt> publishes log records to <tt>System.err</tt>.
             * By default the <tt>SimpleFormatter</tt> is used to generate brief summaries.
             * <p>
             * <b>Configuration:</b>
             * By default each <tt>ConsoleHandler</tt> is initialized using the following
             * <tt>LogManager</tt> configuration properties where {@code <handler-name>}
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
             * For example, the properties for {@code ConsoleHandler} would be:
             * <ul>
             * <li>   java.util.logging.ConsoleHandler.level=INFO </li>
             * <li>   java.util.logging.ConsoleHandler.formatter=java.util.logging.SimpleFormatter </li>
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
            class ConsoleHandler extends java.util.logging.StreamHandler {
                /**
                 * Create a <tt>ConsoleHandler</tt> for <tt>System.err</tt>.
                 * <p>
                 * The <tt>ConsoleHandler</tt> is configured based on
                 * <tt>LogManager</tt> properties (or their default values).
                 */
                // @ts-ignore
                constructor()
                /**
                 * Publish a <tt>LogRecord</tt>.
                 * <p>
                 * The logging request was made initially to a <tt>Logger</tt> object,
                 * which initialized the <tt>LogRecord</tt> and forwarded it here.
                 * <p>
                 * @param record  description of the log event. A null record is
                 *                  silently ignored and is not published
                 */
                // @ts-ignore
                public publish(record: java.util.logging.LogRecord): void
                /**
                 * Override <tt>StreamHandler.close</tt> to do a flush but not
                 * to close the output stream.  That is, we do <b>not</b>
                 * close <tt>System.err</tt>.
                 */
                // @ts-ignore
                public close(): void
            }
        }
    }
}
