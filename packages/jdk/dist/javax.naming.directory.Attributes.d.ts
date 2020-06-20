declare namespace javax {
    namespace naming {
        namespace directory {
            /**
             * This interface represents a collection of attributes.
             * <p>
             * In a directory, named objects can have associated with them
             * attributes.  The Attributes interface represents a collection of attributes.
             * For example, you can request from the directory the attributes
             * associated with an object.  Those attributes are returned in
             * an object that implements the Attributes interface.
             * <p>
             * Attributes in an object that implements the  Attributes interface are
             * unordered. The object can have zero or more attributes.
             * Attributes is either case-sensitive or case-insensitive (case-ignore).
             * This property is determined at the time the Attributes object is
             * created. (see BasicAttributes constructor for example).
             * In a case-insensitive Attributes, the case of its attribute identifiers
             * is ignored when searching for an attribute, or adding attributes.
             * In a case-sensitive Attributes, the case is significant.
             * <p>
             * Note that updates to Attributes (such as adding or removing an attribute)
             * do not affect the corresponding representation in the directory.
             * Updates to the directory can only be effected
             * using operations in the DirContext interface.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @see DirContext#getAttributes
             * @see DirContext#modifyAttributes
             * @see DirContext#bind
             * @see DirContext#rebind
             * @see DirContext#createSubcontext
             * @see DirContext#search
             * @see BasicAttributes
             * @since 1.3
             */
            // @ts-ignore
            interface Attributes extends java.lang.Cloneable, java.io.Serializable {
                /**
                 * Determines whether the attribute set ignores the case of
                 * attribute identifiers when retrieving or adding attributes.
                 * @return true if case is ignored; false otherwise.
                 */
                // @ts-ignore
                isCaseIgnored(): boolean
                /**
                 * Retrieves the number of attributes in the attribute set.
                 * @return The nonnegative number of attributes in this attribute set.
                 */
                // @ts-ignore
                size(): int
                /**
                 * Retrieves the attribute with the given attribute id from the
                 * attribute set.
                 * @param attrID The non-null id of the attribute to retrieve.
                 *            If this attribute set ignores the character
                 *            case of its attribute ids, the case of attrID
                 *            is ignored.
                 * @return The attribute identified by attrID; null if not found.
                 * @see #put
                 * @see #remove
                 */
                // @ts-ignore
                get(attrID: string): javax.naming.directory.Attribute
                /**
                 * Retrieves an enumeration of the attributes in the attribute set.
                 * The effects of updates to this attribute set on this enumeration
                 * are undefined.
                 * @return A non-null enumeration of the attributes in this attribute set.
                 *          Each element of the enumeration is of class <tt>Attribute</tt>.
                 *          If attribute set has zero attributes, an empty enumeration
                 *          is returned.
                 */
                // @ts-ignore
                getAll(): javax.naming.NamingEnumeration<? extends javax.naming.directory.Attribute>
                /**
                 * Retrieves an enumeration of the ids of the attributes in the
                 * attribute set.
                 * The effects of updates to this attribute set on this enumeration
                 * are undefined.
                 * @return A non-null enumeration of the attributes' ids in
                 *          this attribute set. Each element of the enumeration is
                 *          of class String.
                 *          If attribute set has zero attributes, an empty enumeration
                 *          is returned.
                 */
                // @ts-ignore
                getIDs(): javax.naming.NamingEnumeration<java.lang.String>
                /**
                 * Adds a new attribute to the attribute set.
                 * @param attrID   non-null The id of the attribute to add.
                 *            If the attribute set ignores the character
                 *            case of its attribute ids, the case of attrID
                 *            is ignored.
                 * @param val      The possibly null value of the attribute to add.
                 *                  If null, the attribute does not have any values.
                 * @return The Attribute with attrID that was previous in this attribute set;
                 *          null if no such attribute existed.
                 * @see #remove
                 */
                // @ts-ignore
                put(attrID: string, val: any): javax.naming.directory.Attribute
                /**
                 * Adds a new attribute to the attribute set.
                 * @param attr     The non-null attribute to add.
                 *                  If the attribute set ignores the character
                 *                  case of its attribute ids, the case of
                 *                  attr's identifier is ignored.
                 * @return The Attribute with the same ID as attr that was previous
                 *          in this attribute set;
                 *          null if no such attribute existed.
                 * @see #remove
                 */
                // @ts-ignore
                put(attr: javax.naming.directory.Attribute): javax.naming.directory.Attribute
                /**
                 * Removes the attribute with the attribute id 'attrID' from
                 * the attribute set. If the attribute does not exist, ignore.
                 * @param attrID   The non-null id of the attribute to remove.
                 *                  If the attribute set ignores the character
                 *                  case of its attribute ids, the case of
                 *                  attrID is ignored.
                 * @return The Attribute with the same ID as attrID that was previous
                 *          in the attribute set;
                 *          null if no such attribute existed.
                 */
                // @ts-ignore
                remove(attrID: string): javax.naming.directory.Attribute
                /**
                 * Makes a copy of the attribute set.
                 * The new set contains the same attributes as the original set:
                 * the attributes are not themselves cloned.
                 * Changes to the copy will not affect the original and vice versa.
                 * @return A non-null copy of this attribute set.
                 */
                // @ts-ignore
                clone(): java.lang.Object
            }
        }
    }
}
