declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace notification {
                    /**
                     * Simple interface allowing Spring-managed MBeans to publish JMX notifications
                     * without being aware of how those notifications are being transmitted to the
                     * {@link javax.management.MBeanServer}.
                     * <p>Managed resources can access a {@code NotificationPublisher} by
                     * implementing the {@link NotificationPublisherAware} interface. After a particular
                     * managed resource instance is registered with the {@link javax.management.MBeanServer},
                     * Spring will inject a {@code NotificationPublisher} instance into it if that
                     * resource implements the {@link NotificationPublisherAware} interface.
                     * <p>Each managed resource instance will have a distinct instance of a
                     * {@code NotificationPublisher} implementation. This instance will keep
                     * track of all the {@link javax.management.NotificationListener NotificationListeners}
                     * registered for a particular mananaged resource.
                     * <p>Any existing, user-defined MBeans should use standard JMX APIs for notification
                     * publication; this interface is intended for use only by Spring-created MBeans.
                     * @author Rob Harrop
                     * @since 2.0
                     * @see NotificationPublisherAware
                     * @see org.springframework.jmx.export.MBeanExporter
                     */
                    // @ts-ignore
                    interface NotificationPublisher {
                        /**
                         * Send the specified {@link javax.management.Notification} to all registered
                         * {@link javax.management.NotificationListener NotificationListeners}.
                         * Managed resources are <strong>not</strong> responsible for managing the list
                         * of registered {@link javax.management.NotificationListener NotificationListeners};
                         * that is performed automatically.
                         * @param notification the JMX Notification to send
                         * @throws UnableToSendNotificationException if sending failed
                         */
                        // @ts-ignore
                        sendNotification(notification: javax.management.Notification): void
                    }
                }
            }
        }
    }
}
