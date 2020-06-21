declare namespace javax {
    namespace management {
        namespace monitor {
            /**
             * Provides definitions of the notifications sent by monitor MBeans.
             * <P>
             * The notification source and a set of parameters concerning the monitor MBean's state
             * need to be specified when creating a new object of this class.
             * The list of notifications fired by the monitor MBeans is the following:
             * <UL>
             * <LI>Common to all kind of monitors:
             * <UL>
             * <LI>The observed object is not registered in the MBean server.
             * <LI>The observed attribute is not contained in the observed object.
             * <LI>The type of the observed attribute is not correct.
             * <LI>Any exception (except the cases described above) occurs when trying to get the value of the observed attribute.
             * </UL>
             * <LI>Common to the counter and the gauge monitors:
             * <UL>
             * <LI>The threshold high or threshold low are not of the same type as the gauge (gauge monitors).
             * <LI>The threshold or the offset or the modulus are not of the same type as the counter (counter monitors).
             * </UL>
             * <LI>Counter monitors only:
             * <UL>
             * <LI>The observed attribute has reached the threshold value.
             * </UL>
             * <LI>Gauge monitors only:
             * <UL>
             * <LI>The observed attribute has exceeded the threshold high value.
             * <LI>The observed attribute has exceeded the threshold low value.
             * </UL>
             * <LI>String monitors only:
             * <UL>
             * <LI>The observed attribute has matched the "string to compare" value.
             * <LI>The observed attribute has differed from the "string to compare" value.
             * </UL>
             * </UL>
             * @since 1.5
             */
            // @ts-ignore
            class MonitorNotification extends javax.management.Notification {
                /**
                 * Notification type denoting that the observed object is not registered in the MBean server.
                 * This notification is fired by all kinds of monitors.
                 * <BR>The value of this notification type is <CODE>jmx.monitor.error.mbean</CODE>.
                 */
                // @ts-ignore
                public static readonly OBSERVED_OBJECT_ERROR: java.lang.String | string
                /**
                 * Notification type denoting that the observed attribute is not contained in the observed object.
                 * This notification is fired by all kinds of monitors.
                 * <BR>The value of this notification type is <CODE>jmx.monitor.error.attribute</CODE>.
                 */
                // @ts-ignore
                public static readonly OBSERVED_ATTRIBUTE_ERROR: java.lang.String | string
                /**
                 * Notification type denoting that the type of the observed attribute is not correct.
                 * This notification is fired by all kinds of monitors.
                 * <BR>The value of this notification type is <CODE>jmx.monitor.error.type</CODE>.
                 */
                // @ts-ignore
                public static readonly OBSERVED_ATTRIBUTE_TYPE_ERROR: java.lang.String | string
                /**
                 * Notification type denoting that the type of the thresholds, offset or modulus is not correct.
                 * This notification is fired by counter and gauge monitors.
                 * <BR>The value of this notification type is <CODE>jmx.monitor.error.threshold</CODE>.
                 */
                // @ts-ignore
                public static readonly THRESHOLD_ERROR: java.lang.String | string
                /**
                 * Notification type denoting that a non-predefined error type has occurred when trying to get the value of the observed attribute.
                 * This notification is fired by all kinds of monitors.
                 * <BR>The value of this notification type is <CODE>jmx.monitor.error.runtime</CODE>.
                 */
                // @ts-ignore
                public static readonly RUNTIME_ERROR: java.lang.String | string
                /**
                 * Notification type denoting that the observed attribute has reached the threshold value.
                 * This notification is only fired by counter monitors.
                 * <BR>The value of this notification type is <CODE>jmx.monitor.counter.threshold</CODE>.
                 */
                // @ts-ignore
                public static readonly THRESHOLD_VALUE_EXCEEDED: java.lang.String | string
                /**
                 * Notification type denoting that the observed attribute has exceeded the threshold high value.
                 * This notification is only fired by gauge monitors.
                 * <BR>The value of this notification type is <CODE>jmx.monitor.gauge.high</CODE>.
                 */
                // @ts-ignore
                public static readonly THRESHOLD_HIGH_VALUE_EXCEEDED: java.lang.String | string
                /**
                 * Notification type denoting that the observed attribute has exceeded the threshold low value.
                 * This notification is only fired by gauge monitors.
                 * <BR>The value of this notification type is <CODE>jmx.monitor.gauge.low</CODE>.
                 */
                // @ts-ignore
                public static readonly THRESHOLD_LOW_VALUE_EXCEEDED: java.lang.String | string
                /**
                 * Notification type denoting that the observed attribute has matched the "string to compare" value.
                 * This notification is only fired by string monitors.
                 * <BR>The value of this notification type is <CODE>jmx.monitor.string.matches</CODE>.
                 */
                // @ts-ignore
                public static readonly STRING_TO_COMPARE_VALUE_MATCHED: java.lang.String | string
                /**
                 * Notification type denoting that the observed attribute has differed from the "string to compare" value.
                 * This notification is only fired by string monitors.
                 * <BR>The value of this notification type is <CODE>jmx.monitor.string.differs</CODE>.
                 */
                // @ts-ignore
                public static readonly STRING_TO_COMPARE_VALUE_DIFFERED: java.lang.String | string
                /**
                 * Gets the observed object of this monitor notification.
                 * @return The observed object.
                 */
                // @ts-ignore
                public getObservedObject(): javax.management.ObjectName
                /**
                 * Gets the observed attribute of this monitor notification.
                 * @return The observed attribute.
                 */
                // @ts-ignore
                public getObservedAttribute(): string
                /**
                 * Gets the derived gauge of this monitor notification.
                 * @return The derived gauge.
                 */
                // @ts-ignore
                public getDerivedGauge(): any
                /**
                 * Gets the threshold/string (depending on the monitor type) that triggered off this monitor notification.
                 * @return The trigger.
                 */
                // @ts-ignore
                public getTrigger(): any
            }
        }
    }
}
