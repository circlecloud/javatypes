declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                /**
                 * Helper class that aggregates a {@link javax.management.NotificationListener},
                 * a {@link javax.management.NotificationFilter}, and an arbitrary handback object.
                 * <p>Also provides support for associating the encapsulated
                 * {@link javax.management.NotificationListener} with any number of
                 * MBeans from which it wishes to receive
                 * {@link javax.management.Notification Notifications} via the
                 * {@link #setMappedObjectNames mappedObjectNames} property.
                 * <p>Note: This class supports Spring bean names as
                 * {@link #setMappedObjectNames "mappedObjectNames"} as well, as alternative
                 * to specifying JMX object names. Note that only beans exported by the
                 * same {@link MBeanExporter} are supported for such bean names.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @since 2.0
                 * @see MBeanExporter#setNotificationListeners
                 */
                // @ts-ignore
                class NotificationListenerBean extends org.springframework.jmx.support.NotificationListenerHolder {
                    /**
                     * Create a new instance of the {@link NotificationListenerBean} class.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new instance of the {@link NotificationListenerBean} class.
                     * @param notificationListener the encapsulated listener
                     */
                    // @ts-ignore
                    constructor(notificationListener: javax.management.NotificationListener)
                    // @ts-ignore
                    public afterPropertiesSet(): void
                }
            }
        }
    }
}
