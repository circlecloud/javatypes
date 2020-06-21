declare namespace javax {
    namespace swing {
        namespace text {
            namespace AbstractDocument {
                /**
                 * An implementation of ElementChange that can be added to the document
                 * event.
                 */
                // @ts-ignore
                class ElementEdit extends javax.swing.undo.AbstractUndoableEdit implements javax.swing.event.DocumentEvent.ElementChange {
                    /**
                     * Constructs an edit record.  This does not modify the element
                     * so it can safely be used to <em>catch up</em> a view to the
                     * current model state for views that just attached to a model.
                     * @param e the element
                     * @param index the index into the model &gt;= 0
                     * @param removed a set of elements that were removed
                     * @param added a set of elements that were added
                     */
                    // @ts-ignore
                    constructor(e: javax.swing.text.Element, index: number /*int*/, removed: javax.swing.text.Element[], added: javax.swing.text.Element[])
                    /**
                     * Returns the underlying element.
                     * @return the element
                     */
                    // @ts-ignore
                    public getElement(): javax.swing.text.Element
                    /**
                     * Returns the index into the list of elements.
                     * @return the index &gt;= 0
                     */
                    // @ts-ignore
                    public getIndex(): number /*int*/
                    /**
                     * Gets a list of children that were removed.
                     * @return the list
                     */
                    // @ts-ignore
                    public getChildrenRemoved(): javax.swing.text.Element[]
                    /**
                     * Gets a list of children that were added.
                     * @return the list
                     */
                    // @ts-ignore
                    public getChildrenAdded(): javax.swing.text.Element[]
                    /**
                     * Redoes a change.
                     * @exception CannotRedoException if the change cannot be redone
                     */
                    // @ts-ignore
                    public redo(): void
                    /**
                     * Undoes a change.
                     * @exception CannotUndoException if the change cannot be undone
                     */
                    // @ts-ignore
                    public undo(): void
                }
            }
        }
    }
}
