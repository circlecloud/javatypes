declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                /**
                 * Generic implementation of <strong>java.security.Principal</strong> that
                 * is available for use by <code>Realm</code> implementations.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class GenericPrincipal extends java.lang.Object implements org.apache.catalina.TomcatPrincipal, java.io.Serializable {
                    /**
                     * Construct a new Principal, associated with the specified Realm, for the
                     * specified username and password, with the specified role names
                     * (as Strings).
                     * @param name The username of the user represented by this Principal
                     * @param password Credentials used to authenticate this user
                     * @param roles List of roles (must be Strings) possessed by this user
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, password: java.lang.String | string, roles: java.util.List<java.lang.String | string> | Array<java.lang.String | string>)
                    /**
                     * Construct a new Principal, associated with the specified Realm, for the
                     * specified username and password, with the specified role names
                     * (as Strings).
                     * @param name The username of the user represented by this Principal
                     * @param password Credentials used to authenticate this user
                     * @param roles List of roles (must be Strings) possessed by this user
                     * @param userPrincipal - the principal to be returned from the request
                     *         getUserPrincipal call if not null; if null, this will be returned
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, password: java.lang.String | string, roles: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, userPrincipal: java.security.Principal)
                    /**
                     * Construct a new Principal, associated with the specified Realm, for the
                     * specified username and password, with the specified role names
                     * (as Strings).
                     * @param name The username of the user represented by this Principal
                     * @param password Credentials used to authenticate this user
                     * @param roles List of roles (must be Strings) possessed by this user
                     * @param userPrincipal - the principal to be returned from the request
                     *         getUserPrincipal call if not null; if null, this will be returned
                     * @param loginContext  - If provided, this will be used to log out the user
                     *         at the appropriate time
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, password: java.lang.String | string, roles: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, userPrincipal: java.security.Principal, loginContext: javax.security.auth.login.LoginContext)
                    /**
                     * Construct a new Principal, associated with the specified Realm, for the
                     * specified username and password, with the specified role names
                     * (as Strings).
                     * @param name The username of the user represented by this Principal
                     * @param password Credentials used to authenticate this user
                     * @param roles List of roles (must be Strings) possessed by this user
                     * @param userPrincipal - the principal to be returned from the request
                     *         getUserPrincipal call if not null; if null, this will be returned
                     * @param loginContext  - If provided, this will be used to log out the user
                     *         at the appropriate time
                     * @param gssCredential - If provided, the user's delegated credentials
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, password: java.lang.String | string, roles: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, userPrincipal: java.security.Principal, loginContext: javax.security.auth.login.LoginContext, gssCredential: org.ietf.jgss.GSSCredential)
                    /**
                     * The username of the user represented by this Principal.
                     */
                    // @ts-ignore
                    readonly name: java.lang.String | string
                    /**
                     * The authentication credentials for the user represented by
                     * this Principal.
                     */
                    // @ts-ignore
                    readonly password: java.lang.String | string
                    /**
                     * The set of roles associated with this user.
                     */
                    // @ts-ignore
                    readonly roles: java.lang.String[] | string[]
                    /**
                     * The authenticated Principal to be exposed to applications.
                     */
                    // @ts-ignore
                    readonly userPrincipal: java.security.Principal
                    /**
                     * The JAAS LoginContext, if any, used to authenticate this Principal.
                     * Kept so we can call logout().
                     */
                    // @ts-ignore
                    readonly loginContext: javax.security.auth.login.LoginContext
                    /**
                     * The user's delegated credentials.
                     */
                    // @ts-ignore
                    gssCredential: org.ietf.jgss.GSSCredential
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getPassword(): string
                    // @ts-ignore
                    public getRoles(): string[]
                    // @ts-ignore
                    public getUserPrincipal(): java.security.Principal
                    // @ts-ignore
                    public getGssCredential(): org.ietf.jgss.GSSCredential
                    // @ts-ignore
                    setGssCredential(gssCredential: org.ietf.jgss.GSSCredential): void
                    /**
                     * Does the user represented by this Principal possess the specified role?
                     * @param role Role to be tested
                     * @return <code>true</code> if this Principal has been assigned the given
                     *          role, otherwise <code>false</code>
                     */
                    // @ts-ignore
                    public hasRole(role: java.lang.String | string): boolean
                    /**
                     * Return a String representation of this object, which exposes only
                     * information that should be public.
                     */
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public logout(): void
                }
            }
        }
    }
}
