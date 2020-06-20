declare namespace javax {
    namespace swing {
        namespace tree {
            /**
             * NOTE: This will become more open in a future release.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Rob Davis
             * @author Ray Ryan
             * @author Scott Violet
             */
            // @ts-ignore
            class VariableHeightLayoutCache extends javax.swing.tree.AbstractLayoutCache {
                // @ts-ignore
                constructor()
                /**
                 * Sets the <code>TreeModel</code> that will provide the data.
                 * @param newModel the <code>TreeModel</code> that is to provide the data
                 * @beaninfo bound: true
                 *   description: The TreeModel that will provide the data.
                 */
                // @ts-ignore
                setModel(newModel: javax.swing.tree.TreeModel): void
                /**
                 * Determines whether or not the root node from
                 * the <code>TreeModel</code> is visible.
                 * @param rootVisible true if the root node of the tree is to be displayed
                 * @see #rootVisible
                 * @beaninfo bound: true
                 *   description: Whether or not the root node
                 *                from the TreeModel is visible.
                 */
                // @ts-ignore
                setRootVisible(rootVisible: boolean): void
                /**
                 * Sets the height of each cell.  If the specified value
                 * is less than or equal to zero the current cell renderer is
                 * queried for each row's height.
                 * @param rowHeight the height of each cell, in pixels
                 * @beaninfo bound: true
                 *   description: The height of each cell.
                 */
                // @ts-ignore
                setRowHeight(rowHeight: number /*int*/): void
                /**
                 * Sets the renderer that is responsible for drawing nodes in the tree.
                 * @param nd the renderer
                 */
                // @ts-ignore
                setNodeDimensions(nd: javax.swing.tree.AbstractLayoutCache.NodeDimensions): void
                /**
                 * Marks the path <code>path</code> expanded state to
                 * <code>isExpanded</code>.
                 * @param path the <code>TreePath</code> of interest
                 * @param isExpanded true if the path should be expanded, otherwise false
                 */
                // @ts-ignore
                setExpandedState(path: javax.swing.tree.TreePath, isExpanded: boolean): void
                /**
                 * Returns true if the path is expanded, and visible.
                 * @return true if the path is expanded and visible, otherwise false
                 */
                // @ts-ignore
                getExpandedState(path: javax.swing.tree.TreePath): boolean
                /**
                 * Returns the <code>Rectangle</code> enclosing the label portion
                 * into which the item identified by <code>path</code> will be drawn.
                 * @param path  the path to be drawn
                 * @param placeIn the bounds of the enclosing rectangle
                 * @return the bounds of the enclosing rectangle or <code>null</code>
                 *     if the node could not be ascertained
                 */
                // @ts-ignore
                getBounds(path: javax.swing.tree.TreePath, placeIn: java.awt.Rectangle): java.awt.Rectangle
                /**
                 * Returns the path for <code>row</code>.  If <code>row</code>
                 * is not visible, <code>null</code> is returned.
                 * @param row the location of interest
                 * @return the path for <code>row</code>, or <code>null</code>
                 *  if <code>row</code> is not visible
                 */
                // @ts-ignore
                getPathForRow(row: number /*int*/): javax.swing.tree.TreePath
                /**
                 * Returns the row where the last item identified in path is visible.
                 * Will return -1 if any of the elements in path are not
                 * currently visible.
                 * @param path the <code>TreePath</code> of interest
                 * @return the row where the last item in path is visible
                 */
                // @ts-ignore
                getRowForPath(path: javax.swing.tree.TreePath): int
                /**
                 * Returns the number of visible rows.
                 * @return the number of visible rows
                 */
                // @ts-ignore
                getRowCount(): int
                /**
                 * Instructs the <code>LayoutCache</code> that the bounds for
                 * <code>path</code> are invalid, and need to be updated.
                 * @param path the <code>TreePath</code> which is now invalid
                 */
                // @ts-ignore
                invalidatePathBounds(path: javax.swing.tree.TreePath): void
                /**
                 * Returns the preferred height.
                 * @return the preferred height
                 */
                // @ts-ignore
                getPreferredHeight(): int
                /**
                 * Returns the preferred width and height for the region in
                 * <code>visibleRegion</code>.
                 * @param bounds  the region being queried
                 */
                // @ts-ignore
                getPreferredWidth(bounds: java.awt.Rectangle): int
                /**
                 * Returns the path to the node that is closest to x,y.  If
                 * there is nothing currently visible this will return <code>null</code>,
                 * otherwise it will always return a valid path.
                 * If you need to test if the
                 * returned object is exactly at x, y you should get the bounds for
                 * the returned path and test x, y against that.
                 * @param x  the x-coordinate
                 * @param y  the y-coordinate
                 * @return the path to the node that is closest to x, y
                 */
                // @ts-ignore
                getPathClosestTo(x: number /*int*/, y: number /*int*/): javax.swing.tree.TreePath
                /**
                 * Returns an <code>Enumerator</code> that increments over the visible paths
                 * starting at the passed in location. The ordering of the enumeration
                 * is based on how the paths are displayed.
                 * @param path the location in the <code>TreePath</code> to start
                 * @return an <code>Enumerator</code> that increments over the visible
                 *      paths
                 */
                // @ts-ignore
                getVisiblePathsFrom(path: javax.swing.tree.TreePath): java.util.Enumeration<javax.swing.tree.TreePath>
                /**
                 * Returns the number of visible children for <code>path</code>.
                 * @return the number of visible children for <code>path</code>
                 */
                // @ts-ignore
                getVisibleChildCount(path: javax.swing.tree.TreePath): int
                /**
                 * Informs the <code>TreeState</code> that it needs to recalculate
                 * all the sizes it is referencing.
                 */
                // @ts-ignore
                invalidateSizes(): void
                /**
                 * Returns true if the value identified by <code>path</code> is
                 * currently expanded.
                 * @return true if the value identified by <code>path</code> is
                 *     currently expanded
                 */
                // @ts-ignore
                isExpanded(path: javax.swing.tree.TreePath): boolean
                /**
                 * Invoked after a node (or a set of siblings) has changed in some
                 * way. The node(s) have not changed locations in the tree or
                 * altered their children arrays, but other attributes have
                 * changed and may affect presentation. Example: the name of a
                 * file has changed, but it is in the same location in the file
                 * system.
                 * <p><code>e.path</code> returns the path the parent of the
                 * changed node(s).
                 * <p><code>e.childIndices</code> returns the index(es) of the
                 * changed node(s).
                 * @param e the <code>TreeModelEvent</code> of interest
                 */
                // @ts-ignore
                treeNodesChanged(e: javax.swing.event.TreeModelEvent): void
                /**
                 * Invoked after nodes have been inserted into the tree.
                 * <p><code>e.path</code> returns the parent of the new nodes.
                 * <p><code>e.childIndices</code> returns the indices of the new nodes in
                 * ascending order.
                 * @param e the <code>TreeModelEvent</code> of interest
                 */
                // @ts-ignore
                treeNodesInserted(e: javax.swing.event.TreeModelEvent): void
                /**
                 * Invoked after nodes have been removed from the tree.  Note that
                 * if a subtree is removed from the tree, this method may only be
                 * invoked once for the root of the removed subtree, not once for
                 * each individual set of siblings removed.
                 * <p><code>e.path</code> returns the former parent of the deleted nodes.
                 * <p><code>e.childIndices</code> returns the indices the nodes had
                 * before they were deleted in ascending order.
                 * @param e the <code>TreeModelEvent</code> of interest
                 */
                // @ts-ignore
                treeNodesRemoved(e: javax.swing.event.TreeModelEvent): void
                /**
                 * Invoked after the tree has drastically changed structure from a
                 * given node down.  If the path returned by <code>e.getPath</code>
                 * is of length one and the first element does not identify the
                 * current root node the first element should become the new root
                 * of the tree.
                 * <p><code>e.path</code> holds the path to the node.
                 * <p><code>e.childIndices</code> returns <code>null</code>.
                 * @param e the <code>TreeModelEvent</code> of interest
                 */
                // @ts-ignore
                treeStructureChanged(e: javax.swing.event.TreeModelEvent): void
            }
        }
    }
}
