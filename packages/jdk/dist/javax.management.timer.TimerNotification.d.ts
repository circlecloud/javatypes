declare namespace javax {
    namespace management {
        namespace timer {
            /**
             * This class provides definitions of the notifications sent by timer MBeans.
             * <BR>It defines a timer notification identifier which allows to retrieve a timer notification
             * from the list of notifications of a timer MBean.
             * <P>
             * The timer notifications are created and handled by the timer MBean.
             * @since 1.5
             */
            // @ts-ignore
            class TimerNotification extends javax.management.Notification {
                /**
                 * Creates a timer notification object.
                 * @param type The notification type.
                 * @param source The notification producer.
                 * @param sequenceNumber The notification sequence number within the source object.
                 * @param timeStamp The notification emission date.
                 * @param msg The notification message.
                 * @param id The notification identifier.
                 */
                // @ts-ignore
                constructor(type: java.lang.String | string, source: java.lang.Object | any, sequenceNumber: number /*long*/, timeStamp: number /*long*/, msg: java.lang.String | string, id: java.lang.Integer | number)
                /**
                 * Gets the identifier of this timer notification.
                 * @return The identifier.
                 */
                // @ts-ignore
                public getNotificationID(): number
            }
        }
    }
}
