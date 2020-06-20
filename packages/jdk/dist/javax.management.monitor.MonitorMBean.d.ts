declare namespace javax {
    namespace management {
        namespace monitor {
            /**
             * Exposes the remote management interface of monitor MBeans.
             * @since 1.5
             */
            // @ts-ignore
            interface MonitorMBean {
                /**
                 * Starts the monitor.
                 */
                // @ts-ignore
                start(): void
                /**
                 * Stops the monitor.
                 */
                // @ts-ignore
                stop(): void
                /**
                 * Adds the specified object in the set of observed MBeans.
                 * @param object The object to observe.
                 * @exception java.lang.IllegalArgumentException the specified object is null.
                 */
                // @ts-ignore
                addObservedObject(object: javax.management.ObjectName): void
                /**
                 * Removes the specified object from the set of observed MBeans.
                 * @param object The object to remove.
                 */
                // @ts-ignore
                removeObservedObject(object: javax.management.ObjectName): void
                /**
                 * Tests whether the specified object is in the set of observed MBeans.
                 * @param object The object to check.
                 * @return <CODE>true</CODE> if the specified object is in the set, <CODE>false</CODE> otherwise.
                 */
                // @ts-ignore
                containsObservedObject(object: javax.management.ObjectName): boolean
                /**
                 * Returns an array containing the objects being observed.
                 * @return The objects being observed.
                 */
                // @ts-ignore
                getObservedObjects(): javax.management.ObjectName[]
                /**
                 * Gets the object name of the object being observed.
                 * @return The object being observed.
                 * @see #setObservedObject
                 * @deprecated As of JMX 1.2, replaced by {#link #getObservedObjects}
                 */
                // @ts-ignore
                getObservedObject(): javax.management.ObjectName
                /**
                 * Sets the object to observe identified by its object name.
                 * @param object The object to observe.
                 * @see #getObservedObject
                 * @deprecated As of JMX 1.2, replaced by {#link #addObservedObject}
                 */
                // @ts-ignore
                setObservedObject(object: javax.management.ObjectName): void
                /**
                 * Gets the attribute being observed.
                 * @return The attribute being observed.
                 * @see #setObservedAttribute
                 */
                // @ts-ignore
                getObservedAttribute(): java.lang.String
                /**
                 * Sets the attribute to observe.
                 * @param attribute The attribute to observe.
                 * @see #getObservedAttribute
                 */
                // @ts-ignore
                setObservedAttribute(attribute: string): void
                /**
                 * Gets the granularity period (in milliseconds).
                 * @return The granularity period.
                 * @see #setGranularityPeriod
                 */
                // @ts-ignore
                getGranularityPeriod(): long
                /**
                 * Sets the granularity period (in milliseconds).
                 * @param period The granularity period.
                 * @exception java.lang.IllegalArgumentException The granularity
                 *  period is less than or equal to zero.
                 * @see #getGranularityPeriod
                 */
                // @ts-ignore
                setGranularityPeriod(period: number /*long*/): void
                /**
                 * Tests if the monitor MBean is active.
                 * A monitor MBean is marked active when the {@link #start start} method is called.
                 * It becomes inactive when the {@link #stop stop} method is called.
                 * @return <CODE>true</CODE> if the monitor MBean is active, <CODE>false</CODE> otherwise.
                 */
                // @ts-ignore
                isActive(): boolean
            }
        }
    }
}
