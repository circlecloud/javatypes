declare namespace javax {
    namespace management {
        namespace openmbean {
            /**
             * The <code>TabularType</code> class is the <i> open type</i> class
             * whose instances describe the types of {@link TabularData TabularData} values.
             * @since 1.5
             */
            // @ts-ignore
            class TabularType extends javax.management.openmbean.OpenType<javax.management.openmbean.TabularData> {
                /**
                 * Constructs a <code>TabularType</code> instance, checking for the validity of the given parameters.
                 * The validity constraints are described below for each parameter.
                 * <p>
                 * The Java class name of tabular data values this tabular type represents
                 * (ie the class name returned by the {@link OpenType#getClassName() getClassName} method)
                 * is set to the string value returned by <code>TabularData.class.getName()</code>.
                 * <p>
                 * @param typeName  The name given to the tabular type this instance represents; cannot be a null or empty string.
                 *  <br>&nbsp;
                 * @param description  The human readable description of the tabular type this instance represents;
                 *                       cannot be a null or empty string.
                 *  <br>&nbsp;
                 * @param rowType  The type of the row elements of tabular data values described by this tabular type instance;
                 *                   cannot be null.
                 *  <br>&nbsp;
                 * @param indexNames  The names of the items the values of which are used to uniquely index each row element in the
                 *                      tabular data values described by this tabular type instance;
                 *                      cannot be null or empty. Each element should be an item name defined in <var>rowType</var>
                 *                      (no null or empty string allowed).
                 *                      It is important to note that the <b>order</b> of the item names in <var>indexNames</var>
                 *                      is used by the methods {#link TabularData#get(java.lang.Object[]) get} and
                 *                      {@link TabularData#remove(java.lang.Object[]) remove} of class
                 *                      <code>TabularData</code> to match their array of values parameter to items.
                 *  <br>&nbsp;
                 * @throws IllegalArgumentException  if <var>rowType</var> is null,
                 *                                    or <var>indexNames</var> is a null or empty array,
                 *                                    or an element in <var>indexNames</var> is a null or empty string,
                 *                                    or <var>typeName</var> or <var>description</var> is a null or empty string.
                 *  <br>&nbsp;
                 * @throws OpenDataException  if an element's value of <var>indexNames</var>
                 *                             is not an item name defined in <var>rowType</var>.
                 */
                // @ts-ignore
                constructor(typeName: string, description: string, rowType: javax.management.openmbean.CompositeType, indexNames: string[])
                /**
                 * Returns the type of the row elements of tabular data values
                 * described by this <code>TabularType</code> instance.
                 * @return the type of each row.
                 */
                // @ts-ignore
                getRowType(): javax.management.openmbean.CompositeType
                /**
                 * <p>Returns, in the same order as was given to this instance's
                 * constructor, an unmodifiable List of the names of the items the
                 * values of which are used to uniquely index each row element of
                 * tabular data values described by this <code>TabularType</code>
                 * instance.</p>
                 * @return a List of String representing the names of the index
                 *  items.
                 */
                // @ts-ignore
                getIndexNames(): java.util.List<java.lang.String>
                /**
                 * Tests whether <var>obj</var> is a value which could be
                 * described by this <code>TabularType</code> instance.
                 * <p>If <var>obj</var> is null or is not an instance of
                 * <code>javax.management.openmbean.TabularData</code>,
                 * <code>isValue</code> returns <code>false</code>.</p>
                 * <p>If <var>obj</var> is an instance of
                 * <code>javax.management.openmbean.TabularData</code>, say {@code
                 * td}, the result is true if this {@code TabularType} is
                 * <em>assignable from</em> {@link TabularData#getTabularType()
                 * td.getTabularType()}, as defined in {@link
                 * CompositeType#isValue CompositeType.isValue}.</p>
                 * @param obj the value whose open type is to be tested for
                 *  compatibility with this <code>TabularType</code> instance.
                 * @return <code>true</code> if <var>obj</var> is a value for this
                 *  tabular type, <code>false</code> otherwise.
                 */
                // @ts-ignore
                isValue(obj: any): boolean
                /**
                 * Compares the specified <code>obj</code> parameter with this <code>TabularType</code> instance for equality.
                 * <p>
                 * Two <code>TabularType</code> instances are equal if and only if all of the following statements are true:
                 * <ul>
                 * <li>their type names are equal</li>
                 * <li>their row types are equal</li>
                 * <li>they use the same index names, in the same order</li>
                 * </ul>
                 * <br>&nbsp;
                 * @param obj  the object to be compared for equality with this <code>TabularType</code> instance;
                 *               if <var>obj</var> is <code>null</code>, <code>equals</code> returns <code>false</code>.
                 * @return <code>true</code> if the specified object is equal to this <code>TabularType</code> instance.
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Returns the hash code value for this <code>TabularType</code> instance.
                 * <p>
                 * The hash code of a <code>TabularType</code> instance is the sum of the hash codes
                 * of all elements of information used in <code>equals</code> comparisons
                 * (ie: name, row type, index names).
                 * This ensures that <code> t1.equals(t2) </code> implies that <code> t1.hashCode()==t2.hashCode() </code>
                 * for any two <code>TabularType</code> instances <code>t1</code> and <code>t2</code>,
                 * as required by the general contract of the method
                 * {@link Object#hashCode() Object.hashCode()}.
                 * <p>
                 * As <code>TabularType</code> instances are immutable, the hash code for this instance is calculated once,
                 * on the first call to <code>hashCode</code>, and then the same value is returned for subsequent calls.
                 * @return the hash code value for this <code>TabularType</code> instance
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Returns a string representation of this <code>TabularType</code> instance.
                 * <p>
                 * The string representation consists of the name of this class (ie <code>javax.management.openmbean.TabularType</code>),
                 * the type name for this instance, the row type string representation of this instance,
                 * and the index names of this instance.
                 * <p>
                 * As <code>TabularType</code> instances are immutable, the string representation for this instance is calculated once,
                 * on the first call to <code>toString</code>, and then the same value is returned for subsequent calls.
                 * @return a string representation of this <code>TabularType</code> instance
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
