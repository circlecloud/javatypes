declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * <code>RowSorterListener</code>s are notified of changes to a
             * <code>RowSorter</code>.
             * @see javax.swing.RowSorter
             * @since 1.6
             */
            // @ts-ignore
            interface RowSorterListener extends java.util.EventListener {
                /**
                 * Notification that the <code>RowSorter</code> has changed.  The event
                 * describes the scope of the change.
                 * @param e the event, will not be null
                 */
                // @ts-ignore
                sorterChanged(e: javax.swing.event.RowSorterEvent): void
            }
        }
    }
}
