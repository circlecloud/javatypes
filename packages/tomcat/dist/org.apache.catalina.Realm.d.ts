declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * A <b>Realm</b> is a read-only facade for an underlying security realm
             * used to authenticate individual users, and identify the security roles
             * associated with those users.  Realms can be attached at any Container
             * level, but will typically only be attached to a Context, or higher level,
             * Container.
             * @author Craig R. McClanahan
             */
            // @ts-ignore
            interface Realm extends org.apache.catalina.Contained {
                /**
                 * @return the CredentialHandler configured for this Realm.
                 */
                // @ts-ignore
                getCredentialHandler(): org.apache.catalina.CredentialHandler
                /**
                 * Set the CredentialHandler to be used by this Realm.
                 * @param credentialHandler the {#link CredentialHandler} to use
                 */
                // @ts-ignore
                setCredentialHandler(credentialHandler: org.apache.catalina.CredentialHandler): void
                /**
                 * Add a property change listener to this component.
                 * @param listener The listener to add
                 */
                // @ts-ignore
                addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                /**
                 * Try to authenticate with the specified username.
                 * @param username Username of the Principal to look up
                 * @return the associated principal, or <code>null</code> if none is
                 *          associated.
                 */
                // @ts-ignore
                authenticate(username: java.lang.String | string): java.security.Principal
                /**
                 * Try to authenticate using the specified username and
                 * credentials.
                 * @param username Username of the Principal to look up
                 * @param credentials Password or other credentials to use in
                 *  authenticating this username
                 * @return the associated principal, or <code>null</code> if there is none
                 */
                // @ts-ignore
                authenticate(username: java.lang.String | string, credentials: java.lang.String | string): java.security.Principal
                /**
                 * Try to authenticate with the specified username, which
                 * matches the digest calculated using the given parameters using the
                 * method described in RFC 2617 (which is a superset of RFC 2069).
                 * @param username Username of the Principal to look up
                 * @param digest Digest which has been submitted by the client
                 * @param nonce Unique (or supposedly unique) token which has been used
                 *  for this request
                 * @param nc the nonce counter
                 * @param cnonce the client chosen nonce
                 * @param qop the "quality of protection" (<code>nc</code> and <code>cnonce</code>
                 *         will only be used, if <code>qop</code> is not <code>null</code>).
                 * @param realm Realm name
                 * @param md5a2 Second MD5 digest used to calculate the digest :
                 *  MD5(Method + ":" + uri)
                 * @return the associated principal, or <code>null</code> if there is none.
                 */
                // @ts-ignore
                authenticate(username: java.lang.String | string, digest: java.lang.String | string, nonce: java.lang.String | string, nc: java.lang.String | string, cnonce: java.lang.String | string, qop: java.lang.String | string, realm: java.lang.String | string, md5a2: java.lang.String | string): java.security.Principal
                /**
                 * Try to authenticate using a {@link GSSContext}
                 * @param gssContext The gssContext processed by the {#link Authenticator}.
                 * @param storeCreds Should the realm attempt to store the delegated
                 *                    credentials in the returned Principal?
                 * @return the associated principal, or <code>null</code> if there is none
                 */
                // @ts-ignore
                authenticate(gssContext: org.ietf.jgss.GSSContext, storeCreds: boolean): java.security.Principal
                /**
                 * Try to authenticate using {@link X509Certificate}s
                 * @param certs Array of client certificates, with the first one in
                 *   the array being the certificate of the client itself.
                 * @return the associated principal, or <code>null</code> if there is none
                 */
                // @ts-ignore
                authenticate(certs: java.security.cert.X509Certificate[]): java.security.Principal
                /**
                 * Execute a periodic task, such as reloading, etc. This method will be
                 * invoked inside the classloading context of this container. Unexpected
                 * throwables will be caught and logged.
                 */
                // @ts-ignore
                backgroundProcess(): void
                /**
                 * Find the SecurityConstraints configured to guard the request URI for
                 * this request.
                 * @param request Request we are processing
                 * @param context {#link Context} for this request
                 * @return the configured {#link SecurityConstraint}, of <code>null</code>
                 *          if there is none
                 */
                // @ts-ignore
                findSecurityConstraints(request: org.apache.catalina.connector.Request, context: org.apache.catalina.Context): org.apache.tomcat.util.descriptor.web.SecurityConstraint[]
                /**
                 * Perform access control based on the specified authorization constraint.
                 * @param request Request we are processing
                 * @param response Response we are creating
                 * @param constraint Security constraint we are enforcing
                 * @param context The Context to which client of this class is attached.
                 * @return <code>true</code> if this constraint is satisfied and processing
                 *          should continue, or <code>false</code> otherwise
                 * @exception IOException if an input/output error occurs
                 */
                // @ts-ignore
                hasResourcePermission(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response, constraint: org.apache.tomcat.util.descriptor.web.SecurityConstraint[], context: org.apache.catalina.Context): boolean
                /**
                 * Check if the specified Principal has the specified
                 * security role, within the context of this Realm.
                 * @param wrapper wrapper context for evaluating role
                 * @param principal Principal for whom the role is to be checked
                 * @param role Security role to be checked
                 * @return <code>true</code> if the specified Principal has the specified
                 *          security role, within the context of this Realm; otherwise return
                 *          <code>false</code>.
                 */
                // @ts-ignore
                hasRole(wrapper: org.apache.catalina.Wrapper, principal: java.security.Principal, role: java.lang.String | string): boolean
                /**
                 * Enforce any user data constraint required by the security constraint
                 * guarding this request URI.
                 * @param request Request we are processing
                 * @param response Response we are creating
                 * @param constraint Security constraint being checked
                 * @return <code>true</code> if this constraint
                 *          was not violated and processing should continue, or <code>false</code>
                 *          if we have created a response already.
                 * @exception IOException if an input/output error occurs
                 */
                // @ts-ignore
                hasUserDataPermission(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response, constraint: org.apache.tomcat.util.descriptor.web.SecurityConstraint[]): boolean
                /**
                 * Remove a property change listener from this component.
                 * @param listener The listener to remove
                 */
                // @ts-ignore
                removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                /**
                 * Return roles associated with given principal
                 * @param principal the {#link Principal} to get the roles for.
                 * @return principal roles
                 */
                // @ts-ignore
                getRoles(principal: java.security.Principal): string[]
                /**
                 * Return the availability of the realm for authentication.
                 * @return <code>true</code> if the realm is able to perform authentication
                 */
                // @ts-ignore
                isAvailable(): boolean
            }
        }
    }
}
