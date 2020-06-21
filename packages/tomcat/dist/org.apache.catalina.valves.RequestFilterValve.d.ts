declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                /**
                 * Implementation of a Valve that performs filtering based on comparing the
                 * appropriate request property (selected based on which subclass you choose
                 * to configure into your Container's pipeline) against the regular expressions
                 * configured for this Valve.
                 * <p>
                 * This valve is configured by setting the <code>allow</code> and/or
                 * <code>deny</code> properties to a regular expressions (in the syntax
                 * supported by {@link Pattern}) to which the appropriate request property will
                 * be compared. Evaluation proceeds as follows:
                 * <ul>
                 * <li>The subclass extracts the request property to be filtered, and
                 * calls the common <code>process()</code> method.
                 * <li>If there is a deny expression configured, the property will be compared
                 * to the expression. If a match is found, this request will be rejected
                 * with a "Forbidden" HTTP response.</li>
                 * <li>If there is a allow expression configured, the property will be compared
                 * to each such expression.  If a match is found, this request will be
                 * allowed to pass through to the next Valve in the current pipeline.</li>
                 * <li>If a deny expression was specified but no allow expression, allow this
                 * request to pass through (because none of the deny expressions matched
                 * it).
                 * <li>The request will be rejected with a "Forbidden" HTTP response.</li>
                 * </ul>
                 * <p>
                 * As an option the valve can generate an invalid <code>authenticate</code>
                 * header instead of denying the request. This can be combined with the
                 * context attribute <code>preemptiveAuthentication="true"</code> and an
                 * authenticator to force authentication instead of denial.
                 * <p>
                 * This Valve may be attached to any Container, depending on the granularity
                 * of the filtering you wish to perform.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                abstract class RequestFilterValve extends org.apache.catalina.valves.ValveBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * The regular expression used to test for allowed requests.
                     */
                    // @ts-ignore
                    allow: java.util.regex.Pattern
                    /**
                     * The current allow configuration value that may or may not compile into a
                     * valid {@link Pattern}.
                     */
                    // @ts-ignore
                    allowValue: java.lang.String | string
                    /**
                     * Helper variable to catch configuration errors.
                     * It is <code>true</code> by default, but becomes <code>false</code>
                     * if there was an attempt to assign an invalid value to the
                     * <code>allow</code> pattern.
                     */
                    // @ts-ignore
                    allowValid: boolean
                    /**
                     * The regular expression used to test for denied requests.
                     */
                    // @ts-ignore
                    deny: java.util.regex.Pattern
                    /**
                     * The current deny configuration value that may or may not compile into a
                     * valid {@link Pattern}.
                     */
                    // @ts-ignore
                    denyValue: java.lang.String | string
                    /**
                     * Helper variable to catch configuration errors.
                     * It is <code>true</code> by default, but becomes <code>false</code>
                     * if there was an attempt to assign an invalid value to the
                     * <code>deny</code> pattern.
                     */
                    // @ts-ignore
                    denyValid: boolean
                    /**
                     * The HTTP response status code that is used when rejecting denied
                     * request. It is 403 by default, but may be changed to be 404.
                     */
                    // @ts-ignore
                    denyStatus: number /*int*/
                    /**
                     * Return the regular expression used to test for allowed requests for this
                     * Valve, if any; otherwise, return <code>null</code>.
                     * @return the regular expression
                     */
                    // @ts-ignore
                    public getAllow(): string
                    /**
                     * Set the regular expression used to test for allowed requests for this
                     * Valve, if any.
                     * @param allow The new allow expression
                     */
                    // @ts-ignore
                    public setAllow(allow: java.lang.String | string): void
                    /**
                     * Return the regular expression used to test for denied requests for this
                     * Valve, if any; otherwise, return <code>null</code>.
                     * @return the regular expression
                     */
                    // @ts-ignore
                    public getDeny(): string
                    /**
                     * Set the regular expression used to test for denied requests for this
                     * Valve, if any.
                     * @param deny The new deny expression
                     */
                    // @ts-ignore
                    public setDeny(deny: java.lang.String | string): void
                    /**
                     * Returns {@code false} if the last change to the {@code allow} pattern did
                     * not apply successfully. E.g. if the pattern is syntactically
                     * invalid.
                     * @return <code>false</code> if the current pattern is invalid
                     */
                    // @ts-ignore
                    public isAllowValid(): boolean
                    /**
                     * Returns {@code false} if the last change to the {@code deny} pattern did
                     * not apply successfully. E.g. if the pattern is syntactically
                     * invalid.
                     * @return <code>false</code> if the current pattern is invalid
                     */
                    // @ts-ignore
                    public isDenyValid(): boolean
                    /**
                     * @return response status code that is used to reject denied request.
                     */
                    // @ts-ignore
                    public getDenyStatus(): number /*int*/
                    /**
                     * Set response status code that is used to reject denied request.
                     * @param denyStatus The status code
                     */
                    // @ts-ignore
                    public setDenyStatus(denyStatus: number /*int*/): void
                    /**
                     * @return <code>true</code> if a deny is handled by setting an invalid auth header.
                     */
                    // @ts-ignore
                    public getInvalidAuthenticationWhenDeny(): boolean
                    /**
                     * Set invalidAuthenticationWhenDeny property.
                     * @param value <code>true</code> to handle a deny by setting an invalid auth header
                     */
                    // @ts-ignore
                    public setInvalidAuthenticationWhenDeny(value: boolean): void
                    /**
                     * Get the flag deciding whether we add the server connector port to the
                     * property compared in the filtering method. The port will be appended
                     * using a ";" as a separator.
                     * @return <code>true</code> to add the connector port
                     */
                    // @ts-ignore
                    public getAddConnectorPort(): boolean
                    /**
                     * Set the flag deciding whether we add the server connector port to the
                     * property compared in the filtering method. The port will be appended
                     * using a ";" as a separator.
                     * @param addConnectorPort The new flag
                     */
                    // @ts-ignore
                    public setAddConnectorPort(addConnectorPort: boolean): void
                    /**
                     * Extract the desired request property, and pass it (along with the
                     * specified request and response objects) to the protected
                     * <code>process()</code> method to perform the actual filtering.
                     * This method must be implemented by a concrete subclass.
                     * @param request The servlet request to be processed
                     * @param response The servlet response to be created
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet error occurs
                     */
                    // @ts-ignore
                    public abstract invoke(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response): void
                    // @ts-ignore
                    initInternal(): void
                    // @ts-ignore
                    startInternal(): void
                    /**
                     * Perform the filtering that has been configured for this Valve, matching
                     * against the specified request property.
                     * @param property The request property on which to filter
                     * @param request The servlet request to be processed
                     * @param response The servlet response to be processed
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet error occurs
                     */
                    // @ts-ignore
                    process(property: java.lang.String | string, request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response): void
                    // @ts-ignore
                    abstract getLog(): org.apache.juli.logging.Log
                    /**
                     * Reject the request that was denied by this valve.
                     * <p>If <code>invalidAuthenticationWhenDeny</code> is true
                     * and the context has <code>preemptiveAuthentication</code>
                     * set, set an invalid authorization header to trigger basic auth.
                     * @param request The servlet request to be processed
                     * @param response The servlet response to be processed
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet error occurs
                     */
                    // @ts-ignore
                    denyRequest(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response): void
                    /**
                     * Perform the test implemented by this Valve, matching against the
                     * specified request property value. This method is public so that it can be
                     * called through JMX, e.g. to test whether certain IP address is allowed or
                     * denied by the valve configuration.
                     * @param property The request property value on which to filter
                     * @return <code>true</code> if the request is allowed
                     */
                    // @ts-ignore
                    public isAllowed(property: java.lang.String | string): boolean
                }
            }
        }
    }
}
