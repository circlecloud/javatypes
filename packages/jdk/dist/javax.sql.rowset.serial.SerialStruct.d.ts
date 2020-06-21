declare namespace javax {
    namespace sql {
        namespace rowset {
            namespace serial {
                /**
                 * A serialized mapping in the Java programming language of an SQL
                 * structured type. Each attribute that is not already serialized
                 * is mapped to a serialized form, and if an attribute is itself
                 * a structured type, each of its attributes that is not already
                 * serialized is mapped to a serialized form.
                 * <P>
                 * In addition, the structured type is custom mapped to a class in the
                 * Java programming language if there is such a mapping, as are
                 * its attributes, if appropriate.
                 * <P>
                 * The <code>SerialStruct</code> class provides a constructor for creating
                 * an instance from a <code>Struct</code> object, a method for retrieving
                 * the SQL type name of the SQL structured type in the database, and methods
                 * for retrieving its attribute values.
                 * <h3> Thread safety </h3>
                 * A SerialStruct is not safe for use by multiple concurrent threads.  If a
                 * SerialStruct is to be used by more than one thread then access to the
                 * SerialStruct should be controlled by appropriate synchronization.
                 */
                // @ts-ignore
                class SerialStruct extends java.lang.Object implements java.sql.Struct, java.io.Serializable, java.lang.Cloneable {
                    /**
                     * Constructs a <code>SerialStruct</code> object from the given
                     * <code>Struct</code> object, using the given <code>java.util.Map</code>
                     * object for custom mapping the SQL structured type or any of its
                     * attributes that are SQL structured types.
                     * @param in an instance of {#code Struct}
                     * @param map a <code>java.util.Map</code> object in which
                     *         each entry consists of 1) a <code>String</code> object
                     *         giving the fully qualified name of a UDT and 2) the
                     *         <code>Class</code> object for the <code>SQLData</code> implementation
                     *         that defines how the UDT is to be mapped
                     * @throws SerialException if an error occurs
                     * @see java.sql.Struct
                     */
                    // @ts-ignore
                    constructor(input: java.sql.Struct, map: java.util.Map<java.lang.String | string, java.lang.Class<any>>)
                    /**
                     * Constructs a <code>SerialStruct</code> object from the
                     * given <code>SQLData</code> object, using the given type
                     * map to custom map it to a class in the Java programming
                     * language.  The type map gives the SQL type and the class
                     * to which it is mapped.  The <code>SQLData</code> object
                     * defines the class to which the SQL type will be mapped.
                     * @param in an instance of the <code>SQLData</code> class
                     *            that defines the mapping of the SQL structured
                     *            type to one or more objects in the Java programming language
                     * @param map a <code>java.util.Map</code> object in which
                     *         each entry consists of 1) a <code>String</code> object
                     *         giving the fully qualified name of a UDT and 2) the
                     *         <code>Class</code> object for the <code>SQLData</code> implementation
                     *         that defines how the UDT is to be mapped
                     * @throws SerialException if an error occurs
                     */
                    // @ts-ignore
                    constructor(input: java.sql.SQLData, map: java.util.Map<java.lang.String | string, java.lang.Class<any>>)
                    /**
                     * Retrieves the SQL type name for this <code>SerialStruct</code>
                     * object. This is the name used in the SQL definition of the
                     * structured type
                     * @return a <code>String</code> object representing the SQL
                     *          type name for the SQL structured type that this
                     *          <code>SerialStruct</code> object represents
                     * @throws SerialException if an error occurs
                     */
                    // @ts-ignore
                    public getSQLTypeName(): string
                    /**
                     * Retrieves an array of <code>Object</code> values containing the
                     * attributes of the SQL structured type that this
                     * <code>SerialStruct</code> object represents.
                     * @return an array of <code>Object</code> values, with each
                     *          element being an attribute of the SQL structured type
                     *          that this <code>SerialStruct</code> object represents
                     * @throws SerialException if an error occurs
                     */
                    // @ts-ignore
                    public getAttributes(): any[]
                    /**
                     * Retrieves the attributes for the SQL structured type that
                     * this <code>SerialStruct</code> represents as an array of
                     * <code>Object</code> values, using the given type map for
                     * custom mapping if appropriate.
                     * @param map a <code>java.util.Map</code> object in which
                     *         each entry consists of 1) a <code>String</code> object
                     *         giving the fully qualified name of a UDT and 2) the
                     *         <code>Class</code> object for the <code>SQLData</code> implementation
                     *         that defines how the UDT is to be mapped
                     * @return an array of <code>Object</code> values, with each
                     *          element being an attribute of the SQL structured
                     *          type that this <code>SerialStruct</code> object
                     *          represents
                     * @throws SerialException if an error occurs
                     */
                    // @ts-ignore
                    public getAttributes(map: java.util.Map<java.lang.String | string, java.lang.Class<any>>): any[]
                    /**
                     * Compares this SerialStruct to the specified object.  The result is
                     * {@code true} if and only if the argument is not {@code null} and is a
                     * {@code SerialStruct} object whose attributes are identical to this
                     * object's attributes
                     * @param obj The object to compare this {#code SerialStruct} against
                     * @return {#code true} if the given object represents a {@code SerialStruct}
                     *           equivalent to this SerialStruct, {@code false} otherwise
                     */
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    /**
                     * Returns a hash code for this {@code SerialStruct}. The hash code for a
                     * {@code SerialStruct} object is computed using the hash codes
                     * of the attributes of the {@code SerialStruct} object and its
                     * {@code SQLTypeName}
                     * @return a hash code value for this object.
                     */
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    /**
                     * Returns a clone of this {@code SerialStruct}. The copy will contain a
                     * reference to a clone of the underlying attribs array, not a reference
                     * to the original underlying attribs array of this {@code SerialStruct} object.
                     * @return a clone of this SerialStruct
                     */
                    // @ts-ignore
                    public clone(): any
                }
            }
        }
    }
}
