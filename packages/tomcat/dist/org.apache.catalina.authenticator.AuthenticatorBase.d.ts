declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                /**
                 * Basic implementation of the <b>Valve</b> interface that enforces the
                 * <code>&lt;security-constraint&gt;</code> elements in the web application
                 * deployment descriptor. This functionality is implemented as a Valve so that
                 * it can be omitted in environments that do not require these features.
                 * Individual implementations of each supported authentication method can
                 * subclass this base class as required.
                 * <p>
                 * <b>USAGE CONSTRAINT</b>: When this class is utilized, the Context to which it
                 * is attached (or a parent Container in a hierarchy) must have an associated
                 * Realm that can be used for authenticating users and enumerating the roles to
                 * which they have been assigned.
                 * <p>
                 * <b>USAGE CONSTRAINT</b>: This Valve is only useful when processing HTTP
                 * requests. Requests of any other type will simply be passed through.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                abstract class AuthenticatorBase extends org.apache.catalina.valves.ValveBase implements org.apache.catalina.Authenticator, javax.security.auth.message.config.RegistrationListener {
                    // @ts-ignore
                    constructor()
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * Authentication header
                     */
                    // @ts-ignore
                    static readonly AUTH_HEADER_NAME: java.lang.String | string
                    /**
                     * Default authentication realm name.
                     */
                    // @ts-ignore
                    static readonly REALM_NAME: java.lang.String | string
                    /**
                     * Should a session always be used once a user is authenticated? This may
                     * offer some performance benefits since the session can then be used to
                     * cache the authenticated Principal, hence removing the need to
                     * authenticate the user via the Realm on every request. This may be of help
                     * for combinations such as BASIC authentication used with the JNDIRealm or
                     * DataSourceRealms. However there will also be the performance cost of
                     * creating and GC'ing the session. By default, a session will not be
                     * created.
                     */
                    // @ts-ignore
                    alwaysUseSession: boolean
                    /**
                     * Should we cache authenticated Principals if the request is part of an
                     * HTTP session?
                     */
                    // @ts-ignore
                    cache: boolean
                    /**
                     * Should the session ID, if any, be changed upon a successful
                     * authentication to prevent a session fixation attack?
                     */
                    // @ts-ignore
                    changeSessionIdOnAuthentication: boolean
                    /**
                     * The Context to which this Valve is attached.
                     */
                    // @ts-ignore
                    context: org.apache.catalina.Context
                    /**
                     * Flag to determine if we disable proxy caching, or leave the issue up to
                     * the webapp developer.
                     */
                    // @ts-ignore
                    disableProxyCaching: boolean
                    /**
                     * Flag to determine if we disable proxy caching with headers incompatible
                     * with IE.
                     */
                    // @ts-ignore
                    securePagesWithPragma: boolean
                    /**
                     * The Java class name of the secure random number generator class to be
                     * used when generating SSO session identifiers. The random number generator
                     * class must be self-seeding and have a zero-argument constructor. If not
                     * specified, an instance of {@link java.security.SecureRandom} will be
                     * generated.
                     */
                    // @ts-ignore
                    secureRandomClass: java.lang.String | string
                    /**
                     * The name of the algorithm to use to create instances of
                     * {@link java.security.SecureRandom} which are used to generate SSO session
                     * IDs. If no algorithm is specified, SHA1PRNG is used. To use the platform
                     * default (which may be SHA1PRNG), specify the empty string. If an invalid
                     * algorithm and/or provider is specified the SecureRandom instances will be
                     * created using the defaults. If that fails, the SecureRandom instances
                     * will be created using platform defaults.
                     */
                    // @ts-ignore
                    secureRandomAlgorithm: java.lang.String | string
                    /**
                     * The name of the provider to use to create instances of
                     * {@link java.security.SecureRandom} which are used to generate session SSO
                     * IDs. If no algorithm is specified the of SHA1PRNG default is used. If an
                     * invalid algorithm and/or provider is specified the SecureRandom instances
                     * will be created using the defaults. If that fails, the SecureRandom
                     * instances will be created using platform defaults.
                     */
                    // @ts-ignore
                    secureRandomProvider: java.lang.String | string
                    /**
                     * The name of the JASPIC callback handler class. If none is specified the
                     * default {@link org.apache.catalina.authenticator.jaspic.CallbackHandlerImpl}
                     * will be used.
                     */
                    // @ts-ignore
                    jaspicCallbackHandlerClass: java.lang.String | string
                    // @ts-ignore
                    sessionIdGenerator: org.apache.catalina.util.SessionIdGeneratorBase
                    /**
                     * The SingleSignOn implementation in our request processing chain, if there
                     * is one.
                     */
                    // @ts-ignore
                    sso: org.apache.catalina.authenticator.SingleSignOn
                    // @ts-ignore
                    static getRealmName(context: org.apache.catalina.Context): string
                    // @ts-ignore
                    public getAlwaysUseSession(): boolean
                    // @ts-ignore
                    public setAlwaysUseSession(alwaysUseSession: boolean): void
                    /**
                     * Return the cache authenticated Principals flag.
                     * @return <code>true</code> if authenticated Principals will be cached,
                     *          otherwise <code>false</code>
                     */
                    // @ts-ignore
                    public getCache(): boolean
                    /**
                     * Set the cache authenticated Principals flag.
                     * @param cache
                     *             The new cache flag
                     */
                    // @ts-ignore
                    public setCache(cache: boolean): void
                    /**
                     * Return the Container to which this Valve is attached.
                     */
                    // @ts-ignore
                    public getContainer(): org.apache.catalina.Container
                    /**
                     * Set the Container to which this Valve is attached.
                     * @param container
                     *             The container to which we are attached
                     */
                    // @ts-ignore
                    public setContainer(container: org.apache.catalina.Container): void
                    /**
                     * Return the flag that states if we add headers to disable caching by
                     * proxies.
                     * @return <code>true</code> if the headers will be added, otherwise
                     *          <code>false</code>
                     */
                    // @ts-ignore
                    public getDisableProxyCaching(): boolean
                    /**
                     * Set the value of the flag that states if we add headers to disable
                     * caching by proxies.
                     * @param nocache
                     *             <code>true</code> if we add headers to disable proxy caching,
                     *             <code>false</code> if we leave the headers alone.
                     */
                    // @ts-ignore
                    public setDisableProxyCaching(nocache: boolean): void
                    /**
                     * Return the flag that states, if proxy caching is disabled, what headers
                     * we add to disable the caching.
                     * @return <code>true</code> if a Pragma header should be used, otherwise
                     *          <code>false</code>
                     */
                    // @ts-ignore
                    public getSecurePagesWithPragma(): boolean
                    /**
                     * Set the value of the flag that states what headers we add to disable
                     * proxy caching.
                     * @param securePagesWithPragma
                     *             <code>true</code> if we add headers which are incompatible
                     *             with downloading office documents in IE under SSL but which
                     *             fix a caching problem in Mozilla.
                     */
                    // @ts-ignore
                    public setSecurePagesWithPragma(securePagesWithPragma: boolean): void
                    /**
                     * Return the flag that states if we should change the session ID of an
                     * existing session upon successful authentication.
                     * @return <code>true</code> to change session ID upon successful
                     *          authentication, <code>false</code> to do not perform the change.
                     */
                    // @ts-ignore
                    public getChangeSessionIdOnAuthentication(): boolean
                    /**
                     * Set the value of the flag that states if we should change the session ID
                     * of an existing session upon successful authentication.
                     * @param changeSessionIdOnAuthentication <code>true</code> to change
                     *             session ID upon successful authentication, <code>false</code>
                     *             to do not perform the change.
                     */
                    // @ts-ignore
                    public setChangeSessionIdOnAuthentication(changeSessionIdOnAuthentication: boolean): void
                    /**
                     * Return the secure random number generator class name.
                     * @return The fully qualified name of the SecureRandom implementation to
                     *          use
                     */
                    // @ts-ignore
                    public getSecureRandomClass(): string
                    /**
                     * Set the secure random number generator class name.
                     * @param secureRandomClass
                     *             The new secure random number generator class name
                     */
                    // @ts-ignore
                    public setSecureRandomClass(secureRandomClass: java.lang.String | string): void
                    /**
                     * Return the secure random number generator algorithm name.
                     * @return The name of the SecureRandom algorithm used
                     */
                    // @ts-ignore
                    public getSecureRandomAlgorithm(): string
                    /**
                     * Set the secure random number generator algorithm name.
                     * @param secureRandomAlgorithm
                     *             The new secure random number generator algorithm name
                     */
                    // @ts-ignore
                    public setSecureRandomAlgorithm(secureRandomAlgorithm: java.lang.String | string): void
                    /**
                     * Return the secure random number generator provider name.
                     * @return The name of the SecureRandom provider
                     */
                    // @ts-ignore
                    public getSecureRandomProvider(): string
                    /**
                     * Set the secure random number generator provider name.
                     * @param secureRandomProvider
                     *             The new secure random number generator provider name
                     */
                    // @ts-ignore
                    public setSecureRandomProvider(secureRandomProvider: java.lang.String | string): void
                    /**
                     * Return the JASPIC callback handler class name
                     * @return The name of the JASPIC callback handler
                     */
                    // @ts-ignore
                    public getJaspicCallbackHandlerClass(): string
                    /**
                     * Set the JASPIC callback handler class name
                     * @param jaspicCallbackHandlerClass
                     *             The new JASPIC callback handler class name
                     */
                    // @ts-ignore
                    public setJaspicCallbackHandlerClass(jaspicCallbackHandlerClass: java.lang.String | string): void
                    /**
                     * Enforce the security restrictions in the web application deployment
                     * descriptor of our associated Context.
                     * @param request
                     *             Request to be processed
                     * @param response
                     *             Response to be processed
                     * @exception IOException
                     *                 if an input/output error occurs
                     * @exception ServletException
                     *                 if thrown by a processing element
                     */
                    // @ts-ignore
                    public invoke(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response): void
                    // @ts-ignore
                    public authenticate(request: org.apache.catalina.connector.Request, httpResponse: javax.servlet.http.HttpServletResponse): boolean
                    /**
                     * Provided for sub-classes to implement their specific authentication
                     * mechanism.
                     * @param request The request that triggered the authentication
                     * @param response The response associated with the request
                     * @return {#code true} if the the user was authenticated, otherwise {@code
                     *          false}, in which case an authentication challenge will have been
                     *          written to the response
                     * @throws IOException If an I/O problem occurred during the authentication
                     *                      process
                     */
                    // @ts-ignore
                    abstract doAuthenticate(request: org.apache.catalina.connector.Request, response: javax.servlet.http.HttpServletResponse): boolean
                    /**
                     * Does this authenticator require that {@link #authenticate(Request,
                     * HttpServletResponse)} is called to continue an authentication process
                     * that started in a previous request?
                     * @param request The request currently being processed
                     * @return {#code true} if authenticate() must be called, otherwise
                     *          {@code false}
                     */
                    // @ts-ignore
                    isContinuationRequired(request: org.apache.catalina.connector.Request): boolean
                    /**
                     * Look for the X509 certificate chain in the Request under the key
                     * <code>javax.servlet.request.X509Certificate</code>. If not found, trigger
                     * extracting the certificate chain from the Coyote request.
                     * @param request
                     *             Request to be processed
                     * @return The X509 certificate chain if found, <code>null</code> otherwise.
                     */
                    // @ts-ignore
                    getRequestCertificates(request: org.apache.catalina.connector.Request): java.security.cert.X509Certificate[]
                    /**
                     * Associate the specified single sign on identifier with the specified
                     * Session.
                     * @param ssoId
                     *             Single sign on identifier
                     * @param session
                     *             Session to be associated
                     */
                    // @ts-ignore
                    associate(ssoId: java.lang.String | string, session: org.apache.catalina.Session): void
                    /**
                     * Check to see if the user has already been authenticated earlier in the
                     * processing chain or if there is enough information available to
                     * authenticate the user without requiring further user interaction.
                     * @param request
                     *             The current request
                     * @param response
                     *             The current response
                     * @param useSSO
                     *             Should information available from SSO be used to attempt to
                     *             authenticate the current user?
                     * @return <code>true</code> if the user was authenticated via the cache,
                     *          otherwise <code>false</code>
                     */
                    // @ts-ignore
                    checkForCachedAuthentication(request: org.apache.catalina.connector.Request, response: javax.servlet.http.HttpServletResponse, useSSO: boolean): boolean
                    /**
                     * Attempts reauthentication to the <code>Realm</code> using the credentials
                     * included in argument <code>entry</code>.
                     * @param ssoId
                     *             identifier of SingleSignOn session with which the caller is
                     *             associated
                     * @param request
                     *             the request that needs to be authenticated
                     * @return <code>true</code> if the reauthentication from SSL occurred
                     */
                    // @ts-ignore
                    reauthenticateFromSSO(ssoId: java.lang.String | string, request: org.apache.catalina.connector.Request): boolean
                    /**
                     * Register an authenticated Principal and authentication type in our
                     * request, in the current session (if there is one), and with our
                     * SingleSignOn valve, if there is one. Set the appropriate cookie to be
                     * returned.
                     * @param request
                     *             The servlet request we are processing
                     * @param response
                     *             The servlet response we are generating
                     * @param principal
                     *             The authenticated Principal to be registered
                     * @param authType
                     *             The authentication type to be registered
                     * @param username
                     *             Username used to authenticate (if any)
                     * @param password
                     *             Password used to authenticate (if any)
                     */
                    // @ts-ignore
                    public register(request: org.apache.catalina.connector.Request, response: javax.servlet.http.HttpServletResponse, principal: java.security.Principal, authType: java.lang.String | string, username: java.lang.String | string, password: java.lang.String | string): void
                    // @ts-ignore
                    public login(username: java.lang.String | string, password: java.lang.String | string, request: org.apache.catalina.connector.Request): void
                    // @ts-ignore
                    abstract getAuthMethod(): string
                    /**
                     * Process the login request.
                     * @param request
                     *             Associated request
                     * @param username
                     *             The user
                     * @param password
                     *             The password
                     * @return The authenticated Principal
                     * @throws ServletException
                     *              No principal was authenticated with the specified credentials
                     */
                    // @ts-ignore
                    doLogin(request: org.apache.catalina.connector.Request, username: java.lang.String | string, password: java.lang.String | string): java.security.Principal
                    // @ts-ignore
                    public logout(request: org.apache.catalina.connector.Request): void
                    /**
                     * Start this component and implement the requirements of
                     * {@link org.apache.catalina.util.LifecycleBase#startInternal()}.
                     * @exception LifecycleException
                     *                 if this component detects a fatal error that prevents this
                     *                 component from being used
                     */
                    // @ts-ignore
                    startInternal(): void
                    /**
                     * Stop this component and implement the requirements of
                     * {@link org.apache.catalina.util.LifecycleBase#stopInternal()}.
                     * @exception LifecycleException
                     *                 if this component detects a fatal error that prevents this
                     *                 component from being used
                     */
                    // @ts-ignore
                    stopInternal(): void
                    // @ts-ignore
                    public notify(layer: java.lang.String | string, appContext: java.lang.String | string): void
                }
            }
        }
    }
}
