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
                    constructor(parameterName: string, parameterType: string)
                    // @ts-ignore
                    getMessage(): java.lang.String
                    /**
                     * Return the name of the offending parameter.
                     */
                    // @ts-ignore
                    getParameterName(): java.lang.String
                    /**
                     * Return the expected type of the offending parameter.
                     */
                    // @ts-ignore
                    getParameterType(): java.lang.String
                }
            }
        }
    }
}
