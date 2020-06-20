declare namespace javax {
    namespace management {
        namespace openmbean {
            /**
             * The {@code OpenMBeanInfoSupport} class describes the management
             * information of an <i>open MBean</i>: it is a subclass of {@link
             * javax.management.MBeanInfo}, and it implements the {@link
             * OpenMBeanInfo} interface.  Note that an <i>open MBean</i> is
             * recognized as such if its {@code getMBeanInfo()} method returns an
             * instance of a class which implements the OpenMBeanInfo interface,
             * typically {@code OpenMBeanInfoSupport}.
             * @since 1.5
             */
            // @ts-ignore
            class OpenMBeanInfoSupport extends javax.management.MBeanInfo implements javax.management.openmbean.OpenMBeanInfo {
                /**
                 * <p>Constructs an {@code OpenMBeanInfoSupport} instance, which
                 * describes a class of open MBeans with the specified {@code
                 * className}, {@code description}, {@code openAttributes}, {@code
                 * openConstructors} , {@code openOperations} and {@code
                 * notifications}.</p>
                 * <p>The {@code openAttributes}, {@code openConstructors},
                 * {@code openOperations} and {@code notifications}
                 * array parameters are internally copied, so that subsequent changes
                 * to the arrays referenced by these parameters have no effect on this
                 * instance.</p>
                 * @param className The fully qualified Java class name of the
                 *  open MBean described by this <CODE>OpenMBeanInfoSupport</CODE>
                 *  instance.
                 * @param description A human readable description of the open
                 *  MBean described by this <CODE>OpenMBeanInfoSupport</CODE>
                 *  instance.
                 * @param openAttributes The list of exposed attributes of the
                 *  described open MBean; Must be an array of instances of a
                 *  subclass of {#code MBeanAttributeInfo}, typically {@code
                 *  OpenMBeanAttributeInfoSupport}.
                 * @param openConstructors The list of exposed public constructors
                 *  of the described open MBean; Must be an array of instances of a
                 *  subclass of {#code MBeanConstructorInfo}, typically {@code
                 *  OpenMBeanConstructorInfoSupport}.
                 * @param openOperations The list of exposed operations of the
                 *  described open MBean.  Must be an array of instances of a
                 *  subclass of {#code MBeanOperationInfo}, typically {@code
                 *  OpenMBeanOperationInfoSupport}.
                 * @param notifications The list of notifications emitted by the
                 *  described open MBean.
                 * @throws ArrayStoreException If {#code openAttributes}, {@code
                 *  openConstructors} or {@code openOperations} is not an array of
                 *  instances of a subclass of {@code MBeanAttributeInfo}, {@code
                 *  MBeanConstructorInfo} or {@code MBeanOperationInfo}
                 *  respectively.
                 */
                // @ts-ignore
                constructor(className: string, description: string, openAttributes: javax.management.openmbean.OpenMBeanAttributeInfo[], openConstructors: javax.management.openmbean.OpenMBeanConstructorInfo[], openOperations: javax.management.openmbean.OpenMBeanOperationInfo[], notifications: javax.management.MBeanNotificationInfo[])
                /**
                 * <p>Constructs an {@code OpenMBeanInfoSupport} instance, which
                 * describes a class of open MBeans with the specified {@code
                 * className}, {@code description}, {@code openAttributes}, {@code
                 * openConstructors} , {@code openOperations}, {@code
                 * notifications}, and {@code descriptor}.</p>
                 * <p>The {@code openAttributes}, {@code openConstructors}, {@code
                 * openOperations} and {@code notifications} array parameters are
                 * internally copied, so that subsequent changes to the arrays
                 * referenced by these parameters have no effect on this
                 * instance.</p>
                 * @param className The fully qualified Java class name of the
                 *  open MBean described by this <CODE>OpenMBeanInfoSupport</CODE>
                 *  instance.
                 * @param description A human readable description of the open
                 *  MBean described by this <CODE>OpenMBeanInfoSupport</CODE>
                 *  instance.
                 * @param openAttributes The list of exposed attributes of the
                 *  described open MBean; Must be an array of instances of a
                 *  subclass of {#code MBeanAttributeInfo}, typically {@code
                 *  OpenMBeanAttributeInfoSupport}.
                 * @param openConstructors The list of exposed public constructors
                 *  of the described open MBean; Must be an array of instances of a
                 *  subclass of {#code MBeanConstructorInfo}, typically {@code
                 *  OpenMBeanConstructorInfoSupport}.
                 * @param openOperations The list of exposed operations of the
                 *  described open MBean.  Must be an array of instances of a
                 *  subclass of {#code MBeanOperationInfo}, typically {@code
                 *  OpenMBeanOperationInfoSupport}.
                 * @param notifications The list of notifications emitted by the
                 *  described open MBean.
                 * @param descriptor The descriptor for the MBean.  This may be null
                 *  which is equivalent to an empty descriptor.
                 * @throws ArrayStoreException If {#code openAttributes}, {@code
                 *  openConstructors} or {@code openOperations} is not an array of
                 *  instances of a subclass of {@code MBeanAttributeInfo}, {@code
                 *  MBeanConstructorInfo} or {@code MBeanOperationInfo}
                 *  respectively.
                 * @since 1.6
                 */
                // @ts-ignore
                constructor(className: string, description: string, openAttributes: javax.management.openmbean.OpenMBeanAttributeInfo[], openConstructors: javax.management.openmbean.OpenMBeanConstructorInfo[], openOperations: javax.management.openmbean.OpenMBeanOperationInfo[], notifications: javax.management.MBeanNotificationInfo[], descriptor: javax.management.Descriptor)
                /**
                 * <p>Compares the specified {@code obj} parameter with this
                 * {@code OpenMBeanInfoSupport} instance for equality.</p>
                 * <p>Returns {@code true} if and only if all of the following
                 * statements are true:
                 * <ul>
                 * <li>{@code obj} is non null,</li>
                 * <li>{@code obj} also implements the {@code OpenMBeanInfo}
                 * interface,</li>
                 * <li>their class names are equal</li>
                 * <li>their infos on attributes, constructors, operations and
                 * notifications are equal</li>
                 * </ul>
                 * This ensures that this {@code equals} method works properly for
                 * {@code obj} parameters which are different implementations of
                 * the {@code OpenMBeanInfo} interface.
                 * @param obj the object to be compared for equality with this
                 *  {#code OpenMBeanInfoSupport} instance;
                 * @return {#code true} if the specified object is equal to this
                 *  {@code OpenMBeanInfoSupport} instance.
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * <p>Returns the hash code value for this {@code
                 * OpenMBeanInfoSupport} instance.</p>
                 * <p>The hash code of an {@code OpenMBeanInfoSupport} instance is
                 * the sum of the hash codes of all elements of information used
                 * in {@code equals} comparisons (ie: its class name, and its
                 * infos on attributes, constructors, operations and
                 * notifications, where the hashCode of each of these arrays is
                 * calculated by a call to {@code new
                 * java.util.HashSet(java.util.Arrays.asList(this.getSignature)).hashCode()}).</p>
                 * <p>This ensures that {@code t1.equals(t2)} implies that {@code
                 * t1.hashCode()==t2.hashCode()} for any two {@code
                 * OpenMBeanInfoSupport} instances {@code t1} and {@code t2}, as
                 * required by the general contract of the method {@link
                 * Object#hashCode() Object.hashCode()}.</p>
                 * <p>However, note that another instance of a class implementing
                 * the {@code OpenMBeanInfo} interface may be equal to this {@code
                 * OpenMBeanInfoSupport} instance as defined by {@link
                 * #equals(java.lang.Object)}, but may have a different hash code
                 * if it is calculated differently.</p>
                 * <p>As {@code OpenMBeanInfoSupport} instances are immutable, the
                 * hash code for this instance is calculated once, on the first
                 * call to {@code hashCode}, and then the same value is returned
                 * for subsequent calls.</p>
                 * @return the hash code value for this {#code
                 *  OpenMBeanInfoSupport} instance
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * <p>Returns a string representation of this {@code
                 * OpenMBeanInfoSupport} instance.</p>
                 * <p>The string representation consists of the name of this class
                 * (ie {@code javax.management.openmbean.OpenMBeanInfoSupport}),
                 * the MBean class name, the string representation of infos on
                 * attributes, constructors, operations and notifications of the
                 * described MBean and the string representation of the descriptor.</p>
                 * <p>As {@code OpenMBeanInfoSupport} instances are immutable, the
                 * string representation for this instance is calculated once, on
                 * the first call to {@code toString}, and then the same value is
                 * returned for subsequent calls.</p>
                 * @return a string representation of this {#code
                 *  OpenMBeanInfoSupport} instance
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
