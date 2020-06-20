declare namespace javax {
    namespace management {
        namespace openmbean {
            /**
             * <p>Describes an operation of an Open MBean.</p>
             * <p>This interface declares the same methods as the class {@link
             * javax.management.MBeanOperationInfo}.  A class implementing this
             * interface (typically {@link OpenMBeanOperationInfoSupport}) should
             * extend {@link javax.management.MBeanOperationInfo}.</p>
             * <p>The {@link #getSignature()} method should return at runtime an
             * array of instances of a subclass of {@link MBeanParameterInfo}
             * which implements the {@link OpenMBeanParameterInfo} interface
             * (typically {@link OpenMBeanParameterInfoSupport}).</p>
             * @since 1.5
             */
            // @ts-ignore
            interface OpenMBeanOperationInfo {
                /**
                 * Returns a human readable description of the operation
                 * described by this <tt>OpenMBeanOperationInfo</tt> instance.
                 * @return the description.
                 */
                // @ts-ignore
                getDescription(): java.lang.String
                /**
                 * Returns the name of the operation
                 * described by this <tt>OpenMBeanOperationInfo</tt> instance.
                 * @return the name.
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Returns an array of <tt>OpenMBeanParameterInfo</tt> instances
                 * describing each parameter in the signature of the operation
                 * described by this <tt>OpenMBeanOperationInfo</tt> instance.
                 * Each instance in the returned array should actually be a
                 * subclass of <tt>MBeanParameterInfo</tt> which implements the
                 * <tt>OpenMBeanParameterInfo</tt> interface (typically {@link
                 * OpenMBeanParameterInfoSupport}).
                 * @return the signature.
                 */
                // @ts-ignore
                getSignature(): javax.management.MBeanParameterInfo[]
                /**
                 * Returns an <tt>int</tt> constant qualifying the impact of the
                 * operation described by this <tt>OpenMBeanOperationInfo</tt>
                 * instance.
                 * The returned constant is one of {@link
                 * javax.management.MBeanOperationInfo#INFO}, {@link
                 * javax.management.MBeanOperationInfo#ACTION}, {@link
                 * javax.management.MBeanOperationInfo#ACTION_INFO}, or {@link
                 * javax.management.MBeanOperationInfo#UNKNOWN}.
                 * @return the impact code.
                 */
                // @ts-ignore
                getImpact(): int
                /**
                 * Returns the fully qualified Java class name of the values
                 * returned by the operation described by this
                 * <tt>OpenMBeanOperationInfo</tt> instance.  This method should
                 * return the same value as a call to
                 * <tt>getReturnOpenType().getClassName()</tt>.
                 * @return the return type.
                 */
                // @ts-ignore
                getReturnType(): java.lang.String
                /**
                 * Returns the <i>open type</i> of the values returned by the
                 * operation described by this <tt>OpenMBeanOperationInfo</tt>
                 * instance.
                 * @return the return type.
                 */
                // @ts-ignore
                getReturnOpenType(): javax.management.openmbean.OpenType<?>
                /**
                 * Compares the specified <var>obj</var> parameter with this <code>OpenMBeanOperationInfo</code> instance for equality.
                 * <p>
                 * Returns <tt>true</tt> if and only if all of the following statements are true:
                 * <ul>
                 * <li><var>obj</var> is non null,</li>
                 * <li><var>obj</var> also implements the <code>OpenMBeanOperationInfo</code> interface,</li>
                 * <li>their names are equal</li>
                 * <li>their signatures are equal</li>
                 * <li>their return open types are equal</li>
                 * <li>their impacts are equal</li>
                 * </ul>
                 * This ensures that this <tt>equals</tt> method works properly for <var>obj</var> parameters which are
                 * different implementations of the <code>OpenMBeanOperationInfo</code> interface.
                 * <br>&nbsp;
                 * @param obj  the object to be compared for equality with this <code>OpenMBeanOperationInfo</code> instance;
                 * @return <code>true</code> if the specified object is equal to this <code>OpenMBeanOperationInfo</code> instance.
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Returns the hash code value for this <code>OpenMBeanOperationInfo</code> instance.
                 * <p>
                 * The hash code of an <code>OpenMBeanOperationInfo</code> instance is the sum of the hash codes
                 * of all elements of information used in <code>equals</code> comparisons
                 * (ie: its name, return open type, impact and signature, where the signature hashCode is calculated by a call to
                 * <tt>java.util.Arrays.asList(this.getSignature).hashCode()</tt>).
                 * <p>
                 * This ensures that <code> t1.equals(t2) </code> implies that <code> t1.hashCode()==t2.hashCode() </code>
                 * for any two <code>OpenMBeanOperationInfo</code> instances <code>t1</code> and <code>t2</code>,
                 * as required by the general contract of the method
                 * {@link Object#hashCode() Object.hashCode()}.
                 * <p>
                 * @return the hash code value for this <code>OpenMBeanOperationInfo</code> instance
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Returns a string representation of this <code>OpenMBeanOperationInfo</code> instance.
                 * <p>
                 * The string representation consists of the name of this class (ie <code>javax.management.openmbean.OpenMBeanOperationInfo</code>),
                 * and the name, signature, return open type and impact of the described operation.
                 * @return a string representation of this <code>OpenMBeanOperationInfo</code> instance
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
