declare namespace org {
    namespace apache {
        namespace juli {
            /**
             * A more compact formatter.
             * Equivalent log4j config:
             * <pre>
             * log4j.rootCategory=WARN, A1
             * log4j.appender.A1=org.apache.log4j.ConsoleAppender
             * log4j.appender.A1.layout=org.apache.log4j.PatternLayout
             * log4j.appender.A1.Target=System.err
             * log4j.appender.A1.layout.ConversionPattern=%r %-15.15c{2} %-1.1p %m %n
             * </pre>
             * Example:
             * 1130122891846 Http11BaseProtocol I Initializing Coyote HTTP/1.1 on http-8800
             * @author Costin Manolache
             */
            // @ts-ignore
            class JdkLoggerFormatter extends java.util.logging.Formatter {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static readonly LOG_LEVEL_TRACE: number /*int*/
                // @ts-ignore
                public static readonly LOG_LEVEL_DEBUG: number /*int*/
                // @ts-ignore
                public static readonly LOG_LEVEL_INFO: number /*int*/
                // @ts-ignore
                public static readonly LOG_LEVEL_WARN: number /*int*/
                // @ts-ignore
                public static readonly LOG_LEVEL_ERROR: number /*int*/
                // @ts-ignore
                public static readonly LOG_LEVEL_FATAL: number /*int*/
                // @ts-ignore
                public format(record: java.util.logging.LogRecord): string
            }
        }
    }
}
