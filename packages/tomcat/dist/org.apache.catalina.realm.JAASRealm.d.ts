declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                /**
                 * <p>Implementation of <b>Realm</b> that authenticates users via the <em>Java
                 * Authentication and Authorization Service</em> (JAAS).  JAAS support requires
                 * either JDK 1.4 (which includes it as part of the standard platform) or
                 * JDK 1.3 (with the plug-in <code>jaas.jar</code> file).</p>
                 * <p>The value configured for the <code>appName</code> property is passed to
                 * the <code>javax.security.auth.login.LoginContext</code> constructor, to
                 * specify the <em>application name</em> used to select the set of relevant
                 * <code>LoginModules</code> required.</p>
                 * <p>The JAAS Specification describes the result of a successful login as a
                 * <code>javax.security.auth.Subject</code> instance, which can contain zero
                 * or more <code>java.security.Principal</code> objects in the return value
                 * of the <code>Subject.getPrincipals()</code> method.  However, it provides
                 * no guidance on how to distinguish Principals that describe the individual
                 * user (and are thus appropriate to return as the value of
                 * request.getUserPrincipal() in a web application) from the Principal(s)
                 * that describe the authorized roles for this user.  To maintain as much
                 * independence as possible from the underlying <code>LoginMethod</code>
                 * implementation executed by JAAS, the following policy is implemented by
                 * this Realm:</p>
                 * <ul>
                 * <li>The JAAS <code>LoginModule</code> is assumed to return a
                 * <code>Subject</code> with at least one <code>Principal</code> instance
                 * representing the user himself or herself, and zero or more separate
                 * <code>Principals</code> representing the security roles authorized
                 * for this user.</li>
                 * <li>On the <code>Principal</code> representing the user, the Principal
                 * name is an appropriate value to return via the Servlet API method
                 * <code>HttpServletRequest.getRemoteUser()</code>.</li>
                 * <li>On the <code>Principals</code> representing the security roles, the
                 * name is the name of the authorized security role.</li>
                 * <li>This Realm will be configured with two lists of fully qualified Java
                 * class names of classes that implement
                 * <code>java.security.Principal</code> - one that identifies class(es)
                 * representing a user, and one that identifies class(es) representing
                 * a security role.</li>
                 * <li>As this Realm iterates over the <code>Principals</code> returned by
                 * <code>Subject.getPrincipals()</code>, it will identify the first
                 * <code>Principal</code> that matches the "user classes" list as the
                 * <code>Principal</code> for this user.</li>
                 * <li>As this Realm iterates over the <code>Principals</code> returned by
                 * <code>Subject.getPrincipals()</code>, it will accumulate the set of
                 * all <code>Principals</code> matching the "role classes" list as
                 * identifying the security roles for this user.</li>
                 * <li>It is a configuration error for the JAAS login method to return a
                 * validated <code>Subject</code> without a <code>Principal</code> that
                 * matches the "user classes" list.</li>
                 * <li>By default, the enclosing Container's name serves as the
                 * application name used to obtain the JAAS LoginContext ("Catalina" in
                 * a default installation). Tomcat must be able to find an application
                 * with this name in the JAAS configuration file. Here is a hypothetical
                 * JAAS configuration file entry for a database-oriented login module that uses
                 * a Tomcat-managed JNDI database resource:
                 * <blockquote><pre>Catalina {
                 * org.foobar.auth.DatabaseLoginModule REQUIRED
                 * JNDI_RESOURCE=jdbc/AuthDB
                 * USER_TABLE=users
                 * USER_ID_COLUMN=id
                 * USER_NAME_COLUMN=name
                 * USER_CREDENTIAL_COLUMN=password
                 * ROLE_TABLE=roles
                 * ROLE_NAME_COLUMN=name
                 * PRINCIPAL_FACTORY=org.foobar.auth.impl.SimplePrincipalFactory;
                 * };</pre></blockquote></li>
                 * <li>To set the JAAS configuration file
                 * location, set the <code>CATALINA_OPTS</code> environment variable
                 * similar to the following:
                 * <blockquote><code>CATALINA_OPTS="-Djava.security.auth.login.config=$CATALINA_HOME/conf/jaas.config"</code></blockquote>
                 * </li>
                 * <li>As part of the login process, JAASRealm registers its own <code>CallbackHandler</code>,
                 * called (unsurprisingly) <code>JAASCallbackHandler</code>. This handler supplies the
                 * HTTP requests's username and credentials to the user-supplied <code>LoginModule</code></li>
                 * <li>As with other <code>Realm</code> implementations, digested passwords are supported if
                 * the <code>&lt;Realm&gt;</code> element in <code>server.xml</code> contains a
                 * <code>digest</code> attribute; <code>JAASCallbackHandler</code> will digest the password
                 * prior to passing it back to the <code>LoginModule</code></li>
                 * </ul>
                 * @author Craig R. McClanahan
                 * @author Yoav Shapira
                 */
                // @ts-ignore
                class JAASRealm extends org.apache.catalina.realm.RealmBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * The application name passed to the JAAS <code>LoginContext</code>,
                     * which uses it to select the set of relevant <code>LoginModule</code>s.
                     */
                    // @ts-ignore
                    appName: java.lang.String | string
                    /**
                     * The list of role class names, split out for easy processing.
                     */
                    // @ts-ignore
                    readonly roleClasses: java.util.List<java.lang.String | string> | Array<java.lang.String | string>
                    /**
                     * The set of user class names, split out for easy processing.
                     */
                    // @ts-ignore
                    readonly userClasses: java.util.List<java.lang.String | string> | Array<java.lang.String | string>
                    /**
                     * Whether to use context ClassLoader or default ClassLoader.
                     * True means use context ClassLoader, and True is the default
                     * value.
                     */
                    // @ts-ignore
                    useContextClassLoader: boolean
                    /**
                     * Path to find a JAAS configuration file, if not set global JVM JAAS
                     * configuration will be used.
                     */
                    // @ts-ignore
                    configFile: java.lang.String | string
                    // @ts-ignore
                    jaasConfiguration: javax.security.auth.login.Configuration
                    // @ts-ignore
                    jaasConfigurationLoaded: boolean
                    /**
                     * Comma-delimited list of <code>java.security.Principal</code> classes
                     * that represent security roles.
                     */
                    // @ts-ignore
                    roleClassNames: java.lang.String | string
                    /**
                     * Comma-delimited list of <code>java.security.Principal</code> classes
                     * that represent individual users.
                     */
                    // @ts-ignore
                    userClassNames: java.lang.String | string
                    /**
                     * @return the path of the JAAS configuration file.
                     */
                    // @ts-ignore
                    public getConfigFile(): string
                    /**
                     * Set the JAAS configuration file.
                     * @param configFile The JAAS configuration file
                     */
                    // @ts-ignore
                    public setConfigFile(configFile: java.lang.String | string): void
                    /**
                     * Set the JAAS <code>LoginContext</code> app name.
                     * @param name The application name that will be used to retrieve
                     *   the set of relevant <code>LoginModule</code>s
                     */
                    // @ts-ignore
                    public setAppName(name: java.lang.String | string): void
                    /**
                     * @return the application name.
                     */
                    // @ts-ignore
                    public getAppName(): string
                    /**
                     * Sets whether to use the context or default ClassLoader.
                     * True means use context ClassLoader.
                     * @param useContext True means use context ClassLoader
                     */
                    // @ts-ignore
                    public setUseContextClassLoader(useContext: boolean): void
                    /**
                     * Returns whether to use the context or default ClassLoader.
                     * True means to use the context ClassLoader.
                     * @return The value of useContextClassLoader
                     */
                    // @ts-ignore
                    public isUseContextClassLoader(): boolean
                    // @ts-ignore
                    public setContainer(container: org.apache.catalina.Container): void
                    // @ts-ignore
                    public getRoleClassNames(): string
                    /**
                     * Sets the list of comma-delimited classes that represent roles. The
                     * classes in the list must implement <code>java.security.Principal</code>.
                     * The supplied list of classes will be parsed when {@link #start()} is
                     * called.
                     * @param roleClassNames The class names list
                     */
                    // @ts-ignore
                    public setRoleClassNames(roleClassNames: java.lang.String | string): void
                    /**
                     * Parses a comma-delimited list of class names, and store the class names
                     * in the provided List. Each class must implement
                     * <code>java.security.Principal</code>.
                     * @param classNamesString a comma-delimited list of fully qualified class names.
                     * @param classNamesList the list in which the class names will be stored.
                     *         The list is cleared before being populated.
                     */
                    // @ts-ignore
                    parseClassNames(classNamesString: java.lang.String | string, classNamesList: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                    // @ts-ignore
                    public getUserClassNames(): string
                    /**
                     * Sets the list of comma-delimited classes that represent individual
                     * users. The classes in the list must implement
                     * <code>java.security.Principal</code>. The supplied list of classes will
                     * be parsed when {@link #start()} is called.
                     * @param userClassNames The class names list
                     */
                    // @ts-ignore
                    public setUserClassNames(userClassNames: java.lang.String | string): void
                    /**
                     * Return the <code>Principal</code> associated with the specified username
                     * and credentials, if there is one; otherwise return <code>null</code>.
                     * @param username Username of the <code>Principal</code> to look up
                     * @param credentials Password or other credentials to use in
                     *   authenticating this username
                     * @return the associated principal, or <code>null</code> if there is none.
                     */
                    // @ts-ignore
                    public authenticate(username: java.lang.String | string, credentials: java.lang.String | string): java.security.Principal
                    /**
                     * Return the <code>Principal</code> associated with the specified username
                     * and digest, if there is one; otherwise return <code>null</code>.
                     * @param username      Username of the <code>Principal</code> to look up
                     * @param clientDigest  Digest to use in authenticating this username
                     * @param nonce         Server generated nonce
                     * @param nc            Nonce count
                     * @param cnonce        Client generated nonce
                     * @param qop           Quality of protection applied to the message
                     * @param realmName     Realm name
                     * @param md5a2         Second MD5 digest used to calculate the digest
                     *                           MD5(Method + ":" + uri)
                     * @return the associated principal, or <code>null</code> if there is none.
                     */
                    // @ts-ignore
                    public authenticate(username: java.lang.String | string, clientDigest: java.lang.String | string, nonce: java.lang.String | string, nc: java.lang.String | string, cnonce: java.lang.String | string, qop: java.lang.String | string, realmName: java.lang.String | string, md5a2: java.lang.String | string): java.security.Principal
                    /**
                     * Perform the actual JAAS authentication.
                     * @param username The user name
                     * @param callbackHandler The callback handler
                     * @return the associated principal, or <code>null</code> if there is none.
                     */
                    // @ts-ignore
                    authenticate(username: java.lang.String | string, callbackHandler: javax.security.auth.callback.CallbackHandler): java.security.Principal
                    /**
                     * @return the password associated with the given principal's user name. This
                     *  always returns null as the JAASRealm has no way of obtaining this
                     *  information.
                     */
                    // @ts-ignore
                    getPassword(username: java.lang.String | string): string
                    /**
                     * @return the <code>Principal</code> associated with the given user name.
                     */
                    // @ts-ignore
                    getPrincipal(username: java.lang.String | string): java.security.Principal
                    /**
                     * Identify and return a <code>java.security.Principal</code> instance
                     * representing the authenticated user for the specified <code>Subject</code>.
                     * The Principal is constructed by scanning the list of Principals returned
                     * by the JAASLoginModule. The first <code>Principal</code> object that matches
                     * one of the class names supplied as a "user class" is the user Principal.
                     * This object is returned to the caller.
                     * Any remaining principal objects returned by the LoginModules are mapped to
                     * roles, but only if their respective classes match one of the "role class" classes.
                     * If a user Principal cannot be constructed, return <code>null</code>.
                     * @param username The associated user name
                     * @param subject The <code>Subject</code> representing the logged-in user
                     * @param loginContext Associated with the Principal so
                     *                      {#link LoginContext#logout()} can be called later
                     * @return the principal object
                     */
                    // @ts-ignore
                    createPrincipal(username: java.lang.String | string, subject: javax.security.auth.Subject, loginContext: javax.security.auth.login.LoginContext): java.security.Principal
                    /**
                     * Ensure the given name is legal for JAAS configuration.
                     * Added for Bugzilla 30869, made protected for easy customization
                     * in case my implementation is insufficient, which I think is
                     * very likely.
                     * @param src The name to validate
                     * @return A string that's a valid JAAS realm name
                     */
                    // @ts-ignore
                    makeLegalForJAAS(src: java.lang.String | string): string
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
                     * Load custom JAAS Configuration.
                     * @return the loaded configuration
                     */
                    // @ts-ignore
                    getConfig(): javax.security.auth.login.Configuration
                }
            }
        }
    }
}
