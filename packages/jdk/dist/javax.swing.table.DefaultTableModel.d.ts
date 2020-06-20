declare namespace javax {
    namespace swing {
        namespace table {
            /**
             * This is an implementation of <code>TableModel</code> that
             * uses a <code>Vector</code> of <code>Vectors</code> to store the
             * cell value objects.
             * <p>
             * <strong>Warning:</strong> <code>DefaultTableModel</code> returns a
             * column class of <code>Object</code>.  When
             * <code>DefaultTableModel</code> is used with a
             * <code>TableRowSorter</code> this will result in extensive use of
             * <code>toString</code>, which for non-<code>String</code> data types
             * is expensive.  If you use <code>DefaultTableModel</code> with a
             * <code>TableRowSorter</code> you are strongly encouraged to override
             * <code>getColumnClass</code> to return the appropriate type.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Philip Milne
             * @see TableModel
             * @see #getDataVector
             */
            // @ts-ignore
            class DefaultTableModel extends javax.swing.table.AbstractTableModel implements java.io.Serializable {
                /**
                 * Constructs a default <code>DefaultTableModel</code>
                 * which is a table of zero columns and zero rows.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a <code>DefaultTableModel</code> with
                 * <code>rowCount</code> and <code>columnCount</code> of
                 * <code>null</code> object values.
                 * @param rowCount           the number of rows the table holds
                 * @param columnCount        the number of columns the table holds
                 * @see #setValueAt
                 */
                // @ts-ignore
                constructor(rowCount: number /*int*/, columnCount: number /*int*/)
                /**
                 * Constructs a <code>DefaultTableModel</code> with as many columns
                 * as there are elements in <code>columnNames</code>
                 * and <code>rowCount</code> of <code>null</code>
                 * object values.  Each column's name will be taken from
                 * the <code>columnNames</code> vector.
                 * @param columnNames       <code>vector</code> containing the names
                 *                           of the new columns; if this is
                 *                           <code>null</code> then the model has no columns
                 * @param rowCount           the number of rows the table holds
                 * @see #setDataVector
                 * @see #setValueAt
                 */
                // @ts-ignore
                constructor(columnNames: java.util.Vector, rowCount: number /*int*/)
                /**
                 * Constructs a <code>DefaultTableModel</code> with as many
                 * columns as there are elements in <code>columnNames</code>
                 * and <code>rowCount</code> of <code>null</code>
                 * object values.  Each column's name will be taken from
                 * the <code>columnNames</code> array.
                 * @param columnNames       <code>array</code> containing the names
                 *                           of the new columns; if this is
                 *                           <code>null</code> then the model has no columns
                 * @param rowCount           the number of rows the table holds
                 * @see #setDataVector
                 * @see #setValueAt
                 */
                // @ts-ignore
                constructor(columnNames: any[], rowCount: number /*int*/)
                /**
                 * Constructs a <code>DefaultTableModel</code> and initializes the table
                 * by passing <code>data</code> and <code>columnNames</code>
                 * to the <code>setDataVector</code> method.
                 * @param data              the data of the table, a <code>Vector</code>
                 *                           of <code>Vector</code>s of <code>Object</code>
                 *                           values
                 * @param columnNames       <code>vector</code> containing the names
                 *                           of the new columns
                 * @see #getDataVector
                 * @see #setDataVector
                 */
                // @ts-ignore
                constructor(data: java.util.Vector, columnNames: java.util.Vector)
                /**
                 * Constructs a <code>DefaultTableModel</code> and initializes the table
                 * by passing <code>data</code> and <code>columnNames</code>
                 * to the <code>setDataVector</code>
                 * method. The first index in the <code>Object[][]</code> array is
                 * the row index and the second is the column index.
                 * @param data              the data of the table
                 * @param columnNames       the names of the columns
                 * @see #getDataVector
                 * @see #setDataVector
                 */
                // @ts-ignore
                constructor(data: any[][], columnNames: any[])
                /**
                 * The <code>Vector</code> of <code>Vectors</code> of
                 * <code>Object</code> values.
                 */
                // @ts-ignore
                dataVector: java.util.Vector
                /**
                 * The <code>Vector</code> of column identifiers.
                 */
                // @ts-ignore
                columnIdentifiers: java.util.Vector
                /**
                 * Returns the <code>Vector</code> of <code>Vectors</code>
                 * that contains the table's
                 * data values.  The vectors contained in the outer vector are
                 * each a single row of values.  In other words, to get to the cell
                 * at row 1, column 5: <p>
                 * <code>((Vector)getDataVector().elementAt(1)).elementAt(5);</code>
                 * @return the vector of vectors containing the tables data values
                 * @see #newDataAvailable
                 * @see #newRowsAdded
                 * @see #setDataVector
                 */
                // @ts-ignore
                getDataVector(): java.util.Vector
                /**
                 * Replaces the current <code>dataVector</code> instance variable
                 * with the new <code>Vector</code> of rows, <code>dataVector</code>.
                 * Each row is represented in <code>dataVector</code> as a
                 * <code>Vector</code> of <code>Object</code> values.
                 * <code>columnIdentifiers</code> are the names of the new
                 * columns.  The first name in <code>columnIdentifiers</code> is
                 * mapped to column 0 in <code>dataVector</code>. Each row in
                 * <code>dataVector</code> is adjusted to match the number of
                 * columns in <code>columnIdentifiers</code>
                 * either by truncating the <code>Vector</code> if it is too long,
                 * or adding <code>null</code> values if it is too short.
                 * <p>Note that passing in a <code>null</code> value for
                 * <code>dataVector</code> results in unspecified behavior,
                 * an possibly an exception.
                 * @param dataVector         the new data vector
                 * @param columnIdentifiers     the names of the columns
                 * @see #getDataVector
                 */
                // @ts-ignore
                setDataVector(dataVector: java.util.Vector, columnIdentifiers: java.util.Vector): void
                /**
                 * Replaces the value in the <code>dataVector</code> instance
                 * variable with the values in the array <code>dataVector</code>.
                 * The first index in the <code>Object[][]</code>
                 * array is the row index and the second is the column index.
                 * <code>columnIdentifiers</code> are the names of the new columns.
                 * @param dataVector                the new data vector
                 * @param columnIdentifiers the names of the columns
                 * @see #setDataVector(Vector, Vector)
                 */
                // @ts-ignore
                setDataVector(dataVector: any[][], columnIdentifiers: any[]): void
                /**
                 * Equivalent to <code>fireTableChanged</code>.
                 * @param event  the change event
                 */
                // @ts-ignore
                newDataAvailable(event: javax.swing.event.TableModelEvent): void
                /**
                 * Ensures that the new rows have the correct number of columns.
                 * This is accomplished by  using the <code>setSize</code> method in
                 * <code>Vector</code> which truncates vectors
                 * which are too long, and appends <code>null</code>s if they
                 * are too short.
                 * This method also sends out a <code>tableChanged</code>
                 * notification message to all the listeners.
                 * @param e         this <code>TableModelEvent</code> describes
                 *                            where the rows were added.
                 *                            If <code>null</code> it assumes
                 *                            all the rows were newly added
                 * @see #getDataVector
                 */
                // @ts-ignore
                newRowsAdded(e: javax.swing.event.TableModelEvent): void
                /**
                 * Equivalent to <code>fireTableChanged</code>.
                 * @param event the change event
                 */
                // @ts-ignore
                rowsRemoved(event: javax.swing.event.TableModelEvent): void
                /**
                 * Obsolete as of Java 2 platform v1.3.  Please use <code>setRowCount</code> instead.
                 */
                // @ts-ignore
                setNumRows(rowCount: number /*int*/): void
                /**
                 * Sets the number of rows in the model.  If the new size is greater
                 * than the current size, new rows are added to the end of the model
                 * If the new size is less than the current size, all
                 * rows at index <code>rowCount</code> and greater are discarded.
                 * @see #setColumnCount
                 * @since 1.3
                 */
                // @ts-ignore
                setRowCount(rowCount: number /*int*/): void
                /**
                 * Adds a row to the end of the model.  The new row will contain
                 * <code>null</code> values unless <code>rowData</code> is specified.
                 * Notification of the row being added will be generated.
                 * @param rowData          optional data of the row being added
                 */
                // @ts-ignore
                addRow(rowData: java.util.Vector): void
                /**
                 * Adds a row to the end of the model.  The new row will contain
                 * <code>null</code> values unless <code>rowData</code> is specified.
                 * Notification of the row being added will be generated.
                 * @param rowData          optional data of the row being added
                 */
                // @ts-ignore
                addRow(rowData: any[]): void
                /**
                 * Inserts a row at <code>row</code> in the model.  The new row
                 * will contain <code>null</code> values unless <code>rowData</code>
                 * is specified.  Notification of the row being added will be generated.
                 * @param row             the row index of the row to be inserted
                 * @param rowData         optional data of the row being added
                 * @exception ArrayIndexOutOfBoundsException  if the row was invalid
                 */
                // @ts-ignore
                insertRow(row: number /*int*/, rowData: java.util.Vector): void
                /**
                 * Inserts a row at <code>row</code> in the model.  The new row
                 * will contain <code>null</code> values unless <code>rowData</code>
                 * is specified.  Notification of the row being added will be generated.
                 * @param row      the row index of the row to be inserted
                 * @param rowData          optional data of the row being added
                 * @exception ArrayIndexOutOfBoundsException  if the row was invalid
                 */
                // @ts-ignore
                insertRow(row: number /*int*/, rowData: any[]): void
                /**
                 * Moves one or more rows from the inclusive range <code>start</code> to
                 * <code>end</code> to the <code>to</code> position in the model.
                 * After the move, the row that was at index <code>start</code>
                 * will be at index <code>to</code>.
                 * This method will send a <code>tableChanged</code> notification
                 * message to all the listeners.
                 * <pre>
                 * Examples of moves:
                 * 1. moveRow(1,3,5);
                 * a|B|C|D|e|f|g|h|i|j|k   - before
                 * a|e|f|g|h|B|C|D|i|j|k   - after
                 * 2. moveRow(6,7,1);
                 * a|b|c|d|e|f|G|H|i|j|k   - before
                 * a|G|H|b|c|d|e|f|i|j|k   - after
                 * </pre>
                 * @param start       the starting row index to be moved
                 * @param end         the ending row index to be moved
                 * @param to          the destination of the rows to be moved
                 * @exception ArrayIndexOutOfBoundsException  if any of the elements
                 *  would be moved out of the table's range
                 */
                // @ts-ignore
                moveRow(start: number /*int*/, end: number /*int*/, to: number /*int*/): void
                /**
                 * Removes the row at <code>row</code> from the model.  Notification
                 * of the row being removed will be sent to all the listeners.
                 * @param row      the row index of the row to be removed
                 * @exception ArrayIndexOutOfBoundsException  if the row was invalid
                 */
                // @ts-ignore
                removeRow(row: number /*int*/): void
                /**
                 * Replaces the column identifiers in the model.  If the number of
                 * <code>newIdentifier</code>s is greater than the current number
                 * of columns, new columns are added to the end of each row in the model.
                 * If the number of <code>newIdentifier</code>s is less than the current
                 * number of columns, all the extra columns at the end of a row are
                 * discarded.
                 * @param columnIdentifiers  vector of column identifiers.  If
                 *                           <code>null</code>, set the model
                 *                           to zero columns
                 * @see #setNumRows
                 */
                // @ts-ignore
                setColumnIdentifiers(columnIdentifiers: java.util.Vector): void
                /**
                 * Replaces the column identifiers in the model.  If the number of
                 * <code>newIdentifier</code>s is greater than the current number
                 * of columns, new columns are added to the end of each row in the model.
                 * If the number of <code>newIdentifier</code>s is less than the current
                 * number of columns, all the extra columns at the end of a row are
                 * discarded.
                 * @param newIdentifiers  array of column identifiers.
                 *                           If <code>null</code>, set
                 *                           the model to zero columns
                 * @see #setNumRows
                 */
                // @ts-ignore
                setColumnIdentifiers(newIdentifiers: any[]): void
                /**
                 * Sets the number of columns in the model.  If the new size is greater
                 * than the current size, new columns are added to the end of the model
                 * with <code>null</code> cell values.
                 * If the new size is less than the current size, all columns at index
                 * <code>columnCount</code> and greater are discarded.
                 * @param columnCount  the new number of columns in the model
                 * @see #setColumnCount
                 * @since 1.3
                 */
                // @ts-ignore
                setColumnCount(columnCount: number /*int*/): void
                /**
                 * Adds a column to the model.  The new column will have the
                 * identifier <code>columnName</code>, which may be null.  This method
                 * will send a
                 * <code>tableChanged</code> notification message to all the listeners.
                 * This method is a cover for <code>addColumn(Object, Vector)</code> which
                 * uses <code>null</code> as the data vector.
                 * @param columnName the identifier of the column being added
                 */
                // @ts-ignore
                addColumn(columnName: any): void
                /**
                 * Adds a column to the model.  The new column will have the
                 * identifier <code>columnName</code>, which may be null.
                 * <code>columnData</code> is the
                 * optional vector of data for the column.  If it is <code>null</code>
                 * the column is filled with <code>null</code> values.  Otherwise,
                 * the new data will be added to model starting with the first
                 * element going to row 0, etc.  This method will send a
                 * <code>tableChanged</code> notification message to all the listeners.
                 * @param columnName the identifier of the column being added
                 * @param columnData       optional data of the column being added
                 */
                // @ts-ignore
                addColumn(columnName: any, columnData: java.util.Vector): void
                /**
                 * Adds a column to the model.  The new column will have the
                 * identifier <code>columnName</code>.  <code>columnData</code> is the
                 * optional array of data for the column.  If it is <code>null</code>
                 * the column is filled with <code>null</code> values.  Otherwise,
                 * the new data will be added to model starting with the first
                 * element going to row 0, etc.  This method will send a
                 * <code>tableChanged</code> notification message to all the listeners.
                 * @see #addColumn(Object, Vector)
                 */
                // @ts-ignore
                addColumn(columnName: any, columnData: any[]): void
                /**
                 * Returns the number of rows in this data table.
                 * @return the number of rows in the model
                 */
                // @ts-ignore
                getRowCount(): int
                /**
                 * Returns the number of columns in this data table.
                 * @return the number of columns in the model
                 */
                // @ts-ignore
                getColumnCount(): int
                /**
                 * Returns the column name.
                 * @return a name for this column using the string value of the
                 *  appropriate member in <code>columnIdentifiers</code>.
                 *  If <code>columnIdentifiers</code> does not have an entry
                 *  for this index, returns the default
                 *  name provided by the superclass.
                 */
                // @ts-ignore
                getColumnName(column: number /*int*/): java.lang.String
                /**
                 * Returns true regardless of parameter values.
                 * @param row             the row whose value is to be queried
                 * @param column          the column whose value is to be queried
                 * @return true
                 * @see #setValueAt
                 */
                // @ts-ignore
                isCellEditable(row: number /*int*/, column: number /*int*/): boolean
                /**
                 * Returns an attribute value for the cell at <code>row</code>
                 * and <code>column</code>.
                 * @param row             the row whose value is to be queried
                 * @param column          the column whose value is to be queried
                 * @return the value Object at the specified cell
                 * @exception ArrayIndexOutOfBoundsException  if an invalid row or
                 *                column was given
                 */
                // @ts-ignore
                getValueAt(row: number /*int*/, column: number /*int*/): java.lang.Object
                /**
                 * Sets the object value for the cell at <code>column</code> and
                 * <code>row</code>.  <code>aValue</code> is the new value.  This method
                 * will generate a <code>tableChanged</code> notification.
                 * @param aValue          the new value; this can be null
                 * @param row             the row whose value is to be changed
                 * @param column          the column whose value is to be changed
                 * @exception ArrayIndexOutOfBoundsException  if an invalid row or
                 *                column was given
                 */
                // @ts-ignore
                setValueAt(aValue: any, row: number /*int*/, column: number /*int*/): void
                /**
                 * Returns a vector that contains the same objects as the array.
                 * @param anArray  the array to be converted
                 * @return the new vector; if <code>anArray</code> is <code>null</code>,
                 *                           returns <code>null</code>
                 */
                // @ts-ignore
                convertToVector(anArray: any[]): java.util.Vector
                /**
                 * Returns a vector of vectors that contains the same objects as the array.
                 * @param anArray  the double array to be converted
                 * @return the new vector of vectors; if <code>anArray</code> is
                 *                           <code>null</code>, returns <code>null</code>
                 */
                // @ts-ignore
                convertToVector(anArray: any[][]): java.util.Vector
            }
        }
    }
}
