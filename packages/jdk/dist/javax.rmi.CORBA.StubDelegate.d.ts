declare namespace javax {
    namespace rmi {
        namespace CORBA {
            /**
             * Supports delegation for method implementations in {@link Stub}.
             * A delegate is an instance of a class that implements this
             * interface and provides a replacement implementation for all the
             * methods of <code>javax.rmi.CORBA.Stub</code>.  If delegation is
             * enabled, each stub has an associated delegate.
             * Delegates are enabled by providing the delegate's class name as the
             * value of the
             * <code>javax.rmi.CORBA.StubClass</code>
             * system property.
             * @see Stub
             */
            // @ts-ignore
            interface StubDelegate {
                /**
                 * Delegation call for {@link Stub#hashCode}.
                 */
                // @ts-ignore
                hashCode(self: javax.rmi.CORBA.Stub): int
                /**
                 * Delegation call for {@link Stub#equals}.
                 */
                // @ts-ignore
                equals(self: javax.rmi.CORBA.Stub, obj: any): boolean
                /**
                 * Delegation call for {@link Stub#toString}.
                 */
                // @ts-ignore
                toString(self: javax.rmi.CORBA.Stub): java.lang.String
                /**
                 * Delegation call for {@link Stub#connect}.
                 */
                // @ts-ignore
                connect(self: javax.rmi.CORBA.Stub, orb: org.omg.CORBA.ORB): void
                /**
                 * Delegation call for
                 * <a href="{@docRoot}/serialized-form.html#javax.rmi.CORBA.Stub"><code>Stub.readObject(java.io.ObjectInputStream)</code></a>.
                 */
                // @ts-ignore
                readObject(self: javax.rmi.CORBA.Stub, s: java.io.ObjectInputStream): void
                /**
                 * Delegation call for
                 * <a href="{@docRoot}/serialized-form.html#javax.rmi.CORBA.Stub"><code>Stub.writeObject(java.io.ObjectOutputStream)</code></a>.
                 */
                // @ts-ignore
                writeObject(self: javax.rmi.CORBA.Stub, s: java.io.ObjectOutputStream): void
            }
        }
    }
}
