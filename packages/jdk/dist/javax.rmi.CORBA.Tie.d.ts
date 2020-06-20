declare namespace javax {
    namespace rmi {
        namespace CORBA {
            /**
             * Defines methods which all RMI-IIOP server side ties must implement.
             */
            // @ts-ignore
            interface Tie extends org.omg.CORBA.portable.InvokeHandler {
                /**
                 * Returns an object reference for the target object represented by
                 * this tie.
                 * @return an object reference for the target object.
                 */
                // @ts-ignore
                thisObject(): org.omg.CORBA.Object
                /**
                 * Deactivates the target object represented by this tie.
                 */
                // @ts-ignore
                deactivate(): void
                /**
                 * Returns the ORB for this tie.
                 * @return the ORB.
                 */
                // @ts-ignore
                orb(): org.omg.CORBA.ORB
                /**
                 * Sets the ORB for this tie.
                 * @param orb the ORB.
                 */
                // @ts-ignore
                orb(orb: org.omg.CORBA.ORB): void
                /**
                 * Called by {@link Util#registerTarget} to set the target
                 * for this tie.
                 * @param target the object to use as the target for this tie.
                 */
                // @ts-ignore
                setTarget(target: java.rmi.Remote): void
                /**
                 * Returns the target for this tie.
                 * @return the target.
                 */
                // @ts-ignore
                getTarget(): java.rmi.Remote
            }
        }
    }
}
