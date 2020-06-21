declare namespace org {
    namespace apache {
        namespace juli {
            /**
             * Provides same information as default log format but on a single line to make
             * it easier to grep the logs. The only exception is stacktraces which are
             * always preceded by whitespace to make it simple to skip them.
             */
            // @ts-ignore
            class OneLineFormatter extends java.util.logging.Formatter {
                // @ts-ignore
                constructor()
                /**
                 * Specify the time format to use for time stamps in log messages.
                 * @param timeFormat The format to use using the
                 *                    {#link java.text.SimpleDateFormat} syntax
                 */
                // @ts-ignore
                public setTimeFormat(timeFormat: java.lang.String | string): void
                /**
                 * Obtain the format currently being used for time stamps in log messages.
                 * @return The current format in {#link java.text.SimpleDateFormat} syntax
                 */
                // @ts-ignore
                public getTimeFormat(): string
                // @ts-ignore
                public format(record: java.util.logging.LogRecord): string
                // @ts-ignore
                addTimestamp(buf: java.lang.StringBuilder, timestamp: number /*long*/): void
            }
        }
    }
}
