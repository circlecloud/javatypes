declare namespace javax {
    namespace print {
        namespace attribute {
            /**
             * Class HashAttributeSet provides an <code>AttributeSet</code>
             * implementation with characteristics of a hash map.
             * <P>
             * @author Alan Kaminsky
             */
            // @ts-ignore
            class HashAttributeSet extends java.lang.Object implements javax.print.attribute.AttributeSet, java.io.Serializable {
                /**
                 * Construct a new, empty attribute set.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Construct a new attribute set,
                 * initially populated with the given attribute.
                 * @param attribute  Attribute value to add to the set.
                 * @exception NullPointerException
                 *      (unchecked exception) Thrown if <CODE>attribute</CODE> is null.
                 */
                // @ts-ignore
                constructor(attribute: javax.print.attribute.Attribute)
                /**
                 * Construct a new attribute set,
                 * initially populated with the values from the
                 * given array. The new attribute set is populated by
                 * adding the elements of <CODE>attributes</CODE> array to the set in
                 * sequence, starting at index 0. Thus, later array elements may replace
                 * earlier array elements if the array contains duplicate attribute
                 * values or attribute categories.
                 * @param attributes  Array of attribute values to add to the set.
                 *                     If null, an empty attribute set is constructed.
                 * @exception NullPointerException
                 *      (unchecked exception) Thrown if any element of
                 *      <CODE>attributes</CODE> is null.
                 */
                // @ts-ignore
                constructor(attributes: javax.print.attribute.Attribute[])
                /**
                 * Construct a new attribute set,
                 * initially populated with the values from the  given set.
                 * @param attributes Set of attributes from which to initialise this set.
                 *                  If null, an empty attribute set is constructed.
                 */
                // @ts-ignore
                constructor(attributes: javax.print.attribute.AttributeSet)
                /**
                 * Construct a new, empty attribute set, where the members of
                 * the attribute set are restricted to the given interface.
                 * @param interfaceName  The interface of which all members of this
                 *                      attribute set must be an instance. It is assumed to
                 *                      be interface {#link Attribute Attribute} or a
                 *                      subinterface thereof.
                 * @exception NullPointerException if interfaceName is null.
                 */
                // @ts-ignore
                constructor(interfaceName: java.lang.Class<any>)
                /**
                 * Construct a new attribute set, initially populated with the given
                 * attribute, where the members of the attribute set are restricted to the
                 * given interface.
                 * @param attribute      Attribute value to add to the set.
                 * @param interfaceName  The interface of which all members of this
                 *                     attribute set must be an instance. It is assumed to
                 *                     be interface {#link Attribute Attribute} or a
                 *                     subinterface thereof.
                 * @exception NullPointerException
                 *      (unchecked exception) Thrown if <CODE>attribute</CODE> is null.
                 * @exception NullPointerException if interfaceName is null.
                 * @exception ClassCastException
                 *      (unchecked exception) Thrown if <CODE>attribute</CODE> is not an
                 *      instance of <CODE>interfaceName</CODE>.
                 */
                // @ts-ignore
                constructor(attribute: javax.print.attribute.Attribute, interfaceName: java.lang.Class<any>)
                /**
                 * Construct a new attribute set, where the members of the attribute
                 * set are restricted to the given interface.
                 * The new attribute set is populated
                 * by adding the elements of <CODE>attributes</CODE> array to the set in
                 * sequence, starting at index 0. Thus, later array elements may replace
                 * earlier array elements if the array contains duplicate attribute
                 * values or attribute categories.
                 * @param attributes Array of attribute values to add to the set. If
                 *                     null, an empty attribute set is constructed.
                 * @param interfaceName  The interface of which all members of this
                 *                     attribute set must be an instance. It is assumed to
                 *                     be interface {#link Attribute Attribute} or a
                 *                     subinterface thereof.
                 * @exception NullPointerException
                 *      (unchecked exception) Thrown if any element of
                 *  <CODE>attributes</CODE> is null.
                 * @exception NullPointerException if interfaceName is null.
                 * @exception ClassCastException
                 *      (unchecked exception) Thrown if any element of
                 *  <CODE>attributes</CODE> is not an instance of
                 *  <CODE>interfaceName</CODE>.
                 */
                // @ts-ignore
                constructor(attributes: javax.print.attribute.Attribute[], interfaceName: java.lang.Class<any>)
                /**
                 * Construct a new attribute set, initially populated with the
                 * values from the  given set where the members of the attribute
                 * set are restricted to the given interface.
                 * @param attributes set of attribute values to initialise the set. If
                 *                     null, an empty attribute set is constructed.
                 * @param interfaceName  The interface of which all members of this
                 *                     attribute set must be an instance. It is assumed to
                 *                     be interface {#link Attribute Attribute} or a
                 *                     subinterface thereof.
                 * @exception ClassCastException
                 *      (unchecked exception) Thrown if any element of
                 *  <CODE>attributes</CODE> is not an instance of
                 *  <CODE>interfaceName</CODE>.
                 */
                // @ts-ignore
                constructor(attributes: javax.print.attribute.AttributeSet, interfaceName: java.lang.Class<any>)
                /**
                 * Returns the attribute value which this attribute set contains in the
                 * given attribute category. Returns <tt>null</tt> if this attribute set
                 * does not contain any attribute value in the given attribute category.
                 * @param category  Attribute category whose associated attribute value
                 *                    is to be returned. It must be a
                 *                    {#link java.lang.Class Class}
                 *                    that implements interface {@link Attribute
                 *                    Attribute}.
                 * @return The attribute value in the given attribute category contained
                 *           in this attribute set, or <tt>null</tt> if this attribute set
                 *           does not contain any attribute value in the given attribute
                 *           category.
                 * @throws NullPointerException
                 *      (unchecked exception) Thrown if the <CODE>category</CODE> is null.
                 * @throws ClassCastException
                 *      (unchecked exception) Thrown if the <CODE>category</CODE> is not a
                 *      {#link java.lang.Class Class} that implements interface {@link
                 *      Attribute Attribute}.
                 */
                // @ts-ignore
                get(category: java.lang.Class<any>): javax.print.attribute.Attribute
                /**
                 * Adds the specified attribute to this attribute set if it is not
                 * already present, first removing any existing in the same
                 * attribute category as the specified attribute value.
                 * @param attribute  Attribute value to be added to this attribute set.
                 * @return <tt>true</tt> if this attribute set changed as a result of the
                 *           call, i.e., the given attribute value was not already a
                 *           member of this attribute set.
                 * @throws NullPointerException
                 *     (unchecked exception) Thrown if the <CODE>attribute</CODE> is null.
                 * @throws UnmodifiableSetException
                 *     (unchecked exception) Thrown if this attribute set does not support
                 *      the <CODE>add()</CODE> operation.
                 */
                // @ts-ignore
                add(attribute: javax.print.attribute.Attribute): boolean
                /**
                 * Removes any attribute for this category from this attribute set if
                 * present. If <CODE>category</CODE> is null, then
                 * <CODE>remove()</CODE> does nothing and returns <tt>false</tt>.
                 * @param category Attribute category to be removed from this
                 *                   attribute set.
                 * @return <tt>true</tt> if this attribute set changed as a result of the
                 *          call, i.e., the given attribute category had been a member of
                 *          this attribute set.
                 * @throws UnmodifiableSetException
                 *      (unchecked exception) Thrown if this attribute set does not
                 *      support the <CODE>remove()</CODE> operation.
                 */
                // @ts-ignore
                remove(category: java.lang.Class<any>): boolean
                /**
                 * Removes the specified attribute from this attribute set if
                 * present. If <CODE>attribute</CODE> is null, then
                 * <CODE>remove()</CODE> does nothing and returns <tt>false</tt>.
                 * @param attribute Attribute value to be removed from this attribute set.
                 * @return <tt>true</tt> if this attribute set changed as a result of the
                 *          call, i.e., the given attribute value had been a member of
                 *          this attribute set.
                 * @throws UnmodifiableSetException
                 *      (unchecked exception) Thrown if this attribute set does not
                 *      support the <CODE>remove()</CODE> operation.
                 */
                // @ts-ignore
                remove(attribute: javax.print.attribute.Attribute): boolean
                /**
                 * Returns <tt>true</tt> if this attribute set contains an
                 * attribute for the specified category.
                 * @param category whose presence in this attribute set is
                 *             to be tested.
                 * @return <tt>true</tt> if this attribute set contains an attribute
                 *          value for the specified category.
                 */
                // @ts-ignore
                containsKey(category: java.lang.Class<any>): boolean
                /**
                 * Returns <tt>true</tt> if this attribute set contains the given
                 * attribute.
                 * @param attribute  value whose presence in this attribute set is
                 *             to be tested.
                 * @return <tt>true</tt> if this attribute set contains the given
                 *       attribute    value.
                 */
                // @ts-ignore
                containsValue(attribute: javax.print.attribute.Attribute): boolean
                /**
                 * Adds all of the elements in the specified set to this attribute.
                 * The outcome is the same as if the
                 * {@link #add(Attribute) add(Attribute)}
                 * operation had been applied to this attribute set successively with
                 * each element from the specified set.
                 * The behavior of the <CODE>addAll(AttributeSet)</CODE>
                 * operation is unspecified if the specified set is modified while
                 * the operation is in progress.
                 * <P>
                 * If the <CODE>addAll(AttributeSet)</CODE> operation throws an exception,
                 * the effect on this attribute set's state is implementation dependent;
                 * elements from the specified set before the point of the exception may
                 * or may not have been added to this attribute set.
                 * @param attributes  whose elements are to be added to this attribute
                 *             set.
                 * @return <tt>true</tt> if this attribute set changed as a result of the
                 *           call.
                 * @throws UnmodifiableSetException
                 *     (Unchecked exception) Thrown if this attribute set does not
                 *      support the <tt>addAll(AttributeSet)</tt> method.
                 * @throws NullPointerException
                 *      (Unchecked exception) Thrown if some element in the specified
                 *      set is null, or the set is null.
                 * @see #add(Attribute)
                 */
                // @ts-ignore
                addAll(attributes: javax.print.attribute.AttributeSet): boolean
                /**
                 * Returns the number of attributes in this attribute set. If this
                 * attribute set contains more than <tt>Integer.MAX_VALUE</tt> elements,
                 * returns  <tt>Integer.MAX_VALUE</tt>.
                 * @return The number of attributes in this attribute set.
                 */
                // @ts-ignore
                size(): int
                /**
                 * @return the Attributes contained in this set as an array, zero length
                 *  if the AttributeSet is empty.
                 */
                // @ts-ignore
                toArray(): javax.print.attribute.Attribute[]
                /**
                 * Removes all attributes from this attribute set.
                 * @throws UnmodifiableSetException
                 *    (unchecked exception) Thrown if this attribute set does not support
                 *      the <CODE>clear()</CODE> operation.
                 */
                // @ts-ignore
                clear(): void
                /**
                 * Returns true if this attribute set contains no attributes.
                 * @return true if this attribute set contains no attributes.
                 */
                // @ts-ignore
                isEmpty(): boolean
                /**
                 * Compares the specified object with this attribute set for equality.
                 * Returns <tt>true</tt> if the given object is also an attribute set and
                 * the two attribute sets contain the same attribute category-attribute
                 * value mappings. This ensures that the
                 * <tt>equals()</tt> method works properly across different
                 * implementations of the AttributeSet interface.
                 * @param object to be compared for equality with this attribute set.
                 * @return <tt>true</tt> if the specified object is equal to this
                 *        attribute   set.
                 */
                // @ts-ignore
                equals(object: any): boolean
                /**
                 * Returns the hash code value for this attribute set.
                 * The hash code of an attribute set is defined to be the sum
                 * of the hash codes of each entry in the AttributeSet.
                 * This ensures that <tt>t1.equals(t2)</tt> implies that
                 * <tt>t1.hashCode()==t2.hashCode()</tt> for any two attribute sets
                 * <tt>t1</tt> and <tt>t2</tt>, as required by the general contract of
                 * {@link java.lang.Object#hashCode() Object.hashCode()}.
                 * @return The hash code value for this attribute set.
                 */
                // @ts-ignore
                hashCode(): int
            }
        }
    }
}
