declare namespace javax {
    namespace management {
        namespace remote {
            /**
             * <p>A (Notification, Listener ID) pair.</p>
             * <p>This class is used to associate an emitted notification
             * with the listener ID to which it is targeted.</p>
             * @since 1.5
             */
            // @ts-ignore
            class TargetedNotification extends java.lang.Object implements java.io.Serializable {
                /**
                 * <p>Constructs a <code>TargetedNotification</code> object.  The
                 * object contains a pair (Notification, Listener ID).
                 * The Listener ID identifies the client listener to which that
                 * notification is targeted. The client listener ID is one
                 * previously returned by the connector server in response to an
                 * <code>addNotificationListener</code> request.</p>
                 * @param notification Notification emitted from the MBean server.
                 * @param listenerID   The ID of the listener to which this
                 *         notification is targeted.
                 * @exception IllegalArgumentException if the <var>listenerID</var>
                 *         or <var>notification</var> is null.
                 */
                // @ts-ignore
                constructor(notification: javax.management.Notification, listenerID: java.lang.Integer | number)
                /**
                 * <p>The emitted notification.</p>
                 * @return The notification.
                 */
                // @ts-ignore
                public getNotification(): javax.management.Notification
                /**
                 * <p>The ID of the listener to which the notification is
                 * targeted.</p>
                 * @return The listener ID.
                 */
                // @ts-ignore
                public getListenerID(): number
                /**
                 * Returns a textual representation of this Targeted Notification.
                 * @return a String representation of this Targeted Notification.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
