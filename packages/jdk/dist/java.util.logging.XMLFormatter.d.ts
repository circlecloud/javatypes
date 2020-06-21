declare namespace java {
    namespace util {
        namespace logging {
            /**
             * Format a LogRecord into a standard XML format.
             * <p>
             * The DTD specification is provided as Appendix A to the
             * Java Logging APIs specification.
             * <p>
             * The XMLFormatter can be used with arbitrary character encodings,
             * but it is recommended that it normally be used with UTF-8.  The
             * character encoding can be set on the output Handler.
             * @since 1.4
             */
            // @ts-ignore
            class XMLFormatter extends java.util.logging.Formatter {
                // @ts-ignore
                constructor()
                /**
                 * Format the given message to XML.
                 * <p>
                 * This method can be overridden in a subclass.
                 * It is recommended to use the {@link Formatter#formatMessage}
                 * convenience method to localize and format the message field.
                 * @param record the log record to be formatted.
                 * @return a formatted log record
                 */
                // @ts-ignore
                public format(record: java.util.logging.LogRecord): string
                /**
                 * Return the header string for a set of XML formatted records.
                 * @param h  The target handler (can be null)
                 * @return a valid XML string
                 */
                // @ts-ignore
                public getHead(h: java.util.logging.Handler): string
                /**
                 * Return the tail string for a set of XML formatted records.
                 * @param h  The target handler (can be null)
                 * @return a valid XML string
                 */
                // @ts-ignore
                public getTail(h: java.util.logging.Handler): string
            }
        }
    }
}
