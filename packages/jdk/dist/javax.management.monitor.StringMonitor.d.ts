declare namespace javax {
    namespace management {
        namespace monitor {
            /**
             * Defines a monitor MBean designed to observe the values of a string
             * attribute.
             * <P>
             * A string monitor sends notifications as follows:
             * <UL>
             * <LI> if the attribute value matches the string to compare value,
             * a {@link MonitorNotification#STRING_TO_COMPARE_VALUE_MATCHED
             * match notification} is sent.
             * The notify match flag must be set to <CODE>true</CODE>.
             * <BR>Subsequent matchings of the string to compare values do not
             * cause further notifications unless
             * the attribute value differs from the string to compare value.
             * <LI> if the attribute value differs from the string to compare value,
             * a {@link MonitorNotification#STRING_TO_COMPARE_VALUE_DIFFERED
             * differ notification} is sent.
             * The notify differ flag must be set to <CODE>true</CODE>.
             * <BR>Subsequent differences from the string to compare value do
             * not cause further notifications unless
             * the attribute value matches the string to compare value.
             * </UL>
             * @since 1.5
             */
            // @ts-ignore
            class StringMonitor extends javax.management.monitor.Monitor implements javax.management.monitor.StringMonitorMBean {
                /**
                 * Default constructor.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Starts the string monitor.
                 */
                // @ts-ignore
                public start(): void
                /**
                 * Stops the string monitor.
                 */
                // @ts-ignore
                public stop(): void
                /**
                 * Gets the derived gauge of the specified object, if this object is
                 * contained in the set of observed MBeans, or <code>null</code> otherwise.
                 * @param object the name of the MBean whose derived gauge is required.
                 * @return The derived gauge of the specified object.
                 */
                // @ts-ignore
                public getDerivedGauge(object: javax.management.ObjectName): string
                /**
                 * Gets the derived gauge timestamp of the specified object, if
                 * this object is contained in the set of observed MBeans, or
                 * <code>0</code> otherwise.
                 * @param object the name of the object whose derived gauge
                 *  timestamp is to be returned.
                 * @return The derived gauge timestamp of the specified object.
                 */
                // @ts-ignore
                public getDerivedGaugeTimeStamp(object: javax.management.ObjectName): number /*long*/
                /**
                 * Returns the derived gauge of the first object in the set of
                 * observed MBeans.
                 * @return The derived gauge.
                 * @deprecated As of JMX 1.2, replaced by
                 *  {#link #getDerivedGauge(ObjectName)}
                 */
                // @ts-ignore
                public getDerivedGauge(): string
                /**
                 * Gets the derived gauge timestamp of the first object in the set
                 * of observed MBeans.
                 * @return The derived gauge timestamp.
                 * @deprecated As of JMX 1.2, replaced by
                 *  {#link #getDerivedGaugeTimeStamp(ObjectName)}
                 */
                // @ts-ignore
                public getDerivedGaugeTimeStamp(): number /*long*/
                /**
                 * Gets the string to compare with the observed attribute common
                 * to all observed MBeans.
                 * @return The string value.
                 * @see #setStringToCompare
                 */
                // @ts-ignore
                public getStringToCompare(): string
                /**
                 * Sets the string to compare with the observed attribute common
                 * to all observed MBeans.
                 * @param value The string value.
                 * @exception IllegalArgumentException The specified
                 *  string to compare is null.
                 * @see #getStringToCompare
                 */
                // @ts-ignore
                public setStringToCompare(value: java.lang.String | string): void
                /**
                 * Gets the matching notification's on/off switch value common to
                 * all observed MBeans.
                 * @return <CODE>true</CODE> if the string monitor notifies when
                 *  matching the string to compare, <CODE>false</CODE> otherwise.
                 * @see #setNotifyMatch
                 */
                // @ts-ignore
                public getNotifyMatch(): boolean
                /**
                 * Sets the matching notification's on/off switch value common to
                 * all observed MBeans.
                 * @param value The matching notification's on/off switch value.
                 * @see #getNotifyMatch
                 */
                // @ts-ignore
                public setNotifyMatch(value: boolean): void
                /**
                 * Gets the differing notification's on/off switch value common to
                 * all observed MBeans.
                 * @return <CODE>true</CODE> if the string monitor notifies when
                 *  differing from the string to compare, <CODE>false</CODE> otherwise.
                 * @see #setNotifyDiffer
                 */
                // @ts-ignore
                public getNotifyDiffer(): boolean
                /**
                 * Sets the differing notification's on/off switch value common to
                 * all observed MBeans.
                 * @param value The differing notification's on/off switch value.
                 * @see #getNotifyDiffer
                 */
                // @ts-ignore
                public setNotifyDiffer(value: boolean): void
                /**
                 * Returns a <CODE>NotificationInfo</CODE> object containing the name of
                 * the Java class of the notification and the notification types sent by
                 * the string monitor.
                 */
                // @ts-ignore
                public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
            }
        }
    }
}
