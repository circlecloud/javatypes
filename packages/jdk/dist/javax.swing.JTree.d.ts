declare namespace javax {
    namespace swing {
        /**
         * <a name="jtree_description"></a>
         * A control that displays a set of hierarchical data as an outline.
         * You can find task-oriented documentation and examples of using trees in
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/components/tree.html">How to Use Trees</a>,
         * a section in <em>The Java Tutorial.</em>
         * <p>
         * A specific node in a tree can be identified either by a
         * <code>TreePath</code> (an object
         * that encapsulates a node and all of its ancestors), or by its
         * display row, where each row in the display area displays one node.
         * An <i>expanded</i> node is a non-leaf node (as identified by
         * <code>TreeModel.isLeaf(node)</code> returning false) that will displays
         * its children when all its ancestors are <i>expanded</i>.
         * A <i>collapsed</i>
         * node is one which hides them. A <i>hidden</i> node is one which is
         * under a collapsed ancestor. All of a <i>viewable</i> nodes parents
         * are expanded, but may or may not be displayed. A <i>displayed</i> node
         * is both viewable and in the display area, where it can be seen.
         * </p>
         * The following <code>JTree</code> methods use "visible" to mean "displayed":
         * <ul>
         * <li><code>isRootVisible()</code>
         * <li><code>setRootVisible()</code>
         * <li><code>scrollPathToVisible()</code>
         * <li><code>scrollRowToVisible()</code>
         * <li><code>getVisibleRowCount()</code>
         * <li><code>setVisibleRowCount()</code>
         * </ul>
         * The next group of <code>JTree</code> methods use "visible" to mean
         * "viewable" (under an expanded parent):
         * <ul>
         * <li><code>isVisible()</code>
         * <li><code>makeVisible()</code>
         * </ul>
         * If you are interested in knowing when the selection changes implement
         * the <code>TreeSelectionListener</code> interface and add the instance
         * using the method <code>addTreeSelectionListener</code>.
         * <code>valueChanged</code> will be invoked when the
         * selection changes, that is if the user clicks twice on the same
         * node <code>valueChanged</code> will only be invoked once.
         * <p>
         * If you are interested in detecting either double-click events or when
         * a user clicks on a node, regardless of whether or not it was selected,
         * we recommend you do the following:
         * </p>
         * <pre>
         * final JTree tree = ...;
         * MouseListener ml = new MouseAdapter() {
         * public void <b>mousePressed</b>(MouseEvent e) {
         * int selRow = tree.getRowForLocation(e.getX(), e.getY());
         * TreePath selPath = tree.getPathForLocation(e.getX(), e.getY());
         * if(selRow != -1) {
         * if(e.getClickCount() == 1) {
         * mySingleClick(selRow, selPath);
         * }
         * else if(e.getClickCount() == 2) {
         * myDoubleClick(selRow, selPath);
         * }
         * }
         * }
         * };
         * tree.addMouseListener(ml);
         * </pre>
         * NOTE: This example obtains both the path and row, but you only need to
         * get the one you're interested in.
         * <p>
         * To use <code>JTree</code> to display compound nodes
         * (for example, nodes containing both
         * a graphic icon and text), subclass {@link TreeCellRenderer} and use
         * {@link #setCellRenderer} to tell the tree to use it. To edit such nodes,
         * subclass {@link TreeCellEditor} and use {@link #setCellEditor}.
         * </p>
         * <p>
         * Like all <code>JComponent</code> classes, you can use {@link InputMap} and
         * {@link ActionMap}
         * to associate an {@link Action} object with a {@link KeyStroke}
         * and execute the action under specified conditions.
         * </p>
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
         * </p>
         * @beaninfo attribute: isContainer false
         *  description: A component that displays a set of hierarchical data as an outline.
         * @author Rob Davis
         * @author Ray Ryan
         * @author Scott Violet
         */
        // @ts-ignore
        class JTree extends javax.swing.JComponent implements javax.swing.Scrollable, javax.accessibility.Accessible {
            /**
             * Returns a <code>JTree</code> with a sample model.
             * The default model used by the tree defines a leaf node as any node
             * without children.
             * @see DefaultTreeModel#asksAllowsChildren
             */
            // @ts-ignore
            constructor()
            /**
             * Returns a <code>JTree</code> with each element of the
             * specified array as the
             * child of a new root node which is not displayed.
             * By default, the tree defines a leaf node as any node without
             * children.
             * @param value  an array of <code>Object</code>s
             * @see DefaultTreeModel#asksAllowsChildren
             */
            // @ts-ignore
            constructor(value: any[])
            /**
             * Returns a <code>JTree</code> with each element of the specified
             * <code>Vector</code> as the
             * child of a new root node which is not displayed. By default, the
             * tree defines a leaf node as any node without children.
             * @param value  a <code>Vector</code>
             * @see DefaultTreeModel#asksAllowsChildren
             */
            // @ts-ignore
            constructor(value: java.util.Vector<any>)
            /**
             * Returns a <code>JTree</code> created from a <code>Hashtable</code>
             * which does not display with root.
             * Each value-half of the key/value pairs in the <code>HashTable</code>
             * becomes a child of the new root node. By default, the tree defines
             * a leaf node as any node without children.
             * @param value  a <code>Hashtable</code>
             * @see DefaultTreeModel#asksAllowsChildren
             */
            // @ts-ignore
            constructor(value: java.util.Hashtable<any, ?>)
            /**
             * Returns a <code>JTree</code> with the specified
             * <code>TreeNode</code> as its root,
             * which displays the root node.
             * By default, the tree defines a leaf node as any node without children.
             * @param root  a <code>TreeNode</code> object
             * @see DefaultTreeModel#asksAllowsChildren
             */
            // @ts-ignore
            constructor(root: javax.swing.tree.TreeNode)
            /**
             * Returns a <code>JTree</code> with the specified <code>TreeNode</code>
             * as its root, which
             * displays the root node and which decides whether a node is a
             * leaf node in the specified manner.
             * @param root  a <code>TreeNode</code> object
             * @param asksAllowsChildren  if false, any node without children is a
             *               leaf node; if true, only nodes that do not allow
             *               children are leaf nodes
             * @see DefaultTreeModel#asksAllowsChildren
             */
            // @ts-ignore
            constructor(root: javax.swing.tree.TreeNode, asksAllowsChildren: boolean)
            /**
             * Returns an instance of <code>JTree</code> which displays the root node
             * -- the tree is created using the specified data model.
             * @param newModel  the <code>TreeModel</code> to use as the data model
             */
            // @ts-ignore
            constructor(newModel: javax.swing.tree.TreeModel)
            /**
             * The model that defines the tree displayed by this object.
             */
            // @ts-ignore
            treeModel: javax.swing.tree.TreeModel
            /**
             * Models the set of selected nodes in this tree.
             */
            // @ts-ignore
            selectionModel: javax.swing.tree.TreeSelectionModel
            /**
             * True if the root node is displayed, false if its children are
             * the highest visible nodes.
             */
            // @ts-ignore
            rootVisible: boolean
            /**
             * The cell used to draw nodes. If <code>null</code>, the UI uses a default
             * <code>cellRenderer</code>.
             */
            // @ts-ignore
            cellRenderer: javax.swing.tree.TreeCellRenderer
            /**
             * Height to use for each display row. If this is &lt;= 0 the renderer
             * determines the height for each row.
             */
            // @ts-ignore
            rowHeight: number /*int*/
            /**
             * True if handles are displayed at the topmost level of the tree.
             * <p>
             * A handle is a small icon that displays adjacent to the node which
             * allows the user to click once to expand or collapse the node. A
             * common interface shows a plus sign (+) for a node which can be
             * expanded and a minus sign (-) for a node which can be collapsed.
             * Handles are always shown for nodes below the topmost level.
             * <p>
             * If the <code>rootVisible</code> setting specifies that the root
             * node is to be displayed, then that is the only node at the topmost
             * level. If the root node is not displayed, then all of its
             * children are at the topmost level of the tree. Handles are
             * always displayed for nodes other than the topmost.
             * <p>
             * If the root node isn't visible, it is generally a good to make
             * this value true. Otherwise, the tree looks exactly like a list,
             * and users may not know that the "list entries" are actually
             * tree nodes.
             * @see #rootVisible
             */
            // @ts-ignore
            showsRootHandles: boolean
            /**
             * Creates a new event and passed it off the
             * <code>selectionListeners</code>.
             */
            // @ts-ignore
            selectionRedirector: javax.swing.JTree.TreeSelectionRedirector
            /**
             * Editor for the entries.  Default is <code>null</code>
             * (tree is not editable).
             */
            // @ts-ignore
            cellEditor: javax.swing.tree.TreeCellEditor
            /**
             * Is the tree editable? Default is false.
             */
            // @ts-ignore
            editable: boolean
            /**
             * Is this tree a large model? This is a code-optimization setting.
             * A large model can be used when the cell height is the same for all
             * nodes. The UI will then cache very little information and instead
             * continually message the model. Without a large model the UI caches
             * most of the information, resulting in fewer method calls to the model.
             * <p>
             * This value is only a suggestion to the UI. Not all UIs will
             * take advantage of it. Default value is false.
             */
            // @ts-ignore
            largeModel: boolean
            /**
             * Number of rows to make visible at one time. This value is used for
             * the <code>Scrollable</code> interface. It determines the preferred
             * size of the display area.
             */
            // @ts-ignore
            visibleRowCount: number /*int*/
            /**
             * If true, when editing is to be stopped by way of selection changing,
             * data in tree changing or other means <code>stopCellEditing</code>
             * is invoked, and changes are saved. If false,
             * <code>cancelCellEditing</code> is invoked, and changes
             * are discarded. Default is false.
             */
            // @ts-ignore
            invokesStopCellEditing: boolean
            /**
             * If true, when a node is expanded, as many of the descendants are
             * scrolled to be visible.
             */
            // @ts-ignore
            scrollsOnExpand: boolean
            /**
             * Number of mouse clicks before a node is expanded.
             */
            // @ts-ignore
            toggleClickCount: number /*int*/
            /**
             * Updates the <code>expandedState</code>.
             */
            // @ts-ignore
            treeModelListener: javax.swing.event.TreeModelListener
            /**
             * Bound property name for <code>cellRenderer</code>.
             */
            // @ts-ignore
            readonly CELL_RENDERER_PROPERTY: string
            /**
             * Bound property name for <code>treeModel</code>.
             */
            // @ts-ignore
            readonly TREE_MODEL_PROPERTY: string
            /**
             * Bound property name for <code>rootVisible</code>.
             */
            // @ts-ignore
            readonly ROOT_VISIBLE_PROPERTY: string
            /**
             * Bound property name for <code>showsRootHandles</code>.
             */
            // @ts-ignore
            readonly SHOWS_ROOT_HANDLES_PROPERTY: string
            /**
             * Bound property name for <code>rowHeight</code>.
             */
            // @ts-ignore
            readonly ROW_HEIGHT_PROPERTY: string
            /**
             * Bound property name for <code>cellEditor</code>.
             */
            // @ts-ignore
            readonly CELL_EDITOR_PROPERTY: string
            /**
             * Bound property name for <code>editable</code>.
             */
            // @ts-ignore
            readonly EDITABLE_PROPERTY: string
            /**
             * Bound property name for <code>largeModel</code>.
             */
            // @ts-ignore
            readonly LARGE_MODEL_PROPERTY: string
            /**
             * Bound property name for selectionModel.
             */
            // @ts-ignore
            readonly SELECTION_MODEL_PROPERTY: string
            /**
             * Bound property name for <code>visibleRowCount</code>.
             */
            // @ts-ignore
            readonly VISIBLE_ROW_COUNT_PROPERTY: string
            /**
             * Bound property name for <code>messagesStopCellEditing</code>.
             */
            // @ts-ignore
            readonly INVOKES_STOP_CELL_EDITING_PROPERTY: string
            /**
             * Bound property name for <code>scrollsOnExpand</code>.
             */
            // @ts-ignore
            readonly SCROLLS_ON_EXPAND_PROPERTY: string
            /**
             * Bound property name for <code>toggleClickCount</code>.
             */
            // @ts-ignore
            readonly TOGGLE_CLICK_COUNT_PROPERTY: string
            /**
             * Bound property name for <code>leadSelectionPath</code>.
             * @since 1.3
             */
            // @ts-ignore
            readonly LEAD_SELECTION_PATH_PROPERTY: string
            /**
             * Bound property name for anchor selection path.
             * @since 1.3
             */
            // @ts-ignore
            readonly ANCHOR_SELECTION_PATH_PROPERTY: string
            /**
             * Bound property name for expands selected paths property
             * @since 1.3
             */
            // @ts-ignore
            readonly EXPANDS_SELECTED_PATHS_PROPERTY: string
            /**
             * Creates and returns a sample <code>TreeModel</code>.
             * Used primarily for beanbuilders to show something interesting.
             * @return the default <code>TreeModel</code>
             */
            // @ts-ignore
            getDefaultTreeModel(): javax.swing.tree.TreeModel
            /**
             * Returns a <code>TreeModel</code> wrapping the specified object.
             * If the object is:<ul>
             * <li>an array of <code>Object</code>s,
             * <li>a <code>Hashtable</code>, or
             * <li>a <code>Vector</code>
             * </ul>then a new root node is created with each of the incoming
             * objects as children. Otherwise, a new root is created with
             * a value of {@code "root"}.
             * @param value  the <code>Object</code> used as the foundation for
             *           the <code>TreeModel</code>
             * @return a <code>TreeModel</code> wrapping the specified object
             */
            // @ts-ignore
            createTreeModel(value: any): javax.swing.tree.TreeModel
            /**
             * Returns the L&amp;F object that renders this component.
             * @return the <code>TreeUI</code> object that renders this component
             */
            // @ts-ignore
            getUI(): javax.swing.plaf.TreeUI
            /**
             * Sets the L&amp;F object that renders this component.
             * <p>
             * This is a bound property.
             * @param ui  the <code>TreeUI</code> L&amp;F object
             * @see UIDefaults#getUI
             * @beaninfo bound: true
             *        hidden: true
             *     attribute: visualUpdate true
             *   description: The UI object that implements the Component's LookAndFeel.
             */
            // @ts-ignore
            setUI(ui: javax.swing.plaf.TreeUI): void
            /**
             * Notification from the <code>UIManager</code> that the L&amp;F has changed.
             * Replaces the current UI object with the latest version from the
             * <code>UIManager</code>.
             * @see JComponent#updateUI
             */
            // @ts-ignore
            updateUI(): void
            /**
             * Returns the name of the L&amp;F class that renders this component.
             * @return the string "TreeUI"
             * @see JComponent#getUIClassID
             * @see UIDefaults#getUI
             */
            // @ts-ignore
            getUIClassID(): java.lang.String
            /**
             * Returns the current <code>TreeCellRenderer</code>
             * that is rendering each cell.
             * @return the <code>TreeCellRenderer</code> that is rendering each cell
             */
            // @ts-ignore
            getCellRenderer(): javax.swing.tree.TreeCellRenderer
            /**
             * Sets the <code>TreeCellRenderer</code> that will be used to
             * draw each cell.
             * <p>
             * This is a bound property.
             * @param x  the <code>TreeCellRenderer</code> that is to render each cell
             * @beaninfo bound: true
             *   description: The TreeCellRenderer that will be used to draw
             *                each cell.
             */
            // @ts-ignore
            setCellRenderer(x: javax.swing.tree.TreeCellRenderer): void
            /**
             * Determines whether the tree is editable. Fires a property
             * change event if the new setting is different from the existing
             * setting.
             * <p>
             * This is a bound property.
             * @param flag  a boolean value, true if the tree is editable
             * @beaninfo bound: true
             *   description: Whether the tree is editable.
             */
            // @ts-ignore
            setEditable(flag: boolean): void
            /**
             * Returns true if the tree is editable.
             * @return true if the tree is editable
             */
            // @ts-ignore
            isEditable(): boolean
            /**
             * Sets the cell editor.  A <code>null</code> value implies that the
             * tree cannot be edited.  If this represents a change in the
             * <code>cellEditor</code>, the <code>propertyChange</code>
             * method is invoked on all listeners.
             * <p>
             * This is a bound property.
             * @param cellEditor the <code>TreeCellEditor</code> to use
             * @beaninfo bound: true
             *   description: The cell editor. A null value implies the tree
             *                cannot be edited.
             */
            // @ts-ignore
            setCellEditor(cellEditor: javax.swing.tree.TreeCellEditor): void
            /**
             * Returns the editor used to edit entries in the tree.
             * @return the <code>TreeCellEditor</code> in use,
             *           or <code>null</code> if the tree cannot be edited
             */
            // @ts-ignore
            getCellEditor(): javax.swing.tree.TreeCellEditor
            /**
             * Returns the <code>TreeModel</code> that is providing the data.
             * @return the <code>TreeModel</code> that is providing the data
             */
            // @ts-ignore
            getModel(): javax.swing.tree.TreeModel
            /**
             * Sets the <code>TreeModel</code> that will provide the data.
             * <p>
             * This is a bound property.
             * @param newModel the <code>TreeModel</code> that is to provide the data
             * @beaninfo bound: true
             *   description: The TreeModel that will provide the data.
             */
            // @ts-ignore
            setModel(newModel: javax.swing.tree.TreeModel): void
            /**
             * Returns true if the root node of the tree is displayed.
             * @return true if the root node of the tree is displayed
             * @see #rootVisible
             */
            // @ts-ignore
            isRootVisible(): boolean
            /**
             * Determines whether or not the root node from
             * the <code>TreeModel</code> is visible.
             * <p>
             * This is a bound property.
             * @param rootVisible true if the root node of the tree is to be displayed
             * @see #rootVisible
             * @beaninfo bound: true
             *   description: Whether or not the root node
             *                from the TreeModel is visible.
             */
            // @ts-ignore
            setRootVisible(rootVisible: boolean): void
            /**
             * Sets the value of the <code>showsRootHandles</code> property,
             * which specifies whether the node handles should be displayed.
             * The default value of this property depends on the constructor
             * used to create the <code>JTree</code>.
             * Some look and feels might not support handles;
             * they will ignore this property.
             * <p>
             * This is a bound property.
             * @param newValue <code>true</code> if root handles should be displayed;
             *                  otherwise, <code>false</code>
             * @see #showsRootHandles
             * @see #getShowsRootHandles
             * @beaninfo bound: true
             *   description: Whether the node handles are to be
             *                displayed.
             */
            // @ts-ignore
            setShowsRootHandles(newValue: boolean): void
            /**
             * Returns the value of the <code>showsRootHandles</code> property.
             * @return the value of the <code>showsRootHandles</code> property
             * @see #showsRootHandles
             */
            // @ts-ignore
            getShowsRootHandles(): boolean
            /**
             * Sets the height of each cell, in pixels.  If the specified value
             * is less than or equal to zero the current cell renderer is
             * queried for each row's height.
             * <p>
             * This is a bound property.
             * @param rowHeight the height of each cell, in pixels
             * @beaninfo bound: true
             *   description: The height of each cell.
             */
            // @ts-ignore
            setRowHeight(rowHeight: number /*int*/): void
            /**
             * Returns the height of each row.  If the returned value is less than
             * or equal to 0 the height for each row is determined by the
             * renderer.
             */
            // @ts-ignore
            getRowHeight(): int
            /**
             * Returns true if the height of each display row is a fixed size.
             * @return true if the height of each row is a fixed size
             */
            // @ts-ignore
            isFixedRowHeight(): boolean
            /**
             * Specifies whether the UI should use a large model.
             * (Not all UIs will implement this.) Fires a property change
             * for the LARGE_MODEL_PROPERTY.
             * <p>
             * This is a bound property.
             * @param newValue true to suggest a large model to the UI
             * @see #largeModel
             * @beaninfo bound: true
             *   description: Whether the UI should use a
             *                large model.
             */
            // @ts-ignore
            setLargeModel(newValue: boolean): void
            /**
             * Returns true if the tree is configured for a large model.
             * @return true if a large model is suggested
             * @see #largeModel
             */
            // @ts-ignore
            isLargeModel(): boolean
            /**
             * Determines what happens when editing is interrupted by selecting
             * another node in the tree, a change in the tree's data, or by some
             * other means. Setting this property to <code>true</code> causes the
             * changes to be automatically saved when editing is interrupted.
             * <p>
             * Fires a property change for the INVOKES_STOP_CELL_EDITING_PROPERTY.
             * @param newValue true means that <code>stopCellEditing</code> is invoked
             *         when editing is interrupted, and data is saved; false means that
             *         <code>cancelCellEditing</code> is invoked, and changes are lost
             * @beaninfo bound: true
             *   description: Determines what happens when editing is interrupted,
             *                selecting another node in the tree, a change in the
             *                tree's data, or some other means.
             */
            // @ts-ignore
            setInvokesStopCellEditing(newValue: boolean): void
            /**
             * Returns the indicator that tells what happens when editing is
             * interrupted.
             * @return the indicator that tells what happens when editing is
             *          interrupted
             * @see #setInvokesStopCellEditing
             */
            // @ts-ignore
            getInvokesStopCellEditing(): boolean
            /**
             * Sets the <code>scrollsOnExpand</code> property,
             * which determines whether the
             * tree might scroll to show previously hidden children.
             * If this property is <code>true</code> (the default),
             * when a node expands
             * the tree can use scrolling to make
             * the maximum possible number of the node's descendants visible.
             * In some look and feels, trees might not need to scroll when expanded;
             * those look and feels will ignore this property.
             * <p>
             * This is a bound property.
             * @param newValue <code>false</code> to disable scrolling on expansion;
             *                  <code>true</code> to enable it
             * @see #getScrollsOnExpand
             * @beaninfo bound: true
             *   description: Indicates if a node descendant should be scrolled when expanded.
             */
            // @ts-ignore
            setScrollsOnExpand(newValue: boolean): void
            /**
             * Returns the value of the <code>scrollsOnExpand</code> property.
             * @return the value of the <code>scrollsOnExpand</code> property
             */
            // @ts-ignore
            getScrollsOnExpand(): boolean
            /**
             * Sets the number of mouse clicks before a node will expand or close.
             * The default is two.
             * <p>
             * This is a bound property.
             * @since 1.3
             * @beaninfo bound: true
             *   description: Number of clicks before a node will expand/collapse.
             */
            // @ts-ignore
            setToggleClickCount(clickCount: number /*int*/): void
            /**
             * Returns the number of mouse clicks needed to expand or close a node.
             * @return number of mouse clicks before node is expanded
             * @since 1.3
             */
            // @ts-ignore
            getToggleClickCount(): int
            /**
             * Configures the <code>expandsSelectedPaths</code> property. If
             * true, any time the selection is changed, either via the
             * <code>TreeSelectionModel</code>, or the cover methods provided by
             * <code>JTree</code>, the <code>TreePath</code>s parents will be
             * expanded to make them visible (visible meaning the parent path is
             * expanded, not necessarily in the visible rectangle of the
             * <code>JTree</code>). If false, when the selection
             * changes the nodes parent is not made visible (all its parents expanded).
             * This is useful if you wish to have your selection model maintain paths
             * that are not always visible (all parents expanded).
             * <p>
             * This is a bound property.
             * @param newValue the new value for <code>expandsSelectedPaths</code>
             * @since 1.3
             * @beaninfo bound: true
             *   description: Indicates whether changes to the selection should make
             *                the parent of the path visible.
             */
            // @ts-ignore
            setExpandsSelectedPaths(newValue: boolean): void
            /**
             * Returns the <code>expandsSelectedPaths</code> property.
             * @return true if selection changes result in the parent path being
             *          expanded
             * @since 1.3
             * @see #setExpandsSelectedPaths
             */
            // @ts-ignore
            getExpandsSelectedPaths(): boolean
            /**
             * Turns on or off automatic drag handling. In order to enable automatic
             * drag handling, this property should be set to {@code true}, and the
             * tree's {@code TransferHandler} needs to be {@code non-null}.
             * The default value of the {@code dragEnabled} property is {@code false}.
             * <p>
             * The job of honoring this property, and recognizing a user drag gesture,
             * lies with the look and feel implementation, and in particular, the tree's
             * {@code TreeUI}. When automatic drag handling is enabled, most look and
             * feels (including those that subclass {@code BasicLookAndFeel}) begin a
             * drag and drop operation whenever the user presses the mouse button over
             * an item and then moves the mouse a few pixels. Setting this property to
             * {@code true} can therefore have a subtle effect on how selections behave.
             * <p>
             * If a look and feel is used that ignores this property, you can still
             * begin a drag and drop operation by calling {@code exportAsDrag} on the
             * tree's {@code TransferHandler}.
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
             * affecting the actual selection in the tree.
             * <p>
             * <code>JTree</code> supports the following drop modes:
             * <ul>
             * <li><code>DropMode.USE_SELECTION</code></li>
             * <li><code>DropMode.ON</code></li>
             * <li><code>DropMode.INSERT</code></li>
             * <li><code>DropMode.ON_OR_INSERT</code></li>
             * </ul>
             * <p>
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
             * @return the drop location
             * @see #setDropMode
             * @see TransferHandler#canImport(TransferHandler.TransferSupport)
             * @since 1.6
             */
            // @ts-ignore
            getDropLocation(): javax.swing.JTree.DropLocation
            /**
             * Returns <code>isEditable</code>. This is invoked from the UI before
             * editing begins to insure that the given path can be edited. This
             * is provided as an entry point for subclassers to add filtered
             * editing without having to resort to creating a new editor.
             * @return true if every parent node and the node itself is editable
             * @see #isEditable
             */
            // @ts-ignore
            isPathEditable(path: javax.swing.tree.TreePath): boolean
            /**
             * Overrides <code>JComponent</code>'s <code>getToolTipText</code>
             * method in order to allow
             * renderer's tips to be used if it has text set.
             * <p>
             * NOTE: For <code>JTree</code> to properly display tooltips of its
             * renderers, <code>JTree</code> must be a registered component with the
             * <code>ToolTipManager</code>.  This can be done by invoking
             * <code>ToolTipManager.sharedInstance().registerComponent(tree)</code>.
             * This is not done automatically!
             * @param event the <code>MouseEvent</code> that initiated the
             *           <code>ToolTip</code> display
             * @return a string containing the  tooltip or <code>null</code>
             *           if <code>event</code> is null
             */
            // @ts-ignore
            getToolTipText(event: java.awt.event.MouseEvent): java.lang.String
            /**
             * Called by the renderers to convert the specified value to
             * text. This implementation returns <code>value.toString</code>, ignoring
             * all other arguments. To control the conversion, subclass this
             * method and use any of the arguments you need.
             * @param value the <code>Object</code> to convert to text
             * @param selected true if the node is selected
             * @param expanded true if the node is expanded
             * @param leaf  true if the node is a leaf node
             * @param row  an integer specifying the node's display row, where 0 is
             *              the first row in the display
             * @param hasFocus true if the node has the focus
             * @return the <code>String</code> representation of the node's value
             */
            // @ts-ignore
            convertValueToText(value: any, selected: boolean, expanded: boolean, leaf: boolean, row: number /*int*/, hasFocus: boolean): java.lang.String
            /**
             * Returns the number of viewable nodes. A node is viewable if all of its
             * parents are expanded. The root is only included in this count if
             * {@code isRootVisible()} is {@code true}. This returns {@code 0} if
             * the UI has not been set.
             * @return the number of viewable nodes
             */
            // @ts-ignore
            getRowCount(): int
            /**
             * Selects the node identified by the specified path. If any
             * component of the path is hidden (under a collapsed node), and
             * <code>getExpandsSelectedPaths</code> is true it is
             * exposed (made viewable).
             * @param path the <code>TreePath</code> specifying the node to select
             */
            // @ts-ignore
            setSelectionPath(path: javax.swing.tree.TreePath): void
            /**
             * Selects the nodes identified by the specified array of paths.
             * If any component in any of the paths is hidden (under a collapsed
             * node), and <code>getExpandsSelectedPaths</code> is true
             * it is exposed (made viewable).
             * @param paths an array of <code>TreePath</code> objects that specifies
             *           the nodes to select
             */
            // @ts-ignore
            setSelectionPaths(paths: javax.swing.tree.TreePath[]): void
            /**
             * Sets the path identifies as the lead. The lead may not be selected.
             * The lead is not maintained by <code>JTree</code>,
             * rather the UI will update it.
             * <p>
             * This is a bound property.
             * @param newPath  the new lead path
             * @since 1.3
             * @beaninfo bound: true
             *   description: Lead selection path
             */
            // @ts-ignore
            setLeadSelectionPath(newPath: javax.swing.tree.TreePath): void
            /**
             * Sets the path identified as the anchor.
             * The anchor is not maintained by <code>JTree</code>, rather the UI will
             * update it.
             * <p>
             * This is a bound property.
             * @param newPath  the new anchor path
             * @since 1.3
             * @beaninfo bound: true
             *   description: Anchor selection path
             */
            // @ts-ignore
            setAnchorSelectionPath(newPath: javax.swing.tree.TreePath): void
            /**
             * Selects the node at the specified row in the display.
             * @param row  the row to select, where 0 is the first row in
             *              the display
             */
            // @ts-ignore
            setSelectionRow(row: number /*int*/): void
            /**
             * Selects the nodes corresponding to each of the specified rows
             * in the display. If a particular element of <code>rows</code> is
             * &lt; 0 or &gt;= <code>getRowCount</code>, it will be ignored.
             * If none of the elements
             * in <code>rows</code> are valid rows, the selection will
             * be cleared. That is it will be as if <code>clearSelection</code>
             * was invoked.
             * @param rows  an array of ints specifying the rows to select,
             *               where 0 indicates the first row in the display
             */
            // @ts-ignore
            setSelectionRows(rows: number /*int*/[]): void
            /**
             * Adds the node identified by the specified <code>TreePath</code>
             * to the current selection. If any component of the path isn't
             * viewable, and <code>getExpandsSelectedPaths</code> is true it is
             * made viewable.
             * <p>
             * Note that <code>JTree</code> does not allow duplicate nodes to
             * exist as children under the same parent -- each sibling must be
             * a unique object.
             * @param path the <code>TreePath</code> to add
             */
            // @ts-ignore
            addSelectionPath(path: javax.swing.tree.TreePath): void
            /**
             * Adds each path in the array of paths to the current selection. If
             * any component of any of the paths isn't viewable and
             * <code>getExpandsSelectedPaths</code> is true, it is
             * made viewable.
             * <p>
             * Note that <code>JTree</code> does not allow duplicate nodes to
             * exist as children under the same parent -- each sibling must be
             * a unique object.
             * @param paths an array of <code>TreePath</code> objects that specifies
             *           the nodes to add
             */
            // @ts-ignore
            addSelectionPaths(paths: javax.swing.tree.TreePath[]): void
            /**
             * Adds the path at the specified row to the current selection.
             * @param row  an integer specifying the row of the node to add,
             *              where 0 is the first row in the display
             */
            // @ts-ignore
            addSelectionRow(row: number /*int*/): void
            /**
             * Adds the paths at each of the specified rows to the current selection.
             * @param rows  an array of ints specifying the rows to add,
             *               where 0 indicates the first row in the display
             */
            // @ts-ignore
            addSelectionRows(rows: number /*int*/[]): void
            /**
             * Returns the last path component of the selected path. This is
             * a convenience method for
             * {@code getSelectionModel().getSelectionPath().getLastPathComponent()}.
             * This is typically only useful if the selection has one path.
             * @return the last path component of the selected path, or
             *          <code>null</code> if nothing is selected
             * @see TreePath#getLastPathComponent
             */
            // @ts-ignore
            getLastSelectedPathComponent(): java.lang.Object
            /**
             * Returns the path identified as the lead.
             * @return path identified as the lead
             */
            // @ts-ignore
            getLeadSelectionPath(): javax.swing.tree.TreePath
            /**
             * Returns the path identified as the anchor.
             * @return path identified as the anchor
             * @since 1.3
             */
            // @ts-ignore
            getAnchorSelectionPath(): javax.swing.tree.TreePath
            /**
             * Returns the path to the first selected node.
             * @return the <code>TreePath</code> for the first selected node,
             *           or <code>null</code> if nothing is currently selected
             */
            // @ts-ignore
            getSelectionPath(): javax.swing.tree.TreePath
            /**
             * Returns the paths of all selected values.
             * @return an array of <code>TreePath</code> objects indicating the selected
             *          nodes, or <code>null</code> if nothing is currently selected
             */
            // @ts-ignore
            getSelectionPaths(): javax.swing.tree.TreePath[]
            /**
             * Returns all of the currently selected rows. This method is simply
             * forwarded to the <code>TreeSelectionModel</code>.
             * If nothing is selected <code>null</code> or an empty array will
             * be returned, based on the <code>TreeSelectionModel</code>
             * implementation.
             * @return an array of integers that identifies all currently selected rows
             *          where 0 is the first row in the display
             */
            // @ts-ignore
            getSelectionRows(): int[]
            /**
             * Returns the number of nodes selected.
             * @return the number of nodes selected
             */
            // @ts-ignore
            getSelectionCount(): int
            /**
             * Returns the smallest selected row. If the selection is empty, or
             * none of the selected paths are viewable, {@code -1} is returned.
             * @return the smallest selected row
             */
            // @ts-ignore
            getMinSelectionRow(): int
            /**
             * Returns the largest selected row. If the selection is empty, or
             * none of the selected paths are viewable, {@code -1} is returned.
             * @return the largest selected row
             */
            // @ts-ignore
            getMaxSelectionRow(): int
            /**
             * Returns the row index corresponding to the lead path.
             * @return an integer giving the row index of the lead path,
             *           where 0 is the first row in the display; or -1
             *           if <code>leadPath</code> is <code>null</code>
             */
            // @ts-ignore
            getLeadSelectionRow(): int
            /**
             * Returns true if the item identified by the path is currently selected.
             * @param path a <code>TreePath</code> identifying a node
             * @return true if the node is selected
             */
            // @ts-ignore
            isPathSelected(path: javax.swing.tree.TreePath): boolean
            /**
             * Returns true if the node identified by row is selected.
             * @param row  an integer specifying a display row, where 0 is the first
             *              row in the display
             * @return true if the node is selected
             */
            // @ts-ignore
            isRowSelected(row: number /*int*/): boolean
            /**
             * Returns an <code>Enumeration</code> of the descendants of the
             * path <code>parent</code> that
             * are currently expanded. If <code>parent</code> is not currently
             * expanded, this will return <code>null</code>.
             * If you expand/collapse nodes while
             * iterating over the returned <code>Enumeration</code>
             * this may not return all
             * the expanded paths, or may return paths that are no longer expanded.
             * @param parent  the path which is to be examined
             * @return an <code>Enumeration</code> of the descendents of
             *           <code>parent</code>, or <code>null</code> if
             *           <code>parent</code> is not currently expanded
             */
            // @ts-ignore
            getExpandedDescendants(parent: javax.swing.tree.TreePath): java.util.Enumeration<javax.swing.tree.TreePath>
            /**
             * Returns true if the node identified by the path has ever been
             * expanded.
             * @return true if the <code>path</code> has ever been expanded
             */
            // @ts-ignore
            hasBeenExpanded(path: javax.swing.tree.TreePath): boolean
            /**
             * Returns true if the node identified by the path is currently expanded,
             * @param path  the <code>TreePath</code> specifying the node to check
             * @return false if any of the nodes in the node's path are collapsed,
             *                true if all nodes in the path are expanded
             */
            // @ts-ignore
            isExpanded(path: javax.swing.tree.TreePath): boolean
            /**
             * Returns true if the node at the specified display row is currently
             * expanded.
             * @param row  the row to check, where 0 is the first row in the
             *              display
             * @return true if the node is currently expanded, otherwise false
             */
            // @ts-ignore
            isExpanded(row: number /*int*/): boolean
            /**
             * Returns true if the value identified by path is currently collapsed,
             * this will return false if any of the values in path are currently
             * not being displayed.
             * @param path  the <code>TreePath</code> to check
             * @return true if any of the nodes in the node's path are collapsed,
             *                false if all nodes in the path are expanded
             */
            // @ts-ignore
            isCollapsed(path: javax.swing.tree.TreePath): boolean
            /**
             * Returns true if the node at the specified display row is collapsed.
             * @param row  the row to check, where 0 is the first row in the
             *              display
             * @return true if the node is currently collapsed, otherwise false
             */
            // @ts-ignore
            isCollapsed(row: number /*int*/): boolean
            /**
             * Ensures that the node identified by path is currently viewable.
             * @param path  the <code>TreePath</code> to make visible
             */
            // @ts-ignore
            makeVisible(path: javax.swing.tree.TreePath): void
            /**
             * Returns true if the value identified by path is currently viewable,
             * which means it is either the root or all of its parents are expanded.
             * Otherwise, this method returns false.
             * @return true if the node is viewable, otherwise false
             */
            // @ts-ignore
            isVisible(path: javax.swing.tree.TreePath): boolean
            /**
             * Returns the <code>Rectangle</code> that the specified node will be drawn
             * into. Returns <code>null</code> if any component in the path is hidden
             * (under a collapsed parent).
             * <p>
             * Note:<br>
             * This method returns a valid rectangle, even if the specified
             * node is not currently displayed.
             * @param path the <code>TreePath</code> identifying the node
             * @return the <code>Rectangle</code> the node is drawn in,
             *           or <code>null</code>
             */
            // @ts-ignore
            getPathBounds(path: javax.swing.tree.TreePath): java.awt.Rectangle
            /**
             * Returns the <code>Rectangle</code> that the node at the specified row is
             * drawn in.
             * @param row  the row to be drawn, where 0 is the first row in the
             *              display
             * @return the <code>Rectangle</code> the node is drawn in
             */
            // @ts-ignore
            getRowBounds(row: number /*int*/): java.awt.Rectangle
            /**
             * Makes sure all the path components in path are expanded (except
             * for the last path component) and scrolls so that the
             * node identified by the path is displayed. Only works when this
             * <code>JTree</code> is contained in a <code>JScrollPane</code>.
             * @param path  the <code>TreePath</code> identifying the node to
             *           bring into view
             */
            // @ts-ignore
            scrollPathToVisible(path: javax.swing.tree.TreePath): void
            /**
             * Scrolls the item identified by row until it is displayed. The minimum
             * of amount of scrolling necessary to bring the row into view
             * is performed. Only works when this <code>JTree</code> is contained in a
             * <code>JScrollPane</code>.
             * @param row  an integer specifying the row to scroll, where 0 is the
             *              first row in the display
             */
            // @ts-ignore
            scrollRowToVisible(row: number /*int*/): void
            /**
             * Returns the path for the specified row.  If <code>row</code> is
             * not visible, or a {@code TreeUI} has not been set, <code>null</code>
             * is returned.
             * @param row  an integer specifying a row
             * @return the <code>TreePath</code> to the specified node,
             *           <code>null</code> if <code>row &lt; 0</code>
             *           or <code>row &gt;= getRowCount()</code>
             */
            // @ts-ignore
            getPathForRow(row: number /*int*/): javax.swing.tree.TreePath
            /**
             * Returns the row that displays the node identified by the specified
             * path.
             * @param path  the <code>TreePath</code> identifying a node
             * @return an integer specifying the display row, where 0 is the first
             *          row in the display, or -1 if any of the elements in path
             *          are hidden under a collapsed parent.
             */
            // @ts-ignore
            getRowForPath(path: javax.swing.tree.TreePath): int
            /**
             * Ensures that the node identified by the specified path is
             * expanded and viewable. If the last item in the path is a
             * leaf, this will have no effect.
             * @param path  the <code>TreePath</code> identifying a node
             */
            // @ts-ignore
            expandPath(path: javax.swing.tree.TreePath): void
            /**
             * Ensures that the node in the specified row is expanded and
             * viewable.
             * <p>
             * If <code>row</code> is &lt; 0 or &gt;= <code>getRowCount</code> this
             * will have no effect.
             * @param row  an integer specifying a display row, where 0 is the
             *              first row in the display
             */
            // @ts-ignore
            expandRow(row: number /*int*/): void
            /**
             * Ensures that the node identified by the specified path is
             * collapsed and viewable.
             * @param path  the <code>TreePath</code> identifying a node
             */
            // @ts-ignore
            collapsePath(path: javax.swing.tree.TreePath): void
            /**
             * Ensures that the node in the specified row is collapsed.
             * <p>
             * If <code>row</code> is &lt; 0 or &gt;= <code>getRowCount</code> this
             * will have no effect.
             * @param row  an integer specifying a display row, where 0 is the
             *              first row in the display
             */
            // @ts-ignore
            collapseRow(row: number /*int*/): void
            /**
             * Returns the path for the node at the specified location.
             * @param x an integer giving the number of pixels horizontally from
             *           the left edge of the display area, minus any left margin
             * @param y an integer giving the number of pixels vertically from
             *           the top of the display area, minus any top margin
             * @return the <code>TreePath</code> for the node at that location
             */
            // @ts-ignore
            getPathForLocation(x: number /*int*/, y: number /*int*/): javax.swing.tree.TreePath
            /**
             * Returns the row for the specified location.
             * @param x an integer giving the number of pixels horizontally from
             *           the left edge of the display area, minus any left margin
             * @param y an integer giving the number of pixels vertically from
             *           the top of the display area, minus any top margin
             * @return the row corresponding to the location, or -1 if the
             *          location is not within the bounds of a displayed cell
             * @see #getClosestRowForLocation
             */
            // @ts-ignore
            getRowForLocation(x: number /*int*/, y: number /*int*/): int
            /**
             * Returns the path to the node that is closest to x,y.  If
             * no nodes are currently viewable, or there is no model, returns
             * <code>null</code>, otherwise it always returns a valid path.  To test if
             * the node is exactly at x, y, get the node's bounds and
             * test x, y against that.
             * @param x an integer giving the number of pixels horizontally from
             *           the left edge of the display area, minus any left margin
             * @param y an integer giving the number of pixels vertically from
             *           the top of the display area, minus any top margin
             * @return the <code>TreePath</code> for the node closest to that location,
             *           <code>null</code> if nothing is viewable or there is no model
             * @see #getPathForLocation
             * @see #getPathBounds
             */
            // @ts-ignore
            getClosestPathForLocation(x: number /*int*/, y: number /*int*/): javax.swing.tree.TreePath
            /**
             * Returns the row to the node that is closest to x,y.  If no nodes
             * are viewable or there is no model, returns -1. Otherwise,
             * it always returns a valid row.  To test if the returned object is
             * exactly at x, y, get the bounds for the node at the returned
             * row and test x, y against that.
             * @param x an integer giving the number of pixels horizontally from
             *           the left edge of the display area, minus any left margin
             * @param y an integer giving the number of pixels vertically from
             *           the top of the display area, minus any top margin
             * @return the row closest to the location, -1 if nothing is
             *          viewable or there is no model
             * @see #getRowForLocation
             * @see #getRowBounds
             */
            // @ts-ignore
            getClosestRowForLocation(x: number /*int*/, y: number /*int*/): int
            /**
             * Returns true if the tree is being edited. The item that is being
             * edited can be obtained using <code>getSelectionPath</code>.
             * @return true if the user is currently editing a node
             * @see #getSelectionPath
             */
            // @ts-ignore
            isEditing(): boolean
            /**
             * Ends the current editing session.
             * (The <code>DefaultTreeCellEditor</code>
             * object saves any edits that are currently in progress on a cell.
             * Other implementations may operate differently.)
             * Has no effect if the tree isn't being edited.
             * <blockquote>
             * <b>Note:</b><br>
             * To make edit-saves automatic whenever the user changes
             * their position in the tree, use {@link #setInvokesStopCellEditing}.
             * </blockquote>
             * @return true if editing was in progress and is now stopped,
             *               false if editing was not in progress
             */
            // @ts-ignore
            stopEditing(): boolean
            /**
             * Cancels the current editing session. Has no effect if the
             * tree isn't being edited.
             */
            // @ts-ignore
            cancelEditing(): void
            /**
             * Selects the node identified by the specified path and initiates
             * editing.  The edit-attempt fails if the <code>CellEditor</code>
             * does not allow
             * editing for the specified item.
             * @param path  the <code>TreePath</code> identifying a node
             */
            // @ts-ignore
            startEditingAtPath(path: javax.swing.tree.TreePath): void
            /**
             * Returns the path to the element that is currently being edited.
             * @return the <code>TreePath</code> for the node being edited
             */
            // @ts-ignore
            getEditingPath(): javax.swing.tree.TreePath
            /**
             * Sets the tree's selection model. When a <code>null</code> value is
             * specified an empty
             * <code>selectionModel</code> is used, which does not allow selections.
             * <p>
             * This is a bound property.
             * @param selectionModel the <code>TreeSelectionModel</code> to use,
             *           or <code>null</code> to disable selections
             * @see TreeSelectionModel
             * @beaninfo bound: true
             *   description: The tree's selection model.
             */
            // @ts-ignore
            setSelectionModel(selectionModel: javax.swing.tree.TreeSelectionModel): void
            /**
             * Returns the model for selections. This should always return a
             * non-<code>null</code> value. If you don't want to allow anything
             * to be selected
             * set the selection model to <code>null</code>, which forces an empty
             * selection model to be used.
             * @see #setSelectionModel
             */
            // @ts-ignore
            getSelectionModel(): javax.swing.tree.TreeSelectionModel
            /**
             * Returns the paths (inclusive) between the specified rows. If
             * the specified indices are within the viewable set of rows, or
             * bound the viewable set of rows, then the indices are
             * constrained by the viewable set of rows. If the specified
             * indices are not within the viewable set of rows, or do not
             * bound the viewable set of rows, then an empty array is
             * returned. For example, if the row count is {@code 10}, and this
             * method is invoked with {@code -1, 20}, then the specified
             * indices are constrained to the viewable set of rows, and this is
             * treated as if invoked with {@code 0, 9}. On the other hand, if
             * this were invoked with {@code -10, -1}, then the specified
             * indices do not bound the viewable set of rows, and an empty
             * array is returned.
             * <p>
             * The parameters are not order dependent. That is, {@code
             * getPathBetweenRows(x, y)} is equivalent to
             * {@code getPathBetweenRows(y, x)}.
             * <p>
             * An empty array is returned if the row count is {@code 0}, or
             * the specified indices do not bound the viewable set of rows.
             * @param index0 the first index in the range
             * @param index1 the last index in the range
             * @return the paths (inclusive) between the specified row indices
             */
            // @ts-ignore
            getPathBetweenRows(index0: number /*int*/, index1: number /*int*/): javax.swing.tree.TreePath[]
            /**
             * Selects the rows in the specified interval (inclusive). If
             * the specified indices are within the viewable set of rows, or bound
             * the viewable set of rows, then the specified rows are constrained by
             * the viewable set of rows. If the specified indices are not within the
             * viewable set of rows, or do not bound the viewable set of rows, then
             * the selection is cleared. For example, if the row count is {@code
             * 10}, and this method is invoked with {@code -1, 20}, then the
             * specified indices bounds the viewable range, and this is treated as
             * if invoked with {@code 0, 9}. On the other hand, if this were
             * invoked with {@code -10, -1}, then the specified indices do not
             * bound the viewable set of rows, and the selection is cleared.
             * <p>
             * The parameters are not order dependent. That is, {@code
             * setSelectionInterval(x, y)} is equivalent to
             * {@code setSelectionInterval(y, x)}.
             * @param index0 the first index in the range to select
             * @param index1 the last index in the range to select
             */
            // @ts-ignore
            setSelectionInterval(index0: number /*int*/, index1: number /*int*/): void
            /**
             * Adds the specified rows (inclusive) to the selection. If the
             * specified indices are within the viewable set of rows, or bound
             * the viewable set of rows, then the specified indices are
             * constrained by the viewable set of rows. If the indices are not
             * within the viewable set of rows, or do not bound the viewable
             * set of rows, then the selection is unchanged. For example, if
             * the row count is {@code 10}, and this method is invoked with
             * {@code -1, 20}, then the specified indices bounds the viewable
             * range, and this is treated as if invoked with {@code 0, 9}. On
             * the other hand, if this were invoked with {@code -10, -1}, then
             * the specified indices do not bound the viewable set of rows,
             * and the selection is unchanged.
             * <p>
             * The parameters are not order dependent. That is, {@code
             * addSelectionInterval(x, y)} is equivalent to
             * {@code addSelectionInterval(y, x)}.
             * @param index0 the first index in the range to add to the selection
             * @param index1 the last index in the range to add to the selection
             */
            // @ts-ignore
            addSelectionInterval(index0: number /*int*/, index1: number /*int*/): void
            /**
             * Removes the specified rows (inclusive) from the selection. If
             * the specified indices are within the viewable set of rows, or bound
             * the viewable set of rows, then the specified indices are constrained by
             * the viewable set of rows. If the specified indices are not within the
             * viewable set of rows, or do not bound the viewable set of rows, then
             * the selection is unchanged. For example, if the row count is {@code
             * 10}, and this method is invoked with {@code -1, 20}, then the
             * specified range bounds the viewable range, and this is treated as
             * if invoked with {@code 0, 9}. On the other hand, if this were
             * invoked with {@code -10, -1}, then the specified range does not
             * bound the viewable set of rows, and the selection is unchanged.
             * <p>
             * The parameters are not order dependent. That is, {@code
             * removeSelectionInterval(x, y)} is equivalent to
             * {@code removeSelectionInterval(y, x)}.
             * @param index0 the first row to remove from the selection
             * @param index1 the last row to remove from the selection
             */
            // @ts-ignore
            removeSelectionInterval(index0: number /*int*/, index1: number /*int*/): void
            /**
             * Removes the node identified by the specified path from the current
             * selection.
             * @param path  the <code>TreePath</code> identifying a node
             */
            // @ts-ignore
            removeSelectionPath(path: javax.swing.tree.TreePath): void
            /**
             * Removes the nodes identified by the specified paths from the
             * current selection.
             * @param paths an array of <code>TreePath</code> objects that
             *               specifies the nodes to remove
             */
            // @ts-ignore
            removeSelectionPaths(paths: javax.swing.tree.TreePath[]): void
            /**
             * Removes the row at the index <code>row</code> from the current
             * selection.
             * @param row  the row to remove
             */
            // @ts-ignore
            removeSelectionRow(row: number /*int*/): void
            /**
             * Removes the rows that are selected at each of the specified
             * rows.
             * @param rows  an array of ints specifying display rows, where 0 is
             *              the first row in the display
             */
            // @ts-ignore
            removeSelectionRows(rows: number /*int*/[]): void
            /**
             * Clears the selection.
             */
            // @ts-ignore
            clearSelection(): void
            /**
             * Returns true if the selection is currently empty.
             * @return true if the selection is currently empty
             */
            // @ts-ignore
            isSelectionEmpty(): boolean
            /**
             * Adds a listener for <code>TreeExpansion</code> events.
             * @param tel a TreeExpansionListener that will be notified when
             *             a tree node is expanded or collapsed (a "negative
             *             expansion")
             */
            // @ts-ignore
            addTreeExpansionListener(tel: javax.swing.event.TreeExpansionListener): void
            /**
             * Removes a listener for <code>TreeExpansion</code> events.
             * @param tel the <code>TreeExpansionListener</code> to remove
             */
            // @ts-ignore
            removeTreeExpansionListener(tel: javax.swing.event.TreeExpansionListener): void
            /**
             * Returns an array of all the <code>TreeExpansionListener</code>s added
             * to this JTree with addTreeExpansionListener().
             * @return all of the <code>TreeExpansionListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            getTreeExpansionListeners(): javax.swing.event.TreeExpansionListener[]
            /**
             * Adds a listener for <code>TreeWillExpand</code> events.
             * @param tel a <code>TreeWillExpandListener</code> that will be notified
             *             when a tree node will be expanded or collapsed (a "negative
             *             expansion")
             */
            // @ts-ignore
            addTreeWillExpandListener(tel: javax.swing.event.TreeWillExpandListener): void
            /**
             * Removes a listener for <code>TreeWillExpand</code> events.
             * @param tel the <code>TreeWillExpandListener</code> to remove
             */
            // @ts-ignore
            removeTreeWillExpandListener(tel: javax.swing.event.TreeWillExpandListener): void
            /**
             * Returns an array of all the <code>TreeWillExpandListener</code>s added
             * to this JTree with addTreeWillExpandListener().
             * @return all of the <code>TreeWillExpandListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            getTreeWillExpandListeners(): javax.swing.event.TreeWillExpandListener[]
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.  The event instance
             * is lazily created using the <code>path</code> parameter.
             * @param path the <code>TreePath</code> indicating the node that was
             *           expanded
             * @see EventListenerList
             */
            // @ts-ignore
            fireTreeExpanded(path: javax.swing.tree.TreePath): void
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.  The event instance
             * is lazily created using the <code>path</code> parameter.
             * @param path the <code>TreePath</code> indicating the node that was
             *           collapsed
             * @see EventListenerList
             */
            // @ts-ignore
            fireTreeCollapsed(path: javax.swing.tree.TreePath): void
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.  The event instance
             * is lazily created using the <code>path</code> parameter.
             * @param path the <code>TreePath</code> indicating the node that was
             *           expanded
             * @see EventListenerList
             */
            // @ts-ignore
            fireTreeWillExpand(path: javax.swing.tree.TreePath): void
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.  The event instance
             * is lazily created using the <code>path</code> parameter.
             * @param path the <code>TreePath</code> indicating the node that was
             *           expanded
             * @see EventListenerList
             */
            // @ts-ignore
            fireTreeWillCollapse(path: javax.swing.tree.TreePath): void
            /**
             * Adds a listener for <code>TreeSelection</code> events.
             * @param tsl the <code>TreeSelectionListener</code> that will be notified
             *             when a node is selected or deselected (a "negative
             *             selection")
             */
            // @ts-ignore
            addTreeSelectionListener(tsl: javax.swing.event.TreeSelectionListener): void
            /**
             * Removes a <code>TreeSelection</code> listener.
             * @param tsl the <code>TreeSelectionListener</code> to remove
             */
            // @ts-ignore
            removeTreeSelectionListener(tsl: javax.swing.event.TreeSelectionListener): void
            /**
             * Returns an array of all the <code>TreeSelectionListener</code>s added
             * to this JTree with addTreeSelectionListener().
             * @return all of the <code>TreeSelectionListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            getTreeSelectionListeners(): javax.swing.event.TreeSelectionListener[]
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.
             * @param e the <code>TreeSelectionEvent</code> to be fired;
             *           generated by the
             *           <code>TreeSelectionModel</code>
             *           when a node is selected or deselected
             * @see EventListenerList
             */
            // @ts-ignore
            fireValueChanged(e: javax.swing.event.TreeSelectionEvent): void
            /**
             * Sent when the tree has changed enough that we need to resize
             * the bounds, but not enough that we need to remove the
             * expanded node set (e.g nodes were expanded or collapsed, or
             * nodes were inserted into the tree). You should never have to
             * invoke this, the UI will invoke this as it needs to.
             */
            // @ts-ignore
            treeDidChange(): void
            /**
             * Sets the number of rows that are to be displayed.
             * This will only work if the tree is contained in a
             * <code>JScrollPane</code>,
             * and will adjust the preferred size and size of that scrollpane.
             * <p>
             * This is a bound property.
             * @param newCount the number of rows to display
             * @beaninfo bound: true
             *   description: The number of rows that are to be displayed.
             */
            // @ts-ignore
            setVisibleRowCount(newCount: number /*int*/): void
            /**
             * Returns the number of rows that are displayed in the display area.
             * @return the number of rows displayed
             */
            // @ts-ignore
            getVisibleRowCount(): int
            /**
             * Returns the TreePath to the next tree element that
             * begins with a prefix. To handle the conversion of a
             * <code>TreePath</code> into a String, <code>convertValueToText</code>
             * is used.
             * @param prefix the string to test for a match
             * @param startingRow the row for starting the search
             * @param bias the search direction, either
             *  Position.Bias.Forward or Position.Bias.Backward.
             * @return the TreePath of the next tree element that
             *  starts with the prefix; otherwise null
             * @exception IllegalArgumentException if prefix is null
             *  or startingRow is out of bounds
             * @since 1.4
             */
            // @ts-ignore
            getNextMatch(prefix: string, startingRow: number /*int*/, bias: javax.swing.text.Position.Bias): javax.swing.tree.TreePath
            /**
             * Returns the preferred display size of a <code>JTree</code>. The height is
             * determined from <code>getVisibleRowCount</code> and the width
             * is the current preferred width.
             * @return a <code>Dimension</code> object containing the preferred size
             */
            // @ts-ignore
            getPreferredScrollableViewportSize(): java.awt.Dimension
            /**
             * Returns the amount to increment when scrolling. The amount is
             * the height of the first displayed row that isn't completely in view
             * or, if it is totally displayed, the height of the next row in the
             * scrolling direction.
             * @param visibleRect the view area visible within the viewport
             * @param orientation either <code>SwingConstants.VERTICAL</code>
             *           or <code>SwingConstants.HORIZONTAL</code>
             * @param direction less than zero to scroll up/left,
             *           greater than zero for down/right
             * @return the "unit" increment for scrolling in the specified direction
             * @see JScrollBar#setUnitIncrement(int)
             */
            // @ts-ignore
            getScrollableUnitIncrement(visibleRect: java.awt.Rectangle, orientation: number /*int*/, direction: number /*int*/): int
            /**
             * Returns the amount for a block increment, which is the height or
             * width of <code>visibleRect</code>, based on <code>orientation</code>.
             * @param visibleRect the view area visible within the viewport
             * @param orientation either <code>SwingConstants.VERTICAL</code>
             *           or <code>SwingConstants.HORIZONTAL</code>
             * @param direction less than zero to scroll up/left,
             *           greater than zero for down/right.
             * @return the "block" increment for scrolling in the specified direction
             * @see JScrollBar#setBlockIncrement(int)
             */
            // @ts-ignore
            getScrollableBlockIncrement(visibleRect: java.awt.Rectangle, orientation: number /*int*/, direction: number /*int*/): int
            /**
             * Returns false to indicate that the width of the viewport does not
             * determine the width of the table, unless the preferred width of
             * the tree is smaller than the viewports width.  In other words:
             * ensure that the tree is never smaller than its viewport.
             * @return whether the tree should track the width of the viewport
             * @see Scrollable#getScrollableTracksViewportWidth
             */
            // @ts-ignore
            getScrollableTracksViewportWidth(): boolean
            /**
             * Returns false to indicate that the height of the viewport does not
             * determine the height of the table, unless the preferred height
             * of the tree is smaller than the viewports height.  In other words:
             * ensure that the tree is never smaller than its viewport.
             * @return whether the tree should track the height of the viewport
             * @see Scrollable#getScrollableTracksViewportHeight
             */
            // @ts-ignore
            getScrollableTracksViewportHeight(): boolean
            /**
             * Sets the expanded state of this <code>JTree</code>.
             * If <code>state</code> is
             * true, all parents of <code>path</code> and path are marked as
             * expanded. If <code>state</code> is false, all parents of
             * <code>path</code> are marked EXPANDED, but <code>path</code> itself
             * is marked collapsed.<p>
             * This will fail if a <code>TreeWillExpandListener</code> vetos it.
             */
            // @ts-ignore
            setExpandedState(path: javax.swing.tree.TreePath, state: boolean): void
            /**
             * Returns an <code>Enumeration</code> of <code>TreePaths</code>
             * that have been expanded that
             * are descendants of <code>parent</code>.
             */
            // @ts-ignore
            getDescendantToggledPaths(parent: javax.swing.tree.TreePath): java.util.Enumeration<javax.swing.tree.TreePath>
            /**
             * Removes any descendants of the <code>TreePaths</code> in
             * <code>toRemove</code>
             * that have been expanded.
             * @param toRemove an enumeration of the paths to remove; a value of
             *         {#code null} is ignored
             * @throws ClassCastException if {#code toRemove} contains an
             *          element that is not a {@code TreePath}; {@code null}
             *          values are ignored
             */
            // @ts-ignore
            removeDescendantToggledPaths(toRemove: java.util.Enumeration<javax.swing.tree.TreePath>): void
            /**
             * Clears the cache of toggled tree paths. This does NOT send out
             * any <code>TreeExpansionListener</code> events.
             */
            // @ts-ignore
            clearToggledPaths(): void
            /**
             * Creates and returns an instance of <code>TreeModelHandler</code>.
             * The returned
             * object is responsible for updating the expanded state when the
             * <code>TreeModel</code> changes.
             * <p>
             * For more information on what expanded state means, see the
             * <a href=#jtree_description>JTree description</a> above.
             */
            // @ts-ignore
            createTreeModelListener(): javax.swing.event.TreeModelListener
            /**
             * Removes any paths in the selection that are descendants of
             * <code>path</code>. If <code>includePath</code> is true and
             * <code>path</code> is selected, it will be removed from the selection.
             * @return true if a descendant was selected
             * @since 1.3
             */
            // @ts-ignore
            removeDescendantSelectedPaths(path: javax.swing.tree.TreePath, includePath: boolean): boolean
            /**
             * Returns a string representation of this <code>JTree</code>.
             * This method
             * is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not
             * be <code>null</code>.
             * @return a string representation of this <code>JTree</code>.
             */
            // @ts-ignore
            paramString(): java.lang.String
            /**
             * Gets the AccessibleContext associated with this JTree.
             * For JTrees, the AccessibleContext takes the form of an
             * AccessibleJTree.
             * A new AccessibleJTree instance is created if necessary.
             * @return an AccessibleJTree that serves as the
             *          AccessibleContext of this JTree
             */
            // @ts-ignore
            getAccessibleContext(): javax.accessibility.AccessibleContext
        }
    }
}
