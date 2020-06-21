declare namespace javax {
    namespace management {
        /**
         * This class implements of the {@link javax.management.NotificationFilter NotificationFilter}
         * interface for the {@link javax.management.AttributeChangeNotification attribute change notification}.
         * The filtering is performed on the name of the observed attribute.
         * <P>
         * It manages a list of enabled attribute names.
         * A method allows users to enable/disable as many attribute names as required.
         * @since 1.5
         */
        // @ts-ignore
        class AttributeChangeNotificationFilter extends java.lang.Object implements javax.management.NotificationFilter {
            // @ts-ignore
            constructor()
            /**
             * Invoked before sending the specified notification to the listener.
             * <BR>This filter compares the attribute name of the specified attribute change notification
             * with each enabled attribute name.
             * If the attribute name equals one of the enabled attribute names,
             * the notification must be sent to the listener and this method returns <CODE>true</CODE>.
             * @param notification The attribute change notification to be sent.
             * @return <CODE>true</CODE> if the notification has to be sent to the listener, <CODE>false</CODE> otherwise.
             */
            // @ts-ignore
            public isNotificationEnabled(notification: javax.management.Notification): boolean
            /**
             * Enables all the attribute change notifications the attribute name of which equals
             * the specified name to be sent to the listener.
             * <BR>If the specified name is already in the list of enabled attribute names,
             * this method has no effect.
             * @param name The attribute name.
             * @exception java.lang.IllegalArgumentException The attribute name parameter is null.
             */
            // @ts-ignore
            public enableAttribute(name: java.lang.String | string): void
            /**
             * Disables all the attribute change notifications the attribute name of which equals
             * the specified attribute name to be sent to the listener.
             * <BR>If the specified name is not in the list of enabled attribute names,
             * this method has no effect.
             * @param name The attribute name.
             */
            // @ts-ignore
            public disableAttribute(name: java.lang.String | string): void
            /**
             * Disables all the attribute names.
             */
            // @ts-ignore
            public disableAllAttributes(): void
            /**
             * Gets all the enabled attribute names for this filter.
             * @return The list containing all the enabled attribute names.
             */
            // @ts-ignore
            public getEnabledAttributes(): java.util.Vector<java.lang.String | string>
        }
    }
}
