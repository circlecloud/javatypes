declare namespace javax {
    namespace management {
        namespace monitor {
            /**
             * Exposes the remote management interface of the string monitor MBean.
             * @since 1.5
             */
            // @ts-ignore
            interface StringMonitorMBean extends javax.management.monitor.MonitorMBean {
                /**
                 * Gets the derived gauge.
                 * @return The derived gauge.
                 * @deprecated As of JMX 1.2, replaced by {#link #getDerivedGauge(ObjectName)}
                 */
                // @ts-ignore
                getDerivedGauge(): java.lang.String
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
                getDerivedGauge(object: javax.management.ObjectName): java.lang.String
                /**
                 * Gets the derived gauge timestamp for the specified MBean.
                 * @param object the MBean for which the derived gauge timestamp is to be returned
                 * @return The derived gauge timestamp for the specified MBean if this MBean
                 *          is in the set of observed MBeans, or <code>null</code> otherwise.
                 */
                // @ts-ignore
                getDerivedGaugeTimeStamp(object: javax.management.ObjectName): long
                /**
                 * Gets the string to compare with the observed attribute.
                 * @return The string value.
                 * @see #setStringToCompare
                 */
                // @ts-ignore
                getStringToCompare(): java.lang.String
                /**
                 * Sets the string to compare with the observed attribute.
                 * @param value The string value.
                 * @exception java.lang.IllegalArgumentException The specified
                 *  string to compare is null.
                 * @see #getStringToCompare
                 */
                // @ts-ignore
                setStringToCompare(value: string): void
                /**
                 * Gets the matching notification's on/off switch value.
                 * @return <CODE>true</CODE> if the string monitor notifies when
                 *  matching, <CODE>false</CODE> otherwise.
                 * @see #setNotifyMatch
                 */
                // @ts-ignore
                getNotifyMatch(): boolean
                /**
                 * Sets the matching notification's on/off switch value.
                 * @param value The matching notification's on/off switch value.
                 * @see #getNotifyMatch
                 */
                // @ts-ignore
                setNotifyMatch(value: boolean): void
                /**
                 * Gets the differing notification's on/off switch value.
                 * @return <CODE>true</CODE> if the string monitor notifies when
                 *  differing, <CODE>false</CODE> otherwise.
                 * @see #setNotifyDiffer
                 */
                // @ts-ignore
                getNotifyDiffer(): boolean
                /**
                 * Sets the differing notification's on/off switch value.
                 * @param value The differing notification's on/off switch value.
                 * @see #getNotifyDiffer
                 */
                // @ts-ignore
                setNotifyDiffer(value: boolean): void
            }
        }
    }
}
