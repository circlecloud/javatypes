declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * An event indicating that an operation which can be undone has occurred.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Ray Ryan
             */
            // @ts-ignore
            class UndoableEditEvent extends java.util.EventObject {
                /**
                 * Constructs an UndoableEditEvent object.
                 * @param source  the Object that originated the event
                 *                 (typically <code>this</code>)
                 * @param edit    an UndoableEdit object
                 */
                // @ts-ignore
                constructor(source: java.lang.Object | any, edit: javax.swing.undo.UndoableEdit)
                /**
                 * Returns the edit value.
                 * @return the UndoableEdit object encapsulating the edit
                 */
                // @ts-ignore
                public getEdit(): javax.swing.undo.UndoableEdit
            }
        }
    }
}
