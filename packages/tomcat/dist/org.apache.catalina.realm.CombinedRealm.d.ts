declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                /**
                 * Realm implementation that contains one or more realms. Authentication is
                 * attempted for each realm in the order they were configured. If any realm
                 * authenticates the user then the authentication succeeds. When combining
                 * realms usernames should be unique across all combined realms.
                 */
                // @ts-ignore
                class CombinedRealm extends org.apache.catalina.realm.RealmBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * The list of Realms contained by this Realm.
                     */
                    // @ts-ignore
                    readonly realms: java.util.List<org.apache.catalina.Realm> | Array<org.apache.catalina.Realm>
                    /**
                     * Add a realm to the list of realms that will be used to authenticate
                     * users.
                     * @param theRealm realm which should be wrapped by the combined realm
                     */
                    // @ts-ignore
                    public addRealm(theRealm: org.apache.catalina.Realm): void
                    /**
                     * @return the set of Realms that this Realm is wrapping
                     */
                    // @ts-ignore
                    public getRealms(): javax.management.ObjectName[]
                    /**
                     * @return the list of Realms contained by this Realm.
                     */
                    // @ts-ignore
                    public getNestedRealms(): org.apache.catalina.Realm[]
                    /**
                     * Return the Principal associated with the specified username, which
                     * matches the digest calculated using the given parameters using the
                     * method described in RFC 2069; otherwise return <code>null</code>.
                     * @param username Username of the Principal to look up
                     * @param clientDigest Digest which has been submitted by the client
                     * @param nonce Unique (or supposedly unique) token which has been used
                     *  for this request
                     * @param realmName Realm name
                     * @param md5a2 Second MD5 digest used to calculate the digest :
                     *  MD5(Method + ":" + uri)
                     */
                    // @ts-ignore
                    public authenticate(username: java.lang.String | string, clientDigest: java.lang.String | string, nonce: java.lang.String | string, nc: java.lang.String | string, cnonce: java.lang.String | string, qop: java.lang.String | string, realmName: java.lang.String | string, md5a2: java.lang.String | string): java.security.Principal
                    /**
                     * Return the Principal associated with the specified user name otherwise
                     * return <code>null</code>.
                     * @param username User name of the Principal to look up
                     */
                    // @ts-ignore
                    public authenticate(username: java.lang.String | string): java.security.Principal
                    /**
                     * Return the Principal associated with the specified username and
                     * credentials, if there is one; otherwise return <code>null</code>.
                     * @param username Username of the Principal to look up
                     * @param credentials Password or other credentials to use in
                     *   authenticating this username
                     */
                    // @ts-ignore
                    public authenticate(username: java.lang.String | string, credentials: java.lang.String | string): java.security.Principal
                    /**
                     * Set the Container with which this Realm has been associated.
                     * @param container The associated Container
                     */
                    // @ts-ignore
                    public setContainer(container: org.apache.catalina.Container): void
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
                     * Ensure child Realms are destroyed when this Realm is destroyed.
                     */
                    // @ts-ignore
                    destroyInternal(): void
                    /**
                     * Delegate the backgroundProcess call to all sub-realms.
                     */
                    // @ts-ignore
                    public backgroundProcess(): void
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
                    // @ts-ignore
                    getPassword(username: java.lang.String | string): string
                    // @ts-ignore
                    getPrincipal(username: java.lang.String | string): java.security.Principal
                    // @ts-ignore
                    public isAvailable(): boolean
                }
            }
        }
    }
}
