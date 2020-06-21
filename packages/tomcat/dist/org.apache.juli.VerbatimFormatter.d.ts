declare namespace org {
    namespace apache {
        namespace juli {
            /**
             * Outputs the just the log message with no additional elements. Stack traces
             * are not logged. Log messages are separated by
             * <code>System.lineSeparator()</code>. This is intended for use
             * by access logs and the like that need complete control over the output
             * format.
             */
            // @ts-ignore
            class VerbatimFormatter extends java.util.logging.Formatter {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public format(record: java.util.logging.LogRecord): string
            }
        }
    }
}
