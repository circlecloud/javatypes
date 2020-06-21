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
                        public setNotificationType(notificationType: java.lang.String | string): void
                        /**
                         * Set a list of notification types.
                         */
                        // @ts-ignore
                        public setNotificationTypes(...notificationTypes: java.lang.String[] | string[]): void
                        /**
                         * Return the list of notification types.
                         */
                        // @ts-ignore
                        public getNotificationTypes(): string[]
                        /**
                         * Set the name of this notification.
                         */
                        // @ts-ignore
                        public setName(name: java.lang.String | string): void
                        /**
                         * Return the name of this notification.
                         */
                        // @ts-ignore
                        public getName(): string
                        /**
                         * Set a description for this notification.
                         */
                        // @ts-ignore
                        public setDescription(description: java.lang.String | string): void
                        /**
                         * Return a description for this notification.
                         */
                        // @ts-ignore
                        public getDescription(): string
                    }
                }
            }
        }
    }
}
