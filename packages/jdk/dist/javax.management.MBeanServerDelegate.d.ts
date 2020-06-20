declare namespace javax {
    namespace management {
        /**
         * Represents  the MBean server from the management point of view.
         * The MBeanServerDelegate MBean emits the MBeanServerNotifications when
         * an MBean is registered/unregistered in the MBean server.
         * @since 1.5
         */
        // @ts-ignore
        class MBeanServerDelegate extends java.lang.Object implements javax.management.MBeanServerDelegateMBean, javax.management.NotificationEmitter {
            /**
             * Create a MBeanServerDelegate object.
             */
            // @ts-ignore
            constructor()
            /**
             * Defines the default ObjectName of the MBeanServerDelegate.
             * @since 1.6
             */
            // @ts-ignore
            readonly DELEGATE_NAME: javax.management.ObjectName
            /**
             * Returns the MBean server agent identity.
             * @return the identity.
             */
            // @ts-ignore
            getMBeanServerId(): java.lang.String
            /**
             * Returns the full name of the JMX specification implemented
             * by this product.
             * @return the specification name.
             */
            // @ts-ignore
            getSpecificationName(): java.lang.String
            /**
             * Returns the version of the JMX specification implemented
             * by this product.
             * @return the specification version.
             */
            // @ts-ignore
            getSpecificationVersion(): java.lang.String
            /**
             * Returns the vendor of the JMX specification implemented
             * by this product.
             * @return the specification vendor.
             */
            // @ts-ignore
            getSpecificationVendor(): java.lang.String
            /**
             * Returns the JMX implementation name (the name of this product).
             * @return the implementation name.
             */
            // @ts-ignore
            getImplementationName(): java.lang.String
            /**
             * Returns the JMX implementation version (the version of this product).
             * @return the implementation version.
             */
            // @ts-ignore
            getImplementationVersion(): java.lang.String
            /**
             * Returns the JMX implementation vendor (the vendor of this product).
             * @return the implementation vendor.
             */
            // @ts-ignore
            getImplementationVendor(): java.lang.String
            // @ts-ignore
            getNotificationInfo(): javax.management.MBeanNotificationInfo[]
            // @ts-ignore
            addNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void
            // @ts-ignore
            removeNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void
            // @ts-ignore
            removeNotificationListener(listener: javax.management.NotificationListener): void
            /**
             * Enables the MBean server to send a notification.
             * If the passed <var>notification</var> has a sequence number lesser
             * or equal to 0, then replace it with the delegate's own sequence
             * number.
             * @param notification The notification to send.
             */
            // @ts-ignore
            sendNotification(notification: javax.management.Notification): void
        }
    }
}
