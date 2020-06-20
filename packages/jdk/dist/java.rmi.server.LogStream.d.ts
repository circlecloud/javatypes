declare namespace java {
    namespace rmi {
        namespace server {
            /**
             * <code>LogStream</code> provides a mechanism for logging errors that are
             * of possible interest to those monitoring a system.
             * @author Ann Wollrath (lots of code stolen from Ken Arnold)
             * @since JDK1.1
             * @deprecated no replacement
             */
            // @ts-ignore
            class LogStream extends java.io.PrintStream {
                /**
                 * log level constant (no logging).
                 */
                // @ts-ignore
                readonly SILENT: number /*int*/
                /**
                 * log level constant (brief logging).
                 */
                // @ts-ignore
                readonly BRIEF: number /*int*/
                /**
                 * log level constant (verbose logging).
                 */
                // @ts-ignore
                readonly VERBOSE: number /*int*/
                /**
                 * Return the LogStream identified by the given name.  If
                 * a log corresponding to "name" does not exist, a log using
                 * the default stream is created.
                 * @param name name identifying the desired LogStream
                 * @return log associated with given name
                 * @since JDK1.1
                 * @deprecated no replacement
                 */
                // @ts-ignore
                log(name: string): java.rmi.server.LogStream
                /**
                 * Return the current default stream for new logs.
                 * @return default log stream
                 * @see #setDefaultStream
                 * @since JDK1.1
                 * @deprecated no replacement
                 */
                // @ts-ignore
                getDefaultStream(): java.io.PrintStream
                /**
                 * Set the default stream for new logs.
                 * @param newDefault new default log stream
                 * @see #getDefaultStream
                 * @since JDK1.1
                 * @deprecated no replacement
                 */
                // @ts-ignore
                setDefaultStream(newDefault: java.io.PrintStream): void
                /**
                 * Return the current stream to which output from this log is sent.
                 * @return output stream for this log
                 * @see #setOutputStream
                 * @since JDK1.1
                 * @deprecated no replacement
                 */
                // @ts-ignore
                getOutputStream(): java.io.OutputStream
                /**
                 * Set the stream to which output from this log is sent.
                 * @param out new output stream for this log
                 * @see #getOutputStream
                 * @since JDK1.1
                 * @deprecated no replacement
                 */
                // @ts-ignore
                setOutputStream(out: java.io.OutputStream): void
                /**
                 * Write a byte of data to the stream.  If it is not a newline, then
                 * the byte is appended to the internal buffer.  If it is a newline,
                 * then the currently buffered line is sent to the log's output
                 * stream, prefixed with the appropriate logging information.
                 * @since JDK1.1
                 * @deprecated no replacement
                 */
                // @ts-ignore
                write(b: number /*int*/): void
                /**
                 * Write a subarray of bytes.  Pass each through write byte method.
                 * @since JDK1.1
                 * @deprecated no replacement
                 */
                // @ts-ignore
                write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                /**
                 * Return log name as string representation.
                 * @return log name
                 * @since JDK1.1
                 * @deprecated no replacement
                 */
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Convert a string name of a logging level to its internal
                 * integer representation.
                 * @param s name of logging level (e.g., 'SILENT', 'BRIEF', 'VERBOSE')
                 * @return corresponding integer log level
                 * @since JDK1.1
                 * @deprecated no replacement
                 */
                // @ts-ignore
                parseLevel(s: string): int
            }
        }
    }
}
