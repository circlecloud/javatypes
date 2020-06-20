declare namespace org {
    namespace springframework {
        namespace core {
            namespace log {
                /**
                 * A convenient accessor for Commons Logging, providing not only
                 * {@code CharSequence} based log methods but also {@code Supplier}
                 * based variants for use with Java 8 lambda expressions.
                 * @author Juergen Hoeller
                 * @since 5.2
                 */
                // @ts-ignore
                class LogAccessor extends java.lang.Object {
                    /**
                     * Create a new accessor for the given Commons Log.
                     * @see LogFactory#getLog(Class)
                     * @see LogFactory#getLog(String)
                     */
                    // @ts-ignore
                    constructor(log: Log)
                    /**
                     * Return the target Commons Log.
                     */
                    // @ts-ignore
                    getLog(): Log
                    /**
                     * Is fatal logging currently enabled?
                     */
                    // @ts-ignore
                    isFatalEnabled(): boolean
                    /**
                     * Is error logging currently enabled?
                     */
                    // @ts-ignore
                    isErrorEnabled(): boolean
                    /**
                     * Is warn logging currently enabled?
                     */
                    // @ts-ignore
                    isWarnEnabled(): boolean
                    /**
                     * Is info logging currently enabled?
                     */
                    // @ts-ignore
                    isInfoEnabled(): boolean
                    /**
                     * Is debug logging currently enabled?
                     */
                    // @ts-ignore
                    isDebugEnabled(): boolean
                    /**
                     * Is trace logging currently enabled?
                     */
                    // @ts-ignore
                    isTraceEnabled(): boolean
                    /**
                     * Log a message with fatal log level.
                     * @param message the message to log
                     */
                    // @ts-ignore
                    fatal(message: java.lang.CharSequence): void
                    /**
                     * Log an error with fatal log level.
                     * @param cause the exception to log
                     * @param message the message to log
                     */
                    // @ts-ignore
                    fatal(cause: Error, message: java.lang.CharSequence): void
                    /**
                     * Log a message with error log level.
                     * @param message the message to log
                     */
                    // @ts-ignore
                    error(message: java.lang.CharSequence): void
                    /**
                     * Log an error with error log level.
                     * @param cause the exception to log
                     * @param message the message to log
                     */
                    // @ts-ignore
                    error(cause: Error, message: java.lang.CharSequence): void
                    /**
                     * Log a message with warn log level.
                     * @param message the message to log
                     */
                    // @ts-ignore
                    warn(message: java.lang.CharSequence): void
                    /**
                     * Log an error with warn log level.
                     * @param cause the exception to log
                     * @param message the message to log
                     */
                    // @ts-ignore
                    warn(cause: Error, message: java.lang.CharSequence): void
                    /**
                     * Log a message with info log level.
                     * @param message the message to log
                     */
                    // @ts-ignore
                    info(message: java.lang.CharSequence): void
                    /**
                     * Log an error with info log level.
                     * @param cause the exception to log
                     * @param message the message to log
                     */
                    // @ts-ignore
                    info(cause: Error, message: java.lang.CharSequence): void
                    /**
                     * Log a message with debug log level.
                     * @param message the message to log
                     */
                    // @ts-ignore
                    debug(message: java.lang.CharSequence): void
                    /**
                     * Log an error with debug log level.
                     * @param cause the exception to log
                     * @param message the message to log
                     */
                    // @ts-ignore
                    debug(cause: Error, message: java.lang.CharSequence): void
                    /**
                     * Log a message with trace log level.
                     * @param message the message to log
                     */
                    // @ts-ignore
                    trace(message: java.lang.CharSequence): void
                    /**
                     * Log an error with trace log level.
                     * @param cause the exception to log
                     * @param message the message to log
                     */
                    // @ts-ignore
                    trace(cause: Error, message: java.lang.CharSequence): void
                    /**
                     * Log a message with fatal log level.
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    fatal(messageSupplier: java.util.function.Supplier<java.lang.CharSequence> | java.util.function$.Supplier<java.lang.CharSequence>): void
                    /**
                     * Log an error with fatal log level.
                     * @param cause the exception to log
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    fatal(cause: Error, messageSupplier: java.util.function.Supplier<java.lang.CharSequence> | java.util.function$.Supplier<java.lang.CharSequence>): void
                    /**
                     * Log a message with error log level.
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    error(messageSupplier: java.util.function.Supplier<java.lang.CharSequence> | java.util.function$.Supplier<java.lang.CharSequence>): void
                    /**
                     * Log an error with error log level.
                     * @param cause the exception to log
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    error(cause: Error, messageSupplier: java.util.function.Supplier<java.lang.CharSequence> | java.util.function$.Supplier<java.lang.CharSequence>): void
                    /**
                     * Log a message with warn log level.
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    warn(messageSupplier: java.util.function.Supplier<java.lang.CharSequence> | java.util.function$.Supplier<java.lang.CharSequence>): void
                    /**
                     * Log an error with warn log level.
                     * @param cause the exception to log
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    warn(cause: Error, messageSupplier: java.util.function.Supplier<java.lang.CharSequence> | java.util.function$.Supplier<java.lang.CharSequence>): void
                    /**
                     * Log a message with info log level.
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    info(messageSupplier: java.util.function.Supplier<java.lang.CharSequence> | java.util.function$.Supplier<java.lang.CharSequence>): void
                    /**
                     * Log an error with info log level.
                     * @param cause the exception to log
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    info(cause: Error, messageSupplier: java.util.function.Supplier<java.lang.CharSequence> | java.util.function$.Supplier<java.lang.CharSequence>): void
                    /**
                     * Log a message with debug log level.
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    debug(messageSupplier: java.util.function.Supplier<java.lang.CharSequence> | java.util.function$.Supplier<java.lang.CharSequence>): void
                    /**
                     * Log an error with debug log level.
                     * @param cause the exception to log
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    debug(cause: Error, messageSupplier: java.util.function.Supplier<java.lang.CharSequence> | java.util.function$.Supplier<java.lang.CharSequence>): void
                    /**
                     * Log a message with trace log level.
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    trace(messageSupplier: java.util.function.Supplier<java.lang.CharSequence> | java.util.function$.Supplier<java.lang.CharSequence>): void
                    /**
                     * Log an error with trace log level.
                     * @param cause the exception to log
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    trace(cause: Error, messageSupplier: java.util.function.Supplier<java.lang.CharSequence> | java.util.function$.Supplier<java.lang.CharSequence>): void
                }
            }
        }
    }
}
