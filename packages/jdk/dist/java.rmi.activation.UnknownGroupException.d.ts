declare namespace java {
    namespace rmi {
        namespace activation {
            /**
             * An <code>UnknownGroupException</code> is thrown by methods of classes and
             * interfaces in the <code>java.rmi.activation</code> package when the
             * <code>ActivationGroupID</code> parameter to the method is determined to be
             * invalid, i.e., not known by the <code>ActivationSystem</code>.  An
             * <code>UnknownGroupException</code> is also thrown if the
             * <code>ActivationGroupID</code> in an <code>ActivationDesc</code> refers to
             * a group that is not registered with the <code>ActivationSystem</code>
             * @author Ann Wollrath
             * @since 1.2
             * @see java.rmi.activation.Activatable
             * @see java.rmi.activation.ActivationGroup
             * @see java.rmi.activation.ActivationGroupID
             * @see java.rmi.activation.ActivationMonitor
             * @see java.rmi.activation.ActivationSystem
             */
            // @ts-ignore
            class UnknownGroupException extends java.rmi.activation.ActivationException {
                /**
                 * Constructs an <code>UnknownGroupException</code> with the specified
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
