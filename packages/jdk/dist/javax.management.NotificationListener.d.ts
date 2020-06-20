declare namespace javax {
    namespace management {
        /**
         * Should be implemented by an object that wants to receive notifications.
         * @since 1.5
         */
        // @ts-ignore
        interface NotificationListener extends java.util.EventListener {
            /**
             * Invoked when a JMX notification occurs.
             * The implementation of this method should return as soon as possible, to avoid
             * blocking its notification broadcaster.
             * @param notification The notification.
             * @param handback An opaque object which helps the listener to associate
             *  information regarding the MBean emitter. This object is passed to the
             *  addNotificationListener call and resent, without modification, to the
             *  listener.
             */
            // @ts-ignore
            handleNotification(notification: javax.management.Notification, handback: any): void
        }
    }
}
