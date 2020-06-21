declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                /**
                 * Simple implementation of <b>Realm</b> that reads an XML file to configure
                 * the valid users, passwords, and roles.  The file format (and default file
                 * location) are identical to those currently supported by Tomcat 3.X.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                abstract class RealmBase extends org.apache.catalina.util.LifecycleMBeanBase implements org.apache.catalina.Realm {
                    // @ts-ignore
                    constructor()
                    /**
                     * The Container with which this Realm is associated.
                     */
                    // @ts-ignore
                    container: org.apache.catalina.Container
                    /**
                     * Container log
                     */
                    // @ts-ignore
                    containerLog: org.apache.juli.logging.Log
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * The property change support for this component.
                     */
                    // @ts-ignore
                    readonly support: java.beans.PropertyChangeSupport
                    /**
                     * Should we validate client certificate chains when they are presented?
                     */
                    // @ts-ignore
                    validate: boolean
                    /**
                     * The name of the class to use for retrieving user names from X509
                     * certificates.
                     */
                    // @ts-ignore
                    x509UsernameRetrieverClassName: java.lang.String | string
                    /**
                     * The object that will extract user names from X509 client certificates.
                     */
                    // @ts-ignore
                    x509UsernameRetriever: org.apache.catalina.realm.X509UsernameRetriever
                    /**
                     * The all role mode.
                     */
                    // @ts-ignore
                    allRolesMode: org.apache.catalina.realm.RealmBase.AllRolesMode
                    /**
                     * When processing users authenticated via the GSS-API, should any
                     * &quot;@...&quot; be stripped from the end of the user name?
                     */
                    // @ts-ignore
                    stripRealmForGss: boolean
                    // @ts-ignore
                    realmPath: java.lang.String | string
                    /**
                     * @return The HTTP status code used when the container needs to issue an
                     *          HTTP redirect to meet the requirements of a configured transport
                     *          guarantee.
                     */
                    // @ts-ignore
                    public getTransportGuaranteeRedirectStatus(): number /*int*/
                    /**
                     * Set the HTTP status code used when the container needs to issue an HTTP
                     * redirect to meet the requirements of a configured transport guarantee.
                     * @param transportGuaranteeRedirectStatus The status to use. This value is
                     *                                          not validated
                     */
                    // @ts-ignore
                    public setTransportGuaranteeRedirectStatus(transportGuaranteeRedirectStatus: number /*int*/): void
                    // @ts-ignore
                    public getCredentialHandler(): org.apache.catalina.CredentialHandler
                    // @ts-ignore
                    public setCredentialHandler(credentialHandler: org.apache.catalina.CredentialHandler): void
                    /**
                     * Return the Container with which this Realm has been associated.
                     */
                    // @ts-ignore
                    public getContainer(): org.apache.catalina.Container
                    /**
                     * Set the Container with which this Realm has been associated.
                     * @param container The associated Container
                     */
                    // @ts-ignore
                    public setContainer(container: org.apache.catalina.Container): void
                    /**
                     * Return the all roles mode.
                     * @return A string representation of the current all roles mode
                     */
                    // @ts-ignore
                    public getAllRolesMode(): string
                    /**
                     * Set the all roles mode.
                     * @param allRolesMode A string representation of the new all roles mode
                     */
                    // @ts-ignore
                    public setAllRolesMode(allRolesMode: java.lang.String | string): void
                    /**
                     * Return the "validate certificate chains" flag.
                     * @return The value of the validate certificate chains flag
                     */
                    // @ts-ignore
                    public getValidate(): boolean
                    /**
                     * Set the "validate certificate chains" flag.
                     * @param validate The new validate certificate chains flag
                     */
                    // @ts-ignore
                    public setValidate(validate: boolean): void
                    /**
                     * Gets the name of the class that will be used to extract user names
                     * from X509 client certificates.
                     * @return The name of the class that will be used to extract user names
                     *          from X509 client certificates.
                     */
                    // @ts-ignore
                    public getX509UsernameRetrieverClassName(): string
                    /**
                     * Sets the name of the class that will be used to extract user names
                     * from X509 client certificates. The class must implement
                     * X509UsernameRetriever.
                     * @param className The name of the class that will be used to extract user names
                     *                   from X509 client certificates.
                     * @see X509UsernameRetriever
                     */
                    // @ts-ignore
                    public setX509UsernameRetrieverClassName(className: java.lang.String | string): void
                    // @ts-ignore
                    public isStripRealmForGss(): boolean
                    // @ts-ignore
                    public setStripRealmForGss(stripRealmForGss: boolean): void
                    /**
                     * Add a property change listener to this component.
                     * @param listener The listener to add
                     */
                    // @ts-ignore
                    public addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                    /**
                     * Return the Principal associated with the specified username, if there
                     * is one; otherwise return <code>null</code>.
                     * @param username Username of the Principal to look up
                     */
                    // @ts-ignore
                    public authenticate(username: java.lang.String | string): java.security.Principal
                    /**
                     * Return the Principal associated with the specified username and
                     * credentials, if there is one; otherwise return <code>null</code>.
                     * @param username Username of the Principal to look up
                     * @param credentials Password or other credentials to use in
                     *   authenticating this username
                     * @return the associated principal, or <code>null</code> if there is none.
                     */
                    // @ts-ignore
                    public authenticate(username: java.lang.String | string, credentials: java.lang.String | string): java.security.Principal
                    /**
                     * Try to authenticate with the specified username, which
                     * matches the digest calculated using the given parameters using the
                     * method described in RFC 2617 (which is a superset of RFC 2069).
                     * @param username Username of the Principal to look up
                     * @param clientDigest Digest which has been submitted by the client
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
                    public authenticate(username: java.lang.String | string, clientDigest: java.lang.String | string, nonce: java.lang.String | string, nc: java.lang.String | string, cnonce: java.lang.String | string, qop: java.lang.String | string, realm: java.lang.String | string, md5a2: java.lang.String | string): java.security.Principal
                    /**
                     * Return the Principal associated with the specified chain of X509
                     * client certificates.  If there is none, return <code>null</code>.
                     * @param certs Array of client certificates, with the first one in
                     *   the array being the certificate of the client itself.
                     */
                    // @ts-ignore
                    public authenticate(certs: java.security.cert.X509Certificate[]): java.security.Principal
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public authenticate(gssContext: org.ietf.jgss.GSSContext, storeCreds: boolean): java.security.Principal
                    /**
                     * Execute a periodic task, such as reloading, etc. This method will be
                     * invoked inside the classloading context of this container. Unexpected
                     * throwables will be caught and logged.
                     */
                    // @ts-ignore
                    public backgroundProcess(): void
                    /**
                     * Return the SecurityConstraints configured to guard the request URI for
                     * this request, or <code>null</code> if there is no such constraint.
                     * @param request Request we are processing
                     * @param context Context the Request is mapped to
                     */
                    // @ts-ignore
                    public findSecurityConstraints(request: org.apache.catalina.connector.Request, context: org.apache.catalina.Context): org.apache.tomcat.util.descriptor.web.SecurityConstraint[]
                    /**
                     * Perform access control based on the specified authorization constraint.
                     * Return <code>true</code> if this constraint is satisfied and processing
                     * should continue, or <code>false</code> otherwise.
                     * @param request Request we are processing
                     * @param response Response we are creating
                     * @param constraints Security constraint we are enforcing
                     * @param context The Context to which client of this class is attached.
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public hasResourcePermission(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response, constraints: org.apache.tomcat.util.descriptor.web.SecurityConstraint[], context: org.apache.catalina.Context): boolean
                    /**
                     * {@inheritDoc}
                     * This method or {@link #hasRoleInternal(Principal,
                     * String)} can be overridden by Realm implementations, but the default is
                     * adequate when an instance of <code>GenericPrincipal</code> is used to
                     * represent authenticated Principals from this Realm.
                     */
                    // @ts-ignore
                    public hasRole(wrapper: org.apache.catalina.Wrapper, principal: java.security.Principal, role: java.lang.String | string): boolean
                    /**
                     * Check if the specified Principal has the specified
                     * security role, within the context of this Realm.
                     * This method or {@link #hasRoleInternal(Principal,
                     * String)} can be overridden by Realm implementations, but the default is
                     * adequate when an instance of <code>GenericPrincipal</code> is used to
                     * represent authenticated Principals from this Realm.
                     * @param principal Principal for whom the role is to be checked
                     * @param role Security role to be checked
                     * @return <code>true</code> if the specified Principal has the specified
                     *          security role, within the context of this Realm; otherwise return
                     *          <code>false</code>.
                     */
                    // @ts-ignore
                    hasRoleInternal(principal: java.security.Principal, role: java.lang.String | string): boolean
                    /**
                     * Enforce any user data constraint required by the security constraint
                     * guarding this request URI.  Return <code>true</code> if this constraint
                     * was not violated and processing should continue, or <code>false</code>
                     * if we have created a response already.
                     * @param request Request we are processing
                     * @param response Response we are creating
                     * @param constraints Security constraint being checked
                     * @exception IOException if an input/output error occurs
                     */
                    // @ts-ignore
                    public hasUserDataPermission(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response, constraints: org.apache.tomcat.util.descriptor.web.SecurityConstraint[]): boolean
                    /**
                     * Remove a property change listener from this component.
                     * @param listener The listener to remove
                     */
                    // @ts-ignore
                    public removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                    // @ts-ignore
                    initInternal(): void
                    /**
                     * Prepare for the beginning of active use of the public methods of this
                     * component and implement the requirements of
                     * {@link org.apache.catalina.util.LifecycleBase#startInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that prevents this component from being used
                     */
                    // @ts-ignore
                    startInternal(): void
                    /**
                     * Gracefully terminate the active use of the public methods of this
                     * component and implement the requirements of
                     * {@link org.apache.catalina.util.LifecycleBase#stopInternal()}.
                     * @exception LifecycleException if this component detects a fatal error
                     *   that needs to be reported
                     */
                    // @ts-ignore
                    stopInternal(): void
                    /**
                     * Return a String representation of this component.
                     */
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    hasMessageDigest(): boolean
                    /**
                     * Return the digest associated with given principal's user name.
                     * @param username the user name
                     * @param realmName the realm name
                     * @return the digest for the specified user
                     */
                    // @ts-ignore
                    getDigest(username: java.lang.String | string, realmName: java.lang.String | string): string
                    /**
                     * Get the password for the specified user.
                     * @param username The user name
                     * @return the password associated with the given principal's user name.
                     */
                    // @ts-ignore
                    abstract getPassword(username: java.lang.String | string): string
                    /**
                     * Get the principal associated with the specified certificate.
                     * @param usercert The user certificate
                     * @return the Principal associated with the given certificate.
                     */
                    // @ts-ignore
                    getPrincipal(usercert: java.security.cert.X509Certificate): java.security.Principal
                    /**
                     * Get the principal associated with the specified user.
                     * @param username The user name
                     * @return the Principal associated with the given user name.
                     */
                    // @ts-ignore
                    abstract getPrincipal(username: java.lang.String | string): java.security.Principal
                    // @ts-ignore
                    getPrincipal(username: java.lang.String | string, gssCredential: org.ietf.jgss.GSSCredential): java.security.Principal
                    /**
                     * Return the Server object that is the ultimate parent for the container
                     * with which this Realm is associated. If the server cannot be found (eg
                     * because the container hierarchy is not complete), <code>null</code> is
                     * returned.
                     * @return the Server associated with the realm
                     */
                    // @ts-ignore
                    getServer(): org.apache.catalina.Server
                    /**
                     * Generate a stored credential string for the given password and associated
                     * parameters.
                     * <p>The following parameters are supported:</p>
                     * <ul>
                     * <li><b>-a</b> - The algorithm to use to generate the stored
                     * credential. If not specified a default of SHA-512 will be
                     * used.</li>
                     * <li><b>-e</b> - The encoding to use for any byte to/from character
                     * conversion that may be necessary. If not specified, the
                     * system encoding ({@link Charset#defaultCharset()}) will
                     * be used.</li>
                     * <li><b>-i</b> - The number of iterations to use when generating the
                     * stored credential. If not specified, the default for the
                     * CredentialHandler will be used.</li>
                     * <li><b>-s</b> - The length (in bytes) of salt to generate and store as
                     * part of the credential. If not specified, the default for
                     * the CredentialHandler will be used.</li>
                     * <li><b>-k</b> - The length (in bits) of the key(s), if any, created while
                     * generating the credential. If not specified, the default
                     * for the CredentialHandler will be used.</li>
                     * <li><b>-h</b> - The fully qualified class name of the CredentialHandler
                     * to use. If not specified, the built-in handlers will be
                     * tested in turn and the first one to accept the specified
                     * algorithm will be used.</li>
                     * </ul>
                     * <p>This generation process currently supports the following
                     * CredentialHandlers, the correct one being selected based on the algorithm
                     * specified:</p>
                     * <ul>
                     * <li>{@link MessageDigestCredentialHandler}</li>
                     * <li>{@link SecretKeyCredentialHandler}</li>
                     * </ul>
                     * @param args The parameters passed on the command line
                     */
                    // @ts-ignore
                    public static main(args: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public getObjectNameKeyProperties(): string
                    // @ts-ignore
                    public getDomainInternal(): string
                    // @ts-ignore
                    public getRealmPath(): string
                    // @ts-ignore
                    public setRealmPath(theRealmPath: java.lang.String | string): void
                    // @ts-ignore
                    getRealmSuffix(): string
                    // @ts-ignore
                    public getRoles(principal: java.security.Principal): string[]
                }
            }
        }
    }
}
