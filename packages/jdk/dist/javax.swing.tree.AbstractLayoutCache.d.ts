declare namespace javax {
    namespace swing {
        namespace tree {
            /**
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
            abstract class AbstractLayoutCache extends java.lang.Object implements javax.swing.tree.RowMapper {
                // @ts-ignore
                constructor()
                /**
                 * Object responsible for getting the size of a node.
                 */
                // @ts-ignore
                nodeDimensions: javax.swing.tree.AbstractLayoutCache.NodeDimensions
                /**
                 * Model providing information.
                 */
                // @ts-ignore
                treeModel: javax.swing.tree.TreeModel
                /**
                 * Selection model.
                 */
                // @ts-ignore
                treeSelectionModel: javax.swing.tree.TreeSelectionModel
                /**
                 * True if the root node is displayed, false if its children are
                 * the highest visible nodes.
                 */
                // @ts-ignore
                rootVisible: boolean
                /**
                 * Height to use for each row.  If this is &lt;= 0 the renderer will be
                 * used to determine the height for each row.
                 */
                // @ts-ignore
                rowHeight: number /*int*/
                /**
                 * Sets the renderer that is responsible for drawing nodes in the tree
                 * and which is therefore responsible for calculating the dimensions of
                 * individual nodes.
                 * @param nd a <code>NodeDimensions</code> object
                 */
                // @ts-ignore
                public setNodeDimensions(nd: javax.swing.tree.AbstractLayoutCache.NodeDimensions): void
                /**
                 * Returns the object that renders nodes in the tree, and which is
                 * responsible for calculating the dimensions of individual nodes.
                 * @return the <code>NodeDimensions</code> object
                 */
                // @ts-ignore
                public getNodeDimensions(): javax.swing.tree.AbstractLayoutCache.NodeDimensions
                /**
                 * Sets the <code>TreeModel</code> that will provide the data.
                 * @param newModel the <code>TreeModel</code> that is to
                 *           provide the data
                 */
                // @ts-ignore
                public setModel(newModel: javax.swing.tree.TreeModel): void
                /**
                 * Returns the <code>TreeModel</code> that is providing the data.
                 * @return the <code>TreeModel</code> that is providing the data
                 */
                // @ts-ignore
                public getModel(): javax.swing.tree.TreeModel
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
                public setRootVisible(rootVisible: boolean): void
                /**
                 * Returns true if the root node of the tree is displayed.
                 * @return true if the root node of the tree is displayed
                 * @see #rootVisible
                 */
                // @ts-ignore
                public isRootVisible(): boolean
                /**
                 * Sets the height of each cell.  If the specified value
                 * is less than or equal to zero the current cell renderer is
                 * queried for each row's height.
                 * @param rowHeight the height of each cell, in pixels
                 * @beaninfo bound: true
                 *   description: The height of each cell.
                 */
                // @ts-ignore
                public setRowHeight(rowHeight: number /*int*/): void
                /**
                 * Returns the height of each row.  If the returned value is less than
                 * or equal to 0 the height for each row is determined by the
                 * renderer.
                 */
                // @ts-ignore
                public getRowHeight(): number /*int*/
                /**
                 * Sets the <code>TreeSelectionModel</code> used to manage the
                 * selection to new LSM.
                 * @param newLSM  the new <code>TreeSelectionModel</code>
                 */
                // @ts-ignore
                public setSelectionModel(newLSM: javax.swing.tree.TreeSelectionModel): void
                /**
                 * Returns the model used to maintain the selection.
                 * @return the <code>treeSelectionModel</code>
                 */
                // @ts-ignore
                public getSelectionModel(): javax.swing.tree.TreeSelectionModel
                /**
                 * Returns the preferred height.
                 * @return the preferred height
                 */
                // @ts-ignore
                public getPreferredHeight(): number /*int*/
                /**
                 * Returns the preferred width for the passed in region.
                 * The region is defined by the path closest to
                 * <code>(bounds.x, bounds.y)</code> and
                 * ends at <code>bounds.height + bounds.y</code>.
                 * If <code>bounds</code> is <code>null</code>,
                 * the preferred width for all the nodes
                 * will be returned (and this may be a VERY expensive
                 * computation).
                 * @param bounds the region being queried
                 * @return the preferred width for the passed in region
                 */
                // @ts-ignore
                public getPreferredWidth(bounds: java.awt.Rectangle): number /*int*/
                /**
                 * Returns true if the value identified by row is currently expanded.
                 */
                // @ts-ignore
                public abstract isExpanded(path: javax.swing.tree.TreePath): boolean
                /**
                 * Returns a rectangle giving the bounds needed to draw path.
                 * @param path     a <code>TreePath</code> specifying a node
                 * @param placeIn  a <code>Rectangle</code> object giving the
                 *           available space
                 * @return a <code>Rectangle</code> object specifying the space to be used
                 */
                // @ts-ignore
                public abstract getBounds(path: javax.swing.tree.TreePath, placeIn: java.awt.Rectangle): java.awt.Rectangle
                /**
                 * Returns the path for passed in row.  If row is not visible
                 * <code>null</code> is returned.
                 * @param row  the row being queried
                 * @return the <code>TreePath</code> for the given row
                 */
                // @ts-ignore
                public abstract getPathForRow(row: number /*int*/): javax.swing.tree.TreePath
                /**
                 * Returns the row that the last item identified in path is visible
                 * at.  Will return -1 if any of the elements in path are not
                 * currently visible.
                 * @param path the <code>TreePath</code> being queried
                 * @return the row where the last item in path is visible or -1
                 *          if any elements in path aren't currently visible
                 */
                // @ts-ignore
                public abstract getRowForPath(path: javax.swing.tree.TreePath): number /*int*/
                /**
                 * Returns the path to the node that is closest to x,y.  If
                 * there is nothing currently visible this will return <code>null</code>,
                 * otherwise it'll always return a valid path.
                 * If you need to test if the
                 * returned object is exactly at x, y you should get the bounds for
                 * the returned path and test x, y against that.
                 * @param x the horizontal component of the desired location
                 * @param y the vertical component of the desired location
                 * @return the <code>TreePath</code> closest to the specified point
                 */
                // @ts-ignore
                public abstract getPathClosestTo(x: number /*int*/, y: number /*int*/): javax.swing.tree.TreePath
                /**
                 * Returns an <code>Enumerator</code> that increments over the visible
                 * paths starting at the passed in location. The ordering of the
                 * enumeration is based on how the paths are displayed.
                 * The first element of the returned enumeration will be path,
                 * unless it isn't visible,
                 * in which case <code>null</code> will be returned.
                 * @param path the starting location for the enumeration
                 * @return the <code>Enumerator</code> starting at the desired location
                 */
                // @ts-ignore
                public abstract getVisiblePathsFrom(path: javax.swing.tree.TreePath): java.util.Enumeration<javax.swing.tree.TreePath>
                /**
                 * Returns the number of visible children for row.
                 * @param path  the path being queried
                 * @return the number of visible children for the specified path
                 */
                // @ts-ignore
                public abstract getVisibleChildCount(path: javax.swing.tree.TreePath): number /*int*/
                /**
                 * Marks the path <code>path</code> expanded state to
                 * <code>isExpanded</code>.
                 * @param path  the path being expanded or collapsed
                 * @param isExpanded true if the path should be expanded, false otherwise
                 */
                // @ts-ignore
                public abstract setExpandedState(path: javax.swing.tree.TreePath, isExpanded: boolean): void
                /**
                 * Returns true if the path is expanded, and visible.
                 * @param path  the path being queried
                 * @return true if the path is expanded and visible, false otherwise
                 */
                // @ts-ignore
                public abstract getExpandedState(path: javax.swing.tree.TreePath): boolean
                /**
                 * Number of rows being displayed.
                 * @return the number of rows being displayed
                 */
                // @ts-ignore
                public abstract getRowCount(): number /*int*/
                /**
                 * Informs the <code>TreeState</code> that it needs to recalculate
                 * all the sizes it is referencing.
                 */
                // @ts-ignore
                public abstract invalidateSizes(): void
                /**
                 * Instructs the <code>LayoutCache</code> that the bounds for
                 * <code>path</code> are invalid, and need to be updated.
                 * @param path the path being updated
                 */
                // @ts-ignore
                public abstract invalidatePathBounds(path: javax.swing.tree.TreePath): void
                /**
                 * <p>
                 * Invoked after a node (or a set of siblings) has changed in some
                 * way. The node(s) have not changed locations in the tree or
                 * altered their children arrays, but other attributes have
                 * changed and may affect presentation. Example: the name of a
                 * file has changed, but it is in the same location in the file
                 * system.</p>
                 * <p>e.path() returns the path the parent of the changed node(s).</p>
                 * <p>e.childIndices() returns the index(es) of the changed node(s).</p>
                 * @param e  the <code>TreeModelEvent</code>
                 */
                // @ts-ignore
                public abstract treeNodesChanged(e: javax.swing.event.TreeModelEvent): void
                /**
                 * <p>Invoked after nodes have been inserted into the tree.</p>
                 * <p>e.path() returns the parent of the new nodes</p>
                 * <p>e.childIndices() returns the indices of the new nodes in
                 * ascending order.</p>
                 * @param e the <code>TreeModelEvent</code>
                 */
                // @ts-ignore
                public abstract treeNodesInserted(e: javax.swing.event.TreeModelEvent): void
                /**
                 * <p>Invoked after nodes have been removed from the tree.  Note that
                 * if a subtree is removed from the tree, this method may only be
                 * invoked once for the root of the removed subtree, not once for
                 * each individual set of siblings removed.</p>
                 * <p>e.path() returns the former parent of the deleted nodes.</p>
                 * <p>e.childIndices() returns the indices the nodes had before they were deleted in ascending order.</p>
                 * @param e the <code>TreeModelEvent</code>
                 */
                // @ts-ignore
                public abstract treeNodesRemoved(e: javax.swing.event.TreeModelEvent): void
                /**
                 * <p>Invoked after the tree has drastically changed structure from a
                 * given node down.  If the path returned by <code>e.getPath()</code>
                 * is of length one and the first element does not identify the
                 * current root node the first element should become the new root
                 * of the tree.</p>
                 * <p>e.path() holds the path to the node.</p>
                 * <p>e.childIndices() returns null.</p>
                 * @param e the <code>TreeModelEvent</code>
                 */
                // @ts-ignore
                public abstract treeStructureChanged(e: javax.swing.event.TreeModelEvent): void
                /**
                 * Returns the rows that the <code>TreePath</code> instances in
                 * <code>path</code> are being displayed at.
                 * This method should return an array of the same length as that passed
                 * in, and if one of the <code>TreePaths</code>
                 * in <code>path</code> is not valid its entry in the array should
                 * be set to -1.
                 * @param paths the array of <code>TreePath</code>s being queried
                 * @return an array of the same length that is passed in containing
                 *           the rows that each corresponding where each
                 *           <code>TreePath</code> is displayed; if <code>paths</code>
                 *           is <code>null</code>, <code>null</code> is returned
                 */
                // @ts-ignore
                public getRowsForPaths(paths: javax.swing.tree.TreePath[]): number /*int*/[]
                /**
                 * Returns, by reference in <code>placeIn</code>,
                 * the size needed to represent <code>value</code>.
                 * If <code>inPlace</code> is <code>null</code>, a newly created
                 * <code>Rectangle</code> should be returned, otherwise the value
                 * should be placed in <code>inPlace</code> and returned. This will
                 * return <code>null</code> if there is no renderer.
                 * @param value the <code>value</code> to be represented
                 * @param row  row being queried
                 * @param depth the depth of the row
                 * @param expanded true if row is expanded, false otherwise
                 * @param placeIn  a <code>Rectangle</code> containing the size needed
                 *           to represent <code>value</code>
                 * @return a <code>Rectangle</code> containing the node dimensions,
                 *           or <code>null</code> if node has no dimension
                 */
                // @ts-ignore
                getNodeDimensions(value: java.lang.Object | any, row: number /*int*/, depth: number /*int*/, expanded: boolean, placeIn: java.awt.Rectangle): java.awt.Rectangle
                /**
                 * Returns true if the height of each row is a fixed size.
                 */
                // @ts-ignore
                isFixedRowHeight(): boolean
            }
        }
    }
}
