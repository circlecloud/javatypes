declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * Interface implemented by a class interested in hearing about
             * undoable operations.
             * @author Ray Ryan
             */
            // @ts-ignore
            interface UndoableEditListener extends java.util.EventListener {
                /**
                 * An undoable edit happened
                 */
                // @ts-ignore
                undoableEditHappened(e: javax.swing.event.UndoableEditEvent): void
            }
        }
    }
}
