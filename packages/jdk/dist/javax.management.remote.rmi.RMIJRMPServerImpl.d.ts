declare namespace javax {
    namespace management {
        namespace remote {
            namespace rmi {
                /**
                 * <p>An {@link RMIServer} object that is exported through JRMP and that
                 * creates client connections as RMI objects exported through JRMP.
                 * User code does not usually reference this class directly.</p>
                 * @see RMIServerImpl
                 * @since 1.5
                 */
                // @ts-ignore
                class RMIJRMPServerImpl extends javax.management.remote.rmi.RMIServerImpl {
                    /**
                     * <p>Creates a new {@link RMIServer} object that will be exported
                     * on the given port using the given socket factories.</p>
                     * @param port the port on which this object and the {#link
                     *  RMIConnectionImpl} objects it creates will be exported.  Can be
                     *  zero, to indicate any available port.
                     * @param csf the client socket factory for the created RMI
                     *  objects.  Can be null.
                     * @param ssf the server socket factory for the created RMI
                     *  objects.  Can be null.
                     * @param env the environment map.  Can be null.
                     * @exception IOException if the {#link RMIServer} object
                     *  cannot be created.
                     * @exception IllegalArgumentException if <code>port</code> is
                     *  negative.
                     */
                    // @ts-ignore
                    constructor(port: number /*int*/, csf: java.rmi.server.RMIClientSocketFactory, ssf: java.rmi.server.RMIServerSocketFactory, env: java.util.Map<java.lang.String, any>)
                    // @ts-ignore
                    export(): void
                    // @ts-ignore
                    getProtocol(): java.lang.String
                    /**
                     * <p>Returns a serializable stub for this {@link RMIServer} object.</p>
                     * @return a serializable stub.
                     * @exception IOException if the stub cannot be obtained - e.g the
                     *             RMIJRMPServerImpl has not been exported yet.
                     */
                    // @ts-ignore
                    toStub(): java.rmi.Remote
                    /**
                     * <p>Creates a new client connection as an RMI object exported
                     * through JRMP. The port and socket factories for the new
                     * {@link RMIConnection} object are the ones supplied
                     * to the <code>RMIJRMPServerImpl</code> constructor.</p>
                     * @param connectionId the ID of the new connection. Every
                     *  connection opened by this connector server will have a
                     *  different id.  The behavior is unspecified if this parameter is
                     *  null.
                     * @param subject the authenticated subject.  Can be null.
                     * @return the newly-created <code>RMIConnection</code>.
                     * @exception IOException if the new {#link RMIConnection}
                     *  object cannot be created or exported.
                     */
                    // @ts-ignore
                    makeClient(connectionId: string, subject: javax.security.auth.Subject): javax.management.remote.rmi.RMIConnection
                    // @ts-ignore
                    closeClient(client: javax.management.remote.rmi.RMIConnection): void
                    /**
                     * <p>Called by {@link #close()} to close the connector server by
                     * unexporting this object.  After returning from this method, the
                     * connector server must not accept any new connections.</p>
                     * @exception IOException if the attempt to close the connector
                     *  server failed.
                     */
                    // @ts-ignore
                    closeServer(): void
                }
            }
        }
    }
}
