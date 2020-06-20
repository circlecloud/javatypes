declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace notification {
                    /**
                     * {@link NotificationPublisher} implementation that uses the infrastructure
                     * provided by the {@link ModelMBean} interface to track
                     * {@link javax.management.NotificationListener javax.management.NotificationListeners}
                     * and send {@link Notification Notifications} to those listeners.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @author Rick Evans
                     * @since 2.0
                     * @see javax.management.modelmbean.ModelMBeanNotificationBroadcaster
                     * @see NotificationPublisherAware
                     */
                    // @ts-ignore
                    class ModelMBeanNotificationPublisher extends java.lang.Object implements org.springframework.jmx.export.notification.NotificationPublisher {
                        /**
                         * Create a new instance of the {@link ModelMBeanNotificationPublisher} class
                         * that will publish all {@link javax.management.Notification Notifications}
                         * to the supplied {@link ModelMBean}.
                         * @param modelMBean the target {#link ModelMBean}; must not be {@code null}
                         * @param objectName the {#link ObjectName} of the source {@link ModelMBean}
                         * @param managedResource the managed resource exposed by the supplied {#link ModelMBean}
                         * @throws IllegalArgumentException if any of the parameters is {#code null}
                         */
                        // @ts-ignore
                        constructor(modelMBean: javax.management.modelmbean.ModelMBeanNotificationBroadcaster, objectName: javax.management.ObjectName, managedResource: any)
                        /**
                         * Send the supplied {@link Notification} using the wrapped
                         * {@link ModelMBean} instance.
                         * @param notification the {#link Notification} to be sent
                         * @throws IllegalArgumentException if the supplied {#code notification} is {@code null}
                         * @throws UnableToSendNotificationException if the supplied {#code notification} could not be sent
                         */
                        // @ts-ignore
                        sendNotification(notification: javax.management.Notification): void
                    }
                }
            }
        }
    }
}
