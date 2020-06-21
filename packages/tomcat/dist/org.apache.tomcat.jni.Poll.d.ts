declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Poll
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class Poll extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Can read without blocking
                     */
                    // @ts-ignore
                    public static readonly APR_POLLIN: number /*int*/
                    /**
                     * Priority data available
                     */
                    // @ts-ignore
                    public static readonly APR_POLLPRI: number /*int*/
                    /**
                     * Can write without blocking
                     */
                    // @ts-ignore
                    public static readonly APR_POLLOUT: number /*int*/
                    /**
                     * Pending error
                     */
                    // @ts-ignore
                    public static readonly APR_POLLERR: number /*int*/
                    /**
                     * Hangup occurred
                     */
                    // @ts-ignore
                    public static readonly APR_POLLHUP: number /*int*/
                    /**
                     * Descriptor invalid
                     */
                    // @ts-ignore
                    public static readonly APR_POLLNVAL: number /*int*/
                    /**
                     * Adding or Removing a Descriptor is thread safe
                     */
                    // @ts-ignore
                    public static readonly APR_POLLSET_THREADSAFE: number /*int*/
                    /**
                     * Used in apr_pollfd_t to determine what the apr_descriptor is
                     * apr_datatype_e enum
                     */
                    // @ts-ignore
                    public static readonly APR_NO_DESC: number /*int*/
                    /**
                     * nothing here
                     */
                    // @ts-ignore
                    public static readonly APR_POLL_SOCKET: number /*int*/
                    /**
                     * descriptor refers to a socket
                     */
                    // @ts-ignore
                    public static readonly APR_POLL_FILE: number /*int*/
                    /**
                     * descriptor refers to a file
                     */
                    // @ts-ignore
                    public static readonly APR_POLL_LASTDESC: number /*int*/
                    /**
                     * Setup a pollset object.
                     * If flags equals APR_POLLSET_THREADSAFE, then a pollset is
                     * created on which it is safe to make concurrent calls to
                     * apr_pollset_add(), apr_pollset_remove() and apr_pollset_poll() from
                     * separate threads.  This feature is only supported on some
                     * platforms; the apr_pollset_create() call will fail with
                     * APR_ENOTIMPL on platforms where it is not supported.
                     * @param size The maximum number of descriptors that this pollset can hold
                     * @param p The pool from which to allocate the pollset
                     * @param flags Optional flags to modify the operation of the pollset.
                     * @param ttl Maximum time to live for a particular socket.
                     * @return The pointer in which to return the newly created object
                     * @throws Error Pollset creation failed
                     */
                    // @ts-ignore
                    public static create(size: number /*int*/, p: number /*long*/, flags: number /*int*/, ttl: number /*long*/): number /*long*/
                    /**
                     * Destroy a pollset object
                     * @param pollset The pollset to destroy
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static destroy(pollset: number /*long*/): number /*int*/
                    /**
                     * Add a socket to a pollset with the default timeout.
                     * @param pollset The pollset to which to add the socket
                     * @param sock The sockets to add
                     * @param reqevents requested events
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static add(pollset: number /*long*/, sock: number /*long*/, reqevents: number /*int*/): number /*int*/
                    /**
                     * Add a socket to a pollset with a specific timeout.
                     * @param pollset The pollset to which to add the socket
                     * @param sock The sockets to add
                     * @param reqevents requested events
                     * @param timeout requested timeout in microseconds (-1 for infinite)
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static addWithTimeout(pollset: number /*long*/, sock: number /*long*/, reqevents: number /*int*/, timeout: number /*long*/): number /*int*/
                    /**
                     * Remove a descriptor from a pollset
                     * @param pollset The pollset from which to remove the descriptor
                     * @param sock The socket to remove
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static remove(pollset: number /*long*/, sock: number /*long*/): number /*int*/
                    /**
                     * Block for activity on the descriptor(s) in a pollset
                     * @param pollset The pollset to use
                     * @param timeout Timeout in microseconds
                     * @param descriptors Array of signaled descriptors (output parameter)
                     *         The descriptor array must be two times the size of pollset.
                     *         and are populated as follows:
                     *  <PRE>
                     *  descriptors[2n + 0] -&gt; returned events
                     *  descriptors[2n + 1] -&gt; socket
                     *  </PRE>
                     * @param remove Remove signaled descriptors from pollset
                     * @return Number of signaled descriptors (output parameter)
                     *          or negative APR error code.
                     */
                    // @ts-ignore
                    public static poll(pollset: number /*long*/, timeout: number /*long*/, descriptors: number /*long*/[], remove: boolean): number /*int*/
                    /**
                     * Maintain on the descriptor(s) in a pollset
                     * @param pollset The pollset to use
                     * @param descriptors Array of signaled descriptors (output parameter)
                     *         The descriptor array must be the size of pollset.
                     *         and are populated as follows:
                     *  <PRE>
                     *  descriptors[n] -&gt; socket
                     *  </PRE>
                     * @param remove Remove signaled descriptors from pollset
                     * @return Number of signaled descriptors (output parameter)
                     *          or negative APR error code.
                     */
                    // @ts-ignore
                    public static maintain(pollset: number /*long*/, descriptors: number /*long*/[], remove: boolean): number /*int*/
                    /**
                     * Set the socket time to live.
                     * @param pollset The pollset to use
                     * @param ttl Timeout in microseconds
                     */
                    // @ts-ignore
                    public static setTtl(pollset: number /*long*/, ttl: number /*long*/): void
                    /**
                     * Get the socket time to live.
                     * @param pollset The pollset to use
                     * @return Timeout in microseconds
                     */
                    // @ts-ignore
                    public static getTtl(pollset: number /*long*/): number /*long*/
                    /**
                     * Return all descriptor(s) in a pollset
                     * @param pollset The pollset to use
                     * @param descriptors Array of descriptors (output parameter)
                     *         The descriptor array must be two times the size of pollset.
                     *         and are populated as follows:
                     *  <PRE>
                     *  descriptors[2n + 0] -&gt; returned events
                     *  descriptors[2n + 1] -&gt; socket
                     *  </PRE>
                     * @return Number of descriptors (output parameter) in the Poll
                     *          or negative APR error code.
                     */
                    // @ts-ignore
                    public static pollset(pollset: number /*long*/, descriptors: number /*long*/[]): number /*int*/
                    /**
                     * Make poll() return.
                     * @param pollset The pollset to use
                     * @return Negative APR error code
                     */
                    // @ts-ignore
                    public static interrupt(pollset: number /*long*/): number /*int*/
                    /**
                     * Check if interrupt() is allowed.
                     * @param pollset The pollset to use
                     * @return <code>true</code> if {#link #interrupt(long)} is allowed, else
                     *           <code>false</code>
                     */
                    // @ts-ignore
                    public static wakeable(pollset: number /*long*/): boolean
                }
            }
        }
    }
}
