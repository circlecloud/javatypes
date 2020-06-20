declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * The listener that's notified when a lists selection value
             * changes.
             * @see javax.swing.ListSelectionModel
             * @author Hans Muller
             */
            // @ts-ignore
            interface ListSelectionListener extends java.util.EventListener {
                /**
                 * Called whenever the value of the selection changes.
                 * @param e the event that characterizes the change.
                 */
                // @ts-ignore
                valueChanged(e: javax.swing.event.ListSelectionEvent): void
            }
        }
    }
}
