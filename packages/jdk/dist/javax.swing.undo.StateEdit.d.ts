declare namespace javax {
    namespace swing {
        namespace undo {
            /**
             * <P>StateEdit is a general edit for objects that change state.
             * Objects being edited must conform to the StateEditable interface.</P>
             * <P>This edit class works by asking an object to store it's state in
             * Hashtables before and after editing occurs.  Upon undo or redo the
             * object is told to restore it's state from these Hashtables.</P>
             * A state edit is used as follows:
             * <PRE>
             * // Create the edit during the "before" state of the object
             * StateEdit newEdit = new StateEdit(myObject);
             * // Modify the object
             * myObject.someStateModifyingMethod();
             * // "end" the edit when you are done modifying the object
             * newEdit.end();
             * </PRE>
             * <P><EM>Note that when a StateEdit ends, it removes redundant state from
             * the Hashtables - A state Hashtable is not guaranteed to contain all
             * keys/values placed into it when the state is stored!</EM></P>
             * @see StateEditable
             * @author Ray Ryan
             */
            // @ts-ignore
            class StateEdit extends javax.swing.undo.AbstractUndoableEdit {
                /**
                 * Create and return a new StateEdit.
                 * @param anObject The object to watch for changing state
                 * @see StateEdit
                 */
                // @ts-ignore
                constructor(anObject: javax.swing.undo.StateEditable)
                /**
                 * Create and return a new StateEdit with a presentation name.
                 * @param anObject The object to watch for changing state
                 * @param name The presentation name to be used for this edit
                 * @see StateEdit
                 */
                // @ts-ignore
                constructor(anObject: javax.swing.undo.StateEditable, name: java.lang.String | string)
                // @ts-ignore
                static readonly RCSID: java.lang.String | string
                /**
                 * The object being edited
                 */
                // @ts-ignore
                object: javax.swing.undo.StateEditable
                /**
                 * The state information prior to the edit
                 */
                // @ts-ignore
                preState: java.util.Hashtable<java.lang.Object | any, java.lang.Object | any>
                /**
                 * The state information after the edit
                 */
                // @ts-ignore
                postState: java.util.Hashtable<java.lang.Object | any, java.lang.Object | any>
                /**
                 * The undo/redo presentation name
                 */
                // @ts-ignore
                undoRedoName: java.lang.String | string
                // @ts-ignore
                init(anObject: javax.swing.undo.StateEditable, name: java.lang.String | string): void
                /**
                 * Gets the post-edit state of the StateEditable object and
                 * ends the edit.
                 */
                // @ts-ignore
                public end(): void
                /**
                 * Tells the edited object to apply the state prior to the edit
                 */
                // @ts-ignore
                public undo(): void
                /**
                 * Tells the edited object to apply the state after the edit
                 */
                // @ts-ignore
                public redo(): void
                /**
                 * Gets the presentation name for this edit
                 */
                // @ts-ignore
                public getPresentationName(): string
                /**
                 * Remove redundant key/values in state hashtables.
                 */
                // @ts-ignore
                removeRedundantState(): void
            }
        }
    }
}
