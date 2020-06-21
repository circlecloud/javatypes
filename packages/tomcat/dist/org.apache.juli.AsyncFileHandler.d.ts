declare namespace org {
    namespace apache {
        namespace juli {
            /**
             * A {@link FileHandler} implementation that uses a queue of log entries.
             * <p>Configuration properties are inherited from the {@link FileHandler}
             * class. This class does not add its own configuration properties for the
             * logging configuration, but relies on the following system properties
             * instead:</p>
             * <ul>
             * <li><code>org.apache.juli.AsyncOverflowDropType</code>
             * Default value: <code>1</code></li>
             * <li><code>org.apache.juli.AsyncMaxRecordCount</code>
             * Default value: <code>10000</code></li>
             * <li><code>org.apache.juli.AsyncLoggerPollInterval</code>
             * Default value: <code>1000</code></li>
             * </ul>
             * <p>See the System Properties page in the configuration reference of Tomcat.</p>
             */
            // @ts-ignore
            class AsyncFileHandler extends org.apache.juli.FileHandler {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(directory: java.lang.String | string, prefix: java.lang.String | string, suffix: java.lang.String | string)
                // @ts-ignore
                constructor(directory: java.lang.String | string, prefix: java.lang.String | string, suffix: java.lang.String | string, maxDays: java.lang.Integer | number)
                // @ts-ignore
                public static readonly OVERFLOW_DROP_LAST: number /*int*/
                // @ts-ignore
                public static readonly OVERFLOW_DROP_FIRST: number /*int*/
                // @ts-ignore
                public static readonly OVERFLOW_DROP_FLUSH: number /*int*/
                // @ts-ignore
                public static readonly OVERFLOW_DROP_CURRENT: number /*int*/
                // @ts-ignore
                public static readonly DEFAULT_OVERFLOW_DROP_TYPE: number /*int*/
                // @ts-ignore
                public static readonly DEFAULT_MAX_RECORDS: number /*int*/
                // @ts-ignore
                public static readonly DEFAULT_LOGGER_SLEEP_TIME: number /*int*/
                // @ts-ignore
                public static readonly OVERFLOW_DROP_TYPE: number /*int*/
                // @ts-ignore
                public static readonly MAX_RECORDS: number /*int*/
                // @ts-ignore
                public static readonly LOGGER_SLEEP_TIME: number /*int*/
                // @ts-ignore
                static readonly queue: java.util.concurrent.LinkedBlockingDeque<org.apache.juli.AsyncFileHandler.LogEntry>
                // @ts-ignore
                static readonly logger: org.apache.juli.AsyncFileHandler.LoggerThread
                // @ts-ignore
                closed: boolean
                // @ts-ignore
                public close(): void
                // @ts-ignore
                open(): void
                // @ts-ignore
                public publish(record: java.util.logging.LogRecord): void
                // @ts-ignore
                publishInternal(record: java.util.logging.LogRecord): void
            }
        }
    }
}
