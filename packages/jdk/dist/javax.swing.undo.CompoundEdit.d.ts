declare namespace javax {
    namespace swing {
        namespace undo {
            /**
             * A concrete subclass of AbstractUndoableEdit, used to assemble little
             * UndoableEdits into great big ones.
             * @author Ray Ryan
             */
            // @ts-ignore
            class CompoundEdit extends javax.swing.undo.AbstractUndoableEdit {
                // @ts-ignore
                constructor()
                /**
                 * The collection of <code>UndoableEdit</code>s
                 * undone/redone en masse by this <code>CompoundEdit</code>.
                 */
                // @ts-ignore
                edits: java.util.Vector<javax.swing.undo.UndoableEdit>
                /**
                 * Sends <code>undo</code> to all contained
                 * <code>UndoableEdits</code> in the reverse of
                 * the order in which they were added.
                 */
                // @ts-ignore
                undo(): void
                /**
                 * Sends <code>redo</code> to all contained
                 * <code>UndoableEdit</code>s in the order in
                 * which they were added.
                 */
                // @ts-ignore
                redo(): void
                /**
                 * Returns the last <code>UndoableEdit</code> in
                 * <code>edits</code>, or <code>null</code>
                 * if <code>edits</code> is empty.
                 */
                // @ts-ignore
                lastEdit(): javax.swing.undo.UndoableEdit
                /**
                 * Sends <code>die</code> to each subedit,
                 * in the reverse of the order that they were added.
                 */
                // @ts-ignore
                die(): void
                /**
                 * If this edit is <code>inProgress</code>,
                 * accepts <code>anEdit</code> and returns true.
                 * <p>The last edit added to this <code>CompoundEdit</code>
                 * is given a chance to <code>addEdit(anEdit)</code>.
                 * If it refuses (returns false), <code>anEdit</code> is
                 * given a chance to <code>replaceEdit</code> the last edit.
                 * If <code>anEdit</code> returns false here,
                 * it is added to <code>edits</code>.
                 * @param anEdit the edit to be added
                 * @return true if the edit is <code>inProgress</code>;
                 *   otherwise returns false
                 */
                // @ts-ignore
                addEdit(anEdit: javax.swing.undo.UndoableEdit): boolean
                /**
                 * Sets <code>inProgress</code> to false.
                 * @see #canUndo
                 * @see #canRedo
                 */
                // @ts-ignore
                end(): void
                /**
                 * Returns false if <code>isInProgress</code> or if super
                 * returns false.
                 * @see #isInProgress
                 */
                // @ts-ignore
                canUndo(): boolean
                /**
                 * Returns false if <code>isInProgress</code> or if super
                 * returns false.
                 * @see #isInProgress
                 */
                // @ts-ignore
                canRedo(): boolean
                /**
                 * Returns true if this edit is in progress--that is, it has not
                 * received end. This generally means that edits are still being
                 * added to it.
                 * @see #end
                 */
                // @ts-ignore
                isInProgress(): boolean
                /**
                 * Returns true if any of the <code>UndoableEdit</code>s
                 * in <code>edits</code> do.
                 * Returns false if they all return false.
                 */
                // @ts-ignore
                isSignificant(): boolean
                /**
                 * Returns <code>getPresentationName</code> from the
                 * last <code>UndoableEdit</code> added to
                 * <code>edits</code>. If <code>edits</code> is empty,
                 * calls super.
                 */
                // @ts-ignore
                getPresentationName(): java.lang.String
                /**
                 * Returns <code>getUndoPresentationName</code>
                 * from the last <code>UndoableEdit</code>
                 * added to <code>edits</code>.
                 * If <code>edits</code> is empty, calls super.
                 */
                // @ts-ignore
                getUndoPresentationName(): java.lang.String
                /**
                 * Returns <code>getRedoPresentationName</code>
                 * from the last <code>UndoableEdit</code>
                 * added to <code>edits</code>.
                 * If <code>edits</code> is empty, calls super.
                 */
                // @ts-ignore
                getRedoPresentationName(): java.lang.String
                /**
                 * Returns a string that displays and identifies this
                 * object's properties.
                 * @return a String representation of this object
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
