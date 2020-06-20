declare namespace java {
    namespace net {
        /**
         * This class implements client sockets (also called just
         * "sockets"). A socket is an endpoint for communication
         * between two machines.
         * <p>
         * The actual work of the socket is performed by an instance of the
         * {@code SocketImpl} class. An application, by changing
         * the socket factory that creates the socket implementation,
         * can configure itself to create sockets appropriate to the local
         * firewall.
         * @author unascribed
         * @see java.net.Socket#setSocketImplFactory(java.net.SocketImplFactory)
         * @see java.net.SocketImpl
         * @see java.nio.channels.SocketChannel
         * @since JDK1.0
         */
        // @ts-ignore
        class Socket extends java.lang.Object implements java.io.Closeable {
            /**
             * Creates an unconnected socket, with the
             * system-default type of SocketImpl.
             * @since JDK1.1
             * @revised 1.4
             */
            // @ts-ignore
            constructor()
            /**
             * Creates an unconnected socket, specifying the type of proxy, if any,
             * that should be used regardless of any other settings.
             * <P>
             * If there is a security manager, its {@code checkConnect} method
             * is called with the proxy host address and port number
             * as its arguments. This could result in a SecurityException.
             * <P>
             * Examples:
             * <UL> <LI>{@code Socket s = new Socket(Proxy.NO_PROXY);} will create
             * a plain socket ignoring any other proxy configuration.</LI>
             * <LI>{@code Socket s = new Socket(new Proxy(Proxy.Type.SOCKS, new InetSocketAddress("socks.mydom.com", 1080)));}
             * will create a socket connecting through the specified SOCKS proxy
             * server.</LI>
             * </UL>
             * @param proxy a {#link java.net.Proxy Proxy} object specifying what kind
             *               of proxying should be used.
             * @throws IllegalArgumentException if the proxy is of an invalid type
             *           or {#code null}.
             * @throws SecurityException if a security manager is present and
             *                            permission to connect to the proxy is
             *                            denied.
             * @see java.net.ProxySelector
             * @see java.net.Proxy
             * @since 1.5
             */
            // @ts-ignore
            constructor(proxy: java.net.Proxy)
            /**
             * Creates an unconnected Socket with a user-specified
             * SocketImpl.
             * <P>
             * @param impl an instance of a <B>SocketImpl</B>
             *  the subclass wishes to use on the Socket.
             * @exception SocketException if there is an error in the underlying protocol,
             *  such as a TCP error.
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(impl: java.net.SocketImpl)
            /**
             * Creates a stream socket and connects it to the specified port
             * number on the named host.
             * <p>
             * If the specified host is {@code null} it is the equivalent of
             * specifying the address as
             * {@link java.net.InetAddress#getByName InetAddress.getByName}{@code (null)}.
             * In other words, it is equivalent to specifying an address of the
             * loopback interface. </p>
             * <p>
             * If the application has specified a server socket factory, that
             * factory's {@code createSocketImpl} method is called to create
             * the actual socket implementation. Otherwise a "plain" socket is created.
             * <p>
             * If there is a security manager, its
             * {@code checkConnect} method is called
             * with the host address and {@code port}
             * as its arguments. This could result in a SecurityException.
             * @param host   the host name, or {#code null} for the loopback address.
             * @param port   the port number.
             * @exception UnknownHostException if the IP address of
             *  the host could not be determined.
             * @exception IOException  if an I/O error occurs when creating the socket.
             * @exception SecurityException  if a security manager exists and its
             *              {#code checkConnect} method doesn't allow the operation.
             * @exception IllegalArgumentException if the port parameter is outside
             *              the specified range of valid port values, which is between
             *              0 and 65535, inclusive.
             * @see java.net.Socket#setSocketImplFactory(java.net.SocketImplFactory)
             * @see java.net.SocketImpl
             * @see java.net.SocketImplFactory#createSocketImpl()
             * @see SecurityManager#checkConnect
             */
            // @ts-ignore
            constructor(host: string, port: number /*int*/)
            /**
             * Creates a stream socket and connects it to the specified port
             * number at the specified IP address.
             * <p>
             * If the application has specified a socket factory, that factory's
             * {@code createSocketImpl} method is called to create the
             * actual socket implementation. Otherwise a "plain" socket is created.
             * <p>
             * If there is a security manager, its
             * {@code checkConnect} method is called
             * with the host address and {@code port}
             * as its arguments. This could result in a SecurityException.
             * @param address   the IP address.
             * @param port      the port number.
             * @exception IOException  if an I/O error occurs when creating the socket.
             * @exception SecurityException  if a security manager exists and its
             *              {#code checkConnect} method doesn't allow the operation.
             * @exception IllegalArgumentException if the port parameter is outside
             *              the specified range of valid port values, which is between
             *              0 and 65535, inclusive.
             * @exception NullPointerException if {#code address} is null.
             * @see java.net.Socket#setSocketImplFactory(java.net.SocketImplFactory)
             * @see java.net.SocketImpl
             * @see java.net.SocketImplFactory#createSocketImpl()
             * @see SecurityManager#checkConnect
             */
            // @ts-ignore
            constructor(address: java.net.InetAddress, port: number /*int*/)
            /**
             * Creates a socket and connects it to the specified remote host on
             * the specified remote port. The Socket will also bind() to the local
             * address and port supplied.
             * <p>
             * If the specified host is {@code null} it is the equivalent of
             * specifying the address as
             * {@link java.net.InetAddress#getByName InetAddress.getByName}{@code (null)}.
             * In other words, it is equivalent to specifying an address of the
             * loopback interface. </p>
             * <p>
             * A local port number of {@code zero} will let the system pick up a
             * free port in the {@code bind} operation.</p>
             * <p>
             * If there is a security manager, its
             * {@code checkConnect} method is called
             * with the host address and {@code port}
             * as its arguments. This could result in a SecurityException.
             * @param host the name of the remote host, or {#code null} for the loopback address.
             * @param port the remote port
             * @param localAddr the local address the socket is bound to, or
             *         {#code null} for the {@code anyLocal} address.
             * @param localPort the local port the socket is bound to, or
             *         {#code zero} for a system selected free port.
             * @exception IOException  if an I/O error occurs when creating the socket.
             * @exception SecurityException  if a security manager exists and its
             *              {#code checkConnect} method doesn't allow the connection
             *              to the destination, or if its {@code checkListen} method
             *              doesn't allow the bind to the local port.
             * @exception IllegalArgumentException if the port parameter or localPort
             *              parameter is outside the specified range of valid port values,
             *              which is between 0 and 65535, inclusive.
             * @see SecurityManager#checkConnect
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(host: string, port: number /*int*/, localAddr: java.net.InetAddress, localPort: number /*int*/)
            /**
             * Creates a socket and connects it to the specified remote address on
             * the specified remote port. The Socket will also bind() to the local
             * address and port supplied.
             * <p>
             * If the specified local address is {@code null} it is the equivalent of
             * specifying the address as the AnyLocal address
             * (see {@link java.net.InetAddress#isAnyLocalAddress InetAddress.isAnyLocalAddress}{@code ()}).
             * <p>
             * A local port number of {@code zero} will let the system pick up a
             * free port in the {@code bind} operation.</p>
             * <p>
             * If there is a security manager, its
             * {@code checkConnect} method is called
             * with the host address and {@code port}
             * as its arguments. This could result in a SecurityException.
             * @param address the remote address
             * @param port the remote port
             * @param localAddr the local address the socket is bound to, or
             *         {#code null} for the {@code anyLocal} address.
             * @param localPort the local port the socket is bound to or
             *         {#code zero} for a system selected free port.
             * @exception IOException  if an I/O error occurs when creating the socket.
             * @exception SecurityException  if a security manager exists and its
             *              {#code checkConnect} method doesn't allow the connection
             *              to the destination, or if its {@code checkListen} method
             *              doesn't allow the bind to the local port.
             * @exception IllegalArgumentException if the port parameter or localPort
             *              parameter is outside the specified range of valid port values,
             *              which is between 0 and 65535, inclusive.
             * @exception NullPointerException if {#code address} is null.
             * @see SecurityManager#checkConnect
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(address: java.net.InetAddress, port: number /*int*/, localAddr: java.net.InetAddress, localPort: number /*int*/)
            /**
             * Creates a stream socket and connects it to the specified port
             * number on the named host.
             * <p>
             * If the specified host is {@code null} it is the equivalent of
             * specifying the address as
             * {@link java.net.InetAddress#getByName InetAddress.getByName}{@code (null)}.
             * In other words, it is equivalent to specifying an address of the
             * loopback interface. </p>
             * <p>
             * If the stream argument is {@code true}, this creates a
             * stream socket. If the stream argument is {@code false}, it
             * creates a datagram socket.
             * <p>
             * If the application has specified a server socket factory, that
             * factory's {@code createSocketImpl} method is called to create
             * the actual socket implementation. Otherwise a "plain" socket is created.
             * <p>
             * If there is a security manager, its
             * {@code checkConnect} method is called
             * with the host address and {@code port}
             * as its arguments. This could result in a SecurityException.
             * <p>
             * If a UDP socket is used, TCP/IP related socket options will not apply.
             * @param host     the host name, or {#code null} for the loopback address.
             * @param port     the port number.
             * @param stream   a {#code boolean} indicating whether this is
             *                       a stream socket or a datagram socket.
             * @exception IOException  if an I/O error occurs when creating the socket.
             * @exception SecurityException  if a security manager exists and its
             *              {#code checkConnect} method doesn't allow the operation.
             * @exception IllegalArgumentException if the port parameter is outside
             *              the specified range of valid port values, which is between
             *              0 and 65535, inclusive.
             * @see java.net.Socket#setSocketImplFactory(java.net.SocketImplFactory)
             * @see java.net.SocketImpl
             * @see java.net.SocketImplFactory#createSocketImpl()
             * @see SecurityManager#checkConnect
             * @deprecated Use DatagramSocket instead for UDP transport.
             */
            // @ts-ignore
            constructor(host: string, port: number /*int*/, stream: boolean)
            /**
             * Creates a socket and connects it to the specified port number at
             * the specified IP address.
             * <p>
             * If the stream argument is {@code true}, this creates a
             * stream socket. If the stream argument is {@code false}, it
             * creates a datagram socket.
             * <p>
             * If the application has specified a server socket factory, that
             * factory's {@code createSocketImpl} method is called to create
             * the actual socket implementation. Otherwise a "plain" socket is created.
             * <p>If there is a security manager, its
             * {@code checkConnect} method is called
             * with {@code host.getHostAddress()} and {@code port}
             * as its arguments. This could result in a SecurityException.
             * <p>
             * If UDP socket is used, TCP/IP related socket options will not apply.
             * @param host     the IP address.
             * @param port      the port number.
             * @param stream    if {#code true}, create a stream socket;
             *                        otherwise, create a datagram socket.
             * @exception IOException  if an I/O error occurs when creating the socket.
             * @exception SecurityException  if a security manager exists and its
             *              {#code checkConnect} method doesn't allow the operation.
             * @exception IllegalArgumentException if the port parameter is outside
             *              the specified range of valid port values, which is between
             *              0 and 65535, inclusive.
             * @exception NullPointerException if {#code host} is null.
             * @see java.net.Socket#setSocketImplFactory(java.net.SocketImplFactory)
             * @see java.net.SocketImpl
             * @see java.net.SocketImplFactory#createSocketImpl()
             * @see SecurityManager#checkConnect
             * @deprecated Use DatagramSocket instead for UDP transport.
             */
            // @ts-ignore
            constructor(host: java.net.InetAddress, port: number /*int*/, stream: boolean)
            /**
             * Connects this socket to the server.
             * @param endpoint the {#code SocketAddress}
             * @throws IOException if an error occurs during the connection
             * @throws java.nio.channels.IllegalBlockingModeException
             *           if this socket has an associated channel,
             *           and the channel is in non-blocking mode
             * @throws IllegalArgumentException if endpoint is null or is a
             *           SocketAddress subclass not supported by this socket
             * @since 1.4
             * @spec JSR-51
             */
            // @ts-ignore
            connect(endpoint: java.net.SocketAddress): void
            /**
             * Connects this socket to the server with a specified timeout value.
             * A timeout of zero is interpreted as an infinite timeout. The connection
             * will then block until established or an error occurs.
             * @param endpoint the {#code SocketAddress}
             * @param timeout  the timeout value to be used in milliseconds.
             * @throws IOException if an error occurs during the connection
             * @throws SocketTimeoutException if timeout expires before connecting
             * @throws java.nio.channels.IllegalBlockingModeException
             *           if this socket has an associated channel,
             *           and the channel is in non-blocking mode
             * @throws IllegalArgumentException if endpoint is null or is a
             *           SocketAddress subclass not supported by this socket
             * @since 1.4
             * @spec JSR-51
             */
            // @ts-ignore
            connect(endpoint: java.net.SocketAddress, timeout: number /*int*/): void
            /**
             * Binds the socket to a local address.
             * <P>
             * If the address is {@code null}, then the system will pick up
             * an ephemeral port and a valid local address to bind the socket.
             * @param bindpoint the {#code SocketAddress} to bind to
             * @throws IOException if the bind operation fails, or if the socket
             *                      is already bound.
             * @throws IllegalArgumentException if bindpoint is a
             *           SocketAddress subclass not supported by this socket
             * @throws SecurityException  if a security manager exists and its
             *           {#code checkListen} method doesn't allow the bind
             *           to the local port.
             * @since 1.4
             * @see #isBound
             */
            // @ts-ignore
            bind(bindpoint: java.net.SocketAddress): void
            /**
             * Returns the address to which the socket is connected.
             * <p>
             * If the socket was connected prior to being {@link #close closed},
             * then this method will continue to return the connected address
             * after the socket is closed.
             * @return the remote IP address to which this socket is connected,
             *           or {#code null} if the socket is not connected.
             */
            // @ts-ignore
            getInetAddress(): java.net.InetAddress
            /**
             * Gets the local address to which the socket is bound.
             * <p>
             * If there is a security manager set, its {@code checkConnect} method is
             * called with the local address and {@code -1} as its arguments to see
             * if the operation is allowed. If the operation is not allowed,
             * the {@link InetAddress#getLoopbackAddress loopback} address is returned.
             * @return the local address to which the socket is bound,
             *          the loopback address if denied by the security manager, or
             *          the wildcard address if the socket is closed or not bound yet.
             * @since JDK1.1
             * @see SecurityManager#checkConnect
             */
            // @ts-ignore
            getLocalAddress(): java.net.InetAddress
            /**
             * Returns the remote port number to which this socket is connected.
             * <p>
             * If the socket was connected prior to being {@link #close closed},
             * then this method will continue to return the connected port number
             * after the socket is closed.
             * @return the remote port number to which this socket is connected, or
             *           0 if the socket is not connected yet.
             */
            // @ts-ignore
            getPort(): int
            /**
             * Returns the local port number to which this socket is bound.
             * <p>
             * If the socket was bound prior to being {@link #close closed},
             * then this method will continue to return the local port number
             * after the socket is closed.
             * @return the local port number to which this socket is bound or -1
             *           if the socket is not bound yet.
             */
            // @ts-ignore
            getLocalPort(): int
            /**
             * Returns the address of the endpoint this socket is connected to, or
             * {@code null} if it is unconnected.
             * <p>
             * If the socket was connected prior to being {@link #close closed},
             * then this method will continue to return the connected address
             * after the socket is closed.
             * @return a {#code SocketAddress} representing the remote endpoint of this
             *          socket, or {@code null} if it is not connected yet.
             * @see #getInetAddress()
             * @see #getPort()
             * @see #connect(SocketAddress, int)
             * @see #connect(SocketAddress)
             * @since 1.4
             */
            // @ts-ignore
            getRemoteSocketAddress(): java.net.SocketAddress
            /**
             * Returns the address of the endpoint this socket is bound to.
             * <p>
             * If a socket bound to an endpoint represented by an
             * {@code InetSocketAddress } is {@link #close closed},
             * then this method will continue to return an {@code InetSocketAddress}
             * after the socket is closed. In that case the returned
             * {@code InetSocketAddress}'s address is the
             * {@link InetAddress#isAnyLocalAddress wildcard} address
             * and its port is the local port that it was bound to.
             * <p>
             * If there is a security manager set, its {@code checkConnect} method is
             * called with the local address and {@code -1} as its arguments to see
             * if the operation is allowed. If the operation is not allowed,
             * a {@code SocketAddress} representing the
             * {@link InetAddress#getLoopbackAddress loopback} address and the local
             * port to which this socket is bound is returned.
             * @return a {#code SocketAddress} representing the local endpoint of
             *          this socket, or a {@code SocketAddress} representing the
             *          loopback address if denied by the security manager, or
             *          {@code null} if the socket is not bound yet.
             * @see #getLocalAddress()
             * @see #getLocalPort()
             * @see #bind(SocketAddress)
             * @see SecurityManager#checkConnect
             * @since 1.4
             */
            // @ts-ignore
            getLocalSocketAddress(): java.net.SocketAddress
            /**
             * Returns the unique {@link java.nio.channels.SocketChannel SocketChannel}
             * object associated with this socket, if any.
             * <p> A socket will have a channel if, and only if, the channel itself was
             * created via the {@link java.nio.channels.SocketChannel#open
             * SocketChannel.open} or {@link
             * java.nio.channels.ServerSocketChannel#accept ServerSocketChannel.accept}
             * methods.
             * @return the socket channel associated with this socket,
             *           or {#code null} if this socket was not created
             *           for a channel
             * @since 1.4
             * @spec JSR-51
             */
            // @ts-ignore
            getChannel(): java.nio.channels.SocketChannel
            /**
             * Returns an input stream for this socket.
             * <p> If this socket has an associated channel then the resulting input
             * stream delegates all of its operations to the channel.  If the channel
             * is in non-blocking mode then the input stream's {@code read} operations
             * will throw an {@link java.nio.channels.IllegalBlockingModeException}.
             * <p>Under abnormal conditions the underlying connection may be
             * broken by the remote host or the network software (for example
             * a connection reset in the case of TCP connections). When a
             * broken connection is detected by the network software the
             * following applies to the returned input stream :-
             * <ul>
             * <li><p>The network software may discard bytes that are buffered
             * by the socket. Bytes that aren't discarded by the network
             * software can be read using {@link java.io.InputStream#read read}.
             * <li><p>If there are no bytes buffered on the socket, or all
             * buffered bytes have been consumed by
             * {@link java.io.InputStream#read read}, then all subsequent
             * calls to {@link java.io.InputStream#read read} will throw an
             * {@link java.io.IOException IOException}.
             * <li><p>If there are no bytes buffered on the socket, and the
             * socket has not been closed using {@link #close close}, then
             * {@link java.io.InputStream#available available} will
             * return {@code 0}.
             * </ul>
             * <p> Closing the returned {@link java.io.InputStream InputStream}
             * will close the associated socket.
             * @return an input stream for reading bytes from this socket.
             * @exception IOException  if an I/O error occurs when creating the
             *              input stream, the socket is closed, the socket is
             *              not connected, or the socket input has been shutdown
             *              using {#link #shutdownInput()}
             * @revised 1.4
             * @spec JSR-51
             */
            // @ts-ignore
            getInputStream(): java.io.InputStream
            /**
             * Returns an output stream for this socket.
             * <p> If this socket has an associated channel then the resulting output
             * stream delegates all of its operations to the channel.  If the channel
             * is in non-blocking mode then the output stream's {@code write}
             * operations will throw an {@link
             * java.nio.channels.IllegalBlockingModeException}.
             * <p> Closing the returned {@link java.io.OutputStream OutputStream}
             * will close the associated socket.
             * @return an output stream for writing bytes to this socket.
             * @exception IOException  if an I/O error occurs when creating the
             *                output stream or if the socket is not connected.
             * @revised 1.4
             * @spec JSR-51
             */
            // @ts-ignore
            getOutputStream(): java.io.OutputStream
            /**
             * Enable/disable {@link SocketOptions#TCP_NODELAY TCP_NODELAY}
             * (disable/enable Nagle's algorithm).
             * @param on {#code true} to enable TCP_NODELAY,
             *  {@code false} to disable.
             * @exception SocketException if there is an error
             *  in the underlying protocol, such as a TCP error.
             * @since JDK1.1
             * @see #getTcpNoDelay()
             */
            // @ts-ignore
            setTcpNoDelay(on: boolean): void
            /**
             * Tests if {@link SocketOptions#TCP_NODELAY TCP_NODELAY} is enabled.
             * @return a {#code boolean} indicating whether or not
             *          {@link SocketOptions#TCP_NODELAY TCP_NODELAY} is enabled.
             * @exception SocketException if there is an error
             *  in the underlying protocol, such as a TCP error.
             * @since JDK1.1
             * @see #setTcpNoDelay(boolean)
             */
            // @ts-ignore
            getTcpNoDelay(): boolean
            /**
             * Enable/disable {@link SocketOptions#SO_LINGER SO_LINGER} with the
             * specified linger time in seconds. The maximum timeout value is platform
             * specific.
             * The setting only affects socket close.
             * @param on     whether or not to linger on.
             * @param linger how long to linger for, if on is true.
             * @exception SocketException if there is an error
             *  in the underlying protocol, such as a TCP error.
             * @exception IllegalArgumentException if the linger value is negative.
             * @since JDK1.1
             * @see #getSoLinger()
             */
            // @ts-ignore
            setSoLinger(on: boolean, linger: number /*int*/): void
            /**
             * Returns setting for {@link SocketOptions#SO_LINGER SO_LINGER}.
             * -1 returns implies that the
             * option is disabled.
             * The setting only affects socket close.
             * @return the setting for {#link SocketOptions#SO_LINGER SO_LINGER}.
             * @exception SocketException if there is an error
             *  in the underlying protocol, such as a TCP error.
             * @since JDK1.1
             * @see #setSoLinger(boolean, int)
             */
            // @ts-ignore
            getSoLinger(): int
            /**
             * Send one byte of urgent data on the socket. The byte to be sent is the lowest eight
             * bits of the data parameter. The urgent byte is
             * sent after any preceding writes to the socket OutputStream
             * and before any future writes to the OutputStream.
             * @param data The byte of data to send
             * @exception IOException if there is an error
             *   sending the data.
             * @since 1.4
             */
            // @ts-ignore
            sendUrgentData(data: number /*int*/): void
            /**
             * Enable/disable {@link SocketOptions#SO_OOBINLINE SO_OOBINLINE}
             * (receipt of TCP urgent data)
             * By default, this option is disabled and TCP urgent data received on a
             * socket is silently discarded. If the user wishes to receive urgent data, then
             * this option must be enabled. When enabled, urgent data is received
             * inline with normal data.
             * <p>
             * Note, only limited support is provided for handling incoming urgent
             * data. In particular, no notification of incoming urgent data is provided
             * and there is no capability to distinguish between normal data and urgent
             * data unless provided by a higher level protocol.
             * @param on {#code true} to enable
             *            {@link SocketOptions#SO_OOBINLINE SO_OOBINLINE},
             *            {@code false} to disable.
             * @exception SocketException if there is an error
             *  in the underlying protocol, such as a TCP error.
             * @since 1.4
             * @see #getOOBInline()
             */
            // @ts-ignore
            setOOBInline(on: boolean): void
            /**
             * Tests if {@link SocketOptions#SO_OOBINLINE SO_OOBINLINE} is enabled.
             * @return a {#code boolean} indicating whether or not
             *          {@link SocketOptions#SO_OOBINLINE SO_OOBINLINE}is enabled.
             * @exception SocketException if there is an error
             *  in the underlying protocol, such as a TCP error.
             * @since 1.4
             * @see #setOOBInline(boolean)
             */
            // @ts-ignore
            getOOBInline(): boolean
            /**
             * Enable/disable {@link SocketOptions#SO_TIMEOUT SO_TIMEOUT}
             * with the specified timeout, in milliseconds. With this option set
             * to a non-zero timeout, a read() call on the InputStream associated with
             * this Socket will block for only this amount of time.  If the timeout
             * expires, a <B>java.net.SocketTimeoutException</B> is raised, though the
             * Socket is still valid. The option <B>must</B> be enabled
             * prior to entering the blocking operation to have effect. The
             * timeout must be {@code > 0}.
             * A timeout of zero is interpreted as an infinite timeout.
             * @param timeout the specified timeout, in milliseconds.
             * @exception SocketException if there is an error
             *  in the underlying protocol, such as a TCP error.
             * @since JDK 1.1
             * @see #getSoTimeout()
             */
            // @ts-ignore
            setSoTimeout(timeout: number /*int*/): void
            /**
             * Returns setting for {@link SocketOptions#SO_TIMEOUT SO_TIMEOUT}.
             * 0 returns implies that the option is disabled (i.e., timeout of infinity).
             * @return the setting for {#link SocketOptions#SO_TIMEOUT SO_TIMEOUT}
             * @exception SocketException if there is an error
             *  in the underlying protocol, such as a TCP error.
             * @since JDK1.1
             * @see #setSoTimeout(int)
             */
            // @ts-ignore
            getSoTimeout(): int
            /**
             * Sets the {@link SocketOptions#SO_SNDBUF SO_SNDBUF} option to the
             * specified value for this {@code Socket}.
             * The {@link SocketOptions#SO_SNDBUF SO_SNDBUF} option is used by the
             * platform's networking code as a hint for the size to set the underlying
             * network I/O buffers.
             * <p>Because {@link SocketOptions#SO_SNDBUF SO_SNDBUF} is a hint,
             * applications that want to verify what size the buffers were set to
             * should call {@link #getSendBufferSize()}.
             * @exception SocketException if there is an error
             *  in the underlying protocol, such as a TCP error.
             * @param size the size to which to set the send buffer
             *  size. This value must be greater than 0.
             * @exception IllegalArgumentException if the
             *  value is 0 or is negative.
             * @see #getSendBufferSize()
             * @since 1.2
             */
            // @ts-ignore
            setSendBufferSize(size: number /*int*/): void
            /**
             * Get value of the {@link SocketOptions#SO_SNDBUF SO_SNDBUF} option
             * for this {@code Socket}, that is the buffer size used by the platform
             * for output on this {@code Socket}.
             * @return the value of the {#link SocketOptions#SO_SNDBUF SO_SNDBUF}
             *          option for this {@code Socket}.
             * @exception SocketException if there is an error
             *  in the underlying protocol, such as a TCP error.
             * @see #setSendBufferSize(int)
             * @since 1.2
             */
            // @ts-ignore
            getSendBufferSize(): int
            /**
             * Sets the {@link SocketOptions#SO_RCVBUF SO_RCVBUF} option to the
             * specified value for this {@code Socket}. The
             * {@link SocketOptions#SO_RCVBUF SO_RCVBUF} option is
             * used by the platform's networking code as a hint for the size to set
             * the underlying network I/O buffers.
             * <p>Increasing the receive buffer size can increase the performance of
             * network I/O for high-volume connection, while decreasing it can
             * help reduce the backlog of incoming data.
             * <p>Because {@link SocketOptions#SO_RCVBUF SO_RCVBUF} is a hint,
             * applications that want to verify what size the buffers were set to
             * should call {@link #getReceiveBufferSize()}.
             * <p>The value of {@link SocketOptions#SO_RCVBUF SO_RCVBUF} is also used
             * to set the TCP receive window that is advertized to the remote peer.
             * Generally, the window size can be modified at any time when a socket is
             * connected. However, if a receive window larger than 64K is required then
             * this must be requested <B>before</B> the socket is connected to the
             * remote peer. There are two cases to be aware of:
             * <ol>
             * <li>For sockets accepted from a ServerSocket, this must be done by calling
             * {@link ServerSocket#setReceiveBufferSize(int)} before the ServerSocket
             * is bound to a local address.<p></li>
             * <li>For client sockets, setReceiveBufferSize() must be called before
             * connecting the socket to its remote peer.</li></ol>
             * @param size the size to which to set the receive buffer
             *  size. This value must be greater than 0.
             * @exception IllegalArgumentException if the value is 0 or is
             *  negative.
             * @exception SocketException if there is an error
             *  in the underlying protocol, such as a TCP error.
             * @see #getReceiveBufferSize()
             * @see ServerSocket#setReceiveBufferSize(int)
             * @since 1.2
             */
            // @ts-ignore
            setReceiveBufferSize(size: number /*int*/): void
            /**
             * Gets the value of the {@link SocketOptions#SO_RCVBUF SO_RCVBUF} option
             * for this {@code Socket}, that is the buffer size used by the platform
             * for input on this {@code Socket}.
             * @return the value of the {#link SocketOptions#SO_RCVBUF SO_RCVBUF}
             *          option for this {@code Socket}.
             * @exception SocketException if there is an error
             *  in the underlying protocol, such as a TCP error.
             * @see #setReceiveBufferSize(int)
             * @since 1.2
             */
            // @ts-ignore
            getReceiveBufferSize(): int
            /**
             * Enable/disable {@link SocketOptions#SO_KEEPALIVE SO_KEEPALIVE}.
             * @param on  whether or not to have socket keep alive turned on.
             * @exception SocketException if there is an error
             *  in the underlying protocol, such as a TCP error.
             * @since 1.3
             * @see #getKeepAlive()
             */
            // @ts-ignore
            setKeepAlive(on: boolean): void
            /**
             * Tests if {@link SocketOptions#SO_KEEPALIVE SO_KEEPALIVE} is enabled.
             * @return a {#code boolean} indicating whether or not
             *          {@link SocketOptions#SO_KEEPALIVE SO_KEEPALIVE} is enabled.
             * @exception SocketException if there is an error
             *  in the underlying protocol, such as a TCP error.
             * @since 1.3
             * @see #setKeepAlive(boolean)
             */
            // @ts-ignore
            getKeepAlive(): boolean
            /**
             * Sets traffic class or type-of-service octet in the IP
             * header for packets sent from this Socket.
             * As the underlying network implementation may ignore this
             * value applications should consider it a hint.
             * <P> The tc <B>must</B> be in the range {@code 0 <= tc <=
             * 255} or an IllegalArgumentException will be thrown.
             * <p>Notes:
             * <p>For Internet Protocol v4 the value consists of an
             * {@code integer}, the least significant 8 bits of which
             * represent the value of the TOS octet in IP packets sent by
             * the socket.
             * RFC 1349 defines the TOS values as follows:
             * <UL>
             * <LI><CODE>IPTOS_LOWCOST (0x02)</CODE></LI>
             * <LI><CODE>IPTOS_RELIABILITY (0x04)</CODE></LI>
             * <LI><CODE>IPTOS_THROUGHPUT (0x08)</CODE></LI>
             * <LI><CODE>IPTOS_LOWDELAY (0x10)</CODE></LI>
             * </UL>
             * The last low order bit is always ignored as this
             * corresponds to the MBZ (must be zero) bit.
             * <p>
             * Setting bits in the precedence field may result in a
             * SocketException indicating that the operation is not
             * permitted.
             * <p>
             * As RFC 1122 section 4.2.4.2 indicates, a compliant TCP
             * implementation should, but is not required to, let application
             * change the TOS field during the lifetime of a connection.
             * So whether the type-of-service field can be changed after the
             * TCP connection has been established depends on the implementation
             * in the underlying platform. Applications should not assume that
             * they can change the TOS field after the connection.
             * <p>
             * For Internet Protocol v6 {@code tc} is the value that
             * would be placed into the sin6_flowinfo field of the IP header.
             * @param tc        an {#code int} value for the bitset.
             * @throws SocketException if there is an error setting the
             *  traffic class or type-of-service
             * @since 1.4
             * @see #getTrafficClass
             * @see SocketOptions#IP_TOS
             */
            // @ts-ignore
            setTrafficClass(tc: number /*int*/): void
            /**
             * Gets traffic class or type-of-service in the IP header
             * for packets sent from this Socket
             * <p>
             * As the underlying network implementation may ignore the
             * traffic class or type-of-service set using {@link #setTrafficClass(int)}
             * this method may return a different value than was previously
             * set using the {@link #setTrafficClass(int)} method on this Socket.
             * @return the traffic class or type-of-service already set
             * @throws SocketException if there is an error obtaining the
             *  traffic class or type-of-service value.
             * @since 1.4
             * @see #setTrafficClass(int)
             * @see SocketOptions#IP_TOS
             */
            // @ts-ignore
            getTrafficClass(): int
            /**
             * Enable/disable the {@link SocketOptions#SO_REUSEADDR SO_REUSEADDR}
             * socket option.
             * <p>
             * When a TCP connection is closed the connection may remain
             * in a timeout state for a period of time after the connection
             * is closed (typically known as the {@code TIME_WAIT} state
             * or {@code 2MSL} wait state).
             * For applications using a well known socket address or port
             * it may not be possible to bind a socket to the required
             * {@code SocketAddress} if there is a connection in the
             * timeout state involving the socket address or port.
             * <p>
             * Enabling {@link SocketOptions#SO_REUSEADDR SO_REUSEADDR}
             * prior to binding the socket using {@link #bind(SocketAddress)} allows
             * the socket to be bound even though a previous connection is in a timeout
             * state.
             * <p>
             * When a {@code Socket} is created the initial setting
             * of {@link SocketOptions#SO_REUSEADDR SO_REUSEADDR} is disabled.
             * <p>
             * The behaviour when {@link SocketOptions#SO_REUSEADDR SO_REUSEADDR} is
             * enabled or disabled after a socket is bound (See {@link #isBound()})
             * is not defined.
             * @param on  whether to enable or disable the socket option
             * @exception SocketException if an error occurs enabling or
             *             disabling the {#link SocketOptions#SO_REUSEADDR SO_REUSEADDR}
             *             socket option, or the socket is closed.
             * @since 1.4
             * @see #getReuseAddress()
             * @see #bind(SocketAddress)
             * @see #isClosed()
             * @see #isBound()
             */
            // @ts-ignore
            setReuseAddress(on: boolean): void
            /**
             * Tests if {@link SocketOptions#SO_REUSEADDR SO_REUSEADDR} is enabled.
             * @return a {#code boolean} indicating whether or not
             *          {@link SocketOptions#SO_REUSEADDR SO_REUSEADDR} is enabled.
             * @exception SocketException if there is an error
             *  in the underlying protocol, such as a TCP error.
             * @since 1.4
             * @see #setReuseAddress(boolean)
             */
            // @ts-ignore
            getReuseAddress(): boolean
            /**
             * Closes this socket.
             * <p>
             * Any thread currently blocked in an I/O operation upon this socket
             * will throw a {@link SocketException}.
             * <p>
             * Once a socket has been closed, it is not available for further networking
             * use (i.e. can't be reconnected or rebound). A new socket needs to be
             * created.
             * <p> Closing this socket will also close the socket's
             * {@link java.io.InputStream InputStream} and
             * {@link java.io.OutputStream OutputStream}.
             * <p> If this socket has an associated channel then the channel is closed
             * as well.
             * @exception IOException  if an I/O error occurs when closing this socket.
             * @revised 1.4
             * @spec JSR-51
             * @see #isClosed
             */
            // @ts-ignore
            close(): void
            /**
             * Places the input stream for this socket at "end of stream".
             * Any data sent to the input stream side of the socket is acknowledged
             * and then silently discarded.
             * <p>
             * If you read from a socket input stream after invoking this method on the
             * socket, the stream's {@code available} method will return 0, and its
             * {@code read} methods will return {@code -1} (end of stream).
             * @exception IOException if an I/O error occurs when shutting down this
             *  socket.
             * @since 1.3
             * @see java.net.Socket#shutdownOutput()
             * @see java.net.Socket#close()
             * @see java.net.Socket#setSoLinger(boolean, int)
             * @see #isInputShutdown
             */
            // @ts-ignore
            shutdownInput(): void
            /**
             * Disables the output stream for this socket.
             * For a TCP socket, any previously written data will be sent
             * followed by TCP's normal connection termination sequence.
             * If you write to a socket output stream after invoking
             * shutdownOutput() on the socket, the stream will throw
             * an IOException.
             * @exception IOException if an I/O error occurs when shutting down this
             *  socket.
             * @since 1.3
             * @see java.net.Socket#shutdownInput()
             * @see java.net.Socket#close()
             * @see java.net.Socket#setSoLinger(boolean, int)
             * @see #isOutputShutdown
             */
            // @ts-ignore
            shutdownOutput(): void
            /**
             * Converts this socket to a {@code String}.
             * @return a string representation of this socket.
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Returns the connection state of the socket.
             * <p>
             * Note: Closing a socket doesn't clear its connection state, which means
             * this method will return {@code true} for a closed socket
             * (see {@link #isClosed()}) if it was successfuly connected prior
             * to being closed.
             * @return true if the socket was successfuly connected to a server
             * @since 1.4
             */
            // @ts-ignore
            isConnected(): boolean
            /**
             * Returns the binding state of the socket.
             * <p>
             * Note: Closing a socket doesn't clear its binding state, which means
             * this method will return {@code true} for a closed socket
             * (see {@link #isClosed()}) if it was successfuly bound prior
             * to being closed.
             * @return true if the socket was successfuly bound to an address
             * @since 1.4
             * @see #bind
             */
            // @ts-ignore
            isBound(): boolean
            /**
             * Returns the closed state of the socket.
             * @return true if the socket has been closed
             * @since 1.4
             * @see #close
             */
            // @ts-ignore
            isClosed(): boolean
            /**
             * Returns whether the read-half of the socket connection is closed.
             * @return true if the input of the socket has been shutdown
             * @since 1.4
             * @see #shutdownInput
             */
            // @ts-ignore
            isInputShutdown(): boolean
            /**
             * Returns whether the write-half of the socket connection is closed.
             * @return true if the output of the socket has been shutdown
             * @since 1.4
             * @see #shutdownOutput
             */
            // @ts-ignore
            isOutputShutdown(): boolean
            /**
             * Sets the client socket implementation factory for the
             * application. The factory can be specified only once.
             * <p>
             * When an application creates a new client socket, the socket
             * implementation factory's {@code createSocketImpl} method is
             * called to create the actual socket implementation.
             * <p>
             * Passing {@code null} to the method is a no-op unless the factory
             * was already set.
             * <p>If there is a security manager, this method first calls
             * the security manager's {@code checkSetFactory} method
             * to ensure the operation is allowed.
             * This could result in a SecurityException.
             * @param fac   the desired factory.
             * @exception IOException  if an I/O error occurs when setting the
             *                socket factory.
             * @exception SocketException  if the factory is already defined.
             * @exception SecurityException  if a security manager exists and its
             *              {#code checkSetFactory} method doesn't allow the operation.
             * @see java.net.SocketImplFactory#createSocketImpl()
             * @see SecurityManager#checkSetFactory
             */
            // @ts-ignore
            setSocketImplFactory(fac: java.net.SocketImplFactory): void
            /**
             * Sets performance preferences for this socket.
             * <p> Sockets use the TCP/IP protocol by default.  Some implementations
             * may offer alternative protocols which have different performance
             * characteristics than TCP/IP.  This method allows the application to
             * express its own preferences as to how these tradeoffs should be made
             * when the implementation chooses from the available protocols.
             * <p> Performance preferences are described by three integers
             * whose values indicate the relative importance of short connection time,
             * low latency, and high bandwidth.  The absolute values of the integers
             * are irrelevant; in order to choose a protocol the values are simply
             * compared, with larger values indicating stronger preferences. Negative
             * values represent a lower priority than positive values. If the
             * application prefers short connection time over both low latency and high
             * bandwidth, for example, then it could invoke this method with the values
             * {@code (1, 0, 0)}.  If the application prefers high bandwidth above low
             * latency, and low latency above short connection time, then it could
             * invoke this method with the values {@code (0, 1, 2)}.
             * <p> Invoking this method after this socket has been connected
             * will have no effect.
             * @param connectionTime
             *          An {#code int} expressing the relative importance of a short
             *          connection time
             * @param latency
             *          An {#code int} expressing the relative importance of low
             *          latency
             * @param bandwidth
             *          An {#code int} expressing the relative importance of high
             *          bandwidth
             * @since 1.5
             */
            // @ts-ignore
            setPerformancePreferences(connectionTime: number /*int*/, latency: number /*int*/, bandwidth: number /*int*/): void
        }
    }
}
