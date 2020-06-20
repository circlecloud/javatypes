declare namespace javax {
    namespace management {
        namespace remote {
            /**
             * <p>An object of this class implements the MBeanServer interface and
             * wraps another object that also implements that interface.
             * Typically, an implementation of this interface performs some action
             * in some or all methods of the <code>MBeanServer</code> interface
             * before and/or after forwarding the method to the wrapped object.
             * Examples include security checking and logging.</p>
             * @since 1.5
             */
            // @ts-ignore
            interface MBeanServerForwarder extends javax.management.MBeanServer {
                /**
                 * Returns the MBeanServer object to which requests will be forwarded.
                 * @return the MBeanServer object to which requests will be forwarded,
                 *  or null if there is none.
                 * @see #setMBeanServer
                 */
                // @ts-ignore
                getMBeanServer(): javax.management.MBeanServer
                /**
                 * Sets the MBeanServer object to which requests will be forwarded
                 * after treatment by this object.
                 * @param mbs the MBeanServer object to which requests will be forwarded.
                 * @exception IllegalArgumentException if this object is already
                 *  forwarding to an MBeanServer object or if <code>mbs</code> is
                 *  null or if <code>mbs</code> is identical to this object.
                 * @see #getMBeanServer
                 */
                // @ts-ignore
                setMBeanServer(mbs: javax.management.MBeanServer): void
            }
        }
    }
}
