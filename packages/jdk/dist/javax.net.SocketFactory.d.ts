declare namespace javax {
    namespace net {
        /**
         * This class creates sockets.  It may be subclassed by other factories,
         * which create particular subclasses of sockets and thus provide a general
         * framework for the addition of public socket-level functionality.
         * <P> Socket factories are a simple way to capture a variety of policies
         * related to the sockets being constructed, producing such sockets in
         * a way which does not require special configuration of the code which
         * asks for the sockets:  <UL>
         * <LI> Due to polymorphism of both factories and sockets, different
         * kinds of sockets can be used by the same application code just
         * by passing it different kinds of factories.
         * <LI> Factories can themselves be customized with parameters used
         * in socket construction.  So for example, factories could be
         * customized to return sockets with different networking timeouts
         * or security parameters already configured.
         * <LI> The sockets returned to the application can be subclasses
         * of java.net.Socket, so that they can directly expose new APIs
         * for features such as compression, security, record marking,
         * statistics collection, or firewall tunneling.
         * </UL>
         * <P> Factory classes are specified by environment-specific configuration
         * mechanisms.  For example, the <em>getDefault</em> method could return
         * a factory that was appropriate for a particular user or applet, and a
         * framework could use a factory customized to its own purposes.
         * @since 1.4
         * @see ServerSocketFactory
         * @author David Brownell
         */
        // @ts-ignore
        abstract class SocketFactory extends java.lang.Object {
            /**
             * Creates a <code>SocketFactory</code>.
             */
            // @ts-ignore
            constructor()
            /**
             * Returns a copy of the environment's default socket factory.
             * @return the default <code>SocketFactory</code>
             */
            // @ts-ignore
            public static getDefault(): javax.net.SocketFactory
            /**
             * Creates an unconnected socket.
             * @return the unconnected socket
             * @throws IOException if the socket cannot be created
             * @see java.net.Socket#connect(java.net.SocketAddress)
             * @see java.net.Socket#connect(java.net.SocketAddress, int)
             * @see java.net.Socket#Socket()
             */
            // @ts-ignore
            public createSocket(): java.net.Socket
            /**
             * Creates a socket and connects it to the specified remote host
             * at the specified remote port.  This socket is configured using
             * the socket options established for this factory.
             * <p>
             * If there is a security manager, its <code>checkConnect</code>
             * method is called with the host address and <code>port</code>
             * as its arguments. This could result in a SecurityException.
             * @param host the server host name with which to connect, or
             *         <code>null</code> for the loopback address.
             * @param port the server port
             * @return the <code>Socket</code>
             * @throws IOException if an I/O error occurs when creating the socket
             * @throws SecurityException if a security manager exists and its
             *          <code>checkConnect</code> method doesn't allow the operation.
             * @throws UnknownHostException if the host is not known
             * @throws IllegalArgumentException if the port parameter is outside the
             *          specified range of valid port values, which is between 0 and
             *          65535, inclusive.
             * @see SecurityManager#checkConnect
             * @see java.net.Socket#Socket(String, int)
             */
            // @ts-ignore
            public abstract createSocket(host: java.lang.String | string, port: number /*int*/): java.net.Socket
            /**
             * Creates a socket and connects it to the specified remote host
             * on the specified remote port.
             * The socket will also be bound to the local address and port supplied.
             * This socket is configured using
             * the socket options established for this factory.
             * <p>
             * If there is a security manager, its <code>checkConnect</code>
             * method is called with the host address and <code>port</code>
             * as its arguments. This could result in a SecurityException.
             * @param host the server host name with which to connect, or
             *         <code>null</code> for the loopback address.
             * @param port the server port
             * @param localHost the local address the socket is bound to
             * @param localPort the local port the socket is bound to
             * @return the <code>Socket</code>
             * @throws IOException if an I/O error occurs when creating the socket
             * @throws SecurityException if a security manager exists and its
             *          <code>checkConnect</code> method doesn't allow the operation.
             * @throws UnknownHostException if the host is not known
             * @throws IllegalArgumentException if the port parameter or localPort
             *          parameter is outside the specified range of valid port values,
             *          which is between 0 and 65535, inclusive.
             * @see SecurityManager#checkConnect
             * @see java.net.Socket#Socket(String, int, java.net.InetAddress, int)
             */
            // @ts-ignore
            public abstract createSocket(host: java.lang.String | string, port: number /*int*/, localHost: java.net.InetAddress, localPort: number /*int*/): java.net.Socket
            /**
             * Creates a socket and connects it to the specified port number
             * at the specified address.  This socket is configured using
             * the socket options established for this factory.
             * <p>
             * If there is a security manager, its <code>checkConnect</code>
             * method is called with the host address and <code>port</code>
             * as its arguments. This could result in a SecurityException.
             * @param host the server host
             * @param port the server port
             * @return the <code>Socket</code>
             * @throws IOException if an I/O error occurs when creating the socket
             * @throws SecurityException if a security manager exists and its
             *          <code>checkConnect</code> method doesn't allow the operation.
             * @throws IllegalArgumentException if the port parameter is outside the
             *          specified range of valid port values, which is between 0 and
             *          65535, inclusive.
             * @throws NullPointerException if <code>host</code> is null.
             * @see SecurityManager#checkConnect
             * @see java.net.Socket#Socket(java.net.InetAddress, int)
             */
            // @ts-ignore
            public abstract createSocket(host: java.net.InetAddress, port: number /*int*/): java.net.Socket
            /**
             * Creates a socket and connect it to the specified remote address
             * on the specified remote port.  The socket will also be bound
             * to the local address and port suplied.  The socket is configured using
             * the socket options established for this factory.
             * <p>
             * If there is a security manager, its <code>checkConnect</code>
             * method is called with the host address and <code>port</code>
             * as its arguments. This could result in a SecurityException.
             * @param address the server network address
             * @param port the server port
             * @param localAddress the client network address
             * @param localPort the client port
             * @return the <code>Socket</code>
             * @throws IOException if an I/O error occurs when creating the socket
             * @throws SecurityException if a security manager exists and its
             *          <code>checkConnect</code> method doesn't allow the operation.
             * @throws IllegalArgumentException if the port parameter or localPort
             *          parameter is outside the specified range of valid port values,
             *          which is between 0 and 65535, inclusive.
             * @throws NullPointerException if <code>address</code> is null.
             * @see SecurityManager#checkConnect
             * @see java.net.Socket#Socket(java.net.InetAddress, int,
             *      java.net.InetAddress, int)
             */
            // @ts-ignore
            public abstract createSocket(address: java.net.InetAddress, port: number /*int*/, localAddress: java.net.InetAddress, localPort: number /*int*/): java.net.Socket
        }
    }
}
