declare namespace javax {
    namespace management {
        namespace openmbean {
            /**
             * <p>Describes an Open MBean: an Open MBean is recognized as such if
             * its {@link javax.management.DynamicMBean#getMBeanInfo()
             * getMBeanInfo()} method returns an instance of a class which
             * implements the {@link OpenMBeanInfo} interface, typically {@link
             * OpenMBeanInfoSupport}.</p>
             * <p>This interface declares the same methods as the class {@link
             * javax.management.MBeanInfo}.  A class implementing this interface
             * (typically {@link OpenMBeanInfoSupport}) should extend {@link
             * javax.management.MBeanInfo}.</p>
             * <p>The {@link #getAttributes()}, {@link #getOperations()} and
             * {@link #getConstructors()} methods of the implementing class should
             * return at runtime an array of instances of a subclass of {@link
             * MBeanAttributeInfo}, {@link MBeanOperationInfo} or {@link
             * MBeanConstructorInfo} respectively which implement the {@link
             * OpenMBeanAttributeInfo}, {@link OpenMBeanOperationInfo} or {@link
             * OpenMBeanConstructorInfo} interface respectively.
             * @since 1.5
             */
            // @ts-ignore
            interface OpenMBeanInfo {
                /**
                 * Returns the fully qualified Java class name of the open MBean
                 * instances this <tt>OpenMBeanInfo</tt> describes.
                 * @return the class name.
                 */
                // @ts-ignore
                getClassName(): java.lang.String
                /**
                 * Returns a human readable description of the type of open MBean
                 * instances this <tt>OpenMBeanInfo</tt> describes.
                 * @return the description.
                 */
                // @ts-ignore
                getDescription(): java.lang.String
                /**
                 * Returns an array of <tt>OpenMBeanAttributeInfo</tt> instances
                 * describing each attribute in the open MBean described by this
                 * <tt>OpenMBeanInfo</tt> instance.  Each instance in the returned
                 * array should actually be a subclass of
                 * <tt>MBeanAttributeInfo</tt> which implements the
                 * <tt>OpenMBeanAttributeInfo</tt> interface (typically {@link
                 * OpenMBeanAttributeInfoSupport}).
                 * @return the attribute array.
                 */
                // @ts-ignore
                getAttributes(): javax.management.MBeanAttributeInfo[]
                /**
                 * Returns an array of <tt>OpenMBeanOperationInfo</tt> instances
                 * describing each operation in the open MBean described by this
                 * <tt>OpenMBeanInfo</tt> instance.  Each instance in the returned
                 * array should actually be a subclass of
                 * <tt>MBeanOperationInfo</tt> which implements the
                 * <tt>OpenMBeanOperationInfo</tt> interface (typically {@link
                 * OpenMBeanOperationInfoSupport}).
                 * @return the operation array.
                 */
                // @ts-ignore
                getOperations(): javax.management.MBeanOperationInfo[]
                /**
                 * Returns an array of <tt>OpenMBeanConstructorInfo</tt> instances
                 * describing each constructor in the open MBean described by this
                 * <tt>OpenMBeanInfo</tt> instance.  Each instance in the returned
                 * array should actually be a subclass of
                 * <tt>MBeanConstructorInfo</tt> which implements the
                 * <tt>OpenMBeanConstructorInfo</tt> interface (typically {@link
                 * OpenMBeanConstructorInfoSupport}).
                 * @return the constructor array.
                 */
                // @ts-ignore
                getConstructors(): javax.management.MBeanConstructorInfo[]
                /**
                 * Returns an array of <tt>MBeanNotificationInfo</tt> instances
                 * describing each notification emitted by the open MBean
                 * described by this <tt>OpenMBeanInfo</tt> instance.
                 * @return the notification array.
                 */
                // @ts-ignore
                getNotifications(): javax.management.MBeanNotificationInfo[]
                /**
                 * Compares the specified <var>obj</var> parameter with this <code>OpenMBeanInfo</code> instance for equality.
                 * <p>
                 * Returns <tt>true</tt> if and only if all of the following statements are true:
                 * <ul>
                 * <li><var>obj</var> is non null,</li>
                 * <li><var>obj</var> also implements the <code>OpenMBeanInfo</code> interface,</li>
                 * <li>their class names are equal</li>
                 * <li>their infos on attributes, constructors, operations and notifications are equal</li>
                 * </ul>
                 * This ensures that this <tt>equals</tt> method works properly for <var>obj</var> parameters which are
                 * different implementations of the <code>OpenMBeanInfo</code> interface.
                 * <br>&nbsp;
                 * @param obj  the object to be compared for equality with this <code>OpenMBeanInfo</code> instance;
                 * @return <code>true</code> if the specified object is equal to this <code>OpenMBeanInfo</code> instance.
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Returns the hash code value for this <code>OpenMBeanInfo</code> instance.
                 * <p>
                 * The hash code of an <code>OpenMBeanInfo</code> instance is the sum of the hash codes
                 * of all elements of information used in <code>equals</code> comparisons
                 * (ie: its class name, and its infos on attributes, constructors, operations and notifications,
                 * where the hashCode of each of these arrays is calculated by a call to
                 * <tt>new java.util.HashSet(java.util.Arrays.asList(this.getSignature)).hashCode()</tt>).
                 * <p>
                 * This ensures that <code> t1.equals(t2) </code> implies that <code> t1.hashCode()==t2.hashCode() </code>
                 * for any two <code>OpenMBeanInfo</code> instances <code>t1</code> and <code>t2</code>,
                 * as required by the general contract of the method
                 * {@link Object#hashCode() Object.hashCode()}.
                 * <p>
                 * @return the hash code value for this <code>OpenMBeanInfo</code> instance
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Returns a string representation of this <code>OpenMBeanInfo</code> instance.
                 * <p>
                 * The string representation consists of the name of this class (ie <code>javax.management.openmbean.OpenMBeanInfo</code>),
                 * the MBean class name,
                 * and the string representation of infos on attributes, constructors, operations and notifications of the described MBean.
                 * @return a string representation of this <code>OpenMBeanInfo</code> instance
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
