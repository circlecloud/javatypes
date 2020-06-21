declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                /**
                 * PropertyValues implementation created from parameters in a ServletRequest.
                 * Can look for all property values beginning with a certain prefix and
                 * prefix separator (default is "_").
                 * <p>For example, with a prefix of "spring", "spring_param1" and
                 * "spring_param2" result in a Map with "param1" and "param2" as keys.
                 * <p>This class is not immutable to be able to efficiently remove property
                 * values that should be ignored for binding.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @see org.springframework.web.util.WebUtils#getParametersStartingWith
                 */
                // @ts-ignore
                class ServletRequestParameterPropertyValues extends MutablePropertyValues {
                    /**
                     * Create new ServletRequestPropertyValues using no prefix
                     * (and hence, no prefix separator).
                     * @param request the HTTP request
                     */
                    // @ts-ignore
                    constructor(request: ServletRequest)
                    /**
                     * Create new ServletRequestPropertyValues using the given prefix and
                     * the default prefix separator (the underscore character "_").
                     * @param request the HTTP request
                     * @param prefix the prefix for parameters (the full prefix will
                     *  consist of this plus the separator)
                     * @see #DEFAULT_PREFIX_SEPARATOR
                     */
                    // @ts-ignore
                    constructor(request: ServletRequest, prefix: java.lang.String | string)
                    /**
                     * Create new ServletRequestPropertyValues supplying both prefix and
                     * prefix separator.
                     * @param request the HTTP request
                     * @param prefix the prefix for parameters (the full prefix will
                     *  consist of this plus the separator)
                     * @param prefixSeparator separator delimiting prefix (e.g. "spring")
                     *  and the rest of the parameter name ("param1", "param2")
                     */
                    // @ts-ignore
                    constructor(request: ServletRequest, prefix: java.lang.String | string, prefixSeparator: java.lang.String | string)
                    /**
                     * Default prefix separator.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_PREFIX_SEPARATOR: java.lang.String | string
                }
            }
        }
    }
}
