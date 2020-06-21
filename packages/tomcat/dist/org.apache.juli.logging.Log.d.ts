declare namespace org {
    namespace apache {
        namespace juli {
            namespace logging {
                /**
                 * <p>A simple logging interface abstracting logging APIs.  In order to be
                 * instantiated successfully by {@link LogFactory}, classes that implement
                 * this interface must have a constructor that takes a single String
                 * parameter representing the "name" of this Log.</p>
                 * <p> The six logging levels used by <code>Log</code> are (in order):</p>
                 * <ol>
                 * <li>trace (the least serious)</li>
                 * <li>debug</li>
                 * <li>info</li>
                 * <li>warn</li>
                 * <li>error</li>
                 * <li>fatal (the most serious)</li>
                 * </ol>
                 * <p>The mapping of these log levels to the concepts used by the underlying
                 * logging system is implementation dependent.
                 * The implementation should ensure, though, that this ordering behaves
                 * as expected.</p>
                 * <p>Performance is often a logging concern.
                 * By examining the appropriate property,
                 * a component can avoid expensive operations (producing information
                 * to be logged).</p>
                 * <p> For example,
                 * <code>
                 * if (log.isDebugEnabled()) {
                 * ... do something expensive ...
                 * log.debug(theResult);
                 * }
                 * </code>
                 * </p>
                 * <p>Configuration of the underlying logging system will generally be done
                 * external to the Logging APIs, through whatever mechanism is supported by
                 * that system.</p>
                 * @author <a href="mailto:sanders#apache.org">Scott Sanders</a>
                 * @author Rod Waldhoff
                 */
                // @ts-ignore
                interface Log {
                    /**
                     * <p> Is debug logging currently enabled? </p>
                     * <p> Call this method to prevent having to perform expensive operations
                     * (for example, <code>String</code> concatenation)
                     * when the log level is more than debug. </p>
                     * @return <code>true</code> if debug level logging is enabled, otherwise
                     *          <code>false</code>
                     */
                    // @ts-ignore
                    isDebugEnabled(): boolean
                    /**
                     * <p> Is error logging currently enabled? </p>
                     * <p> Call this method to prevent having to perform expensive operations
                     * (for example, <code>String</code> concatenation)
                     * when the log level is more than error. </p>
                     * @return <code>true</code> if error level logging is enabled, otherwise
                     *          <code>false</code>
                     */
                    // @ts-ignore
                    isErrorEnabled(): boolean
                    /**
                     * <p> Is fatal logging currently enabled? </p>
                     * <p> Call this method to prevent having to perform expensive operations
                     * (for example, <code>String</code> concatenation)
                     * when the log level is more than fatal. </p>
                     * @return <code>true</code> if fatal level logging is enabled, otherwise
                     *          <code>false</code>
                     */
                    // @ts-ignore
                    isFatalEnabled(): boolean
                    /**
                     * <p> Is info logging currently enabled? </p>
                     * <p> Call this method to prevent having to perform expensive operations
                     * (for example, <code>String</code> concatenation)
                     * when the log level is more than info. </p>
                     * @return <code>true</code> if info level logging is enabled, otherwise
                     *          <code>false</code>
                     */
                    // @ts-ignore
                    isInfoEnabled(): boolean
                    /**
                     * <p> Is trace logging currently enabled? </p>
                     * <p> Call this method to prevent having to perform expensive operations
                     * (for example, <code>String</code> concatenation)
                     * when the log level is more than trace. </p>
                     * @return <code>true</code> if trace level logging is enabled, otherwise
                     *          <code>false</code>
                     */
                    // @ts-ignore
                    isTraceEnabled(): boolean
                    /**
                     * <p> Is warn logging currently enabled? </p>
                     * <p> Call this method to prevent having to perform expensive operations
                     * (for example, <code>String</code> concatenation)
                     * when the log level is more than warn. </p>
                     * @return <code>true</code> if warn level logging is enabled, otherwise
                     *          <code>false</code>
                     */
                    // @ts-ignore
                    isWarnEnabled(): boolean
                    /**
                     * <p> Log a message with trace log level. </p>
                     * @param message log this message
                     */
                    // @ts-ignore
                    trace(message: java.lang.Object | any): void
                    /**
                     * <p> Log an error with trace log level. </p>
                     * @param message log this message
                     * @param t log this cause
                     */
                    // @ts-ignore
                    trace(message: java.lang.Object | any, t: java.lang.Throwable | Error): void
                    /**
                     * <p> Log a message with debug log level. </p>
                     * @param message log this message
                     */
                    // @ts-ignore
                    debug(message: java.lang.Object | any): void
                    /**
                     * <p> Log an error with debug log level. </p>
                     * @param message log this message
                     * @param t log this cause
                     */
                    // @ts-ignore
                    debug(message: java.lang.Object | any, t: java.lang.Throwable | Error): void
                    /**
                     * <p> Log a message with info log level. </p>
                     * @param message log this message
                     */
                    // @ts-ignore
                    info(message: java.lang.Object | any): void
                    /**
                     * <p> Log an error with info log level. </p>
                     * @param message log this message
                     * @param t log this cause
                     */
                    // @ts-ignore
                    info(message: java.lang.Object | any, t: java.lang.Throwable | Error): void
                    /**
                     * <p> Log a message with warn log level. </p>
                     * @param message log this message
                     */
                    // @ts-ignore
                    warn(message: java.lang.Object | any): void
                    /**
                     * <p> Log an error with warn log level. </p>
                     * @param message log this message
                     * @param t log this cause
                     */
                    // @ts-ignore
                    warn(message: java.lang.Object | any, t: java.lang.Throwable | Error): void
                    /**
                     * <p> Log a message with error log level. </p>
                     * @param message log this message
                     */
                    // @ts-ignore
                    error(message: java.lang.Object | any): void
                    /**
                     * <p> Log an error with error log level. </p>
                     * @param message log this message
                     * @param t log this cause
                     */
                    // @ts-ignore
                    error(message: java.lang.Object | any, t: java.lang.Throwable | Error): void
                    /**
                     * <p> Log a message with fatal log level. </p>
                     * @param message log this message
                     */
                    // @ts-ignore
                    fatal(message: java.lang.Object | any): void
                    /**
                     * <p> Log an error with fatal log level. </p>
                     * @param message log this message
                     * @param t log this cause
                     */
                    // @ts-ignore
                    fatal(message: java.lang.Object | any, t: java.lang.Throwable | Error): void
                }
            }
        }
    }
}
