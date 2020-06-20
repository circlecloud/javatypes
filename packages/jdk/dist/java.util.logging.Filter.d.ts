declare namespace java {
    namespace util {
        namespace logging {
            /**
             * A Filter can be used to provide fine grain control over
             * what is logged, beyond the control provided by log levels.
             * <p>
             * Each Logger and each Handler can have a filter associated with it.
             * The Logger or Handler will call the isLoggable method to check
             * if a given LogRecord should be published.  If isLoggable returns
             * false, the LogRecord will be discarded.
             * @since 1.4
             */
            // @ts-ignore
            interface Filter {
                /**
                 * Check if a given log record should be published.
                 * @param record  a LogRecord
                 * @return true if the log record should be published.
                 */
                // @ts-ignore
                isLoggable(record: java.util.logging.LogRecord): boolean
            }
        }
    }
}
