declare namespace java {
    namespace beans {
        namespace beancontext {
            /**
             * A <code>BeanContextMembershipEvent</code> encapsulates
             * the list of children added to, or removed from,
             * the membership of a particular <code>BeanContext</code>.
             * An instance of this event is fired whenever a successful
             * add(), remove(), retainAll(), removeAll(), or clear() is
             * invoked on a given <code>BeanContext</code> instance.
             * Objects interested in receiving events of this type must
             * implement the <code>BeanContextMembershipListener</code>
             * interface, and must register their intent via the
             * <code>BeanContext</code>'s
             * <code>addBeanContextMembershipListener(BeanContextMembershipListener bcml)
             * </code> method.
             * @author Laurence P. G. Cable
             * @since 1.2
             * @see java.beans.beancontext.BeanContext
             * @see java.beans.beancontext.BeanContextEvent
             * @see java.beans.beancontext.BeanContextMembershipListener
             */
            // @ts-ignore
            class BeanContextMembershipEvent extends java.beans.beancontext.BeanContextEvent {
                /**
                 * Contruct a BeanContextMembershipEvent
                 * @param bc        The BeanContext source
                 * @param changes   The Children affected
                 * @throws NullPointerException if <CODE>changes</CODE> is <CODE>null</CODE>
                 */
                // @ts-ignore
                constructor(bc: java.beans.beancontext.BeanContext, changes: Array)
                /**
                 * Contruct a BeanContextMembershipEvent
                 * @param bc        The BeanContext source
                 * @param changes   The Children effected
                 * @exception NullPointerException if changes associated with this
                 *                   event are null.
                 */
                // @ts-ignore
                constructor(bc: java.beans.beancontext.BeanContext, changes: any[])
                /**
                 * The list of children affected by this
                 * event notification.
                 */
                // @ts-ignore
                children: Array
                /**
                 * Gets the number of children affected by the notification.
                 * @return the number of children affected by the notification
                 */
                // @ts-ignore
                size(): int
                /**
                 * Is the child specified affected by the event?
                 * @return <code>true</code> if affected, <code>false</code>
                 *  if not
                 * @param child the object to check for being affected
                 */
                // @ts-ignore
                contains(child: any): boolean
                /**
                 * Gets the array of children affected by this event.
                 * @return the array of children affected
                 */
                // @ts-ignore
                toArray(): java.lang.Object[]
                /**
                 * Gets the array of children affected by this event.
                 * @return the array of children effected
                 */
                // @ts-ignore
                iterator(): java.util.Iterator
            }
        }
    }
}
