declare namespace javax {
    namespace swing {
        namespace table {
            /**
             * This is the object which manages the header of the <code>JTable</code>.
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
             * @see javax.swing.JTable
             */
            // @ts-ignore
            class JTableHeader extends javax.swing.JComponent implements javax.swing.event.TableColumnModelListener, javax.accessibility.Accessible {
                /**
                 * Constructs a <code>JTableHeader</code> with a default
                 * <code>TableColumnModel</code>.
                 * @see #createDefaultColumnModel
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a <code>JTableHeader</code> which is initialized with
                 * <code>cm</code> as the column model.  If <code>cm</code> is
                 * <code>null</code> this method will initialize the table header
                 * with a default <code>TableColumnModel</code>.
                 * @param cm        the column model for the table
                 * @see #createDefaultColumnModel
                 */
                // @ts-ignore
                constructor(cm: javax.swing.table.TableColumnModel)
                /**
                 * The table for which this object is the header;
                 * the default is <code>null</code>.
                 */
                // @ts-ignore
                table: javax.swing.JTable
                /**
                 * The <code>TableColumnModel</code> of the table header.
                 */
                // @ts-ignore
                columnModel: javax.swing.table.TableColumnModel
                /**
                 * If true, reordering of columns are allowed by the user;
                 * the default is true.
                 */
                // @ts-ignore
                reorderingAllowed: boolean
                /**
                 * If true, resizing of columns are allowed by the user;
                 * the default is true.
                 */
                // @ts-ignore
                resizingAllowed: boolean
                /**
                 * Obsolete as of Java 2 platform v1.3.  Real time repaints, in response
                 * to column dragging or resizing, are now unconditional.
                 */
                // @ts-ignore
                updateTableInRealTime: boolean
                /**
                 * The index of the column being resized. <code>null</code> if not resizing.
                 */
                // @ts-ignore
                resizingColumn: javax.swing.table.TableColumn
                /**
                 * The index of the column being dragged. <code>null</code> if not dragging.
                 */
                // @ts-ignore
                draggedColumn: javax.swing.table.TableColumn
                /**
                 * The distance from its original position the column has been dragged.
                 */
                // @ts-ignore
                draggedDistance: number /*int*/
                /**
                 * Sets the table associated with this header.
                 * @param table   the new table
                 * @beaninfo bound: true
                 *    description: The table associated with this header.
                 */
                // @ts-ignore
                setTable(table: javax.swing.JTable): void
                /**
                 * Returns the table associated with this header.
                 * @return the <code>table</code> property
                 */
                // @ts-ignore
                getTable(): javax.swing.JTable
                /**
                 * Sets whether the user can drag column headers to reorder columns.
                 * @param reorderingAllowed       true if the table view should allow
                 *                                   reordering; otherwise false
                 * @see #getReorderingAllowed
                 * @beaninfo bound: true
                 *   description: Whether the user can drag column headers to reorder columns.
                 */
                // @ts-ignore
                setReorderingAllowed(reorderingAllowed: boolean): void
                /**
                 * Returns true if the user is allowed to rearrange columns by
                 * dragging their headers, false otherwise. The default is true. You can
                 * rearrange columns programmatically regardless of this setting.
                 * @return the <code>reorderingAllowed</code> property
                 * @see #setReorderingAllowed
                 */
                // @ts-ignore
                getReorderingAllowed(): boolean
                /**
                 * Sets whether the user can resize columns by dragging between headers.
                 * @param resizingAllowed         true if table view should allow
                 *                                   resizing
                 * @see #getResizingAllowed
                 * @beaninfo bound: true
                 *   description: Whether the user can resize columns by dragging between headers.
                 */
                // @ts-ignore
                setResizingAllowed(resizingAllowed: boolean): void
                /**
                 * Returns true if the user is allowed to resize columns by dragging
                 * between their headers, false otherwise. The default is true. You can
                 * resize columns programmatically regardless of this setting.
                 * @return the <code>resizingAllowed</code> property
                 * @see #setResizingAllowed
                 */
                // @ts-ignore
                getResizingAllowed(): boolean
                /**
                 * Returns the the dragged column, if and only if, a drag is in
                 * process, otherwise returns <code>null</code>.
                 * @return the dragged column, if a drag is in
                 *           process, otherwise returns <code>null</code>
                 * @see #getDraggedDistance
                 */
                // @ts-ignore
                getDraggedColumn(): javax.swing.table.TableColumn
                /**
                 * Returns the column's horizontal distance from its original
                 * position, if and only if, a drag is in process. Otherwise, the
                 * the return value is meaningless.
                 * @return the column's horizontal distance from its original
                 *           position, if a drag is in process, otherwise the return
                 *           value is meaningless
                 * @see #getDraggedColumn
                 */
                // @ts-ignore
                getDraggedDistance(): int
                /**
                 * Returns the resizing column.  If no column is being
                 * resized this method returns <code>null</code>.
                 * @return the resizing column, if a resize is in process, otherwise
                 *           returns <code>null</code>
                 */
                // @ts-ignore
                getResizingColumn(): javax.swing.table.TableColumn
                /**
                 * Obsolete as of Java 2 platform v1.3.  Real time repaints, in response to
                 * column dragging or resizing, are now unconditional.
                 */
                // @ts-ignore
                setUpdateTableInRealTime(flag: boolean): void
                /**
                 * Obsolete as of Java 2 platform v1.3.  Real time repaints, in response to
                 * column dragging or resizing, are now unconditional.
                 */
                // @ts-ignore
                getUpdateTableInRealTime(): boolean
                /**
                 * Sets the default renderer to be used when no <code>headerRenderer</code>
                 * is defined by a <code>TableColumn</code>.
                 * @param defaultRenderer  the default renderer
                 * @since 1.3
                 */
                // @ts-ignore
                setDefaultRenderer(defaultRenderer: javax.swing.table.TableCellRenderer): void
                /**
                 * Returns the default renderer used when no <code>headerRenderer</code>
                 * is defined by a <code>TableColumn</code>.
                 * @return the default renderer
                 * @since 1.3
                 */
                // @ts-ignore
                getDefaultRenderer(): javax.swing.table.TableCellRenderer
                /**
                 * Returns the index of the column that <code>point</code> lies in, or -1 if it
                 * lies out of bounds.
                 * @return the index of the column that <code>point</code> lies in, or -1 if it
                 *           lies out of bounds
                 */
                // @ts-ignore
                columnAtPoint(point: java.awt.Point): int
                /**
                 * Returns the rectangle containing the header tile at <code>column</code>.
                 * When the <code>column</code> parameter is out of bounds this method uses the
                 * same conventions as the <code>JTable</code> method <code>getCellRect</code>.
                 * @return the rectangle containing the header tile at <code>column</code>
                 * @see JTable#getCellRect
                 */
                // @ts-ignore
                getHeaderRect(column: number /*int*/): java.awt.Rectangle
                /**
                 * Allows the renderer's tips to be used if there is text set.
                 * @param event  the location of the event identifies the proper
                 *                           renderer and, therefore, the proper tip
                 * @return the tool tip for this component
                 */
                // @ts-ignore
                getToolTipText(event: java.awt.event.MouseEvent): java.lang.String
                /**
                 * Returns the look and feel (L&amp;F) object that renders this component.
                 * @return the <code>TableHeaderUI</code> object that renders this component
                 */
                // @ts-ignore
                getUI(): javax.swing.plaf.TableHeaderUI
                /**
                 * Sets the look and feel (L&amp;F) object that renders this component.
                 * @param ui  the <code>TableHeaderUI</code> L&amp;F object
                 * @see UIDefaults#getUI
                 */
                // @ts-ignore
                setUI(ui: javax.swing.plaf.TableHeaderUI): void
                /**
                 * Notification from the <code>UIManager</code> that the look and feel
                 * (L&amp;F) has changed.
                 * Replaces the current UI object with the latest version from the
                 * <code>UIManager</code>.
                 * @see JComponent#updateUI
                 */
                // @ts-ignore
                updateUI(): void
                /**
                 * Returns the suffix used to construct the name of the look and feel
                 * (L&amp;F) class used to render this component.
                 * @return the string "TableHeaderUI"
                 * @return "TableHeaderUI"
                 * @see JComponent#getUIClassID
                 * @see UIDefaults#getUI
                 */
                // @ts-ignore
                getUIClassID(): java.lang.String
                /**
                 * Sets the column model for this table to <code>newModel</code> and registers
                 * for listener notifications from the new column model.
                 * @param columnModel     the new data source for this table
                 * @exception IllegalArgumentException
                 *                           if <code>newModel</code> is <code>null</code>
                 * @see #getColumnModel
                 * @beaninfo bound: true
                 *   description: The object governing the way columns appear in the view.
                 */
                // @ts-ignore
                setColumnModel(columnModel: javax.swing.table.TableColumnModel): void
                /**
                 * Returns the <code>TableColumnModel</code> that contains all column information
                 * of this table header.
                 * @return the <code>columnModel</code> property
                 * @see #setColumnModel
                 */
                // @ts-ignore
                getColumnModel(): javax.swing.table.TableColumnModel
                /**
                 * Invoked when a column is added to the table column model.
                 * <p>
                 * Application code will not use these methods explicitly, they
                 * are used internally by <code>JTable</code>.
                 * @param e  the event received
                 * @see TableColumnModelListener
                 */
                // @ts-ignore
                columnAdded(e: javax.swing.event.TableColumnModelEvent): void
                /**
                 * Invoked when a column is removed from the table column model.
                 * <p>
                 * Application code will not use these methods explicitly, they
                 * are used internally by <code>JTable</code>.
                 * @param e  the event received
                 * @see TableColumnModelListener
                 */
                // @ts-ignore
                columnRemoved(e: javax.swing.event.TableColumnModelEvent): void
                /**
                 * Invoked when a column is repositioned.
                 * <p>
                 * Application code will not use these methods explicitly, they
                 * are used internally by <code>JTable</code>.
                 * @param e the event received
                 * @see TableColumnModelListener
                 */
                // @ts-ignore
                columnMoved(e: javax.swing.event.TableColumnModelEvent): void
                /**
                 * Invoked when a column is moved due to a margin change.
                 * <p>
                 * Application code will not use these methods explicitly, they
                 * are used internally by <code>JTable</code>.
                 * @param e the event received
                 * @see TableColumnModelListener
                 */
                // @ts-ignore
                columnMarginChanged(e: javax.swing.event.ChangeEvent): void
                /**
                 * Invoked when the selection model of the <code>TableColumnModel</code>
                 * is changed.  This method currently has no effect (the header is not
                 * redrawn).
                 * <p>
                 * Application code will not use these methods explicitly, they
                 * are used internally by <code>JTable</code>.
                 * @param e the event received
                 * @see TableColumnModelListener
                 */
                // @ts-ignore
                columnSelectionChanged(e: javax.swing.event.ListSelectionEvent): void
                /**
                 * Returns the default column model object which is
                 * a <code>DefaultTableColumnModel</code>.  A subclass can override this
                 * method to return a different column model object
                 * @return the default column model object
                 */
                // @ts-ignore
                createDefaultColumnModel(): javax.swing.table.TableColumnModel
                /**
                 * Returns a default renderer to be used when no header renderer
                 * is defined by a <code>TableColumn</code>.
                 * @return the default table column renderer
                 * @since 1.3
                 */
                // @ts-ignore
                createDefaultRenderer(): javax.swing.table.TableCellRenderer
                /**
                 * Initializes the local variables and properties with default values.
                 * Used by the constructor methods.
                 */
                // @ts-ignore
                initializeLocalVars(): void
                /**
                 * Sizes the header and marks it as needing display.  Equivalent
                 * to <code>revalidate</code> followed by <code>repaint</code>.
                 */
                // @ts-ignore
                resizeAndRepaint(): void
                /**
                 * Sets the header's <code>draggedColumn</code> to <code>aColumn</code>.
                 * <p>
                 * Application code will not use this method explicitly, it is used
                 * internally by the column dragging mechanism.
                 * @param aColumn  the column being dragged, or <code>null</code> if
                 *                  no column is being dragged
                 */
                // @ts-ignore
                setDraggedColumn(aColumn: javax.swing.table.TableColumn): void
                /**
                 * Sets the header's <code>draggedDistance</code> to <code>distance</code>.
                 * @param distance  the distance dragged
                 */
                // @ts-ignore
                setDraggedDistance(distance: number /*int*/): void
                /**
                 * Sets the header's <code>resizingColumn</code> to <code>aColumn</code>.
                 * <p>
                 * Application code will not use this method explicitly, it
                 * is used internally by the column sizing mechanism.
                 * @param aColumn  the column being resized, or <code>null</code> if
                 *                  no column is being resized
                 */
                // @ts-ignore
                setResizingColumn(aColumn: javax.swing.table.TableColumn): void
                /**
                 * Returns a string representation of this <code>JTableHeader</code>. This method
                 * is intended to be used only for debugging purposes, and the
                 * content and format of the returned string may vary between
                 * implementations. The returned string may be empty but may not
                 * be <code>null</code>.
                 * <P>
                 * Overriding <code>paramString</code> to provide information about the
                 * specific new aspects of the JFC components.
                 * @return a string representation of this <code>JTableHeader</code>
                 */
                // @ts-ignore
                paramString(): java.lang.String
                /**
                 * Gets the AccessibleContext associated with this JTableHeader.
                 * For JTableHeaders, the AccessibleContext takes the form of an
                 * AccessibleJTableHeader.
                 * A new AccessibleJTableHeader instance is created if necessary.
                 * @return an AccessibleJTableHeader that serves as the
                 *          AccessibleContext of this JTableHeader
                 */
                // @ts-ignore
                getAccessibleContext(): javax.accessibility.AccessibleContext
            }
        }
    }
}
