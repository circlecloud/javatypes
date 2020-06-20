declare namespace javax {
    namespace management {
        namespace monitor {
            /**
             * Exposes the remote management interface of the gauge monitor MBean.
             * @since 1.5
             */
            // @ts-ignore
            interface GaugeMonitorMBean extends javax.management.monitor.MonitorMBean {
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
                getDerivedGaugeTimeStamp(): long
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
                getDerivedGaugeTimeStamp(object: javax.management.ObjectName): long
                /**
                 * Gets the high threshold value.
                 * @return The high threshold value.
                 */
                // @ts-ignore
                getHighThreshold(): java.lang.Number
                /**
                 * Gets the low threshold value.
                 * @return The low threshold value.
                 */
                // @ts-ignore
                getLowThreshold(): java.lang.Number
                /**
                 * Sets the high and the low threshold values.
                 * @param highValue The high threshold value.
                 * @param lowValue The low threshold value.
                 * @exception java.lang.IllegalArgumentException The specified high/low threshold is null
                 *  or the low threshold is greater than the high threshold
                 *  or the high threshold and the low threshold are not of the same type.
                 */
                // @ts-ignore
                setThresholds(highValue: java.lang.Number, lowValue: java.lang.Number): void
                /**
                 * Gets the high notification's on/off switch value.
                 * @return <CODE>true</CODE> if the gauge monitor notifies when
                 *  exceeding the high threshold, <CODE>false</CODE> otherwise.
                 * @see #setNotifyHigh
                 */
                // @ts-ignore
                getNotifyHigh(): boolean
                /**
                 * Sets the high notification's on/off switch value.
                 * @param value The high notification's on/off switch value.
                 * @see #getNotifyHigh
                 */
                // @ts-ignore
                setNotifyHigh(value: boolean): void
                /**
                 * Gets the low notification's on/off switch value.
                 * @return <CODE>true</CODE> if the gauge monitor notifies when
                 *  exceeding the low threshold, <CODE>false</CODE> otherwise.
                 * @see #setNotifyLow
                 */
                // @ts-ignore
                getNotifyLow(): boolean
                /**
                 * Sets the low notification's on/off switch value.
                 * @param value The low notification's on/off switch value.
                 * @see #getNotifyLow
                 */
                // @ts-ignore
                setNotifyLow(value: boolean): void
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
