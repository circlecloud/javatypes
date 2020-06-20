declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * TableModelListener defines the interface for an object that listens
             * to changes in a TableModel.
             * @author Alan Chung
             * @see javax.swing.table.TableModel
             */
            // @ts-ignore
            interface TableModelListener extends java.util.EventListener {
                /**
                 * This fine grain notification tells listeners the exact range
                 * of cells, rows, or columns that changed.
                 */
                // @ts-ignore
                tableChanged(e: javax.swing.event.TableModelEvent): void
            }
        }
    }
}
