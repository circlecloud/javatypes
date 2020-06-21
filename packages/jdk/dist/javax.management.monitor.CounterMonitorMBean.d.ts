declare namespace javax {
    namespace management {
        namespace monitor {
            /**
             * Exposes the remote management interface of the counter monitor MBean.
             * @since 1.5
             */
            // @ts-ignore
            interface CounterMonitorMBean extends javax.management.monitor.MonitorMBean {
                /**
                 * Gets the derived gauge.
                 * @return The derived gauge.
                 * @deprecated As of JMX 1.2, replaced by {#link #getDerivedGauge(ObjectName)}
                 */
                // @ts-ignore
                getDerivedGauge(): java.lang.Number
                /**
                 * Gets the derived gauge timestamp.
                 * @return The derived gauge timestamp.
                 * @deprecated As of JMX 1.2, replaced by {#link #getDerivedGaugeTimeStamp(ObjectName)}
                 */
                // @ts-ignore
                getDerivedGaugeTimeStamp(): number /*long*/
                /**
                 * Gets the threshold value.
                 * @return The threshold value.
                 * @see #setThreshold(Number)
                 * @deprecated As of JMX 1.2, replaced by {#link #getThreshold(ObjectName)}
                 */
                // @ts-ignore
                getThreshold(): java.lang.Number
                /**
                 * Sets the threshold value.
                 * @see #getThreshold()
                 * @param value The threshold value.
                 * @exception java.lang.IllegalArgumentException The specified threshold is null or the threshold value is less than zero.
                 * @deprecated As of JMX 1.2, replaced by {#link #setInitThreshold}
                 */
                // @ts-ignore
                setThreshold(value: java.lang.Number): void
                /**
                 * Gets the derived gauge for the specified MBean.
                 * @param object the MBean for which the derived gauge is to be returned
                 * @return The derived gauge for the specified MBean if this MBean is in the
                 *          set of observed MBeans, or <code>null</code> otherwise.
                 */
                // @ts-ignore
                getDerivedGauge(object: javax.management.ObjectName): java.lang.Number
                /**
                 * Gets the derived gauge timestamp for the specified MBean.
                 * @param object the MBean for which the derived gauge timestamp is to be returned
                 * @return The derived gauge timestamp for the specified MBean if this MBean
                 *          is in the set of observed MBeans, or <code>null</code> otherwise.
                 */
                // @ts-ignore
                getDerivedGaugeTimeStamp(object: javax.management.ObjectName): number /*long*/
                /**
                 * Gets the threshold value for the specified MBean.
                 * @param object the MBean for which the threshold value is to be returned
                 * @return The threshold value for the specified MBean if this MBean
                 *          is in the set of observed MBeans, or <code>null</code> otherwise.
                 * @see #setThreshold
                 */
                // @ts-ignore
                getThreshold(object: javax.management.ObjectName): java.lang.Number
                /**
                 * Gets the initial threshold value common to all observed objects.
                 * @return The initial threshold value.
                 * @see #setInitThreshold
                 */
                // @ts-ignore
                getInitThreshold(): java.lang.Number
                /**
                 * Sets the initial threshold value common to all observed MBeans.
                 * @param value The initial threshold value.
                 * @exception java.lang.IllegalArgumentException The specified
                 *  threshold is null or the threshold value is less than zero.
                 * @see #getInitThreshold
                 */
                // @ts-ignore
                setInitThreshold(value: java.lang.Number): void
                /**
                 * Gets the offset value.
                 * @see #setOffset(Number)
                 * @return The offset value.
                 */
                // @ts-ignore
                getOffset(): java.lang.Number
                /**
                 * Sets the offset value.
                 * @param value The offset value.
                 * @exception java.lang.IllegalArgumentException The specified
                 *  offset is null or the offset value is less than zero.
                 * @see #getOffset()
                 */
                // @ts-ignore
                setOffset(value: java.lang.Number): void
                /**
                 * Gets the modulus value.
                 * @return The modulus value.
                 * @see #setModulus
                 */
                // @ts-ignore
                getModulus(): java.lang.Number
                /**
                 * Sets the modulus value.
                 * @param value The modulus value.
                 * @exception java.lang.IllegalArgumentException The specified
                 *  modulus is null or the modulus value is less than zero.
                 * @see #getModulus
                 */
                // @ts-ignore
                setModulus(value: java.lang.Number): void
                /**
                 * Gets the notification's on/off switch value.
                 * @return <CODE>true</CODE> if the counter monitor notifies when
                 *  exceeding the threshold, <CODE>false</CODE> otherwise.
                 * @see #setNotify
                 */
                // @ts-ignore
                getNotify(): boolean
                /**
                 * Sets the notification's on/off switch value.
                 * @param value The notification's on/off switch value.
                 * @see #getNotify
                 */
                // @ts-ignore
                setNotify(value: boolean): void
                /**
                 * Gets the difference mode flag value.
                 * @return <CODE>true</CODE> if the difference mode is used,
                 *  <CODE>false</CODE> otherwise.
                 * @see #setDifferenceMode
                 */
                // @ts-ignore
                getDifferenceMode(): boolean
                /**
                 * Sets the difference mode flag value.
                 * @param value The difference mode flag value.
                 * @see #getDifferenceMode
                 */
                // @ts-ignore
                setDifferenceMode(value: boolean): void
            }
        }
    }
}
