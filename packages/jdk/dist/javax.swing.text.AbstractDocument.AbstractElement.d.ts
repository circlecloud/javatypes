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
                abstract class AbstractElement extends java.lang.Object implements javax.swing.text.Element, javax.swing.text.MutableAttributeSet, java.io.Serializable, javax.swing.tree.TreeNode {
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
                    public dump(psOut: java.io.PrintStream, indentAmount: number /*int*/): void
                    /**
                     * Gets the number of attributes that are defined.
                     * @return the number of attributes &gt;= 0
                     * @see AttributeSet#getAttributeCount
                     */
                    // @ts-ignore
                    public getAttributeCount(): number /*int*/
                    /**
                     * Checks whether a given attribute is defined.
                     * @param attrName the non-null attribute name
                     * @return true if the attribute is defined
                     * @see AttributeSet#isDefined
                     */
                    // @ts-ignore
                    public isDefined(attrName: java.lang.Object | any): boolean
                    /**
                     * Checks whether two attribute sets are equal.
                     * @param attr the attribute set to check against
                     * @return true if the same
                     * @see AttributeSet#isEqual
                     */
                    // @ts-ignore
                    public isEqual(attr: javax.swing.text.AttributeSet): boolean
                    /**
                     * Copies a set of attributes.
                     * @return the copy
                     * @see AttributeSet#copyAttributes
                     */
                    // @ts-ignore
                    public copyAttributes(): javax.swing.text.AttributeSet
                    /**
                     * Gets the value of an attribute.
                     * @param attrName the non-null attribute name
                     * @return the attribute value
                     * @see AttributeSet#getAttribute
                     */
                    // @ts-ignore
                    public getAttribute(attrName: java.lang.Object | any): any
                    /**
                     * Gets the names of all attributes.
                     * @return the attribute names as an enumeration
                     * @see AttributeSet#getAttributeNames
                     */
                    // @ts-ignore
                    public getAttributeNames(): java.util.Enumeration<any>
                    /**
                     * Checks whether a given attribute name/value is defined.
                     * @param name the non-null attribute name
                     * @param value the attribute value
                     * @return true if the name/value is defined
                     * @see AttributeSet#containsAttribute
                     */
                    // @ts-ignore
                    public containsAttribute(name: java.lang.Object | any, value: java.lang.Object | any): boolean
                    /**
                     * Checks whether the element contains all the attributes.
                     * @param attrs the attributes to check
                     * @return true if the element contains all the attributes
                     * @see AttributeSet#containsAttributes
                     */
                    // @ts-ignore
                    public containsAttributes(attrs: javax.swing.text.AttributeSet): boolean
                    /**
                     * Gets the resolving parent.
                     * If not overridden, the resolving parent defaults to
                     * the parent element.
                     * @return the attributes from the parent, <code>null</code> if none
                     * @see AttributeSet#getResolveParent
                     */
                    // @ts-ignore
                    public getResolveParent(): javax.swing.text.AttributeSet
                    /**
                     * Adds an attribute to the element.
                     * @param name the non-null attribute name
                     * @param value the attribute value
                     * @see MutableAttributeSet#addAttribute
                     */
                    // @ts-ignore
                    public addAttribute(name: java.lang.Object | any, value: java.lang.Object | any): void
                    /**
                     * Adds a set of attributes to the element.
                     * @param attr the attributes to add
                     * @see MutableAttributeSet#addAttribute
                     */
                    // @ts-ignore
                    public addAttributes(attr: javax.swing.text.AttributeSet): void
                    /**
                     * Removes an attribute from the set.
                     * @param name the non-null attribute name
                     * @see MutableAttributeSet#removeAttribute
                     */
                    // @ts-ignore
                    public removeAttribute(name: java.lang.Object | any): void
                    /**
                     * Removes a set of attributes for the element.
                     * @param names the attribute names
                     * @see MutableAttributeSet#removeAttributes
                     */
                    // @ts-ignore
                    public removeAttributes(names: java.util.Enumeration<any>): void
                    /**
                     * Removes a set of attributes for the element.
                     * @param attrs the attributes
                     * @see MutableAttributeSet#removeAttributes
                     */
                    // @ts-ignore
                    public removeAttributes(attrs: javax.swing.text.AttributeSet): void
                    /**
                     * Sets the resolving parent.
                     * @param parent the parent, null if none
                     * @see MutableAttributeSet#setResolveParent
                     */
                    // @ts-ignore
                    public setResolveParent(parent: javax.swing.text.AttributeSet): void
                    /**
                     * Retrieves the underlying model.
                     * @return the model
                     */
                    // @ts-ignore
                    public getDocument(): javax.swing.text.Document
                    /**
                     * Gets the parent of the element.
                     * @return the parent
                     */
                    // @ts-ignore
                    public getParentElement(): javax.swing.text.Element
                    /**
                     * Gets the attributes for the element.
                     * @return the attribute set
                     */
                    // @ts-ignore
                    public getAttributes(): javax.swing.text.AttributeSet
                    /**
                     * Gets the name of the element.
                     * @return the name, null if none
                     */
                    // @ts-ignore
                    public getName(): string
                    /**
                     * Gets the starting offset in the model for the element.
                     * @return the offset &gt;= 0
                     */
                    // @ts-ignore
                    public abstract getStartOffset(): number /*int*/
                    /**
                     * Gets the ending offset in the model for the element.
                     * @return the offset &gt;= 0
                     */
                    // @ts-ignore
                    public abstract getEndOffset(): number /*int*/
                    /**
                     * Gets a child element.
                     * @param index the child index, &gt;= 0 &amp;&amp; &lt; getElementCount()
                     * @return the child element
                     */
                    // @ts-ignore
                    public abstract getElement(index: number /*int*/): javax.swing.text.Element
                    /**
                     * Gets the number of children for the element.
                     * @return the number of children &gt;= 0
                     */
                    // @ts-ignore
                    public abstract getElementCount(): number /*int*/
                    /**
                     * Gets the child element index closest to the given model offset.
                     * @param offset the offset &gt;= 0
                     * @return the element index &gt;= 0
                     */
                    // @ts-ignore
                    public abstract getElementIndex(offset: number /*int*/): number /*int*/
                    /**
                     * Checks whether the element is a leaf.
                     * @return true if a leaf
                     */
                    // @ts-ignore
                    public abstract isLeaf(): boolean
                    /**
                     * Returns the child <code>TreeNode</code> at index
                     * <code>childIndex</code>.
                     */
                    // @ts-ignore
                    public getChildAt(childIndex: number /*int*/): javax.swing.tree.TreeNode
                    /**
                     * Returns the number of children <code>TreeNode</code>'s
                     * receiver contains.
                     * @return the number of children <code>TreeNodews</code>'s
                     *  receiver contains
                     */
                    // @ts-ignore
                    public getChildCount(): number /*int*/
                    /**
                     * Returns the parent <code>TreeNode</code> of the receiver.
                     * @return the parent <code>TreeNode</code> of the receiver
                     */
                    // @ts-ignore
                    public getParent(): javax.swing.tree.TreeNode
                    /**
                     * Returns the index of <code>node</code> in the receivers children.
                     * If the receiver does not contain <code>node</code>, -1 will be
                     * returned.
                     * @param node the location of interest
                     * @return the index of <code>node</code> in the receiver's
                     *  children, or -1 if absent
                     */
                    // @ts-ignore
                    public getIndex(node: javax.swing.tree.TreeNode): number /*int*/
                    /**
                     * Returns true if the receiver allows children.
                     * @return true if the receiver allows children, otherwise false
                     */
                    // @ts-ignore
                    public abstract getAllowsChildren(): boolean
                    /**
                     * Returns the children of the receiver as an
                     * <code>Enumeration</code>.
                     * @return the children of the receiver as an <code>Enumeration</code>
                     */
                    // @ts-ignore
                    public abstract children(): java.util.Enumeration<any>
                }
            }
        }
    }
}
