declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                /**
                 * {@link ServletRequestBindingException} subclass that indicates that a path
                 * variable expected in the method parameters of an {@code @RequestMapping}
                 * method is not present among the URI variables extracted from the URL.
                 * Typically that means the URI template does not match the path variable name
                 * declared on the method parameter.
                 * @author Rossen Stoyanchev
                 * @since 4.2
                 * @see MissingMatrixVariableException
                 */
                // @ts-ignore
                class MissingPathVariableException extends org.springframework.web.bind.ServletRequestBindingException {
                    /**
                     * Constructor for MissingPathVariableException.
                     * @param variableName the name of the missing path variable
                     * @param parameter the method parameter
                     */
                    // @ts-ignore
                    constructor(variableName: string, parameter: MethodParameter)
                    // @ts-ignore
                    getMessage(): java.lang.String
                    /**
                     * Return the expected name of the path variable.
                     */
                    // @ts-ignore
                    getVariableName(): java.lang.String
                    /**
                     * Return the method parameter bound to the path variable.
                     */
                    // @ts-ignore
                    getParameter(): MethodParameter
                }
            }
        }
    }
}
