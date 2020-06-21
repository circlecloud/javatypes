declare namespace javax {
    namespace management {
        namespace openmbean {
            /**
             * Describes an attribute of an open MBean.
             * @since 1.5
             */
            // @ts-ignore
            class OpenMBeanAttributeInfoSupport extends javax.management.MBeanAttributeInfo implements javax.management.openmbean.OpenMBeanAttributeInfo {
                /**
                 * Constructs an {@code OpenMBeanAttributeInfoSupport} instance,
                 * which describes the attribute of an open MBean with the
                 * specified {@code name}, {@code openType} and {@code
                 * description}, and the specified read/write access properties.
                 * @param name  cannot be a null or empty string.
                 * @param description  cannot be a null or empty string.
                 * @param openType  cannot be null.
                 * @param isReadable {#code true} if the attribute has a getter
                 *  exposed for management.
                 * @param isWritable {#code true} if the attribute has a setter
                 *  exposed for management.
                 * @param isIs {#code true} if the attribute's getter is of the
                 *  form <tt>is<i>XXX</i></tt>.
                 * @throws IllegalArgumentException if {#code name} or {@code
                 *  description} are null or empty string, or {@code openType} is
                 *  null.
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string, openType: javax.management.openmbean.OpenType<any>, isReadable: boolean, isWritable: boolean, isIs: boolean)
                /**
                 * <p>Constructs an {@code OpenMBeanAttributeInfoSupport} instance,
                 * which describes the attribute of an open MBean with the
                 * specified {@code name}, {@code openType}, {@code
                 * description}, read/write access properties, and {@code Descriptor}.</p>
                 * <p>The {@code descriptor} can contain entries that will define
                 * the values returned by certain methods of this class, as
                 * explained in the <a href="package-summary.html#constraints">
                 * package description</a>.
                 * @param name  cannot be a null or empty string.
                 * @param description  cannot be a null or empty string.
                 * @param openType  cannot be null.
                 * @param isReadable {#code true} if the attribute has a getter
                 *  exposed for management.
                 * @param isWritable {#code true} if the attribute has a setter
                 *  exposed for management.
                 * @param isIs {#code true} if the attribute's getter is of the
                 *  form <tt>is<i>XXX</i></tt>.
                 * @param descriptor The descriptor for the attribute.  This may be null
                 *  which is equivalent to an empty descriptor.
                 * @throws IllegalArgumentException if {#code name} or {@code
                 *  description} are null or empty string, or {@code openType} is
                 *  null, or the descriptor entries are invalid as described in the
                 *  <a href="package-summary.html#constraints">package description</a>.
                 * @since 1.6
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string, openType: javax.management.openmbean.OpenType<any>, isReadable: boolean, isWritable: boolean, isIs: boolean, descriptor: javax.management.Descriptor)
                /**
                 * Constructs an {@code OpenMBeanAttributeInfoSupport} instance,
                 * which describes the attribute of an open MBean with the
                 * specified {@code name}, {@code openType}, {@code description}
                 * and {@code defaultValue}, and the specified read/write access
                 * properties.
                 * @param name  cannot be a null or empty string.
                 * @param description  cannot be a null or empty string.
                 * @param openType  cannot be null.
                 * @param isReadable {#code true} if the attribute has a getter
                 *  exposed for management.
                 * @param isWritable {#code true} if the attribute has a setter
                 *  exposed for management.
                 * @param isIs {#code true} if the attribute's getter is of the
                 *  form <tt>is<i>XXX</i></tt>.
                 * @param defaultValue must be a valid value for the {#code
                 *  openType} specified for this attribute; default value not
                 *  supported for {@code ArrayType} and {@code TabularType}; can
                 *  be null, in which case it means that no default value is set.
                 * @param <T> allows the compiler to check that the {#code defaultValue},
                 *  if non-null, has the correct Java type for the given {@code openType}.
                 * @throws IllegalArgumentException if {#code name} or {@code
                 *  description} are null or empty string, or {@code openType} is
                 *  null.
                 * @throws OpenDataException if {#code defaultValue} is not a
                 *  valid value for the specified {@code openType}, or {@code
                 *  defaultValue} is non null and {@code openType} is an {@code
                 *  ArrayType} or a {@code TabularType}.
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string, openType: javax.management.openmbean.OpenType<T>, isReadable: boolean, isWritable: boolean, isIs: boolean, defaultValue: T)
                /**
                 * <p>Constructs an {@code OpenMBeanAttributeInfoSupport} instance,
                 * which describes the attribute of an open MBean with the
                 * specified {@code name}, {@code openType}, {@code description},
                 * {@code defaultValue} and {@code legalValues}, and the specified
                 * read/write access properties.</p>
                 * <p>The contents of {@code legalValues} are copied, so subsequent
                 * modifications of the array referenced by {@code legalValues}
                 * have no impact on this {@code OpenMBeanAttributeInfoSupport}
                 * instance.</p>
                 * @param name  cannot be a null or empty string.
                 * @param description  cannot be a null or empty string.
                 * @param openType  cannot be null.
                 * @param isReadable {#code true} if the attribute has a getter
                 *  exposed for management.
                 * @param isWritable {#code true} if the attribute has a setter
                 *  exposed for management.
                 * @param isIs {#code true} if the attribute's getter is of the
                 *  form <tt>is<i>XXX</i></tt>.
                 * @param defaultValue must be a valid value
                 *  for the {#code
                 *  openType} specified for this attribute; default value not
                 *  supported for {@code ArrayType} and {@code TabularType}; can
                 *  be null, in which case it means that no default value is set.
                 * @param legalValues each contained value must be valid for the
                 *  {#code openType} specified for this attribute; legal values
                 *  not supported for {@code ArrayType} and {@code TabularType};
                 *  can be null or empty.
                 * @param <T> allows the compiler to check that the {#code
                 *  defaultValue} and {@code legalValues}, if non-null, have the
                 *  correct Java type for the given {@code openType}.
                 * @throws IllegalArgumentException if {#code name} or {@code
                 *  description} are null or empty string, or {@code openType} is
                 *  null.
                 * @throws OpenDataException if {#code defaultValue} is not a
                 *  valid value for the specified {@code openType}, or one value in
                 *  {@code legalValues} is not valid for the specified {@code
                 *  openType}, or {@code defaultValue} is non null and {@code
                 *  openType} is an {@code ArrayType} or a {@code TabularType}, or
                 *  {@code legalValues} is non null and non empty and {@code
                 *  openType} is an {@code ArrayType} or a {@code TabularType}, or
                 *  {@code legalValues} is non null and non empty and {@code
                 *  defaultValue} is not contained in {@code legalValues}.
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string, openType: javax.management.openmbean.OpenType<T>, isReadable: boolean, isWritable: boolean, isIs: boolean, defaultValue: T, legalValues: T[])
                /**
                 * Constructs an {@code OpenMBeanAttributeInfoSupport} instance,
                 * which describes the attribute of an open MBean, with the
                 * specified {@code name}, {@code openType}, {@code description},
                 * {@code defaultValue}, {@code minValue} and {@code maxValue}.
                 * It is possible to specify minimal and maximal values only for
                 * an open type whose values are {@code Comparable}.
                 * @param name  cannot be a null or empty string.
                 * @param description  cannot be a null or empty string.
                 * @param openType  cannot be null.
                 * @param isReadable {#code true} if the attribute has a getter
                 *  exposed for management.
                 * @param isWritable {#code true} if the attribute has a setter
                 *  exposed for management.
                 * @param isIs {#code true} if the attribute's getter is of the
                 *  form <tt>is<i>XXX</i></tt>.
                 * @param defaultValue must be a valid value for the {#code
                 *  openType} specified for this attribute; default value not
                 *  supported for {@code ArrayType} and {@code TabularType}; can be
                 *  null, in which case it means that no default value is set.
                 * @param minValue must be valid for the {#code openType}
                 *  specified for this attribute; can be null, in which case it
                 *  means that no minimal value is set.
                 * @param maxValue must be valid for the {#code openType}
                 *  specified for this attribute; can be null, in which case it
                 *  means that no maximal value is set.
                 * @param <T> allows the compiler to check that the {#code
                 *  defaultValue}, {@code minValue}, and {@code maxValue}, if
                 *  non-null, have the correct Java type for the given {@code
                 *  openType}.
                 * @throws IllegalArgumentException if {#code name} or {@code
                 *  description} are null or empty string, or {@code openType} is
                 *  null.
                 * @throws OpenDataException if {#code defaultValue}, {@code
                 *  minValue} or {@code maxValue} is not a valid value for the
                 *  specified {@code openType}, or {@code defaultValue} is non null
                 *  and {@code openType} is an {@code ArrayType} or a {@code
                 *  TabularType}, or both {@code minValue} and {@code maxValue} are
                 *  non-null and {@code minValue.compareTo(maxValue) > 0} is {@code
                 *  true}, or both {@code defaultValue} and {@code minValue} are
                 *  non-null and {@code minValue.compareTo(defaultValue) > 0} is
                 *  {@code true}, or both {@code defaultValue} and {@code maxValue}
                 *  are non-null and {@code defaultValue.compareTo(maxValue) > 0}
                 *  is {@code true}.
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string, description: java.lang.String | string, openType: javax.management.openmbean.OpenType<T>, isReadable: boolean, isWritable: boolean, isIs: boolean, defaultValue: T, minValue: java.lang.Comparable<T>, maxValue: java.lang.Comparable<T>)
                /**
                 * Returns the open type for the values of the attribute described
                 * by this {@code OpenMBeanAttributeInfoSupport} instance.
                 */
                // @ts-ignore
                public getOpenType(): javax.management.openmbean.OpenType<any>
                /**
                 * Returns the default value for the attribute described by this
                 * {@code OpenMBeanAttributeInfoSupport} instance, if specified,
                 * or {@code null} otherwise.
                 */
                // @ts-ignore
                public getDefaultValue(): any
                /**
                 * Returns an unmodifiable Set of legal values for the attribute
                 * described by this {@code OpenMBeanAttributeInfoSupport}
                 * instance, if specified, or {@code null} otherwise.
                 */
                // @ts-ignore
                public getLegalValues(): Array<any>
                /**
                 * Returns the minimal value for the attribute described by this
                 * {@code OpenMBeanAttributeInfoSupport} instance, if specified,
                 * or {@code null} otherwise.
                 */
                // @ts-ignore
                public getMinValue(): java.lang.Comparable<any>
                /**
                 * Returns the maximal value for the attribute described by this
                 * {@code OpenMBeanAttributeInfoSupport} instance, if specified,
                 * or {@code null} otherwise.
                 */
                // @ts-ignore
                public getMaxValue(): java.lang.Comparable<any>
                /**
                 * Returns {@code true} if this {@code
                 * OpenMBeanAttributeInfoSupport} instance specifies a non-null
                 * default value for the described attribute, {@code false}
                 * otherwise.
                 */
                // @ts-ignore
                public hasDefaultValue(): boolean
                /**
                 * Returns {@code true} if this {@code
                 * OpenMBeanAttributeInfoSupport} instance specifies a non-null
                 * set of legal values for the described attribute, {@code false}
                 * otherwise.
                 */
                // @ts-ignore
                public hasLegalValues(): boolean
                /**
                 * Returns {@code true} if this {@code
                 * OpenMBeanAttributeInfoSupport} instance specifies a non-null
                 * minimal value for the described attribute, {@code false}
                 * otherwise.
                 */
                // @ts-ignore
                public hasMinValue(): boolean
                /**
                 * Returns {@code true} if this {@code
                 * OpenMBeanAttributeInfoSupport} instance specifies a non-null
                 * maximal value for the described attribute, {@code false}
                 * otherwise.
                 */
                // @ts-ignore
                public hasMaxValue(): boolean
                /**
                 * Tests whether {@code obj} is a valid value for the attribute
                 * described by this {@code OpenMBeanAttributeInfoSupport}
                 * instance.
                 * @param obj the object to be tested.
                 * @return {#code true} if {@code obj} is a valid value for
                 *  the parameter described by this {@code
                 *  OpenMBeanAttributeInfoSupport} instance, {@code false}
                 *  otherwise.
                 */
                // @ts-ignore
                public isValue(obj: java.lang.Object | any): boolean
                /**
                 * Compares the specified {@code obj} parameter with this {@code
                 * OpenMBeanAttributeInfoSupport} instance for equality.
                 * <p>
                 * Returns {@code true} if and only if all of the following statements are true:
                 * <ul>
                 * <li>{@code obj} is non null,</li>
                 * <li>{@code obj} also implements the {@code OpenMBeanAttributeInfo} interface,</li>
                 * <li>their names are equal</li>
                 * <li>their open types are equal</li>
                 * <li>their access properties (isReadable, isWritable and isIs) are equal</li>
                 * <li>their default, min, max and legal values are equal.</li>
                 * </ul>
                 * This ensures that this {@code equals} method works properly for
                 * {@code obj} parameters which are different implementations of
                 * the {@code OpenMBeanAttributeInfo} interface.
                 * <p>If {@code obj} also implements {@link DescriptorRead}, then its
                 * {@link DescriptorRead#getDescriptor() getDescriptor()} method must
                 * also return the same value as for this object.</p>
                 * @param obj the object to be compared for equality with this
                 *  {#code OpenMBeanAttributeInfoSupport} instance.
                 * @return {#code true} if the specified object is equal to this
                 *  {@code OpenMBeanAttributeInfoSupport} instance.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                /**
                 * <p>Returns the hash code value for this {@code
                 * OpenMBeanAttributeInfoSupport} instance.</p>
                 * <p>The hash code of an {@code OpenMBeanAttributeInfoSupport}
                 * instance is the sum of the hash codes of all elements of
                 * information used in {@code equals} comparisons (ie: its name,
                 * its <i>open type</i>, its default, min, max and legal
                 * values, and its Descriptor).
                 * <p>This ensures that {@code t1.equals(t2)} implies that {@code
                 * t1.hashCode()==t2.hashCode()} for any two {@code
                 * OpenMBeanAttributeInfoSupport} instances {@code t1} and {@code
                 * t2}, as required by the general contract of the method {@link
                 * Object#hashCode() Object.hashCode()}.
                 * <p>However, note that another instance of a class implementing
                 * the {@code OpenMBeanAttributeInfo} interface may be equal to
                 * this {@code OpenMBeanAttributeInfoSupport} instance as defined
                 * by {@link #equals(java.lang.Object)}, but may have a different
                 * hash code if it is calculated differently.
                 * <p>As {@code OpenMBeanAttributeInfoSupport} instances are
                 * immutable, the hash code for this instance is calculated once,
                 * on the first call to {@code hashCode}, and then the same value
                 * is returned for subsequent calls.
                 * @return the hash code value for this {#code
                 *  OpenMBeanAttributeInfoSupport} instance
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Returns a string representation of this
                 * {@code OpenMBeanAttributeInfoSupport} instance.
                 * <p>
                 * The string representation consists of the name of this class (i.e.
                 * {@code javax.management.openmbean.OpenMBeanAttributeInfoSupport}),
                 * the string representation of the name and open type of the
                 * described parameter, the string representation of its
                 * default, min, max and legal values and the string
                 * representation of its descriptor.
                 * <p>As {@code OpenMBeanAttributeInfoSupport} instances are
                 * immutable, the string representation for this instance is
                 * calculated once, on the first call to {@code toString}, and
                 * then the same value is returned for subsequent calls.
                 * @return a string representation of this
                 *  {#code OpenMBeanAttributeInfoSupport} instance.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
