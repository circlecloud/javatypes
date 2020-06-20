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
             * @author Scott Violet
             */
            // @ts-ignore
            class FixedHeightLayoutCache extends javax.swing.tree.AbstractLayoutCache {
                // @ts-ignore
                constructor()
                /**
                 * Sets the TreeModel that will provide the data.
                 * @param newModel the TreeModel that is to provide the data
                 */
                // @ts-ignore
                setModel(newModel: javax.swing.tree.TreeModel): void
                /**
                 * Determines whether or not the root node from
                 * the TreeModel is visible.
                 * @param rootVisible true if the root node of the tree is to be displayed
                 * @see #rootVisible
                 */
                // @ts-ignore
                setRootVisible(rootVisible: boolean): void
                /**
                 * Sets the height of each cell. If rowHeight is less than or equal to
                 * 0 this will throw an IllegalArgumentException.
                 * @param rowHeight the height of each cell, in pixels
                 */
                // @ts-ignore
                setRowHeight(rowHeight: number /*int*/): void
                /**
                 * Returns the number of visible rows.
                 */
                // @ts-ignore
                getRowCount(): int
                /**
                 * Does nothing, FixedHeightLayoutCache doesn't cache width, and that
                 * is all that could change.
                 */
                // @ts-ignore
                invalidatePathBounds(path: javax.swing.tree.TreePath): void
                /**
                 * Informs the TreeState that it needs to recalculate all the sizes
                 * it is referencing.
                 */
                // @ts-ignore
                invalidateSizes(): void
                /**
                 * Returns true if the value identified by row is currently expanded.
                 */
                // @ts-ignore
                isExpanded(path: javax.swing.tree.TreePath): boolean
                /**
                 * Returns a rectangle giving the bounds needed to draw path.
                 * @param path     a TreePath specifying a node
                 * @param placeIn  a Rectangle object giving the available space
                 * @return a Rectangle object specifying the space to be used
                 */
                // @ts-ignore
                getBounds(path: javax.swing.tree.TreePath, placeIn: java.awt.Rectangle): java.awt.Rectangle
                /**
                 * Returns the path for passed in row.  If row is not visible
                 * null is returned.
                 */
                // @ts-ignore
                getPathForRow(row: number /*int*/): javax.swing.tree.TreePath
                /**
                 * Returns the row that the last item identified in path is visible
                 * at.  Will return -1 if any of the elements in path are not
                 * currently visible.
                 */
                // @ts-ignore
                getRowForPath(path: javax.swing.tree.TreePath): int
                /**
                 * Returns the path to the node that is closest to x,y.  If
                 * there is nothing currently visible this will return null, otherwise
                 * it'll always return a valid path.  If you need to test if the
                 * returned object is exactly at x, y you should get the bounds for
                 * the returned path and test x, y against that.
                 */
                // @ts-ignore
                getPathClosestTo(x: number /*int*/, y: number /*int*/): javax.swing.tree.TreePath
                /**
                 * Returns the number of visible children for row.
                 */
                // @ts-ignore
                getVisibleChildCount(path: javax.swing.tree.TreePath): int
                /**
                 * Returns an Enumerator that increments over the visible paths
                 * starting at the passed in location. The ordering of the enumeration
                 * is based on how the paths are displayed.
                 */
                // @ts-ignore
                getVisiblePathsFrom(path: javax.swing.tree.TreePath): java.util.Enumeration<javax.swing.tree.TreePath>
                /**
                 * Marks the path <code>path</code> expanded state to
                 * <code>isExpanded</code>.
                 */
                // @ts-ignore
                setExpandedState(path: javax.swing.tree.TreePath, isExpanded: boolean): void
                /**
                 * Returns true if the path is expanded, and visible.
                 */
                // @ts-ignore
                getExpandedState(path: javax.swing.tree.TreePath): boolean
                /**
                 * <p>Invoked after a node (or a set of siblings) has changed in some
                 * way. The node(s) have not changed locations in the tree or
                 * altered their children arrays, but other attributes have
                 * changed and may affect presentation. Example: the name of a
                 * file has changed, but it is in the same location in the file
                 * system.</p>
                 * <p>e.path() returns the path the parent of the changed node(s).</p>
                 * <p>e.childIndices() returns the index(es) of the changed node(s).</p>
                 */
                // @ts-ignore
                treeNodesChanged(e: javax.swing.event.TreeModelEvent): void
                /**
                 * <p>Invoked after nodes have been inserted into the tree.</p>
                 * <p>e.path() returns the parent of the new nodes
                 * <p>e.childIndices() returns the indices of the new nodes in
                 * ascending order.
                 */
                // @ts-ignore
                treeNodesInserted(e: javax.swing.event.TreeModelEvent): void
                /**
                 * <p>Invoked after nodes have been removed from the tree.  Note that
                 * if a subtree is removed from the tree, this method may only be
                 * invoked once for the root of the removed subtree, not once for
                 * each individual set of siblings removed.</p>
                 * <p>e.path() returns the former parent of the deleted nodes.</p>
                 * <p>e.childIndices() returns the indices the nodes had before they were deleted in ascending order.</p>
                 */
                // @ts-ignore
                treeNodesRemoved(e: javax.swing.event.TreeModelEvent): void
                /**
                 * <p>Invoked after the tree has drastically changed structure from a
                 * given node down.  If the path returned by e.getPath() is of length
                 * one and the first element does not identify the current root node
                 * the first element should become the new root of the tree.
                 * <p>e.path() holds the path to the node.</p>
                 * <p>e.childIndices() returns null.</p>
                 */
                // @ts-ignore
                treeStructureChanged(e: javax.swing.event.TreeModelEvent): void
            }
        }
    }
}
