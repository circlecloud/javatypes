declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                /**
                 * Exception to be thrown when validation on an argument annotated with {@code @Valid} fails.
                 * @author Rossen Stoyanchev
                 * @since 3.1
                 */
                // @ts-ignore
                class MethodArgumentNotValidException extends java.lang.Exception {
                    /**
                     * Constructor for {@link MethodArgumentNotValidException}.
                     * @param parameter the parameter that failed validation
                     * @param bindingResult the results of the validation
                     */
                    // @ts-ignore
                    constructor(parameter: MethodParameter, bindingResult: BindingResult)
                    /**
                     * Return the method parameter that failed validation.
                     */
                    // @ts-ignore
                    getParameter(): MethodParameter
                    /**
                     * Return the results of the failed validation.
                     */
                    // @ts-ignore
                    getBindingResult(): BindingResult
                    // @ts-ignore
                    getMessage(): java.lang.String
                }
            }
        }
    }
}
