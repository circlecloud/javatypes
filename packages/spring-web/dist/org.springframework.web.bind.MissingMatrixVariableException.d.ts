declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                /**
                 * {@link ServletRequestBindingException} subclass that indicates that a matrix
                 * variable expected in the method parameters of an {@code @RequestMapping}
                 * method is not present among the matrix variables extracted from the URL.
                 * @author Juergen Hoeller
                 * @since 5.1
                 * @see MissingPathVariableException
                 */
                // @ts-ignore
                class MissingMatrixVariableException extends org.springframework.web.bind.ServletRequestBindingException {
                    /**
                     * Constructor for MissingMatrixVariableException.
                     * @param variableName the name of the missing matrix variable
                     * @param parameter the method parameter
                     */
                    // @ts-ignore
                    constructor(variableName: string, parameter: MethodParameter)
                    // @ts-ignore
                    getMessage(): java.lang.String
                    /**
                     * Return the expected name of the matrix variable.
                     */
                    // @ts-ignore
                    getVariableName(): java.lang.String
                    /**
                     * Return the method parameter bound to the matrix variable.
                     */
                    // @ts-ignore
                    getParameter(): MethodParameter
                }
            }
        }
    }
}
