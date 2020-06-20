declare namespace java {
    namespace net {
        /**
         * This class represents a datagram packet.
         * <p>
         * Datagram packets are used to implement a connectionless packet
         * delivery service. Each message is routed from one machine to
         * another based solely on information contained within that packet.
         * Multiple packets sent from one machine to another might be routed
         * differently, and might arrive in any order. Packet delivery is
         * not guaranteed.
         * @author Pavani Diwanji
         * @author Benjamin Renaud
         * @since JDK1.0
         */
        // @ts-ignore
        class DatagramPacket extends java.lang.Object {
            /**
             * Constructs a {@code DatagramPacket} for receiving packets of
             * length {@code length}, specifying an offset into the buffer.
             * <p>
             * The {@code length} argument must be less than or equal to
             * {@code buf.length}.
             * @param buf      buffer for holding the incoming datagram.
             * @param offset   the offset for the buffer
             * @param length   the number of bytes to read.
             * @since 1.2
             */
            // @ts-ignore
            constructor(buf: number /*byte*/[], offset: number /*int*/, length: number /*int*/)
            /**
             * Constructs a {@code DatagramPacket} for receiving packets of
             * length {@code length}.
             * <p>
             * The {@code length} argument must be less than or equal to
             * {@code buf.length}.
             * @param buf      buffer for holding the incoming datagram.
             * @param length   the number of bytes to read.
             */
            // @ts-ignore
            constructor(buf: number /*byte*/[], length: number /*int*/)
            /**
             * Constructs a datagram packet for sending packets of length
             * {@code length} with offset {@code ioffset}to the
             * specified port number on the specified host. The
             * {@code length} argument must be less than or equal to
             * {@code buf.length}.
             * @param buf      the packet data.
             * @param offset   the packet data offset.
             * @param length   the packet data length.
             * @param address  the destination address.
             * @param port     the destination port number.
             * @see java.net.InetAddress
             * @since 1.2
             */
            // @ts-ignore
            constructor(buf: number /*byte*/[], offset: number /*int*/, length: number /*int*/, address: java.net.InetAddress, port: number /*int*/)
            /**
             * Constructs a datagram packet for sending packets of length
             * {@code length} with offset {@code ioffset}to the
             * specified port number on the specified host. The
             * {@code length} argument must be less than or equal to
             * {@code buf.length}.
             * @param buf      the packet data.
             * @param offset   the packet data offset.
             * @param length   the packet data length.
             * @param address  the destination socket address.
             * @throws IllegalArgumentException if address type is not supported
             * @see java.net.InetAddress
             * @since 1.4
             */
            // @ts-ignore
            constructor(buf: number /*byte*/[], offset: number /*int*/, length: number /*int*/, address: java.net.SocketAddress)
            /**
             * Constructs a datagram packet for sending packets of length
             * {@code length} to the specified port number on the specified
             * host. The {@code length} argument must be less than or equal
             * to {@code buf.length}.
             * @param buf      the packet data.
             * @param length   the packet length.
             * @param address  the destination address.
             * @param port     the destination port number.
             * @see java.net.InetAddress
             */
            // @ts-ignore
            constructor(buf: number /*byte*/[], length: number /*int*/, address: java.net.InetAddress, port: number /*int*/)
            /**
             * Constructs a datagram packet for sending packets of length
             * {@code length} to the specified port number on the specified
             * host. The {@code length} argument must be less than or equal
             * to {@code buf.length}.
             * @param buf      the packet data.
             * @param length   the packet length.
             * @param address  the destination address.
             * @throws IllegalArgumentException if address type is not supported
             * @since 1.4
             * @see java.net.InetAddress
             */
            // @ts-ignore
            constructor(buf: number /*byte*/[], length: number /*int*/, address: java.net.SocketAddress)
            /**
             * Returns the IP address of the machine to which this datagram is being
             * sent or from which the datagram was received.
             * @return the IP address of the machine to which this datagram is being
             *           sent or from which the datagram was received.
             * @see java.net.InetAddress
             * @see #setAddress(java.net.InetAddress)
             */
            // @ts-ignore
            getAddress(): java.net.InetAddress
            /**
             * Returns the port number on the remote host to which this datagram is
             * being sent or from which the datagram was received.
             * @return the port number on the remote host to which this datagram is
             *           being sent or from which the datagram was received.
             * @see #setPort(int)
             */
            // @ts-ignore
            getPort(): int
            /**
             * Returns the data buffer. The data received or the data to be sent
             * starts from the {@code offset} in the buffer,
             * and runs for {@code length} long.
             * @return the buffer used to receive or  send data
             * @see #setData(byte[], int, int)
             */
            // @ts-ignore
            getData(): byte[]
            /**
             * Returns the offset of the data to be sent or the offset of the
             * data received.
             * @return the offset of the data to be sent or the offset of the
             *           data received.
             * @since 1.2
             */
            // @ts-ignore
            getOffset(): int
            /**
             * Returns the length of the data to be sent or the length of the
             * data received.
             * @return the length of the data to be sent or the length of the
             *           data received.
             * @see #setLength(int)
             */
            // @ts-ignore
            getLength(): int
            /**
             * Set the data buffer for this packet. This sets the
             * data, length and offset of the packet.
             * @param buf the buffer to set for this packet
             * @param offset the offset into the data
             * @param length the length of the data
             *        and/or the length of the buffer used to receive data
             * @exception NullPointerException if the argument is null
             * @see #getData
             * @see #getOffset
             * @see #getLength
             * @since 1.2
             */
            // @ts-ignore
            setData(buf: number /*byte*/[], offset: number /*int*/, length: number /*int*/): void
            /**
             * Sets the IP address of the machine to which this datagram
             * is being sent.
             * @param iaddr the {#code InetAddress}
             * @since JDK1.1
             * @see #getAddress()
             */
            // @ts-ignore
            setAddress(iaddr: java.net.InetAddress): void
            /**
             * Sets the port number on the remote host to which this datagram
             * is being sent.
             * @param iport the port number
             * @since JDK1.1
             * @see #getPort()
             */
            // @ts-ignore
            setPort(iport: number /*int*/): void
            /**
             * Sets the SocketAddress (usually IP address + port number) of the remote
             * host to which this datagram is being sent.
             * @param address the {#code SocketAddress}
             * @throws IllegalArgumentException if address is null or is a
             *           SocketAddress subclass not supported by this socket
             * @since 1.4
             * @see #getSocketAddress
             */
            // @ts-ignore
            setSocketAddress(address: java.net.SocketAddress): void
            /**
             * Gets the SocketAddress (usually IP address + port number) of the remote
             * host that this packet is being sent to or is coming from.
             * @return the {#code SocketAddress}
             * @since 1.4
             * @see #setSocketAddress
             */
            // @ts-ignore
            getSocketAddress(): java.net.SocketAddress
            /**
             * Set the data buffer for this packet. With the offset of
             * this DatagramPacket set to 0, and the length set to
             * the length of {@code buf}.
             * @param buf the buffer to set for this packet.
             * @exception NullPointerException if the argument is null.
             * @see #getLength
             * @see #getData
             * @since JDK1.1
             */
            // @ts-ignore
            setData(buf: number /*byte*/[]): void
            /**
             * Set the length for this packet. The length of the packet is
             * the number of bytes from the packet's data buffer that will be
             * sent, or the number of bytes of the packet's data buffer that
             * will be used for receiving data. The length must be lesser or
             * equal to the offset plus the length of the packet's buffer.
             * @param length the length to set for this packet.
             * @exception IllegalArgumentException if the length is negative
             *  of if the length is greater than the packet's data buffer
             *  length.
             * @see #getLength
             * @see #setData
             * @since JDK1.1
             */
            // @ts-ignore
            setLength(length: number /*int*/): void
        }
    }
}
