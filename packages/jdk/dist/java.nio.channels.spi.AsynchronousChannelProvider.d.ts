declare namespace java {
    namespace nio {
        namespace channels {
            namespace spi {
                /**
                 * Service-provider class for asynchronous channels.
                 * <p> An asynchronous channel provider is a concrete subclass of this class that
                 * has a zero-argument constructor and implements the abstract methods specified
                 * below.  A given invocation of the Java virtual machine maintains a single
                 * system-wide default provider instance, which is returned by the {@link
                 * #provider() provider} method.  The first invocation of that method will locate
                 * the default provider as specified below.
                 * <p> All of the methods in this class are safe for use by multiple concurrent
                 * threads.  </p>
                 * @since 1.7
                 */
                // @ts-ignore
                abstract class AsynchronousChannelProvider extends java.lang.Object {
                    /**
                     * Initializes a new instance of this class.
                     * @throws SecurityException
                     *           If a security manager has been installed and it denies
                     *           {#link RuntimePermission}<tt>("asynchronousChannelProvider")</tt>
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns the system-wide default asynchronous channel provider for this
                     * invocation of the Java virtual machine.
                     * <p> The first invocation of this method locates the default provider
                     * object as follows: </p>
                     * <ol>
                     * <li><p> If the system property
                     * <tt>java.nio.channels.spi.AsynchronousChannelProvider</tt> is defined
                     * then it is taken to be the fully-qualified name of a concrete provider class.
                     * The class is loaded and instantiated; if this process fails then an
                     * unspecified error is thrown.  </p></li>
                     * <li><p> If a provider class has been installed in a jar file that is
                     * visible to the system class loader, and that jar file contains a
                     * provider-configuration file named
                     * <tt>java.nio.channels.spi.AsynchronousChannelProvider</tt> in the resource
                     * directory <tt>META-INF/services</tt>, then the first class name
                     * specified in that file is taken.  The class is loaded and
                     * instantiated; if this process fails then an unspecified error is
                     * thrown.  </p></li>
                     * <li><p> Finally, if no provider has been specified by any of the above
                     * means then the system-default provider class is instantiated and the
                     * result is returned.  </p></li>
                     * </ol>
                     * <p> Subsequent invocations of this method return the provider that was
                     * returned by the first invocation.  </p>
                     * @return The system-wide default AsynchronousChannel provider
                     */
                    // @ts-ignore
                    public static provider(): java.nio.channels.spi.AsynchronousChannelProvider
                    /**
                     * Constructs a new asynchronous channel group with a fixed thread pool.
                     * @param nThreads
                     *           The number of threads in the pool
                     * @param threadFactory
                     *           The factory to use when creating new threads
                     * @return A new asynchronous channel group
                     * @throws IllegalArgumentException
                     *           If {#code nThreads <= 0}
                     * @throws IOException
                     *           If an I/O error occurs
                     * @see AsynchronousChannelGroup#withFixedThreadPool
                     */
                    // @ts-ignore
                    public abstract openAsynchronousChannelGroup(nThreads: number /*int*/, threadFactory: java.util.concurrent.ThreadFactory): java.nio.channels.AsynchronousChannelGroup
                    /**
                     * Constructs a new asynchronous channel group with the given thread pool.
                     * @param executor
                     *           The thread pool
                     * @param initialSize
                     *           A value {#code >=0} or a negative value for implementation
                     *           specific default
                     * @return A new asynchronous channel group
                     * @throws IOException
                     *           If an I/O error occurs
                     * @see AsynchronousChannelGroup#withCachedThreadPool
                     */
                    // @ts-ignore
                    public abstract openAsynchronousChannelGroup(executor: java.util.concurrent.ExecutorService, initialSize: number /*int*/): java.nio.channels.AsynchronousChannelGroup
                    /**
                     * Opens an asynchronous server-socket channel.
                     * @param group
                     *           The group to which the channel is bound, or {#code null} to
                     *           bind to the default group
                     * @return The new channel
                     * @throws IllegalChannelGroupException
                     *           If the provider that created the group differs from this provider
                     * @throws ShutdownChannelGroupException
                     *           The group is shutdown
                     * @throws IOException
                     *           If an I/O error occurs
                     */
                    // @ts-ignore
                    public abstract openAsynchronousServerSocketChannel(group: java.nio.channels.AsynchronousChannelGroup): java.nio.channels.AsynchronousServerSocketChannel
                    /**
                     * Opens an asynchronous socket channel.
                     * @param group
                     *           The group to which the channel is bound, or {#code null} to
                     *           bind to the default group
                     * @return The new channel
                     * @throws IllegalChannelGroupException
                     *           If the provider that created the group differs from this provider
                     * @throws ShutdownChannelGroupException
                     *           The group is shutdown
                     * @throws IOException
                     *           If an I/O error occurs
                     */
                    // @ts-ignore
                    public abstract openAsynchronousSocketChannel(group: java.nio.channels.AsynchronousChannelGroup): java.nio.channels.AsynchronousSocketChannel
                }
            }
        }
    }
}
