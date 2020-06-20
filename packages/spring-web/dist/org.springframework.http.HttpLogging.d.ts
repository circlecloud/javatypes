declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * Holds the shared logger named "org.springframework.web.HttpLogging" for HTTP
             * related logging when "org.springframework.http" is not enabled but
             * "org.springframework.web" is.
             * <p>That means "org.springframework.web" enables all web logging including
             * from lower level packages such as "org.springframework.http" and modules
             * such as codecs from {@literal "spring-core"} when those are wrapped with
             * {@link org.springframework.http.codec.EncoderHttpMessageWriter EncoderHttpMessageWriter} or
             * {@link org.springframework.http.codec.DecoderHttpMessageReader DecoderHttpMessageReader}.
             * <p>To see logging from the primary class loggers simply enable logging for
             * "org.springframework.http" and "org.springframework.codec".
             * @author Rossen Stoyanchev
             * @since 5.1
             * @see LogDelegateFactory
             */
            // @ts-ignore
            class HttpLogging extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Create a primary logger for the given class and wrap it with a composite
                 * that delegates to it or to the fallback logger
                 * "org.springframework.web.HttpLogging", if the primary is not enabled.
                 * @param primaryLoggerClass the class for the name of the primary logger
                 * @return the resulting composite logger
                 */
                // @ts-ignore
                forLogName(primaryLoggerClass: java.lang.Class<any>): Log
                /**
                 * Wrap the given primary logger with a composite logger that delegates to
                 * it or to the fallback logger "org.springframework.web.HttpLogging",
                 * if the primary is not enabled.
                 * @param primaryLogger the primary logger to use
                 * @return the resulting composite logger
                 */
                // @ts-ignore
                forLog(primaryLogger: Log): Log
            }
        }
    }
}
