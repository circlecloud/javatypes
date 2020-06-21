declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                /**
                 * A <strong>Valve</strong> that supports a "single sign on" user experience,
                 * where the security identity of a user who successfully authenticates to one
                 * web application is propagated to other web applications in the same
                 * security domain.  For successful use, the following requirements must
                 * be met:
                 * <ul>
                 * <li>This Valve must be configured on the Container that represents a
                 * virtual host (typically an implementation of <code>Host</code>).</li>
                 * <li>The <code>Realm</code> that contains the shared user and role
                 * information must be configured on the same Container (or a higher
                 * one), and not overridden at the web application level.</li>
                 * <li>The web applications themselves must use one of the standard
                 * Authenticators found in the
                 * <code>org.apache.catalina.authenticator</code> package.</li>
                 * </ul>
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class SingleSignOn extends org.apache.catalina.valves.ValveBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * The cache of SingleSignOnEntry instances for authenticated Principals,
                     * keyed by the cookie value that is used to select them.
                     */
                    // @ts-ignore
                    cache: java.util.Map<java.lang.String | string, org.apache.catalina.authenticator.SingleSignOnEntry>
                    /**
                     * Returns the optional cookie domain.
                     * May return null.
                     * @return The cookie domain
                     */
                    // @ts-ignore
                    public getCookieDomain(): string
                    /**
                     * Sets the domain to be used for sso cookies.
                     * @param cookieDomain cookie domain name
                     */
                    // @ts-ignore
                    public setCookieDomain(cookieDomain: java.lang.String | string): void
                    /**
                     * Gets whether each request needs to be reauthenticated (by an
                     * Authenticator downstream in the pipeline) to the security
                     * <code>Realm</code>, or if this Valve can itself bind security info
                     * to the request based on the presence of a valid SSO entry without
                     * rechecking with the <code>Realm</code>.
                     * @return <code>true</code> if it is required that a downstream
                     *           Authenticator reauthenticate each request before calls to
                     *           <code>HttpServletRequest.setUserPrincipal()</code>
                     *           and <code>HttpServletRequest.setAuthType()</code> are made;
                     *           <code>false</code> if the <code>Valve</code> can itself make
                     *           those calls relying on the presence of a valid SingleSignOn
                     *           entry associated with the request.
                     * @see #setRequireReauthentication
                     */
                    // @ts-ignore
                    public getRequireReauthentication(): boolean
                    /**
                     * Sets whether each request needs to be reauthenticated (by an
                     * Authenticator downstream in the pipeline) to the security
                     * <code>Realm</code>, or if this Valve can itself bind security info
                     * to the request, based on the presence of a valid SSO entry, without
                     * rechecking with the <code>Realm</code>.
                     * <p>
                     * If this property is <code>false</code> (the default), this
                     * <code>Valve</code> will bind a UserPrincipal and AuthType to the request
                     * if a valid SSO entry is associated with the request.  It will not notify
                     * the security <code>Realm</code> of the incoming request.
                     * <p>
                     * This property should be set to <code>true</code> if the overall server
                     * configuration requires that the <code>Realm</code> reauthenticate each
                     * request thread.  An example of such a configuration would be one where
                     * the <code>Realm</code> implementation provides security for both a
                     * web tier and an associated EJB tier, and needs to set security
                     * credentials on each request thread in order to support EJB access.
                     * <p>
                     * If this property is set to <code>true</code>, this Valve will set flags
                     * on the request notifying the downstream Authenticator that the request
                     * is associated with an SSO session.  The Authenticator will then call its
                     * {@link AuthenticatorBase#reauthenticateFromSSO reauthenticateFromSSO}
                     * method to attempt to reauthenticate the request to the
                     * <code>Realm</code>, using any credentials that were cached with this
                     * Valve.
                     * <p>
                     * The default value of this property is <code>false</code>, in order
                     * to maintain backward compatibility with previous versions of Tomcat.
                     * @param required  <code>true</code> if it is required that a downstream
                     *                   Authenticator reauthenticate each request before calls
                     *                   to  <code>HttpServletRequest.setUserPrincipal()</code>
                     *                   and <code>HttpServletRequest.setAuthType()</code> are
                     *                   made; <code>false</code> if the <code>Valve</code> can
                     *                   itself make those calls relying on the presence of a
                     *                   valid SingleSignOn entry associated with the request.
                     * @see AuthenticatorBase#reauthenticateFromSSO
                     */
                    // @ts-ignore
                    public setRequireReauthentication(required: boolean): void
                    /**
                     * Perform single-sign-on support processing for this request.
                     * @param request The servlet request we are processing
                     * @param response The servlet response we are creating
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet error occurs
                     */
                    // @ts-ignore
                    public invoke(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response): void
                    /**
                     * Process a session destroyed event by removing references to that session
                     * from the caches and - if the session destruction is the result of a
                     * logout - destroy the associated SSO session.
                     * @param ssoId   The ID of the SSO session which which the destroyed
                     *                 session was associated
                     * @param session The session that has been destroyed
                     */
                    // @ts-ignore
                    public sessionDestroyed(ssoId: java.lang.String | string, session: org.apache.catalina.Session): void
                    /**
                     * Associate the specified single sign on identifier with the
                     * specified Session.
                     * @param ssoId Single sign on identifier
                     * @param session Session to be associated
                     * @return <code>true</code> if the session was associated to the given SSO
                     *          session, otherwise <code>false</code>
                     */
                    // @ts-ignore
                    associate(ssoId: java.lang.String | string, session: org.apache.catalina.Session): boolean
                    /**
                     * Deregister the specified single sign on identifier, and invalidate
                     * any associated sessions.
                     * @param ssoId Single sign on identifier to deregister
                     */
                    // @ts-ignore
                    deregister(ssoId: java.lang.String | string): void
                    /**
                     * Attempts reauthentication to the given <code>Realm</code> using
                     * the credentials associated with the single sign-on session
                     * identified by argument <code>ssoId</code>.
                     * <p>
                     * If reauthentication is successful, the <code>Principal</code> and
                     * authorization type associated with the SSO session will be bound
                     * to the given <code>Request</code> object via calls to
                     * {@link Request#setAuthType Request.setAuthType()} and
                     * {@link Request#setUserPrincipal Request.setUserPrincipal()}
                     * </p>
                     * @param ssoId     identifier of SingleSignOn session with which the
                     *                   caller is associated
                     * @param realm     Realm implementation against which the caller is to
                     *                   be authenticated
                     * @param request   the request that needs to be authenticated
                     * @return <code>true</code> if reauthentication was successful,
                     *           <code>false</code> otherwise.
                     */
                    // @ts-ignore
                    reauthenticate(ssoId: java.lang.String | string, realm: org.apache.catalina.Realm, request: org.apache.catalina.connector.Request): boolean
                    /**
                     * Register the specified Principal as being associated with the specified
                     * value for the single sign on identifier.
                     * @param ssoId Single sign on identifier to register
                     * @param principal Associated user principal that is identified
                     * @param authType Authentication type used to authenticate this
                     *   user principal
                     * @param username Username used to authenticate this user
                     * @param password Password used to authenticate this user
                     */
                    // @ts-ignore
                    register(ssoId: java.lang.String | string, principal: java.security.Principal, authType: java.lang.String | string, username: java.lang.String | string, password: java.lang.String | string): void
                    /**
                     * Updates any <code>SingleSignOnEntry</code> found under key
                     * <code>ssoId</code> with the given authentication data.
                     * <p>
                     * The purpose of this method is to allow an SSO entry that was
                     * established without a username/password combination (i.e. established
                     * following DIGEST or CLIENT_CERT authentication) to be updated with
                     * a username and password if one becomes available through a subsequent
                     * BASIC or FORM authentication.  The SSO entry will then be usable for
                     * reauthentication.
                     * <p>
                     * <b>NOTE:</b> Only updates the SSO entry if a call to
                     * <code>SingleSignOnEntry.getCanReauthenticate()</code> returns
                     * <code>false</code>; otherwise, it is assumed that the SSO entry already
                     * has sufficient information to allow reauthentication and that no update
                     * is needed.
                     * @param ssoId     identifier of Single sign to be updated
                     * @param principal the <code>Principal</code> returned by the latest
                     *                   call to <code>Realm.authenticate</code>.
                     * @param authType  the type of authenticator used (BASIC, CLIENT_CERT,
                     *                   DIGEST or FORM)
                     * @param username  the username (if any) used for the authentication
                     * @param password  the password (if any) used for the authentication
                     * @return <code>true</code> if the credentials were updated, otherwise
                     *          <code>false</code>
                     */
                    // @ts-ignore
                    update(ssoId: java.lang.String | string, principal: java.security.Principal, authType: java.lang.String | string, username: java.lang.String | string, password: java.lang.String | string): boolean
                    /**
                     * Remove a single Session from a SingleSignOn.  Called when
                     * a session is timed out and no longer active.
                     * @param ssoId Single sign on identifier from which to remove the session.
                     * @param session the session to be removed.
                     */
                    // @ts-ignore
                    removeSession(ssoId: java.lang.String | string, session: org.apache.catalina.Session): void
                    // @ts-ignore
                    getSessionListener(ssoId: java.lang.String | string): org.apache.catalina.SessionListener
                    // @ts-ignore
                    startInternal(): void
                    // @ts-ignore
                    stopInternal(): void
                }
            }
        }
    }
}
