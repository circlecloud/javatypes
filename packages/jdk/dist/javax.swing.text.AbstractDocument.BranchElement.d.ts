declare namespace javax {
    namespace swing {
        namespace text {
            namespace AbstractDocument {
                /**
                 * Implements a composite element that contains other elements.
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
                class BranchElement extends javax.swing.text.AbstractDocument.AbstractElement {
                    /**
                     * Constructs a composite element that initially contains
                     * no children.
                     * @param parent  The parent element
                     * @param a the attributes for the element
                     * @since 1.4
                     */
                    // @ts-ignore
                    constructor(parent: javax.swing.text.Element, a: javax.swing.text.AttributeSet)
                    /**
                     * Gets the child element that contains
                     * the given model position.
                     * @param pos the position &gt;= 0
                     * @return the element, null if none
                     */
                    // @ts-ignore
                    public positionToElement(pos: number /*int*/): javax.swing.text.Element
                    /**
                     * Replaces content with a new set of elements.
                     * @param offset the starting offset &gt;= 0
                     * @param length the length to replace &gt;= 0
                     * @param elems the new elements
                     */
                    // @ts-ignore
                    public replace(offset: number /*int*/, length: number /*int*/, elems: javax.swing.text.Element[]): void
                    /**
                     * Converts the element to a string.
                     * @return the string
                     */
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Gets the element name.
                     * @return the element name
                     */
                    // @ts-ignore
                    public getName(): string
                    /**
                     * Gets the starting offset in the model for the element.
                     * @return the offset &gt;= 0
                     */
                    // @ts-ignore
                    public getStartOffset(): number /*int*/
                    /**
                     * Gets the ending offset in the model for the element.
                     * @throws NullPointerException if this element has no children
                     * @return the offset &gt;= 0
                     */
                    // @ts-ignore
                    public getEndOffset(): number /*int*/
                    /**
                     * Gets a child element.
                     * @param index the child index, &gt;= 0 &amp;&amp; &lt; getElementCount()
                     * @return the child element, null if none
                     */
                    // @ts-ignore
                    public getElement(index: number /*int*/): javax.swing.text.Element
                    /**
                     * Gets the number of children for the element.
                     * @return the number of children &gt;= 0
                     */
                    // @ts-ignore
                    public getElementCount(): number /*int*/
                    /**
                     * Gets the child element index closest to the given model offset.
                     * @param offset the offset &gt;= 0
                     * @return the element index &gt;= 0
                     */
                    // @ts-ignore
                    public getElementIndex(offset: number /*int*/): number /*int*/
                    /**
                     * Checks whether the element is a leaf.
                     * @return true if a leaf
                     */
                    // @ts-ignore
                    public isLeaf(): boolean
                    /**
                     * Returns true if the receiver allows children.
                     * @return true if the receiver allows children, otherwise false
                     */
                    // @ts-ignore
                    public getAllowsChildren(): boolean
                    /**
                     * Returns the children of the receiver as an
                     * <code>Enumeration</code>.
                     * @return the children of the receiver
                     */
                    // @ts-ignore
                    public children(): java.util.Enumeration<any>
                }
            }
        }
    }
}
