declare namespace java {
    namespace rmi {
        namespace server {
            /**
             * The <code>RemoteObject</code> class implements the
             * <code>java.lang.Object</code> behavior for remote objects.
             * <code>RemoteObject</code> provides the remote semantics of Object by
             * implementing methods for hashCode, equals, and toString.
             * @author Ann Wollrath
             * @author Laird Dornin
             * @author Peter Jones
             * @since JDK1.1
             */
            // @ts-ignore
            abstract class RemoteObject extends java.lang.Object implements java.rmi.Remote, java.io.Serializable {
                /**
                 * Creates a remote object.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a remote object, initialized with the specified remote
                 * reference.
                 * @param newref remote reference
                 */
                // @ts-ignore
                constructor(newref: java.rmi.server.RemoteRef)
                /**
                 * The object's remote reference.
                 */
                // @ts-ignore
                ref: java.rmi.server.RemoteRef
                /**
                 * Returns the remote reference for the remote object.
                 * <p>Note: The object returned from this method may be an instance of
                 * an implementation-specific class.  The <code>RemoteObject</code>
                 * class ensures serialization portability of its instances' remote
                 * references through the behavior of its custom
                 * <code>writeObject</code> and <code>readObject</code> methods.  An
                 * instance of <code>RemoteRef</code> should not be serialized outside
                 * of its <code>RemoteObject</code> wrapper instance or the result may
                 * be unportable.
                 * @return remote reference for the remote object
                 * @since 1.2
                 */
                // @ts-ignore
                public getRef(): java.rmi.server.RemoteRef
                /**
                 * Returns the stub for the remote object <code>obj</code> passed
                 * as a parameter. This operation is only valid <i>after</i>
                 * the object has been exported.
                 * @param obj the remote object whose stub is needed
                 * @return the stub for the remote object, <code>obj</code>.
                 * @exception NoSuchObjectException if the stub for the
                 *  remote object could not be found.
                 * @since 1.2
                 */
                // @ts-ignore
                public static toStub(obj: java.rmi.Remote): java.rmi.Remote
                /**
                 * Returns a hashcode for a remote object.  Two remote object stubs
                 * that refer to the same remote object will have the same hash code
                 * (in order to support remote objects as keys in hash tables).
                 * @see java.util.Hashtable
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Compares two remote objects for equality.
                 * Returns a boolean that indicates whether this remote object is
                 * equivalent to the specified Object. This method is used when a
                 * remote object is stored in a hashtable.
                 * If the specified Object is not itself an instance of RemoteObject,
                 * then this method delegates by returning the result of invoking the
                 * <code>equals</code> method of its parameter with this remote object
                 * as the argument.
                 * @param obj     the Object to compare with
                 * @return true if these Objects are equal; false otherwise.
                 * @see java.util.Hashtable
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                /**
                 * Returns a String that represents the value of this remote object.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
