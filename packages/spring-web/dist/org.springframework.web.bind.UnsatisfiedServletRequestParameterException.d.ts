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
                    constructor(paramConditions: java.lang.String[] | string[], actualParams: java.util.Map<java.lang.String | string, java.lang.String[] | string[]>)
                    /**
                     * Create a new UnsatisfiedServletRequestParameterException.
                     * @param paramConditions all sets of parameter conditions that have been violated
                     * @param actualParams the actual parameter Map associated with the ServletRequest
                     * @since 4.2
                     */
                    // @ts-ignore
                    constructor(paramConditions: java.util.List<java.lang.String[] | string[]> | Array<java.lang.String[] | string[]>, actualParams: java.util.Map<java.lang.String | string, java.lang.String[] | string[]>)
                    // @ts-ignore
                    public getMessage(): string
                    /**
                     * Return the parameter conditions that have been violated or the first group
                     * in case of multiple groups.
                     * @see org.springframework.web.bind.annotation.RequestMapping#params()
                     */
                    // @ts-ignore
                    public getParamConditions(): string[]
                    /**
                     * Return all parameter condition groups that have been violated.
                     * @since 4.2
                     * @see org.springframework.web.bind.annotation.RequestMapping#params()
                     */
                    // @ts-ignore
                    public getParamConditionGroups(): Array<java.lang.String[] | string[]>
                    /**
                     * Return the actual parameter Map associated with the ServletRequest.
                     * @see javax.servlet.ServletRequest#getParameterMap()
                     */
                    // @ts-ignore
                    public getActualParams(): java.util.Map<java.lang.String | string, java.lang.String[] | string[]>
                }
            }
        }
    }
}
