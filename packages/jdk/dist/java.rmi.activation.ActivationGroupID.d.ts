declare namespace java {
    namespace rmi {
        namespace activation {
            /**
             * The identifier for a registered activation group serves several
             * purposes: <ul>
             * <li>identifies the group uniquely within the activation system, and
             * <li>contains a reference to the group's activation system so that the
             * group can contact its activation system when necessary.</ul><p>
             * The <code>ActivationGroupID</code> is returned from the call to
             * <code>ActivationSystem.registerGroup</code> and is used to identify
             * the group within the activation system. This group id is passed
             * as one of the arguments to the activation group's special constructor
             * when an activation group is created/recreated.
             * @author Ann Wollrath
             * @see ActivationGroup
             * @see ActivationGroupDesc
             * @since 1.2
             */
            // @ts-ignore
            class ActivationGroupID extends java.lang.Object implements java.io.Serializable {
                /**
                 * Constructs a unique group id.
                 * @param system the group's activation system
                 * @throws UnsupportedOperationException if and only if activation is
                 *          not supported by this implementation
                 * @since 1.2
                 */
                // @ts-ignore
                constructor(system: java.rmi.activation.ActivationSystem)
                /**
                 * Returns the group's activation system.
                 * @return the group's activation system
                 * @since 1.2
                 */
                // @ts-ignore
                getSystem(): java.rmi.activation.ActivationSystem
                /**
                 * Returns a hashcode for the group's identifier.  Two group
                 * identifiers that refer to the same remote group will have the
                 * same hash code.
                 * @see java.util.Hashtable
                 * @since 1.2
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Compares two group identifiers for content equality.
                 * Returns true if both of the following conditions are true:
                 * 1) the unique identifiers are equivalent (by content), and
                 * 2) the activation system specified in each
                 * refers to the same remote object.
                 * @param obj     the Object to compare with
                 * @return true if these Objects are equal; false otherwise.
                 * @see java.util.Hashtable
                 * @since 1.2
                 */
                // @ts-ignore
                equals(obj: any): boolean
            }
        }
    }
}
