declare namespace javax {
    namespace management {
        namespace monitor {
            /**
             * Defines a monitor MBean designed to observe the values of a gauge attribute.
             * <P> A gauge monitor observes an attribute that is continuously
             * variable with time. A gauge monitor sends notifications as
             * follows:
             * <UL>
             * <LI> if the attribute value is increasing and becomes equal to or
             * greater than the high threshold value, a {@link
             * MonitorNotification#THRESHOLD_HIGH_VALUE_EXCEEDED threshold high
             * notification} is sent. The notify high flag must be set to
             * <CODE>true</CODE>.
             * <BR>Subsequent crossings of the high threshold value do not cause
             * further notifications unless the attribute value becomes equal to
             * or less than the low threshold value.</LI>
             * <LI> if the attribute value is decreasing and becomes equal to or
             * less than the low threshold value, a {@link
             * MonitorNotification#THRESHOLD_LOW_VALUE_EXCEEDED threshold low
             * notification} is sent. The notify low flag must be set to
             * <CODE>true</CODE>.
             * <BR>Subsequent crossings of the low threshold value do not cause
             * further notifications unless the attribute value becomes equal to
             * or greater than the high threshold value.</LI>
             * </UL>
             * This provides a hysteresis mechanism to avoid repeated triggering
             * of notifications when the attribute value makes small oscillations
             * around the high or low threshold value.
             * <P> If the gauge difference mode is used, the value of the derived
             * gauge is calculated as the difference between the observed gauge
             * values for two successive observations.
             * <BR>The derived gauge value (V[t]) is calculated using the following method:
             * <UL>
             * <LI>V[t] = gauge[t] - gauge[t-GP]</LI>
             * </UL>
             * This implementation of the gauge monitor requires the observed
             * attribute to be of the type integer or floating-point
             * (<CODE>Byte</CODE>, <CODE>Integer</CODE>, <CODE>Short</CODE>,
             * <CODE>Long</CODE>, <CODE>Float</CODE>, <CODE>Double</CODE>).
             * @since 1.5
             */
            // @ts-ignore
            class GaugeMonitor extends javax.management.monitor.Monitor implements javax.management.monitor.GaugeMonitorMBean {
                /**
                 * Default constructor.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Starts the gauge monitor.
                 */
                // @ts-ignore
                public start(): void
                /**
                 * Stops the gauge monitor.
                 */
                // @ts-ignore
                public stop(): void
                /**
                 * Gets the derived gauge of the specified object, if this object is
                 * contained in the set of observed MBeans, or <code>null</code> otherwise.
                 * @param object the name of the MBean.
                 * @return The derived gauge of the specified object.
                 */
                // @ts-ignore
                public getDerivedGauge(object: javax.management.ObjectName): java.lang.Number
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
                public getDerivedGauge(): java.lang.Number
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
                 * Gets the high threshold value common to all observed MBeans.
                 * @return The high threshold value.
                 * @see #setThresholds
                 */
                // @ts-ignore
                public getHighThreshold(): java.lang.Number
                /**
                 * Gets the low threshold value common to all observed MBeans.
                 * @return The low threshold value.
                 * @see #setThresholds
                 */
                // @ts-ignore
                public getLowThreshold(): java.lang.Number
                /**
                 * Sets the high and the low threshold values common to all
                 * observed MBeans.
                 * @param highValue The high threshold value.
                 * @param lowValue The low threshold value.
                 * @exception IllegalArgumentException The specified high/low
                 *  threshold is null or the low threshold is greater than the high
                 *  threshold or the high threshold and the low threshold are not
                 *  of the same type.
                 * @see #getHighThreshold
                 * @see #getLowThreshold
                 */
                // @ts-ignore
                public setThresholds(highValue: java.lang.Number, lowValue: java.lang.Number): void
                /**
                 * Gets the high notification's on/off switch value common to all
                 * observed MBeans.
                 * @return <CODE>true</CODE> if the gauge monitor notifies when
                 *  exceeding the high threshold, <CODE>false</CODE> otherwise.
                 * @see #setNotifyHigh
                 */
                // @ts-ignore
                public getNotifyHigh(): boolean
                /**
                 * Sets the high notification's on/off switch value common to all
                 * observed MBeans.
                 * @param value The high notification's on/off switch value.
                 * @see #getNotifyHigh
                 */
                // @ts-ignore
                public setNotifyHigh(value: boolean): void
                /**
                 * Gets the low notification's on/off switch value common to all
                 * observed MBeans.
                 * @return <CODE>true</CODE> if the gauge monitor notifies when
                 *  exceeding the low threshold, <CODE>false</CODE> otherwise.
                 * @see #setNotifyLow
                 */
                // @ts-ignore
                public getNotifyLow(): boolean
                /**
                 * Sets the low notification's on/off switch value common to all
                 * observed MBeans.
                 * @param value The low notification's on/off switch value.
                 * @see #getNotifyLow
                 */
                // @ts-ignore
                public setNotifyLow(value: boolean): void
                /**
                 * Gets the difference mode flag value common to all observed MBeans.
                 * @return <CODE>true</CODE> if the difference mode is used,
                 *  <CODE>false</CODE> otherwise.
                 * @see #setDifferenceMode
                 */
                // @ts-ignore
                public getDifferenceMode(): boolean
                /**
                 * Sets the difference mode flag value common to all observed MBeans.
                 * @param value The difference mode flag value.
                 * @see #getDifferenceMode
                 */
                // @ts-ignore
                public setDifferenceMode(value: boolean): void
                /**
                 * Returns a <CODE>NotificationInfo</CODE> object containing the
                 * name of the Java class of the notification and the notification
                 * types sent by the gauge monitor.
                 */
                // @ts-ignore
                public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
            }
        }
    }
}
