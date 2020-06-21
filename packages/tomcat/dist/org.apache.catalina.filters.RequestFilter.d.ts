declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                /**
                 * Implementation of a Filter that performs filtering based on comparing the
                 * appropriate request property (selected based on which subclass you choose
                 * to configure into your Container's pipeline) against the regular expressions
                 * configured for this Filter.
                 * <p>
                 * This filter is configured by setting the <code>allow</code> and/or
                 * <code>deny</code> properties to a regular expressions (in the syntax
                 * supported by {@link Pattern}) to which the appropriate request property will
                 * be compared.  Evaluation proceeds as follows:
                 * <ul>
                 * <li>The subclass extracts the request property to be filtered, and
                 * calls the common <code>process()</code> method.
                 * <li>If there is a deny expression configured, the property will be compared
                 * to the expression. If a match is found, this request will be rejected
                 * with a "Forbidden" HTTP response.</li>
                 * <li>If there is a allow expression configured, the property will be compared
                 * to the expression. If a match is found, this request will be allowed to
                 * pass through to the next filter in the current pipeline.</li>
                 * <li>If a deny expression was specified but no allow expression, allow this
                 * request to pass through (because none of the deny expressions matched
                 * it).
                 * <li>The request will be rejected with a "Forbidden" HTTP response.</li>
                 * </ul>
                 */
                // @ts-ignore
                abstract class RequestFilter extends org.apache.catalina.filters.FilterBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * The regular expression used to test for allowed requests.
                     */
                    // @ts-ignore
                    allow: java.util.regex.Pattern
                    /**
                     * The regular expression used to test for denied requests.
                     */
                    // @ts-ignore
                    deny: java.util.regex.Pattern
                    /**
                     * The HTTP response status code that is used when rejecting denied
                     * request. It is 403 by default, but may be changed to be 404.
                     */
                    // @ts-ignore
                    denyStatus: number /*int*/
                    /**
                     * @return the regular expression used to test for allowed requests for this
                     *  Filter, if any; otherwise, return <code>null</code>.
                     */
                    // @ts-ignore
                    public getAllow(): string
                    /**
                     * Set the regular expression used to test for allowed requests for this
                     * Filter, if any.
                     * @param allow The new allow expression
                     */
                    // @ts-ignore
                    public setAllow(allow: java.lang.String | string): void
                    /**
                     * @return the regular expression used to test for denied requests for this
                     *  Filter, if any; otherwise, return <code>null</code>.
                     */
                    // @ts-ignore
                    public getDeny(): string
                    /**
                     * Set the regular expression used to test for denied requests for this
                     * Filter, if any.
                     * @param deny The new deny expression
                     */
                    // @ts-ignore
                    public setDeny(deny: java.lang.String | string): void
                    /**
                     * @return response status code that is used to reject denied request.
                     */
                    // @ts-ignore
                    public getDenyStatus(): number /*int*/
                    /**
                     * Set response status code that is used to reject denied request.
                     * @param denyStatus The status code for deny
                     */
                    // @ts-ignore
                    public setDenyStatus(denyStatus: number /*int*/): void
                    /**
                     * Extract the desired request property, and pass it (along with the
                     * specified request and response objects) to the protected
                     * <code>process()</code> method to perform the actual filtering.
                     * This method must be implemented by a concrete subclass.
                     * @param request The servlet request to be processed
                     * @param response The servlet response to be created
                     * @param chain The filter chain
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet error occurs
                     */
                    // @ts-ignore
                    public abstract doFilter(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse, chain: javax.servlet.FilterChain): void
                    // @ts-ignore
                    isConfigProblemFatal(): boolean
                    /**
                     * Perform the filtering that has been configured for this Filter, matching
                     * against the specified request property.
                     * @param property The request property on which to filter
                     * @param request The servlet request to be processed
                     * @param response The servlet response to be processed
                     * @param chain The filter chain
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet error occurs
                     */
                    // @ts-ignore
                    process(property: java.lang.String | string, request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse, chain: javax.servlet.FilterChain): void
                }
            }
        }
    }
}
