declare namespace java {
    namespace rmi {
        namespace server {
            /**
             * An <code>RMISocketFactory</code> instance is used by the RMI runtime
             * in order to obtain client and server sockets for RMI calls.  An
             * application may use the <code>setSocketFactory</code> method to
             * request that the RMI runtime use its socket factory instance
             * instead of the default implementation.
             * <p>The default socket factory implementation performs a
             * three-tiered approach to creating client sockets. First, a direct
             * socket connection to the remote VM is attempted.  If that fails
             * (due to a firewall), the runtime uses HTTP with the explicit port
             * number of the server.  If the firewall does not allow this type of
             * communication, then HTTP to a cgi-bin script on the server is used
             * to POST the RMI call. The HTTP tunneling mechanisms are disabled by
             * default. This behavior is controlled by the {@code java.rmi.server.disableHttp}
             * property, whose default value is {@code true}. Setting this property's
             * value to {@code false} will enable the HTTP tunneling mechanisms.
             * <p><strong>Deprecated: HTTP Tunneling.</strong> <em>The HTTP tunneling mechanisms
             * described above, specifically HTTP with an explicit port and HTTP to a
             * cgi-bin script, are deprecated. These HTTP tunneling mechanisms are
             * subject to removal in a future release of the platform.</em>
             * <p>The default socket factory implementation creates server sockets that
             * are bound to the wildcard address, which accepts requests from all network
             * interfaces.
             * @implNote <p>You can use the {#code RMISocketFactory} class to create a server socket that
             *  is bound to a specific address, restricting the origin of requests. For example,
             *  the following code implements a socket factory that binds server sockets to an IPv4
             *  loopback address. This restricts RMI to processing requests only from the local host.
             * 
             *  <pre>{@code
             *      class LoopbackSocketFactory extends RMISocketFactory {
             *          public ServerSocket createServerSocket(int port) throws IOException {
             *              return new ServerSocket(port, 5, InetAddress.getByName("127.0.0.1"));
             *          }
             * 
             *          public Socket createSocket(String host, int port) throws IOException {
             *              // just call the default client socket factory
             *              return RMISocketFactory.getDefaultSocketFactory()
             *                                     .createSocket(host, port);
             *          }
             *      }
             * 
             *      // ...
             * 
             *      RMISocketFactory.setSocketFactory(new LoopbackSocketFactory());
             *  }</pre>
             * 
             *  Set the {@code java.rmi.server.hostname} system property
             *  to {@code 127.0.0.1} to ensure that the generated stubs connect to the right
             *  network interface.
             * @author Ann Wollrath
             * @author Peter Jones
             * @since JDK1.1
             */
            // @ts-ignore
            abstract class RMISocketFactory extends java.lang.Object implements java.rmi.server.RMIClientSocketFactory, java.rmi.server.RMIServerSocketFactory {
                /**
                 * Constructs an <code>RMISocketFactory</code>.
                 * @since JDK1.1
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a client socket connected to the specified host and port.
                 * @param host   the host name
                 * @param port   the port number
                 * @return a socket connected to the specified host and port.
                 * @exception IOException if an I/O error occurs during socket creation
                 * @since JDK1.1
                 */
                // @ts-ignore
                public abstract createSocket(host: java.lang.String | string, port: number /*int*/): java.net.Socket
                /**
                 * Create a server socket on the specified port (port 0 indicates
                 * an anonymous port).
                 * @param port the port number
                 * @return the server socket on the specified port
                 * @exception IOException if an I/O error occurs during server socket
                 *  creation
                 * @since JDK1.1
                 */
                // @ts-ignore
                public abstract createServerSocket(port: number /*int*/): java.net.ServerSocket
                /**
                 * Set the global socket factory from which RMI gets sockets (if the
                 * remote object is not associated with a specific client and/or server
                 * socket factory). The RMI socket factory can only be set once. Note: The
                 * RMISocketFactory may only be set if the current security manager allows
                 * setting a socket factory; if disallowed, a SecurityException will be
                 * thrown.
                 * @param fac the socket factory
                 * @exception IOException if the RMI socket factory is already set
                 * @exception SecurityException  if a security manager exists and its
                 *              <code>checkSetFactory</code> method doesn't allow the operation.
                 * @see #getSocketFactory
                 * @see java.lang.SecurityManager#checkSetFactory()
                 * @since JDK1.1
                 */
                // @ts-ignore
                public static setSocketFactory(fac: java.rmi.server.RMISocketFactory): void
                /**
                 * Returns the socket factory set by the <code>setSocketFactory</code>
                 * method. Returns <code>null</code> if no socket factory has been
                 * set.
                 * @return the socket factory
                 * @see #setSocketFactory(RMISocketFactory)
                 * @since JDK1.1
                 */
                // @ts-ignore
                public static getSocketFactory(): java.rmi.server.RMISocketFactory
                /**
                 * Returns a reference to the default socket factory used
                 * by this RMI implementation.  This will be the factory used
                 * by the RMI runtime when <code>getSocketFactory</code>
                 * returns <code>null</code>.
                 * @return the default RMI socket factory
                 * @since JDK1.1
                 */
                // @ts-ignore
                public static getDefaultSocketFactory(): java.rmi.server.RMISocketFactory
                /**
                 * Sets the failure handler to be called by the RMI runtime if server
                 * socket creation fails.  By default, if no failure handler is installed
                 * and server socket creation fails, the RMI runtime does attempt to
                 * recreate the server socket.
                 * <p>If there is a security manager, this method first calls
                 * the security manager's <code>checkSetFactory</code> method
                 * to ensure the operation is allowed.
                 * This could result in a <code>SecurityException</code>.
                 * @param fh the failure handler
                 * @throws SecurityException  if a security manager exists and its
                 *           <code>checkSetFactory</code> method doesn't allow the
                 *           operation.
                 * @see #getFailureHandler
                 * @see java.rmi.server.RMIFailureHandler#failure(Exception)
                 * @since JDK1.1
                 */
                // @ts-ignore
                public static setFailureHandler(fh: java.rmi.server.RMIFailureHandler): void
                /**
                 * Returns the handler for socket creation failure set by the
                 * <code>setFailureHandler</code> method.
                 * @return the failure handler
                 * @see #setFailureHandler(RMIFailureHandler)
                 * @since JDK1.1
                 */
                // @ts-ignore
                public static getFailureHandler(): java.rmi.server.RMIFailureHandler
            }
        }
    }
}
