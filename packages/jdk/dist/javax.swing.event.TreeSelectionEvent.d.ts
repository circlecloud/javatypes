declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * An event that characterizes a change in the current
             * selection.  The change is based on any number of paths.
             * TreeSelectionListeners will generally query the source of
             * the event for the new selected status of each potentially
             * changed row.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @see TreeSelectionListener
             * @see javax.swing.tree.TreeSelectionModel
             * @author Scott Violet
             */
            // @ts-ignore
            class TreeSelectionEvent extends java.util.EventObject {
                /**
                 * Represents a change in the selection of a TreeSelectionModel.
                 * paths identifies the paths that have been either added or
                 * removed from the selection.
                 * @param source source of event
                 * @param paths the paths that have changed in the selection
                 */
                // @ts-ignore
                constructor(source: java.lang.Object | any, paths: javax.swing.tree.TreePath[], areNew: boolean[], oldLeadSelectionPath: javax.swing.tree.TreePath, newLeadSelectionPath: javax.swing.tree.TreePath)
                /**
                 * Represents a change in the selection of a TreeSelectionModel.
                 * path identifies the path that have been either added or
                 * removed from the selection.
                 * @param source source of event
                 * @param path the path that has changed in the selection
                 * @param isNew whether or not the path is new to the selection, false
                 *  means path was removed from the selection.
                 */
                // @ts-ignore
                constructor(source: java.lang.Object | any, path: javax.swing.tree.TreePath, isNew: boolean, oldLeadSelectionPath: javax.swing.tree.TreePath, newLeadSelectionPath: javax.swing.tree.TreePath)
                /**
                 * Paths this event represents.
                 */
                // @ts-ignore
                paths: javax.swing.tree.TreePath[]
                /**
                 * For each path identifies if that path is in fact new.
                 */
                // @ts-ignore
                areNew: boolean[]
                /**
                 * leadSelectionPath before the paths changed, may be null.
                 */
                // @ts-ignore
                oldLeadSelectionPath: javax.swing.tree.TreePath
                /**
                 * leadSelectionPath after the paths changed, may be null.
                 */
                // @ts-ignore
                newLeadSelectionPath: javax.swing.tree.TreePath
                /**
                 * Returns the paths that have been added or removed from the
                 * selection.
                 */
                // @ts-ignore
                public getPaths(): javax.swing.tree.TreePath[]
                /**
                 * Returns the first path element.
                 */
                // @ts-ignore
                public getPath(): javax.swing.tree.TreePath
                /**
                 * Returns whether the path identified by {@code getPath} was
                 * added to the selection.  A return value of {@code true}
                 * indicates the path identified by {@code getPath} was added to
                 * the selection. A return value of {@code false} indicates {@code
                 * getPath} was selected, but is no longer selected.
                 * @return {#code true} if {@code getPath} was added to the selection,
                 *          {@code false} otherwise
                 */
                // @ts-ignore
                public isAddedPath(): boolean
                /**
                 * Returns whether the specified path was added to the selection.
                 * A return value of {@code true} indicates the path identified by
                 * {@code path} was added to the selection. A return value of
                 * {@code false} indicates {@code path} is no longer selected. This method
                 * is only valid for the paths returned from {@code getPaths()}; invoking
                 * with a path not included in {@code getPaths()} throws an
                 * {@code IllegalArgumentException}.
                 * @param path the path to test
                 * @return {#code true} if {@code path} was added to the selection,
                 *          {@code false} otherwise
                 * @throws IllegalArgumentException if {#code path} is not contained
                 *          in {@code getPaths}
                 * @see #getPaths
                 */
                // @ts-ignore
                public isAddedPath(path: javax.swing.tree.TreePath): boolean
                /**
                 * Returns whether the path at {@code getPaths()[index]} was added
                 * to the selection.  A return value of {@code true} indicates the
                 * path was added to the selection. A return value of {@code false}
                 * indicates the path is no longer selected.
                 * @param index the index of the path to test
                 * @return {#code true} if the path was added to the selection,
                 *          {@code false} otherwise
                 * @throws IllegalArgumentException if index is outside the range of
                 *          {#code getPaths}
                 * @see #getPaths
                 * @since 1.3
                 */
                // @ts-ignore
                public isAddedPath(index: number /*int*/): boolean
                /**
                 * Returns the path that was previously the lead path.
                 */
                // @ts-ignore
                public getOldLeadSelectionPath(): javax.swing.tree.TreePath
                /**
                 * Returns the current lead path.
                 */
                // @ts-ignore
                public getNewLeadSelectionPath(): javax.swing.tree.TreePath
                /**
                 * Returns a copy of the receiver, but with the source being newSource.
                 */
                // @ts-ignore
                public cloneWithSource(newSource: java.lang.Object | any): any
            }
        }
    }
}
