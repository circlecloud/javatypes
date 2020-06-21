declare namespace javax {
    namespace sql {
        namespace rowset {
            namespace serial {
                /**
                 * A serialized version of an <code>Array</code>
                 * object, which is the mapping in the Java programming language of an SQL
                 * <code>ARRAY</code> value.
                 * <P>
                 * The <code>SerialArray</code> class provides a constructor for creating
                 * a <code>SerialArray</code> instance from an <code>Array</code> object,
                 * methods for getting the base type and the SQL name for the base type, and
                 * methods for copying all or part of a <code>SerialArray</code> object.
                 * <P>
                 * Note: In order for this class to function correctly, a connection to the
                 * data source
                 * must be available in order for the SQL <code>Array</code> object to be
                 * materialized (have all of its elements brought to the client server)
                 * if necessary. At this time, logical pointers to the data in the data source,
                 * such as locators, are not currently supported.
                 * <h3> Thread safety </h3>
                 * A SerialArray is not safe for use by multiple concurrent threads.  If a
                 * SerialArray is to be used by more than one thread then access to the
                 * SerialArray should be controlled by appropriate synchronization.
                 */
                // @ts-ignore
                class SerialArray extends java.lang.Object implements java.sql.Array, java.io.Serializable, java.lang.Cloneable {
                    /**
                     * Constructs a new <code>SerialArray</code> object from the given
                     * <code>Array</code> object, using the given type map for the custom
                     * mapping of each element when the elements are SQL UDTs.
                     * <P>
                     * This method does custom mapping if the array elements are a UDT
                     * and the given type map has an entry for that UDT.
                     * Custom mapping is recursive,
                     * meaning that if, for instance, an element of an SQL structured type
                     * is an SQL structured type that itself has an element that is an SQL
                     * structured type, each structured type that has a custom mapping will be
                     * mapped according to the given type map.
                     * <P>
                     * The new <code>SerialArray</code>
                     * object contains the same elements as the <code>Array</code> object
                     * from which it is built, except when the base type is the SQL type
                     * <code>STRUCT</code>, <code>ARRAY</code>, <code>BLOB</code>,
                     * <code>CLOB</code>, <code>DATALINK</code> or <code>JAVA_OBJECT</code>.
                     * In this case, each element in the new
                     * <code>SerialArray</code> object is the appropriate serialized form,
                     * that is, a <code>SerialStruct</code>, <code>SerialArray</code>,
                     * <code>SerialBlob</code>, <code>SerialClob</code>,
                     * <code>SerialDatalink</code>, or <code>SerialJavaObject</code> object.
                     * <P>
                     * Note: (1) The <code>Array</code> object from which a <code>SerialArray</code>
                     * object is created must have materialized the SQL <code>ARRAY</code> value's
                     * data on the client before it is passed to the constructor.  Otherwise,
                     * the new <code>SerialArray</code> object will contain no data.
                     * <p>
                     * Note: (2) If the <code>Array</code> contains <code>java.sql.Types.JAVA_OBJECT</code>
                     * types, the <code>SerialJavaObject</code> constructor is called where checks
                     * are made to ensure this object is serializable.
                     * <p>
                     * Note: (3) The <code>Array</code> object supplied to this constructor cannot
                     * return <code>null</code> for any <code>Array.getArray()</code> methods.
                     * <code>SerialArray</code> cannot serialize null array values.
                     * @param array the <code>Array</code> object to be serialized
                     * @param map a <code>java.util.Map</code> object in which
                     *         each entry consists of 1) a <code>String</code> object
                     *         giving the fully qualified name of a UDT (an SQL structured type or
                     *         distinct type) and 2) the
                     *         <code>Class</code> object for the <code>SQLData</code> implementation
                     *         that defines how the UDT is to be mapped. The <i>map</i>
                     *         parameter does not have any effect for <code>Blob</code>,
                     *         <code>Clob</code>, <code>DATALINK</code>, or
                     *         <code>JAVA_OBJECT</code> types.
                     * @throws SerialException if an error occurs serializing the
                     *         <code>Array</code> object
                     * @throws SQLException if a database access error occurs or if the
                     *         <i>array</i> or the <i>map</i> values are <code>null</code>
                     */
                    // @ts-ignore
                    constructor(array: java.sql.Array, map: java.util.Map<java.lang.String | string, java.lang.Class<any>>)
                    /**
                     * Constructs a new <code>SerialArray</code> object from the given
                     * <code>Array</code> object.
                     * <P>
                     * This constructor does not do custom mapping.  If the base type of the array
                     * is an SQL structured type and custom mapping is desired, the constructor
                     * <code>SerialArray(Array array, Map map)</code> should be used.
                     * <P>
                     * The new <code>SerialArray</code>
                     * object contains the same elements as the <code>Array</code> object
                     * from which it is built, except when the base type is the SQL type
                     * <code>BLOB</code>,
                     * <code>CLOB</code>, <code>DATALINK</code> or <code>JAVA_OBJECT</code>.
                     * In this case, each element in the new
                     * <code>SerialArray</code> object is the appropriate serialized form,
                     * that is, a <code>SerialBlob</code>, <code>SerialClob</code>,
                     * <code>SerialDatalink</code>, or <code>SerialJavaObject</code> object.
                     * <P>
                     * Note: (1) The <code>Array</code> object from which a <code>SerialArray</code>
                     * object is created must have materialized the SQL <code>ARRAY</code> value's
                     * data on the client before it is passed to the constructor.  Otherwise,
                     * the new <code>SerialArray</code> object will contain no data.
                     * <p>
                     * Note: (2) The <code>Array</code> object supplied to this constructor cannot
                     * return <code>null</code> for any <code>Array.getArray()</code> methods.
                     * <code>SerialArray</code> cannot serialize <code>null</code> array values.
                     * @param array the <code>Array</code> object to be serialized
                     * @throws SerialException if an error occurs serializing the
                     *      <code>Array</code> object
                     * @throws SQLException if a database access error occurs or the
                     *      <i>array</i> parameter is <code>null</code>.
                     */
                    // @ts-ignore
                    constructor(array: java.sql.Array)
                    /**
                     * This method frees the {@code SeriableArray} object and releases the
                     * resources that it holds. The object is invalid once the {@code free}
                     * method is called. <p> If {@code free} is called multiple times, the
                     * subsequent calls to {@code free} are treated as a no-op. </P>
                     * @throws SQLException if an error occurs releasing the SerialArray's resources
                     * @since 1.6
                     */
                    // @ts-ignore
                    public free(): void
                    /**
                     * Returns a new array that is a copy of this <code>SerialArray</code>
                     * object.
                     * @return a copy of this <code>SerialArray</code> object as an
                     *          <code>Object</code> in the Java programming language
                     * @throws SerialException if an error occurs;
                     *  if {#code free} had previously been called on this object
                     */
                    // @ts-ignore
                    public getArray(): any
                    /**
                     * Returns a new array that is a copy of this <code>SerialArray</code>
                     * object, using the given type map for the custom
                     * mapping of each element when the elements are SQL UDTs.
                     * <P>
                     * This method does custom mapping if the array elements are a UDT
                     * and the given type map has an entry for that UDT.
                     * Custom mapping is recursive,
                     * meaning that if, for instance, an element of an SQL structured type
                     * is an SQL structured type that itself has an element that is an SQL
                     * structured type, each structured type that has a custom mapping will be
                     * mapped according to the given type map.
                     * @param map a <code>java.util.Map</code> object in which
                     *         each entry consists of 1) a <code>String</code> object
                     *         giving the fully qualified name of a UDT and 2) the
                     *         <code>Class</code> object for the <code>SQLData</code> implementation
                     *         that defines how the UDT is to be mapped
                     * @return a copy of this <code>SerialArray</code> object as an
                     *          <code>Object</code> in the Java programming language
                     * @throws SerialException if an error occurs;
                     *  if {#code free} had previously been called on this object
                     */
                    // @ts-ignore
                    public getArray(map: java.util.Map<java.lang.String | string, java.lang.Class<any>>): any
                    /**
                     * Returns a new array that is a copy of a slice
                     * of this <code>SerialArray</code> object, starting with the
                     * element at the given index and containing the given number
                     * of consecutive elements.
                     * @param index the index into this <code>SerialArray</code> object
                     *               of the first element to be copied;
                     *               the index of the first element is <code>0</code>
                     * @param count the number of consecutive elements to be copied, starting
                     *               at the given index
                     * @return a copy of the designated elements in this <code>SerialArray</code>
                     *          object as an <code>Object</code> in the Java programming language
                     * @throws SerialException if an error occurs;
                     *  if {#code free} had previously been called on this object
                     */
                    // @ts-ignore
                    public getArray(index: number /*long*/, count: number /*int*/): any
                    /**
                     * Returns a new array that is a copy of a slice
                     * of this <code>SerialArray</code> object, starting with the
                     * element at the given index and containing the given number
                     * of consecutive elements.
                     * <P>
                     * This method does custom mapping if the array elements are a UDT
                     * and the given type map has an entry for that UDT.
                     * Custom mapping is recursive,
                     * meaning that if, for instance, an element of an SQL structured type
                     * is an SQL structured type that itself has an element that is an SQL
                     * structured type, each structured type that has a custom mapping will be
                     * mapped according to the given type map.
                     * @param index the index into this <code>SerialArray</code> object
                     *               of the first element to be copied; the index of the
                     *               first element in the array is <code>0</code>
                     * @param count the number of consecutive elements to be copied, starting
                     *               at the given index
                     * @param map a <code>java.util.Map</code> object in which
                     *         each entry consists of 1) a <code>String</code> object
                     *         giving the fully qualified name of a UDT and 2) the
                     *         <code>Class</code> object for the <code>SQLData</code> implementation
                     *         that defines how the UDT is to be mapped
                     * @return a copy of the designated elements in this <code>SerialArray</code>
                     *          object as an <code>Object</code> in the Java programming language
                     * @throws SerialException if an error occurs;
                     *  if {#code free} had previously been called on this object
                     */
                    // @ts-ignore
                    public getArray(index: number /*long*/, count: number /*int*/, map: java.util.Map<java.lang.String | string, java.lang.Class<any>>): any
                    /**
                     * Retrieves the SQL type of the elements in this <code>SerialArray</code>
                     * object.  The <code>int</code> returned is one of the constants in the class
                     * <code>java.sql.Types</code>.
                     * @return one of the constants in <code>java.sql.Types</code>, indicating
                     *          the SQL type of the elements in this <code>SerialArray</code> object
                     * @throws SerialException if an error occurs;
                     *  if {#code free} had previously been called on this object
                     */
                    // @ts-ignore
                    public getBaseType(): number /*int*/
                    /**
                     * Retrieves the DBMS-specific type name for the elements in this
                     * <code>SerialArray</code> object.
                     * @return the SQL type name used by the DBMS for the base type of this
                     *          <code>SerialArray</code> object
                     * @throws SerialException if an error occurs;
                     *  if {#code free} had previously been called on this object
                     */
                    // @ts-ignore
                    public getBaseTypeName(): string
                    /**
                     * Retrieves a <code>ResultSet</code> object holding the elements of
                     * the subarray that starts at
                     * index <i>index</i> and contains up to <i>count</i> successive elements.
                     * This method uses the connection's type map to map the elements of
                     * the array if the map contains
                     * an entry for the base type. Otherwise, the standard mapping is used.
                     * @param index the index into this <code>SerialArray</code> object
                     *          of the first element to be copied; the index of the
                     *          first element in the array is <code>0</code>
                     * @param count the number of consecutive elements to be copied, starting
                     *          at the given index
                     * @return a <code>ResultSet</code> object containing the designated
                     *          elements in this <code>SerialArray</code> object, with a
                     *          separate row for each element
                     * @throws SerialException if called with the cause set to
                     *          {#code UnsupportedOperationException}
                     */
                    // @ts-ignore
                    public getResultSet(index: number /*long*/, count: number /*int*/): java.sql.ResultSet
                    /**
                     * Retrieves a <code>ResultSet</code> object that contains all of
                     * the elements of the SQL <code>ARRAY</code>
                     * value represented by this <code>SerialArray</code> object. This method uses
                     * the specified map for type map customizations unless the base type of the
                     * array does not match a user-defined type (UDT) in <i>map</i>, in
                     * which case it uses the
                     * standard mapping. This version of the method <code>getResultSet</code>
                     * uses either the given type map or the standard mapping; it never uses the
                     * type map associated with the connection.
                     * @param map a <code>java.util.Map</code> object in which
                     *         each entry consists of 1) a <code>String</code> object
                     *         giving the fully qualified name of a UDT and 2) the
                     *         <code>Class</code> object for the <code>SQLData</code> implementation
                     *         that defines how the UDT is to be mapped
                     * @return a <code>ResultSet</code> object containing all of the
                     *          elements in this <code>SerialArray</code> object, with a
                     *          separate row for each element
                     * @throws SerialException if called with the cause set to
                     *          {#code UnsupportedOperationException}
                     */
                    // @ts-ignore
                    public getResultSet(map: java.util.Map<java.lang.String | string, java.lang.Class<any>>): java.sql.ResultSet
                    /**
                     * Retrieves a <code>ResultSet</code> object that contains all of
                     * the elements in the <code>ARRAY</code> value that this
                     * <code>SerialArray</code> object represents.
                     * If appropriate, the elements of the array are mapped using the connection's
                     * type map; otherwise, the standard mapping is used.
                     * @return a <code>ResultSet</code> object containing all of the
                     *          elements in this <code>SerialArray</code> object, with a
                     *          separate row for each element
                     * @throws SerialException if called with the cause set to
                     *          {#code UnsupportedOperationException}
                     */
                    // @ts-ignore
                    public getResultSet(): java.sql.ResultSet
                    /**
                     * Retrieves a result set holding the elements of the subarray that starts at
                     * Retrieves a <code>ResultSet</code> object that contains a subarray of the
                     * elements in this <code>SerialArray</code> object, starting at
                     * index <i>index</i> and containing up to <i>count</i> successive
                     * elements. This method uses
                     * the specified map for type map customizations unless the base type of the
                     * array does not match a user-defined type (UDT) in <i>map</i>, in
                     * which case it uses the
                     * standard mapping. This version of the method <code>getResultSet</code> uses
                     * either the given type map or the standard mapping; it never uses the type
                     * map associated with the connection.
                     * @param index the index into this <code>SerialArray</code> object
                     *               of the first element to be copied; the index of the
                     *               first element in the array is <code>0</code>
                     * @param count the number of consecutive elements to be copied, starting
                     *               at the given index
                     * @param map a <code>java.util.Map</code> object in which
                     *         each entry consists of 1) a <code>String</code> object
                     *         giving the fully qualified name of a UDT and 2) the
                     *         <code>Class</code> object for the <code>SQLData</code> implementation
                     *         that defines how the UDT is to be mapped
                     * @return a <code>ResultSet</code> object containing the designated
                     *          elements in this <code>SerialArray</code> object, with a
                     *          separate row for each element
                     * @throws SerialException if called with the cause set to
                     *          {#code UnsupportedOperationException}
                     */
                    // @ts-ignore
                    public getResultSet(index: number /*long*/, count: number /*int*/, map: java.util.Map<java.lang.String | string, java.lang.Class<any>>): java.sql.ResultSet
                    /**
                     * Compares this SerialArray to the specified object.  The result is {@code
                     * true} if and only if the argument is not {@code null} and is a {@code
                     * SerialArray} object whose elements are identical to this object's elements
                     * @param obj The object to compare this {#code SerialArray} against
                     * @return {#code true} if the given object represents a {@code SerialArray}
                     *           equivalent to this SerialArray, {@code false} otherwise
                     */
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    /**
                     * Returns a hash code for this SerialArray. The hash code for a
                     * {@code SerialArray} object is computed using the hash codes
                     * of the elements of the  {@code SerialArray} object
                     * @return a hash code value for this object.
                     */
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    /**
                     * Returns a clone of this {@code SerialArray}. The copy will contain a
                     * reference to a clone of the underlying objects array, not a reference
                     * to the original underlying object array of this {@code SerialArray} object.
                     * @return a clone of this SerialArray
                     */
                    // @ts-ignore
                    public clone(): any
                }
            }
        }
    }
}
