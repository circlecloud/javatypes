declare namespace java {
    namespace rmi {
        namespace server {
            /**
             * An <code>ExportException</code> is a <code>RemoteException</code>
             * thrown if an attempt to export a remote object fails.  A remote object is
             * exported via the constructors and <code>exportObject</code> methods of
             * <code>java.rmi.server.UnicastRemoteObject</code> and
             * <code>java.rmi.activation.Activatable</code>.
             * @author Ann Wollrath
             * @since JDK1.1
             * @see java.rmi.server.UnicastRemoteObject
             * @see java.rmi.activation.Activatable
             */
            // @ts-ignore
            class ExportException extends java.rmi.RemoteException {
                /**
                 * Constructs an <code>ExportException</code> with the specified
                 * detail message.
                 * @param s the detail message
                 * @since JDK1.1
                 */
                // @ts-ignore
                constructor(s: string)
                /**
                 * Constructs an <code>ExportException</code> with the specified
                 * detail message and nested exception.
                 * @param s the detail message
                 * @param ex the nested exception
                 * @since JDK1.1
                 */
                // @ts-ignore
                constructor(s: string, ex: java.lang.Exception)
            }
        }
    }
}
