declare namespace javax {
    namespace management {
        namespace relation {
            /**
             * Filter for {@link MBeanServerNotification}.
             * This filter filters MBeanServerNotification notifications by
             * selecting the ObjectNames of interest and the operations (registration,
             * unregistration, both) of interest (corresponding to notification
             * types).
             * <p>The <b>serialVersionUID</b> of this class is <code>2605900539589789736L</code>.
             * @since 1.5
             */
            // @ts-ignore
            class MBeanServerNotificationFilter extends javax.management.NotificationFilterSupport {
                /**
                 * Creates a filter selecting all MBeanServerNotification notifications for
                 * all ObjectNames.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Disables any MBeanServerNotification (all ObjectNames are
                 * deselected).
                 */
                // @ts-ignore
                disableAllObjectNames(): void
                /**
                 * Disables MBeanServerNotifications concerning given ObjectName.
                 * @param objectName  ObjectName no longer of interest
                 * @exception IllegalArgumentException  if the given ObjectName is null
                 */
                // @ts-ignore
                disableObjectName(objectName: javax.management.ObjectName): void
                /**
                 * Enables all MBeanServerNotifications (all ObjectNames are selected).
                 */
                // @ts-ignore
                enableAllObjectNames(): void
                /**
                 * Enables MBeanServerNotifications concerning given ObjectName.
                 * @param objectName  ObjectName of interest
                 * @exception IllegalArgumentException  if the given ObjectName is null
                 */
                // @ts-ignore
                enableObjectName(objectName: javax.management.ObjectName): void
                /**
                 * Gets all the ObjectNames enabled.
                 * @return Vector of ObjectNames:
                 *  <P>- null means all ObjectNames are implicitly selected, except the
                 *  ObjectNames explicitly deselected
                 *  <P>- empty means all ObjectNames are deselected, i.e. no ObjectName
                 *  selected.
                 */
                // @ts-ignore
                getEnabledObjectNames(): java.util.Vector<javax.management.ObjectName>
                /**
                 * Gets all the ObjectNames disabled.
                 * @return Vector of ObjectNames:
                 *  <P>- null means all ObjectNames are implicitly deselected, except the
                 *  ObjectNames explicitly selected
                 *  <P>- empty means all ObjectNames are selected, i.e. no ObjectName
                 *  deselected.
                 */
                // @ts-ignore
                getDisabledObjectNames(): java.util.Vector<javax.management.ObjectName>
                /**
                 * Invoked before sending the specified notification to the listener.
                 * <P>If:
                 * <P>- the ObjectName of the concerned MBean is selected (explicitly OR
                 * (implicitly and not explicitly deselected))
                 * <P>AND
                 * <P>- the type of the operation (registration or unregistration) is
                 * selected
                 * <P>then the notification is sent to the listener.
                 * @param notif  The notification to be sent.
                 * @return true if the notification has to be sent to the listener, false
                 *  otherwise.
                 * @exception IllegalArgumentException  if null parameter
                 */
                // @ts-ignore
                isNotificationEnabled(notif: javax.management.Notification): boolean
            }
        }
    }
}
