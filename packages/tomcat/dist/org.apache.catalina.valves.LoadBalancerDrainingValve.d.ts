declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                /**
                 * <p>A Valve to detect situations where a load-balanced node receiving a
                 * request has been deactivated by the load balancer (JK_LB_ACTIVATION=DIS)
                 * and the incoming request has no valid session.</p>
                 * <p>In these cases, the user's session cookie should be removed if it exists,
                 * any ";jsessionid" parameter should be removed from the request URI,
                 * and the client should be redirected to the same URI. This will cause the
                 * load-balanced to re-balance the client to another server.</p>
                 * <p>All this work is required because when the activation state of a node is
                 * DISABLED, the load-balancer will still send requests to the node if they
                 * appear to have a session on that node. Since mod_jk doesn't actually know
                 * whether the session id is valid, it will send the request blindly to
                 * the disabled node, which makes it take much longer to drain the node
                 * than strictly necessary.</p>
                 * <p>For testing purposes, a special cookie can be configured and used
                 * by a client to ignore the normal behavior of this Valve and allow
                 * a client to get a new session on a DISABLED node. See
                 * {@link #setIgnoreCookieName} and {@link #setIgnoreCookieValue}
                 * to configure those values.</p>
                 * <p>This Valve should be installed earlier in the Valve pipeline than any
                 * authentication valves, as the redirection should take place before an
                 * authentication valve would save a request to a protected resource.</p>
                 * @see <a href="https://tomcat.apache.org/connectors-doc/generic_howto/loadbalancers.html">Load
                 *       balancer documentation</a>
                 */
                // @ts-ignore
                class LoadBalancerDrainingValve extends org.apache.catalina.valves.ValveBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * The request attribute key where the load-balancer's activation state
                     * can be found.
                     */
                    // @ts-ignore
                    public static readonly ATTRIBUTE_KEY_JK_LB_ACTIVATION: java.lang.String | string
                    /**
                     * Sets the HTTP response code that will be used to redirect the request
                     * back to the load-balancer for re-balancing. Defaults to 307
                     * (TEMPORARY_REDIRECT).
                     * @param code The code to use for the redirect
                     */
                    // @ts-ignore
                    public setRedirectStatusCode(code: number /*int*/): void
                    /**
                     * Gets the name of the cookie that can be used to override the
                     * re-balancing behavior of this Valve when the current node is
                     * in the DISABLED activation state.
                     * @return The cookie name used to ignore normal processing rules.
                     * @see #setIgnoreCookieValue
                     */
                    // @ts-ignore
                    public getIgnoreCookieName(): string
                    /**
                     * Sets the name of the cookie that can be used to override the
                     * re-balancing behavior of this Valve when the current node is
                     * in the DISABLED activation state.
                     * There is no default value for this setting: the ability to override
                     * the re-balancing behavior of this Valve is <i>disabled</i> by default.
                     * @param cookieName The cookie name to use to ignore normal
                     *                    processing rules.
                     * @see #getIgnoreCookieValue
                     */
                    // @ts-ignore
                    public setIgnoreCookieName(cookieName: java.lang.String | string): void
                    /**
                     * Gets the expected value of the cookie that can be used to override the
                     * re-balancing behavior of this Valve when the current node is
                     * in the DISABLED activation state.
                     * @return The cookie value used to ignore normal processing rules.
                     * @see #setIgnoreCookieValue
                     */
                    // @ts-ignore
                    public getIgnoreCookieValue(): string
                    /**
                     * Sets the expected value of the cookie that can be used to override the
                     * re-balancing behavior of this Valve when the current node is
                     * in the DISABLED activation state. The "ignore" cookie's value
                     * <b>must</b> be exactly equal to this value in order to allow
                     * the client to override the re-balancing behavior.
                     * @param cookieValue The cookie value to use to ignore normal
                     *                     processing rules.
                     * @see #getIgnoreCookieValue
                     */
                    // @ts-ignore
                    public setIgnoreCookieValue(cookieValue: java.lang.String | string): void
                    // @ts-ignore
                    public invoke(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response): void
                }
            }
        }
    }
}
