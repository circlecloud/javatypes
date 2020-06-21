declare namespace javax {
    namespace swing {
        namespace text {
            namespace AbstractDocument {
                /**
                 * An interface that can be used to allow MutableAttributeSet
                 * implementations to use pluggable attribute compression
                 * techniques.  Each mutation of the attribute set can be
                 * used to exchange a previous AttributeSet instance with
                 * another, preserving the possibility of the AttributeSet
                 * remaining immutable.  An implementation is provided by
                 * the StyleContext class.
                 * The Element implementations provided by this class use
                 * this interface to provide their MutableAttributeSet
                 * implementations, so that different AttributeSet compression
                 * techniques can be employed.  The method
                 * <code>getAttributeContext</code> should be implemented to
                 * return the object responsible for implementing the desired
                 * compression technique.
                 * @see StyleContext
                 */
                // @ts-ignore
                interface AttributeContext {
                    /**
                     * Adds an attribute to the given set, and returns
                     * the new representative set.
                     * @param old the old attribute set
                     * @param name the non-null attribute name
                     * @param value the attribute value
                     * @return the updated attribute set
                     * @see MutableAttributeSet#addAttribute
                     */
                    // @ts-ignore
                    addAttribute(old: javax.swing.text.AttributeSet, name: java.lang.Object | any, value: java.lang.Object | any): javax.swing.text.AttributeSet
                    /**
                     * Adds a set of attributes to the element.
                     * @param old the old attribute set
                     * @param attr the attributes to add
                     * @return the updated attribute set
                     * @see MutableAttributeSet#addAttribute
                     */
                    // @ts-ignore
                    addAttributes(old: javax.swing.text.AttributeSet, attr: javax.swing.text.AttributeSet): javax.swing.text.AttributeSet
                    /**
                     * Removes an attribute from the set.
                     * @param old the old attribute set
                     * @param name the non-null attribute name
                     * @return the updated attribute set
                     * @see MutableAttributeSet#removeAttribute
                     */
                    // @ts-ignore
                    removeAttribute(old: javax.swing.text.AttributeSet, name: java.lang.Object | any): javax.swing.text.AttributeSet
                    /**
                     * Removes a set of attributes for the element.
                     * @param old the old attribute set
                     * @param names the attribute names
                     * @return the updated attribute set
                     * @see MutableAttributeSet#removeAttributes
                     */
                    // @ts-ignore
                    removeAttributes(old: javax.swing.text.AttributeSet, names: java.util.Enumeration<any>): javax.swing.text.AttributeSet
                    /**
                     * Removes a set of attributes for the element.
                     * @param old the old attribute set
                     * @param attrs the attributes
                     * @return the updated attribute set
                     * @see MutableAttributeSet#removeAttributes
                     */
                    // @ts-ignore
                    removeAttributes(old: javax.swing.text.AttributeSet, attrs: javax.swing.text.AttributeSet): javax.swing.text.AttributeSet
                    /**
                     * Fetches an empty AttributeSet.
                     * @return the attribute set
                     */
                    // @ts-ignore
                    getEmptySet(): javax.swing.text.AttributeSet
                    /**
                     * Reclaims an attribute set.
                     * This is a way for a MutableAttributeSet to mark that it no
                     * longer need a particular immutable set.  This is only necessary
                     * in 1.1 where there are no weak references.  A 1.1 implementation
                     * would call this in its finalize method.
                     * @param a the attribute set to reclaim
                     */
                    // @ts-ignore
                    reclaim(a: javax.swing.text.AttributeSet): void
                }
            }
        }
    }
}
