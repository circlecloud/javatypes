declare namespace javax {
    namespace rmi {
        namespace CORBA {
            /**
             * Supports delegation for method implementations in {@link javax.rmi.PortableRemoteObject}.
             * The delegate is a singleton instance of a class that implements this
             * interface and provides a replacement implementation for all the
             * methods of <code>javax.rmi.PortableRemoteObject</code>.
             * Delegates are enabled by providing the delegate's class name as the
             * value of the
             * <code>javax.rmi.CORBA.PortableRemoteObjectClass</code>
             * system property.
             * @see javax.rmi.PortableRemoteObject
             */
            // @ts-ignore
            interface PortableRemoteObjectDelegate {
                /**
                 * Delegation call for {@link javax.rmi.PortableRemoteObject#exportObject}.
                 */
                // @ts-ignore
                exportObject(obj: java.rmi.Remote): void
                /**
                 * Delegation call for {@link javax.rmi.PortableRemoteObject#toStub}.
                 */
                // @ts-ignore
                toStub(obj: java.rmi.Remote): java.rmi.Remote
                /**
                 * Delegation call for {@link javax.rmi.PortableRemoteObject#unexportObject}.
                 */
                // @ts-ignore
                unexportObject(obj: java.rmi.Remote): void
                /**
                 * Delegation call for {@link javax.rmi.PortableRemoteObject#narrow}.
                 */
                // @ts-ignore
                narrow(narrowFrom: any, narrowTo: java.lang.Class): java.lang.Object
                /**
                 * Delegation call for {@link javax.rmi.PortableRemoteObject#connect}.
                 */
                // @ts-ignore
                connect(target: java.rmi.Remote, source: java.rmi.Remote): void
            }
        }
    }
}
