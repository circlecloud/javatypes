declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                /**
                 * Fatal binding exception, thrown when we want to
                 * treat binding exceptions as unrecoverable.
                 * <p>Extends ServletException for convenient throwing in any Servlet resource
                 * (such as a Filter), and NestedServletException for proper root cause handling
                 * (as the plain ServletException doesn't expose its root cause at all).
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 */
                // @ts-ignore
                class ServletRequestBindingException extends org.springframework.web.util.NestedServletException {
                    /**
                     * Constructor for ServletRequestBindingException.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string)
                    /**
                     * Constructor for ServletRequestBindingException.
                     * @param msg the detail message
                     * @param cause the root cause
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                }
            }
        }
    }
}
