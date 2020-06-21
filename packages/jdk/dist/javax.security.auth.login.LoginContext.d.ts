declare namespace javax {
    namespace security {
        namespace auth {
            namespace login {
                /**
                 * <p> The {@code LoginContext} class describes the basic methods used
                 * to authenticate Subjects and provides a way to develop an
                 * application independent of the underlying authentication technology.
                 * A {@code Configuration} specifies the authentication technology, or
                 * {@code LoginModule}, to be used with a particular application.
                 * Different LoginModules can be plugged in under an application
                 * without requiring any modifications to the application itself.
                 * <p> In addition to supporting <i>pluggable</i> authentication, this class
                 * also supports the notion of <i>stacked</i> authentication.
                 * Applications may be configured to use more than one
                 * LoginModule.  For example, one could
                 * configure both a Kerberos LoginModule and a smart card
                 * LoginModule under an application.
                 * <p> A typical caller instantiates a LoginContext with
                 * a <i>name</i> and a {@code CallbackHandler}.
                 * LoginContext uses the <i>name</i> as the index into a
                 * Configuration to determine which LoginModules should be used,
                 * and which ones must succeed in order for the overall authentication to
                 * succeed.  The {@code CallbackHandler} is passed to the underlying
                 * LoginModules so they may communicate and interact with users
                 * (prompting for a username and password via a graphical user interface,
                 * for example).
                 * <p> Once the caller has instantiated a LoginContext,
                 * it invokes the {@code login} method to authenticate
                 * a {@code Subject}.  The {@code login} method invokes
                 * the configured modules to perform their respective types of authentication
                 * (username/password, smart card pin verification, etc.).
                 * Note that the LoginModules will not attempt authentication retries nor
                 * introduce delays if the authentication fails.
                 * Such tasks belong to the LoginContext caller.
                 * <p> If the {@code login} method returns without
                 * throwing an exception, then the overall authentication succeeded.
                 * The caller can then retrieve
                 * the newly authenticated Subject by invoking the
                 * {@code getSubject} method.  Principals and Credentials associated
                 * with the Subject may be retrieved by invoking the Subject's
                 * respective {@code getPrincipals}, {@code getPublicCredentials},
                 * and {@code getPrivateCredentials} methods.
                 * <p> To logout the Subject, the caller calls
                 * the {@code logout} method.  As with the {@code login}
                 * method, this {@code logout} method invokes the {@code logout}
                 * method for the configured modules.
                 * <p> A LoginContext should not be used to authenticate
                 * more than one Subject.  A separate LoginContext
                 * should be used to authenticate each different Subject.
                 * <p> The following documentation applies to all LoginContext constructors:
                 * <ol>
                 * <li> {@code Subject}
                 * <ul>
                 * <li> If the constructor has a Subject
                 * input parameter, the LoginContext uses the caller-specified
                 * Subject object.
                 * <li> If the caller specifies a {@code null} Subject
                 * and a {@code null} value is permitted,
                 * the LoginContext instantiates a new Subject.
                 * <li> If the constructor does <b>not</b> have a Subject
                 * input parameter, the LoginContext instantiates a new Subject.
                 * <p>
                 * </ul>
                 * <li> {@code Configuration}
                 * <ul>
                 * <li> If the constructor has a Configuration
                 * input parameter and the caller specifies a non-null Configuration,
                 * the LoginContext uses the caller-specified Configuration.
                 * <p>
                 * If the constructor does <b>not</b> have a Configuration
                 * input parameter, or if the caller specifies a {@code null}
                 * Configuration object, the constructor uses the following call to
                 * get the installed Configuration:
                 * <pre>
                 * config = Configuration.getConfiguration();
                 * </pre>
                 * For both cases,
                 * the <i>name</i> argument given to the constructor is passed to the
                 * {@code Configuration.getAppConfigurationEntry} method.
                 * If the Configuration has no entries for the specified <i>name</i>,
                 * then the {@code LoginContext} calls
                 * {@code getAppConfigurationEntry} with the name, "<i>other</i>"
                 * (the default entry name).  If there is no entry for "<i>other</i>",
                 * then a {@code LoginException} is thrown.
                 * <li> When LoginContext uses the installed Configuration, the caller
                 * requires the createLoginContext.<em>name</em> and possibly
                 * createLoginContext.other AuthPermissions. Furthermore, the
                 * LoginContext will invoke configured modules from within an
                 * {@code AccessController.doPrivileged} call so that modules that
                 * perform security-sensitive tasks (such as connecting to remote hosts,
                 * and updating the Subject) will require the respective permissions, but
                 * the callers of the LoginContext will not require those permissions.
                 * <li> When LoginContext uses a caller-specified Configuration, the caller
                 * does not require any createLoginContext AuthPermission.  The LoginContext
                 * saves the {@code AccessControlContext} for the caller,
                 * and invokes the configured modules from within an
                 * {@code AccessController.doPrivileged} call constrained by that context.
                 * This means the caller context (stored when the LoginContext was created)
                 * must have sufficient permissions to perform any security-sensitive tasks
                 * that the modules may perform.
                 * <p>
                 * </ul>
                 * <li> {@code CallbackHandler}
                 * <ul>
                 * <li> If the constructor has a CallbackHandler
                 * input parameter, the LoginContext uses the caller-specified
                 * CallbackHandler object.
                 * <li> If the constructor does <b>not</b> have a CallbackHandler
                 * input parameter, or if the caller specifies a {@code null}
                 * CallbackHandler object (and a {@code null} value is permitted),
                 * the LoginContext queries the
                 * {@code auth.login.defaultCallbackHandler} security property for the
                 * fully qualified class name of a default handler
                 * implementation. If the security property is not set,
                 * then the underlying modules will not have a
                 * CallbackHandler for use in communicating
                 * with users.  The caller thus assumes that the configured
                 * modules have alternative means for authenticating the user.
                 * <li> When the LoginContext uses the installed Configuration (instead of
                 * a caller-specified Configuration, see above),
                 * then this LoginContext must wrap any
                 * caller-specified or default CallbackHandler implementation
                 * in a new CallbackHandler implementation
                 * whose {@code handle} method implementation invokes the
                 * specified CallbackHandler's {@code handle} method in a
                 * {@code java.security.AccessController.doPrivileged} call
                 * constrained by the caller's current {@code AccessControlContext}.
                 * </ul>
                 * </ol>
                 * @see java.security.Security
                 * @see javax.security.auth.AuthPermission
                 * @see javax.security.auth.Subject
                 * @see javax.security.auth.callback.CallbackHandler
                 * @see javax.security.auth.login.Configuration
                 * @see javax.security.auth.spi.LoginModule
                 * @see java.security.Security security properties
                 */
                // @ts-ignore
                class LoginContext extends java.lang.Object {
                    /**
                     * Instantiate a new {@code LoginContext} object with a name.
                     * @param name the name used as the index into the
                     *           {#code Configuration}.
                     * @exception LoginException if the caller-specified {#code name}
                     *           does not appear in the {@code Configuration}
                     *           and there is no {@code Configuration} entry
                     *           for "<i>other</i>", or if the
                     *           <i>auth.login.defaultCallbackHandler</i>
                     *           security property was set, but the implementation
                     *           class could not be loaded.
                     *           <p>
                     * @exception SecurityException if a SecurityManager is set and
                     *           the caller does not have
                     *           AuthPermission("createLoginContext.<i>name</i>"),
                     *           or if a configuration entry for <i>name</i> does not exist and
                     *           the caller does not additionally have
                     *           AuthPermission("createLoginContext.other")
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    /**
                     * Instantiate a new {@code LoginContext} object with a name
                     * and a {@code Subject} object.
                     * <p>
                     * @param name the name used as the index into the
                     *           {#code Configuration}. <p>
                     * @param subject the {#code Subject} to authenticate.
                     * @exception LoginException if the caller-specified {#code name}
                     *           does not appear in the {@code Configuration}
                     *           and there is no {@code Configuration} entry
                     *           for "<i>other</i>", if the caller-specified {@code subject}
                     *           is {@code null}, or if the
                     *           <i>auth.login.defaultCallbackHandler</i>
                     *           security property was set, but the implementation
                     *           class could not be loaded.
                     *           <p>
                     * @exception SecurityException if a SecurityManager is set and
                     *           the caller does not have
                     *           AuthPermission("createLoginContext.<i>name</i>"),
                     *           or if a configuration entry for <i>name</i> does not exist and
                     *           the caller does not additionally have
                     *           AuthPermission("createLoginContext.other")
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, subject: javax.security.auth.Subject)
                    /**
                     * Instantiate a new {@code LoginContext} object with a name
                     * and a {@code CallbackHandler} object.
                     * <p>
                     * @param name the name used as the index into the
                     *           {#code Configuration}. <p>
                     * @param callbackHandler the {#code CallbackHandler} object used by
                     *           LoginModules to communicate with the user.
                     * @exception LoginException if the caller-specified {#code name}
                     *           does not appear in the {@code Configuration}
                     *           and there is no {@code Configuration} entry
                     *           for "<i>other</i>", or if the caller-specified
                     *           {@code callbackHandler} is {@code null}.
                     *           <p>
                     * @exception SecurityException if a SecurityManager is set and
                     *           the caller does not have
                     *           AuthPermission("createLoginContext.<i>name</i>"),
                     *           or if a configuration entry for <i>name</i> does not exist and
                     *           the caller does not additionally have
                     *           AuthPermission("createLoginContext.other")
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, callbackHandler: javax.security.auth.callback.CallbackHandler)
                    /**
                     * Instantiate a new {@code LoginContext} object with a name,
                     * a {@code Subject} to be authenticated, and a
                     * {@code CallbackHandler} object.
                     * <p>
                     * @param name the name used as the index into the
                     *           {#code Configuration}. <p>
                     * @param subject the {#code Subject} to authenticate. <p>
                     * @param callbackHandler the {#code CallbackHandler} object used by
                     *           LoginModules to communicate with the user.
                     * @exception LoginException if the caller-specified {#code name}
                     *           does not appear in the {@code Configuration}
                     *           and there is no {@code Configuration} entry
                     *           for "<i>other</i>", or if the caller-specified
                     *           {@code subject} is {@code null},
                     *           or if the caller-specified
                     *           {@code callbackHandler} is {@code null}.
                     *           <p>
                     * @exception SecurityException if a SecurityManager is set and
                     *           the caller does not have
                     *           AuthPermission("createLoginContext.<i>name</i>"),
                     *           or if a configuration entry for <i>name</i> does not exist and
                     *           the caller does not additionally have
                     *           AuthPermission("createLoginContext.other")
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, subject: javax.security.auth.Subject, callbackHandler: javax.security.auth.callback.CallbackHandler)
                    /**
                     * Instantiate a new {@code LoginContext} object with a name,
                     * a {@code Subject} to be authenticated,
                     * a {@code CallbackHandler} object, and a login
                     * {@code Configuration}.
                     * <p>
                     * @param name the name used as the index into the caller-specified
                     *           {#code Configuration}. <p>
                     * @param subject the {#code Subject} to authenticate,
                     *           or {@code null}. <p>
                     * @param callbackHandler the {#code CallbackHandler} object used by
                     *           LoginModules to communicate with the user, or {@code null}.
                     *           <p>
                     * @param config the {#code Configuration} that lists the
                     *           login modules to be called to perform the authentication,
                     *           or {@code null}.
                     * @exception LoginException if the caller-specified {#code name}
                     *           does not appear in the {@code Configuration}
                     *           and there is no {@code Configuration} entry
                     *           for "<i>other</i>".
                     *           <p>
                     * @exception SecurityException if a SecurityManager is set,
                     *           <i>config</i> is {#code null},
                     *           and either the caller does not have
                     *           AuthPermission("createLoginContext.<i>name</i>"),
                     *           or if a configuration entry for <i>name</i> does not exist and
                     *           the caller does not additionally have
                     *           AuthPermission("createLoginContext.other")
                     * @since 1.5
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, subject: javax.security.auth.Subject, callbackHandler: javax.security.auth.callback.CallbackHandler, config: javax.security.auth.login.Configuration)
                    /**
                     * Perform the authentication.
                     * <p> This method invokes the {@code login} method for each
                     * LoginModule configured for the <i>name</i> specified to the
                     * {@code LoginContext} constructor, as determined by the login
                     * {@code Configuration}.  Each {@code LoginModule}
                     * then performs its respective type of authentication
                     * (username/password, smart card pin verification, etc.).
                     * <p> This method completes a 2-phase authentication process by
                     * calling each configured LoginModule's {@code commit} method
                     * if the overall authentication succeeded (the relevant REQUIRED,
                     * REQUISITE, SUFFICIENT, and OPTIONAL LoginModules succeeded),
                     * or by calling each configured LoginModule's {@code abort} method
                     * if the overall authentication failed.  If authentication succeeded,
                     * each successful LoginModule's {@code commit} method associates
                     * the relevant Principals and Credentials with the {@code Subject}.
                     * If authentication failed, each LoginModule's {@code abort} method
                     * removes/destroys any previously stored state.
                     * <p> If the {@code commit} phase of the authentication process
                     * fails, then the overall authentication fails and this method
                     * invokes the {@code abort} method for each configured
                     * {@code LoginModule}.
                     * <p> If the {@code abort} phase
                     * fails for any reason, then this method propagates the
                     * original exception thrown either during the {@code login} phase
                     * or the {@code commit} phase.  In either case, the overall
                     * authentication fails.
                     * <p> In the case where multiple LoginModules fail,
                     * this method propagates the exception raised by the first
                     * {@code LoginModule} which failed.
                     * <p> Note that if this method enters the {@code abort} phase
                     * (either the {@code login} or {@code commit} phase failed),
                     * this method invokes all LoginModules configured for the
                     * application regardless of their respective {@code Configuration}
                     * flag parameters.  Essentially this means that {@code Requisite}
                     * and {@code Sufficient} semantics are ignored during the
                     * {@code abort} phase.  This guarantees that proper cleanup
                     * and state restoration can take place.
                     * <p>
                     * @exception LoginException if the authentication fails.
                     */
                    // @ts-ignore
                    public login(): void
                    /**
                     * Logout the {@code Subject}.
                     * <p> This method invokes the {@code logout} method for each
                     * {@code LoginModule} configured for this {@code LoginContext}.
                     * Each {@code LoginModule} performs its respective logout procedure
                     * which may include removing/destroying
                     * {@code Principal} and {@code Credential} information
                     * from the {@code Subject} and state cleanup.
                     * <p> Note that this method invokes all LoginModules configured for the
                     * application regardless of their respective
                     * {@code Configuration} flag parameters.  Essentially this means
                     * that {@code Requisite} and {@code Sufficient} semantics are
                     * ignored for this method.  This guarantees that proper cleanup
                     * and state restoration can take place.
                     * <p>
                     * @exception LoginException if the logout fails.
                     */
                    // @ts-ignore
                    public logout(): void
                    /**
                     * Return the authenticated Subject.
                     * <p>
                     * @return the authenticated Subject.  If the caller specified a
                     *           Subject to this LoginContext's constructor,
                     *           this method returns the caller-specified Subject.
                     *           If a Subject was not specified and authentication succeeds,
                     *           this method returns the Subject instantiated and used for
                     *           authentication by this LoginContext.
                     *           If a Subject was not specified, and authentication fails or
                     *           has not been attempted, this method returns null.
                     */
                    // @ts-ignore
                    public getSubject(): javax.security.auth.Subject
                }
            }
        }
    }
}
