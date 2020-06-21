declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace modeler {
                    /**
                     * <p>Basic implementation of the <code>DynamicMBean</code> interface, which
                     * supports the minimal requirements of the interface contract.</p>
                     * <p>This can be used directly to wrap an existing java bean, or inside
                     * an mlet or anywhere an MBean would be used.
                     * Limitations:
                     * <ul>
                     * <li>Only managed resources of type <code>objectReference</code> are
                     * supported.</li>
                     * <li>Caching of attribute values and operation results is not supported.
                     * All calls to <code>invoke()</code> are immediately executed.</li>
                     * <li>Persistence of MBean attributes and operations is not supported.</li>
                     * <li>All classes referenced as attribute types, operation parameters, or
                     * operation return values must be one of the following:
                     * <ul>
                     * <li>One of the Java primitive types (boolean, byte, char, double,
                     * float, integer, long, short).  Corresponding value will be wrapped
                     * in the appropriate wrapper class automatically.</li>
                     * <li>Operations that return no value should declare a return type of
                     * <code>void</code>.</li>
                     * </ul>
                     * <li>Attribute caching is not supported</li>
                     * </ul>
                     * @author Craig R. McClanahan
                     * @author Costin Manolache
                     */
                    // @ts-ignore
                    class BaseModelMBean extends java.lang.Object implements javax.management.DynamicMBean, javax.management.MBeanRegistration, javax.management.modelmbean.ModelMBeanNotificationBroadcaster {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        oname: javax.management.ObjectName
                        /**
                         * Notification broadcaster for attribute changes.
                         */
                        // @ts-ignore
                        attributeBroadcaster: org.apache.tomcat.util.modeler.BaseNotificationBroadcaster
                        /**
                         * Notification broadcaster for general notifications.
                         */
                        // @ts-ignore
                        generalBroadcaster: org.apache.tomcat.util.modeler.BaseNotificationBroadcaster
                        /**
                         * Metadata for the mbean instance.
                         */
                        // @ts-ignore
                        managedBean: org.apache.tomcat.util.modeler.ManagedBean
                        /**
                         * The managed resource this MBean is associated with (if any).
                         */
                        // @ts-ignore
                        resource: java.lang.Object | any
                        // @ts-ignore
                        resourceType: java.lang.String | string
                        /**
                         * Obtain and return the value of a specific attribute of this MBean.
                         * @param name Name of the requested attribute
                         * @exception AttributeNotFoundException if this attribute is not
                         *   supported by this MBean
                         * @exception MBeanException if the initializer of an object
                         *   throws an exception
                         * @exception ReflectionException if a Java reflection exception
                         *   occurs when invoking the getter
                         */
                        // @ts-ignore
                        public getAttribute(name: java.lang.String | string): any
                        /**
                         * Obtain and return the values of several attributes of this MBean.
                         * @param names Names of the requested attributes
                         */
                        // @ts-ignore
                        public getAttributes(names: java.lang.String[] | string[]): javax.management.AttributeList
                        // @ts-ignore
                        public setManagedBean(managedBean: org.apache.tomcat.util.modeler.ManagedBean): void
                        /**
                         * Return the <code>MBeanInfo</code> object for this MBean.
                         */
                        // @ts-ignore
                        public getMBeanInfo(): javax.management.MBeanInfo
                        /**
                         * Invoke a particular method on this MBean, and return any returned
                         * value.
                         * <p><strong>IMPLEMENTATION NOTE</strong> - This implementation will
                         * attempt to invoke this method on the MBean itself, or (if not
                         * available) on the managed resource object associated with this
                         * MBean.</p>
                         * @param name Name of the operation to be invoked
                         * @param params Array containing the method parameters of this operation
                         * @param signature Array containing the class names representing
                         *   the signature of this operation
                         * @exception MBeanException if the initializer of an object
                         *   throws an exception
                         * @exception ReflectionException if a Java reflection exception
                         *   occurs when invoking a method
                         */
                        // @ts-ignore
                        public invoke(name: java.lang.String | string, params: java.lang.Object[] | any[], signature: java.lang.String[] | string[]): any
                        /**
                         * Set the value of a specific attribute of this MBean.
                         * @param attribute The identification of the attribute to be set
                         *   and the new value
                         * @exception AttributeNotFoundException if this attribute is not
                         *   supported by this MBean
                         * @exception MBeanException if the initializer of an object
                         *   throws an exception
                         * @exception ReflectionException if a Java reflection exception
                         *   occurs when invoking the getter
                         */
                        // @ts-ignore
                        public setAttribute(attribute: javax.management.Attribute): void
                        // @ts-ignore
                        public toString(): string
                        /**
                         * Set the values of several attributes of this MBean.
                         * @param attributes THe names and values to be set
                         * @return The list of attributes that were set and their new values
                         */
                        // @ts-ignore
                        public setAttributes(attributes: javax.management.AttributeList): javax.management.AttributeList
                        /**
                         * Get the instance handle of the object against which we execute
                         * all methods in this ModelMBean management interface.
                         * @return the backend managed object
                         * @exception InstanceNotFoundException if the managed resource object
                         *   cannot be found
                         * @exception InvalidTargetObjectTypeException if the managed resource
                         *   object is of the wrong type
                         * @exception MBeanException if the initializer of the object throws
                         *   an exception
                         * @exception RuntimeOperationsException if the managed resource or the
                         *   resource type is <code>null</code> or invalid
                         */
                        // @ts-ignore
                        public getManagedResource(): any
                        /**
                         * Set the instance handle of the object against which we will execute
                         * all methods in this ModelMBean management interface.
                         * The caller can provide the mbean instance or the object name to
                         * the resource, if needed.
                         * @param resource The resource object to be managed
                         * @param type The type of reference for the managed resource
                         *   ("ObjectReference", "Handle", "IOR", "EJBHandle", or
                         *   "RMIReference")
                         * @exception InstanceNotFoundException if the managed resource object
                         *   cannot be found
                         * @exception MBeanException if the initializer of the object throws
                         *   an exception
                         * @exception RuntimeOperationsException if the managed resource or the
                         *   resource type is <code>null</code> or invalid
                         */
                        // @ts-ignore
                        public setManagedResource(resource: java.lang.Object | any, type: java.lang.String | string): void
                        /**
                         * Add an attribute change notification event listener to this MBean.
                         * @param listener Listener that will receive event notifications
                         * @param name Name of the attribute of interest, or <code>null</code>
                         *   to indicate interest in all attributes
                         * @param handback Handback object to be sent along with event
                         *   notifications
                         * @exception IllegalArgumentException if the listener parameter is null
                         */
                        // @ts-ignore
                        public addAttributeChangeNotificationListener(listener: javax.management.NotificationListener, name: java.lang.String | string, handback: java.lang.Object | any): void
                        /**
                         * Remove an attribute change notification event listener from
                         * this MBean.
                         * @param listener The listener to be removed
                         * @param name The attribute name for which no more events are required
                         * @exception ListenerNotFoundException if this listener is not
                         *   registered in the MBean
                         */
                        // @ts-ignore
                        public removeAttributeChangeNotificationListener(listener: javax.management.NotificationListener, name: java.lang.String | string): void
                        /**
                         * Send an <code>AttributeChangeNotification</code> to all registered
                         * listeners.
                         * @param notification The <code>AttributeChangeNotification</code>
                         *   that will be passed
                         * @exception MBeanException if an object initializer throws an
                         *   exception
                         * @exception RuntimeOperationsException wraps IllegalArgumentException
                         *   when the specified notification is <code>null</code> or invalid
                         */
                        // @ts-ignore
                        public sendAttributeChangeNotification(notification: javax.management.AttributeChangeNotification): void
                        /**
                         * Send an <code>AttributeChangeNotification</code> to all registered
                         * listeners.
                         * @param oldValue The original value of the <code>Attribute</code>
                         * @param newValue The new value of the <code>Attribute</code>
                         * @exception MBeanException if an object initializer throws an
                         *   exception
                         * @exception RuntimeOperationsException wraps IllegalArgumentException
                         *   when the specified notification is <code>null</code> or invalid
                         */
                        // @ts-ignore
                        public sendAttributeChangeNotification(oldValue: javax.management.Attribute, newValue: javax.management.Attribute): void
                        /**
                         * Send a <code>Notification</code> to all registered listeners as a
                         * <code>jmx.modelmbean.general</code> notification.
                         * @param notification The <code>Notification</code> that will be passed
                         * @exception MBeanException if an object initializer throws an
                         *   exception
                         * @exception RuntimeOperationsException wraps IllegalArgumentException
                         *   when the specified notification is <code>null</code> or invalid
                         */
                        // @ts-ignore
                        public sendNotification(notification: javax.management.Notification): void
                        /**
                         * Send a <code>Notification</code> which contains the specified string
                         * as a <code>jmx.modelmbean.generic</code> notification.
                         * @param message The message string to be passed
                         * @exception MBeanException if an object initializer throws an
                         *   exception
                         * @exception RuntimeOperationsException wraps IllegalArgumentException
                         *   when the specified notification is <code>null</code> or invalid
                         */
                        // @ts-ignore
                        public sendNotification(message: java.lang.String | string): void
                        /**
                         * Add a notification event listener to this MBean.
                         * @param listener Listener that will receive event notifications
                         * @param filter Filter object used to filter event notifications
                         *   actually delivered, or <code>null</code> for no filtering
                         * @param handback Handback object to be sent along with event
                         *   notifications
                         * @exception IllegalArgumentException if the listener parameter is null
                         */
                        // @ts-ignore
                        public addNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: java.lang.Object | any): void
                        /**
                         * Return an <code>MBeanNotificationInfo</code> object describing the
                         * notifications sent by this MBean.
                         */
                        // @ts-ignore
                        public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
                        /**
                         * Remove a notification event listener from this MBean.
                         * @param listener The listener to be removed (any and all registrations
                         *   for this listener will be eliminated)
                         * @exception ListenerNotFoundException if this listener is not
                         *   registered in the MBean
                         */
                        // @ts-ignore
                        public removeNotificationListener(listener: javax.management.NotificationListener): void
                        // @ts-ignore
                        public getModelerType(): string
                        // @ts-ignore
                        public getClassName(): string
                        // @ts-ignore
                        public getJmxName(): javax.management.ObjectName
                        // @ts-ignore
                        public getObjectName(): string
                        // @ts-ignore
                        public preRegister(server: javax.management.MBeanServer, name: javax.management.ObjectName): javax.management.ObjectName
                        // @ts-ignore
                        public postRegister(registrationDone: java.lang.Boolean): void
                        // @ts-ignore
                        public preDeregister(): void
                        // @ts-ignore
                        public postDeregister(): void
                    }
                }
            }
        }
    }
}
