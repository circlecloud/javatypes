declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                /**
                 * <p>Implementation of the JAAS <code>CallbackHandler</code> interface,
                 * used to negotiate delivery of the username and credentials that were
                 * specified to our constructor.  No interaction with the user is required
                 * (or possible).</p>
                 * <p>This <code>CallbackHandler</code> will pre-digest the supplied
                 * password, if required by the <code>&lt;Realm&gt;</code> element in
                 * <code>server.xml</code>.</p>
                 * <p>At present, <code>JAASCallbackHandler</code> knows how to handle callbacks of
                 * type <code>javax.security.auth.callback.NameCallback</code> and
                 * <code>javax.security.auth.callback.PasswordCallback</code>.</p>
                 * @author Craig R. McClanahan
                 * @author Andrew R. Jaquith
                 */
                // @ts-ignore
                class JAASCallbackHandler extends java.lang.Object implements javax.security.auth.callback.CallbackHandler {
                    /**
                     * Construct a callback handler configured with the specified values.
                     * Note that if the <code>JAASRealm</code> instance specifies digested passwords,
                     * the <code>password</code> parameter will be pre-digested here.
                     * @param realm Our associated JAASRealm instance
                     * @param username Username to be authenticated with
                     * @param password Password to be authenticated with
                     */
                    // @ts-ignore
                    constructor(realm: org.apache.catalina.realm.JAASRealm, username: java.lang.String | string, password: java.lang.String | string)
                    /**
                     * Construct a callback handler for DIGEST authentication.
                     * @param realm         Our associated JAASRealm instance
                     * @param username      Username to be authenticated with
                     * @param password      Password to be authenticated with
                     * @param nonce         Server generated nonce
                     * @param nc            Nonce count
                     * @param cnonce        Client generated nonce
                     * @param qop           Quality of protection applied to the message
                     * @param realmName     Realm name
                     * @param md5a2         Second MD5 digest used to calculate the digest
                     *                       MD5(Method + ":" + uri)
                     * @param authMethod    The authentication method in use
                     */
                    // @ts-ignore
                    constructor(realm: org.apache.catalina.realm.JAASRealm, username: java.lang.String | string, password: java.lang.String | string, nonce: java.lang.String | string, nc: java.lang.String | string, cnonce: java.lang.String | string, qop: java.lang.String | string, realmName: java.lang.String | string, md5a2: java.lang.String | string, authMethod: java.lang.String | string)
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    /**
                     * The password to be authenticated with.
                     */
                    // @ts-ignore
                    readonly password: java.lang.String | string
                    /**
                     * The associated <code>JAASRealm</code> instance.
                     */
                    // @ts-ignore
                    readonly realm: org.apache.catalina.realm.JAASRealm
                    /**
                     * The username to be authenticated with.
                     */
                    // @ts-ignore
                    readonly username: java.lang.String | string
                    /**
                     * Server generated nonce.
                     */
                    // @ts-ignore
                    readonly nonce: java.lang.String | string
                    /**
                     * Nonce count.
                     */
                    // @ts-ignore
                    readonly nc: java.lang.String | string
                    /**
                     * Client generated nonce.
                     */
                    // @ts-ignore
                    readonly cnonce: java.lang.String | string
                    /**
                     * Quality of protection applied to the message.
                     */
                    // @ts-ignore
                    readonly qop: java.lang.String | string
                    /**
                     * Realm name.
                     */
                    // @ts-ignore
                    readonly realmName: java.lang.String | string
                    /**
                     * Second MD5 digest.
                     */
                    // @ts-ignore
                    readonly md5a2: java.lang.String | string
                    /**
                     * The authentication method to be used. If null, assume BASIC/FORM.
                     */
                    // @ts-ignore
                    readonly authMethod: java.lang.String | string
                    /**
                     * Retrieve the information requested in the provided <code>Callbacks</code>.
                     * This implementation only recognizes {@link NameCallback},
                     * {@link PasswordCallback} and {@link TextInputCallback}.
                     * {@link TextInputCallback} is used to pass the various additional
                     * parameters required for DIGEST authentication.
                     * @param callbacks The set of <code>Callback</code>s to be processed
                     * @exception IOException if an input/output error occurs
                     * @exception UnsupportedCallbackException if the login method requests
                     *   an unsupported callback type
                     */
                    // @ts-ignore
                    public handle(callbacks: javax.security.auth.callback.Callback[]): void
                }
            }
        }
    }
}
