declare namespace org {
    namespace springframework {
        namespace core {
            namespace log {
                /**
                 * A simple log message type for use with Commons Logging, allowing
                 * for convenient lazy resolution of a given {@link Supplier} instance
                 * (typically bound to a Java 8 lambda expression) or a printf-style
                 * format string ({@link String#format}) in its {@link #toString()}.
                 * @author Juergen Hoeller
                 * @since 5.2
                 * @see #of(Supplier)
                 * @see #format(String, Object)
                 * @see #format(String, Object...)
                 * @see org.apache.commons.logging.Log#fatal(Object)
                 * @see org.apache.commons.logging.Log#error(Object)
                 * @see org.apache.commons.logging.Log#warn(Object)
                 * @see org.apache.commons.logging.Log#info(Object)
                 * @see org.apache.commons.logging.Log#debug(Object)
                 * @see org.apache.commons.logging.Log#trace(Object)
                 */
                // @ts-ignore
                abstract class LogMessage extends java.lang.Object implements java.lang.CharSequence {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public length(): number /*int*/
                    // @ts-ignore
                    public charAt(index: number /*int*/): string
                    // @ts-ignore
                    public subSequence(start: number /*int*/, end: number /*int*/): java.lang.CharSequence
                    /**
                     * This will be called by the logging provider, potentially once
                     * per log target (therefore locally caching the result here).
                     */
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Build a lazily resolving message from the given supplier.
                     * @param supplier the supplier (typically bound to a Java 8 lambda expression)
                     * @see #toString()
                     */
                    // @ts-ignore
                    public static of(supplier: java.util.function$.Supplier<any>): org.springframework.core.log.LogMessage
                    /**
                     * Build a lazily formatted message from the given format string and argument.
                     * @param format the format string (following {#link String#format} rules)
                     * @param arg1 the argument
                     * @see String#format(String, Object...)
                     */
                    // @ts-ignore
                    public static format(format: java.lang.String | string, arg1: java.lang.Object | any): org.springframework.core.log.LogMessage
                    /**
                     * Build a lazily formatted message from the given format string and arguments.
                     * @param format the format string (following {#link String#format} rules)
                     * @param arg1 the first argument
                     * @param arg2 the second argument
                     * @see String#format(String, Object...)
                     */
                    // @ts-ignore
                    public static format(format: java.lang.String | string, arg1: java.lang.Object | any, arg2: java.lang.Object | any): org.springframework.core.log.LogMessage
                    /**
                     * Build a lazily formatted message from the given format string and arguments.
                     * @param format the format string (following {#link String#format} rules)
                     * @param arg1 the first argument
                     * @param arg2 the second argument
                     * @param arg3 the third argument
                     * @see String#format(String, Object...)
                     */
                    // @ts-ignore
                    public static format(format: java.lang.String | string, arg1: java.lang.Object | any, arg2: java.lang.Object | any, arg3: java.lang.Object | any): org.springframework.core.log.LogMessage
                    /**
                     * Build a lazily formatted message from the given format string and arguments.
                     * @param format the format string (following {#link String#format} rules)
                     * @param arg1 the first argument
                     * @param arg2 the second argument
                     * @param arg3 the third argument
                     * @param arg4 the fourth argument
                     * @see String#format(String, Object...)
                     */
                    // @ts-ignore
                    public static format(format: java.lang.String | string, arg1: java.lang.Object | any, arg2: java.lang.Object | any, arg3: java.lang.Object | any, arg4: java.lang.Object | any): org.springframework.core.log.LogMessage
                    /**
                     * Build a lazily formatted message from the given format string and varargs.
                     * @param format the format string (following {#link String#format} rules)
                     * @param args the varargs array (costly, prefer individual arguments)
                     * @see String#format(String, Object...)
                     */
                    // @ts-ignore
                    public static format(format: java.lang.String | string, ...args: java.lang.Object[] | any[]): org.springframework.core.log.LogMessage
                }
            }
        }
    }
}
