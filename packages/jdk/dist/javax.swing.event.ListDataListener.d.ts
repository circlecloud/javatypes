declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * ListDataListener
             * @author Hans Muller
             */
            // @ts-ignore
            interface ListDataListener extends java.util.EventListener {
                /**
                 * Sent after the indices in the index0,index1
                 * interval have been inserted in the data model.
                 * The new interval includes both index0 and index1.
                 * @param e  a <code>ListDataEvent</code> encapsulating the
                 *     event information
                 */
                // @ts-ignore
                intervalAdded(e: javax.swing.event.ListDataEvent): void
                /**
                 * Sent after the indices in the index0,index1 interval
                 * have been removed from the data model.  The interval
                 * includes both index0 and index1.
                 * @param e  a <code>ListDataEvent</code> encapsulating the
                 *     event information
                 */
                // @ts-ignore
                intervalRemoved(e: javax.swing.event.ListDataEvent): void
                /**
                 * Sent when the contents of the list has changed in a way
                 * that's too complex to characterize with the previous
                 * methods. For example, this is sent when an item has been
                 * replaced. Index0 and index1 bracket the change.
                 * @param e  a <code>ListDataEvent</code> encapsulating the
                 *     event information
                 */
                // @ts-ignore
                contentsChanged(e: javax.swing.event.ListDataEvent): void
            }
        }
    }
}
