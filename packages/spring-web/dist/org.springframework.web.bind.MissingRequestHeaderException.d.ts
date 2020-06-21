declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                /**
                 * {@link ServletRequestBindingException} subclass that indicates
                 * that a request header expected in the method parameters of an
                 * {@code @RequestMapping} method is not present.
                 * @author Juergen Hoeller
                 * @since 5.1
                 * @see MissingRequestCookieException
                 */
                // @ts-ignore
                class MissingRequestHeaderException extends org.springframework.web.bind.ServletRequestBindingException {
                    /**
                     * Constructor for MissingRequestHeaderException.
                     * @param headerName the name of the missing request header
                     * @param parameter the method parameter
                     */
                    // @ts-ignore
                    constructor(headerName: java.lang.String | string, parameter: MethodParameter)
                    // @ts-ignore
                    public getMessage(): string
                    /**
                     * Return the expected name of the request header.
                     */
                    // @ts-ignore
                    public getHeaderName(): string
                    /**
                     * Return the method parameter bound to the request header.
                     */
                    // @ts-ignore
                    public getParameter(): MethodParameter
                }
            }
        }
    }
}
