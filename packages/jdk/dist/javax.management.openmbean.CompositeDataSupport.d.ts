declare namespace javax {
    namespace management {
        namespace openmbean {
            /**
             * The <tt>CompositeDataSupport</tt> class is the <i>open data</i> class which
             * implements the <tt>CompositeData</tt> interface.
             * @since 1.5
             */
            // @ts-ignore
            class CompositeDataSupport extends java.lang.Object implements javax.management.openmbean.CompositeData, java.io.Serializable {
                /**
                 * <p>Constructs a <tt>CompositeDataSupport</tt> instance with the specified
                 * <tt>compositeType</tt>, whose item values
                 * are specified by <tt>itemValues[]</tt>, in the same order as in
                 * <tt>itemNames[]</tt>.
                 * As a <tt>CompositeType</tt> does not specify any order on its items,
                 * the <tt>itemNames[]</tt> parameter is used
                 * to specify the order in which the values are given in <tt>itemValues[]</tt>.
                 * The items contained in this <tt>CompositeDataSupport</tt> instance are
                 * internally stored in a <tt>TreeMap</tt>,
                 * thus sorted in ascending lexicographic order of their names, for faster
                 * retrieval of individual item values.</p>
                 * <p>The constructor checks that all the constraints listed below for each
                 * parameter are satisfied,
                 * and throws the appropriate exception if they are not.</p>
                 * @param compositeType the <i>composite type </i> of this <i>composite
                 *  data</i> instance; must not be null.
                 * @param itemNames <tt>itemNames</tt> must list, in any order, all the
                 *  item names defined in <tt>compositeType</tt>; the order in which the
                 *  names are listed, is used to match values in <tt>itemValues[]</tt>; must
                 *  not be null or empty.
                 * @param itemValues the values of the items, listed in the same order as
                 *  their respective names in <tt>itemNames</tt>; each item value can be
                 *  null, but if it is non-null it must be a valid value for the open type
                 *  defined in <tt>compositeType</tt> for the corresponding item; must be of
                 *  the same size as <tt>itemNames</tt>; must not be null or empty.
                 * @throws IllegalArgumentException <tt>compositeType</tt> is null, or
                 *  <tt>itemNames[]</tt> or <tt>itemValues[]</tt> is null or empty, or one
                 *  of the elements in <tt>itemNames[]</tt> is a null or empty string, or
                 *  <tt>itemNames[]</tt> and <tt>itemValues[]</tt> are not of the same size.
                 * @throws OpenDataException <tt>itemNames[]</tt> or
                 *  <tt>itemValues[]</tt>'s size differs from the number of items defined in
                 *  <tt>compositeType</tt>, or one of the elements in <tt>itemNames[]</tt>
                 *  does not exist as an item name defined in <tt>compositeType</tt>, or one
                 *  of the elements in <tt>itemValues[]</tt> is not a valid value for the
                 *  corresponding item as defined in <tt>compositeType</tt>.
                 */
                // @ts-ignore
                constructor(compositeType: javax.management.openmbean.CompositeType, itemNames: string[], itemValues: any[])
                /**
                 * <p>
                 * Constructs a <tt>CompositeDataSupport</tt> instance with the specified <tt>compositeType</tt>, whose item names and corresponding values
                 * are given by the mappings in the map <tt>items</tt>.
                 * This constructor converts the keys to a string array and the values to an object array and calls
                 * <tt>CompositeDataSupport(javax.management.openmbean.CompositeType, java.lang.String[], java.lang.Object[])</tt>.
                 * @param compositeType  the <i>composite type </i> of this <i>composite data</i> instance;
                 *                         must not be null.
                 * @param items  the mappings of all the item names to their values;
                 *                 <tt>items</tt> must contain all the item names defined in <tt>compositeType</tt>;
                 *                 must not be null or empty.
                 * @throws IllegalArgumentException <tt>compositeType</tt> is null, or
                 *  <tt>items</tt> is null or empty, or one of the keys in <tt>items</tt> is a null
                 *  or empty string.
                 * @throws OpenDataException <tt>items</tt>' size differs from the
                 *  number of items defined in <tt>compositeType</tt>, or one of the
                 *  keys in <tt>items</tt> does not exist as an item name defined in
                 *  <tt>compositeType</tt>, or one of the values in <tt>items</tt>
                 *  is not a valid value for the corresponding item as defined in
                 *  <tt>compositeType</tt>.
                 * @throws ArrayStoreException one or more keys in <tt>items</tt> is not of
                 *  the class <tt>java.lang.String</tt>.
                 */
                // @ts-ignore
                constructor(compositeType: javax.management.openmbean.CompositeType, items: java.util.Map<java.lang.String, any>)
                /**
                 * Returns the <i>composite type </i> of this <i>composite data</i> instance.
                 */
                // @ts-ignore
                getCompositeType(): javax.management.openmbean.CompositeType
                /**
                 * Returns the value of the item whose name is <tt>key</tt>.
                 * @throws IllegalArgumentException  if <tt>key</tt> is a null or empty String.
                 * @throws InvalidKeyException  if <tt>key</tt> is not an existing item name for
                 *  this <tt>CompositeData</tt> instance.
                 */
                // @ts-ignore
                get(key: string): java.lang.Object
                /**
                 * Returns an array of the values of the items whose names are specified by
                 * <tt>keys</tt>, in the same order as <tt>keys</tt>.
                 * @throws IllegalArgumentException  if an element in <tt>keys</tt> is a null
                 *  or empty String.
                 * @throws InvalidKeyException  if an element in <tt>keys</tt> is not an existing
                 *  item name for this <tt>CompositeData</tt> instance.
                 */
                // @ts-ignore
                getAll(keys: string[]): java.lang.Object[]
                /**
                 * Returns <tt>true</tt> if and only if this <tt>CompositeData</tt> instance contains
                 * an item whose name is <tt>key</tt>.
                 * If <tt>key</tt> is a null or empty String, this method simply returns false.
                 */
                // @ts-ignore
                containsKey(key: string): boolean
                /**
                 * Returns <tt>true</tt> if and only if this <tt>CompositeData</tt> instance
                 * contains an item
                 * whose value is <tt>value</tt>.
                 */
                // @ts-ignore
                containsValue(value: any): boolean
                /**
                 * Returns an unmodifiable Collection view of the item values contained in this
                 * <tt>CompositeData</tt> instance.
                 * The returned collection's iterator will return the values in the ascending
                 * lexicographic order of the corresponding
                 * item names.
                 */
                // @ts-ignore
                values(): java.util.Collection<?>
                /**
                 * Compares the specified <var>obj</var> parameter with this
                 * <code>CompositeDataSupport</code> instance for equality.
                 * <p>
                 * Returns <tt>true</tt> if and only if all of the following statements are true:
                 * <ul>
                 * <li><var>obj</var> is non null,</li>
                 * <li><var>obj</var> also implements the <code>CompositeData</code> interface,</li>
                 * <li>their composite types are equal</li>
                 * <li>their contents, i.e. (name, value) pairs are equal. If a value contained in
                 * the content is an array, the value comparison is done as if by calling
                 * the {@link java.util.Arrays#deepEquals(Object[], Object[]) deepEquals} method
                 * for arrays of object reference types or the appropriate overloading of
                 * {@code Arrays.equals(e1,e2)} for arrays of primitive types</li>
                 * </ul>
                 * <p>
                 * This ensures that this <tt>equals</tt> method works properly for
                 * <var>obj</var> parameters which are different implementations of the
                 * <code>CompositeData</code> interface, with the restrictions mentioned in the
                 * {@link java.util.Collection#equals(Object) equals}
                 * method of the <tt>java.util.Collection</tt> interface.
                 * @param obj  the object to be compared for equality with this
                 *  <code>CompositeDataSupport</code> instance.
                 * @return <code>true</code> if the specified object is equal to this
                 *  <code>CompositeDataSupport</code> instance.
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Returns the hash code value for this <code>CompositeDataSupport</code> instance.
                 * <p>
                 * The hash code of a <code>CompositeDataSupport</code> instance is the sum of the hash codes
                 * of all elements of information used in <code>equals</code> comparisons
                 * (ie: its <i>composite type</i> and all the item values).
                 * <p>
                 * This ensures that <code> t1.equals(t2) </code> implies that <code> t1.hashCode()==t2.hashCode() </code>
                 * for any two <code>CompositeDataSupport</code> instances <code>t1</code> and <code>t2</code>,
                 * as required by the general contract of the method
                 * {@link Object#hashCode() Object.hashCode()}.
                 * <p>
                 * Each item value's hash code is added to the returned hash code.
                 * If an item value is an array,
                 * its hash code is obtained as if by calling the
                 * {@link java.util.Arrays#deepHashCode(Object[]) deepHashCode} method
                 * for arrays of object reference types or the appropriate overloading
                 * of {@code Arrays.hashCode(e)} for arrays of primitive types.
                 * @return the hash code value for this <code>CompositeDataSupport</code> instance
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Returns a string representation of this <code>CompositeDataSupport</code> instance.
                 * <p>
                 * The string representation consists of the name of this class (ie <code>javax.management.openmbean.CompositeDataSupport</code>),
                 * the string representation of the composite type of this instance, and the string representation of the contents
                 * (ie list the itemName=itemValue mappings).
                 * @return a string representation of this <code>CompositeDataSupport</code> instance
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
