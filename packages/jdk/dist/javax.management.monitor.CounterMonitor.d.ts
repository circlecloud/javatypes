declare namespace javax {
    namespace management {
        namespace monitor {
            /**
             * Defines a monitor MBean designed to observe the values of a counter
             * attribute.
             * <P> A counter monitor sends a {@link
             * MonitorNotification#THRESHOLD_VALUE_EXCEEDED threshold
             * notification} when the value of the counter reaches or exceeds a
             * threshold known as the comparison level.  The notify flag must be
             * set to <CODE>true</CODE>.
             * <P> In addition, an offset mechanism enables particular counting
             * intervals to be detected.  If the offset value is not zero,
             * whenever the threshold is triggered by the counter value reaching a
             * comparison level, that comparison level is incremented by the
             * offset value.  This is regarded as taking place instantaneously,
             * that is, before the count is incremented.  Thus, for each level,
             * the threshold triggers an event notification every time the count
             * increases by an interval equal to the offset value.
             * <P> If the counter can wrap around its maximum value, the modulus
             * needs to be specified.  The modulus is the value at which the
             * counter is reset to zero.
             * <P> If the counter difference mode is used, the value of the
             * derived gauge is calculated as the difference between the observed
             * counter values for two successive observations.  If this difference
             * is negative, the value of the derived gauge is incremented by the
             * value of the modulus.  The derived gauge value (V[t]) is calculated
             * using the following method:
             * <UL>
             * <LI>if (counter[t] - counter[t-GP]) is positive then
             * V[t] = counter[t] - counter[t-GP]
             * <LI>if (counter[t] - counter[t-GP]) is negative then
             * V[t] = counter[t] - counter[t-GP] + MODULUS
             * </UL>
             * This implementation of the counter monitor requires the observed
             * attribute to be of the type integer (<CODE>Byte</CODE>,
             * <CODE>Integer</CODE>, <CODE>Short</CODE>, <CODE>Long</CODE>).
             * @since 1.5
             */
            // @ts-ignore
            class CounterMonitor extends javax.management.monitor.Monitor implements javax.management.monitor.CounterMonitorMBean {
                /**
                 * Default constructor.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Starts the counter monitor.
                 */
                // @ts-ignore
                public start(): void
                /**
                 * Stops the counter monitor.
                 */
                // @ts-ignore
                public stop(): void
                /**
                 * Gets the derived gauge of the specified object, if this object is
                 * contained in the set of observed MBeans, or <code>null</code> otherwise.
                 * @param object the name of the object whose derived gauge is to
                 *  be returned.
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
                 * Gets the current threshold value of the specified object, if
                 * this object is contained in the set of observed MBeans, or
                 * <code>null</code> otherwise.
                 * @param object the name of the object whose threshold is to be
                 *  returned.
                 * @return The threshold value of the specified object.
                 */
                // @ts-ignore
                public getThreshold(object: javax.management.ObjectName): java.lang.Number
                /**
                 * Gets the initial threshold value common to all observed objects.
                 * @return The initial threshold.
                 * @see #setInitThreshold
                 */
                // @ts-ignore
                public getInitThreshold(): java.lang.Number
                /**
                 * Sets the initial threshold value common to all observed objects.
                 * <BR>The current threshold of every object in the set of
                 * observed MBeans is updated consequently.
                 * @param value The initial threshold value.
                 * @exception IllegalArgumentException The specified
                 *  threshold is null or the threshold value is less than zero.
                 * @see #getInitThreshold
                 */
                // @ts-ignore
                public setInitThreshold(value: java.lang.Number): void
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
                 * Gets the threshold value of the first object in the set of
                 * observed MBeans.
                 * @return The threshold value.
                 * @see #setThreshold
                 * @deprecated As of JMX 1.2, replaced by {#link #getThreshold(ObjectName)}
                 */
                // @ts-ignore
                public getThreshold(): java.lang.Number
                /**
                 * Sets the initial threshold value.
                 * @param value The initial threshold value.
                 * @exception IllegalArgumentException The specified threshold is
                 *  null or the threshold value is less than zero.
                 * @see #getThreshold()
                 * @deprecated As of JMX 1.2, replaced by {#link #setInitThreshold}
                 */
                // @ts-ignore
                public setThreshold(value: java.lang.Number): void
                /**
                 * Gets the offset value common to all observed MBeans.
                 * @return The offset value.
                 * @see #setOffset
                 */
                // @ts-ignore
                public getOffset(): java.lang.Number
                /**
                 * Sets the offset value common to all observed MBeans.
                 * @param value The offset value.
                 * @exception IllegalArgumentException The specified
                 *  offset is null or the offset value is less than zero.
                 * @see #getOffset
                 */
                // @ts-ignore
                public setOffset(value: java.lang.Number): void
                /**
                 * Gets the modulus value common to all observed MBeans.
                 * @see #setModulus
                 * @return The modulus value.
                 */
                // @ts-ignore
                public getModulus(): java.lang.Number
                /**
                 * Sets the modulus value common to all observed MBeans.
                 * @param value The modulus value.
                 * @exception IllegalArgumentException The specified
                 *  modulus is null or the modulus value is less than zero.
                 * @see #getModulus
                 */
                // @ts-ignore
                public setModulus(value: java.lang.Number): void
                /**
                 * Gets the notification's on/off switch value common to all
                 * observed MBeans.
                 * @return <CODE>true</CODE> if the counter monitor notifies when
                 *  exceeding the threshold, <CODE>false</CODE> otherwise.
                 * @see #setNotify
                 */
                // @ts-ignore
                public getNotify(): boolean
                /**
                 * Sets the notification's on/off switch value common to all
                 * observed MBeans.
                 * @param value The notification's on/off switch value.
                 * @see #getNotify
                 */
                // @ts-ignore
                public setNotify(value: boolean): void
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
                 * types sent by the counter monitor.
                 */
                // @ts-ignore
                public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
            }
        }
    }
}
