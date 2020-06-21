declare namespace javax {
    namespace management {
        namespace remote {
            namespace rmi {
                /**
                 * <p>An {@link RMIServerImpl} that is exported through IIOP and that
                 * creates client connections as RMI objects exported through IIOP.
                 * User code does not usually reference this class directly.</p>
                 * @see RMIServerImpl
                 * @since 1.5
                 */
                // @ts-ignore
                class RMIIIOPServerImpl extends javax.management.remote.rmi.RMIServerImpl {
                    /**
                     * <p>Creates a new {@link RMIServerImpl}.</p>
                     * @param env the environment containing attributes for the new
                     *  <code>RMIServerImpl</code>.  Can be null, which is equivalent
                     *  to an empty Map.
                     * @exception IOException if the RMI object cannot be created.
                     */
                    // @ts-ignore
                    constructor(env: java.util.Map<java.lang.String | string, any>)
                    // @ts-ignore
                    export(): void
                    // @ts-ignore
                    getProtocol(): string
                    /**
                     * <p>Returns an IIOP stub.</p>
                     * The stub might not yet be connected to the ORB. The stub will
                     * be serializable only if it is connected to the ORB.
                     * @return an IIOP stub.
                     * @exception IOException if the stub cannot be created - e.g the
                     *             RMIIIOPServerImpl has not been exported yet.
                     */
                    // @ts-ignore
                    public toStub(): java.rmi.Remote
                    /**
                     * <p>Creates a new client connection as an RMI object exported
                     * through IIOP.
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
                    makeClient(connectionId: java.lang.String | string, subject: javax.security.auth.Subject): javax.management.remote.rmi.RMIConnection
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
