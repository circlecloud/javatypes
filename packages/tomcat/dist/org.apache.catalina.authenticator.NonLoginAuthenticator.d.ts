declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                /**
                 * An <b>Authenticator</b> and <b>Valve</b> implementation that checks
                 * only security constraints not involving user authentication.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class NonLoginAuthenticator extends org.apache.catalina.authenticator.AuthenticatorBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * <p>Authenticate the user making this request, based on the fact that no
                     * <code>login-config</code> has been defined for the container.</p>
                     * <p>This implementation means "login the user even though there is no
                     * self-contained way to establish a security Principal for that user".</p>
                     * <p>This method is called by the AuthenticatorBase super class to
                     * establish a Principal for the user BEFORE the container security
                     * constraints are examined, i.e. it is not yet known whether the user
                     * will eventually be permitted to access the requested resource.
                     * Therefore, it is necessary to always return <code>true</code> to
                     * indicate the user has not failed authentication.</p>
                     * <p>There are two cases:</p>
                     * <ul>
                     * <li>without SingleSignon: a Session instance does not yet exist
                     * and there is no <code>auth-method</code> to authenticate the
                     * user, so leave Request's Principal as null.
                     * Note: AuthenticatorBase will later examine the security constraints
                     * to determine whether the resource is accessible by a user
                     * without a security Principal and Role (i.e. unauthenticated).
                     * </li>
                     * <li>with SingleSignon: if the user has already authenticated via
                     * another container (using its own login configuration), then
                     * associate this Session with the SSOEntry so it inherits the
                     * already-established security Principal and associated Roles.
                     * Note: This particular session will become a full member of the
                     * SingleSignOnEntry Session collection and so will potentially
                     * keep the SSOE "alive", even if all the other properly
                     * authenticated Sessions expire first... until it expires too.
                     * </li>
                     * </ul>
                     * @param request  Request we are processing
                     * @param response Response we are creating
                     * @return boolean to indicate whether the user is authenticated
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    doAuthenticate(request: org.apache.catalina.connector.Request, response: javax.servlet.http.HttpServletResponse): boolean
                    /**
                     * Return the authentication method, which is vendor-specific and
                     * not defined by HttpServletRequest.
                     */
                    // @ts-ignore
                    getAuthMethod(): string
                }
            }
        }
    }
}
