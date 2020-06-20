declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * The basic L&amp;F for a hierarchical data structure.
                 * <p>
                 * @author Scott Violet
                 * @author Shannon Hickey (drag and drop)
                 */
                // @ts-ignore
                class BasicTreeUI extends javax.swing.plaf.TreeUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    collapsedIcon: javax.swing.Icon
                    // @ts-ignore
                    expandedIcon: javax.swing.Icon
                    /**
                     * Distance between left margin and where vertical dashes will be
                     * drawn.
                     */
                    // @ts-ignore
                    leftChildIndent: number /*int*/
                    /**
                     * Distance to add to leftChildIndent to determine where cell
                     * contents will be drawn.
                     */
                    // @ts-ignore
                    rightChildIndent: number /*int*/
                    /**
                     * Total distance that will be indented.  The sum of leftChildIndent
                     * and rightChildIndent.
                     */
                    // @ts-ignore
                    totalChildIndent: number /*int*/
                    /**
                     * Minimum preferred size.
                     */
                    // @ts-ignore
                    preferredMinSize: java.awt.Dimension
                    /**
                     * Index of the row that was last selected.
                     */
                    // @ts-ignore
                    lastSelectedRow: number /*int*/
                    /**
                     * Component that we're going to be drawing into.
                     */
                    // @ts-ignore
                    tree: javax.swing.JTree
                    /**
                     * Renderer that is being used to do the actual cell drawing.
                     */
                    // @ts-ignore
                    currentCellRenderer: javax.swing.tree.TreeCellRenderer
                    /**
                     * Set to true if the renderer that is currently in the tree was
                     * created by this instance.
                     */
                    // @ts-ignore
                    createdRenderer: boolean
                    /**
                     * Editor for the tree.
                     */
                    // @ts-ignore
                    cellEditor: javax.swing.tree.TreeCellEditor
                    /**
                     * Set to true if editor that is currently in the tree was
                     * created by this instance.
                     */
                    // @ts-ignore
                    createdCellEditor: boolean
                    /**
                     * Set to false when editing and shouldSelectCell() returns true meaning
                     * the node should be selected before editing, used in completeEditing.
                     */
                    // @ts-ignore
                    stopEditingInCompleteEditing: boolean
                    /**
                     * Used to paint the TreeCellRenderer.
                     */
                    // @ts-ignore
                    rendererPane: javax.swing.CellRendererPane
                    /**
                     * Size needed to completely display all the nodes.
                     */
                    // @ts-ignore
                    preferredSize: java.awt.Dimension
                    /**
                     * Is the preferredSize valid?
                     */
                    // @ts-ignore
                    validCachedPreferredSize: boolean
                    /**
                     * Object responsible for handling sizing and expanded issues.
                     */
                    // @ts-ignore
                    treeState: javax.swing.tree.AbstractLayoutCache
                    /**
                     * Used for minimizing the drawing of vertical lines.
                     */
                    // @ts-ignore
                    drawingCache: java.util.Hashtable<javax.swing.tree.TreePath, java.lang.Boolean>
                    /**
                     * True if doing optimizations for a largeModel. Subclasses that
                     * don't support this may wish to override createLayoutCache to not
                     * return a FixedHeightLayoutCache instance.
                     */
                    // @ts-ignore
                    largeModel: boolean
                    /**
                     * Reponsible for telling the TreeState the size needed for a node.
                     */
                    // @ts-ignore
                    nodeDimensions: javax.swing.tree.AbstractLayoutCache.NodeDimensions
                    /**
                     * Used to determine what to display.
                     */
                    // @ts-ignore
                    treeModel: javax.swing.tree.TreeModel
                    /**
                     * Model maintaining the selection.
                     */
                    // @ts-ignore
                    treeSelectionModel: javax.swing.tree.TreeSelectionModel
                    /**
                     * How much the depth should be offset to properly calculate
                     * x locations. This is based on whether or not the root is visible,
                     * and if the root handles are visible.
                     */
                    // @ts-ignore
                    depthOffset: number /*int*/
                    /**
                     * When editing, this will be the Component that is doing the actual
                     * editing.
                     */
                    // @ts-ignore
                    editingComponent: java.awt.Component
                    /**
                     * Path that is being edited.
                     */
                    // @ts-ignore
                    editingPath: javax.swing.tree.TreePath
                    /**
                     * Row that is being edited. Should only be referenced if
                     * editingComponent is not null.
                     */
                    // @ts-ignore
                    editingRow: number /*int*/
                    /**
                     * Set to true if the editor has a different size than the renderer.
                     */
                    // @ts-ignore
                    editorHasDifferentSize: boolean
                    // @ts-ignore
                    createUI(x: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    getHashColor(): java.awt.Color
                    // @ts-ignore
                    setHashColor(color: java.awt.Color): void
                    // @ts-ignore
                    setLeftChildIndent(newAmount: number /*int*/): void
                    // @ts-ignore
                    getLeftChildIndent(): int
                    // @ts-ignore
                    setRightChildIndent(newAmount: number /*int*/): void
                    // @ts-ignore
                    getRightChildIndent(): int
                    // @ts-ignore
                    setExpandedIcon(newG: javax.swing.Icon): void
                    // @ts-ignore
                    getExpandedIcon(): javax.swing.Icon
                    // @ts-ignore
                    setCollapsedIcon(newG: javax.swing.Icon): void
                    // @ts-ignore
                    getCollapsedIcon(): javax.swing.Icon
                    /**
                     * Updates the componentListener, if necessary.
                     */
                    // @ts-ignore
                    setLargeModel(largeModel: boolean): void
                    // @ts-ignore
                    isLargeModel(): boolean
                    /**
                     * Sets the row height, this is forwarded to the treeState.
                     */
                    // @ts-ignore
                    setRowHeight(rowHeight: number /*int*/): void
                    // @ts-ignore
                    getRowHeight(): int
                    /**
                     * Sets the TreeCellRenderer to <code>tcr</code>. This invokes
                     * <code>updateRenderer</code>.
                     */
                    // @ts-ignore
                    setCellRenderer(tcr: javax.swing.tree.TreeCellRenderer): void
                    /**
                     * Return currentCellRenderer, which will either be the trees
                     * renderer, or defaultCellRenderer, which ever wasn't null.
                     */
                    // @ts-ignore
                    getCellRenderer(): javax.swing.tree.TreeCellRenderer
                    /**
                     * Sets the TreeModel.
                     */
                    // @ts-ignore
                    setModel(model: javax.swing.tree.TreeModel): void
                    // @ts-ignore
                    getModel(): javax.swing.tree.TreeModel
                    /**
                     * Sets the root to being visible.
                     */
                    // @ts-ignore
                    setRootVisible(newValue: boolean): void
                    // @ts-ignore
                    isRootVisible(): boolean
                    /**
                     * Determines whether the node handles are to be displayed.
                     */
                    // @ts-ignore
                    setShowsRootHandles(newValue: boolean): void
                    // @ts-ignore
                    getShowsRootHandles(): boolean
                    /**
                     * Sets the cell editor.
                     */
                    // @ts-ignore
                    setCellEditor(editor: javax.swing.tree.TreeCellEditor): void
                    // @ts-ignore
                    getCellEditor(): javax.swing.tree.TreeCellEditor
                    /**
                     * Configures the receiver to allow, or not allow, editing.
                     */
                    // @ts-ignore
                    setEditable(newValue: boolean): void
                    // @ts-ignore
                    isEditable(): boolean
                    /**
                     * Resets the selection model. The appropriate listener are installed
                     * on the model.
                     */
                    // @ts-ignore
                    setSelectionModel(newLSM: javax.swing.tree.TreeSelectionModel): void
                    // @ts-ignore
                    getSelectionModel(): javax.swing.tree.TreeSelectionModel
                    /**
                     * Returns the Rectangle enclosing the label portion that the
                     * last item in path will be drawn into.  Will return null if
                     * any component in path is currently valid.
                     */
                    // @ts-ignore
                    getPathBounds(tree: javax.swing.JTree, path: javax.swing.tree.TreePath): java.awt.Rectangle
                    /**
                     * Returns the path for passed in row.  If row is not visible
                     * null is returned.
                     */
                    // @ts-ignore
                    getPathForRow(tree: javax.swing.JTree, row: number /*int*/): javax.swing.tree.TreePath
                    /**
                     * Returns the row that the last item identified in path is visible
                     * at.  Will return -1 if any of the elements in path are not
                     * currently visible.
                     */
                    // @ts-ignore
                    getRowForPath(tree: javax.swing.JTree, path: javax.swing.tree.TreePath): int
                    /**
                     * Returns the number of rows that are being displayed.
                     */
                    // @ts-ignore
                    getRowCount(tree: javax.swing.JTree): int
                    /**
                     * Returns the path to the node that is closest to x,y.  If
                     * there is nothing currently visible this will return null, otherwise
                     * it'll always return a valid path.  If you need to test if the
                     * returned object is exactly at x, y you should get the bounds for
                     * the returned path and test x, y against that.
                     */
                    // @ts-ignore
                    getClosestPathForLocation(tree: javax.swing.JTree, x: number /*int*/, y: number /*int*/): javax.swing.tree.TreePath
                    /**
                     * Returns true if the tree is being edited.  The item that is being
                     * edited can be returned by getEditingPath().
                     */
                    // @ts-ignore
                    isEditing(tree: javax.swing.JTree): boolean
                    /**
                     * Stops the current editing session.  This has no effect if the
                     * tree isn't being edited.  Returns true if the editor allows the
                     * editing session to stop.
                     */
                    // @ts-ignore
                    stopEditing(tree: javax.swing.JTree): boolean
                    /**
                     * Cancels the current editing session.
                     */
                    // @ts-ignore
                    cancelEditing(tree: javax.swing.JTree): void
                    /**
                     * Selects the last item in path and tries to edit it.  Editing will
                     * fail if the CellEditor won't allow it for the selected item.
                     */
                    // @ts-ignore
                    startEditingAtPath(tree: javax.swing.JTree, path: javax.swing.tree.TreePath): void
                    /**
                     * Returns the path to the element that is being edited.
                     */
                    // @ts-ignore
                    getEditingPath(tree: javax.swing.JTree): javax.swing.tree.TreePath
                    // @ts-ignore
                    installUI(c: javax.swing.JComponent): void
                    /**
                     * Invoked after the <code>tree</code> instance variable has been
                     * set, but before any defaults/listeners have been installed.
                     */
                    // @ts-ignore
                    prepareForUIInstall(): void
                    /**
                     * Invoked from installUI after all the defaults/listeners have been
                     * installed.
                     */
                    // @ts-ignore
                    completeUIInstall(): void
                    // @ts-ignore
                    installDefaults(): void
                    // @ts-ignore
                    installListeners(): void
                    // @ts-ignore
                    installKeyboardActions(): void
                    /**
                     * Intalls the subcomponents of the tree, which is the renderer pane.
                     */
                    // @ts-ignore
                    installComponents(): void
                    /**
                     * Creates an instance of NodeDimensions that is able to determine
                     * the size of a given node in the tree.
                     */
                    // @ts-ignore
                    createNodeDimensions(): javax.swing.tree.AbstractLayoutCache.NodeDimensions
                    /**
                     * Creates a listener that is responsible that updates the UI based on
                     * how the tree changes.
                     */
                    // @ts-ignore
                    createPropertyChangeListener(): java.beans.PropertyChangeListener
                    /**
                     * Creates the listener responsible for updating the selection based on
                     * mouse events.
                     */
                    // @ts-ignore
                    createMouseListener(): java.awt.event.MouseListener
                    /**
                     * Creates a listener that is responsible for updating the display
                     * when focus is lost/gained.
                     */
                    // @ts-ignore
                    createFocusListener(): java.awt.event.FocusListener
                    /**
                     * Creates the listener reponsible for getting key events from
                     * the tree.
                     */
                    // @ts-ignore
                    createKeyListener(): java.awt.event.KeyListener
                    /**
                     * Creates the listener responsible for getting property change
                     * events from the selection model.
                     */
                    // @ts-ignore
                    createSelectionModelPropertyChangeListener(): java.beans.PropertyChangeListener
                    /**
                     * Creates the listener that updates the display based on selection change
                     * methods.
                     */
                    // @ts-ignore
                    createTreeSelectionListener(): javax.swing.event.TreeSelectionListener
                    /**
                     * Creates a listener to handle events from the current editor.
                     */
                    // @ts-ignore
                    createCellEditorListener(): javax.swing.event.CellEditorListener
                    /**
                     * Creates and returns a new ComponentHandler. This is used for
                     * the large model to mark the validCachedPreferredSize as invalid
                     * when the component moves.
                     */
                    // @ts-ignore
                    createComponentListener(): java.awt.event.ComponentListener
                    /**
                     * Creates and returns the object responsible for updating the treestate
                     * when nodes expanded state changes.
                     */
                    // @ts-ignore
                    createTreeExpansionListener(): javax.swing.event.TreeExpansionListener
                    /**
                     * Creates the object responsible for managing what is expanded, as
                     * well as the size of nodes.
                     */
                    // @ts-ignore
                    createLayoutCache(): javax.swing.tree.AbstractLayoutCache
                    /**
                     * Returns the renderer pane that renderer components are placed in.
                     */
                    // @ts-ignore
                    createCellRendererPane(): javax.swing.CellRendererPane
                    /**
                     * Creates a default cell editor.
                     */
                    // @ts-ignore
                    createDefaultCellEditor(): javax.swing.tree.TreeCellEditor
                    /**
                     * Returns the default cell renderer that is used to do the
                     * stamping of each node.
                     */
                    // @ts-ignore
                    createDefaultCellRenderer(): javax.swing.tree.TreeCellRenderer
                    /**
                     * Returns a listener that can update the tree when the model changes.
                     */
                    // @ts-ignore
                    createTreeModelListener(): javax.swing.event.TreeModelListener
                    // @ts-ignore
                    uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    prepareForUIUninstall(): void
                    // @ts-ignore
                    completeUIUninstall(): void
                    // @ts-ignore
                    uninstallDefaults(): void
                    // @ts-ignore
                    uninstallListeners(): void
                    // @ts-ignore
                    uninstallKeyboardActions(): void
                    /**
                     * Uninstalls the renderer pane.
                     */
                    // @ts-ignore
                    uninstallComponents(): void
                    /**
                     * Returns the baseline.
                     * @throws NullPointerException {#inheritDoc}
                     * @throws IllegalArgumentException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBaseline(c: javax.swing.JComponent, width: number /*int*/, height: number /*int*/): int
                    /**
                     * Returns an enum indicating how the baseline of the component
                     * changes as the size changes.
                     * @throws NullPointerException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBaselineResizeBehavior(c: javax.swing.JComponent): java.awt.Component.BaselineResizeBehavior
                    // @ts-ignore
                    paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    /**
                     * Tells if a {@code DropLocation} should be indicated by a line between
                     * nodes. This is meant for {@code javax.swing.DropMode.INSERT} and
                     * {@code javax.swing.DropMode.ON_OR_INSERT} drop modes.
                     * @param loc a {#code DropLocation}
                     * @return {#code true} if the drop location should be shown as a line
                     * @since 1.7
                     */
                    // @ts-ignore
                    isDropLine(loc: javax.swing.JTree.DropLocation): boolean
                    /**
                     * Paints the drop line.
                     * @param g {#code Graphics} object to draw on
                     * @since 1.7
                     */
                    // @ts-ignore
                    paintDropLine(g: java.awt.Graphics): void
                    /**
                     * Returns a unbounding box for the drop line.
                     * @param loc a {#code DropLocation}
                     * @return bounding box for the drop line
                     * @since 1.7
                     */
                    // @ts-ignore
                    getDropLineRect(loc: javax.swing.JTree.DropLocation): java.awt.Rectangle
                    /**
                     * Paints the horizontal part of the leg. The receiver should
                     * NOT modify <code>clipBounds</code>, or <code>insets</code>.<p>
                     * NOTE: <code>parentRow</code> can be -1 if the root is not visible.
                     */
                    // @ts-ignore
                    paintHorizontalPartOfLeg(g: java.awt.Graphics, clipBounds: java.awt.Rectangle, insets: java.awt.Insets, bounds: java.awt.Rectangle, path: javax.swing.tree.TreePath, row: number /*int*/, isExpanded: boolean, hasBeenExpanded: boolean, isLeaf: boolean): void
                    /**
                     * Paints the vertical part of the leg. The receiver should
                     * NOT modify <code>clipBounds</code>, <code>insets</code>.
                     */
                    // @ts-ignore
                    paintVerticalPartOfLeg(g: java.awt.Graphics, clipBounds: java.awt.Rectangle, insets: java.awt.Insets, path: javax.swing.tree.TreePath): void
                    /**
                     * Paints the expand (toggle) part of a row. The receiver should
                     * NOT modify <code>clipBounds</code>, or <code>insets</code>.
                     */
                    // @ts-ignore
                    paintExpandControl(g: java.awt.Graphics, clipBounds: java.awt.Rectangle, insets: java.awt.Insets, bounds: java.awt.Rectangle, path: javax.swing.tree.TreePath, row: number /*int*/, isExpanded: boolean, hasBeenExpanded: boolean, isLeaf: boolean): void
                    /**
                     * Paints the renderer part of a row. The receiver should
                     * NOT modify <code>clipBounds</code>, or <code>insets</code>.
                     */
                    // @ts-ignore
                    paintRow(g: java.awt.Graphics, clipBounds: java.awt.Rectangle, insets: java.awt.Insets, bounds: java.awt.Rectangle, path: javax.swing.tree.TreePath, row: number /*int*/, isExpanded: boolean, hasBeenExpanded: boolean, isLeaf: boolean): void
                    /**
                     * Returns true if the expand (toggle) control should be drawn for
                     * the specified row.
                     */
                    // @ts-ignore
                    shouldPaintExpandControl(path: javax.swing.tree.TreePath, row: number /*int*/, isExpanded: boolean, hasBeenExpanded: boolean, isLeaf: boolean): boolean
                    /**
                     * Paints a vertical line.
                     */
                    // @ts-ignore
                    paintVerticalLine(g: java.awt.Graphics, c: javax.swing.JComponent, x: number /*int*/, top: number /*int*/, bottom: number /*int*/): void
                    /**
                     * Paints a horizontal line.
                     */
                    // @ts-ignore
                    paintHorizontalLine(g: java.awt.Graphics, c: javax.swing.JComponent, y: number /*int*/, left: number /*int*/, right: number /*int*/): void
                    /**
                     * The vertical element of legs between nodes starts at the bottom of the
                     * parent node by default.  This method makes the leg start below that.
                     */
                    // @ts-ignore
                    getVerticalLegBuffer(): int
                    /**
                     * The horizontal element of legs between nodes starts at the
                     * right of the left-hand side of the child node by default.  This
                     * method makes the leg end before that.
                     */
                    // @ts-ignore
                    getHorizontalLegBuffer(): int
                    // @ts-ignore
                    drawCentered(c: java.awt.Component, graphics: java.awt.Graphics, icon: javax.swing.Icon, x: number /*int*/, y: number /*int*/): void
                    // @ts-ignore
                    drawDashedHorizontalLine(g: java.awt.Graphics, y: number /*int*/, x1: number /*int*/, x2: number /*int*/): void
                    // @ts-ignore
                    drawDashedVerticalLine(g: java.awt.Graphics, x: number /*int*/, y1: number /*int*/, y2: number /*int*/): void
                    /**
                     * Returns the location, along the x-axis, to render a particular row
                     * at. The return value does not include any Insets specified on the JTree.
                     * This does not check for the validity of the row or depth, it is assumed
                     * to be correct and will not throw an Exception if the row or depth
                     * doesn't match that of the tree.
                     * @param row Row to return x location for
                     * @param depth Depth of the row
                     * @return amount to indent the given row.
                     * @since 1.5
                     */
                    // @ts-ignore
                    getRowX(row: number /*int*/, depth: number /*int*/): int
                    /**
                     * Makes all the nodes that are expanded in JTree expanded in LayoutCache.
                     * This invokes updateExpandedDescendants with the root path.
                     */
                    // @ts-ignore
                    updateLayoutCacheExpandedNodes(): void
                    /**
                     * Updates the expanded state of all the descendants of <code>path</code>
                     * by getting the expanded descendants from the tree and forwarding
                     * to the tree state.
                     */
                    // @ts-ignore
                    updateExpandedDescendants(path: javax.swing.tree.TreePath): void
                    /**
                     * Returns a path to the last child of <code>parent</code>.
                     */
                    // @ts-ignore
                    getLastChildPath(parent: javax.swing.tree.TreePath): javax.swing.tree.TreePath
                    /**
                     * Updates how much each depth should be offset by.
                     */
                    // @ts-ignore
                    updateDepthOffset(): void
                    /**
                     * Updates the cellEditor based on the editability of the JTree that
                     * we're contained in.  If the tree is editable but doesn't have a
                     * cellEditor, a basic one will be used.
                     */
                    // @ts-ignore
                    updateCellEditor(): void
                    /**
                     * Messaged from the tree we're in when the renderer has changed.
                     */
                    // @ts-ignore
                    updateRenderer(): void
                    /**
                     * Resets the TreeState instance based on the tree we're providing the
                     * look and feel for.
                     */
                    // @ts-ignore
                    configureLayoutCache(): void
                    /**
                     * Marks the cached size as being invalid, and messages the
                     * tree with <code>treeDidChange</code>.
                     */
                    // @ts-ignore
                    updateSize(): void
                    /**
                     * Updates the <code>preferredSize</code> instance variable,
                     * which is returned from <code>getPreferredSize()</code>.<p>
                     * For left to right orientations, the size is determined from the
                     * current AbstractLayoutCache. For RTL orientations, the preferred size
                     * becomes the width minus the minimum x position.
                     */
                    // @ts-ignore
                    updateCachedPreferredSize(): void
                    /**
                     * Messaged from the VisibleTreeNode after it has been expanded.
                     */
                    // @ts-ignore
                    pathWasExpanded(path: javax.swing.tree.TreePath): void
                    /**
                     * Messaged from the VisibleTreeNode after it has collapsed.
                     */
                    // @ts-ignore
                    pathWasCollapsed(path: javax.swing.tree.TreePath): void
                    /**
                     * Ensures that the rows identified by beginRow through endRow are
                     * visible.
                     */
                    // @ts-ignore
                    ensureRowsAreVisible(beginRow: number /*int*/, endRow: number /*int*/): void
                    /**
                     * Sets the preferred minimum size.
                     */
                    // @ts-ignore
                    setPreferredMinSize(newSize: java.awt.Dimension): void
                    /**
                     * Returns the minimum preferred size.
                     */
                    // @ts-ignore
                    getPreferredMinSize(): java.awt.Dimension
                    /**
                     * Returns the preferred size to properly display the tree,
                     * this is a cover method for getPreferredSize(c, true).
                     */
                    // @ts-ignore
                    getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Returns the preferred size to represent the tree in
                     * <I>c</I>.  If <I>checkConsistency</I> is true
                     * <b>checkConsistency</b> is messaged first.
                     */
                    // @ts-ignore
                    getPreferredSize(c: javax.swing.JComponent, checkConsistency: boolean): java.awt.Dimension
                    /**
                     * Returns the minimum size for this component.  Which will be
                     * the min preferred size or 0, 0.
                     */
                    // @ts-ignore
                    getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Returns the maximum size for this component, which will be the
                     * preferred size if the instance is currently in a JTree, or 0, 0.
                     */
                    // @ts-ignore
                    getMaximumSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Messages to stop the editing session. If the UI the receiver
                     * is providing the look and feel for returns true from
                     * <code>getInvokesStopCellEditing</code>, stopCellEditing will
                     * invoked on the current editor. Then completeEditing will
                     * be messaged with false, true, false to cancel any lingering
                     * editing.
                     */
                    // @ts-ignore
                    completeEditing(): void
                    /**
                     * Stops the editing session.  If messageStop is true the editor
                     * is messaged with stopEditing, if messageCancel is true the
                     * editor is messaged with cancelEditing. If messageTree is true
                     * the treeModel is messaged with valueForPathChanged.
                     */
                    // @ts-ignore
                    completeEditing(messageStop: boolean, messageCancel: boolean, messageTree: boolean): void
                    /**
                     * Will start editing for node if there is a cellEditor and
                     * shouldSelectCell returns true.<p>
                     * This assumes that path is valid and visible.
                     */
                    // @ts-ignore
                    startEditing(path: javax.swing.tree.TreePath, event: java.awt.event.MouseEvent): boolean
                    /**
                     * If the <code>mouseX</code> and <code>mouseY</code> are in the
                     * expand/collapse region of the <code>row</code>, this will toggle
                     * the row.
                     */
                    // @ts-ignore
                    checkForClickInExpandControl(path: javax.swing.tree.TreePath, mouseX: number /*int*/, mouseY: number /*int*/): void
                    /**
                     * Returns true if <code>mouseX</code> and <code>mouseY</code> fall
                     * in the area of row that is used to expand/collapse the node and
                     * the node at <code>row</code> does not represent a leaf.
                     */
                    // @ts-ignore
                    isLocationInExpandControl(path: javax.swing.tree.TreePath, mouseX: number /*int*/, mouseY: number /*int*/): boolean
                    /**
                     * Messaged when the user clicks the particular row, this invokes
                     * toggleExpandState.
                     */
                    // @ts-ignore
                    handleExpandControlClick(path: javax.swing.tree.TreePath, mouseX: number /*int*/, mouseY: number /*int*/): void
                    /**
                     * Expands path if it is not expanded, or collapses row if it is expanded.
                     * If expanding a path and JTree scrolls on expand, ensureRowsAreVisible
                     * is invoked to scroll as many of the children to visible as possible
                     * (tries to scroll to last visible descendant of path).
                     */
                    // @ts-ignore
                    toggleExpandState(path: javax.swing.tree.TreePath): void
                    /**
                     * Returning true signifies a mouse event on the node should toggle
                     * the selection of only the row under mouse.
                     */
                    // @ts-ignore
                    isToggleSelectionEvent(event: java.awt.event.MouseEvent): boolean
                    /**
                     * Returning true signifies a mouse event on the node should select
                     * from the anchor point.
                     */
                    // @ts-ignore
                    isMultiSelectEvent(event: java.awt.event.MouseEvent): boolean
                    /**
                     * Returning true indicates the row under the mouse should be toggled
                     * based on the event. This is invoked after checkForClickInExpandControl,
                     * implying the location is not in the expand (toggle) control
                     */
                    // @ts-ignore
                    isToggleEvent(event: java.awt.event.MouseEvent): boolean
                    /**
                     * Messaged to update the selection based on a MouseEvent over a
                     * particular row. If the event is a toggle selection event, the
                     * row is either selected, or deselected. If the event identifies
                     * a multi selection event, the selection is updated from the
                     * anchor point. Otherwise the row is selected, and if the event
                     * specified a toggle event the row is expanded/collapsed.
                     */
                    // @ts-ignore
                    selectPathForEvent(path: javax.swing.tree.TreePath, event: java.awt.event.MouseEvent): void
                    /**
                     * @return true if the node at <code>row</code> is a leaf.
                     */
                    // @ts-ignore
                    isLeaf(row: number /*int*/): boolean
                    /**
                     * Updates the lead row of the selection.
                     * @since 1.7
                     */
                    // @ts-ignore
                    updateLeadSelectionRow(): void
                    /**
                     * Returns the lead row of the selection.
                     * @return selection lead row
                     * @since 1.7
                     */
                    // @ts-ignore
                    getLeadSelectionRow(): int
                }
            }
        }
    }
}
