declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace metadata {
                    /**
                     * Metadata that indicates a JMX notification emitted by a bean.
                     * @author Rob Harrop
                     * @since 2.0
                     */
                    // @ts-ignore
                    class ManagedNotification extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set a single notification type, or a list of notification types
                         * as comma-delimited String.
                         */
                        // @ts-ignore
                        setNotificationType(notificationType: string): void
                        /**
                         * Set a list of notification types.
                         */
                        // @ts-ignore
                        setNotificationTypes(...notificationTypes: string[]): void
                        /**
                         * Return the list of notification types.
                         */
                        // @ts-ignore
                        getNotificationTypes(): java.lang.String[]
                        /**
                         * Set the name of this notification.
                         */
                        // @ts-ignore
                        setName(name: string): void
                        /**
                         * Return the name of this notification.
                         */
                        // @ts-ignore
                        getName(): java.lang.String
                        /**
                         * Set a description for this notification.
                         */
                        // @ts-ignore
                        setDescription(description: string): void
                        /**
                         * Return a description for this notification.
                         */
                        // @ts-ignore
                        getDescription(): java.lang.String
                    }
                }
            }
        }
    }
}
