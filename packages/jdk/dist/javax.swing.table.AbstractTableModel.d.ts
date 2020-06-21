declare namespace javax {
    namespace swing {
        namespace table {
            /**
             * This abstract class provides default implementations for most of
             * the methods in the <code>TableModel</code> interface. It takes care of
             * the management of listeners and provides some conveniences for generating
             * <code>TableModelEvents</code> and dispatching them to the listeners.
             * To create a concrete <code>TableModel</code> as a subclass of
             * <code>AbstractTableModel</code> you need only provide implementations
             * for the following three methods:
             * <pre>
             * public int getRowCount();
             * public int getColumnCount();
             * public Object getValueAt(int row, int column);
             * </pre>
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
             */
            // @ts-ignore
            abstract class AbstractTableModel extends java.lang.Object implements javax.swing.table.TableModel, java.io.Serializable {
                // @ts-ignore
                constructor()
                /**
                 * List of listeners
                 */
                // @ts-ignore
                listenerList: javax.swing.event.EventListenerList
                /**
                 * Returns a default name for the column using spreadsheet conventions:
                 * A, B, C, ... Z, AA, AB, etc.  If <code>column</code> cannot be found,
                 * returns an empty string.
                 * @param column  the column being queried
                 * @return a string containing the default name of <code>column</code>
                 */
                // @ts-ignore
                public getColumnName(column: number /*int*/): string
                /**
                 * Returns a column given its name.
                 * Implementation is naive so this should be overridden if
                 * this method is to be called often. This method is not
                 * in the <code>TableModel</code> interface and is not used by the
                 * <code>JTable</code>.
                 * @param columnName string containing name of column to be located
                 * @return the column with <code>columnName</code>, or -1 if not found
                 */
                // @ts-ignore
                public findColumn(columnName: java.lang.String | string): number /*int*/
                /**
                 * Returns <code>Object.class</code> regardless of <code>columnIndex</code>.
                 * @param columnIndex  the column being queried
                 * @return the Object.class
                 */
                // @ts-ignore
                public getColumnClass(columnIndex: number /*int*/): java.lang.Class<any>
                /**
                 * Returns false.  This is the default implementation for all cells.
                 * @param rowIndex  the row being queried
                 * @param columnIndex the column being queried
                 * @return false
                 */
                // @ts-ignore
                public isCellEditable(rowIndex: number /*int*/, columnIndex: number /*int*/): boolean
                /**
                 * This empty implementation is provided so users don't have to implement
                 * this method if their data model is not editable.
                 * @param aValue   value to assign to cell
                 * @param rowIndex   row of cell
                 * @param columnIndex  column of cell
                 */
                // @ts-ignore
                public setValueAt(aValue: java.lang.Object | any, rowIndex: number /*int*/, columnIndex: number /*int*/): void
                /**
                 * Adds a listener to the list that's notified each time a change
                 * to the data model occurs.
                 * @param l               the TableModelListener
                 */
                // @ts-ignore
                public addTableModelListener(l: javax.swing.event.TableModelListener): void
                /**
                 * Removes a listener from the list that's notified each time a
                 * change to the data model occurs.
                 * @param l               the TableModelListener
                 */
                // @ts-ignore
                public removeTableModelListener(l: javax.swing.event.TableModelListener): void
                /**
                 * Returns an array of all the table model listeners
                 * registered on this model.
                 * @return all of this model's <code>TableModelListener</code>s
                 *          or an empty
                 *          array if no table model listeners are currently registered
                 * @see #addTableModelListener
                 * @see #removeTableModelListener
                 * @since 1.4
                 */
                // @ts-ignore
                public getTableModelListeners(): javax.swing.event.TableModelListener[]
                /**
                 * Notifies all listeners that all cell values in the table's
                 * rows may have changed. The number of rows may also have changed
                 * and the <code>JTable</code> should redraw the
                 * table from scratch. The structure of the table (as in the order of the
                 * columns) is assumed to be the same.
                 * @see TableModelEvent
                 * @see EventListenerList
                 * @see javax.swing.JTable#tableChanged(TableModelEvent)
                 */
                // @ts-ignore
                public fireTableDataChanged(): void
                /**
                 * Notifies all listeners that the table's structure has changed.
                 * The number of columns in the table, and the names and types of
                 * the new columns may be different from the previous state.
                 * If the <code>JTable</code> receives this event and its
                 * <code>autoCreateColumnsFromModel</code>
                 * flag is set it discards any table columns that it had and reallocates
                 * default columns in the order they appear in the model. This is the
                 * same as calling <code>setModel(TableModel)</code> on the
                 * <code>JTable</code>.
                 * @see TableModelEvent
                 * @see EventListenerList
                 */
                // @ts-ignore
                public fireTableStructureChanged(): void
                /**
                 * Notifies all listeners that rows in the range
                 * <code>[firstRow, lastRow]</code>, inclusive, have been inserted.
                 * @param firstRow  the first row
                 * @param lastRow   the last row
                 * @see TableModelEvent
                 * @see EventListenerList
                 */
                // @ts-ignore
                public fireTableRowsInserted(firstRow: number /*int*/, lastRow: number /*int*/): void
                /**
                 * Notifies all listeners that rows in the range
                 * <code>[firstRow, lastRow]</code>, inclusive, have been updated.
                 * @param firstRow  the first row
                 * @param lastRow   the last row
                 * @see TableModelEvent
                 * @see EventListenerList
                 */
                // @ts-ignore
                public fireTableRowsUpdated(firstRow: number /*int*/, lastRow: number /*int*/): void
                /**
                 * Notifies all listeners that rows in the range
                 * <code>[firstRow, lastRow]</code>, inclusive, have been deleted.
                 * @param firstRow  the first row
                 * @param lastRow   the last row
                 * @see TableModelEvent
                 * @see EventListenerList
                 */
                // @ts-ignore
                public fireTableRowsDeleted(firstRow: number /*int*/, lastRow: number /*int*/): void
                /**
                 * Notifies all listeners that the value of the cell at
                 * <code>[row, column]</code> has been updated.
                 * @param row  row of cell which has been updated
                 * @param column  column of cell which has been updated
                 * @see TableModelEvent
                 * @see EventListenerList
                 */
                // @ts-ignore
                public fireTableCellUpdated(row: number /*int*/, column: number /*int*/): void
                /**
                 * Forwards the given notification event to all
                 * <code>TableModelListeners</code> that registered
                 * themselves as listeners for this table model.
                 * @param e  the event to be forwarded
                 * @see #addTableModelListener
                 * @see TableModelEvent
                 * @see EventListenerList
                 */
                // @ts-ignore
                public fireTableChanged(e: javax.swing.event.TableModelEvent): void
                /**
                 * Returns an array of all the objects currently registered
                 * as <code><em>Foo</em>Listener</code>s
                 * upon this <code>AbstractTableModel</code>.
                 * <code><em>Foo</em>Listener</code>s are registered using the
                 * <code>add<em>Foo</em>Listener</code> method.
                 * <p>
                 * You can specify the <code>listenerType</code> argument
                 * with a class literal,
                 * such as
                 * <code><em>Foo</em>Listener.class</code>.
                 * For example, you can query a
                 * model <code>m</code>
                 * for its table model listeners with the following code:
                 * <pre>TableModelListener[] tmls = (TableModelListener[])(m.getListeners(TableModelListener.class));</pre>
                 * If no such listeners exist, this method returns an empty array.
                 * @param listenerType the type of listeners requested; this parameter
                 *           should specify an interface that descends from
                 *           <code>java.util.EventListener</code>
                 * @return an array of all objects registered as
                 *           <code><em>Foo</em>Listener</code>s on this component,
                 *           or an empty array if no such
                 *           listeners have been added
                 * @exception ClassCastException if <code>listenerType</code>
                 *           doesn't specify a class or interface that implements
                 *           <code>java.util.EventListener</code>
                 * @see #getTableModelListeners
                 * @since 1.3
                 */
                // @ts-ignore
                public getListeners<T extends java.util.EventListener>(listenerType: java.lang.Class<T>): T
            }
        }
    }
}
