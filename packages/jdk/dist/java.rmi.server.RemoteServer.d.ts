declare namespace java {
    namespace rmi {
        namespace server {
            /**
             * The <code>RemoteServer</code> class is the common superclass to server
             * implementations and provides the framework to support a wide range
             * of remote reference semantics.  Specifically, the functions needed
             * to create and export remote objects (i.e. to make them remotely
             * available) are provided abstractly by <code>RemoteServer</code> and
             * concretely by its subclass(es).
             * @author Ann Wollrath
             * @since JDK1.1
             */
            // @ts-ignore
            abstract class RemoteServer extends java.rmi.server.RemoteObject {
                /**
                 * Constructs a <code>RemoteServer</code>.
                 * @since JDK1.1
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a <code>RemoteServer</code> with the given reference type.
                 * @param ref the remote reference
                 * @since JDK1.1
                 */
                // @ts-ignore
                constructor(ref: java.rmi.server.RemoteRef)
                /**
                 * Returns a string representation of the client host for the
                 * remote method invocation being processed in the current thread.
                 * @return a string representation of the client host
                 * @throws ServerNotActiveException if no remote method invocation
                 *  is being processed in the current thread
                 * @since JDK1.1
                 */
                // @ts-ignore
                public static getClientHost(): string
                /**
                 * Log RMI calls to the output stream <code>out</code>. If
                 * <code>out</code> is <code>null</code>, call logging is turned off.
                 * <p>If there is a security manager, its
                 * <code>checkPermission</code> method will be invoked with a
                 * <code>java.util.logging.LoggingPermission("control")</code>
                 * permission; this could result in a <code>SecurityException</code>.
                 * @param out the output stream to which RMI calls should be logged
                 * @throws SecurityException  if there is a security manager and
                 *           the invocation of its <code>checkPermission</code> method
                 *           fails
                 * @see #getLog
                 * @since JDK1.1
                 */
                // @ts-ignore
                public static setLog(out: java.io.OutputStream): void
                /**
                 * Returns stream for the RMI call log.
                 * @return the call log
                 * @see #setLog
                 * @since JDK1.1
                 */
                // @ts-ignore
                public static getLog(): java.io.PrintStream
            }
        }
    }
}
