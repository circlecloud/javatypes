declare namespace java {
    namespace rmi {
        namespace activation {
            /**
             * An activation group descriptor contains the information necessary to
             * create/recreate an activation group in which to activate objects.
             * Such a descriptor contains: <ul>
             * <li> the group's class name,
             * <li> the group's code location (the location of the group's class), and
             * <li> a "marshalled" object that can contain group specific
             * initialization data. </ul> <p>
             * The group's class must be a concrete subclass of
             * <code>ActivationGroup</code>. A subclass of
             * <code>ActivationGroup</code> is created/recreated via the
             * <code>ActivationGroup.createGroup</code> static method that invokes
             * a special constructor that takes two arguments: <ul>
             * <li> the group's <code>ActivationGroupID</code>, and
             * <li> the group's initialization data (in a
             * <code>java.rmi.MarshalledObject</code>)</ul><p>
             * @author Ann Wollrath
             * @since 1.2
             * @see ActivationGroup
             * @see ActivationGroupID
             */
            // @ts-ignore
            class ActivationGroupDesc extends java.lang.Object implements java.io.Serializable {
                /**
                 * Constructs a group descriptor that uses the system defaults for group
                 * implementation and code location.  Properties specify Java
                 * environment overrides (which will override system properties in
                 * the group implementation's VM).  The command
                 * environment can control the exact command/options used in
                 * starting the child VM, or can be <code>null</code> to accept
                 * rmid's default.
                 * <p>This constructor will create an <code>ActivationGroupDesc</code>
                 * with a <code>null</code> group class name, which indicates the system's
                 * default <code>ActivationGroup</code> implementation.
                 * @param overrides the set of properties to set when the group is
                 *  recreated.
                 * @param cmd the controlling options for executing the VM in
                 *  another process (or <code>null</code>).
                 * @since 1.2
                 */
                // @ts-ignore
                constructor(overrides: java.util.Properties, cmd: java.rmi.activation.ActivationGroupDesc.CommandEnvironment)
                /**
                 * Specifies an alternate group implementation and execution
                 * environment to be used for the group.
                 * @param className the group's package qualified class name or
                 *  <code>null</code>. A <code>null</code> group class name indicates
                 *  the system's default <code>ActivationGroup</code> implementation.
                 * @param location the location from where to load the group's
                 *  class
                 * @param data the group's initialization data contained in
                 *  marshalled form (could contain properties, for example)
                 * @param overrides a properties map which will override those set
                 *  by default in the subprocess environment (will be translated
                 *  into <code>-D</code> options), or <code>null</code>.
                 * @param cmd the controlling options for executing the VM in
                 *  another process (or <code>null</code>).
                 * @since 1.2
                 */
                // @ts-ignore
                constructor(className: java.lang.String | string, location: java.lang.String | string, data: java.rmi.MarshalledObject<any>, overrides: java.util.Properties, cmd: java.rmi.activation.ActivationGroupDesc.CommandEnvironment)
                /**
                 * Returns the group's class name (possibly <code>null</code>).  A
                 * <code>null</code> group class name indicates the system's default
                 * <code>ActivationGroup</code> implementation.
                 * @return the group's class name
                 * @since 1.2
                 */
                // @ts-ignore
                public getClassName(): string
                /**
                 * Returns the group's code location.
                 * @return the group's code location
                 * @since 1.2
                 */
                // @ts-ignore
                public getLocation(): string
                /**
                 * Returns the group's initialization data.
                 * @return the group's initialization data
                 * @since 1.2
                 */
                // @ts-ignore
                public getData(): java.rmi.MarshalledObject<any>
                /**
                 * Returns the group's property-override list.
                 * @return the property-override list, or <code>null</code>
                 * @since 1.2
                 */
                // @ts-ignore
                public getPropertyOverrides(): java.util.Properties
                /**
                 * Returns the group's command-environment control object.
                 * @return the command-environment object, or <code>null</code>
                 * @since 1.2
                 */
                // @ts-ignore
                public getCommandEnvironment(): java.rmi.activation.ActivationGroupDesc.CommandEnvironment
                /**
                 * Compares two activation group descriptors for content equality.
                 * @param obj     the Object to compare with
                 * @return true if these Objects are equal; false otherwise.
                 * @see java.util.Hashtable
                 * @since 1.2
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                /**
                 * Produce identical numbers for similar <code>ActivationGroupDesc</code>s.
                 * @return an integer
                 * @see java.util.Hashtable
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
            }
        }
    }
}
