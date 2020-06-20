declare namespace javax {
    namespace swing {
        namespace text {
            namespace DefaultStyledDocument {
                /**
                 * An UndoableEdit used to remember AttributeSet changes to an
                 * Element.
                 */
                // @ts-ignore
                class AttributeUndoableEdit extends javax.swing.undo.AbstractUndoableEdit {
                    // @ts-ignore
                    constructor(element: javax.swing.text.Element, newAttributes: javax.swing.text.AttributeSet, isReplacing: boolean)
                    // @ts-ignore
                    newAttributes: javax.swing.text.AttributeSet
                    // @ts-ignore
                    copy: javax.swing.text.AttributeSet
                    // @ts-ignore
                    isReplacing: boolean
                    // @ts-ignore
                    element: javax.swing.text.Element
                    /**
                     * Redoes a change.
                     * @exception CannotRedoException if the change cannot be redone
                     */
                    // @ts-ignore
                    redo(): void
                    /**
                     * Undoes a change.
                     * @exception CannotUndoException if the change cannot be undone
                     */
                    // @ts-ignore
                    undo(): void
                }
            }
        }
    }
}
