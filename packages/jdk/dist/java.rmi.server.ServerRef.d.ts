declare namespace java {
    namespace rmi {
        namespace server {
            /**
             * A ServerRef represents the server-side handle for a remote object
             * implementation.
             * @author Ann Wollrath
             * @since JDK1.1
             * @deprecated No replacement. This interface is unused and is obsolete.
             */
            // @ts-ignore
            interface ServerRef extends java.rmi.server.RemoteRef {
                /**
                 * indicate compatibility with JDK 1.1.x version of class.
                 */
                // @ts-ignore
                
                /**
                 * Creates a client stub object for the supplied Remote object.
                 * If the call completes successfully, the remote object should
                 * be able to accept incoming calls from clients.
                 * @param obj the remote object implementation
                 * @param data information necessary to export the object
                 * @return the stub for the remote object
                 * @exception RemoteException if an exception occurs attempting
                 *  to export the object (e.g., stub class could not be found)
                 * @since JDK1.1
                 */
                // @ts-ignore
                exportObject(obj: java.rmi.Remote, data: any): java.rmi.server.RemoteStub
                /**
                 * Returns the hostname of the current client.  When called from a
                 * thread actively handling a remote method invocation the
                 * hostname of the client is returned.
                 * @return the client's host name
                 * @exception ServerNotActiveException if called outside of servicing
                 *  a remote method invocation
                 * @since JDK1.1
                 */
                // @ts-ignore
                getClientHost(): java.lang.String
            }
        }
    }
}
