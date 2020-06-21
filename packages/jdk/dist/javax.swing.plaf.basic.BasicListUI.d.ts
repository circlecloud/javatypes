declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * An extensible implementation of {@code ListUI}.
                 * <p>
                 * {@code BasicListUI} instances cannot be shared between multiple
                 * lists.
                 * @author Hans Muller
                 * @author Philip Milne
                 * @author Shannon Hickey (drag and drop)
                 */
                // @ts-ignore
                class BasicListUI extends javax.swing.plaf.ListUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    list: javax.swing.JList<any>
                    // @ts-ignore
                    rendererPane: javax.swing.CellRendererPane
                    // @ts-ignore
                    focusListener: java.awt.event.FocusListener
                    // @ts-ignore
                    mouseInputListener: javax.swing.event.MouseInputListener
                    // @ts-ignore
                    listSelectionListener: javax.swing.event.ListSelectionListener
                    // @ts-ignore
                    listDataListener: javax.swing.event.ListDataListener
                    // @ts-ignore
                    propertyChangeListener: java.beans.PropertyChangeListener
                    // @ts-ignore
                    cellHeights: number /*int*/[]
                    // @ts-ignore
                    cellHeight: number /*int*/
                    // @ts-ignore
                    cellWidth: number /*int*/
                    // @ts-ignore
                    updateLayoutStateNeeded: number /*int*/
                    // @ts-ignore
                    static readonly modelChanged: number /*int*/
                    // @ts-ignore
                    static readonly selectionModelChanged: number /*int*/
                    // @ts-ignore
                    static readonly fontChanged: number /*int*/
                    // @ts-ignore
                    static readonly fixedCellWidthChanged: number /*int*/
                    // @ts-ignore
                    static readonly fixedCellHeightChanged: number /*int*/
                    // @ts-ignore
                    static readonly prototypeCellValueChanged: number /*int*/
                    // @ts-ignore
                    static readonly cellRendererChanged: number /*int*/
                    /**
                     * Paint one List cell: compute the relevant state, get the "rubber stamp"
                     * cell renderer component, and then use the CellRendererPane to paint it.
                     * Subclasses may want to override this method rather than paint().
                     * @see #paint
                     */
                    // @ts-ignore
                    paintCell(g: java.awt.Graphics, row: number /*int*/, rowBounds: java.awt.Rectangle, cellRenderer: javax.swing.ListCellRenderer<any>, dataModel: javax.swing.ListModel<any>, selModel: javax.swing.ListSelectionModel, leadIndex: number /*int*/): void
                    /**
                     * Paint the rows that intersect the Graphics objects clipRect.  This
                     * method calls paintCell as necessary.  Subclasses
                     * may want to override these methods.
                     * @see #paintCell
                     */
                    // @ts-ignore
                    public paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    /**
                     * Returns the baseline.
                     * @throws NullPointerException {#inheritDoc}
                     * @throws IllegalArgumentException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    public getBaseline(c: javax.swing.JComponent, width: number /*int*/, height: number /*int*/): number /*int*/
                    /**
                     * Returns an enum indicating how the baseline of the component
                     * changes as the size changes.
                     * @throws NullPointerException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    public getBaselineResizeBehavior(c: javax.swing.JComponent): java.awt.Component.BaselineResizeBehavior
                    /**
                     * The preferredSize of the list depends upon the layout orientation.
                     * <table summary="Describes the preferred size for each layout orientation">
                     * <tr><th>Layout Orientation</th><th>Preferred Size</th></tr>
                     * <tr>
                     * <td>JList.VERTICAL
                     * <td>The preferredSize of the list is total height of the rows
                     * and the maximum width of the cells.  If JList.fixedCellHeight
                     * is specified then the total height of the rows is just
                     * (cellVerticalMargins + fixedCellHeight) * model.getSize() where
                     * rowVerticalMargins is the space we allocate for drawing
                     * the yellow focus outline.  Similarly if fixedCellWidth is
                     * specified then we just use that.
                     * </td>
                     * <tr>
                     * <td>JList.VERTICAL_WRAP
                     * <td>If the visible row count is greater than zero, the preferredHeight
                     * is the maximum cell height * visibleRowCount. If the visible row
                     * count is &lt;= 0, the preferred height is either the current height
                     * of the list, or the maximum cell height, whichever is
                     * bigger. The preferred width is than the maximum cell width *
                     * number of columns needed. Where the number of columns needs is
                     * list.height / max cell height. Max cell height is either the fixed
                     * cell height, or is determined by iterating through all the cells
                     * to find the maximum height from the ListCellRenderer.
                     * <tr>
                     * <td>JList.HORIZONTAL_WRAP
                     * <td>If the visible row count is greater than zero, the preferredHeight
                     * is the maximum cell height * adjustedRowCount.  Where
                     * visibleRowCount is used to determine the number of columns.
                     * Because this lays out horizontally the number of rows is
                     * then determined from the column count.  For example, lets say
                     * you have a model with 10 items and the visible row count is 8.
                     * The number of columns needed to display this is 2, but you no
                     * longer need 8 rows to display this, you only need 5, thus
                     * the adjustedRowCount is 5.
                     * <p>If the visible row
                     * count is &lt;= 0, the preferred height is dictated by the
                     * number of columns, which will be as many as can fit in the width
                     * of the <code>JList</code> (width / max cell width), with at
                     * least one column.  The preferred height then becomes the
                     * model size / number of columns * maximum cell height.
                     * Max cell height is either the fixed
                     * cell height, or is determined by iterating through all the cells
                     * to find the maximum height from the ListCellRenderer.
                     * </table>
                     * The above specifies the raw preferred width and height. The resulting
                     * preferred width is the above width + insets.left + insets.right and
                     * the resulting preferred height is the above height + insets.top +
                     * insets.bottom. Where the <code>Insets</code> are determined from
                     * <code>list.getInsets()</code>.
                     * @param c The JList component.
                     * @return The total size of the list.
                     */
                    // @ts-ignore
                    public getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Selected the previous row and force it to be visible.
                     * @see JList#ensureIndexIsVisible
                     */
                    // @ts-ignore
                    selectPreviousIndex(): void
                    /**
                     * Selected the previous row and force it to be visible.
                     * @see JList#ensureIndexIsVisible
                     */
                    // @ts-ignore
                    selectNextIndex(): void
                    /**
                     * Registers the keyboard bindings on the <code>JList</code> that the
                     * <code>BasicListUI</code> is associated with. This method is called at
                     * installUI() time.
                     * @see #installUI
                     */
                    // @ts-ignore
                    installKeyboardActions(): void
                    /**
                     * Unregisters keyboard actions installed from
                     * <code>installKeyboardActions</code>.
                     * This method is called at uninstallUI() time - subclassess should
                     * ensure that all of the keyboard actions registered at installUI
                     * time are removed here.
                     * @see #installUI
                     */
                    // @ts-ignore
                    uninstallKeyboardActions(): void
                    /**
                     * Creates and installs the listeners for the JList, its model, and its
                     * selectionModel.  This method is called at installUI() time.
                     * @see #installUI
                     * @see #uninstallListeners
                     */
                    // @ts-ignore
                    installListeners(): void
                    /**
                     * Removes the listeners from the JList, its model, and its
                     * selectionModel.  All of the listener fields, are reset to
                     * null here.  This method is called at uninstallUI() time,
                     * it should be kept in sync with installListeners.
                     * @see #uninstallUI
                     * @see #installListeners
                     */
                    // @ts-ignore
                    uninstallListeners(): void
                    /**
                     * Initializes list properties such as font, foreground, and background,
                     * and adds the CellRendererPane. The font, foreground, and background
                     * properties are only set if their current value is either null
                     * or a UIResource, other properties are set if the current
                     * value is null.
                     * @see #uninstallDefaults
                     * @see #installUI
                     * @see CellRendererPane
                     */
                    // @ts-ignore
                    installDefaults(): void
                    /**
                     * Sets the list properties that have not been explicitly overridden to
                     * {@code null}. A property is considered overridden if its current value
                     * is not a {@code UIResource}.
                     * @see #installDefaults
                     * @see #uninstallUI
                     * @see CellRendererPane
                     */
                    // @ts-ignore
                    uninstallDefaults(): void
                    /**
                     * Initializes <code>this.list</code> by calling <code>installDefaults()</code>,
                     * <code>installListeners()</code>, and <code>installKeyboardActions()</code>
                     * in order.
                     * @see #installDefaults
                     * @see #installListeners
                     * @see #installKeyboardActions
                     */
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    /**
                     * Uninitializes <code>this.list</code> by calling <code>uninstallListeners()</code>,
                     * <code>uninstallKeyboardActions()</code>, and <code>uninstallDefaults()</code>
                     * in order.  Sets this.list to null.
                     * @see #uninstallListeners
                     * @see #uninstallKeyboardActions
                     * @see #uninstallDefaults
                     */
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    /**
                     * Returns a new instance of BasicListUI.  BasicListUI delegates are
                     * allocated one per JList.
                     * @return A new ListUI implementation for the Windows look and feel.
                     */
                    // @ts-ignore
                    public static createUI(list: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * {@inheritDoc}
                     * @throws NullPointerException {#inheritDoc}
                     */
                    // @ts-ignore
                    public locationToIndex(list: javax.swing.JList<any>, location: java.awt.Point): number /*int*/
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public indexToLocation(list: javax.swing.JList<any>, index: number /*int*/): java.awt.Point
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getCellBounds(list: javax.swing.JList<any>, index1: number /*int*/, index2: number /*int*/): java.awt.Rectangle
                    /**
                     * Returns the height of the specified row based on the current layout.
                     * @return The specified row height or -1 if row isn't valid.
                     * @see #convertYToRow
                     * @see #convertRowToY
                     * @see #updateLayoutState
                     */
                    // @ts-ignore
                    getRowHeight(row: number /*int*/): number /*int*/
                    /**
                     * Convert the JList relative coordinate to the row that contains it,
                     * based on the current layout.  If y0 doesn't fall within any row,
                     * return -1.
                     * @return The row that contains y0, or -1.
                     * @see #getRowHeight
                     * @see #updateLayoutState
                     */
                    // @ts-ignore
                    convertYToRow(y0: number /*int*/): number /*int*/
                    /**
                     * Return the JList relative Y coordinate of the origin of the specified
                     * row or -1 if row isn't valid.
                     * @return The Y coordinate of the origin of row, or -1.
                     * @see #getRowHeight
                     * @see #updateLayoutState
                     */
                    // @ts-ignore
                    convertRowToY(row: number /*int*/): number /*int*/
                    /**
                     * If updateLayoutStateNeeded is non zero, call updateLayoutState() and reset
                     * updateLayoutStateNeeded.  This method should be called by methods
                     * before doing any computation based on the geometry of the list.
                     * For example it's the first call in paint() and getPreferredSize().
                     * @see #updateLayoutState
                     */
                    // @ts-ignore
                    maybeUpdateLayoutState(): void
                    /**
                     * Recompute the value of cellHeight or cellHeights based
                     * and cellWidth, based on the current font and the current
                     * values of fixedCellWidth, fixedCellHeight, and prototypeCellValue.
                     * @see #maybeUpdateLayoutState
                     */
                    // @ts-ignore
                    updateLayoutState(): void
                    /**
                     * Creates a delegate that implements MouseInputListener.
                     * The delegate is added to the corresponding java.awt.Component listener
                     * lists at installUI() time. Subclasses can override this method to return
                     * a custom MouseInputListener, e.g.
                     * <pre>
                     * class MyListUI extends BasicListUI {
                     * protected MouseInputListener <b>createMouseInputListener</b>() {
                     * return new MyMouseInputHandler();
                     * }
                     * public class MyMouseInputHandler extends MouseInputHandler {
                     * public void mouseMoved(MouseEvent e) {
                     * // do some extra work when the mouse moves
                     * super.mouseMoved(e);
                     * }
                     * }
                     * }
                     * </pre>
                     * @see MouseInputHandler
                     * @see #installUI
                     */
                    // @ts-ignore
                    createMouseInputListener(): javax.swing.event.MouseInputListener
                    // @ts-ignore
                    createFocusListener(): java.awt.event.FocusListener
                    /**
                     * Creates an instance of ListSelectionHandler that's added to
                     * the JLists by selectionModel as needed.  Subclasses can override
                     * this method to return a custom ListSelectionListener, e.g.
                     * <pre>
                     * class MyListUI extends BasicListUI {
                     * protected ListSelectionListener <b>createListSelectionListener</b>() {
                     * return new MySelectionListener();
                     * }
                     * public class MySelectionListener extends ListSelectionHandler {
                     * public void valueChanged(ListSelectionEvent e) {
                     * // do some extra work when the selection changes
                     * super.valueChange(e);
                     * }
                     * }
                     * }
                     * </pre>
                     * @see ListSelectionHandler
                     * @see #installUI
                     */
                    // @ts-ignore
                    createListSelectionListener(): javax.swing.event.ListSelectionListener
                    /**
                     * Creates an instance of ListDataListener that's added to
                     * the JLists by model as needed.  Subclasses can override
                     * this method to return a custom ListDataListener, e.g.
                     * <pre>
                     * class MyListUI extends BasicListUI {
                     * protected ListDataListener <b>createListDataListener</b>() {
                     * return new MyListDataListener();
                     * }
                     * public class MyListDataListener extends ListDataHandler {
                     * public void contentsChanged(ListDataEvent e) {
                     * // do some extra work when the models contents change
                     * super.contentsChange(e);
                     * }
                     * }
                     * }
                     * </pre>
                     * @see ListDataListener
                     * @see JList#getModel
                     * @see #installUI
                     */
                    // @ts-ignore
                    createListDataListener(): javax.swing.event.ListDataListener
                    /**
                     * Creates an instance of PropertyChangeHandler that's added to
                     * the JList by installUI().  Subclasses can override this method
                     * to return a custom PropertyChangeListener, e.g.
                     * <pre>
                     * class MyListUI extends BasicListUI {
                     * protected PropertyChangeListener <b>createPropertyChangeListener</b>() {
                     * return new MyPropertyChangeListener();
                     * }
                     * public class MyPropertyChangeListener extends PropertyChangeHandler {
                     * public void propertyChange(PropertyChangeEvent e) {
                     * if (e.getPropertyName().equals("model")) {
                     * // do some extra work when the model changes
                     * }
                     * super.propertyChange(e);
                     * }
                     * }
                     * }
                     * </pre>
                     * @see PropertyChangeListener
                     * @see #installUI
                     */
                    // @ts-ignore
                    createPropertyChangeListener(): java.beans.PropertyChangeListener
                }
            }
        }
    }
}
