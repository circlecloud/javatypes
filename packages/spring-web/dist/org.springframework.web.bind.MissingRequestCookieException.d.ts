declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                /**
                 * {@link ServletRequestBindingException} subclass that indicates
                 * that a request cookie expected in the method parameters of an
                 * {@code @RequestMapping} method is not present.
                 * @author Juergen Hoeller
                 * @since 5.1
                 * @see MissingRequestHeaderException
                 */
                // @ts-ignore
                class MissingRequestCookieException extends org.springframework.web.bind.ServletRequestBindingException {
                    /**
                     * Constructor for MissingRequestCookieException.
                     * @param cookieName the name of the missing request cookie
                     * @param parameter the method parameter
                     */
                    // @ts-ignore
                    constructor(cookieName: string, parameter: MethodParameter)
                    // @ts-ignore
                    getMessage(): java.lang.String
                    /**
                     * Return the expected name of the request cookie.
                     */
                    // @ts-ignore
                    getCookieName(): java.lang.String
                    /**
                     * Return the method parameter bound to the request cookie.
                     */
                    // @ts-ignore
                    getParameter(): MethodParameter
                }
            }
        }
    }
}
