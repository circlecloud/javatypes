declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * CellEditorListener defines the interface for an object that listens
             * to changes in a CellEditor
             * @author Alan Chung
             */
            // @ts-ignore
            interface CellEditorListener extends java.util.EventListener {
                /**
                 * This tells the listeners the editor has ended editing
                 */
                // @ts-ignore
                editingStopped(e: javax.swing.event.ChangeEvent): void
                /**
                 * This tells the listeners the editor has canceled editing
                 */
                // @ts-ignore
                editingCanceled(e: javax.swing.event.ChangeEvent): void
            }
        }
    }
}
