declare namespace java {
    namespace net {
        /**
         * Interface of methods to get/set socket options.  This interface is
         * implemented by: <B>SocketImpl</B> and  <B>DatagramSocketImpl</B>.
         * Subclasses of these should override the methods
         * of this interface in order to support their own options.
         * <P>
         * The methods and constants which specify options in this interface are
         * for implementation only.  If you're not subclassing SocketImpl or
         * DatagramSocketImpl, <B>you won't use these directly.</B> There are
         * type-safe methods to get/set each of these options in Socket, ServerSocket,
         * DatagramSocket and MulticastSocket.
         * <P>
         * @author David Brown
         */
        // @ts-ignore
        interface SocketOptions {
            /**
             * Disable Nagle's algorithm for this connection.  Written data
             * to the network is not buffered pending acknowledgement of
             * previously written data.
             * <P>
             * Valid for TCP only: SocketImpl.
             * @see Socket#setTcpNoDelay
             * @see Socket#getTcpNoDelay
             */
            // @ts-ignore
            readonly TCP_NODELAY: number /*int*/
            /**
             * Fetch the local address binding of a socket (this option cannot
             * be "set" only "gotten", since sockets are bound at creation time,
             * and so the locally bound address cannot be changed).  The default local
             * address of a socket is INADDR_ANY, meaning any local address on a
             * multi-homed host.  A multi-homed host can use this option to accept
             * connections to only one of its addresses (in the case of a
             * ServerSocket or DatagramSocket), or to specify its return address
             * to the peer (for a Socket or DatagramSocket).  The parameter of
             * this option is an InetAddress.
             * <P>
             * This option <B>must</B> be specified in the constructor.
             * <P>
             * Valid for: SocketImpl, DatagramSocketImpl
             * @see Socket#getLocalAddress
             * @see DatagramSocket#getLocalAddress
             */
            // @ts-ignore
            readonly SO_BINDADDR: number /*int*/
            /**
             * Sets SO_REUSEADDR for a socket.  This is used only for MulticastSockets
             * in java, and it is set by default for MulticastSockets.
             * <P>
             * Valid for: DatagramSocketImpl
             */
            // @ts-ignore
            readonly SO_REUSEADDR: number /*int*/
            /**
             * Sets SO_BROADCAST for a socket. This option enables and disables
             * the ability of the process to send broadcast messages. It is supported
             * for only datagram sockets and only on networks that support
             * the concept of a broadcast message (e.g. Ethernet, token ring, etc.),
             * and it is set by default for DatagramSockets.
             * @since 1.4
             */
            // @ts-ignore
            readonly SO_BROADCAST: number /*int*/
            /**
             * Set which outgoing interface on which to send multicast packets.
             * Useful on hosts with multiple network interfaces, where applications
             * want to use other than the system default.  Takes/returns an InetAddress.
             * <P>
             * Valid for Multicast: DatagramSocketImpl
             * @see MulticastSocket#setInterface(InetAddress)
             * @see MulticastSocket#getInterface()
             */
            // @ts-ignore
            readonly IP_MULTICAST_IF: number /*int*/
            /**
             * Same as above. This option is introduced so that the behaviour
             * with IP_MULTICAST_IF will be kept the same as before, while
             * this new option can support setting outgoing interfaces with either
             * IPv4 and IPv6 addresses.
             * NOTE: make sure there is no conflict with this
             * @see MulticastSocket#setNetworkInterface(NetworkInterface)
             * @see MulticastSocket#getNetworkInterface()
             * @since 1.4
             */
            // @ts-ignore
            readonly IP_MULTICAST_IF2: number /*int*/
            /**
             * This option enables or disables local loopback of multicast datagrams.
             * This option is enabled by default for Multicast Sockets.
             * @since 1.4
             */
            // @ts-ignore
            readonly IP_MULTICAST_LOOP: number /*int*/
            /**
             * This option sets the type-of-service or traffic class field
             * in the IP header for a TCP or UDP socket.
             * @since 1.4
             */
            // @ts-ignore
            readonly IP_TOS: number /*int*/
            /**
             * Specify a linger-on-close timeout.  This option disables/enables
             * immediate return from a <B>close()</B> of a TCP Socket.  Enabling
             * this option with a non-zero Integer <I>timeout</I> means that a
             * <B>close()</B> will block pending the transmission and acknowledgement
             * of all data written to the peer, at which point the socket is closed
             * <I>gracefully</I>.  Upon reaching the linger timeout, the socket is
             * closed <I>forcefully</I>, with a TCP RST. Enabling the option with a
             * timeout of zero does a forceful close immediately. If the specified
             * timeout value exceeds 65,535 it will be reduced to 65,535.
             * <P>
             * Valid only for TCP: SocketImpl
             * @see Socket#setSoLinger
             * @see Socket#getSoLinger
             */
            // @ts-ignore
            readonly SO_LINGER: number /*int*/
            /**
             * Set a timeout on blocking Socket operations:
             * <PRE>
             * ServerSocket.accept();
             * SocketInputStream.read();
             * DatagramSocket.receive();
             * </PRE>
             * <P> The option must be set prior to entering a blocking
             * operation to take effect.  If the timeout expires and the
             * operation would continue to block,
             * <B>java.io.InterruptedIOException</B> is raised.  The Socket is
             * not closed in this case.
             * <P> Valid for all sockets: SocketImpl, DatagramSocketImpl
             * @see Socket#setSoTimeout
             * @see ServerSocket#setSoTimeout
             * @see DatagramSocket#setSoTimeout
             */
            // @ts-ignore
            readonly SO_TIMEOUT: number /*int*/
            /**
             * Set a hint the size of the underlying buffers used by the
             * platform for outgoing network I/O. When used in set, this is a
             * suggestion to the kernel from the application about the size of
             * buffers to use for the data to be sent over the socket. When
             * used in get, this must return the size of the buffer actually
             * used by the platform when sending out data on this socket.
             * Valid for all sockets: SocketImpl, DatagramSocketImpl
             * @see Socket#setSendBufferSize
             * @see Socket#getSendBufferSize
             * @see DatagramSocket#setSendBufferSize
             * @see DatagramSocket#getSendBufferSize
             */
            // @ts-ignore
            readonly SO_SNDBUF: number /*int*/
            /**
             * Set a hint the size of the underlying buffers used by the
             * platform for incoming network I/O. When used in set, this is a
             * suggestion to the kernel from the application about the size of
             * buffers to use for the data to be received over the
             * socket. When used in get, this must return the size of the
             * buffer actually used by the platform when receiving in data on
             * this socket.
             * Valid for all sockets: SocketImpl, DatagramSocketImpl
             * @see Socket#setReceiveBufferSize
             * @see Socket#getReceiveBufferSize
             * @see DatagramSocket#setReceiveBufferSize
             * @see DatagramSocket#getReceiveBufferSize
             */
            // @ts-ignore
            readonly SO_RCVBUF: number /*int*/
            /**
             * When the keepalive option is set for a TCP socket and no data
             * has been exchanged across the socket in either direction for
             * 2 hours (NOTE: the actual value is implementation dependent),
             * TCP automatically sends a keepalive probe to the peer. This probe is a
             * TCP segment to which the peer must respond.
             * One of three responses is expected:
             * 1. The peer responds with the expected ACK. The application is not
             * notified (since everything is OK). TCP will send another probe
             * following another 2 hours of inactivity.
             * 2. The peer responds with an RST, which tells the local TCP that
             * the peer host has crashed and rebooted. The socket is closed.
             * 3. There is no response from the peer. The socket is closed.
             * The purpose of this option is to detect if the peer host crashes.
             * Valid only for TCP socket: SocketImpl
             * @see Socket#setKeepAlive
             * @see Socket#getKeepAlive
             */
            // @ts-ignore
            readonly SO_KEEPALIVE: number /*int*/
            /**
             * When the OOBINLINE option is set, any TCP urgent data received on
             * the socket will be received through the socket input stream.
             * When the option is disabled (which is the default) urgent data
             * is silently discarded.
             * @see Socket#setOOBInline
             * @see Socket#getOOBInline
             */
            // @ts-ignore
            readonly SO_OOBINLINE: number /*int*/
            /**
             * Enable/disable the option specified by <I>optID</I>.  If the option
             * is to be enabled, and it takes an option-specific "value",  this is
             * passed in <I>value</I>.  The actual type of value is option-specific,
             * and it is an error to pass something that isn't of the expected type:
             * <BR><PRE>
             * SocketImpl s;
             * ...
             * s.setOption(SO_LINGER, new Integer(10));
             * // OK - set SO_LINGER w/ timeout of 10 sec.
             * s.setOption(SO_LINGER, new Double(10));
             * // ERROR - expects java.lang.Integer
             * </PRE>
             * If the requested option is binary, it can be set using this method by
             * a java.lang.Boolean:
             * <BR><PRE>
             * s.setOption(TCP_NODELAY, new Boolean(true));
             * // OK - enables TCP_NODELAY, a binary option
             * </PRE>
             * <BR>
             * Any option can be disabled using this method with a Boolean(false):
             * <BR><PRE>
             * s.setOption(TCP_NODELAY, new Boolean(false));
             * // OK - disables TCP_NODELAY
             * s.setOption(SO_LINGER, new Boolean(false));
             * // OK - disables SO_LINGER
             * </PRE>
             * <BR>
             * For an option that has a notion of on and off, and requires
             * a non-boolean parameter, setting its value to anything other than
             * <I>Boolean(false)</I> implicitly enables it.
             * <BR>
             * Throws SocketException if the option is unrecognized,
             * the socket is closed, or some low-level error occurred
             * <BR>
             * @param optID identifies the option
             * @param value the parameter of the socket option
             * @throws SocketException if the option is unrecognized,
             *  the socket is closed, or some low-level error occurred
             * @see #getOption(int)
             */
            // @ts-ignore
            setOption(optID: number /*int*/, value: java.lang.Object | any): void
            /**
             * Fetch the value of an option.
             * Binary options will return java.lang.Boolean(true)
             * if enabled, java.lang.Boolean(false) if disabled, e.g.:
             * <BR><PRE>
             * SocketImpl s;
             * ...
             * Boolean noDelay = (Boolean)(s.getOption(TCP_NODELAY));
             * if (noDelay.booleanValue()) {
             * // true if TCP_NODELAY is enabled...
             * ...
             * }
             * </PRE>
             * <P>
             * For options that take a particular type as a parameter,
             * getOption(int) will return the parameter's value, else
             * it will return java.lang.Boolean(false):
             * <PRE>
             * Object o = s.getOption(SO_LINGER);
             * if (o instanceof Integer) {
             * System.out.print("Linger time is " + ((Integer)o).intValue());
             * } else {
             * // the true type of o is java.lang.Boolean(false);
             * }
             * </PRE>
             * @param optID an {#code int} identifying the option to fetch
             * @return the value of the option
             * @throws SocketException if the socket is closed
             * @throws SocketException if <I>optID</I> is unknown along the
             *          protocol stack (including the SocketImpl)
             * @see #setOption(int, java.lang.Object)
             */
            // @ts-ignore
            getOption(optID: number /*int*/): any
        }
    }
}
