declare namespace javax {
    namespace naming {
        namespace ldap {
            /**
             * This class is the starting context for performing
             * LDAPv3-style extended operations and controls.
             * <p>
             * See <tt>javax.naming.InitialContext</tt> and
             * <tt>javax.naming.InitialDirContext</tt> for details on synchronization,
             * and the policy for how an initial context is created.
             * <h1>Request Controls</h1>
             * When you create an initial context (<tt>InitialLdapContext</tt>),
             * you can specify a list of request controls.
             * These controls will be used as the request controls for any
             * implicit LDAP "bind" operation performed by the context or contexts
             * derived from the context. These are called <em>connection request controls</em>.
             * Use <tt>getConnectControls()</tt> to get a context's connection request
             * controls.
             * <p>
             * The request controls supplied to the initial context constructor
             * are <em>not</em> used as the context request controls
             * for subsequent context operations such as searches and lookups.
             * Context request controls are set and updated by using
             * <tt>setRequestControls()</tt>.
             * <p>
             * As shown, there can be two different sets of request controls
             * associated with a context: connection request controls and context
             * request controls.
             * This is required for those applications needing to send critical
             * controls that might not be applicable to both the context operation and
             * any implicit LDAP "bind" operation.
             * A typical user program would do the following:
             * <blockquote><pre>
             * InitialLdapContext lctx = new InitialLdapContext(env, critConnCtls);
             * lctx.setRequestControls(critModCtls);
             * lctx.modifyAttributes(name, mods);
             * Controls[] respCtls =  lctx.getResponseControls();
             * </pre></blockquote>
             * It specifies first the critical controls for creating the initial context
             * (<tt>critConnCtls</tt>), and then sets the context's request controls
             * (<tt>critModCtls</tt>) for the context operation. If for some reason
             * <tt>lctx</tt> needs to reconnect to the server, it will use
             * <tt>critConnCtls</tt>. See the <tt>LdapContext</tt> interface for
             * more discussion about request controls.
             * <p>
             * Service provider implementors should read the "Service Provider" section
             * in the <tt>LdapContext</tt> class description for implementation details.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @author Vincent Ryan
             * @see LdapContext
             * @see javax.naming.InitialContext
             * @see javax.naming.directory.InitialDirContext
             * @see javax.naming.spi.NamingManager#setInitialContextFactoryBuilder
             * @since 1.3
             */
            // @ts-ignore
            class InitialLdapContext extends javax.naming.directory.InitialDirContext implements javax.naming.ldap.LdapContext {
                /**
                 * Constructs an initial context using no environment properties or
                 * connection request controls.
                 * Equivalent to <tt>new InitialLdapContext(null, null)</tt>.
                 * @throws NamingException if a naming exception is encountered
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs an initial context
                 * using environment properties and connection request controls.
                 * See <tt>javax.naming.InitialContext</tt> for a discussion of
                 * environment properties.
                 * <p> This constructor will not modify its parameters or
                 * save references to them, but may save a clone or copy.
                 * Caller should not modify mutable keys and values in
                 * <tt>environment</tt> after it has been passed to the constructor.
                 * <p> <tt>connCtls</tt> is used as the underlying context instance's
                 * connection request controls.  See the class description
                 * for details.
                 * @param environment
                 *           environment used to create the initial DirContext.
                 *           Null indicates an empty environment.
                 * @param connCtls
                 *           connection request controls for the initial context.
                 *           If null, no connection request controls are used.
                 * @throws NamingException if a naming exception is encountered
                 * @see #reconnect
                 * @see LdapContext#reconnect
                 */
                // @ts-ignore
                constructor(environment: java.util.Hashtable<any, ?>, connCtls: javax.naming.ldap.Control[])
                // @ts-ignore
                extendedOperation(request: javax.naming.ldap.ExtendedRequest): javax.naming.ldap.ExtendedResponse
                // @ts-ignore
                newInstance(reqCtls: javax.naming.ldap.Control[]): javax.naming.ldap.LdapContext
                // @ts-ignore
                reconnect(connCtls: javax.naming.ldap.Control[]): void
                // @ts-ignore
                getConnectControls(): javax.naming.ldap.Control[]
                // @ts-ignore
                setRequestControls(requestControls: javax.naming.ldap.Control[]): void
                // @ts-ignore
                getRequestControls(): javax.naming.ldap.Control[]
                // @ts-ignore
                getResponseControls(): javax.naming.ldap.Control[]
            }
        }
    }
}
