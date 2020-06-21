declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace modeler {
                    /**
                     * <p>Internal configuration information for a managed bean (MBean)
                     * descriptor.</p>
                     * @author Craig R. McClanahan
                     */
                    // @ts-ignore
                    class ManagedBean extends java.lang.Object implements java.io.Serializable {
                        /**
                         * Constructor. Will add default attributes.
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        className: java.lang.String | string
                        // @ts-ignore
                        description: java.lang.String | string
                        // @ts-ignore
                        domain: java.lang.String | string
                        // @ts-ignore
                        group: java.lang.String | string
                        // @ts-ignore
                        name: java.lang.String | string
                        // @ts-ignore
                        type: java.lang.String | string
                        /**
                         * @return the collection of attributes for this MBean.
                         */
                        // @ts-ignore
                        public getAttributes(): org.apache.tomcat.util.modeler.AttributeInfo[]
                        /**
                         * The fully qualified name of the Java class of the MBean
                         * described by this descriptor.  If not specified, the standard JMX
                         * class (<code>javax.management.modelmbean.RequiredModeLMBean</code>)
                         * will be utilized.
                         * @return the class name
                         */
                        // @ts-ignore
                        public getClassName(): string
                        // @ts-ignore
                        public setClassName(className: java.lang.String | string): void
                        /**
                         * @return the human-readable description of this MBean.
                         */
                        // @ts-ignore
                        public getDescription(): string
                        // @ts-ignore
                        public setDescription(description: java.lang.String | string): void
                        /**
                         * @return the (optional) <code>ObjectName</code> domain in which
                         *   this MBean should be registered in the MBeanServer.
                         */
                        // @ts-ignore
                        public getDomain(): string
                        // @ts-ignore
                        public setDomain(domain: java.lang.String | string): void
                        /**
                         * @return the (optional) group to which this MBean belongs.
                         */
                        // @ts-ignore
                        public getGroup(): string
                        // @ts-ignore
                        public setGroup(group: java.lang.String | string): void
                        /**
                         * @return the name of this managed bean, which must be unique
                         *   among all MBeans managed by a particular MBeans server.
                         */
                        // @ts-ignore
                        public getName(): string
                        // @ts-ignore
                        public setName(name: java.lang.String | string): void
                        /**
                         * @return the collection of notifications for this MBean.
                         */
                        // @ts-ignore
                        public getNotifications(): org.apache.tomcat.util.modeler.NotificationInfo[]
                        /**
                         * @return the collection of operations for this MBean.
                         */
                        // @ts-ignore
                        public getOperations(): org.apache.tomcat.util.modeler.OperationInfo[]
                        /**
                         * @return the fully qualified name of the Java class of the resource
                         *  implementation class described by the managed bean described
                         *  by this descriptor.
                         */
                        // @ts-ignore
                        public getType(): string
                        // @ts-ignore
                        public setType(type: java.lang.String | string): void
                        /**
                         * Add a new attribute to the set of attributes for this MBean.
                         * @param attribute The new attribute descriptor
                         */
                        // @ts-ignore
                        public addAttribute(attribute: org.apache.tomcat.util.modeler.AttributeInfo): void
                        /**
                         * Add a new notification to the set of notifications for this MBean.
                         * @param notification The new notification descriptor
                         */
                        // @ts-ignore
                        public addNotification(notification: org.apache.tomcat.util.modeler.NotificationInfo): void
                        /**
                         * Add a new operation to the set of operations for this MBean.
                         * @param operation The new operation descriptor
                         */
                        // @ts-ignore
                        public addOperation(operation: org.apache.tomcat.util.modeler.OperationInfo): void
                        /**
                         * Create and return a <code>ModelMBean</code> that has been
                         * preconfigured with the <code>ModelMBeanInfo</code> information
                         * for this managed bean, and is associated with the specified
                         * managed object instance.  The returned <code>ModelMBean</code>
                         * will <strong>NOT</strong> have been registered with our
                         * <code>MBeanServer</code>.
                         * @param instance Instanced of the managed object, or <code>null</code>
                         *   for no associated instance
                         * @return the MBean
                         * @exception InstanceNotFoundException if the managed resource
                         *   object cannot be found
                         * @exception MBeanException if a problem occurs instantiating the
                         *   <code>ModelMBean</code> instance
                         * @exception RuntimeOperationsException if a JMX runtime error occurs
                         */
                        // @ts-ignore
                        public createMBean(instance: java.lang.Object | any): javax.management.DynamicMBean
                        /**
                         * Return a string representation of this managed bean.
                         */
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public getSetter(aname: java.lang.String | string, bean: org.apache.tomcat.util.modeler.BaseModelMBean, resource: java.lang.Object | any): java.lang.reflect.Method
                        // @ts-ignore
                        public getInvoke(aname: java.lang.String | string, params: java.lang.Object[] | any[], signature: java.lang.String[] | string[], bean: org.apache.tomcat.util.modeler.BaseModelMBean, resource: java.lang.Object | any): java.lang.reflect.Method
                    }
                }
            }
        }
    }
}
