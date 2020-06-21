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
                    mappedObjectNames: java.util.Set<java.lang.Object | any> | Array<java.lang.Object | any>
                    /**
                     * Set the {@link javax.management.NotificationListener}.
                     */
                    // @ts-ignore
                    public setNotificationListener(notificationListener: javax.management.NotificationListener): void
                    /**
                     * Get the {@link javax.management.NotificationListener}.
                     */
                    // @ts-ignore
                    public getNotificationListener(): javax.management.NotificationListener
                    /**
                     * Set the {@link javax.management.NotificationFilter} associated
                     * with the encapsulated {@link #getNotificationFilter() NotificationFilter}.
                     * <p>May be {@code null}.
                     */
                    // @ts-ignore
                    public setNotificationFilter(notificationFilter: javax.management.NotificationFilter): void
                    /**
                     * Return the {@link javax.management.NotificationFilter} associated
                     * with the encapsulated {@link #getNotificationListener() NotificationListener}.
                     * <p>May be {@code null}.
                     */
                    // @ts-ignore
                    public getNotificationFilter(): javax.management.NotificationFilter
                    /**
                     * Set the (arbitrary) object that will be 'handed back' as-is by an
                     * {@link javax.management.NotificationBroadcaster} when notifying
                     * any {@link javax.management.NotificationListener}.
                     * @param handback the handback object (can be {#code null})
                     * @see javax.management.NotificationListener#handleNotification(javax.management.Notification, Object)
                     */
                    // @ts-ignore
                    public setHandback(handback: java.lang.Object | any): void
                    /**
                     * Return the (arbitrary) object that will be 'handed back' as-is by an
                     * {@link javax.management.NotificationBroadcaster} when notifying
                     * any {@link javax.management.NotificationListener}.
                     * @return the handback object (may be {#code null})
                     * @see javax.management.NotificationListener#handleNotification(javax.management.Notification, Object)
                     */
                    // @ts-ignore
                    public getHandback(): any
                    /**
                     * Set the {@link javax.management.ObjectName}-style name of the single MBean
                     * that the encapsulated {@link #getNotificationFilter() NotificationFilter}
                     * will be registered with to listen for {@link javax.management.Notification Notifications}.
                     * Can be specified as {@code ObjectName} instance or as {@code String}.
                     * @see #setMappedObjectNames
                     */
                    // @ts-ignore
                    public setMappedObjectName(mappedObjectName: java.lang.Object | any): void
                    /**
                     * Set an array of {@link javax.management.ObjectName}-style names of the MBeans
                     * that the encapsulated {@link #getNotificationFilter() NotificationFilter}
                     * will be registered with to listen for {@link javax.management.Notification Notifications}.
                     * Can be specified as {@code ObjectName} instances or as {@code String}s.
                     * @see #setMappedObjectName
                     */
                    // @ts-ignore
                    public setMappedObjectNames(...mappedObjectNames: java.lang.Object[] | any[]): void
                    /**
                     * Return the list of {@link javax.management.ObjectName} String representations for
                     * which the encapsulated {@link #getNotificationFilter() NotificationFilter} will
                     * be registered as a listener for {@link javax.management.Notification Notifications}.
                     * @throws MalformedObjectNameException if an {#code ObjectName} is malformed
                     */
                    // @ts-ignore
                    public getResolvedObjectNames(): javax.management.ObjectName[]
                    // @ts-ignore
                    public equals(other: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                }
            }
        }
    }
}
