declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * Subclass of {@link ServletException} that properly handles a root cause in terms
                 * of message and stacktrace, just like NestedChecked/RuntimeException does.
                 * <p>Note that the plain ServletException doesn't expose its root cause at all,
                 * neither in the exception message nor in printed stack traces! While this might
                 * be fixed in later Servlet API variants (which even differ per vendor for the
                 * same API version), it is not reliably available on Servlet 2.4 (the minimum
                 * version required by Spring 3.x), which is why we need to do it ourselves.
                 * <p>The similarity between this class and the NestedChecked/RuntimeException
                 * class is unavoidable, as this class needs to derive from ServletException.
                 * @author Juergen Hoeller
                 * @since 1.2.5
                 * @see #getMessage
                 * @see #printStackTrace
                 * @see org.springframework.core.NestedCheckedException
                 * @see org.springframework.core.NestedRuntimeException
                 */
                // @ts-ignore
                class NestedServletException extends ServletException {
                    /**
                     * Construct a {@code NestedServletException} with the specified detail message.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: string)
                    /**
                     * Construct a {@code NestedServletException} with the specified detail message
                     * and nested exception.
                     * @param msg the detail message
                     * @param cause the nested exception
                     */
                    // @ts-ignore
                    constructor(msg: string, cause: Error)
                    /**
                     * Return the detail message, including the message from the nested exception
                     * if there is one.
                     */
                    // @ts-ignore
                    getMessage(): java.lang.String
                }
            }
        }
    }
}
