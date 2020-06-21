declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                /**
                 * {@link ServletRequestBindingException} subclass that indicates a missing parameter.
                 * @author Juergen Hoeller
                 * @since 2.0.2
                 */
                // @ts-ignore
                class MissingServletRequestParameterException extends org.springframework.web.bind.ServletRequestBindingException {
                    /**
                     * Constructor for MissingServletRequestParameterException.
                     * @param parameterName the name of the missing parameter
                     * @param parameterType the expected type of the missing parameter
                     */
                    // @ts-ignore
                    constructor(parameterName: java.lang.String | string, parameterType: java.lang.String | string)
                    // @ts-ignore
                    public getMessage(): string
                    /**
                     * Return the name of the offending parameter.
                     */
                    // @ts-ignore
                    public getParameterName(): string
                    /**
                     * Return the expected type of the offending parameter.
                     */
                    // @ts-ignore
                    public getParameterType(): string
                }
            }
        }
    }
}
