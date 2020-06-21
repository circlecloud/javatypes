declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                /**
                 * <p>Implementation of the JAAS <strong>LoginModule</strong> interface,
                 * primarily for use in testing <code>JAASRealm</code>.  It utilizes an
                 * XML-format data file of username/password/role information identical to
                 * that supported by <code>org.apache.catalina.realm.MemoryRealm</code>.</p>
                 * <p>This class recognizes the following string-valued options, which are
                 * specified in the configuration file and passed to {@link
                 * #initialize(Subject, CallbackHandler, Map, Map)} in the <code>options</code>
                 * argument:</p>
                 * <ul>
                 * <li><strong>pathname</strong> - Relative (to the pathname specified by the
                 * "catalina.base" system property) or absolute pathname to the
                 * XML file containing our user information, in the format supported by
                 * {@link MemoryRealm}.  The default value matches the MemoryRealm
                 * default.</li>
                 * <li><strong>credentialHandlerClassName</strong> - The fully qualified class
                 * name of the CredentialHandler to use. If not specified, {@link
                 * MessageDigestCredentialHandler} will be used.</li>
                 * <li>Any additional options will be used to identify and call setters on the
                 * {@link CredentialHandler}. For example, <code>algorithm=SHA256</code>
                 * would result in a call to {@link
                 * MessageDigestCredentialHandler#setAlgorithm(String)} with a parameter of
                 * <code>"SHA256"</code></li>
                 * </ul>
                 * <p><strong>IMPLEMENTATION NOTE</strong> - This class implements
                 * <code>Realm</code> only to satisfy the calling requirements of the
                 * <code>GenericPrincipal</code> constructor.  It does not actually perform
                 * the functionality required of a <code>Realm</code> implementation.</p>
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class JAASMemoryLoginModule extends org.apache.catalina.realm.MemoryRealm implements javax.security.auth.spi.LoginModule {
                    // @ts-ignore
                    constructor()
                    /**
                     * The callback handler responsible for answering our requests.
                     */
                    // @ts-ignore
                    callbackHandler: javax.security.auth.callback.CallbackHandler
                    /**
                     * Has our own <code>commit()</code> returned successfully?
                     */
                    // @ts-ignore
                    committed: boolean
                    /**
                     * The configuration information for this <code>LoginModule</code>.
                     */
                    // @ts-ignore
                    options: java.util.Map<java.lang.String | string, any>
                    /**
                     * The absolute or relative pathname to the XML configuration file.
                     */
                    // @ts-ignore
                    pathname: java.lang.String | string
                    /**
                     * The <code>Principal</code> identified by our validation, or
                     * <code>null</code> if validation failed.
                     */
                    // @ts-ignore
                    principal: java.security.Principal
                    /**
                     * The state information that is shared with other configured
                     * <code>LoginModule</code> instances.
                     */
                    // @ts-ignore
                    sharedState: java.util.Map<java.lang.String | string, any>
                    /**
                     * The subject for which we are performing authentication.
                     */
                    // @ts-ignore
                    subject: javax.security.auth.Subject
                    /**
                     * Phase 2 of authenticating a <code>Subject</code> when Phase 1
                     * fails.  This method is called if the <code>LoginContext</code>
                     * failed somewhere in the overall authentication chain.
                     * @return <code>true</code> if this method succeeded, or
                     *   <code>false</code> if this <code>LoginModule</code> should be
                     *   ignored
                     * @exception LoginException if the abort fails
                     */
                    // @ts-ignore
                    public abort(): boolean
                    /**
                     * Phase 2 of authenticating a <code>Subject</code> when Phase 1
                     * was successful.  This method is called if the <code>LoginContext</code>
                     * succeeded in the overall authentication chain.
                     * @return <code>true</code> if the authentication succeeded, or
                     *   <code>false</code> if this <code>LoginModule</code> should be
                     *   ignored
                     * @exception LoginException if the commit fails
                     */
                    // @ts-ignore
                    public commit(): boolean
                    /**
                     * Initialize this <code>LoginModule</code> with the specified
                     * configuration information.
                     * @param subject The <code>Subject</code> to be authenticated
                     * @param callbackHandler A <code>CallbackHandler</code> for communicating
                     *   with the end user as necessary
                     * @param sharedState State information shared with other
                     *   <code>LoginModule</code> instances
                     * @param options Configuration information for this specific
                     *   <code>LoginModule</code> instance
                     */
                    // @ts-ignore
                    public initialize(subject: javax.security.auth.Subject, callbackHandler: javax.security.auth.callback.CallbackHandler, sharedState: java.util.Map<java.lang.String | string, any>, options: java.util.Map<java.lang.String | string, any>): void
                    /**
                     * Phase 1 of authenticating a <code>Subject</code>.
                     * @return <code>true</code> if the authentication succeeded, or
                     *   <code>false</code> if this <code>LoginModule</code> should be
                     *   ignored
                     * @exception LoginException if the authentication fails
                     */
                    // @ts-ignore
                    public login(): boolean
                    /**
                     * Log out this user.
                     * @return <code>true</code> in all cases because the
                     *   <code>LoginModule</code> should not be ignored
                     * @exception LoginException if logging out failed
                     */
                    // @ts-ignore
                    public logout(): boolean
                    /**
                     * Load the contents of our configuration file.
                     */
                    // @ts-ignore
                    load(): void
                }
            }
        }
    }
}
