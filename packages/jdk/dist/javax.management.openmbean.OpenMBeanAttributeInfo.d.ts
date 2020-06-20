declare namespace javax {
    namespace management {
        namespace openmbean {
            /**
             * <p>Describes an attribute of an open MBean.</p>
             * <p>This interface declares the same methods as the class {@link
             * javax.management.MBeanAttributeInfo}.  A class implementing this
             * interface (typically {@link OpenMBeanAttributeInfoSupport}) should
             * extend {@link javax.management.MBeanAttributeInfo}.</p>
             * @since 1.5
             */
            // @ts-ignore
            interface OpenMBeanAttributeInfo extends javax.management.openmbean.OpenMBeanParameterInfo {
                /**
                 * Returns <tt>true</tt> if the attribute described by this <tt>OpenMBeanAttributeInfo</tt> instance is readable,
                 * <tt>false</tt> otherwise.
                 * @return true if the attribute is readable.
                 */
                // @ts-ignore
                isReadable(): boolean
                /**
                 * Returns <tt>true</tt> if the attribute described by this <tt>OpenMBeanAttributeInfo</tt> instance is writable,
                 * <tt>false</tt> otherwise.
                 * @return true if the attribute is writable.
                 */
                // @ts-ignore
                isWritable(): boolean
                /**
                 * Returns <tt>true</tt> if the attribute described by this <tt>OpenMBeanAttributeInfo</tt> instance
                 * is accessed through a <tt>is<i>XXX</i></tt> getter (applies only to <tt>boolean</tt> and <tt>Boolean</tt> values),
                 * <tt>false</tt> otherwise.
                 * @return true if the attribute is accessed through <tt>is<i>XXX</i></tt>.
                 */
                // @ts-ignore
                isIs(): boolean
                /**
                 * Compares the specified <var>obj</var> parameter with this <code>OpenMBeanAttributeInfo</code> instance for equality.
                 * <p>
                 * Returns <tt>true</tt> if and only if all of the following statements are true:
                 * <ul>
                 * <li><var>obj</var> is non null,</li>
                 * <li><var>obj</var> also implements the <code>OpenMBeanAttributeInfo</code> interface,</li>
                 * <li>their names are equal</li>
                 * <li>their open types are equal</li>
                 * <li>their access properties (isReadable, isWritable and isIs) are equal</li>
                 * <li>their default, min, max and legal values are equal.</li>
                 * </ul>
                 * This ensures that this <tt>equals</tt> method works properly for <var>obj</var> parameters which are
                 * different implementations of the <code>OpenMBeanAttributeInfo</code> interface.
                 * <br>&nbsp;
                 * @param obj  the object to be compared for equality with this <code>OpenMBeanAttributeInfo</code> instance;
                 * @return <code>true</code> if the specified object is equal to this <code>OpenMBeanAttributeInfo</code> instance.
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Returns the hash code value for this <code>OpenMBeanAttributeInfo</code> instance.
                 * <p>
                 * The hash code of an <code>OpenMBeanAttributeInfo</code> instance is the sum of the hash codes
                 * of all elements of information used in <code>equals</code> comparisons
                 * (ie: its name, its <i>open type</i>, and its default, min, max and legal values).
                 * <p>
                 * This ensures that <code> t1.equals(t2) </code> implies that <code> t1.hashCode()==t2.hashCode() </code>
                 * for any two <code>OpenMBeanAttributeInfo</code> instances <code>t1</code> and <code>t2</code>,
                 * as required by the general contract of the method
                 * {@link Object#hashCode() Object.hashCode()}.
                 * <p>
                 * @return the hash code value for this <code>OpenMBeanAttributeInfo</code> instance
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Returns a string representation of this <code>OpenMBeanAttributeInfo</code> instance.
                 * <p>
                 * The string representation consists of the name of this class (ie <code>javax.management.openmbean.OpenMBeanAttributeInfo</code>),
                 * the string representation of the name and open type of the described attribute,
                 * and the string representation of its default, min, max and legal values.
                 * @return a string representation of this <code>OpenMBeanAttributeInfo</code> instance
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
