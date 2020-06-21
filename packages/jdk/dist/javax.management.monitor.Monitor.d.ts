declare namespace javax {
    namespace management {
        namespace monitor {
            /**
             * Defines the part common to all monitor MBeans.
             * A monitor MBean monitors values of an attribute common to a set of observed
             * MBeans. The observed attribute is monitored at intervals specified by the
             * granularity period. A gauge value (derived gauge) is derived from the values
             * of the observed attribute.
             * @since 1.5
             */
            // @ts-ignore
            abstract class Monitor extends javax.management.NotificationBroadcasterSupport implements javax.management.monitor.MonitorMBean, javax.management.MBeanRegistration {
                // @ts-ignore
                constructor()
                /**
                 * The amount by which the capacity of the monitor arrays are
                 * automatically incremented when their size becomes greater than
                 * their capacity.
                 */
                // @ts-ignore
                static readonly capacityIncrement: number /*int*/
                /**
                 * The number of valid components in the vector of observed objects.
                 */
                // @ts-ignore
                elementCount: number /*int*/
                /**
                 * Monitor errors that have already been notified.
                 * @deprecated equivalent to {#link #alreadyNotifieds}[0].
                 */
                // @ts-ignore
                alreadyNotified: number /*int*/
                /**
                 * <p>Selected monitor errors that have already been notified.</p>
                 * <p>Each element in this array corresponds to an observed object
                 * in the vector.  It contains a bit mask of the flags {@link
                 * #OBSERVED_OBJECT_ERROR_NOTIFIED} etc, indicating whether the
                 * corresponding notification has already been sent for the MBean
                 * being monitored.</p>
                 */
                // @ts-ignore
                alreadyNotifieds: number /*int*/[]
                /**
                 * Reference to the MBean server.  This reference is null when the
                 * monitor MBean is not registered in an MBean server.  This
                 * reference is initialized before the monitor MBean is registered
                 * in the MBean server.
                 * @see #preRegister(MBeanServer server, ObjectName name)
                 */
                // @ts-ignore
                server: javax.management.MBeanServer
                /**
                 * This flag is used to reset the {@link #alreadyNotifieds
                 * alreadyNotifieds} monitor attribute.
                 */
                // @ts-ignore
                static readonly RESET_FLAGS_ALREADY_NOTIFIED: number /*int*/
                /**
                 * Flag denoting that a notification has occurred after changing
                 * the observed object.  This flag is used to check that the new
                 * observed object is registered in the MBean server at the time
                 * of the first notification.
                 */
                // @ts-ignore
                static readonly OBSERVED_OBJECT_ERROR_NOTIFIED: number /*int*/
                /**
                 * Flag denoting that a notification has occurred after changing
                 * the observed attribute.  This flag is used to check that the
                 * new observed attribute belongs to the observed object at the
                 * time of the first notification.
                 */
                // @ts-ignore
                static readonly OBSERVED_ATTRIBUTE_ERROR_NOTIFIED: number /*int*/
                /**
                 * Flag denoting that a notification has occurred after changing
                 * the observed object or the observed attribute.  This flag is
                 * used to check that the observed attribute type is correct
                 * (depending on the monitor in use) at the time of the first
                 * notification.
                 */
                // @ts-ignore
                static readonly OBSERVED_ATTRIBUTE_TYPE_ERROR_NOTIFIED: number /*int*/
                /**
                 * Flag denoting that a notification has occurred after changing
                 * the observed object or the observed attribute.  This flag is
                 * used to notify any exception (except the cases described above)
                 * when trying to get the value of the observed attribute at the
                 * time of the first notification.
                 */
                // @ts-ignore
                static readonly RUNTIME_ERROR_NOTIFIED: number /*int*/
                /**
                 * This field is retained for compatibility but should not be referenced.
                 * @deprecated No replacement.
                 */
                // @ts-ignore
                dbgTag: java.lang.String | string
                /**
                 * Allows the monitor MBean to perform any operations it needs
                 * before being registered in the MBean server.
                 * <P>
                 * Initializes the reference to the MBean server.
                 * @param server The MBean server in which the monitor MBean will
                 *  be registered.
                 * @param name The object name of the monitor MBean.
                 * @return The name of the monitor MBean registered.
                 * @exception Exception
                 */
                // @ts-ignore
                public preRegister(server: javax.management.MBeanServer, name: javax.management.ObjectName): javax.management.ObjectName
                /**
                 * Allows the monitor MBean to perform any operations needed after
                 * having been registered in the MBean server or after the
                 * registration has failed.
                 * <P>
                 * Not used in this context.
                 */
                // @ts-ignore
                public postRegister(registrationDone: java.lang.Boolean): void
                /**
                 * Allows the monitor MBean to perform any operations it needs
                 * before being unregistered by the MBean server.
                 * <P>
                 * Stops the monitor.
                 * @exception Exception
                 */
                // @ts-ignore
                public preDeregister(): void
                /**
                 * Allows the monitor MBean to perform any operations needed after
                 * having been unregistered by the MBean server.
                 * <P>
                 * Not used in this context.
                 */
                // @ts-ignore
                public postDeregister(): void
                /**
                 * Starts the monitor.
                 */
                // @ts-ignore
                public abstract start(): void
                /**
                 * Stops the monitor.
                 */
                // @ts-ignore
                public abstract stop(): void
                /**
                 * Returns the object name of the first object in the set of observed
                 * MBeans, or <code>null</code> if there is no such object.
                 * @return The object being observed.
                 * @see #setObservedObject(ObjectName)
                 * @deprecated As of JMX 1.2, replaced by {#link #getObservedObjects}
                 */
                // @ts-ignore
                public getObservedObject(): javax.management.ObjectName
                /**
                 * Removes all objects from the set of observed objects, and then adds the
                 * specified object.
                 * @param object The object to observe.
                 * @exception IllegalArgumentException The specified
                 *  object is null.
                 * @see #getObservedObject()
                 * @deprecated As of JMX 1.2, replaced by {#link #addObservedObject}
                 */
                // @ts-ignore
                public setObservedObject(object: javax.management.ObjectName): void
                /**
                 * Adds the specified object in the set of observed MBeans, if this object
                 * is not already present.
                 * @param object The object to observe.
                 * @exception IllegalArgumentException The specified object is null.
                 */
                // @ts-ignore
                public addObservedObject(object: javax.management.ObjectName): void
                /**
                 * Removes the specified object from the set of observed MBeans.
                 * @param object The object to remove.
                 */
                // @ts-ignore
                public removeObservedObject(object: javax.management.ObjectName): void
                /**
                 * Tests whether the specified object is in the set of observed MBeans.
                 * @param object The object to check.
                 * @return <CODE>true</CODE> if the specified object is present,
                 *  <CODE>false</CODE> otherwise.
                 */
                // @ts-ignore
                public containsObservedObject(object: javax.management.ObjectName): boolean
                /**
                 * Returns an array containing the objects being observed.
                 * @return The objects being observed.
                 */
                // @ts-ignore
                public getObservedObjects(): javax.management.ObjectName[]
                /**
                 * Gets the attribute being observed.
                 * <BR>The observed attribute is not initialized by default (set to null).
                 * @return The attribute being observed.
                 * @see #setObservedAttribute
                 */
                // @ts-ignore
                public getObservedAttribute(): string
                /**
                 * Sets the attribute to observe.
                 * <BR>The observed attribute is not initialized by default (set to null).
                 * @param attribute The attribute to observe.
                 * @exception IllegalArgumentException The specified
                 *  attribute is null.
                 * @see #getObservedAttribute
                 */
                // @ts-ignore
                public setObservedAttribute(attribute: java.lang.String | string): void
                /**
                 * Gets the granularity period (in milliseconds).
                 * <BR>The default value of the granularity period is 10 seconds.
                 * @return The granularity period value.
                 * @see #setGranularityPeriod
                 */
                // @ts-ignore
                public getGranularityPeriod(): number /*long*/
                /**
                 * Sets the granularity period (in milliseconds).
                 * <BR>The default value of the granularity period is 10 seconds.
                 * @param period The granularity period value.
                 * @exception IllegalArgumentException The granularity
                 *  period is less than or equal to zero.
                 * @see #getGranularityPeriod
                 */
                // @ts-ignore
                public setGranularityPeriod(period: number /*long*/): void
                /**
                 * Tests whether the monitor MBean is active.  A monitor MBean is
                 * marked active when the {@link #start start} method is called.
                 * It becomes inactive when the {@link #stop stop} method is
                 * called.
                 * @return <CODE>true</CODE> if the monitor MBean is active,
                 *  <CODE>false</CODE> otherwise.
                 */
                // @ts-ignore
                public isActive(): boolean
            }
        }
    }
}
