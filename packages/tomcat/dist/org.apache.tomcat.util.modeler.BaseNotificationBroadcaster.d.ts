declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace modeler {
                    /**
                     * <p>Implementation of <code>NotificationBroadcaster</code> for attribute
                     * change notifications.  This class is used by <code>BaseModelMBean</code> to
                     * handle notifications of attribute change events to interested listeners.
                     * </p>
                     * @author Craig R. McClanahan
                     * @author Costin Manolache
                     */
                    // @ts-ignore
                    class BaseNotificationBroadcaster extends java.lang.Object implements javax.management.NotificationBroadcaster {
                        // @ts-ignore
                        constructor()
                        /**
                         * The set of registered <code>BaseNotificationBroadcasterEntry</code>
                         * entries.
                         */
                        // @ts-ignore
                        entries: java.util.ArrayList<org.apache.tomcat.util.modeler.BaseNotificationBroadcasterEntry>
                        /**
                         * Add a notification event listener to this MBean.
                         * @param listener Listener that will receive event notifications
                         * @param filter Filter object used to filter event notifications
                         *   actually delivered, or <code>null</code> for no filtering
                         * @param handback Handback object to be sent along with event
                         *   notifications
                         * @exception IllegalArgumentException if the listener parameter is null
                         */
                        // @ts-ignore
                        public addNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: java.lang.Object | any): void
                        /**
                         * Return an <code>MBeanNotificationInfo</code> object describing the
                         * notifications sent by this MBean.
                         */
                        // @ts-ignore
                        public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
                        /**
                         * Remove a notification event listener from this MBean.
                         * @param listener The listener to be removed (any and all registrations
                         *   for this listener will be eliminated)
                         * @exception ListenerNotFoundException if this listener is not
                         *   registered in the MBean
                         */
                        // @ts-ignore
                        public removeNotificationListener(listener: javax.management.NotificationListener): void
                        /**
                         * Send the specified notification to all interested listeners.
                         * @param notification The notification to be sent
                         */
                        // @ts-ignore
                        public sendNotification(notification: javax.management.Notification): void
                    }
                }
            }
        }
    }
}
