declare namespace javax {
    namespace swing {
        namespace undo {
            /**
             * An abstract implementation of <code>UndoableEdit</code>,
             * implementing simple responses to all boolean methods in
             * that interface.
             * @author Ray Ryan
             */
            // @ts-ignore
            class AbstractUndoableEdit extends java.lang.Object implements javax.swing.undo.UndoableEdit, java.io.Serializable {
                /**
                 * Creates an <code>AbstractUndoableEdit</code> which defaults
                 * <code>hasBeenDone</code> and <code>alive</code> to <code>true</code>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * String returned by <code>getUndoPresentationName</code>;
                 * as of Java 2 platform v1.3.1 this field is no longer used. This value
                 * is now localized and comes from the defaults table with key
                 * <code>AbstractUndoableEdit.undoText</code>.
                 * @see javax.swing.UIDefaults
                 */
                // @ts-ignore
                static readonly UndoName: java.lang.String | string
                /**
                 * String returned by <code>getRedoPresentationName</code>;
                 * as of Java 2 platform v1.3.1 this field is no longer used. This value
                 * is now localized and comes from the defaults table with key
                 * <code>AbstractUndoableEdit.redoText</code>.
                 * @see javax.swing.UIDefaults
                 */
                // @ts-ignore
                static readonly RedoName: java.lang.String | string
                /**
                 * Sets <code>alive</code> to false. Note that this
                 * is a one way operation; dead edits cannot be resurrected.
                 * Sending <code>undo</code> or <code>redo</code> to
                 * a dead edit results in an exception being thrown.
                 * <p>Typically an edit is killed when it is consolidated by
                 * another edit's <code>addEdit</code> or <code>replaceEdit</code>
                 * method, or when it is dequeued from an <code>UndoManager</code>.
                 */
                // @ts-ignore
                public die(): void
                /**
                 * Throws <code>CannotUndoException</code> if <code>canUndo</code>
                 * returns <code>false</code>. Sets <code>hasBeenDone</code>
                 * to <code>false</code>. Subclasses should override to undo the
                 * operation represented by this edit. Override should begin with
                 * a call to super.
                 * @exception CannotUndoException if <code>canUndo</code>
                 *     returns <code>false</code>
                 * @see #canUndo
                 */
                // @ts-ignore
                public undo(): void
                /**
                 * Returns true if this edit is <code>alive</code>
                 * and <code>hasBeenDone</code> is <code>true</code>.
                 * @return true if this edit is <code>alive</code>
                 *     and <code>hasBeenDone</code> is <code>true</code>
                 * @see #die
                 * @see #undo
                 * @see #redo
                 */
                // @ts-ignore
                public canUndo(): boolean
                /**
                 * Throws <code>CannotRedoException</code> if <code>canRedo</code>
                 * returns false. Sets <code>hasBeenDone</code> to <code>true</code>.
                 * Subclasses should override to redo the operation represented by
                 * this edit. Override should begin with a call to super.
                 * @exception CannotRedoException if <code>canRedo</code>
                 *      returns <code>false</code>
                 * @see #canRedo
                 */
                // @ts-ignore
                public redo(): void
                /**
                 * Returns <code>true</code> if this edit is <code>alive</code>
                 * and <code>hasBeenDone</code> is <code>false</code>.
                 * @return <code>true</code> if this edit is <code>alive</code>
                 *    and <code>hasBeenDone</code> is <code>false</code>
                 * @see #die
                 * @see #undo
                 * @see #redo
                 */
                // @ts-ignore
                public canRedo(): boolean
                /**
                 * This default implementation returns false.
                 * @param anEdit the edit to be added
                 * @return false
                 * @see UndoableEdit#addEdit
                 */
                // @ts-ignore
                public addEdit(anEdit: javax.swing.undo.UndoableEdit): boolean
                /**
                 * This default implementation returns false.
                 * @param anEdit the edit to replace
                 * @return false
                 * @see UndoableEdit#replaceEdit
                 */
                // @ts-ignore
                public replaceEdit(anEdit: javax.swing.undo.UndoableEdit): boolean
                /**
                 * This default implementation returns true.
                 * @return true
                 * @see UndoableEdit#isSignificant
                 */
                // @ts-ignore
                public isSignificant(): boolean
                /**
                 * This default implementation returns "". Used by
                 * <code>getUndoPresentationName</code> and
                 * <code>getRedoPresentationName</code> to
                 * construct the strings they return. Subclasses should override to
                 * return an appropriate description of the operation this edit
                 * represents.
                 * @return the empty string ""
                 * @see #getUndoPresentationName
                 * @see #getRedoPresentationName
                 */
                // @ts-ignore
                public getPresentationName(): string
                /**
                 * Retreives the value from the defaults table with key
                 * <code>AbstractUndoableEdit.undoText</code> and returns
                 * that value followed by a space, followed by
                 * <code>getPresentationName</code>.
                 * If <code>getPresentationName</code> returns "",
                 * then the defaults value is returned alone.
                 * @return the value from the defaults table with key
                 *     <code>AbstractUndoableEdit.undoText</code>, followed
                 *     by a space, followed by <code>getPresentationName</code>
                 *     unless <code>getPresentationName</code> is "" in which
                 *     case, the defaults value is returned alone.
                 * @see #getPresentationName
                 */
                // @ts-ignore
                public getUndoPresentationName(): string
                /**
                 * Retreives the value from the defaults table with key
                 * <code>AbstractUndoableEdit.redoText</code> and returns
                 * that value followed by a space, followed by
                 * <code>getPresentationName</code>.
                 * If <code>getPresentationName</code> returns "",
                 * then the defaults value is returned alone.
                 * @return the value from the defaults table with key
                 *     <code>AbstractUndoableEdit.redoText</code>, followed
                 *     by a space, followed by <code>getPresentationName</code>
                 *     unless <code>getPresentationName</code> is "" in which
                 *     case, the defaults value is returned alone.
                 * @see #getPresentationName
                 */
                // @ts-ignore
                public getRedoPresentationName(): string
                /**
                 * Returns a string that displays and identifies this
                 * object's properties.
                 * @return a String representation of this object
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
