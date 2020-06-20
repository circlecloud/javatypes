declare namespace javax {
    namespace swing {
        namespace table {
            /**
             * The <code>TableModel</code> interface specifies the methods the
             * <code>JTable</code> will use to interrogate a tabular data model. <p>
             * The <code>JTable</code> can be set up to display any data
             * model which implements the
             * <code>TableModel</code> interface with a couple of lines of code:
             * <pre>
             * TableModel myData = new MyTableModel();
             * JTable table = new JTable(myData);
             * </pre><p>
             * For further documentation, see <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/table.html#data">Creating a Table Model</a>
             * in <em>The Java Tutorial</em>.
             * @author Philip Milne
             * @see JTable
             */
            // @ts-ignore
            interface TableModel {
                /**
                 * Returns the number of rows in the model. A
                 * <code>JTable</code> uses this method to determine how many rows it
                 * should display.  This method should be quick, as it
                 * is called frequently during rendering.
                 * @return the number of rows in the model
                 * @see #getColumnCount
                 */
                // @ts-ignore
                getRowCount(): int
                /**
                 * Returns the number of columns in the model. A
                 * <code>JTable</code> uses this method to determine how many columns it
                 * should create and display by default.
                 * @return the number of columns in the model
                 * @see #getRowCount
                 */
                // @ts-ignore
                getColumnCount(): int
                /**
                 * Returns the name of the column at <code>columnIndex</code>.  This is used
                 * to initialize the table's column header name.  Note: this name does
                 * not need to be unique; two columns in a table can have the same name.
                 * @param columnIndex     the index of the column
                 * @return the name of the column
                 */
                // @ts-ignore
                getColumnName(columnIndex: number /*int*/): java.lang.String
                /**
                 * Returns the most specific superclass for all the cell values
                 * in the column.  This is used by the <code>JTable</code> to set up a
                 * default renderer and editor for the column.
                 * @param columnIndex  the index of the column
                 * @return the common ancestor class of the object values in the model.
                 */
                // @ts-ignore
                getColumnClass(columnIndex: number /*int*/): java.lang.Class<?>
                /**
                 * Returns true if the cell at <code>rowIndex</code> and
                 * <code>columnIndex</code>
                 * is editable.  Otherwise, <code>setValueAt</code> on the cell will not
                 * change the value of that cell.
                 * @param rowIndex        the row whose value to be queried
                 * @param columnIndex     the column whose value to be queried
                 * @return true if the cell is editable
                 * @see #setValueAt
                 */
                // @ts-ignore
                isCellEditable(rowIndex: number /*int*/, columnIndex: number /*int*/): boolean
                /**
                 * Returns the value for the cell at <code>columnIndex</code> and
                 * <code>rowIndex</code>.
                 * @param rowIndex        the row whose value is to be queried
                 * @param columnIndex     the column whose value is to be queried
                 * @return the value Object at the specified cell
                 */
                // @ts-ignore
                getValueAt(rowIndex: number /*int*/, columnIndex: number /*int*/): java.lang.Object
                /**
                 * Sets the value in the cell at <code>columnIndex</code> and
                 * <code>rowIndex</code> to <code>aValue</code>.
                 * @param aValue           the new value
                 * @param rowIndex         the row whose value is to be changed
                 * @param columnIndex      the column whose value is to be changed
                 * @see #getValueAt
                 * @see #isCellEditable
                 */
                // @ts-ignore
                setValueAt(aValue: any, rowIndex: number /*int*/, columnIndex: number /*int*/): void
                /**
                 * Adds a listener to the list that is notified each time a change
                 * to the data model occurs.
                 * @param l               the TableModelListener
                 */
                // @ts-ignore
                addTableModelListener(l: javax.swing.event.TableModelListener): void
                /**
                 * Removes a listener from the list that is notified each time a
                 * change to the data model occurs.
                 * @param l               the TableModelListener
                 */
                // @ts-ignore
                removeTableModelListener(l: javax.swing.event.TableModelListener): void
            }
        }
    }
}
