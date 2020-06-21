declare namespace javax {
    namespace management {
        namespace remote {
            namespace rmi {
                /**
                 * <p>A JMX API connector server that creates RMI-based connections
                 * from remote clients.  Usually, such connector servers are made
                 * using {@link javax.management.remote.JMXConnectorServerFactory
                 * JMXConnectorServerFactory}.  However, specialized applications can
                 * use this class directly, for example with an {@link RMIServerImpl}
                 * object.</p>
                 * @since 1.5
                 */
                // @ts-ignore
                class RMIConnectorServer extends javax.management.remote.JMXConnectorServer {
                    /**
                     * <p>Makes an <code>RMIConnectorServer</code>.
                     * This is equivalent to calling {@link #RMIConnectorServer(
                     * JMXServiceURL,Map,RMIServerImpl,MBeanServer)
                     * RMIConnectorServer(directoryURL,environment,null,null)}</p>
                     * @param url the URL defining how to create the connector server.
                     *  Cannot be null.
                     * @param environment attributes governing the creation and
                     *  storing of the RMI object.  Can be null, which is equivalent to
                     *  an empty Map.
                     * @exception IllegalArgumentException if <code>url</code> is null.
                     * @exception MalformedURLException if <code>url</code> does not
                     *  conform to the syntax for an RMI connector, or if its protocol
                     *  is not recognized by this implementation. Only "rmi" and "iiop"
                     *  are valid when this constructor is used.
                     * @exception IOException if the connector server cannot be created
                     *  for some reason or if it is inevitable that its {#link #start()
                     *  start} method will fail.
                     */
                    // @ts-ignore
                    constructor(url: javax.management.remote.JMXServiceURL, environment: java.util.Map<java.lang.String | string, any>)
                    /**
                     * <p>Makes an <code>RMIConnectorServer</code> for the given MBean
                     * server.
                     * This is equivalent to calling {@link #RMIConnectorServer(
                     * JMXServiceURL,Map,RMIServerImpl,MBeanServer)
                     * RMIConnectorServer(directoryURL,environment,null,mbeanServer)}</p>
                     * @param url the URL defining how to create the connector server.
                     *  Cannot be null.
                     * @param environment attributes governing the creation and
                     *  storing of the RMI object.  Can be null, which is equivalent to
                     *  an empty Map.
                     * @param mbeanServer the MBean server to which the new connector
                     *  server is attached, or null if it will be attached by being
                     *  registered as an MBean in the MBean server.
                     * @exception IllegalArgumentException if <code>url</code> is null.
                     * @exception MalformedURLException if <code>url</code> does not
                     *  conform to the syntax for an RMI connector, or if its protocol
                     *  is not recognized by this implementation. Only "rmi" and "iiop"
                     *  are valid when this constructor is used.
                     * @exception IOException if the connector server cannot be created
                     *  for some reason or if it is inevitable that its {#link #start()
                     *  start} method will fail.
                     */
                    // @ts-ignore
                    constructor(url: javax.management.remote.JMXServiceURL, environment: java.util.Map<java.lang.String | string, any>, mbeanServer: javax.management.MBeanServer)
                    /**
                     * <p>Makes an <code>RMIConnectorServer</code> for the given MBean
                     * server.</p>
                     * @param url the URL defining how to create the connector server.
                     *  Cannot be null.
                     * @param environment attributes governing the creation and
                     *  storing of the RMI object.  Can be null, which is equivalent to
                     *  an empty Map.
                     * @param rmiServerImpl An implementation of the RMIServer interface,
                     *   consistent with the protocol type specified in <var>url</var>.
                     *   If this parameter is non null, the protocol type specified by
                     *   <var>url</var> is not constrained, and is assumed to be valid.
                     *   Otherwise, only "rmi" and "iiop" will be recognized.
                     * @param mbeanServer the MBean server to which the new connector
                     *  server is attached, or null if it will be attached by being
                     *  registered as an MBean in the MBean server.
                     * @exception IllegalArgumentException if <code>url</code> is null.
                     * @exception MalformedURLException if <code>url</code> does not
                     *  conform to the syntax for an RMI connector, or if its protocol
                     *  is not recognized by this implementation. Only "rmi" and "iiop"
                     *  are recognized when <var>rmiServerImpl</var> is null.
                     * @exception IOException if the connector server cannot be created
                     *  for some reason or if it is inevitable that its {#link #start()
                     *  start} method will fail.
                     * @see #start
                     */
                    // @ts-ignore
                    constructor(url: javax.management.remote.JMXServiceURL, environment: java.util.Map<java.lang.String | string, any>, rmiServerImpl: javax.management.remote.rmi.RMIServerImpl, mbeanServer: javax.management.MBeanServer)
                    /**
                     * <p>Name of the attribute that specifies whether the {@link
                     * RMIServer} stub that represents an RMI connector server should
                     * override an existing stub at the same address.  The value
                     * associated with this attribute, if any, should be a string that
                     * is equal, ignoring case, to <code>"true"</code> or
                     * <code>"false"</code>.  The default value is false.</p>
                     */
                    // @ts-ignore
                    public static readonly JNDI_REBIND_ATTRIBUTE: java.lang.String | string
                    /**
                     * <p>Name of the attribute that specifies the {@link
                     * RMIClientSocketFactory} for the RMI objects created in
                     * conjunction with this connector. The value associated with this
                     * attribute must be of type <code>RMIClientSocketFactory</code> and can
                     * only be specified in the <code>Map</code> argument supplied when
                     * creating a connector server.</p>
                     */
                    // @ts-ignore
                    public static readonly RMI_CLIENT_SOCKET_FACTORY_ATTRIBUTE: java.lang.String | string
                    /**
                     * <p>Name of the attribute that specifies the {@link
                     * RMIServerSocketFactory} for the RMI objects created in
                     * conjunction with this connector. The value associated with this
                     * attribute must be of type <code>RMIServerSocketFactory</code> and can
                     * only be specified in the <code>Map</code> argument supplied when
                     * creating a connector server.</p>
                     */
                    // @ts-ignore
                    public static readonly RMI_SERVER_SOCKET_FACTORY_ATTRIBUTE: java.lang.String | string
                    /**
                     * <p>Returns a client stub for this connector server.  A client
                     * stub is a serializable object whose {@link
                     * JMXConnector#connect(Map) connect} method can be used to make
                     * one new connection to this connector server.</p>
                     * @param env client connection parameters of the same sort that
                     *  could be provided to {#link JMXConnector#connect(Map)
                     *  JMXConnector.connect(Map)}.  Can be null, which is equivalent
                     *  to an empty map.
                     * @return a client stub that can be used to make a new connection
                     *  to this connector server.
                     * @exception UnsupportedOperationException if this connector
                     *  server does not support the generation of client stubs.
                     * @exception IllegalStateException if the JMXConnectorServer is
                     *  not started (see {#link #isActive()}).
                     * @exception IOException if a communications problem means that a
                     *  stub cannot be created.
                     */
                    // @ts-ignore
                    public toJMXConnector(env: java.util.Map<java.lang.String | string, any>): javax.management.remote.JMXConnector
                    /**
                     * <p>Activates the connector server, that is starts listening for
                     * client connections.  Calling this method when the connector
                     * server is already active has no effect.  Calling this method
                     * when the connector server has been stopped will generate an
                     * <code>IOException</code>.</p>
                     * <p>The behavior of this method when called for the first time
                     * depends on the parameters that were supplied at construction,
                     * as described below.</p>
                     * <p>First, an object of a subclass of {@link RMIServerImpl} is
                     * required, to export the connector server through RMI:</p>
                     * <ul>
                     * <li>If an <code>RMIServerImpl</code> was supplied to the
                     * constructor, it is used.
                     * <li>Otherwise, if the protocol part of the
                     * <code>JMXServiceURL</code> supplied to the constructor was
                     * <code>iiop</code>, an object of type {@link RMIIIOPServerImpl}
                     * is created.
                     * <li>Otherwise, if the <code>JMXServiceURL</code>
                     * was null, or its protocol part was <code>rmi</code>, an object
                     * of type {@link RMIJRMPServerImpl} is created.
                     * <li>Otherwise, the implementation can create an
                     * implementation-specific {@link RMIServerImpl} or it can throw
                     * {@link MalformedURLException}.
                     * </ul>
                     * <p>If the given address includes a JNDI directory URL as
                     * specified in the package documentation for {@link
                     * javax.management.remote.rmi}, then this
                     * <code>RMIConnectorServer</code> will bootstrap by binding the
                     * <code>RMIServerImpl</code> to the given address.</p>
                     * <p>If the URL path part of the <code>JMXServiceURL</code> was
                     * empty or a single slash (<code>/</code>), then the RMI object
                     * will not be bound to a directory.  Instead, a reference to it
                     * will be encoded in the URL path of the RMIConnectorServer
                     * address (returned by {@link #getAddress()}).  The encodings for
                     * <code>rmi</code> and <code>iiop</code> are described in the
                     * package documentation for {@link
                     * javax.management.remote.rmi}.</p>
                     * <p>The behavior when the URL path is neither empty nor a JNDI
                     * directory URL, or when the protocol is neither <code>rmi</code>
                     * nor <code>iiop</code>, is implementation defined, and may
                     * include throwing {@link MalformedURLException} when the
                     * connector server is created or when it is started.</p>
                     * @exception IllegalStateException if the connector server has
                     *  not been attached to an MBean server.
                     * @exception IOException if the connector server cannot be
                     *  started, or in the case of the {#code iiop} protocol, that
                     *  RMI/IIOP is not supported.
                     */
                    // @ts-ignore
                    public start(): void
                    /**
                     * <p>Deactivates the connector server, that is, stops listening for
                     * client connections.  Calling this method will also close all
                     * client connections that were made by this server.  After this
                     * method returns, whether normally or with an exception, the
                     * connector server will not create any new client
                     * connections.</p>
                     * <p>Once a connector server has been stopped, it cannot be started
                     * again.</p>
                     * <p>Calling this method when the connector server has already
                     * been stopped has no effect.  Calling this method when the
                     * connector server has not yet been started will disable the
                     * connector server object permanently.</p>
                     * <p>If closing a client connection produces an exception, that
                     * exception is not thrown from this method.  A {@link
                     * JMXConnectionNotification} is emitted from this MBean with the
                     * connection ID of the connection that could not be closed.</p>
                     * <p>Closing a connector server is a potentially slow operation.
                     * For example, if a client machine with an open connection has
                     * crashed, the close operation might have to wait for a network
                     * protocol timeout.  Callers that do not want to block in a close
                     * operation should do it in a separate thread.</p>
                     * <p>This method calls the method {@link RMIServerImpl#close()
                     * close} on the connector server's <code>RMIServerImpl</code>
                     * object.</p>
                     * <p>If the <code>RMIServerImpl</code> was bound to a JNDI
                     * directory by the {@link #start() start} method, it is unbound
                     * from the directory by this method.</p>
                     * @exception IOException if the server cannot be closed cleanly,
                     *  or if the <code>RMIServerImpl</code> cannot be unbound from the
                     *  directory.  When this exception is thrown, the server has
                     *  already attempted to close all client connections, if
                     *  appropriate; to call {#link RMIServerImpl#close()}; and to
                     *  unbind the <code>RMIServerImpl</code> from its directory, if
                     *  appropriate.  All client connections are closed except possibly
                     *  those that generated exceptions when the server attempted to
                     *  close them.
                     */
                    // @ts-ignore
                    public stop(): void
                    // @ts-ignore
                    public isActive(): boolean
                    // @ts-ignore
                    public getAddress(): javax.management.remote.JMXServiceURL
                    // @ts-ignore
                    public getAttributes(): java.util.Map<java.lang.String | string, any>
                    // @ts-ignore
                    public setMBeanServerForwarder(mbsf: javax.management.remote.MBeanServerForwarder): void
                    // @ts-ignore
                    connectionOpened(connectionId: java.lang.String | string, message: java.lang.String | string, userData: java.lang.Object | any): void
                    // @ts-ignore
                    connectionClosed(connectionId: java.lang.String | string, message: java.lang.String | string, userData: java.lang.Object | any): void
                    // @ts-ignore
                    connectionFailed(connectionId: java.lang.String | string, message: java.lang.String | string, userData: java.lang.Object | any): void
                }
            }
        }
    }
}
