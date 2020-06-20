declare namespace javax {
    namespace swing {
        /**
         * A component that displays a list of objects and allows the user to select
         * one or more items. A separate model, {@code ListModel}, maintains the
         * contents of the list.
         * <p>
         * It's easy to display an array or Vector of objects, using the {@code JList}
         * constructor that automatically builds a read-only {@code ListModel} instance
         * for you:
         * <pre>
         * {@code
         * // Create a JList that displays strings from an array
         * String[] data = {"one", "two", "three", "four"};
         * JList<String> myList = new JList<String>(data);
         * // Create a JList that displays the superclasses of JList.class, by
         * // creating it with a Vector populated with this data
         * Vector<Class<?>> superClasses = new Vector<Class<?>>();
         * Class<JList> rootClass = javax.swing.JList.class;
         * for(Class<?> cls = rootClass; cls != null; cls = cls.getSuperclass()) {
         * superClasses.addElement(cls);
         * }
         * JList<Class<?>> myList = new JList<Class<?>>(superClasses);
         * // The automatically created model is stored in JList's "model"
         * // property, which you can retrieve
         * ListModel<Class<?>> model = myList.getModel();
         * for(int i = 0; i < model.getSize(); i++) {
         * System.out.println(model.getElementAt(i));
         * }
         * }
         * </pre>
         * <p>
         * A {@code ListModel} can be supplied directly to a {@code JList} by way of a
         * constructor or the {@code setModel} method. The contents need not be static -
         * the number of items, and the values of items can change over time. A correct
         * {@code ListModel} implementation notifies the set of
         * {@code javax.swing.event.ListDataListener}s that have been added to it, each
         * time a change occurs. These changes are characterized by a
         * {@code javax.swing.event.ListDataEvent}, which identifies the range of list
         * indices that have been modified, added, or removed. {@code JList}'s
         * {@code ListUI} is responsible for keeping the visual representation up to
         * date with changes, by listening to the model.
         * <p>
         * Simple, dynamic-content, {@code JList} applications can use the
         * {@code DefaultListModel} class to maintain list elements. This class
         * implements the {@code ListModel} interface and also provides a
         * <code>java.util.Vector</code>-like API. Applications that need a more
         * custom <code>ListModel</code> implementation may instead wish to subclass
         * {@code AbstractListModel}, which provides basic support for managing and
         * notifying listeners. For example, a read-only implementation of
         * {@code AbstractListModel}:
         * <pre>
         * {@code
         * // This list model has about 2^16 elements.  Enjoy scrolling.
         * ListModel<String> bigData = new AbstractListModel<String>() {
         * public int getSize() { return Short.MAX_VALUE; }
         * public String getElementAt(int index) { return "Index " + index; }
         * };
         * }
         * </pre>
         * <p>
         * The selection state of a {@code JList} is managed by another separate
         * model, an instance of {@code ListSelectionModel}. {@code JList} is
         * initialized with a selection model on construction, and also contains
         * methods to query or set this selection model. Additionally, {@code JList}
         * provides convenient methods for easily managing the selection. These methods,
         * such as {@code setSelectedIndex} and {@code getSelectedValue}, are cover
         * methods that take care of the details of interacting with the selection
         * model. By default, {@code JList}'s selection model is configured to allow any
         * combination of items to be selected at a time; selection mode
         * {@code MULTIPLE_INTERVAL_SELECTION}. The selection mode can be changed
         * on the selection model directly, or via {@code JList}'s cover method.
         * Responsibility for updating the selection model in response to user gestures
         * lies with the list's {@code ListUI}.
         * <p>
         * A correct {@code ListSelectionModel} implementation notifies the set of
         * {@code javax.swing.event.ListSelectionListener}s that have been added to it
         * each time a change to the selection occurs. These changes are characterized
         * by a {@code javax.swing.event.ListSelectionEvent}, which identifies the range
         * of the selection change.
         * <p>
         * The preferred way to listen for changes in list selection is to add
         * {@code ListSelectionListener}s directly to the {@code JList}. {@code JList}
         * then takes care of listening to the the selection model and notifying your
         * listeners of change.
         * <p>
         * Responsibility for listening to selection changes in order to keep the list's
         * visual representation up to date lies with the list's {@code ListUI}.
         * <p>
         * <a name="renderer"></a>
         * Painting of cells in a {@code JList} is handled by a delegate called a
         * cell renderer, installed on the list as the {@code cellRenderer} property.
         * The renderer provides a {@code java.awt.Component} that is used
         * like a "rubber stamp" to paint the cells. Each time a cell needs to be
         * painted, the list's {@code ListUI} asks the cell renderer for the component,
         * moves it into place, and has it paint the contents of the cell by way of its
         * {@code paint} method. A default cell renderer, which uses a {@code JLabel}
         * component to render, is installed by the lists's {@code ListUI}. You can
         * substitute your own renderer using code like this:
         * <pre>
         * {@code
         * // Display an icon and a string for each object in the list.
         * class MyCellRenderer extends JLabel implements ListCellRenderer<Object> {
         * final static ImageIcon longIcon = new ImageIcon("long.gif");
         * final static ImageIcon shortIcon = new ImageIcon("short.gif");
         * // This is the only method defined by ListCellRenderer.
         * // We just reconfigure the JLabel each time we're called.
         * public Component getListCellRendererComponent(
         * JList<?> list,           // the list
         * Object value,            // value to display
         * int index,               // cell index
         * boolean isSelected,      // is the cell selected
         * boolean cellHasFocus)    // does the cell have focus
         * {
         * String s = value.toString();
         * setText(s);
         * setIcon((s.length() > 10) ? longIcon : shortIcon);
         * if (isSelected) {
         * setBackground(list.getSelectionBackground());
         * setForeground(list.getSelectionForeground());
         * } else {
         * setBackground(list.getBackground());
         * setForeground(list.getForeground());
         * }
         * setEnabled(list.isEnabled());
         * setFont(list.getFont());
         * setOpaque(true);
         * return this;
         * }
         * }
         * myList.setCellRenderer(new MyCellRenderer());
         * }
         * </pre>
         * <p>
         * Another job for the cell renderer is in helping to determine sizing
         * information for the list. By default, the list's {@code ListUI} determines
         * the size of cells by asking the cell renderer for its preferred
         * size for each list item. This can be expensive for large lists of items.
         * To avoid these calculations, you can set a {@code fixedCellWidth} and
         * {@code fixedCellHeight} on the list, or have these values calculated
         * automatically based on a single prototype value:
         * <a name="prototype_example"></a>
         * <pre>
         * {@code
         * JList<String> bigDataList = new JList<String>(bigData);
         * // We don't want the JList implementation to compute the width
         * // or height of all of the list cells, so we give it a string
         * // that's as big as we'll need for any cell.  It uses this to
         * // compute values for the fixedCellWidth and fixedCellHeight
         * // properties.
         * bigDataList.setPrototypeCellValue("Index 1234567890");
         * }
         * </pre>
         * <p>
         * {@code JList} doesn't implement scrolling directly. To create a list that
         * scrolls, make it the viewport view of a {@code JScrollPane}. For example:
         * <pre>
         * JScrollPane scrollPane = new JScrollPane(myList);
         * // Or in two steps:
         * JScrollPane scrollPane = new JScrollPane();
         * scrollPane.getViewport().setView(myList);
         * </pre>
         * <p>
         * {@code JList} doesn't provide any special handling of double or triple
         * (or N) mouse clicks, but it's easy to add a {@code MouseListener} if you
         * wish to take action on these events. Use the {@code locationToIndex}
         * method to determine what cell was clicked. For example:
         * <pre>
         * MouseListener mouseListener = new MouseAdapter() {
         * public void mouseClicked(MouseEvent e) {
         * if (e.getClickCount() == 2) {
         * int index = list.locationToIndex(e.getPoint());
         * System.out.println("Double clicked on Item " + index);
         * }
         * }
         * };
         * list.addMouseListener(mouseListener);
         * </pre>
         * <p>
         * <strong>Warning:</strong> Swing is not thread safe. For more
         * information see <a
         * href="package-summary.html#threading">Swing's Threading
         * Policy</a>.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * <p>
         * See <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/list.html">How to Use Lists</a>
         * in <a href="https://docs.oracle.com/javase/tutorial/"><em>The Java Tutorial</em></a>
         * for further documentation.
         * <p>
         * @see ListModel
         * @see AbstractListModel
         * @see DefaultListModel
         * @see ListSelectionModel
         * @see DefaultListSelectionModel
         * @see ListCellRenderer
         * @see DefaultListCellRenderer
         * @param <E> the type of the elements of this list
         * @beaninfo attribute: isContainer false
         *  description: A component which allows for the selection of one or more objects from a list.
         * @author Hans Muller
         */
        // @ts-ignore
        class JList<E> extends javax.swing.JComponent implements javax.swing.Scrollable, javax.accessibility.Accessible {
            /**
             * Constructs a {@code JList} that displays elements from the specified,
             * {@code non-null}, model. All {@code JList} constructors delegate to
             * this one.
             * <p>
             * This constructor registers the list with the {@code ToolTipManager},
             * allowing for tooltips to be provided by the cell renderers.
             * @param dataModel the model for the list
             * @exception IllegalArgumentException if the model is {#code null}
             */
            // @ts-ignore
            constructor(dataModel: javax.swing.ListModel<E>)
            /**
             * Constructs a <code>JList</code> that displays the elements in
             * the specified array. This constructor creates a read-only model
             * for the given array, and then delegates to the constructor that
             * takes a {@code ListModel}.
             * <p>
             * Attempts to pass a {@code null} value to this method results in
             * undefined behavior and, most likely, exceptions. The created model
             * references the given array directly. Attempts to modify the array
             * after constructing the list results in undefined behavior.
             * @param listData  the array of Objects to be loaded into the data model,
             *                    {#code non-null}
             */
            // @ts-ignore
            constructor(listData: E[])
            /**
             * Constructs a <code>JList</code> that displays the elements in
             * the specified <code>Vector</code>. This constructor creates a read-only
             * model for the given {@code Vector}, and then delegates to the constructor
             * that takes a {@code ListModel}.
             * <p>
             * Attempts to pass a {@code null} value to this method results in
             * undefined behavior and, most likely, exceptions. The created model
             * references the given {@code Vector} directly. Attempts to modify the
             * {@code Vector} after constructing the list results in undefined behavior.
             * @param listData  the <code>Vector</code> to be loaded into the
             *                    data model, {#code non-null}
             */
            // @ts-ignore
            constructor(listData: java.util.Vector<E>)
            /**
             * Constructs a <code>JList</code> with an empty, read-only, model.
             */
            // @ts-ignore
            constructor()
            /**
             * Indicates a vertical layout of cells, in a single column;
             * the default layout.
             * @see #setLayoutOrientation
             * @since 1.4
             */
            // @ts-ignore
            readonly VERTICAL: number /*int*/
            /**
             * Indicates a "newspaper style" layout with cells flowing vertically
             * then horizontally.
             * @see #setLayoutOrientation
             * @since 1.4
             */
            // @ts-ignore
            readonly VERTICAL_WRAP: number /*int*/
            /**
             * Indicates a "newspaper style" layout with cells flowing horizontally
             * then vertically.
             * @see #setLayoutOrientation
             * @since 1.4
             */
            // @ts-ignore
            readonly HORIZONTAL_WRAP: number /*int*/
            /**
             * Returns the {@code ListUI}, the look and feel object that
             * renders this component.
             * @return the <code>ListUI</code> object that renders this component
             */
            // @ts-ignore
            getUI(): javax.swing.plaf.ListUI
            /**
             * Sets the {@code ListUI}, the look and feel object that
             * renders this component.
             * @param ui  the <code>ListUI</code> object
             * @see UIDefaults#getUI
             * @beaninfo bound: true
             *        hidden: true
             *     attribute: visualUpdate true
             *   description: The UI object that implements the Component's LookAndFeel.
             */
            // @ts-ignore
            setUI(ui: javax.swing.plaf.ListUI): void
            /**
             * Resets the {@code ListUI} property by setting it to the value provided
             * by the current look and feel. If the current cell renderer was installed
             * by the developer (rather than the look and feel itself), this also causes
             * the cell renderer and its children to be updated, by calling
             * {@code SwingUtilities.updateComponentTreeUI} on it.
             * @see UIManager#getUI
             * @see SwingUtilities#updateComponentTreeUI
             */
            // @ts-ignore
            updateUI(): void
            /**
             * Returns {@code "ListUI"}, the <code>UIDefaults</code> key used to look
             * up the name of the {@code javax.swing.plaf.ListUI} class that defines
             * the look and feel for this component.
             * @return the string "ListUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             */
            // @ts-ignore
            getUIClassID(): java.lang.String
            /**
             * Returns the "prototypical" cell value -- a value used to calculate a
             * fixed width and height for cells. This can be {@code null} if there
             * is no such value.
             * @return the value of the {#code prototypeCellValue} property
             * @see #setPrototypeCellValue
             */
            // @ts-ignore
            getPrototypeCellValue(): E
            /**
             * Sets the {@code prototypeCellValue} property, and then (if the new value
             * is {@code non-null}), computes the {@code fixedCellWidth} and
             * {@code fixedCellHeight} properties by requesting the cell renderer
             * component for the given value (and index 0) from the cell renderer, and
             * using that component's preferred size.
             * <p>
             * This method is useful when the list is too long to allow the
             * {@code ListUI} to compute the width/height of each cell, and there is a
             * single cell value that is known to occupy as much space as any of the
             * others, a so-called prototype.
             * <p>
             * While all three of the {@code prototypeCellValue},
             * {@code fixedCellHeight}, and {@code fixedCellWidth} properties may be
             * modified by this method, {@code PropertyChangeEvent} notifications are
             * only sent when the {@code prototypeCellValue} property changes.
             * <p>
             * To see an example which sets this property, see the
             * <a href="#prototype_example">class description</a> above.
             * <p>
             * The default value of this property is <code>null</code>.
             * <p>
             * This is a JavaBeans bound property.
             * @param prototypeCellValue  the value on which to base
             *                           <code>fixedCellWidth</code> and
             *                           <code>fixedCellHeight</code>
             * @see #getPrototypeCellValue
             * @see #setFixedCellWidth
             * @see #setFixedCellHeight
             * @see JComponent#addPropertyChangeListener
             * @beaninfo bound: true
             *    attribute: visualUpdate true
             *  description: The cell prototype value, used to compute cell width and height.
             */
            // @ts-ignore
            setPrototypeCellValue(prototypeCellValue: E): void
            /**
             * Returns the value of the {@code fixedCellWidth} property.
             * @return the fixed cell width
             * @see #setFixedCellWidth
             */
            // @ts-ignore
            getFixedCellWidth(): int
            /**
             * Sets a fixed value to be used for the width of every cell in the list.
             * If {@code width} is -1, cell widths are computed in the {@code ListUI}
             * by applying <code>getPreferredSize</code> to the cell renderer component
             * for each list element.
             * <p>
             * The default value of this property is {@code -1}.
             * <p>
             * This is a JavaBeans bound property.
             * @param width the width to be used for all cells in the list
             * @see #setPrototypeCellValue
             * @see #setFixedCellWidth
             * @see JComponent#addPropertyChangeListener
             * @beaninfo bound: true
             *    attribute: visualUpdate true
             *  description: Defines a fixed cell width when greater than zero.
             */
            // @ts-ignore
            setFixedCellWidth(width: number /*int*/): void
            /**
             * Returns the value of the {@code fixedCellHeight} property.
             * @return the fixed cell height
             * @see #setFixedCellHeight
             */
            // @ts-ignore
            getFixedCellHeight(): int
            /**
             * Sets a fixed value to be used for the height of every cell in the list.
             * If {@code height} is -1, cell heights are computed in the {@code ListUI}
             * by applying <code>getPreferredSize</code> to the cell renderer component
             * for each list element.
             * <p>
             * The default value of this property is {@code -1}.
             * <p>
             * This is a JavaBeans bound property.
             * @param height the height to be used for for all cells in the list
             * @see #setPrototypeCellValue
             * @see #setFixedCellWidth
             * @see JComponent#addPropertyChangeListener
             * @beaninfo bound: true
             *    attribute: visualUpdate true
             *  description: Defines a fixed cell height when greater than zero.
             */
            // @ts-ignore
            setFixedCellHeight(height: number /*int*/): void
            /**
             * Returns the object responsible for painting list items.
             * @return the value of the {#code cellRenderer} property
             * @see #setCellRenderer
             */
            // @ts-ignore
            getCellRenderer(): javax.swing.ListCellRenderer<? super E>
            /**
             * Sets the delegate that is used to paint each cell in the list.
             * The job of a cell renderer is discussed in detail in the
             * <a href="#renderer">class level documentation</a>.
             * <p>
             * If the {@code prototypeCellValue} property is {@code non-null},
             * setting the cell renderer also causes the {@code fixedCellWidth} and
             * {@code fixedCellHeight} properties to be re-calculated. Only one
             * <code>PropertyChangeEvent</code> is generated however -
             * for the <code>cellRenderer</code> property.
             * <p>
             * The default value of this property is provided by the {@code ListUI}
             * delegate, i.e. by the look and feel implementation.
             * <p>
             * This is a JavaBeans bound property.
             * @param cellRenderer the <code>ListCellRenderer</code>
             *                           that paints list cells
             * @see #getCellRenderer
             * @beaninfo bound: true
             *    attribute: visualUpdate true
             *  description: The component used to draw the cells.
             */
            // @ts-ignore
            setCellRenderer(cellRenderer: javax.swing.ListCellRenderer<any super E>): void
            /**
             * Returns the color used to draw the foreground of selected items.
             * {@code DefaultListCellRenderer} uses this color to draw the foreground
             * of items in the selected state, as do the renderers installed by most
             * {@code ListUI} implementations.
             * @return the color to draw the foreground of selected items
             * @see #setSelectionForeground
             * @see DefaultListCellRenderer
             */
            // @ts-ignore
            getSelectionForeground(): java.awt.Color
            /**
             * Sets the color used to draw the foreground of selected items, which
             * cell renderers can use to render text and graphics.
             * {@code DefaultListCellRenderer} uses this color to draw the foreground
             * of items in the selected state, as do the renderers installed by most
             * {@code ListUI} implementations.
             * <p>
             * The default value of this property is defined by the look and feel
             * implementation.
             * <p>
             * This is a JavaBeans bound property.
             * @param selectionForeground  the {#code Color} to use in the foreground
             *                              for selected list items
             * @see #getSelectionForeground
             * @see #setSelectionBackground
             * @see #setForeground
             * @see #setBackground
             * @see #setFont
             * @see DefaultListCellRenderer
             * @beaninfo bound: true
             *    attribute: visualUpdate true
             *  description: The foreground color of selected cells.
             */
            // @ts-ignore
            setSelectionForeground(selectionForeground: java.awt.Color): void
            /**
             * Returns the color used to draw the background of selected items.
             * {@code DefaultListCellRenderer} uses this color to draw the background
             * of items in the selected state, as do the renderers installed by most
             * {@code ListUI} implementations.
             * @return the color to draw the background of selected items
             * @see #setSelectionBackground
             * @see DefaultListCellRenderer
             */
            // @ts-ignore
            getSelectionBackground(): java.awt.Color
            /**
             * Sets the color used to draw the background of selected items, which
             * cell renderers can use fill selected cells.
             * {@code DefaultListCellRenderer} uses this color to fill the background
             * of items in the selected state, as do the renderers installed by most
             * {@code ListUI} implementations.
             * <p>
             * The default value of this property is defined by the look
             * and feel implementation.
             * <p>
             * This is a JavaBeans bound property.
             * @param selectionBackground  the {#code Color} to use for the
             *                              background of selected cells
             * @see #getSelectionBackground
             * @see #setSelectionForeground
             * @see #setForeground
             * @see #setBackground
             * @see #setFont
             * @see DefaultListCellRenderer
             * @beaninfo bound: true
             *    attribute: visualUpdate true
             *  description: The background color of selected cells.
             */
            // @ts-ignore
            setSelectionBackground(selectionBackground: java.awt.Color): void
            /**
             * Returns the value of the {@code visibleRowCount} property. See the
             * documentation for {@link #setVisibleRowCount} for details on how to
             * interpret this value.
             * @return the value of the {#code visibleRowCount} property.
             * @see #setVisibleRowCount
             */
            // @ts-ignore
            getVisibleRowCount(): int
            /**
             * Sets the {@code visibleRowCount} property, which has different meanings
             * depending on the layout orientation: For a {@code VERTICAL} layout
             * orientation, this sets the preferred number of rows to display without
             * requiring scrolling; for other orientations, it affects the wrapping of
             * cells.
             * <p>
             * In {@code VERTICAL} orientation:<br>
             * Setting this property affects the return value of the
             * {@link #getPreferredScrollableViewportSize} method, which is used to
             * calculate the preferred size of an enclosing viewport. See that method's
             * documentation for more details.
             * <p>
             * In {@code HORIZONTAL_WRAP} and {@code VERTICAL_WRAP} orientations:<br>
             * This affects how cells are wrapped. See the documentation of
             * {@link #setLayoutOrientation} for more details.
             * <p>
             * The default value of this property is {@code 8}.
             * <p>
             * Calling this method with a negative value results in the property
             * being set to {@code 0}.
             * <p>
             * This is a JavaBeans bound property.
             * @param visibleRowCount  an integer specifying the preferred number of
             *                          rows to display without requiring scrolling
             * @see #getVisibleRowCount
             * @see #getPreferredScrollableViewportSize
             * @see #setLayoutOrientation
             * @see JComponent#getVisibleRect
             * @see JViewport
             * @beaninfo bound: true
             *    attribute: visualUpdate true
             *  description: The preferred number of rows to display without
             *               requiring scrolling
             */
            // @ts-ignore
            setVisibleRowCount(visibleRowCount: number /*int*/): void
            /**
             * Returns the layout orientation property for the list: {@code VERTICAL}
             * if the layout is a single column of cells, {@code VERTICAL_WRAP} if the
             * layout is "newspaper style" with the content flowing vertically then
             * horizontally, or {@code HORIZONTAL_WRAP} if the layout is "newspaper
             * style" with the content flowing horizontally then vertically.
             * @return the value of the {#code layoutOrientation} property
             * @see #setLayoutOrientation
             * @since 1.4
             */
            // @ts-ignore
            getLayoutOrientation(): int
            /**
             * Defines the way list cells are layed out. Consider a {@code JList}
             * with five cells. Cells can be layed out in one of the following ways:
             * <pre>
             * VERTICAL:          0
             * 1
             * 2
             * 3
             * 4
             * HORIZONTAL_WRAP:   0  1  2
             * 3  4
             * VERTICAL_WRAP:     0  3
             * 1  4
             * 2
             * </pre>
             * <p>
             * A description of these layouts follows:
             * <table border="1"
             * summary="Describes layouts VERTICAL, HORIZONTAL_WRAP, and VERTICAL_WRAP">
             * <tr><th><p style="text-align:left">Value</p></th><th><p style="text-align:left">Description</p></th></tr>
             * <tr><td><code>VERTICAL</code>
             * <td>Cells are layed out vertically in a single column.
             * <tr><td><code>HORIZONTAL_WRAP</code>
             * <td>Cells are layed out horizontally, wrapping to a new row as
             * necessary. If the {@code visibleRowCount} property is less than
             * or equal to zero, wrapping is determined by the width of the
             * list; otherwise wrapping is done in such a way as to ensure
             * {@code visibleRowCount} rows in the list.
             * <tr><td><code>VERTICAL_WRAP</code>
             * <td>Cells are layed out vertically, wrapping to a new column as
             * necessary. If the {@code visibleRowCount} property is less than
             * or equal to zero, wrapping is determined by the height of the
             * list; otherwise wrapping is done at {@code visibleRowCount} rows.
             * </table>
             * <p>
             * The default value of this property is <code>VERTICAL</code>.
             * @param layoutOrientation the new layout orientation, one of:
             *         {#code VERTICAL}, {@code HORIZONTAL_WRAP} or {@code VERTICAL_WRAP}
             * @see #getLayoutOrientation
             * @see #setVisibleRowCount
             * @see #getScrollableTracksViewportHeight
             * @see #getScrollableTracksViewportWidth
             * @throws IllegalArgumentException if {#code layoutOrientation} isn't one of the
             *          allowable values
             * @since 1.4
             * @beaninfo bound: true
             *    attribute: visualUpdate true
             *  description: Defines the way list cells are layed out.
             *         enum: VERTICAL JList.VERTICAL
             *               HORIZONTAL_WRAP JList.HORIZONTAL_WRAP
             *               VERTICAL_WRAP JList.VERTICAL_WRAP
             */
            // @ts-ignore
            setLayoutOrientation(layoutOrientation: number /*int*/): void
            /**
             * Returns the smallest list index that is currently visible.
             * In a left-to-right {@code componentOrientation}, the first visible
             * cell is found closest to the list's upper-left corner. In right-to-left
             * orientation, it is found closest to the upper-right corner.
             * If nothing is visible or the list is empty, {@code -1} is returned.
             * Note that the returned cell may only be partially visible.
             * @return the index of the first visible cell
             * @see #getLastVisibleIndex
             * @see JComponent#getVisibleRect
             */
            // @ts-ignore
            getFirstVisibleIndex(): int
            /**
             * Returns the largest list index that is currently visible.
             * If nothing is visible or the list is empty, {@code -1} is returned.
             * Note that the returned cell may only be partially visible.
             * @return the index of the last visible cell
             * @see #getFirstVisibleIndex
             * @see JComponent#getVisibleRect
             */
            // @ts-ignore
            getLastVisibleIndex(): int
            /**
             * Scrolls the list within an enclosing viewport to make the specified
             * cell completely visible. This calls {@code scrollRectToVisible} with
             * the bounds of the specified cell. For this method to work, the
             * {@code JList} must be within a <code>JViewport</code>.
             * <p>
             * If the given index is outside the list's range of cells, this method
             * results in nothing.
             * @param index  the index of the cell to make visible
             * @see JComponent#scrollRectToVisible
             * @see #getVisibleRect
             */
            // @ts-ignore
            ensureIndexIsVisible(index: number /*int*/): void
            /**
             * Turns on or off automatic drag handling. In order to enable automatic
             * drag handling, this property should be set to {@code true}, and the
             * list's {@code TransferHandler} needs to be {@code non-null}.
             * The default value of the {@code dragEnabled} property is {@code false}.
             * <p>
             * The job of honoring this property, and recognizing a user drag gesture,
             * lies with the look and feel implementation, and in particular, the list's
             * {@code ListUI}. When automatic drag handling is enabled, most look and
             * feels (including those that subclass {@code BasicLookAndFeel}) begin a
             * drag and drop operation whenever the user presses the mouse button over
             * an item and then moves the mouse a few pixels. Setting this property to
             * {@code true} can therefore have a subtle effect on how selections behave.
             * <p>
             * If a look and feel is used that ignores this property, you can still
             * begin a drag and drop operation by calling {@code exportAsDrag} on the
             * list's {@code TransferHandler}.
             * @param b whether or not to enable automatic drag handling
             * @exception HeadlessException if
             *             <code>b</code> is <code>true</code> and
             *             <code>GraphicsEnvironment.isHeadless()</code>
             *             returns <code>true</code>
             * @see java.awt.GraphicsEnvironment#isHeadless
             * @see #getDragEnabled
             * @see #setTransferHandler
             * @see TransferHandler
             * @since 1.4
             * @beaninfo description: determines whether automatic drag handling is enabled
             *         bound: false
             */
            // @ts-ignore
            setDragEnabled(b: boolean): void
            /**
             * Returns whether or not automatic drag handling is enabled.
             * @return the value of the {#code dragEnabled} property
             * @see #setDragEnabled
             * @since 1.4
             */
            // @ts-ignore
            getDragEnabled(): boolean
            /**
             * Sets the drop mode for this component. For backward compatibility,
             * the default for this property is <code>DropMode.USE_SELECTION</code>.
             * Usage of one of the other modes is recommended, however, for an
             * improved user experience. <code>DropMode.ON</code>, for instance,
             * offers similar behavior of showing items as selected, but does so without
             * affecting the actual selection in the list.
             * <p>
             * <code>JList</code> supports the following drop modes:
             * <ul>
             * <li><code>DropMode.USE_SELECTION</code></li>
             * <li><code>DropMode.ON</code></li>
             * <li><code>DropMode.INSERT</code></li>
             * <li><code>DropMode.ON_OR_INSERT</code></li>
             * </ul>
             * The drop mode is only meaningful if this component has a
             * <code>TransferHandler</code> that accepts drops.
             * @param dropMode the drop mode to use
             * @throws IllegalArgumentException if the drop mode is unsupported
             *          or <code>null</code>
             * @see #getDropMode
             * @see #getDropLocation
             * @see #setTransferHandler
             * @see TransferHandler
             * @since 1.6
             */
            // @ts-ignore
            setDropMode(dropMode: javax.swing.DropMode): void
            /**
             * Returns the drop mode for this component.
             * @return the drop mode for this component
             * @see #setDropMode
             * @since 1.6
             */
            // @ts-ignore
            getDropMode(): javax.swing.DropMode
            /**
             * Returns the location that this component should visually indicate
             * as the drop location during a DnD operation over the component,
             * or {@code null} if no location is to currently be shown.
             * <p>
             * This method is not meant for querying the drop location
             * from a {@code TransferHandler}, as the drop location is only
             * set after the {@code TransferHandler}'s <code>canImport</code>
             * has returned and has allowed for the location to be shown.
             * <p>
             * When this property changes, a property change event with
             * name "dropLocation" is fired by the component.
             * <p>
             * By default, responsibility for listening for changes to this property
             * and indicating the drop location visually lies with the list's
             * {@code ListUI}, which may paint it directly and/or install a cell
             * renderer to do so. Developers wishing to implement custom drop location
             * painting and/or replace the default cell renderer, may need to honor
             * this property.
             * @return the drop location
             * @see #setDropMode
             * @see TransferHandler#canImport(TransferHandler.TransferSupport)
             * @since 1.6
             */
            // @ts-ignore
            getDropLocation(): javax.swing.JList.DropLocation
            /**
             * Returns the next list element whose {@code toString} value
             * starts with the given prefix.
             * @param prefix the string to test for a match
             * @param startIndex the index for starting the search
             * @param bias the search direction, either
             *  Position.Bias.Forward or Position.Bias.Backward.
             * @return the index of the next list element that
             *  starts with the prefix; otherwise {#code -1}
             * @exception IllegalArgumentException if prefix is {#code null}
             *  or startIndex is out of bounds
             * @since 1.4
             */
            // @ts-ignore
            getNextMatch(prefix: string, startIndex: number /*int*/, bias: javax.swing.text.Position.Bias): int
            /**
             * Returns the tooltip text to be used for the given event. This overrides
             * {@code JComponent}'s {@code getToolTipText} to first check the cell
             * renderer component for the cell over which the event occurred, returning
             * its tooltip text, if any. This implementation allows you to specify
             * tooltip text on the cell level, by using {@code setToolTipText} on your
             * cell renderer component.
             * <p>
             * <strong>Note:</strong> For <code>JList</code> to properly display the
             * tooltips of its renderers in this manner, <code>JList</code> must be a
             * registered component with the <code>ToolTipManager</code>. This registration
             * is done automatically in the constructor. However, if at a later point
             * <code>JList</code> is unregistered, by way of a call to
             * {@code setToolTipText(null)}, tips from the renderers will no longer display.
             * @param event the {#code MouseEvent} to fetch the tooltip text for
             * @see JComponent#setToolTipText
             * @see JComponent#getToolTipText
             */
            // @ts-ignore
            getToolTipText(event: java.awt.event.MouseEvent): java.lang.String
            /**
             * Returns the cell index closest to the given location in the list's
             * coordinate system. To determine if the cell actually contains the
             * specified location, compare the point against the cell's bounds,
             * as provided by {@code getCellBounds}. This method returns {@code -1}
             * if the model is empty
             * <p>
             * This is a cover method that delegates to the method of the same name
             * in the list's {@code ListUI}. It returns {@code -1} if the list has
             * no {@code ListUI}.
             * @param location the coordinates of the point
             * @return the cell index closest to the given location, or {#code -1}
             */
            // @ts-ignore
            locationToIndex(location: java.awt.Point): int
            /**
             * Returns the origin of the specified item in the list's coordinate
             * system. This method returns {@code null} if the index isn't valid.
             * <p>
             * This is a cover method that delegates to the method of the same name
             * in the list's {@code ListUI}. It returns {@code null} if the list has
             * no {@code ListUI}.
             * @param index the cell index
             * @return the origin of the cell, or {#code null}
             */
            // @ts-ignore
            indexToLocation(index: number /*int*/): java.awt.Point
            /**
             * Returns the bounding rectangle, in the list's coordinate system,
             * for the range of cells specified by the two indices.
             * These indices can be supplied in any order.
             * <p>
             * If the smaller index is outside the list's range of cells, this method
             * returns {@code null}. If the smaller index is valid, but the larger
             * index is outside the list's range, the bounds of just the first index
             * is returned. Otherwise, the bounds of the valid range is returned.
             * <p>
             * This is a cover method that delegates to the method of the same name
             * in the list's {@code ListUI}. It returns {@code null} if the list has
             * no {@code ListUI}.
             * @param index0 the first index in the range
             * @param index1 the second index in the range
             * @return the bounding rectangle for the range of cells, or {#code null}
             */
            // @ts-ignore
            getCellBounds(index0: number /*int*/, index1: number /*int*/): java.awt.Rectangle
            /**
             * Returns the data model that holds the list of items displayed
             * by the <code>JList</code> component.
             * @return the <code>ListModel</code> that provides the displayed
             *                           list of items
             * @see #setModel
             */
            // @ts-ignore
            getModel(): javax.swing.ListModel<E>
            /**
             * Sets the model that represents the contents or "value" of the
             * list, notifies property change listeners, and then clears the
             * list's selection.
             * <p>
             * This is a JavaBeans bound property.
             * @param model  the <code>ListModel</code> that provides the
             *                                           list of items for display
             * @exception IllegalArgumentException  if <code>model</code> is
             *                                           <code>null</code>
             * @see #getModel
             * @see #clearSelection
             * @beaninfo bound: true
             *    attribute: visualUpdate true
             *  description: The object that contains the data to be drawn by this JList.
             */
            // @ts-ignore
            setModel(model: javax.swing.ListModel<E>): void
            /**
             * Constructs a read-only <code>ListModel</code> from an array of items,
             * and calls {@code setModel} with this model.
             * <p>
             * Attempts to pass a {@code null} value to this method results in
             * undefined behavior and, most likely, exceptions. The created model
             * references the given array directly. Attempts to modify the array
             * after invoking this method results in undefined behavior.
             * @param listData an array of {#code E} containing the items to
             *         display in the list
             * @see #setModel
             */
            // @ts-ignore
            setListData(listData: E[]): void
            /**
             * Constructs a read-only <code>ListModel</code> from a <code>Vector</code>
             * and calls {@code setModel} with this model.
             * <p>
             * Attempts to pass a {@code null} value to this method results in
             * undefined behavior and, most likely, exceptions. The created model
             * references the given {@code Vector} directly. Attempts to modify the
             * {@code Vector} after invoking this method results in undefined behavior.
             * @param listData a <code>Vector</code> containing the items to
             *                                           display in the list
             * @see #setModel
             */
            // @ts-ignore
            setListData(listData: java.util.Vector<E>): void
            /**
             * Returns an instance of {@code DefaultListSelectionModel}; called
             * during construction to initialize the list's selection model
             * property.
             * @return a {#code DefaultListSelecitonModel}, used to initialize
             *          the list's selection model property during construction
             * @see #setSelectionModel
             * @see DefaultListSelectionModel
             */
            // @ts-ignore
            createSelectionModel(): javax.swing.ListSelectionModel
            /**
             * Returns the current selection model. The selection model maintains the
             * selection state of the list. See the class level documentation for more
             * details.
             * @return the <code>ListSelectionModel</code> that maintains the
             *          list's selections
             * @see #setSelectionModel
             * @see ListSelectionModel
             */
            // @ts-ignore
            getSelectionModel(): javax.swing.ListSelectionModel
            /**
             * Notifies {@code ListSelectionListener}s added directly to the list
             * of selection changes made to the selection model. {@code JList}
             * listens for changes made to the selection in the selection model,
             * and forwards notification to listeners added to the list directly,
             * by calling this method.
             * <p>
             * This method constructs a {@code ListSelectionEvent} with this list
             * as the source, and the specified arguments, and sends it to the
             * registered {@code ListSelectionListeners}.
             * @param firstIndex the first index in the range, {#code <= lastIndex}
             * @param lastIndex the last index in the range, {#code >= firstIndex}
             * @param isAdjusting whether or not this is one in a series of
             *         multiple events, where changes are still being made
             * @see #addListSelectionListener
             * @see #removeListSelectionListener
             * @see javax.swing.event.ListSelectionEvent
             * @see EventListenerList
             */
            // @ts-ignore
            fireSelectionValueChanged(firstIndex: number /*int*/, lastIndex: number /*int*/, isAdjusting: boolean): void
            /**
             * Adds a listener to the list, to be notified each time a change to the
             * selection occurs; the preferred way of listening for selection state
             * changes. {@code JList} takes care of listening for selection state
             * changes in the selection model, and notifies the given listener of
             * each change. {@code ListSelectionEvent}s sent to the listener have a
             * {@code source} property set to this list.
             * @param listener the {#code ListSelectionListener} to add
             * @see #getSelectionModel
             * @see #getListSelectionListeners
             */
            // @ts-ignore
            addListSelectionListener(listener: javax.swing.event.ListSelectionListener): void
            /**
             * Removes a selection listener from the list.
             * @param listener the {#code ListSelectionListener} to remove
             * @see #addListSelectionListener
             * @see #getSelectionModel
             */
            // @ts-ignore
            removeListSelectionListener(listener: javax.swing.event.ListSelectionListener): void
            /**
             * Returns an array of all the {@code ListSelectionListener}s added
             * to this {@code JList} by way of {@code addListSelectionListener}.
             * @return all of the {#code ListSelectionListener}s on this list, or
             *          an empty array if no listeners have been added
             * @see #addListSelectionListener
             * @since 1.4
             */
            // @ts-ignore
            getListSelectionListeners(): javax.swing.event.ListSelectionListener[]
            /**
             * Sets the <code>selectionModel</code> for the list to a
             * non-<code>null</code> <code>ListSelectionModel</code>
             * implementation. The selection model handles the task of making single
             * selections, selections of contiguous ranges, and non-contiguous
             * selections.
             * <p>
             * This is a JavaBeans bound property.
             * @param selectionModel  the <code>ListSelectionModel</code> that
             *                           implements the selections
             * @exception IllegalArgumentException   if <code>selectionModel</code>
             *                                           is <code>null</code>
             * @see #getSelectionModel
             * @beaninfo bound: true
             *  description: The selection model, recording which cells are selected.
             */
            // @ts-ignore
            setSelectionModel(selectionModel: javax.swing.ListSelectionModel): void
            /**
             * Sets the selection mode for the list. This is a cover method that sets
             * the selection mode directly on the selection model.
             * <p>
             * The following list describes the accepted selection modes:
             * <ul>
             * <li>{@code ListSelectionModel.SINGLE_SELECTION} -
             * Only one list index can be selected at a time. In this mode,
             * {@code setSelectionInterval} and {@code addSelectionInterval} are
             * equivalent, both replacing the current selection with the index
             * represented by the second argument (the "lead").
             * <li>{@code ListSelectionModel.SINGLE_INTERVAL_SELECTION} -
             * Only one contiguous interval can be selected at a time.
             * In this mode, {@code addSelectionInterval} behaves like
             * {@code setSelectionInterval} (replacing the current selection},
             * unless the given interval is immediately adjacent to or overlaps
             * the existing selection, and can be used to grow the selection.
             * <li>{@code ListSelectionModel.MULTIPLE_INTERVAL_SELECTION} -
             * In this mode, there's no restriction on what can be selected.
             * This mode is the default.
             * </ul>
             * @param selectionMode the selection mode
             * @see #getSelectionMode
             * @throws IllegalArgumentException if the selection mode isn't
             *          one of those allowed
             * @beaninfo description: The selection mode.
             *         enum: SINGLE_SELECTION            ListSelectionModel.SINGLE_SELECTION
             *               SINGLE_INTERVAL_SELECTION   ListSelectionModel.SINGLE_INTERVAL_SELECTION
             *               MULTIPLE_INTERVAL_SELECTION ListSelectionModel.MULTIPLE_INTERVAL_SELECTION
             */
            // @ts-ignore
            setSelectionMode(selectionMode: number /*int*/): void
            /**
             * Returns the current selection mode for the list. This is a cover
             * method that delegates to the method of the same name on the
             * list's selection model.
             * @return the current selection mode
             * @see #setSelectionMode
             */
            // @ts-ignore
            getSelectionMode(): int
            /**
             * Returns the anchor selection index. This is a cover method that
             * delegates to the method of the same name on the list's selection model.
             * @return the anchor selection index
             * @see ListSelectionModel#getAnchorSelectionIndex
             */
            // @ts-ignore
            getAnchorSelectionIndex(): int
            /**
             * Returns the lead selection index. This is a cover method that
             * delegates to the method of the same name on the list's selection model.
             * @return the lead selection index
             * @see ListSelectionModel#getLeadSelectionIndex
             * @beaninfo description: The lead selection index.
             */
            // @ts-ignore
            getLeadSelectionIndex(): int
            /**
             * Returns the smallest selected cell index, or {@code -1} if the selection
             * is empty. This is a cover method that delegates to the method of the same
             * name on the list's selection model.
             * @return the smallest selected cell index, or {#code -1}
             * @see ListSelectionModel#getMinSelectionIndex
             */
            // @ts-ignore
            getMinSelectionIndex(): int
            /**
             * Returns the largest selected cell index, or {@code -1} if the selection
             * is empty. This is a cover method that delegates to the method of the same
             * name on the list's selection model.
             * @return the largest selected cell index
             * @see ListSelectionModel#getMaxSelectionIndex
             */
            // @ts-ignore
            getMaxSelectionIndex(): int
            /**
             * Returns {@code true} if the specified index is selected,
             * else {@code false}. This is a cover method that delegates to the method
             * of the same name on the list's selection model.
             * @param index index to be queried for selection state
             * @return {#code true} if the specified index is selected,
             *          else {@code false}
             * @see ListSelectionModel#isSelectedIndex
             * @see #setSelectedIndex
             */
            // @ts-ignore
            isSelectedIndex(index: number /*int*/): boolean
            /**
             * Returns {@code true} if nothing is selected, else {@code false}.
             * This is a cover method that delegates to the method of the same
             * name on the list's selection model.
             * @return {#code true} if nothing is selected, else {@code false}
             * @see ListSelectionModel#isSelectionEmpty
             * @see #clearSelection
             */
            // @ts-ignore
            isSelectionEmpty(): boolean
            /**
             * Clears the selection; after calling this method, {@code isSelectionEmpty}
             * will return {@code true}. This is a cover method that delegates to the
             * method of the same name on the list's selection model.
             * @see ListSelectionModel#clearSelection
             * @see #isSelectionEmpty
             */
            // @ts-ignore
            clearSelection(): void
            /**
             * Selects the specified interval. Both {@code anchor} and {@code lead}
             * indices are included. {@code anchor} doesn't have to be less than or
             * equal to {@code lead}. This is a cover method that delegates to the
             * method of the same name on the list's selection model.
             * <p>
             * Refer to the documentation of the selection model class being used
             * for details on how values less than {@code 0} are handled.
             * @param anchor the first index to select
             * @param lead the last index to select
             * @see ListSelectionModel#setSelectionInterval
             * @see DefaultListSelectionModel#setSelectionInterval
             * @see #createSelectionModel
             * @see #addSelectionInterval
             * @see #removeSelectionInterval
             */
            // @ts-ignore
            setSelectionInterval(anchor: number /*int*/, lead: number /*int*/): void
            /**
             * Sets the selection to be the union of the specified interval with current
             * selection. Both the {@code anchor} and {@code lead} indices are
             * included. {@code anchor} doesn't have to be less than or
             * equal to {@code lead}. This is a cover method that delegates to the
             * method of the same name on the list's selection model.
             * <p>
             * Refer to the documentation of the selection model class being used
             * for details on how values less than {@code 0} are handled.
             * @param anchor the first index to add to the selection
             * @param lead the last index to add to the selection
             * @see ListSelectionModel#addSelectionInterval
             * @see DefaultListSelectionModel#addSelectionInterval
             * @see #createSelectionModel
             * @see #setSelectionInterval
             * @see #removeSelectionInterval
             */
            // @ts-ignore
            addSelectionInterval(anchor: number /*int*/, lead: number /*int*/): void
            /**
             * Sets the selection to be the set difference of the specified interval
             * and the current selection. Both the {@code index0} and {@code index1}
             * indices are removed. {@code index0} doesn't have to be less than or
             * equal to {@code index1}. This is a cover method that delegates to the
             * method of the same name on the list's selection model.
             * <p>
             * Refer to the documentation of the selection model class being used
             * for details on how values less than {@code 0} are handled.
             * @param index0 the first index to remove from the selection
             * @param index1 the last index to remove from the selection
             * @see ListSelectionModel#removeSelectionInterval
             * @see DefaultListSelectionModel#removeSelectionInterval
             * @see #createSelectionModel
             * @see #setSelectionInterval
             * @see #addSelectionInterval
             */
            // @ts-ignore
            removeSelectionInterval(index0: number /*int*/, index1: number /*int*/): void
            /**
             * Sets the selection model's {@code valueIsAdjusting} property. When
             * {@code true}, upcoming changes to selection should be considered part
             * of a single change. This property is used internally and developers
             * typically need not call this method. For example, when the model is being
             * updated in response to a user drag, the value of the property is set
             * to {@code true} when the drag is initiated and set to {@code false}
             * when the drag is finished. This allows listeners to update only
             * when a change has been finalized, rather than handling all of the
             * intermediate values.
             * <p>
             * You may want to use this directly if making a series of changes
             * that should be considered part of a single change.
             * <p>
             * This is a cover method that delegates to the method of the same name on
             * the list's selection model. See the documentation for
             * {@link javax.swing.ListSelectionModel#setValueIsAdjusting} for
             * more details.
             * @param b the new value for the property
             * @see ListSelectionModel#setValueIsAdjusting
             * @see javax.swing.event.ListSelectionEvent#getValueIsAdjusting
             * @see #getValueIsAdjusting
             */
            // @ts-ignore
            setValueIsAdjusting(b: boolean): void
            /**
             * Returns the value of the selection model's {@code isAdjusting} property.
             * <p>
             * This is a cover method that delegates to the method of the same name on
             * the list's selection model.
             * @return the value of the selection model's {#code isAdjusting} property.
             * @see #setValueIsAdjusting
             * @see ListSelectionModel#getValueIsAdjusting
             */
            // @ts-ignore
            getValueIsAdjusting(): boolean
            /**
             * Returns an array of all of the selected indices, in increasing
             * order.
             * @return all of the selected indices, in increasing order,
             *          or an empty array if nothing is selected
             * @see #removeSelectionInterval
             * @see #addListSelectionListener
             */
            // @ts-ignore
            getSelectedIndices(): int[]
            /**
             * Selects a single cell. Does nothing if the given index is greater
             * than or equal to the model size. This is a convenience method that uses
             * {@code setSelectionInterval} on the selection model. Refer to the
             * documentation for the selection model class being used for details on
             * how values less than {@code 0} are handled.
             * @param index the index of the cell to select
             * @see ListSelectionModel#setSelectionInterval
             * @see #isSelectedIndex
             * @see #addListSelectionListener
             * @beaninfo description: The index of the selected cell.
             */
            // @ts-ignore
            setSelectedIndex(index: number /*int*/): void
            /**
             * Changes the selection to be the set of indices specified by the given
             * array. Indices greater than or equal to the model size are ignored.
             * This is a convenience method that clears the selection and then uses
             * {@code addSelectionInterval} on the selection model to add the indices.
             * Refer to the documentation of the selection model class being used for
             * details on how values less than {@code 0} are handled.
             * @param indices an array of the indices of the cells to select,
             *                 {#code non-null}
             * @see ListSelectionModel#addSelectionInterval
             * @see #isSelectedIndex
             * @see #addListSelectionListener
             * @throws NullPointerException if the given array is {#code null}
             */
            // @ts-ignore
            setSelectedIndices(indices: number /*int*/[]): void
            /**
             * Returns an array of all the selected values, in increasing order based
             * on their indices in the list.
             * @return the selected values, or an empty array if nothing is selected
             * @see #isSelectedIndex
             * @see #getModel
             * @see #addListSelectionListener
             * @deprecated As of JDK 1.7, replaced by {#link #getSelectedValuesList()}
             */
            // @ts-ignore
            getSelectedValues(): java.lang.Object[]
            /**
             * Returns a list of all the selected items, in increasing order based
             * on their indices in the list.
             * @return the selected items, or an empty list if nothing is selected
             * @see #isSelectedIndex
             * @see #getModel
             * @see #addListSelectionListener
             * @since 1.7
             */
            // @ts-ignore
            getSelectedValuesList(): java.util.List<E>
            /**
             * Returns the smallest selected cell index; <i>the selection</i> when only
             * a single item is selected in the list. When multiple items are selected,
             * it is simply the smallest selected index. Returns {@code -1} if there is
             * no selection.
             * <p>
             * This method is a cover that delegates to {@code getMinSelectionIndex}.
             * @return the smallest selected cell index
             * @see #getMinSelectionIndex
             * @see #addListSelectionListener
             */
            // @ts-ignore
            getSelectedIndex(): int
            /**
             * Returns the value for the smallest selected cell index;
             * <i>the selected value</i> when only a single item is selected in the
             * list. When multiple items are selected, it is simply the value for the
             * smallest selected index. Returns {@code null} if there is no selection.
             * <p>
             * This is a convenience method that simply returns the model value for
             * {@code getMinSelectionIndex}.
             * @return the first selected value
             * @see #getMinSelectionIndex
             * @see #getModel
             * @see #addListSelectionListener
             */
            // @ts-ignore
            getSelectedValue(): E
            /**
             * Selects the specified object from the list.
             * @param anObject      the object to select
             * @param shouldScroll  {#code true} if the list should scroll to display
             *                       the selected object, if one exists; otherwise {@code false}
             */
            // @ts-ignore
            setSelectedValue(anObject: any, shouldScroll: boolean): void
            /**
             * Computes the size of viewport needed to display {@code visibleRowCount}
             * rows. The value returned by this method depends on the layout
             * orientation:
             * <p>
             * <b>{@code VERTICAL}:</b>
             * <br>
             * This is trivial if both {@code fixedCellWidth} and {@code fixedCellHeight}
             * have been set (either explicitly or by specifying a prototype cell value).
             * The width is simply the {@code fixedCellWidth} plus the list's horizontal
             * insets. The height is the {@code fixedCellHeight} multiplied by the
             * {@code visibleRowCount}, plus the list's vertical insets.
             * <p>
             * If either {@code fixedCellWidth} or {@code fixedCellHeight} haven't been
             * specified, heuristics are used. If the model is empty, the width is
             * the {@code fixedCellWidth}, if greater than {@code 0}, or a hard-coded
             * value of {@code 256}. The height is the {@code fixedCellHeight} multiplied
             * by {@code visibleRowCount}, if {@code fixedCellHeight} is greater than
             * {@code 0}, otherwise it is a hard-coded value of {@code 16} multiplied by
             * {@code visibleRowCount}.
             * <p>
             * If the model isn't empty, the width is the preferred size's width,
             * typically the width of the widest list element. The height is the
             * {@code fixedCellHeight} multiplied by the {@code visibleRowCount},
             * plus the list's vertical insets.
             * <p>
             * <b>{@code VERTICAL_WRAP} or {@code HORIZONTAL_WRAP}:</b>
             * <br>
             * This method simply returns the value from {@code getPreferredSize}.
             * The list's {@code ListUI} is expected to override {@code getPreferredSize}
             * to return an appropriate value.
             * @return a dimension containing the size of the viewport needed
             *           to display {#code visibleRowCount} rows
             * @see #getPreferredScrollableViewportSize
             * @see #setPrototypeCellValue
             */
            // @ts-ignore
            getPreferredScrollableViewportSize(): java.awt.Dimension
            /**
             * Returns the distance to scroll to expose the next or previous
             * row (for vertical scrolling) or column (for horizontal scrolling).
             * <p>
             * For horizontal scrolling, if the layout orientation is {@code VERTICAL},
             * then the list's font size is returned (or {@code 1} if the font is
             * {@code null}).
             * @param visibleRect the view area visible within the viewport
             * @param orientation {#code SwingConstants.HORIZONTAL} or
             *                     {@code SwingConstants.VERTICAL}
             * @param direction less or equal to zero to scroll up/back,
             *                   greater than zero for down/forward
             * @return the "unit" increment for scrolling in the specified direction;
             *          always positive
             * @see #getScrollableBlockIncrement
             * @see Scrollable#getScrollableUnitIncrement
             * @throws IllegalArgumentException if {#code visibleRect} is {@code null}, or
             *          {@code orientation} isn't one of {@code SwingConstants.VERTICAL} or
             *          {@code SwingConstants.HORIZONTAL}
             */
            // @ts-ignore
            getScrollableUnitIncrement(visibleRect: java.awt.Rectangle, orientation: number /*int*/, direction: number /*int*/): int
            /**
             * Returns the distance to scroll to expose the next or previous block.
             * <p>
             * For vertical scrolling, the following rules are used:
             * <ul>
             * <li>if scrolling down, returns the distance to scroll so that the last
             * visible element becomes the first completely visible element
             * <li>if scrolling up, returns the distance to scroll so that the first
             * visible element becomes the last completely visible element
             * <li>returns {@code visibleRect.height} if the list is empty
             * </ul>
             * <p>
             * For horizontal scrolling, when the layout orientation is either
             * {@code VERTICAL_WRAP} or {@code HORIZONTAL_WRAP}:
             * <ul>
             * <li>if scrolling right, returns the distance to scroll so that the
             * last visible element becomes
             * the first completely visible element
             * <li>if scrolling left, returns the distance to scroll so that the first
             * visible element becomes the last completely visible element
             * <li>returns {@code visibleRect.width} if the list is empty
             * </ul>
             * <p>
             * For horizontal scrolling and {@code VERTICAL} orientation,
             * returns {@code visibleRect.width}.
             * <p>
             * Note that the value of {@code visibleRect} must be the equal to
             * {@code this.getVisibleRect()}.
             * @param visibleRect the view area visible within the viewport
             * @param orientation {#code SwingConstants.HORIZONTAL} or
             *                     {@code SwingConstants.VERTICAL}
             * @param direction less or equal to zero to scroll up/back,
             *                   greater than zero for down/forward
             * @return the "block" increment for scrolling in the specified direction;
             *          always positive
             * @see #getScrollableUnitIncrement
             * @see Scrollable#getScrollableBlockIncrement
             * @throws IllegalArgumentException if {#code visibleRect} is {@code null}, or
             *          {@code orientation} isn't one of {@code SwingConstants.VERTICAL} or
             *          {@code SwingConstants.HORIZONTAL}
             */
            // @ts-ignore
            getScrollableBlockIncrement(visibleRect: java.awt.Rectangle, orientation: number /*int*/, direction: number /*int*/): int
            /**
             * Returns {@code true} if this {@code JList} is displayed in a
             * {@code JViewport} and the viewport is wider than the list's
             * preferred width, or if the layout orientation is {@code HORIZONTAL_WRAP}
             * and {@code visibleRowCount <= 0}; otherwise returns {@code false}.
             * <p>
             * If {@code false}, then don't track the viewport's width. This allows
             * horizontal scrolling if the {@code JViewport} is itself embedded in a
             * {@code JScrollPane}.
             * @return whether or not an enclosing viewport should force the list's
             *          width to match its own
             * @see Scrollable#getScrollableTracksViewportWidth
             */
            // @ts-ignore
            getScrollableTracksViewportWidth(): boolean
            /**
             * Returns {@code true} if this {@code JList} is displayed in a
             * {@code JViewport} and the viewport is taller than the list's
             * preferred height, or if the layout orientation is {@code VERTICAL_WRAP}
             * and {@code visibleRowCount <= 0}; otherwise returns {@code false}.
             * <p>
             * If {@code false}, then don't track the viewport's height. This allows
             * vertical scrolling if the {@code JViewport} is itself embedded in a
             * {@code JScrollPane}.
             * @return whether or not an enclosing viewport should force the list's
             *          height to match its own
             * @see Scrollable#getScrollableTracksViewportHeight
             */
            // @ts-ignore
            getScrollableTracksViewportHeight(): boolean
            /**
             * Returns a {@code String} representation of this {@code JList}.
             * This method is intended to be used only for debugging purposes,
             * and the content and format of the returned {@code String} may vary
             * between implementations. The returned {@code String} may be empty,
             * but may not be {@code null}.
             * @return a {#code String} representation of this {@code JList}.
             */
            // @ts-ignore
            paramString(): java.lang.String
            /**
             * Gets the {@code AccessibleContext} associated with this {@code JList}.
             * For {@code JList}, the {@code AccessibleContext} takes the form of an
             * {@code AccessibleJList}.
             * <p>
             * A new {@code AccessibleJList} instance is created if necessary.
             * @return an {#code AccessibleJList} that serves as the
             *          {@code AccessibleContext} of this {@code JList}
             */
            // @ts-ignore
            getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
