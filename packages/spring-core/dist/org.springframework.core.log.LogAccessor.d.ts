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
                    public getLog(): Log
                    /**
                     * Is fatal logging currently enabled?
                     */
                    // @ts-ignore
                    public isFatalEnabled(): boolean
                    /**
                     * Is error logging currently enabled?
                     */
                    // @ts-ignore
                    public isErrorEnabled(): boolean
                    /**
                     * Is warn logging currently enabled?
                     */
                    // @ts-ignore
                    public isWarnEnabled(): boolean
                    /**
                     * Is info logging currently enabled?
                     */
                    // @ts-ignore
                    public isInfoEnabled(): boolean
                    /**
                     * Is debug logging currently enabled?
                     */
                    // @ts-ignore
                    public isDebugEnabled(): boolean
                    /**
                     * Is trace logging currently enabled?
                     */
                    // @ts-ignore
                    public isTraceEnabled(): boolean
                    /**
                     * Log a message with fatal log level.
                     * @param message the message to log
                     */
                    // @ts-ignore
                    public fatal(message: java.lang.CharSequence): void
                    /**
                     * Log an error with fatal log level.
                     * @param cause the exception to log
                     * @param message the message to log
                     */
                    // @ts-ignore
                    public fatal(cause: java.lang.Throwable | Error, message: java.lang.CharSequence): void
                    /**
                     * Log a message with error log level.
                     * @param message the message to log
                     */
                    // @ts-ignore
                    public error(message: java.lang.CharSequence): void
                    /**
                     * Log an error with error log level.
                     * @param cause the exception to log
                     * @param message the message to log
                     */
                    // @ts-ignore
                    public error(cause: java.lang.Throwable | Error, message: java.lang.CharSequence): void
                    /**
                     * Log a message with warn log level.
                     * @param message the message to log
                     */
                    // @ts-ignore
                    public warn(message: java.lang.CharSequence): void
                    /**
                     * Log an error with warn log level.
                     * @param cause the exception to log
                     * @param message the message to log
                     */
                    // @ts-ignore
                    public warn(cause: java.lang.Throwable | Error, message: java.lang.CharSequence): void
                    /**
                     * Log a message with info log level.
                     * @param message the message to log
                     */
                    // @ts-ignore
                    public info(message: java.lang.CharSequence): void
                    /**
                     * Log an error with info log level.
                     * @param cause the exception to log
                     * @param message the message to log
                     */
                    // @ts-ignore
                    public info(cause: java.lang.Throwable | Error, message: java.lang.CharSequence): void
                    /**
                     * Log a message with debug log level.
                     * @param message the message to log
                     */
                    // @ts-ignore
                    public debug(message: java.lang.CharSequence): void
                    /**
                     * Log an error with debug log level.
                     * @param cause the exception to log
                     * @param message the message to log
                     */
                    // @ts-ignore
                    public debug(cause: java.lang.Throwable | Error, message: java.lang.CharSequence): void
                    /**
                     * Log a message with trace log level.
                     * @param message the message to log
                     */
                    // @ts-ignore
                    public trace(message: java.lang.CharSequence): void
                    /**
                     * Log an error with trace log level.
                     * @param cause the exception to log
                     * @param message the message to log
                     */
                    // @ts-ignore
                    public trace(cause: java.lang.Throwable | Error, message: java.lang.CharSequence): void
                    /**
                     * Log a message with fatal log level.
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    public fatal(messageSupplier: java.util.function$.Supplier<any>): void
                    /**
                     * Log an error with fatal log level.
                     * @param cause the exception to log
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    public fatal(cause: java.lang.Throwable | Error, messageSupplier: java.util.function$.Supplier<any>): void
                    /**
                     * Log a message with error log level.
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    public error(messageSupplier: java.util.function$.Supplier<any>): void
                    /**
                     * Log an error with error log level.
                     * @param cause the exception to log
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    public error(cause: java.lang.Throwable | Error, messageSupplier: java.util.function$.Supplier<any>): void
                    /**
                     * Log a message with warn log level.
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    public warn(messageSupplier: java.util.function$.Supplier<any>): void
                    /**
                     * Log an error with warn log level.
                     * @param cause the exception to log
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    public warn(cause: java.lang.Throwable | Error, messageSupplier: java.util.function$.Supplier<any>): void
                    /**
                     * Log a message with info log level.
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    public info(messageSupplier: java.util.function$.Supplier<any>): void
                    /**
                     * Log an error with info log level.
                     * @param cause the exception to log
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    public info(cause: java.lang.Throwable | Error, messageSupplier: java.util.function$.Supplier<any>): void
                    /**
                     * Log a message with debug log level.
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    public debug(messageSupplier: java.util.function$.Supplier<any>): void
                    /**
                     * Log an error with debug log level.
                     * @param cause the exception to log
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    public debug(cause: java.lang.Throwable | Error, messageSupplier: java.util.function$.Supplier<any>): void
                    /**
                     * Log a message with trace log level.
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    public trace(messageSupplier: java.util.function$.Supplier<any>): void
                    /**
                     * Log an error with trace log level.
                     * @param cause the exception to log
                     * @param messageSupplier a lazy supplier for the message to log
                     */
                    // @ts-ignore
                    public trace(cause: java.lang.Throwable | Error, messageSupplier: java.util.function$.Supplier<any>): void
                }
            }
        }
    }
}
