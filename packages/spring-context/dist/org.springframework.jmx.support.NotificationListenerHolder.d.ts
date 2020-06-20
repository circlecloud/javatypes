declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace support {
                /**
                 * Helper class that aggregates a {@link javax.management.NotificationListener},
                 * a {@link javax.management.NotificationFilter}, and an arbitrary handback
                 * object, as well as the names of MBeans from which the listener wishes
                 * to receive {@link javax.management.Notification Notifications}.
                 * @author Juergen Hoeller
                 * @since 2.5.2
                 * @see org.springframework.jmx.export.NotificationListenerBean
                 * @see org.springframework.jmx.access.NotificationListenerRegistrar
                 */
                // @ts-ignore
                class NotificationListenerHolder extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    mappedObjectNames: Array<java.lang.Object>
                    /**
                     * Set the {@link javax.management.NotificationListener}.
                     */
                    // @ts-ignore
                    setNotificationListener(notificationListener: javax.management.NotificationListener): void
                    /**
                     * Get the {@link javax.management.NotificationListener}.
                     */
                    // @ts-ignore
                    getNotificationListener(): javax.management.NotificationListener
                    /**
                     * Set the {@link javax.management.NotificationFilter} associated
                     * with the encapsulated {@link #getNotificationFilter() NotificationFilter}.
                     * <p>May be {@code null}.
                     */
                    // @ts-ignore
                    setNotificationFilter(notificationFilter: javax.management.NotificationFilter): void
                    /**
                     * Return the {@link javax.management.NotificationFilter} associated
                     * with the encapsulated {@link #getNotificationListener() NotificationListener}.
                     * <p>May be {@code null}.
                     */
                    // @ts-ignore
                    getNotificationFilter(): javax.management.NotificationFilter
                    /**
                     * Set the (arbitrary) object that will be 'handed back' as-is by an
                     * {@link javax.management.NotificationBroadcaster} when notifying
                     * any {@link javax.management.NotificationListener}.
                     * @param handback the handback object (can be {#code null})
                     * @see javax.management.NotificationListener#handleNotification(javax.management.Notification, Object)
                     */
                    // @ts-ignore
                    setHandback(handback: any): void
                    /**
                     * Return the (arbitrary) object that will be 'handed back' as-is by an
                     * {@link javax.management.NotificationBroadcaster} when notifying
                     * any {@link javax.management.NotificationListener}.
                     * @return the handback object (may be {#code null})
                     * @see javax.management.NotificationListener#handleNotification(javax.management.Notification, Object)
                     */
                    // @ts-ignore
                    getHandback(): java.lang.Object
                    /**
                     * Set the {@link javax.management.ObjectName}-style name of the single MBean
                     * that the encapsulated {@link #getNotificationFilter() NotificationFilter}
                     * will be registered with to listen for {@link javax.management.Notification Notifications}.
                     * Can be specified as {@code ObjectName} instance or as {@code String}.
                     * @see #setMappedObjectNames
                     */
                    // @ts-ignore
                    setMappedObjectName(mappedObjectName: any): void
                    /**
                     * Set an array of {@link javax.management.ObjectName}-style names of the MBeans
                     * that the encapsulated {@link #getNotificationFilter() NotificationFilter}
                     * will be registered with to listen for {@link javax.management.Notification Notifications}.
                     * Can be specified as {@code ObjectName} instances or as {@code String}s.
                     * @see #setMappedObjectName
                     */
                    // @ts-ignore
                    setMappedObjectNames(...mappedObjectNames: any[]): void
                    /**
                     * Return the list of {@link javax.management.ObjectName} String representations for
                     * which the encapsulated {@link #getNotificationFilter() NotificationFilter} will
                     * be registered as a listener for {@link javax.management.Notification Notifications}.
                     * @throws MalformedObjectNameException if an {#code ObjectName} is malformed
                     */
                    // @ts-ignore
                    getResolvedObjectNames(): javax.management.ObjectName[]
                    // @ts-ignore
                    equals(other: any): boolean
                    // @ts-ignore
                    hashCode(): int
                }
            }
        }
    }
}
