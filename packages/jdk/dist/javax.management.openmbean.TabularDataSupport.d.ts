declare namespace javax {
    namespace management {
        namespace openmbean {
            /**
             * The <tt>TabularDataSupport</tt> class is the <i>open data</i> class which implements the <tt>TabularData</tt>
             * and the <tt>Map</tt> interfaces, and which is internally based on a hash map data structure.
             * @since 1.5
             */
            // @ts-ignore
            class TabularDataSupport extends java.lang.Object implements javax.management.openmbean.TabularData, java.util.Map<java.lang.Object, java.lang.Object>, java.lang.Cloneable, java.io.Serializable {
                /**
                 * Creates an empty <tt>TabularDataSupport</tt> instance whose open-type is <var>tabularType</var>,
                 * and whose underlying <tt>HashMap</tt> has a default initial capacity (101) and default load factor (0.75).
                 * <p>
                 * This constructor simply calls <tt>this(tabularType, 101, 0.75f);</tt>
                 * @param tabularType               the <i>tabular type</i> describing this <tt>TabularData</tt> instance;
                 *                                    cannot be null.
                 * @throws IllegalArgumentException  if the tabular type is null.
                 */
                // @ts-ignore
                constructor(tabularType: javax.management.openmbean.TabularType)
                /**
                 * Creates an empty <tt>TabularDataSupport</tt> instance whose open-type is <var>tabularType</var>,
                 * and whose underlying <tt>HashMap</tt> has the specified initial capacity and load factor.
                 * @param tabularType               the <i>tabular type</i> describing this <tt>TabularData</tt> instance;
                 *                            cannot be null.
                 * @param initialCapacity   the initial capacity of the HashMap.
                 * @param loadFactor        the load factor of the HashMap
                 * @throws IllegalArgumentException  if the initial capacity is less than zero,
                 *                                    or the load factor is nonpositive,
                 *                                    or the tabular type is null.
                 */
                // @ts-ignore
                constructor(tabularType: javax.management.openmbean.TabularType, initialCapacity: number /*int*/, loadFactor: number /*float*/)
                /**
                 * Returns the <i>tabular type</i> describing this <tt>TabularData</tt> instance.
                 */
                // @ts-ignore
                getTabularType(): javax.management.openmbean.TabularType
                /**
                 * Calculates the index that would be used in this <tt>TabularData</tt> instance to refer to the specified
                 * composite data <var>value</var> parameter if it were added to this instance.
                 * This method checks for the type validity of the specified <var>value</var>,
                 * but does not check if the calculated index is already used to refer to a value in this <tt>TabularData</tt> instance.
                 * @param value                      the composite data value whose index in this
                 *                                     <tt>TabularData</tt> instance is to be calculated;
                 *                                     must be of the same composite type as this instance's row type;
                 *                                     must not be null.
                 * @return the index that the specified <var>value</var> would have in this <tt>TabularData</tt> instance.
                 * @throws NullPointerException       if <var>value</var> is <tt>null</tt>.
                 * @throws InvalidOpenTypeException   if <var>value</var> does not conform to this <tt>TabularData</tt> instance's
                 *                                     row type definition.
                 */
                // @ts-ignore
                calculateIndex(value: javax.management.openmbean.CompositeData): java.lang.Object[]
                /**
                 * Returns <tt>true</tt> if and only if this <tt>TabularData</tt> instance contains a <tt>CompositeData</tt> value
                 * (ie a row) whose index is the specified <var>key</var>. If <var>key</var> cannot be cast to a one dimension array
                 * of Object instances, this method simply returns <tt>false</tt>; otherwise it returns the the result of the call to
                 * <tt>this.containsKey((Object[]) key)</tt>.
                 * @param key  the index value whose presence in this <tt>TabularData</tt> instance is to be tested.
                 * @return <tt>true</tt> if this <tt>TabularData</tt> indexes a row value with the specified key.
                 */
                // @ts-ignore
                containsKey(key: any): boolean
                /**
                 * Returns <tt>true</tt> if and only if this <tt>TabularData</tt> instance contains a <tt>CompositeData</tt> value
                 * (ie a row) whose index is the specified <var>key</var>. If <var>key</var> is <tt>null</tt> or does not conform to
                 * this <tt>TabularData</tt> instance's <tt>TabularType</tt> definition, this method simply returns <tt>false</tt>.
                 * @param key  the index value whose presence in this <tt>TabularData</tt> instance is to be tested.
                 * @return <tt>true</tt> if this <tt>TabularData</tt> indexes a row value with the specified key.
                 */
                // @ts-ignore
                containsKey(key: any[]): boolean
                /**
                 * Returns <tt>true</tt> if and only if this <tt>TabularData</tt> instance contains the specified
                 * <tt>CompositeData</tt> value. If <var>value</var> is <tt>null</tt> or does not conform to
                 * this <tt>TabularData</tt> instance's row type definition, this method simply returns <tt>false</tt>.
                 * @param value  the row value whose presence in this <tt>TabularData</tt> instance is to be tested.
                 * @return <tt>true</tt> if this <tt>TabularData</tt> instance contains the specified row value.
                 */
                // @ts-ignore
                containsValue(value: javax.management.openmbean.CompositeData): boolean
                /**
                 * Returns <tt>true</tt> if and only if this <tt>TabularData</tt> instance contains the specified
                 * value.
                 * @param value  the row value whose presence in this <tt>TabularData</tt> instance is to be tested.
                 * @return <tt>true</tt> if this <tt>TabularData</tt> instance contains the specified row value.
                 */
                // @ts-ignore
                containsValue(value: any): boolean
                /**
                 * This method simply calls <tt>get((Object[]) key)</tt>.
                 * @throws NullPointerException  if the <var>key</var> is <tt>null</tt>
                 * @throws ClassCastException    if the <var>key</var> is not of the type <tt>Object[]</tt>
                 * @throws InvalidKeyException   if the <var>key</var> does not conform to this <tt>TabularData</tt> instance's
                 *                                <tt>TabularType</tt> definition
                 */
                // @ts-ignore
                get(key: any): java.lang.Object
                /**
                 * Returns the <tt>CompositeData</tt> value whose index is
                 * <var>key</var>, or <tt>null</tt> if there is no value mapping
                 * to <var>key</var>, in this <tt>TabularData</tt> instance.
                 * @param key the index of the value to get in this
                 *  <tt>TabularData</tt> instance; * must be valid with this
                 *  <tt>TabularData</tt> instance's row type definition; * must not
                 *  be null.
                 * @return the value corresponding to <var>key</var>.
                 * @throws NullPointerException  if the <var>key</var> is <tt>null</tt>
                 * @throws InvalidKeyException   if the <var>key</var> does not conform to this <tt>TabularData</tt> instance's
                 *                                <tt>TabularType</tt> type definition.
                 */
                // @ts-ignore
                get(key: any[]): javax.management.openmbean.CompositeData
                /**
                 * This method simply calls <tt>put((CompositeData) value)</tt> and
                 * therefore ignores its <var>key</var> parameter which can be <tt>null</tt>.
                 * @param key an ignored parameter.
                 * @param value the {#link CompositeData} to put.
                 * @return the value which is put
                 * @throws NullPointerException  if the <var>value</var> is <tt>null</tt>
                 * @throws ClassCastException if the <var>value</var> is not of
                 *  the type <tt>CompositeData</tt>
                 * @throws InvalidOpenTypeException if the <var>value</var> does
                 *  not conform to this <tt>TabularData</tt> instance's
                 *  <tt>TabularType</tt> definition
                 * @throws KeyAlreadyExistsException if the key for the
                 *  <var>value</var> parameter, calculated according to this
                 *  <tt>TabularData</tt> instance's <tt>TabularType</tt> definition
                 *  already maps to an existing value
                 */
                // @ts-ignore
                put(key: any, value: any): java.lang.Object
                // @ts-ignore
                put(value: javax.management.openmbean.CompositeData): void
                /**
                 * This method simply calls <tt>remove((Object[]) key)</tt>.
                 * @param key an <tt>Object[]</tt> representing the key to remove.
                 * @return previous value associated with specified key, or <tt>null</tt>
                 *          if there was no mapping for key.
                 * @throws NullPointerException  if the <var>key</var> is <tt>null</tt>
                 * @throws ClassCastException    if the <var>key</var> is not of the type <tt>Object[]</tt>
                 * @throws InvalidKeyException   if the <var>key</var> does not conform to this <tt>TabularData</tt> instance's
                 *                                <tt>TabularType</tt> definition
                 */
                // @ts-ignore
                remove(key: any): java.lang.Object
                /**
                 * Removes the <tt>CompositeData</tt> value whose index is <var>key</var> from this <tt>TabularData</tt> instance,
                 * and returns the removed value, or returns <tt>null</tt> if there is no value whose index is <var>key</var>.
                 * @param key  the index of the value to get in this <tt>TabularData</tt> instance;
                 *               must be valid with this <tt>TabularData</tt> instance's row type definition;
                 *               must not be null.
                 * @return previous value associated with specified key, or <tt>null</tt>
                 *          if there was no mapping for key.
                 * @throws NullPointerException  if the <var>key</var> is <tt>null</tt>
                 * @throws InvalidKeyException   if the <var>key</var> does not conform to this <tt>TabularData</tt> instance's
                 *                                <tt>TabularType</tt> definition
                 */
                // @ts-ignore
                remove(key: any[]): javax.management.openmbean.CompositeData
                /**
                 * Add all the values contained in the specified map <var>t</var>
                 * to this <tt>TabularData</tt> instance.  This method converts
                 * the collection of values contained in this map into an array of
                 * <tt>CompositeData</tt> values, if possible, and then call the
                 * method <tt>putAll(CompositeData[])</tt>. Note that the keys
                 * used in the specified map <var>t</var> are ignored. This method
                 * allows, for example to add the content of another
                 * <tt>TabularData</tt> instance with the same row type (but
                 * possibly different index names) into this instance.
                 * @param t the map whose values are to be added as new rows to
                 *  this <tt>TabularData</tt> instance; if <var>t</var> is
                 *  <tt>null</tt> or empty, this method returns without doing
                 *  anything.
                 * @throws NullPointerException if a value in <var>t</var> is
                 *  <tt>null</tt>.
                 * @throws ClassCastException if a value in <var>t</var> is not an
                 *  instance of <tt>CompositeData</tt>.
                 * @throws InvalidOpenTypeException if a value in <var>t</var>
                 *  does not conform to this <tt>TabularData</tt> instance's row
                 *  type definition.
                 * @throws KeyAlreadyExistsException if the index for a value in
                 *  <var>t</var>, calculated according to this
                 *  <tt>TabularData</tt> instance's <tt>TabularType</tt> definition
                 *  already maps to an existing value in this instance, or two
                 *  values in <var>t</var> have the same index.
                 */
                // @ts-ignore
                putAll(t: java.util.Map<any, ?>): void
                /**
                 * Add all the elements in <var>values</var> to this
                 * <tt>TabularData</tt> instance.  If any element in
                 * <var>values</var> does not satisfy the constraints defined in
                 * {@link #put(CompositeData) <tt>put</tt>}, or if any two
                 * elements in <var>values</var> have the same index calculated
                 * according to this <tt>TabularData</tt> instance's
                 * <tt>TabularType</tt> definition, then an exception describing
                 * the failure is thrown and no element of <var>values</var> is
                 * added, thus leaving this <tt>TabularData</tt> instance
                 * unchanged.
                 * @param values the array of composite data values to be added as
                 *  new rows to this <tt>TabularData</tt> instance; if
                 *  <var>values</var> is <tt>null</tt> or empty, this method
                 *  returns without doing anything.
                 * @throws NullPointerException if an element of <var>values</var>
                 *  is <tt>null</tt>
                 * @throws InvalidOpenTypeException if an element of
                 *  <var>values</var> does not conform to this
                 *  <tt>TabularData</tt> instance's row type definition (ie its
                 *  <tt>TabularType</tt> definition)
                 * @throws KeyAlreadyExistsException if the index for an element
                 *  of <var>values</var>, calculated according to this
                 *  <tt>TabularData</tt> instance's <tt>TabularType</tt> definition
                 *  already maps to an existing value in this instance, or two
                 *  elements of <var>values</var> have the same index
                 */
                // @ts-ignore
                putAll(values: javax.management.openmbean.CompositeData[]): void
                /**
                 * Removes all rows from this <code>TabularDataSupport</code> instance.
                 */
                // @ts-ignore
                clear(): void
                /**
                 * Returns the number of rows in this <code>TabularDataSupport</code> instance.
                 * @return the number of rows in this <code>TabularDataSupport</code> instance.
                 */
                // @ts-ignore
                size(): int
                /**
                 * Returns <tt>true</tt> if this <code>TabularDataSupport</code> instance contains no rows.
                 * @return <tt>true</tt> if this <code>TabularDataSupport</code> instance contains no rows.
                 */
                // @ts-ignore
                isEmpty(): boolean
                /**
                 * Returns a set view of the keys contained in the underlying map of this
                 * {@code TabularDataSupport} instance used to index the rows.
                 * Each key contained in this {@code Set} is an unmodifiable {@code List<?>}
                 * so the returned set view is a {@code Set<List<?>>} but is declared as a
                 * {@code Set<Object>} for compatibility reasons.
                 * The set is backed by the underlying map of this
                 * {@code TabularDataSupport} instance, so changes to the
                 * {@code TabularDataSupport} instance are reflected in the
                 * set, and vice-versa.
                 * The set supports element removal, which removes the corresponding
                 * row from this {@code TabularDataSupport} instance, via the
                 * {@link Iterator#remove}, {@link Set#remove}, {@link Set#removeAll},
                 * {@link Set#retainAll}, and {@link Set#clear} operations. It does
                 * not support the {@link Set#add} or {@link Set#addAll} operations.
                 * @return a set view ({#code Set<List<?>>}) of the keys used to index
                 *  the rows of this {@code TabularDataSupport} instance.
                 */
                // @ts-ignore
                keySet(): java.util.Set<java.lang.Object>
                /**
                 * Returns a collection view of the rows contained in this
                 * {@code TabularDataSupport} instance. The returned {@code Collection}
                 * is a {@code Collection<CompositeData>} but is declared as a
                 * {@code Collection<Object>} for compatibility reasons.
                 * The returned collection can be used to iterate over the values.
                 * The collection is backed by the underlying map, so changes to the
                 * {@code TabularDataSupport} instance are reflected in the collection,
                 * and vice-versa.
                 * The collection supports element removal, which removes the corresponding
                 * index to row mapping from this {@code TabularDataSupport} instance, via
                 * the {@link Iterator#remove}, {@link Collection#remove},
                 * {@link Collection#removeAll}, {@link Collection#retainAll},
                 * and {@link Collection#clear} operations. It does not support
                 * the {@link Collection#add} or {@link Collection#addAll} operations.
                 * @return a collection view ({#code Collection<CompositeData>}) of
                 *  the values contained in this {@code TabularDataSupport} instance.
                 */
                // @ts-ignore
                values(): java.util.Collection<java.lang.Object>
                /**
                 * Returns a collection view of the index to row mappings
                 * contained in this {@code TabularDataSupport} instance.
                 * Each element in the returned collection is
                 * a {@code Map.Entry<List<?>,CompositeData>} but
                 * is declared as a {@code Map.Entry<Object,Object>}
                 * for compatibility reasons. Each of the map entry
                 * keys is an unmodifiable {@code List<?>}.
                 * The collection is backed by the underlying map of this
                 * {@code TabularDataSupport} instance, so changes to the
                 * {@code TabularDataSupport} instance are reflected in
                 * the collection, and vice-versa.
                 * The collection supports element removal, which removes
                 * the corresponding mapping from the map, via the
                 * {@link Iterator#remove}, {@link Collection#remove},
                 * {@link Collection#removeAll}, {@link Collection#retainAll},
                 * and {@link Collection#clear} operations. It does not support
                 * the {@link Collection#add} or {@link Collection#addAll}
                 * operations.
                 * <p>
                 * <b>IMPORTANT NOTICE</b>: Do not use the {@code setValue} method of the
                 * {@code Map.Entry} elements contained in the returned collection view.
                 * Doing so would corrupt the index to row mappings contained in this
                 * {@code TabularDataSupport} instance.
                 * @return a collection view ({#code Set<Map.Entry<List<?>,CompositeData>>})
                 *  of the mappings contained in this map.
                 * @see java.util.Map.Entry
                 */
                // @ts-ignore
                entrySet(): java.util.Set<java.util.Map.Entry<java.lang.Object, java.lang.Object>>
                /**
                 * Returns a clone of this <code>TabularDataSupport</code> instance:
                 * the clone is obtained by calling <tt>super.clone()</tt>, and then cloning the underlying map.
                 * Only a shallow clone of the underlying map is made, i.e. no cloning of the indexes and row values is made as they are immutable.
                 */
                // @ts-ignore
                clone(): java.lang.Object
                /**
                 * Compares the specified <var>obj</var> parameter with this <code>TabularDataSupport</code> instance for equality.
                 * <p>
                 * Returns <tt>true</tt> if and only if all of the following statements are true:
                 * <ul>
                 * <li><var>obj</var> is non null,</li>
                 * <li><var>obj</var> also implements the <code>TabularData</code> interface,</li>
                 * <li>their tabular types are equal</li>
                 * <li>their contents (ie all CompositeData values) are equal.</li>
                 * </ul>
                 * This ensures that this <tt>equals</tt> method works properly for <var>obj</var> parameters which are
                 * different implementations of the <code>TabularData</code> interface.
                 * <br>&nbsp;
                 * @param obj  the object to be compared for equality with this <code>TabularDataSupport</code> instance;
                 * @return <code>true</code> if the specified object is equal to this <code>TabularDataSupport</code> instance.
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Returns the hash code value for this <code>TabularDataSupport</code> instance.
                 * <p>
                 * The hash code of a <code>TabularDataSupport</code> instance is the sum of the hash codes
                 * of all elements of information used in <code>equals</code> comparisons
                 * (ie: its <i>tabular type</i> and its content, where the content is defined as all the CompositeData values).
                 * <p>
                 * This ensures that <code> t1.equals(t2) </code> implies that <code> t1.hashCode()==t2.hashCode() </code>
                 * for any two <code>TabularDataSupport</code> instances <code>t1</code> and <code>t2</code>,
                 * as required by the general contract of the method
                 * {@link Object#hashCode() Object.hashCode()}.
                 * <p>
                 * However, note that another instance of a class implementing the <code>TabularData</code> interface
                 * may be equal to this <code>TabularDataSupport</code> instance as defined by {@link #equals},
                 * but may have a different hash code if it is calculated differently.
                 * @return the hash code value for this <code>TabularDataSupport</code> instance
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Returns a string representation of this <code>TabularDataSupport</code> instance.
                 * <p>
                 * The string representation consists of the name of this class (ie <code>javax.management.openmbean.TabularDataSupport</code>),
                 * the string representation of the tabular type of this instance, and the string representation of the contents
                 * (ie list the key=value mappings as returned by a call to
                 * <tt>dataMap.</tt>{@link java.util.HashMap#toString() toString()}).
                 * @return a string representation of this <code>TabularDataSupport</code> instance
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
