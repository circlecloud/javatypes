declare namespace javax {
    namespace net {
        /**
         * This class creates server sockets.  It may be subclassed by other
         * factories, which create particular types of server sockets.  This
         * provides a general framework for the addition of public socket-level
         * functionality.  It is the server side analogue of a socket factory,
         * and similarly provides a way to capture a variety of policies related
         * to the sockets being constructed.
         * <P> Like socket factories, server Socket factory instances have
         * methods used to create sockets. There is also an environment
         * specific default server socket factory; frameworks will often use
         * their own customized factory.
         * @since 1.4
         * @see SocketFactory
         * @author David Brownell
         */
        // @ts-ignore
        class ServerSocketFactory extends java.lang.Object {
            /**
             * Creates a server socket factory.
             */
            // @ts-ignore
            constructor()
            /**
             * Returns a copy of the environment's default socket factory.
             * @return the <code>ServerSocketFactory</code>
             */
            // @ts-ignore
            getDefault(): javax.net.ServerSocketFactory
            /**
             * Returns an unbound server socket.  The socket is configured with
             * the socket options (such as accept timeout) given to this factory.
             * @return the unbound socket
             * @throws IOException if the socket cannot be created
             * @see java.net.ServerSocket#bind(java.net.SocketAddress)
             * @see java.net.ServerSocket#bind(java.net.SocketAddress, int)
             * @see java.net.ServerSocket#ServerSocket()
             */
            // @ts-ignore
            createServerSocket(): java.net.ServerSocket
            /**
             * Returns a server socket bound to the specified port.
             * The socket is configured with the socket options
             * (such as accept timeout) given to this factory.
             * <P>
             * If there is a security manager, its <code>checkListen</code>
             * method is called with the <code>port</code> argument as its
             * argument to ensure the operation is allowed. This could result
             * in a SecurityException.
             * @param port the port to listen to
             * @return the <code>ServerSocket</code>
             * @throws IOException for networking errors
             * @throws SecurityException if a security manager exists and its
             *          <code>checkListen</code> method doesn't allow the operation.
             * @throws IllegalArgumentException if the port parameter is outside the
             *          specified range of valid port values, which is between 0 and
             *          65535, inclusive.
             * @see SecurityManager#checkListen
             * @see java.net.ServerSocket#ServerSocket(int)
             */
            // @ts-ignore
            abstract createServerSocket(port: number /*int*/): java.net.ServerSocket
            /**
             * Returns a server socket bound to the specified port, and uses the
             * specified connection backlog.  The socket is configured with
             * the socket options (such as accept timeout) given to this factory.
             * <P>
             * The <code>backlog</code> argument must be a positive
             * value greater than 0. If the value passed if equal or less
             * than 0, then the default value will be assumed.
             * <P>
             * If there is a security manager, its <code>checkListen</code>
             * method is called with the <code>port</code> argument as its
             * argument to ensure the operation is allowed. This could result
             * in a SecurityException.
             * @param port the port to listen to
             * @param backlog how many connections are queued
             * @return the <code>ServerSocket</code>
             * @throws IOException for networking errors
             * @throws SecurityException if a security manager exists and its
             *          <code>checkListen</code> method doesn't allow the operation.
             * @throws IllegalArgumentException if the port parameter is outside the
             *          specified range of valid port values, which is between 0 and
             *          65535, inclusive.
             * @see SecurityManager#checkListen
             * @see java.net.ServerSocket#ServerSocket(int, int)
             */
            // @ts-ignore
            abstract createServerSocket(port: number /*int*/, backlog: number /*int*/): java.net.ServerSocket
            /**
             * Returns a server socket bound to the specified port,
             * with a specified listen backlog and local IP.
             * <P>
             * The <code>ifAddress</code> argument can be used on a multi-homed
             * host for a <code>ServerSocket</code> that will only accept connect
             * requests to one of its addresses. If <code>ifAddress</code> is null,
             * it will accept connections on all local addresses. The socket is
             * configured with the socket options (such as accept timeout) given
             * to this factory.
             * <P>
             * The <code>backlog</code> argument must be a positive
             * value greater than 0. If the value passed if equal or less
             * than 0, then the default value will be assumed.
             * <P>
             * If there is a security manager, its <code>checkListen</code>
             * method is called with the <code>port</code> argument as its
             * argument to ensure the operation is allowed. This could result
             * in a SecurityException.
             * @param port the port to listen to
             * @param backlog how many connections are queued
             * @param ifAddress the network interface address to use
             * @return the <code>ServerSocket</code>
             * @throws IOException for networking errors
             * @throws SecurityException if a security manager exists and its
             *          <code>checkListen</code> method doesn't allow the operation.
             * @throws IllegalArgumentException if the port parameter is outside the
             *          specified range of valid port values, which is between 0 and
             *          65535, inclusive.
             * @see SecurityManager#checkListen
             * @see java.net.ServerSocket#ServerSocket(int, int, java.net.InetAddress)
             */
            // @ts-ignore
            abstract createServerSocket(port: number /*int*/, backlog: number /*int*/, ifAddress: java.net.InetAddress): java.net.ServerSocket
        }
    }
}
