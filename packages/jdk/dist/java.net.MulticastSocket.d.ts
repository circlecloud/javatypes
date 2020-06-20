declare namespace java {
    namespace net {
        /**
         * The multicast datagram socket class is useful for sending
         * and receiving IP multicast packets.  A MulticastSocket is
         * a (UDP) DatagramSocket, with additional capabilities for
         * joining "groups" of other multicast hosts on the internet.
         * <P>
         * A multicast group is specified by a class D IP address
         * and by a standard UDP port number. Class D IP addresses
         * are in the range <CODE>224.0.0.0</CODE> to <CODE>239.255.255.255</CODE>,
         * inclusive. The address 224.0.0.0 is reserved and should not be used.
         * <P>
         * One would join a multicast group by first creating a MulticastSocket
         * with the desired port, then invoking the
         * <CODE>joinGroup(InetAddress groupAddr)</CODE>
         * method:
         * <PRE>
         * // join a Multicast group and send the group salutations
         * ...
         * String msg = "Hello";
         * InetAddress group = InetAddress.getByName("228.5.6.7");
         * MulticastSocket s = new MulticastSocket(6789);
         * s.joinGroup(group);
         * DatagramPacket hi = new DatagramPacket(msg.getBytes(), msg.length(),
         * group, 6789);
         * s.send(hi);
         * // get their responses!
         * byte[] buf = new byte[1000];
         * DatagramPacket recv = new DatagramPacket(buf, buf.length);
         * s.receive(recv);
         * ...
         * // OK, I'm done talking - leave the group...
         * s.leaveGroup(group);
         * </PRE>
         * When one sends a message to a multicast group, <B>all</B> subscribing
         * recipients to that host and port receive the message (within the
         * time-to-live range of the packet, see below).  The socket needn't
         * be a member of the multicast group to send messages to it.
         * <P>
         * When a socket subscribes to a multicast group/port, it receives
         * datagrams sent by other hosts to the group/port, as do all other
         * members of the group and port.  A socket relinquishes membership
         * in a group by the leaveGroup(InetAddress addr) method.  <B>
         * Multiple MulticastSocket's</B> may subscribe to a multicast group
         * and port concurrently, and they will all receive group datagrams.
         * <P>
         * Currently applets are not allowed to use multicast sockets.
         * @author Pavani Diwanji
         * @since JDK1.1
         */
        // @ts-ignore
        class MulticastSocket extends java.net.DatagramSocket {
            /**
             * Create a multicast socket.
             * <p>If there is a security manager,
             * its {@code checkListen} method is first called
             * with 0 as its argument to ensure the operation is allowed.
             * This could result in a SecurityException.
             * <p>
             * When the socket is created the
             * {@link DatagramSocket#setReuseAddress(boolean)} method is
             * called to enable the SO_REUSEADDR socket option.
             * @exception IOException if an I/O exception occurs
             *  while creating the MulticastSocket
             * @exception SecurityException  if a security manager exists and its
             *              {#code checkListen} method doesn't allow the operation.
             * @see SecurityManager#checkListen
             * @see java.net.DatagramSocket#setReuseAddress(boolean)
             */
            // @ts-ignore
            constructor()
            /**
             * Create a multicast socket and bind it to a specific port.
             * <p>If there is a security manager,
             * its {@code checkListen} method is first called
             * with the {@code port} argument
             * as its argument to ensure the operation is allowed.
             * This could result in a SecurityException.
             * <p>
             * When the socket is created the
             * {@link DatagramSocket#setReuseAddress(boolean)} method is
             * called to enable the SO_REUSEADDR socket option.
             * @param port port to use
             * @exception IOException if an I/O exception occurs
             *  while creating the MulticastSocket
             * @exception SecurityException  if a security manager exists and its
             *              {#code checkListen} method doesn't allow the operation.
             * @see SecurityManager#checkListen
             * @see java.net.DatagramSocket#setReuseAddress(boolean)
             */
            // @ts-ignore
            constructor(port: number /*int*/)
            /**
             * Create a MulticastSocket bound to the specified socket address.
             * <p>
             * Or, if the address is {@code null}, create an unbound socket.
             * <p>If there is a security manager,
             * its {@code checkListen} method is first called
             * with the SocketAddress port as its argument to ensure the operation is allowed.
             * This could result in a SecurityException.
             * <p>
             * When the socket is created the
             * {@link DatagramSocket#setReuseAddress(boolean)} method is
             * called to enable the SO_REUSEADDR socket option.
             * @param bindaddr Socket address to bind to, or {#code null} for
             *                  an unbound socket.
             * @exception IOException if an I/O exception occurs
             *  while creating the MulticastSocket
             * @exception SecurityException  if a security manager exists and its
             *              {#code checkListen} method doesn't allow the operation.
             * @see SecurityManager#checkListen
             * @see java.net.DatagramSocket#setReuseAddress(boolean)
             * @since 1.4
             */
            // @ts-ignore
            constructor(bindaddr: java.net.SocketAddress)
            /**
             * Set the default time-to-live for multicast packets sent out
             * on this {@code MulticastSocket} in order to control the
             * scope of the multicasts.
             * <p>The ttl is an <b>unsigned</b> 8-bit quantity, and so <B>must</B> be
             * in the range {@code 0 <= ttl <= 0xFF }.
             * @param ttl the time-to-live
             * @exception IOException if an I/O exception occurs
             *  while setting the default time-to-live value
             * @deprecated use the setTimeToLive method instead, which uses
             *  <b>int</b> instead of <b>byte</b> as the type for ttl.
             * @see #getTTL()
             */
            // @ts-ignore
            setTTL(ttl: number /*byte*/): void
            /**
             * Set the default time-to-live for multicast packets sent out
             * on this {@code MulticastSocket} in order to control the
             * scope of the multicasts.
             * <P> The ttl <B>must</B> be in the range {@code  0 <= ttl <=
             * 255} or an {@code IllegalArgumentException} will be thrown.
             * Multicast packets sent with a TTL of {@code 0} are not transmitted
             * on the network but may be delivered locally.
             * @param ttl
             *          the time-to-live
             * @throws IOException
             *           if an I/O exception occurs while setting the
             *           default time-to-live value
             * @see #getTimeToLive()
             */
            // @ts-ignore
            setTimeToLive(ttl: number /*int*/): void
            /**
             * Get the default time-to-live for multicast packets sent out on
             * the socket.
             * @exception IOException if an I/O exception occurs
             *  while getting the default time-to-live value
             * @return the default time-to-live value
             * @deprecated use the getTimeToLive method instead, which returns
             *  an <b>int</b> instead of a <b>byte</b>.
             * @see #setTTL(byte)
             */
            // @ts-ignore
            getTTL(): byte
            /**
             * Get the default time-to-live for multicast packets sent out on
             * the socket.
             * @exception IOException if an I/O exception occurs while
             *  getting the default time-to-live value
             * @return the default time-to-live value
             * @see #setTimeToLive(int)
             */
            // @ts-ignore
            getTimeToLive(): int
            /**
             * Joins a multicast group. Its behavior may be affected by
             * {@code setInterface} or {@code setNetworkInterface}.
             * <p>If there is a security manager, this method first
             * calls its {@code checkMulticast} method
             * with the {@code mcastaddr} argument
             * as its argument.
             * @param mcastaddr is the multicast address to join
             * @exception IOException if there is an error joining
             *  or when the address is not a multicast address.
             * @exception SecurityException  if a security manager exists and its
             *  {#code checkMulticast} method doesn't allow the join.
             * @see SecurityManager#checkMulticast(InetAddress)
             */
            // @ts-ignore
            joinGroup(mcastaddr: java.net.InetAddress): void
            /**
             * Leave a multicast group. Its behavior may be affected by
             * {@code setInterface} or {@code setNetworkInterface}.
             * <p>If there is a security manager, this method first
             * calls its {@code checkMulticast} method
             * with the {@code mcastaddr} argument
             * as its argument.
             * @param mcastaddr is the multicast address to leave
             * @exception IOException if there is an error leaving
             *  or when the address is not a multicast address.
             * @exception SecurityException  if a security manager exists and its
             *  {#code checkMulticast} method doesn't allow the operation.
             * @see SecurityManager#checkMulticast(InetAddress)
             */
            // @ts-ignore
            leaveGroup(mcastaddr: java.net.InetAddress): void
            /**
             * Joins the specified multicast group at the specified interface.
             * <p>If there is a security manager, this method first
             * calls its {@code checkMulticast} method
             * with the {@code mcastaddr} argument
             * as its argument.
             * @param mcastaddr is the multicast address to join
             * @param netIf specifies the local interface to receive multicast
             *         datagram packets, or <i>null</i> to defer to the interface set by
             *        {#link MulticastSocket#setInterface(InetAddress)} or
             *        {@link MulticastSocket#setNetworkInterface(NetworkInterface)}
             * @exception IOException if there is an error joining
             *  or when the address is not a multicast address.
             * @exception SecurityException  if a security manager exists and its
             *  {#code checkMulticast} method doesn't allow the join.
             * @throws IllegalArgumentException if mcastaddr is null or is a
             *           SocketAddress subclass not supported by this socket
             * @see SecurityManager#checkMulticast(InetAddress)
             * @since 1.4
             */
            // @ts-ignore
            joinGroup(mcastaddr: java.net.SocketAddress, netIf: java.net.NetworkInterface): void
            /**
             * Leave a multicast group on a specified local interface.
             * <p>If there is a security manager, this method first
             * calls its {@code checkMulticast} method
             * with the {@code mcastaddr} argument
             * as its argument.
             * @param mcastaddr is the multicast address to leave
             * @param netIf specifies the local interface or <i>null</i> to defer
             *              to the interface set by
             *              {#link MulticastSocket#setInterface(InetAddress)} or
             *              {@link MulticastSocket#setNetworkInterface(NetworkInterface)}
             * @exception IOException if there is an error leaving
             *  or when the address is not a multicast address.
             * @exception SecurityException  if a security manager exists and its
             *  {#code checkMulticast} method doesn't allow the operation.
             * @throws IllegalArgumentException if mcastaddr is null or is a
             *           SocketAddress subclass not supported by this socket
             * @see SecurityManager#checkMulticast(InetAddress)
             * @since 1.4
             */
            // @ts-ignore
            leaveGroup(mcastaddr: java.net.SocketAddress, netIf: java.net.NetworkInterface): void
            /**
             * Set the multicast network interface used by methods
             * whose behavior would be affected by the value of the
             * network interface. Useful for multihomed hosts.
             * @param inf the InetAddress
             * @exception SocketException if there is an error in
             *  the underlying protocol, such as a TCP error.
             * @see #getInterface()
             */
            // @ts-ignore
            setInterface(inf: java.net.InetAddress): void
            /**
             * Retrieve the address of the network interface used for
             * multicast packets.
             * @return An {#code InetAddress} representing
             *   the address of the network interface used for
             *   multicast packets.
             * @exception SocketException if there is an error in
             *  the underlying protocol, such as a TCP error.
             * @see #setInterface(java.net.InetAddress)
             */
            // @ts-ignore
            getInterface(): java.net.InetAddress
            /**
             * Specify the network interface for outgoing multicast datagrams
             * sent on this socket.
             * @param netIf the interface
             * @exception SocketException if there is an error in
             *  the underlying protocol, such as a TCP error.
             * @see #getNetworkInterface()
             * @since 1.4
             */
            // @ts-ignore
            setNetworkInterface(netIf: java.net.NetworkInterface): void
            /**
             * Get the multicast network interface set.
             * @exception SocketException if there is an error in
             *  the underlying protocol, such as a TCP error.
             * @return the multicast {#code NetworkInterface} currently set
             * @see #setNetworkInterface(NetworkInterface)
             * @since 1.4
             */
            // @ts-ignore
            getNetworkInterface(): java.net.NetworkInterface
            /**
             * Disable/Enable local loopback of multicast datagrams
             * The option is used by the platform's networking code as a hint
             * for setting whether multicast data will be looped back to
             * the local socket.
             * <p>Because this option is a hint, applications that want to
             * verify what loopback mode is set to should call
             * {@link #getLoopbackMode()}
             * @param disable {#code true} to disable the LoopbackMode
             * @throws SocketException if an error occurs while setting the value
             * @since 1.4
             * @see #getLoopbackMode
             */
            // @ts-ignore
            setLoopbackMode(disable: boolean): void
            /**
             * Get the setting for local loopback of multicast datagrams.
             * @throws SocketException  if an error occurs while getting the value
             * @return true if the LoopbackMode has been disabled
             * @since 1.4
             * @see #setLoopbackMode
             */
            // @ts-ignore
            getLoopbackMode(): boolean
            /**
             * Sends a datagram packet to the destination, with a TTL (time-
             * to-live) other than the default for the socket.  This method
             * need only be used in instances where a particular TTL is desired;
             * otherwise it is preferable to set a TTL once on the socket, and
             * use that default TTL for all packets.  This method does <B>not
             * </B> alter the default TTL for the socket. Its behavior may be
             * affected by {@code setInterface}.
             * <p>If there is a security manager, this method first performs some
             * security checks. First, if {@code p.getAddress().isMulticastAddress()}
             * is true, this method calls the
             * security manager's {@code checkMulticast} method
             * with {@code p.getAddress()} and {@code ttl} as its arguments.
             * If the evaluation of that expression is false,
             * this method instead calls the security manager's
             * {@code checkConnect} method with arguments
             * {@code p.getAddress().getHostAddress()} and
             * {@code p.getPort()}. Each call to a security manager method
             * could result in a SecurityException if the operation is not allowed.
             * @param p is the packet to be sent. The packet should contain
             *  the destination multicast ip address and the data to be sent.
             *  One does not need to be the member of the group to send
             *  packets to a destination multicast address.
             * @param ttl optional time to live for multicast packet.
             *  default ttl is 1.
             * @exception IOException is raised if an error occurs i.e
             *  error while setting ttl.
             * @exception SecurityException  if a security manager exists and its
             *              {#code checkMulticast} or {@code checkConnect}
             *              method doesn't allow the send.
             * @deprecated Use the following code or its equivalent instead:
             *   ......
             *   int ttl = mcastSocket.getTimeToLive();
             *   mcastSocket.setTimeToLive(newttl);
             *   mcastSocket.send(p);
             *   mcastSocket.setTimeToLive(ttl);
             *   ......
             * @see DatagramSocket#send
             * @see DatagramSocket#receive
             * @see SecurityManager#checkMulticast(java.net.InetAddress, byte)
             * @see SecurityManager#checkConnect
             */
            // @ts-ignore
            send(p: java.net.DatagramPacket, ttl: number /*byte*/): void
        }
    }
}
