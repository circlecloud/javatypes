declare namespace javax {
    namespace naming {
        namespace directory {
            /**
             * This interface represents an attribute associated with a named object.
             * <p>
             * In a directory, named objects can have associated with them
             * attributes.  The <tt>Attribute</tt> interface represents an attribute associated
             * with a named object.  An attribute contains 0 or more, possibly null, values.
             * The attribute values can be ordered or unordered (see <tt>isOrdered()</tt>).
             * If the values are unordered, no duplicates are allowed.
             * If the values are ordered, duplicates are allowed.
             * <p>
             * The content and representation of an attribute and its values is defined by
             * the attribute's <em>schema</em>. The schema contains information
             * about the attribute's syntax and other properties about the attribute.
             * See <tt>getAttributeDefinition()</tt> and
             * <tt>getAttributeSyntaxDefinition()</tt>
             * for details regarding how to get schema information about an attribute
             * if the underlying directory service supports schemas.
             * <p>
             * Equality of two attributes is determined by the implementation class.
             * A simple implementation can use <tt>Object.equals()</tt> to determine equality
             * of attribute values, while a more sophisticated implementation might
             * make use of schema information to determine equality.
             * Similarly, one implementation might provide a static storage
             * structure which simply returns the values passed to its
             * constructor, while another implementation might define <tt>get()</tt> and
             * <tt>getAll()</tt>.
             * to get the values dynamically from the directory.
             * <p>
             * Note that updates to <tt>Attribute</tt> (such as adding or removing a
             * value) do not affect the corresponding representation of the attribute
             * in the directory.  Updates to the directory can only be effected
             * using operations in the <tt>DirContext</tt> interface.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @see BasicAttribute
             * @since 1.3
             */
            // @ts-ignore
            interface Attribute extends java.lang.Cloneable, java.io.Serializable {
                /**
                 * Use serialVersionUID from JNDI 1.1.1 for interoperability.
                 */
                // @ts-ignore
                readonly serialVersionUID: number /*long*/
                /**
                 * Retrieves an enumeration of the attribute's values.
                 * The behaviour of this enumeration is unspecified
                 * if the attribute's values are added, changed,
                 * or removed while the enumeration is in progress.
                 * If the attribute values are ordered, the enumeration's items
                 * will be ordered.
                 * @return A non-null enumeration of the attribute's values.
                 *  Each element of the enumeration is a possibly null Object. The object's
                 *  class is the class of the attribute value. The element is null
                 *  if the attribute's value is null.
                 *  If the attribute has zero values, an empty enumeration
                 *  is returned.
                 * @exception NamingException
                 *          If a naming exception was encountered while retrieving
                 *          the values.
                 * @see #isOrdered
                 */
                // @ts-ignore
                getAll(): javax.naming.NamingEnumeration<any>
                /**
                 * Retrieves one of this attribute's values.
                 * If the attribute has more than one value and is unordered, any one of
                 * the values is returned.
                 * If the attribute has more than one value and is ordered, the
                 * first value is returned.
                 * @return A possibly null object representing one of
                 *         the attribute's value. It is null if the attribute's value
                 *         is null.
                 * @exception NamingException
                 *          If a naming exception was encountered while retrieving
                 *          the value.
                 * @exception java.util.NoSuchElementException
                 *          If this attribute has no values.
                 */
                // @ts-ignore
                get(): any
                /**
                 * Retrieves the number of values in this attribute.
                 * @return The nonnegative number of values in this attribute.
                 */
                // @ts-ignore
                size(): number /*int*/
                /**
                 * Retrieves the id of this attribute.
                 * @return The id of this attribute. It cannot be null.
                 */
                // @ts-ignore
                getID(): string
                /**
                 * Determines whether a value is in the attribute.
                 * Equality is determined by the implementation, which may use
                 * <tt>Object.equals()</tt> or schema information to determine equality.
                 * @param attrVal The possibly null value to check. If null, check
                 *   whether the attribute has an attribute value whose value is null.
                 * @return true if attrVal is one of this attribute's values; false otherwise.
                 * @see java.lang.Object#equals
                 * @see BasicAttribute#equals
                 */
                // @ts-ignore
                contains(attrVal: java.lang.Object | any): boolean
                /**
                 * Adds a new value to the attribute.
                 * If the attribute values are unordered and
                 * <tt>attrVal</tt> is already in the attribute, this method does nothing.
                 * If the attribute values are ordered, <tt>attrVal</tt> is added to the end of
                 * the list of attribute values.
                 * <p>
                 * Equality is determined by the implementation, which may use
                 * <tt>Object.equals()</tt> or schema information to determine equality.
                 * @param attrVal The new possibly null value to add. If null, null
                 *   is added as an attribute value.
                 * @return true if a value was added; false otherwise.
                 */
                // @ts-ignore
                add(attrVal: java.lang.Object | any): boolean
                /**
                 * Removes a specified value from the attribute.
                 * If <tt>attrval</tt> is not in the attribute, this method does nothing.
                 * If the attribute values are ordered, the first occurrence of
                 * <tt>attrVal</tt> is removed and attribute values at indices greater
                 * than the removed
                 * value are shifted up towards the head of the list (and their indices
                 * decremented by one).
                 * <p>
                 * Equality is determined by the implementation, which may use
                 * <tt>Object.equals()</tt> or schema information to determine equality.
                 * @param attrval The possibly null value to remove from this attribute.
                 *  If null, remove the attribute value that is null.
                 * @return true if the value was removed; false otherwise.
                 */
                // @ts-ignore
                remove(attrval: java.lang.Object | any): boolean
                /**
                 * Removes all values from this attribute.
                 */
                // @ts-ignore
                clear(): void
                /**
                 * Retrieves the syntax definition associated with the attribute.
                 * An attribute's syntax definition specifies the format
                 * of the attribute's value(s). Note that this is different from
                 * the attribute value's representation as a Java object. Syntax
                 * definition refers to the directory's notion of <em>syntax</em>.
                 * <p>
                 * For example, even though a value might be
                 * a Java String object, its directory syntax might be "Printable String"
                 * or "Telephone Number". Or a value might be a byte array, and its
                 * directory syntax is "JPEG" or "Certificate".
                 * For example, if this attribute's syntax is "JPEG",
                 * this method would return the syntax definition for "JPEG".
                 * <p>
                 * The information that you can retrieve from a syntax definition
                 * is directory-dependent.
                 * <p>
                 * If an implementation does not support schemas, it should throw
                 * OperationNotSupportedException. If an implementation does support
                 * schemas, it should define this method to return the appropriate
                 * information.
                 * @return The attribute's syntax definition. Null if the implementation
                 *     supports schemas but this particular attribute does not have
                 *     any schema information.
                 * @exception OperationNotSupportedException If getting the schema
                 *          is not supported.
                 * @exception NamingException If a naming exception occurs while getting
                 *          the schema.
                 */
                // @ts-ignore
                getAttributeSyntaxDefinition(): javax.naming.directory.DirContext
                /**
                 * Retrieves the attribute's schema definition.
                 * An attribute's schema definition contains information
                 * such as whether the attribute is multivalued or single-valued,
                 * the matching rules to use when comparing the attribute's values.
                 * The information that you can retrieve from an attribute definition
                 * is directory-dependent.
                 * <p>
                 * If an implementation does not support schemas, it should throw
                 * OperationNotSupportedException. If an implementation does support
                 * schemas, it should define this method to return the appropriate
                 * information.
                 * @return This attribute's schema definition. Null if the implementation
                 *      supports schemas but this particular attribute does not have
                 *      any schema information.
                 * @exception OperationNotSupportedException If getting the schema
                 *          is not supported.
                 * @exception NamingException If a naming exception occurs while getting
                 *          the schema.
                 */
                // @ts-ignore
                getAttributeDefinition(): javax.naming.directory.DirContext
                /**
                 * Makes a copy of the attribute.
                 * The copy contains the same attribute values as the original attribute:
                 * the attribute values are not themselves cloned.
                 * Changes to the copy will not affect the original and vice versa.
                 * @return A non-null copy of the attribute.
                 */
                // @ts-ignore
                clone(): any
                /**
                 * Determines whether this attribute's values are ordered.
                 * If an attribute's values are ordered, duplicate values are allowed.
                 * If an attribute's values are unordered, they are presented
                 * in any order and there are no duplicate values.
                 * @return true if this attribute's values are ordered; false otherwise.
                 * @see #get(int)
                 * @see #remove(int)
                 * @see #add(int, java.lang.Object)
                 * @see #set(int, java.lang.Object)
                 */
                // @ts-ignore
                isOrdered(): boolean
                /**
                 * Retrieves the attribute value from the ordered list of attribute values.
                 * This method returns the value at the <tt>ix</tt> index of the list of
                 * attribute values.
                 * If the attribute values are unordered,
                 * this method returns the value that happens to be at that index.
                 * @param ix The index of the value in the ordered list of attribute values.
                 *  {#code 0 <= ix < size()}.
                 * @return The possibly null attribute value at index <tt>ix</tt>;
                 *    null if the attribute value is null.
                 * @exception NamingException If a naming exception was encountered while
                 *  retrieving the value.
                 * @exception IndexOutOfBoundsException If <tt>ix</tt> is outside the specified range.
                 */
                // @ts-ignore
                get(ix: number /*int*/): any
                /**
                 * Removes an attribute value from the ordered list of attribute values.
                 * This method removes the value at the <tt>ix</tt> index of the list of
                 * attribute values.
                 * If the attribute values are unordered,
                 * this method removes the value that happens to be at that index.
                 * Values located at indices greater than <tt>ix</tt> are shifted up towards
                 * the front of the list (and their indices decremented by one).
                 * @param ix The index of the value to remove.
                 *  {#code 0 <= ix < size()}.
                 * @return The possibly null attribute value at index <tt>ix</tt> that was removed;
                 *    null if the attribute value is null.
                 * @exception IndexOutOfBoundsException If <tt>ix</tt> is outside the specified range.
                 */
                // @ts-ignore
                remove(ix: number /*int*/): any
                /**
                 * Adds an attribute value to the ordered list of attribute values.
                 * This method adds <tt>attrVal</tt> to the list of attribute values at
                 * index <tt>ix</tt>.
                 * Values located at indices at or greater than <tt>ix</tt> are
                 * shifted down towards the end of the list (and their indices incremented
                 * by one).
                 * If the attribute values are unordered and already have <tt>attrVal</tt>,
                 * <tt>IllegalStateException</tt> is thrown.
                 * @param ix The index in the ordered list of attribute values to add the new value.
                 *  {#code 0 <= ix <= size()}.
                 * @param attrVal The possibly null attribute value to add; if null, null is
                 *  the value added.
                 * @exception IndexOutOfBoundsException If <tt>ix</tt> is outside the specified range.
                 * @exception IllegalStateException If the attribute values are unordered and
                 *  <tt>attrVal</tt> is one of those values.
                 */
                // @ts-ignore
                add(ix: number /*int*/, attrVal: java.lang.Object | any): void
                /**
                 * Sets an attribute value in the ordered list of attribute values.
                 * This method sets the value at the <tt>ix</tt> index of the list of
                 * attribute values to be <tt>attrVal</tt>. The old value is removed.
                 * If the attribute values are unordered,
                 * this method sets the value that happens to be at that index
                 * to <tt>attrVal</tt>, unless <tt>attrVal</tt> is already one of the values.
                 * In that case, <tt>IllegalStateException</tt> is thrown.
                 * @param ix The index of the value in the ordered list of attribute values.
                 *  {#code 0 <= ix < size()}.
                 * @param attrVal The possibly null attribute value to use.
                 *  If null, 'null' replaces the old value.
                 * @return The possibly null attribute value at index ix that was replaced.
                 *    Null if the attribute value was null.
                 * @exception IndexOutOfBoundsException If <tt>ix</tt> is outside the specified range.
                 * @exception IllegalStateException If <tt>attrVal</tt> already exists and the
                 *     attribute values are unordered.
                 */
                // @ts-ignore
                set(ix: number /*int*/, attrVal: java.lang.Object | any): any
            }
        }
    }
}
