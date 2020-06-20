declare namespace javax {
    namespace naming {
        namespace ldap {
            /**
             * This class represents an event fired in response to an unsolicited
             * notification sent by the LDAP server.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @author Vincent Ryan
             * @see UnsolicitedNotification
             * @see UnsolicitedNotificationListener
             * @see javax.naming.event.EventContext#addNamingListener
             * @see javax.naming.event.EventDirContext#addNamingListener
             * @see javax.naming.event.EventContext#removeNamingListener
             * @since 1.3
             */
            // @ts-ignore
            class UnsolicitedNotificationEvent extends java.util.EventObject {
                /**
                 * Constructs a new instance of <tt>UnsolicitedNotificationEvent</tt>.
                 * @param src The non-null source that fired the event.
                 * @param notice The non-null unsolicited notification.
                 */
                // @ts-ignore
                constructor(src: any, notice: javax.naming.ldap.UnsolicitedNotification)
                /**
                 * Returns the unsolicited notification.
                 * @return The non-null unsolicited notification that caused this
                 *  event to be fired.
                 */
                // @ts-ignore
                getNotification(): javax.naming.ldap.UnsolicitedNotification
                /**
                 * Invokes the <tt>notificationReceived()</tt> method on
                 * a listener using this event.
                 * @param listener The non-null listener on which to invoke
                 *  <tt>notificationReceived</tt>.
                 */
                // @ts-ignore
                dispatch(listener: javax.naming.ldap.UnsolicitedNotificationListener): void
            }
        }
    }
}
