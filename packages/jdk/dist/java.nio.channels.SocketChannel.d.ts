declare namespace java {
    namespace nio {
        namespace channels {
            /**
             * A selectable channel for stream-oriented connecting sockets.
             * <p> A socket channel is created by invoking one of the {@link #open open}
             * methods of this class.  It is not possible to create a channel for an arbitrary,
             * pre-existing socket. A newly-created socket channel is open but not yet
             * connected.  An attempt to invoke an I/O operation upon an unconnected
             * channel will cause a {@link NotYetConnectedException} to be thrown.  A
             * socket channel can be connected by invoking its {@link #connect connect}
             * method; once connected, a socket channel remains connected until it is
             * closed.  Whether or not a socket channel is connected may be determined by
             * invoking its {@link #isConnected isConnected} method.
             * <p> Socket channels support <i>non-blocking connection:</i>&nbsp;A socket
             * channel may be created and the process of establishing the link to the
             * remote socket may be initiated via the {@link #connect connect} method for
             * later completion by the {@link #finishConnect finishConnect} method.
             * Whether or not a connection operation is in progress may be determined by
             * invoking the {@link #isConnectionPending isConnectionPending} method.
             * <p> Socket channels support <i>asynchronous shutdown,</i> which is similar
             * to the asynchronous close operation specified in the {@link Channel} class.
             * If the input side of a socket is shut down by one thread while another
             * thread is blocked in a read operation on the socket's channel, then the read
             * operation in the blocked thread will complete without reading any bytes and
             * will return <tt>-1</tt>.  If the output side of a socket is shut down by one
             * thread while another thread is blocked in a write operation on the socket's
             * channel, then the blocked thread will receive an {@link
             * AsynchronousCloseException}.
             * <p> Socket options are configured using the {@link #setOption(SocketOption,Object)
             * setOption} method. Socket channels support the following options:
             * <blockquote>
             * <table border summary="Socket options">
             * <tr>
             * <th>Option Name</th>
             * <th>Description</th>
             * </tr>
             * <tr>
             * <td> {@link java.net.StandardSocketOptions#SO_SNDBUF SO_SNDBUF} </td>
             * <td> The size of the socket send buffer </td>
             * </tr>
             * <tr>
             * <td> {@link java.net.StandardSocketOptions#SO_RCVBUF SO_RCVBUF} </td>
             * <td> The size of the socket receive buffer </td>
             * </tr>
             * <tr>
             * <td> {@link java.net.StandardSocketOptions#SO_KEEPALIVE SO_KEEPALIVE} </td>
             * <td> Keep connection alive </td>
             * </tr>
             * <tr>
             * <td> {@link java.net.StandardSocketOptions#SO_REUSEADDR SO_REUSEADDR} </td>
             * <td> Re-use address </td>
             * </tr>
             * <tr>
             * <td> {@link java.net.StandardSocketOptions#SO_LINGER SO_LINGER} </td>
             * <td> Linger on close if data is present (when configured in blocking mode
             * only) </td>
             * </tr>
             * <tr>
             * <td> {@link java.net.StandardSocketOptions#TCP_NODELAY TCP_NODELAY} </td>
             * <td> Disable the Nagle algorithm </td>
             * </tr>
             * </table>
             * </blockquote>
             * Additional (implementation specific) options may also be supported.
             * <p> Socket channels are safe for use by multiple concurrent threads.  They
             * support concurrent reading and writing, though at most one thread may be
             * reading and at most one thread may be writing at any given time.  The {@link
             * #connect connect} and {@link #finishConnect finishConnect} methods are
             * mutually synchronized against each other, and an attempt to initiate a read
             * or write operation while an invocation of one of these methods is in
             * progress will block until that invocation is complete.  </p>
             * @author Mark Reinhold
             * @author JSR-51 Expert Group
             * @since 1.4
             */
            // @ts-ignore
            class SocketChannel extends java.nio.channels.spi.AbstractSelectableChannel implements java.nio.channels.ByteChannel, java.nio.channels.ScatteringByteChannel, java.nio.channels.GatheringByteChannel, java.nio.channels.NetworkChannel {
                /**
                 * Initializes a new instance of this class.
                 * @param provider
                 *          The provider that created this channel
                 */
                // @ts-ignore
                constructor(provider: java.nio.channels.spi.SelectorProvider)
                /**
                 * Opens a socket channel.
                 * <p> The new channel is created by invoking the {@link
                 * java.nio.channels.spi.SelectorProvider#openSocketChannel
                 * openSocketChannel} method of the system-wide default {@link
                 * java.nio.channels.spi.SelectorProvider} object.  </p>
                 * @return A new socket channel
                 * @throws IOException
                 *           If an I/O error occurs
                 */
                // @ts-ignore
                open(): java.nio.channels.SocketChannel
                /**
                 * Opens a socket channel and connects it to a remote address.
                 * <p> This convenience method works as if by invoking the {@link #open()}
                 * method, invoking the {@link #connect(SocketAddress) connect} method upon
                 * the resulting socket channel, passing it <tt>remote</tt>, and then
                 * returning that channel.  </p>
                 * @param remote
                 *          The remote address to which the new channel is to be connected
                 * @return A new, and connected, socket channel
                 * @throws AsynchronousCloseException
                 *           If another thread closes this channel
                 *           while the connect operation is in progress
                 * @throws ClosedByInterruptException
                 *           If another thread interrupts the current thread
                 *           while the connect operation is in progress, thereby
                 *           closing the channel and setting the current thread's
                 *           interrupt status
                 * @throws UnresolvedAddressException
                 *           If the given remote address is not fully resolved
                 * @throws UnsupportedAddressTypeException
                 *           If the type of the given remote address is not supported
                 * @throws SecurityException
                 *           If a security manager has been installed
                 *           and it does not permit access to the given remote endpoint
                 * @throws IOException
                 *           If some other I/O error occurs
                 */
                // @ts-ignore
                open(remote: java.net.SocketAddress): java.nio.channels.SocketChannel
                /**
                 * Returns an operation set identifying this channel's supported
                 * operations.
                 * <p> Socket channels support connecting, reading, and writing, so this
                 * method returns <tt>(</tt>{@link SelectionKey#OP_CONNECT}
                 * <tt>|</tt>&nbsp;{@link SelectionKey#OP_READ} <tt>|</tt>&nbsp;{@link
                 * SelectionKey#OP_WRITE}<tt>)</tt>.  </p>
                 * @return The valid-operation set
                 */
                // @ts-ignore
                validOps(): int
                /**
                 * @throws ConnectionPendingException
                 *           If a non-blocking connect operation is already in progress on
                 *           this channel
                 * @throws AlreadyBoundException               {#inheritDoc}
                 * @throws UnsupportedAddressTypeException     {#inheritDoc}
                 * @throws ClosedChannelException              {#inheritDoc}
                 * @throws IOException                         {#inheritDoc}
                 * @throws SecurityException
                 *           If a security manager has been installed and its
                 *           {#link SecurityManager#checkListen checkListen} method denies
                 *           the operation
                 * @since 1.7
                 */
                // @ts-ignore
                abstract bind(local: java.net.SocketAddress): java.nio.channels.SocketChannel
                /**
                 * @throws UnsupportedOperationException           {#inheritDoc}
                 * @throws IllegalArgumentException                {#inheritDoc}
                 * @throws ClosedChannelException                  {#inheritDoc}
                 * @throws IOException                             {#inheritDoc}
                 * @since 1.7
                 */
                // @ts-ignore
                abstract setOption<T>(name: java.net.SocketOption<T>, value: T): java.nio.channels.SocketChannel
                /**
                 * Shutdown the connection for reading without closing the channel.
                 * <p> Once shutdown for reading then further reads on the channel will
                 * return {@code -1}, the end-of-stream indication. If the input side of the
                 * connection is already shutdown then invoking this method has no effect.
                 * @return The channel
                 * @throws NotYetConnectedException
                 *           If this channel is not yet connected
                 * @throws ClosedChannelException
                 *           If this channel is closed
                 * @throws IOException
                 *           If some other I/O error occurs
                 * @since 1.7
                 */
                // @ts-ignore
                abstract shutdownInput(): java.nio.channels.SocketChannel
                /**
                 * Shutdown the connection for writing without closing the channel.
                 * <p> Once shutdown for writing then further attempts to write to the
                 * channel will throw {@link ClosedChannelException}. If the output side of
                 * the connection is already shutdown then invoking this method has no
                 * effect.
                 * @return The channel
                 * @throws NotYetConnectedException
                 *           If this channel is not yet connected
                 * @throws ClosedChannelException
                 *           If this channel is closed
                 * @throws IOException
                 *           If some other I/O error occurs
                 * @since 1.7
                 */
                // @ts-ignore
                abstract shutdownOutput(): java.nio.channels.SocketChannel
                /**
                 * Retrieves a socket associated with this channel.
                 * <p> The returned object will not declare any public methods that are not
                 * declared in the {@link java.net.Socket} class.  </p>
                 * @return A socket associated with this channel
                 */
                // @ts-ignore
                abstract socket(): java.net.Socket
                /**
                 * Tells whether or not this channel's network socket is connected.
                 * @return <tt>true</tt> if, and only if, this channel's network socket
                 *           is {#link #isOpen open} and connected
                 */
                // @ts-ignore
                abstract isConnected(): boolean
                /**
                 * Tells whether or not a connection operation is in progress on this
                 * channel.
                 * @return <tt>true</tt> if, and only if, a connection operation has been
                 *           initiated on this channel but not yet completed by invoking the
                 *           {#link #finishConnect finishConnect} method
                 */
                // @ts-ignore
                abstract isConnectionPending(): boolean
                /**
                 * Connects this channel's socket.
                 * <p> If this channel is in non-blocking mode then an invocation of this
                 * method initiates a non-blocking connection operation.  If the connection
                 * is established immediately, as can happen with a local connection, then
                 * this method returns <tt>true</tt>.  Otherwise this method returns
                 * <tt>false</tt> and the connection operation must later be completed by
                 * invoking the {@link #finishConnect finishConnect} method.
                 * <p> If this channel is in blocking mode then an invocation of this
                 * method will block until the connection is established or an I/O error
                 * occurs.
                 * <p> This method performs exactly the same security checks as the {@link
                 * java.net.Socket} class.  That is, if a security manager has been
                 * installed then this method verifies that its {@link
                 * java.lang.SecurityManager#checkConnect checkConnect} method permits
                 * connecting to the address and port number of the given remote endpoint.
                 * <p> This method may be invoked at any time.  If a read or write
                 * operation upon this channel is invoked while an invocation of this
                 * method is in progress then that operation will first block until this
                 * invocation is complete.  If a connection attempt is initiated but fails,
                 * that is, if an invocation of this method throws a checked exception,
                 * then the channel will be closed.  </p>
                 * @param remote
                 *          The remote address to which this channel is to be connected
                 * @return <tt>true</tt> if a connection was established,
                 *           <tt>false</tt> if this channel is in non-blocking mode
                 *           and the connection operation is in progress
                 * @throws AlreadyConnectedException
                 *           If this channel is already connected
                 * @throws ConnectionPendingException
                 *           If a non-blocking connection operation is already in progress
                 *           on this channel
                 * @throws ClosedChannelException
                 *           If this channel is closed
                 * @throws AsynchronousCloseException
                 *           If another thread closes this channel
                 *           while the connect operation is in progress
                 * @throws ClosedByInterruptException
                 *           If another thread interrupts the current thread
                 *           while the connect operation is in progress, thereby
                 *           closing the channel and setting the current thread's
                 *           interrupt status
                 * @throws UnresolvedAddressException
                 *           If the given remote address is not fully resolved
                 * @throws UnsupportedAddressTypeException
                 *           If the type of the given remote address is not supported
                 * @throws SecurityException
                 *           If a security manager has been installed
                 *           and it does not permit access to the given remote endpoint
                 * @throws IOException
                 *           If some other I/O error occurs
                 */
                // @ts-ignore
                abstract connect(remote: java.net.SocketAddress): boolean
                /**
                 * Finishes the process of connecting a socket channel.
                 * <p> A non-blocking connection operation is initiated by placing a socket
                 * channel in non-blocking mode and then invoking its {@link #connect
                 * connect} method.  Once the connection is established, or the attempt has
                 * failed, the socket channel will become connectable and this method may
                 * be invoked to complete the connection sequence.  If the connection
                 * operation failed then invoking this method will cause an appropriate
                 * {@link java.io.IOException} to be thrown.
                 * <p> If this channel is already connected then this method will not block
                 * and will immediately return <tt>true</tt>.  If this channel is in
                 * non-blocking mode then this method will return <tt>false</tt> if the
                 * connection process is not yet complete.  If this channel is in blocking
                 * mode then this method will block until the connection either completes
                 * or fails, and will always either return <tt>true</tt> or throw a checked
                 * exception describing the failure.
                 * <p> This method may be invoked at any time.  If a read or write
                 * operation upon this channel is invoked while an invocation of this
                 * method is in progress then that operation will first block until this
                 * invocation is complete.  If a connection attempt fails, that is, if an
                 * invocation of this method throws a checked exception, then the channel
                 * will be closed.  </p>
                 * @return <tt>true</tt> if, and only if, this channel's socket is now
                 *           connected
                 * @throws NoConnectionPendingException
                 *           If this channel is not connected and a connection operation
                 *           has not been initiated
                 * @throws ClosedChannelException
                 *           If this channel is closed
                 * @throws AsynchronousCloseException
                 *           If another thread closes this channel
                 *           while the connect operation is in progress
                 * @throws ClosedByInterruptException
                 *           If another thread interrupts the current thread
                 *           while the connect operation is in progress, thereby
                 *           closing the channel and setting the current thread's
                 *           interrupt status
                 * @throws IOException
                 *           If some other I/O error occurs
                 */
                // @ts-ignore
                abstract finishConnect(): boolean
                /**
                 * Returns the remote address to which this channel's socket is connected.
                 * <p> Where the channel is bound and connected to an Internet Protocol
                 * socket address then the return value from this method is of type {@link
                 * java.net.InetSocketAddress}.
                 * @return The remote address; {#code null} if the channel's socket is not
                 *           connected
                 * @throws ClosedChannelException
                 *           If the channel is closed
                 * @throws IOException
                 *           If an I/O error occurs
                 * @since 1.7
                 */
                // @ts-ignore
                abstract getRemoteAddress(): java.net.SocketAddress
                /**
                 * @throws NotYetConnectedException
                 *           If this channel is not yet connected
                 */
                // @ts-ignore
                abstract read(dst: java.nio.ByteBuffer): int
                /**
                 * @throws NotYetConnectedException
                 *           If this channel is not yet connected
                 */
                // @ts-ignore
                abstract read(dsts: java.nio.ByteBuffer[], offset: number /*int*/, length: number /*int*/): long
                /**
                 * @throws NotYetConnectedException
                 *           If this channel is not yet connected
                 */
                // @ts-ignore
                read(dsts: java.nio.ByteBuffer[]): long
                /**
                 * @throws NotYetConnectedException
                 *           If this channel is not yet connected
                 */
                // @ts-ignore
                abstract write(src: java.nio.ByteBuffer): int
                /**
                 * @throws NotYetConnectedException
                 *           If this channel is not yet connected
                 */
                // @ts-ignore
                abstract write(srcs: java.nio.ByteBuffer[], offset: number /*int*/, length: number /*int*/): long
                /**
                 * @throws NotYetConnectedException
                 *           If this channel is not yet connected
                 */
                // @ts-ignore
                write(srcs: java.nio.ByteBuffer[]): long
                /**
                 * {@inheritDoc}
                 * <p>
                 * If there is a security manager set, its {@code checkConnect} method is
                 * called with the local address and {@code -1} as its arguments to see
                 * if the operation is allowed. If the operation is not allowed,
                 * a {@code SocketAddress} representing the
                 * {@link java.net.InetAddress#getLoopbackAddress loopback} address and the
                 * local port of the channel's socket is returned.
                 * @return The {#code SocketAddress} that the socket is bound to, or the
                 *           {@code SocketAddress} representing the loopback address if
                 *           denied by the security manager, or {@code null} if the
                 *           channel's socket is not bound
                 * @throws ClosedChannelException     {#inheritDoc}
                 * @throws IOException                {#inheritDoc}
                 */
                // @ts-ignore
                abstract getLocalAddress(): java.net.SocketAddress
            }
        }
    }
}
