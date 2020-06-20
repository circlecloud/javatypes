declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * A straightforward implementation of MutableAttributeSet using a
             * hash table.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Tim Prinzing
             */
            // @ts-ignore
            class SimpleAttributeSet extends java.lang.Object implements javax.swing.text.MutableAttributeSet, java.io.Serializable, java.lang.Cloneable {
                /**
                 * Creates a new attribute set.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a new attribute set based on a supplied set of attributes.
                 * @param source the set of attributes
                 */
                // @ts-ignore
                constructor(source: javax.swing.text.AttributeSet)
                /**
                 * An empty attribute set.
                 */
                // @ts-ignore
                readonly EMPTY: javax.swing.text.AttributeSet
                /**
                 * Checks whether the set of attributes is empty.
                 * @return true if the set is empty else false
                 */
                // @ts-ignore
                isEmpty(): boolean
                /**
                 * Gets a count of the number of attributes.
                 * @return the count
                 */
                // @ts-ignore
                getAttributeCount(): int
                /**
                 * Tells whether a given attribute is defined.
                 * @param attrName the attribute name
                 * @return true if the attribute is defined
                 */
                // @ts-ignore
                isDefined(attrName: any): boolean
                /**
                 * Compares two attribute sets.
                 * @param attr the second attribute set
                 * @return true if the sets are equal, false otherwise
                 */
                // @ts-ignore
                isEqual(attr: javax.swing.text.AttributeSet): boolean
                /**
                 * Makes a copy of the attributes.
                 * @return the copy
                 */
                // @ts-ignore
                copyAttributes(): javax.swing.text.AttributeSet
                /**
                 * Gets the names of the attributes in the set.
                 * @return the names as an <code>Enumeration</code>
                 */
                // @ts-ignore
                getAttributeNames(): java.util.Enumeration<?>
                /**
                 * Gets the value of an attribute.
                 * @param name the attribute name
                 * @return the value
                 */
                // @ts-ignore
                getAttribute(name: any): java.lang.Object
                /**
                 * Checks whether the attribute list contains a
                 * specified attribute name/value pair.
                 * @param name the name
                 * @param value the value
                 * @return true if the name/value pair is in the list
                 */
                // @ts-ignore
                containsAttribute(name: any, value: any): boolean
                /**
                 * Checks whether the attribute list contains all the
                 * specified name/value pairs.
                 * @param attributes the attribute list
                 * @return true if the list contains all the name/value pairs
                 */
                // @ts-ignore
                containsAttributes(attributes: javax.swing.text.AttributeSet): boolean
                /**
                 * Adds an attribute to the list.
                 * @param name the attribute name
                 * @param value the attribute value
                 */
                // @ts-ignore
                addAttribute(name: any, value: any): void
                /**
                 * Adds a set of attributes to the list.
                 * @param attributes the set of attributes to add
                 */
                // @ts-ignore
                addAttributes(attributes: javax.swing.text.AttributeSet): void
                /**
                 * Removes an attribute from the list.
                 * @param name the attribute name
                 */
                // @ts-ignore
                removeAttribute(name: any): void
                /**
                 * Removes a set of attributes from the list.
                 * @param names the set of names to remove
                 */
                // @ts-ignore
                removeAttributes(names: java.util.Enumeration<any>): void
                /**
                 * Removes a set of attributes from the list.
                 * @param attributes the set of attributes to remove
                 */
                // @ts-ignore
                removeAttributes(attributes: javax.swing.text.AttributeSet): void
                /**
                 * Gets the resolving parent.  This is the set
                 * of attributes to resolve through if an attribute
                 * isn't defined locally.  This is null if there
                 * are no other sets of attributes to resolve
                 * through.
                 * @return the parent
                 */
                // @ts-ignore
                getResolveParent(): javax.swing.text.AttributeSet
                /**
                 * Sets the resolving parent.
                 * @param parent the parent
                 */
                // @ts-ignore
                setResolveParent(parent: javax.swing.text.AttributeSet): void
                /**
                 * Clones a set of attributes.
                 * @return the new set of attributes
                 */
                // @ts-ignore
                clone(): java.lang.Object
                /**
                 * Returns a hashcode for this set of attributes.
                 * @return a hashcode value for this set of attributes.
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Compares this object to the specified object.
                 * The result is <code>true</code> if the object is an equivalent
                 * set of attributes.
                 * @param obj   the object to compare this attribute set with
                 * @return <code>true</code> if the objects are equal;
                 *             <code>false</code> otherwise
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Converts the attribute set to a String.
                 * @return the string
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
