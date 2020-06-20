declare namespace java {
    namespace rmi {
        namespace server {
            /**
             * An <code>ServerNotActiveException</code> is an <code>Exception</code>
             * thrown during a call to <code>RemoteServer.getClientHost</code> if
             * the getClientHost method is called outside of servicing a remote
             * method call.
             * @author Roger Riggs
             * @since JDK1.1
             * @see java.rmi.server.RemoteServer#getClientHost()
             */
            // @ts-ignore
            class ServerNotActiveException extends java.lang.Exception {
                /**
                 * Constructs an <code>ServerNotActiveException</code> with no specified
                 * detail message.
                 * @since JDK1.1
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs an <code>ServerNotActiveException</code> with the specified
                 * detail message.
                 * @param s the detail message.
                 * @since JDK1.1
                 */
                // @ts-ignore
                constructor(s: string)
            }
        }
    }
}
