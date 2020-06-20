declare namespace java {
    namespace rmi {
        namespace activation {
            /**
             * An <code>UnknownObjectException</code> is thrown by methods of classes and
             * interfaces in the <code>java.rmi.activation</code> package when the
             * <code>ActivationID</code> parameter to the method is determined to be
             * invalid.  An <code>ActivationID</code> is invalid if it is not currently
             * known by the <code>ActivationSystem</code>.  An <code>ActivationID</code>
             * is obtained by the <code>ActivationSystem.registerObject</code> method.
             * An <code>ActivationID</code> is also obtained during the
             * <code>Activatable.register</code> call.
             * @author Ann Wollrath
             * @since 1.2
             * @see java.rmi.activation.Activatable
             * @see java.rmi.activation.ActivationGroup
             * @see java.rmi.activation.ActivationID
             * @see java.rmi.activation.ActivationMonitor
             * @see java.rmi.activation.ActivationSystem
             * @see java.rmi.activation.Activator
             */
            // @ts-ignore
            class UnknownObjectException extends java.rmi.activation.ActivationException {
                /**
                 * Constructs an <code>UnknownObjectException</code> with the specified
                 * detail message.
                 * @param s the detail message
                 * @since 1.2
                 */
                // @ts-ignore
                constructor(s: string)
            }
        }
    }
}
