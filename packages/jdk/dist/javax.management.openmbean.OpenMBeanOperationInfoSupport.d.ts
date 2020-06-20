declare namespace javax {
    namespace management {
        namespace openmbean {
            /**
             * Describes an operation of an Open MBean.
             * @since 1.5
             */
            // @ts-ignore
            class OpenMBeanOperationInfoSupport extends javax.management.MBeanOperationInfo implements javax.management.openmbean.OpenMBeanOperationInfo {
                /**
                 * <p>Constructs an {@code OpenMBeanOperationInfoSupport}
                 * instance, which describes the operation of a class of open
                 * MBeans, with the specified {@code name}, {@code description},
                 * {@code signature}, {@code returnOpenType} and {@code
                 * impact}.</p>
                 * <p>The {@code signature} array parameter is internally copied,
                 * so that subsequent changes to the array referenced by {@code
                 * signature} have no effect on this instance.</p>
                 * @param name cannot be a null or empty string.
                 * @param description cannot be a null or empty string.
                 * @param signature can be null or empty if there are no
                 *  parameters to describe.
                 * @param returnOpenType cannot be null: use {#code
                 *  SimpleType.VOID} for operations that return nothing.
                 * @param impact must be one of {#code ACTION}, {@code
                 *  ACTION_INFO}, {@code INFO}, or {@code UNKNOWN}.
                 * @throws IllegalArgumentException if {#code name} or {@code
                 *  description} are null or empty string, or {@code
                 *  returnOpenType} is null, or {@code impact} is not one of {@code
                 *  ACTION}, {@code ACTION_INFO}, {@code INFO}, or {@code UNKNOWN}.
                 * @throws ArrayStoreException If {#code signature} is not an
                 *  array of instances of a subclass of {@code MBeanParameterInfo}.
                 */
                // @ts-ignore
                constructor(name: string, description: string, signature: javax.management.openmbean.OpenMBeanParameterInfo[], returnOpenType: javax.management.openmbean.OpenType<any>, impact: number /*int*/)
                /**
                 * <p>Constructs an {@code OpenMBeanOperationInfoSupport}
                 * instance, which describes the operation of a class of open
                 * MBeans, with the specified {@code name}, {@code description},
                 * {@code signature}, {@code returnOpenType}, {@code
                 * impact}, and {@code descriptor}.</p>
                 * <p>The {@code signature} array parameter is internally copied,
                 * so that subsequent changes to the array referenced by {@code
                 * signature} have no effect on this instance.</p>
                 * @param name cannot be a null or empty string.
                 * @param description cannot be a null or empty string.
                 * @param signature can be null or empty if there are no
                 *  parameters to describe.
                 * @param returnOpenType cannot be null: use {#code
                 *  SimpleType.VOID} for operations that return nothing.
                 * @param impact must be one of {#code ACTION}, {@code
                 *  ACTION_INFO}, {@code INFO}, or {@code UNKNOWN}.
                 * @param descriptor The descriptor for the operation.  This may
                 *  be null, which is equivalent to an empty descriptor.
                 * @throws IllegalArgumentException if {#code name} or {@code
                 *  description} are null or empty string, or {@code
                 *  returnOpenType} is null, or {@code impact} is not one of {@code
                 *  ACTION}, {@code ACTION_INFO}, {@code INFO}, or {@code UNKNOWN}.
                 * @throws ArrayStoreException If {#code signature} is not an
                 *  array of instances of a subclass of {@code MBeanParameterInfo}.
                 * @since 1.6
                 */
                // @ts-ignore
                constructor(name: string, description: string, signature: javax.management.openmbean.OpenMBeanParameterInfo[], returnOpenType: javax.management.openmbean.OpenType<any>, impact: number /*int*/, descriptor: javax.management.Descriptor)
                /**
                 * Returns the <i>open type</i> of the values returned by the
                 * operation described by this {@code OpenMBeanOperationInfo}
                 * instance.
                 */
                // @ts-ignore
                getReturnOpenType(): javax.management.openmbean.OpenType<?>
                /**
                 * <p>Compares the specified {@code obj} parameter with this
                 * {@code OpenMBeanOperationInfoSupport} instance for
                 * equality.</p>
                 * <p>Returns {@code true} if and only if all of the following
                 * statements are true:
                 * <ul>
                 * <li>{@code obj} is non null,</li>
                 * <li>{@code obj} also implements the {@code
                 * OpenMBeanOperationInfo} interface,</li>
                 * <li>their names are equal</li>
                 * <li>their signatures are equal</li>
                 * <li>their return open types are equal</li>
                 * <li>their impacts are equal</li>
                 * </ul>
                 * This ensures that this {@code equals} method works properly for
                 * {@code obj} parameters which are different implementations of
                 * the {@code OpenMBeanOperationInfo} interface.
                 * @param obj the object to be compared for equality with this
                 *  {#code OpenMBeanOperationInfoSupport} instance;
                 * @return {#code true} if the specified object is equal to this
                 *  {@code OpenMBeanOperationInfoSupport} instance.
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * <p>Returns the hash code value for this {@code
                 * OpenMBeanOperationInfoSupport} instance.</p>
                 * <p>The hash code of an {@code OpenMBeanOperationInfoSupport}
                 * instance is the sum of the hash codes of all elements of
                 * information used in {@code equals} comparisons (ie: its name,
                 * return open type, impact and signature, where the signature
                 * hashCode is calculated by a call to {@code
                 * java.util.Arrays.asList(this.getSignature).hashCode()}).</p>
                 * <p>This ensures that {@code t1.equals(t2) } implies that {@code
                 * t1.hashCode()==t2.hashCode() } for any two {@code
                 * OpenMBeanOperationInfoSupport} instances {@code t1} and {@code
                 * t2}, as required by the general contract of the method {@link
                 * Object#hashCode() Object.hashCode()}.</p>
                 * <p>However, note that another instance of a class implementing
                 * the {@code OpenMBeanOperationInfo} interface may be equal to
                 * this {@code OpenMBeanOperationInfoSupport} instance as defined
                 * by {@link #equals(java.lang.Object)}, but may have a different
                 * hash code if it is calculated differently.</p>
                 * <p>As {@code OpenMBeanOperationInfoSupport} instances are
                 * immutable, the hash code for this instance is calculated once,
                 * on the first call to {@code hashCode}, and then the same value
                 * is returned for subsequent calls.</p>
                 * @return the hash code value for this {#code
                 *  OpenMBeanOperationInfoSupport} instance
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * <p>Returns a string representation of this {@code
                 * OpenMBeanOperationInfoSupport} instance.</p>
                 * <p>The string representation consists of the name of this class
                 * (ie {@code
                 * javax.management.openmbean.OpenMBeanOperationInfoSupport}), and
                 * the name, signature, return open type and impact of the
                 * described operation and the string representation of its descriptor.</p>
                 * <p>As {@code OpenMBeanOperationInfoSupport} instances are
                 * immutable, the string representation for this instance is
                 * calculated once, on the first call to {@code toString}, and
                 * then the same value is returned for subsequent calls.</p>
                 * @return a string representation of this {#code
                 *  OpenMBeanOperationInfoSupport} instance
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
