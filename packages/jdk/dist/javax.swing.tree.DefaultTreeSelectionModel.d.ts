declare namespace javax {
    namespace swing {
        namespace tree {
            /**
             * Default implementation of TreeSelectionModel.  Listeners are notified
             * whenever
             * the paths in the selection change, not the rows. In order
             * to be able to track row changes you may wish to become a listener
             * for expansion events on the tree and test for changes from there.
             * <p>resetRowSelection is called from any of the methods that update
             * the selected paths. If you subclass any of these methods to
             * filter what is allowed to be selected, be sure and message
             * <code>resetRowSelection</code> if you do not message super.
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @see javax.swing.JTree
             * @author Scott Violet
             */
            // @ts-ignore
            class DefaultTreeSelectionModel extends java.lang.Object implements java.lang.Cloneable, java.io.Serializable, javax.swing.tree.TreeSelectionModel {
                /**
                 * Creates a new instance of DefaultTreeSelectionModel that is
                 * empty, with a selection mode of DISCONTIGUOUS_TREE_SELECTION.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Property name for selectionMode.
                 */
                // @ts-ignore
                public static readonly SELECTION_MODE_PROPERTY: java.lang.String | string
                /**
                 * Used to messaged registered listeners.
                 */
                // @ts-ignore
                changeSupport: javax.swing.event.SwingPropertyChangeSupport
                /**
                 * Paths that are currently selected.  Will be null if nothing is
                 * currently selected.
                 */
                // @ts-ignore
                selection: javax.swing.tree.TreePath[]
                /**
                 * Event listener list.
                 */
                // @ts-ignore
                listenerList: javax.swing.event.EventListenerList
                /**
                 * Provides a row for a given path.
                 */
                // @ts-ignore
                rowMapper: javax.swing.tree.RowMapper
                /**
                 * Handles maintaining the list selection model. The RowMapper is used
                 * to map from a TreePath to a row, and the value is then placed here.
                 */
                // @ts-ignore
                listSelectionModel: javax.swing.DefaultListSelectionModel
                /**
                 * Mode for the selection, will be either SINGLE_TREE_SELECTION,
                 * CONTIGUOUS_TREE_SELECTION or DISCONTIGUOUS_TREE_SELECTION.
                 */
                // @ts-ignore
                selectionMode: number /*int*/
                /**
                 * Last path that was added.
                 */
                // @ts-ignore
                leadPath: javax.swing.tree.TreePath
                /**
                 * Index of the lead path in selection.
                 */
                // @ts-ignore
                leadIndex: number /*int*/
                /**
                 * Lead row.
                 */
                // @ts-ignore
                leadRow: number /*int*/
                /**
                 * Sets the RowMapper instance. This instance is used to determine
                 * the row for a particular TreePath.
                 */
                // @ts-ignore
                public setRowMapper(newMapper: javax.swing.tree.RowMapper): void
                /**
                 * Returns the RowMapper instance that is able to map a TreePath to a
                 * row.
                 */
                // @ts-ignore
                public getRowMapper(): javax.swing.tree.RowMapper
                /**
                 * Sets the selection model, which must be one of SINGLE_TREE_SELECTION,
                 * CONTIGUOUS_TREE_SELECTION or DISCONTIGUOUS_TREE_SELECTION. If mode
                 * is not one of the defined value,
                 * <code>DISCONTIGUOUS_TREE_SELECTION</code> is assumed.
                 * <p>This may change the selection if the current selection is not valid
                 * for the new mode. For example, if three TreePaths are
                 * selected when the mode is changed to <code>SINGLE_TREE_SELECTION</code>,
                 * only one TreePath will remain selected. It is up to the particular
                 * implementation to decide what TreePath remains selected.
                 * <p>
                 * Setting the mode to something other than the defined types will
                 * result in the mode becoming <code>DISCONTIGUOUS_TREE_SELECTION</code>.
                 */
                // @ts-ignore
                public setSelectionMode(mode: number /*int*/): void
                /**
                 * Returns the selection mode, one of <code>SINGLE_TREE_SELECTION</code>,
                 * <code>DISCONTIGUOUS_TREE_SELECTION</code> or
                 * <code>CONTIGUOUS_TREE_SELECTION</code>.
                 */
                // @ts-ignore
                public getSelectionMode(): number /*int*/
                /**
                 * Sets the selection to path. If this represents a change, then
                 * the TreeSelectionListeners are notified. If <code>path</code> is
                 * null, this has the same effect as invoking <code>clearSelection</code>.
                 * @param path new path to select
                 */
                // @ts-ignore
                public setSelectionPath(path: javax.swing.tree.TreePath): void
                /**
                 * Sets the selection. Whether the supplied paths are taken as the
                 * new selection depends upon the selection mode. If the supplied
                 * array is {@code null}, or empty, the selection is cleared. If
                 * the selection mode is {@code SINGLE_TREE_SELECTION}, only the
                 * first path in {@code pPaths} is used. If the selection
                 * mode is {@code CONTIGUOUS_TREE_SELECTION} and the supplied paths
                 * are not contiguous, then only the first path in {@code pPaths} is
                 * used. If the selection mode is
                 * {@code DISCONTIGUOUS_TREE_SELECTION}, then all paths are used.
                 * <p>
                 * All {@code null} paths in {@code pPaths} are ignored.
                 * <p>
                 * If this represents a change, all registered {@code
                 * TreeSelectionListener}s are notified.
                 * <p>
                 * The lead path is set to the last unique path.
                 * <p>
                 * The paths returned from {@code getSelectionPaths} are in the same
                 * order as those supplied to this method.
                 * @param pPaths the new selection
                 */
                // @ts-ignore
                public setSelectionPaths(pPaths: javax.swing.tree.TreePath[]): void
                /**
                 * Adds path to the current selection. If path is not currently
                 * in the selection the TreeSelectionListeners are notified. This has
                 * no effect if <code>path</code> is null.
                 * @param path the new path to add to the current selection
                 */
                // @ts-ignore
                public addSelectionPath(path: javax.swing.tree.TreePath): void
                /**
                 * Adds paths to the current selection. If any of the paths in
                 * paths are not currently in the selection the TreeSelectionListeners
                 * are notified. This has
                 * no effect if <code>paths</code> is null.
                 * <p>The lead path is set to the last element in <code>paths</code>.
                 * <p>If the selection mode is <code>CONTIGUOUS_TREE_SELECTION</code>,
                 * and adding the new paths would make the selection discontiguous.
                 * Then two things can result: if the TreePaths in <code>paths</code>
                 * are contiguous, then the selection becomes these TreePaths,
                 * otherwise the TreePaths aren't contiguous and the selection becomes
                 * the first TreePath in <code>paths</code>.
                 * @param paths the new path to add to the current selection
                 */
                // @ts-ignore
                public addSelectionPaths(paths: javax.swing.tree.TreePath[]): void
                /**
                 * Removes path from the selection. If path is in the selection
                 * The TreeSelectionListeners are notified. This has no effect if
                 * <code>path</code> is null.
                 * @param path the path to remove from the selection
                 */
                // @ts-ignore
                public removeSelectionPath(path: javax.swing.tree.TreePath): void
                /**
                 * Removes paths from the selection.  If any of the paths in paths
                 * are in the selection the TreeSelectionListeners are notified.
                 * This has no effect if <code>paths</code> is null.
                 * @param paths the paths to remove from the selection
                 */
                // @ts-ignore
                public removeSelectionPaths(paths: javax.swing.tree.TreePath[]): void
                /**
                 * Returns the first path in the selection. This is useful if there
                 * if only one item currently selected.
                 */
                // @ts-ignore
                public getSelectionPath(): javax.swing.tree.TreePath
                /**
                 * Returns the selection.
                 * @return the selection
                 */
                // @ts-ignore
                public getSelectionPaths(): javax.swing.tree.TreePath[]
                /**
                 * Returns the number of paths that are selected.
                 */
                // @ts-ignore
                public getSelectionCount(): number /*int*/
                /**
                 * Returns true if the path, <code>path</code>,
                 * is in the current selection.
                 */
                // @ts-ignore
                public isPathSelected(path: javax.swing.tree.TreePath): boolean
                /**
                 * Returns true if the selection is currently empty.
                 */
                // @ts-ignore
                public isSelectionEmpty(): boolean
                /**
                 * Empties the current selection.  If this represents a change in the
                 * current selection, the selection listeners are notified.
                 */
                // @ts-ignore
                public clearSelection(): void
                /**
                 * Adds x to the list of listeners that are notified each time the
                 * set of selected TreePaths changes.
                 * @param x the new listener to be added
                 */
                // @ts-ignore
                public addTreeSelectionListener(x: javax.swing.event.TreeSelectionListener): void
                /**
                 * Removes x from the list of listeners that are notified each time
                 * the set of selected TreePaths changes.
                 * @param x the listener to remove
                 */
                // @ts-ignore
                public removeTreeSelectionListener(x: javax.swing.event.TreeSelectionListener): void
                /**
                 * Returns an array of all the tree selection listeners
                 * registered on this model.
                 * @return all of this model's <code>TreeSelectionListener</code>s
                 *          or an empty
                 *          array if no tree selection listeners are currently registered
                 * @see #addTreeSelectionListener
                 * @see #removeTreeSelectionListener
                 * @since 1.4
                 */
                // @ts-ignore
                public getTreeSelectionListeners(): javax.swing.event.TreeSelectionListener[]
                /**
                 * Notifies all listeners that are registered for
                 * tree selection events on this object.
                 * @see #addTreeSelectionListener
                 * @see EventListenerList
                 */
                // @ts-ignore
                fireValueChanged(e: javax.swing.event.TreeSelectionEvent): void
                /**
                 * Returns an array of all the objects currently registered
                 * as <code><em>Foo</em>Listener</code>s
                 * upon this model.
                 * <code><em>Foo</em>Listener</code>s are registered using the
                 * <code>add<em>Foo</em>Listener</code> method.
                 * <p>
                 * You can specify the <code>listenerType</code> argument
                 * with a class literal,
                 * such as
                 * <code><em>Foo</em>Listener.class</code>.
                 * For example, you can query a
                 * <code>DefaultTreeSelectionModel</code> <code>m</code>
                 * for its tree selection listeners with the following code:
                 * <pre>TreeSelectionListener[] tsls = (TreeSelectionListener[])(m.getListeners(TreeSelectionListener.class));</pre>
                 * If no such listeners exist, this method returns an empty array.
                 * @param listenerType the type of listeners requested; this parameter
                 *           should specify an interface that descends from
                 *           <code>java.util.EventListener</code>
                 * @return an array of all objects registered as
                 *           <code><em>Foo</em>Listener</code>s on this component,
                 *           or an empty array if no such
                 *           listeners have been added
                 * @exception ClassCastException if <code>listenerType</code>
                 *           doesn't specify a class or interface that implements
                 *           <code>java.util.EventListener</code>
                 * @see #getTreeSelectionListeners
                 * @see #getPropertyChangeListeners
                 * @since 1.3
                 */
                // @ts-ignore
                public getListeners<T extends java.util.EventListener>(listenerType: java.lang.Class<T>): T
                /**
                 * Returns the selection in terms of rows. There is not
                 * necessarily a one-to-one mapping between the {@code TreePath}s
                 * returned from {@code getSelectionPaths} and this method. In
                 * particular, if a {@code TreePath} is not viewable (the {@code
                 * RowMapper} returns {@code -1} for the row corresponding to the
                 * {@code TreePath}), then the corresponding row is not included
                 * in the returned array. For example, if the selection consists
                 * of two paths, {@code A} and {@code B}, with {@code A} at row
                 * {@code 10}, and {@code B} not currently viewable, then this method
                 * returns an array with the single entry {@code 10}.
                 * @return the selection in terms of rows
                 */
                // @ts-ignore
                public getSelectionRows(): number /*int*/[]
                /**
                 * Returns the smallest value obtained from the RowMapper for the
                 * current set of selected TreePaths. If nothing is selected,
                 * or there is no RowMapper, this will return -1.
                 */
                // @ts-ignore
                public getMinSelectionRow(): number /*int*/
                /**
                 * Returns the largest value obtained from the RowMapper for the
                 * current set of selected TreePaths. If nothing is selected,
                 * or there is no RowMapper, this will return -1.
                 */
                // @ts-ignore
                public getMaxSelectionRow(): number /*int*/
                /**
                 * Returns true if the row identified by <code>row</code> is selected.
                 */
                // @ts-ignore
                public isRowSelected(row: number /*int*/): boolean
                /**
                 * Updates this object's mapping from TreePath to rows. This should
                 * be invoked when the mapping from TreePaths to integers has changed
                 * (for example, a node has been expanded).
                 * <p>You do not normally have to call this, JTree and its associated
                 * Listeners will invoke this for you. If you are implementing your own
                 * View class, then you will have to invoke this.
                 * <p>This will invoke <code>insureRowContinuity</code> to make sure
                 * the currently selected TreePaths are still valid based on the
                 * selection mode.
                 */
                // @ts-ignore
                public resetRowSelection(): void
                /**
                 * Returns the lead selection index. That is the last index that was
                 * added.
                 */
                // @ts-ignore
                public getLeadSelectionRow(): number /*int*/
                /**
                 * Returns the last path that was added. This may differ from the
                 * leadSelectionPath property maintained by the JTree.
                 */
                // @ts-ignore
                public getLeadSelectionPath(): javax.swing.tree.TreePath
                /**
                 * Adds a PropertyChangeListener to the listener list.
                 * The listener is registered for all properties.
                 * <p>
                 * A PropertyChangeEvent will get fired when the selection mode
                 * changes.
                 * @param listener  the PropertyChangeListener to be added
                 */
                // @ts-ignore
                public addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                /**
                 * Removes a PropertyChangeListener from the listener list.
                 * This removes a PropertyChangeListener that was registered
                 * for all properties.
                 * @param listener  the PropertyChangeListener to be removed
                 */
                // @ts-ignore
                public removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                /**
                 * Returns an array of all the property change listeners
                 * registered on this <code>DefaultTreeSelectionModel</code>.
                 * @return all of this model's <code>PropertyChangeListener</code>s
                 *          or an empty
                 *          array if no property change listeners are currently registered
                 * @see #addPropertyChangeListener
                 * @see #removePropertyChangeListener
                 * @since 1.4
                 */
                // @ts-ignore
                public getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
                /**
                 * Makes sure the currently selected <code>TreePath</code>s are valid
                 * for the current selection mode.
                 * If the selection mode is <code>CONTIGUOUS_TREE_SELECTION</code>
                 * and a <code>RowMapper</code> exists, this will make sure all
                 * the rows are contiguous, that is, when sorted all the rows are
                 * in order with no gaps.
                 * If the selection isn't contiguous, the selection is
                 * reset to contain the first set, when sorted, of contiguous rows.
                 * <p>
                 * If the selection mode is <code>SINGLE_TREE_SELECTION</code> and
                 * more than one TreePath is selected, the selection is reset to
                 * contain the first path currently selected.
                 */
                // @ts-ignore
                insureRowContinuity(): void
                /**
                 * Returns true if the paths are contiguous,
                 * or this object has no RowMapper.
                 */
                // @ts-ignore
                arePathsContiguous(paths: javax.swing.tree.TreePath[]): boolean
                /**
                 * Used to test if a particular set of <code>TreePath</code>s can
                 * be added. This will return true if <code>paths</code> is null (or
                 * empty), or this object has no RowMapper, or nothing is currently selected,
                 * or the selection mode is <code>DISCONTIGUOUS_TREE_SELECTION</code>, or
                 * adding the paths to the current selection still results in a
                 * contiguous set of <code>TreePath</code>s.
                 */
                // @ts-ignore
                canPathsBeAdded(paths: javax.swing.tree.TreePath[]): boolean
                /**
                 * Returns true if the paths can be removed without breaking the
                 * continuity of the model.
                 * This is rather expensive.
                 */
                // @ts-ignore
                canPathsBeRemoved(paths: javax.swing.tree.TreePath[]): boolean
                /**
                 * Notifies listeners of a change in path. changePaths should contain
                 * instances of PathPlaceHolder.
                 * @deprecated As of JDK version 1.7
                 */
                // @ts-ignore
                notifyPathChange(changedPaths: java.util.Vector<any>, oldLeadSelection: javax.swing.tree.TreePath): void
                /**
                 * Updates the leadIndex instance variable.
                 */
                // @ts-ignore
                updateLeadIndex(): void
                /**
                 * This method is obsolete and its implementation is now a noop.  It's
                 * still called by setSelectionPaths and addSelectionPaths, but only
                 * for backwards compatibility.
                 */
                // @ts-ignore
                insureUniqueness(): void
                /**
                 * Returns a string that displays and identifies this
                 * object's properties.
                 * @return a String representation of this object
                 */
                // @ts-ignore
                public toString(): string
                /**
                 * Returns a clone of this object with the same selection.
                 * This method does not duplicate
                 * selection listeners and property listeners.
                 * @exception CloneNotSupportedException never thrown by instances of
                 *                                        this class
                 */
                // @ts-ignore
                public clone(): any
            }
        }
    }
}
