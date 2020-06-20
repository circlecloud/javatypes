declare namespace javax {
    namespace swing {
        namespace JTable {
            /**
             * A subclass of <code>TransferHandler.DropLocation</code> representing
             * a drop location for a <code>JTable</code>.
             * @see #getDropLocation
             * @since 1.6
             */
            // @ts-ignore
            class DropLocation extends javax.swing.TransferHandler.DropLocation {
                /**
                 * Returns the row index where a dropped item should be placed in the
                 * table. Interpretation of the value depends on the return of
                 * <code>isInsertRow()</code>. If that method returns
                 * <code>true</code> this value indicates the index where a new
                 * row should be inserted. Otherwise, it represents the value
                 * of an existing row on which the data was dropped. This index is
                 * in terms of the view.
                 * <p>
                 * <code>-1</code> indicates that the drop occurred over empty space,
                 * and no row could be calculated.
                 * @return the drop row
                 */
                // @ts-ignore
                getRow(): int
                /**
                 * Returns the column index where a dropped item should be placed in the
                 * table. Interpretation of the value depends on the return of
                 * <code>isInsertColumn()</code>. If that method returns
                 * <code>true</code> this value indicates the index where a new
                 * column should be inserted. Otherwise, it represents the value
                 * of an existing column on which the data was dropped. This index is
                 * in terms of the view.
                 * <p>
                 * <code>-1</code> indicates that the drop occurred over empty space,
                 * and no column could be calculated.
                 * @return the drop row
                 */
                // @ts-ignore
                getColumn(): int
                /**
                 * Returns whether or not this location represents an insert
                 * of a row.
                 * @return whether or not this is an insert row
                 */
                // @ts-ignore
                isInsertRow(): boolean
                /**
                 * Returns whether or not this location represents an insert
                 * of a column.
                 * @return whether or not this is an insert column
                 */
                // @ts-ignore
                isInsertColumn(): boolean
                /**
                 * Returns a string representation of this drop location.
                 * This method is intended to be used for debugging purposes,
                 * and the content and format of the returned string may vary
                 * between implementations.
                 * @return a string representation of this drop location
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
