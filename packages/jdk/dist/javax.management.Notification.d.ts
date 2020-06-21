declare namespace javax {
    namespace management {
        /**
         * <p>The Notification class represents a notification emitted by an
         * MBean.  It contains a reference to the source MBean: if the
         * notification has been forwarded through the MBean server, and the
         * original source of the notification was a reference to the emitting
         * MBean object, then the MBean server replaces it by the MBean's
         * ObjectName.  If the listener has registered directly with the
         * MBean, this is either the object name or a direct reference to the
         * MBean.</p>
         * <p>It is strongly recommended that notification senders use the
         * object name rather than a reference to the MBean object as the
         * source.</p>
         * <p>The <b>serialVersionUID</b> of this class is <code>-7516092053498031989L</code>.
         * @since 1.5
         */
        // @ts-ignore
        class Notification extends java.util.EventObject {
            /**
             * Creates a Notification object.
             * The notification timeStamp is set to the current date.
             * @param type The notification type.
             * @param source The notification source.
             * @param sequenceNumber The notification sequence number within the source object.
             */
            // @ts-ignore
            constructor(type: java.lang.String | string, source: java.lang.Object | any, sequenceNumber: number /*long*/)
            /**
             * Creates a Notification object.
             * The notification timeStamp is set to the current date.
             * @param type The notification type.
             * @param source The notification source.
             * @param sequenceNumber The notification sequence number within the source object.
             * @param message The detailed message.
             */
            // @ts-ignore
            constructor(type: java.lang.String | string, source: java.lang.Object | any, sequenceNumber: number /*long*/, message: java.lang.String | string)
            /**
             * Creates a Notification object.
             * @param type The notification type.
             * @param source The notification source.
             * @param sequenceNumber The notification sequence number within the source object.
             * @param timeStamp The notification emission date.
             */
            // @ts-ignore
            constructor(type: java.lang.String | string, source: java.lang.Object | any, sequenceNumber: number /*long*/, timeStamp: number /*long*/)
            /**
             * Creates a Notification object.
             * @param type The notification type.
             * @param source The notification source.
             * @param sequenceNumber The notification sequence number within the source object.
             * @param timeStamp The notification emission date.
             * @param message The detailed message.
             */
            // @ts-ignore
            constructor(type: java.lang.String | string, source: java.lang.Object | any, sequenceNumber: number /*long*/, timeStamp: number /*long*/, message: java.lang.String | string)
            /**
             * <p>This field hides the {@link EventObject#source} field in the
             * parent class to make it non-transient and therefore part of the
             * serialized form.</p>
             * @serial The object on which the notification initially occurred.
             */
            // @ts-ignore
            source: java.lang.Object | any
            /**
             * Sets the source.
             * @param source the new source for this object.
             * @see EventObject#getSource
             */
            // @ts-ignore
            public setSource(source: java.lang.Object | any): void
            /**
             * Get the notification sequence number.
             * @return The notification sequence number within the source object. It's a serial number
             *  identifying a particular instance of notification in the context of the notification source.
             *  The notification model does not assume that notifications will be received in the same order
             *  that they are sent. The sequence number helps listeners to sort received notifications.
             * @see #setSequenceNumber
             */
            // @ts-ignore
            public getSequenceNumber(): number /*long*/
            /**
             * Set the notification sequence number.
             * @param sequenceNumber The notification sequence number within the source object. It is
             *  a serial number identifying a particular instance of notification in the
             *  context of the notification source.
             * @see #getSequenceNumber
             */
            // @ts-ignore
            public setSequenceNumber(sequenceNumber: number /*long*/): void
            /**
             * Get the notification type.
             * @return The notification type. It's a string expressed in a dot notation
             *  similar to Java properties. It is recommended that the notification type
             *  should follow the reverse-domain-name convention used by Java package
             *  names.  An example of a notification type is com.example.alarm.router.
             */
            // @ts-ignore
            public getType(): string
            /**
             * Get the notification timestamp.
             * @return The notification timestamp.
             * @see #setTimeStamp
             */
            // @ts-ignore
            public getTimeStamp(): number /*long*/
            /**
             * Set the notification timestamp.
             * @param timeStamp The notification timestamp. It indicates when the notification was generated.
             * @see #getTimeStamp
             */
            // @ts-ignore
            public setTimeStamp(timeStamp: number /*long*/): void
            /**
             * Get the notification message.
             * @return The message string of this notification object.
             */
            // @ts-ignore
            public getMessage(): string
            /**
             * Get the user data.
             * @return The user data object. It is used for whatever data
             *  the notification source wishes to communicate to its consumers.
             * @see #setUserData
             */
            // @ts-ignore
            public getUserData(): any
            /**
             * Set the user data.
             * @param userData The user data object. It is used for whatever data
             *  the notification source wishes to communicate to its consumers.
             * @see #getUserData
             */
            // @ts-ignore
            public setUserData(userData: java.lang.Object | any): void
            /**
             * Returns a String representation of this notification.
             * @return A String representation of this notification.
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
