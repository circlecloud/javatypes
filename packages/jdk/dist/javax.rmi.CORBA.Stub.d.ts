declare namespace javax {
    namespace rmi {
        namespace CORBA {
            /**
             * Base class from which all RMI-IIOP stubs must inherit.
             */
            // @ts-ignore
            class Stub extends org.omg.CORBA_2_3.portable.ObjectImpl implements java.io.Serializable {
                // @ts-ignore
                constructor()
                /**
                 * Returns a hash code value for the object which is the same for all stubs
                 * that represent the same remote object.
                 * @return the hash code value.
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Compares two stubs for equality. Returns <code>true</code> when used to compare stubs
                 * that represent the same remote object, and <code>false</code> otherwise.
                 * @param obj the reference object with which to compare.
                 * @return <code>true</code> if this object is the same as the <code>obj</code>
                 *           argument; <code>false</code> otherwise.
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Returns a string representation of this stub. Returns the same string
                 * for all stubs that represent the same remote object.
                 * @return a string representation of this stub.
                 */
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Connects this stub to an ORB. Required after the stub is deserialized
                 * but not after it is demarshalled by an ORB stream. If an unconnected
                 * stub is passed to an ORB stream for marshalling, it is implicitly
                 * connected to that ORB. Application code should not call this method
                 * directly, but should call the portable wrapper method
                 * {@link javax.rmi.PortableRemoteObject#connect}.
                 * @param orb the ORB to connect to.
                 * @exception RemoteException if the stub is already connected to a different
                 *  ORB, or if the stub does not represent an exported remote or local object.
                 */
                // @ts-ignore
                connect(orb: org.omg.CORBA.ORB): void
            }
        }
    }
}
