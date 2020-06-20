declare namespace java {
    namespace beans {
        namespace beancontext {
            /**
             * <p>
             * Compliant BeanContexts fire events on this interface when the state of
             * the membership of the BeanContext changes.
             * </p>
             * @author Laurence P. G. Cable
             * @since 1.2
             * @see java.beans.beancontext.BeanContext
             */
            // @ts-ignore
            interface BeanContextMembershipListener extends java.util.EventListener {
                /**
                 * Called when a child or list of children is added to a
                 * <code>BeanContext</code> that this listener is registered with.
                 * @param bcme The <code>BeanContextMembershipEvent</code>
                 *  describing the change that occurred.
                 */
                // @ts-ignore
                childrenAdded(bcme: java.beans.beancontext.BeanContextMembershipEvent): void
                /**
                 * Called when a child or list of children is removed
                 * from a <code>BeanContext</code> that this listener
                 * is registered with.
                 * @param bcme The <code>BeanContextMembershipEvent</code>
                 *  describing the change that occurred.
                 */
                // @ts-ignore
                childrenRemoved(bcme: java.beans.beancontext.BeanContextMembershipEvent): void
            }
        }
    }
}
