declare namespace javax {
    namespace swing {
        namespace text {
            namespace AbstractDocument {
                /**
                 * Stores document changes as the document is being
                 * modified.  Can subsequently be used for change notification
                 * when done with the document modification transaction.
                 * This is used by the AbstractDocument class and its extensions
                 * for broadcasting change information to the document listeners.
                 */
                // @ts-ignore
                class DefaultDocumentEvent extends javax.swing.undo.CompoundEdit implements javax.swing.event.DocumentEvent {
                    /**
                     * Constructs a change record.
                     * @param offs the offset into the document of the change &gt;= 0
                     * @param len  the length of the change &gt;= 0
                     * @param type the type of event (DocumentEvent.EventType)
                     * @since 1.4
                     */
                    // @ts-ignore
                    constructor(offs: number /*int*/, len: number /*int*/, type: javax.swing.event.DocumentEvent.EventType)
                    /**
                     * Returns a string description of the change event.
                     * @return a string
                     */
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Adds a document edit.  If the number of edits crosses
                     * a threshold, this switches on a hashtable lookup for
                     * ElementChange implementations since access of these
                     * needs to be relatively quick.
                     * @param anEdit a document edit record
                     * @return true if the edit was added
                     */
                    // @ts-ignore
                    public addEdit(anEdit: javax.swing.undo.UndoableEdit): boolean
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
                    /**
                     * DefaultDocument events are significant.  If you wish to aggregate
                     * DefaultDocumentEvents to present them as a single edit to the user
                     * place them into a CompoundEdit.
                     * @return whether the event is significant for edit undo purposes
                     */
                    // @ts-ignore
                    public isSignificant(): boolean
                    /**
                     * Provides a localized, human readable description of this edit
                     * suitable for use in, say, a change log.
                     * @return the description
                     */
                    // @ts-ignore
                    public getPresentationName(): string
                    /**
                     * Provides a localized, human readable description of the undoable
                     * form of this edit, e.g. for use as an Undo menu item. Typically
                     * derived from getDescription();
                     * @return the description
                     */
                    // @ts-ignore
                    public getUndoPresentationName(): string
                    /**
                     * Provides a localized, human readable description of the redoable
                     * form of this edit, e.g. for use as a Redo menu item. Typically
                     * derived from getPresentationName();
                     * @return the description
                     */
                    // @ts-ignore
                    public getRedoPresentationName(): string
                    /**
                     * Returns the type of event.
                     * @return the event type as a DocumentEvent.EventType
                     * @see DocumentEvent#getType
                     */
                    // @ts-ignore
                    public getType(): javax.swing.event.DocumentEvent.EventType
                    /**
                     * Returns the offset within the document of the start of the change.
                     * @return the offset &gt;= 0
                     * @see DocumentEvent#getOffset
                     */
                    // @ts-ignore
                    public getOffset(): number /*int*/
                    /**
                     * Returns the length of the change.
                     * @return the length &gt;= 0
                     * @see DocumentEvent#getLength
                     */
                    // @ts-ignore
                    public getLength(): number /*int*/
                    /**
                     * Gets the document that sourced the change event.
                     * @return the document
                     * @see DocumentEvent#getDocument
                     */
                    // @ts-ignore
                    public getDocument(): javax.swing.text.Document
                    /**
                     * Gets the changes for an element.
                     * @param elem the element
                     * @return the changes
                     */
                    // @ts-ignore
                    public getChange(elem: javax.swing.text.Element): javax.swing.event.DocumentEvent.ElementChange
                }
            }
        }
    }
}
