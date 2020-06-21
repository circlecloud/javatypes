declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                /**
                 * <p>Implementation of <strong>Realm</strong> that works with a directory
                 * server accessed via the Java Naming and Directory Interface (JNDI) APIs.
                 * The following constraints are imposed on the data structure in the
                 * underlying directory server:</p>
                 * <ul>
                 * <li>Each user that can be authenticated is represented by an individual
                 * element in the top level <code>DirContext</code> that is accessed
                 * via the <code>connectionURL</code> property.</li>
                 * <li>If a socket connection cannot be made to the <code>connectURL</code>
                 * an attempt will be made to use the <code>alternateURL</code> if it
                 * exists.</li>
                 * <li>Each user element has a distinguished name that can be formed by
                 * substituting the presented username into a pattern configured by the
                 * <code>userPattern</code> property.</li>
                 * <li>Alternatively, if the <code>userPattern</code> property is not
                 * specified, a unique element can be located by searching the directory
                 * context. In this case:
                 * <ul>
                 * <li>The <code>userSearch</code> pattern specifies the search filter
                 * after substitution of the username.</li>
                 * <li>The <code>userBase</code> property can be set to the element that
                 * is the base of the subtree containing users.  If not specified,
                 * the search base is the top-level context.</li>
                 * <li>The <code>userSubtree</code> property can be set to
                 * <code>true</code> if you wish to search the entire subtree of the
                 * directory context.  The default value of <code>false</code>
                 * requests a search of only the current level.</li>
                 * </ul>
                 * </li>
                 * <li>The user may be authenticated by binding to the directory with the
                 * username and password presented. This method is used when the
                 * <code>userPassword</code> property is not specified.</li>
                 * <li>The user may be authenticated by retrieving the value of an attribute
                 * from the directory and comparing it explicitly with the value presented
                 * by the user. This method is used when the <code>userPassword</code>
                 * property is specified, in which case:
                 * <ul>
                 * <li>The element for this user must contain an attribute named by the
                 * <code>userPassword</code> property.
                 * <li>The value of the user password attribute is either a cleartext
                 * String, or the result of passing a cleartext String through the
                 * <code>RealmBase.digest()</code> method (using the standard digest
                 * support included in <code>RealmBase</code>).
                 * <li>The user is considered to be authenticated if the presented
                 * credentials (after being passed through
                 * <code>RealmBase.digest()</code>) are equal to the retrieved value
                 * for the user password attribute.</li>
                 * </ul></li>
                 * <li>Each group of users that has been assigned a particular role may be
                 * represented by an individual element in the top level
                 * <code>DirContext</code> that is accessed via the
                 * <code>connectionURL</code> property.  This element has the following
                 * characteristics:
                 * <ul>
                 * <li>The set of all possible groups of interest can be selected by a
                 * search pattern configured by the <code>roleSearch</code>
                 * property.</li>
                 * <li>The <code>roleSearch</code> pattern optionally includes pattern
                 * replacements "{0}" for the distinguished name, and/or "{1}" for
                 * the username, and/or "{2}" the value of an attribute from the
                 * user's directory entry (the attribute is specified by the
                 * <code>userRoleAttribute</code> property), of the authenticated user
                 * for which roles will be retrieved.</li>
                 * <li>The <code>roleBase</code> property can be set to the element that
                 * is the base of the search for matching roles.  If not specified,
                 * the entire context will be searched.</li>
                 * <li>The <code>roleSubtree</code> property can be set to
                 * <code>true</code> if you wish to search the entire subtree of the
                 * directory context.  The default value of <code>false</code>
                 * requests a search of only the current level.</li>
                 * <li>The element includes an attribute (whose name is configured by
                 * the <code>roleName</code> property) containing the name of the
                 * role represented by this element.</li>
                 * </ul></li>
                 * <li>In addition, roles may be represented by the values of an attribute
                 * in the user's element whose name is configured by the
                 * <code>userRoleName</code> property.</li>
                 * <li>A default role can be assigned to each user that was successfully
                 * authenticated by setting the <code>commonRole</code> property to the
                 * name of this role. The role doesn't have to exist in the directory.</li>
                 * <li>If the directory server contains nested roles, you can search for them
                 * by setting <code>roleNested</code> to <code>true</code>.
                 * The default value is <code>false</code>, so role searches will not find
                 * nested roles.</li>
                 * <li>Note that the standard <code>&lt;security-role-ref&gt;</code> element in
                 * the web application deployment descriptor allows applications to refer
                 * to roles programmatically by names other than those used in the
                 * directory server itself.</li>
                 * </ul>
                 * <p><strong>TODO</strong> - Support connection pooling (including message
                 * format objects) so that <code>authenticate()</code> does not have to be
                 * synchronized.</p>
                 * <p><strong>WARNING</strong> - There is a reported bug against the Netscape
                 * provider code (com.netscape.jndi.ldap.LdapContextFactory) with respect to
                 * successfully authenticated a non-existing user. The
                 * report is here: https://bz.apache.org/bugzilla/show_bug.cgi?id=11210 .
                 * With luck, Netscape has updated their provider code and this is not an
                 * issue. </p>
                 * @author John Holman
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class JNDIRealm extends org.apache.catalina.realm.RealmBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * The type of authentication to use
                     */
                    // @ts-ignore
                    authentication: java.lang.String | string
                    /**
                     * The connection username for the server we will contact.
                     */
                    // @ts-ignore
                    connectionName: java.lang.String | string
                    /**
                     * The connection password for the server we will contact.
                     */
                    // @ts-ignore
                    connectionPassword: java.lang.String | string
                    /**
                     * The connection URL for the server we will contact.
                     */
                    // @ts-ignore
                    connectionURL: java.lang.String | string
                    /**
                     * The directory context linking us to our directory server.
                     */
                    // @ts-ignore
                    context: javax.naming.directory.DirContext
                    /**
                     * The JNDI context factory used to acquire our InitialContext.  By
                     * default, assumes use of an LDAP server using the standard JNDI LDAP
                     * provider.
                     */
                    // @ts-ignore
                    contextFactory: java.lang.String | string
                    /**
                     * How aliases should be dereferenced during search operations.
                     */
                    // @ts-ignore
                    derefAliases: java.lang.String | string
                    /**
                     * Constant that holds the name of the environment property for specifying
                     * the manner in which aliases should be dereferenced.
                     */
                    // @ts-ignore
                    public static readonly DEREF_ALIASES: java.lang.String | string
                    /**
                     * The protocol that will be used in the communication with the
                     * directory server.
                     */
                    // @ts-ignore
                    protocol: java.lang.String | string
                    /**
                     * Should we ignore PartialResultExceptions when iterating over NamingEnumerations?
                     * Microsoft Active Directory often returns referrals, which lead
                     * to PartialResultExceptions. Unfortunately there's no stable way to detect,
                     * if the Exceptions really come from an AD referral.
                     * Set to true to ignore PartialResultExceptions.
                     */
                    // @ts-ignore
                    adCompat: boolean
                    /**
                     * How should we handle referrals?  Microsoft Active Directory often returns
                     * referrals. If you need to follow them set referrals to "follow".
                     * Caution: if your DNS is not part of AD, the LDAP client lib might try
                     * to resolve your domain name in DNS to find another LDAP server.
                     */
                    // @ts-ignore
                    referrals: java.lang.String | string
                    /**
                     * The base element for user searches.
                     */
                    // @ts-ignore
                    userBase: java.lang.String | string
                    /**
                     * The message format used to search for a user, with "{0}" marking
                     * the spot where the username goes.
                     */
                    // @ts-ignore
                    userSearch: java.lang.String | string
                    /**
                     * The MessageFormat object associated with the current
                     * <code>userSearch</code>.
                     */
                    // @ts-ignore
                    userSearchFormat: java.text.MessageFormat
                    /**
                     * Should we search the entire subtree for matching users?
                     */
                    // @ts-ignore
                    userSubtree: boolean
                    /**
                     * The attribute name used to retrieve the user password.
                     */
                    // @ts-ignore
                    userPassword: java.lang.String | string
                    /**
                     * The name of the attribute inside the users
                     * directory entry where the value will be
                     * taken to search for roles
                     * This attribute is not used during a nested search
                     */
                    // @ts-ignore
                    userRoleAttribute: java.lang.String | string
                    /**
                     * A string of LDAP user patterns or paths, ":"-separated
                     * These will be used to form the distinguished name of a
                     * user, with "{0}" marking the spot where the specified username
                     * goes.
                     * This is similar to userPattern, but allows for multiple searches
                     * for a user.
                     */
                    // @ts-ignore
                    userPatternArray: java.lang.String[] | string[]
                    /**
                     * The message format used to form the distinguished name of a
                     * user, with "{0}" marking the spot where the specified username
                     * goes.
                     */
                    // @ts-ignore
                    userPattern: java.lang.String | string
                    /**
                     * An array of MessageFormat objects associated with the current
                     * <code>userPatternArray</code>.
                     */
                    // @ts-ignore
                    userPatternFormatArray: java.text.MessageFormat[]
                    /**
                     * The base element for role searches.
                     */
                    // @ts-ignore
                    roleBase: java.lang.String | string
                    /**
                     * The MessageFormat object associated with the current
                     * <code>roleBase</code>.
                     */
                    // @ts-ignore
                    roleBaseFormat: java.text.MessageFormat
                    /**
                     * The MessageFormat object associated with the current
                     * <code>roleSearch</code>.
                     */
                    // @ts-ignore
                    roleFormat: java.text.MessageFormat
                    /**
                     * The name of an attribute in the user's entry containing
                     * roles for that user
                     */
                    // @ts-ignore
                    userRoleName: java.lang.String | string
                    /**
                     * The name of the attribute containing roles held elsewhere
                     */
                    // @ts-ignore
                    roleName: java.lang.String | string
                    /**
                     * The message format used to select roles for a user, with "{0}" marking
                     * the spot where the distinguished name of the user goes. The "{1}"
                     * and "{2}" are described in the Configuration Reference.
                     */
                    // @ts-ignore
                    roleSearch: java.lang.String | string
                    /**
                     * Should we search the entire subtree for matching memberships?
                     */
                    // @ts-ignore
                    roleSubtree: boolean
                    /**
                     * Should we look for nested group in order to determine roles?
                     */
                    // @ts-ignore
                    roleNested: boolean
                    /**
                     * When searching for user roles, should the search be performed as the user
                     * currently being authenticated? If false, {@link #connectionName} and
                     * {@link #connectionPassword} will be used if specified, else an anonymous
                     * connection will be used.
                     */
                    // @ts-ignore
                    roleSearchAsUser: boolean
                    /**
                     * An alternate URL, to which, we should connect if connectionURL fails.
                     */
                    // @ts-ignore
                    alternateURL: java.lang.String | string
                    /**
                     * The number of connection attempts.  If greater than zero we use the
                     * alternate url.
                     */
                    // @ts-ignore
                    connectionAttempt: number /*int*/
                    /**
                     * Add this role to every authenticated user
                     */
                    // @ts-ignore
                    commonRole: java.lang.String | string
                    /**
                     * The timeout, in milliseconds, to use when trying to create a connection
                     * to the directory. The default is 5000 (5 seconds).
                     */
                    // @ts-ignore
                    connectionTimeout: java.lang.String | string
                    /**
                     * The timeout, in milliseconds, to use when trying to read from a connection
                     * to the directory. The default is 5000 (5 seconds).
                     */
                    // @ts-ignore
                    readTimeout: java.lang.String | string
                    /**
                     * The sizeLimit (also known as the countLimit) to use when the realm is
                     * configured with {@link #userSearch}. Zero for no limit.
                     */
                    // @ts-ignore
                    sizeLimit: number /*long*/
                    /**
                     * The timeLimit (in milliseconds) to use when the realm is configured with
                     * {@link #userSearch}. Zero for no limit.
                     */
                    // @ts-ignore
                    timeLimit: number /*int*/
                    /**
                     * Should delegated credentials from the SPNEGO authenticator be used if
                     * available
                     */
                    // @ts-ignore
                    useDelegatedCredential: boolean
                    /**
                     * The QOP that should be used for the connection to the LDAP server after
                     * authentication. This value is used to set the
                     * <code>javax.security.sasl.qop</code> environment property for the LDAP
                     * connection.
                     */
                    // @ts-ignore
                    spnegoDelegationQop: java.lang.String | string
                    // @ts-ignore
                    public getForceDnHexEscape(): boolean
                    // @ts-ignore
                    public setForceDnHexEscape(forceDnHexEscape: boolean): void
                    /**
                     * @return the type of authentication to use.
                     */
                    // @ts-ignore
                    public getAuthentication(): string
                    /**
                     * Set the type of authentication to use.
                     * @param authentication The authentication
                     */
                    // @ts-ignore
                    public setAuthentication(authentication: java.lang.String | string): void
                    /**
                     * @return the connection username for this Realm.
                     */
                    // @ts-ignore
                    public getConnectionName(): string
                    /**
                     * Set the connection username for this Realm.
                     * @param connectionName The new connection username
                     */
                    // @ts-ignore
                    public setConnectionName(connectionName: java.lang.String | string): void
                    /**
                     * @return the connection password for this Realm.
                     */
                    // @ts-ignore
                    public getConnectionPassword(): string
                    /**
                     * Set the connection password for this Realm.
                     * @param connectionPassword The new connection password
                     */
                    // @ts-ignore
                    public setConnectionPassword(connectionPassword: java.lang.String | string): void
                    /**
                     * @return the connection URL for this Realm.
                     */
                    // @ts-ignore
                    public getConnectionURL(): string
                    /**
                     * Set the connection URL for this Realm.
                     * @param connectionURL The new connection URL
                     */
                    // @ts-ignore
                    public setConnectionURL(connectionURL: java.lang.String | string): void
                    /**
                     * @return the JNDI context factory for this Realm.
                     */
                    // @ts-ignore
                    public getContextFactory(): string
                    /**
                     * Set the JNDI context factory for this Realm.
                     * @param contextFactory The new context factory
                     */
                    // @ts-ignore
                    public setContextFactory(contextFactory: java.lang.String | string): void
                    /**
                     * @return the derefAliases setting to be used.
                     */
                    // @ts-ignore
                    public getDerefAliases(): string
                    /**
                     * Set the value for derefAliases to be used when searching the directory.
                     * @param derefAliases New value of property derefAliases.
                     */
                    // @ts-ignore
                    public setDerefAliases(derefAliases: java.lang.String | string): void
                    /**
                     * @return the protocol to be used.
                     */
                    // @ts-ignore
                    public getProtocol(): string
                    /**
                     * Set the protocol for this Realm.
                     * @param protocol The new protocol.
                     */
                    // @ts-ignore
                    public setProtocol(protocol: java.lang.String | string): void
                    /**
                     * @return the current settings for handling PartialResultExceptions
                     */
                    // @ts-ignore
                    public getAdCompat(): boolean
                    /**
                     * How do we handle PartialResultExceptions?
                     * True: ignore all PartialResultExceptions.
                     * @param adCompat <code>true</code> to ignore partial results
                     */
                    // @ts-ignore
                    public setAdCompat(adCompat: boolean): void
                    /**
                     * @return the current settings for handling JNDI referrals.
                     */
                    // @ts-ignore
                    public getReferrals(): string
                    /**
                     * How do we handle JNDI referrals? ignore, follow, or throw
                     * (see javax.naming.Context.REFERRAL for more information).
                     * @param referrals The referral handling
                     */
                    // @ts-ignore
                    public setReferrals(referrals: java.lang.String | string): void
                    /**
                     * @return the base element for user searches.
                     */
                    // @ts-ignore
                    public getUserBase(): string
                    /**
                     * Set the base element for user searches.
                     * @param userBase The new base element
                     */
                    // @ts-ignore
                    public setUserBase(userBase: java.lang.String | string): void
                    /**
                     * @return the message format pattern for selecting users in this Realm.
                     */
                    // @ts-ignore
                    public getUserSearch(): string
                    /**
                     * Set the message format pattern for selecting users in this Realm.
                     * @param userSearch The new user search pattern
                     */
                    // @ts-ignore
                    public setUserSearch(userSearch: java.lang.String | string): void
                    // @ts-ignore
                    public isUserSearchAsUser(): boolean
                    // @ts-ignore
                    public setUserSearchAsUser(userSearchAsUser: boolean): void
                    /**
                     * @return the "search subtree for users" flag.
                     */
                    // @ts-ignore
                    public getUserSubtree(): boolean
                    /**
                     * Set the "search subtree for users" flag.
                     * @param userSubtree The new search flag
                     */
                    // @ts-ignore
                    public setUserSubtree(userSubtree: boolean): void
                    /**
                     * @return the user role name attribute name for this Realm.
                     */
                    // @ts-ignore
                    public getUserRoleName(): string
                    /**
                     * Set the user role name attribute name for this Realm.
                     * @param userRoleName The new userRole name attribute name
                     */
                    // @ts-ignore
                    public setUserRoleName(userRoleName: java.lang.String | string): void
                    /**
                     * @return the base element for role searches.
                     */
                    // @ts-ignore
                    public getRoleBase(): string
                    /**
                     * Set the base element for role searches.
                     * @param roleBase The new base element
                     */
                    // @ts-ignore
                    public setRoleBase(roleBase: java.lang.String | string): void
                    /**
                     * @return the role name attribute name for this Realm.
                     */
                    // @ts-ignore
                    public getRoleName(): string
                    /**
                     * Set the role name attribute name for this Realm.
                     * @param roleName The new role name attribute name
                     */
                    // @ts-ignore
                    public setRoleName(roleName: java.lang.String | string): void
                    /**
                     * @return the message format pattern for selecting roles in this Realm.
                     */
                    // @ts-ignore
                    public getRoleSearch(): string
                    /**
                     * Set the message format pattern for selecting roles in this Realm.
                     * @param roleSearch The new role search pattern
                     */
                    // @ts-ignore
                    public setRoleSearch(roleSearch: java.lang.String | string): void
                    // @ts-ignore
                    public isRoleSearchAsUser(): boolean
                    // @ts-ignore
                    public setRoleSearchAsUser(roleSearchAsUser: boolean): void
                    /**
                     * @return the "search subtree for roles" flag.
                     */
                    // @ts-ignore
                    public getRoleSubtree(): boolean
                    /**
                     * Set the "search subtree for roles" flag.
                     * @param roleSubtree The new search flag
                     */
                    // @ts-ignore
                    public setRoleSubtree(roleSubtree: boolean): void
                    /**
                     * @return the "The nested group search flag" flag.
                     */
                    // @ts-ignore
                    public getRoleNested(): boolean
                    /**
                     * Set the "search subtree for roles" flag.
                     * @param roleNested The nested group search flag
                     */
                    // @ts-ignore
                    public setRoleNested(roleNested: boolean): void
                    /**
                     * @return the password attribute used to retrieve the user password.
                     */
                    // @ts-ignore
                    public getUserPassword(): string
                    /**
                     * Set the password attribute used to retrieve the user password.
                     * @param userPassword The new password attribute
                     */
                    // @ts-ignore
                    public setUserPassword(userPassword: java.lang.String | string): void
                    // @ts-ignore
                    public getUserRoleAttribute(): string
                    // @ts-ignore
                    public setUserRoleAttribute(userRoleAttribute: java.lang.String | string): void
                    /**
                     * @return the message format pattern for selecting users in this Realm.
                     */
                    // @ts-ignore
                    public getUserPattern(): string
                    /**
                     * Set the message format pattern for selecting users in this Realm.
                     * This may be one simple pattern, or multiple patterns to be tried,
                     * separated by parentheses. (for example, either "cn={0}", or
                     * "(cn={0})(cn={0},o=myorg)" Full LDAP search strings are also supported,
                     * but only the "OR", "|" syntax, so "(|(cn={0})(cn={0},o=myorg))" is
                     * also valid. Complex search strings with &amp;, etc are NOT supported.
                     * @param userPattern The new user pattern
                     */
                    // @ts-ignore
                    public setUserPattern(userPattern: java.lang.String | string): void
                    /**
                     * Getter for property alternateURL.
                     * @return Value of property alternateURL.
                     */
                    // @ts-ignore
                    public getAlternateURL(): string
                    /**
                     * Setter for property alternateURL.
                     * @param alternateURL New value of property alternateURL.
                     */
                    // @ts-ignore
                    public setAlternateURL(alternateURL: java.lang.String | string): void
                    /**
                     * @return the common role
                     */
                    // @ts-ignore
                    public getCommonRole(): string
                    /**
                     * Set the common role
                     * @param commonRole The common role
                     */
                    // @ts-ignore
                    public setCommonRole(commonRole: java.lang.String | string): void
                    /**
                     * @return the connection timeout.
                     */
                    // @ts-ignore
                    public getConnectionTimeout(): string
                    /**
                     * Set the connection timeout.
                     * @param timeout The new connection timeout
                     */
                    // @ts-ignore
                    public setConnectionTimeout(timeout: java.lang.String | string): void
                    /**
                     * @return the read timeout.
                     */
                    // @ts-ignore
                    public getReadTimeout(): string
                    /**
                     * Set the read timeout.
                     * @param timeout The new read timeout
                     */
                    // @ts-ignore
                    public setReadTimeout(timeout: java.lang.String | string): void
                    // @ts-ignore
                    public getSizeLimit(): number /*long*/
                    // @ts-ignore
                    public setSizeLimit(sizeLimit: number /*long*/): void
                    // @ts-ignore
                    public getTimeLimit(): number /*int*/
                    // @ts-ignore
                    public setTimeLimit(timeLimit: number /*int*/): void
                    // @ts-ignore
                    public isUseDelegatedCredential(): boolean
                    // @ts-ignore
                    public setUseDelegatedCredential(useDelegatedCredential: boolean): void
                    // @ts-ignore
                    public getSpnegoDelegationQop(): string
                    // @ts-ignore
                    public setSpnegoDelegationQop(spnegoDelegationQop: java.lang.String | string): void
                    /**
                     * @return flag whether to use StartTLS for connections to the ldap server
                     */
                    // @ts-ignore
                    public getUseStartTls(): boolean
                    /**
                     * Flag whether StartTLS should be used when connecting to the ldap server
                     * @param useStartTls
                     *             {#code true} when StartTLS should be used. Default is
                     *             {@code false}.
                     */
                    // @ts-ignore
                    public setUseStartTls(useStartTls: boolean): void
                    /**
                     * Set the allowed cipher suites when opening a connection using StartTLS.
                     * The cipher suites are expected as a comma separated list.
                     * @param suites
                     *             comma separated list of allowed cipher suites
                     */
                    // @ts-ignore
                    public setCipherSuites(suites: java.lang.String | string): void
                    /**
                     * @return name of the {#link HostnameVerifier} class used for connections
                     *          using StartTLS, or the empty string, if the default verifier
                     *          should be used.
                     */
                    // @ts-ignore
                    public getHostnameVerifierClassName(): string
                    /**
                     * Set the {@link HostnameVerifier} to be used when opening connections
                     * using StartTLS. An instance of the given class name will be constructed
                     * using the default constructor.
                     * @param verifierClassName
                     *             class name of the {#link HostnameVerifier} to be constructed
                     */
                    // @ts-ignore
                    public setHostnameVerifierClassName(verifierClassName: java.lang.String | string): void
                    /**
                     * @return the {#link HostnameVerifier} to use for peer certificate
                     *          verification when opening connections using StartTLS.
                     */
                    // @ts-ignore
                    public getHostnameVerifier(): javax.net.ssl.HostnameVerifier
                    /**
                     * Set the {@link SSLSocketFactory} to be used when opening connections
                     * using StartTLS. An instance of the factory with the given name will be
                     * created using the default constructor. The SSLSocketFactory can also be
                     * set using {@link JNDIRealm#setSslProtocol(String) setSslProtocol(String)}.
                     * @param factoryClassName
                     *             class name of the factory to be constructed
                     */
                    // @ts-ignore
                    public setSslSocketFactoryClassName(factoryClassName: java.lang.String | string): void
                    /**
                     * Set the ssl protocol to be used for connections using StartTLS.
                     * @param protocol
                     *             one of the allowed ssl protocol names
                     */
                    // @ts-ignore
                    public setSslProtocol(protocol: java.lang.String | string): void
                    /**
                     * Return the Principal associated with the specified username and
                     * credentials, if there is one; otherwise return <code>null</code>.
                     * If there are any errors with the JDBC connection, executing
                     * the query or anything we return null (don't authenticate). This
                     * event is also logged, and the connection will be closed so that
                     * a subsequent request will automatically re-open it.
                     * @param username Username of the Principal to look up
                     * @param credentials Password or other credentials to use in
                     *   authenticating this username
                     * @return the associated principal, or <code>null</code> if there is none.
                     */
                    // @ts-ignore
                    public authenticate(username: java.lang.String | string, credentials: java.lang.String | string): java.security.Principal
                    /**
                     * Return the Principal associated with the specified username and
                     * credentials, if there is one; otherwise return <code>null</code>.
                     * @param context The directory context
                     * @param username Username of the Principal to look up
                     * @param credentials Password or other credentials to use in
                     *   authenticating this username
                     * @return the associated principal, or <code>null</code> if there is none.
                     * @exception NamingException if a directory server error occurs
                     */
                    // @ts-ignore
                    public authenticate(context: javax.naming.directory.DirContext, username: java.lang.String | string, credentials: java.lang.String | string): java.security.Principal
                    /**
                     * Return a User object containing information about the user
                     * with the specified username, if found in the directory;
                     * otherwise return <code>null</code>.
                     * @param context The directory context
                     * @param username Username to be looked up
                     * @return the User object
                     * @exception NamingException if a directory server error occurs
                     * @see #getUser(DirContext, String, String, int)
                     */
                    // @ts-ignore
                    getUser(context: javax.naming.directory.DirContext, username: java.lang.String | string): org.apache.catalina.realm.JNDIRealm.User
                    /**
                     * Return a User object containing information about the user
                     * with the specified username, if found in the directory;
                     * otherwise return <code>null</code>.
                     * @param context The directory context
                     * @param username Username to be looked up
                     * @param credentials User credentials (optional)
                     * @return the User object
                     * @exception NamingException if a directory server error occurs
                     * @see #getUser(DirContext, String, String, int)
                     */
                    // @ts-ignore
                    getUser(context: javax.naming.directory.DirContext, username: java.lang.String | string, credentials: java.lang.String | string): org.apache.catalina.realm.JNDIRealm.User
                    /**
                     * Return a User object containing information about the user
                     * with the specified username, if found in the directory;
                     * otherwise return <code>null</code>.
                     * If the <code>userPassword</code> configuration attribute is
                     * specified, the value of that attribute is retrieved from the
                     * user's directory entry. If the <code>userRoleName</code>
                     * configuration attribute is specified, all values of that
                     * attribute are retrieved from the directory entry.
                     * @param context The directory context
                     * @param username Username to be looked up
                     * @param credentials User credentials (optional)
                     * @param curUserPattern Index into userPatternFormatArray
                     * @return the User object
                     * @exception NamingException if a directory server error occurs
                     */
                    // @ts-ignore
                    getUser(context: javax.naming.directory.DirContext, username: java.lang.String | string, credentials: java.lang.String | string, curUserPattern: number /*int*/): org.apache.catalina.realm.JNDIRealm.User
                    /**
                     * Use the distinguished name to locate the directory
                     * entry for the user with the specified username and
                     * return a User object; otherwise return <code>null</code>.
                     * @param context The directory context
                     * @param username The username
                     * @param attrIds String[]containing names of attributes to
                     * @param dn Distinguished name of the user
                     *  retrieve.
                     * @return the User object
                     * @exception NamingException if a directory server error occurs
                     */
                    // @ts-ignore
                    getUserByPattern(context: javax.naming.directory.DirContext, username: java.lang.String | string, attrIds: java.lang.String[] | string[], dn: java.lang.String | string): org.apache.catalina.realm.JNDIRealm.User
                    /**
                     * Use the <code>UserPattern</code> configuration attribute to
                     * locate the directory entry for the user with the specified
                     * username and return a User object; otherwise return
                     * <code>null</code>.
                     * @param context The directory context
                     * @param username The username
                     * @param credentials User credentials (optional)
                     * @param attrIds String[]containing names of attributes to
                     * @param curUserPattern Index into userPatternFormatArray
                     * @return the User object
                     * @exception NamingException if a directory server error occurs
                     * @see #getUserByPattern(DirContext, String, String[], String)
                     */
                    // @ts-ignore
                    getUserByPattern(context: javax.naming.directory.DirContext, username: java.lang.String | string, credentials: java.lang.String | string, attrIds: java.lang.String[] | string[], curUserPattern: number /*int*/): org.apache.catalina.realm.JNDIRealm.User
                    /**
                     * Search the directory to return a User object containing
                     * information about the user with the specified username, if
                     * found in the directory; otherwise return <code>null</code>.
                     * @param context The directory context
                     * @param username The username
                     * @param attrIds String[]containing names of attributes to retrieve.
                     * @return the User object
                     * @exception NamingException if a directory server error occurs
                     */
                    // @ts-ignore
                    getUserBySearch(context: javax.naming.directory.DirContext, username: java.lang.String | string, attrIds: java.lang.String[] | string[]): org.apache.catalina.realm.JNDIRealm.User
                    /**
                     * Check whether the given User can be authenticated with the
                     * given credentials. If the <code>userPassword</code>
                     * configuration attribute is specified, the credentials
                     * previously retrieved from the directory are compared explicitly
                     * with those presented by the user. Otherwise the presented
                     * credentials are checked by binding to the directory as the
                     * user.
                     * @param context The directory context
                     * @param user The User to be authenticated
                     * @param credentials The credentials presented by the user
                     * @return <code>true</code> if the credentials are validated
                     * @exception NamingException if a directory server error occurs
                     */
                    // @ts-ignore
                    checkCredentials(context: javax.naming.directory.DirContext, user: org.apache.catalina.realm.JNDIRealm.User, credentials: java.lang.String | string): boolean
                    /**
                     * Check whether the credentials presented by the user match those
                     * retrieved from the directory.
                     * @param context The directory context
                     * @param info The User to be authenticated
                     * @param credentials Authentication credentials
                     * @return <code>true</code> if the credentials are validated
                     * @exception NamingException if a directory server error occurs
                     */
                    // @ts-ignore
                    compareCredentials(context: javax.naming.directory.DirContext, info: org.apache.catalina.realm.JNDIRealm.User, credentials: java.lang.String | string): boolean
                    /**
                     * Check credentials by binding to the directory as the user
                     * @param context The directory context
                     * @param user The User to be authenticated
                     * @param credentials Authentication credentials
                     * @return <code>true</code> if the credentials are validated
                     * @exception NamingException if a directory server error occurs
                     */
                    // @ts-ignore
                    bindAsUser(context: javax.naming.directory.DirContext, user: org.apache.catalina.realm.JNDIRealm.User, credentials: java.lang.String | string): boolean
                    /**
                     * Return a List of roles associated with the given User.  Any
                     * roles present in the user's directory entry are supplemented by
                     * a directory search. If no roles are associated with this user,
                     * a zero-length List is returned.
                     * @param context The directory context we are searching
                     * @param user The User to be checked
                     * @return the list of role names
                     * @exception NamingException if a directory server error occurs
                     */
                    // @ts-ignore
                    getRoles(context: javax.naming.directory.DirContext, user: org.apache.catalina.realm.JNDIRealm.User): Array<java.lang.String | string>
                    /**
                     * Close any open connection to the directory server for this Realm.
                     * @param context The directory context to be closed
                     */
                    // @ts-ignore
                    close(context: javax.naming.directory.DirContext): void
                    /**
                     * Get the password for the specified user.
                     * @param username The user name
                     * @return the password associated with the given principal's user name.
                     */
                    // @ts-ignore
                    getPassword(username: java.lang.String | string): string
                    /**
                     * Get the principal associated with the specified certificate.
                     * @param username The user name
                     * @return the Principal associated with the given certificate.
                     */
                    // @ts-ignore
                    getPrincipal(username: java.lang.String | string): java.security.Principal
                    // @ts-ignore
                    getPrincipal(username: java.lang.String | string, gssCredential: org.ietf.jgss.GSSCredential): java.security.Principal
                    /**
                     * Get the principal associated with the specified certificate.
                     * @param context The directory context
                     * @param username The user name
                     * @param gssCredential The credentials
                     * @return the Principal associated with the given certificate.
                     * @exception NamingException if a directory server error occurs
                     */
                    // @ts-ignore
                    getPrincipal(context: javax.naming.directory.DirContext, username: java.lang.String | string, gssCredential: org.ietf.jgss.GSSCredential): java.security.Principal
                    /**
                     * Open (if necessary) and return a connection to the configured
                     * directory server for this Realm.
                     * @return the directory context
                     * @exception NamingException if a directory server error occurs
                     */
                    // @ts-ignore
                    open(): javax.naming.directory.DirContext
                    // @ts-ignore
                    public isAvailable(): boolean
                    /**
                     * Create our directory context configuration.
                     * @return java.util.Hashtable the configuration for the directory context.
                     */
                    // @ts-ignore
                    getDirectoryContextEnvironment(): java.util.Hashtable<java.lang.String | string, java.lang.String | string>
                    /**
                     * Release our use of this connection so that it can be recycled.
                     * @param context The directory context to release
                     */
                    // @ts-ignore
                    release(context: javax.naming.directory.DirContext): void
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
                     * Given a string containing LDAP patterns for user locations (separated by
                     * parentheses in a pseudo-LDAP search string format -
                     * "(location1)(location2)", returns an array of those paths.  Real LDAP
                     * search strings are supported as well (though only the "|" "OR" type).
                     * @param userPatternString - a string LDAP search paths surrounded by
                     *  parentheses
                     * @return a parsed string array
                     */
                    // @ts-ignore
                    parseUserPatternString(userPatternString: java.lang.String | string): string[]
                    /**
                     * Given an LDAP search string, returns the string with certain characters
                     * escaped according to RFC 2254 guidelines.
                     * The character mapping is as follows:
                     * char -&gt;  Replacement
                     * ---------------------------
                     * *  -&gt; \2a
                     * (  -&gt; \28
                     * )  -&gt; \29
                     * \  -&gt; \5c
                     * \0 -&gt; \00
                     * @param inString string to escape according to RFC 2254 guidelines
                     * @return String the escaped/encoded result
                     */
                    // @ts-ignore
                    doRFC2254Encoding(inString: java.lang.String | string): string
                    /**
                     * Returns the distinguished name of a search result.
                     * @param context Our DirContext
                     * @param base The base DN
                     * @param result The search result
                     * @return String containing the distinguished name
                     * @exception NamingException if a directory server error occurs
                     */
                    // @ts-ignore
                    getDistinguishedName(context: javax.naming.directory.DirContext, base: java.lang.String | string, result: javax.naming.directory.SearchResult): string
                    // @ts-ignore
                    static convertToHexEscape(input: java.lang.String | string): string
                }
            }
        }
    }
}
