declare namespace java {
    namespace rmi {
        namespace activation {
            /**
             * An <code>ActivationMonitor</code> is specific to an
             * <code>ActivationGroup</code> and is obtained when a group is
             * reported active via a call to
             * <code>ActivationSystem.activeGroup</code> (this is done
             * internally). An activation group is responsible for informing its
             * <code>ActivationMonitor</code> when either: its objects become active or
             * inactive, or the group as a whole becomes inactive.
             * @author Ann Wollrath
             * @see Activator
             * @see ActivationSystem
             * @see ActivationGroup
             * @since 1.2
             */
            // @ts-ignore
            interface ActivationMonitor extends java.rmi.Remote {
                /**
                 * An activation group calls its monitor's
                 * <code>inactiveObject</code> method when an object in its group
                 * becomes inactive (deactivates).  An activation group discovers
                 * that an object (that it participated in activating) in its VM
                 * is no longer active, via calls to the activation group's
                 * <code>inactiveObject</code> method. <p>
                 * The <code>inactiveObject</code> call informs the
                 * <code>ActivationMonitor</code> that the remote object reference
                 * it holds for the object with the activation identifier,
                 * <code>id</code>, is no longer valid. The monitor considers the
                 * reference associated with <code>id</code> as a stale reference.
                 * Since the reference is considered stale, a subsequent
                 * <code>activate</code> call for the same activation identifier
                 * results in re-activating the remote object.<p>
                 * @param id the object's activation identifier
                 * @exception UnknownObjectException if object is unknown
                 * @exception RemoteException if remote call fails
                 * @since 1.2
                 */
                // @ts-ignore
                inactiveObject(id: java.rmi.activation.ActivationID): void
                /**
                 * Informs that an object is now active. An <code>ActivationGroup</code>
                 * informs its monitor if an object in its group becomes active by
                 * other means than being activated directly (i.e., the object
                 * is registered and "activated" itself).
                 * @param id the active object's id
                 * @param obj the marshalled form of the object's stub
                 * @exception UnknownObjectException if object is unknown
                 * @exception RemoteException if remote call fails
                 * @since 1.2
                 */
                // @ts-ignore
                activeObject(id: java.rmi.activation.ActivationID, obj: java.rmi.MarshalledObject<any>): void
                /**
                 * Informs that the group is now inactive. The group will be
                 * recreated upon a subsequent request to activate an object
                 * within the group. A group becomes inactive when all objects
                 * in the group report that they are inactive.
                 * @param id the group's id
                 * @param incarnation the group's incarnation number
                 * @exception UnknownGroupException if group is unknown
                 * @exception RemoteException if remote call fails
                 * @since 1.2
                 */
                // @ts-ignore
                inactiveGroup(id: java.rmi.activation.ActivationGroupID, incarnation: number /*long*/): void
            }
        }
    }
}
