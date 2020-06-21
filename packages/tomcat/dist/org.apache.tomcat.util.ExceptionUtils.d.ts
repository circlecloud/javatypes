declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                /**
                 * Utilities for handling Throwables and Exceptions.
                 */
                // @ts-ignore
                class ExceptionUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Checks whether the supplied Throwable is one that needs to be
                     * rethrown and swallows all others.
                     * @param t the Throwable to check
                     */
                    // @ts-ignore
                    public static handleThrowable(t: java.lang.Throwable | Error): void
                    /**
                     * Checks whether the supplied Throwable is an instance of
                     * <code>InvocationTargetException</code> and returns the throwable that is
                     * wrapped by it, if there is any.
                     * @param t the Throwable to check
                     * @return <code>t</code> or <code>t.getCause()</code>
                     */
                    // @ts-ignore
                    public static unwrapInvocationTargetException(t: java.lang.Throwable | Error): Error
                    /**
                     * NO-OP method provided to enable simple pre-loading of this class. Since
                     * the class is used extensively in error handling, it is prudent to
                     * pre-load it to avoid any failure to load this class masking the true
                     * problem during error handling.
                     */
                    // @ts-ignore
                    public static preload(): void
                }
            }
        }
    }
}
