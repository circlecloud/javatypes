declare namespace javax {
    namespace management {
        namespace remote {
            namespace rmi {
                /**
                 * <p>An RMI object representing a connector server.  Remote clients
                 * can make connections using the {@link #newClient(Object)} method.  This
                 * method returns an RMI object representing the connection.</p>
                 * <p>User code does not usually reference this class directly.
                 * RMI connection servers are usually created with the class {@link
                 * RMIConnectorServer}.  Remote clients usually create connections
                 * either with {@link javax.management.remote.JMXConnectorFactory}
                 * or by instantiating {@link RMIConnector}.</p>
                 * <p>This is an abstract class.  Concrete subclasses define the
                 * details of the client connection objects, such as whether they use
                 * JRMP or IIOP.</p>
                 * @since 1.5
                 */
                // @ts-ignore
                class RMIServerImpl extends java.lang.Object implements java.io.Closeable, javax.management.remote.rmi.RMIServer {
                    /**
                     * <p>Constructs a new <code>RMIServerImpl</code>.</p>
                     * @param env the environment containing attributes for the new
                     *  <code>RMIServerImpl</code>.  Can be null, which is equivalent
                     *  to an empty Map.
                     */
                    // @ts-ignore
                    constructor(env: java.util.Map<java.lang.String, any>)
                    /**
                     * <p>Exports this RMI object.</p>
                     * @exception IOException if this RMI object cannot be exported.
                     */
                    // @ts-ignore
                    abstract export(): void
                    /**
                     * Returns a remotable stub for this server object.
                     * @return a remotable stub.
                     * @exception IOException if the stub cannot be obtained - e.g the
                     *             RMIServerImpl has not been exported yet.
                     */
                    // @ts-ignore
                    abstract toStub(): java.rmi.Remote
                    /**
                     * <p>Sets the default <code>ClassLoader</code> for this connector
                     * server. New client connections will use this classloader.
                     * Existing client connections are unaffected.</p>
                     * @param cl the new <code>ClassLoader</code> to be used by this
                     *  connector server.
                     * @see #getDefaultClassLoader
                     */
                    // @ts-ignore
                    setDefaultClassLoader(cl: java.lang.ClassLoader): void
                    /**
                     * <p>Gets the default <code>ClassLoader</code> used by this connector
                     * server.</p>
                     * @return the default <code>ClassLoader</code> used by this
                     *  connector server.
                     * @see #setDefaultClassLoader
                     */
                    // @ts-ignore
                    getDefaultClassLoader(): java.lang.ClassLoader
                    /**
                     * <p>Sets the <code>MBeanServer</code> to which this connector
                     * server is attached. New client connections will interact
                     * with this <code>MBeanServer</code>. Existing client connections are
                     * unaffected.</p>
                     * @param mbs the new <code>MBeanServer</code>.  Can be null, but
                     *  new client connections will be refused as long as it is.
                     * @see #getMBeanServer
                     */
                    // @ts-ignore
                    setMBeanServer(mbs: javax.management.MBeanServer): void
                    /**
                     * <p>The <code>MBeanServer</code> to which this connector server
                     * is attached.  This is the last value passed to {@link
                     * #setMBeanServer} on this object, or null if that method has
                     * never been called.</p>
                     * @return the <code>MBeanServer</code> to which this connector
                     *  is attached.
                     * @see #setMBeanServer
                     */
                    // @ts-ignore
                    getMBeanServer(): javax.management.MBeanServer
                    // @ts-ignore
                    getVersion(): java.lang.String
                    /**
                     * <p>Creates a new client connection.  This method calls {@link
                     * #makeClient makeClient} and adds the returned client connection
                     * object to an internal list.  When this
                     * <code>RMIServerImpl</code> is shut down via its {@link
                     * #close()} method, the {@link RMIConnection#close() close()}
                     * method of each object remaining in the list is called.</p>
                     * <p>The fact that a client connection object is in this internal
                     * list does not prevent it from being garbage collected.</p>
                     * @param credentials this object specifies the user-defined
                     *  credentials to be passed in to the server in order to
                     *  authenticate the caller before creating the
                     *  <code>RMIConnection</code>.  Can be null.
                     * @return the newly-created <code>RMIConnection</code>.  This is
                     *  usually the object created by <code>makeClient</code>, though
                     *  an implementation may choose to wrap that object in another
                     *  object implementing <code>RMIConnection</code>.
                     * @exception IOException if the new client object cannot be
                     *  created or exported.
                     * @exception SecurityException if the given credentials do not allow
                     *  the server to authenticate the user successfully.
                     * @exception IllegalStateException if {#link #getMBeanServer()}
                     *  is null.
                     */
                    // @ts-ignore
                    newClient(credentials: any): javax.management.remote.rmi.RMIConnection
                    /**
                     * <p>Creates a new client connection.  This method is called by
                     * the public method {@link #newClient(Object)}.</p>
                     * @param connectionId the ID of the new connection.  Every
                     *  connection opened by this connector server will have a
                     *  different ID.  The behavior is unspecified if this parameter is
                     *  null.
                     * @param subject the authenticated subject.  Can be null.
                     * @return the newly-created <code>RMIConnection</code>.
                     * @exception IOException if the new client object cannot be
                     *  created or exported.
                     */
                    // @ts-ignore
                    abstract makeClient(connectionId: string, subject: javax.security.auth.Subject): javax.management.remote.rmi.RMIConnection
                    /**
                     * <p>Closes a client connection made by {@link #makeClient makeClient}.
                     * @param client a connection previously returned by
                     *  <code>makeClient</code> on which the <code>closeClient</code>
                     *  method has not previously been called.  The behavior is
                     *  unspecified if these conditions are violated, including the
                     *  case where <code>client</code> is null.
                     * @exception IOException if the client connection cannot be
                     *  closed.
                     */
                    // @ts-ignore
                    abstract closeClient(client: javax.management.remote.rmi.RMIConnection): void
                    /**
                     * <p>Returns the protocol string for this object.  The string is
                     * <code>rmi</code> for RMI/JRMP and <code>iiop</code> for RMI/IIOP.
                     * @return the protocol string for this object.
                     */
                    // @ts-ignore
                    abstract getProtocol(): java.lang.String
                    /**
                     * <p>Method called when a client connection created by {@link
                     * #makeClient makeClient} is closed.  A subclass that defines
                     * <code>makeClient</code> must arrange for this method to be
                     * called when the resultant object's {@link RMIConnection#close()
                     * close} method is called.  This enables it to be removed from
                     * the <code>RMIServerImpl</code>'s list of connections.  It is
                     * not an error for <code>client</code> not to be in that
                     * list.</p>
                     * <p>After removing <code>client</code> from the list of
                     * connections, this method calls {@link #closeClient
                     * closeClient(client)}.</p>
                     * @param client the client connection that has been closed.
                     * @exception IOException if {#link #closeClient} throws this
                     *  exception.
                     * @exception NullPointerException if <code>client</code> is null.
                     */
                    // @ts-ignore
                    clientClosed(client: javax.management.remote.rmi.RMIConnection): void
                    /**
                     * <p>Closes this connection server.  This method first calls the
                     * {@link #closeServer()} method so that no new client connections
                     * will be accepted.  Then, for each remaining {@link
                     * RMIConnection} object returned by {@link #makeClient
                     * makeClient}, its {@link RMIConnection#close() close} method is
                     * called.</p>
                     * <p>The behavior when this method is called more than once is
                     * unspecified.</p>
                     * <p>If {@link #closeServer()} throws an
                     * <code>IOException</code>, the individual connections are
                     * nevertheless closed, and then the <code>IOException</code> is
                     * thrown from this method.</p>
                     * <p>If {@link #closeServer()} returns normally but one or more
                     * of the individual connections throws an
                     * <code>IOException</code>, then, after closing all the
                     * connections, one of those <code>IOException</code>s is thrown
                     * from this method.  If more than one connection throws an
                     * <code>IOException</code>, it is unspecified which one is thrown
                     * from this method.</p>
                     * @exception IOException if {#link #closeServer()} or one of the
                     *  {@link RMIConnection#close()} calls threw
                     *  <code>IOException</code>.
                     */
                    // @ts-ignore
                    close(): void
                    /**
                     * <p>Called by {@link #close()} to close the connector server.
                     * After returning from this method, the connector server must
                     * not accept any new connections.</p>
                     * @exception IOException if the attempt to close the connector
                     *  server failed.
                     */
                    // @ts-ignore
                    abstract closeServer(): void
                }
            }
        }
    }
}
