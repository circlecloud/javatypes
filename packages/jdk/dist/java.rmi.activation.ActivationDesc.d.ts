declare namespace java {
    namespace rmi {
        namespace activation {
            /**
             * An activation descriptor contains the information necessary to
             * activate an object: <ul>
             * <li> the object's group identifier,
             * <li> the object's fully-qualified class name,
             * <li> the object's code location (the location of the class), a codebase URL
             * path,
             * <li> the object's restart "mode", and,
             * <li> a "marshalled" object that can contain object specific
             * initialization data. </ul>
             * <p>A descriptor registered with the activation system can be used to
             * recreate/activate the object specified by the descriptor. The
             * <code>MarshalledObject</code> in the object's descriptor is passed
             * as the second argument to the remote object's constructor for
             * object to use during reinitialization/activation.
             * @author Ann Wollrath
             * @since 1.2
             * @see java.rmi.activation.Activatable
             */
            // @ts-ignore
            class ActivationDesc extends java.lang.Object implements java.io.Serializable {
                /**
                 * Constructs an object descriptor for an object whose class name
                 * is <code>className</code>, that can be loaded from the
                 * code <code>location</code> and whose initialization
                 * information is <code>data</code>. If this form of the constructor
                 * is used, the <code>groupID</code> defaults to the current id for
                 * <code>ActivationGroup</code> for this VM. All objects with the
                 * same <code>ActivationGroupID</code> are activated in the same VM.
                 * <p>Note that objects specified by a descriptor created with this
                 * constructor will only be activated on demand (by default, the restart
                 * mode is <code>false</code>).  If an activatable object requires restart
                 * services, use one of the <code>ActivationDesc</code> constructors that
                 * takes a boolean parameter, <code>restart</code>.
                 * <p> This constructor will throw <code>ActivationException</code> if
                 * there is no current activation group for this VM.  To create an
                 * <code>ActivationGroup</code> use the
                 * <code>ActivationGroup.createGroup</code> method.
                 * @param className the object's fully package qualified class name
                 * @param location the object's code location (from where the class is
                 *  loaded)
                 * @param data the object's initialization (activation) data contained
                 *  in marshalled form.
                 * @exception ActivationException if the current group is nonexistent
                 * @exception UnsupportedOperationException if and only if activation is
                 *  not supported by this implementation
                 * @since 1.2
                 */
                // @ts-ignore
                constructor(className: string, location: string, data: java.rmi.MarshalledObject<any>)
                /**
                 * Constructs an object descriptor for an object whose class name
                 * is <code>className</code>, that can be loaded from the
                 * code <code>location</code> and whose initialization
                 * information is <code>data</code>. If this form of the constructor
                 * is used, the <code>groupID</code> defaults to the current id for
                 * <code>ActivationGroup</code> for this VM. All objects with the
                 * same <code>ActivationGroupID</code> are activated in the same VM.
                 * <p>This constructor will throw <code>ActivationException</code> if
                 * there is no current activation group for this VM.  To create an
                 * <code>ActivationGroup</code> use the
                 * <code>ActivationGroup.createGroup</code> method.
                 * @param className the object's fully package qualified class name
                 * @param location the object's code location (from where the class is
                 *  loaded)
                 * @param data the object's initialization (activation) data contained
                 *  in marshalled form.
                 * @param restart if true, the object is restarted (reactivated) when
                 *  either the activator is restarted or the object's activation group
                 *  is restarted after an unexpected crash; if false, the object is only
                 *  activated on demand.  Specifying <code>restart</code> to be
                 *  <code>true</code> does not force an initial immediate activation of
                 *  a newly registered object;  initial activation is lazy.
                 * @exception ActivationException if the current group is nonexistent
                 * @exception UnsupportedOperationException if and only if activation is
                 *  not supported by this implementation
                 * @since 1.2
                 */
                // @ts-ignore
                constructor(className: string, location: string, data: java.rmi.MarshalledObject<any>, restart: boolean)
                /**
                 * Constructs an object descriptor for an object whose class name
                 * is <code>className</code> that can be loaded from the
                 * code <code>location</code> and whose initialization
                 * information is <code>data</code>. All objects with the same
                 * <code>groupID</code> are activated in the same Java VM.
                 * <p>Note that objects specified by a descriptor created with this
                 * constructor will only be activated on demand (by default, the restart
                 * mode is <code>false</code>).  If an activatable object requires restart
                 * services, use one of the <code>ActivationDesc</code> constructors that
                 * takes a boolean parameter, <code>restart</code>.
                 * @param groupID the group's identifier (obtained from registering
                 *  <code>ActivationSystem.registerGroup</code> method). The group
                 *  indicates the VM in which the object should be activated.
                 * @param className the object's fully package-qualified class name
                 * @param location the object's code location (from where the class is
                 *  loaded)
                 * @param data  the object's initialization (activation) data contained
                 *  in marshalled form.
                 * @exception IllegalArgumentException if <code>groupID</code> is null
                 * @exception UnsupportedOperationException if and only if activation is
                 *  not supported by this implementation
                 * @since 1.2
                 */
                // @ts-ignore
                constructor(groupID: java.rmi.activation.ActivationGroupID, className: string, location: string, data: java.rmi.MarshalledObject<any>)
                /**
                 * Constructs an object descriptor for an object whose class name
                 * is <code>className</code> that can be loaded from the
                 * code <code>location</code> and whose initialization
                 * information is <code>data</code>. All objects with the same
                 * <code>groupID</code> are activated in the same Java VM.
                 * @param groupID the group's identifier (obtained from registering
                 *  <code>ActivationSystem.registerGroup</code> method). The group
                 *  indicates the VM in which the object should be activated.
                 * @param className the object's fully package-qualified class name
                 * @param location the object's code location (from where the class is
                 *  loaded)
                 * @param data  the object's initialization (activation) data contained
                 *  in marshalled form.
                 * @param restart if true, the object is restarted (reactivated) when
                 *  either the activator is restarted or the object's activation group
                 *  is restarted after an unexpected crash; if false, the object is only
                 *  activated on demand.  Specifying <code>restart</code> to be
                 *  <code>true</code> does not force an initial immediate activation of
                 *  a newly registered object;  initial activation is lazy.
                 * @exception IllegalArgumentException if <code>groupID</code> is null
                 * @exception UnsupportedOperationException if and only if activation is
                 *  not supported by this implementation
                 * @since 1.2
                 */
                // @ts-ignore
                constructor(groupID: java.rmi.activation.ActivationGroupID, className: string, location: string, data: java.rmi.MarshalledObject<any>, restart: boolean)
                /**
                 * Returns the group identifier for the object specified by this
                 * descriptor. A group provides a way to aggregate objects into a
                 * single Java virtual machine. RMI creates/activates objects with
                 * the same <code>groupID</code> in the same virtual machine.
                 * @return the group identifier
                 * @since 1.2
                 */
                // @ts-ignore
                getGroupID(): java.rmi.activation.ActivationGroupID
                /**
                 * Returns the class name for the object specified by this
                 * descriptor.
                 * @return the class name
                 * @since 1.2
                 */
                // @ts-ignore
                getClassName(): java.lang.String
                /**
                 * Returns the code location for the object specified by
                 * this descriptor.
                 * @return the code location
                 * @since 1.2
                 */
                // @ts-ignore
                getLocation(): java.lang.String
                /**
                 * Returns a "marshalled object" containing intialization/activation
                 * data for the object specified by this descriptor.
                 * @return the object specific "initialization" data
                 * @since 1.2
                 */
                // @ts-ignore
                getData(): java.rmi.MarshalledObject<?>
                /**
                 * Returns the "restart" mode of the object associated with
                 * this activation descriptor.
                 * @return true if the activatable object associated with this
                 *  activation descriptor is restarted via the activation
                 *  daemon when either the daemon comes up or the object's group
                 *  is restarted after an unexpected crash; otherwise it returns false,
                 *  meaning that the object is only activated on demand via a
                 *  method call.  Note that if the restart mode is <code>true</code>, the
                 *  activator does not force an initial immediate activation of
                 *  a newly registered object;  initial activation is lazy.
                 * @since 1.2
                 */
                // @ts-ignore
                getRestartMode(): boolean
                /**
                 * Compares two activation descriptors for content equality.
                 * @param obj     the Object to compare with
                 * @return true if these Objects are equal; false otherwise.
                 * @see java.util.Hashtable
                 * @since 1.2
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Return the same hashCode for similar <code>ActivationDesc</code>s.
                 * @return an integer
                 * @see java.util.Hashtable
                 */
                // @ts-ignore
                hashCode(): int
            }
        }
    }
}
