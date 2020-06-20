declare namespace javax {
    namespace management {
        /**
         * Represents a notification emitted by the MBean Server through the MBeanServerDelegate MBean.
         * The MBean Server emits the following types of notifications: MBean registration, MBean
         * unregistration.
         * <P>
         * To receive MBeanServerNotifications, you need to register a listener with
         * the {@link MBeanServerDelegate MBeanServerDelegate} MBean
         * that represents the MBeanServer. The ObjectName of the MBeanServerDelegate is
         * {@link MBeanServerDelegate#DELEGATE_NAME}, which is
         * <CODE>JMImplementation:type=MBeanServerDelegate</CODE>.
         * <p>The following code prints a message every time an MBean is registered
         * or unregistered in the MBean Server {@code mbeanServer}:</p>
         * <pre>
         * private static final NotificationListener printListener = new NotificationListener() {
         * public void handleNotification(Notification n, Object handback) {
         * if (!(n instanceof MBeanServerNotification)) {
         * System.out.println("Ignored notification of class " + n.getClass().getName());
         * return;
         * }
         * MBeanServerNotification mbsn = (MBeanServerNotification) n;
         * String what;
         * if (n.getType().equals(MBeanServerNotification.REGISTRATION_NOTIFICATION))
         * what = "MBean registered";
         * else if (n.getType().equals(MBeanServerNotification.UNREGISTRATION_NOTIFICATION))
         * what = "MBean unregistered";
         * else
         * what = "Unknown type " + n.getType();
         * System.out.println("Received MBean Server notification: " + what + ": " +
         * mbsn.getMBeanName());
         * }
         * };
         * ...
         * mbeanServer.addNotificationListener(
         * MBeanServerDelegate.DELEGATE_NAME, printListener, null, null);
         * </pre>
         * <p id="group">
         * An MBean which is not an {@link MBeanServerDelegate} may also emit
         * MBeanServerNotifications. In particular, there is a convention for
         * MBeans to emit an MBeanServerNotification for a group of MBeans.</p>
         * <p>An MBeanServerNotification emitted to denote the registration or
         * unregistration of a group of MBeans has the following characteristics:
         * <ul><li>Its {@linkplain Notification#getType() notification type} is
         * {@code "JMX.mbean.registered.group"} or
         * {@code "JMX.mbean.unregistered.group"}, which can also be written {@link
         * MBeanServerNotification#REGISTRATION_NOTIFICATION}{@code + ".group"} or
         * {@link
         * MBeanServerNotification#UNREGISTRATION_NOTIFICATION}{@code + ".group"}.
         * </li>
         * <li>Its {@linkplain #getMBeanName() MBean name} is an ObjectName pattern
         * that selects the set (or a superset) of the MBeans being registered
         * or unregistered</li>
         * <li>Its {@linkplain Notification#getUserData() user data} can optionally
         * be set to an array of ObjectNames containing the names of all MBeans
         * being registered or unregistered.</li>
         * </ul>
         * <p>
         * MBeans which emit these group registration/unregistration notifications will
         * declare them in their {@link MBeanInfo#getNotifications()
         * MBeanNotificationInfo}.
         * </p>
         * @since 1.5
         */
        // @ts-ignore
        class MBeanServerNotification extends javax.management.Notification {
            /**
             * Creates an MBeanServerNotification object specifying object names of
             * the MBeans that caused the notification and the specified notification
             * type.
             * @param type A string denoting the type of the
             *  notification. Set it to one these values: {#link
             *  #REGISTRATION_NOTIFICATION}, {@link
             *  #UNREGISTRATION_NOTIFICATION}.
             * @param source The MBeanServerNotification object responsible
             *  for forwarding MBean server notification.
             * @param sequenceNumber A sequence number that can be used to order
             *  received notifications.
             * @param objectName The object name of the MBean that caused the
             *  notification.
             */
            // @ts-ignore
            constructor(type: string, source: any, sequenceNumber: number /*long*/, objectName: javax.management.ObjectName)
            /**
             * Notification type denoting that an MBean has been registered.
             * Value is "JMX.mbean.registered".
             */
            // @ts-ignore
            readonly REGISTRATION_NOTIFICATION: string
            /**
             * Notification type denoting that an MBean has been unregistered.
             * Value is "JMX.mbean.unregistered".
             */
            // @ts-ignore
            readonly UNREGISTRATION_NOTIFICATION: string
            /**
             * Returns the  object name of the MBean that caused the notification.
             * @return the object name of the MBean that caused the notification.
             */
            // @ts-ignore
            getMBeanName(): javax.management.ObjectName
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
