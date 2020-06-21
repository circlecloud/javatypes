declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace modeler {
                    /**
                     * <p>Internal configuration information for a <code>Notification</code>
                     * descriptor.</p>
                     * @author Craig R. McClanahan
                     */
                    // @ts-ignore
                    class NotificationInfo extends org.apache.tomcat.util.modeler.FeatureInfo {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        notifTypes: java.lang.String[] | string[]
                        // @ts-ignore
                        readonly notifTypesLock: java.util.concurrent.locks.ReadWriteLock
                        /**
                         * Override the <code>description</code> property setter.
                         * @param description The new description
                         */
                        // @ts-ignore
                        public setDescription(description: java.lang.String | string): void
                        /**
                         * Override the <code>name</code> property setter.
                         * @param name The new name
                         */
                        // @ts-ignore
                        public setName(name: java.lang.String | string): void
                        /**
                         * @return the set of notification types for this MBean.
                         */
                        // @ts-ignore
                        public getNotifTypes(): string[]
                        /**
                         * Add a new notification type to the set managed by an MBean.
                         * @param notifType The new notification type
                         */
                        // @ts-ignore
                        public addNotifType(notifType: java.lang.String | string): void
                        /**
                         * Create and return a <code>ModelMBeanNotificationInfo</code> object that
                         * corresponds to the attribute described by this instance.
                         * @return the notification info
                         */
                        // @ts-ignore
                        public createNotificationInfo(): javax.management.MBeanNotificationInfo
                        /**
                         * Return a string representation of this notification descriptor.
                         */
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
