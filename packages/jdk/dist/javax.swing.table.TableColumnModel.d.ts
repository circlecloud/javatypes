declare namespace javax {
    namespace swing {
        namespace table {
            /**
             * Defines the requirements for a table column model object suitable for
             * use with <code>JTable</code>.
             * @author Alan Chung
             * @author Philip Milne
             * @see DefaultTableColumnModel
             */
            // @ts-ignore
            interface TableColumnModel {
                /**
                 * Appends <code>aColumn</code> to the end of the
                 * <code>tableColumns</code> array.
                 * This method posts a <code>columnAdded</code>
                 * event to its listeners.
                 * @param aColumn         the <code>TableColumn</code> to be added
                 * @see #removeColumn
                 */
                // @ts-ignore
                addColumn(aColumn: javax.swing.table.TableColumn): void
                /**
                 * Deletes the <code>TableColumn</code> <code>column</code> from the
                 * <code>tableColumns</code> array.  This method will do nothing if
                 * <code>column</code> is not in the table's column list.
                 * This method posts a <code>columnRemoved</code>
                 * event to its listeners.
                 * @param column          the <code>TableColumn</code> to be removed
                 * @see #addColumn
                 */
                // @ts-ignore
                removeColumn(column: javax.swing.table.TableColumn): void
                /**
                 * Moves the column and its header at <code>columnIndex</code> to
                 * <code>newIndex</code>.  The old column at <code>columnIndex</code>
                 * will now be found at <code>newIndex</code>.  The column that used
                 * to be at <code>newIndex</code> is shifted left or right
                 * to make room.  This will not move any columns if
                 * <code>columnIndex</code> equals <code>newIndex</code>.  This method
                 * posts a <code>columnMoved</code> event to its listeners.
                 * @param columnIndex                     the index of column to be moved
                 * @param newIndex                        index of the column's new location
                 * @exception IllegalArgumentException      if <code>columnIndex</code> or
                 *                                           <code>newIndex</code>
                 *                                           are not in the valid range
                 */
                // @ts-ignore
                moveColumn(columnIndex: number /*int*/, newIndex: number /*int*/): void
                /**
                 * Sets the <code>TableColumn</code>'s column margin to
                 * <code>newMargin</code>.  This method posts
                 * a <code>columnMarginChanged</code> event to its listeners.
                 * @param newMargin       the width, in pixels, of the new column margins
                 * @see #getColumnMargin
                 */
                // @ts-ignore
                setColumnMargin(newMargin: number /*int*/): void
                /**
                 * Returns the number of columns in the model.
                 * @return the number of columns in the model
                 */
                // @ts-ignore
                getColumnCount(): number /*int*/
                /**
                 * Returns an <code>Enumeration</code> of all the columns in the model.
                 * @return an <code>Enumeration</code> of all the columns in the model
                 */
                // @ts-ignore
                getColumns(): java.util.Enumeration<javax.swing.table.TableColumn>
                /**
                 * Returns the index of the first column in the table
                 * whose identifier is equal to <code>identifier</code>,
                 * when compared using <code>equals</code>.
                 * @param columnIdentifier        the identifier object
                 * @return the index of the first table column
                 *                   whose identifier is equal to <code>identifier</code>
                 * @exception IllegalArgumentException      if <code>identifier</code>
                 *                           is <code>null</code>, or no
                 *                           <code>TableColumn</code> has this
                 *                           <code>identifier</code>
                 * @see #getColumn
                 */
                // @ts-ignore
                getColumnIndex(columnIdentifier: java.lang.Object | any): number /*int*/
                /**
                 * Returns the <code>TableColumn</code> object for the column at
                 * <code>columnIndex</code>.
                 * @param columnIndex     the index of the desired column
                 * @return the <code>TableColumn</code> object for
                 *                           the column at <code>columnIndex</code>
                 */
                // @ts-ignore
                getColumn(columnIndex: number /*int*/): javax.swing.table.TableColumn
                /**
                 * Returns the width between the cells in each column.
                 * @return the margin, in pixels, between the cells
                 */
                // @ts-ignore
                getColumnMargin(): number /*int*/
                /**
                 * Returns the index of the column that lies on the
                 * horizontal point, <code>xPosition</code>;
                 * or -1 if it lies outside the any of the column's bounds.
                 * In keeping with Swing's separable model architecture, a
                 * TableColumnModel does not know how the table columns actually appear on
                 * screen.  The visual presentation of the columns is the responsibility
                 * of the view/controller object using this model (typically JTable).  The
                 * view/controller need not display the columns sequentially from left to
                 * right.  For example, columns could be displayed from right to left to
                 * accommodate a locale preference or some columns might be hidden at the
                 * request of the user.  Because the model does not know how the columns
                 * are laid out on screen, the given <code>xPosition</code> should not be
                 * considered to be a coordinate in 2D graphics space.  Instead, it should
                 * be considered to be a width from the start of the first column in the
                 * model.  If the column index for a given X coordinate in 2D space is
                 * required, <code>JTable.columnAtPoint</code> can be used instead.
                 * @return the index of the column; or -1 if no column is found
                 * @see javax.swing.JTable#columnAtPoint
                 */
                // @ts-ignore
                getColumnIndexAtX(xPosition: number /*int*/): number /*int*/
                /**
                 * Returns the total width of all the columns.
                 * @return the total computed width of all columns
                 */
                // @ts-ignore
                getTotalColumnWidth(): number /*int*/
                /**
                 * Sets whether the columns in this model may be selected.
                 * @param flag   true if columns may be selected; otherwise false
                 * @see #getColumnSelectionAllowed
                 */
                // @ts-ignore
                setColumnSelectionAllowed(flag: boolean): void
                /**
                 * Returns true if columns may be selected.
                 * @return true if columns may be selected
                 * @see #setColumnSelectionAllowed
                 */
                // @ts-ignore
                getColumnSelectionAllowed(): boolean
                /**
                 * Returns an array of indicies of all selected columns.
                 * @return an array of integers containing the indicies of all
                 *           selected columns; or an empty array if nothing is selected
                 */
                // @ts-ignore
                getSelectedColumns(): number /*int*/[]
                /**
                 * Returns the number of selected columns.
                 * @return the number of selected columns; or 0 if no columns are selected
                 */
                // @ts-ignore
                getSelectedColumnCount(): number /*int*/
                /**
                 * Sets the selection model.
                 * @param newModel  a <code>ListSelectionModel</code> object
                 * @see #getSelectionModel
                 */
                // @ts-ignore
                setSelectionModel(newModel: javax.swing.ListSelectionModel): void
                /**
                 * Returns the current selection model.
                 * @return a <code>ListSelectionModel</code> object
                 * @see #setSelectionModel
                 */
                // @ts-ignore
                getSelectionModel(): javax.swing.ListSelectionModel
                /**
                 * Adds a listener for table column model events.
                 * @param x  a <code>TableColumnModelListener</code> object
                 */
                // @ts-ignore
                addColumnModelListener(x: javax.swing.event.TableColumnModelListener): void
                /**
                 * Removes a listener for table column model events.
                 * @param x  a <code>TableColumnModelListener</code> object
                 */
                // @ts-ignore
                removeColumnModelListener(x: javax.swing.event.TableColumnModelListener): void
            }
        }
    }
}
