declare namespace javax {
    namespace management {
        namespace modelmbean {
            /**
             * This interface must be implemented by the ModelMBeans. An implementation of this interface
             * must be shipped with every JMX Agent.
             * <P>
             * Java resources wishing to be manageable instantiate the ModelMBean using the MBeanServer's
             * createMBean method.  The resource then sets the ModelMBeanInfo (with Descriptors) for the ModelMBean
             * instance. The attributes and operations exposed via the ModelMBeanInfo for the ModelMBean are accessible
             * from MBeans, connectors/adaptors like other MBeans. Through the ModelMBeanInfo Descriptors, values and methods in
             * the managed application can be defined and mapped to attributes and operations of the ModelMBean.
             * This mapping can be defined during development in an XML formatted file or dynamically and
             * programmatically at runtime.
             * <P>
             * Every ModelMBean which is instantiated in the MBeanServer becomes manageable:
             * its attributes and operations
             * become remotely accessible through the connectors/adaptors connected to that MBeanServer.
             * A Java object cannot be registered in the MBeanServer unless it is a JMX compliant MBean.
             * By instantiating a ModelMBean, resources are guaranteed that the MBean is valid.
             * <P>
             * MBeanException and RuntimeOperationsException must be thrown on every public method.  This allows
             * for wrapping exceptions from distributed communications (RMI, EJB, etc.).  These exceptions do
             * not have to be thrown by the implementation except in the scenarios described in the specification
             * and javadoc.
             * @since 1.5
             */
            // @ts-ignore
            interface ModelMBean extends javax.management.DynamicMBean, javax.management.PersistentMBean, javax.management.modelmbean.ModelMBeanNotificationBroadcaster {
                /**
                 * Initializes a ModelMBean object using ModelMBeanInfo passed in.
                 * This method makes it possible to set a customized ModelMBeanInfo on
                 * the ModelMBean as long as it is not registered with the MBeanServer.
                 * <br>
                 * Once the ModelMBean's ModelMBeanInfo (with Descriptors) are
                 * customized and set on the ModelMBean, the  ModelMBean can be
                 * registered with the MBeanServer.
                 * <P>
                 * If the ModelMBean is currently registered, this method throws
                 * a {@link javax.management.RuntimeOperationsException} wrapping an
                 * {@link IllegalStateException}
                 * @param inModelMBeanInfo The ModelMBeanInfo object to be used
                 *         by the ModelMBean.
                 * @exception MBeanException Wraps a distributed communication
                 *         Exception.
                 * @exception RuntimeOperationsException
                 *  <ul><li>Wraps an {#link IllegalArgumentException} if
                 *          the MBeanInfo passed in parameter is null.</li>
                 *      <li>Wraps an {@link IllegalStateException} if the ModelMBean
                 *          is currently registered in the MBeanServer.</li>
                 *  </ul>
                 */
                // @ts-ignore
                setModelMBeanInfo(inModelMBeanInfo: javax.management.modelmbean.ModelMBeanInfo): void
                /**
                 * Sets the instance handle of the object against which to
                 * execute all methods in this ModelMBean management interface
                 * (MBeanInfo and Descriptors).
                 * @param mr Object that is the managed resource
                 * @param mr_type The type of reference for the managed resource.  Can be: ObjectReference,
                 *                Handle, IOR, EJBHandle, RMIReference.
                 *                If the MBeanServer cannot process the mr_type passed in, an InvalidTargetTypeException
                 *                will be thrown.
                 * @exception MBeanException The initializer of the object has thrown an exception.
                 * @exception RuntimeOperationsException Wraps an IllegalArgumentException:
                 *        The managed resource type passed in parameter is null.
                 * @exception InstanceNotFoundException The managed resource object could not be found
                 * @exception InvalidTargetObjectTypeException The managed resource type cannot be processed by the
                 *  ModelMBean or JMX Agent.
                 */
                // @ts-ignore
                setManagedResource(mr: any, mr_type: string): void
            }
        }
    }
}
