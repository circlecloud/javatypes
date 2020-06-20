declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * TableModelEvent is used to notify listeners that a table model
             * has changed. The model event describes changes to a TableModel
             * and all references to rows and columns are in the co-ordinate
             * system of the model.
             * Depending on the parameters used in the constructors, the TableModelevent
             * can be used to specify the following types of changes:
             * <pre>
             * TableModelEvent(source);              //  The data, ie. all rows changed
             * TableModelEvent(source, HEADER_ROW);  //  Structure change, reallocate TableColumns
             * TableModelEvent(source, 1);           //  Row 1 changed
             * TableModelEvent(source, 3, 6);        //  Rows 3 to 6 inclusive changed
             * TableModelEvent(source, 2, 2, 6);     //  Cell at (2, 6) changed
             * TableModelEvent(source, 3, 6, ALL_COLUMNS, INSERT); // Rows (3, 6) were inserted
             * TableModelEvent(source, 3, 6, ALL_COLUMNS, DELETE); // Rows (3, 6) were deleted
             * </pre>
             * It is possible to use other combinations of the parameters, not all of them
             * are meaningful. By subclassing, you can add other information, for example:
             * whether the event WILL happen or DID happen. This makes the specification
             * of rows in DELETE events more useful but has not been included in
             * the swing package as the JTable only needs post-event notification.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Alan Chung
             * @author Philip Milne
             * @see TableModel
             */
            // @ts-ignore
            class TableModelEvent extends java.util.EventObject {
                /**
                 * All row data in the table has changed, listeners should discard any state
                 * that was based on the rows and requery the <code>TableModel</code>
                 * to get the new row count and all the appropriate values.
                 * The <code>JTable</code> will repaint the entire visible region on
                 * receiving this event, querying the model for the cell values that are visible.
                 * The structure of the table ie, the column names, types and order
                 * have not changed.
                 */
                // @ts-ignore
                constructor(source: javax.swing.table.TableModel)
                /**
                 * This row of data has been updated.
                 * To denote the arrival of a completely new table with a different structure
                 * use <code>HEADER_ROW</code> as the value for the <code>row</code>.
                 * When the <code>JTable</code> receives this event and its
                 * <code>autoCreateColumnsFromModel</code>
                 * flag is set it discards any TableColumns that it had and reallocates
                 * default ones in the order they appear in the model. This is the
                 * same as calling <code>setModel(TableModel)</code> on the <code>JTable</code>.
                 */
                // @ts-ignore
                constructor(source: javax.swing.table.TableModel, row: number /*int*/)
                /**
                 * The data in rows [<I>firstRow</I>, <I>lastRow</I>] have been updated.
                 */
                // @ts-ignore
                constructor(source: javax.swing.table.TableModel, firstRow: number /*int*/, lastRow: number /*int*/)
                /**
                 * The cells in column <I>column</I> in the range
                 * [<I>firstRow</I>, <I>lastRow</I>] have been updated.
                 */
                // @ts-ignore
                constructor(source: javax.swing.table.TableModel, firstRow: number /*int*/, lastRow: number /*int*/, column: number /*int*/)
                /**
                 * The cells from (firstRow, column) to (lastRow, column) have been changed.
                 * The <I>column</I> refers to the column index of the cell in the model's
                 * co-ordinate system. When <I>column</I> is ALL_COLUMNS, all cells in the
                 * specified range of rows are considered changed.
                 * <p>
                 * The <I>type</I> should be one of: INSERT, UPDATE and DELETE.
                 */
                // @ts-ignore
                constructor(source: javax.swing.table.TableModel, firstRow: number /*int*/, lastRow: number /*int*/, column: number /*int*/, type: number /*int*/)
                /**
                 * Identifies the addition of new rows or columns.
                 */
                // @ts-ignore
                readonly INSERT: number /*int*/
                /**
                 * Identifies a change to existing data.
                 */
                // @ts-ignore
                readonly UPDATE: number /*int*/
                /**
                 * Identifies the removal of rows or columns.
                 */
                // @ts-ignore
                readonly DELETE: number /*int*/
                /**
                 * Identifies the header row.
                 */
                // @ts-ignore
                readonly HEADER_ROW: number /*int*/
                /**
                 * Specifies all columns in a row or rows.
                 */
                // @ts-ignore
                readonly ALL_COLUMNS: number /*int*/
                // @ts-ignore
                type: number /*int*/
                // @ts-ignore
                firstRow: number /*int*/
                // @ts-ignore
                lastRow: number /*int*/
                // @ts-ignore
                column: number /*int*/
                /**
                 * Returns the first row that changed.  HEADER_ROW means the meta data,
                 * ie. names, types and order of the columns.
                 */
                // @ts-ignore
                getFirstRow(): int
                /**
                 * Returns the last row that changed.
                 */
                // @ts-ignore
                getLastRow(): int
                /**
                 * Returns the column for the event.  If the return
                 * value is ALL_COLUMNS; it means every column in the specified
                 * rows changed.
                 */
                // @ts-ignore
                getColumn(): int
                /**
                 * Returns the type of event - one of: INSERT, UPDATE and DELETE.
                 */
                // @ts-ignore
                getType(): int
            }
        }
    }
}
