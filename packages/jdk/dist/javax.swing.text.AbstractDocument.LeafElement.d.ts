declare namespace javax {
    namespace swing {
        namespace text {
            namespace AbstractDocument {
                /**
                 * Implements an element that directly represents content of
                 * some kind.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @see Element
                 */
                // @ts-ignore
                class LeafElement extends javax.swing.text.AbstractDocument.AbstractElement {
                    /**
                     * Constructs an element that represents content within the
                     * document (has no children).
                     * @param parent  The parent element
                     * @param a       The element attributes
                     * @param offs0   The start offset &gt;= 0
                     * @param offs1   The end offset &gt;= offs0
                     * @since 1.4
                     */
                    // @ts-ignore
                    constructor(parent: javax.swing.text.Element, a: javax.swing.text.AttributeSet, offs0: number /*int*/, offs1: number /*int*/)
                    /**
                     * Converts the element to a string.
                     * @return the string
                     */
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Gets the starting offset in the model for the element.
                     * @return the offset &gt;= 0
                     */
                    // @ts-ignore
                    public getStartOffset(): number /*int*/
                    /**
                     * Gets the ending offset in the model for the element.
                     * @return the offset &gt;= 0
                     */
                    // @ts-ignore
                    public getEndOffset(): number /*int*/
                    /**
                     * Gets the element name.
                     * @return the name
                     */
                    // @ts-ignore
                    public getName(): string
                    /**
                     * Gets the child element index closest to the given model offset.
                     * @param pos the offset &gt;= 0
                     * @return the element index &gt;= 0
                     */
                    // @ts-ignore
                    public getElementIndex(pos: number /*int*/): number /*int*/
                    /**
                     * Gets a child element.
                     * @param index the child index, &gt;= 0 &amp;&amp; &lt; getElementCount()
                     * @return the child element
                     */
                    // @ts-ignore
                    public getElement(index: number /*int*/): javax.swing.text.Element
                    /**
                     * Returns the number of child elements.
                     * @return the number of children &gt;= 0
                     */
                    // @ts-ignore
                    public getElementCount(): number /*int*/
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
