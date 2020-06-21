declare namespace java {
    namespace net {
        /**
         * Abstract datagram and multicast socket implementation base class.
         * @author Pavani Diwanji
         * @since JDK1.1
         */
        // @ts-ignore
        abstract class DatagramSocketImpl extends java.lang.Object implements java.net.SocketOptions {
            // @ts-ignore
            constructor()
            /**
             * The local port number.
             */
            // @ts-ignore
            localPort: number /*int*/
            /**
             * The file descriptor object.
             */
            // @ts-ignore
            fd: java.io.FileDescriptor
            /**
             * Creates a datagram socket.
             * @exception SocketException if there is an error in the
             *  underlying protocol, such as a TCP error.
             */
            // @ts-ignore
            abstract create(): void
            /**
             * Binds a datagram socket to a local port and address.
             * @param lport the local port
             * @param laddr the local address
             * @exception SocketException if there is an error in the
             *  underlying protocol, such as a TCP error.
             */
            // @ts-ignore
            abstract bind(lport: number /*int*/, laddr: java.net.InetAddress): void
            /**
             * Sends a datagram packet. The packet contains the data and the
             * destination address to send the packet to.
             * @param p the packet to be sent.
             * @exception IOException if an I/O exception occurs while sending the
             *  datagram packet.
             * @exception PortUnreachableException may be thrown if the socket is connected
             *  to a currently unreachable destination. Note, there is no guarantee that
             *  the exception will be thrown.
             */
            // @ts-ignore
            abstract send(p: java.net.DatagramPacket): void
            /**
             * Connects a datagram socket to a remote destination. This associates the remote
             * address with the local socket so that datagrams may only be sent to this destination
             * and received from this destination. This may be overridden to call a native
             * system connect.
             * <p>If the remote destination to which the socket is connected does not
             * exist, or is otherwise unreachable, and if an ICMP destination unreachable
             * packet has been received for that address, then a subsequent call to
             * send or receive may throw a PortUnreachableException.
             * Note, there is no guarantee that the exception will be thrown.
             * @param address the remote InetAddress to connect to
             * @param port the remote port number
             * @exception SocketException may be thrown if the socket cannot be
             *  connected to the remote destination
             * @since 1.4
             */
            // @ts-ignore
            connect(address: java.net.InetAddress, port: number /*int*/): void
            /**
             * Disconnects a datagram socket from its remote destination.
             * @since 1.4
             */
            // @ts-ignore
            disconnect(): void
            /**
             * Peek at the packet to see who it is from. Updates the specified {@code InetAddress}
             * to the address which the packet came from.
             * @param i an InetAddress object
             * @return the port number which the packet came from.
             * @exception IOException if an I/O exception occurs
             * @exception PortUnreachableException may be thrown if the socket is connected
             *        to a currently unreachable destination. Note, there is no guarantee that the
             *        exception will be thrown.
             */
            // @ts-ignore
            abstract peek(i: java.net.InetAddress): number /*int*/
            /**
             * Peek at the packet to see who it is from. The data is copied into the specified
             * {@code DatagramPacket}. The data is returned,
             * but not consumed, so that a subsequent peekData/receive operation
             * will see the same data.
             * @param p the Packet Received.
             * @return the port number which the packet came from.
             * @exception IOException if an I/O exception occurs
             * @exception PortUnreachableException may be thrown if the socket is connected
             *        to a currently unreachable destination. Note, there is no guarantee that the
             *        exception will be thrown.
             * @since 1.4
             */
            // @ts-ignore
            abstract peekData(p: java.net.DatagramPacket): number /*int*/
            /**
             * Receive the datagram packet.
             * @param p the Packet Received.
             * @exception IOException if an I/O exception occurs
             *  while receiving the datagram packet.
             * @exception PortUnreachableException may be thrown if the socket is connected
             *        to a currently unreachable destination. Note, there is no guarantee that the
             *        exception will be thrown.
             */
            // @ts-ignore
            abstract receive(p: java.net.DatagramPacket): void
            /**
             * Set the TTL (time-to-live) option.
             * @param ttl a byte specifying the TTL value
             * @deprecated use setTimeToLive instead.
             * @exception IOException if an I/O exception occurs while setting
             *  the time-to-live option.
             * @see #getTTL()
             */
            // @ts-ignore
            abstract setTTL(ttl: number /*byte*/): void
            /**
             * Retrieve the TTL (time-to-live) option.
             * @exception IOException if an I/O exception occurs
             *  while retrieving the time-to-live option
             * @deprecated use getTimeToLive instead.
             * @return a byte representing the TTL value
             * @see #setTTL(byte)
             */
            // @ts-ignore
            abstract getTTL(): number /*byte*/
            /**
             * Set the TTL (time-to-live) option.
             * @param ttl an {#code int} specifying the time-to-live value
             * @exception IOException if an I/O exception occurs
             *  while setting the time-to-live option.
             * @see #getTimeToLive()
             */
            // @ts-ignore
            abstract setTimeToLive(ttl: number /*int*/): void
            /**
             * Retrieve the TTL (time-to-live) option.
             * @exception IOException if an I/O exception occurs
             *  while retrieving the time-to-live option
             * @return an {#code int} representing the time-to-live value
             * @see #setTimeToLive(int)
             */
            // @ts-ignore
            abstract getTimeToLive(): number /*int*/
            /**
             * Join the multicast group.
             * @param inetaddr multicast address to join.
             * @exception IOException if an I/O exception occurs
             *  while joining the multicast group.
             */
            // @ts-ignore
            abstract join(inetaddr: java.net.InetAddress): void
            /**
             * Leave the multicast group.
             * @param inetaddr multicast address to leave.
             * @exception IOException if an I/O exception occurs
             *  while leaving the multicast group.
             */
            // @ts-ignore
            abstract leave(inetaddr: java.net.InetAddress): void
            /**
             * Join the multicast group.
             * @param mcastaddr address to join.
             * @param netIf specifies the local interface to receive multicast
             *         datagram packets
             * @throws IOException if an I/O exception occurs while joining
             *  the multicast group
             * @since 1.4
             */
            // @ts-ignore
            abstract joinGroup(mcastaddr: java.net.SocketAddress, netIf: java.net.NetworkInterface): void
            /**
             * Leave the multicast group.
             * @param mcastaddr address to leave.
             * @param netIf specified the local interface to leave the group at
             * @throws IOException if an I/O exception occurs while leaving
             *  the multicast group
             * @since 1.4
             */
            // @ts-ignore
            abstract leaveGroup(mcastaddr: java.net.SocketAddress, netIf: java.net.NetworkInterface): void
            /**
             * Close the socket.
             */
            // @ts-ignore
            abstract close(): void
            /**
             * Gets the local port.
             * @return an {#code int} representing the local port value
             */
            // @ts-ignore
            getLocalPort(): number /*int*/
            /**
             * Gets the datagram socket file descriptor.
             * @return a {#code FileDescriptor} object representing the datagram socket
             *  file descriptor
             */
            // @ts-ignore
            getFileDescriptor(): java.io.FileDescriptor
        }
    }
}
