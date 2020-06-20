declare namespace org {
    namespace springframework {
        namespace core {
            namespace log {
                /**
                 * Utility methods for formatting and logging messages.
                 * <p>Mainly for internal use within the framework with Apache Commons Logging,
                 * typically in the form of the {@code spring-jcl} bridge but also compatible
                 * with other Commons Logging bridges.
                 * @author Rossen Stoyanchev
                 * @author Juergen Hoeller
                 * @since 5.1
                 */
                // @ts-ignore
                class LogFormatUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Format the given value via {@code toString()}, quoting it if it is a
                     * {@link CharSequence}, and possibly truncating at 100 if limitLength is
                     * set to true.
                     * @param value the value to format
                     * @param limitLength whether to truncate large formatted values (over 100)
                     * @return the formatted value
                     */
                    // @ts-ignore
                    formatValue(value: any, limitLength: boolean): java.lang.String
                    /**
                     * Use this to log a message with different levels of detail (or different
                     * messages) at TRACE vs DEBUG log levels. Effectively, a substitute for:
                     * <pre class="code">
                     * if (logger.isDebugEnabled()) {
                     * String str = logger.isTraceEnabled() ? "..." : "...";
                     * if (logger.isTraceEnabled()) {
                     * logger.trace(str);
                     * }
                     * else {
                     * logger.debug(str);
                     * }
                     * }
                     * </pre>
                     * @param logger the logger to use to log the message
                     * @param messageFactory function that accepts a boolean set to the value
                     *  of {#link Log#isTraceEnabled()}
                     */
                    // @ts-ignore
                    traceDebug(logger: Log, messageFactory: java.util.function.Function<java.lang.Boolean, java.lang.String> | java.util.function$.Function<java.lang.Boolean, java.lang.String>): void
                }
            }
        }
    }
}
