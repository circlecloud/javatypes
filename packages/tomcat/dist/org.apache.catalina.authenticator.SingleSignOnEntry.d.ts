declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                /**
                 * A class that represents entries in the cache of authenticated users.
                 * This is necessary to make it available to
                 * <code>AuthenticatorBase</code> subclasses that need it in order to perform
                 * reauthentications when SingleSignOn is in use.
                 * @author B Stansberry, based on work by Craig R. McClanahan
                 * @see SingleSignOn
                 * @see AuthenticatorBase#reauthenticateFromSSO
                 */
                // @ts-ignore
                class SingleSignOnEntry extends java.lang.Object implements java.io.Serializable {
                    /**
                     * Creates a new SingleSignOnEntry
                     * @param principal the <code>Principal</code> returned by the latest
                     *                   call to <code>Realm.authenticate</code>.
                     * @param authType  the type of authenticator used (BASIC, CLIENT_CERT,
                     *                   DIGEST or FORM)
                     * @param username  the username (if any) used for the authentication
                     * @param password  the password (if any) used for the authentication
                     */
                    // @ts-ignore
                    constructor(principal: java.security.Principal, authType: java.lang.String | string, username: java.lang.String | string, password: java.lang.String | string)
                    /**
                     * Adds a <code>Session</code> to the list of those associated with
                     * this SSO.
                     * @param sso       The <code>SingleSignOn</code> valve that is managing
                     *                   the SSO session.
                     * @param ssoId     The ID of the SSO session.
                     * @param session   The <code>Session</code> being associated with the SSO.
                     */
                    // @ts-ignore
                    public addSession(sso: org.apache.catalina.authenticator.SingleSignOn, ssoId: java.lang.String | string, session: org.apache.catalina.Session): void
                    /**
                     * Removes the given <code>Session</code> from the list of those
                     * associated with this SSO.
                     * @param session  the <code>Session</code> to remove.
                     */
                    // @ts-ignore
                    public removeSession(session: org.apache.catalina.Session): void
                    /**
                     * Returns the HTTP Session identifiers associated with this SSO.
                     * @return The identifiers for the HTTP sessions that are current associated
                     *          with this SSo entry
                     */
                    // @ts-ignore
                    public findSessions(): Array<org.apache.catalina.authenticator.SingleSignOnSessionKey>
                    /**
                     * Gets the name of the authentication type originally used to authenticate
                     * the user associated with the SSO.
                     * @return "BASIC", "CLIENT_CERT", "DIGEST", "FORM" or "NONE"
                     */
                    // @ts-ignore
                    public getAuthType(): string
                    /**
                     * Gets whether the authentication type associated with the original
                     * authentication supports reauthentication.
                     * @return <code>true</code> if <code>getAuthType</code> returns
                     *           "BASIC" or "FORM", <code>false</code> otherwise.
                     */
                    // @ts-ignore
                    public getCanReauthenticate(): boolean
                    /**
                     * Gets the password credential (if any) associated with the SSO.
                     * @return the password credential associated with the SSO, or
                     *           <code>null</code> if the original authentication type
                     *           does not involve a password.
                     */
                    // @ts-ignore
                    public getPassword(): string
                    /**
                     * Gets the <code>Principal</code> that has been authenticated by the SSO.
                     * @return The Principal that was created by the authentication that
                     *          triggered the creation of the SSO entry
                     */
                    // @ts-ignore
                    public getPrincipal(): java.security.Principal
                    /**
                     * Gets the user name provided by the user as part of the authentication
                     * process.
                     * @return The user name that was authenticated as part of the
                     *          authentication that triggered the creation of the SSO entry
                     */
                    // @ts-ignore
                    public getUsername(): string
                    /**
                     * Updates the SingleSignOnEntry to reflect the latest security
                     * information associated with the caller.
                     * @param principal the <code>Principal</code> returned by the latest
                     *                   call to <code>Realm.authenticate</code>.
                     * @param authType  the type of authenticator used (BASIC, CLIENT_CERT,
                     *                   DIGEST or FORM)
                     * @param username  the username (if any) used for the authentication
                     * @param password  the password (if any) used for the authentication
                     */
                    // @ts-ignore
                    public updateCredentials(principal: java.security.Principal, authType: java.lang.String | string, username: java.lang.String | string, password: java.lang.String | string): void
                }
            }
        }
    }
}
