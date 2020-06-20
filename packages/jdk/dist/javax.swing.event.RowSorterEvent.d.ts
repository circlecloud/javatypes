declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * <code>RowSorterEvent</code> provides notification of changes to
             * a <code>RowSorter</code>.  Two types of notification are possible:
             * <ul>
             * <li><code>Type.SORT_ORDER_CHANGED</code>: indicates the sort order has
             * changed.  This is typically followed by a notification of:
             * <li><code>Type.SORTED</code>: indicates the contents of the model have
             * been transformed in some way.  For example, the contents may have
             * been sorted or filtered.
             * </ul>
             * @see javax.swing.RowSorter
             * @since 1.6
             */
            // @ts-ignore
            class RowSorterEvent extends java.util.EventObject {
                /**
                 * Creates a <code>RowSorterEvent</code> of type
                 * <code>SORT_ORDER_CHANGED</code>.
                 * @param source the source of the change
                 * @throws IllegalArgumentException if <code>source</code> is
                 *          <code>null</code>
                 */
                // @ts-ignore
                constructor(source: javax.swing.RowSorter)
                /**
                 * Creates a <code>RowSorterEvent</code>.
                 * @param source the source of the change
                 * @param type the type of event
                 * @param previousRowIndexToModel the mapping from model indices to
                 *         view indices prior to the sort, may be <code>null</code>
                 * @throws IllegalArgumentException if source or <code>type</code> is
                 *          <code>null</code>
                 */
                // @ts-ignore
                constructor(source: javax.swing.RowSorter, type: javax.swing.event.RowSorterEvent.Type, previousRowIndexToModel: number /*int*/[])
                /**
                 * Returns the source of the event as a <code>RowSorter</code>.
                 * @return the source of the event as a <code>RowSorter</code>
                 */
                // @ts-ignore
                getSource(): javax.swing.RowSorter
                /**
                 * Returns the type of event.
                 * @return the type of event
                 */
                // @ts-ignore
                getType(): javax.swing.event.RowSorterEvent.Type
                /**
                 * Returns the location of <code>index</code> in terms of the
                 * model prior to the sort.  This method is only useful for events
                 * of type <code>SORTED</code>.  This method will return -1 if the
                 * index is not valid, or the locations prior to the sort have not
                 * been provided.
                 * @param index the index in terms of the view
                 * @return the index in terms of the model prior to the sort, or -1 if
                 *          the location is not valid or the mapping was not provided.
                 */
                // @ts-ignore
                convertPreviousRowIndexToModel(index: number /*int*/): int
                /**
                 * Returns the number of rows before the sort.  This method is only
                 * useful for events of type <code>SORTED</code> and if the
                 * last locations have not been provided will return 0.
                 * @return the number of rows in terms of the view prior to the sort
                 */
                // @ts-ignore
                getPreviousRowCount(): int
            }
        }
    }
}
