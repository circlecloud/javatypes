declare namespace javax {
    namespace management {
        namespace modelmbean {
            /**
             * This class represents the meta data for ModelMBeans.  Descriptors have been
             * added on the meta data objects.
             * <P>
             * Java resources wishing to be manageable instantiate the ModelMBean using the
             * MBeanServer's createMBean method.  The resource then sets the ModelMBeanInfo
             * and Descriptors for the ModelMBean instance. The attributes and operations
             * exposed via the ModelMBeanInfo for the ModelMBean are accessible
             * from MBeans, connectors/adaptors like other MBeans. Through the Descriptors,
             * values and methods in the managed application can be defined and mapped to
             * attributes and operations of the ModelMBean.
             * This mapping can be defined during development in a file or dynamically and
             * programmatically at runtime.
             * <P>
             * Every ModelMBean which is instantiated in the MBeanServer becomes manageable:
             * its attributes and operations
             * become remotely accessible through the connectors/adaptors connected to that
             * MBeanServer.
             * A Java object cannot be registered in the MBeanServer unless it is a JMX
             * compliant MBean.
             * By instantiating a ModelMBean, resources are guaranteed that the MBean is
             * valid.
             * MBeanException and RuntimeOperationsException must be thrown on every public
             * method.  This allows for wrapping exceptions from distributed
             * communications (RMI, EJB, etc.)
             * <p>The <b>serialVersionUID</b> of this class is
             * <code>-1935722590756516193L</code>.
             * @since 1.5
             */
            // @ts-ignore
            class ModelMBeanInfoSupport extends javax.management.MBeanInfo implements javax.management.modelmbean.ModelMBeanInfo {
                /**
                 * Constructs a ModelMBeanInfoSupport which is a duplicate of the given
                 * ModelMBeanInfo.  The returned object is a shallow copy of the given
                 * object.  Neither the Descriptor nor the contained arrays
                 * ({@code ModelMBeanAttributeInfo[]} etc) are cloned.  This method is
                 * chiefly of interest to modify the Descriptor of the returned instance
                 * via {@link #setDescriptor setDescriptor} without affecting the
                 * Descriptor of the original object.
                 * @param mbi the ModelMBeanInfo instance from which the ModelMBeanInfo
                 *  being created is initialized.
                 */
                // @ts-ignore
                constructor(mbi: javax.management.modelmbean.ModelMBeanInfo)
                /**
                 * Creates a ModelMBeanInfoSupport with the provided information,
                 * but the descriptor is a default.
                 * The default descriptor is: name=className, descriptorType="mbean",
                 * displayName=className, persistPolicy="never", log="F", visibility="1"
                 * @param className classname of the MBean
                 * @param description human readable description of the
                 *  ModelMBean
                 * @param attributes array of ModelMBeanAttributeInfo objects
                 *  which have descriptors
                 * @param constructors array of ModelMBeanConstructorInfo
                 *  objects which have descriptors
                 * @param operations array of ModelMBeanOperationInfo objects
                 *  which have descriptors
                 * @param notifications array of ModelMBeanNotificationInfo
                 *  objects which have descriptors
                 */
                // @ts-ignore
                constructor(className: java.lang.String | string, description: java.lang.String | string, attributes: javax.management.modelmbean.ModelMBeanAttributeInfo[], constructors: javax.management.modelmbean.ModelMBeanConstructorInfo[], operations: javax.management.modelmbean.ModelMBeanOperationInfo[], notifications: javax.management.modelmbean.ModelMBeanNotificationInfo[])
                /**
                 * Creates a ModelMBeanInfoSupport with the provided information
                 * and the descriptor given in parameter.
                 * @param className classname of the MBean
                 * @param description human readable description of the
                 *  ModelMBean
                 * @param attributes array of ModelMBeanAttributeInfo objects
                 *  which have descriptors
                 * @param constructors array of ModelMBeanConstructorInfo
                 *  objects which have descriptor
                 * @param operations array of ModelMBeanOperationInfo objects
                 *  which have descriptor
                 * @param notifications array of ModelMBeanNotificationInfo
                 *  objects which have descriptor
                 * @param mbeandescriptor descriptor to be used as the
                 *  MBeanDescriptor containing MBean wide policy. If the
                 *  descriptor is null, a default descriptor will be constructed.
                 *  The default descriptor is:
                 *  name=className, descriptorType="mbean", displayName=className,
                 *  persistPolicy="never", log="F", visibility="1".  If the descriptor
                 *  does not contain all of these fields, the missing ones are
                 *  added with these default values.
                 * @exception RuntimeOperationsException Wraps an
                 *  IllegalArgumentException for invalid descriptor passed in
                 *  parameter.  (see {#link #getMBeanDescriptor
                 *  getMBeanDescriptor} for the definition of a valid MBean
                 *  descriptor.)
                 */
                // @ts-ignore
                constructor(className: java.lang.String | string, description: java.lang.String | string, attributes: javax.management.modelmbean.ModelMBeanAttributeInfo[], constructors: javax.management.modelmbean.ModelMBeanConstructorInfo[], operations: javax.management.modelmbean.ModelMBeanOperationInfo[], notifications: javax.management.modelmbean.ModelMBeanNotificationInfo[], mbeandescriptor: javax.management.Descriptor)
                /**
                 * Returns a shallow clone of this instance.  Neither the Descriptor nor
                 * the contained arrays ({@code ModelMBeanAttributeInfo[]} etc) are
                 * cloned.  This method is chiefly of interest to modify the Descriptor
                 * of the clone via {@link #setDescriptor setDescriptor} without affecting
                 * the Descriptor of the original object.
                 * @return a shallow clone of this instance.
                 */
                // @ts-ignore
                public clone(): any
                // @ts-ignore
                public getDescriptors(inDescriptorType: java.lang.String | string): javax.management.Descriptor[]
                // @ts-ignore
                public setDescriptors(inDescriptors: javax.management.Descriptor[]): void
                /**
                 * Returns a Descriptor requested by name.
                 * @param inDescriptorName The name of the descriptor.
                 * @return Descriptor containing a descriptor for the ModelMBean with the
                 *          same name. If no descriptor is found, null is returned.
                 * @exception MBeanException Wraps a distributed communication Exception.
                 * @exception RuntimeOperationsException Wraps an IllegalArgumentException
                 *             for null name.
                 * @see #setDescriptor
                 */
                // @ts-ignore
                public getDescriptor(inDescriptorName: java.lang.String | string): javax.management.Descriptor
                // @ts-ignore
                public getDescriptor(inDescriptorName: java.lang.String | string, inDescriptorType: java.lang.String | string): javax.management.Descriptor
                // @ts-ignore
                public setDescriptor(inDescriptor: javax.management.Descriptor, inDescriptorType: java.lang.String | string): void
                // @ts-ignore
                public getAttribute(inName: java.lang.String | string): javax.management.modelmbean.ModelMBeanAttributeInfo
                // @ts-ignore
                public getOperation(inName: java.lang.String | string): javax.management.modelmbean.ModelMBeanOperationInfo
                /**
                 * Returns the ModelMBeanConstructorInfo requested by name.
                 * If no ModelMBeanConstructorInfo exists for this name null is returned.
                 * @param inName the name of the constructor.
                 * @return the constructor info for the named constructor, or null
                 *  if there is none.
                 * @exception MBeanException Wraps a distributed communication Exception.
                 * @exception RuntimeOperationsException Wraps an IllegalArgumentException
                 *             for a null constructor name.
                 */
                // @ts-ignore
                public getConstructor(inName: java.lang.String | string): javax.management.modelmbean.ModelMBeanConstructorInfo
                // @ts-ignore
                public getNotification(inName: java.lang.String | string): javax.management.modelmbean.ModelMBeanNotificationInfo
                /**
                 * @since 1.6
                 */
                // @ts-ignore
                public getDescriptor(): javax.management.Descriptor
                // @ts-ignore
                public getMBeanDescriptor(): javax.management.Descriptor
                // @ts-ignore
                public setMBeanDescriptor(inMBeanDescriptor: javax.management.Descriptor): void
            }
        }
    }
}
