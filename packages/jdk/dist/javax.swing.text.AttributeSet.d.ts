declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * A collection of unique attributes.  This is a read-only,
             * immutable interface.  An attribute is basically a key and
             * a value assigned to the key.  The collection may represent
             * something like a style run, a logical style, etc.  These
             * are generally used to describe features that will contribute
             * to some graphical representation such as a font.  The
             * set of possible keys is unbounded and can be anything.
             * Typically View implementations will respond to attribute
             * definitions and render something to represent the attributes.
             * <p>
             * Attributes can potentially resolve in a hierarchy.  If a
             * key doesn't resolve locally, and a resolving parent
             * exists, the key will be resolved through the parent.
             * @author Timothy Prinzing
             * @see MutableAttributeSet
             */
            // @ts-ignore
            interface AttributeSet {
                /**
                 * Attribute name used to name the collection of
                 * attributes.
                 */
                // @ts-ignore
                readonly NameAttribute: java.lang.Object | any
                /**
                 * Attribute name used to identify the resolving parent
                 * set of attributes, if one is defined.
                 */
                // @ts-ignore
                readonly ResolveAttribute: java.lang.Object | any
                /**
                 * Returns the number of attributes that are defined locally in this set.
                 * Attributes that are defined in the parent set are not included.
                 * @return the number of attributes &gt;= 0
                 */
                // @ts-ignore
                getAttributeCount(): number /*int*/
                /**
                 * Checks whether the named attribute has a value specified in
                 * the set without resolving through another attribute
                 * set.
                 * @param attrName the attribute name
                 * @return true if the attribute has a value specified
                 */
                // @ts-ignore
                isDefined(attrName: java.lang.Object | any): boolean
                /**
                 * Determines if the two attribute sets are equivalent.
                 * @param attr an attribute set
                 * @return true if the sets are equivalent
                 */
                // @ts-ignore
                isEqual(attr: javax.swing.text.AttributeSet): boolean
                /**
                 * Returns an attribute set that is guaranteed not
                 * to change over time.
                 * @return a copy of the attribute set
                 */
                // @ts-ignore
                copyAttributes(): javax.swing.text.AttributeSet
                /**
                 * Fetches the value of the given attribute. If the value is not found
                 * locally, the search is continued upward through the resolving
                 * parent (if one exists) until the value is either
                 * found or there are no more parents.  If the value is not found,
                 * null is returned.
                 * @param key the non-null key of the attribute binding
                 * @return the value of the attribute, or {#code null} if not found
                 */
                // @ts-ignore
                getAttribute(key: java.lang.Object | any): any
                /**
                 * Returns an enumeration over the names of the attributes that are
                 * defined locally in the set. Names of attributes defined in the
                 * resolving parent, if any, are not included. The values of the
                 * <code>Enumeration</code> may be anything and are not constrained to
                 * a particular <code>Object</code> type.
                 * <p>
                 * This method never returns {@code null}. For a set with no attributes, it
                 * returns an empty {@code Enumeration}.
                 * @return the names
                 */
                // @ts-ignore
                getAttributeNames(): java.util.Enumeration<any>
                /**
                 * Returns {@code true} if this set defines an attribute with the same
                 * name and an equal value. If such an attribute is not found locally,
                 * it is searched through in the resolving parent hierarchy.
                 * @param name the non-null attribute name
                 * @param value the value
                 * @return {#code true} if the set defines the attribute with an
                 *      equal value, either locally or through its resolving parent
                 * @throws NullPointerException if either {#code name} or
                 *       {@code value} is {@code null}
                 */
                // @ts-ignore
                containsAttribute(name: java.lang.Object | any, value: java.lang.Object | any): boolean
                /**
                 * Returns {@code true} if this set defines all the attributes from the
                 * given set with equal values. If an attribute is not found locally,
                 * it is searched through in the resolving parent hierarchy.
                 * @param attributes the set of attributes to check against
                 * @return {#code true} if this set defines all the attributes with equal
                 *               values, either locally or through its resolving parent
                 * @throws NullPointerException if {#code attributes} is {@code null}
                 */
                // @ts-ignore
                containsAttributes(attributes: javax.swing.text.AttributeSet): boolean
                /**
                 * Gets the resolving parent.
                 * @return the parent
                 */
                // @ts-ignore
                getResolveParent(): javax.swing.text.AttributeSet
            }
        }
    }
}
