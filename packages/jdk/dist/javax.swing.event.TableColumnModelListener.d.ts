declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * TableColumnModelListener defines the interface for an object that listens
             * to changes in a TableColumnModel.
             * @author Alan Chung
             * @see TableColumnModelEvent
             */
            // @ts-ignore
            interface TableColumnModelListener extends java.util.EventListener {
                /**
                 * Tells listeners that a column was added to the model.
                 */
                // @ts-ignore
                columnAdded(e: javax.swing.event.TableColumnModelEvent): void
                /**
                 * Tells listeners that a column was removed from the model.
                 */
                // @ts-ignore
                columnRemoved(e: javax.swing.event.TableColumnModelEvent): void
                /**
                 * Tells listeners that a column was repositioned.
                 */
                // @ts-ignore
                columnMoved(e: javax.swing.event.TableColumnModelEvent): void
                /**
                 * Tells listeners that a column was moved due to a margin change.
                 */
                // @ts-ignore
                columnMarginChanged(e: javax.swing.event.ChangeEvent): void
                /**
                 * Tells listeners that the selection model of the
                 * TableColumnModel changed.
                 */
                // @ts-ignore
                columnSelectionChanged(e: javax.swing.event.ListSelectionEvent): void
            }
        }
    }
}
