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
                    toString(): java.lang.String
                    /**
                     * Gets the starting offset in the model for the element.
                     * @return the offset &gt;= 0
                     */
                    // @ts-ignore
                    getStartOffset(): int
                    /**
                     * Gets the ending offset in the model for the element.
                     * @return the offset &gt;= 0
                     */
                    // @ts-ignore
                    getEndOffset(): int
                    /**
                     * Gets the element name.
                     * @return the name
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * Gets the child element index closest to the given model offset.
                     * @param pos the offset &gt;= 0
                     * @return the element index &gt;= 0
                     */
                    // @ts-ignore
                    getElementIndex(pos: number /*int*/): int
                    /**
                     * Gets a child element.
                     * @param index the child index, &gt;= 0 &amp;&amp; &lt; getElementCount()
                     * @return the child element
                     */
                    // @ts-ignore
                    getElement(index: number /*int*/): javax.swing.text.Element
                    /**
                     * Returns the number of child elements.
                     * @return the number of children &gt;= 0
                     */
                    // @ts-ignore
                    getElementCount(): int
                    /**
                     * Checks whether the element is a leaf.
                     * @return true if a leaf
                     */
                    // @ts-ignore
                    isLeaf(): boolean
                    /**
                     * Returns true if the receiver allows children.
                     * @return true if the receiver allows children, otherwise false
                     */
                    // @ts-ignore
                    getAllowsChildren(): boolean
                    /**
                     * Returns the children of the receiver as an
                     * <code>Enumeration</code>.
                     * @return the children of the receiver
                     */
                    // @ts-ignore
                    children(): java.util.Enumeration
                }
            }
        }
    }
}
