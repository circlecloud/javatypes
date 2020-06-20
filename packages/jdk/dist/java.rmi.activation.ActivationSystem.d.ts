declare namespace java {
    namespace rmi {
        namespace activation {
            /**
             * The <code>ActivationSystem</code> provides a means for registering
             * groups and "activatable" objects to be activated within those groups.
             * The <code>ActivationSystem</code> works closely with the
             * <code>Activator</code>, which activates objects registered via the
             * <code>ActivationSystem</code>, and the <code>ActivationMonitor</code>,
             * which obtains information about active and inactive objects,
             * and inactive groups.
             * @author Ann Wollrath
             * @see Activator
             * @see ActivationMonitor
             * @since 1.2
             */
            // @ts-ignore
            interface ActivationSystem extends java.rmi.Remote {
                /**
                 * The port to lookup the activation system.
                 */
                // @ts-ignore
                
                /**
                 * The <code>registerObject</code> method is used to register an
                 * activation descriptor, <code>desc</code>, and obtain an
                 * activation identifier for a activatable remote object. The
                 * <code>ActivationSystem</code> creates an
                 * <code>ActivationID</code> (a activation identifier) for the
                 * object specified by the descriptor, <code>desc</code>, and
                 * records, in stable storage, the activation descriptor and its
                 * associated identifier for later use. When the <code>Activator</code>
                 * receives an <code>activate</code> request for a specific identifier, it
                 * looks up the activation descriptor (registered previously) for
                 * the specified identifier and uses that information to activate
                 * the object. <p>
                 * @param desc the object's activation descriptor
                 * @return the activation id that can be used to activate the object
                 * @exception ActivationException if registration fails (e.g., database
                 *  update failure, etc).
                 * @exception UnknownGroupException if group referred to in
                 *  <code>desc</code> is not registered with this system
                 * @exception RemoteException if remote call fails
                 * @since 1.2
                 */
                // @ts-ignore
                registerObject(desc: java.rmi.activation.ActivationDesc): java.rmi.activation.ActivationID
                /**
                 * Remove the activation id and associated descriptor previously
                 * registered with the <code>ActivationSystem</code>; the object
                 * can no longer be activated via the object's activation id.
                 * @param id the object's activation id (from previous registration)
                 * @exception ActivationException if unregister fails (e.g., database
                 *  update failure, etc).
                 * @exception UnknownObjectException if object is unknown (not registered)
                 * @exception RemoteException if remote call fails
                 * @since 1.2
                 */
                // @ts-ignore
                unregisterObject(id: java.rmi.activation.ActivationID): void
                /**
                 * Register the activation group. An activation group must be
                 * registered with the <code>ActivationSystem</code> before objects
                 * can be registered within that group.
                 * @param desc the group's descriptor
                 * @return an identifier for the group
                 * @exception ActivationException if group registration fails
                 * @exception RemoteException if remote call fails
                 * @since 1.2
                 */
                // @ts-ignore
                registerGroup(desc: java.rmi.activation.ActivationGroupDesc): java.rmi.activation.ActivationGroupID
                /**
                 * Callback to inform activation system that group is now
                 * active. This call is made internally by the
                 * <code>ActivationGroup.createGroup</code> method to inform
                 * the <code>ActivationSystem</code> that the group is now
                 * active.
                 * @param id the activation group's identifier
                 * @param group the group's instantiator
                 * @param incarnation the group's incarnation number
                 * @return monitor for activation group
                 * @exception UnknownGroupException if group is not registered
                 * @exception ActivationException if a group for the specified
                 *  <code>id</code> is already active and that group is not equal
                 *  to the specified <code>group</code> or that group has a different
                 *  <code>incarnation</code> than the specified <code>group</code>
                 * @exception RemoteException if remote call fails
                 * @since 1.2
                 */
                // @ts-ignore
                activeGroup(id: java.rmi.activation.ActivationGroupID, group: java.rmi.activation.ActivationInstantiator, incarnation: number /*long*/): java.rmi.activation.ActivationMonitor
                /**
                 * Remove the activation group. An activation group makes this call back
                 * to inform the activator that the group should be removed (destroyed).
                 * If this call completes successfully, objects can no longer be
                 * registered or activated within the group. All information of the
                 * group and its associated objects is removed from the system.
                 * @param id the activation group's identifier
                 * @exception ActivationException if unregister fails (e.g., database
                 *  update failure, etc).
                 * @exception UnknownGroupException if group is not registered
                 * @exception RemoteException if remote call fails
                 * @since 1.2
                 */
                // @ts-ignore
                unregisterGroup(id: java.rmi.activation.ActivationGroupID): void
                /**
                 * Shutdown the activation system. Destroys all groups spawned by
                 * the activation daemon and exits the activation daemon.
                 * @exception RemoteException if failed to contact/shutdown the activation
                 *  daemon
                 * @since 1.2
                 */
                // @ts-ignore
                shutdown(): void
                /**
                 * Set the activation descriptor, <code>desc</code> for the object with
                 * the activation identifier, <code>id</code>. The change will take
                 * effect upon subsequent activation of the object.
                 * @param id the activation identifier for the activatable object
                 * @param desc the activation descriptor for the activatable object
                 * @exception UnknownGroupException the group associated with
                 *  <code>desc</code> is not a registered group
                 * @exception UnknownObjectException the activation <code>id</code>
                 *  is not registered
                 * @exception ActivationException for general failure (e.g., unable
                 *  to update log)
                 * @exception RemoteException if remote call fails
                 * @return the previous value of the activation descriptor
                 * @see #getActivationDesc
                 * @since 1.2
                 */
                // @ts-ignore
                setActivationDesc(id: java.rmi.activation.ActivationID, desc: java.rmi.activation.ActivationDesc): java.rmi.activation.ActivationDesc
                /**
                 * Set the activation group descriptor, <code>desc</code> for the object
                 * with the activation group identifier, <code>id</code>. The change will
                 * take effect upon subsequent activation of the group.
                 * @param id the activation group identifier for the activation group
                 * @param desc the activation group descriptor for the activation group
                 * @exception UnknownGroupException the group associated with
                 *  <code>id</code> is not a registered group
                 * @exception ActivationException for general failure (e.g., unable
                 *  to update log)
                 * @exception RemoteException if remote call fails
                 * @return the previous value of the activation group descriptor
                 * @see #getActivationGroupDesc
                 * @since 1.2
                 */
                // @ts-ignore
                setActivationGroupDesc(id: java.rmi.activation.ActivationGroupID, desc: java.rmi.activation.ActivationGroupDesc): java.rmi.activation.ActivationGroupDesc
                /**
                 * Returns the activation descriptor, for the object with the activation
                 * identifier, <code>id</code>.
                 * @param id the activation identifier for the activatable object
                 * @exception UnknownObjectException if <code>id</code> is not registered
                 * @exception ActivationException for general failure
                 * @exception RemoteException if remote call fails
                 * @return the activation descriptor
                 * @see #setActivationDesc
                 * @since 1.2
                 */
                // @ts-ignore
                getActivationDesc(id: java.rmi.activation.ActivationID): java.rmi.activation.ActivationDesc
                /**
                 * Returns the activation group descriptor, for the group
                 * with the activation group identifier, <code>id</code>.
                 * @param id the activation group identifier for the group
                 * @exception UnknownGroupException if <code>id</code> is not registered
                 * @exception ActivationException for general failure
                 * @exception RemoteException if remote call fails
                 * @return the activation group descriptor
                 * @see #setActivationGroupDesc
                 * @since 1.2
                 */
                // @ts-ignore
                getActivationGroupDesc(id: java.rmi.activation.ActivationGroupID): java.rmi.activation.ActivationGroupDesc
            }
        }
    }
}
