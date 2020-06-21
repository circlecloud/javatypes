declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Socket
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class Socket extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly SOCK_STREAM: number /*int*/
                    // @ts-ignore
                    public static readonly SOCK_DGRAM: number /*int*/
                    // @ts-ignore
                    public static readonly APR_SO_LINGER: number /*int*/
                    /**
                     * Linger
                     */
                    // @ts-ignore
                    public static readonly APR_SO_KEEPALIVE: number /*int*/
                    /**
                     * Keepalive
                     */
                    // @ts-ignore
                    public static readonly APR_SO_DEBUG: number /*int*/
                    /**
                     * Debug
                     */
                    // @ts-ignore
                    public static readonly APR_SO_NONBLOCK: number /*int*/
                    /**
                     * Non-blocking IO
                     */
                    // @ts-ignore
                    public static readonly APR_SO_REUSEADDR: number /*int*/
                    /**
                     * Reuse addresses
                     */
                    // @ts-ignore
                    public static readonly APR_SO_SNDBUF: number /*int*/
                    /**
                     * Send buffer
                     */
                    // @ts-ignore
                    public static readonly APR_SO_RCVBUF: number /*int*/
                    /**
                     * Receive buffer
                     */
                    // @ts-ignore
                    public static readonly APR_SO_DISCONNECTED: number /*int*/
                    /**
                     * For SCTP sockets, this is mapped to STCP_NODELAY internally.
                     */
                    // @ts-ignore
                    public static readonly APR_TCP_NODELAY: number /*int*/
                    // @ts-ignore
                    public static readonly APR_TCP_NOPUSH: number /*int*/
                    /**
                     * This flag is ONLY set internally when we set APR_TCP_NOPUSH with
                     * APR_TCP_NODELAY set to tell us that APR_TCP_NODELAY should be turned on
                     * again when NOPUSH is turned off
                     */
                    // @ts-ignore
                    public static readonly APR_RESET_NODELAY: number /*int*/
                    /**
                     * Set on non-blocking sockets (timeout != 0) on which the
                     * previous read() did not fill a buffer completely.  the next
                     * apr_socket_recv()  will first call select()/poll() rather than
                     * going straight into read().  (Can also be set by an application to
                     * force a select()/poll() call before the next read, in cases where
                     * the app expects that an immediate read would fail.)
                     */
                    // @ts-ignore
                    public static readonly APR_INCOMPLETE_READ: number /*int*/
                    /**
                     * like APR_INCOMPLETE_READ, but for write
                     */
                    // @ts-ignore
                    public static readonly APR_INCOMPLETE_WRITE: number /*int*/
                    /**
                     * Don't accept IPv4 connections on an IPv6 listening socket.
                     */
                    // @ts-ignore
                    public static readonly APR_IPV6_V6ONLY: number /*int*/
                    /**
                     * Delay accepting of new connections until data is available.
                     */
                    // @ts-ignore
                    public static readonly APR_TCP_DEFER_ACCEPT: number /*int*/
                    /**
                     * Define what type of socket shutdown should occur.
                     * apr_shutdown_how_e enum
                     */
                    // @ts-ignore
                    public static readonly APR_SHUTDOWN_READ: number /*int*/
                    /**
                     * no longer allow read request
                     */
                    // @ts-ignore
                    public static readonly APR_SHUTDOWN_WRITE: number /*int*/
                    /**
                     * no longer allow write requests
                     */
                    // @ts-ignore
                    public static readonly APR_SHUTDOWN_READWRITE: number /*int*/
                    /**
                     * no longer allow read or write requests
                     */
                    // @ts-ignore
                    public static readonly APR_IPV4_ADDR_OK: number /*int*/
                    // @ts-ignore
                    public static readonly APR_IPV6_ADDR_OK: number /*int*/
                    // @ts-ignore
                    public static readonly APR_UNSPEC: number /*int*/
                    // @ts-ignore
                    public static readonly APR_INET: number /*int*/
                    // @ts-ignore
                    public static readonly APR_INET6: number /*int*/
                    // @ts-ignore
                    public static readonly APR_PROTO_TCP: number /*int*/
                    /**
                     * TCP
                     */
                    // @ts-ignore
                    public static readonly APR_PROTO_UDP: number /*int*/
                    /**
                     * UDP
                     */
                    // @ts-ignore
                    public static readonly APR_PROTO_SCTP: number /*int*/
                    /**
                     * Enum to tell us if we're interested in remote or local socket
                     * apr_interface_e
                     */
                    // @ts-ignore
                    public static readonly APR_LOCAL: number /*int*/
                    // @ts-ignore
                    public static readonly APR_REMOTE: number /*int*/
                    // @ts-ignore
                    public static readonly SOCKET_GET_POOL: number /*int*/
                    // @ts-ignore
                    public static readonly SOCKET_GET_IMPL: number /*int*/
                    // @ts-ignore
                    public static readonly SOCKET_GET_APRS: number /*int*/
                    // @ts-ignore
                    public static readonly SOCKET_GET_TYPE: number /*int*/
                    /**
                     * Create a socket.
                     * @param family The address family of the socket (e.g., APR_INET).
                     * @param type The type of the socket (e.g., SOCK_STREAM).
                     * @param protocol The protocol of the socket (e.g., APR_PROTO_TCP).
                     * @param cont The parent pool to use
                     * @return The new socket that has been set up.
                     * @throws Exception Error creating socket
                     */
                    // @ts-ignore
                    public static create(family: number /*int*/, type: number /*int*/, protocol: number /*int*/, cont: number /*long*/): number /*long*/
                    /**
                     * Shutdown either reading, writing, or both sides of a socket.
                     * <br>
                     * This does not actually close the socket descriptor, it just
                     * controls which calls are still valid on the socket.
                     * @param thesocket The socket to close
                     * @param how How to shutdown the socket.  One of:
                     *  <PRE>
                     *  APR_SHUTDOWN_READ         no longer allow read requests
                     *  APR_SHUTDOWN_WRITE        no longer allow write requests
                     *  APR_SHUTDOWN_READWRITE    no longer allow read or write requests
                     *  </PRE>
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static shutdown(thesocket: number /*long*/, how: number /*int*/): number /*int*/
                    /**
                     * Close a socket.
                     * @param thesocket The socket to close
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static close(thesocket: number /*long*/): number /*int*/
                    /**
                     * Destroy a pool associated with socket
                     * @param thesocket The destroy
                     */
                    // @ts-ignore
                    public static destroy(thesocket: number /*long*/): void
                    /**
                     * Bind the socket to its associated port
                     * @param sock The socket to bind
                     * @param sa The socket address to bind to
                     *  This may be where we will find out if there is any other process
                     *       using the selected port.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static bind(sock: number /*long*/, sa: number /*long*/): number /*int*/
                    /**
                     * Listen to a bound socket for connections.
                     * @param sock The socket to listen on
                     * @param backlog The number of outstanding connections allowed in the sockets
                     *                 listen queue.  If this value is less than zero, the listen
                     *                 queue size is set to zero.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static listen(sock: number /*long*/, backlog: number /*int*/): number /*int*/
                    /**
                     * Accept a new connection request
                     * @param sock The socket we are listening on.
                     * @param pool The pool for the new socket.
                     * @return A copy of the socket that is connected to the socket that
                     *           made the connection request.  This is the socket which should
                     *           be used for all future communication.
                     * @throws Exception Socket accept error
                     */
                    // @ts-ignore
                    public static acceptx(sock: number /*long*/, pool: number /*long*/): number /*long*/
                    /**
                     * Accept a new connection request
                     * @param sock The socket we are listening on.
                     * @return A copy of the socket that is connected to the socket that
                     *           made the connection request.  This is the socket which should
                     *           be used for all future communication.
                     * @throws Exception Socket accept error
                     */
                    // @ts-ignore
                    public static accept(sock: number /*long*/): number /*long*/
                    /**
                     * Set an OS level accept filter.
                     * @param sock The socket to put the accept filter on.
                     * @param name The accept filter
                     * @param args Any extra args to the accept filter.  Passing NULL here removes
                     *              the accept filter.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static acceptfilter(sock: number /*long*/, name: java.lang.String | string, args: java.lang.String | string): number /*int*/
                    /**
                     * Query the specified socket if at the OOB/Urgent data mark
                     * @param sock The socket to query
                     * @return <code>true</code> if socket is at the OOB/urgent mark,
                     *          otherwise <code>false</code>.
                     */
                    // @ts-ignore
                    public static atmark(sock: number /*long*/): boolean
                    /**
                     * Issue a connection request to a socket either on the same machine
                     * or a different one.
                     * @param sock The socket we wish to use for our side of the connection
                     * @param sa The address of the machine we wish to connect to.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static connect(sock: number /*long*/, sa: number /*long*/): number /*int*/
                    /**
                     * Send data over a network.
                     * <PRE>
                     * This functions acts like a blocking write by default.  To change
                     * this behavior, use apr_socket_timeout_set() or the APR_SO_NONBLOCK
                     * socket option.
                     * It is possible for both bytes to be sent and an error to be returned.
                     * APR_EINTR is never returned.
                     * </PRE>
                     * @param sock The socket to send the data over.
                     * @param buf The buffer which contains the data to be sent.
                     * @param offset Offset in the byte buffer.
                     * @param len The number of bytes to write; (-1) for full array.
                     * @return The number of bytes sent
                     */
                    // @ts-ignore
                    public static send(sock: number /*long*/, buf: number /*byte*/[], offset: number /*int*/, len: number /*int*/): number /*int*/
                    /**
                     * Send data over a network.
                     * <PRE>
                     * This functions acts like a blocking write by default.  To change
                     * this behavior, use apr_socket_timeout_set() or the APR_SO_NONBLOCK
                     * socket option.
                     * It is possible for both bytes to be sent and an error to be returned.
                     * APR_EINTR is never returned.
                     * </PRE>
                     * @param sock The socket to send the data over.
                     * @param buf The Byte buffer which contains the data to be sent.
                     * @param offset The offset within the buffer array of the first buffer from
                     *                which bytes are to be retrieved; must be non-negative
                     *                and no larger than buf.length
                     * @param len The maximum number of buffers to be accessed; must be non-negative
                     *             and no larger than buf.length - offset
                     * @return The number of bytes sent
                     */
                    // @ts-ignore
                    public static sendb(sock: number /*long*/, buf: java.nio.ByteBuffer, offset: number /*int*/, len: number /*int*/): number /*int*/
                    /**
                     * Send data over a network without retry
                     * <PRE>
                     * This functions acts like a blocking write by default.  To change
                     * this behavior, use apr_socket_timeout_set() or the APR_SO_NONBLOCK
                     * socket option.
                     * It is possible for both bytes to be sent and an error to be returned.
                     * </PRE>
                     * @param sock The socket to send the data over.
                     * @param buf The Byte buffer which contains the data to be sent.
                     * @param offset The offset within the buffer array of the first buffer from
                     *                which bytes are to be retrieved; must be non-negative
                     *                and no larger than buf.length
                     * @param len The maximum number of buffers to be accessed; must be non-negative
                     *             and no larger than buf.length - offset
                     * @return The number of bytes sent
                     */
                    // @ts-ignore
                    public static sendib(sock: number /*long*/, buf: java.nio.ByteBuffer, offset: number /*int*/, len: number /*int*/): number /*int*/
                    /**
                     * Send data over a network using internally set ByteBuffer
                     * @param sock The socket to send the data over.
                     * @param offset The offset within the buffer array of the first buffer from
                     *                which bytes are to be retrieved; must be non-negative
                     *                and no larger than buf.length
                     * @param len The maximum number of buffers to be accessed; must be non-negative
                     *             and no larger than buf.length - offset
                     * @return The number of bytes sent
                     */
                    // @ts-ignore
                    public static sendbb(sock: number /*long*/, offset: number /*int*/, len: number /*int*/): number /*int*/
                    /**
                     * Send data over a network using internally set ByteBuffer
                     * without internal retry.
                     * @param sock The socket to send the data over.
                     * @param offset The offset within the buffer array of the first buffer from
                     *                which bytes are to be retrieved; must be non-negative
                     *                and no larger than buf.length
                     * @param len The maximum number of buffers to be accessed; must be non-negative
                     *             and no larger than buf.length - offset
                     * @return The number of bytes sent
                     */
                    // @ts-ignore
                    public static sendibb(sock: number /*long*/, offset: number /*int*/, len: number /*int*/): number /*int*/
                    /**
                     * Send multiple packets of data over a network.
                     * <PRE>
                     * This functions acts like a blocking write by default.  To change
                     * this behavior, use apr_socket_timeout_set() or the APR_SO_NONBLOCK
                     * socket option.
                     * The number of bytes actually sent is stored in argument 3.
                     * It is possible for both bytes to be sent and an error to be returned.
                     * APR_EINTR is never returned.
                     * </PRE>
                     * @param sock The socket to send the data over.
                     * @param vec The array from which to get the data to send.
                     * @return The number of bytes sent
                     */
                    // @ts-ignore
                    public static sendv(sock: number /*long*/, vec: number /*byte*/[][]): number /*int*/
                    /**
                     * @param sock The socket to send from
                     * @param where The apr_sockaddr_t describing where to send the data
                     * @param flags The flags to use
                     * @param buf  The data to send
                     * @param offset Offset in the byte buffer.
                     * @param len  The length of the data to send
                     * @return The number of bytes sent
                     */
                    // @ts-ignore
                    public static sendto(sock: number /*long*/, where: number /*long*/, flags: number /*int*/, buf: number /*byte*/[], offset: number /*int*/, len: number /*int*/): number /*int*/
                    /**
                     * Read data from a network.
                     * <PRE>
                     * This functions acts like a blocking read by default.  To change
                     * this behavior, use apr_socket_timeout_set() or the APR_SO_NONBLOCK
                     * socket option.
                     * The number of bytes actually received is stored in argument 3.
                     * It is possible for both bytes to be received and an APR_EOF or
                     * other error to be returned.
                     * APR_EINTR is never returned.
                     * </PRE>
                     * @param sock The socket to read the data from.
                     * @param buf The buffer to store the data in.
                     * @param offset Offset in the byte buffer.
                     * @param nbytes The number of bytes to read (-1) for full array.
                     * @return the number of bytes received.
                     */
                    // @ts-ignore
                    public static recv(sock: number /*long*/, buf: number /*byte*/[], offset: number /*int*/, nbytes: number /*int*/): number /*int*/
                    /**
                     * Read data from a network with timeout.
                     * <PRE>
                     * This functions acts like a blocking read by default.  To change
                     * this behavior, use apr_socket_timeout_set() or the APR_SO_NONBLOCK
                     * socket option.
                     * The number of bytes actually received is stored in argument 3.
                     * It is possible for both bytes to be received and an APR_EOF or
                     * other error to be returned.
                     * APR_EINTR is never returned.
                     * </PRE>
                     * @param sock The socket to read the data from.
                     * @param buf The buffer to store the data in.
                     * @param offset Offset in the byte buffer.
                     * @param nbytes The number of bytes to read (-1) for full array.
                     * @param timeout The socket timeout in microseconds.
                     * @return the number of bytes received.
                     */
                    // @ts-ignore
                    public static recvt(sock: number /*long*/, buf: number /*byte*/[], offset: number /*int*/, nbytes: number /*int*/, timeout: number /*long*/): number /*int*/
                    /**
                     * Read data from a network.
                     * <PRE>
                     * This functions acts like a blocking read by default.  To change
                     * this behavior, use apr_socket_timeout_set() or the APR_SO_NONBLOCK
                     * socket option.
                     * The number of bytes actually received is stored in argument 3.
                     * It is possible for both bytes to be received and an APR_EOF or
                     * other error to be returned.
                     * APR_EINTR is never returned.
                     * </PRE>
                     * @param sock The socket to read the data from.
                     * @param buf The buffer to store the data in.
                     * @param offset Offset in the byte buffer.
                     * @param nbytes The number of bytes to read (-1) for full array.
                     * @return If &ge; 0, the return value is the number of bytes read. Note a
                     *          non-blocking read with no data current available will return
                     *          {#link Status#EAGAIN} and EOF will return {@link Status#APR_EOF}.
                     */
                    // @ts-ignore
                    public static recvb(sock: number /*long*/, buf: java.nio.ByteBuffer, offset: number /*int*/, nbytes: number /*int*/): number /*int*/
                    /**
                     * Read data from a network using internally set ByteBuffer.
                     * @param sock The socket to read the data from.
                     * @param offset Offset in the byte buffer.
                     * @param nbytes The number of bytes to read (-1) for full array.
                     * @return If &gt; 0, the return value is the number of bytes read. If == 0,
                     *          the return value indicates EOF and if &lt; 0 the return value is the
                     *          error code. Note a non-blocking read with no data current
                     *          available will return {#link Status#EAGAIN} not zero.
                     */
                    // @ts-ignore
                    public static recvbb(sock: number /*long*/, offset: number /*int*/, nbytes: number /*int*/): number /*int*/
                    /**
                     * Read data from a network with timeout.
                     * <PRE>
                     * This functions acts like a blocking read by default.  To change
                     * this behavior, use apr_socket_timeout_set() or the APR_SO_NONBLOCK
                     * socket option.
                     * The number of bytes actually received is stored in argument 3.
                     * It is possible for both bytes to be received and an APR_EOF or
                     * other error to be returned.
                     * APR_EINTR is never returned.
                     * </PRE>
                     * @param sock The socket to read the data from.
                     * @param buf The buffer to store the data in.
                     * @param offset Offset in the byte buffer.
                     * @param nbytes The number of bytes to read (-1) for full array.
                     * @param timeout The socket timeout in microseconds.
                     * @return the number of bytes received.
                     */
                    // @ts-ignore
                    public static recvbt(sock: number /*long*/, buf: java.nio.ByteBuffer, offset: number /*int*/, nbytes: number /*int*/, timeout: number /*long*/): number /*int*/
                    /**
                     * Read data from a network with timeout using internally set ByteBuffer
                     * @param sock The socket to read the data from.
                     * @param offset Offset in the byte buffer.
                     * @param nbytes The number of bytes to read (-1) for full array.
                     * @param timeout The socket timeout in microseconds.
                     * @return the number of bytes received.
                     */
                    // @ts-ignore
                    public static recvbbt(sock: number /*long*/, offset: number /*int*/, nbytes: number /*int*/, timeout: number /*long*/): number /*int*/
                    /**
                     * @param from The apr_sockaddr_t to fill in the recipient info
                     * @param sock The socket to use
                     * @param flags The flags to use
                     * @param buf  The buffer to use
                     * @param offset Offset in the byte buffer.
                     * @param nbytes The number of bytes to read (-1) for full array.
                     * @return the number of bytes received.
                     */
                    // @ts-ignore
                    public static recvfrom(from: number /*long*/, sock: number /*long*/, flags: number /*int*/, buf: number /*byte*/[], offset: number /*int*/, nbytes: number /*int*/): number /*int*/
                    /**
                     * Setup socket options for the specified socket
                     * @param sock The socket to set up.
                     * @param opt The option we would like to configure.  One of:
                     *  <PRE>
                     *  APR_SO_DEBUG      --  turn on debugging information
                     *  APR_SO_KEEPALIVE  --  keep connections active
                     *  APR_SO_LINGER     --  lingers on close if data is present
                     *  APR_SO_NONBLOCK   --  Turns blocking on/off for socket
                     *                        When this option is enabled, use
                     *                        the APR_STATUS_IS_EAGAIN() macro to
                     *                        see if a send or receive function
                     *                        could not transfer data without
                     *                        blocking.
                     *  APR_SO_REUSEADDR  --  The rules used in validating addresses
                     *                        supplied to bind should allow reuse
                     *                        of local addresses.
                     *  APR_SO_SNDBUF     --  Set the SendBufferSize
                     *  APR_SO_RCVBUF     --  Set the ReceiveBufferSize
                     *  </PRE>
                     * @param on Value for the option.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static optSet(sock: number /*long*/, opt: number /*int*/, on: number /*int*/): number /*int*/
                    /**
                     * Query socket options for the specified socket
                     * @param sock The socket to query
                     * @param opt The option we would like to query.  One of:
                     *  <PRE>
                     *  APR_SO_DEBUG      --  turn on debugging information
                     *  APR_SO_KEEPALIVE  --  keep connections active
                     *  APR_SO_LINGER     --  lingers on close if data is present
                     *  APR_SO_NONBLOCK   --  Turns blocking on/off for socket
                     *  APR_SO_REUSEADDR  --  The rules used in validating addresses
                     *                        supplied to bind should allow reuse
                     *                        of local addresses.
                     *  APR_SO_SNDBUF     --  Set the SendBufferSize
                     *  APR_SO_RCVBUF     --  Set the ReceiveBufferSize
                     *  APR_SO_DISCONNECTED -- Query the disconnected state of the socket.
                     *                        (Currently only used on Windows)
                     *  </PRE>
                     * @return Socket option returned on the call.
                     * @throws Exception An error occurred
                     */
                    // @ts-ignore
                    public static optGet(sock: number /*long*/, opt: number /*int*/): number /*int*/
                    /**
                     * Setup socket timeout for the specified socket
                     * @param sock The socket to set up.
                     * @param t Value for the timeout in microseconds.
                     *  <PRE>
                     *  t &gt; 0  -- read and write calls return APR_TIMEUP if specified time
                     *            elapses with no data read or written
                     *  t == 0 -- read and write calls never block
                     *  t &lt; 0  -- read and write calls block
                     *  </PRE>
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static timeoutSet(sock: number /*long*/, t: number /*long*/): number /*int*/
                    /**
                     * Query socket timeout for the specified socket
                     * @param sock The socket to query
                     * @return Socket timeout returned from the query.
                     * @throws Exception An error occurred
                     */
                    // @ts-ignore
                    public static timeoutGet(sock: number /*long*/): number /*long*/
                    /**
                     * Send a file from an open file descriptor to a socket, along with
                     * optional headers and trailers.
                     * <br>
                     * This functions acts like a blocking write by default.  To change
                     * this behavior, use apr_socket_timeout_set() or the
                     * APR_SO_NONBLOCK socket option.
                     * The number of bytes actually sent is stored in the len parameter.
                     * The offset parameter is passed by reference for no reason; its
                     * value will never be modified by the apr_socket_sendfile() function.
                     * @param sock The socket to which we're writing
                     * @param file The open file from which to read
                     * @param headers Array containing the headers to send
                     * @param trailers Array containing the trailers to send
                     * @param offset Offset into the file where we should begin writing
                     * @param len Number of bytes to send from the file
                     * @param flags APR flags that are mapped to OS specific flags
                     * @return Number of bytes actually sent, including headers,
                     *          file, and trailers
                     */
                    // @ts-ignore
                    public static sendfile(sock: number /*long*/, file: number /*long*/, headers: number /*byte*/[][], trailers: number /*byte*/[][], offset: number /*long*/, len: number /*long*/, flags: number /*int*/): number /*long*/
                    /**
                     * Send a file without header and trailer arrays.
                     * @param sock The socket to which we're writing
                     * @param file The open file from which to read
                     * @param offset Offset into the file where we should begin writing
                     * @param len Number of bytes to send from the file
                     * @param flags APR flags that are mapped to OS specific flags
                     * @return Number of bytes actually sent
                     */
                    // @ts-ignore
                    public static sendfilen(sock: number /*long*/, file: number /*long*/, offset: number /*long*/, len: number /*long*/, flags: number /*int*/): number /*long*/
                    /**
                     * Create a child pool from associated socket pool.
                     * @param thesocket The socket to use
                     * @return a pointer to the pool
                     * @throws Exception An error occurred
                     */
                    // @ts-ignore
                    public static pool(thesocket: number /*long*/): number /*long*/
                    /**
                     * Set internal send ByteBuffer.
                     * This function will preset internal Java ByteBuffer for
                     * consecutive sendbb calls.
                     * @param sock The socket to use
                     * @param buf The ByteBuffer
                     */
                    // @ts-ignore
                    public static setsbb(sock: number /*long*/, buf: java.nio.ByteBuffer): void
                    /**
                     * Set internal receive ByteBuffer.
                     * This function will preset internal Java ByteBuffer for
                     * consecutive revcvbb/recvbbt calls.
                     * @param sock The socket to use
                     * @param buf The ByteBuffer
                     */
                    // @ts-ignore
                    public static setrbb(sock: number /*long*/, buf: java.nio.ByteBuffer): void
                    /**
                     * Set the data associated with the current socket.
                     * @param sock The currently open socket.
                     * @param data The user data to associate with the socket.
                     * @param key The key to associate with the data.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static dataSet(sock: number /*long*/, key: java.lang.String | string, data: java.lang.Object | any): number /*int*/
                    /**
                     * Return the data associated with the current socket
                     * @param sock The currently open socket.
                     * @param key The key to associate with the user data.
                     * @return Data or null in case of error.
                     */
                    // @ts-ignore
                    public static dataGet(sock: number /*long*/, key: java.lang.String | string): any
                }
            }
        }
    }
}
