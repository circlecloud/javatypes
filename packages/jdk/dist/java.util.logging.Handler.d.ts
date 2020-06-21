declare namespace java {
    namespace util {
        namespace logging {
            /**
             * A <tt>Handler</tt> object takes log messages from a <tt>Logger</tt> and
             * exports them.  It might for example, write them to a console
             * or write them to a file, or send them to a network logging service,
             * or forward them to an OS log, or whatever.
             * <p>
             * A <tt>Handler</tt> can be disabled by doing a <tt>setLevel(Level.OFF)</tt>
             * and can  be re-enabled by doing a <tt>setLevel</tt> with an appropriate level.
             * <p>
             * <tt>Handler</tt> classes typically use <tt>LogManager</tt> properties to set
             * default values for the <tt>Handler</tt>'s <tt>Filter</tt>, <tt>Formatter</tt>,
             * and <tt>Level</tt>.  See the specific documentation for each concrete
             * <tt>Handler</tt> class.
             * @since 1.4
             */
            // @ts-ignore
            abstract class Handler extends java.lang.Object {
                /**
                 * Default constructor.  The resulting <tt>Handler</tt> has a log
                 * level of <tt>Level.ALL</tt>, no <tt>Formatter</tt>, and no
                 * <tt>Filter</tt>.  A default <tt>ErrorManager</tt> instance is installed
                 * as the <tt>ErrorManager</tt>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Publish a <tt>LogRecord</tt>.
                 * <p>
                 * The logging request was made initially to a <tt>Logger</tt> object,
                 * which initialized the <tt>LogRecord</tt> and forwarded it here.
                 * <p>
                 * The <tt>Handler</tt>  is responsible for formatting the message, when and
                 * if necessary.  The formatting should include localization.
                 * @param record  description of the log event. A null record is
                 *                  silently ignored and is not published
                 */
                // @ts-ignore
                public abstract publish(record: java.util.logging.LogRecord): void
                /**
                 * Flush any buffered output.
                 */
                // @ts-ignore
                public abstract flush(): void
                /**
                 * Close the <tt>Handler</tt> and free all associated resources.
                 * <p>
                 * The close method will perform a <tt>flush</tt> and then close the
                 * <tt>Handler</tt>.   After close has been called this <tt>Handler</tt>
                 * should no longer be used.  Method calls may either be silently
                 * ignored or may throw runtime exceptions.
                 * @exception SecurityException  if a security manager exists and if
                 *              the caller does not have <tt>LoggingPermission("control")</tt>.
                 */
                // @ts-ignore
                public abstract close(): void
                /**
                 * Set a <tt>Formatter</tt>.  This <tt>Formatter</tt> will be used
                 * to format <tt>LogRecords</tt> for this <tt>Handler</tt>.
                 * <p>
                 * Some <tt>Handlers</tt> may not use <tt>Formatters</tt>, in
                 * which case the <tt>Formatter</tt> will be remembered, but not used.
                 * <p>
                 * @param newFormatter the <tt>Formatter</tt> to use (may not be null)
                 * @exception SecurityException  if a security manager exists and if
                 *              the caller does not have <tt>LoggingPermission("control")</tt>.
                 */
                // @ts-ignore
                public setFormatter(newFormatter: java.util.logging.Formatter): void
                /**
                 * Return the <tt>Formatter</tt> for this <tt>Handler</tt>.
                 * @return the <tt>Formatter</tt> (may be null).
                 */
                // @ts-ignore
                public getFormatter(): java.util.logging.Formatter
                /**
                 * Set the character encoding used by this <tt>Handler</tt>.
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
                public setEncoding(encoding: java.lang.String | string): void
                /**
                 * Return the character encoding for this <tt>Handler</tt>.
                 * @return The encoding name.  May be null, which indicates the
                 *           default encoding should be used.
                 */
                // @ts-ignore
                public getEncoding(): string
                /**
                 * Set a <tt>Filter</tt> to control output on this <tt>Handler</tt>.
                 * <P>
                 * For each call of <tt>publish</tt> the <tt>Handler</tt> will call
                 * this <tt>Filter</tt> (if it is non-null) to check if the
                 * <tt>LogRecord</tt> should be published or discarded.
                 * @param newFilter  a <tt>Filter</tt> object (may be null)
                 * @exception SecurityException  if a security manager exists and if
                 *              the caller does not have <tt>LoggingPermission("control")</tt>.
                 */
                // @ts-ignore
                public setFilter(newFilter: java.util.logging.Filter): void
                /**
                 * Get the current <tt>Filter</tt> for this <tt>Handler</tt>.
                 * @return a <tt>Filter</tt> object (may be null)
                 */
                // @ts-ignore
                public getFilter(): java.util.logging.Filter
                /**
                 * Define an ErrorManager for this Handler.
                 * <p>
                 * The ErrorManager's "error" method will be invoked if any
                 * errors occur while using this Handler.
                 * @param em  the new ErrorManager
                 * @exception SecurityException  if a security manager exists and if
                 *              the caller does not have <tt>LoggingPermission("control")</tt>.
                 */
                // @ts-ignore
                public setErrorManager(em: java.util.logging.ErrorManager): void
                /**
                 * Retrieves the ErrorManager for this Handler.
                 * @return the ErrorManager for this Handler
                 * @exception SecurityException  if a security manager exists and if
                 *              the caller does not have <tt>LoggingPermission("control")</tt>.
                 */
                // @ts-ignore
                public getErrorManager(): java.util.logging.ErrorManager
                /**
                 * Protected convenience method to report an error to this Handler's
                 * ErrorManager.  Note that this method retrieves and uses the ErrorManager
                 * without doing a security check.  It can therefore be used in
                 * environments where the caller may be non-privileged.
                 * @param msg    a descriptive string (may be null)
                 * @param ex     an exception (may be null)
                 * @param code   an error code defined in ErrorManager
                 */
                // @ts-ignore
                reportError(msg: java.lang.String | string, ex: java.lang.Exception, code: number /*int*/): void
                /**
                 * Set the log level specifying which message levels will be
                 * logged by this <tt>Handler</tt>.  Message levels lower than this
                 * value will be discarded.
                 * <p>
                 * The intention is to allow developers to turn on voluminous
                 * logging, but to limit the messages that are sent to certain
                 * <tt>Handlers</tt>.
                 * @param newLevel   the new value for the log level
                 * @exception SecurityException  if a security manager exists and if
                 *              the caller does not have <tt>LoggingPermission("control")</tt>.
                 */
                // @ts-ignore
                public setLevel(newLevel: java.util.logging.Level): void
                /**
                 * Get the log level specifying which messages will be
                 * logged by this <tt>Handler</tt>.  Message levels lower
                 * than this level will be discarded.
                 * @return the level of messages being logged.
                 */
                // @ts-ignore
                public getLevel(): java.util.logging.Level
                /**
                 * Check if this <tt>Handler</tt> would actually log a given <tt>LogRecord</tt>.
                 * <p>
                 * This method checks if the <tt>LogRecord</tt> has an appropriate
                 * <tt>Level</tt> and  whether it satisfies any <tt>Filter</tt>.  It also
                 * may make other <tt>Handler</tt> specific checks that might prevent a
                 * handler from logging the <tt>LogRecord</tt>. It will return false if
                 * the <tt>LogRecord</tt> is null.
                 * <p>
                 * @param record  a <tt>LogRecord</tt>
                 * @return true if the <tt>LogRecord</tt> would be logged.
                 */
                // @ts-ignore
                public isLoggable(record: java.util.logging.LogRecord): boolean
            }
        }
    }
}
