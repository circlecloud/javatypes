declare namespace java {
    namespace rmi {
        namespace activation {
            /**
             * Activation makes use of special identifiers to denote remote
             * objects that can be activated over time. An activation identifier
             * (an instance of the class <code>ActivationID</code>) contains several
             * pieces of information needed for activating an object:
             * <ul>
             * <li> a remote reference to the object's activator (a {@link
             * java.rmi.server.RemoteRef RemoteRef}
             * instance), and
             * <li> a unique identifier (a {@link java.rmi.server.UID UID}
             * instance) for the object. </ul> <p>
             * An activation identifier for an object can be obtained by registering
             * an object with the activation system. Registration is accomplished
             * in a few ways: <ul>
             * <li>via the <code>Activatable.register</code> method
             * <li>via the first <code>Activatable</code> constructor (that takes
             * three arguments and both registers and exports the object, and
             * <li>via the first <code>Activatable.exportObject</code> method
             * that takes the activation descriptor, object and port as arguments;
             * this method both registers and exports the object. </ul>
             * @author Ann Wollrath
             * @see Activatable
             * @since 1.2
             */
            // @ts-ignore
            class ActivationID extends java.lang.Object implements java.io.Serializable {
                /**
                 * The constructor for <code>ActivationID</code> takes a single
                 * argument, activator, that specifies a remote reference to the
                 * activator responsible for activating the object associated with
                 * this identifier. An instance of <code>ActivationID</code> is globally
                 * unique.
                 * @param activator reference to the activator responsible for
                 *  activating the object
                 * @throws UnsupportedOperationException if and only if activation is
                 *          not supported by this implementation
                 * @since 1.2
                 */
                // @ts-ignore
                constructor(activator: java.rmi.activation.Activator)
                /**
                 * Activate the object for this id.
                 * @param force if true, forces the activator to contact the group
                 *  when activating the object (instead of returning a cached reference);
                 *  if false, returning a cached value is acceptable.
                 * @return the reference to the active remote object
                 * @exception ActivationException if activation fails
                 * @exception UnknownObjectException if the object is unknown
                 * @exception RemoteException if remote call fails
                 * @since 1.2
                 */
                // @ts-ignore
                public activate(force: boolean): java.rmi.Remote
                /**
                 * Returns a hashcode for the activation id.  Two identifiers that
                 * refer to the same remote object will have the same hash code.
                 * @see java.util.Hashtable
                 * @since 1.2
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Compares two activation ids for content equality.
                 * Returns true if both of the following conditions are true:
                 * 1) the unique identifiers equivalent (by content), and
                 * 2) the activator specified in each identifier
                 * refers to the same remote object.
                 * @param obj     the Object to compare with
                 * @return true if these Objects are equal; false otherwise.
                 * @see java.util.Hashtable
                 * @since 1.2
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
            }
        }
    }
}
