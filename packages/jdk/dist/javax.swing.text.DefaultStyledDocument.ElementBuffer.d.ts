declare namespace javax {
    namespace swing {
        namespace text {
            namespace DefaultStyledDocument {
                /**
                 * Class to manage changes to the element
                 * hierarchy.
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
                class ElementBuffer extends java.lang.Object implements java.io.Serializable {
                    /**
                     * Creates a new ElementBuffer.
                     * @param root the root element
                     * @since 1.4
                     */
                    // @ts-ignore
                    constructor(root: javax.swing.text.Element)
                    /**
                     * Gets the root element.
                     * @return the root element
                     */
                    // @ts-ignore
                    public getRootElement(): javax.swing.text.Element
                    /**
                     * Inserts new content.
                     * @param offset the starting offset &gt;= 0
                     * @param length the length &gt;= 0
                     * @param data the data to insert
                     * @param de the event capturing this edit
                     */
                    // @ts-ignore
                    public insert(offset: number /*int*/, length: number /*int*/, data: javax.swing.text.DefaultStyledDocument.ElementSpec[], de: javax.swing.text.AbstractDocument.DefaultDocumentEvent): void
                    /**
                     * Removes content.
                     * @param offset the starting offset &gt;= 0
                     * @param length the length &gt;= 0
                     * @param de the event capturing this edit
                     */
                    // @ts-ignore
                    public remove(offset: number /*int*/, length: number /*int*/, de: javax.swing.text.AbstractDocument.DefaultDocumentEvent): void
                    /**
                     * Changes content.
                     * @param offset the starting offset &gt;= 0
                     * @param length the length &gt;= 0
                     * @param de the event capturing this edit
                     */
                    // @ts-ignore
                    public change(offset: number /*int*/, length: number /*int*/, de: javax.swing.text.AbstractDocument.DefaultDocumentEvent): void
                    /**
                     * Inserts an update into the document.
                     * @param data the elements to insert
                     */
                    // @ts-ignore
                    insertUpdate(data: javax.swing.text.DefaultStyledDocument.ElementSpec[]): void
                    /**
                     * Updates the element structure in response to a removal from the
                     * associated sequence in the document.  Any elements consumed by the
                     * span of the removal are removed.
                     */
                    // @ts-ignore
                    removeUpdate(): void
                    /**
                     * Updates the element structure in response to a change in the
                     * document.
                     */
                    // @ts-ignore
                    changeUpdate(): void
                    /**
                     * Creates a copy of this element, with a different
                     * parent.
                     * @param parent the parent element
                     * @param clonee the element to be cloned
                     * @return the copy
                     */
                    // @ts-ignore
                    public clone(parent: javax.swing.text.Element, clonee: javax.swing.text.Element): javax.swing.text.Element
                }
            }
        }
    }
}
