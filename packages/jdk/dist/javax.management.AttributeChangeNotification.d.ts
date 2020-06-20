declare namespace javax {
    namespace management {
        /**
         * Provides definitions of the attribute change notifications sent by MBeans.
         * <P>
         * It's up to the MBean owning the attribute of interest to create and send
         * attribute change notifications when the attribute change occurs.
         * So the <CODE>NotificationBroadcaster</CODE> interface has to be implemented
         * by any MBean for which an attribute change is of interest.
         * <P>
         * Example:
         * If an MBean called <CODE>myMbean</CODE> needs to notify registered listeners
         * when its attribute:
         * <BLOCKQUOTE><CODE>
         * String myString
         * </CODE></BLOCKQUOTE>
         * is modified, <CODE>myMbean</CODE> creates and emits the following notification:
         * <BLOCKQUOTE><CODE>
         * new AttributeChangeNotification(myMbean, sequenceNumber, timeStamp, msg,
         * "myString", "String", oldValue, newValue);
         * </CODE></BLOCKQUOTE>
         * @since 1.5
         */
        // @ts-ignore
        class AttributeChangeNotification extends javax.management.Notification {
            /**
             * Constructs an attribute change notification object.
             * In addition to the information common to all notification, the caller must supply the name and type
             * of the attribute, as well as its old and new values.
             * @param source The notification producer, that is, the MBean the attribute belongs to.
             * @param sequenceNumber The notification sequence number within the source object.
             * @param timeStamp The date at which the notification is being sent.
             * @param msg A String containing the message of the notification.
             * @param attributeName A String giving the name of the attribute.
             * @param attributeType A String containing the type of the attribute.
             * @param oldValue An object representing value of the attribute before the change.
             * @param newValue An object representing value of the attribute after the change.
             */
            // @ts-ignore
            constructor(source: any, sequenceNumber: number /*long*/, timeStamp: number /*long*/, msg: string, attributeName: string, attributeType: string, oldValue: any, newValue: any)
            /**
             * Notification type which indicates that the observed MBean attribute value has changed.
             * <BR>The value of this type string is <CODE>jmx.attribute.change</CODE>.
             */
            // @ts-ignore
            readonly ATTRIBUTE_CHANGE: string
            /**
             * Gets the name of the attribute which has changed.
             * @return A String containing the name of the attribute.
             */
            // @ts-ignore
            getAttributeName(): java.lang.String
            /**
             * Gets the type of the attribute which has changed.
             * @return A String containing the type of the attribute.
             */
            // @ts-ignore
            getAttributeType(): java.lang.String
            /**
             * Gets the old value of the attribute which has changed.
             * @return An Object containing the old value of the attribute.
             */
            // @ts-ignore
            getOldValue(): java.lang.Object
            /**
             * Gets the new value of the attribute which has changed.
             * @return An Object containing the new value of the attribute.
             */
            // @ts-ignore
            getNewValue(): java.lang.Object
        }
    }
}
