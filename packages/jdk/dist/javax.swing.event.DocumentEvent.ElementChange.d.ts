declare namespace javax {
    namespace swing {
        namespace event {
            namespace DocumentEvent {
                /**
                 * Describes changes made to a specific element.
                 */
                // @ts-ignore
                interface ElementChange {
                    /**
                     * Returns the element represented.  This is the element
                     * that was changed.
                     * @return the element
                     */
                    // @ts-ignore
                    getElement(): javax.swing.text.Element
                    /**
                     * Fetches the index within the element represented.
                     * This is the location that children were added
                     * and/or removed.
                     * @return the index &gt;= 0
                     */
                    // @ts-ignore
                    getIndex(): int
                    /**
                     * Gets the child elements that were removed from the
                     * given parent element.  The element array returned is
                     * sorted in the order that the elements used to lie in
                     * the document, and must be contiguous.
                     * @return the child elements
                     */
                    // @ts-ignore
                    getChildrenRemoved(): javax.swing.text.Element[]
                    /**
                     * Gets the child elements that were added to the given
                     * parent element.  The element array returned is in the
                     * order that the elements lie in the document, and must
                     * be contiguous.
                     * @return the child elements
                     */
                    // @ts-ignore
                    getChildrenAdded(): javax.swing.text.Element[]
                }
            }
        }
    }
}
