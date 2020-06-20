declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace notification {
                    /**
                     * Interface to be implemented by any Spring-managed resource that is to be
                     * registered with an {@link javax.management.MBeanServer} and wishes to send
                     * JMX {@link javax.management.Notification javax.management.Notifications}.
                     * <p>Provides Spring-created managed resources with a {@link NotificationPublisher}
                     * as soon as they are registered with the {@link javax.management.MBeanServer}.
                     * <p><b>NOTE:</b> This interface only applies to simple Spring-managed
                     * beans which happen to get exported through Spring's
                     * {@link org.springframework.jmx.export.MBeanExporter}.
                     * It does not apply to any non-exported beans; neither does it apply
                     * to standard MBeans exported by Spring. For standard JMX MBeans,
                     * consider implementing the {@link javax.management.modelmbean.ModelMBeanNotificationBroadcaster}
                     * interface (or implementing a full {@link javax.management.modelmbean.ModelMBean}).
                     * @author Rob Harrop
                     * @author Chris Beams
                     * @since 2.0
                     * @see NotificationPublisher
                     */
                    // @ts-ignore
                    interface NotificationPublisherAware {
                        /**
                         * Set the {@link NotificationPublisher} instance for the current managed resource instance.
                         */
                        // @ts-ignore
                        setNotificationPublisher(notificationPublisher: org.springframework.jmx.export.notification.NotificationPublisher): void
                    }
                }
            }
        }
    }
}
