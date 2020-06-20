declare namespace javax {
    namespace swing {
        namespace plaf {
            /**
             * Pluggable look and feel interface for JTree.
             * @author Rob Davis
             * @author Scott Violet
             */
            // @ts-ignore
            class TreeUI extends javax.swing.plaf.ComponentUI {
                // @ts-ignore
                constructor()
                /**
                 * Returns the Rectangle enclosing the label portion that the
                 * last item in path will be drawn into.  Will return null if
                 * any component in path is currently valid.
                 */
                // @ts-ignore
                abstract getPathBounds(tree: javax.swing.JTree, path: javax.swing.tree.TreePath): java.awt.Rectangle
                /**
                 * Returns the path for passed in row.  If row is not visible
                 * null is returned.
                 */
                // @ts-ignore
                abstract getPathForRow(tree: javax.swing.JTree, row: number /*int*/): javax.swing.tree.TreePath
                /**
                 * Returns the row that the last item identified in path is visible
                 * at.  Will return -1 if any of the elements in path are not
                 * currently visible.
                 */
                // @ts-ignore
                abstract getRowForPath(tree: javax.swing.JTree, path: javax.swing.tree.TreePath): int
                /**
                 * Returns the number of rows that are being displayed.
                 */
                // @ts-ignore
                abstract getRowCount(tree: javax.swing.JTree): int
                /**
                 * Returns the path to the node that is closest to x,y.  If
                 * there is nothing currently visible this will return null, otherwise
                 * it'll always return a valid path.  If you need to test if the
                 * returned object is exactly at x, y you should get the bounds for
                 * the returned path and test x, y against that.
                 */
                // @ts-ignore
                abstract getClosestPathForLocation(tree: javax.swing.JTree, x: number /*int*/, y: number /*int*/): javax.swing.tree.TreePath
                /**
                 * Returns true if the tree is being edited.  The item that is being
                 * edited can be returned by getEditingPath().
                 */
                // @ts-ignore
                abstract isEditing(tree: javax.swing.JTree): boolean
                /**
                 * Stops the current editing session.  This has no effect if the
                 * tree isn't being edited.  Returns true if the editor allows the
                 * editing session to stop.
                 */
                // @ts-ignore
                abstract stopEditing(tree: javax.swing.JTree): boolean
                /**
                 * Cancels the current editing session. This has no effect if the
                 * tree isn't being edited.  Returns true if the editor allows the
                 * editing session to stop.
                 */
                // @ts-ignore
                abstract cancelEditing(tree: javax.swing.JTree): void
                /**
                 * Selects the last item in path and tries to edit it.  Editing will
                 * fail if the CellEditor won't allow it for the selected item.
                 */
                // @ts-ignore
                abstract startEditingAtPath(tree: javax.swing.JTree, path: javax.swing.tree.TreePath): void
                /**
                 * Returns the path to the element that is being edited.
                 */
                // @ts-ignore
                abstract getEditingPath(tree: javax.swing.JTree): javax.swing.tree.TreePath
            }
        }
    }
}
