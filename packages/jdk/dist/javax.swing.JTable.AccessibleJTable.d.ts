declare namespace javax {
    namespace swing {
        namespace JTable {
            /**
             * This class implements accessibility support for the
             * <code>JTable</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to table user-interface elements.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             */
            // @ts-ignore
            class AccessibleJTable extends javax.swing.JComponent.AccessibleJComponent implements javax.accessibility.AccessibleSelection, javax.swing.event.ListSelectionListener, javax.swing.event.TableModelListener, javax.swing.event.TableColumnModelListener, javax.swing.event.CellEditorListener, java.beans.PropertyChangeListener, javax.accessibility.AccessibleExtendedTable {
                /**
                 * AccessibleJTable constructor
                 * @since 1.5
                 */
                // @ts-ignore
                constructor()
                /**
                 * Track changes to selection model, column model, etc. so as to
                 * be able to re-place listeners on those in order to pass on
                 * information to the Accessibility PropertyChange mechanism
                 */
                // @ts-ignore
                public propertyChange(e: java.beans.PropertyChangeEvent): void
                /**
                 * Track changes to the table contents
                 */
                // @ts-ignore
                public tableChanged(e: javax.swing.event.TableModelEvent): void
                /**
                 * Track changes to the table contents (row insertions)
                 */
                // @ts-ignore
                public tableRowsInserted(e: javax.swing.event.TableModelEvent): void
                /**
                 * Track changes to the table contents (row deletions)
                 */
                // @ts-ignore
                public tableRowsDeleted(e: javax.swing.event.TableModelEvent): void
                /**
                 * Track changes to the table contents (column insertions)
                 */
                // @ts-ignore
                public columnAdded(e: javax.swing.event.TableColumnModelEvent): void
                /**
                 * Track changes to the table contents (column deletions)
                 */
                // @ts-ignore
                public columnRemoved(e: javax.swing.event.TableColumnModelEvent): void
                /**
                 * Track changes of a column repositioning.
                 * @see TableColumnModelListener
                 */
                // @ts-ignore
                public columnMoved(e: javax.swing.event.TableColumnModelEvent): void
                /**
                 * Track changes of a column moving due to margin changes.
                 * @see TableColumnModelListener
                 */
                // @ts-ignore
                public columnMarginChanged(e: javax.swing.event.ChangeEvent): void
                /**
                 * Track that the selection model of the TableColumnModel changed.
                 * @see TableColumnModelListener
                 */
                // @ts-ignore
                public columnSelectionChanged(e: javax.swing.event.ListSelectionEvent): void
                /**
                 * Track changes to a cell's contents.
                 * Invoked when editing is finished. The changes are saved, the
                 * editor object is discarded, and the cell is rendered once again.
                 * @see CellEditorListener
                 */
                // @ts-ignore
                public editingStopped(e: javax.swing.event.ChangeEvent): void
                /**
                 * Invoked when editing is canceled. The editor object is discarded
                 * and the cell is rendered once again.
                 * @see CellEditorListener
                 */
                // @ts-ignore
                public editingCanceled(e: javax.swing.event.ChangeEvent): void
                /**
                 * Track changes to table cell selections
                 */
                // @ts-ignore
                public valueChanged(e: javax.swing.event.ListSelectionEvent): void
                /**
                 * Get the AccessibleSelection associated with this object.  In the
                 * implementation of the Java Accessibility API for this class,
                 * return this object, which is responsible for implementing the
                 * AccessibleSelection interface on behalf of itself.
                 * @return this object
                 */
                // @ts-ignore
                public getAccessibleSelection(): javax.accessibility.AccessibleSelection
                /**
                 * Gets the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 * @see AccessibleRole
                 */
                // @ts-ignore
                public getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Returns the <code>Accessible</code> child, if one exists,
                 * contained at the local coordinate <code>Point</code>.
                 * @param p the point defining the top-left corner of the
                 *     <code>Accessible</code>, given in the coordinate space
                 *     of the object's parent
                 * @return the <code>Accessible</code>, if it exists,
                 *     at the specified location; else <code>null</code>
                 */
                // @ts-ignore
                public getAccessibleAt(p: java.awt.Point): javax.accessibility.Accessible
                /**
                 * Returns the number of accessible children in the object.  If all
                 * of the children of this object implement <code>Accessible</code>,
                 * then this method should return the number of children of this object.
                 * @return the number of accessible children in the object
                 */
                // @ts-ignore
                public getAccessibleChildrenCount(): number /*int*/
                /**
                 * Returns the nth <code>Accessible</code> child of the object.
                 * @param i zero-based index of child
                 * @return the nth Accessible child of the object
                 */
                // @ts-ignore
                public getAccessibleChild(i: number /*int*/): javax.accessibility.Accessible
                /**
                 * Returns the number of <code>Accessible</code> children
                 * currently selected.
                 * If no children are selected, the return value will be 0.
                 * @return the number of items currently selected
                 */
                // @ts-ignore
                public getAccessibleSelectionCount(): number /*int*/
                /**
                 * Returns an <code>Accessible</code> representing the
                 * specified selected child in the object.  If there
                 * isn't a selection, or there are fewer children selected
                 * than the integer passed in, the return
                 * value will be <code>null</code>.
                 * <p>Note that the index represents the i-th selected child, which
                 * is different from the i-th child.
                 * @param i the zero-based index of selected children
                 * @return the i-th selected child
                 * @see #getAccessibleSelectionCount
                 */
                // @ts-ignore
                public getAccessibleSelection(i: number /*int*/): javax.accessibility.Accessible
                /**
                 * Determines if the current child of this object is selected.
                 * @param i the zero-based index of the child in this
                 *     <code>Accessible</code> object
                 * @return true if the current child of this object is selected
                 * @see AccessibleContext#getAccessibleChild
                 */
                // @ts-ignore
                public isAccessibleChildSelected(i: number /*int*/): boolean
                /**
                 * Adds the specified <code>Accessible</code> child of the
                 * object to the object's selection.  If the object supports
                 * multiple selections, the specified child is added to
                 * any existing selection, otherwise
                 * it replaces any existing selection in the object.  If the
                 * specified child is already selected, this method has no effect.
                 * <p>
                 * This method only works on <code>JTable</code>s which have
                 * individual cell selection enabled.
                 * @param i the zero-based index of the child
                 * @see AccessibleContext#getAccessibleChild
                 */
                // @ts-ignore
                public addAccessibleSelection(i: number /*int*/): void
                /**
                 * Removes the specified child of the object from the object's
                 * selection.  If the specified item isn't currently selected, this
                 * method has no effect.
                 * <p>
                 * This method only works on <code>JTables</code> which have
                 * individual cell selection enabled.
                 * @param i the zero-based index of the child
                 * @see AccessibleContext#getAccessibleChild
                 */
                // @ts-ignore
                public removeAccessibleSelection(i: number /*int*/): void
                /**
                 * Clears the selection in the object, so that no children in the
                 * object are selected.
                 */
                // @ts-ignore
                public clearAccessibleSelection(): void
                /**
                 * Causes every child of the object to be selected, but only
                 * if the <code>JTable</code> supports multiple selections,
                 * and if individual cell selection is enabled.
                 */
                // @ts-ignore
                public selectAllAccessibleSelection(): void
                /**
                 * Returns the row number of an index in the table.
                 * @param index the zero-based index in the table
                 * @return the zero-based row of the table if one exists;
                 *  otherwise -1.
                 * @since 1.4
                 */
                // @ts-ignore
                public getAccessibleRow(index: number /*int*/): number /*int*/
                /**
                 * Returns the column number of an index in the table.
                 * @param index the zero-based index in the table
                 * @return the zero-based column of the table if one exists;
                 *  otherwise -1.
                 * @since 1.4
                 */
                // @ts-ignore
                public getAccessibleColumn(index: number /*int*/): number /*int*/
                /**
                 * Returns the index at a row and column in the table.
                 * @param r zero-based row of the table
                 * @param c zero-based column of the table
                 * @return the zero-based index in the table if one exists;
                 *  otherwise -1.
                 * @since 1.4
                 */
                // @ts-ignore
                public getAccessibleIndex(r: number /*int*/, c: number /*int*/): number /*int*/
                /**
                 * Gets the <code>AccessibleTable</code> associated with this
                 * object.  In the implementation of the Java Accessibility
                 * API for this class, return this object, which is responsible
                 * for implementing the <code>AccessibleTables</code> interface
                 * on behalf of itself.
                 * @return this object
                 * @since 1.3
                 */
                // @ts-ignore
                public getAccessibleTable(): javax.accessibility.AccessibleTable
                /**
                 * Returns the caption for the table.
                 * @return the caption for the table
                 * @since 1.3
                 */
                // @ts-ignore
                public getAccessibleCaption(): javax.accessibility.Accessible
                /**
                 * Sets the caption for the table.
                 * @param a the caption for the table
                 * @since 1.3
                 */
                // @ts-ignore
                public setAccessibleCaption(a: javax.accessibility.Accessible): void
                /**
                 * Returns the summary description of the table.
                 * @return the summary description of the table
                 * @since 1.3
                 */
                // @ts-ignore
                public getAccessibleSummary(): javax.accessibility.Accessible
                /**
                 * Sets the summary description of the table.
                 * @param a the summary description of the table
                 * @since 1.3
                 */
                // @ts-ignore
                public setAccessibleSummary(a: javax.accessibility.Accessible): void
                // @ts-ignore
                public getAccessibleRowCount(): number /*int*/
                // @ts-ignore
                public getAccessibleColumnCount(): number /*int*/
                // @ts-ignore
                public getAccessibleAt(r: number /*int*/, c: number /*int*/): javax.accessibility.Accessible
                /**
                 * Returns the number of rows occupied by the <code>Accessible</code>
                 * at a specified row and column in the table.
                 * @return the number of rows occupied by the <code>Accessible</code>
                 *      at a specified row and column in the table
                 * @since 1.3
                 */
                // @ts-ignore
                public getAccessibleRowExtentAt(r: number /*int*/, c: number /*int*/): number /*int*/
                /**
                 * Returns the number of columns occupied by the
                 * <code>Accessible</code> at a given (row, column).
                 * @return the number of columns occupied by the <code>Accessible</code>
                 *      at a specified row and column in the table
                 * @since 1.3
                 */
                // @ts-ignore
                public getAccessibleColumnExtentAt(r: number /*int*/, c: number /*int*/): number /*int*/
                /**
                 * Returns the row headers as an <code>AccessibleTable</code>.
                 * @return an <code>AccessibleTable</code> representing the row
                 *  headers
                 * @since 1.3
                 */
                // @ts-ignore
                public getAccessibleRowHeader(): javax.accessibility.AccessibleTable
                /**
                 * Sets the row headers as an <code>AccessibleTable</code>.
                 * @param a an <code>AccessibleTable</code> representing the row
                 *   headers
                 * @since 1.3
                 */
                // @ts-ignore
                public setAccessibleRowHeader(a: javax.accessibility.AccessibleTable): void
                /**
                 * Returns the column headers as an <code>AccessibleTable</code>.
                 * @return an <code>AccessibleTable</code> representing the column
                 *           headers, or <code>null</code> if the table header is
                 *           <code>null</code>
                 * @since 1.3
                 */
                // @ts-ignore
                public getAccessibleColumnHeader(): javax.accessibility.AccessibleTable
                /**
                 * Sets the column headers as an <code>AccessibleTable</code>.
                 * @param a an <code>AccessibleTable</code> representing the
                 *  column headers
                 * @since 1.3
                 */
                // @ts-ignore
                public setAccessibleColumnHeader(a: javax.accessibility.AccessibleTable): void
                /**
                 * Returns the description of the specified row in the table.
                 * @param r zero-based row of the table
                 * @return the description of the row
                 * @since 1.3
                 */
                // @ts-ignore
                public getAccessibleRowDescription(r: number /*int*/): javax.accessibility.Accessible
                /**
                 * Sets the description text of the specified row of the table.
                 * @param r zero-based row of the table
                 * @param a the description of the row
                 * @since 1.3
                 */
                // @ts-ignore
                public setAccessibleRowDescription(r: number /*int*/, a: javax.accessibility.Accessible): void
                /**
                 * Returns the description of the specified column in the table.
                 * @param c zero-based column of the table
                 * @return the description of the column
                 * @since 1.3
                 */
                // @ts-ignore
                public getAccessibleColumnDescription(c: number /*int*/): javax.accessibility.Accessible
                /**
                 * Sets the description text of the specified column of the table.
                 * @param c zero-based column of the table
                 * @param a the description of the column
                 * @since 1.3
                 */
                // @ts-ignore
                public setAccessibleColumnDescription(c: number /*int*/, a: javax.accessibility.Accessible): void
                /**
                 * Returns a boolean value indicating whether the accessible at a
                 * given (row, column) is selected.
                 * @param r zero-based row of the table
                 * @param c zero-based column of the table
                 * @return the boolean value true if the accessible at (row, column)
                 *      is selected; otherwise, the boolean value false
                 * @since 1.3
                 */
                // @ts-ignore
                public isAccessibleSelected(r: number /*int*/, c: number /*int*/): boolean
                /**
                 * Returns a boolean value indicating whether the specified row
                 * is selected.
                 * @param r zero-based row of the table
                 * @return the boolean value true if the specified row is selected;
                 *      otherwise, false
                 * @since 1.3
                 */
                // @ts-ignore
                public isAccessibleRowSelected(r: number /*int*/): boolean
                /**
                 * Returns a boolean value indicating whether the specified column
                 * is selected.
                 * @param c zero-based column of the table
                 * @return the boolean value true if the specified column is selected;
                 *      otherwise, false
                 * @since 1.3
                 */
                // @ts-ignore
                public isAccessibleColumnSelected(c: number /*int*/): boolean
                /**
                 * Returns the selected rows in a table.
                 * @return an array of selected rows where each element is a
                 *      zero-based row of the table
                 * @since 1.3
                 */
                // @ts-ignore
                public getSelectedAccessibleRows(): number /*int*/[]
                /**
                 * Returns the selected columns in a table.
                 * @return an array of selected columns where each element is a
                 *      zero-based column of the table
                 * @since 1.3
                 */
                // @ts-ignore
                public getSelectedAccessibleColumns(): number /*int*/[]
                /**
                 * Returns the row at a given index into the table.
                 * @param i zero-based index into the table
                 * @return the row at a given index
                 * @since 1.3
                 */
                // @ts-ignore
                public getAccessibleRowAtIndex(i: number /*int*/): number /*int*/
                /**
                 * Returns the column at a given index into the table.
                 * @param i zero-based index into the table
                 * @return the column at a given index
                 * @since 1.3
                 */
                // @ts-ignore
                public getAccessibleColumnAtIndex(i: number /*int*/): number /*int*/
                /**
                 * Returns the index at a given (row, column) in the table.
                 * @param r zero-based row of the table
                 * @param c zero-based column of the table
                 * @return the index into the table
                 * @since 1.3
                 */
                // @ts-ignore
                public getAccessibleIndexAt(r: number /*int*/, c: number /*int*/): number /*int*/
            }
        }
    }
}
