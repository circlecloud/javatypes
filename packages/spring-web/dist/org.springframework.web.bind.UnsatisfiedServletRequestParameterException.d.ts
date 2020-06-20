declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                /**
                 * {@link ServletRequestBindingException} subclass that indicates an unsatisfied
                 * parameter condition, as typically expressed using an {@code @RequestMapping}
                 * annotation at the {@code @Controller} type level.
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see org.springframework.web.bind.annotation.RequestMapping#params()
                 */
                // @ts-ignore
                class UnsatisfiedServletRequestParameterException extends org.springframework.web.bind.ServletRequestBindingException {
                    /**
                     * Create a new UnsatisfiedServletRequestParameterException.
                     * @param paramConditions the parameter conditions that have been violated
                     * @param actualParams the actual parameter Map associated with the ServletRequest
                     */
                    // @ts-ignore
                    constructor(paramConditions: string[], actualParams: java.util.Map<java.lang.String, java.lang.String[]>)
                    /**
                     * Create a new UnsatisfiedServletRequestParameterException.
                     * @param paramConditions all sets of parameter conditions that have been violated
                     * @param actualParams the actual parameter Map associated with the ServletRequest
                     * @since 4.2
                     */
                    // @ts-ignore
                    constructor(paramConditions: Array<java.lang.String[]>, actualParams: java.util.Map<java.lang.String, java.lang.String[]>)
                    // @ts-ignore
                    getMessage(): java.lang.String
                    /**
                     * Return the parameter conditions that have been violated or the first group
                     * in case of multiple groups.
                     * @see org.springframework.web.bind.annotation.RequestMapping#params()
                     */
                    // @ts-ignore
                    getParamConditions(): java.lang.String[]
                    /**
                     * Return all parameter condition groups that have been violated.
                     * @since 4.2
                     * @see org.springframework.web.bind.annotation.RequestMapping#params()
                     */
                    // @ts-ignore
                    getParamConditionGroups(): java.util.List<java.lang.String[]>
                    /**
                     * Return the actual parameter Map associated with the ServletRequest.
                     * @see javax.servlet.ServletRequest#getParameterMap()
                     */
                    // @ts-ignore
                    getActualParams(): java.util.Map<java.lang.String, java.lang.String[]>
                }
            }
        }
    }
}
