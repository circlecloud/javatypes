declare namespace java {
    namespace util {
        namespace logging {
            /**
             * Simple network logging <tt>Handler</tt>.
             * <p>
             * <tt>LogRecords</tt> are published to a network stream connection.  By default
             * the <tt>XMLFormatter</tt> class is used for formatting.
             * <p>
             * <b>Configuration:</b>
             * By default each <tt>SocketHandler</tt> is initialized using the following
             * <tt>LogManager</tt> configuration properties where <tt>&lt;handler-name&gt;</tt>
             * refers to the fully-qualified class name of the handler.
             * If properties are not defined
             * (or have invalid values) then the specified default values are used.
             * <ul>
             * <li>   &lt;handler-name&gt;.level
             * specifies the default level for the <tt>Handler</tt>
             * (defaults to <tt>Level.ALL</tt>). </li>
             * <li>   &lt;handler-name&gt;.filter
             * specifies the name of a <tt>Filter</tt> class to use
             * (defaults to no <tt>Filter</tt>). </li>
             * <li>   &lt;handler-name&gt;.formatter
             * specifies the name of a <tt>Formatter</tt> class to use
             * (defaults to <tt>java.util.logging.XMLFormatter</tt>). </li>
             * <li>   &lt;handler-name&gt;.encoding
             * the name of the character set encoding to use (defaults to
             * the default platform encoding). </li>
             * <li>   &lt;handler-name&gt;.host
             * specifies the target host name to connect to (no default). </li>
             * <li>   &lt;handler-name&gt;.port
             * specifies the target TCP port to use (no default). </li>
             * </ul>
             * <p>
             * For example, the properties for {@code SocketHandler} would be:
             * <ul>
             * <li>   java.util.logging.SocketHandler.level=INFO </li>
             * <li>   java.util.logging.SocketHandler.formatter=java.util.logging.SimpleFormatter </li>
             * </ul>
             * <p>
             * For a custom handler, e.g. com.foo.MyHandler, the properties would be:
             * <ul>
             * <li>   com.foo.MyHandler.level=INFO </li>
             * <li>   com.foo.MyHandler.formatter=java.util.logging.SimpleFormatter </li>
             * </ul>
             * <p>
             * The output IO stream is buffered, but is flushed after each
             * <tt>LogRecord</tt> is written.
             * @since 1.4
             */
            // @ts-ignore
            class SocketHandler extends java.util.logging.StreamHandler {
                /**
                 * Create a <tt>SocketHandler</tt>, using only <tt>LogManager</tt> properties
                 * (or their defaults).
                 * @throws IllegalArgumentException if the host or port are invalid or
                 *           are not specified as LogManager properties.
                 * @throws IOException if we are unable to connect to the target
                 *          host and port.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Construct a <tt>SocketHandler</tt> using a specified host and port.
                 * The <tt>SocketHandler</tt> is configured based on <tt>LogManager</tt>
                 * properties (or their default values) except that the given target host
                 * and port arguments are used. If the host argument is empty, but not
                 * null String then the localhost is used.
                 * @param host target host.
                 * @param port target port.
                 * @throws IllegalArgumentException if the host or port are invalid.
                 * @throws IOException if we are unable to connect to the target
                 *          host and port.
                 */
                // @ts-ignore
                constructor(host: java.lang.String | string, port: number /*int*/)
                /**
                 * Close this output stream.
                 * @exception SecurityException  if a security manager exists and if
                 *              the caller does not have <tt>LoggingPermission("control")</tt>.
                 */
                // @ts-ignore
                public close(): void
                /**
                 * Format and publish a <tt>LogRecord</tt>.
                 * @param record  description of the log event. A null record is
                 *                  silently ignored and is not published
                 */
                // @ts-ignore
                public publish(record: java.util.logging.LogRecord): void
            }
        }
    }
}
