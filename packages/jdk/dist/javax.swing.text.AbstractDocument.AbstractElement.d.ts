declare namespace javax {
    namespace swing {
        namespace text {
            namespace AbstractDocument {
                /**
                 * Implements the abstract part of an element.  By default elements
                 * support attributes by having a field that represents the immutable
                 * part of the current attribute set for the element.  The element itself
                 * implements MutableAttributeSet which can be used to modify the set
                 * by fetching a new immutable set.  The immutable sets are provided
                 * by the AttributeContext associated with the document.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 */
                // @ts-ignore
                class AbstractElement extends java.lang.Object implements javax.swing.text.Element, javax.swing.text.MutableAttributeSet, java.io.Serializable, javax.swing.tree.TreeNode {
                    /**
                     * Creates a new AbstractElement.
                     * @param parent the parent element
                     * @param a the attributes for the element
                     * @since 1.4
                     */
                    // @ts-ignore
                    constructor(parent: javax.swing.text.Element, a: javax.swing.text.AttributeSet)
                    /**
                     * Dumps a debugging representation of the element hierarchy.
                     * @param psOut the output stream
                     * @param indentAmount the indentation level &gt;= 0
                     */
                    // @ts-ignore
                    dump(psOut: java.io.PrintStream, indentAmount: number /*int*/): void
                    /**
                     * Gets the number of attributes that are defined.
                     * @return the number of attributes &gt;= 0
                     * @see AttributeSet#getAttributeCount
                     */
                    // @ts-ignore
                    getAttributeCount(): int
                    /**
                     * Checks whether a given attribute is defined.
                     * @param attrName the non-null attribute name
                     * @return true if the attribute is defined
                     * @see AttributeSet#isDefined
                     */
                    // @ts-ignore
                    isDefined(attrName: any): boolean
                    /**
                     * Checks whether two attribute sets are equal.
                     * @param attr the attribute set to check against
                     * @return true if the same
                     * @see AttributeSet#isEqual
                     */
                    // @ts-ignore
                    isEqual(attr: javax.swing.text.AttributeSet): boolean
                    /**
                     * Copies a set of attributes.
                     * @return the copy
                     * @see AttributeSet#copyAttributes
                     */
                    // @ts-ignore
                    copyAttributes(): javax.swing.text.AttributeSet
                    /**
                     * Gets the value of an attribute.
                     * @param attrName the non-null attribute name
                     * @return the attribute value
                     * @see AttributeSet#getAttribute
                     */
                    // @ts-ignore
                    getAttribute(attrName: any): java.lang.Object
                    /**
                     * Gets the names of all attributes.
                     * @return the attribute names as an enumeration
                     * @see AttributeSet#getAttributeNames
                     */
                    // @ts-ignore
                    getAttributeNames(): java.util.Enumeration<?>
                    /**
                     * Checks whether a given attribute name/value is defined.
                     * @param name the non-null attribute name
                     * @param value the attribute value
                     * @return true if the name/value is defined
                     * @see AttributeSet#containsAttribute
                     */
                    // @ts-ignore
                    containsAttribute(name: any, value: any): boolean
                    /**
                     * Checks whether the element contains all the attributes.
                     * @param attrs the attributes to check
                     * @return true if the element contains all the attributes
                     * @see AttributeSet#containsAttributes
                     */
                    // @ts-ignore
                    containsAttributes(attrs: javax.swing.text.AttributeSet): boolean
                    /**
                     * Gets the resolving parent.
                     * If not overridden, the resolving parent defaults to
                     * the parent element.
                     * @return the attributes from the parent, <code>null</code> if none
                     * @see AttributeSet#getResolveParent
                     */
                    // @ts-ignore
                    getResolveParent(): javax.swing.text.AttributeSet
                    /**
                     * Adds an attribute to the element.
                     * @param name the non-null attribute name
                     * @param value the attribute value
                     * @see MutableAttributeSet#addAttribute
                     */
                    // @ts-ignore
                    addAttribute(name: any, value: any): void
                    /**
                     * Adds a set of attributes to the element.
                     * @param attr the attributes to add
                     * @see MutableAttributeSet#addAttribute
                     */
                    // @ts-ignore
                    addAttributes(attr: javax.swing.text.AttributeSet): void
                    /**
                     * Removes an attribute from the set.
                     * @param name the non-null attribute name
                     * @see MutableAttributeSet#removeAttribute
                     */
                    // @ts-ignore
                    removeAttribute(name: any): void
                    /**
                     * Removes a set of attributes for the element.
                     * @param names the attribute names
                     * @see MutableAttributeSet#removeAttributes
                     */
                    // @ts-ignore
                    removeAttributes(names: java.util.Enumeration<any>): void
                    /**
                     * Removes a set of attributes for the element.
                     * @param attrs the attributes
                     * @see MutableAttributeSet#removeAttributes
                     */
                    // @ts-ignore
                    removeAttributes(attrs: javax.swing.text.AttributeSet): void
                    /**
                     * Sets the resolving parent.
                     * @param parent the parent, null if none
                     * @see MutableAttributeSet#setResolveParent
                     */
                    // @ts-ignore
                    setResolveParent(parent: javax.swing.text.AttributeSet): void
                    /**
                     * Retrieves the underlying model.
                     * @return the model
                     */
                    // @ts-ignore
                    getDocument(): javax.swing.text.Document
                    /**
                     * Gets the parent of the element.
                     * @return the parent
                     */
                    // @ts-ignore
                    getParentElement(): javax.swing.text.Element
                    /**
                     * Gets the attributes for the element.
                     * @return the attribute set
                     */
                    // @ts-ignore
                    getAttributes(): javax.swing.text.AttributeSet
                    /**
                     * Gets the name of the element.
                     * @return the name, null if none
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * Gets the starting offset in the model for the element.
                     * @return the offset &gt;= 0
                     */
                    // @ts-ignore
                    abstract getStartOffset(): int
                    /**
                     * Gets the ending offset in the model for the element.
                     * @return the offset &gt;= 0
                     */
                    // @ts-ignore
                    abstract getEndOffset(): int
                    /**
                     * Gets a child element.
                     * @param index the child index, &gt;= 0 &amp;&amp; &lt; getElementCount()
                     * @return the child element
                     */
                    // @ts-ignore
                    abstract getElement(index: number /*int*/): javax.swing.text.Element
                    /**
                     * Gets the number of children for the element.
                     * @return the number of children &gt;= 0
                     */
                    // @ts-ignore
                    abstract getElementCount(): int
                    /**
                     * Gets the child element index closest to the given model offset.
                     * @param offset the offset &gt;= 0
                     * @return the element index &gt;= 0
                     */
                    // @ts-ignore
                    abstract getElementIndex(offset: number /*int*/): int
                    /**
                     * Checks whether the element is a leaf.
                     * @return true if a leaf
                     */
                    // @ts-ignore
                    abstract isLeaf(): boolean
                    /**
                     * Returns the child <code>TreeNode</code> at index
                     * <code>childIndex</code>.
                     */
                    // @ts-ignore
                    getChildAt(childIndex: number /*int*/): javax.swing.tree.TreeNode
                    /**
                     * Returns the number of children <code>TreeNode</code>'s
                     * receiver contains.
                     * @return the number of children <code>TreeNodews</code>'s
                     *  receiver contains
                     */
                    // @ts-ignore
                    getChildCount(): int
                    /**
                     * Returns the parent <code>TreeNode</code> of the receiver.
                     * @return the parent <code>TreeNode</code> of the receiver
                     */
                    // @ts-ignore
                    getParent(): javax.swing.tree.TreeNode
                    /**
                     * Returns the index of <code>node</code> in the receivers children.
                     * If the receiver does not contain <code>node</code>, -1 will be
                     * returned.
                     * @param node the location of interest
                     * @return the index of <code>node</code> in the receiver's
                     *  children, or -1 if absent
                     */
                    // @ts-ignore
                    getIndex(node: javax.swing.tree.TreeNode): int
                    /**
                     * Returns true if the receiver allows children.
                     * @return true if the receiver allows children, otherwise false
                     */
                    // @ts-ignore
                    abstract getAllowsChildren(): boolean
                    /**
                     * Returns the children of the receiver as an
                     * <code>Enumeration</code>.
                     * @return the children of the receiver as an <code>Enumeration</code>
                     */
                    // @ts-ignore
                    abstract children(): java.util.Enumeration
                }
            }
        }
    }
}
