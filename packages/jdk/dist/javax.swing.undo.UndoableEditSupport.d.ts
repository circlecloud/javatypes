declare namespace javax {
    namespace swing {
        namespace undo {
            /**
             * A support class used for managing <code>UndoableEdit</code> listeners.
             * @author Ray Ryan
             */
            // @ts-ignore
            class UndoableEditSupport extends java.lang.Object {
                /**
                 * Constructs an <code>UndoableEditSupport</code> object.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs an <code>UndoableEditSupport</code> object.
                 * @param r  an <code>Object</code>
                 */
                // @ts-ignore
                constructor(r: java.lang.Object | any)
                // @ts-ignore
                updateLevel: number /*int*/
                // @ts-ignore
                compoundEdit: javax.swing.undo.CompoundEdit
                // @ts-ignore
                listeners: java.util.Vector<javax.swing.event.UndoableEditListener>
                // @ts-ignore
                realSource: java.lang.Object | any
                /**
                 * Registers an <code>UndoableEditListener</code>.
                 * The listener is notified whenever an edit occurs which can be undone.
                 * @param l  an <code>UndoableEditListener</code> object
                 * @see #removeUndoableEditListener
                 */
                // @ts-ignore
                public addUndoableEditListener(l: javax.swing.event.UndoableEditListener): void
                /**
                 * Removes an <code>UndoableEditListener</code>.
                 * @param l  the <code>UndoableEditListener</code> object to be removed
                 * @see #addUndoableEditListener
                 */
                // @ts-ignore
                public removeUndoableEditListener(l: javax.swing.event.UndoableEditListener): void
                /**
                 * Returns an array of all the <code>UndoableEditListener</code>s added
                 * to this UndoableEditSupport with addUndoableEditListener().
                 * @return all of the <code>UndoableEditListener</code>s added or an empty
                 *          array if no listeners have been added
                 * @since 1.4
                 */
                // @ts-ignore
                public getUndoableEditListeners(): javax.swing.event.UndoableEditListener[]
                /**
                 * Called only from <code>postEdit</code> and <code>endUpdate</code>. Calls
                 * <code>undoableEditHappened</code> in all listeners. No synchronization
                 * is performed here, since the two calling methods are synchronized.
                 */
                // @ts-ignore
                _postEdit(e: javax.swing.undo.UndoableEdit): void
                /**
                 * DEADLOCK WARNING: Calling this method may call
                 * <code>undoableEditHappened</code> in all listeners.
                 * It is unwise to call this method from one of its listeners.
                 */
                // @ts-ignore
                public postEdit(e: javax.swing.undo.UndoableEdit): void
                /**
                 * Returns the update level value.
                 * @return an integer representing the update level
                 */
                // @ts-ignore
                public getUpdateLevel(): number /*int*/
                // @ts-ignore
                public beginUpdate(): void
                /**
                 * Called only from <code>beginUpdate</code>.
                 * Exposed here for subclasses' use.
                 */
                // @ts-ignore
                createCompoundEdit(): javax.swing.undo.CompoundEdit
                /**
                 * DEADLOCK WARNING: Calling this method may call
                 * <code>undoableEditHappened</code> in all listeners.
                 * It is unwise to call this method from one of its listeners.
                 */
                // @ts-ignore
                public endUpdate(): void
                /**
                 * Returns a string that displays and identifies this
                 * object's properties.
                 * @return a <code>String</code> representation of this object
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
