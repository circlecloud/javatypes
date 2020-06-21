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
                    constructor(cookieName: java.lang.String | string, parameter: MethodParameter)
                    // @ts-ignore
                    public getMessage(): string
                    /**
                     * Return the expected name of the request cookie.
                     */
                    // @ts-ignore
                    public getCookieName(): string
                    /**
                     * Return the method parameter bound to the request cookie.
                     */
                    // @ts-ignore
                    public getParameter(): MethodParameter
                }
            }
        }
    }
}
